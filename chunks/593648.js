"use strict";
s.r(t), s.d(t, {
  default: function() {
    return et
  }
}), s("653041"), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("392711"),
  o = s.n(r),
  d = s("442837"),
  u = s("481060"),
  c = s("668781"),
  S = s("292556"),
  E = s("92114"),
  T = s("419363"),
  _ = s("818083"),
  f = s("688465"),
  I = s("487419"),
  m = s("378364"),
  N = s("197344"),
  g = s("734934"),
  h = s("223683"),
  C = s("312400"),
  A = s("115345"),
  O = s("392888"),
  p = s("921801"),
  R = s("657254"),
  x = s("470647"),
  M = s("292959"),
  L = s("9156"),
  D = s("632184"),
  v = s("626135"),
  P = s("912101"),
  b = s("358085"),
  U = s("709054"),
  j = s("557177"),
  F = s("695346"),
  G = s("675478"),
  y = s("33656"),
  B = s("726985"),
  k = s("981631"),
  H = s("468788"),
  w = s("689938"),
  V = s("153764"),
  Y = s("611273");

function W(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function K(e) {
  let {
    label: t,
    enabled: s,
    disabled: n,
    onPreview: l,
    onChange: i,
    tooltip: r
  } = e;
  return (0, a.jsx)(u.FormSwitch, {
    className: V.soundRow,
    value: s,
    onChange: i,
    disabled: n,
    tooltipNote: r,
    children: (0, a.jsxs)("div", {
      className: V.notificationSound,
      children: [(0, a.jsx)("div", {
        className: V.soundName,
        children: t
      }), (0, a.jsx)(u.Clickable, {
        className: V.soundIcon,
        onClick: l,
        "aria-label": w.default.Messages.USER_SETTINGS_NOTIFICATIONS_PREVIEW_SOUND,
        children: (0, a.jsx)(D.default, {
          width: 16,
          height: 16,
          className: V.icon,
          "aria-hidden": !0
        })
      })]
    })
  })
}

function z(e) {
  let {
    disabledSounds: t,
    disableAllSounds: s,
    notifyMessagesInSelectedChannel: l
  } = e, {
    allowAprilFoolsSoundpack: r
  } = R.default.useExperiment({
    location: "791c79_1"
  }, {
    autoTrackExposure: !1
  }), o = N.default.useIsRingtoneEligible();
  n.useEffect(() => {
    R.default.trackExposure({
      location: "791c79_3"
    })
  }, []);
  let d = n.useRef(),
    c = (0, g.useFocusModeEnabled)(),
    E = n.useCallback((e, t) => {
      t.stopPropagation(), t.preventDefault(), null != d.current && d.current.stop(), d.current = j.playSound(e)
    }, []),
    T = n.useCallback((e, s) => {
      let a = t.filter(t => t !== e);
      !s && a.push(e), e === m.default.ringtone && v.default.track(k.AnalyticEvents.EVENT_RINGTONE_TOGGLED, {
        toggled_on: s,
        sound_name: e
      }), S.default.setDisabledSounds(a)
    }, [t]);
  n.useEffect(() => () => {
    var e;
    null === (e = d.current) || void 0 === e || e.stop()
  });
  let _ = [{
    label: w.default.Messages.SOUND_MESSAGE,
    sound: "message1",
    focusModeDisabled: c
  }, {
    label: w.default.Messages.SOUND_DEAFEN,
    sound: "deafen"
  }, {
    label: w.default.Messages.SOUND_UNDEAFEN,
    sound: "undeafen"
  }, {
    label: w.default.Messages.MUTE,
    sound: "mute"
  }, {
    label: w.default.Messages.UNMUTE,
    sound: "unmute"
  }, {
    label: w.default.Messages.SOUND_VOICE_DISCONNECTED,
    sound: "disconnect"
  }, {
    label: w.default.Messages.SOUND_PTT_ACTIVATE,
    sound: "ptt_start"
  }, {
    label: w.default.Messages.SOUND_PTT_DEACTIVATE,
    sound: "ptt_stop"
  }, {
    label: w.default.Messages.SOUND_USER_JOIN,
    sound: "user_join"
  }, {
    label: w.default.Messages.SOUND_USER_LEAVE,
    sound: "user_leave"
  }, {
    label: w.default.Messages.SOUND_USER_MOVED,
    sound: "user_moved"
  }, {
    label: w.default.Messages.SOUND_OUTGOING_RING,
    sound: "call_calling"
  }, {
    label: w.default.Messages.SOUND_INCOMING_RING,
    sound: "call_ringing"
  }, ...o ? [{
    label: m.default.getRingtoneSettingsLabel(),
    sound: m.default.ringtone,
    disabled: t.includes("call_ringing")
  }] : [], {
    label: w.default.Messages.SOUND_STREAM_STARTED,
    sound: "stream_started"
  }, {
    label: w.default.Messages.SOUND_STREAM_STOPPED,
    sound: "stream_ended"
  }, {
    label: w.default.Messages.SOUND_VIEWER_JOIN,
    sound: "stream_user_joined"
  }, {
    label: w.default.Messages.SOUND_VIEWER_LEAVE,
    sound: "stream_user_left"
  }, {
    label: w.default.Messages.SOUND_ACTIVITY_START,
    sound: "activity_launch"
  }, {
    label: w.default.Messages.SOUND_ACTIVITY_END,
    sound: "activity_end"
  }, {
    label: w.default.Messages.SOUND_ACTIVITY_USER_JOIN,
    sound: "activity_user_join"
  }, {
    label: w.default.Messages.SOUND_ACTIVITY_USER_LEAVE,
    sound: "activity_user_left"
  }, {
    label: w.default.Messages.SOUND_INVITED_TO_SPEAK,
    sound: "reconnect"
  }];
  return (0, a.jsx)(p.Subsetting, {
    setting: B.WebSetting.NOTIFICATIONS_SOUNDS,
    children: (0, a.jsxs)(u.FormSection, {
      tag: u.FormTitleTags.H1,
      title: w.default.Messages.SOUNDS,
      children: [r ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.FormTitle, {
          className: Y.marginBottom20,
          children: w.default.Messages.SOUNDPACK_LABEL
        }), (0, a.jsx)(x.default, {
          className: i()(V.soundpackSelect, Y.marginBottom40)
        })]
      }) : null, (0, a.jsx)(u.FormSwitch, {
        note: w.default.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_NOTE,
        value: l,
        onChange: S.default.setNotifyMessagesInSelectedChannel,
        children: w.default.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_LABEL
      }), (0, a.jsx)(u.FormSwitch, {
        note: w.default.Messages.SOUND_DISABLE_ALL_NOTE,
        value: s,
        onChange: S.default.toggleDisableAllSounds,
        children: w.default.Messages.SOUND_DISABLE_ALL
      }), _.map(e => {
        let {
          label: n,
          sound: l,
          disabled: i,
          focusModeDisabled: r
        } = e;
        return (0, a.jsx)(K, {
          label: n,
          disabled: s || !0 === i || !0 === r,
          tooltip: r ? w.default.Messages.QUIET_MODE_DISABLED_BY : void 0,
          onChange: e => T(l, e),
          onPreview: e => E(l, e),
          enabled: !s && !t.includes(l) && !0 !== r
        }, l)
      })]
    })
  })
}

