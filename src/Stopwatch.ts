interface StopwatchDom {
  currentTime: HTMLDivElement;
  startBtn: HTMLButtonElement;
  stopBtn: HTMLButtonElement;
  resetBtn: HTMLButtonElement;
  [x: string]: HTMLElement;
}

abstract class Stopwatch {
  protected currentTime: number = 0;
  protected timer: number | null = null;
  protected dom = <StopwatchDom>{};

  constructor(element: HTMLDivElement) {
    this.getElements(element);
    this.initActions();
    this.renderTime();
  }

  private getElements(element: HTMLDivElement): void {
    this.dom = {
      currentTime: <HTMLDivElement>(
        element.querySelector(".stopwatch__current-time")
      ),
      startBtn: <HTMLButtonElement>(
        element.querySelector(".stopwatch__button.stopwatch__start-btn")
      ),
      stopBtn: <HTMLButtonElement>(
        element.querySelector(".stopwatch__button.stopwatch__stop-btn")
      ),
      resetBtn: <HTMLButtonElement>(
        element.querySelector(".stopwatch__button.stopwatch__reset-btn")
      ),
    };
  }

  public initActions(): void {
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

  protected formatTime(time: number): string {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  protected renderTime(): void {
    this.dom.currentTime.innerHTML = this.formatTime(this.currentTime);
  }

  protected start(): void {
    this.dom.startBtn.disabled = true;
    this.timer = window.setInterval(() => {
      this.step();
    }, 1);
  }

  protected step(): void {
    this.currentTime += 1;
    this.renderTime();
  }

  protected stop(): void {
    this.dom.startBtn.disabled = false;
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  protected reset(): void {
    this.currentTime = 0;
    this.renderTime();
  }
}

export default Stopwatch;
