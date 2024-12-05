n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(846027),
    u = n(600164),
    m = n(921801),
    g = n(131951),
    h = n(210887),
    p = n(996073),
    x = n(526761),
    T = n(726985),
    S = n(388032),
    _ = n(232186);
let E = n(651714),
    C = n(297166);
function f() {
    let { experimentalEncoders: e } = (0, a.cj)([g.Z], () => ({ experimentalEncoders: g.Z.getExperimentalEncoders() }));
    return (0, i.jsx)(m.F, {
        setting: T.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS,
        children: (0, i.jsx)(c.FormSwitch, {
            className: l()(_.marginTop8, _.marginBottom20),
            value: e,
            onChange: (e) => d.Z.setExperimentalEncoders(e),
            disabled: !1,
            children: S.intl.string(S.t.AxnPm5)
        })
    });
}
function I() {
    let e = (0, a.e7)([h.Z], () => h.Z.theme),
        { openH264: t, hardwareEncoding: n } = (0, a.cj)([g.Z], () => ({
            openH264: g.Z.getOpenH264(),
            hardwareEncoding: g.Z.getHardwareEncoding()
        })),
        r = s.useRef(null);
    return (
        (0, p.Z)(r, x.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(m.F, {
                    setting: T.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO,
                    children: (0, i.jsx)(c.FormSection, {
                        className: _.marginBottom20,
                        title: S.intl.string(S.t.DSGme3),
                        children: (0, i.jsx)(c.FormNotice, {
                            className: _.marginBottom20,
                            type: c.FormNoticeTypes.PRIMARY,
                            imageData: {
                                src: (0, o.ap)(e) ? E : C,
                                width: 70,
                                height: 40
                            },
                            align: u.Z.Align.CENTER,
                            body: S.intl.string(S.t['2nDAzM'])
                        })
                    })
                }),
                (0, i.jsx)(m.F, {
                    setting: T.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                    children: (0, i.jsxs)(c.FormSection, {
                        className: _.marginBottom20,
                        title: S.intl.string(S.t.Tceiq6),
                        children: [
                            (0, i.jsx)(m.F, {
                                setting: T.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264,
                                children: (0, i.jsx)(c.FormSwitch, {
                                    className: l()(_.marginTop8, _.marginBottom20),
                                    value: t,
                                    onChange: (e) => d.Z.setOpenH264(e),
                                    disabled: !1,
                                    children: S.intl.string(S.t['71Ve19'])
                                })
                            }),
                            (0, i.jsx)('div', {
                                style: { scrollMarginTop: '48px' },
                                ref: r
                            }),
                            (0, i.jsx)(m.F, {
                                setting: T.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION,
                                children: (0, i.jsx)(c.FormSwitch, {
                                    className: l()(_.marginTop8, _.marginBottom20),
                                    value: n,
                                    onChange: (e) => d.Z.setHardwareEncoding(e),
                                    note: S.intl.string(S.t.P1UKqq),
                                    children: S.intl.string(S.t.Sln58f)
                                })
                            }),
                            (0, i.jsx)(f, {})
                        ]
                    })
                })
            ]
        })
    );
}
