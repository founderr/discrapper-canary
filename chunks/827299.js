n.d(t, {
    K: function () {
        return p;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(470079),
    o = n(399606);
function s(e, t) {
    if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
}
function l(e, t) {
    return t.get ? t.get.call(e) : t.value;
}
function u(e, t, n) {
    if (!t.has(e)) throw TypeError('attempted to ' + n + ' private field on non-instance');
    return t.get(e);
}
function c(e, t) {
    var n = u(e, t, 'get');
    return l(e, n);
}
function d(e, t, n) {
    s(e, t), t.set(e, n);
}
var _ = new WeakMap(),
    E = new WeakMap();
class f {
    doesDataNeedValidation(e) {
        return !0 === c(this.search(e), E).isStale;
    }
    getOrCreate(e) {
        return null == c(this, _)[e] && (c(this, _)[e] = new f()), c(this, _)[e];
    }
    getState(e) {
        var t;
        return c((t = this.search(e)), E);
    }
    loadingDone(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.search(e);
        (c(n, E).isLoading = !1), t && (c(n, E).isStale = !1);
    }
    loadingStart(e) {
        c(this.search(e), E).isLoading = !0;
    }
    search(e) {
        if (null == e) return new f();
        let t = this;
        for (let n of e) t = t.getOrCreate(n);
        return t;
    }
    subscribe(e, t) {
        c(this.search(e), E).validateData = t;
    }
    validate(e) {
        let t = this.search(e),
            n = [];
        'function' == typeof c(t, E).validateData && n.push(c(t, E).validateData);
        let r = Object.values(c(t, _));
        for (; r.length > 0; ) {
            let e = r.pop();
            null != e && ((c(e, E).isStale = !0), r.push(...Object.values(c(e, _))), 'function' == typeof c(e, E).validateData && n.push(c(e, E).validateData));
        }
        (c(t, E).isStale = !0), n.forEach((e) => e());
    }
    constructor() {
        d(this, _, {
            writable: !0,
            value: {}
        }),
            d(this, E, {
                writable: !0,
                value: {}
            });
    }
}
let h = new f();
function p(e, t) {
    let { get: n, load: r, useStateHook: i, queryId: s, dangerousAbortOnCleanup: l = !1 } = t;
    return function () {
        for (var t = arguments.length, u = Array(t), c = 0; c < t; c++) u[c] = arguments[c];
        let d = (0, a.useMemo)(() => s(...u), u),
            _ = i(Array.isArray(e) ? e : [e], () => n(...u), u),
            [E, f] = (0, a.useState)(),
            p = !0 === h.getState(d).isLoading,
            m = (0, a.useRef)(u),
            I = (0, a.useCallback)(() => {
                if (null == d || !0 === p) return;
                let e = !1;
                i === o.Wu ? _.length > 0 && (e = !0) : null != _ && (e = !0);
                let t = h.doesDataNeedValidation(d);
                if (e && !t) return;
                h.loadingStart(d);
                let n = new AbortController();
                return (
                    r(n.signal, ...m.current)
                        .then((e) => (h.loadingDone(d, !0), e))
                        .catch((e) => {
                            h.loadingDone(d), !n.signal.aborted && f(e);
                        }),
                    () => {
                        l && n.abort();
                    }
                );
            }, [_, d, p]);
        return (
            (0, a.useEffect)(
                () => (
                    I(),
                    h.subscribe(d, I),
                    () => {
                        h.subscribe(d, void 0);
                    }
                ),
                [d, I]
            ),
            {
                data: _,
                error: E,
                isLoading: p
            }
        );
    };
}
