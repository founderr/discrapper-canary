t.d(s, {
    Z: function () {
        return P;
    }
}),
    t(653041);
var n,
    a,
    i = t(735250);
t(470079);
var r = t(120356),
    o = t.n(r),
    l = t(442837),
    c = t(780384),
    d = t(481060),
    _ = t(846027),
    E = t(600164),
    u = t(313201),
    I = t(921801),
    T = t(463395),
    S = t(131951),
    N = t(626135),
    C = t(63063),
    m = t(210887),
    A = t(726985),
    O = t(981631),
    g = t(689938),
    h = t(224499);
let p = t(775322),
    R = t(853453),
    x = (0, u.hQ)();
((a = n || (n = {}))[(a.NONE = 0)] = 'NONE'), (a[(a.STANDARD = 1)] = 'STANDARD'), (a[(a.KRISP = 2)] = 'KRISP');
let M = {
    page: O.ZY5.USER_SETTINGS,
    section: O.jXE.SETTINGS_VOICE_AND_VIDEO
};
function f(e) {
    let s = e.currentTarget;
    N.default.track(O.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: s.text,
        href: s.href,
        location: {
            page: O.ZY5.USER_SETTINGS,
            section: O.jXE.SETTINGS_VOICE_AND_VIDEO
        }
    });
}
function D() {
    let e = (0, l.e7)([m.Z], () => m.Z.theme),
        {
            noiseCancellation: s,
            noiseSuppression: t,
            noiseSuppressionSupported: n,
            noiseCancellationSupported: a
        } = (0, l.cj)([S.Z], () => ({
            noiseCancellation: S.Z.getNoiseCancellation(),
            noiseSuppression: S.Z.getNoiseSuppression(),
            noiseSuppressionSupported: S.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: S.Z.isNoiseCancellationSupported()
        }));
    if (!n && !a) return null;
    let r = [];
    return (
        a &&
            r.push({
                name: g.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_KRISP,
                value: 2
            }),
        n &&
            r.push({
                name: g.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_STANDARD,
                value: 1
            }),
        r.push({
            name: g.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_DISABLED,
            value: 0
        }),
        (0, i.jsxs)(d.FormSection, {
            className: h.marginBottom20,
            children: [
                (0, i.jsx)(d.FormTitle, {
                    id: x,
                    tag: d.FormTitleTags.H3,
                    className: h.marginBottom8,
                    children: g.Z.Messages.NOISE_SUPPRESSION
                }),
                (0, i.jsx)(d.FormText, {
                    type: d.FormText.Types.DESCRIPTION,
                    className: h.marginBottom8,
                    children: g.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_DESCRIPTION
                }),
                (0, i.jsx)(d.RadioGroup, {
                    options: r,
                    onChange: (e) => {
                        _.Z.setNoiseCancellation(2 === e.value, M), _.Z.setNoiseSuppression(1 === e.value, M);
                    },
                    value: s ? 2 : t ? 1 : 0
                }),
                a &&
                    (0, i.jsx)(d.FormNotice, {
                        className: h.marginBottom8,
                        type: d.FormNoticeTypes.PRIMARY,
                        imageData: {
                            src: (0, c.ap)(e) ? p : R,
                            width: 70,
                            height: 40
                        },
                        align: E.Z.Align.CENTER,
                        body: (0, i.jsx)(d.Anchor, {
                            href: C.Z.getArticleURL(O.BhN.NOISE_SUPPRESSION),
                            onClick: f,
                            children: g.Z.Messages.LEARN_MORE
                        })
                    }),
                (0, i.jsx)(d.FormDivider, {})
            ]
        })
    );
}
function P() {
    let {
            inputMode: e,
            inputDeviceId: s,
            echoCancellation: t,
            automaticGainControl: n,
            vadAutoThreshold: a,
            vadUseKrisp: r
        } = (0, l.cj)([S.Z], () => ({
            inputMode: S.Z.getMode(),
            inputDeviceId: S.Z.getInputDeviceId(),
            echoCancellation: S.Z.getEchoCancellation(),
            automaticGainControl: S.Z.getAutomaticGainControl(),
            vadAutoThreshold: S.Z.getModeOptions().autoThreshold,
            vadUseKrisp: S.Z.getModeOptions().vadUseKrisp
        })),
        {
            hasEchoCancellation: c,
            hasNoiseSuppression: E,
            hasAutomaticGainControl: u
        } = (0, l.cj)(
            [T.Z],
            () => ({
                hasEchoCancellation: T.Z.hasEchoCancellation(s),
                hasNoiseSuppression: T.Z.hasNoiseSuppression(s),
                hasAutomaticGainControl: T.Z.hasAutomaticGainControl(s)
            }),
            [s]
        ),
        N = c || E || u,
        C = e === O.pM4.VOICE_ACTIVITY && a;
    return (0, i.jsxs)(d.FormSection, {
        className: h.marginBottom20,
        title: g.Z.Messages.FORM_LABEL_VOICE_PROCESSING,
        children: [
            N &&
                (0, i.jsx)(d.FormText, {
                    className: h.marginBottom20,
                    type: d.FormText.Types.DESCRIPTION,
                    children: g.Z.Messages.FORM_HELP_CERTIFIED_VOICE_PROCESSING
                }),
            (0, i.jsx)(I.F, {
                setting: A.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
                children: (0, i.jsx)(d.FormSwitch, {
                    className: o()(h.marginTop8, h.marginBottom20),
                    value: t,
                    onChange: (e) =>
                        _.Z.setEchoCancellation(e, {
                            page: O.ZY5.USER_SETTINGS,
                            section: O.jXE.SETTINGS_VOICE_AND_VIDEO
                        }),
                    disabled: c,
                    children: g.Z.Messages.ECHO_CANCELLATION
                })
            }),
            (0, i.jsx)(I.F, {
                setting: A.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
                children: (0, i.jsx)(D, {})
            }),
            (0, i.jsx)(I.F, {
                setting: A.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
                children: (0, i.jsx)(d.FormSwitch, {
                    value: r,
                    onChange: (s) => _.Z.setMode(e, { vadUseKrisp: s }),
                    note: g.Z.Messages.USER_SETTINGS_DISABLE_ADVANCED_VOICE_ACTIVITY,
                    disabled: !C,
                    children: g.Z.Messages.ADVANCED_VOICE_ACTIVITY
                })
            }),
            (0, i.jsx)(I.F, {
                setting: A.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
                children: (0, i.jsx)(d.FormSwitch, {
                    className: '',
                    value: n,
                    onChange: (e) =>
                        _.Z.setAutomaticGainControl(e, {
                            page: O.ZY5.USER_SETTINGS,
                            section: O.jXE.SETTINGS_VOICE_AND_VIDEO
                        }),
                    note: g.Z.Messages.USER_SETTINGS_AUTOMATIC_GAIN_CONTROL,
                    disabled: u,
                    children: g.Z.Messages.AUTOMATIC_GAIN_CONTROL
                })
            })
        ]
    });
}
