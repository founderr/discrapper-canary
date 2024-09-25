n.d(t, {
    Z: function () {
        return S;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(666188),
    u = n(372769),
    c = n(523751),
    d = n(623624),
    _ = n(290034),
    E = n(271383),
    f = n(594174),
    h = n(267642),
    p = n(981631),
    m = n(689938),
    I = n(427542);
function T(e) {
    let { guild: t, isBannerVisible: n, disableBoostClick: i } = e,
        a = (0, o.e7)([f.default, E.ZP], () => {
            let e = f.default.getCurrentUser();
            return E.ZP.isMember(t.id, null == e ? void 0 : e.id);
        }),
        { premiumTier: l, premiumSubscriberCount: u } = t;
    if (0 === u && l === p.Eu4.NONE) return null;
    let c = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                a &&
                    !i &&
                    (0, d.f)({
                        guildId: t.id,
                        location: {
                            section: p.jXE.GUILD_HEADER,
                            object: p.qAy.BOOST_GEM_ICON
                        }
                    });
        },
        T = l === p.Eu4.NONE ? m.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : h.nW(l),
        g = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    className: I.tierTooltipTitle,
                    children: T
                }),
                (0, r.jsx)('div', { children: m.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({ subscriberCount: u }) })
            ]
        });
    return (0, r.jsx)('div', {
        className: I.guildIconContainer,
        children: (0, r.jsx)(s.Tooltip, {
            text: g,
            position: 'bottom',
            'aria-label': null != T ? T : '',
            children: (e) =>
                (0, r.jsx)(s.Clickable, {
                    ...e,
                    className: I.__invalid_premiumGuildIcon,
                    onClick: c,
                    children: (0, r.jsx)(_.Z, {
                        premiumTier: l,
                        iconBackgroundClassName: n ? I.boostedGuildTierIconBackgroundWithVisibleBanner : null,
                        iconClassName: n && l !== p.Eu4.TIER_3 ? I.boostedGuildTierMutedIconWithVisibleBanner : null
                    })
                })
        })
    });
}
function g(e) {
    let { guild: t, disableColor: n, disableBoostClick: i } = e;
    return (0, l.Z)(t)
        ? (0, r.jsx)('div', {
              className: I.guildIconV2Container,
              children: (0, r.jsx)(c.Z, {
                  guild: t,
                  tooltipPosition: 'bottom',
                  tooltipColor: s.Tooltip.Colors.PRIMARY,
                  className: a()(I.guildBadge, { [I.disableColor]: n }),
                  disableBoostClick: i
              })
          })
        : (0, r.jsx)('div', {
              className: I.guildIconContainer,
              children: (0, r.jsx)(u.Z, {
                  guild: t,
                  size: 20,
                  tooltipPosition: 'bottom',
                  tooltipColor: s.Tooltip.Colors.PRIMARY,
                  className: a()(I.guildBadge, { [I.disableColor]: n })
              })
          });
}
function S(e) {
    let { guild: t, isBannerVisible: n, disableBoostClick: i } = e;
    return (0, l.Z)(t)
        ? (0, r.jsx)(g, {
              guild: t,
              disableColor: !1,
              disableBoostClick: i
          })
        : t.hasFeature(p.oNc.VERIFIED) || t.hasFeature(p.oNc.PARTNERED)
          ? (0, r.jsx)(g, {
                guild: t,
                disableColor: !n
            })
          : (0, r.jsx)(T, {
                guild: t,
                isBannerVisible: n,
                disableBoostClick: i
            });
}
