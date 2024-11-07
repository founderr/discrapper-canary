t.d(n, {
    Z: function () {
        return v;
    }
});
var i = t(200651);
t(192379);
var r = t(120356),
    l = t.n(r),
    o = t(442837),
    u = t(481060),
    a = t(666188),
    s = t(372769),
    c = t(523751),
    d = t(623624),
    f = t(290034),
    p = t(271383),
    _ = t(594174),
    E = t(267642),
    g = t(981631),
    m = t(388032),
    h = t(427542);
function I(e) {
    let { guild: n, isBannerVisible: t, disableBoostClick: r } = e,
        l = (0, o.e7)([_.default, p.ZP], () => {
            let e = _.default.getCurrentUser();
            return p.ZP.isMember(n.id, null == e ? void 0 : e.id);
        }),
        { premiumTier: a, premiumSubscriberCount: s } = n;
    if (0 === s && a === g.Eu4.NONE) return null;
    let c = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                l &&
                    !r &&
                    (0, d.f)({
                        guildId: n.id,
                        location: {
                            section: g.jXE.GUILD_HEADER,
                            object: g.qAy.BOOST_GEM_ICON
                        }
                    });
        },
        I = a === g.Eu4.NONE ? m.intl.string(m.t.c2wsn5) : E.nW(a),
        S = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: h.tierTooltipTitle,
                    children: I
                }),
                (0, i.jsx)('div', { children: m.intl.format(m.t.If4iTU, { subscriberCount: s }) })
            ]
        });
    return (0, i.jsx)('div', {
        className: h.guildIconContainer,
        children: (0, i.jsx)(u.Tooltip, {
            text: S,
            position: 'bottom',
            'aria-label': null != I ? I : '',
            children: (e) =>
                (0, i.jsx)(u.Clickable, {
                    ...e,
                    className: h.__invalid_premiumGuildIcon,
                    onClick: c,
                    children: (0, i.jsx)(f.Z, {
                        premiumTier: a,
                        iconBackgroundClassName: t ? h.boostedGuildTierIconBackgroundWithVisibleBanner : null,
                        iconClassName: t && a !== g.Eu4.TIER_3 ? h.boostedGuildTierMutedIconWithVisibleBanner : null
                    })
                })
        })
    });
}
function S(e) {
    let { guild: n, disableColor: t, disableBoostClick: r } = e;
    return (0, a.Z)(n)
        ? (0, i.jsx)('div', {
              className: h.guildIconV2Container,
              children: (0, i.jsx)(c.Z, {
                  guild: n,
                  tooltipPosition: 'bottom',
                  tooltipColor: u.Tooltip.Colors.PRIMARY,
                  className: l()(h.guildBadge, { [h.disableColor]: t }),
                  disableBoostClick: r
              })
          })
        : (0, i.jsx)('div', {
              className: h.guildIconContainer,
              children: (0, i.jsx)(s.Z, {
                  guild: n,
                  size: 20,
                  tooltipPosition: 'bottom',
                  tooltipColor: u.Tooltip.Colors.PRIMARY,
                  className: l()(h.guildBadge, { [h.disableColor]: t })
              })
          });
}
function v(e) {
    let { guild: n, isBannerVisible: t, disableBoostClick: r } = e;
    return (0, a.Z)(n)
        ? (0, i.jsx)(S, {
              guild: n,
              disableColor: !1,
              disableBoostClick: r
          })
        : n.hasFeature(g.oNc.VERIFIED) || n.hasFeature(g.oNc.PARTNERED)
          ? (0, i.jsx)(S, {
                guild: n,
                disableColor: !t
            })
          : (0, i.jsx)(I, {
                guild: n,
                isBannerVisible: t,
                disableBoostClick: r
            });
}
