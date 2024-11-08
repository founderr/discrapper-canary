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
    S = n(981631),
    N = n(921944),
    T = n(30513),
    x = n(474936),
    A = n(388032),
    b = n(114778),
    Z = n(718991),
    y = n(741160),
    L = n(829972),
    R = n(31932),
    j = n(642301);
function O(e) {
    if (null != e) g.Z.open(e.id, S.pNK.OVERVIEW, { section: S.jXE.PREMIUM_GUILD_PROGRESS_BAR }, S.KsC.DISPLAY);
}
function P(e, t) {
    t && g.Z.open(e.id, S.pNK.DISCOVERY);
}
function D(e, t) {
    if (null != t)
        (0, v.f2)(t, S.Eu4.TIER_1)
            ? g.Z.open(t.id, S.pNK.OVERVIEW, { section: S.jXE.PREMIUM_GUILD_INVITE_SPLASH }, S.KsC.INVITE)
            : (0, h.Z)({
                  analyticsLocations: e,
                  analyticsSourceLocation: S.jXE.PREMIUM_GUILD_INVITE_SPLASH,
                  guild: t,
                  perks: (0, T.o9)()
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
        T = () => {
            C.default.track(S.rMx.TOOLTIP_VIEWED, {
                type: x.cd.PREMIUM_PROGRESS_BAR,
                location: { page: S.ZY5.GUILD_CHANNEL }
            });
        },
        w = () => {
            C.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                type: x.cd.INVITE_SPLASH_UPSELL,
                location: { page: S.ZY5.GUILD_CHANNEL },
                location_stack: h
            });
        },
        k = (0, a.wj)(n) ? L : R,
        [U, G] = (0, u.US)(t, N.R.GUILD_HEADER_TOOLTIPS);
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
                            onComponentMount: T,
                            header: A.intl.string(A.t.nxtaFx),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: k,
                                className: Z.fullWidthImage
                            }),
                            content: A.intl.format(A.t.ujItEh, {}),
                            buttonCTA: A.intl.string(A.t.UzVPra),
                            secondaryButtonCTA: A.intl.string(A.t['KkK/aG']),
                            onSecondaryClick: () => O(),
                            onClick: () => O(r),
                            markAsDismissed: G
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK:
                    return (0, i.jsx)(M, {
                        renderPopout: (0, i.jsx)(I.ZP, {
                            onComponentMount: T,
                            header: A.intl.string(A.t.KAsfPT),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: k,
                                className: Z.fullWidthImage
                            }),
                            content: A.intl.format(A.t.zK1hpq, {}),
                            buttonCTA: A.intl.string(A.t.UzVPra),
                            secondaryButtonCTA: A.intl.string(A.t['KkK/aG']),
                            onSecondaryClick: () => O(),
                            onClick: () => O(r),
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
                            onClick: () => P(r, !0),
                            onSecondaryClick: () => P(r),
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
                    let e = (0, v.f2)(r, S.Eu4.TIER_1) ? A.intl.format(A.t.DDzEVl, {}) : A.intl.formatToPlainString(A.t.pMftkJ, { boostCount: (0, v.KK)(r, S.Eu4.TIER_1) }),
                        t = (0, v.f2)(r, S.Eu4.TIER_1) ? A.intl.string(A.t.rOFcBg) : A.intl.string(A.t.hvVgAQ);
                    return (0, i.jsx)(M, {
                        renderPopout: (0, i.jsx)(I.ZP, {
                            onComponentMount: w,
                            header: A.intl.string(A.t['36wK8/']),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: y,
                                className: Z.fullWidthImage
                            }),
                            content: e,
                            buttonCTA: t,
                            secondaryButtonCTA: A.intl.string(A.t.hBIHLS),
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
                            header: A.intl.string(A.t.hLUL3t),
                            content: A.intl.string(A.t.ahWaPT),
                            buttonCTA: A.intl.string(A.t['NX+WJC']),
                            onClick: () => G(N.L.UNKNOWN),
                            markAsDismissed: G
                        }),
                        renderGuildHeaderDropdownButton: s
                    });
                case l.z.GUILD_HEADER_SOUNDBOARD_PERMISSION:
                    return (0, i.jsx)(M, {
                        renderPopout: (0, i.jsx)(I.ZP, {
                            header: A.intl.string(A.t.PZNQKC),
                            content: A.intl.string(A.t.jQIyyM),
                            buttonCTA: A.intl.string(A.t.RzWDqa),
                            secondaryButtonCTA: A.intl.string(A.t.f3Pet7),
                            asset: (0, i.jsx)('img', {
                                alt: '',
                                src: j,
                                className: Z.fullWidthImage
                            }),
                            onClick: () => {
                                g.Z.open(r.id, S.pNK.ROLES), g.Z.selectRole(r.getEveryoneRoleId(), A.intl.string(A.t.Bco7ND));
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
