n.d(t, {
    Y: function () {
        return T;
    },
    p: function () {
        return I;
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
    c = n(696906),
    d = n(703656),
    _ = n(626135),
    E = n(937615),
    f = n(110742),
    h = n(981631),
    p = n(689938),
    m = n(962083);
function I(e) {
    let { appId: t, className: n, groupListingId: i, subscriptionType: a, guildId: o, onClick: s, onHasClicked: l, skuId: u, subscriptionPlan: d, icon: _ } = e,
        { openModal: I } = (0, c.Z)({
            guildId: o,
            groupListingId: i,
            showBenefitsFirst: !1,
            analyticsLocation: h.Sbl.APP_STOREFRONT,
            skuId: u
        }),
        T = (0, f.M)(u),
        A = (e) => {
            (null != s ? s : I)(e), null == l || l();
        };
    return 'guild' !== a && ('user' !== a || T)
        ? (0, r.jsx)(S, {
              className: n,
              children: p.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          })
        : (0, r.jsx)(g, {
              appId: t,
              skuId: u,
              onClick: A,
              className: n,
              children: (0, r.jsxs)('div', {
                  className: m.btnContent,
                  children: [_, p.Z.Messages.STOREFRONT_SUBSCRIBE_FOR.format({ rate: (0, E.xg)(d) })]
              })
          });
}
function T(e) {
    let { appId: t, className: n, onClick: i, onHasClicked: a, sku: l, icon: c } = e,
        { analyticsLocations: d } = (0, s.ZP)(o.Z.APP_STOREFRONT),
        _ = () => {
            (0, u.Z)({
                applicationId: t,
                skuId: l.id,
                analyticsLocations: d
            });
        },
        I = (0, f.M)(l.id),
        T = l.type === h.epS.DURABLE && I,
        { price: A } = l;
    if (null == A) return null;
    let v = (e) => {
        (null != i ? i : _)(e), null == a || a();
    };
    return T
        ? (0, r.jsx)(S, {
              className: n,
              children: p.Z.Messages.COLLECTIBLES_ALREADY_OWNED
          })
        : (0, r.jsx)(g, {
              appId: t,
              skuId: l.id,
              onClick: v,
              className: n,
              children: (0, r.jsxs)('div', {
                  className: m.btnContent,
                  children: [c, p.Z.Messages.STOREFRONT_PURCHASE_FOR.format({ price: (0, E.T4)(A.amount, A.currency) })]
              })
          });
}
function g(e) {
    let { appId: t, skuId: n, onClick: o, ...s } = e,
        u = (0, l.Z)(),
        c = (e) => {
            if (
                (_.default.track(h.rMx.STOREFRONT_PURCHASE_CLICKED, {
                    application_id: t,
                    sku_id: n
                }),
                !u)
            ) {
                e.preventDefault(), e.stopPropagation();
                let r = h.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n),
                    a = (0, i.U)(r, !1);
                (0, d.uL)(a);
                return;
            }
            null == o || o(e);
        };
    return (0, r.jsx)(a.Button, {
        ...s,
        onClick: c
    });
}
function S(e) {
    let { className: t, children: n } = e;
    return (0, r.jsx)(a.Button, {
        disabled: !0,
        className: t,
        look: a.Button.Looks.OUTLINED,
        color: a.Button.Colors.PRIMARY,
        size: a.Button.Sizes.SMALL,
        children: n
    });
}
