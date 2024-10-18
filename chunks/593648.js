t.d(s, {
    Z: function () {
        return ee;
    }
}),
    t(653041),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(392711),
    l = t.n(o),
    c = t(442837),
    d = t(524437),
    _ = t(481060),
    u = t(668781),
    E = t(292556),
    T = t(87051),
    S = t(419363),
    I = t(818083),
    N = t(688465),
    m = t(487419),
    A = t(197344),
    C = t(476756),
    g = t(734934),
    h = t(223683),
    O = t(312400),
    p = t(115345),
    R = t(392888),
    x = t(106371),
    M = t(995774),
    f = t(921801),
    D = t(292959),
    L = t(9156),
    P = t(912101),
    b = t(358085),
    Z = t(709054),
    v = t(557177),
    j = t(695346),
    B = t(675478),
    U = t(33656),
    G = t(726985),
    F = t(981631),
    y = t(468788),
    V = t(689938),
    Y = t(769533),
    k = t(113207);
function w(e, s, t) {
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
function H(e) {
    let { label: s, enabled: t, disabled: a, onPreview: i, onChange: r, tooltip: o } = e;
    return (0, n.jsx)(_.FormSwitch, {
        className: Y.soundRow,
        value: t,
        onChange: r,
        disabled: a,
        tooltipNote: o,
        children: (0, n.jsxs)('div', {
            className: Y.notificationSound,
            children: [
                (0, n.jsx)('div', {
                    className: Y.soundName,
                    children: s
                }),
                (0, n.jsx)(_.Clickable, {
                    className: Y.soundIcon,
                    onClick: i,
                    'aria-label': V.Z.Messages.USER_SETTINGS_NOTIFICATIONS_PREVIEW_SOUND,
                    children: (0, n.jsx)(_.VoiceNormalIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: Y.icon,
                        'aria-hidden': !0
                    })
                })
            ]
        })
    });
}
function W(e) {
    let { disabledSounds: s, disableAllSounds: t, notifyMessagesInSelectedChannel: i } = e,
        o = a.useRef(),
        l = (0, g.p)(),
        c = a.useCallback((e, s) => {
            s.stopPropagation(), s.preventDefault(), null != o.current && o.current.stop(), (o.current = v.GN(e));
        }, []),
        d = a.useCallback(
            (e, t) => {
                let n = s.filter((s) => s !== e);
                !t && n.push(e), E.default.setDisabledSounds(n);
            },
            [s]
        );
    a.useEffect(() => () => {
        var e;
        null === (e = o.current) || void 0 === e || e.stop();
    });
    let u = [
            {
                label: V.Z.Messages.SOUND_MESSAGE,
                sound: 'message1',
                focusModeDisabled: l
            },
            {
                label: V.Z.Messages.SOUND_DEAFEN,
                sound: 'deafen'
            },
            {
                label: V.Z.Messages.SOUND_UNDEAFEN,
                sound: 'undeafen'
            },
            {
                label: V.Z.Messages.MUTE,
                sound: 'mute'
            },
            {
                label: V.Z.Messages.UNMUTE,
                sound: 'unmute'
            },
            {
                label: V.Z.Messages.SOUND_VOICE_DISCONNECTED,
                sound: 'disconnect'
            },
            {
                label: V.Z.Messages.SOUND_PTT_ACTIVATE,
                sound: 'ptt_start'
            },
            {
                label: V.Z.Messages.SOUND_PTT_DEACTIVATE,
                sound: 'ptt_stop'
            },
            {
                label: V.Z.Messages.SOUND_USER_JOIN,
                sound: 'user_join'
            },
            {
                label: V.Z.Messages.SOUND_USER_LEAVE,
                sound: 'user_leave'
            },
            {
                label: V.Z.Messages.SOUND_USER_MOVED,
                sound: 'user_moved'
            },
            {
                label: V.Z.Messages.SOUND_OUTGOING_RING,
                sound: 'call_calling'
            },
            {
                label: V.Z.Messages.SOUND_INCOMING_RING,
                sound: 'call_ringing'
            },
            {
                label: V.Z.Messages.SOUND_STREAM_STARTED,
                sound: 'stream_started'
            },
            {
                label: V.Z.Messages.SOUND_STREAM_STOPPED,
                sound: 'stream_ended'
            },
            {
                label: V.Z.Messages.SOUND_VIEWER_JOIN,
                sound: 'stream_user_joined'
            },
            {
                label: V.Z.Messages.SOUND_VIEWER_LEAVE,
                sound: 'stream_user_left'
            },
            {
                label: V.Z.Messages.SOUND_ACTIVITY_START,
                sound: 'activity_launch'
            },
            {
                label: V.Z.Messages.SOUND_ACTIVITY_END,
                sound: 'activity_end'
            },
            {
                label: V.Z.Messages.SOUND_ACTIVITY_USER_JOIN,
                sound: 'activity_user_join'
            },
            {
                label: V.Z.Messages.SOUND_ACTIVITY_USER_LEAVE,
                sound: 'activity_user_left'
            },
            {
                label: V.Z.Messages.SOUND_INVITED_TO_SPEAK,
                sound: 'reconnect'
            }
        ],
        T = null != A.Z.useHolidaySoundpack();
    return (0, n.jsx)(f.F, {
        setting: G.s6.NOTIFICATIONS_SOUNDS,
        children: (0, n.jsxs)(_.FormSection, {
            children: [
                T
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(_.FormTitle, {
                                  className: k.marginBottom20,
                                  children: V.Z.Messages.HOLIDAY_SOUNDPACK_LABEL
                              }),
                              (0, n.jsx)(C.Z, {})
                          ]
                      })
                    : null,
                (0, n.jsx)(_.FormTitle, {
                    className: r()(k.marginBottom20, k.marginTop20),
                    children: V.Z.Messages.SOUNDS
                }),
                (0, n.jsx)(_.FormSwitch, {
                    note: V.Z.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_NOTE,
                    value: i,
                    onChange: E.default.setNotifyMessagesInSelectedChannel,
                    children: V.Z.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_LABEL
                }),
                (0, n.jsx)(_.FormSwitch, {
                    note: V.Z.Messages.SOUND_DISABLE_ALL_NOTE,
                    value: t,
                    onChange: E.default.toggleDisableAllSounds,
                    children: V.Z.Messages.SOUND_DISABLE_ALL
                }),
                u.map((e) => {
                    let { label: a, sound: i, focusModeDisabled: r } = e;
                    return (0, n.jsx)(
                        H,
                        {
                            label: a,
                            disabled: t || !0 === r,
                            tooltip: r ? V.Z.Messages.QUIET_MODE_DISABLED_BY : void 0,
                            onChange: (e) => d(i, e),
                            onPreview: (e) => c(i, e),
                            enabled: !t && !s.includes(i) && !0 !== r
                        },
                        i
                    );
                })
            ]
        })
    });
}
function K() {
    let e = (0, c.e7)([m.Z], () => m.Z.getGuildAlertSettings()),
        [s, t] = a.useState(null),
        i = Z.default.keys(e).map((s) => {
            let t = e[s];
            return {
                label: t.guildName,
                value: t.guildId
            };
        });
    return 0 === Object.keys(e).length
        ? null
        : (0, n.jsxs)(f.F, {
              setting: G.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: [
                  (0, n.jsxs)(_.Heading, {
                      variant: 'heading-lg/semibold',
                      className: r()(Y.titleWithBeta, k.marginBottom20),
                      children: [V.Z.Messages.GUILD_COMMUNITY_ALERTS_HEADER, (0, n.jsx)(N.Z, {})]
                  }),
                  (0, n.jsx)(_.FormText, {
                      type: _.FormTextTypes.DESCRIPTION,
                      className: k.marginBottom20,
                      children: V.Z.Messages.GUILD_COMMUNITY_ALERTS_DESCRIPTION
                  }),
                  (0, n.jsxs)(_.FormItem, {
                      title: V.Z.Messages.GUILD_COMMUNITY_ALERTS_CHOOSE_SERVER,
                      children: [
                          (0, n.jsx)(_.SingleSelect, {
                              className: null != s ? k.marginBottom20 : k.marginBottom40,
                              value: s,
                              onChange: (e) => {
                                  t(e);
                              },
                              options: i
                          }),
                          null != s
                              ? (0, n.jsxs)('div', {
                                    className: k.marginTop20,
                                    children: [
                                        (0, n.jsxs)(f.F, {
                                            setting: G.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                            children: [
                                                (0, n.jsx)(_.FormSwitch, {
                                                    className: r()(k.marginBottom20),
                                                    note: V.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_DESCRIPTION,
                                                    value: !e[s].disableRaidAlertNag,
                                                    onChange: () => {
                                                        (0, B.PS)(
                                                            s,
                                                            (e) => {
                                                                e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                            },
                                                            B.fy.INFREQUENT_USER_ACTION
                                                        );
                                                    },
                                                    hideBorder: !0,
                                                    children: V.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER
                                                }),
                                                (0, n.jsx)(_.FormDivider, { className: r()(k.marginTop20, k.marginBottom40) })
                                            ]
                                        }),
                                        (0, n.jsxs)(f.F, {
                                            setting: G.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                            children: [
                                                (0, n.jsx)(_.FormSwitch, {
                                                    className: k.marginBottom20,
                                                    note: V.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_DESCRIPTION,
                                                    value: !e[s].disableRaidAlertPush,
                                                    onChange: () => {
                                                        (0, B.PS)(
                                                            s,
                                                            (e) => {
                                                                e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                            },
                                                            B.fy.INFREQUENT_USER_ACTION
                                                        );
                                                    },
                                                    hideBorder: !0,
                                                    children: V.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER
                                                }),
                                                (0, n.jsx)(_.FormDivider, { className: r()(k.marginTop20, k.marginBottom40) })
                                            ]
                                        })
                                    ]
                                })
                              : null,
                          null != s ? null : (0, n.jsx)(_.FormDivider, { className: r()(k.marginTop20, k.marginBottom40) })
                      ]
                  })
              ]
          });
}
class z extends a.PureComponent {
    handleDesktopChange(e) {
        let s = e ? F.qrD.ALL : F.qrD.NEVER;
        if (s !== F.qrD.NEVER) {
            var t;
            (t = 'UserSettingsModal'),
                P.Z.requestPermission((e) => {
                    let s = e ? F.$Ab.ENABLED : F.$Ab.BLOCKED;
                    E.default.setPermissionsState(s, t);
                });
        } else E.default.setDesktopType(s);
    }
    handleTTSChange(e) {
        let s = e.value;
        E.default.setTTSType(s);
    }
    render() {
        let { desktopType: e, afkTimeout: s, disableUnreadBadge: t, taskbarFlash: a, disabledSounds: i, disableAllSounds: o, notifyMessagesInSelectedChannel: c, focusMode: d } = this.props,
            u = b.isPlatformEmbedded && (0, b.isWindows)(),
            E = l()
                .range(1, 11)
                .map((e) => ({
                    value: 60 * e,
                    label: V.Z.Messages.DURATION_MINUTES.format({ minutes: e })
                }));
        return (0, n.jsxs)(_.FormSection, {
            tag: _.FormTitleTags.H1,
            title: V.Z.Messages.NOTIFICATIONS,
            children: [
                (0, n.jsx)(f.F, {
                    setting: G.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                    children: (0, n.jsx)(_.FormSwitch, {
                        className: k.marginBottom20,
                        value: e !== F.qrD.NEVER && !d,
                        onChange: this.handleDesktopChange,
                        note: V.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE_BODY,
                        disabled: d,
                        tooltipNote: d ? V.Z.Messages.QUIET_MODE_DISABLED_BY : void 0,
                        children: V.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE
                    })
                }),
                (0, n.jsx)(X, {}),
                (0, n.jsx)(f.F, {
                    setting: G.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                    children: (0, n.jsx)(_.FormSwitch, {
                        className: u ? k.marginBottom20 : k.marginBottom40,
                        value: !t,
                        note: V.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_BODY,
                        onChange: this.handleToggleShowUnreadBadge,
                        children: V.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL
                    })
                }),
                (0, n.jsx)(f.F, {
                    setting: G.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                    children: (0, n.jsx)(_.FormSwitch, {
                        className: k.marginBottom40,
                        value: a,
                        note: V.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_BODY,
                        onChange: this.handleToggleShowFlash,
                        children: V.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL
                    })
                }),
                (0, n.jsx)(q, {}),
                (0, n.jsx)(es, {}),
                (0, n.jsx)(f.F, {
                    setting: G.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                    children: (0, n.jsxs)(_.FormItem, {
                        title: V.Z.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT,
                        children: [
                            (0, n.jsx)(_.SingleSelect, {
                                value: s,
                                onChange: j.CM.updateSetting,
                                options: E
                            }),
                            (0, n.jsx)(_.FormText, {
                                type: _.FormTextTypes.DESCRIPTION,
                                className: k.marginTop8,
                                children: V.Z.Messages.FORM_DESCRIPTION_PUSH_AFK_TIMEOUT
                            }),
                            (0, n.jsx)(_.FormDivider, { className: r()(k.marginTop40, k.marginBottom40) })
                        ]
                    })
                }),
                this.renderTTS(),
                (0, n.jsx)(K, {}),
                (0, n.jsx)(_.FormItem, {
                    children: (0, n.jsx)(W, {
                        disabledSounds: i,
                        disableAllSounds: o,
                        notifyMessagesInSelectedChannel: c
                    })
                }),
                (0, n.jsx)(U.Z, {})
            ]
        });
    }
    constructor(...e) {
        super(...e),
            w(this, 'handleToggleShowUnreadBadge', () => {
                E.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            w(this, 'handleToggleShowFlash', () => {
                E.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            w(this, 'renderTTS', () => {
                if (!S.Zh) return null;
                let e = [
                    {
                        name: V.Z.Messages.TTS_ALLS,
                        value: F.PrB.ALL_CHANNELS
                    },
                    {
                        name: V.Z.Messages.TTS_CURRENT,
                        value: F.PrB.SELECTED_CHANNEL
                    },
                    {
                        name: V.Z.Messages.TTS_NEVER,
                        value: F.PrB.NEVER
                    }
                ];
                return (0, n.jsxs)(f.F, {
                    setting: G.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, n.jsxs)(_.FormItem, {
                            title: V.Z.Messages.FORM_LABEL_TTS_NOTIFICATIONS,
                            children: [
                                (0, n.jsx)(_.FormText, {
                                    type: _.FormTextTypes.DESCRIPTION,
                                    className: k.marginBottom8,
                                    children: V.Z.Messages.FORM_DESCRIPTION_TTS
                                }),
                                (0, n.jsx)(_.RadioGroup, {
                                    options: e,
                                    onChange: this.handleTTSChange,
                                    value: this.props.ttsType
                                })
                            ]
                        }),
                        (0, n.jsx)(_.FormDivider, { className: r()(k.marginTop40, k.marginBottom40) })
                    ]
                });
            });
    }
}
let Q = (0, I.B)({
    kind: 'user',
    id: '2024-01_mention_on_all_messages',
    label: 'Mention on all messages',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Increment mention count when receiving a message in a channel set to all messages',
            config: { enabled: !0 }
        }
    ]
});
function X() {
    let e = Q.useExperiment({ location: 'settings' }, { autoTrackExposure: !1 }).enabled,
        s = (0, c.e7)([L.ZP], () => L.ZP.mentionOnAllMessages);
    return e
        ? (0, n.jsx)(f.F, {
              setting: G.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, n.jsx)(_.FormSwitch, {
                  className: k.marginBottom20,
                  value: s,
                  onChange: (e) => {
                      T.Z.setAccountFlag(y.c.MENTION_ON_ALL_MESSAGES, e);
                  },
                  note: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  children: 'Mention on all messages?'
              })
          })
        : null;
}
function q() {
    let e = O.xT.useExperiment({ location: 'UserSettingsNotifications' }, { autoTrackExposure: !1 }).enabled,
        { manuallyOpen: s } = O.fs.useExperiment({ location: 'UserSettingsNotifications' }, { autoTrackExposure: !1 }),
        t = (0, c.e7)([L.ZP], () => L.ZP.useNewNotifications),
        [i, o] = a.useState(!1);
    return e && (t || s)
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  t
                      ? (0, n.jsx)(f.F, {
                            setting: G.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                            children: (0, n.jsx)(_.FormSwitch, {
                                className: k.marginBottom40,
                                style: { marginTop: -20 },
                                value: t,
                                disabled: i || !t,
                                note: V.Z.Messages.NOTIF_MIGRATION_SETTINGS_SUBTITLE,
                                onChange: () => J(o),
                                children: V.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
                            })
                        })
                      : s
                        ? (0, n.jsx)(f.F, {
                              setting: G.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                              children: (0, n.jsx)(_.FormSwitch, {
                                  className: k.marginBottom40,
                                  value: t,
                                  disabled: i || t,
                                  note: 'Turns on the new notification system',
                                  onChange: () => (0, R.R)(!0),
                                  children: V.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
                              })
                          })
                        : null,
                  (0, n.jsxs)(f.F, {
                      setting: G.s6.NOTIFICATIONS_NEW_SETTINGS,
                      children: [
                          (0, n.jsx)(_.FormItem, {
                              title: 'New Notification Settings (Advanced, Staff Only)',
                              children: (0, n.jsxs)('div', {
                                  style: {
                                      display: 'flex',
                                      gap: 16
                                  },
                                  children: [
                                      (0, n.jsx)(f.F, {
                                          setting: G.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
                                          children: (0, n.jsx)(_.Button, {
                                              onClick: h.KP,
                                              children: 'Restore most recent snapshot'
                                          })
                                      }),
                                      (0, n.jsx)(f.F, {
                                          setting: G.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
                                          children: (0, n.jsx)(_.Button, {
                                              onClick: () => {
                                                  (0, R.R)(!0);
                                              },
                                              children: 'Launch Migration'
                                          })
                                      }),
                                      (0, n.jsx)(f.F, {
                                          setting: G.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM,
                                          children: (0, n.jsx)(_.FormSwitch, {
                                              hideBorder: !0,
                                              value: t,
                                              onChange: (e) => {
                                                  T.Z.setAccountFlag(y.c.USE_NEW_NOTIFICATIONS, e);
                                              },
                                              children: 'Toggle new system on/off'
                                          })
                                      })
                                  ]
                              })
                          }),
                          (0, n.jsx)(_.FormDivider, { className: r()(k.marginTop40, k.marginBottom40) })
                      ]
                  })
              ]
          })
        : null;
}
async function J(e) {
    e(!0);
    let s = await (0, h.Tn)();
    0 === s.length
        ? await (0, p.oL)()
        : u.Z.show({
              title: V.Z.Messages.CONFIRM,
              body: V.Z.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_BODY.format({ date: new Date(s[s.length - 1].recorded_at) }),
              cancelText: V.Z.Messages.CANCEL,
              confirmText: V.Z.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_ACTION,
              onConfirm: p.oL
          }),
        e(!1);
}
function $(e) {
    let s = (0, g.p)();
    return (0, n.jsx)(z, {
        ...e,
        focusMode: s
    });
}
function ee() {
    let e = (0, c.cj)([D.Z], () => ({
        disableUnreadBadge: D.Z.getDisableUnreadBadge(),
        taskbarFlash: D.Z.taskbarFlash,
        disabledSounds: D.Z.getDisabledSounds(),
        disableAllSounds: D.Z.getDisableAllSounds(),
        desktopType: D.Z.getDesktopType(),
        ttsType: D.Z.getTTSType(),
        notifyMessagesInSelectedChannel: D.Z.getNotifyMessagesInSelectedChannel()
    }));
    return (0, n.jsx)($, {
        ...e,
        afkTimeout: j.CM.useSetting()
    });
}
function es() {
    let e = j.fz.useSetting(),
        s = [
            {
                name: V.Z.Messages.REACTION_NOTIFICATIONS_ENABLED,
                value: d.Ns.NOTIFICATIONS_ENABLED
            },
            {
                name: V.Z.Messages.REACTION_NOTIFICATIONS_ONLY_DMS,
                value: d.Ns.ONLY_DMS
            },
            {
                name: V.Z.Messages.REACTION_NOTIFICATIONS_DISABLED,
                value: d.Ns.NOTIFICATIONS_DISABLED
            }
        ];
    return x.Z.getCurrentConfig({ location: 'webSettings' }).enableInAppNotifications
        ? (0, n.jsxs)(f.F, {
              setting: G.s6.NOTIFICATIONS_REACTIONS,
              children: [
                  (0, n.jsxs)(_.FormItem, {
                      title: V.Z.Messages.REACTION_NOTIFICATIONS,
                      children: [
                          (0, n.jsx)(_.FormText, {
                              type: _.FormTextTypes.DESCRIPTION,
                              className: k.marginBottom8,
                              children: V.Z.Messages.FORM_DESCRIPTION_REACTION_NOTIFICATIONS
                          }),
                          (0, n.jsx)(_.RadioGroup, {
                              options: s,
                              onChange: (s) => {
                                  (0, M.MR)(s.value, e);
                              },
                              value: e
                          })
                      ]
                  }),
                  (0, n.jsx)(_.FormDivider, { className: r()(k.marginTop40, k.marginBottom40) })
              ]
          })
        : null;
}
