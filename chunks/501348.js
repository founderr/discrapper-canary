n.d(t, {
    Z: function () {
        return J;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(704215),
    c = n(524437),
    d = n(780384),
    u = n(481060),
    m = n(153867),
    h = n(230711),
    g = n(714338),
    p = n(857595),
    x = n(607070),
    S = n(627845),
    T = n(514361),
    E = n(600164),
    _ = n(313201),
    C = n(605236),
    I = n(786761),
    f = n(3148),
    N = n(739566),
    A = n(753206),
    b = n(311476),
    v = n(921801),
    j = n(594174),
    O = n(358085),
    R = n(210887),
    P = n(740492),
    D = n(695346),
    y = n(329013),
    B = n(333859),
    L = n(726985),
    Z = n(981631),
    F = n(921944),
    M = n(959517),
    k = n(388032),
    w = n(201032),
    U = n(232186);
function V(e, t, n) {
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
let G = {
        COZY: 'cozy',
        COMPACT: 'compact'
    },
    Y = (0, _.hQ)(),
    H = (0, _.hQ)(),
    z = (0, _.hQ)(),
    W = '1337',
    K = (e) => {
        let t = 0;
        return [
            (0, I.e5)({
                ...(0, f.ZP)({
                    channelId: W,
                    content: k.intl.string(k.t.oZxkEh)
                }),
                state: Z.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, I.e5)({
                ...(0, f.ZP)({
                    channelId: W,
                    content: (0, d.wj)(e) ? k.intl.string(k.t['WGb/v7']) : k.intl.string(k.t['62m4m5'])
                }),
                state: Z.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, I.e5)({
                ...(0, f.ZP)({
                    channelId: W,
                    content: k.intl.string(k.t.a0Byo6)
                }),
                state: Z.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, I.e5)({
                ...(0, f.ZP)({
                    channelId: W,
                    content: k.intl.string(k.t.bmwEWF)
                }),
                state: Z.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, I.e5)({
                ...(0, f.ZP)({
                    channelId: W,
                    content: k.intl.string(k.t.hK9QW1)
                }),
                state: Z.yb.SENT,
                id: ''.concat(t)
            })
        ];
    },
    q = () => {
        let e = (0, a.e7)([T.Z], () => T.Z.isPreview),
            { enabled: t } = b.Z.useExperiment(
                { location: 'GradientSelectorsTitle' },
                {
                    autoTrackExposure: !1,
                    disable: !e
                }
            );
        return t
            ? null
            : (0, i.jsxs)('div', {
                  className: w.themeTitle,
                  children: [
                      (0, i.jsx)('div', {
                          className: w.title,
                          children: k.intl.string(k.t.Ksh3io)
                      }),
                      (0, i.jsx)(y.g, {})
                  ]
              });
    };
class X extends s.Component {
    renderZoomSlider() {
        return O.isPlatformEmbedded
            ? (0, i.jsxs)(u.FormItem, {
                  className: U.marginTop20,
                  children: [
                      (0, i.jsx)(u.FormTitle, {
                          id: Y,
                          tag: u.FormTitleTags.H5,
                          className: U.marginBottom8,
                          children: k.intl.string(k.t.i19n5O)
                      }),
                      (0, i.jsx)(u.Slider, {
                          className: l()(U.marginTop20, U.marginBottom4),
                          initialValue: this.props.zoom,
                          defaultValue: Z.yqN.ZOOM_DEFAULT,
                          markers: Z.yqN.ZOOM_SCALES,
                          stickToMarkers: !0,
                          onValueChange: this.handleZoomChange,
                          onValueRender: this.handleSliderRender,
                          'aria-labelledby': Y
                      }),
                      (0, i.jsx)(u.FormText, {
                          type: u.FormText.Types.DESCRIPTION,
                          children: k.intl.format(k.t.OMkSUl, { modKey: g.Z.modKey })
                      })
                  ]
              })
            : null;
    }
    renderFontScaleSlider() {
        return (0, i.jsxs)(u.FormItem, {
            className: U.marginTop20,
            children: [
                (0, i.jsx)(u.FormTitle, {
                    id: H,
                    tag: u.FormTitleTags.H5,
                    className: U.marginBottom8,
                    children: k.intl.string(k.t.qPOqoK)
                }),
                (0, i.jsx)(E.Z, {
                    align: E.Z.Align.CENTER,
                    children: (0, i.jsx)(u.Slider, {
                        className: l()(U.marginTop20, U.marginBottom4),
                        initialValue: this.props.fontSize,
                        defaultValue: Z.yqN.FONT_SIZE_DEFAULT,
                        markers: Z.yqN.FONT_SIZES,
                        stickToMarkers: !0,
                        onValueChange: this.handleFontSizeChange,
                        onValueRender: this.handleSliderRenderPX,
                        onMarkerRender: this.handleSliderRenderPX,
                        getAriaValueText: this.handleSliderValueText,
                        'aria-labelledby': H
                    })
                })
            ]
        });
    }
    renderMessageGroupSpacingSlider() {
        let { messageDisplayCompact: e, messageGroupSpacing: t } = this.props;
        return (0, i.jsxs)(u.FormItem, {
            className: U.marginTop20,
            children: [
                (0, i.jsx)(u.FormTitle, {
                    id: z,
                    tag: u.FormTitleTags.H5,
                    className: U.marginBottom8,
                    children: k.intl.string(k.t.Q6lKkp)
                }),
                (0, i.jsx)(u.Slider, {
                    className: l()(U.marginTop20, U.marginBottom4),
                    initialValue: t,
                    defaultValue: e ? M.c8 : M.pq,
                    markers: M.fP,
                    stickToMarkers: !0,
                    onValueChange: this.handleMessageSpacingChange,
                    onValueRender: this.handleSliderRenderPX,
                    onMarkerRender: this.handleSliderRenderPX,
                    getAriaValueText: this.handleSliderValueText,
                    'aria-labelledby': z
                })
            ]
        });
    }
    renderPreview() {
        let { messageDisplayCompact: e, theme: t, messageGroupSpacing: n, hideSimpleEmbedContent: s } = this.props,
            r = (0, d.wj)(t) ? this.darkMessages : this.lightMessages;
        return (0, i.jsx)(u.FocusBlock, {
            children: (0, i.jsx)(u.Card, {
                className: l()(w.preview, U.marginBottom40, e ? w.compactPreview : void 0, 'group-spacing-'.concat(null != n ? n : e ? M.c8 : M.pq)),
                outline: !0,
                'aria-hidden': !0,
                children: r.map((t, n) =>
                    (0, i.jsx)(
                        A.Z,
                        {
                            author: (0, N.ZH)(t),
                            message: t,
                            compact: e,
                            isGroupStart: n % 2 == 0,
                            className: 0 === n ? w.firstMessage : void 0,
                            hideSimpleEmbedContent: s
                        },
                        t.id
                    )
                )
            })
        });
    }
    renderTheme() {
        let { theme: e, useForcedColors: t, darkSidebar: n, gradientPreset: s } = this.props;
        return t
            ? (0, i.jsx)(u.FormItem, {
                  className: l()(U.marginTop8, U.marginBottom40),
                  title: (0, i.jsx)('div', {
                      className: w.themeTitle,
                      children: (0, i.jsx)('div', {
                          className: w.title,
                          children: k.intl.string(k.t.Ksh3io)
                      })
                  }),
                  children: (0, i.jsx)(u.FormText, {
                      type: u.FormText.Types.DEFAULT,
                      className: w.forcedColorsWarning,
                      children: (0, S.b)()
                          ? k.intl.format(k.t.Jae48P, {
                                onClick: () => {
                                    h.Z.open(Z.oAB.ACCESSIBILITY);
                                }
                            })
                          : k.intl.string(k.t.AUMSZG)
                  })
              })
            : (0, i.jsxs)(u.FormItem, {
                  className: U.marginTop8,
                  title: (0, i.jsx)(q, {}),
                  children: [
                      (0, i.jsx)(y.i, {}),
                      (0, i.jsx)(v.F, {
                          setting: L.s6.APPEARANCE_ICON,
                          children: (0, i.jsx)(B.c, {})
                      }),
                      (0, i.jsx)(u.FormSwitch, {
                          value: n && (0, d.ap)(e) && !t,
                          disabled: e !== Z.BRd.LIGHT || t || null != s,
                          onChange: this.handleDarkSidebarChecked,
                          className: U.marginTop20,
                          children: k.intl.string(k.t.yF54Ki)
                      })
                  ]
              });
    }
    renderDisplayMode() {
        return (0, i.jsxs)(u.FormItem, {
            title: k.intl.string(k.t.ZEoGMT),
            className: U.marginTop8,
            children: [
                (0, i.jsx)(u.RadioGroup, {
                    options: [
                        {
                            name: k.intl.string(k.t.KZIadn),
                            value: G.COZY
                        },
                        {
                            name: k.intl.string(k.t['6+nTjY']),
                            value: G.COMPACT
                        }
                    ],
                    onChange: this.handleMessageDisplayModeChange,
                    value: this.props.messageDisplayCompact ? G.COMPACT : G.COZY
                }),
                (0, i.jsx)(u.FormSwitch, {
                    value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
                    disabled: !this.props.messageDisplayCompact,
                    onChange: this.handleDisplayCompactAvatarsChanged,
                    className: U.marginTop20,
                    children: k.intl.string(k.t['7FVjFB'])
                })
            ]
        });
    }
    handleDarkSidebarChecked() {
        (0, p.lq)();
    }
    renderScalingAndSpacing() {
        return (0, i.jsxs)(i.Fragment, {
            children: [this.renderFontScaleSlider(), this.renderMessageGroupSpacingSlider(), this.renderZoomSlider(), (0, i.jsx)(u.FormDivider, { className: U.marginTop20 })]
        });
    }
    renderTimestampHourCycle() {
        let { timestampHourCycle: e } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.FormItem, {
                    title: k.intl.string(k.t.dyamEB),
                    className: U.marginTop20,
                    children: (0, i.jsx)(u.RadioGroup, {
                        options: [
                            {
                                name: k.intl.string(k.t.FMWYvb),
                                value: c.hg.AUTO
                            },
                            {
                                name: k.intl.string(k.t.p8NOws),
                                value: c.hg.H12
                            },
                            {
                                name: k.intl.string(k.t['+o/sOj']),
                                value: c.hg.H23
                            }
                        ],
                        onChange: (e) => D.hg.updateSetting(e.value),
                        value: e
                    })
                }),
                (0, i.jsx)(u.FormDivider, { className: U.marginTop8 })
            ]
        });
    }
    render() {
        return (0, i.jsxs)(u.FormSection, {
            tag: u.FormTitleTags.H1,
            title: k.intl.string(k.t['iHH+k5']),
            children: [
                (0, i.jsxs)(v.F, {
                    setting: L.s6.APPEARANCE_THEME,
                    children: [this.renderPreview(), this.renderTheme()]
                }),
                (0, i.jsx)(v.F, {
                    setting: L.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                    children: this.renderDisplayMode()
                }),
                (0, i.jsx)(v.F, {
                    setting: L.s6.APPEARANCE_SCALING_SPACING,
                    children: this.renderScalingAndSpacing()
                }),
                (0, i.jsx)(v.F, {
                    setting: L.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                    children: this.renderTimestampHourCycle()
                }),
                (0, i.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    className: U.marginTop20,
                    children: k.intl.format(k.t['5LEQdX'], {
                        onAccessibilityClick() {
                            h.Z.open(Z.oAB.ACCESSIBILITY);
                        }
                    })
                })
            ]
        });
    }
    handleSliderRender(e) {
        return ''.concat(e.toFixed(0), '%');
    }
    handleSliderRenderPX(e) {
        return ''.concat(e.toFixed(0), 'px');
    }
    handleSliderValueText(e) {
        return k.intl.formatToPlainString(k.t['0hpvOT'], { value: e });
    }
    handleFontSizeChange(e) {
        (0, p.oL)(e);
    }
    handleMessageSpacingChange(e) {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, p.ZZ)(e);
        }
    }
    handleZoomChange(e) {
        (0, p.cq)(e);
    }
    constructor(...e) {
        super(...e),
            V(this, 'darkMessages', K(Z.BRd.DARK)),
            V(this, 'lightMessages', K(Z.BRd.LIGHT)),
            V(this, 'handleDisplayCompactAvatarsChanged', (e) => {
                m.ZP.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            V(this, 'handleMessageDisplayModeChange', (e) => {
                let { value: t } = e;
                D.jU.updateSetting(t === G.COMPACT), (0, p.ZZ)();
            });
    }
}
let Q = (e) => {
    !(0, C.un)(e) &&
        (0, C.EW)(e, {
            dismissAction: F.L.AUTO,
            forceTrack: !0
        });
};
function J() {
    let e = D.jU.useSetting(),
        t = D.RS.useSetting(),
        n = D.NA.useSetting(),
        r = D.L1.useSetting(),
        l = D.hg.useSetting();
    s.useEffect(() => {
        Q(o.z.CLIENT_THEMES_SETTINGS_BADGE), Q(o.z.DEKSTOP_CUSTOM_APP_ICON_BADGE), Q(o.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    }, []);
    let c = (0, a.cj)([R.Z, P.ZP, x.Z, j.default, T.Z], () => {
        var e, t;
        return {
            theme: R.Z.theme,
            useForcedColors: x.Z.useForcedColors,
            useSystemTheme: P.ZP.useSystemTheme,
            darkSidebar: R.Z.darkSidebar,
            fontSize: x.Z.fontSize,
            zoom: x.Z.zoom,
            messageGroupSpacing: x.Z.messageGroupSpacing,
            displayCompactAvatars: P.ZP.displayCompactAvatars,
            isStaff: null !== (t = null === (e = j.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff) && void 0 !== t && t,
            gradientPreset: T.Z.gradientPreset
        };
    });
    return (0, i.jsx)(X, {
        messageDisplayCompact: e,
        hideSimpleEmbedContent: t && n,
        clientTheme: r,
        timestampHourCycle: l,
        ...c
    });
}
