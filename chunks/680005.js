t.d(n, {
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
    r = t(481060),
    o = t(100527),
    a = t(906732),
    s = t(887706),
    u = t(929011),
    c = t(696906),
    d = t(703656),
    p = t(626135),
    m = t(937615),
    v = t(110742),
    f = t(981631),
    I = t(689938),
    h = t(962083);
function S(e) {
    let { appId: n, className: t, onClick: i, onHasClicked: r, skuId: o, subscriptionPlan: a, icon: s, cannotOpenReason: u } = e,
        d = (0, m.xg)(a),
        p = null == u || u === c.HO.LoggedOut || u === c.HO.Loading,
        v = (0, c.FC)(u, d);
    return p
        ? (0, l.jsx)(g, {
              appId: n,
              skuId: o,
              onClick: (e) => {
                  i(e), null == r || r();
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
              children: v
          });
}
function x(e) {
    let { appId: n, className: t, onClick: i, onHasClicked: r, sku: s, icon: c } = e,
        { analyticsLocations: d } = (0, a.ZP)(o.Z.APP_STOREFRONT),
        p = () => {
            (0, u.r)({
                appId: n,
                skuId: s.id,
                analyticsLocations: d
            });
        },
        S = (0, v.M)(s.id),
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
                appId: n,
                skuId: s.id,
                onClick: (e) => {
                    (null != i ? i : p)(e), null == r || r();
                },
                className: t,
                children: (0, l.jsxs)('div', {
                    className: h.btnContent,
                    children: [c, I.Z.Messages.STOREFRONT_PURCHASE_FOR.format({ price: (0, m.T4)(E.amount, E.currency) })]
                })
            });
}
function g(e) {
    let { appId: n, skuId: t, onClick: o, ...a } = e,
        u = (0, s.Z)();
    return (0, l.jsx)(r.Button, {
        ...a,
        onClick: (e) => {
            if (
                (p.default.track(f.rMx.STOREFRONT_PURCHASE_CLICKED, {
                    application_id: n,
                    sku_id: t
                }),
                !u)
            ) {
                e.preventDefault(), e.stopPropagation();
                let l = f.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t),
                    r = (0, i.Ui)(l, !1);
                (0, d.uL)(r);
                return;
            }
            null == o || o(e);
        }
    });
}
function T(e) {
    let { className: n, children: t } = e;
    return (0, l.jsx)(r.Button, {
        disabled: !0,
        className: n,
        look: r.Button.Looks.OUTLINED,
        color: r.Button.Colors.PRIMARY,
        children: t
    });
}
