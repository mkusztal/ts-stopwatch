import Stopwatch from "./Stopwatch.js";
class StopwatchWithResults extends Stopwatch {
    constructor(element) {
        super(element);
        this.results = [];
        this.prepareElements(element);
        this.prepareActions();
    }
    prepareElements(element) {
        this.dom = {
            resultsList: element.querySelector(".stopwatch__results"),
            addToListBtn: (element.querySelector(".stopwatch__button.stopwatch__add-to-list-btn")),
            resetListBtn: (element.querySelector(".stopwatch__button.stopwatch__reset-list-btn")),
            currentTime: (element.querySelector(".stopwatch__current-time")),
            startBtn: (element.querySelector(".stopwatch__button.stopwatch__start-btn")),
            stopBtn: (element.querySelector(".stopwatch__button.stopwatch__stop-btn")),
            resetBtn: (element.querySelector(".stopwatch__button.stopwatch__reset-btn")),
        };
    }
    prepareActions() {
        /*
        Funkcja ta powinna dodawać nasłuchwiacze do buttonów this.dom.addToListBtn oraz this.dom.resetListBtn.
        Pierwszy powinien po kliknięciu uruchamiać metodę this.addToList, a druga this.resetList.
        */
        this.dom.addToListBtn.addEventListener("click", () => this.addToList());
        this.dom.resetListBtn.addEventListener("click", () => this.resetList());
    }
    renderList() {
        /*
        Funkcja ta powinna czyścić zawartość this.dom.resultsList, a następnie renderować w niej nowe elementy li
        na podstawie zawartości tablicy this.results. Każdy jej element powinien być renderowany bez żadnych zmian.
    
        np. <li>00:12:00</li>
        */
        this.dom.resultsList.innerHTML = "";
        this.dom.resultsList.innerHTML = this.results.join(" ");
    }
    addToList() {
        /*
        Funkcja ta powinna pobierać aktualny czas z this.currentTime, formatować go i w takiej postaci zapisywać do tablicy this.results.
        Następnie powinna renderować aktualną listę na stronie (this.renderList).
        */
        const currentTime = this.currentTime;
        const formattedTime = this.formatTime(currentTime);
        this.results.push(formattedTime);
        this.renderList();
    }
    resetList() {
        /*
        Funkcja ta powinna czyścić tablicę this.results oraz zawartość this.dom.resultsList
        */
        this.dom.resultsList.innerHTML = "";
        this.results.splice(0);
        this.renderList();
    }
}
export default StopwatchWithResults;
//# sourceMappingURL=StopwatchWithResults.js.map