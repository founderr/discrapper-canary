n.d(t, {
    Z: function () {
        return j;
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
    h = n(763296),
    g = n(242291),
    p = n(893663),
    x = n(331642),
    S = n(63063),
    T = n(581883),
    E = n(918257),
    _ = n(970813),
    C = n(726985),
    I = n(981631),
    f = n(710111),
    N = n(388032),
    A = n(518782),
    b = n(232186);
function v(e) {
    return (0, r.e7)([h.Z], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return h.Z.getSound(t === f.hY ? f.X8 : t, n);
    });
}
function j() {
    let { analyticsLocations: e } = (0, o.ZP)(),
        [t, n] = s.useState(f.hY),
        a = (0, p.tT)(t),
        T = v(a),
        j = (0, r.e7)([h.Z], () => h.Z.hasFetchedAllSounds()),
        R = (null == a ? void 0 : a.type) === p.zx.GLOBAL,
        P = j && null != a && null == T;
    s.useEffect(() => {
        P && (0, g.tt)({ location: e });
    }, [P, e]),
        s.useEffect(() => {
            (0, m.w)();
        }, []);
    let D = s.useCallback((e, t) => {
        let { inDropdown: n } = t;
        return null == e ? null : n ? (0, i.jsx)(O, { guildId: e.value }) : null;
    }, []);
    return (0, i.jsxs)(l.FormSection, {
        className: A.container,
        tag: l.FormTitleTags.H1,
        titleClassName: b.__invalid_marginBottom16,
        title: N.intl.string(N.t.ABjMWF),
        children: [
            (0, i.jsxs)(u.F, {
                setting: C.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                children: [(0, i.jsx)(E.Z, {}), (0, i.jsx)(_.Z, {})]
            }),
            (0, i.jsxs)(u.F, {
                setting: C.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
                children: [
                    (0, i.jsx)(l.FormDivider, { className: A.callSoundsDivider }),
                    (0, i.jsx)(l.Heading, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        className: A.callSoundsTitle,
                        children: N.intl.string(N.t.nzUc3N)
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: N.intl.format(N.t.u9RWmp, { helpdeskArticle: S.Z.getArticleURL(I.BhN.SOUNDBOARD) })
                    }),
                    (0, i.jsx)(c.Z, {
                        guildId: t,
                        className: A.guildSelector,
                        globalOption: {
                            label: N.intl.string(N.t.CpEUPz),
                            value: f.hY
                        },
                        onChange: (e) => n(null == e ? f.hY : e.id),
                        renderOptionSuffix: D,
                        hideDivider: !0
                    }),
                    (0, i.jsxs)(d.Z, {
                        className: b.marginTop20,
                        title: N.intl.format(N.t.I2TsYG, {
                            nitroWheelHook: () =>
                                (0, i.jsx)(l.NitroWheelIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: A.nitroWheel
                                })
                        }),
                        forcedDivider: !0,
                        children: [
                            (0, i.jsx)(x.Z, {
                                sound: T,
                                isGlobal: R,
                                onSelect: (n) => {
                                    null == n ? (0, g.aC)(t, e) : (0, g.SZ)(t, n, e);
                                }
                            }),
                            P &&
                                (0, i.jsx)(l.HelpMessage, {
                                    className: A.notice,
                                    messageType: l.HelpMessageTypes.WARNING,
                                    children: N.intl.string(N.t.WkPsFR)
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
function O(e) {
    let { guildId: t } = e,
        n = (0, r.e7)([T.Z], () => {
            var e, n, i;
            return null === (i = T.Z.settings.guilds) || void 0 === i ? void 0 : null === (n = i.guilds) || void 0 === n ? void 0 : null === (e = n[t]) || void 0 === e ? void 0 : e.joinSound;
        }),
        s = v(n);
    if (null == n || null == s) return null;
    let { emojiId: o, emojiName: c } = s,
        d = null != o || null != c;
    return (0, i.jsxs)('div', {
        className: A.pill,
        children: [
            d
                ? (0, i.jsx)(a.Z, {
                      emojiId: o,
                      emojiName: c,
                      className: A.pillIcon
                  })
                : (0, i.jsx)(l.VoiceNormalIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: A.pillIcon
                  }),
            (0, i.jsx)(l.Text, {
                className: A.pillText,
                variant: 'text-xs/medium',
                children: s.name
            })
        ]
    });
}
