t.d(e, {
    Y: function () {
        return x;
    },
    p: function () {
        return S;
    }
});
var l = t(200651);
t(192379);
var i = t(860911),
    r = t(481060),
    s = t(100527),
    a = t(906732),
    o = t(887706),
    u = t(929011),
    c = t(696906),
    d = t(703656),
    f = t(626135),
    p = t(937615),
    v = t(110742),
    m = t(981631),
    h = t(689938),
    I = t(962083);
function S(n) {
    let { appId: e, className: t, onClick: i, onHasClicked: r, skuId: s, subscriptionPlan: a, icon: o, cannotOpenReason: u } = n,
        d = null != a ? (0, p.xg)(a) : null,
        f = null == u || u === c.HO.Loading,
        v = (0, c.FC)(u, null != d ? d : '');
    return f
        ? (0, l.jsx)(E, {
              appId: e,
              skuId: s,
              onClick: (n) => {
                  i(n), null == r || r();
              },
              className: t,
              submitting: u === c.HO.Loading,
              children: (0, l.jsxs)('div', {
                  className: I.btnContent,
                  children: [o, null != d ? h.Z.Messages.STOREFRONT_SUBSCRIBE_FOR.format({ rate: d }) : h.Z.Messages.STOREFRONT_SUBSCRIBE]
              })
          })
        : (0, l.jsx)(T, {
              className: t,
              children: v
          });
}
function x(n) {
    let { appId: e, className: t, onClick: i, onHasClicked: r, sku: o, icon: c } = n,
        { analyticsLocations: d } = (0, a.ZP)(s.Z.APP_STOREFRONT),
        f = () => {
            (0, u.r)({
                appId: e,
                skuId: o.id,
                analyticsLocations: d
            });
        },
        S = (0, v.M)(o.id),
        x = o.type === m.epS.DURABLE && S,
        { price: g } = o;
    return null == g
        ? null
        : x
          ? (0, l.jsx)(T, {
                className: t,
                children: h.Z.Messages.COLLECTIBLES_ALREADY_OWNED
            })
          : (0, l.jsx)(E, {
                appId: e,
                skuId: o.id,
                onClick: (n) => {
                    (null != i ? i : f)(n), null == r || r();
                },
                className: t,
                children: (0, l.jsxs)('div', {
                    className: I.btnContent,
                    children: [c, h.Z.Messages.STOREFRONT_PURCHASE_FOR.format({ price: (0, p.T4)(g.amount, g.currency) })]
                })
            });
}
function E(n) {
    let { appId: e, skuId: t, onClick: s, ...a } = n,
        u = (0, o.Z)();
    return (0, l.jsx)(r.Button, {
        ...a,
        onClick: (n) => {
            if (
                (f.default.track(m.rMx.STOREFRONT_PURCHASE_CLICKED, {
                    application_id: e,
                    sku_id: t
                }),
                !u)
            ) {
                n.preventDefault(), n.stopPropagation();
                let l = m.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, t),
                    r = (0, i.Ui)(l, !1);
                (0, d.uL)(r);
                return;
            }
            null == s || s(n);
        }
    });
}
function T(n) {
    let { className: e, children: t } = n;
    return (0, l.jsx)(r.Button, {
        disabled: !0,
        className: e,
        look: r.Button.Looks.OUTLINED,
        color: r.Button.Colors.PRIMARY,
        children: t
    });
}
