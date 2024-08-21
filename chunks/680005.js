t.d(n, {
    Y: function () {
        return v;
    },
    p: function () {
        return T;
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
    d = t(696906),
    u = t(703656),
    S = t(626135),
    m = t(74538),
    I = t(937615),
    x = t(110742),
    f = t(981631),
    _ = t(474936),
    p = t(689938),
    h = t(986357);
function T(e) {
    let { appId: n, className: t, groupListingId: l, groupListingType: r, guildId: o, onClick: s, onHasClicked: a, skuId: c, subPlan: u, icon: S } = e,
        { openModal: T } = (0, d.Z)({
            guildId: o,
            groupListingId: l,
            showBenefitsFirst: !1,
            analyticsLocation: f.Sbl.APP_STOREFRONT,
            skuId: c
        }),
        v = (0, x.M)(c),
        g = (0, m.aS)(u.id);
    return 'guild' !== r && ('user' !== r || v)
        ? (0, i.jsx)(N, {
              className: t,
              children: p.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          })
        : (0, i.jsx)(E, {
              appId: n,
              skuId: c,
              onClick: (e) => {
                  (null != s ? s : T)(e), null == a || a();
              },
              className: t,
              children: (0, i.jsxs)('div', {
                  className: h.btnContent,
                  children: [S, p.Z.Messages.STOREFRONT_SUBSCRIBE_FOR.format({ rate: (0, I.og)((0, I.T4)(g.amount, g.currency), _.rV.MONTH, 1) })]
              })
          });
}
function v(e) {
    let { appId: n, className: t, onClick: l, onHasClicked: r, sku: a, icon: d } = e,
        { analyticsLocations: u } = (0, s.ZP)(o.Z.APP_STOREFRONT),
        S = () => {
            (0, c.Z)({
                applicationId: n,
                skuId: a.id,
                analyticsLocations: u
            });
        },
        m = (0, x.M)(a.id),
        _ = a.type === f.epS.DURABLE && m,
        { price: T } = a;
    return null == T
        ? null
        : _
          ? (0, i.jsx)(N, {
                className: t,
                children: p.Z.Messages.COLLECTIBLES_ALREADY_OWNED
            })
          : (0, i.jsx)(E, {
                appId: n,
                skuId: a.id,
                onClick: (e) => {
                    (null != l ? l : S)(e), null == r || r();
                },
                className: t,
                children: (0, i.jsxs)('div', {
                    className: h.btnContent,
                    children: [d, p.Z.Messages.STOREFRONT_PURCHASE_FOR.format({ price: (0, I.T4)(T.amount, T.currency) })]
                })
            });
}
function E(e) {
    let { appId: n, skuId: t, onClick: o, ...s } = e,
        c = (0, a.Z)();
    return (0, i.jsx)(r.Button, {
        ...s,
        onClick: (e) => {
            if (
                (S.default.track(f.rMx.STOREFRONT_PURCHASE_CLICKED, {
                    application_id: n,
                    sku_id: t
                }),
                !c)
            ) {
                e.preventDefault(), e.stopPropagation();
                let i = f.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t),
                    r = (0, l.U)(i, !1);
                (0, u.uL)(r);
                return;
            }
            null == o || o(e);
        }
    });
}
function N(e) {
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
