t.d(s, {
    Z: function () {
        return W;
    }
}),
    t(47120),
    t(653041);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(392711),
    l = t.n(o),
    c = t(553813),
    d = t.n(c),
    _ = t(442837),
    u = t(692547),
    E = t(481060),
    T = t(660216),
    S = t(225433),
    I = t(825209),
    N = t(721383),
    A = t(612226),
    C = t(579806),
    m = t(714338),
    g = t(924557),
    h = t(600164),
    O = t(74299),
    p = t(960861),
    R = t(131951),
    x = t(556296),
    M = t(808506),
    f = t(63063),
    D = t(358085),
    L = t(13140),
    P = t(210887),
    b = t(659947),
    Z = t(981631),
    v = t(70722),
    j = t(420212),
    B = t(689938),
    U = t(929481),
    G = t(869042),
    F = t(113207);
function y(e, s, t) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = t),
        e
    );
}
function V(e) {
    let { children: s } = e;
    return s([A.Q2.MESSAGE, A.Q2.NAVIGATION, A.Q2.DND, A.Q2.CHAT, A.Q2.VOICE_AND_VIDEO, A.Q2.MISCELLANEOUS]);
}
let Y = l()((0, A.Rv)())
        .filter((e) => e.description !== B.Z.Messages.KEYBIND_DESCRIPTION_MODAL_EASTER_EGG)
        .groupBy((e) => e.group)
        .value(),
    w = _.ZP.connectStores([P.Z], () => ({ theme: P.Z.theme }))(E.EmptyState);
