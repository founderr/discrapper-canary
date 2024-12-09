n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var i,
    s,
    r = n(200651),
    a = n(192379),
    l = n(442837),
    o = n(481060),
    c = n(13245),
    d = n(600164),
    u = n(212632),
    h = n(906467),
    p = n(556296),
    f = n(237997),
    g = n(998502),
    m = n(13140),
    v = n(809357),
    _ = n(981631),
    E = n(388032),
    x = n(382595),
    Z = n(232186);
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
            value: _.ipw.LARGE,
            name: E.intl.string(E.t.YcOxtr)
        },
        {
            value: _.ipw.SMALL,
            name: E.intl.string(E.t.BKIKq6)
        }
    ],
    I = () => [
        {
            value: _.wC$.ALWAYS,
            name: E.intl.string(E.t.nBmDra)
        },
        {
            value: _.wC$.ONLY_WHILE_SPEAKING,
            name: E.intl.string(E.t['2OvIZW'])
        },
        {
            value: _.wC$.NEVER,
            name: E.intl.string(E.t.ekjlPD)
        }
    ],
    y = () => [
        {
            value: _.OYC.ALWAYS,
            name: E.intl.string(E.t.nBmDra)
        },
        {
            value: _.OYC.ONLY_WHILE_SPEAKING,
            name: E.intl.string(E.t['2OvIZW'])
        }
    ];
