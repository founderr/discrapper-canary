n.d(t, {
    rK: function () {
        return A;
    },
    tR: function () {
        return N;
    },
    tj: function () {
        return I;
    }
});
var r = n(757143);
var i = n(653041);
var a = n(47120);
var o = n(411104);
var s = n(913527),
    l = n.n(s),
    u = n(55935);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = /^[0]+/,
    _ = /:00/,
    E = /(AM|ΠΜ|सुबह)/i,
    f = /(PM|ΜΜ|शाम)/i,
    h = /\s+/,
    p = (e) => e.replace(d, '').replace(_, '').replace(E, '').replace(h, ''),
    m = (e) => e.replace(d, '').replace(f, '').replace(h, ''),
    I = (e, t) => {
        let n = t.toUpperCase().trim();
        if (n.length > 0) {
            let t = l()(''.concat(null == e ? void 0 : e.format('YYYY-MM-DD'), ' ').concat(n), 'YYYY-MM-DD LT');
            if (p(t.format('LT')) === p(n)) return t;
        }
    },
    T = l()('2021-04-12T00:00:00'),
    g = 15,
    S = 'LT',
    A = (e, t) => e.clone().hours(t.hour()).minutes(t.minutes()).seconds(0),
    v = (e, t) => e.value.unix() - t.value.unix();
class N {
    lookupByValue(e) {
        if (null == e) return;
        let t = A(T, e);
        return this._index[t.unix()];
    }
    _createLabel(e) {
        return (0, u.vc)(e.locale(l().locale()), this.labelFormat);
    }
    _generateTimeOptions() {
        (this.options = []), (this._index = {});
        let e = l()(T),
            t = l()(e).add(1, 'day'),
            n = l()(e);
        for (; n < t; ) {
            let e = this._createNewOption(n.clone());
            this.options.push(e), (this._index[e.value.unix()] = e.value), n.add(this.intervalInMinutes, 'minutes');
        }
    }
    _createNewOption(e) {
        let t = A(T, e);
        return {
            label: this._createLabel(t),
            value: t
        };
    }
    _addNewOption(e) {
        let t = A(T, e),
            n = this._createLabel(t);
        return (
            (this._index[t.unix()] = t),
            this.options.push({
                label: n,
                value: t
            }),
            this.options.sort(v),
            e
        );
    }
    _guessOptions(e) {
        let t = [];
        if (/[:\\.]/.test(e)) {
            let n = I(T, e);
            if (null != n) {
                t.push(n.clone());
                let r = n.add({ hours: 12 });
                r.isBefore(T.clone().add({ hours: 24 })) && m(r.format('LT')) === m(e) && t.push(r);
            }
        }
        return t;
    }
    getOptions(e) {
        let t = this._guessOptions(e);
        if (!(t.length > 0)) return this.options;
        {
            let e = [...this.options];
            return (
                t.forEach((t) => {
                    null == this.lookupByValue(t) && e.push(this._createNewOption(t));
                }),
                e.sort(v),
                e
            );
        }
    }
    selectValue(e) {
        let t = this.lookupByValue(e);
        return null == t ? this._addNewOption(e) : t;
    }
    constructor({ intervalInMinutes: e = g, labelFormat: t = S } = {}) {
        if ((c(this, 'intervalInMinutes', void 0), c(this, 'labelFormat', void 0), c(this, 'options', []), c(this, '_index', {}), e <= 0)) throw Error('intervalInMinutes should be positive number, got '.concat(e));
        (this.intervalInMinutes = e), (this.labelFormat = t), this._generateTimeOptions();
    }
}
