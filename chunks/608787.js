n.d(t, {
    GI: function () {
        return h;
    },
    Jt: function () {
        return d;
    },
    Un: function () {
        return f;
    },
    wE: function () {
        return E;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079);
let o = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'transparent';
        return () =>
            (0, i.jsx)('div', {
                style: {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: e
                }
            });
    },
    s = 50,
    l = 500,
    u = 5000,
    c = () => Promise.resolve();
function d(e) {
    c = e;
}
let _ = (e) => new Promise((t) => setTimeout(t, e));
async function E(e) {
    let { createPromise: t, webpackId: r } = e,
        i = l,
        a = 0;
    for (;;)
        try {
            return await t();
        } catch (e) {
            if ((console.log(e), r in n.c)) throw (console.log('Module was found in webpack cache so it has loaded from the network and webpack will not retry'), e);
            if (a >= s) throw e;
            await _(i), await c(), (i = Math.min(u, 2 * i)), a++;
        }
}
function f(e) {
    let { createPromise: t, webpackId: n, renderLoader: r, name: s, memo: l = !1 } = e,
        u = a.lazy(() =>
            E({
                createPromise: t,
                webpackId: n
            })
        ),
        c = (e) =>
            (0, i.jsx)(a.Suspense, {
                fallback: null != r ? r() : o()(),
                children: (0, i.jsx)(u, { ...e })
            });
    return l && (c = a.memo(c)), (c.displayName = 'Suspense('.concat(s || 'Unknown', ')')), c;
}
function h(e) {
    let { createPromise: t, webpackId: n, render: r, renderFallback: o } = e,
        [s, l] = a.useState(null);
    return (
        a.useEffect(() => {
            E({
                createPromise: t,
                webpackId: n
            }).then((e) => {
                let { default: t } = e;
                return l(t);
            });
        }, []),
        (0, i.jsx)(i.Fragment, { children: null == s ? o() : r(s) })
    );
}
