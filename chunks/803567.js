n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(653041);
var i,
    s,
    r = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    o = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(846027),
    m = n(600164),
    h = n(313201),
    g = n(921801),
    p = n(463395),
    x = n(131951),
    S = n(626135),
    T = n(63063),
    C = n(210887),
    E = n(726985),
    _ = n(981631),
    f = n(388032),
    I = n(113207);
let N = n(775322),
    A = n(853453),
    b = (0, h.hQ)();
((s = i || (i = {}))[(s.NONE = 0)] = 'NONE'), (s[(s.STANDARD = 1)] = 'STANDARD'), (s[(s.KRISP = 2)] = 'KRISP');
let v = {
    page: _.ZY5.USER_SETTINGS,
    section: _.jXE.SETTINGS_VOICE_AND_VIDEO
};
function j(e) {
    let t = e.currentTarget;
    S.default.track(_.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: {
            page: _.ZY5.USER_SETTINGS,
            section: _.jXE.SETTINGS_VOICE_AND_VIDEO
        }
    });
}
function O() {
    let e = (0, o.e7)([C.Z], () => C.Z.theme),
        {
            noiseCancellation: t,
            noiseSuppression: n,
            noiseSuppressionSupported: i,
            noiseCancellationSupported: s
        } = (0, o.cj)([x.Z], () => ({
            noiseCancellation: x.Z.getNoiseCancellation(),
            noiseSuppression: x.Z.getNoiseSuppression(),
            noiseSuppressionSupported: x.Z.isNoiseSuppressionSupported(),
            noiseCancellationSupported: x.Z.isNoiseCancellationSupported()
        }));
    if (!i && !s) return null;
    let l = [];
    return (
        s &&
            l.push({
                name: f.intl.string(f.t.rdoNzs),
                value: 2
            }),
        i &&
            l.push({
                name: f.intl.string(f.t.qXeYHx),
                value: 1
            }),
        l.push({
            name: f.intl.string(f.t.wkYAl5),
            value: 0
        }),
        (0, r.jsxs)(d.FormSection, {
            className: I.marginBottom20,
            children: [
                (0, r.jsx)(d.FormTitle, {
                    id: b,
                    tag: d.FormTitleTags.H3,
                    className: I.marginBottom8,
                    children: f.intl.string(f.t.t8QhiY)
                }),
                (0, r.jsx)(d.FormText, {
                    type: d.FormText.Types.DESCRIPTION,
                    className: I.marginBottom8,
                    children: f.intl.string(f.t.najZCQ)
                }),
                (0, r.jsx)(d.RadioGroup, {
                    options: l,
                    onChange: (e) => {
                        u.Z.setNoiseCancellation(2 === e.value, v), u.Z.setNoiseSuppression(1 === e.value, v);
                    },
                    value: t ? 2 : n ? 1 : 0
                }),
                s &&
                    (0, r.jsx)(d.FormNotice, {
                        className: I.marginBottom8,
                        type: d.FormNoticeTypes.PRIMARY,
                        imageData: {
                            src: (0, c.ap)(e) ? N : A,
                            width: 70,
                            height: 40
                        },
                        align: m.Z.Align.CENTER,
                        body: (0, r.jsx)(d.Anchor, {
                            href: T.Z.getArticleURL(_.BhN.NOISE_SUPPRESSION),
                            onClick: j,
                            children: f.intl.string(f.t.hvVgAQ)
                        })
                    }),
                (0, r.jsx)(d.FormDivider, {})
            ]
        })
    );
}
function R() {
    let {
            inputMode: e,
            inputDeviceId: t,
            echoCancellation: n,
            automaticGainControl: i,
            vadAutoThreshold: s,
            vadUseKrisp: l
        } = (0, o.cj)([x.Z], () => ({
            inputMode: x.Z.getMode(),
            inputDeviceId: x.Z.getInputDeviceId(),
            echoCancellation: x.Z.getEchoCancellation(),
            automaticGainControl: x.Z.getAutomaticGainControl(),
            vadAutoThreshold: x.Z.getModeOptions().autoThreshold,
            vadUseKrisp: x.Z.getModeOptions().vadUseKrisp
        })),
        {
            hasEchoCancellation: c,
            hasNoiseSuppression: m,
            hasAutomaticGainControl: h
        } = (0, o.cj)(
            [p.Z],
            () => ({
                hasEchoCancellation: p.Z.hasEchoCancellation(t),
                hasNoiseSuppression: p.Z.hasNoiseSuppression(t),
                hasAutomaticGainControl: p.Z.hasAutomaticGainControl(t)
            }),
            [t]
        ),
        S = c || m || h,
        T = e === _.pM4.VOICE_ACTIVITY && s;
    return (0, r.jsxs)(d.FormSection, {
        className: I.marginBottom20,
        title: f.intl.string(f.t['6I6GUl']),
        children: [
            S &&
                (0, r.jsx)(d.FormText, {
                    className: I.marginBottom20,
                    type: d.FormText.Types.DESCRIPTION,
                    children: f.intl.string(f.t['/Whuzs'])
                }),
            (0, r.jsx)(g.F, {
                setting: E.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
                children: (0, r.jsx)(d.FormSwitch, {
                    className: a()(I.marginTop8, I.marginBottom20),
                    value: n,
                    onChange: (e) =>
                        u.Z.setEchoCancellation(e, {
                            page: _.ZY5.USER_SETTINGS,
                            section: _.jXE.SETTINGS_VOICE_AND_VIDEO
                        }),
                    disabled: c,
                    children: f.intl.string(f.t.iWTwu7)
                })
            }),
            (0, r.jsx)(g.F, {
                setting: E.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
                children: (0, r.jsx)(O, {})
            }),
            (0, r.jsx)(g.F, {
                setting: E.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
                children: (0, r.jsx)(d.FormSwitch, {
                    value: l,
                    onChange: (t) => u.Z.setMode(e, { vadUseKrisp: t }),
                    note: f.intl.string(f.t.LoOB1N),
                    disabled: !T,
                    children: f.intl.string(f.t.BbESsr)
                })
            }),
            (0, r.jsx)(g.F, {
                setting: E.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
                children: (0, r.jsx)(d.FormSwitch, {
                    className: '',
                    value: i,
                    onChange: (e) =>
                        u.Z.setAutomaticGainControl(e, {
                            page: _.ZY5.USER_SETTINGS,
                            section: _.jXE.SETTINGS_VOICE_AND_VIDEO
                        }),
                    note: f.intl.string(f.t['6EjbvL']),
                    disabled: h,
                    children: f.intl.string(f.t.cUMdHx)
                })
            })
        ]
    });
}
