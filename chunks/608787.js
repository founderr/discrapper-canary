r.d(n, {
    GI: function () {
        return m;
    },
    Jt: function () {
        return f;
    },
    Un: function () {
        return p;
    },
    wE: function () {
        return h;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379);
let o = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'transparent';
        return () =>
            (0, a.jsx)('div', {
                style: {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: e
                }
            });
    },
    l = 50,
    u = 500,
    c = 5000,
    d = () => Promise.resolve();
function f(e) {
    d = e;
}
let _ = (e) => new Promise((n) => setTimeout(n, e));
async function h(e) {
    let { createPromise: n, webpackId: i } = e,
        a = u,
        s = 0;
    for (;;)
        try {
            return await n();
        } catch (e) {
            if ((console.log(e), i in r.c)) throw (console.log('Module was found in webpack cache so it has loaded from the network and webpack will not retry'), e);
            if (s >= l) throw e;
            await _(a), await d(), (a = Math.min(c, 2 * a)), s++;
        }
}
function p(e) {
    let { createPromise: n, webpackId: r, renderLoader: i, name: l, memo: u = !1 } = e,
        c = s.lazy(() =>
            h({
                createPromise: n,
                webpackId: r
            })
        ),
        d = (e) =>
            (0, a.jsx)(s.Suspense, {
                fallback: null != i ? i() : o()(),
                children: (0, a.jsx)(c, { ...e })
            });
    return u && (d = s.memo(d)), (d.displayName = 'Suspense('.concat(l || 'Unknown', ')')), d;
}
function m(e) {
    let { createPromise: n, webpackId: r, render: i, renderFallback: o } = e,
        [l, u] = s.useState(null);
    return (
        s.useEffect(() => {
            h({
                createPromise: n,
                webpackId: r
            }).then((e) => {
                let { default: n } = e;
                return u(n);
            });
        }, []),
        (0, a.jsx)(a.Fragment, { children: null == l ? o() : i(l) })
    );
}
