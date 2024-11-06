e.d(t, {
    Y: function () {
        return I;
    },
    p: function () {
        return g;
    }
});
var l = e(200651);
e(192379);
var i = e(860911),
    r = e(481060),
    u = e(100527),
    a = e(906732),
    o = e(887706),
    s = e(929011),
    c = e(696906),
    d = e(703656),
    f = e(626135),
    p = e(937615),
    v = e(110742),
    m = e(981631),
    h = e(388032),
    S = e(962083);
function g(n) {
    let { appId: t, className: e, onClick: i, onHasClicked: r, skuId: u, subscriptionPlan: a, icon: o, cannotOpenReason: s } = n,
        d = null != a ? (0, p.xg)(a) : null,
        f = null == s || s === c.HO.Loading,
        v = (0, c.FC)(s, null != d ? d : '');
    return f
        ? (0, l.jsx)(b, {
              appId: t,
              skuId: u,
              onClick: (n) => {
                  i(n), null == r || r();
              },
              className: e,
              submitting: s === c.HO.Loading,
              children: (0, l.jsxs)('div', {
                  className: S.btnContent,
                  children: [o, null != d ? h.intl.formatToPlainString(h.t.i4T8v7, { rate: d }) : h.intl.string(h.t.uuzaAA)]
              })
          })
        : (0, l.jsx)(Z, {
              className: e,
              children: v
          });
}
function I(n) {
    let { appId: t, className: e, onClick: i, onHasClicked: r, sku: o, icon: c } = n,
        { analyticsLocations: d } = (0, a.ZP)(u.Z.APP_STOREFRONT),
        f = () => {
            (0, s.r)({
                appId: t,
                skuId: o.id,
                analyticsLocations: d
            });
        },
        g = (0, v.M)(o.id),
        I = o.type === m.epS.DURABLE && g,
        { price: x } = o;
    return null == x
        ? null
        : I
          ? (0, l.jsx)(Z, {
                className: e,
                children: h.intl.string(h.t['/bUsx8'])
            })
          : (0, l.jsx)(b, {
                appId: t,
                skuId: o.id,
                onClick: (n) => {
                    (null != i ? i : f)(n), null == r || r();
                },
                className: e,
                children: (0, l.jsxs)('div', {
                    className: S.btnContent,
                    children: [c, h.intl.format(h.t.Xp5WTk, { price: (0, p.T4)(x.amount, x.currency) })]
                })
            });
}
function b(n) {
    let { appId: t, skuId: e, onClick: u, ...a } = n,
        s = (0, o.Z)();
    return (0, l.jsx)(r.Button, {
        ...a,
        onClick: (n) => {
            if (
                (f.default.track(m.rMx.STOREFRONT_PURCHASE_CLICKED, {
                    application_id: t,
                    sku_id: e
                }),
                !s)
            ) {
                n.preventDefault(), n.stopPropagation();
                let l = m.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, e),
                    r = (0, i.Ui)(l, !1);
                (0, d.uL)(r);
                return;
            }
            null == u || u(n);
        }
    });
}
function Z(n) {
    let { className: t, children: e } = n;
    return (0, l.jsx)(r.Button, {
        disabled: !0,
        className: t,
        look: r.Button.Looks.OUTLINED,
        color: r.Button.Colors.PRIMARY,
        children: e
    });
}
