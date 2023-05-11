import Stopwatch from "./Stopwatch.js";

class StopwatchWithResults extends Stopwatch {
  public results: number[] | null[] = [];

  constructor(element: HTMLDivElement) {
    super(element);
    this.prepareElements(element);
    this.prepareActions();
  }

  prepareElements(element: HTMLDivElement) {
    this.dom = {
      resultsList: <HTMLDivElement>element.querySelector(".stopwatch__results"),
      addToListBtn: <HTMLButtonElement>(
        element.querySelector(".stopwatch__start-add-to-list")
      ),
      resetListBtn: <HTMLButtonElement>(
        element.querySelector(".stopwatch__start-reset-list")
      ),
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

  private prepareActions(): void {
    /*
    Funkcja ta powinna dodawać nasłuchwiacze do buttonów this.dom.addToListBtn oraz this.dom.resetListBtn.
    Pierwszy powinien po kliknięciu uruchamiać metodę this.addToList, a druga this.resetList.
    */

    this.dom.addToListBtn.addEventListener("click", () => this.addToList());
    this.dom.removeListBtn.addEventListener("click", () => this.resetList());
  }

  protected renderList(): void {
    /*
    Funkcja ta powinna czyścić zawartość this.dom.resultsList, a następnie renderować w niej nowe elementy li
    na podstawie zawartości tablicy this.results. Każdy jej element powinien być renderowany bez żadnych zmian.

    np. <li>00:12:00</li>
    */
    this.dom.resultsList.innerHTML = "";
    this.dom.resultsList.innerHTML = this.results.join(" ");
  }

  private addToList(): void {
    /*
    Funkcja ta powinna pobierać aktualny czas z this.currentTime, formatować go i w takiej postaci zapisywać do tablicy this.results.
    Następnie powinna renderować aktualną listę na stronie (this.renderList).
    */
    this.formatTime(this.currentTime);
    this.renderList();
  }

  private resetList(): void {
    /*
    Funkcja ta powinna czyścić tablicę this.results oraz zawartość this.dom.resultsList
    */
    this.dom.resultsList.innerHTML = "";
    this.results.splice(0);
  }
}

export default StopwatchWithResults;
