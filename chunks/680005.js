n.d(t, {
    Y: function () {
        return I;
    },
    p: function () {
        return m;
    }
});
var r = n(735250);
n(470079);
var i = n(860911),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(887706),
    u = n(87484),
    c = n(703656),
    d = n(626135),
    _ = n(937615),
    E = n(110742),
    f = n(981631),
    h = n(689938),
    p = n(962083);
function m(e) {
    let { appId: t, className: n, onClick: i, onHasClicked: a, skuId: o, subscriptionPlan: s, icon: l, canPurchase: u, cannotPurchaseReason: c } = e,
        d = (e) => {
            i(e), null == a || a();
        };
    return u
        ? (0, r.jsx)(T, {
              appId: t,
              skuId: o,
              onClick: d,
              className: n,
              children: (0, r.jsxs)('div', {
                  className: p.btnContent,
                  children: [l, h.Z.Messages.STOREFRONT_SUBSCRIBE_FOR.format({ rate: (0, _.xg)(s) })]
              })
          })
        : (0, r.jsx)(g, {
              className: n,
              children: c
          });
}
function I(e) {
    let { appId: t, className: n, onClick: i, onHasClicked: a, sku: l, icon: c } = e,
        { analyticsLocations: d } = (0, s.ZP)(o.Z.APP_STOREFRONT),
        m = () => {
            (0, u.Z)({
                applicationId: t,
                skuId: l.id,
                analyticsLocations: d
            });
        },
        I = (0, E.M)(l.id),
        S = l.type === f.epS.DURABLE && I,
        { price: A } = l;
    if (null == A) return null;
    let v = (e) => {
        (null != i ? i : m)(e), null == a || a();
    };
    return S
        ? (0, r.jsx)(g, {
              className: n,
              children: h.Z.Messages.COLLECTIBLES_ALREADY_OWNED
          })
        : (0, r.jsx)(T, {
              appId: t,
              skuId: l.id,
              onClick: v,
              className: n,
              children: (0, r.jsxs)('div', {
                  className: p.btnContent,
                  children: [c, h.Z.Messages.STOREFRONT_PURCHASE_FOR.format({ price: (0, _.T4)(A.amount, A.currency) })]
              })
          });
}
function T(e) {
    let { appId: t, skuId: n, onClick: o, ...s } = e,
        u = (0, l.Z)(),
        _ = (e) => {
            if (
                (d.default.track(f.rMx.STOREFRONT_PURCHASE_CLICKED, {
                    application_id: t,
                    sku_id: n
                }),
                !u)
            ) {
                e.preventDefault(), e.stopPropagation();
                let r = f.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n),
                    a = (0, i.Ui)(r, !1);
                (0, c.uL)(a);
                return;
            }
            null == o || o(e);
        };
    return (0, r.jsx)(a.Button, {
        ...s,
        onClick: _
    });
}
function g(e) {
    let { className: t, children: n } = e;
    return (0, r.jsx)(a.Button, {
        disabled: !0,
        className: t,
        look: a.Button.Looks.OUTLINED,
        color: a.Button.Colors.PRIMARY,
        children: n
    });
}
