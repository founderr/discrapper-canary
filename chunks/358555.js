n.d(i, {
    Z: function () {
        return E;
    }
});
var t = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    l = n(442837),
    a = n(481060),
    c = n(666188),
    s = n(372769),
    d = n(523751),
    u = n(623624),
    g = n(290034),
    f = n(271383),
    p = n(594174),
    _ = n(267642),
    h = n(981631),
    N = n(388032),
    T = n(725741);
function m(e) {
    let { guild: i, isBannerVisible: n, disableBoostClick: o } = e,
        r = (0, l.e7)([p.default, f.ZP], () => {
            let e = p.default.getCurrentUser();
            return f.ZP.isMember(i.id, null == e ? void 0 : e.id);
        }),
        { premiumTier: c, premiumSubscriberCount: s } = i;
    if (0 === s && c === h.Eu4.NONE) return null;
    let d = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                r &&
                    !o &&
                    (0, u.f)({
                        guildId: i.id,
                        location: {
                            section: h.jXE.GUILD_HEADER,
                            object: h.qAy.BOOST_GEM_ICON
                        }
                    });
        },
        m = c === h.Eu4.NONE ? N.intl.string(N.t.c2wsn5) : _.nW(c),
        x = (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)('div', {
                    className: T.tierTooltipTitle,
                    children: m
                }),
                (0, t.jsx)('div', { children: N.intl.format(N.t.If4iTU, { subscriberCount: s }) })
            ]
        });
    return (0, t.jsx)('div', {
        className: T.guildIconContainer,
        children: (0, t.jsx)(a.Tooltip, {
            text: x,
            position: 'bottom',
            'aria-label': null != m ? m : '',
            children: (e) =>
                (0, t.jsx)(a.Clickable, {
                    ...e,
                    className: T.__invalid_premiumGuildIcon,
                    onClick: d,
                    children: (0, t.jsx)(g.Z, {
                        premiumTier: c,
                        iconBackgroundClassName: n ? T.boostedGuildTierIconBackgroundWithVisibleBanner : null,
                        iconClassName: n && c !== h.Eu4.TIER_3 ? T.boostedGuildTierMutedIconWithVisibleBanner : null
                    })
                })
        })
    });
}
function x(e) {
    let { guild: i, disableColor: n, disableBoostClick: o } = e;
    return (0, c.Z)(i)
        ? (0, t.jsx)('div', {
              className: T.guildIconV2Container,
              children: (0, t.jsx)(d.Z, {
                  guild: i,
                  tooltipPosition: 'bottom',
                  tooltipColor: a.Tooltip.Colors.PRIMARY,
                  className: r()(T.guildBadge, { [T.disableColor]: n }),
                  disableBoostClick: o
              })
          })
        : (0, t.jsx)('div', {
              className: T.guildIconContainer,
              children: (0, t.jsx)(s.Z, {
                  guild: i,
                  size: 20,
                  tooltipPosition: 'bottom',
                  tooltipColor: a.Tooltip.Colors.PRIMARY,
                  className: r()(T.guildBadge, { [T.disableColor]: n })
              })
          });
}
function E(e) {
    let { guild: i, isBannerVisible: n, disableBoostClick: o } = e;
    return (0, c.Z)(i)
        ? (0, t.jsx)(x, {
              guild: i,
              disableColor: !1,
              disableBoostClick: o
          })
        : i.hasFeature(h.oNc.VERIFIED) || i.hasFeature(h.oNc.PARTNERED)
          ? (0, t.jsx)(x, {
                guild: i,
                disableColor: !n
            })
          : (0, t.jsx)(m, {
                guild: i,
                isBannerVisible: n,
                disableBoostClick: o
            });
}
