var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Stopwatch from "./Stopwatch.js";
import { deprecated } from "./deprecated.js";
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
    getByParam(param) {
        console.log(param);
    }
}
__decorate([
    deprecated
], StopwatchWithResults.prototype, "renderList", null);
__decorate([
    deprecated
], StopwatchWithResults.prototype, "addToList", null);
__decorate([
    deprecated
], StopwatchWithResults.prototype, "resetList", null);
export default StopwatchWithResults;
//# sourceMappingURL=StopwatchWithResults.js.map