let r, i;
n.d(t, {
    Z: function () {
        return f;
    }
});
var a = n(411104);
var o = n(594174),
    s = n(831160);
let l = () => {
    throw Error('updateModal has not been implemented.');
};
{
    let e = n(169480);
    (r = e.showModal), (l = e.updateModalProps), (i = n(952265).Mr);
}
let u = 60008;
function c() {
    var e, t;
    return null !== (t = null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.mfaEnabled) && void 0 !== t && t;
}
function d(e, t) {
    return (e.body && e.body.code === u) || (t && 429 === e.status);
}
function _(e) {
    let { promiseFn: t, resolve: n, reject: a, modalProps: o = {}, hooks: { onEarlyClose: s } = {} } = e;
    if (null == r) {
        null == s || s();
        return;
    }
    let u = r(f, c, o);
    function c() {
        null == s || s();
    }
    function d(e) {
        i(u), n(e);
    }
    function _(e) {
        i(u), a(e);
    }
    function f(e) {
        return (
            l(u, f, c, {
                ...o,
                isLoading: !0
            }),
            E({
                promiseFn: t,
                resolve: d,
                reject: _,
                code: e,
                mfaCodeHandler: h,
                isModalOpen: !0
            })
        );
    }
    function h(e) {
        let { res: t } = e;
        l(u, f, c, {
            ...o,
            error: t.body.message
        });
    }
}
function E(e) {
    let { promiseFn: t, resolve: n, reject: r, code: i, mfaCodeHandler: a = _, isModalOpen: o = !1, ...s } = e;
    return t(null != i ? { code: i } : {}).then(n, (e) => {
        if (d(e, o))
            return a({
                promiseFn: t,
                resolve: n,
                reject: r,
                res: e,
                ...s
            });
        r(e);
    });
}
function f(e, t) {
    let { checkEnabled: n = c(), ...r } = null != t ? t : {};
    return new Promise((t, i) => {
        ((0, s.d)(n) ? _ : E)({
            promiseFn: e,
            resolve: t,
            reject: i,
            ...r
        });
    });
}
