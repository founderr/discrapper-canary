r.d(t, {
    ZN: function () {
        return _;
    }
});
var a = r(147498),
    n = r(939747);
let _ = {
    [a.JM]: class e {
        constructor(e) {
            this._value = e;
        }
        get weight() {
            return 1;
        }
        add(e) {
            this._value += e;
        }
        toString() {
            return `${this._value}`;
        }
    },
    [a.uG]: class e {
        constructor(e) {
            (this._last = e), (this._min = e), (this._max = e), (this._sum = e), (this._count = 1);
        }
        get weight() {
            return 5;
        }
        add(e) {
            (this._last = e), e < this._min && (this._min = e), e > this._max && (this._max = e), (this._sum += e), this._count++;
        }
        toString() {
            return `${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`;
        }
    },
    [a.g_]: class e {
        constructor(e) {
            this._value = [e];
        }
        get weight() {
            return this._value.length;
        }
        add(e) {
            this._value.push(e);
        }
        toString() {
            return this._value.join(':');
        }
    },
    [a.is]: class e {
        constructor(e) {
            (this.first = e), (this._value = new Set([e]));
        }
        get weight() {
            return this._value.size;
        }
        add(e) {
            this._value.add(e);
        }
        toString() {
            return Array.from(this._value)
                .map((e) => ('string' == typeof e ? (0, n.M)(e) : e))
                .join(':');
        }
    }
};
