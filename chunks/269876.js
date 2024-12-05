n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(46973),
    c = n(846519),
    d = n(692547),
    u = n(481060),
    m = n(846027),
    g = n(313201),
    h = n(131951),
    p = n(65154),
    x = n(388032),
    T = n(897237),
    S = n(587987),
    _ = n(652849),
    E = n(232186);
let C = (0, g.hQ)();
function f() {
    let [e, t] = s.useState(-100),
        [n, r] = s.useState(!1),
        { threshold: f, autoThreshold: I } = (0, a.cj)([h.Z], () => h.Z.getModeOptions()),
        {
            inputMode: N,
            automaticVADSupported: A,
            isEnabled: b
        } = (0, a.cj)([h.Z], () => ({
            inputMode: h.Z.getMode(),
            automaticVADSupported: h.Z.supports(p.AN.AUTOMATIC_VAD),
            isEnabled: h.Z.isEnabled()
        }));
    function v(e, n) {
        t(e), r((n & p.Dg.VOICE) === p.Dg.VOICE);
    }
    function j(e, t) {
        m.Z.setMode(N, {
            threshold: e,
            autoThreshold: t
        });
    }
    s.useEffect(() => {
        let e = new c.V7();
        return (
            e.start(1000, () => {
                h.Z.getMediaEngine().on(o.aB.VoiceActivity, v), e.stop();
            }),
            () => {
                h.Z.getMediaEngine().removeListener(o.aB.VoiceActivity, v), e.stop();
            }
        );
    }, []);
    let O = (0, i.jsx)('section', {
        className: l()(T.inputSensitivityToggle, T.manual),
        children: (0, i.jsx)(u.Slider, {
            initialValue: f + 100,
            onValueRender: (e) => ''.concat((-((100 - e) * 1)).toFixed(0), 'dB'),
            onValueChange: (e) => j(-((100 - e) * 1), I),
            barStyles: { background: d.Z.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: d.Z.unsafe_rawColors.YELLOW_300.css },
            'aria-labelledby': C,
            children: (0, i.jsxs)('div', {
                className: l()(T.sliderBar, T.microphone, T.inputSensitivityBar, S.bar),
                children: [
                    (0, i.jsx)('div', {
                        className: l()(T.fill, T.inputSensitivityBarFill),
                        style: { width: e + 100 + '%' }
                    }),
                    (0, i.jsx)('div', { className: 'grow' })
                ]
            })
        })
    });
    return (
        I &&
            (O = (0, i.jsxs)('section', {
                className: T.inputSensitivityToggle,
                children: [
                    (0, i.jsx)('div', {
                        className: T.inputSensitivitySlider,
                        children: (0, i.jsx)('div', { className: l()(T.inputSensitivityBar, T.sliderBar, { [T.speaking]: n }) })
                    }),
                    (0, i.jsx)(u.FormText, {
                        type: u.FormText.Types.DESCRIPTION,
                        className: E.marginBottom8,
                        children: x.intl.string(x.t.W3K5Ii)
                    })
                ]
            })),
        (0, i.jsxs)(u.FormItem, {
            className: T.sensitivity,
            children: [
                (0, i.jsx)(u.FormTitle, {
                    id: C,
                    tag: u.FormTitleTags.H5,
                    className: E.marginBottom8,
                    children: x.intl.string(x.t['sqUm+v'])
                }),
                (0, i.jsxs)('div', {
                    children: [
                        A &&
                            (0, i.jsx)(g.FG, {
                                children: (e) =>
                                    (0, i.jsxs)('div', {
                                        className: l()(_.horizontal, E.marginBottom4),
                                        children: [
                                            (0, i.jsx)(u.FormTitle, {
                                                tag: u.FormTitleTags.H3,
                                                className: E.marginReset,
                                                children: (0, i.jsx)('label', {
                                                    htmlFor: e,
                                                    children: x.intl.string(x.t.I1Zuq6)
                                                })
                                            }),
                                            (0, i.jsx)(u.Switch, {
                                                id: e,
                                                checked: I,
                                                onChange: (e) => j(f, e)
                                            })
                                        ]
                                    })
                            }),
                        O
                    ]
                }),
                !b &&
                    (0, i.jsx)(u.FormText, {
                        type: u.FormText.Types.DESCRIPTION,
                        className: l()(T.inputDisabledWarning, E.marginBottom8),
                        children: x.intl.format(x.t['O13I+P'], { onEnableClick: () => m.Z.enable(!0) })
                    })
            ]
        })
    );
}
