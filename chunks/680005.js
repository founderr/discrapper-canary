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
    a = t(100527),
    o = t(906732),
    s = t(887706),
    u = t(929011),
    c = t(696906),
    d = t(703656),
    p = t(626135),
    f = t(937615),
    m = t(110742),
    v = t(981631),
    h = t(689938),
    I = t(962083);
function S(n) {
    let { appId: e, className: t, onClick: i, onHasClicked: r, skuId: a, subscriptionPlan: o, icon: s, cannotOpenReason: u } = n,
        d = null != o ? (0, f.xg)(o) : null,
        p = null == u || u === c.HO.Loading,
        m = (0, c.FC)(u, null != d ? d : '');
    return p
        ? (0, l.jsx)(T, {
              appId: e,
              skuId: a,
              onClick: (n) => {
                  i(n), null == r || r();
              },
              className: t,
              submitting: u === c.HO.Loading,
              children: (0, l.jsxs)('div', {
                  className: I.btnContent,
                  children: [s, null != d ? h.Z.Messages.STOREFRONT_SUBSCRIBE_FOR.format({ rate: d }) : h.Z.Messages.STOREFRONT_SUBSCRIBE]
              })
          })
        : (0, l.jsx)(E, {
              className: t,
              children: m
          });
}
function x(n) {
    let { appId: e, className: t, onClick: i, onHasClicked: r, sku: s, icon: c } = n,
        { analyticsLocations: d } = (0, o.ZP)(a.Z.APP_STOREFRONT),
        p = () => {
            (0, u.r)({
                appId: e,
                skuId: s.id,
                analyticsLocations: d
            });
        },
        S = (0, m.M)(s.id),
        x = s.type === v.epS.DURABLE && S,
        { price: g } = s;
    return null == g
        ? null
        : x
          ? (0, l.jsx)(E, {
                className: t,
                children: h.Z.Messages.COLLECTIBLES_ALREADY_OWNED
            })
          : (0, l.jsx)(T, {
                appId: e,
                skuId: s.id,
                onClick: (n) => {
                    (null != i ? i : p)(n), null == r || r();
                },
                className: t,
                children: (0, l.jsxs)('div', {
                    className: I.btnContent,
                    children: [c, h.Z.Messages.STOREFRONT_PURCHASE_FOR.format({ price: (0, f.T4)(g.amount, g.currency) })]
                })
            });
}
function T(n) {
    let { appId: e, skuId: t, onClick: a, ...o } = n,
        u = (0, s.Z)();
    return (0, l.jsx)(r.Button, {
        ...o,
        onClick: (n) => {
            if (
                (p.default.track(v.rMx.STOREFRONT_PURCHASE_CLICKED, {
                    application_id: e,
                    sku_id: t
                }),
                !u)
            ) {
                n.preventDefault(), n.stopPropagation();
                let l = v.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, t),
                    r = (0, i.Ui)(l, !1);
                (0, d.uL)(r);
                return;
            }
            null == a || a(n);
        }
    });
}
function E(n) {
    let { className: e, children: t } = n;
    return (0, l.jsx)(r.Button, {
        disabled: !0,
        className: e,
        look: r.Button.Looks.OUTLINED,
        color: r.Button.Colors.PRIMARY,
        children: t
    });
}
