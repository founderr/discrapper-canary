let i, a;
r.d(n, {
    Z: function () {
        return p;
    }
});
var s = r(411104);
var o = r(594174),
    l = r(195270);
let u = () => {
    throw Error('updateModal has not been implemented.');
};
{
    let e = r(169480);
    (i = e.showModal), (u = e.updateModalProps), (a = r(952265).Mr);
}
let c = 60008;
function d() {
    var e, n;
    return null !== (n = null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.mfaEnabled) && void 0 !== n && n;
}
function f(e, n) {
    return (e.body && e.body.code === c) || (n && 429 === e.status);
}
function _(e) {
    let { promiseFn: n, resolve: r, reject: s, modalProps: o = {}, hooks: { onEarlyClose: l } = {} } = e;
    if (null == i) {
        null == l || l();
        return;
    }
    let c = i(p, d, o);
    function d() {
        null == l || l();
    }
    function f(e) {
        a(c), r(e);
    }
    function _(e) {
        a(c), s(e);
    }
    function p(e) {
        return (
            u(c, p, d, {
                ...o,
                isLoading: !0
            }),
            h({
                promiseFn: n,
                resolve: f,
                reject: _,
                code: e,
                mfaCodeHandler: m,
                isModalOpen: !0
            })
        );
    }
    function m(e) {
        let { res: n } = e;
        u(c, p, d, {
            ...o,
            error: n.body.message
        });
    }
}
function h(e) {
    let { promiseFn: n, resolve: r, reject: i, code: a, mfaCodeHandler: s = _, isModalOpen: o = !1, ...l } = e;
    return n(null != a ? { code: a } : {}).then(r, (e) => {
        if (f(e, o))
            return s({
                promiseFn: n,
                resolve: r,
                reject: i,
                res: e,
                ...l
            });
        i(e);
    });
}
function p(e, n) {
    let { checkEnabled: r = d(), ...i } = null != n ? n : {};
    return new Promise((n, a) => {
        ((0, l.d)(r) ? _ : h)({
            promiseFn: e,
            resolve: n,
            reject: a,
            ...i
        });
    });
}
