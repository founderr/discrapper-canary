"use strict";
s.r(t), s.d(t, {
  default: function() {
    return Z
  }
}), s("424973"), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("917351"),
  o = s.n(r),
  d = s("446674"),
  u = s("77078"),
  c = s("404118"),
  S = s("193990"),
  E = s("519705"),
  f = s("533280"),
  T = s("408166"),
  m = s("862205"),
  _ = s("298878"),
  g = s("54346"),
  h = s("684581"),
  I = s("488284"),
  N = s("649649"),
  p = s("640497"),
  C = s("699668"),
  A = s("748021"),
  O = s("168067"),
  x = s("820974"),
  R = s("385649"),
  M = s("282109"),
  v = s("368121"),
  D = s("599110"),
  L = s("566673"),
  P = s("773336"),
  j = s("709681"),
  b = s("845579"),
  U = s("872173"),
  B = s("77809"),
  y = s("49111"),
  F = s("76618"),
  G = s("782340"),
  k = s("9162"),
  H = s("926622");

function w(e) {
  let {
    label: t,
    enabled: s,
    disabled: n,
    onPreview: l,
    onChange: i
  } = e;
  return (0, a.jsx)(u.FormSwitch, {
    className: k.soundRow,
    value: s,
    onChange: i,
    disabled: n,
    children: (0, a.jsxs)("div", {
      className: k.notificationSound,
      children: [(0, a.jsx)("div", {
        className: k.soundName,
        children: t
      }), (0, a.jsx)(u.Clickable, {
        className: k.soundIcon,
        onClick: l,
        "aria-label": G.default.Messages.USER_SETTINGS_NOTIFICATIONS_PREVIEW_SOUND,
        children: (0, a.jsx)(v.default, {
          width: 16,
          height: 16,
          className: k.icon,
          "aria-hidden": !0
        })
      })]
    })
  })
}

