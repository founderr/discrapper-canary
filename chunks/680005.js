t.d(n, {
    Y: function () {
        return S;
    },
    p: function () {
        return h;
    }
});
var l = t(735250);
t(470079);
var i = t(860911),
    a = t(481060),
    r = t(100527),
    o = t(906732),
    s = t(887706),
    u = t(87484),
    c = t(703656),
    d = t(626135),
    p = t(937615),
    f = t(110742),
    m = t(981631),
    v = t(689938),
    I = t(962083);
function h(e) {
    let { appId: n, className: t, onClick: i, onHasClicked: a, skuId: r, subscriptionPlan: o, icon: s, canPurchase: u, cannotPurchaseReason: c } = e;
    return u
        ? (0, l.jsx)(x, {
              appId: n,
              skuId: r,
              onClick: (e) => {
                  i(e), null == a || a();
              },
              className: t,
              children: (0, l.jsxs)('div', {
                  className: I.btnContent,
                  children: [s, v.Z.Messages.STOREFRONT_SUBSCRIBE_FOR.format({ rate: (0, p.xg)(o) })]
              })
          })
        : (0, l.jsx)(N, {
              className: t,
              children: c
          });
}
function S(e) {
    let { appId: n, className: t, onClick: i, onHasClicked: a, sku: s, icon: c } = e,
        { analyticsLocations: d } = (0, o.ZP)(r.Z.APP_STOREFRONT),
        h = () => {
            (0, u.Z)({
                applicationId: n,
                skuId: s.id,
                analyticsLocations: d
            });
        },
        S = (0, f.M)(s.id),
        T = s.type === m.epS.DURABLE && S,
        { price: Z } = s;
    return null == Z
        ? null
        : T
          ? (0, l.jsx)(N, {
                className: t,
                children: v.Z.Messages.COLLECTIBLES_ALREADY_OWNED
            })
          : (0, l.jsx)(x, {
                appId: n,
                skuId: s.id,
                onClick: (e) => {
                    (null != i ? i : h)(e), null == a || a();
                },
                className: t,
                children: (0, l.jsxs)('div', {
                    className: I.btnContent,
                    children: [c, v.Z.Messages.STOREFRONT_PURCHASE_FOR.format({ price: (0, p.T4)(Z.amount, Z.currency) })]
                })
            });
}
function x(e) {
    let { appId: n, skuId: t, onClick: r, ...o } = e,
        u = (0, s.Z)();
    return (0, l.jsx)(a.Button, {
        ...o,
        onClick: (e) => {
            if (
                (d.default.track(m.rMx.STOREFRONT_PURCHASE_CLICKED, {
                    application_id: n,
                    sku_id: t
                }),
                !u)
            ) {
                e.preventDefault(), e.stopPropagation();
                let l = m.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t),
                    a = (0, i.Ui)(l, !1);
                (0, c.uL)(a);
                return;
            }
            null == r || r(e);
        }
    });
}
function N(e) {
    let { className: n, children: t } = e;
    return (0, l.jsx)(a.Button, {
        disabled: !0,
        className: n,
        look: a.Button.Looks.OUTLINED,
        color: a.Button.Colors.PRIMARY,
        children: t
    });
}
