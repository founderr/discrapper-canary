n.r(t),
    n.d(t, {
        default: function () {
            return N;
        }
    }),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(392711),
    l = n.n(r),
    o = n(442837),
    a = n(481060),
    d = n(846027),
    u = n(825209),
    h = n(600164),
    c = n(313201),
    m = n(382577),
    p = n(131951),
    g = n(36703),
    b = n(981631),
    f = n(65154),
    C = n(388032),
    x = n(335124),
    v = n(971436);
function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let _ = (0, c.hQ)(),
    j = (0, c.hQ)(),
    D = (0, c.hQ)();
class E extends s.PureComponent {
    handleValueRender(e) {
        return ''.concat((-((100 - e) * 1)).toFixed(0), 'dB');
    }
    renderAutomaticVADToggle() {
        let { autoThreshold: e } = this.props;
        return (0, i.jsx)(c.FG, {
            children: (t) =>
                (0, i.jsxs)(h.Z, {
                    className: v.marginBottom4,
                    children: [
                        (0, i.jsx)(a.FormTitle, {
                            tag: a.FormTitleTags.H3,
                            children: (0, i.jsx)('label', {
                                htmlFor: t,
                                children: C.intl.string(C.t.I1Zuq6)
                            })
                        }),
                        (0, i.jsx)(a.Switch, {
                            id: t,
                            checked: e,
                            onChange: this.handleAutoThresholdChange
                        })
                    ]
                })
        });
    }
    renderSlider() {
        let { autoThreshold: e, threshold: t } = this.props;
        if (!e)
            return (0, i.jsx)(a.Slider, {
                initialValue: t + 100,
                onValueRender: this.handleValueRender,
                onValueChange: this.handleSensitivityChange,
                'aria-label': C.intl.string(C.t['sqUm+v'])
            });
    }
    render() {
        return (0, i.jsxs)(a.FormItem, {
            title: C.intl.string(C.t['sqUm+v']),
            className: v.marginBottom8,
            children: [this.renderAutomaticVADToggle(), this.renderSlider()]
        });
    }
    constructor(...e) {
        super(...e),
            R(this, 'handleAutoThresholdChange', (e) => {
                let { onThresholdChange: t, threshold: n } = this.props;
                null == t || t(n, e);
            }),
            R(this, 'handleSensitivityChange', (e) => {
                let { onThresholdChange: t, autoThreshold: n } = this.props;
                null == t || t(-((100 - e) * 1), n);
            });
    }
}
let I = o.ZP.connectStores([p.Z], (e) => {
    let { mediaEngineContext: t } = e;
    return {
        inputVolume: p.Z.getInputVolume(),
        outputVolume: p.Z.getOutputVolume(),
        inputDeviceId: p.Z.getInputDeviceId(),
        inputDevices: p.Z.getInputDevices(),
        outputDevices: p.Z.getOutputDevices(),
        outputDeviceId: p.Z.getOutputDeviceId(),
        inputMode: p.Z.getMode(t),
        shortcut: p.Z.getModeOptions(t).shortcut,
        vadThreshold: p.Z.getModeOptions(t).threshold,
        vadAutoThreshold: p.Z.getModeOptions(t).autoThreshold,
        delay: p.Z.getModeOptions(t).delay
    };
})((e) => {
    let t,
        { mediaEngineContext: n, inputMode: r, shortcut: o, delay: h, vadThreshold: c, vadAutoThreshold: m, inputDevices: p, inputDeviceId: f, inputVolume: x, outputDeviceId: R, outputDevices: I, outputVolume: N, speaking: T = !1 } = e,
        Z = l().first(p),
        O = null != Z && Z.disabled,
        M = l().first(I),
        V = null != M && M.disabled,
        y = [
            {
                value: b.pM4.VOICE_ACTIVITY,
                name: C.intl.string(C.t.cHCEOD)
            },
            {
                value: b.pM4.PUSH_TO_TALK,
                name: C.intl.string(C.t.Q8gkVF)
            }
        ];
    return (
        (t =
            r === b.pM4.PUSH_TO_TALK
                ? (0, i.jsxs)(s.Fragment, {
                      children: [
                          (0, i.jsx)(a.FormItem, {
                              title: C.intl.string(C.t.YkDjVF),
                              className: v.marginBottom20,
                              children: (0, i.jsx)(u.Z, {
                                  defaultValue: o,
                                  onChange: (e) => d.Z.setMode(r, { shortcut: e }, n)
                              })
                          }),
                          (0, i.jsxs)(a.FormItem, {
                              className: v.marginBottom8,
                              children: [
                                  (0, i.jsx)(a.FormTitle, {
                                      id: _,
                                      children: C.intl.string(C.t.y0ShVl)
                                  }),
                                  (0, i.jsx)(a.Slider, {
                                      initialValue: h,
                                      onValueChange: (e) => d.Z.setMode(r, { delay: e }, n),
                                      onValueRender: (e) => (e >= 1000 ? ((e /= 1000), ''.concat(e.toFixed(2), 's')) : ''.concat(e.toFixed(0), 'ms')),
                                      maxValue: b.qhL,
                                      'aria-labelledby': _
                                  })
                              ]
                          })
                      ]
                  })
                : (0, i.jsx)(E, {
                      speaking: T,
                      inputMode: r,
                      threshold: c,
                      autoThreshold: m,
                      onThresholdChange: (e, t) =>
                          d.Z.setMode(
                              r,
                              {
                                  threshold: e,
                                  autoThreshold: t
                              },
                              n
                          )
                  })),
        (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(a.FormItem, {
                    title: C.intl.string(C.t.hHMYbW),
                    className: v.marginBottom20,
                    children: (0, i.jsx)(a.SingleSelect, {
                        value: f,
                        onChange: (e) => d.Z.setInputDevice(e, { location: 'Voice Settings' }),
                        options: l().map(p, (e) => {
                            let { id: t, name: n } = e;
                            return {
                                value: t,
                                label: n
                            };
                        }),
                        isDisabled: O
                    })
                }),
                (0, i.jsxs)(a.FormItem, {
                    className: v.marginBottom20,
                    children: [
                        (0, i.jsx)(a.FormTitle, {
                            id: j,
                            children: C.intl.string(C.t.OX2Bnp)
                        }),
                        (0, i.jsx)(a.Slider, {
                            initialValue: (0, g.P)(x),
                            asValueChanges: (e) => d.Z.setInputVolume((0, g.A)(e)),
                            'aria-labelledby': j
                        })
                    ]
                }),
                (0, i.jsx)(a.FormItem, {
                    title: C.intl.string(C.t.dl18zc),
                    className: v.marginBottom20,
                    children: (0, i.jsx)(a.SingleSelect, {
                        value: R,
                        onChange: (e) => d.Z.setOutputDevice(e, { location: 'Voice Settings' }),
                        options: l().map(I, (e) => {
                            let { id: t, name: n } = e;
                            return {
                                value: t,
                                label: n
                            };
                        }),
                        isDisabled: V
                    })
                }),
                (0, i.jsxs)(a.FormItem, {
                    className: v.marginBottom20,
                    children: [
                        (0, i.jsx)(a.FormTitle, {
                            id: D,
                            children: C.intl.string(C.t.eATD2N)
                        }),
                        (0, i.jsx)(a.Slider, {
                            initialValue: (0, g.P)(N),
                            maxValue: 200,
                            asValueChanges: (e) => d.Z.setOutputVolume((0, g.A)(e)),
                            'aria-labelledby': D
                        })
                    ]
                }),
                (0, i.jsx)(a.FormItem, {
                    title: C.intl.string(C.t['pS+K2N']),
                    className: v.marginBottom20,
                    children: (0, i.jsx)(a.RadioGroup, {
                        onChange: (e) => {
                            let { value: t } = e;
                            return d.Z.setMode(t, {}, n);
                        },
                        options: y,
                        value: r
                    })
                }),
                t
            ]
        })
    );
});
function N(e) {
    var t;
    return (
        (0, m.Z)(() => {
            null != b.e3s && e.onClose();
        }),
        (0, i.jsxs)(a.ModalRoot, {
            transitionState: e.transitionState,
            'aria-label': C.intl.string(C.t.NiTd0d),
            children: [
                (0, i.jsxs)(a.ModalHeader, {
                    children: [
                        (0, i.jsxs)(h.Z.Child, {
                            children: [
                                (0, i.jsx)(a.FormTitle, {
                                    tag: 'h1',
                                    className: v.marginReset,
                                    children: C.intl.string(C.t.NiTd0d)
                                }),
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    className: x.title,
                                    children: e.title
                                })
                            ]
                        }),
                        (0, i.jsx)(h.Z.Child, {
                            grow: 0,
                            children: (0, i.jsx)(a.ModalCloseButton, { onClick: e.onClose })
                        })
                    ]
                }),
                (0, i.jsx)(a.ModalContent, { children: (0, i.jsx)(I, { mediaEngineContext: null !== (t = e.mediaEngineContext) && void 0 !== t ? t : f.Yn.DEFAULT }) })
            ]
        })
    );
}