function V(e) {
  let {
    disabledSounds: t,
    disableAllSounds: s,
    notifyMessagesInSelectedChannel: l
  } = e, {
    allowAprilFoolsSoundpack: r
  } = O.default.useExperiment({
    location: "791c79_1"
  }, {
    autoTrackExposure: !1
  }), {
    enabled: o
  } = T.ActivitiesSoundsExperiment.useExperiment({
    location: "791c79_2"
  }, {
    autoTrackExposure: !1
  }), d = I.default.useIsRingtoneEligible();
  n.useEffect(() => {
    O.default.trackExposure({
      location: "791c79_3"
    })
  }, []);
  let c = n.useRef(),
    E = n.useCallback((e, t) => {
      t.stopPropagation(), t.preventDefault(), null != c.current && c.current.stop(), c.current = j.playSound(e)
    }, []),
    f = n.useCallback((e, s) => {
      let a = t.filter(t => t !== e);
      !s && a.push(e), e === h.default.ringtone && D.default.track(y.AnalyticEvents.EVENT_RINGTONE_TOGGLED, {
        toggled_on: s,
        sound_name: e
      }), S.default.setDisabledSounds(a)
    }, [t]);
  n.useEffect(() => () => {
    var e;
    null === (e = c.current) || void 0 === e || e.stop()
  });
  let m = [{
    label: G.default.Messages.SOUND_MESSAGE,
    sound: "message1"
  }, {
    label: G.default.Messages.SOUND_DEAFEN,
    sound: "deafen"
  }, {
    label: G.default.Messages.SOUND_UNDEAFEN,
    sound: "undeafen"
  }, {
    label: G.default.Messages.MUTE,
    sound: "mute"
  }, {
    label: G.default.Messages.UNMUTE,
    sound: "unmute"
  }, {
    label: G.default.Messages.SOUND_VOICE_DISCONNECTED,
    sound: "disconnect"
  }, {
    label: G.default.Messages.SOUND_PTT_ACTIVATE,
    sound: "ptt_start"
  }, {
    label: G.default.Messages.SOUND_PTT_DEACTIVATE,
    sound: "ptt_stop"
  }, {
    label: G.default.Messages.SOUND_USER_JOIN,
    sound: "user_join"
  }, {
    label: G.default.Messages.SOUND_USER_LEAVE,
    sound: "user_leave"
  }, {
    label: G.default.Messages.SOUND_USER_MOVED,
    sound: "user_moved"
  }, {
    label: G.default.Messages.SOUND_OUTGOING_RING,
    sound: "call_calling"
  }, {
    label: G.default.Messages.SOUND_INCOMING_RING,
    sound: "call_ringing"
  }, ...d ? [{
    label: h.default.getRingtoneSettingsLabel(),
    sound: h.default.ringtone,
    disabled: t.includes("call_ringing")
  }] : [], {
    label: G.default.Messages.SOUND_STREAM_STARTED,
    sound: "stream_started"
  }, {
    label: G.default.Messages.SOUND_STREAM_STOPPED,
    sound: "stream_ended"
  }, {
    label: G.default.Messages.SOUND_VIEWER_JOIN,
    sound: "stream_user_joined"
  }, {
    label: G.default.Messages.SOUND_VIEWER_LEAVE,
    sound: "stream_user_left"
  }, ...o ? [{
    label: G.default.Messages.SOUND_ACTIVITY_START,
    sound: "activity_launch"
  }, {
    label: G.default.Messages.SOUND_ACTIVITY_END,
    sound: "activity_end"
  }, {
    label: G.default.Messages.SOUND_ACTIVITY_USER_JOIN,
    sound: "activity_user_join"
  }, {
    label: G.default.Messages.SOUND_ACTIVITY_USER_LEAVE,
    sound: "activity_user_left"
  }] : [], {
    label: G.default.Messages.SOUND_INVITED_TO_SPEAK,
    sound: "reconnect"
  }];
  return (0, a.jsxs)(u.FormSection, {
    tag: u.FormTitleTags.H1,
    title: G.default.Messages.SOUNDS,
    children: [r ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.FormTitle, {
        className: H.marginBottom20,
        children: G.default.Messages.SOUNDPACK_LABEL
      }), (0, a.jsx)(x.default, {
        className: i(k.soundpackSelect, H.marginBottom40)
      })]
    }) : null, (0, a.jsx)(u.FormSwitch, {
      note: G.default.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_NOTE,
      value: l,
      onChange: S.default.setNotifyMessagesInSelectedChannel,
      children: G.default.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_LABEL
    }), (0, a.jsx)(u.FormSwitch, {
      note: G.default.Messages.SOUND_DISABLE_ALL_NOTE,
      value: s,
      onChange: S.default.toggleDisableAllSounds,
      children: G.default.Messages.SOUND_DISABLE_ALL
    }), m.map(e => {
      let {
        label: n,
        sound: l,
        disabled: i
      } = e;
      return (0, a.jsx)(w, {
        label: n,
        disabled: s || !0 === i,
        onChange: e => f(l, e),
        onPreview: e => E(l, e),
        enabled: !s && !t.includes(l)
      }, l)
    })]
  })
}

