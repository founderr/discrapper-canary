t.d(n, {
    Z: function () {
        return A;
    }
});
var i = t(735250);
t(470079);
var r = t(120356),
    l = t.n(r),
    o = t(442837),
    u = t(481060),
    s = t(666188),
    a = t(372769),
    c = t(523751),
    d = t(623624),
    _ = t(290034),
    E = t(271383),
    f = t(594174),
    I = t(267642),
    S = t(981631),
    T = t(689938),
    C = t(427542);
function p(e) {
    let { guild: n, isBannerVisible: t, disableBoostClick: r } = e,
        l = (0, o.e7)([f.default, E.ZP], () => {
            let e = f.default.getCurrentUser();
            return E.ZP.isMember(n.id, null == e ? void 0 : e.id);
        }),
        { premiumTier: s, premiumSubscriberCount: a } = n;
    if (0 === a && s === S.Eu4.NONE) return null;
    let c = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                l &&
                    !r &&
                    (0, d.f)({
                        guildId: n.id,
                        location: {
                            section: S.jXE.GUILD_HEADER,
                            object: S.qAy.BOOST_GEM_ICON
                        }
                    });
        },
        p = s === S.Eu4.NONE ? T.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : I.nW(s),
        N = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: C.tierTooltipTitle,
                    children: p
                }),
                (0, i.jsx)('div', { children: T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({ subscriberCount: a }) })
            ]
        });
    return (0, i.jsx)('div', {
        className: C.guildIconContainer,
        children: (0, i.jsx)(u.Tooltip, {
            text: N,
            position: 'bottom',
            'aria-label': null != p ? p : '',
            children: (e) =>
                (0, i.jsx)(u.Clickable, {
                    ...e,
                    className: C.__invalid_premiumGuildIcon,
                    onClick: c,
                    children: (0, i.jsx)(_.Z, {
                        premiumTier: s,
                        iconBackgroundClassName: t ? C.boostedGuildTierIconBackgroundWithVisibleBanner : null,
                        iconClassName: t && s !== S.Eu4.TIER_3 ? C.boostedGuildTierMutedIconWithVisibleBanner : null
                    })
                })
        })
    });
}
function N(e) {
    let { guild: n, disableColor: t, disableBoostClick: r } = e;
    return (0, s.Z)(n)
        ? (0, i.jsx)('div', {
              className: C.guildIconV2Container,
              children: (0, i.jsx)(c.Z, {
                  guild: n,
                  tooltipPosition: 'bottom',
                  tooltipColor: u.Tooltip.Colors.PRIMARY,
                  className: l()(C.guildBadge, { [C.disableColor]: t }),
                  disableBoostClick: r
              })
          })
        : (0, i.jsx)('div', {
              className: C.guildIconContainer,
              children: (0, i.jsx)(a.Z, {
                  guild: n,
                  size: 20,
                  tooltipPosition: 'bottom',
                  tooltipColor: u.Tooltip.Colors.PRIMARY,
                  className: l()(C.guildBadge, { [C.disableColor]: t })
              })
          });
}
function A(e) {
    let { guild: n, isBannerVisible: t, disableBoostClick: r } = e;
    return (0, s.Z)(n)
        ? (0, i.jsx)(N, {
              guild: n,
              disableColor: !1,
              disableBoostClick: r
          })
        : n.hasFeature(S.oNc.VERIFIED) || n.hasFeature(S.oNc.PARTNERED)
          ? (0, i.jsx)(N, {
                guild: n,
                disableColor: !t
            })
          : (0, i.jsx)(p, {
                guild: n,
                isBannerVisible: t,
                disableBoostClick: r
            });
}
