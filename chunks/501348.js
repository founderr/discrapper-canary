n.d(t, {
    Z: function () {
        return X;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(704215),
    c = n(780384),
    d = n(481060),
    u = n(153867),
    m = n(230711),
    h = n(714338),
    g = n(857595),
    p = n(607070),
    x = n(627845),
    S = n(514361),
    T = n(600164),
    C = n(313201),
    _ = n(605236),
    E = n(786761),
    f = n(3148),
    I = n(739566),
    N = n(753206),
    A = n(311476),
    b = n(921801),
    v = n(594174),
    j = n(358085),
    O = n(210887),
    R = n(740492),
    P = n(695346),
    D = n(329013),
    y = n(333859),
    B = n(726985),
    L = n(981631),
    Z = n(921944),
    F = n(959517),
    M = n(388032),
    k = n(415763),
    w = n(113207);
function U(e, t, n) {
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
let V = {
        COZY: 'cozy',
        COMPACT: 'compact'
    },
    G = (0, C.hQ)(),
    Y = (0, C.hQ)(),
    H = (0, C.hQ)(),
    z = '1337',
    W = (e) => {
        let t = 0;
        return [
            (0, E.e5)({
                ...(0, f.ZP)({
                    channelId: z,
                    content: M.intl.string(M.t.oZxkEh)
                }),
                state: L.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, E.e5)({
                ...(0, f.ZP)({
                    channelId: z,
                    content: (0, c.wj)(e) ? M.intl.string(M.t['WGb/v7']) : M.intl.string(M.t['62m4m5'])
                }),
                state: L.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, E.e5)({
                ...(0, f.ZP)({
                    channelId: z,
                    content: M.intl.string(M.t.a0Byo6)
                }),
                state: L.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, E.e5)({
                ...(0, f.ZP)({
                    channelId: z,
                    content: M.intl.string(M.t.bmwEWF)
                }),
                state: L.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, E.e5)({
                ...(0, f.ZP)({
                    channelId: z,
                    content: M.intl.string(M.t.hK9QW1)
                }),
                state: L.yb.SENT,
                id: ''.concat(t)
            })
        ];
    },
    K = () => {
        let e = (0, a.e7)([S.Z], () => S.Z.isPreview),
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
                  className: k.themeTitle,
                  children: [
                      (0, i.jsx)('div', {
                          className: k.title,
                          children: M.intl.string(M.t.Ksh3io)
                      }),
                      (0, i.jsx)(D.g, {})
                  ]
              });
    };
class q extends s.Component {
    renderZoomSlider() {
        return j.isPlatformEmbedded
            ? (0, i.jsxs)(d.FormItem, {
                  className: w.marginTop20,
                  children: [
                      (0, i.jsx)(d.FormTitle, {
                          id: G,
                          tag: d.FormTitleTags.H5,
                          className: w.marginBottom8,
                          children: M.intl.string(M.t.i19n5O)
                      }),
                      (0, i.jsx)(d.Slider, {
                          className: l()(w.marginTop20, w.marginBottom4),
                          initialValue: this.props.zoom,
                          defaultValue: L.yqN.ZOOM_DEFAULT,
                          markers: L.yqN.ZOOM_SCALES,
                          stickToMarkers: !0,
                          onValueChange: this.handleZoomChange,
                          onValueRender: this.handleSliderRender,
                          'aria-labelledby': G
                      }),
                      (0, i.jsx)(d.FormText, {
                          type: d.FormText.Types.DESCRIPTION,
                          children: M.intl.format(M.t.OMkSUl, { modKey: h.Z.modKey })
                      })
                  ]
              })
            : null;
    }
    renderFontScaleSlider() {
        return (0, i.jsxs)(d.FormItem, {
            className: w.marginTop20,
            children: [
                (0, i.jsx)(d.FormTitle, {
                    id: Y,
                    tag: d.FormTitleTags.H5,
                    className: w.marginBottom8,
                    children: M.intl.string(M.t.qPOqoK)
                }),
                (0, i.jsx)(T.Z, {
                    align: T.Z.Align.CENTER,
                    children: (0, i.jsx)(d.Slider, {
                        className: l()(w.marginTop20, w.marginBottom4),
                        initialValue: this.props.fontSize,
                        defaultValue: L.yqN.FONT_SIZE_DEFAULT,
                        markers: L.yqN.FONT_SIZES,
                        stickToMarkers: !0,
                        onValueChange: this.handleFontSizeChange,
                        onValueRender: this.handleSliderRenderPX,
                        onMarkerRender: this.handleSliderRenderPX,
                        getAriaValueText: this.handleSliderValueText,
                        'aria-labelledby': Y
                    })
                })
            ]
        });
    }
    renderMessageGroupSpacingSlider() {
        let { messageDisplayCompact: e, messageGroupSpacing: t } = this.props;
        return (0, i.jsxs)(d.FormItem, {
            className: w.marginTop20,
            children: [
                (0, i.jsx)(d.FormTitle, {
                    id: H,
                    tag: d.FormTitleTags.H5,
                    className: w.marginBottom8,
                    children: M.intl.string(M.t.Q6lKkp)
                }),
                (0, i.jsx)(d.Slider, {
                    className: l()(w.marginTop20, w.marginBottom4),
                    initialValue: t,
                    defaultValue: e ? F.c8 : F.pq,
                    markers: F.fP,
                    stickToMarkers: !0,
                    onValueChange: this.handleMessageSpacingChange,
                    onValueRender: this.handleSliderRenderPX,
                    onMarkerRender: this.handleSliderRenderPX,
                    getAriaValueText: this.handleSliderValueText,
                    'aria-labelledby': H
                })
            ]
        });
    }
    renderPreview() {
        let { messageDisplayCompact: e, theme: t, messageGroupSpacing: n, hideSimpleEmbedContent: s } = this.props,
            r = (0, c.wj)(t) ? this.darkMessages : this.lightMessages;
        return (0, i.jsx)(d.FocusBlock, {
            children: (0, i.jsx)(d.Card, {
                className: l()(k.preview, w.marginBottom40, e ? k.compactPreview : void 0, 'group-spacing-'.concat(null != n ? n : e ? F.c8 : F.pq)),
                outline: !0,
                'aria-hidden': !0,
                children: r.map((t, n) =>
                    (0, i.jsx)(
                        N.Z,
                        {
                            author: (0, I.ZH)(t),
                            message: t,
                            compact: e,
                            isGroupStart: n % 2 == 0,
                            className: 0 === n ? k.firstMessage : void 0,
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
            ? (0, i.jsx)(d.FormItem, {
                  className: l()(w.marginTop8, w.marginBottom40),
                  title: (0, i.jsx)('div', {
                      className: k.themeTitle,
                      children: (0, i.jsx)('div', {
                          className: k.title,
                          children: M.intl.string(M.t.Ksh3io)
                      })
                  }),
                  children: (0, i.jsx)(d.FormText, {
                      type: d.FormText.Types.DEFAULT,
                      className: k.forcedColorsWarning,
                      children: (0, x.b)()
                          ? M.intl.format(M.t.Jae48P, {
                                onClick: () => {
                                    m.Z.open(L.oAB.ACCESSIBILITY);
                                }
                            })
                          : M.intl.string(M.t.AUMSZG)
                  })
              })
            : (0, i.jsxs)(d.FormItem, {
                  className: w.marginTop8,
                  title: (0, i.jsx)(K, {}),
                  children: [
                      (0, i.jsx)(D.i, {}),
                      (0, i.jsx)(b.F, {
                          setting: B.s6.APPEARANCE_ICON,
                          children: (0, i.jsx)(y.c, {})
                      }),
                      (0, i.jsx)(d.FormSwitch, {
                          value: n && (0, c.ap)(e) && !t,
                          disabled: e !== L.BRd.LIGHT || t || null != s,
                          onChange: this.handleDarkSidebarChecked,
                          className: w.marginTop20,
                          children: M.intl.string(M.t.yF54Ki)
                      })
                  ]
              });
    }
    renderDisplayMode() {
        return (0, i.jsxs)(d.FormItem, {
            title: M.intl.string(M.t.ZEoGMT),
            className: w.marginTop8,
            children: [
                (0, i.jsx)(d.RadioGroup, {
                    options: [
                        {
                            name: M.intl.string(M.t.KZIadn),
                            value: V.COZY
                        },
                        {
                            name: M.intl.string(M.t['6+nTjY']),
                            value: V.COMPACT
                        }
                    ],
                    onChange: this.handleMessageDisplayModeChange,
                    value: this.props.messageDisplayCompact ? V.COMPACT : V.COZY
                }),
                (0, i.jsx)(d.FormSwitch, {
                    value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
                    disabled: !this.props.messageDisplayCompact,
                    onChange: this.handleDisplayCompactAvatarsChanged,
                    className: w.marginTop20,
                    children: M.intl.string(M.t['7FVjFB'])
                })
            ]
        });
    }
    handleDarkSidebarChecked() {
        (0, g.lq)();
    }
    renderScalingAndSpacing() {
        return (0, i.jsxs)(i.Fragment, {
            children: [this.renderFontScaleSlider(), this.renderMessageGroupSpacingSlider(), this.renderZoomSlider(), (0, i.jsx)(d.FormDivider, { className: w.marginTop20 })]
        });
    }
    render() {
        return (0, i.jsxs)(d.FormSection, {
            tag: d.FormTitleTags.H1,
            title: M.intl.string(M.t['iHH+k5']),
            children: [
                (0, i.jsxs)(b.F, {
                    setting: B.s6.APPEARANCE_THEME,
                    children: [this.renderPreview(), this.renderTheme()]
                }),
                (0, i.jsx)(b.F, {
                    setting: B.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                    children: this.renderDisplayMode()
                }),
                (0, i.jsx)(b.F, {
                    setting: B.s6.APPEARANCE_SCALING_SPACING,
                    children: this.renderScalingAndSpacing()
                }),
                (0, i.jsx)(d.Text, {
                    variant: 'text-md/normal',
                    className: w.marginTop20,
                    children: M.intl.format(M.t['5LEQdX'], {
                        onAccessibilityClick() {
                            m.Z.open(L.oAB.ACCESSIBILITY);
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
        return M.intl.formatToPlainString(M.t['0hpvOT'], { value: e });
    }
    handleFontSizeChange(e) {
        (0, g.oL)(e);
    }
    handleMessageSpacingChange(e) {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, g.ZZ)(e);
        }
    }
    handleZoomChange(e) {
        (0, g.cq)(e);
    }
    constructor(...e) {
        super(...e),
            U(this, 'darkMessages', W(L.BRd.DARK)),
            U(this, 'lightMessages', W(L.BRd.LIGHT)),
            U(this, 'handleDisplayCompactAvatarsChanged', (e) => {
                u.ZP.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            U(this, 'handleMessageDisplayModeChange', (e) => {
                let { value: t } = e;
                P.jU.updateSetting(t === V.COMPACT), (0, g.ZZ)();
            });
    }
}
let Q = (e) => {
    !(0, _.un)(e) &&
        (0, _.EW)(e, {
            dismissAction: Z.L.AUTO,
            forceTrack: !0
        });
};
function X() {
    let e = P.jU.useSetting(),
        t = P.RS.useSetting(),
        n = P.NA.useSetting(),
        r = P.L1.useSetting();
    s.useEffect(() => {
        Q(o.z.CLIENT_THEMES_SETTINGS_BADGE), Q(o.z.DEKSTOP_CUSTOM_APP_ICON_BADGE), Q(o.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    }, []);
    let l = (0, a.cj)([O.Z, R.ZP, p.Z, v.default, S.Z], () => {
        var e, t;
        return {
            theme: O.Z.theme,
            useForcedColors: p.Z.useForcedColors,
            useSystemTheme: R.ZP.useSystemTheme,
            darkSidebar: O.Z.darkSidebar,
            fontSize: p.Z.fontSize,
            zoom: p.Z.zoom,
            messageGroupSpacing: p.Z.messageGroupSpacing,
            displayCompactAvatars: R.ZP.displayCompactAvatars,
            isStaff: null !== (t = null === (e = v.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff) && void 0 !== t && t,
            gradientPreset: S.Z.gradientPreset
        };
    });
    return (0, i.jsx)(q, {
        messageDisplayCompact: e,
        hideSimpleEmbedContent: t && n,
        clientTheme: r,
        ...l
    });
}
