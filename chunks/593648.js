t.d(s, {
    Z: function () {
        return en;
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
    T = t(92114),
    S = t(419363),
    I = t(818083),
    N = t(688465),
    m = t(487419),
    A = t(378364),
    C = t(197344),
    g = t(734934),
    h = t(223683),
    O = t(312400),
    p = t(115345),
    R = t(392888),
    x = t(106371),
    f = t(995774),
    M = t(921801),
    D = t(657254),
    P = t(470647),
    L = t(292959),
    b = t(9156),
    Z = t(626135),
    v = t(912101),
    j = t(358085),
    B = t(709054),
    U = t(557177),
    G = t(695346),
    F = t(675478),
    y = t(33656),
    V = t(726985),
    Y = t(981631),
    w = t(468788),
    k = t(689938),
    H = t(769533),
    W = t(113207);
function K(e, s, t) {
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
function z(e) {
    let { label: s, enabled: t, disabled: a, onPreview: i, onChange: r, tooltip: o } = e;
    return (0, n.jsx)(_.FormSwitch, {
        className: H.soundRow,
        value: t,
        onChange: r,
        disabled: a,
        tooltipNote: o,
        children: (0, n.jsxs)('div', {
            className: H.notificationSound,
            children: [
                (0, n.jsx)('div', {
                    className: H.soundName,
                    children: s
                }),
                (0, n.jsx)(_.Clickable, {
                    className: H.soundIcon,
                    onClick: i,
                    'aria-label': k.Z.Messages.USER_SETTINGS_NOTIFICATIONS_PREVIEW_SOUND,
                    children: (0, n.jsx)(_.VoiceNormalIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: H.icon,
                        'aria-hidden': !0
                    })
                })
            ]
        })
    });
}
function Q(e) {
    let { disabledSounds: s, disableAllSounds: t, notifyMessagesInSelectedChannel: i } = e,
        { allowAprilFoolsSoundpack: o } = D.Z.useExperiment({ location: '791c79_1' }, { autoTrackExposure: !1 }),
        l = C.Z.useIsRingtoneEligible();
    a.useEffect(() => {
        D.Z.trackExposure({ location: '791c79_3' });
    }, []);
    let c = a.useRef(),
        d = (0, g.p)(),
        u = a.useCallback((e, s) => {
            s.stopPropagation(), s.preventDefault(), null != c.current && c.current.stop(), (c.current = U.GN(e));
        }, []),
        T = a.useCallback(
            (e, t) => {
                let n = s.filter((s) => s !== e);
                !t && n.push(e),
                    e === A.Z.ringtone &&
                        Z.default.track(Y.rMx.EVENT_RINGTONE_TOGGLED, {
                            toggled_on: t,
                            sound_name: e
                        }),
                    E.default.setDisabledSounds(n);
            },
            [s]
        );
    a.useEffect(() => () => {
        var e;
        null === (e = c.current) || void 0 === e || e.stop();
    });
    let S = [
        {
            label: k.Z.Messages.SOUND_MESSAGE,
            sound: 'message1',
            focusModeDisabled: d
        },
        {
            label: k.Z.Messages.SOUND_DEAFEN,
            sound: 'deafen'
        },
        {
            label: k.Z.Messages.SOUND_UNDEAFEN,
            sound: 'undeafen'
        },
        {
            label: k.Z.Messages.MUTE,
            sound: 'mute'
        },
        {
            label: k.Z.Messages.UNMUTE,
            sound: 'unmute'
        },
        {
            label: k.Z.Messages.SOUND_VOICE_DISCONNECTED,
            sound: 'disconnect'
        },
        {
            label: k.Z.Messages.SOUND_PTT_ACTIVATE,
            sound: 'ptt_start'
        },
        {
            label: k.Z.Messages.SOUND_PTT_DEACTIVATE,
            sound: 'ptt_stop'
        },
        {
            label: k.Z.Messages.SOUND_USER_JOIN,
            sound: 'user_join'
        },
        {
            label: k.Z.Messages.SOUND_USER_LEAVE,
            sound: 'user_leave'
        },
        {
            label: k.Z.Messages.SOUND_USER_MOVED,
            sound: 'user_moved'
        },
        {
            label: k.Z.Messages.SOUND_OUTGOING_RING,
            sound: 'call_calling'
        },
        {
            label: k.Z.Messages.SOUND_INCOMING_RING,
            sound: 'call_ringing'
        },
        ...(l
            ? [
                  {
                      label: A.Z.getRingtoneSettingsLabel(),
                      sound: A.Z.ringtone,
                      disabled: s.includes('call_ringing')
                  }
              ]
            : []),
        {
            label: k.Z.Messages.SOUND_STREAM_STARTED,
            sound: 'stream_started'
        },
        {
            label: k.Z.Messages.SOUND_STREAM_STOPPED,
            sound: 'stream_ended'
        },
        {
            label: k.Z.Messages.SOUND_VIEWER_JOIN,
            sound: 'stream_user_joined'
        },
        {
            label: k.Z.Messages.SOUND_VIEWER_LEAVE,
            sound: 'stream_user_left'
        },
        {
            label: k.Z.Messages.SOUND_ACTIVITY_START,
            sound: 'activity_launch'
        },
        {
            label: k.Z.Messages.SOUND_ACTIVITY_END,
            sound: 'activity_end'
        },
        {
            label: k.Z.Messages.SOUND_ACTIVITY_USER_JOIN,
            sound: 'activity_user_join'
        },
        {
            label: k.Z.Messages.SOUND_ACTIVITY_USER_LEAVE,
            sound: 'activity_user_left'
        },
        {
            label: k.Z.Messages.SOUND_INVITED_TO_SPEAK,
            sound: 'reconnect'
        }
    ];
    return (0, n.jsx)(M.F, {
        setting: V.s6.NOTIFICATIONS_SOUNDS,
        children: (0, n.jsxs)(_.FormSection, {
            tag: _.FormTitleTags.H1,
            title: k.Z.Messages.SOUNDS,
            children: [
                o
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(_.FormTitle, {
                                  className: W.marginBottom20,
                                  children: k.Z.Messages.SOUNDPACK_LABEL
                              }),
                              (0, n.jsx)(P.Z, { className: r()(H.soundpackSelect, W.marginBottom40) })
                          ]
                      })
                    : null,
                (0, n.jsx)(_.FormSwitch, {
                    note: k.Z.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_NOTE,
                    value: i,
                    onChange: E.default.setNotifyMessagesInSelectedChannel,
                    children: k.Z.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_LABEL
                }),
                (0, n.jsx)(_.FormSwitch, {
                    note: k.Z.Messages.SOUND_DISABLE_ALL_NOTE,
                    value: t,
                    onChange: E.default.toggleDisableAllSounds,
                    children: k.Z.Messages.SOUND_DISABLE_ALL
                }),
                S.map((e) => {
                    let { label: a, sound: i, disabled: r, focusModeDisabled: o } = e;
                    return (0, n.jsx)(
                        z,
                        {
                            label: a,
                            disabled: t || !0 === r || !0 === o,
                            tooltip: o ? k.Z.Messages.QUIET_MODE_DISABLED_BY : void 0,
                            onChange: (e) => T(i, e),
                            onPreview: (e) => u(i, e),
                            enabled: !t && !s.includes(i) && !0 !== o
                        },
                        i
                    );
                })
            ]
        })
    });
}
function X() {
    let e = (0, c.e7)([m.Z], () => m.Z.getGuildAlertSettings()),
        [s, t] = a.useState(null),
        i = B.default.keys(e).map((s) => {
            let t = e[s];
            return {
                label: t.guildName,
                value: t.guildId
            };
        });
    return 0 === Object.keys(e).length
        ? null
        : (0, n.jsxs)(M.F, {
              setting: V.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: [
                  (0, n.jsxs)(_.Heading, {
                      variant: 'heading-lg/semibold',
                      className: r()(H.titleWithBeta, W.marginBottom20),
                      children: [k.Z.Messages.GUILD_COMMUNITY_ALERTS_HEADER, (0, n.jsx)(N.Z, {})]
                  }),
                  (0, n.jsx)(_.FormText, {
                      type: _.FormTextTypes.DESCRIPTION,
                      className: W.marginBottom20,
                      children: k.Z.Messages.GUILD_COMMUNITY_ALERTS_DESCRIPTION
                  }),
                  (0, n.jsxs)(_.FormItem, {
                      title: k.Z.Messages.GUILD_COMMUNITY_ALERTS_CHOOSE_SERVER,
                      children: [
                          (0, n.jsx)(_.SingleSelect, {
                              className: null != s ? W.marginBottom20 : W.marginBottom40,
                              value: s,
                              onChange: (e) => {
                                  t(e);
                              },
                              options: i
                          }),
                          null != s
                              ? (0, n.jsxs)('div', {
                                    className: W.marginTop20,
                                    children: [
                                        (0, n.jsxs)(M.F, {
                                            setting: V.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                            children: [
                                                (0, n.jsx)(_.FormSwitch, {
                                                    className: r()(W.marginBottom20),
                                                    note: k.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_DESCRIPTION,
                                                    value: !e[s].disableRaidAlertNag,
                                                    onChange: () => {
                                                        (0, F.PS)(
                                                            s,
                                                            (e) => {
                                                                e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                            },
                                                            F.fy.INFREQUENT_USER_ACTION
                                                        );
                                                    },
                                                    hideBorder: !0,
                                                    children: k.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER
                                                }),
                                                (0, n.jsx)(_.FormDivider, { className: r()(W.marginTop20, W.marginBottom40) })
                                            ]
                                        }),
                                        (0, n.jsxs)(M.F, {
                                            setting: V.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                            children: [
                                                (0, n.jsx)(_.FormSwitch, {
                                                    className: W.marginBottom20,
                                                    note: k.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_DESCRIPTION,
                                                    value: !e[s].disableRaidAlertPush,
                                                    onChange: () => {
                                                        (0, F.PS)(
                                                            s,
                                                            (e) => {
                                                                e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                            },
                                                            F.fy.INFREQUENT_USER_ACTION
                                                        );
                                                    },
                                                    hideBorder: !0,
                                                    children: k.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER
                                                }),
                                                (0, n.jsx)(_.FormDivider, { className: r()(W.marginTop20, W.marginBottom40) })
                                            ]
                                        })
                                    ]
                                })
                              : null,
                          null != s ? null : (0, n.jsx)(_.FormDivider, { className: r()(W.marginTop20, W.marginBottom40) })
                      ]
                  })
              ]
          });
}
class q extends a.PureComponent {
    handleDesktopChange(e) {
        let s = e ? Y.qrD.ALL : Y.qrD.NEVER;
        if (s !== Y.qrD.NEVER) {
            var t;
            (t = 'UserSettingsModal'),
                v.Z.requestPermission((e) => {
                    let s = e ? Y.$Ab.ENABLED : Y.$Ab.BLOCKED;
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
            u = j.isPlatformEmbedded && (0, j.isWindows)(),
            E = l()
                .range(1, 11)
                .map((e) => ({
                    value: 60 * e,
                    label: k.Z.Messages.DURATION_MINUTES.format({ minutes: e })
                }));
        return (0, n.jsxs)(_.FormSection, {
            tag: _.FormTitleTags.H1,
            title: k.Z.Messages.NOTIFICATIONS,
            children: [
                (0, n.jsx)(M.F, {
                    setting: V.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                    children: (0, n.jsx)(_.FormSwitch, {
                        className: W.marginBottom20,
                        value: e !== Y.qrD.NEVER && !d,
                        onChange: this.handleDesktopChange,
                        note: k.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE_BODY,
                        disabled: d,
                        tooltipNote: d ? k.Z.Messages.QUIET_MODE_DISABLED_BY : void 0,
                        children: k.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE
                    })
                }),
                (0, n.jsx)($, {}),
                (0, n.jsx)(M.F, {
                    setting: V.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                    children: (0, n.jsx)(_.FormSwitch, {
                        className: u ? W.marginBottom20 : W.marginBottom40,
                        value: !t,
                        note: k.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_BODY,
                        onChange: this.handleToggleShowUnreadBadge,
                        children: k.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL
                    })
                }),
                (0, n.jsx)(M.F, {
                    setting: V.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                    children: (0, n.jsx)(_.FormSwitch, {
                        className: W.marginBottom40,
                        value: a,
                        note: k.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_BODY,
                        onChange: this.handleToggleShowFlash,
                        children: k.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL
                    })
                }),
                (0, n.jsx)(ee, {}),
                (0, n.jsx)(ea, {}),
                (0, n.jsx)(M.F, {
                    setting: V.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                    children: (0, n.jsxs)(_.FormItem, {
                        title: k.Z.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT,
                        children: [
                            (0, n.jsx)(_.SingleSelect, {
                                value: s,
                                onChange: G.CM.updateSetting,
                                options: E
                            }),
                            (0, n.jsx)(_.FormText, {
                                type: _.FormTextTypes.DESCRIPTION,
                                className: W.marginTop8,
                                children: k.Z.Messages.FORM_DESCRIPTION_PUSH_AFK_TIMEOUT
                            }),
                            (0, n.jsx)(_.FormDivider, { className: r()(W.marginTop40, W.marginBottom40) })
                        ]
                    })
                }),
                this.renderTTS(),
                (0, n.jsx)(X, {}),
                (0, n.jsx)(_.FormItem, {
                    children: (0, n.jsx)(Q, {
                        disabledSounds: i,
                        disableAllSounds: o,
                        notifyMessagesInSelectedChannel: c
                    })
                }),
                (0, n.jsx)(y.Z, {})
            ]
        });
    }
    constructor(...e) {
        super(...e),
            K(this, 'handleToggleShowUnreadBadge', () => {
                E.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            K(this, 'handleToggleShowFlash', () => {
                E.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            K(this, 'renderTTS', () => {
                if (!S.Zh) return null;
                let e = [
                    {
                        name: k.Z.Messages.TTS_ALLS,
                        value: Y.PrB.ALL_CHANNELS
                    },
                    {
                        name: k.Z.Messages.TTS_CURRENT,
                        value: Y.PrB.SELECTED_CHANNEL
                    },
                    {
                        name: k.Z.Messages.TTS_NEVER,
                        value: Y.PrB.NEVER
                    }
                ];
                return (0, n.jsxs)(M.F, {
                    setting: V.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, n.jsxs)(_.FormItem, {
                            title: k.Z.Messages.FORM_LABEL_TTS_NOTIFICATIONS,
                            children: [
                                (0, n.jsx)(_.FormText, {
                                    type: _.FormTextTypes.DESCRIPTION,
                                    className: W.marginBottom8,
                                    children: k.Z.Messages.FORM_DESCRIPTION_TTS
                                }),
                                (0, n.jsx)(_.RadioGroup, {
                                    options: e,
                                    onChange: this.handleTTSChange,
                                    value: this.props.ttsType
                                })
                            ]
                        }),
                        (0, n.jsx)(_.FormDivider, { className: r()(W.marginTop40, W.marginBottom40) })
                    ]
                });
            });
    }
}
let J = (0, I.B)({
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
function $() {
    let e = J.useExperiment({ location: 'settings' }, { autoTrackExposure: !1 }).enabled,
        s = (0, c.e7)([b.ZP], () => b.ZP.mentionOnAllMessages);
    return e
        ? (0, n.jsx)(M.F, {
              setting: V.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, n.jsx)(_.FormSwitch, {
                  className: W.marginBottom20,
                  value: s,
                  onChange: (e) => {
                      T.Z.setAccountFlag(w.c.MENTION_ON_ALL_MESSAGES, e);
                  },
                  note: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  children: 'Mention on all messages?'
              })
          })
        : null;
}
function ee() {
    let e = O.xT.useExperiment({ location: 'UserSettingsNotifications' }, { autoTrackExposure: !1 }).enabled,
        { manuallyOpen: s } = O.fs.useExperiment({ location: 'UserSettingsNotifications' }, { autoTrackExposure: !1 }),
        t = (0, c.e7)([b.ZP], () => b.ZP.useNewNotifications),
        [i, o] = a.useState(!1);
    return e && (t || s)
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  t
                      ? (0, n.jsx)(M.F, {
                            setting: V.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                            children: (0, n.jsx)(_.FormSwitch, {
                                className: W.marginBottom40,
                                style: { marginTop: -20 },
                                value: t,
                                disabled: i || !t,
                                note: k.Z.Messages.NOTIF_MIGRATION_SETTINGS_SUBTITLE,
                                onChange: () => es(o),
                                children: k.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
                            })
                        })
                      : s
                        ? (0, n.jsx)(M.F, {
                              setting: V.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                              children: (0, n.jsx)(_.FormSwitch, {
                                  className: W.marginBottom40,
                                  value: t,
                                  disabled: i || t,
                                  note: 'Turns on the new notification system',
                                  onChange: () => (0, R.R)(!0),
                                  children: k.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
                              })
                          })
                        : null,
                  (0, n.jsxs)(M.F, {
                      setting: V.s6.NOTIFICATIONS_NEW_SETTINGS,
                      children: [
                          (0, n.jsx)(_.FormItem, {
                              title: 'New Notification Settings (Advanced, Staff Only)',
                              children: (0, n.jsxs)('div', {
                                  style: {
                                      display: 'flex',
                                      gap: 16
                                  },
                                  children: [
                                      (0, n.jsx)(M.F, {
                                          setting: V.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
                                          children: (0, n.jsx)(_.Button, {
                                              onClick: h.KP,
                                              children: 'Restore most recent snapshot'
                                          })
                                      }),
                                      (0, n.jsx)(M.F, {
                                          setting: V.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
                                          children: (0, n.jsx)(_.Button, {
                                              onClick: () => {
                                                  (0, R.R)(!0);
                                              },
                                              children: 'Launch Migration'
                                          })
                                      }),
                                      (0, n.jsx)(M.F, {
                                          setting: V.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM,
                                          children: (0, n.jsx)(_.FormSwitch, {
                                              hideBorder: !0,
                                              value: t,
                                              onChange: (e) => {
                                                  T.Z.setAccountFlag(w.c.USE_NEW_NOTIFICATIONS, e);
                                              },
                                              children: 'Toggle new system on/off'
                                          })
                                      })
                                  ]
                              })
                          }),
                          (0, n.jsx)(_.FormDivider, { className: r()(W.marginTop40, W.marginBottom40) })
                      ]
                  })
              ]
          })
        : null;
}
async function es(e) {
    e(!0);
    let s = await (0, h.Tn)();
    0 === s.length
        ? await (0, p.oL)()
        : u.Z.show({
              title: k.Z.Messages.CONFIRM,
              body: k.Z.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_BODY.format({ date: new Date(s[s.length - 1].recorded_at) }),
              cancelText: k.Z.Messages.CANCEL,
              confirmText: k.Z.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_ACTION,
              onConfirm: p.oL
          }),
        e(!1);
}
function et(e) {
    let s = (0, g.p)();
    return (0, n.jsx)(q, {
        ...e,
        focusMode: s
    });
}
function en() {
    let e = (0, c.cj)([L.Z], () => ({
        disableUnreadBadge: L.Z.getDisableUnreadBadge(),
        taskbarFlash: L.Z.taskbarFlash,
        disabledSounds: L.Z.getDisabledSounds(),
        disableAllSounds: L.Z.getDisableAllSounds(),
        desktopType: L.Z.getDesktopType(),
        ttsType: L.Z.getTTSType(),
        notifyMessagesInSelectedChannel: L.Z.getNotifyMessagesInSelectedChannel()
    }));
    return (0, n.jsx)(et, {
        ...e,
        afkTimeout: G.CM.useSetting()
    });
}
function ea() {
    let e = G.fz.useSetting(),
        s = [
            {
                name: k.Z.Messages.REACTION_NOTIFICATIONS_ENABLED,
                value: d.Ns.NOTIFICATIONS_ENABLED
            },
            {
                name: k.Z.Messages.REACTION_NOTIFICATIONS_ONLY_DMS,
                value: d.Ns.ONLY_DMS
            },
            {
                name: k.Z.Messages.REACTION_NOTIFICATIONS_DISABLED,
                value: d.Ns.NOTIFICATIONS_DISABLED
            }
        ];
    return x.Z.getCurrentConfig({ location: 'webSettings' }).enableInAppNotifications
        ? (0, n.jsxs)(M.F, {
              setting: V.s6.NOTIFICATIONS_REACTIONS,
              children: [
                  (0, n.jsxs)(_.FormItem, {
                      title: k.Z.Messages.REACTION_NOTIFICATIONS,
                      children: [
                          (0, n.jsx)(_.FormText, {
                              type: _.FormTextTypes.DESCRIPTION,
                              className: W.marginBottom8,
                              children: k.Z.Messages.FORM_DESCRIPTION_REACTION_NOTIFICATIONS
                          }),
                          (0, n.jsx)(_.RadioGroup, {
                              options: s,
                              onChange: (s) => {
                                  (0, f.MR)(s.value, e);
                              },
                              value: e
                          })
                      ]
                  }),
                  (0, n.jsx)(_.FormDivider, { className: r()(W.marginTop40, W.marginBottom40) })
              ]
          })
        : null;
}
