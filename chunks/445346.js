let r;
n.d(t, {
    y: function () {
        return m;
    }
});
var i = n(177593);
var a = n(47120);
var o = n(653041);
var s = n(512722),
    l = n.n(s),
    u = n(956067);
n(17089);
var c = n(673011),
    d = n(153102);
function _(e, t, n) {
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
let E = [],
    f = !1,
    h = new Promise((e) => {
        r = () => {
            e(), (r = null);
        };
    });
function p(e, t) {
    let n = null;
    return 0 === e
        ? function () {
              clearImmediate(n), (n = setImmediate(t));
          }
        : function () {
              null == n &&
                  (n = setTimeout(() => {
                      try {
                          t();
                      } finally {
                          n = null;
                      }
                  }, e));
          };
}
class m {
    static initialize() {
        (f = !0), E.forEach((e) => e.initializeIfNeeded()), null != r && r();
    }
    static destroy() {
        (E.length = 0), d.Z.destroy();
    }
    static getAll() {
        return E;
    }
    registerActionHandlers(e, t) {
        this._dispatcher.register(
            this.getName(),
            e,
            (e) => {
                (this._changeCallbacks.hasAny() || this._reactChangeCallbacks.hasAny() || this._syncWiths.length > 0) && (d.Z.markChanged(this), d.Z.getIsPaused() && null != this._mustEmitChanges && this._mustEmitChanges(e) && d.Z.resume(!1));
            },
            t,
            this._dispatchToken
        );
    }
    getName() {
        var e;
        return null !== (e = this.constructor.displayName) && void 0 !== e ? e : this.constructor.name;
    }
    initializeIfNeeded() {
        if (!this._isInitialized) {
            let e = Date.now();
            this.initialize(), (this._isInitialized = !0);
            let t = Date.now() - e;
            t > 5 && u.Z.mark('\uD83E\uDDA5', this.getName() + '.initialize()', t);
        }
    }
    initialize() {}
    syncWith(e, t, n) {
        if ((this.waitFor(...e), null != n)) {
            let r = 0,
                i = () => {
                    r !== d.Z.getChangeSentinel() && ((r = d.Z.getChangeSentinel()), !1 !== t() && this.emitChange());
                };
            (i = p(null != n ? n : 0, i)), e.forEach((e) => e.addChangeListener(i));
        } else
            e.forEach((e) => {
                e._syncWiths.push({
                    func: t,
                    store: this
                });
            });
    }
    waitFor() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let r = t.map((e, t) => ((l()(null != e, 'Store.waitFor(...) called with null Store at index '.concat(t, ' for store ').concat(this.getName())), null != e._dispatcher) ? (l()(e._dispatcher === this._dispatcher, 'Stores belong to two separate dispatchers.'), e.getDispatchToken()) : null));
        this._dispatcher.addDependencies(
            this.getDispatchToken(),
            r.filter((e) => null != e)
        );
    }
    emitChange() {
        d.Z.markChanged(this);
    }
    getDispatchToken() {
        return this._dispatchToken;
    }
    mustEmitChanges() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !0;
        this._mustEmitChanges = e;
    }
    constructor(e, t, n) {
        _(this, '_changeCallbacks', new c.Z()), _(this, '_reactChangeCallbacks', new c.Z()), _(this, '_syncWiths', []), _(this, '_dispatchToken', void 0), _(this, '_dispatcher', void 0), _(this, '_mustEmitChanges', void 0), _(this, '_isInitialized', !1), _(this, '__getLocalVars', void 0), _(this, 'addChangeListener', this._changeCallbacks.add), _(this, 'addConditionalChangeListener', this._changeCallbacks.addConditional), _(this, 'removeChangeListener', this._changeCallbacks.remove), _(this, 'addReactChangeListener', this._reactChangeCallbacks.add), _(this, 'removeReactChangeListener', this._reactChangeCallbacks.remove), (this._dispatcher = e), (this._dispatchToken = this._dispatcher.createToken()), this.registerActionHandlers(null != t ? t : {}, n), E.push(this);
        f && this.initializeIfNeeded();
    }
}
_(m, 'displayName', void 0), _(m, 'initialized', h);
