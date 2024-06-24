t.d(s, {
  Z: function() {
    return ee
  }
}), t(653041), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(392711),
  o = t.n(r),
  c = t(442837),
  E = t(481060),
  d = t(668781),
  _ = t(292556),
  T = t(92114),
  S = t(419363),
  u = t(818083),
  I = t(688465),
  N = t(487419),
  A = t(378364),
  C = t(197344),
  O = t(734934),
  m = t(223683),
  h = t(312400),
  g = t(115345),
  R = t(392888),
  M = t(921801),
  x = t(657254),
  p = t(470647),
  D = t(292959),
  L = t(9156),
  P = t(626135),
  Z = t(912101),
  f = t(358085),
  j = t(709054),
  v = t(557177),
  U = t(695346),
  B = t(675478),
  b = t(33656),
  G = t(726985),
  F = t(981631),
  V = t(468788),
  y = t(689938),
  Y = t(135908),
  H = t(331651);

function k(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}

function w(e) {
  let {
    label: s,
    enabled: t,
    disabled: i,
    onPreview: a,
    onChange: l,
    tooltip: r
  } = e;
  return (0, n.jsx)(E.FormSwitch, {
    className: Y.soundRow,
    value: t,
    onChange: l,
    disabled: i,
    tooltipNote: r,
    children: (0, n.jsxs)("div", {
      className: Y.notificationSound,
      children: [(0, n.jsx)("div", {
        className: Y.soundName,
        children: s
      }), (0, n.jsx)(E.Clickable, {
        className: Y.soundIcon,
        onClick: a,
        "aria-label": y.Z.Messages.USER_SETTINGS_NOTIFICATIONS_PREVIEW_SOUND,
        children: (0, n.jsx)(E.VoiceNormalIcon, {
          size: "xs",
          color: "currentColor",
          className: Y.icon,
          "aria-hidden": !0
        })
      })]
    })
  })
}

