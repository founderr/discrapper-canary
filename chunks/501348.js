n.d(t, {
    Z: function () {
        return $;
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
    C = n(600164),
    _ = n(313201),
    E = n(605236),
    f = n(786761),
    I = n(3148),
    N = n(739566),
    b = n(753206),
    A = n(311476),
    v = n(921801),
    j = n(145158),
    O = n(594174),
    R = n(358085),
    P = n(210887),
    D = n(740492),
    y = n(695346),
    B = n(329013),
    L = n(333859),
    Z = n(726985),
    F = n(981631),
    M = n(921944),
    k = n(959517),
    w = n(388032),
    U = n(415763),
    V = n(113207);
function G(e, t, n) {
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
let Y = {
        COZY: 'cozy',
        COMPACT: 'compact'
    },
    H = (0, _.hQ)(),
    z = (0, _.hQ)(),
    W = (0, _.hQ)(),
    K = '1337',
    q = (e) => {
        let t = 0;
        return [
            (0, f.e5)({
                ...(0, I.ZP)({
                    channelId: K,
                    content: w.intl.string(w.t.oZxkEh)
                }),
                state: F.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, f.e5)({
                ...(0, I.ZP)({
                    channelId: K,
                    content: (0, d.wj)(e) ? w.intl.string(w.t['WGb/v7']) : w.intl.string(w.t['62m4m5'])
                }),
                state: F.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, f.e5)({
                ...(0, I.ZP)({
                    channelId: K,
                    content: w.intl.string(w.t.a0Byo6)
                }),
                state: F.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, f.e5)({
                ...(0, I.ZP)({
                    channelId: K,
                    content: w.intl.string(w.t.bmwEWF)
                }),
                state: F.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, f.e5)({
                ...(0, I.ZP)({
                    channelId: K,
                    content: w.intl.string(w.t.hK9QW1)
                }),
                state: F.yb.SENT,
                id: ''.concat(t)
            })
        ];
    },
    Q = () => {
        let e = (0, a.e7)([T.Z], () => T.Z.isPreview),
            { enabled: t } = A.Z.useExperiment(
                { location: 'GradientSelectorsTitle' },
                {
                    autoTrackExposure: !1,
                    disable: !e
                }
            );
        return t
            ? null
            : (0, i.jsxs)('div', {
                  className: U.themeTitle,
                  children: [
                      (0, i.jsx)('div', {
                          className: U.title,
                          children: w.intl.string(w.t.Ksh3io)
                      }),
                      (0, i.jsx)(B.g, {})
                  ]
              });
    };
class X extends s.Component {
    renderZoomSlider() {
        return R.isPlatformEmbedded
            ? (0, i.jsxs)(u.FormItem, {
                  className: V.marginTop20,
                  children: [
                      (0, i.jsx)(u.FormTitle, {
                          id: H,
                          tag: u.FormTitleTags.H5,
                          className: V.marginBottom8,
                          children: w.intl.string(w.t.i19n5O)
                      }),
                      (0, i.jsx)(u.Slider, {
                          className: l()(V.marginTop20, V.marginBottom4),
                          initialValue: this.props.zoom,
                          defaultValue: F.yqN.ZOOM_DEFAULT,
                          markers: F.yqN.ZOOM_SCALES,
                          stickToMarkers: !0,
                          onValueChange: this.handleZoomChange,
                          onValueRender: this.handleSliderRender,
                          'aria-labelledby': H
                      }),
                      (0, i.jsx)(u.FormText, {
                          type: u.FormText.Types.DESCRIPTION,
                          children: w.intl.format(w.t.OMkSUl, { modKey: g.Z.modKey })
                      })
                  ]
              })
            : null;
    }
    renderFontScaleSlider() {
        return (0, i.jsxs)(u.FormItem, {
            className: V.marginTop20,
            children: [
                (0, i.jsx)(u.FormTitle, {
                    id: z,
                    tag: u.FormTitleTags.H5,
                    className: V.marginBottom8,
                    children: w.intl.string(w.t.qPOqoK)
                }),
                (0, i.jsx)(C.Z, {
                    align: C.Z.Align.CENTER,
                    children: (0, i.jsx)(u.Slider, {
                        className: l()(V.marginTop20, V.marginBottom4),
                        initialValue: this.props.fontSize,
                        defaultValue: F.yqN.FONT_SIZE_DEFAULT,
                        markers: F.yqN.FONT_SIZES,
                        stickToMarkers: !0,
                        onValueChange: this.handleFontSizeChange,
                        onValueRender: this.handleSliderRenderPX,
                        onMarkerRender: this.handleSliderRenderPX,
                        getAriaValueText: this.handleSliderValueText,
                        'aria-labelledby': z
                    })
                })
            ]
        });
    }
    renderMessageGroupSpacingSlider() {
        let { messageDisplayCompact: e, messageGroupSpacing: t } = this.props;
        return (0, i.jsxs)(u.FormItem, {
            className: V.marginTop20,
            children: [
                (0, i.jsx)(u.FormTitle, {
                    id: W,
                    tag: u.FormTitleTags.H5,
                    className: V.marginBottom8,
                    children: w.intl.string(w.t.Q6lKkp)
                }),
                (0, i.jsx)(u.Slider, {
                    className: l()(V.marginTop20, V.marginBottom4),
                    initialValue: t,
                    defaultValue: e ? k.c8 : k.pq,
                    markers: k.fP,
                    stickToMarkers: !0,
                    onValueChange: this.handleMessageSpacingChange,
                    onValueRender: this.handleSliderRenderPX,
                    onMarkerRender: this.handleSliderRenderPX,
                    getAriaValueText: this.handleSliderValueText,
                    'aria-labelledby': W
                })
            ]
        });
    }
    renderPreview() {
        let { messageDisplayCompact: e, theme: t, messageGroupSpacing: n, hideSimpleEmbedContent: s } = this.props,
            r = (0, d.wj)(t) ? this.darkMessages : this.lightMessages;
        return (0, i.jsx)(u.FocusBlock, {
            children: (0, i.jsx)(u.Card, {
                className: l()(U.preview, V.marginBottom40, e ? U.compactPreview : void 0, 'group-spacing-'.concat(null != n ? n : e ? k.c8 : k.pq)),
                outline: !0,
                'aria-hidden': !0,
                children: r.map((t, n) =>
                    (0, i.jsx)(
                        b.Z,
                        {
                            author: (0, N.ZH)(t),
                            message: t,
                            compact: e,
                            isGroupStart: n % 2 == 0,
                            className: 0 === n ? U.firstMessage : void 0,
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
                  className: l()(V.marginTop8, V.marginBottom40),
                  title: (0, i.jsx)('div', {
                      className: U.themeTitle,
                      children: (0, i.jsx)('div', {
                          className: U.title,
                          children: w.intl.string(w.t.Ksh3io)
                      })
                  }),
                  children: (0, i.jsx)(u.FormText, {
                      type: u.FormText.Types.DEFAULT,
                      className: U.forcedColorsWarning,
                      children: (0, S.b)()
                          ? w.intl.format(w.t.Jae48P, {
                                onClick: () => {
                                    h.Z.open(F.oAB.ACCESSIBILITY);
                                }
                            })
                          : w.intl.string(w.t.AUMSZG)
                  })
              })
            : (0, i.jsxs)(u.FormItem, {
                  className: V.marginTop8,
                  title: (0, i.jsx)(Q, {}),
                  children: [
                      (0, i.jsx)(B.i, {}),
                      (0, i.jsx)(v.F, {
                          setting: Z.s6.APPEARANCE_ICON,
                          children: (0, i.jsx)(L.c, {})
                      }),
                      (0, i.jsx)(u.FormSwitch, {
                          value: n && (0, d.ap)(e) && !t,
                          disabled: e !== F.BRd.LIGHT || t || null != s,
                          onChange: this.handleDarkSidebarChecked,
                          className: V.marginTop20,
                          children: w.intl.string(w.t.yF54Ki)
                      })
                  ]
              });
    }
    renderDisplayMode() {
        return (0, i.jsxs)(u.FormItem, {
            title: w.intl.string(w.t.ZEoGMT),
            className: V.marginTop8,
            children: [
                (0, i.jsx)(u.RadioGroup, {
                    options: [
                        {
                            name: w.intl.string(w.t.KZIadn),
                            value: Y.COZY
                        },
                        {
                            name: w.intl.string(w.t['6+nTjY']),
                            value: Y.COMPACT
                        }
                    ],
                    onChange: this.handleMessageDisplayModeChange,
                    value: this.props.messageDisplayCompact ? Y.COMPACT : Y.COZY
                }),
                (0, i.jsx)(u.FormSwitch, {
                    value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
                    disabled: !this.props.messageDisplayCompact,
                    onChange: this.handleDisplayCompactAvatarsChanged,
                    className: V.marginTop20,
                    children: w.intl.string(w.t['7FVjFB'])
                })
            ]
        });
    }
    handleDarkSidebarChecked() {
        (0, p.lq)();
    }
    renderScalingAndSpacing() {
        return (0, i.jsxs)(i.Fragment, {
            children: [this.renderFontScaleSlider(), this.renderMessageGroupSpacingSlider(), this.renderZoomSlider(), (0, i.jsx)(u.FormDivider, { className: V.marginTop20 })]
        });
    }
    renderTimestampHourCycle() {
        let { timestampHourCycle: e } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.FormItem, {
                    title: w.intl.string(w.t.dyamEB),
                    className: V.marginTop20,
                    children: (0, i.jsx)(u.RadioGroup, {
                        options: [
                            {
                                name: w.intl.string(w.t.FMWYvb),
                                value: c.hg.AUTO
                            },
                            {
                                name: w.intl.string(w.t.p8NOws),
                                value: c.hg.H12
                            },
                            {
                                name: w.intl.string(w.t['+o/sOj']),
                                value: c.hg.H23
                            }
                        ],
                        onChange: (e) => y.hg.updateSetting(e.value),
                        value: e
                    })
                }),
                (0, i.jsx)(u.FormDivider, { className: V.marginTop8 })
            ]
        });
    }
    render() {
        let { enable24HourPref: e } = j.Z.getCurrentConfig({ location: 'UserSettingsAppearance' }, { autoTrackExposure: !0 });
        return (0, i.jsxs)(u.FormSection, {
            tag: u.FormTitleTags.H1,
            title: w.intl.string(w.t['iHH+k5']),
            children: [
                (0, i.jsxs)(v.F, {
                    setting: Z.s6.APPEARANCE_THEME,
                    children: [this.renderPreview(), this.renderTheme()]
                }),
                (0, i.jsx)(v.F, {
                    setting: Z.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                    children: this.renderDisplayMode()
                }),
                (0, i.jsx)(v.F, {
                    setting: Z.s6.APPEARANCE_SCALING_SPACING,
                    children: this.renderScalingAndSpacing()
                }),
                e
                    ? (0, i.jsx)(v.F, {
                          setting: Z.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                          children: this.renderTimestampHourCycle()
                      })
                    : null,
                (0, i.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    className: V.marginTop20,
                    children: w.intl.format(w.t['5LEQdX'], {
                        onAccessibilityClick() {
                            h.Z.open(F.oAB.ACCESSIBILITY);
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
        return w.intl.formatToPlainString(w.t['0hpvOT'], { value: e });
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
            G(this, 'darkMessages', q(F.BRd.DARK)),
            G(this, 'lightMessages', q(F.BRd.LIGHT)),
            G(this, 'handleDisplayCompactAvatarsChanged', (e) => {
                m.ZP.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            G(this, 'handleMessageDisplayModeChange', (e) => {
                let { value: t } = e;
                y.jU.updateSetting(t === Y.COMPACT), (0, p.ZZ)();
            });
    }
}
let J = (e) => {
    !(0, E.un)(e) &&
        (0, E.EW)(e, {
            dismissAction: M.L.AUTO,
            forceTrack: !0
        });
};
function $() {
    let e = y.jU.useSetting(),
        t = y.RS.useSetting(),
        n = y.NA.useSetting(),
        r = y.L1.useSetting(),
        l = y.hg.useSetting();
    s.useEffect(() => {
        J(o.z.CLIENT_THEMES_SETTINGS_BADGE), J(o.z.DEKSTOP_CUSTOM_APP_ICON_BADGE), J(o.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    }, []);
    let c = (0, a.cj)([P.Z, D.ZP, x.Z, O.default, T.Z], () => {
        var e, t;
        return {
            theme: P.Z.theme,
            useForcedColors: x.Z.useForcedColors,
            useSystemTheme: D.ZP.useSystemTheme,
            darkSidebar: P.Z.darkSidebar,
            fontSize: x.Z.fontSize,
            zoom: x.Z.zoom,
            messageGroupSpacing: x.Z.messageGroupSpacing,
            displayCompactAvatars: D.ZP.displayCompactAvatars,
            isStaff: null !== (t = null === (e = O.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff) && void 0 !== t && t,
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
