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
        this.dom.addToListBtn.addEventListener("click", () => this.addToList());
        this.dom.resetListBtn.addEventListener("click", () => this.resetList());
    }
    renderList() {
        this.dom.resultsList.innerHTML = "";
        this.dom.resultsList.innerHTML = this.results.join(" ");
    }
    addToList() {
        const currentTime = this.currentTime;
        const formattedTime = this.formatTime(currentTime);
        this.results.push(formattedTime);
        this.renderList();
    }
    resetList() {
        this.dom.resultsList.innerHTML = "";
        this.results.splice(0);
        this.renderList();
    }
}
export default StopwatchWithResults;
//# sourceMappingURL=StopwatchWithResults.js.map