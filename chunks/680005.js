t.d(n, {
    Y: function () {
        return x;
    },
    p: function () {
        return g;
    }
});
var l = t(735250);
t(470079);
var i = t(860911),
    r = t(481060),
    s = t(100527),
    o = t(906732),
    a = t(887706),
    u = t(87484),
    c = t(696906),
    d = t(703656),
    f = t(626135),
    p = t(937615),
    m = t(110742),
    v = t(981631),
    I = t(474936),
    S = t(689938),
    h = t(962083);
function g(e) {
    let { appId: n, className: t, groupListingId: i, subscriptionType: r, guildId: s, onClick: o, onHasClicked: a, skuId: u, subscriptionPlan: d, icon: f } = e,
        { openModal: g } = (0, c.Z)({
            guildId: s,
            groupListingId: i,
            showBenefitsFirst: !1,
            analyticsLocation: v.Sbl.APP_STOREFRONT,
            skuId: u
        }),
        x = (0, m.M)(u);
    return 'guild' !== r && ('user' !== r || x)
        ? (0, l.jsx)(N, {
              className: t,
              children: S.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
          })
        : (0, l.jsx)(_, {
              appId: n,
              skuId: u,
              onClick: (e) => {
                  (null != o ? o : g)(e), null == a || a();
              },
              className: t,
              children: (0, l.jsxs)('div', {
                  className: h.btnContent,
                  children: [f, S.Z.Messages.STOREFRONT_SUBSCRIBE_FOR.format({ rate: (0, p.og)((0, p.T4)(d.price, d.currency), I.rV.MONTH, 1) })]
              })
          });
}
function x(e) {
    let { appId: n, className: t, onClick: i, onHasClicked: r, sku: a, icon: c } = e,
        { analyticsLocations: d } = (0, o.ZP)(s.Z.APP_STOREFRONT),
        f = () => {
            (0, u.Z)({
                applicationId: n,
                skuId: a.id,
                analyticsLocations: d
            });
        },
        I = (0, m.M)(a.id),
        g = a.type === v.epS.DURABLE && I,
        { price: x } = a;
    return null == x
        ? null
        : g
          ? (0, l.jsx)(N, {
                className: t,
                children: S.Z.Messages.COLLECTIBLES_ALREADY_OWNED
            })
          : (0, l.jsx)(_, {
                appId: n,
                skuId: a.id,
                onClick: (e) => {
                    (null != i ? i : f)(e), null == r || r();
                },
                className: t,
                children: (0, l.jsxs)('div', {
                    className: h.btnContent,
                    children: [c, S.Z.Messages.STOREFRONT_PURCHASE_FOR.format({ price: (0, p.T4)(x.amount, x.currency) })]
                })
            });
}
function _(e) {
    let { appId: n, skuId: t, onClick: s, ...o } = e,
        u = (0, a.Z)();
    return (0, l.jsx)(r.Button, {
        ...o,
        onClick: (e) => {
            if (
                (f.default.track(v.rMx.STOREFRONT_PURCHASE_CLICKED, {
                    application_id: n,
                    sku_id: t
                }),
                !u)
            ) {
                e.preventDefault(), e.stopPropagation();
                let l = v.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t),
                    r = (0, i.U)(l, !1);
                (0, d.uL)(r);
                return;
            }
            null == s || s(e);
        }
    });
}
function N(e) {
    let { className: n, children: t } = e;
    return (0, l.jsx)(r.Button, {
        disabled: !0,
        className: n,
        look: r.Button.Looks.OUTLINED,
        color: r.Button.Colors.PRIMARY,
        size: r.Button.Sizes.SMALL,
        children: t
    });
}