function Q() {
  let e = (0, d.useStateFromStores)([I.default], () => I.default.getGuildAlertSettings()),
    [t, s] = n.useState(null),
    l = U.default.keys(e).map(t => {
      let s = e[t];
      return {
        label: s.guildName,
        value: s.guildId
      }
    });
  return 0 === Object.keys(e).length ? null : (0, a.jsxs)(p.Subsetting, {
    setting: B.WebSetting.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
    children: [(0, a.jsxs)(u.Heading, {
      variant: "heading-lg/semibold",
      className: i()(V.titleWithBeta, Y.marginBottom20),
      children: [w.default.Messages.GUILD_COMMUNITY_ALERTS_HEADER, (0, a.jsx)(f.default, {})]
    }), (0, a.jsx)(u.FormText, {
      type: u.FormTextTypes.DESCRIPTION,
      className: Y.marginBottom20,
      children: w.default.Messages.GUILD_COMMUNITY_ALERTS_DESCRIPTION
    }), (0, a.jsxs)(u.FormItem, {
      title: w.default.Messages.GUILD_COMMUNITY_ALERTS_CHOOSE_SERVER,
      children: [(0, a.jsx)(u.SingleSelect, {
        className: null != t ? Y.marginBottom20 : Y.marginBottom40,
        value: t,
        onChange: e => {
          s(e)
        },
        options: l
      }), null != t ? (0, a.jsxs)("div", {
        className: Y.marginTop20,
        children: [(0, a.jsxs)(p.Subsetting, {
          setting: B.WebSetting.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
          children: [(0, a.jsx)(u.FormSwitch, {
            className: i()(Y.marginBottom20),
            note: w.default.Messages.GUILD_COMMUNITY_ALERTS_NAG_DESCRIPTION,
            value: !e[t].disableRaidAlertNag,
            onChange: () => {
              (0, G.updateUserGuildSettings)(t, e => {
                e.disableRaidAlertNag = !e.disableRaidAlertNag
              }, G.UserSettingsDelay.INFREQUENT_USER_ACTION)
            },
            hideBorder: !0,
            children: w.default.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER
          }), (0, a.jsx)(u.FormDivider, {
            className: i()(Y.marginTop20, Y.marginBottom40)
          })]
        }), (0, a.jsxs)(p.Subsetting, {
          setting: B.WebSetting.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
          children: [(0, a.jsx)(u.FormSwitch, {
            className: Y.marginBottom20,
            note: w.default.Messages.GUILD_COMMUNITY_ALERTS_PUSH_DESCRIPTION,
            value: !e[t].disableRaidAlertPush,
            onChange: () => {
              (0, G.updateUserGuildSettings)(t, e => {
                e.disableRaidAlertPush = !e.disableRaidAlertPush
              }, G.UserSettingsDelay.INFREQUENT_USER_ACTION)
            },
            hideBorder: !0,
            children: w.default.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER
          }), (0, a.jsx)(u.FormDivider, {
            className: i()(Y.marginTop20, Y.marginBottom40)
          })]
        })]
      }) : null, null != t ? null : (0, a.jsx)(u.FormDivider, {
        className: i()(Y.marginTop20, Y.marginBottom40)
      })]
    })]
  })
}
class q extends n.PureComponent {
  handleDesktopChange(e) {
    let t = e ? k.DesktopNotificationTypes.ALL : k.DesktopNotificationTypes.NEVER;
    if (t !== k.DesktopNotificationTypes.NEVER) {
      var s;
      s = "UserSettingsModal", P.default.requestPermission(e => {
        let t = e ? k.NotificationPermissionTypes.ENABLED : k.NotificationPermissionTypes.BLOCKED;
        S.default.setPermissionsState(t, s)
      })
    } else S.default.setDesktopType(t)
  }
  handleTTSChange(e) {
    let t = e.value;
    S.default.setTTSType(t)
  }
  render() {
    let {
      desktopType: e,
      afkTimeout: t,
      disableUnreadBadge: s,
      taskbarFlash: n,
      disabledSounds: l,
      disableAllSounds: r,
      notifyMessagesInSelectedChannel: d,
      focusMode: c
    } = this.props, S = b.isPlatformEmbedded && (0, b.isWindows)(), E = o().range(1, 11).map(e => ({
      value: 60 * e,
      label: w.default.Messages.DURATION_MINUTES.format({
        minutes: e
      })
    }));
    return (0, a.jsxs)(u.FormSection, {
      tag: u.FormTitleTags.H1,
      title: w.default.Messages.NOTIFICATIONS,
      children: [(0, a.jsx)(p.Subsetting, {
        setting: B.WebSetting.NOTIFICATIONS_ENABLE_DESKTOP,
        children: (0, a.jsx)(u.FormSwitch, {
          className: Y.marginBottom20,
          value: e !== k.DesktopNotificationTypes.NEVER && !c,
          onChange: this.handleDesktopChange,
          note: w.default.Messages.DESKTOP_NOTIFICATIONS_ENABLE_BODY,
          disabled: c,
          tooltipNote: c ? w.default.Messages.QUIET_MODE_DISABLED_BY : void 0,
          children: w.default.Messages.DESKTOP_NOTIFICATIONS_ENABLE
        })
      }), (0, a.jsx)(X, {}), (0, a.jsx)(p.Subsetting, {
        setting: B.WebSetting.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
        children: (0, a.jsx)(u.FormSwitch, {
          className: S ? Y.marginBottom20 : Y.marginBottom40,
          value: !s,
          note: w.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_BODY,
          onChange: this.handleToggleShowUnreadBadge,
          children: w.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL
        })
      }), S ? (0, a.jsx)(p.Subsetting, {
        setting: B.WebSetting.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
        children: (0, a.jsx)(u.FormSwitch, {
          className: Y.marginBottom40,
          value: n,
          note: w.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_BODY,
          onChange: this.handleToggleShowFlash,
          children: w.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL
        })
      }) : null, (0, a.jsx)(J, {}), (0, a.jsx)(p.Subsetting, {
        setting: B.WebSetting.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
        children: (0, a.jsxs)(u.FormItem, {
          title: w.default.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT,
          children: [(0, a.jsx)(u.SingleSelect, {
            value: t,
            onChange: F.AfkTimeout.updateSetting,
            options: E
          }), (0, a.jsx)(u.FormText, {
            type: u.FormTextTypes.DESCRIPTION,
            className: Y.marginTop8,
            children: w.default.Messages.FORM_DESCRIPTION_PUSH_AFK_TIMEOUT
          }), (0, a.jsx)(u.FormDivider, {
            className: i()(Y.marginTop40, Y.marginBottom40)
          })]
        })
      }), this.renderTTS(), (0, a.jsx)(Q, {}), (0, a.jsx)(u.FormItem, {
        children: (0, a.jsx)(z, {
          disabledSounds: l,
          disableAllSounds: r,
          notifyMessagesInSelectedChannel: d
        })
      }), (0, a.jsx)(y.default, {})]
    })
  }
  constructor(...e) {
    super(...e), W(this, "handleToggleShowUnreadBadge", () => {
      S.default.setDisableUnreadBadge(!this.props.disableUnreadBadge)
    }), W(this, "handleToggleShowFlash", () => {
      S.default.setTaskbarFlash(!this.props.taskbarFlash)
    }), W(this, "renderTTS", () => {
      if (!T.supported) return null;
      let e = [{
        name: w.default.Messages.TTS_ALLS,
        value: k.TTSNotificationTypes.ALL_CHANNELS
      }, {
        name: w.default.Messages.TTS_CURRENT,
        value: k.TTSNotificationTypes.SELECTED_CHANNEL
      }, {
        name: w.default.Messages.TTS_NEVER,
        value: k.TTSNotificationTypes.NEVER
      }];
      return (0, a.jsxs)(p.Subsetting, {
        setting: B.WebSetting.NOTIFICATIONS_TEXT_TO_SPEECH,
        children: [(0, a.jsxs)(u.FormItem, {
          title: w.default.Messages.FORM_LABEL_TTS_NOTIFICATIONS,
          children: [(0, a.jsx)(u.FormText, {
            type: u.FormTextTypes.DESCRIPTION,
            className: Y.marginBottom8,
            children: w.default.Messages.FORM_DESCRIPTION_TTS
          }), (0, a.jsx)(u.RadioGroup, {
            options: e,
            onChange: this.handleTTSChange,
            value: this.props.ttsType
          })]
        }), (0, a.jsx)(u.FormDivider, {
          className: i()(Y.marginTop40, Y.marginBottom40)
        })]
      })
    })
  }
}
let Z = (0, _.createExperiment)({
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
  let e = Z.useExperiment({
      location: "settings"
    }, {
      autoTrackExposure: !1
    }).enabled,
    t = (0, d.useStateFromStores)([L.default], () => L.default.mentionOnAllMessages);
  return e ? (0, a.jsx)(p.Subsetting, {
    setting: B.WebSetting.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
    children: (0, a.jsx)(u.FormSwitch, {
      className: Y.marginBottom20,
      value: t,
      onChange: e => {
        E.default.setAccountFlag(H.AccountNotificationFlags.MENTION_ON_ALL_MESSAGES, e)
      },
      note: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
      children: "Mention on all messages?"
    })
  }) : null
}

function J() {
  let e = C.NotificationsExperiment.useExperiment({
      location: "UserSettingsNotifications"
    }, {
      autoTrackExposure: !1
    }).enabled,
    {
      manuallyOpen: t
    } = C.UnreadsEntryPointExperiment.useExperiment({
      location: "UserSettingsNotifications"
    }, {
      autoTrackExposure: !1
    }),
    s = (0, d.useStateFromStores)([L.default], () => L.default.useNewNotifications),
    [l, i] = n.useState(!1);
  return e && (s || t) ? (0, a.jsxs)(a.Fragment, {
    children: [s ? (0, a.jsx)(p.Subsetting, {
      setting: B.WebSetting.NOTIFICATIONS_UNREAD_SETTINGS,
      children: (0, a.jsx)(u.FormSwitch, {
        className: Y.marginBottom40,
        style: {
          marginTop: -20
        },
        value: s,
        disabled: l || !s,
        note: w.default.Messages.NOTIF_MIGRATION_SETTINGS_SUBTITLE,
        onChange: () => $(i),
        children: w.default.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
      })
    }) : t ? (0, a.jsx)(p.Subsetting, {
      setting: B.WebSetting.NOTIFICATIONS_UNREAD_SETTINGS,
      children: (0, a.jsx)(u.FormSwitch, {
        className: Y.marginBottom40,
        value: s,
        disabled: l || s,
        note: "Turns on the new notification system",
        onChange: () => (0, O.openMigrationModal)(!0),
        children: w.default.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
      })
    }) : null, null]
  }) : null
}
async function $(e) {
  e(!0);
  let t = await (0, h.listSnapshots)();
  0 === t.length ? await (0, A.revertToOldSystem)() : c.default.show({
    title: w.default.Messages.CONFIRM,
    body: w.default.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_BODY.format({
      date: new Date(t[t.length - 1].recorded_at)
    }),
    cancelText: w.default.Messages.CANCEL,
    confirmText: w.default.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_ACTION,
    onConfirm: A.revertToOldSystem
  }), e(!1)
}

function ee(e) {
  let t = (0, g.useFocusModeEnabled)();
  return (0, a.jsx)(q, {
    ...e,
    focusMode: t
  })
}

function et() {
  let e = (0, d.useStateFromStoresObject)([M.default], () => ({
    disableUnreadBadge: M.default.getDisableUnreadBadge(),
    taskbarFlash: M.default.taskbarFlash,
    disabledSounds: M.default.getDisabledSounds(),
    disableAllSounds: M.default.getDisableAllSounds(),
    desktopType: M.default.getDesktopType(),
    ttsType: M.default.getTTSType(),
    notifyMessagesInSelectedChannel: M.default.getNotifyMessagesInSelectedChannel()
  }));
  return (0, a.jsx)(ee, {
    ...e,
    afkTimeout: F.AfkTimeout.useSetting()
  })
}