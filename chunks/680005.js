t.d(n, {
    Y: function () {
        return x;
    },
    p: function () {
        return I;
    }
});
var l = t(735250);
t(470079);
var i = t(860911),
    a = t(481060),
    s = t(100527),
    r = t(906732),
    o = t(887706),
    u = t(87484),
    c = t(703656),
    d = t(626135),
    p = t(937615),
    m = t(110742),
    v = t(981631),
    f = t(689938),
    h = t(962083);
function I(e) {
    let { appId: n, className: t, onClick: i, onHasClicked: a, skuId: s, subscriptionPlan: r, icon: o, canPurchase: u } = e;
    return u
        ? (0, l.jsx)(S, {
              appId: n,
              skuId: s,
              onClick: (e) => {
                  i(e), null == a || a();
              },
              className: t,
              children: (0, l.jsxs)('div', {
                  className: h.btnContent,
                  children: [o, f.Z.Messages.STOREFRONT_SUBSCRIBE_FOR.format({ rate: (0, p.xg)(r) })]
              })
          })
        : (0, l.jsx)(T, {
              className: t,
              children: f.Z.Messages.APPLICATION_SUBSCRIPTION_CURRENT_PLAN
          });
}
function x(e) {
    let { appId: n, className: t, onClick: i, onHasClicked: a, sku: o, icon: c } = e,
        { analyticsLocations: d } = (0, r.ZP)(s.Z.APP_STOREFRONT),
        I = () => {
            (0, u.Z)({
                applicationId: n,
                skuId: o.id,
                analyticsLocations: d
            });
        },
        x = (0, m.M)(o.id),
        N = o.type === v.epS.DURABLE && x,
        { price: E } = o;
    return null == E
        ? null
        : N
          ? (0, l.jsx)(T, {
                className: t,
                children: f.Z.Messages.COLLECTIBLES_ALREADY_OWNED
            })
          : (0, l.jsx)(S, {
                appId: n,
                skuId: o.id,
                onClick: (e) => {
                    (null != i ? i : I)(e), null == a || a();
                },
                className: t,
                children: (0, l.jsxs)('div', {
                    className: h.btnContent,
                    children: [c, f.Z.Messages.STOREFRONT_PURCHASE_FOR.format({ price: (0, p.T4)(E.amount, E.currency) })]
                })
            });
}
function S(e) {
    let { appId: n, skuId: t, onClick: s, ...r } = e,
        u = (0, o.Z)();
    return (0, l.jsx)(a.Button, {
        ...r,
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
                    a = (0, i.Ui)(l, !1);
                (0, c.uL)(a);
                return;
            }
            null == s || s(e);
        }
    });
}
function T(e) {
    let { className: n, children: t } = e;
    return (0, l.jsx)(a.Button, {
        disabled: !0,
        className: n,
        look: a.Button.Looks.OUTLINED,
        color: a.Button.Colors.PRIMARY,
        children: t
    });
}
