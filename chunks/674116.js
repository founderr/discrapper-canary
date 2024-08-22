t.d(s, {
    Z: function () {
        return G;
    }
}),
    t(653041);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(846027),
    d = t(230711),
    _ = t(313201),
    E = t(111672),
    u = t(921801),
    I = t(131951),
    T = t(663389),
    S = t(63063),
    N = t(358085),
    C = t(894939),
    m = t(321499),
    A = t(710808),
    O = t(625205),
    g = t(325808),
    h = t(823087),
    p = t(546997),
    R = t(167540),
    x = t(803567),
    M = t(269876),
    f = t(976758),
    D = t(526761),
    P = t(726985),
    L = t(981631),
    b = t(65154),
    Z = t(689938),
    v = t(224499);
let j = (0, _.hQ)(),
    B = ''.concat(S.Z.getArticleURL(L.BhN.VOICE_VIDEO_TROUBLESHOOTING), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm');
function U(e, s, t) {
    (0, l.openModal)((a) =>
        (0, n.jsx)(l.ConfirmModal, {
            header: e,
            confirmText: Z.Z.Messages.OKAY,
            cancelText: Z.Z.Messages.CANCEL,
            onConfirm: t,
            ...a,
            children: (0, n.jsx)(l.Text, {
                variant: 'text-md/normal',
                children: s
            })
        })
    );
}
function G() {
    let {
            inputMode: e,
            qosEnabled: s,
            attenuation: t,
            attenuateWhileSpeakingSelf: i,
            attenuateWhileSpeakingOthers: _,
            audioSubsystem: S,
            silenceWarning: L,
            legacyAudioSubsystemSupported: G,
            experimentalAudioSubsystemSupported: F,
            sidechainEnabled: y,
            sidechainStrength: V
        } = (0, o.cj)([I.Z], () => ({
            inputMode: I.Z.getMode(),
            qosEnabled: I.Z.getQoS(),
            attenuation: I.Z.getAttenuation(),
            attenuateWhileSpeakingSelf: I.Z.getAttenuateWhileSpeakingSelf(),
            attenuateWhileSpeakingOthers: I.Z.getAttenuateWhileSpeakingOthers(),
            audioSubsystem: I.Z.getAudioSubsystem(),
            silenceWarning: I.Z.getEnableSilenceWarning(),
            legacyAudioSubsystemSupported: I.Z.supports(b.AN.LEGACY_AUDIO_SUBSYSTEM),
            experimentalAudioSubsystemSupported: I.Z.supports(b.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
            sidechainEnabled: I.Z.getSidechainCompression(),
            sidechainStrength: I.Z.getSidechainCompressionStrength()
        })),
        Y = (0, o.e7)([T.Z], () => T.Z.getSubsection()),
        H = a.createRef();
    a.useEffect(() => {
        if (Y === D.GA) {
            var e;
            null == H || null === (e = H.current) || void 0 === e || e.scrollIntoView(), d.Z.clearSubsection();
        }
    }, [H, Y]);
    let w = E.Z.getCurrentConfig({ location: 'UserSettingsVoiceProcessing' }).sidechainAvailable && !(0, N.isWeb)();
    return (0, n.jsxs)(l.FormSection, {
        tag: l.FormTitleTags.H1,
        title: Z.Z.Messages.VOICE_SETTINGS,
        children: [
            (0, n.jsx)(u.F, {
                setting: P.s6.VOICE_AND_VIDEO_DEVICES,
                children: (0, n.jsx)(O.Z, {})
            }),
            (0, n.jsx)(u.F, {
                setting: P.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS,
                children: (0, n.jsx)(f.Z, {})
            }),
            (0, n.jsxs)(u.F, {
                setting: P.s6.VOICE_AND_VIDEO_MIC_TEST,
                children: [
                    (0, n.jsx)(h.Z, {}),
                    (0, n.jsx)(l.FormText, {
                        className: v.marginBottom20,
                        type: l.FormText.Types.DESCRIPTION,
                        children: Z.Z.Messages.FORM_HELP_VOICE_VIDEO_TROUBLESHOOTING_GUIDE.format({ guideURL: B })
                    }),
                    (0, n.jsx)(l.FormDivider, { className: r()(v.marginBottom20) })
                ]
            }),
            (0, n.jsx)(u.F, {
                setting: P.s6.VOICE_AND_VIDEO_INPUT_MODE,
                children: (0, n.jsx)(g.Z, {})
            }),
            (0, n.jsxs)(u.F, {
                setting: P.s6.VOICE_AND_VIDEO_SENSITIVITY,
                children: [e === b.pM.VOICE_ACTIVITY && (0, n.jsx)(M.Z, {}), (0, n.jsx)(l.FormDivider, { className: v.marginBottom40 })]
            }),
            (0, n.jsx)(u.F, {
                setting: P.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                children: (0, n.jsx)('div', {
                    style: { scrollMarginTop: '48px' },
                    ref: H
                })
            }),
            (0, n.jsx)(u.F, {
                setting: P.s6.VOICE_AND_VIDEO_SOUNDS,
                children: (0, n.jsx)(C.Z, {})
            }),
            (0, n.jsx)(u.F, {
                setting: P.s6.VOICE_AND_VIDEO_VIDEO,
                children: (0, n.jsx)(R.Z, {})
            }),
            (0, n.jsx)(u.F, {
                setting: P.s6.VOICE_AND_VIDEO_ADVANCED,
                children: (0, n.jsxs)(l.HeadingLevel, {
                    component: (0, n.jsx)(l.FormTitle, {
                        tag: l.FormTitleTags.H1,
                        className: v.marginBottom20,
                        children: Z.Z.Messages.SETTINGS_ADVANCED
                    }),
                    children: [
                        (0, n.jsx)(m.Z, {}),
                        (0, n.jsx)(u.F, {
                            setting: P.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                            children: (0, n.jsx)(x.Z, {})
                        }),
                        (0, n.jsx)(u.F, {
                            setting: P.s6.VOICE_AND_VIDEO_ADVANCED_QOS,
                            children: (0, n.jsx)(l.FormSection, {
                                className: v.marginBottom20,
                                title: Z.Z.Messages.FORM_LABEL_QOS,
                                children: (0, n.jsx)(l.FormSwitch, {
                                    value: s,
                                    onChange: (e) => c.Z.setQoS(e),
                                    note: Z.Z.Messages.FORM_HELP_QOS,
                                    children: Z.Z.Messages.FORM_CHECKBOX_QOS
                                })
                            })
                        }),
                        (0, n.jsx)(u.F, {
                            setting: P.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
                            children: (0, n.jsxs)(l.FormSection, {
                                className: v.marginBottom20,
                                children: [
                                    (0, n.jsx)(l.FormTitle, {
                                        id: j,
                                        tag: l.FormTitleTags.H5,
                                        className: v.marginBottom8,
                                        children: Z.Z.Messages.FORM_LABEL_ATTENUATION
                                    }),
                                    (0, n.jsx)(l.Slider, {
                                        initialValue: t,
                                        onValueChange: (e) => {
                                            c.Z.setAttenuation(e, i, _);
                                        },
                                        'aria-labelledby': j
                                    }),
                                    (0, n.jsx)(l.FormText, {
                                        className: v.marginBottom20,
                                        type: l.FormText.Types.DESCRIPTION,
                                        children: Z.Z.Messages.FORM_HELP_ATTENUATION
                                    }),
                                    (0, n.jsx)(l.FormDivider, { className: v.marginBottom20 }),
                                    (0, n.jsx)(l.FormSwitch, {
                                        value: i,
                                        onChange: (e) => c.Z.setAttenuation(t, e, _),
                                        children: Z.Z.Messages.ATTENUATE_WHILE_SPEAKING_SELF
                                    }),
                                    (0, n.jsx)(l.FormSwitch, {
                                        value: _,
                                        onChange: (e) => c.Z.setAttenuation(t, i, e),
                                        children: Z.Z.Messages.ATTENUATE_WHILE_SPEAKING_OTHERS
                                    })
                                ]
                            })
                        }),
                        w &&
                            (0, n.jsx)(u.F, {
                                setting: P.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION,
                                children: (0, n.jsxs)(l.FormSection, {
                                    className: v.marginBottom20,
                                    children: [
                                        (0, n.jsx)(l.FormSwitch, {
                                            className: r()(v.marginTop8, v.marginBottom20),
                                            value: y,
                                            onChange: (e) => c.Z.setSidechainCompression(e),
                                            note: Z.Z.Messages.USER_SETTINGS_SIDECHAIN_COMPRESSION,
                                            children: Z.Z.Messages.SIDECHAIN_COMPRESSION
                                        }),
                                        (0, n.jsx)(l.FormTitle, {
                                            tag: l.FormTitleTags.H5,
                                            className: v.marginBottom8,
                                            children: Z.Z.Messages.SIDECHAIN_COMPRESSION_STRENGTH
                                        }),
                                        (0, n.jsx)(l.Slider, {
                                            initialValue: V,
                                            minValue: 1,
                                            onValueChange: (e) => c.Z.setSidechainCompressionStrength(e)
                                        })
                                    ]
                                })
                            }),
                        (0, n.jsx)(u.F, {
                            setting: P.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
                            children: (0, n.jsxs)(l.FormSection, {
                                className: v.marginBottom20,
                                title: Z.Z.Messages.FORM_LABEL_SUBSYSTEM,
                                children: [
                                    (0, n.jsx)(l.SingleSelect, {
                                        className: v.marginBottom20,
                                        value: S,
                                        options: (function (e, s) {
                                            let t = [
                                                {
                                                    value: b.iA.STANDARD,
                                                    label: 'Standard'
                                                }
                                            ];
                                            return (
                                                e &&
                                                    t.push({
                                                        value: b.iA.LEGACY,
                                                        label: 'Legacy'
                                                    }),
                                                s &&
                                                    t.push({
                                                        value: b.iA.EXPERIMENTAL,
                                                        label: 'Experimental'
                                                    }),
                                                t
                                            );
                                        })(G, F),
                                        onChange: (e) => {
                                            U(Z.Z.Messages.SWITCH_SUBSYSTEM, Z.Z.Messages.SWITCH_SUBSYSTEM_BODY, () => c.Z.setAudioSubsystem(e));
                                        }
                                    }),
                                    (0, n.jsx)(l.FormDivider, { className: v.marginBottom20 })
                                ]
                            })
                        }),
                        (0, n.jsxs)(u.F, {
                            setting: P.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING,
                            children: [
                                (0, n.jsx)(p.Z, {}),
                                (0, n.jsx)(l.FormSection, {
                                    className: v.marginBottom20,
                                    title: Z.Z.Messages.FORM_LABEL_VOICE_DIAGNOSTICS,
                                    children: (0, n.jsx)(l.FormSwitch, {
                                        value: L,
                                        onChange: (e) => c.Z.setSilenceWarning(e),
                                        children: Z.Z.Messages.DISPLAY_SILENCE_WARNING
                                    })
                                })
                            ]
                        }),
                        (0, n.jsx)(u.F, {
                            setting: P.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                            children: (0, n.jsx)(A.Z, {})
                        }),
                        (0, n.jsx)(u.F, {
                            setting: P.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS,
                            children: (0, n.jsx)(l.FormItem, {
                                children: (0, n.jsx)(l.Button, {
                                    look: l.Button.Looks.OUTLINED,
                                    color: l.Button.Colors.RED,
                                    onClick: () => {
                                        U(Z.Z.Messages.RESET_VOICE_SETTINGS, Z.Z.Messages.RESET_VOICE_SETTINGS_BODY, c.Z.reset);
                                    },
                                    size: l.Button.Sizes.SMALL,
                                    children: Z.Z.Messages.RESET_VOICE_SETTINGS
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}
