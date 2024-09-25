t.d(s, {
    Z: function () {
        return g;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    l = t(46973),
    c = t(846519),
    d = t(692547),
    _ = t(481060),
    u = t(846027),
    E = t(313201),
    T = t(131951),
    S = t(65154),
    I = t(689938),
    N = t(393752),
    A = t(739017),
    C = t(113207);
let m = (0, E.hQ)();
function g() {
    let [e, s] = a.useState(-100),
        [t, i] = a.useState(!1),
        { threshold: g, autoThreshold: h } = (0, o.cj)([T.Z], () => T.Z.getModeOptions()),
        {
            inputMode: O,
            automaticVADSupported: p,
            isEnabled: R
        } = (0, o.cj)([T.Z], () => ({
            inputMode: T.Z.getMode(),
            automaticVADSupported: T.Z.supports(S.AN.AUTOMATIC_VAD),
            isEnabled: T.Z.isEnabled()
        }));
    function x(e, t) {
        s(e), i((t & S.Dg.VOICE) === S.Dg.VOICE);
    }
    function f(e, s) {
        u.Z.setMode(O, {
            threshold: e,
            autoThreshold: s
        });
    }
    a.useEffect(() => {
        let e = new c.V7();
        return (
            e.start(1000, () => {
                T.Z.getMediaEngine().on(l.aB.VoiceActivity, x), e.stop();
            }),
            () => {
                T.Z.getMediaEngine().removeListener(l.aB.VoiceActivity, x), e.stop();
            }
        );
    }, []);
    let M = (0, n.jsx)('section', {
        className: r()(N.inputSensitivityToggle, N.manual),
        children: (0, n.jsx)(_.Slider, {
            initialValue: g + 100,
            onValueRender: (e) => ''.concat((-((100 - e) * 1)).toFixed(0), 'dB'),
            onValueChange: (e) => f(-((100 - e) * 1), h),
            barStyles: { background: d.Z.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: d.Z.unsafe_rawColors.YELLOW_300.css },
            'aria-labelledby': m,
            children: (0, n.jsxs)('div', {
                className: r()(N.sliderBar, N.microphone, N.inputSensitivityBar),
                children: [
                    (0, n.jsx)('div', {
                        className: r()(N.fill, N.inputSensitivityBarFill),
                        style: { width: e + 100 + '%' }
                    }),
                    (0, n.jsx)('div', { className: 'grow' })
                ]
            })
        })
    });
    return (
        h &&
            (M = (0, n.jsxs)('section', {
                className: N.inputSensitivityToggle,
                children: [
                    (0, n.jsx)('div', {
                        className: N.inputSensitivitySlider,
                        children: (0, n.jsx)('div', { className: r()(N.inputSensitivityBar, N.sliderBar, { [N.speaking]: t }) })
                    }),
                    (0, n.jsx)(_.FormText, {
                        type: _.FormText.Types.DESCRIPTION,
                        className: C.marginBottom8,
                        children: I.Z.Messages.FORM_HELP_AUTOMATIC_VAD
                    })
                ]
            })),
        (0, n.jsxs)(_.FormItem, {
            className: N.sensitivity,
            children: [
                (0, n.jsx)(_.FormTitle, {
                    id: m,
                    tag: _.FormTitleTags.H5,
                    className: C.marginBottom8,
                    children: I.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY
                }),
                (0, n.jsxs)('div', {
                    children: [
                        p &&
                            (0, n.jsx)(E.FG, {
                                children: (e) =>
                                    (0, n.jsxs)('div', {
                                        className: r()(A.horizontal, C.marginBottom4),
                                        children: [
                                            (0, n.jsx)(_.FormTitle, {
                                                tag: _.FormTitleTags.H3,
                                                className: C.marginReset,
                                                children: (0, n.jsx)('label', {
                                                    htmlFor: e,
                                                    children: I.Z.Messages.FORM_LABEL_AUTOMATIC_VAD
                                                })
                                            }),
                                            (0, n.jsx)(_.Switch, {
                                                id: e,
                                                checked: h,
                                                onChange: (e) => f(g, e)
                                            })
                                        ]
                                    })
                            }),
                        M
                    ]
                }),
                !R &&
                    (0, n.jsx)(_.FormText, {
                        type: _.FormText.Types.DESCRIPTION,
                        className: r()(N.inputDisabledWarning, C.marginBottom8),
                        children: I.Z.Messages.FORM_WARNING_INPUT_SENSITIVTY.format({ onEnableClick: u.Z.enable })
                    })
            ]
        })
    );
}
