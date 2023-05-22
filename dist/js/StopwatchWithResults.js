var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
import Stopwatch from "./Stopwatch.js";
import { deprecated } from "./deprecated";
let StopwatchWithResults = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _addToList_decorators;
    let _resetList_decorators;
    return _a = class StopwatchWithResults extends Stopwatch {
            constructor(element) {
                super(element);
                this.results = (__runInitializers(this, _instanceExtraInitializers), []);
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
        },
        (() => {
            _addToList_decorators = [deprecated];
            _resetList_decorators = [deprecated];
            __esDecorate(_a, null, _addToList_decorators, { kind: "method", name: "addToList", static: false, private: false, access: { has: obj => "addToList" in obj, get: obj => obj.addToList } }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _resetList_decorators, { kind: "method", name: "resetList", static: false, private: false, access: { has: obj => "resetList" in obj, get: obj => obj.resetList } }, null, _instanceExtraInitializers);
        })(),
        _a;
})();
export default StopwatchWithResults;
//# sourceMappingURL=StopwatchWithResults.js.map