<template>
  <div class="page-container">
    <div class="mine-container">
      <canvas class="canvas"></canvas>
      <img class="mine-avatar" src="@/assets/images/sakurai.jpg" alt=""
           draggable="false"
           @click="clickAvatar">
      <transition name="custom-classes-transition"
                  enter-active-class="animated fadeInDown slow"
                  mode="out-in">
        <div v-show="showDes" class="desc-container">
          <p class="mine-desc">君に幸せを買っている誰かが傍に居るってこと、</p>
          <p class="mine-desc">忘れないで。</p>
        </div>
      </transition>
      <div class="spin-bg" :class="isReversed?'reverse':''">
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MainPage",
    data() {
      return {
        rotateDeg: 0,
        isRotating: false,
        isReversed: false,
        rotateInterval: null,
        showDes: false,
      }
    },
    mounted() {
      this.setRotate()
      window.onblur = function () {
        clearInterval(this.rotateInterval)
      }.bind(this)
      window.onfocus = function () {
        this.setRotate()
      }.bind(this)
      this.initCanvas()
    },
    beforeDestroy() {
      clearInterval(this.rotateInterval)
    },
    methods: {
      clickAvatar() {
        clearInterval(this.rotateInterval)
        this.rotateBackground()
        this.setRotate()
      },
      rotateBackground() {
        // 设置显示签名
        this.showDes = true

        if (this.isRotating) return
        let bg = document.querySelector('.spin-bg')
        this.rotateDeg = (this.rotateDeg + 180)
        bg.style.transform = `rotateZ(${this.rotateDeg}deg)`
        this.isRotating = true
        setTimeout(function () {
          this.isRotating = false
        }.bind(this), 750)
      },
      setRotate() {
        this.rotateInterval = setInterval(function () {
          this.rotateBackground()
        }.bind(this), 4000)
      },
      initCanvas() {
        const canvas = document.querySelector('canvas');
        const ctx = document.querySelector('canvas').getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Set waves opacities
        const wavesOpacities = [0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];

        // Set parameters
        const params = {
          AMPLITUDE_WAVES: canvas.height / 2,
          AMPLITUDE_MIDDLE: canvas.height / 5,
          AMPLITUDE_SIDES: canvas.height / 3,
          OFFSET_SPEED: 100,
          SPEED: 3,
          OFFSET_WAVES: 30,
          NUMBER_WAVES: 1,
          COLOR: ['#f8b500'],
          NUMBER_CURVES: 2,
          OFFSET_CURVE: true,
          RESET: false,
        };
        let speedInc = 0;

        const render = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;

          for (let j = params.NUMBER_WAVES - 1; j >= 0; j--) {
            // 波浪间的间距
            let offset = speedInc + j * Math.PI * params.OFFSET_WAVES;

            // 设置填充色和透明度
            ctx.fillStyle = params.COLOR[j];
            ctx.globalAlpha = wavesOpacities[j];

            // Speed amplitude variation between 0 and AMPLITUDE_SIDES ( half height window)
            // Set height amplitude of borders points (left and right of the window) -> no offset here
            let leftRange = ((Math.sin((offset / params.OFFSET_SPEED) + 2) + 1) / 2 * params.AMPLITUDE_SIDES) + (canvas.height - params.AMPLITUDE_SIDES) / 2;
            let rightRange = ((Math.sin((offset / params.OFFSET_SPEED) + 2) + 1) / 2 * params.AMPLITUDE_SIDES) + (canvas.height - params.AMPLITUDE_SIDES) / 2;

            // Speed amplitude variation between 0 and AMPLITUDE_WAVES ( height window)
            // Set height amplitude of the first and second points of a curve
            let leftCurveRange = (Math.sin((offset / params.OFFSET_SPEED) + 2) + 1) / 2 * params.AMPLITUDE_WAVES + (canvas.height - params.AMPLITUDE_WAVES) / 2;
            let rightCurveRange = (Math.sin((offset / params.OFFSET_SPEED) + 1) + 1) / 2 * params.AMPLITUDE_WAVES + (canvas.height - params.AMPLITUDE_WAVES) / 2;

            // Speed amplitude variation between 0 and AMPLITUDE_MIDDLE
            // Set height amplitude of the last point of a curve
            let endCurveRange = ((Math.sin((offset / params.OFFSET_SPEED) + 2) + 1) / 2 * params.AMPLITUDE_MIDDLE) + (canvas.height - params.AMPLITUDE_MIDDLE) / 2;

            // Reverse amplitude of the first and second points of a curve (only needed with 3 curves or more)
            let reverseLeftCurveRange = endCurveRange - rightCurveRange + endCurveRange;
            let reverseRightCurveRange = endCurveRange - leftCurveRange + endCurveRange;

            // Neutralise curves first and second point amplitude
            if (params.OFFSET_CURVE === false) {
              leftCurveRange = rightCurveRange;
              reverseRightCurveRange = reverseLeftCurveRange;
            }

            // 绘制路径
            ctx.beginPath();

            // Draw first point from Left
            ctx.moveTo(0, leftRange);

            // Draw bezier curves based on amplitude

            // Draw each points of the first curve
            // bezierCurveTo() see https://www.w3schools.com/TAGs/canvas_beziercurveto.asp
            ctx.bezierCurveTo(canvas.width / (params.NUMBER_CURVES * 3), leftCurveRange, canvas.width / (params.NUMBER_CURVES * 3 / 2), rightCurveRange, canvas.width / params.NUMBER_CURVES, endCurveRange);

            // Draw each points of other curves if needed
            for (let i = 1; i < params.NUMBER_CURVES; i++) {

              // Reverse waves amplitude 1 / 2 times
              const finalRightCurveRange = i % 2 !== 0 ? rightCurveRange : reverseRightCurveRange;
              const finalLeftCurveRange = i % 2 !== 0 ? leftCurveRange : reverseLeftCurveRange;

              // 设置点位
              const secondPtX = canvas.width * (i / params.NUMBER_CURVES) + canvas.width / (params.NUMBER_CURVES * 3);
              const secondPtY = endCurveRange - finalRightCurveRange + endCurveRange;
              const thirdPtX = canvas.width * (i / params.NUMBER_CURVES) + canvas.width * (2 / (params.NUMBER_CURVES * 3));
              const thirdPtY = endCurveRange - finalLeftCurveRange + endCurveRange;
              const lastPtX = canvas.width * ((i + 1) / params.NUMBER_CURVES);
              const lastPtY = i === params.NUMBER_CURVES - 1 ? rightRange : endCurveRange;

              ctx.bezierCurveTo(secondPtX, secondPtY, thirdPtX, thirdPtY, lastPtX, lastPtY);

            }

            // Draw last lines
            ctx.lineTo(canvas.width, canvas.height);
            ctx.lineTo(0, canvas.height);
            ctx.lineTo(0, rightRange);

            ctx.closePath();
            ctx.fill();
          }

          // Speed
          speedInc += params.SPEED;
        };

        setInterval(render, 1000 / 60)
      },
    },
  }
</script>

<style scoped>
  .page-container {
  }

  .mine-container {
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }

  .mine-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: calc(50% - 40px);
    left: calc(50% - 40px);
    z-index: 2;
    user-select: none;
  }

  .desc-container {
    position: relative;
    z-index: 0;
    margin-top: 150px;
  }

  .mine-desc {
    font-size: 13px;
    line-height: 1.8;
  }

  .spin-bg {
    position: absolute;
    width: 200%;
    height: 100%;
    margin: 0 auto;
    z-index: 1;
    transition: all 750ms ease-in-out;
    display: flex;
    flex-direction: column;
  }

  .spin-bg > div:first-child {
    background-color: transparent;
    flex: 1;
  }

  .spin-bg > div:last-child {
    background-color: #fff;
    flex: 1;
  }

  .canvas {
    background-color: #fceabb;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

</style>
