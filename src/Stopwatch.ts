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
        element.querySelector(".stopwatch__button stopwatch__start-btn")
      ),
      stopBtn: <HTMLButtonElement>(
        element.querySelector(".stopwatch__button stopwatch__stop-btn")
      ),
      resetBtn: <HTMLButtonElement>(
        element.querySelector(".stopwatch__button stopwatch__reset-btn")
      ),
    };
  }

  private initActions(): void {
    this.dom.startBtn.addEventListener("click", () => this.start());
    this.dom.stopBtn.addEventListener("click", () => this.stop());
    this.dom.resetBtn.addEventListener("click", () => this.reset());
  }

  protected formatTime(time: number): string {
    const pad = (num: number): string =>
      num < 10 ? `0${num}` : num.toString();

    const mm = Math.floor(time / 6000);
    const ss = Math.floor(time - (mm * 6000) / 1000);
    const ms = time - mm * 6000 - ss * 1000;

    return `${pad(mm)}:${pad(ss)}:${pad(ms).substr(0, 2)}`;
  }

  protected renderTime(): void {
    this.dom.currentTime.innerHTML = this.formatTime(this.currentTime);
  }

  protected start(): void {
    /*
    Funkcja ta powinna wystartować interwał, który będzie wykonywał się co milisekundę.
    Powinien on każdorazowo włączać funkcję this.step

    Dla wygody przypisz ten interwał do this.timer
    */
    this.timer = window.setInterval(() => {
      this.step();
    }, 1000);
  }

  protected step(): void {
    this.currentTime += 1;
    this.renderTime();
  }

  protected stop(): void {
    this.timer = window.setInterval(() => {
      this.currentTime;
    }, this.currentTime);
  }

  protected reset(): void {
    clearInterval(this.currentTime);
  }
}

export default Stopwatch;
