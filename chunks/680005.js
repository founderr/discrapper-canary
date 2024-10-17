t.d(n, {
    Y: function () {
        return S;
    },
    p: function () {
        return I;
    }
});
var l = t(735250);
t(470079);
var i = t(860911),
    s = t(481060),
    a = t(100527),
    o = t(906732),
    r = t(887706),
    u = t(929011),
    c = t(703656),
    d = t(626135),
    p = t(937615),
    m = t(110742),
    v = t(981631),
    f = t(689938),
    h = t(962083);
function I(e) {
    let { appId: n, className: t, onClick: i, onHasClicked: s, skuId: a, subscriptionPlan: o, icon: r, canPurchase: u } = e;
    return u
        ? (0, l.jsx)(x, {
              appId: n,
              skuId: a,
              onClick: (e) => {
                  i(e), null == s || s();
              },
              className: t,
              children: (0, l.jsxs)('div', {
                  className: h.btnContent,
                  children: [r, f.Z.Messages.STOREFRONT_SUBSCRIBE_FOR.format({ rate: (0, p.xg)(o) })]
              })
          })
        : (0, l.jsx)(T, {
              className: t,
              children: f.Z.Messages.APPLICATION_SUBSCRIPTION_CURRENT_PLAN
          });
}
function S(e) {
    let { appId: n, className: t, onClick: i, onHasClicked: s, sku: r, icon: c } = e,
        { analyticsLocations: d } = (0, o.ZP)(a.Z.APP_STOREFRONT),
        I = () => {
            (0, u.r)({
                appId: n,
                skuId: r.id,
                analyticsLocations: d
            });
        },
        S = (0, m.M)(r.id),
        N = r.type === v.epS.DURABLE && S,
        { price: E } = r;
    return null == E
        ? null
        : N
          ? (0, l.jsx)(T, {
                className: t,
                children: f.Z.Messages.COLLECTIBLES_ALREADY_OWNED
            })
          : (0, l.jsx)(x, {
                appId: n,
                skuId: r.id,
                onClick: (e) => {
                    (null != i ? i : I)(e), null == s || s();
                },
                className: t,
                children: (0, l.jsxs)('div', {
                    className: h.btnContent,
                    children: [c, f.Z.Messages.STOREFRONT_PURCHASE_FOR.format({ price: (0, p.T4)(E.amount, E.currency) })]
                })
            });
}
function x(e) {
    let { appId: n, skuId: t, onClick: a, ...o } = e,
        u = (0, r.Z)();
    return (0, l.jsx)(s.Button, {
        ...o,
        onClick: (e) => {
            if (
                (d.default.track(v.rMx.STOREFRONT_PURCHASE_CLICKED, {
                    application_id: n,
                    sku_id: t
                }),
                !u)
            ) {
                e.preventDefault(), e.stopPropagation();
                let l = v.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t),
                    s = (0, i.Ui)(l, !1);
                (0, c.uL)(s);
                return;
            }
            null == a || a(e);
        }
    });
}
function T(e) {
    let { className: n, children: t } = e;
    return (0, l.jsx)(s.Button, {
        disabled: !0,
        className: n,
        look: s.Button.Looks.OUTLINED,
        color: s.Button.Colors.PRIMARY,
        children: t
    });
}
