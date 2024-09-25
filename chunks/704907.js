n.d(t, {
    KX: function () {
        return h;
    },
    M$: function () {
        return f;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(392711),
    o = n.n(a),
    s = n(913527),
    l = n.n(s);
function u(e, t, n) {
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
let c = 10,
    d = 1000,
    _ = 32,
    E = (e, t, n) => Math.ceil(e * (t / n.numOfRecentUses)),
    f = {
        original: (e) => {
            let t = 1;
            return e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t;
        },
        safe: (e) => {
            let t = 1;
            return e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t;
        },
        day_recency: (e) => {
            let t = 1;
            return e <= 1 ? (t = 100) : e <= 2 ? (t = 70) : e <= 3 ? (t = 50) : e <= 7 ? (t = 20) : e <= 15 ? (t = 15) : e <= 30 ? (t = 10) : e <= 45 ? (t = 5) : e <= 80 && (t = 2), t;
        }
    },
    h = {
        original: E,
        safe: (e, t, n) => (null == n.maxTotalUse ? 0 : Math.trunc(1000 * ((e / n.maxTotalUse) * 0.2 + (t / d) * 0.8))),
        day_recency: (e, t, n) => (null == n.maxTotalUse ? 0 : Math.trunc(1000 * ((e / n.maxTotalUse) * 0.05 + (t / d) * 0.95)))
    };
class p {
    overwriteHistory(e, t) {
        (this.usageHistory = o().mapValues(null != e ? e : {}, (e) => ({
            ...e,
            frecency: -1
        }))),
            null == t ||
                t.forEach((e) => {
                    let { key: t, timestamp: n } = e;
                    return this.track(t, n);
                }),
            this.markDirty();
    }
    markDirty() {
        this.dirty = !0;
    }
    isDirty() {
        return this.dirty;
    }
    track(e, t) {
        if (null == e) return;
        let n = Object.prototype.hasOwnProperty.call(this.usageHistory, e) ? this.usageHistory[e] : void 0;
        if (null == n)
            n = {
                totalUses: 1,
                recentUses: [null != t ? t : Date.now()],
                frecency: -1,
                score: 0
            };
        else for (n.frecency = -1, n.totalUses += 1, null == t ? n.recentUses.push(Date.now()) : (n.recentUses.push(t), n.recentUses.sort()); n.recentUses.length > this.maxSamples; ) n.recentUses.shift();
        (this.usageHistory[e] = n), this.markDirty();
    }
    getEntry(e) {
        return null == e ? null : (this.dirty && this.compute(), Object.prototype.hasOwnProperty.call(this.usageHistory, e) ? this.usageHistory[e] : void 0);
    }
    getScore(e) {
        let t = this.getEntry(e);
        return null != t ? t.score : null;
    }
    getFrecency(e) {
        let t = this.getEntry(e);
        return null != t ? t.frecency : null;
    }
    replaceEntryComputeFunctions(e, t, n) {
        (this.computeWeight = e),
            (this.computeFrecency = t),
            (this.calculateMaxTotalUse = n),
            (this.usageHistory = o().mapValues(this.usageHistory, (e) => ({
                ...e,
                frecency: -1
            }))),
            this.markDirty();
    }
    compute() {
        let e = l()(),
            t = this.calculateMaxTotalUse ? o().maxBy(Object.values(this.usageHistory), (e) => e.totalUses) : null;
        o().forEach(this.usageHistory, (n, r) => {
            let { totalUses: i, recentUses: a, frecency: s } = n;
            if (-1 !== s) return;
            let u = this.computeBonus(r) / 100;
            (n.score = 0),
                o().forEach(a, (t, r) => {
                    if (r >= this.maxSamples) return !1;
                    let i = this.computeWeight(e.diff(l()(t), 'days'));
                    n.score += u * i;
                }),
                n.score > 0
                    ? (n.recentUses.length > 0 &&
                          (n.frecency = this.computeFrecency(i, n.score, {
                              numOfRecentUses: a.length,
                              maxTotalUse: null == t ? void 0 : t.totalUses
                          })),
                      (this.usageHistory[r] = n))
                    : delete this.usageHistory[r];
        }),
            (this.frequently = o()(this.usageHistory)
                .map((e, t) => {
                    let n = this.lookupKey(t);
                    return null == n ? null : [n, e.frecency];
                })
                .filter((e) => null !== e)
                .sortBy((e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t] = e;
                    return t;
                })
                .take(this.numFrequentlyItems)
                .value()),
            (this.dirty = !1),
            this.afterCompute(this.usageHistory, this._frequently);
    }
    get frequently() {
        return this.dirty && this.compute(), this._frequently;
    }
    set frequently(e) {
        this._frequently = e;
    }
    constructor({ computeBonus: e, computeWeight: t, computeFrecency: n = E, lookupKey: r, afterCompute: i, numFrequentlyItems: a = _, maxSamples: o = c }) {
        u(this, 'dirty', void 0), u(this, '_frequently', void 0), u(this, 'numFrequentlyItems', void 0), u(this, 'maxSamples', void 0), u(this, 'computeBonus', void 0), u(this, 'computeWeight', void 0), u(this, 'computeFrecency', void 0), u(this, 'lookupKey', void 0), u(this, 'usageHistory', void 0), u(this, 'afterCompute', void 0), u(this, 'calculateMaxTotalUse', void 0), (this.computeBonus = e), (this.computeWeight = t), (this.computeFrecency = n), (this.afterCompute = i), (this.lookupKey = r), (this.usageHistory = {}), (this.frequently = []), (this.maxSamples = o), (this.numFrequentlyItems = a), (this.calculateMaxTotalUse = !1), (this.dirty = !1);
    }
}
t.ZP = p;
