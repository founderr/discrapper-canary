t.d(s, {
    Z: function () {
        return M;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    o = t(596454),
    l = t(906732),
    c = t(856768),
    d = t(993413),
    _ = t(921801),
    E = t(208049),
    u = t(763296),
    I = t(242291),
    T = t(893663),
    S = t(331642),
    N = t(63063),
    C = t(581883),
    m = t(918257),
    A = t(726985),
    O = t(981631),
    g = t(710111),
    h = t(689938),
    p = t(484090),
    R = t(224499);
function x(e) {
    return (0, i.e7)([u.Z], () => {
        if (null == e) return null;
        let { guildId: s, soundId: t } = e;
        return u.Z.getSound(s === g.hY ? g.X8 : s, t);
    });
}
function M() {
    let { analyticsLocations: e } = (0, l.ZP)(),
        [s, t] = a.useState(g.hY),
        o = (0, T.tT)(s),
        C = x(o),
        M = (0, i.e7)([u.Z], () => u.Z.hasFetchedAllSounds()),
        D = (null == o ? void 0 : o.type) === T.zx.GLOBAL,
        P = M && null != o && null == C;
    a.useEffect(() => {
        P && (0, I.tt)({ location: e });
    }, [P, e]),
        a.useEffect(() => {
            (0, E.w)();
        }, []);
    let L = a.useCallback((e, s) => {
        let { inDropdown: t } = s;
        return null == e ? null : t ? (0, n.jsx)(f, { guildId: e.value }) : null;
    }, []);
    return (0, n.jsxs)(r.FormSection, {
        className: p.container,
        tag: r.FormTitleTags.H1,
        titleClassName: R.__invalid_marginBottom16,
        title: h.Z.Messages.SOUNDBOARD,
        children: [
            (0, n.jsx)(_.F, {
                setting: A.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                children: (0, n.jsx)(m.Z, {})
            }),
            (0, n.jsxs)(_.F, {
                setting: A.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
                children: [
                    (0, n.jsx)(r.FormDivider, { className: p.callSoundsDivider }),
                    (0, n.jsx)(r.Heading, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        className: p.callSoundsTitle,
                        children: h.Z.Messages.CALL_SOUNDS_SETTINGS
                    }),
                    (0, n.jsx)(r.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: h.Z.Messages.CALL_SOUNDS_SETTINGS_DESCRIPTION_2.format({ helpdeskArticle: N.Z.getArticleURL(O.BhN.SOUNDBOARD) })
                    }),
                    (0, n.jsx)(c.Z, {
                        guildId: s,
                        className: p.guildSelector,
                        globalOption: {
                            label: h.Z.Messages.CALL_SOUNDS_SETTINGS_GLOBAL_GUILD_SEARCH,
                            value: g.hY
                        },
                        onChange: (e) => t(null == e ? g.hY : e.id),
                        renderOptionSuffix: L,
                        hideDivider: !0
                    }),
                    (0, n.jsxs)(d.Z, {
                        className: R.marginTop20,
                        title: h.Z.Messages.CALL_SOUNDS_SETTINGS_JOIN_SOUND.format({
                            nitroWheelHook: () =>
                                (0, n.jsx)(r.NitroWheelIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: p.nitroWheel
                                })
                        }),
                        forcedDivider: !0,
                        children: [
                            (0, n.jsx)(S.Z, {
                                sound: C,
                                isGlobal: D,
                                onSelect: (t) => {
                                    null == t ? (0, I.aC)(s, e) : (0, I.SZ)(s, t, e);
                                }
                            }),
                            P &&
                                (0, n.jsx)(r.HelpMessage, {
                                    className: p.notice,
                                    messageType: r.HelpMessageTypes.WARNING,
                                    children: h.Z.Messages.CALL_SOUNDS_SETTINGS_SOUND_REMOVED
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
function f(e) {
    let { guildId: s } = e,
        t = (0, i.e7)([C.Z], () => {
            var e, t, n;
            return null === (n = C.Z.settings.guilds) || void 0 === n ? void 0 : null === (t = n.guilds) || void 0 === t ? void 0 : null === (e = t[s]) || void 0 === e ? void 0 : e.joinSound;
        }),
        a = x(t);
    if (null == t || null == a) return null;
    let { emojiId: l, emojiName: c } = a,
        d = null != l || null != c;
    return (0, n.jsxs)('div', {
        className: p.pill,
        children: [
            d
                ? (0, n.jsx)(o.Z, {
                      emojiId: l,
                      emojiName: c,
                      className: p.pillIcon
                  })
                : (0, n.jsx)(r.VoiceNormalIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: p.pillIcon
                  }),
            (0, n.jsx)(r.Text, {
                className: p.pillText,
                variant: 'text-xs/medium',
                children: a.name
            })
        ]
    });
}
