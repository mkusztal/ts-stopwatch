import Stopwatch from "./Stopwatch.js";
import { deprecated } from "./deprecated";

class StopwatchWithResults extends Stopwatch {
  protected results: string[] = [];

  constructor(element: HTMLDivElement) {
    super(element);
    this.prepareElements(element);
    this.prepareActions();
  }

  prepareElements(element: HTMLDivElement) {
    this.dom = {
      resultsList: <HTMLElement>(
        element.querySelector(".stopwatch__results .result_list")
      ),
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
    this.dom.resultsList.innerHTML = this.results.join("<br>");
  }

  @deprecated
  protected addToList(): void {
    if (this.currentTime === 0) {
      this.dom.resultsList.innerHTML = "First start timer!";
    } else {
      const currentTime = this.currentTime;
      const formattedTime = this.formatTime(currentTime);
      this.results.push(formattedTime);
      this.renderList();
    }
  }

  @deprecated
  protected resetList(): void {
    this.results.splice(0);
    this.dom.resultsList.innerHTML = "No results!";
    // this.renderList();
  }

  public getByParam(param: "name" | "age" | "gender") {
    console.log(param);
  }
}

export default StopwatchWithResults;
