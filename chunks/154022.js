n.d(t, {
    Z: function () {
        return H;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(230711),
    m = n(419363),
    h = n(857595),
    g = n(607070),
    p = n(627845),
    x = n(600164),
    S = n(313201),
    T = n(786761),
    C = n(3148),
    E = n(739566),
    _ = n(753206),
    f = n(440849),
    I = n(921801),
    N = n(196051),
    A = n(441729),
    b = n(626135),
    v = n(63063),
    j = n(695346),
    O = n(263937),
    R = n(996073),
    P = n(526761),
    D = n(726985),
    y = n(981631),
    B = n(611480),
    L = n(653477),
    Z = n(388032),
    F = n(840206),
    M = n(113207),
    k = n(328756);
let w = (0, S.hQ)(),
    U = (0, S.hQ)(),
    V = (0, S.hQ)(),
    G = o().debounce((e) => {
        (0, h.o2)(e);
    }, 250),
    Y = o().debounce((e) => {
        (0, N.Ct)(e);
    }, 250);
function H(e) {
    return (0, i.jsxs)(d.FormSection, {
        tag: d.FormTitleTags.H1,
        title: Z.intl.string(Z.t.G0neg4),
        children: [
            (0, i.jsx)('div', {
                className: M.marginBottom20,
                children: (0, i.jsx)(z, {})
            }),
            (0, i.jsxs)(I.F, {
                setting: D.s6.ACCESSIBILITY_SATURATION,
                children: [(0, i.jsx)(W, {}), (0, i.jsx)(d.FormDivider, {})]
            }),
            (0, i.jsx)(I.F, {
                setting: D.s6.ACCESSIBILITY_LINK_DECORATIONS,
                children: (0, i.jsx)(K, {})
            }),
            (0, i.jsx)(I.F, {
                setting: D.s6.ACCESSIBILITY_ROLE_STYLE,
                children: (0, i.jsx)(q, {})
            }),
            (0, i.jsx)(I.F, {
                setting: D.s6.ACCESSIBILITY_TAGS,
                children: (0, i.jsx)(Q, {})
            }),
            (0, i.jsx)(I.F, {
                setting: D.s6.ACCESSIBILITY_PROFILE_COLORS,
                children: (0, i.jsx)(X, {})
            }),
            (0, p.b)()
                ? (0, i.jsxs)(I.F, {
                      setting: D.s6.ACCESSIBILITY_CONTRAST,
                      children: [(0, i.jsx)(J, {}), ' ']
                  })
                : null,
            (0, i.jsx)(I.F, {
                setting: D.s6.ACCESSIBILITY_REDUCED_MOTION,
                children: (0, i.jsx)($, {})
            }),
            (0, i.jsx)(I.F, {
                setting: D.s6.ACCESSIBILITY_STICKERS,
                children: (0, i.jsx)(ee, {})
            }),
            (0, i.jsx)(I.F, {
                setting: D.s6.ACCESSIBILITY_MESSAGES,
                children: (0, i.jsx)(et, {})
            }),
            (0, i.jsx)(en, {}),
            (0, i.jsxs)(I.F, {
                setting: D.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
                children: [
                    (0, i.jsx)(d.FormDivider, { className: M.marginTop20 }),
                    (0, i.jsx)(d.Text, {
                        className: M.marginTop20,
                        variant: 'text-md/normal',
                        children: Z.intl.format(Z.t.DHpTjY, {
                            onAppearanceClick() {
                                u.Z.open(y.oAB.APPEARANCE);
                            }
                        })
                    })
                ]
            })
        ]
    });
}
function z() {
    let e = j.jU.useSetting(),
        [t] = s.useState(() => {
            let e = (0, T.e5)({
                ...(0, C.ZP)({
                    channelId: '1337',
                    content: Z.intl.formatToPlainString(Z.t.bB80LC, { previewLink: 'https://discord.com/accessibility' })
                }),
                state: y.yb.SENT,
                id: ''.concat(0)
            });
            return (e.colorString = 'green'), e;
        });
    return (0, i.jsx)(d.FocusBlock, {
        children: (0, i.jsxs)(d.Card, {
            className: F.preview,
            'aria-hidden': !0,
            children: [
                (0, i.jsxs)('div', {
                    className: F.previewHeader,
                    children: [
                        (0, i.jsx)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            color: d.Button.Colors.BRAND,
                            children: Z.intl.string(Z.t['2RHHg4'])
                        }),
                        (0, i.jsx)('div', {
                            className: F.previewAvatars,
                            children: [y.Skl.ONLINE, y.Skl.DND, y.Skl.IDLE].map((e) =>
                                (0, i.jsx)(
                                    d.AnimatedAvatar,
                                    {
                                        'aria-label': Z.intl.string(Z.t.lqaIxM),
                                        src: k,
                                        size: d.AvatarSizes.SIZE_32,
                                        status: e
                                    },
                                    e
                                )
                            )
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: F.previewMessage,
                    children: (0, i.jsx)(_.Z, {
                        compact: e,
                        author: {
                            ...(0, E.ZH)(t),
                            colorString: '#DD80F4'
                        },
                        message: t
                    })
                })
            ]
        })
    });
}
function W() {
    let { saturation: e, desaturateUserColors: t } = (0, c.cj)([g.Z], () => ({
        saturation: g.Z.saturation,
        desaturateUserColors: g.Z.desaturateUserColors
    }));
    return (0, i.jsxs)(d.FormSection, {
        className: M.marginTop20,
        children: [
            (0, i.jsx)(d.FormTitle, {
                id: w,
                className: M.marginBottom8,
                children: Z.intl.string(Z.t['5PWWCQ'])
            }),
            (0, i.jsx)(d.FormText, {
                id: U,
                type: d.FormText.Types.DESCRIPTION,
                className: M.marginBottom20,
                children: Z.intl.string(Z.t['0PbE/P'])
            }),
            (0, i.jsx)(d.Slider, {
                'aria-labelledby': w,
                'aria-describedby': U,
                markers: y.yqN.SATURATION_INCREMENTS,
                equidistant: !0,
                stickToMarkers: !0,
                maxValue: 1,
                minValue: 0,
                initialValue: e,
                onValueChange: G,
                onMarkerRender: (e) => ((100 * e) % 2 == 0 ? ''.concat(100 * e, '%') : void 0)
            }),
            (0, i.jsx)(I.F, {
                setting: D.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
                children: (0, i.jsx)(d.FormSwitch, {
                    hideBorder: !0,
                    className: l()(M.marginTop20, M.marginBottom20),
                    value: t,
                    onChange: h.f1,
                    note: Z.intl.string(Z.t.nlAOER),
                    children: Z.intl.string(Z.t.bQCodH)
                })
            })
        ]
    });
}
function K() {
    let e = (0, c.e7)([g.Z], () => g.Z.alwaysShowLinkDecorations);
    return (0, i.jsx)(d.FormItem, {
        className: M.marginTop20,
        children: (0, i.jsx)(d.FormSwitch, {
            note: Z.intl.string(Z.t['72i5GB']),
            value: e,
            onChange: function () {
                (0, h.gs)(!e);
            },
            children: Z.intl.string(Z.t.OLZFBw)
        })
    });
}
function q() {
    let e = (0, c.e7)([g.Z], () => g.Z.roleStyle);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(d.FormItem, {
                title: Z.intl.string(Z.t.uSOPWl),
                className: M.marginTop20,
                children: [
                    (0, i.jsx)(d.FormText, {
                        type: d.FormText.Types.DESCRIPTION,
                        className: M.marginBottom8,
                        children: Z.intl.string(Z.t['86hjzc'])
                    }),
                    (0, i.jsx)(d.RadioGroup, {
                        options: [
                            {
                                name: Z.intl.string(Z.t.YEOEi4),
                                value: 'username'
                            },
                            {
                                name: Z.intl.string(Z.t.mQaro6),
                                value: 'dot'
                            },
                            {
                                name: Z.intl.string(Z.t.Ji2EVF),
                                value: 'hidden'
                            }
                        ],
                        onChange: function (e) {
                            (0, h.u1)(e.value);
                        },
                        value: e
                    })
                ]
            }),
            (0, i.jsx)(d.FormDivider, { className: M.marginTop20 })
        ]
    });
}
function Q() {
    let e = (0, c.e7)([g.Z], () => g.Z.hideTags);
    return (0, i.jsx)(d.FormItem, {
        title: Z.intl.string(Z.t.UQt6dX),
        className: M.marginTop20,
        children: (0, i.jsx)(I.F, {
            setting: D.s6.ACCESSIBILITY_TAGS_NAMES,
            children: (0, i.jsx)(d.FormSwitch, {
                value: !e,
                onChange: () => (0, h.Nv)(!e),
                children: Z.intl.string(Z.t.UPwh1N)
            })
        })
    });
}
function X() {
    let e = (0, c.e7)([g.Z], () => g.Z.syncProfileThemeWithUserTheme),
        t = s.useRef(null);
    return (
        (0, R.Z)(t, P.rP.SYNC_PROFILE_THEME_WITH_USER_THEME),
        (0, i.jsx)(d.FormItem, {
            ref: t,
            title: Z.intl.string(Z.t.BT8Bmp),
            className: l()(M.marginTop20, F.syncProfileThemeWithUserTheme),
            children: (0, i.jsx)(I.F, {
                setting: D.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
                children: (0, i.jsx)(d.FormSwitch, {
                    note: Z.intl.format(Z.t.u6UjrK, {
                        onThemeClick() {
                            u.Z.open(y.oAB.APPEARANCE);
                        }
                    }),
                    className: M.marginTop20,
                    value: e,
                    onChange: h.Uv,
                    children: Z.intl.string(Z.t['sSY+mJ'])
                })
            })
        })
    );
}
function J() {
    let [e] = (0, c.Wu)([g.Z], () => [g.Z.syncForcedColors, g.Z.systemForcedColors]),
        [t, n] = s.useState(e);
    s.useEffect(() => {
        n(e);
    }, [e]);
    let r = s.useRef(null);
    s.useEffect(() => {
        null != r.current && (clearTimeout(r.current), (r.current = null)), t !== e && (r.current = setTimeout(() => (0, h.qz)(t), 150));
    }, [t, e]);
    let l = Z.intl.format(Z.t.GwEVEx, { learnMoreLink: v.Z.getArticleURL(y.BhN.FORCED_COLORS) });
    return (0, i.jsx)(d.FormItem, {
        title: Z.intl.string(Z.t.TYyfOz),
        className: M.marginTop20,
        children: (0, i.jsx)(I.F, {
            setting: D.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
            children: (0, i.jsx)(d.FormSwitch, {
                value: t,
                note: l,
                onChange: n,
                children: Z.intl.string(Z.t.cguieX)
            })
        })
    });
}
function $() {
    let e = j.QK.useSetting(),
        t = j.Yk.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: r,
            systemPrefersReducedMotion: a,
            gifAutoPlayOverrideReason: o,
            animateEmojiOverrideReason: u
        } = (0, c.cj)([g.Z, O.Z], () => ({
            systemPrefersReducedMotion: g.Z.systemPrefersReducedMotion,
            rawPrefersReducedMotion: g.Z.rawPrefersReducedMotion,
            useReducedMotion: g.Z.useReducedMotion,
            gifAutoPlayOverrideReason: O.Z.getAppliedOverrideReasonKey('gifAutoPlay'),
            animateEmojiOverrideReason: O.Z.getAppliedOverrideReasonKey('animateEmoji')
        })),
        m = s.useRef(null);
    (0, R.Z)(m, P.rP.REDUCED_MOTION);
    let p = s.useCallback(
            (e, t) => {
                (0, h.Zt)(t ? 'auto' : a);
            },
            [a]
        ),
        x = s.useCallback((e) => {
            (0, h.Zt)(e ? 'reduce' : 'no-preference');
        }, []);
    return (0, i.jsxs)(d.FormItem, {
        ref: m,
        title: Z.intl.string(Z.t.e3TR1d),
        className: l()(M.marginTop20, F.reducedMotion),
        children: [
            (0, i.jsx)(d.FormText, {
                type: d.FormText.Types.DESCRIPTION,
                className: M.marginBottom8,
                children: Z.intl.format(Z.t['2l9U2t'], { helpdeskArticle: v.Z.getArticleURL(y.BhN.REDUCED_MOTION) })
            }),
            (0, i.jsx)(d.Checkbox, {
                className: l()(M.marginTop20, M.marginBottom20),
                value: 'auto' === r,
                shape: d.Checkbox.Shapes.BOX,
                type: d.Checkbox.Types.INVERTED,
                onChange: p,
                children: (0, i.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    children: Z.intl.string(Z.t['+Dx+HB'])
                })
            }),
            (0, i.jsx)(I.F, {
                setting: D.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                children: (0, i.jsx)(d.FormSwitch, {
                    value: n,
                    onChange: x,
                    children: Z.intl.string(Z.t.b3XBzs)
                })
            }),
            (0, i.jsx)(I.F, {
                setting: D.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                children: (0, i.jsx)(d.FormSwitch, {
                    className: M.marginBottom20,
                    value: e,
                    note: null != o ? (0, f.Z)(o) : void 0,
                    onChange: j.QK.updateSetting,
                    children: Z.intl.string(Z.t.Iayoh4)
                })
            }),
            (0, i.jsx)(I.F, {
                setting: D.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                children: (0, i.jsx)(d.FormSwitch, {
                    className: M.marginBottom20,
                    value: t,
                    note: null != u ? (0, f.Z)(u) : void 0,
                    onChange: j.Yk.updateSetting,
                    children: Z.intl.string(Z.t.iIaOlZ)
                })
            })
        ]
    });
}
function ee() {
    let e = j.Wp.useSetting(),
        t = (0, c.e7)([O.Z], () => O.Z.getAppliedOverrideReasonKey('animateStickers')),
        n = s.useCallback((e) => {
            j.Wp.updateSetting(e.value);
        }, []);
    return (0, i.jsxs)(d.FormItem, {
        className: M.marginTop20,
        title: Z.intl.string(Z.t['6NtAuL']),
        children: [
            (0, i.jsx)(d.FormText, {
                type: d.FormText.Types.DESCRIPTION,
                className: M.marginBottom8,
                children: null != t ? (0, f.Z)(t) : Z.intl.string(Z.t.GRa6U1)
            }),
            (0, i.jsx)(d.RadioGroup, {
                options: [
                    {
                        name: Z.intl.string(Z.t['Xp+X2d']),
                        value: B.yr.ALWAYS_ANIMATE
                    },
                    {
                        name: Z.intl.string(Z.t.IlLT7e),
                        desc: Z.intl.string(Z.t.bIW9Tk),
                        value: B.yr.ANIMATE_ON_INTERACTION
                    },
                    {
                        name: Z.intl.string(Z.t.IGu8x8),
                        value: B.yr.NEVER_ANIMATE
                    }
                ],
                onChange: n,
                value: e
            })
        ]
    });
}
function et() {
    let e = (0, c.e7)([g.Z], () => g.Z.isSubmitButtonEnabled),
        t = j.dN.useSetting(),
        n = s.useRef(null);
    return (
        (0, R.Z)(n, P.rP.LEGACY_CHAT_INPUT),
        (0, i.jsxs)(d.FormItem, {
            ref: n,
            className: M.marginTop20,
            children: [
                (0, i.jsx)(d.FormTitle, {
                    className: M.marginBottom8,
                    children: Z.intl.string(Z.t.onqU6u)
                }),
                (0, i.jsx)(I.F, {
                    setting: D.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                    children: (0, i.jsx)(d.FormSwitch, {
                        className: M.marginTop20,
                        value: e,
                        onChange: h.eN,
                        children: Z.intl.string(Z.t['3Fztn5'])
                    })
                }),
                (0, i.jsx)(I.F, {
                    setting: D.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                    children: (0, i.jsx)(d.FormSwitch, {
                        className: M.marginTop8,
                        value: t,
                        note: Z.intl.string(Z.t.Q7wgHR),
                        onChange: (e) => {
                            b.default.track(y.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                enabled: e,
                                location: { section: y.jXE.SETTINGS_ACCESSIBILITY }
                            }),
                                j.dN.updateSetting(e);
                        },
                        children: Z.intl.string(Z.t.TZ2hZG)
                    })
                })
            ]
        })
    );
}
function en() {
    let e = j.OW.useSetting(),
        t = (0, c.e7)([A.Z], () => A.Z.speechRate),
        [n, r] = s.useState(!1);
    return m.Zh
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(I.F, {
                      setting: D.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
                      children: (0, i.jsxs)(d.FormItem, {
                          className: M.marginTop20,
                          children: [
                              (0, i.jsx)(d.FormTitle, {
                                  className: M.marginBottom8,
                                  children: Z.intl.string(Z.t.VpSKeH)
                              }),
                              (0, i.jsx)(I.F, {
                                  setting: D.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
                                  children: (0, i.jsx)(d.FormSwitch, {
                                      className: M.marginTop20,
                                      value: e,
                                      onChange: j.OW.updateSetting,
                                      children: Z.intl.string(Z.t.qvTIwc)
                                  })
                              })
                          ]
                      })
                  }),
                  (0, i.jsx)(I.F, {
                      setting: D.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                      children: (0, i.jsxs)(d.FormItem, {
                          className: M.marginTop20,
                          children: [
                              (0, i.jsx)(d.FormTitle, {
                                  id: V,
                                  className: M.marginBottom20,
                                  children: Z.intl.string(Z.t.lsW5Eh)
                              }),
                              (0, i.jsx)('div', {
                                  className: F.ttsPreviewWrapper,
                                  children: (0, i.jsx)(d.Button, {
                                      color: d.ButtonColors.BRAND,
                                      onClick: () => {
                                          if (n) {
                                              (0, N.NB)(), r(!1);
                                              return;
                                          }
                                          (0, N.cP)(
                                              Z.intl.string(Z.t.PKaNJC),
                                              !0,
                                              void 0,
                                              () => r(!0),
                                              () => r(!1)
                                          ),
                                              r(!0);
                                      },
                                      children: (0, i.jsxs)(x.Z, {
                                          align: x.Z.Align.CENTER,
                                          children: [
                                              n
                                                  ? (0, i.jsx)(d.PauseIcon, {
                                                        size: 'md',
                                                        color: 'currentColor'
                                                    })
                                                  : (0, i.jsx)(d.PlayIcon, {
                                                        size: 'md',
                                                        color: 'currentColor'
                                                    }),
                                              (0, i.jsx)('span', { children: Z.intl.string(Z.t.hymc8v) }),
                                              (0, i.jsx)(d.HiddenVisually, { children: Z.intl.string(Z.t.lsW5Eh) })
                                          ]
                                      })
                                  })
                              }),
                              (0, i.jsx)(d.Slider, {
                                  markers: L.q,
                                  initialValue: t,
                                  defaultValue: 1,
                                  stickToMarkers: !0,
                                  onValueChange: Y,
                                  onValueRender: (e) => 'x'.concat(e.toFixed(2)),
                                  onMarkerRender: (e) =>
                                      0 === e
                                          ? (0, i.jsx)('span', {
                                                className: F.ttsSliderMarker,
                                                children: Z.intl.string(Z.t['493lwc'])
                                            })
                                          : 10 === e
                                            ? (0, i.jsx)('span', {
                                                  className: F.ttsSliderMarker,
                                                  children: Z.intl.string(Z.t.ZSZEdX)
                                              })
                                            : 1 === e
                                              ? (0, i.jsx)('span', { children: 'x1.0' })
                                              : e % 1 == 0
                                                ? ''
                                                : void 0,
                                  'aria-labelledby': V
                              })
                          ]
                      })
                  })
              ]
          })
        : null;
}
