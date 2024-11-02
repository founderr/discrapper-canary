n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var i,
    r,
    s = n(200651),
    o = n(192379),
    a = n(442837),
    l = n(481060),
    c = n(13245),
    d = n(600164),
    u = n(212632),
    h = n(906467),
    p = n(556296),
    f = n(237997),
    g = n(998502),
    m = n(13140),
    v = n(658785),
    _ = n(981631),
    E = n(388032),
    Z = n(635958),
    x = n(113207);
function I(e, t, n) {
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
((r = i || (i = {})).GENERAL = 'GENERAL'), (r.VOICE = 'VOICE'), (r.DEVELOPER = 'DEVELOPER');
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
    S = () => [
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
class T extends o.PureComponent {
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
        return (0, s.jsxs)(d.Z, {
            direction: d.Z.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: Z.header,
            children: [
                (0, s.jsxs)(d.Z, {
                    children: [
                        (0, s.jsx)(l.FormTitle, {
                            className: Z.headerTitle,
                            tag: 'h1',
                            children: E.intl.string(E.t['35G2Mj'])
                        }),
                        (0, s.jsx)(l.ModalCloseButton, {
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
                ? (0, s.jsx)(l.TabBar.Item, {
                      id: 'DEVELOPER',
                      className: Z.tabBarItem,
                      children: 'Developer'
                  })
                : null;
        return (0, s.jsxs)(l.TabBar, {
            selectedItem: e,
            type: 'top',
            className: Z.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, s.jsx)(l.TabBar.Item, {
                    id: 'GENERAL',
                    className: Z.tabBarItem,
                    children: E.intl.string(E.t['0FYxx8'])
                }),
                (0, s.jsx)(l.TabBar.Item, {
                    id: 'VOICE',
                    className: Z.tabBarItem,
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
        return (0, s.jsx)(
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
            r = t !== _._vf.DISABLED;
        return (0, s.jsxs)(o.Fragment, {
            children: [
                (0, s.jsx)(l.FormItem, {
                    title: E.intl.string(E.t.IQv8Eh),
                    className: x.marginBottom20,
                    children: (0, s.jsx)(u.Z, {
                        position: t,
                        onChange: this.handleChangeNotificationPositionMode
                    })
                }),
                (0, s.jsx)(l.FormSwitch, {
                    value: r && e === _.Ypu.ENABLED,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !r,
                    hideBorder: !0,
                    children: E.intl.string(E.t.Fy5kPj)
                }),
                i &&
                    (0, s.jsx)(l.FormSwitch, {
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
        return (0, s.jsxs)(o.Fragment, {
            children: [
                (0, s.jsx)(l.FormItem, {
                    title: E.intl.string(E.t.dnvZSk),
                    className: x.marginBottom20,
                    children: (0, s.jsx)(l.RadioGroup, {
                        onChange: this.handleChangeAvatarSizeMode,
                        options: C(),
                        value: e,
                        size: l.RadioGroup.Sizes.SMALL
                    })
                }),
                (0, s.jsx)(l.FormItem, {
                    title: E.intl.string(E.t.J0dpcH),
                    className: x.marginBottom20,
                    children: (0, s.jsx)(l.RadioGroup, {
                        onChange: this.handleChangeDisplayNameMode,
                        options: S(),
                        value: t,
                        size: l.RadioGroup.Sizes.SMALL
                    })
                }),
                (0, s.jsx)(l.FormItem, {
                    title: E.intl.string(E.t.swsWWF),
                    className: x.marginBottom20,
                    children: (0, s.jsx)(l.RadioGroup, {
                        onChange: this.handleChangeDisplayUserMode,
                        options: y(),
                        value: n,
                        size: l.RadioGroup.Sizes.SMALL
                    })
                })
            ]
        });
    }
    renderDeveloperSettings() {
        return (0, s.jsx)(o.Fragment, {
            children: (0, s.jsx)(l.FormItem, {
                title: 'Crashes',
                className: x.marginBottom20,
                children: (0, s.jsx)(l.SingleSelect, {
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
        return (0, s.jsxs)(l.ModalRoot, {
            'aria-label': E.intl.string(E.t['35G2Mj']),
            transitionState: l.ModalTransitionState.ENTERED,
            children: [this.renderHeader(), this.renderBody()]
        });
    }
    constructor(...e) {
        super(...e),
            I(this, 'state', { selectedSection: 'GENERAL' }),
            I(this, 'handleSelectSection', (e) => {
                this.setState({ selectedSection: e });
            }),
            I(this, 'handleToggleTextChatNotifications', () => {
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
            displayUserMode: r,
            notificationPositionMode: o,
            textChatNotificationMode: l,
            shouldShowKeybindIndicators: c
        } = (0, a.cj)([f.Z], () => ({
            avatarSizeMode: f.Z.getAvatarSizeMode(),
            displayNameMode: f.Z.getDisplayNameMode(),
            displayUserMode: f.Z.getDisplayUserMode(),
            notificationPositionMode: f.Z.getNotificationPositionMode(),
            textChatNotificationMode: f.Z.getTextChatNotificationMode(),
            shouldShowKeybindIndicators: f.Z.showKeybindIndicators
        })),
        { showKeybindIndicators: d } = v.Z.useExperiment({ location: 'Overlay Settings' });
    return (0, s.jsx)(T, {
        onClose: t,
        avatarSizeMode: n,
        displayNameMode: i,
        displayUserMode: r,
        notificationPositionMode: o,
        textChatNotificationMode: l,
        shouldShowKeybindIndicators: c,
        showKeybindIndicators: d
    });
}
