Object.defineProperty(n, '__esModule', { value: !0 });
let i = r(851409);
class a {
    constructor() {
        this._queue = [];
    }
    enqueue(e, n) {
        let r = {
            priority: (n = Object.assign({ priority: 0 }, n)).priority,
            run: e
        };
        if (this.size && this._queue[this.size - 1].priority >= n.priority) {
            this._queue.push(r);
            return;
        }
        let a = i.default(this._queue, r, (e, n) => n.priority - e.priority);
        this._queue.splice(a, 0, r);
    }
    dequeue() {
        let e = this._queue.shift();
        return null == e ? void 0 : e.run;
    }
    filter(e) {
        return this._queue.filter((n) => n.priority === e.priority).map((e) => e.run);
    }
    get size() {
        return this._queue.length;
    }
}
n.default = a;
