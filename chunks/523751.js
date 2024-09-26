n.d(t, {
    Z: function () {
        return D;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(692547),
    u = n(780384),
    c = n(481060),
    d = n(353093),
    _ = n(979264),
    E = n(436774),
    f = n(623624),
    h = n(297700),
    p = n(210887),
    m = n(271383),
    I = n(594174),
    T = n(665786),
    g = n(697725),
    S = n(267642),
    A = n(284363),
    v = n(854218),
    N = n(981631),
    O = n(689938),
    R = n(435841);
function C(e, t) {
    let n = t === v.PZ.PUBLIC ? O.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN : O.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY;
    switch (e) {
        case A.Q.STAFF:
            return {
                tooltipTitle: O.Z.Messages.INTERNAL_EMPLOYEE_ONLY,
                tooltipSubtitle: O.Z.Messages.INTERNAL_EMPLOYEE_ONLY,
                tooltipDescription: O.Z.Messages.INTERNAL_EMPLOYEE_ONLY
            };
        case A.Q.VERIFIED:
            return {
                tooltipTitle: O.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY,
                tooltipSubtitle: O.Z.Messages.GUILD_VERIFIED,
                tooltipDescription: n
            };
        case A.Q.PARTNERED:
            return {
                tooltipTitle: O.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY,
                tooltipSubtitle: O.Z.Messages.GUILD_PARTNERED,
                tooltipDescription: n
            };
        case A.Q.VERIFIED_AND_PARTNERED:
            return {
                tooltipTitle: O.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY,
                tooltipSubtitle: O.Z.Messages.GUILD_VERIFIED_AND_PARTNERED,
                tooltipDescription: n
            };
        case A.Q.COMMUNITY:
            return {
                tooltipTitle: O.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY,
                tooltipDescription: O.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY
            };
        case A.Q.DISCOVERABLE:
            return {
                tooltipTitle: O.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY,
                tooltipDescription: O.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN
            };
        case A.Q.CLAN:
            return {
                tooltipTitle: O.Z.Messages.SERVER_BADGE_TITLE_CLAN,
                tooltipDescription: O.Z.Messages.SERVER_BADGE_DESCRIPTION_APPLICATION_REQUIRED
            };
        default:
            return { tooltipTitle: O.Z.Messages.SERVER_BADGE_TITLE_UNKNOWN };
    }
}
let y = {
    [A.Q.STAFF]: {
        IconComponent: c.StaffBadgeIcon,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [A.Q.VERIFIED_AND_PARTNERED]: {
        IconComponent: c.CheckmarkSmallIcon,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [A.Q.VERIFIED]: {
        IconComponent: c.CheckmarkSmallIcon,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [A.Q.PARTNERED]: {
        IconComponent: (0, c.makeIconCompat)(T.Z),
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: l.Z.unsafe_rawColors.BRAND_500.css
    },
    [A.Q.COMMUNITY]: {
        IconComponent: c.HomeIcon,
        foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: E.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2
    },
    [A.Q.DISCOVERABLE]: {
        IconComponent: c.GlobeEarthIcon,
        foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: E.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2
    },
    [A.Q.CLAN]: {},
    [A.Q.NONE]: {}
};
function L(e) {
    let { guildTraits: t } = e;
    return (0, r.jsxs)('div', {
        className: R.tooltipPremiumFooterContainer,
        children: [
            (0, r.jsxs)('div', {
                className: o()(R.tooltipPremiumFooterSegment, R.tooltipPremiumFooterTierSegment),
                children: [
                    (0, r.jsx)(g.Z, {
                        width: 18,
                        height: 18,
                        className: R.gemIcon
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-xs/semibold',
                        color: 'always-white',
                        children: S.nW(t.premiumTier)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: o()(R.tooltipPremiumFooterSegment),
                children: (0, r.jsx)(c.Text, {
                    variant: 'text-xs/semibold',
                    color: 'always-white',
                    children: O.Z.Messages.SERVER_BADGE_PREMIUM_FOOTER_BOOST_COUNT.format({ count: t.premiumSubscriberCount })
                })
            })
        ]
    });
}
function b(e) {
    let { badgeType: t, guildTraits: n } = e,
        { tooltipTitle: i, tooltipSubtitle: a, tooltipDescription: o } = C(t, n.visibility);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: R.tooltipBodyContainer,
                children: [
                    (0, r.jsx)(c.Text, {
                        color: 'interactive-active',
                        variant: 'text-xs/bold',
                        children: i
                    }),
                    null != a
                        ? (0, r.jsx)(c.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: a
                          })
                        : null,
                    null != o
                        ? (0, r.jsx)(c.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: o
                          })
                        : null
                ]
            }),
            n.premium ? (0, r.jsx)(L, { guildTraits: n }) : null
        ]
    });
}
function D(e) {
    let t,
        n,
        { guild: a, tooltipColor: l = c.Tooltip.Colors.BRAND, tooltipPosition: E, className: T, flowerStarClassName: g, iconClassName: S, badgeStrokeColor: O, badgeColor: C, size: L = 16, disableBoostClick: D, 'aria-label': M = !1 } = e,
        P = (0, s.e7)([I.default, m.ZP], () => {
            let e = I.default.getCurrentUser();
            return m.ZP.isMember(null == a ? void 0 : a.id, null == e ? void 0 : e.id);
        }),
        U = (0, s.e7)([p.Z], () => p.Z.theme),
        w = (0, v.XX)(a),
        x = (0, A.i)(w),
        G = i.useCallback(
            (e) => {
                w.premium &&
                    P &&
                    !D &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (0, f.f)({
                        guildId: a.id,
                        location: {
                            section: N.jXE.GUILD_HEADER,
                            object: N.qAy.BOOST_GEM_ICON
                        }
                    }));
            },
            [w.premium, P, D, a.id]
        );
    if (x === A.Q.NONE) return null;
    if (x === A.Q.CLAN) {
        var k;
        let e = (0, d.ky)(a.id, null === (k = a.clan) || void 0 === k ? void 0 : k.badge, L);
        return null == e
            ? null
            : (0, r.jsx)(c.Tooltip, {
                  color: l,
                  position: E,
                  'aria-label': M,
                  text: (0, r.jsx)(b, {
                      badgeType: x,
                      guildTraits: w
                  }),
                  tooltipContentClassName: R.tooltipRemovePadding,
                  children: (t) =>
                      (0, r.jsx)(c.Clickable, {
                          ...t,
                          onClick: G,
                          className: o()(R.clanBadgeContainer, T),
                          children: (0, r.jsx)(_.KQ, {
                              src: e,
                              size: L
                          })
                      })
              });
    }
    let { IconComponent: B, backgroundDarkColor: F, backgroundLightColor: Z, foregroundDarkColor: V, foregroundLightColor: H, premiumBackgroundColor: Y, premiumForegroundColor: j, sizeAdjustment: W } = y[x];
    if (null == B) return null;
    w.premium && ((t = j), (n = Y));
    let K = (0, u.wj)(U) ? V : H,
        z = (0, u.wj)(U) ? F : Z;
    (t = null != t ? t : K), (n = null != n ? n : z);
    let q = Math.floor(0.75 * L) - (null != W ? W : 0);
    return (0, r.jsx)(c.Tooltip, {
        color: l,
        position: E,
        'aria-label': M,
        text: (0, r.jsx)(b, {
            badgeType: x,
            guildTraits: w
        }),
        tooltipContentClassName: R.tooltipRemovePadding,
        children: (e) =>
            (0, r.jsx)(c.Clickable, {
                onClick: G,
                children: (0, r.jsx)(h.Z, {
                    ...e,
                    className: T,
                    flowerStarClassName: g,
                    allowFullSizedIcon: !0,
                    color: null != n ? n : C,
                    stroke: O,
                    size: L,
                    children: (0, r.jsx)(B, {
                        size: 'custom',
                        width: q,
                        height: q,
                        className: S,
                        color: null != t ? t : 'currentColor'
                    })
                })
            })
    });
}
