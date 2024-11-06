n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(653041);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(846027),
    d = n(230711),
    u = n(313201),
    m = n(111672),
    h = n(921801),
    g = n(131951),
    p = n(663389),
    x = n(63063),
    S = n(358085),
    T = n(894939),
    C = n(321499),
    _ = n(710808),
    E = n(625205),
    f = n(325808),
    I = n(823087),
    N = n(546997),
    b = n(520384),
    A = n(167540),
    v = n(803567),
    j = n(269876),
    O = n(976758),
    R = n(526761),
    P = n(726985),
    D = n(981631),
    y = n(65154),
    B = n(388032),
    L = n(113207);
let Z = (0, u.hQ)(),
    F = ''.concat(x.Z.getArticleURL(D.BhN.VOICE_VIDEO_TROUBLESHOOTING), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm');
function M(e, t, n) {
    (0, o.openModal)((s) =>
        (0, i.jsx)(o.ConfirmModal, {
            header: e,
            confirmText: B.intl.string(B.t.BddRzc),
            cancelText: B.intl.string(B.t['ETE/oK']),
            onConfirm: n,
            ...s,
            children: (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                children: t
            })
        })
    );
}
function k() {
    let {
            inputMode: e,
            qosEnabled: t,
            attenuation: n,
            attenuateWhileSpeakingSelf: r,
            attenuateWhileSpeakingOthers: u,
            audioSubsystem: x,
            silenceWarning: D,
            legacyAudioSubsystemSupported: k,
            experimentalAudioSubsystemSupported: w,
            automaticAudioSubsystemSupported: U,
            sidechainEnabled: V,
            sidechainStrength: G
        } = (0, a.cj)([g.Z], () => ({
            inputMode: g.Z.getMode(),
            qosEnabled: g.Z.getQoS(),
            attenuation: g.Z.getAttenuation(),
            attenuateWhileSpeakingSelf: g.Z.getAttenuateWhileSpeakingSelf(),
            attenuateWhileSpeakingOthers: g.Z.getAttenuateWhileSpeakingOthers(),
            audioSubsystem: g.Z.getAudioSubsystem(),
            silenceWarning: g.Z.getEnableSilenceWarning(),
            legacyAudioSubsystemSupported: g.Z.supports(y.AN.LEGACY_AUDIO_SUBSYSTEM),
            experimentalAudioSubsystemSupported: g.Z.supports(y.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
            automaticAudioSubsystemSupported: g.Z.supports(y.AN.AUTOMATIC_AUDIO_SUBSYSTEM),
            sidechainEnabled: g.Z.getSidechainCompression(),
            sidechainStrength: g.Z.getSidechainCompressionStrength()
        })),
        Y = (0, a.e7)([p.Z], () => p.Z.getSubsection()),
        H = s.createRef();
    s.useEffect(() => {
        if (Y === R.GA) {
            var e;
            null == H || null === (e = H.current) || void 0 === e || e.scrollIntoView(), d.Z.clearSubsection();
        }
    }, [H, Y]);
    let z = m.Z.getCurrentConfig({ location: 'UserSettingsVoiceProcessing' }).sidechainAvailable && !(0, S.isWeb)();
    return (0, i.jsxs)(o.FormSection, {
        tag: o.FormTitleTags.H1,
        title: B.intl.string(B.t.NiTd0d),
        children: [
            (0, i.jsx)(h.F, {
                setting: P.s6.VOICE_AND_VIDEO_DEVICES,
                children: (0, i.jsx)(E.Z, {})
            }),
            (0, i.jsx)(h.F, {
                setting: P.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS,
                children: (0, i.jsx)(O.Z, {})
            }),
            (0, i.jsxs)(h.F, {
                setting: P.s6.VOICE_AND_VIDEO_MIC_TEST,
                children: [
                    (0, i.jsx)(I.Z, {}),
                    (0, i.jsx)(o.FormText, {
                        className: L.marginBottom20,
                        type: o.FormText.Types.DESCRIPTION,
                        children: B.intl.format(B.t['V+B3FB'], { guideURL: F })
                    }),
                    (0, i.jsx)(o.FormDivider, { className: l()(L.marginBottom20) })
                ]
            }),
            (0, i.jsx)(h.F, {
                setting: P.s6.VOICE_AND_VIDEO_INPUT_MODE,
                children: (0, i.jsx)(f.Z, {})
            }),
            (0, i.jsxs)(h.F, {
                setting: P.s6.VOICE_AND_VIDEO_SENSITIVITY,
                children: [e === y.pM.VOICE_ACTIVITY && (0, i.jsx)(j.Z, {}), (0, i.jsx)(o.FormDivider, { className: L.marginBottom40 })]
            }),
            (0, i.jsx)(h.F, {
                setting: P.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                children: (0, i.jsx)('div', {
                    style: { scrollMarginTop: '48px' },
                    ref: H
                })
            }),
            (0, i.jsx)(h.F, {
                setting: P.s6.VOICE_AND_VIDEO_SOUNDS,
                children: (0, i.jsx)(T.Z, {})
            }),
            (0, i.jsx)(h.F, {
                setting: P.s6.VOICE_AND_VIDEO_VIDEO,
                children: (0, i.jsx)(A.Z, {})
            }),
            (0, i.jsx)(h.F, {
                setting: P.s6.VOICE_AND_VIDEO_ADVANCED,
                children: (0, i.jsxs)(o.HeadingLevel, {
                    component: (0, i.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H1,
                        className: L.marginBottom20,
                        children: B.intl.string(B.t['8/udY2'])
                    }),
                    children: [
                        (0, i.jsx)(C.Z, {}),
                        (0, i.jsx)(h.F, {
                            setting: P.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                            children: (0, i.jsx)(v.Z, {})
                        }),
                        (0, i.jsx)(b.Z, {}),
                        (0, i.jsx)(h.F, {
                            setting: P.s6.VOICE_AND_VIDEO_ADVANCED_QOS,
                            children: (0, i.jsx)(o.FormSection, {
                                className: L.marginBottom20,
                                title: B.intl.string(B.t.uancuL),
                                children: (0, i.jsx)(o.FormSwitch, {
                                    value: t,
                                    onChange: (e) => c.Z.setQoS(e),
                                    note: B.intl.string(B.t.I1Eoqq),
                                    children: B.intl.string(B.t['3CqDxs'])
                                })
                            })
                        }),
                        (0, i.jsx)(h.F, {
                            setting: P.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
                            children: (0, i.jsxs)(o.FormSection, {
                                className: L.marginBottom20,
                                children: [
                                    (0, i.jsx)(o.FormTitle, {
                                        id: Z,
                                        tag: o.FormTitleTags.H5,
                                        className: L.marginBottom8,
                                        children: B.intl.string(B.t.oSdBvb)
                                    }),
                                    (0, i.jsx)(o.Slider, {
                                        initialValue: n,
                                        onValueChange: (e) => {
                                            c.Z.setAttenuation(e, r, u);
                                        },
                                        'aria-labelledby': Z
                                    }),
                                    (0, i.jsx)(o.FormText, {
                                        className: L.marginBottom20,
                                        type: o.FormText.Types.DESCRIPTION,
                                        children: B.intl.string(B.t['0A/8Rk'])
                                    }),
                                    (0, i.jsx)(o.FormDivider, { className: L.marginBottom20 }),
                                    (0, i.jsx)(o.FormSwitch, {
                                        value: r,
                                        onChange: (e) => c.Z.setAttenuation(n, e, u),
                                        children: B.intl.string(B.t['9dHxRU'])
                                    }),
                                    (0, i.jsx)(o.FormSwitch, {
                                        value: u,
                                        onChange: (e) => c.Z.setAttenuation(n, r, e),
                                        children: B.intl.string(B.t.SMt0Gh)
                                    })
                                ]
                            })
                        }),
                        z &&
                            (0, i.jsx)(h.F, {
                                setting: P.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION,
                                children: (0, i.jsxs)(o.FormSection, {
                                    className: L.marginBottom20,
                                    children: [
                                        (0, i.jsx)(o.FormSwitch, {
                                            className: l()(L.marginTop8, L.marginBottom20),
                                            value: V,
                                            onChange: (e) => c.Z.setSidechainCompression(e),
                                            note: B.intl.string(B.t.IwZbbG),
                                            children: B.intl.string(B.t['/jwMtr'])
                                        }),
                                        (0, i.jsx)(o.FormTitle, {
                                            tag: o.FormTitleTags.H5,
                                            className: L.marginBottom8,
                                            children: B.intl.string(B.t.fhEzfn)
                                        }),
                                        (0, i.jsx)(o.Slider, {
                                            initialValue: G,
                                            minValue: 1,
                                            onValueChange: (e) => c.Z.setSidechainCompressionStrength(e)
                                        })
                                    ]
                                })
                            }),
                        (0, i.jsx)(h.F, {
                            setting: P.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
                            children: (0, i.jsxs)(o.FormSection, {
                                className: L.marginBottom20,
                                title: B.intl.string(B.t.wVBHr6),
                                children: [
                                    (0, i.jsx)(o.SingleSelect, {
                                        className: L.marginBottom20,
                                        value: x,
                                        options: (function (e, t, n) {
                                            let i = [
                                                {
                                                    value: y.iA.STANDARD,
                                                    label: 'Standard'
                                                }
                                            ];
                                            return (
                                                e &&
                                                    i.push({
                                                        value: y.iA.LEGACY,
                                                        label: 'Legacy'
                                                    }),
                                                t &&
                                                    i.push({
                                                        value: y.iA.EXPERIMENTAL,
                                                        label: 'Experimental'
                                                    }),
                                                n &&
                                                    i.push({
                                                        value: y.iA.AUTOMATIC,
                                                        label: 'Automatic'
                                                    }),
                                                i
                                            );
                                        })(k, w, U),
                                        onChange: (e) => {
                                            M(B.intl.string(B.t.uY7AcX), B.intl.string(B.t.gBqik5), () => c.Z.setAudioSubsystem(e));
                                        }
                                    }),
                                    (0, i.jsx)(o.FormDivider, { className: L.marginBottom20 })
                                ]
                            })
                        }),
                        (0, i.jsxs)(h.F, {
                            setting: P.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING,
                            children: [
                                (0, i.jsx)(N.Z, {}),
                                (0, i.jsx)(o.FormSection, {
                                    className: L.marginBottom20,
                                    title: B.intl.string(B.t['aP1N/v']),
                                    children: (0, i.jsx)(o.FormSwitch, {
                                        value: D,
                                        onChange: (e) => c.Z.setSilenceWarning(e),
                                        children: B.intl.string(B.t.jtiiCw)
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(h.F, {
                            setting: P.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                            children: (0, i.jsx)(_.Z, {})
                        }),
                        (0, i.jsx)(h.F, {
                            setting: P.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS,
                            children: (0, i.jsx)(o.FormItem, {
                                children: (0, i.jsx)(o.Button, {
                                    look: o.Button.Looks.OUTLINED,
                                    color: o.Button.Colors.RED,
                                    onClick: () => {
                                        M(B.intl.string(B.t['/RXu6+']), B.intl.string(B.t.sQ42iY), c.Z.reset);
                                    },
                                    size: o.Button.Sizes.SMALL,
                                    children: B.intl.string(B.t['/RXu6+'])
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}
