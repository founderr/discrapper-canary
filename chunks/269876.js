t.d(s, {
    Z: function () {
        return h;
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
    m = t(752325),
    C = t(739017),
    A = t(113207);
let g = (0, E.hQ)();
function h() {
    let [e, s] = a.useState(-100),
        [t, i] = a.useState(!1),
        { threshold: h, autoThreshold: O } = (0, o.cj)([T.Z], () => T.Z.getModeOptions()),
        {
            inputMode: p,
            automaticVADSupported: R,
            isEnabled: x
        } = (0, o.cj)([T.Z], () => ({
            inputMode: T.Z.getMode(),
            automaticVADSupported: T.Z.supports(S.AN.AUTOMATIC_VAD),
            isEnabled: T.Z.isEnabled()
        }));
    function M(e, t) {
        s(e), i((t & S.Dg.VOICE) === S.Dg.VOICE);
    }
    function f(e, s) {
        u.Z.setMode(p, {
            threshold: e,
            autoThreshold: s
        });
    }
    a.useEffect(() => {
        let e = new c.V7();
        return (
            e.start(1000, () => {
                T.Z.getMediaEngine().on(l.aB.VoiceActivity, M), e.stop();
            }),
            () => {
                T.Z.getMediaEngine().removeListener(l.aB.VoiceActivity, M), e.stop();
            }
        );
    }, []);
    let D = (0, n.jsx)('section', {
        className: r()(N.inputSensitivityToggle, N.manual),
        children: (0, n.jsx)(_.Slider, {
            initialValue: h + 100,
            onValueRender: (e) => ''.concat((-((100 - e) * 1)).toFixed(0), 'dB'),
            onValueChange: (e) => f(-((100 - e) * 1), O),
            barStyles: { background: d.Z.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: d.Z.unsafe_rawColors.YELLOW_300.css },
            'aria-labelledby': g,
            children: (0, n.jsxs)('div', {
                className: r()(N.sliderBar, N.microphone, N.inputSensitivityBar, m.bar),
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
        O &&
            (D = (0, n.jsxs)('section', {
                className: N.inputSensitivityToggle,
                children: [
                    (0, n.jsx)('div', {
                        className: N.inputSensitivitySlider,
                        children: (0, n.jsx)('div', { className: r()(N.inputSensitivityBar, N.sliderBar, { [N.speaking]: t }) })
                    }),
                    (0, n.jsx)(_.FormText, {
                        type: _.FormText.Types.DESCRIPTION,
                        className: A.marginBottom8,
                        children: I.Z.Messages.FORM_HELP_AUTOMATIC_VAD
                    })
                ]
            })),
        (0, n.jsxs)(_.FormItem, {
            className: N.sensitivity,
            children: [
                (0, n.jsx)(_.FormTitle, {
                    id: g,
                    tag: _.FormTitleTags.H5,
                    className: A.marginBottom8,
                    children: I.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY
                }),
                (0, n.jsxs)('div', {
                    children: [
                        R &&
                            (0, n.jsx)(E.FG, {
                                children: (e) =>
                                    (0, n.jsxs)('div', {
                                        className: r()(C.horizontal, A.marginBottom4),
                                        children: [
                                            (0, n.jsx)(_.FormTitle, {
                                                tag: _.FormTitleTags.H3,
                                                className: A.marginReset,
                                                children: (0, n.jsx)('label', {
                                                    htmlFor: e,
                                                    children: I.Z.Messages.FORM_LABEL_AUTOMATIC_VAD
                                                })
                                            }),
                                            (0, n.jsx)(_.Switch, {
                                                id: e,
                                                checked: O,
                                                onChange: (e) => f(h, e)
                                            })
                                        ]
                                    })
                            }),
                        D
                    ]
                }),
                !x &&
                    (0, n.jsx)(_.FormText, {
                        type: _.FormText.Types.DESCRIPTION,
                        className: r()(N.inputDisabledWarning, A.marginBottom8),
                        children: I.Z.Messages.FORM_WARNING_INPUT_SENSITIVTY.format({ onEnableClick: () => u.Z.enable(!0) })
                    })
            ]
        })
    );
}
