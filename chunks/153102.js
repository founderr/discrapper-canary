var r = n(177593);
var i = n(47120);
var a = n(411104);
n(17089);
var o = n(259443),
    s = n(625306);
function l(e, t, n) {
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
let u = new o.Y('Flux'),
    c = 100,
    d = (e) => e();
class _ {
    destroy() {
        this.changedStores.clear(), this.reactChangedStores.clear(), (d = (e) => e());
    }
    injectBatchEmitChanges(e) {
        d = e;
    }
    pause() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        (this.isPaused = !0),
            null !== this.pauseTimer && clearTimeout(this.pauseTimer),
            null !== e &&
                (this.pauseTimer = setTimeout(() => {
                    (this.pauseTimer = null), this.resume();
                }, e));
    }
    resume() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        clearTimeout(this.pauseTimer), (this.pauseTimer = null), this.isPaused && ((this.isPaused = !1), e && this.changedStores.size > 0 && setImmediate(() => this.emit()));
    }
    batched(e) {
        if (this.isPaused) return e();
        try {
            return (this.isPaused = !0), e();
        } finally {
            this.resume(!1), this.emit();
        }
    }
    emit() {
        !this.isBatchEmitting &&
            !this.isPaused &&
            d(() => {
                try {
                    (this.isBatchEmitting = !0), this.changeSentinel++;
                    let e = 0,
                        t = new Set(),
                        n = new Set();
                    for (; this.changedStores.size > 0; ) {
                        if (++e > 100) throw (u.error('LastFewActions', s.qC()), Error('change emit loop detected, aborting'));
                        this.emitNonReactOnce(t, n);
                    }
                    for (; this.reactChangedStores.size > 0; ) {
                        if (++e > 100) throw (u.error('LastFewActions', s.qC()), Error('react change emit loop detected, aborting'));
                        this.emitReactOnce();
                    }
                } finally {
                    this.isBatchEmitting = !1;
                }
            });
    }
    getChangeSentinel() {
        return this.changeSentinel;
    }
    getIsPaused() {
        return this.isPaused;
    }
    markChanged(e) {
        (e._changeCallbacks.hasAny() || e._syncWiths.length > 0) && this.changedStores.add(e), e._reactChangeCallbacks.hasAny() && this.reactChangedStores.add(e), !this.isBatchEmitting && !this.isDispatching && !this.isPaused && this.emit();
    }
    emitNonReactOnce(e, t) {
        let n = Date.now(),
            r = this.changedStores;
        (this.changedStores = new Set()),
            r.forEach((e) => {
                t.add(e), e._changeCallbacks.invokeAll(), this.changedStores.delete(e);
            }),
            r.forEach((n) => {
                n._syncWiths.forEach((n) => {
                    let { func: r, store: i } = n;
                    if (!e.has(r)) e.add(r), !1 !== r() && !t.has(i) && (t.add(i), this.markChanged(i));
                });
            });
        let i = Date.now();
        i - n > c && u.verbose('Slow batch emitChanges took '.concat(i - n, 'ms recentActions:'), s.qC());
    }
    emitReactOnce() {
        let e = Date.now(),
            t = this.reactChangedStores;
        (this.reactChangedStores = new Set()),
            t.forEach((e) => {
                e._reactChangeCallbacks.invokeAll(), this.reactChangedStores.delete(e);
            });
        let n = Date.now();
        n - e > c && u.verbose('Slow batch emitReactChanges took '.concat(n - e, 'ms recentActions:'), s.qC());
    }
    constructor() {
        l(this, 'changedStores', new Set()), l(this, 'reactChangedStores', new Set()), l(this, 'changeSentinel', 0), l(this, 'isBatchEmitting', !1), l(this, 'isDispatching', !1), l(this, 'isPaused', !1), l(this, 'pauseTimer', null);
    }
}
t.Z = new _();
