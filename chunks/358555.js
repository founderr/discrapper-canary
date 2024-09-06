t.d(n, {
    Z: function () {
        return m;
    }
});
var r = t(735250);
t(470079);
var i = t(120356),
    o = t.n(i),
    l = t(442837),
    u = t(481060),
    s = t(666188),
    a = t(372769),
    c = t(523751),
    d = t(623624),
    _ = t(290034),
    f = t(271383),
    E = t(594174),
    I = t(267642),
    S = t(981631),
    g = t(689938),
    T = t(226052);
function p(e) {
    let { guild: n, isBannerVisible: t, disableBoostClick: i } = e,
        o = (0, l.e7)([E.default, f.ZP], () => {
            let e = E.default.getCurrentUser();
            return f.ZP.isMember(n.id, null == e ? void 0 : e.id);
        }),
        { premiumTier: s, premiumSubscriberCount: a } = n;
    if (0 === a && s === S.Eu4.NONE) return null;
    let c = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                o &&
                    !i &&
                    (0, d.f)({
                        guildId: n.id,
                        location: {
                            section: S.jXE.GUILD_HEADER,
                            object: S.qAy.BOOST_GEM_ICON
                        }
                    });
        },
        p = s === S.Eu4.NONE ? g.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : I.nW(s),
        C = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    className: T.tierTooltipTitle,
                    children: p
                }),
                (0, r.jsx)('div', { children: g.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({ subscriberCount: a }) })
            ]
        });
    return (0, r.jsx)('div', {
        className: T.guildIconContainer,
        children: (0, r.jsx)(u.Tooltip, {
            text: C,
            position: 'bottom',
            'aria-label': null != p ? p : '',
            children: (e) =>
                (0, r.jsx)(u.Clickable, {
                    ...e,
                    className: T.__invalid_premiumGuildIcon,
                    onClick: c,
                    children: (0, r.jsx)(_.Z, {
                        premiumTier: s,
                        iconBackgroundClassName: t ? T.boostedGuildTierIconBackgroundWithVisibleBanner : null,
                        iconClassName: t && s !== S.Eu4.TIER_3 ? T.boostedGuildTierMutedIconWithVisibleBanner : null
                    })
                })
        })
    });
}
function C(e) {
    let { guild: n, disableColor: t, disableBoostClick: i } = e;
    return (0, s.Z)(n)
        ? (0, r.jsx)('div', {
              className: T.guildIconV2Container,
              children: (0, r.jsx)(c.Z, {
                  guild: n,
                  tooltipPosition: 'bottom',
                  tooltipColor: u.Tooltip.Colors.PRIMARY,
                  className: o()(T.guildBadge, { [T.disableColor]: t }),
                  disableBoostClick: i
              })
          })
        : (0, r.jsx)('div', {
              className: T.guildIconContainer,
              children: (0, r.jsx)(a.Z, {
                  guild: n,
                  size: 20,
                  tooltipPosition: 'bottom',
                  tooltipColor: u.Tooltip.Colors.PRIMARY,
                  className: o()(T.guildBadge, { [T.disableColor]: t })
              })
          });
}
function m(e) {
    let { guild: n, isBannerVisible: t, disableBoostClick: i } = e;
    return (0, s.Z)(n)
        ? (0, r.jsx)(C, {
              guild: n,
              disableColor: !1,
              disableBoostClick: i
          })
        : n.hasFeature(S.oNc.VERIFIED) || n.hasFeature(S.oNc.PARTNERED)
          ? (0, r.jsx)(C, {
                guild: n,
                disableColor: !t
            })
          : (0, r.jsx)(p, {
                guild: n,
                isBannerVisible: t,
                disableBoostClick: i
            });
}
