n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(596454),
    o = n(906732),
    c = n(856768),
    d = n(993413),
    u = n(921801),
    m = n(208049),
    g = n(763296),
    h = n(242291),
    p = n(893663),
    x = n(331642),
    T = n(63063),
    S = n(581883),
    _ = n(918257),
    E = n(726985),
    C = n(981631),
    f = n(710111),
    I = n(388032),
    N = n(518782),
    A = n(232186);
function b(e) {
    return (0, r.e7)([g.Z], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return g.Z.getSound(t === f.hY ? f.X8 : t, n);
    });
}
function v() {
    let { analyticsLocations: e } = (0, o.ZP)(),
        [t, n] = s.useState(f.hY),
        a = (0, p.tT)(t),
        S = b(a),
        v = (0, r.e7)([g.Z], () => g.Z.hasFetchedAllSounds()),
        O = (null == a ? void 0 : a.type) === p.zx.GLOBAL,
        R = v && null != a && null == S;
    s.useEffect(() => {
        R && (0, h.tt)({ location: e });
    }, [R, e]),
        s.useEffect(() => {
            (0, m.w)();
        }, []);
    let P = s.useCallback((e, t) => {
        let { inDropdown: n } = t;
        return null == e ? null : n ? (0, i.jsx)(j, { guildId: e.value }) : null;
    }, []);
    return (0, i.jsxs)(l.FormSection, {
        className: N.container,
        tag: l.FormTitleTags.H1,
        titleClassName: A.__invalid_marginBottom16,
        title: I.intl.string(I.t.ABjMWF),
        children: [
            (0, i.jsx)(u.F, {
                setting: E.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                children: (0, i.jsx)(_.Z, {})
            }),
            (0, i.jsxs)(u.F, {
                setting: E.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
                children: [
                    (0, i.jsx)(l.FormDivider, { className: N.callSoundsDivider }),
                    (0, i.jsx)(l.Heading, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        className: N.callSoundsTitle,
                        children: I.intl.string(I.t.nzUc3N)
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: I.intl.format(I.t.u9RWmp, { helpdeskArticle: T.Z.getArticleURL(C.BhN.SOUNDBOARD) })
                    }),
                    (0, i.jsx)(c.Z, {
                        guildId: t,
                        className: N.guildSelector,
                        globalOption: {
                            label: I.intl.string(I.t.CpEUPz),
                            value: f.hY
                        },
                        onChange: (e) => n(null == e ? f.hY : e.id),
                        renderOptionSuffix: P,
                        hideDivider: !0
                    }),
                    (0, i.jsxs)(d.Z, {
                        className: A.marginTop20,
                        title: I.intl.format(I.t.I2TsYG, {
                            nitroWheelHook: () =>
                                (0, i.jsx)(l.NitroWheelIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: N.nitroWheel
                                })
                        }),
                        forcedDivider: !0,
                        children: [
                            (0, i.jsx)(x.Z, {
                                sound: S,
                                isGlobal: O,
                                onSelect: (n) => {
                                    null == n ? (0, h.aC)(t, e) : (0, h.SZ)(t, n, e);
                                }
                            }),
                            R &&
                                (0, i.jsx)(l.HelpMessage, {
                                    className: N.notice,
                                    messageType: l.HelpMessageTypes.WARNING,
                                    children: I.intl.string(I.t.WkPsFR)
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
function j(e) {
    let { guildId: t } = e,
        n = (0, r.e7)([S.Z], () => {
            var e, n, i;
            return null === (i = S.Z.settings.guilds) || void 0 === i ? void 0 : null === (n = i.guilds) || void 0 === n ? void 0 : null === (e = n[t]) || void 0 === e ? void 0 : e.joinSound;
        }),
        s = b(n);
    if (null == n || null == s) return null;
    let { emojiId: o, emojiName: c } = s,
        d = null != o || null != c;
    return (0, i.jsxs)('div', {
        className: N.pill,
        children: [
            d
                ? (0, i.jsx)(a.Z, {
                      emojiId: o,
                      emojiName: c,
                      className: N.pillIcon
                  })
                : (0, i.jsx)(l.VoiceNormalIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: N.pillIcon
                  }),
            (0, i.jsx)(l.Text, {
                className: N.pillText,
                variant: 'text-xs/medium',
                children: s.name
            })
        ]
    });
}
