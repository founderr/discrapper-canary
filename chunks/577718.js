n(47120);
var i = n(200651),
    r = n(192379),
    l = n(704215),
    a = n(780384),
    s = n(481060),
    o = n(906732),
    c = n(380009),
    d = n(243778),
    u = n(26323),
    h = n(433280),
    m = n(34131),
    p = n(434404),
    g = n(567458),
    f = n(782959),
    _ = n(276645),
    I = n(970731),
    E = n(626135),
    C = n(267642),
    v = n(981631),
    N = n(921944),
    S = n(30513),
    T = n(474936),
    x = n(388032),
    b = n(325382),
    A = n(44669),
    Z = n(741160),
    L = n(829972),
    y = n(31932),
    P = n(642301);
function O(e) {
    if (null != e) p.Z.open(e.id, v.pNK.OVERVIEW, { section: v.jXE.PREMIUM_GUILD_PROGRESS_BAR }, v.KsC.DISPLAY);
}
function R(e, t) {
    if (null != t)
        (0, C.f2)(t, v.Eu4.TIER_1)
            ? p.Z.open(t.id, v.pNK.OVERVIEW, { section: v.jXE.PREMIUM_GUILD_INVITE_SPLASH }, v.KsC.INVITE)
            : (0, u.Z)({
                  analyticsLocations: e,
                  analyticsSourceLocation: v.jXE.PREMIUM_GUILD_INVITE_SPLASH,
                  guild: t,
                  perks: (0, S.o9)()
              });
}
function j(e) {
    let { renderPopout: t, renderGuildHeaderDropdownButton: n } = e;
    return (0, i.jsx)(s.Popout, {
        renderPopout: () =>
            (0, i.jsx)('div', {
                onClick: (e) => e.stopPropagation(),
                children: t
            }),
        position: 'bottom',
        align: 'center',
        animation: s.Popout.Animation.TRANSLATE,
        shouldShow: !0,
        children: () => n()
    });
}
t.Z = r.memo(function (e) {
    let { contentTypes: t, theme: n, guild: r, renderGuildHeaderDropdownButton: s } = e,
        { analyticsLocations: u } = (0, o.ZP)(),
        S = () => {
            E.default.track(v.rMx.TOOLTIP_VIEWED, {
                type: T.cd.PREMIUM_PROGRESS_BAR,
                location: { page: v.ZY5.GUILD_CHANNEL }
            });
        },
        D = () => {
            E.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
                type: T.cd.INVITE_SPLASH_UPSELL,
                location: { page: v.ZY5.GUILD_CHANNEL },
                location_stack: u
            });
        },
        M = (0, a.wj)(n) ? L : y,
        [w, k] = (0, d.US)(t, N.R.GUILD_HEADER_TOOLTIPS);
    return (0, i.jsx)(i.Fragment, {
        children: (() => {
            switch (w) {
                case l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(_.Z, {
                            guildId: r.id,
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(I.ZP, {
                            onComponentMount: S,
                            header: x.intl.string(x.t.nxtaFx),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: M,
                                className: A.fullWidthImage
                            }),
                            content: x.intl.format(x.t.ujItEh, {}),
                            buttonCTA: x.intl.string(x.t.UzVPra),
                            secondaryButtonCTA: x.intl.string(x.t['KkK/aG']),
                            onSecondaryClick: () => O(),
                            onClick: () => O(r),
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(I.ZP, {
                            onComponentMount: S,
                            header: x.intl.string(x.t.KAsfPT),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: M,
                                className: A.fullWidthImage
                            }),
                            content: x.intl.format(x.t.zK1hpq, {}),
                            buttonCTA: x.intl.string(x.t.UzVPra),
                            secondaryButtonCTA: x.intl.string(x.t['KkK/aG']),
                            onSecondaryClick: () => O(),
                            onClick: () => O(r),
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(h.Z, {
                            guildId: r.id,
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(c.Z, {
                            guild: r,
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_HEADER_INVITE_SPLASH:
                    let e = (0, C.f2)(r, v.Eu4.TIER_1) ? x.intl.format(x.t.DDzEVl, {}) : x.intl.formatToPlainString(x.t.pMftkJ, { boostCount: (0, C.KK)(r, v.Eu4.TIER_1) }),
                        t = (0, C.f2)(r, v.Eu4.TIER_1) ? x.intl.string(x.t.rOFcBg) : x.intl.string(x.t.hvVgAQ);
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(I.ZP, {
                            onComponentMount: D,
                            header: x.intl.string(x.t['36wK8/']),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: Z,
                                className: A.fullWidthImage
                            }),
                            content: e,
                            buttonCTA: t,
                            secondaryButtonCTA: x.intl.string(x.t.hBIHLS),
                            onSecondaryClick: () => R(u),
                            onClick: () => R(u, r),
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(g.Z, { markAsDismissed: k }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(I.ZP, {
                            className: b.tooltipOverrideColor,
                            header: x.intl.string(x.t.hLUL3t),
                            content: x.intl.string(x.t.ahWaPT),
                            buttonCTA: x.intl.string(x.t['NX+WJC']),
                            onClick: () => k(N.L.UNKNOWN),
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_HEADER_SOUNDBOARD_PERMISSION:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(I.ZP, {
                            header: x.intl.string(x.t.PZNQKC),
                            content: x.intl.string(x.t.jQIyyM),
                            buttonCTA: x.intl.string(x.t.RzWDqa),
                            secondaryButtonCTA: x.intl.string(x.t.f3Pet7),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: P,
                                className: A.fullWidthImage
                            }),
                            onClick: () => {
                                p.Z.open(r.id, v.pNK.ROLES), p.Z.selectRole(r.getEveryoneRoleId(), x.intl.string(x.t.Bco7ND));
                            },
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.MEDIA_CHANNEL_UPSELL:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(f.Z, {
                            guildId: r.id,
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, i.jsx)(j, {
                        renderPopout: (0, i.jsx)(m.Z, {
                            guildId: r.id,
                            markAsDismissed: k
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                default:
                    return s();
            }
        })()
    });
});
