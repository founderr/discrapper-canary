n.d(t, {
    Z: function () {
        return D;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(692547),
    u = n(780384),
    c = n(481060),
    d = n(353093),
    f = n(979264),
    _ = n(436774),
    h = n(623624),
    p = n(297700),
    m = n(210887),
    g = n(271383),
    E = n(594174),
    v = n(665786),
    I = n(697725),
    S = n(267642),
    T = n(284363),
    b = n(854218),
    y = n(981631),
    A = n(388032),
    N = n(435841);
let C = {
    [T.Q.STAFF]: {
        IconComponent: c.StaffBadgeIcon,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [T.Q.VERIFIED_AND_PARTNERED]: {
        IconComponent: c.CheckmarkSmallIcon,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [T.Q.VERIFIED]: {
        IconComponent: c.CheckmarkSmallIcon,
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
    },
    [T.Q.PARTNERED]: {
        IconComponent: (0, c.makeIconCompat)(v.Z),
        foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: l.Z.unsafe_rawColors.BRAND_500.css
    },
    [T.Q.COMMUNITY]: {
        IconComponent: c.HomeIcon,
        foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: _.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2
    },
    [T.Q.DISCOVERABLE]: {
        IconComponent: c.GlobeEarthIcon,
        foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: _.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css,
        sizeAdjustment: 2
    },
    [T.Q.CLAN]: {},
    [T.Q.NONE]: {}
};
function R(e) {
    let { guildTraits: t } = e;
    return (0, r.jsxs)('div', {
        className: N.tooltipPremiumFooterContainer,
        children: [
            (0, r.jsxs)('div', {
                className: s()(N.tooltipPremiumFooterSegment, N.tooltipPremiumFooterTierSegment),
                children: [
                    (0, r.jsx)(I.Z, {
                        width: 18,
                        height: 18,
                        className: N.gemIcon
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-xs/semibold',
                        color: 'always-white',
                        children: S.nW(t.premiumTier)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: s()(N.tooltipPremiumFooterSegment),
                children: (0, r.jsx)(c.Text, {
                    variant: 'text-xs/semibold',
                    color: 'always-white',
                    children: A.intl.format(A.t['dR/SVF'], { count: t.premiumSubscriberCount })
                })
            })
        ]
    });
}
function O(e) {
    let { badgeType: t, guildTraits: n } = e,
        {
            tooltipTitle: i,
            tooltipSubtitle: a,
            tooltipDescription: s
        } = (function (e, t) {
            let n = t === b.PZ.PUBLIC ? A.intl.string(A.t.op2cJy) : A.intl.string(A.t.TME4LC);
            switch (e) {
                case T.Q.STAFF:
                    return {
                        tooltipTitle: A.intl.string(A.t['lMrv9/']),
                        tooltipSubtitle: A.intl.string(A.t['lMrv9/']),
                        tooltipDescription: A.intl.string(A.t['lMrv9/'])
                    };
                case T.Q.VERIFIED:
                    return {
                        tooltipTitle: A.intl.string(A.t.K7iRio),
                        tooltipSubtitle: A.intl.string(A.t.iCehw8),
                        tooltipDescription: n
                    };
                case T.Q.PARTNERED:
                    return {
                        tooltipTitle: A.intl.string(A.t.K7iRio),
                        tooltipSubtitle: A.intl.string(A.t.hfYfEB),
                        tooltipDescription: n
                    };
                case T.Q.VERIFIED_AND_PARTNERED:
                    return {
                        tooltipTitle: A.intl.string(A.t.K7iRio),
                        tooltipSubtitle: A.intl.string(A.t['TX+iFB']),
                        tooltipDescription: n
                    };
                case T.Q.COMMUNITY:
                    return {
                        tooltipTitle: A.intl.string(A.t.K7iRio),
                        tooltipDescription: A.intl.string(A.t.TME4LC)
                    };
                case T.Q.DISCOVERABLE:
                    return {
                        tooltipTitle: A.intl.string(A.t.K7iRio),
                        tooltipDescription: A.intl.string(A.t.op2cJy)
                    };
                case T.Q.CLAN:
                    return {
                        tooltipTitle: A.intl.string(A.t['5K6LdX']),
                        tooltipDescription: A.intl.string(A.t.YwZfbm)
                    };
                default:
                    return { tooltipTitle: A.intl.string(A.t.iZRkCw) };
            }
        })(t, n.visibility);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: N.tooltipBodyContainer,
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
                    null != s
                        ? (0, r.jsx)(c.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: s
                          })
                        : null
                ]
            }),
            n.premium ? (0, r.jsx)(R, { guildTraits: n }) : null
        ]
    });
}
function D(e) {
    let t,
        n,
        { guild: a, tooltipColor: l = c.Tooltip.Colors.BRAND, tooltipPosition: _, className: v, flowerStarClassName: I, iconClassName: S, badgeStrokeColor: A, badgeColor: R, size: D = 16, disableBoostClick: L, 'aria-label': x = !1 } = e,
        w = (0, o.e7)([E.default, g.ZP], () => {
            let e = E.default.getCurrentUser();
            return g.ZP.isMember(null == a ? void 0 : a.id, null == e ? void 0 : e.id);
        }),
        M = (0, o.e7)([m.Z], () => m.Z.theme),
        P = (0, b.XX)(a),
        k = (0, T.i)(P),
        U = i.useCallback(
            (e) => {
                P.premium &&
                    w &&
                    !L &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (0, h.f)({
                        guildId: a.id,
                        location: {
                            section: y.jXE.GUILD_HEADER,
                            object: y.qAy.BOOST_GEM_ICON
                        }
                    }));
            },
            [P.premium, w, L, a.id]
        );
    if (k === T.Q.NONE) return null;
    if (k === T.Q.CLAN) {
        var G;
        let e = (0, d.ky)(a.id, null === (G = a.clan) || void 0 === G ? void 0 : G.badge, D);
        return null == e
            ? null
            : (0, r.jsx)(c.Tooltip, {
                  color: l,
                  position: _,
                  'aria-label': x,
                  text: (0, r.jsx)(O, {
                      badgeType: k,
                      guildTraits: P
                  }),
                  tooltipContentClassName: N.tooltipRemovePadding,
                  children: (t) =>
                      (0, r.jsx)(c.Clickable, {
                          ...t,
                          onClick: U,
                          className: s()(N.clanBadgeContainer, v),
                          children: (0, r.jsx)(f.KQ, {
                              src: e,
                              size: D
                          })
                      })
              });
    }
    let { IconComponent: B, backgroundDarkColor: Z, backgroundLightColor: F, foregroundDarkColor: V, foregroundLightColor: H, premiumBackgroundColor: j, premiumForegroundColor: Y, sizeAdjustment: W } = C[k];
    if (null == B) return null;
    P.premium && ((t = Y), (n = j));
    let K = (0, u.wj)(M) ? V : H,
        z = (0, u.wj)(M) ? Z : F;
    (t = null != t ? t : K), (n = null != n ? n : z);
    let q = Math.floor(0.75 * D) - (null != W ? W : 0);
    return (0, r.jsx)(c.Tooltip, {
        color: l,
        position: _,
        'aria-label': x,
        text: (0, r.jsx)(O, {
            badgeType: k,
            guildTraits: P
        }),
        tooltipContentClassName: N.tooltipRemovePadding,
        children: (e) =>
            (0, r.jsx)(c.Clickable, {
                onClick: U,
                children: (0, r.jsx)(p.Z, {
                    ...e,
                    className: v,
                    flowerStarClassName: I,
                    allowFullSizedIcon: !0,
                    color: null != n ? n : R,
                    stroke: A,
                    size: D,
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