function W(e) {
  let {
    disabledSounds: s,
    disableAllSounds: t,
    notifyMessagesInSelectedChannel: a
  } = e, {
    allowAprilFoolsSoundpack: r
  } = x.Z.useExperiment({
    location: "791c79_1"
  }, {
    autoTrackExposure: !1
  }), o = C.Z.useIsRingtoneEligible();
  i.useEffect(() => {
    x.Z.trackExposure({
      location: "791c79_3"
    })
  }, []);
  let c = i.useRef(),
    d = (0, O.p)(),
    T = i.useCallback((e, s) => {
      s.stopPropagation(), s.preventDefault(), null != c.current && c.current.stop(), c.current = v.GN(e)
    }, []),
    S = i.useCallback((e, t) => {
      let n = s.filter(s => s !== e);
      !t && n.push(e), e === A.Z.ringtone && P.default.track(F.rMx.EVENT_RINGTONE_TOGGLED, {
        toggled_on: t,
        sound_name: e
      }), _.default.setDisabledSounds(n)
    }, [s]);
  i.useEffect(() => () => {
    var e;
    null === (e = c.current) || void 0 === e || e.stop()
  });
  let u = [{
    label: y.Z.Messages.SOUND_MESSAGE,
    sound: "message1",
    focusModeDisabled: d
  }, {
    label: y.Z.Messages.SOUND_DEAFEN,
    sound: "deafen"
  }, {
    label: y.Z.Messages.SOUND_UNDEAFEN,
    sound: "undeafen"
  }, {
    label: y.Z.Messages.MUTE,
    sound: "mute"
  }, {
    label: y.Z.Messages.UNMUTE,
    sound: "unmute"
  }, {
    label: y.Z.Messages.SOUND_VOICE_DISCONNECTED,
    sound: "disconnect"
  }, {
    label: y.Z.Messages.SOUND_PTT_ACTIVATE,
    sound: "ptt_start"
  }, {
    label: y.Z.Messages.SOUND_PTT_DEACTIVATE,
    sound: "ptt_stop"
  }, {
    label: y.Z.Messages.SOUND_USER_JOIN,
    sound: "user_join"
  }, {
    label: y.Z.Messages.SOUND_USER_LEAVE,
    sound: "user_leave"
  }, {
    label: y.Z.Messages.SOUND_USER_MOVED,
    sound: "user_moved"
  }, {
    label: y.Z.Messages.SOUND_OUTGOING_RING,
    sound: "call_calling"
  }, {
    label: y.Z.Messages.SOUND_INCOMING_RING,
    sound: "call_ringing"
  }, ...o ? [{
    label: A.Z.getRingtoneSettingsLabel(),
    sound: A.Z.ringtone,
    disabled: s.includes("call_ringing")
  }] : [], {
    label: y.Z.Messages.SOUND_STREAM_STARTED,
    sound: "stream_started"
  }, {
    label: y.Z.Messages.SOUND_STREAM_STOPPED,
    sound: "stream_ended"
  }, {
    label: y.Z.Messages.SOUND_VIEWER_JOIN,
    sound: "stream_user_joined"
  }, {
    label: y.Z.Messages.SOUND_VIEWER_LEAVE,
    sound: "stream_user_left"
  }, {
    label: y.Z.Messages.SOUND_ACTIVITY_START,
    sound: "activity_launch"
  }, {
    label: y.Z.Messages.SOUND_ACTIVITY_END,
    sound: "activity_end"
  }, {
    label: y.Z.Messages.SOUND_ACTIVITY_USER_JOIN,
    sound: "activity_user_join"
  }, {
    label: y.Z.Messages.SOUND_ACTIVITY_USER_LEAVE,
    sound: "activity_user_left"
  }, {
    label: y.Z.Messages.SOUND_INVITED_TO_SPEAK,
    sound: "reconnect"
  }];
  return (0, n.jsx)(M.F, {
    setting: G.s6.NOTIFICATIONS_SOUNDS,
    children: (0, n.jsxs)(E.FormSection, {
      tag: E.FormTitleTags.H1,
      title: y.Z.Messages.SOUNDS,
      children: [r ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(E.FormTitle, {
          className: H.marginBottom20,
          children: y.Z.Messages.SOUNDPACK_LABEL
        }), (0, n.jsx)(p.Z, {
          className: l()(Y.soundpackSelect, H.marginBottom40)
        })]
      }) : null, (0, n.jsx)(E.FormSwitch, {
        note: y.Z.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_NOTE,
        value: a,
        onChange: _.default.setNotifyMessagesInSelectedChannel,
        children: y.Z.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_LABEL
      }), (0, n.jsx)(E.FormSwitch, {
        note: y.Z.Messages.SOUND_DISABLE_ALL_NOTE,
        value: t,
        onChange: _.default.toggleDisableAllSounds,
        children: y.Z.Messages.SOUND_DISABLE_ALL
      }), u.map(e => {
        let {
          label: i,
          sound: a,
          disabled: l,
          focusModeDisabled: r
        } = e;
        return (0, n.jsx)(w, {
          label: i,
          disabled: t || !0 === l || !0 === r,
          tooltip: r ? y.Z.Messages.QUIET_MODE_DISABLED_BY : void 0,
          onChange: e => S(a, e),
          onPreview: e => T(a, e),
          enabled: !t && !s.includes(a) && !0 !== r
        }, a)
      })]
    })
  })
}

