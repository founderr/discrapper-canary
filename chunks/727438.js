n.d(t, {
    AT: function () {
        return p;
    },
    g5: function () {
        return E;
    },
    gc: function () {
        return h;
    }
});
var r = n(47120);
var i = n(411104);
var a = n(123763),
    o = n.n(a),
    s = n(956067),
    l = n(433517),
    u = n(445346);
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
let d = {
        _state: void 0,
        _version: void 0
    },
    _ = null;
class E extends u.y {
    getClass() {
        return this.constructor;
    }
    static clearAll(e) {
        return (
            (_ = e),
            null == E._clearAllPromise &&
                (E._clearAllPromise = new Promise((t) => {
                    requestIdleCallback(
                        () => {
                            E.clearPersistQueue(e),
                                E.allPersistKeys.forEach((t) => {
                                    E.shouldClear(e, t) && l.K.remove(t);
                                }),
                                u.y.getAll().forEach((t) => {
                                    t instanceof E && E.shouldClear(e, t.getClass().persistKey) && ((t._isInitialized = !1), t.initializeIfNeeded());
                                }),
                                (E._clearAllPromise = null),
                                t();
                        },
                        { timeout: 500 }
                    );
                })),
            E._clearAllPromise
        );
    }
    static shouldClear(e, t) {
        var n;
        return (null === (n = e.omit) || void 0 === n ? !void 0 : !n.includes(t)) && ('all' === e.type || ('user-data-only' === e.type && !E.userAgnosticPersistKeys.has(t)));
    }
    static clearPersistQueue(e) {
        E._writeResolvers.forEach((t, n) => {
            let [r, i] = t;
            E.shouldClear(e, n) && (E._writePromises.delete(n), E._writeResolvers.delete(n), cancelIdleCallback(i), r(!1));
        }),
            E._writePromises.clear(),
            E._writeResolvers.clear();
    }
    static getAllStates() {
        return Promise.all(Array.from(E._writePromises.values())).then(() => {
            let e = {};
            return (
                E.allPersistKeys.forEach((t) => {
                    var n;
                    e[t] = (null !== (n = l.K.get(t)) && void 0 !== n ? n : d)._state;
                }),
                e
            );
        });
    }
    static initializeAll(e) {
        u.y.getAll().forEach((t) => {
            if (t instanceof E) {
                let n = t.getClass().persistKey;
                e.hasOwnProperty(n) && t.initializeFromState(e[n]);
            }
        });
    }
    initializeFromState(e) {
        this.initialize(e) && this.asyncPersist(), this._isInitialized ? this.emitChange() : (E.allPersistKeys.add(this.getClass().persistKey), (this._isInitialized = !0));
    }
    static destroy() {
        (_ = null), u.y.destroy(), E.clearPersistQueue({ type: 'all' }), E.allPersistKeys.clear(), E.userAgnosticPersistKeys.clear();
    }
    initializeIfNeeded() {
        if (!this._isInitialized) {
            let e = Date.now();
            E.allPersistKeys.add(this.getClass().persistKey);
            let { state: t, requiresPersist: n } = E.migrateAndReadStoreState(this.getClass().persistKey, this.getClass().migrations);
            this.initialize(t) && this.asyncPersist(), n && this.asyncPersist(), (this._isInitialized = !0);
            let r = Date.now() - e;
            r > 5 && s.Z.mark('\uD83E\uDDA5', this.getName() + '.initialize()', r);
        }
    }
    static migrateAndReadStoreState(e, t) {
        if (null != _ && E.shouldClear(_, e))
            return (
                l.K.remove(e),
                {
                    state: void 0,
                    requiresPersist: !1
                }
            );
        let n = null != E._clearAllPromise ? null : l.K.get(e),
            { _state: r, _version: i, ...a } = null != n ? n : d,
            o = null == t ? 0 : t.length;
        if (0 !== o && i !== o && null != t) {
            let e = null != i ? i : 0,
                n = r;
            for (null == i && (n = a); e < o; ) (n = (0, t[e])(n)), e++;
            return {
                state: n,
                requiresPersist: !0
            };
        }
        if (Object.values(a).length > 0)
            return {
                state: a,
                requiresPersist: !0
            };
        return {
            state: r,
            requiresPersist: !1
        };
    }
    asyncPersist() {
        let { persistKey: e, disableWrite: t, throttleDelay: n } = this.getClass();
        if (E.disableWrites || t) return Promise.resolve(!1);
        let r = E._writePromises.get(e);
        return null != r
            ? r
            : ((r = new Promise((t) => {
                  let r = n > 0 ? () => this.throttledCallback(t) : () => this.callback(t);
                  E._writeResolvers.set(e, [t, requestIdleCallback(r, { timeout: 500 })]);
              })),
              E._writePromises.set(e, r),
              r);
    }
    persist() {
        let { persistKey: e } = this.getClass(),
            t = this.getState(),
            n = this._version;
        l.K.set(e, {
            _state: t,
            _version: n
        });
    }
    clear() {
        let { persistKey: e } = this.getClass();
        l.K.remove(e);
    }
    constructor(e, t) {
        if (
            (super(e, t),
            c(this, '_version', null == this.getClass().migrations ? 0 : this.getClass().migrations.length),
            c(this, 'callback', (e) => {
                let { persistKey: t } = this.getClass();
                this.persist(), E._writePromises.delete(t), E._writeResolvers.delete(t), e();
            }),
            c(
                this,
                'throttledCallback',
                o()((e) => this.callback(e), this.getClass().throttleDelay, { leading: !1 })
            ),
            'string' != typeof this.getClass().persistKey)
        )
            throw Error(''.concat(this.getClass().name, ' initialized without a `persistKey`. Add one so we know where to save your stuff!'));
        if ('function' != typeof this.initialize) throw Error(''.concat(this.getClass().name, ' initialized without an `initialize` method. Add one that accepts the initial cached state.'));
        if ('function' != typeof this.getState) throw Error(''.concat(this.getClass().name, ' initialized without a `getState` method. Add one that returns the full state of the store for persistance to work.'));
        this.addChangeListener(() => this.asyncPersist());
    }
}
c(E, 'allPersistKeys', new Set()), c(E, 'userAgnosticPersistKeys', new Set()), c(E, '_writePromises', new Map()), c(E, '_writeResolvers', new Map()), c(E, '_clearAllPromise', void 0), c(E, 'disableWrites', !1), c(E, 'persistKey', void 0), c(E, 'disableWrite', !1), c(E, 'throttleDelay', 0), c(E, 'migrations', void 0);
class f extends E {
    initializeFromState(e) {
        return E.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeFromState(e);
    }
    initializeIfNeeded() {
        return E.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeIfNeeded();
    }
    getState() {
        return this.getUserAgnosticState();
    }
}
class h extends f {}
class p extends f {}
