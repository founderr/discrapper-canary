n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120);
var i,
    s,
    a = n(735250),
    o = n(470079),
    r = n(442837),
    l = n(481060),
    c = n(13245),
    d = n(600164),
    u = n(212632),
    h = n(906467),
    p = n(556296),
    f = n(237997),
    _ = n(998502),
    E = n(13140),
    g = n(658785),
    m = n(981631),
    I = n(689938),
    Z = n(635958),
    v = n(113207);
function S(e, t, n) {
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
((s = i || (i = {})).GENERAL = 'GENERAL'), (s.VOICE = 'VOICE'), (s.DEVELOPER = 'DEVELOPER');
let C = () => [
        {
            value: m.ipw.LARGE,
            name: I.Z.Messages.AVATAR_SIZE_OPTION_LARGE
        },
        {
            value: m.ipw.SMALL,
            name: I.Z.Messages.AVATAR_SIZE_OPTION_SMALL
        }
    ],
    x = () => [
        {
            value: m.wC$.ALWAYS,
            name: I.Z.Messages.DISPLAY_OPTION_ALWAYS
        },
        {
            value: m.wC$.ONLY_WHILE_SPEAKING,
            name: I.Z.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING
        },
        {
            value: m.wC$.NEVER,
            name: I.Z.Messages.DISPLAY_OPTION_NEVER
        }
    ],
    N = () => [
        {
            value: m.OYC.ALWAYS,
            name: I.Z.Messages.DISPLAY_OPTION_ALWAYS
        },
        {
            value: m.OYC.ONLY_WHILE_SPEAKING,
            name: I.Z.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING
        }
    ];
function T() {
    let e = f.Z.getNotificationPositionMode(),
        t = e !== m._vf.DISABLED,
        n = p.Z.getOverlayKeybind(),
        i = p.Z.getOverlayChatKeybind();
    c.Z.track(m.rMx.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: f.Z.getTextChatNotificationMode(),
        text_opacity_slider: f.Z.getTextWidgetOpacity(),
        hotkey: null != n ? (0, E.BB)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, E.BB)(i.shortcut) : null
    });
}
class O extends o.PureComponent {
    componentDidMount() {
        c.Z.track(m.rMx.SETTINGS_PANE_VIEWED, {
            settings_type: 'overlay',
            destination_pane: 'OVERLAY SETTINGS',
            origin_pane: null
        });
    }
    handleChangeNotificationPositionMode(e, t) {
        c.Z.setNotificationPositionMode(t), T();
    }
    handleChangeAvatarSizeMode(e) {
        let { value: t } = e;
        c.Z.setAvatarSizeMode(t);
    }
    handleChangeDisplayNameMode(e) {
        let { value: t } = e;
        c.Z.setDisplayNameMode(t);
    }
    handleChangeDisplayUserMode(e) {
        let { value: t } = e;
        c.Z.setDisplayUserMode(t);
    }
    renderHeader() {
        return (0, a.jsxs)(d.Z, {
            direction: d.Z.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: Z.header,
            children: [
                (0, a.jsxs)(d.Z, {
                    children: [
                        (0, a.jsx)(l.FormTitle, {
                            className: Z.headerTitle,
                            tag: 'h1',
                            children: I.Z.Messages.OVERLAY_SETTINGS_TITLE
                        }),
                        (0, a.jsx)(l.ModalCloseButton, {
                            className: Z.headerClose,
                            onClick: this.props.onClose
                        })
                    ]
                }),
                this.renderTabBar()
            ]
        });
    }
    renderTabBar() {
        let { selectedSection: e } = this.state,
            t = h.Z.isDeveloper
                ? (0, a.jsx)(l.TabBar.Item, {
                      id: 'DEVELOPER',
                      className: Z.tabBarItem,
                      children: 'Developer'
                  })
                : null;
        return (0, a.jsxs)(l.TabBar, {
            selectedItem: e,
            type: 'top',
            className: Z.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, a.jsx)(l.TabBar.Item, {
                    id: 'GENERAL',
                    className: Z.tabBarItem,
                    children: I.Z.Messages.OVERLAY_SETTINGS_GENERAL_TAB
                }),
                (0, a.jsx)(l.TabBar.Item, {
                    id: 'VOICE',
                    className: Z.tabBarItem,
                    children: I.Z.Messages.OVERLAY_SETTINGS_VOICE_TAB
                }),
                t
            ]
        });
    }
    renderBody() {
        let e;
        let { selectedSection: t } = this.state;
        switch (t) {
            case 'DEVELOPER':
                e = this.renderDeveloperSettings();
                break;
            case 'VOICE':
                e = this.renderVoiceSettings();
                break;
            default:
                e = this.renderGeneralSettings();
        }
        return (0, a.jsx)(
            l.ModalContent,
            {
                className: Z.content,
                children: e
            },
            t
        );
    }
    renderGeneralSettings() {
        let { textChatNotificationMode: e, notificationPositionMode: t, shouldShowKeybindIndicators: n, showKeybindIndicators: i } = this.props,
            s = t !== m._vf.DISABLED;
        return (0, a.jsxs)(o.Fragment, {
            children: [
                (0, a.jsx)(l.FormItem, {
                    title: I.Z.Messages.FORM_LABEL_NOTIFICATION_POSITION,
                    className: v.marginBottom20,
                    children: (0, a.jsx)(u.Z, {
                        position: t,
                        onChange: this.handleChangeNotificationPositionMode
                    })
                }),
                (0, a.jsx)(l.FormSwitch, {
                    value: s && e === m.Ypu.ENABLED,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !s,
                    hideBorder: !0,
                    children: I.Z.Messages.FORM_LABEL_OVERLAY_TEXT_CHAT_NOTIFICATIONS
                }),
                i &&
                    (0, a.jsx)(l.FormSwitch, {
                        value: n,
                        onChange: (e) => c.Z.setShowKeybindIndicators(e),
                        hideBorder: !0,
                        children: I.Z.Messages.FORM_LABEL_OVERLAY_SHOW_MUTE_DEAFEN_KEYBINDS
                    })
            ]
        });
    }
    renderVoiceSettings() {
        let { avatarSizeMode: e, displayNameMode: t, displayUserMode: n } = this.props;
        return (0, a.jsxs)(o.Fragment, {
            children: [
                (0, a.jsx)(l.FormItem, {
                    title: I.Z.Messages.FORM_LABEL_AVATAR_SIZE,
                    className: v.marginBottom20,
                    children: (0, a.jsx)(l.RadioGroup, {
                        onChange: this.handleChangeAvatarSizeMode,
                        options: C(),
                        value: e,
                        size: l.RadioGroup.Sizes.SMALL
                    })
                }),
                (0, a.jsx)(l.FormItem, {
                    title: I.Z.Messages.FORM_LABEL_DISPLAY_NAMES,
                    className: v.marginBottom20,
                    children: (0, a.jsx)(l.RadioGroup, {
                        onChange: this.handleChangeDisplayNameMode,
                        options: x(),
                        value: t,
                        size: l.RadioGroup.Sizes.SMALL
                    })
                }),
                (0, a.jsx)(l.FormItem, {
                    title: I.Z.Messages.FORM_LABEL_DISPLAY_USERS,
                    className: v.marginBottom20,
                    children: (0, a.jsx)(l.RadioGroup, {
                        onChange: this.handleChangeDisplayUserMode,
                        options: N(),
                        value: n,
                        size: l.RadioGroup.Sizes.SMALL
                    })
                })
            ]
        });
    }
    renderDeveloperSettings() {
        return (0, a.jsx)(o.Fragment, {
            children: (0, a.jsx)(l.FormItem, {
                title: 'Crashes',
                className: v.marginBottom20,
                children: (0, a.jsx)(l.SingleSelect, {
                    value: void 0,
                    options: [
                        {
                            value: void 0,
                            label: 'Native crash'
                        },
                        {
                            value: 0,
                            label: 'Abort()'
                        },
                        {
                            value: 1,
                            label: 'SIGSEGV()'
                        },
                        {
                            value: 2,
                            label: 'EXCEPTION_ACCESS_VIOLATION'
                        },
                        {
                            value: 3,
                            label: 'RaiseFailFastException'
                        },
                        {
                            value: 4,
                            label: 'Out of Memory'
                        }
                    ],
                    onChange: (e) => null != e && _.ZP.crash(e)
                })
            })
        });
    }
    render() {
        return (0, a.jsxs)(l.ModalRoot, {
            'aria-label': I.Z.Messages.OVERLAY_SETTINGS_TITLE,
            transitionState: l.ModalTransitionState.ENTERED,
            children: [this.renderHeader(), this.renderBody()]
        });
    }
    constructor(...e) {
        super(...e),
            S(this, 'state', { selectedSection: 'GENERAL' }),
            S(this, 'handleSelectSection', (e) => {
                this.setState({ selectedSection: e });
            }),
            S(this, 'handleToggleTextChatNotifications', () => {
                let { ENABLED: e, DISABLED: t } = m.Ypu,
                    n = this.props.textChatNotificationMode === e ? t : e;
                c.Z.setTextChatNotificationMode(n), T();
            });
    }
}
function A(e) {
    let { onClose: t } = e,
        {
            avatarSizeMode: n,
            displayNameMode: i,
            displayUserMode: s,
            notificationPositionMode: o,
            textChatNotificationMode: l,
            shouldShowKeybindIndicators: c
        } = (0, r.cj)([f.Z], () => ({
            avatarSizeMode: f.Z.getAvatarSizeMode(),
            displayNameMode: f.Z.getDisplayNameMode(),
            displayUserMode: f.Z.getDisplayUserMode(),
            notificationPositionMode: f.Z.getNotificationPositionMode(),
            textChatNotificationMode: f.Z.getTextChatNotificationMode(),
            shouldShowKeybindIndicators: f.Z.showKeybindIndicators
        })),
        { showKeybindIndicators: d } = g.Z.useExperiment({ location: 'Overlay Settings' });
    return (0, a.jsx)(O, {
        onClose: t,
        avatarSizeMode: n,
        displayNameMode: i,
        displayUserMode: s,
        notificationPositionMode: o,
        textChatNotificationMode: l,
        shouldShowKeybindIndicators: c,
        showKeybindIndicators: d
    });
}