function K() {
  let e = (0, c.e7)([N.Z], () => N.Z.getGuildAlertSettings()),
    [s, t] = i.useState(null),
    a = j.default.keys(e).map(s => {
      let t = e[s];
      return {
        label: t.guildName,
        value: t.guildId
      }
    });
  return 0 === Object.keys(e).length ? null : (0, n.jsxs)(M.F, {
    setting: G.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
    children: [(0, n.jsxs)(E.Heading, {
      variant: "heading-lg/semibold",
      className: l()(Y.titleWithBeta, H.marginBottom20),
      children: [y.Z.Messages.GUILD_COMMUNITY_ALERTS_HEADER, (0, n.jsx)(I.Z, {})]
    }), (0, n.jsx)(E.FormText, {
      type: E.FormTextTypes.DESCRIPTION,
      className: H.marginBottom20,
      children: y.Z.Messages.GUILD_COMMUNITY_ALERTS_DESCRIPTION
    }), (0, n.jsxs)(E.FormItem, {
      title: y.Z.Messages.GUILD_COMMUNITY_ALERTS_CHOOSE_SERVER,
      children: [(0, n.jsx)(E.SingleSelect, {
        className: null != s ? H.marginBottom20 : H.marginBottom40,
        value: s,
        onChange: e => {
          t(e)
        },
        options: a
      }), null != s ? (0, n.jsxs)("div", {
        className: H.marginTop20,
        children: [(0, n.jsxs)(M.F, {
          setting: G.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
          children: [(0, n.jsx)(E.FormSwitch, {
            className: l()(H.marginBottom20),
            note: y.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_DESCRIPTION,
            value: !e[s].disableRaidAlertNag,
            onChange: () => {
              (0, B.PS)(s, e => {
                e.disableRaidAlertNag = !e.disableRaidAlertNag
              }, B.fy.INFREQUENT_USER_ACTION)
            },
            hideBorder: !0,
            children: y.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER
          }), (0, n.jsx)(E.FormDivider, {
            className: l()(H.marginTop20, H.marginBottom40)
          })]
        }), (0, n.jsxs)(M.F, {
          setting: G.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
          children: [(0, n.jsx)(E.FormSwitch, {
            className: H.marginBottom20,
            note: y.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_DESCRIPTION,
            value: !e[s].disableRaidAlertPush,
            onChange: () => {
              (0, B.PS)(s, e => {
                e.disableRaidAlertPush = !e.disableRaidAlertPush
              }, B.fy.INFREQUENT_USER_ACTION)
            },
            hideBorder: !0,
            children: y.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER
          }), (0, n.jsx)(E.FormDivider, {
            className: l()(H.marginTop20, H.marginBottom40)
          })]
        })]
      }) : null, null != s ? null : (0, n.jsx)(E.FormDivider, {
        className: l()(H.marginTop20, H.marginBottom40)
      })]
    })]
  })
}
class z extends i.PureComponent {
  handleDesktopChange(e) {
    let s = e ? F.qrD.ALL : F.qrD.NEVER;
    if (s !== F.qrD.NEVER) {
      var t;
      t = "UserSettingsModal", Z.Z.requestPermission(e => {
        let s = e ? F.$Ab.ENABLED : F.$Ab.BLOCKED;
        _.default.setPermissionsState(s, t)
      })
    } else _.default.setDesktopType(s)
  }
  handleTTSChange(e) {
    let s = e.value;
    _.default.setTTSType(s)
  }
  render() {
    let {
      desktopType: e,
      afkTimeout: s,
      disableUnreadBadge: t,
      taskbarFlash: i,
      disabledSounds: a,
      disableAllSounds: r,
      notifyMessagesInSelectedChannel: c,
      focusMode: d
    } = this.props, _ = f.isPlatformEmbedded && (0, f.isWindows)(), T = o().range(1, 11).map(e => ({
      value: 60 * e,
      label: y.Z.Messages.DURATION_MINUTES.format({
        minutes: e
      })
    }));
    return (0, n.jsxs)(E.FormSection, {
      tag: E.FormTitleTags.H1,
      title: y.Z.Messages.NOTIFICATIONS,
      children: [(0, n.jsx)(M.F, {
        setting: G.s6.NOTIFICATIONS_ENABLE_DESKTOP,
        children: (0, n.jsx)(E.FormSwitch, {
          className: H.marginBottom20,
          value: e !== F.qrD.NEVER && !d,
          onChange: this.handleDesktopChange,
          note: y.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE_BODY,
          disabled: d,
          tooltipNote: d ? y.Z.Messages.QUIET_MODE_DISABLED_BY : void 0,
          children: y.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE
        })
      }), (0, n.jsx)(X, {}), (0, n.jsx)(M.F, {
        setting: G.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
        children: (0, n.jsx)(E.FormSwitch, {
          className: _ ? H.marginBottom20 : H.marginBottom40,
          value: !t,
          note: y.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_BODY,
          onChange: this.handleToggleShowUnreadBadge,
          children: y.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL
        })
      }), (0, n.jsx)(M.F, {
        setting: G.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
        children: (0, n.jsx)(E.FormSwitch, {
          className: H.marginBottom40,
          value: i,
          note: y.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_BODY,
          onChange: this.handleToggleShowFlash,
          children: y.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL
        })
      }), (0, n.jsx)(q, {}), (0, n.jsx)(M.F, {
        setting: G.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
        children: (0, n.jsxs)(E.FormItem, {
          title: y.Z.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT,
          children: [(0, n.jsx)(E.SingleSelect, {
            value: s,
            onChange: U.CM.updateSetting,
            options: T
          }), (0, n.jsx)(E.FormText, {
            type: E.FormTextTypes.DESCRIPTION,
            className: H.marginTop8,
            children: y.Z.Messages.FORM_DESCRIPTION_PUSH_AFK_TIMEOUT
          }), (0, n.jsx)(E.FormDivider, {
            className: l()(H.marginTop40, H.marginBottom40)
          })]
        })
      }), this.renderTTS(), (0, n.jsx)(K, {}), (0, n.jsx)(E.FormItem, {
        children: (0, n.jsx)(W, {
          disabledSounds: a,
          disableAllSounds: r,
          notifyMessagesInSelectedChannel: c
        })
      }), (0, n.jsx)(b.Z, {})]
    })
  }
  constructor(...e) {
    super(...e), k(this, "handleToggleShowUnreadBadge", () => {
      _.default.setDisableUnreadBadge(!this.props.disableUnreadBadge)
    }), k(this, "handleToggleShowFlash", () => {
      _.default.setTaskbarFlash(!this.props.taskbarFlash)
    }), k(this, "renderTTS", () => {
      if (!S.Zh) return null;
      let e = [{
        name: y.Z.Messages.TTS_ALLS,
        value: F.PrB.ALL_CHANNELS
      }, {
        name: y.Z.Messages.TTS_CURRENT,
        value: F.PrB.SELECTED_CHANNEL
      }, {
        name: y.Z.Messages.TTS_NEVER,
        value: F.PrB.NEVER
      }];
      return (0, n.jsxs)(M.F, {
        setting: G.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
        children: [(0, n.jsxs)(E.FormItem, {
          title: y.Z.Messages.FORM_LABEL_TTS_NOTIFICATIONS,
          children: [(0, n.jsx)(E.FormText, {
            type: E.FormTextTypes.DESCRIPTION,
            className: H.marginBottom8,
            children: y.Z.Messages.FORM_DESCRIPTION_TTS
          }), (0, n.jsx)(E.RadioGroup, {
            options: e,
            onChange: this.handleTTSChange,
            value: this.props.ttsType
          })]
        }), (0, n.jsx)(E.FormDivider, {
          className: l()(H.marginTop40, H.marginBottom40)
        })]
      })
    })
  }
}
let Q = (0, u.B)({
  kind: "user",
  id: "2024-01_mention_on_all_messages",
  label: "Mention on all messages",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Increment mention count when receiving a message in a channel set to all messages",
    config: {
      enabled: !0
    }
  }]
});

