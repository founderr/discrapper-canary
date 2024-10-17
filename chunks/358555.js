n.d(i, {
    Z: function () {
        return R;
    }
});
var o = n(735250);
n(470079);
var t = n(120356),
    r = n.n(t),
    a = n(442837),
    l = n(481060),
    s = n(666188),
    c = n(372769),
    d = n(523751),
    u = n(623624),
    _ = n(290034),
    g = n(271383),
    E = n(594174),
    f = n(267642),
    N = n(981631),
    T = n(689938),
    I = n(427542);
function p(e) {
    let { guild: i, isBannerVisible: n, disableBoostClick: t } = e,
        r = (0, a.e7)([E.default, g.ZP], () => {
            let e = E.default.getCurrentUser();
            return g.ZP.isMember(i.id, null == e ? void 0 : e.id);
        }),
        { premiumTier: s, premiumSubscriberCount: c } = i;
    if (0 === c && s === N.Eu4.NONE) return null;
    let d = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                r &&
                    !t &&
                    (0, u.f)({
                        guildId: i.id,
                        location: {
                            section: N.jXE.GUILD_HEADER,
                            object: N.qAy.BOOST_GEM_ICON
                        }
                    });
        },
        p = s === N.Eu4.NONE ? T.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : f.nW(s),
        h = (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)('div', {
                    className: I.tierTooltipTitle,
                    children: p
                }),
                (0, o.jsx)('div', { children: T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({ subscriberCount: c }) })
            ]
        });
    return (0, o.jsx)('div', {
        className: I.guildIconContainer,
        children: (0, o.jsx)(l.Tooltip, {
            text: h,
            position: 'bottom',
            'aria-label': null != p ? p : '',
            children: (e) =>
                (0, o.jsx)(l.Clickable, {
                    ...e,
                    className: I.__invalid_premiumGuildIcon,
                    onClick: d,
                    children: (0, o.jsx)(_.Z, {
                        premiumTier: s,
                        iconBackgroundClassName: n ? I.boostedGuildTierIconBackgroundWithVisibleBanner : null,
                        iconClassName: n && s !== N.Eu4.TIER_3 ? I.boostedGuildTierMutedIconWithVisibleBanner : null
                    })
                })
        })
    });
}
function h(e) {
    let { guild: i, disableColor: n, disableBoostClick: t } = e;
    return (0, s.Z)(i)
        ? (0, o.jsx)('div', {
              className: I.guildIconV2Container,
              children: (0, o.jsx)(d.Z, {
                  guild: i,
                  tooltipPosition: 'bottom',
                  tooltipColor: l.Tooltip.Colors.PRIMARY,
                  className: r()(I.guildBadge, { [I.disableColor]: n }),
                  disableBoostClick: t
              })
          })
        : (0, o.jsx)('div', {
              className: I.guildIconContainer,
              children: (0, o.jsx)(c.Z, {
                  guild: i,
                  size: 20,
                  tooltipPosition: 'bottom',
                  tooltipColor: l.Tooltip.Colors.PRIMARY,
                  className: r()(I.guildBadge, { [I.disableColor]: n })
              })
          });
}
function R(e) {
    let { guild: i, isBannerVisible: n, disableBoostClick: t } = e;
    return (0, s.Z)(i)
        ? (0, o.jsx)(h, {
              guild: i,
              disableColor: !1,
              disableBoostClick: t
          })
        : i.hasFeature(N.oNc.VERIFIED) || i.hasFeature(N.oNc.PARTNERED)
          ? (0, o.jsx)(h, {
                guild: i,
                disableColor: !n
            })
          : (0, o.jsx)(p, {
                guild: i,
                isBannerVisible: n,
                disableBoostClick: t
            });
}
