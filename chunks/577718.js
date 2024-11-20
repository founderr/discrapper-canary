n(47120);
var i = n(200651),
    r = n(192379),
    l = n(704215),
    a = n(780384),
    s = n(481060),
    o = n(906732),
    c = n(380009),
    d = n(282051),
    u = n(243778),
    h = n(26323),
    m = n(433280),
    p = n(34131),
    g = n(434404),
    f = n(567458),
    _ = n(782959),
    E = n(276645),
    I = n(970731),
    C = n(626135),
    v = n(267642),
    N = n(981631),
    T = n(921944),
    S = n(30513),
    A = n(474936),
    x = n(388032),
    b = n(541194),
    Z = n(592827),
    L = n(741160),
    y = n(829972),
    O = n(31932),
    P = n(642301);
function R(e) {
    if (null != e) g.Z.open(e.id, N.pNK.OVERVIEW, { section: N.jXE.PREMIUM_GUILD_PROGRESS_BAR }, N.KsC.DISPLAY);
}
function j(e, t) {
    t && g.Z.open(e.id, N.pNK.DISCOVERY);
}
function D(e, t) {
    if (null != t)
        (0, v.f2)(t, N.Eu4.TIER_1)
            ? g.Z.open(t.id, N.pNK.OVERVIEW, { section: N.jXE.PREMIUM_GUILD_INVITE_SPLASH }, N.KsC.INVITE)
            : (0, h.Z)({
                  analyticsLocations: e,
                  analyticsSourceLocation: N.jXE.PREMIUM_GUILD_INVITE_SPLASH,
                  guild: t,
                  perks: (0, S.o9)()
              });
}
function M(e) {
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
        { analyticsLocations: h } = (0, o.ZP)(),
        S = () => {
            C.default.track(N.rMx.TOOLTIP_VIEWED, {
                type: A.cd.PREMIUM_PROGRESS_BAR,
                location: { page: N.ZY5.GUILD_CHANNEL }
            });
        },
        w = () => {
            C.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
                type: A.cd.INVITE_SPLASH_UPSELL,
                location: { page: N.ZY5.GUILD_CHANNEL },
                location_stack: h
            });
        },
        k = (0, a.wj)(n) ? y : O,
        [U, G] = (0, u.US)(t, T.R.GUILD_HEADER_TOOLTIPS);
    return (0, i.jsx)(i.Fragment, {
        children: (() => {
            switch (U) {
                case l.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK:
                    return (0, i.jsx)(M, {
                        renderPopout: (0, i.jsx)(E.Z, {
                            guildId: r.id,
                            markAsDismissed: G
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS:
                    return (0, i.jsx)(M, {
                        renderPopout: (0, i.jsx)(I.ZP, {
                            onComponentMount: S,
                            header: x.intl.string(x.t.nxtaFx),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: k,
                                className: Z.fullWidthImage
                            }),
                            content: x.intl.format(x.t.ujItEh, {}),
                            buttonCTA: x.intl.string(x.t.UzVPra),
                            secondaryButtonCTA: x.intl.string(x.t['KkK/aG']),
                            onSecondaryClick: () => R(),
                            onClick: () => R(r),
                            markAsDismissed: G
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK:
                    return (0, i.jsx)(M, {
                        renderPopout: (0, i.jsx)(I.ZP, {
                            onComponentMount: S,
                            header: x.intl.string(x.t.KAsfPT),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: k,
                                className: Z.fullWidthImage
                            }),
                            content: x.intl.format(x.t.zK1hpq, {}),
                            buttonCTA: x.intl.string(x.t.UzVPra),
                            secondaryButtonCTA: x.intl.string(x.t['KkK/aG']),
                            onSecondaryClick: () => R(),
                            onClick: () => R(r),
                            markAsDismissed: G
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, i.jsx)(M, {
                        renderPopout: (0, i.jsx)(m.Z, {
                            guildId: r.id,
                            markAsDismissed: G
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP:
                    return (0, i.jsx)(M, {
                        renderPopout: (0, i.jsx)(d.Z, {
                            onClick: () => j(r, !0),
                            onSecondaryClick: () => j(r),
                            markAsDismissed: G
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, i.jsx)(M, {
                        renderPopout: (0, i.jsx)(c.Z, {
                            guild: r,
                            markAsDismissed: G
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_HEADER_INVITE_SPLASH:
                    let e = (0, v.f2)(r, N.Eu4.TIER_1) ? x.intl.format(x.t.DDzEVl, {}) : x.intl.formatToPlainString(x.t.pMftkJ, { boostCount: (0, v.KK)(r, N.Eu4.TIER_1) }),
                        t = (0, v.f2)(r, N.Eu4.TIER_1) ? x.intl.string(x.t.rOFcBg) : x.intl.string(x.t.hvVgAQ);
                    return (0, i.jsx)(M, {
                        renderPopout: (0, i.jsx)(I.ZP, {
                            onComponentMount: w,
                            header: x.intl.string(x.t['36wK8/']),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: L,
                                className: Z.fullWidthImage
                            }),
                            content: e,
                            buttonCTA: t,
                            secondaryButtonCTA: x.intl.string(x.t.hBIHLS),
                            onSecondaryClick: () => D(h),
                            onClick: () => D(h, r),
                            markAsDismissed: G
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, i.jsx)(M, {
                        renderPopout: (0, i.jsx)(f.Z, { markAsDismissed: G }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE:
                    return (0, i.jsx)(M, {
                        renderPopout: (0, i.jsx)(I.ZP, {
                            className: b.tooltipOverrideColor,
                            header: x.intl.string(x.t.hLUL3t),
                            content: x.intl.string(x.t.ahWaPT),
                            buttonCTA: x.intl.string(x.t['NX+WJC']),
                            onClick: () => G(T.L.UNKNOWN),
                            markAsDismissed: G
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_HEADER_SOUNDBOARD_PERMISSION:
                    return (0, i.jsx)(M, {
                        renderPopout: (0, i.jsx)(I.ZP, {
                            header: x.intl.string(x.t.PZNQKC),
                            content: x.intl.string(x.t.jQIyyM),
                            buttonCTA: x.intl.string(x.t.RzWDqa),
                            secondaryButtonCTA: x.intl.string(x.t.f3Pet7),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: P,
                                className: Z.fullWidthImage
                            }),
                            onClick: () => {
                                g.Z.open(r.id, N.pNK.ROLES), g.Z.selectRole(r.getEveryoneRoleId(), x.intl.string(x.t.Bco7ND));
                            },
                            markAsDismissed: G
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.MEDIA_CHANNEL_UPSELL:
                    return (0, i.jsx)(M, {
                        renderPopout: (0, i.jsx)(_.Z, {
                            guildId: r.id,
                            markAsDismissed: G
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, i.jsx)(M, {
                        renderPopout: (0, i.jsx)(p.Z, {
                            guildId: r.id,
                            markAsDismissed: G
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                default:
                    return s();
            }
        })()
    });
});
