n.d(t, {
    Z: function () {
        return v;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    o = n(442837),
    u = n(481060),
    a = n(666188),
    s = n(372769),
    c = n(523751),
    d = n(623624),
    f = n(290034),
    p = n(271383),
    _ = n(594174),
    E = n(267642),
    g = n(981631),
    m = n(388032),
    h = n(427542);
function I(e) {
    let { guild: t, isBannerVisible: n, disableBoostClick: r } = e,
        l = (0, o.e7)([_.default, p.ZP], () => {
            let e = _.default.getCurrentUser();
            return p.ZP.isMember(t.id, null == e ? void 0 : e.id);
        }),
        { premiumTier: a, premiumSubscriberCount: s } = t;
    if (0 === s && a === g.Eu4.NONE) return null;
    let c = (e) => {
            e.stopPropagation(),
                e.preventDefault(),
                l &&
                    !r &&
                    (0, d.f)({
                        guildId: t.id,
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
                        iconBackgroundClassName: n ? h.boostedGuildTierIconBackgroundWithVisibleBanner : null,
                        iconClassName: n && a !== g.Eu4.TIER_3 ? h.boostedGuildTierMutedIconWithVisibleBanner : null
                    })
                })
        })
    });
}
function S(e) {
    let { guild: t, disableColor: n, disableBoostClick: r } = e;
    return (0, a.Z)(t)
        ? (0, i.jsx)('div', {
              className: h.guildIconV2Container,
              children: (0, i.jsx)(c.Z, {
                  guild: t,
                  tooltipPosition: 'bottom',
                  tooltipColor: u.Tooltip.Colors.PRIMARY,
                  className: l()(h.guildBadge, { [h.disableColor]: n }),
                  disableBoostClick: r
              })
          })
        : (0, i.jsx)('div', {
              className: h.guildIconContainer,
              children: (0, i.jsx)(s.Z, {
                  guild: t,
                  size: 20,
                  tooltipPosition: 'bottom',
                  tooltipColor: u.Tooltip.Colors.PRIMARY,
                  className: l()(h.guildBadge, { [h.disableColor]: n })
              })
          });
}
function v(e) {
    let { guild: t, isBannerVisible: n, disableBoostClick: r } = e;
    return (0, a.Z)(t)
        ? (0, i.jsx)(S, {
              guild: t,
              disableColor: !1,
              disableBoostClick: r
          })
        : t.hasFeature(g.oNc.VERIFIED) || t.hasFeature(g.oNc.PARTNERED)
          ? (0, i.jsx)(S, {
                guild: t,
                disableColor: !n
            })
          : (0, i.jsx)(I, {
                guild: t,
                isBannerVisible: n,
                disableBoostClick: r
            });
}
