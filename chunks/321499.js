n.d(t, {
    Z: function () {
        return f;
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
    h = n(131951),
    g = n(210887),
    p = n(996073),
    x = n(526761),
    S = n(726985),
    T = n(388032),
    C = n(971436);
let E = n(651714),
    _ = n(297166);
function I() {
    let { experimentalEncoders: e } = (0, a.cj)([h.Z], () => ({ experimentalEncoders: h.Z.getExperimentalEncoders() }));
    return (0, i.jsx)(m.F, {
        setting: S.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS,
        children: (0, i.jsx)(c.FormSwitch, {
            className: l()(C.marginTop8, C.marginBottom20),
            value: e,
            onChange: (e) => d.Z.setExperimentalEncoders(e),
            disabled: !1,
            children: T.intl.string(T.t.AxnPm5)
        })
    });
}
function f() {
    let e = (0, a.e7)([g.Z], () => g.Z.theme),
        { openH264: t, hardwareEncoding: n } = (0, a.cj)([h.Z], () => ({
            openH264: h.Z.getOpenH264(),
            hardwareEncoding: h.Z.getHardwareEncoding()
        })),
        r = s.useRef(null);
    return (
        (0, p.Z)(r, x.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(m.F, {
                    setting: S.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO,
                    children: (0, i.jsx)(c.FormSection, {
                        className: C.marginBottom20,
                        title: T.intl.string(T.t.DSGme3),
                        children: (0, i.jsx)(c.FormNotice, {
                            className: C.marginBottom20,
                            type: c.FormNoticeTypes.PRIMARY,
                            imageData: {
                                src: (0, o.ap)(e) ? E : _,
                                width: 70,
                                height: 40
                            },
                            align: u.Z.Align.CENTER,
                            body: T.intl.string(T.t['2nDAzM'])
                        })
                    })
                }),
                (0, i.jsx)(m.F, {
                    setting: S.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                    children: (0, i.jsxs)(c.FormSection, {
                        className: C.marginBottom20,
                        title: T.intl.string(T.t.Tceiq6),
                        children: [
                            (0, i.jsx)(m.F, {
                                setting: S.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264,
                                children: (0, i.jsx)(c.FormSwitch, {
                                    className: l()(C.marginTop8, C.marginBottom20),
                                    value: t,
                                    onChange: (e) => d.Z.setOpenH264(e),
                                    disabled: !1,
                                    children: T.intl.string(T.t['71Ve19'])
                                })
                            }),
                            (0, i.jsx)('div', {
                                style: { scrollMarginTop: '48px' },
                                ref: r
                            }),
                            (0, i.jsx)(m.F, {
                                setting: S.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION,
                                children: (0, i.jsx)(c.FormSwitch, {
                                    className: l()(C.marginTop8, C.marginBottom20),
                                    value: n,
                                    onChange: (e) => d.Z.setHardwareEncoding(e),
                                    note: T.intl.string(T.t.P1UKqq),
                                    children: T.intl.string(T.t.Sln58f)
                                })
                            }),
                            (0, i.jsx)(I, {})
                        ]
                    })
                })
            ]
        })
    );
}
