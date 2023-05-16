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
            resultsList: (element.querySelector(".stopwatch__results .result_list")),
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
        // this.dom.resultsList.innerHTML = "Results...";
        console.log("resultList: ", this.dom.resultsList);
    }
    renderList() {
        this.dom.resultsList.innerHTML = "";
        this.dom.resultsList.innerHTML = this.results.join("<br>");
    }
    addToList() {
        if (this.currentTime === 0) {
            this.dom.resultsList.innerHTML = "First start timer!";
        }
        else {
            const currentTime = this.currentTime;
            const formattedTime = this.formatTime(currentTime);
            this.results.push(formattedTime);
            this.renderList();
        }
    }
    resetList() {
        this.results.splice(0);
        this.dom.resultsList.innerHTML = "No results!";
        // this.renderList();
    }
}
export default StopwatchWithResults;
//# sourceMappingURL=StopwatchWithResults.js.map