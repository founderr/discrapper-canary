n.d(t, {
    Z: function () {
        return T;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(100527),
    c = n(906732),
    d = n(436774),
    f = n(104494),
    _ = n(639119),
    p = n(165583),
    h = n(592125),
    m = n(944486),
    g = n(626135),
    E = n(981631),
    v = n(474936),
    b = n(388032),
    I = n(438103);
function S() {
    (0, l.openModalLazy)(async () => {
        let { default: e } = await n.e('3289').then(n.bind(n, 682609));
        return (t) =>
            (0, r.jsx)(e, {
                channel: null,
                ...t
            });
    });
}
function T(e) {
    var t;
    let { className: n, iconOnly: a, remaining: T } = e,
        y = (0, o.e7)([m.Z, h.Z], () => {
            let e = h.Z.getChannel(m.Z.getChannelId());
            return (null == e ? void 0 : e.isPrivate()) ? E.ZY5.DM_CHANNEL : E.ZY5.GUILD_CHANNEL;
        }),
        { analyticsLocations: A } = (0, c.ZP)(u.Z.PREMIUM_UPSELL),
        N = (0, f.Ng)(),
        C = (0, _.N)(),
        R = (0, f.Wp)(N, v.Si.TIER_2),
        O = (null == C ? void 0 : null === (t = C.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === v.Si.TIER_2;
    return (i.useEffect(() => {
        g.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
            type: 'longer messages inline',
            location: {
                location_page: y,
                location_section: E.jXE.CHANNEL_TEXT_AREA
            },
            location_stack: A
        });
    }, [y, A]),
    (O || R) && T < 0)
        ? (0, r.jsx)(p.ZP, {
              type: v.cd.MESSAGE_LENGTH_IN_EDITOR_UPSELL,
              subscriptionTier: v.Si.TIER_2,
              context: T,
              discountOffer: N,
              trialOffer: C,
              children: b.intl.format(b.t.BNAIBQ, { onLearnMore: S })
          })
        : a
          ? (0, r.jsx)(l.Clickable, {
                className: I.iconOnly,
                onClick: () => S(),
                children: (0, r.jsx)(l.Tooltip, {
                    text: b.intl.string(b.t['+eFIjY']),
                    position: 'top',
                    children: (e) =>
                        (0, r.jsx)(l.NitroWheelIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: I.premium,
                            ...e
                        })
                })
            })
          : (0, r.jsxs)('div', {
                className: s()(I.root, n),
                children: [
                    (0, r.jsx)(l.NitroWheelIcon, {
                        size: 'md',
                        className: I.premium,
                        color: d.JX.PREMIUM_TIER_2
                    }),
                    (0, r.jsx)(l.Text, {
                        className: I.text,
                        variant: 'text-sm/normal',
                        children: b.intl.format(b.t.BNAIBQ, { onLearnMore: S })
                    })
                ]
            });
}
