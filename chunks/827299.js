r.d(n, {
    K: function () {
        return b;
    }
});
var i = r(47120);
var a = r(653041);
var s = r(411104);
var o = r(192379),
    l = r(399606);
function u(e, n) {
    if (n.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
}
function c(e, n) {
    return n.get ? n.get.call(e) : n.value;
}
function d(e, n, r) {
    if (!n.has(e)) throw TypeError('attempted to ' + r + ' private field on non-instance');
    return n.get(e);
}
function f(e, n) {
    var r = d(e, n, 'get');
    return c(e, r);
}
function _(e, n, r) {
    u(e, n), n.set(e, r);
}
function h(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
var p = new WeakMap(),
    m = new WeakMap();
class g {
    doesDataNeedValidation(e) {
        return !0 === f(this.search(e), m).isStale;
    }
    getOrCreate(e) {
        return null == f(this, p)[e] && (f(this, p)[e] = new g()), f(this, p)[e];
    }
    getState(e) {
        var n;
        return f((n = this.search(e)), m);
    }
    loadingDone(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = this.search(e);
        (f(r, m).isLoading = !1), n ? ((f(r, m).fetchFailCounter = 0), (f(r, m).isStale = !1)) : (f(r, m).fetchFailCounter += 1);
    }
    loadingStart(e) {
        let n = this.search(e);
        (f(n, m).isLoading = !0), (f(n, m).error = void 0);
    }
    search(e) {
        if (null == e) return new g();
        let n = this;
        for (let r of e) n = n.getOrCreate(r);
        return n;
    }
    setError(e, n) {
        let r = this.search(e);
        (f(r, m).error = n), (f(r, m).isStale = !1);
    }
    subscribe(e, n) {
        f(this.search(e), m).validateData = n;
    }
    validate(e) {
        let n = this.search(e),
            r = [];
        'function' == typeof f(n, m).validateData && r.push(f(n, m).validateData);
        let i = Object.values(f(n, p));
        for (; i.length > 0; ) {
            let e = i.pop();
            null != e && ((f(e, m).isStale = !0), g.resetErrorState(e), i.push(...Object.values(f(e, p))), 'function' == typeof f(e, m).validateData && r.push(f(e, m).validateData));
        }
        (f(n, m).isStale = !0), g.resetErrorState(n), r.forEach((e) => e());
    }
    static resetErrorState(e) {
        (f(e, m).error = void 0), (f(e, m).fetchFailCounter = 0);
    }
    constructor() {
        _(this, p, {
            writable: !0,
            value: {}
        }),
            _(this, m, {
                writable: !0,
                value: { fetchFailCounter: 0 }
            });
    }
}
let E = new g(),
    v = 5;
class I extends Error {
    setStatus(e) {
        this.status = e;
    }
    constructor(...e) {
        super(...e), h(this, 'name', 'HTTPResponseError'), h(this, 'status', 0);
    }
}
function T(e) {
    if (e instanceof Error) return e;
    if ('object' == typeof e) {
        if ('body' in e && null != e.body && 'message' in e.body) {
            let n = new I(String(e.body.message));
            return n.setStatus(e.status), n;
        }
        let n = new I(
            Object.entries(e)
                .map((e, n) => ''.concat(e, ': [').concat(String(n), ']'))
                .join(',')
        );
        return n.setStatus(e.status), n;
    }
    return Error(String(e));
}
function b(e, n) {
    let { dangerousAbortOnCleanup: r = !1, get: i, load: a, maxNumFetchErrors: s = v, queryId: u, useStateHook: c } = n;
    return function () {
        for (var n = arguments.length, d = Array(n), f = 0; f < n; f++) d[f] = arguments[f];
        let _ = (0, o.useMemo)(() => u(...d), d),
            h = c(Array.isArray(e) ? e : [e], () => i(...d), d),
            p = E.getState(_),
            m = p.error,
            g = !0 === p.isLoading,
            v = (0, o.useRef)(d),
            b = (0, o.useCallback)(() => {
                if (null == _ || !0 === g) return;
                let e = !1;
                c === l.Wu ? h.length > 0 && (e = !0) : null != h && (e = !0);
                let n = E.doesDataNeedValidation(_),
                    i = null != m;
                if ((e || i) && !n) return;
                E.loadingStart(_);
                let o = new AbortController();
                return (
                    a(o.signal, ...v.current)
                        .then((e) => (E.loadingDone(_, !0), e))
                        .catch((e) => {
                            if ((E.loadingDone(_), o.signal.aborted)) return;
                            let n = T(e);
                            if (!!(p.fetchFailCounter >= s) || !(n instanceof I) || (!(n.status >= 500) && 429 !== n.status)) E.setError(_, n);
                        }),
                    () => {
                        r && o.abort();
                    }
                );
            }, [h, p.fetchFailCounter, m, _, g]);
        return (
            (0, o.useEffect)(
                () => (
                    b(),
                    E.subscribe(_, b),
                    () => {
                        E.subscribe(_, void 0);
                    }
                ),
                [_, b]
            ),
            {
                data: h,
                error: m,
                isLoading: g
            }
        );
    };
}
