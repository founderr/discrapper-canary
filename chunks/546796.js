let r, i;
n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(411104);
var a = n(594174),
    s = n(195270);
let o = () => {
    throw Error('updateModal has not been implemented.');
};
{
    let e = n(169480);
    (r = e.showModal), (o = e.updateModalProps), (i = n(952265).Mr);
}
function l(e) {
    let { promiseFn: t, resolve: n, reject: a, modalProps: s = {}, hooks: { onEarlyClose: l } = {} } = e;
    if (null == r) {
        null == l || l();
        return;
    }
    let c = r(h, d, s);
    function d() {
        null == l || l();
    }
    function f(e) {
        i(c), n(e);
    }
    function _(e) {
        i(c), a(e);
    }
    function h(e) {
        return (
            o(c, h, d, {
                ...s,
                isLoading: !0
            }),
            u({
                promiseFn: t,
                resolve: f,
                reject: _,
                code: e,
                mfaCodeHandler: p,
                isModalOpen: !0
            })
        );
    }
    function p(e) {
        let { res: t } = e;
        o(c, h, d, {
            ...s,
            error: t.body.message
        });
    }
}
function u(e) {
    let { promiseFn: t, resolve: n, reject: r, code: i, mfaCodeHandler: a = l, isModalOpen: s = !1, ...o } = e;
    return t(null != i ? { code: i } : {}).then(n, (e) => {
        var i, l;
        if (((i = e), (l = s), (i.body && 60008 === i.body.code) || (l && 429 === i.status)))
            return a({
                promiseFn: t,
                resolve: n,
                reject: r,
                res: e,
                ...o
            });
        r(e);
    });
}
function c(e, t) {
    var n, r;
    let { checkEnabled: i = null !== (r = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r, ...o } = null != t ? t : {};
    return new Promise((t, n) => {
        ((0, s.d)(i) ? l : u)({
            promiseFn: e,
            resolve: t,
            reject: n,
            ...o
        });
    });
}