function N() {
    let e = f.Z.getNotificationPositionMode(),
        t = e !== _._vf.DISABLED,
        n = p.Z.getOverlayKeybind(),
        i = p.Z.getOverlayChatKeybind();
    c.Z.track(_.rMx.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: f.Z.getTextChatNotificationMode(),
        text_opacity_slider: f.Z.getTextWidgetOpacity(),
        hotkey: null != n ? (0, m.BB)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, m.BB)(i.shortcut) : null
    });
}
class T extends a.PureComponent {
    componentDidMount() {
        c.Z.track(_.rMx.SETTINGS_PANE_VIEWED, {
            settings_type: 'overlay',
            destination_pane: 'OVERLAY SETTINGS',
            origin_pane: null
        });
    }
    handleChangeNotificationPositionMode(e, t) {
        c.Z.setNotificationPositionMode(t), N();
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
        return (0, r.jsxs)(d.Z, {
            direction: d.Z.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: x.header,
            children: [
                (0, r.jsxs)(d.Z, {
                    children: [
                        (0, r.jsx)(o.FormTitle, {
                            className: x.headerTitle,
                            tag: 'h1',
                            children: E.intl.string(E.t['35G2Mj'])
                        }),
                        (0, r.jsx)(o.ModalCloseButton, {
                            className: x.headerClose,
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
                ? (0, r.jsx)(o.TabBar.Item, {
                      id: 'DEVELOPER',
                      className: x.tabBarItem,
                      children: 'Developer'
                  })
                : null;
        return (0, r.jsxs)(o.TabBar, {
            selectedItem: e,
            type: 'top',
            className: x.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, r.jsx)(o.TabBar.Item, {
                    id: 'GENERAL',
                    className: x.tabBarItem,
                    children: E.intl.string(E.t['0FYxx8'])
                }),
                (0, r.jsx)(o.TabBar.Item, {
                    id: 'VOICE',
                    className: x.tabBarItem,
                    children: E.intl.string(E.t['3WeSiI'])
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
        return (0, r.jsx)(
            o.ModalContent,
            {
                className: x.content,
                children: e
            },
            t
        );
    }
    renderGeneralSettings() {
        let { textChatNotificationMode: e, notificationPositionMode: t, shouldShowKeybindIndicators: n, showKeybindIndicators: i } = this.props,
            s = t !== _._vf.DISABLED;
        return (0, r.jsxs)(a.Fragment, {
            children: [
                (0, r.jsx)(o.FormItem, {
                    title: E.intl.string(E.t.IQv8Eh),
                    className: Z.marginBottom20,
                    children: (0, r.jsx)(u.Z, {
                        position: t,
                        onChange: this.handleChangeNotificationPositionMode
                    })
                }),
                (0, r.jsx)(o.FormSwitch, {
                    value: s && e === _.Ypu.ENABLED,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !s,
                    hideBorder: !0,
                    children: E.intl.string(E.t.Fy5kPj)
                }),
                i &&
                    (0, r.jsx)(o.FormSwitch, {
                        value: n,
                        onChange: (e) => c.Z.setShowKeybindIndicators(e),
                        hideBorder: !0,
                        children: E.intl.string(E.t.XZTl9v)
                    })
            ]
        });
    }
    renderVoiceSettings() {
        let { avatarSizeMode: e, displayNameMode: t, displayUserMode: n } = this.props;
        return (0, r.jsxs)(a.Fragment, {
            children: [
                (0, r.jsx)(o.FormItem, {
                    title: E.intl.string(E.t.dnvZSk),
                    className: Z.marginBottom20,
                    children: (0, r.jsx)(o.RadioGroup, {
                        onChange: this.handleChangeAvatarSizeMode,
                        options: C(),
                        value: e,
                        size: o.RadioGroup.Sizes.SMALL
                    })
                }),
                (0, r.jsx)(o.FormItem, {
                    title: E.intl.string(E.t.J0dpcH),
                    className: Z.marginBottom20,
                    children: (0, r.jsx)(o.RadioGroup, {
                        onChange: this.handleChangeDisplayNameMode,
                        options: I(),
                        value: t,
                        size: o.RadioGroup.Sizes.SMALL
                    })
                }),
                (0, r.jsx)(o.FormItem, {
                    title: E.intl.string(E.t.swsWWF),
                    className: Z.marginBottom20,
                    children: (0, r.jsx)(o.RadioGroup, {
                        onChange: this.handleChangeDisplayUserMode,
                        options: y(),
                        value: n,
                        size: o.RadioGroup.Sizes.SMALL
                    })
                })
            ]
        });
    }
    renderDeveloperSettings() {
        return (0, r.jsx)(a.Fragment, {
            children: (0, r.jsx)(o.FormItem, {
                title: 'Crashes',
                className: Z.marginBottom20,
                children: (0, r.jsx)(o.SingleSelect, {
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
                    onChange: (e) => null != e && g.ZP.crash(e)
                })
            })
        });
    }
    render() {
        return (0, r.jsxs)(o.ModalRoot, {
            'aria-label': E.intl.string(E.t['35G2Mj']),
            transitionState: o.ModalTransitionState.ENTERED,
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
                let { ENABLED: e, DISABLED: t } = _.Ypu,
                    n = this.props.textChatNotificationMode === e ? t : e;
                c.Z.setTextChatNotificationMode(n), N();
            });
    }
}
function b(e) {
    let { onClose: t } = e,
        {
            avatarSizeMode: n,
            displayNameMode: i,
            displayUserMode: s,
            notificationPositionMode: a,
            textChatNotificationMode: o,
            shouldShowKeybindIndicators: c
        } = (0, l.cj)([f.Z], () => ({
            avatarSizeMode: f.Z.getAvatarSizeMode(),
            displayNameMode: f.Z.getDisplayNameMode(),
            displayUserMode: f.Z.getDisplayUserMode(),
            notificationPositionMode: f.Z.getNotificationPositionMode(),
            textChatNotificationMode: f.Z.getTextChatNotificationMode(),
            shouldShowKeybindIndicators: f.Z.showKeybindIndicators
        })),
        d = (0, v.Z)({ location: 'Overlay Settings' });
    return (0, r.jsx)(T, {
        onClose: t,
        avatarSizeMode: n,
        displayNameMode: i,
        displayUserMode: s,
        notificationPositionMode: a,
        textChatNotificationMode: o,
        shouldShowKeybindIndicators: c,
        showKeybindIndicators: d
    });
}
