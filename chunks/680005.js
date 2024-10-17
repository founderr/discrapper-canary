t.d(e, {
    Y: function () {
        return x;
    },
    p: function () {
        return S;
    }
});
var l = t(735250);
t(470079);
var i = t(860911),
    o = t(481060),
    r = t(100527),
    a = t(906732),
    s = t(887706),
    u = t(929011),
    c = t(696906),
    d = t(703656),
    p = t(626135),
    v = t(937615),
    m = t(110742),
    f = t(981631),
    I = t(689938),
    h = t(962083);
function S(n) {
    let { appId: e, className: t, onClick: i, onHasClicked: o, skuId: r, subscriptionPlan: a, icon: s, cannotOpenReason: u } = n,
        d = (0, v.xg)(a),
        p = null == u || u === c.HO.LoggedOut || u === c.HO.Loading,
        m = (0, c.FC)(u, d);
    return p
        ? (0, l.jsx)(g, {
              appId: e,
              skuId: r,
              onClick: (n) => {
                  i(n), null == o || o();
              },
              className: t,
              submitting: u === c.HO.Loading,
              children: (0, l.jsxs)('div', {
                  className: h.btnContent,
                  children: [s, I.Z.Messages.STOREFRONT_SUBSCRIBE_FOR.format({ rate: d })]
              })
          })
        : (0, l.jsx)(T, {
              className: t,
              children: m
          });
}
function x(n) {
    let { appId: e, className: t, onClick: i, onHasClicked: o, sku: s, icon: c } = n,
        { analyticsLocations: d } = (0, a.ZP)(r.Z.APP_STOREFRONT),
        p = () => {
            (0, u.r)({
                appId: e,
                skuId: s.id,
                analyticsLocations: d
            });
        },
        S = (0, m.M)(s.id),
        x = s.type === f.epS.DURABLE && S,
        { price: E } = s;
    return null == E
        ? null
        : x
          ? (0, l.jsx)(T, {
                className: t,
                children: I.Z.Messages.COLLECTIBLES_ALREADY_OWNED
            })
          : (0, l.jsx)(g, {
                appId: e,
                skuId: s.id,
                onClick: (n) => {
                    (null != i ? i : p)(n), null == o || o();
                },
                className: t,
                children: (0, l.jsxs)('div', {
                    className: h.btnContent,
                    children: [c, I.Z.Messages.STOREFRONT_PURCHASE_FOR.format({ price: (0, v.T4)(E.amount, E.currency) })]
                })
            });
}
function g(n) {
    let { appId: e, skuId: t, onClick: r, ...a } = n,
        u = (0, s.Z)();
    return (0, l.jsx)(o.Button, {
        ...a,
        onClick: (n) => {
            if (
                (p.default.track(f.rMx.STOREFRONT_PURCHASE_CLICKED, {
                    application_id: e,
                    sku_id: t
                }),
                !u)
            ) {
                n.preventDefault(), n.stopPropagation();
                let l = f.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, t),
                    o = (0, i.Ui)(l, !1);
                (0, d.uL)(o);
                return;
            }
            null == r || r(n);
        }
    });
}
function T(n) {
    let { className: e, children: t } = n;
    return (0, l.jsx)(o.Button, {
        disabled: !0,
        className: e,
        look: o.Button.Looks.OUTLINED,
        color: o.Button.Colors.PRIMARY,
        children: t
    });
}