function X() {
  let e = Q.useExperiment({
      location: "settings"
    }, {
      autoTrackExposure: !1
    }).enabled,
    s = (0, c.e7)([L.ZP], () => L.ZP.mentionOnAllMessages);
  return e ? (0, n.jsx)(M.F, {
    setting: G.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
    children: (0, n.jsx)(E.FormSwitch, {
      className: H.marginBottom20,
      value: s,
      onChange: e => {
        T.Z.setAccountFlag(V.c.MENTION_ON_ALL_MESSAGES, e)
      },
      note: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
      children: "Mention on all messages?"
    })
  }) : null
}

function q() {
  let e = h.xT.useExperiment({
      location: "UserSettingsNotifications"
    }, {
      autoTrackExposure: !1
    }).enabled,
    {
      manuallyOpen: s
    } = h.fs.useExperiment({
      location: "UserSettingsNotifications"
    }, {
      autoTrackExposure: !1
    }),
    t = (0, c.e7)([L.ZP], () => L.ZP.useNewNotifications),
    [a, r] = i.useState(!1);
  return e && (t || s) ? (0, n.jsxs)(n.Fragment, {
    children: [t ? (0, n.jsx)(M.F, {
      setting: G.s6.NOTIFICATIONS_UNREAD_SETTINGS,
      children: (0, n.jsx)(E.FormSwitch, {
        className: H.marginBottom40,
        style: {
          marginTop: -20
        },
        value: t,
        disabled: a || !t,
        note: y.Z.Messages.NOTIF_MIGRATION_SETTINGS_SUBTITLE,
        onChange: () => J(r),
        children: y.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
      })
    }) : s ? (0, n.jsx)(M.F, {
      setting: G.s6.NOTIFICATIONS_UNREAD_SETTINGS,
      children: (0, n.jsx)(E.FormSwitch, {
        className: H.marginBottom40,
        value: t,
        disabled: a || t,
        note: "Turns on the new notification system",
        onChange: () => (0, R.R)(!0),
        children: y.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
      })
    }) : null, (0, n.jsxs)(M.F, {
      setting: G.s6.NOTIFICATIONS_NEW_SETTINGS,
      children: [(0, n.jsx)(E.FormItem, {
        title: "New Notification Settings (Advanced, Staff Only)",
        children: (0, n.jsxs)("div", {
          style: {
            display: "flex",
            gap: 16
          },
          children: [(0, n.jsx)(M.F, {
            setting: G.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
            children: (0, n.jsx)(E.Button, {
              onClick: m.KP,
              children: "Restore most recent snapshot"
            })
          }), (0, n.jsx)(M.F, {
            setting: G.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
            children: (0, n.jsx)(E.Button, {
              onClick: () => {
                (0, R.R)(!0)
              },
              children: "Launch Migration"
            })
          }), (0, n.jsx)(M.F, {
            setting: G.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM,
            children: (0, n.jsx)(E.FormSwitch, {
              hideBorder: !0,
              value: t,
              onChange: e => {
                T.Z.setAccountFlag(V.c.USE_NEW_NOTIFICATIONS, e)
              },
              children: "Toggle new system on/off"
            })
          })]
        })
      }), (0, n.jsx)(E.FormDivider, {
        className: l()(H.marginTop40, H.marginBottom40)
      })]
    })]
  }) : null
}
async function J(e) {
  e(!0);
  let s = await (0, m.Tn)();
  0 === s.length ? await (0, g.oL)() : d.Z.show({
    title: y.Z.Messages.CONFIRM,
    body: y.Z.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_BODY.format({
      date: new Date(s[s.length - 1].recorded_at)
    }),
    cancelText: y.Z.Messages.CANCEL,
    confirmText: y.Z.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_ACTION,
    onConfirm: g.oL
  }), e(!1)
}

function $(e) {
  let s = (0, O.p)();
  return (0, n.jsx)(z, {
    ...e,
    focusMode: s
  })
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
    afkTimeout: U.CM.useSetting()
  })
}