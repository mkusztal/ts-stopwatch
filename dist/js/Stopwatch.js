class Stopwatch {
    constructor(element) {
        this.currentTime = 0;
        this.timer = null;
        this.dom = {};
        this.getElements(element);
        this.initActions();
        this.renderTime();
    }
    getElements(element) {
        this.dom = {
            currentTime: (element.querySelector(".stopwatch__current-time")),
            startBtn: (element.querySelector(".stopwatch__button.stopwatch__start-btn")),
            stopBtn: (element.querySelector(".stopwatch__button.stopwatch__stop-btn")),
            resetBtn: (element.querySelector(".stopwatch__button.stopwatch__reset-btn")),
        };
    }
    initActions() {
        this.dom.startBtn
            ? this.dom.startBtn.addEventListener("click", () => this.start())
            : null;
        this.dom.stopBtn
            ? this.dom.stopBtn.addEventListener("click", () => this.stop())
            : null;
        this.dom.resetBtn
            ? this.dom.resetBtn.addEventListener("click", () => this.reset())
            : null;
    }
    formatTime(time) {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = Math.floor(time % 60);
        const formattedHours = hours.toString().padStart(2, "0");
        const formattedMinutes = minutes.toString().padStart(2, "0");
        const formattedSeconds = seconds.toString().padStart(2, "0");
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
    renderTime() {
        this.dom.currentTime.innerHTML = this.formatTime(this.currentTime);
    }
    start() {
        this.dom.startBtn.disabled = true;
        this.timer = window.setInterval(() => {
            this.step();
        }, 1);
    }
    step() {
        this.currentTime += 1;
        this.renderTime();
    }
    stop() {
        this.dom.startBtn.disabled = false;
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
    reset() {
        this.currentTime = 0;
        this.renderTime();
    }
}
export default Stopwatch;
//# sourceMappingURL=Stopwatch.js.map