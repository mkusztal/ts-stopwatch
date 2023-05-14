import Stopwatch from "./Stopwatch.js";

class StopwatchWithResults extends Stopwatch {
  protected results: string[] = [];

  constructor(element: HTMLDivElement) {
    super(element);
    this.prepareElements(element);
    this.prepareActions();
  }

  prepareElements(element: HTMLDivElement) {
    this.dom = {
      resultsList: <HTMLDivElement>element.querySelector(".stopwatch__results"),
      addToListBtn: <HTMLButtonElement>(
        element.querySelector(".stopwatch__button.stopwatch__add-to-list-btn")
      ),
      resetListBtn: <HTMLButtonElement>(
        element.querySelector(".stopwatch__button.stopwatch__reset-list-btn")
      ),
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

  private prepareActions(): void {
    this.dom.addToListBtn.addEventListener("click", () => this.addToList());
    this.dom.resetListBtn.addEventListener("click", () => this.resetList());
  }

  protected renderList(): void {
    this.dom.resultsList.innerHTML = "";
    this.dom.resultsList.innerHTML = this.results.join(" ");
  }

  protected addToList(): void {
    const currentTime = this.currentTime;
    const formattedTime = this.formatTime(currentTime);
    this.results.push(formattedTime);
    this.renderList();
  }

  protected resetList(): void {
    this.dom.resultsList.innerHTML = "";
    this.results.splice(0);
    this.renderList();
  }
}

export default StopwatchWithResults;
