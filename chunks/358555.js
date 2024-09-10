i.d(n, {
    Z: function () {
        return m;
    }
});
var t = i(735250);
i(470079);
var o = i(120356),
    a = i.n(o),
    r = i(442837),
    l = i(481060),
    s = i(666188),
    c = i(372769),
    d = i(523751),
    u = i(623624),
    _ = i(290034),
    g = i(271383),
    b = i(594174),
    h = i(267642),
    f = i(981631),
    E = i(689938),
    T = i(427542);
function I(e) {
    let { guild: n, isBannerVisible: i, disableBoostClick: o } = e,
        a = (0, r.e7)([b.default, g.ZP], () => {
            let e = b.default.getCurrentUser();
            return g.ZP.isMember(n.id, null == e ? void 0 : e.id);
        }),
        { premiumTier: s, premiumSubscriberCount: c } = n;
    if (0 === c && s === f.Eu4.NONE) return null;
    let d = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                a &&
                    !o &&
                    (0, u.f)({
                        guildId: n.id,
                        location: {
                            section: f.jXE.GUILD_HEADER,
                            object: f.qAy.BOOST_GEM_ICON
                        }
                    });
        },
        I = s === f.Eu4.NONE ? E.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : h.nW(s),
        N = (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)('div', {
                    className: T.tierTooltipTitle,
                    children: I
                }),
                (0, t.jsx)('div', { children: E.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({ subscriberCount: c }) })
            ]
        });
    return (0, t.jsx)('div', {
        className: T.guildIconContainer,
        children: (0, t.jsx)(l.Tooltip, {
            text: N,
            position: 'bottom',
            'aria-label': null != I ? I : '',
            children: (e) =>
                (0, t.jsx)(l.Clickable, {
                    ...e,
                    className: T.__invalid_premiumGuildIcon,
                    onClick: d,
                    children: (0, t.jsx)(_.Z, {
                        premiumTier: s,
                        iconBackgroundClassName: i ? T.boostedGuildTierIconBackgroundWithVisibleBanner : null,
                        iconClassName: i && s !== f.Eu4.TIER_3 ? T.boostedGuildTierMutedIconWithVisibleBanner : null
                    })
                })
        })
    });
}
function N(e) {
    let { guild: n, disableColor: i, disableBoostClick: o } = e;
    return (0, s.Z)(n)
        ? (0, t.jsx)('div', {
              className: T.guildIconV2Container,
              children: (0, t.jsx)(d.Z, {
                  guild: n,
                  tooltipPosition: 'bottom',
                  tooltipColor: l.Tooltip.Colors.PRIMARY,
                  className: a()(T.guildBadge, { [T.disableColor]: i }),
                  disableBoostClick: o
              })
          })
        : (0, t.jsx)('div', {
              className: T.guildIconContainer,
              children: (0, t.jsx)(c.Z, {
                  guild: n,
                  size: 20,
                  tooltipPosition: 'bottom',
                  tooltipColor: l.Tooltip.Colors.PRIMARY,
                  className: a()(T.guildBadge, { [T.disableColor]: i })
              })
          });
}
function m(e) {
    let { guild: n, isBannerVisible: i, disableBoostClick: o } = e;
    return (0, s.Z)(n)
        ? (0, t.jsx)(N, {
              guild: n,
              disableColor: !1,
              disableBoostClick: o
          })
        : n.hasFeature(f.oNc.VERIFIED) || n.hasFeature(f.oNc.PARTNERED)
          ? (0, t.jsx)(N, {
                guild: n,
                disableColor: !i
            })
          : (0, t.jsx)(I, {
                guild: n,
                isBannerVisible: i,
                disableBoostClick: o
            });
}
