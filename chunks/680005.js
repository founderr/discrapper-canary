t.d(n, {
    Y: function () {
        return T;
    },
    p: function () {
        return h;
    }
});
var i = t(735250);
t(470079);
var l = t(860911),
    r = t(481060),
    o = t(100527),
    s = t(906732),
    a = t(887706),
    c = t(87484),
    u = t(696906),
    d = t(703656),
    S = t(626135),
    m = t(937615),
    f = t(110742),
    I = t(981631),
    x = t(474936),
    _ = t(689938),
    p = t(986357);
function h(e) {
    let { appId: n, className: t, groupListingId: l, subscriptionType: r, guildId: o, onClick: s, onHasClicked: a, skuId: c, subscriptionPlan: d, icon: S } = e,
        { openModal: h } = (0, u.Z)({
            guildId: o,
            groupListingId: l,
            showBenefitsFirst: !1,
            analyticsLocation: I.Sbl.APP_STOREFRONT,
            skuId: c
        }),
        T = (0, f.M)(c);
    return 'guild' !== r && ('user' !== r || T)
        ? (0, i.jsx)(E, {
              className: t,
              children: _.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          })
        : (0, i.jsx)(v, {
              appId: n,
              skuId: c,
              onClick: (e) => {
                  (null != s ? s : h)(e), null == a || a();
              },
              className: t,
              children: (0, i.jsxs)('div', {
                  className: p.btnContent,
                  children: [S, _.Z.Messages.STOREFRONT_SUBSCRIBE_FOR.format({ rate: (0, m.og)((0, m.T4)(d.price, d.currency), x.rV.MONTH, 1) })]
              })
          });
}
function T(e) {
    let { appId: n, className: t, onClick: l, onHasClicked: r, sku: a, icon: u } = e,
        { analyticsLocations: d } = (0, s.ZP)(o.Z.APP_STOREFRONT),
        S = () => {
            (0, c.Z)({
                applicationId: n,
                skuId: a.id,
                analyticsLocations: d
            });
        },
        x = (0, f.M)(a.id),
        h = a.type === I.epS.DURABLE && x,
        { price: T } = a;
    return null == T
        ? null
        : h
          ? (0, i.jsx)(E, {
                className: t,
                children: _.Z.Messages.COLLECTIBLES_ALREADY_OWNED
            })
          : (0, i.jsx)(v, {
                appId: n,
                skuId: a.id,
                onClick: (e) => {
                    (null != l ? l : S)(e), null == r || r();
                },
                className: t,
                children: (0, i.jsxs)('div', {
                    className: p.btnContent,
                    children: [u, _.Z.Messages.STOREFRONT_PURCHASE_FOR.format({ price: (0, m.T4)(T.amount, T.currency) })]
                })
            });
}
function v(e) {
    let { appId: n, skuId: t, onClick: o, ...s } = e,
        c = (0, a.Z)();
    return (0, i.jsx)(r.Button, {
        ...s,
        onClick: (e) => {
            if (
                (S.default.track(I.rMx.STOREFRONT_PURCHASE_CLICKED, {
                    application_id: n,
                    sku_id: t
                }),
                !c)
            ) {
                e.preventDefault(), e.stopPropagation();
                let i = I.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t),
                    r = (0, l.U)(i, !1);
                (0, d.uL)(r);
                return;
            }
            null == o || o(e);
        }
    });
}
function E(e) {
    let { className: n, children: t } = e;
    return (0, i.jsx)(r.Button, {
        disabled: !0,
        className: n,
        look: r.Button.Looks.OUTLINED,
        color: r.Button.Colors.PRIMARY,
        size: r.Button.Sizes.SMALL,
        children: t
    });
}