function Y() {
  let e = (0, d.useStateFromStores)([g.default], () => g.default.getGuildAlertSettings()),
    [t, s] = n.useState(null),
    l = Object.keys(e).map(t => {
      let s = e[t];
      return {
        label: s.guildName,
        value: s.guildId
      }
    });
  return 0 === Object.keys(e).length ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(u.Heading, {
      variant: "heading-lg/semibold",
      className: i(k.titleWithBeta, H.marginBottom20),
      children: [G.default.Messages.GUILD_COMMUNITY_ALERTS_HEADER, (0, a.jsx)(_.default, {})]
    }), (0, a.jsx)(u.FormText, {
      type: u.FormTextTypes.DESCRIPTION,
      className: H.marginBottom20,
      children: G.default.Messages.GUILD_COMMUNITY_ALERTS_DESCRIPTION
    }), (0, a.jsxs)(u.FormItem, {
      title: G.default.Messages.GUILD_COMMUNITY_ALERTS_CHOOSE_SERVER,
      children: [(0, a.jsx)(u.SingleSelect, {
        value: t,
        onChange: e => {
          s(e)
        },
        options: l
      }), null != t ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.FormSwitch, {
          className: i(H.marginBottom20, H.marginTop20),
          note: G.default.Messages.GUILD_COMMUNITY_ALERTS_NAG_DESCRIPTION,
          value: !e[t].disableRaidAlertNag,
          onChange: () => {
            (0, U.updateUserGuildSettings)(t, e => {
              e.disableRaidAlertNag = !e.disableRaidAlertNag
            }, U.UserSettingsDelay.INFREQUENT_USER_ACTION)
          },
          children: G.default.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER
        }), (0, a.jsx)(u.FormSwitch, {
          className: H.marginBottom20,
          note: G.default.Messages.GUILD_COMMUNITY_ALERTS_PUSH_DESCRIPTION,
          value: !e[t].disableRaidAlertPush,
          onChange: () => {
            (0, U.updateUserGuildSettings)(t, e => {
              e.disableRaidAlertPush = !e.disableRaidAlertPush
            }, U.UserSettingsDelay.INFREQUENT_USER_ACTION)
          },
          hideBorder: !0,
          children: G.default.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER
        })]
      }) : null]
    }), (0, a.jsx)(u.FormDivider, {
      className: i(null != t ? H.marginTop20 : H.marginTop40, H.marginBottom40)
    })]
  })
}
class W extends n.PureComponent {
  handleDesktopChange(e) {
    let t = e ? y.DesktopNotificationTypes.ALL : y.DesktopNotificationTypes.NEVER;
    if (t !== y.DesktopNotificationTypes.NEVER) {
      var s;
      s = "UserSettingsModal", L.default.requestPermission(e => {
        let t = e ? y.NotificationPermissionTypes.ENABLED : y.NotificationPermissionTypes.BLOCKED;
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
      notifyMessagesInSelectedChannel: d
    } = this.props, c = P.isPlatformEmbedded && (0, P.isWindows)(), S = o.range(1, 11).map(e => ({
      value: 60 * e,
      label: G.default.Messages.DURATION_MINUTES.format({
        minutes: e
      })
    }));
    return (0, a.jsxs)(u.FormSection, {
      tag: u.FormTitleTags.H1,
      title: G.default.Messages.NOTIFICATIONS,
      children: [(0, a.jsx)(u.FormSwitch, {
        className: H.marginBottom20,
        value: e !== y.DesktopNotificationTypes.NEVER,
        onChange: this.handleDesktopChange,
        note: G.default.Messages.DESKTOP_NOTIFICATIONS_ENABLE_BODY,
        children: G.default.Messages.DESKTOP_NOTIFICATIONS_ENABLE
      }), (0, a.jsx)(z, {}), (0, a.jsx)(u.FormSwitch, {
        className: c ? H.marginBottom20 : H.marginBottom40,
        value: !s,
        note: G.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_BODY,
        onChange: this.handleToggleShowUnreadBadge,
        children: G.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL
      }), c ? (0, a.jsx)(u.FormSwitch, {
        className: H.marginBottom40,
        value: n,
        note: G.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_BODY,
        onChange: this.handleToggleShowFlash,
        children: G.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL
      }) : null, (0, a.jsx)(Q, {}), (0, a.jsxs)(u.FormItem, {
        title: G.default.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT,
        children: [(0, a.jsx)(u.SingleSelect, {
          value: t,
          onChange: b.AfkTimeout.updateSetting,
          options: S
        }), (0, a.jsx)(u.FormText, {
          type: u.FormTextTypes.DESCRIPTION,
          className: H.marginTop8,
          children: G.default.Messages.FORM_DESCRIPTION_PUSH_AFK_TIMEOUT
        }), (0, a.jsx)(u.FormDivider, {
          className: i(H.marginTop40, H.marginBottom40)
        })]
      }), this.renderTTS(), (0, a.jsx)(u.FormDivider, {
        className: i(H.marginTop40, H.marginBottom40)
      }), (0, a.jsx)(Y, {}), (0, a.jsx)(u.FormItem, {
        children: (0, a.jsx)(V, {
          disabledSounds: l,
          disableAllSounds: r,
          notifyMessagesInSelectedChannel: d
        })
      }), (0, a.jsx)(B.default, {})]
    })
  }
  constructor(...e) {
    super(...e), this.handleToggleShowUnreadBadge = () => {
      S.default.setDisableUnreadBadge(!this.props.disableUnreadBadge)
    }, this.handleToggleShowFlash = () => {
      S.default.setTaskbarFlash(!this.props.taskbarFlash)
    }, this.renderTTS = () => {
      if (!f.supported) return null;
      let e = [{
        name: G.default.Messages.TTS_ALLS,
        value: y.TTSNotificationTypes.ALL_CHANNELS
      }, {
        name: G.default.Messages.TTS_CURRENT,
        value: y.TTSNotificationTypes.SELECTED_CHANNEL
      }, {
        name: G.default.Messages.TTS_NEVER,
        value: y.TTSNotificationTypes.NEVER
      }];
      return (0, a.jsxs)(u.FormItem, {
        title: G.default.Messages.FORM_LABEL_TTS_NOTIFICATIONS,
        children: [(0, a.jsx)(u.FormText, {
          type: u.FormTextTypes.DESCRIPTION,
          className: H.marginBottom8,
          children: G.default.Messages.FORM_DESCRIPTION_TTS
        }), (0, a.jsx)(u.RadioGroup, {
          options: e,
          onChange: this.handleTTSChange,
          value: this.props.ttsType
        })]
      })
    }
  }
}
let K = (0, m.createExperiment)({
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

function z() {
  let e = K.useExperiment({
      location: "settings"
    }, {
      autoTrackExposure: !1
    }).enabled,
    t = (0, d.useStateFromStores)([M.default], () => M.default.mentionOnAllMessages);
  return e ? (0, a.jsx)(u.FormSwitch, {
    className: H.marginBottom20,
    value: t,
    onChange: e => {
      E.default.setAccountFlag(F.AccountNotificationFlags.MENTION_ON_ALL_MESSAGES, e)
    },
    note: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
    children: "Mention on all messages?"
  }) : null
}

function Q() {
  let e = p.NotificationsExperiment.useExperiment({
      location: "UserSettingsNotifications"
    }, {
      autoTrackExposure: !1
    }).enabled,
    {
      manuallyOpen: t
    } = p.UnreadsEntryPointExperiment.useExperiment({
      location: "UserSettingsNotifications"
    }, {
      autoTrackExposure: !1
    }),
    s = (0, d.useStateFromStores)([M.default], () => M.default.useNewNotifications),
    [l, i] = n.useState(!1);
  return e && (s || t) ? (0, a.jsxs)(a.Fragment, {
    children: [s ? (0, a.jsx)(u.FormSwitch, {
      className: H.marginBottom40,
      style: {
        marginTop: -20
      },
      value: s,
      disabled: l || !s,
      note: G.default.Messages.NOTIF_MIGRATION_SETTINGS_SUBTITLE,
      onChange: () => q(i),
      children: G.default.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
    }) : t ? (0, a.jsx)(u.FormSwitch, {
      className: H.marginBottom40,
      style: {
        marginTop: -20
      },
      value: s,
      disabled: l || s,
      note: "Turns on the new notification system",
      onChange: () => (0, A.openMigrationModal)(!0),
      children: G.default.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
    }) : null, null]
  }) : null
}
async function q(e) {
  e(!0);
  let t = await (0, N.listSnapshots)();
  0 === t.length ? await (0, C.revertToOldSystem)() : c.default.show({
    title: G.default.Messages.CONFIRM,
    body: G.default.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_BODY.format({
      date: new Date(t[t.length - 1].recorded_at)
    }),
    cancelText: G.default.Messages.CANCEL,
    confirmText: G.default.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_ACTION,
    onConfirm: C.revertToOldSystem
  }), e(!1)
}

function Z() {
  let e = (0, d.useStateFromStoresObject)([R.default], () => ({
    disableUnreadBadge: R.default.getDisableUnreadBadge(),
    taskbarFlash: R.default.taskbarFlash,
    disabledSounds: R.default.getDisabledSounds(),
    disableAllSounds: R.default.getDisableAllSounds(),
    desktopType: R.default.getDesktopType(),
    ttsType: R.default.getTTSType(),
    notifyMessagesInSelectedChannel: R.default.getNotifyMessagesInSelectedChannel()
  }));
  return (0, a.jsx)(W, {
    ...e,
    afkTimeout: b.AfkTimeout.useSetting()
  })
}