class k extends a.PureComponent {
    renderMessage() {
        let { keybind: e } = this.props,
            s = L.BB(e.shortcut);
        return m.Z.hasBind(s)
            ? (0, n.jsx)(E.FormText, {
                  className: U.keybindMessage,
                  type: E.FormTextTypes.DESCRIPTION,
                  style: { color: u.Z.unsafe_rawColors.RED_400.css },
                  children: B.Z.Messages.KEYBIND_CONFLICT
              })
            : j.Sp.has(s)
              ? (0, n.jsx)(E.FormText, {
                    className: U.keybindMessage,
                    type: E.FormTextTypes.DESCRIPTION,
                    style: { color: u.Z.unsafe_rawColors.RED_400.css },
                    children: B.Z.Messages.KEYBIND_NAVIGATION_CONFLICT.format({ keyboardNavArticle: f.Z.getArticleURL(Z.BhN.KEYBOARD_NAVIGATION) })
                })
              : (0, n.jsx)(E.FormText, {
                    className: U.keybindMessage,
                    type: E.FormTextTypes.DESCRIPTION,
                    children: this.props.keybindDescriptions[e.action]
                });
    }
    render() {
        let { managed: e, enabled: s } = this.props.keybind;
        return (0, n.jsxs)(h.Z, {
            direction: h.Z.Direction.VERTICAL,
            className: r()(U.keybindGroup, G.card),
            children: [
                !e &&
                    (0, n.jsx)(S.Z, {
                        'aria-label': B.Z.Messages.REMOVE_KEYBIND,
                        className: U.removeKeybind,
                        onClick: this.handleDeleteKeybind,
                        look: S.Z.Looks.FILLED
                    }),
                (0, n.jsxs)(h.Z, {
                    className: F.marginBottom8,
                    children: [
                        (0, n.jsx)(h.Z.Child, {
                            basis: '45%',
                            children: (0, n.jsx)(E.FormItem, {
                                title: B.Z.Messages.USER_SETTINGS_KEYBINDS_ACTION,
                                className: U.item,
                                children: (0, n.jsx)(E.SingleSelect, {
                                    value: this.props.keybind.action,
                                    options: this.props.keybindActionTypes,
                                    onChange: this.handleActionChanged,
                                    isDisabled: e
                                })
                            })
                        }),
                        (0, n.jsx)(h.Z.Child, {
                            basis: '45%',
                            children: (0, n.jsx)(E.FormItem, {
                                title: B.Z.Messages.USER_SETTINGS_KEYBINDS_KEYBIND,
                                className: U.item,
                                children: (0, n.jsx)(I.Z, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange
                                })
                            })
                        }),
                        (0, n.jsx)(h.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, n.jsx)(E.FormItem, {
                                className: U.switch,
                                children: (0, n.jsx)(E.Tooltip, {
                                    text: B.Z.Messages.USER_SETTINGS_KEYBIND_ENABLE_DISABLE,
                                    children: (e) =>
                                        (0, n.jsx)('div', {
                                            ...e,
                                            children: (0, n.jsx)(E.Switch, {
                                                checked: s,
                                                onChange: this.handleEnableDisable
                                            })
                                        })
                                })
                            })
                        })
                    ]
                }),
                (0, n.jsx)(h.Z.Child, { children: this.renderMessage() }),
                this.renderExtraSettings()
            ]
        });
    }
    renderExtraSettings() {
        let { action: e } = this.props.keybind;
        if (e === Z.kg4.SWITCH_TO_VOICE_CHANNEL) return (0, n.jsx)(b.Z, { keybind: this.props.keybind });
    }
    constructor(...e) {
        super(...e),
            y(this, 'handleActionChanged', (e) => {
                T.Z.setKeybind({
                    ...this.props.keybind,
                    action: e
                });
            }),
            y(this, 'handleShortcutChange', (e) => {
                T.Z.setKeybind({
                    ...this.props.keybind,
                    shortcut: e
                });
            }),
            y(this, 'handleDeleteKeybind', () => {
                T.Z.deleteKeybind(this.props.keybind.id);
            }),
            y(this, 'handleEnableDisable', () => {
                let { keybind: e } = this.props;
                T.Z.setKeybind({
                    ...this.props.keybind,
                    enabled: !e.enabled
                });
            });
    }
}
class H extends a.PureComponent {
    componentDidMount() {
        T.Z.enableAll(!1);
    }
    componentWillUnmount() {
        T.Z.enableAll(!0);
    }
    get keybindActionTypes() {
        let { overlaySupported: e, canGoLive: s, allowSoundboard: t, enableClips: n } = this.props,
            a = [
                {
                    value: Z.kg4.UNASSIGNED,
                    label: B.Z.Messages.KEYBIND_UNASSIGNED
                },
                {
                    value: Z.kg4.PUSH_TO_TALK,
                    label: B.Z.Messages.KEYBIND_PUSH_TO_TALK
                },
                {
                    value: Z.kg4.PUSH_TO_TALK_PRIORITY,
                    label: B.Z.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY
                },
                {
                    value: Z.kg4.PUSH_TO_MUTE,
                    label: B.Z.Messages.KEYBIND_PUSH_TO_MUTE
                },
                {
                    value: Z.kg4.TOGGLE_MUTE,
                    label: B.Z.Messages.KEYBIND_TOGGLE_MUTE
                },
                {
                    value: Z.kg4.TOGGLE_DEAFEN,
                    label: B.Z.Messages.KEYBIND_TOGGLE_DEAFEN
                },
                {
                    value: Z.kg4.TOGGLE_VOICE_MODE,
                    label: B.Z.Messages.KEYBIND_TOGGLE_VOICE_MODE
                },
                {
                    value: Z.kg4.TOGGLE_STREAMER_MODE,
                    label: B.Z.Messages.KEYBIND_TOGGLE_STREAM_MODE
                }
            ];
        e &&
            (a.push({
                value: Z.kg4.TOGGLE_OVERLAY,
                label: B.Z.Messages.KEYBIND_TOGGLE_OVERLAY
            }),
            a.push({
                value: Z.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
                label: B.Z.Messages.KEYBIND_TOGGLE_OVERLAY_INPUT_LOCK
            }),
            a.push({
                value: Z.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                label: B.Z.Messages.KEYBIND_ACTIVATE_OVERLAY_CHAT
            }));
        let i = (0, D.isMac)() && !d().satisfies(null === C.Z || void 0 === C.Z ? void 0 : C.Z.os.release, v.jR);
        return (
            s &&
                ((0, D.isWindows)() || p.ZP.enabled()) &&
                !i &&
                a.push({
                    value: Z.kg4.TOGGLE_GO_LIVE_STREAMING,
                    label: B.Z.Messages.KEYBIND_TOGGLE_GO_LIVE_STREAMING
                }),
            (0, D.isDesktop)() &&
                (a.push(
                    {
                        value: Z.kg4.NAVIGATE_BACK,
                        label: B.Z.Messages.KEYBIND_NAVIGATE_BACK
                    },
                    {
                        value: Z.kg4.NAVIGATE_FORWARD,
                        label: B.Z.Messages.KEYBIND_NAVIGATE_FORWARD
                    },
                    {
                        value: Z.kg4.SWITCH_TO_VOICE_CHANNEL,
                        label: B.Z.Messages.USER_SETTINGS_KEYBINDS_SWITCH_TO_VOICE_CHANNEL_LABEL
                    },
                    {
                        value: Z.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: B.Z.Messages.USER_SETTINGS_KEYBINDS_VOICE_CHANNEL_DISCONNECT_LABEL
                    }
                ),
                t &&
                    a.push(
                        {
                            value: Z.kg4.SOUNDBOARD,
                            label: B.Z.Messages.KEYBIND_SOUNDBOARD
                        },
                        {
                            value: Z.kg4.SOUNDBOARD_HOLD,
                            label: B.Z.Messages.KEYBIND_SOUNDBOARD_HOLD
                        }
                    ),
                n &&
                    a.push({
                        value: Z.kg4.SAVE_CLIP,
                        label: B.Z.Messages.CLIPS_SAVE
                    })),
            a
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: s, enableClips: t } = this.props,
            n = {
                [Z.kg4.UNASSIGNED]: B.Z.Messages.KEYBIND_DESCRIPTION_UNASSIGNED,
                [Z.kg4.PUSH_TO_MUTE]: B.Z.Messages.KEYBIND_DESCRIPTION_PUSH_TO_MUTE,
                [Z.kg4.PUSH_TO_TALK]: B.Z.Messages.KEYBIND_DESCRIPTION_PUSH_TO_TALK,
                [Z.kg4.PUSH_TO_TALK_PRIORITY]: B.Z.Messages.KEYBIND_DESCRIPTION_PUSH_TO_TALK_PRIORITY,
                [Z.kg4.TOGGLE_MUTE]: B.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_MUTE,
                [Z.kg4.TOGGLE_DEAFEN]: B.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_DEAFEN,
                [Z.kg4.TOGGLE_VOICE_MODE]: B.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_VOICE_MODE,
                [Z.kg4.TOGGLE_STREAMER_MODE]: B.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_STREAMER_MODE
            };
        return e && ((n[Z.kg4.TOGGLE_OVERLAY] = B.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_OVERLAY), (n[Z.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = B.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_OVERLAY_INPUT_LOCK)), s && (0, D.isWindows)() && (n[Z.kg4.TOGGLE_GO_LIVE_STREAMING] = B.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_GO_LIVE_STREAMING), (0, D.isDesktop)() && ((n[Z.kg4.NAVIGATE_BACK] = B.Z.Messages.KEYBIND_DESCRIPTION_NAVIGATE_BACK), (n[Z.kg4.NAVIGATE_FORWARD] = B.Z.Messages.KEYBIND_DESCRIPTION_NAVIGATE_FORWARD), (n[Z.kg4.SOUNDBOARD] = (0, D.isWindows)() ? B.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_NO_POPOUT_WHEEL_SUPPORT : B.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD), (n[Z.kg4.SOUNDBOARD_HOLD] = (0, D.isWindows)() ? B.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD_NO_POPOUT_WHEEL_SUPPORT : B.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD), t && (n[Z.kg4.SAVE_CLIP] = B.Z.Messages.CLIPS_KEYBIND_DESCRIPTION)), n;
    }
    renderKeybinds(e) {
        return e.map((e) =>
            (0, n.jsx)(
                'div',
                {
                    className: U.row,
                    children: (0, n.jsx)(
                        k,
                        {
                            keybind: e,
                            keybindDescriptions: this.keybindDescriptions,
                            keybindActionTypes: this.keybindActionTypes
                        },
                        e.id
                    )
                },
                e.id
            )
        );
    }
    renderEmpty(e) {
        if (0 === e.length)
            return (0, n.jsx)(w, {
                className: F.marginTop60,
                children: (0, n.jsx)(E.EmptyStateImage, {
                    darkSrc: t(572279),
                    lightSrc: t(871803),
                    width: 320,
                    height: 170
                })
            });
    }
    render() {
        let e = this.props.enableClips,
            s = l()(this.props.keybinds)
                .reject((e) => e.managed && ![Z.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, Z.kg4.SAVE_CLIP].includes(e.action))
                .reject((s) => !e && s.action === Z.kg4.SAVE_CLIP)
                .reject((e) => !this.props.allowSoundboard && (e.action === Z.kg4.SOUNDBOARD || e.action === Z.kg4.SOUNDBOARD_HOLD))
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value();
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(E.FormSection, {
                    tag: E.FormTitleTags.H1,
                    title: B.Z.Messages.KEYBINDS,
                    children: D.isPlatformEmbedded
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsxs)(h.Z, {
                                      justify: h.Z.Justify.BETWEEN,
                                      className: F.marginBottom20,
                                      children: [
                                          (0, n.jsx)(h.Z.Child, {
                                              grow: 0,
                                              children: (0, n.jsx)(E.HelpMessage, {
                                                  messageType: E.HelpMessageTypes.WARNING,
                                                  children: B.Z.Messages.ADD_KEYBIND_WARNING
                                              })
                                          }),
                                          (0, n.jsx)(h.Z.Child, {
                                              wrap: !0,
                                              grow: 0,
                                              children: (0, n.jsx)(E.Button, {
                                                  size: E.ButtonSizes.LARGE,
                                                  onClick: this.handleAddKeybind,
                                                  children: B.Z.Messages.ADD_KEYBIND
                                              })
                                          })
                                      ]
                                  }),
                                  (0, n.jsx)(E.FormDivider, {}),
                                  (0, n.jsxs)(E.FormSection, {
                                      children: [this.renderKeybinds(s), this.renderEmpty(s)]
                                  })
                              ]
                          })
                        : (0, n.jsx)(E.HelpMessage, {
                              messageType: E.HelpMessageTypes.INFO,
                              textVariant: 'text-lg/medium',
                              className: U.browserNotice,
                              children: B.Z.Messages.KEYBIND_IN_BROSWER_NOTICE.format({ downloadLink: Z.EYA.DOWNLOAD })
                          })
                }),
                (0, n.jsx)(E.FormDivider, {}),
                (0, n.jsxs)(E.FormSection, {
                    tag: E.FormTitleTags.H1,
                    title: B.Z.Messages.USER_SETTINGS_KEYBINDS_DEFAULT_KEYBINDS_TITLE,
                    className: F.marginTop60,
                    children: [
                        (0, n.jsxs)('div', {
                            className: U.defaultKeybind,
                            children: [
                                (0, n.jsx)(E.Text, {
                                    variant: 'text-md/normal',
                                    children: B.Z.Messages.USER_SETTINGS_KEYBINDS_SHOW_LIST_TITLE
                                }),
                                (0, n.jsx)('div', {
                                    className: U.defaultKeybindShortcutGroup,
                                    children: (0, n.jsx)(E.KeyCombo, {
                                        shortcut: N._.binds['0'],
                                        className: U.__invalid_defaultKeybindShortcut
                                    })
                                })
                            ]
                        }),
                        (0, n.jsx)(E.FormDivider, {}),
                        (0, n.jsx)(V, {
                            children: (e) =>
                                (0, n.jsx)(n.Fragment, {
                                    children: e.map((e, s) => {
                                        let t = (0, A.UD)(e),
                                            i = (0, A.U6)(e),
                                            o = Y[e];
                                        return (0, n.jsxs)(
                                            'div',
                                            {
                                                className: U.defaultKeybindGroup,
                                                children: [
                                                    (0, n.jsx)(E.Heading, {
                                                        variant: 'heading-deprecated-12/semibold',
                                                        className: r()(U.defaultKeybindGroupHeader, { [U.defaultKeybindGroupWithDescription]: null != i }),
                                                        children: t
                                                    }),
                                                    null != i &&
                                                        (0, n.jsx)(E.Text, {
                                                            color: 'header-secondary',
                                                            className: U.defaultKeybindGroupDescription,
                                                            variant: 'text-sm/normal',
                                                            children: i
                                                        }),
                                                    (0, n.jsx)(E.FormDivider, {}),
                                                    o.map((e) =>
                                                        (0, n.jsxs)(
                                                            a.Fragment,
                                                            {
                                                                children: [
                                                                    (0, n.jsxs)('div', {
                                                                        className: U.defaultKeybind,
                                                                        children: [
                                                                            (0, n.jsx)(E.Text, {
                                                                                variant: 'text-md/normal',
                                                                                children: e.description
                                                                            }),
                                                                            (0, n.jsx)('div', {
                                                                                className: U.defaultKeybindShortcutGroup,
                                                                                children: e.binds.map((e) => (0, n.jsx)(E.KeyCombo, { shortcut: e }, e))
                                                                            })
                                                                        ]
                                                                    }),
                                                                    (0, n.jsx)(E.FormDivider, {})
                                                                ]
                                                            },
                                                            e.description
                                                        )
                                                    )
                                                ]
                                            },
                                            s
                                        );
                                    })
                                })
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            y(this, 'handleAddKeybind', () => {
                T.Z.addKeybind();
            });
    }
}
function W() {
    let e = (0, _.e7)([x.Z], () => x.Z.getState()),
        s = (0, _.e7)([R.Z], () => (0, O.Z)(R.Z)),
        t = (0, _.e7)([M.Z], () => M.Z.isSupported()),
        a = (0, g.Go)();
    return (0, n.jsx)(H, {
        keybinds: e,
        canGoLive: s,
        overlaySupported: t,
        allowSoundboard: (0, D.isWindows)(),
        enableClips: a
    });
}
