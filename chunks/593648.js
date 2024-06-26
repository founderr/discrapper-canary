t.d(s, {
  Z: function() {
    return ee
  }
}), t(653041), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(392711),
  l = t.n(o),
  c = t(442837),
  d = t(481060),
  _ = t(668781),
  E = t(292556),
  u = t(92114),
  T = t(419363),
  S = t(818083),
  I = t(688465),
  N = t(487419),
  C = t(378364),
  A = t(197344),
  m = t(734934),
  O = t(223683),
  g = t(312400),
  h = t(115345),
  R = t(392888),
  p = t(921801),
  x = t(657254),
  M = t(470647),
  D = t(292959),
  f = t(9156),
  L = t(626135),
  P = t(912101),
  Z = t(358085),
  v = t(709054),
  b = t(557177),
  j = t(695346),
  U = t(675478),
  B = t(33656),
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
    disabled: a,
    onPreview: i,
    onChange: r,
    tooltip: o
  } = e;
  return (0, n.jsx)(d.FormSwitch, {
    className: Y.soundRow,
    value: t,
    onChange: r,
    disabled: a,
    tooltipNote: o,
    children: (0, n.jsxs)("div", {
      className: Y.notificationSound,
      children: [(0, n.jsx)("div", {
        className: Y.soundName,
        children: s
      }), (0, n.jsx)(d.Clickable, {
        className: Y.soundIcon,
        onClick: i,
        "aria-label": y.Z.Messages.USER_SETTINGS_NOTIFICATIONS_PREVIEW_SOUND,
        children: (0, n.jsx)(d.VoiceNormalIcon, {
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
    notifyMessagesInSelectedChannel: i
  } = e, {
    allowAprilFoolsSoundpack: o
  } = x.Z.useExperiment({
    location: "791c79_1"
  }, {
    autoTrackExposure: !1
  }), l = A.Z.useIsRingtoneEligible();
  a.useEffect(() => {
    x.Z.trackExposure({
      location: "791c79_3"
    })
  }, []);
  let c = a.useRef(),
    _ = (0, m.p)(),
    u = a.useCallback((e, s) => {
      s.stopPropagation(), s.preventDefault(), null != c.current && c.current.stop(), c.current = b.GN(e)
    }, []),
    T = a.useCallback((e, t) => {
      let n = s.filter(s => s !== e);
      !t && n.push(e), e === C.Z.ringtone && L.default.track(F.rMx.EVENT_RINGTONE_TOGGLED, {
        toggled_on: t,
        sound_name: e
      }), E.default.setDisabledSounds(n)
    }, [s]);
  a.useEffect(() => () => {
    var e;
    null === (e = c.current) || void 0 === e || e.stop()
  });
  let S = [{
    label: y.Z.Messages.SOUND_MESSAGE,
    sound: "message1",
    focusModeDisabled: _
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
  }, ...l ? [{
    label: C.Z.getRingtoneSettingsLabel(),
    sound: C.Z.ringtone,
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
  return (0, n.jsx)(p.F, {
    setting: G.s6.NOTIFICATIONS_SOUNDS,
    children: (0, n.jsxs)(d.FormSection, {
      tag: d.FormTitleTags.H1,
      title: y.Z.Messages.SOUNDS,
      children: [o ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(d.FormTitle, {
          className: H.marginBottom20,
          children: y.Z.Messages.SOUNDPACK_LABEL
        }), (0, n.jsx)(M.Z, {
          className: r()(Y.soundpackSelect, H.marginBottom40)
        })]
      }) : null, (0, n.jsx)(d.FormSwitch, {
        note: y.Z.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_NOTE,
        value: i,
        onChange: E.default.setNotifyMessagesInSelectedChannel,
        children: y.Z.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_LABEL
      }), (0, n.jsx)(d.FormSwitch, {
        note: y.Z.Messages.SOUND_DISABLE_ALL_NOTE,
        value: t,
        onChange: E.default.toggleDisableAllSounds,
        children: y.Z.Messages.SOUND_DISABLE_ALL
      }), S.map(e => {
        let {
          label: a,
          sound: i,
          disabled: r,
          focusModeDisabled: o
        } = e;
        return (0, n.jsx)(w, {
          label: a,
          disabled: t || !0 === r || !0 === o,
          tooltip: o ? y.Z.Messages.QUIET_MODE_DISABLED_BY : void 0,
          onChange: e => T(i, e),
          onPreview: e => u(i, e),
          enabled: !t && !s.includes(i) && !0 !== o
        }, i)
      })]
    })
  })
}

function K() {
  let e = (0, c.e7)([N.Z], () => N.Z.getGuildAlertSettings()),
    [s, t] = a.useState(null),
    i = v.default.keys(e).map(s => {
      let t = e[s];
      return {
        label: t.guildName,
        value: t.guildId
      }
    });
  return 0 === Object.keys(e).length ? null : (0, n.jsxs)(p.F, {
    setting: G.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
    children: [(0, n.jsxs)(d.Heading, {
      variant: "heading-lg/semibold",
      className: r()(Y.titleWithBeta, H.marginBottom20),
      children: [y.Z.Messages.GUILD_COMMUNITY_ALERTS_HEADER, (0, n.jsx)(I.Z, {})]
    }), (0, n.jsx)(d.FormText, {
      type: d.FormTextTypes.DESCRIPTION,
      className: H.marginBottom20,
      children: y.Z.Messages.GUILD_COMMUNITY_ALERTS_DESCRIPTION
    }), (0, n.jsxs)(d.FormItem, {
      title: y.Z.Messages.GUILD_COMMUNITY_ALERTS_CHOOSE_SERVER,
      children: [(0, n.jsx)(d.SingleSelect, {
        className: null != s ? H.marginBottom20 : H.marginBottom40,
        value: s,
        onChange: e => {
          t(e)
        },
        options: i
      }), null != s ? (0, n.jsxs)("div", {
        className: H.marginTop20,
        children: [(0, n.jsxs)(p.F, {
          setting: G.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
          children: [(0, n.jsx)(d.FormSwitch, {
            className: r()(H.marginBottom20),
            note: y.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_DESCRIPTION,
            value: !e[s].disableRaidAlertNag,
            onChange: () => {
              (0, U.PS)(s, e => {
                e.disableRaidAlertNag = !e.disableRaidAlertNag
              }, U.fy.INFREQUENT_USER_ACTION)
            },
            hideBorder: !0,
            children: y.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER
          }), (0, n.jsx)(d.FormDivider, {
            className: r()(H.marginTop20, H.marginBottom40)
          })]
        }), (0, n.jsxs)(p.F, {
          setting: G.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
          children: [(0, n.jsx)(d.FormSwitch, {
            className: H.marginBottom20,
            note: y.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_DESCRIPTION,
            value: !e[s].disableRaidAlertPush,
            onChange: () => {
              (0, U.PS)(s, e => {
                e.disableRaidAlertPush = !e.disableRaidAlertPush
              }, U.fy.INFREQUENT_USER_ACTION)
            },
            hideBorder: !0,
            children: y.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER
          }), (0, n.jsx)(d.FormDivider, {
            className: r()(H.marginTop20, H.marginBottom40)
          })]
        })]
      }) : null, null != s ? null : (0, n.jsx)(d.FormDivider, {
        className: r()(H.marginTop20, H.marginBottom40)
      })]
    })]
  })
}
class z extends a.PureComponent {
  handleDesktopChange(e) {
    let s = e ? F.qrD.ALL : F.qrD.NEVER;
    if (s !== F.qrD.NEVER) {
      var t;
      t = "UserSettingsModal", P.Z.requestPermission(e => {
        let s = e ? F.$Ab.ENABLED : F.$Ab.BLOCKED;
        E.default.setPermissionsState(s, t)
      })
    } else E.default.setDesktopType(s)
  }
  handleTTSChange(e) {
    let s = e.value;
    E.default.setTTSType(s)
  }
  render() {
    let {
      desktopType: e,
      afkTimeout: s,
      disableUnreadBadge: t,
      taskbarFlash: a,
      disabledSounds: i,
      disableAllSounds: o,
      notifyMessagesInSelectedChannel: c,
      focusMode: _
    } = this.props, E = Z.isPlatformEmbedded && (0, Z.isWindows)(), u = l().range(1, 11).map(e => ({
      value: 60 * e,
      label: y.Z.Messages.DURATION_MINUTES.format({
        minutes: e
      })
    }));
    return (0, n.jsxs)(d.FormSection, {
      tag: d.FormTitleTags.H1,
      title: y.Z.Messages.NOTIFICATIONS,
      children: [(0, n.jsx)(p.F, {
        setting: G.s6.NOTIFICATIONS_ENABLE_DESKTOP,
        children: (0, n.jsx)(d.FormSwitch, {
          className: H.marginBottom20,
          value: e !== F.qrD.NEVER && !_,
          onChange: this.handleDesktopChange,
          note: y.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE_BODY,
          disabled: _,
          tooltipNote: _ ? y.Z.Messages.QUIET_MODE_DISABLED_BY : void 0,
          children: y.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE
        })
      }), (0, n.jsx)(X, {}), (0, n.jsx)(p.F, {
        setting: G.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
        children: (0, n.jsx)(d.FormSwitch, {
          className: E ? H.marginBottom20 : H.marginBottom40,
          value: !t,
          note: y.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_BODY,
          onChange: this.handleToggleShowUnreadBadge,
          children: y.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL
        })
      }), (0, n.jsx)(p.F, {
        setting: G.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
        children: (0, n.jsx)(d.FormSwitch, {
          className: H.marginBottom40,
          value: a,
          note: y.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_BODY,
          onChange: this.handleToggleShowFlash,
          children: y.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL
        })
      }), (0, n.jsx)(q, {}), (0, n.jsx)(p.F, {
        setting: G.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
        children: (0, n.jsxs)(d.FormItem, {
          title: y.Z.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT,
          children: [(0, n.jsx)(d.SingleSelect, {
            value: s,
            onChange: j.CM.updateSetting,
            options: u
          }), (0, n.jsx)(d.FormText, {
            type: d.FormTextTypes.DESCRIPTION,
            className: H.marginTop8,
            children: y.Z.Messages.FORM_DESCRIPTION_PUSH_AFK_TIMEOUT
          }), (0, n.jsx)(d.FormDivider, {
            className: r()(H.marginTop40, H.marginBottom40)
          })]
        })
      }), this.renderTTS(), (0, n.jsx)(K, {}), (0, n.jsx)(d.FormItem, {
        children: (0, n.jsx)(W, {
          disabledSounds: i,
          disableAllSounds: o,
          notifyMessagesInSelectedChannel: c
        })
      }), (0, n.jsx)(B.Z, {})]
    })
  }
  constructor(...e) {
    super(...e), k(this, "handleToggleShowUnreadBadge", () => {
      E.default.setDisableUnreadBadge(!this.props.disableUnreadBadge)
    }), k(this, "handleToggleShowFlash", () => {
      E.default.setTaskbarFlash(!this.props.taskbarFlash)
    }), k(this, "renderTTS", () => {
      if (!T.Zh) return null;
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
      return (0, n.jsxs)(p.F, {
        setting: G.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
        children: [(0, n.jsxs)(d.FormItem, {
          title: y.Z.Messages.FORM_LABEL_TTS_NOTIFICATIONS,
          children: [(0, n.jsx)(d.FormText, {
            type: d.FormTextTypes.DESCRIPTION,
            className: H.marginBottom8,
            children: y.Z.Messages.FORM_DESCRIPTION_TTS
          }), (0, n.jsx)(d.RadioGroup, {
            options: e,
            onChange: this.handleTTSChange,
            value: this.props.ttsType
          })]
        }), (0, n.jsx)(d.FormDivider, {
          className: r()(H.marginTop40, H.marginBottom40)
        })]
      })
    })
  }
}
let Q = (0, S.B)({
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
    s = (0, c.e7)([f.ZP], () => f.ZP.mentionOnAllMessages);
  return e ? (0, n.jsx)(p.F, {
    setting: G.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
    children: (0, n.jsx)(d.FormSwitch, {
      className: H.marginBottom20,
      value: s,
      onChange: e => {
        u.Z.setAccountFlag(V.c.MENTION_ON_ALL_MESSAGES, e)
      },
      note: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
      children: "Mention on all messages?"
    })
  }) : null
}

function q() {
  let e = g.xT.useExperiment({
      location: "UserSettingsNotifications"
    }, {
      autoTrackExposure: !1
    }).enabled,
    {
      manuallyOpen: s
    } = g.fs.useExperiment({
      location: "UserSettingsNotifications"
    }, {
      autoTrackExposure: !1
    }),
    t = (0, c.e7)([f.ZP], () => f.ZP.useNewNotifications),
    [i, o] = a.useState(!1);
  return e && (t || s) ? (0, n.jsxs)(n.Fragment, {
    children: [t ? (0, n.jsx)(p.F, {
      setting: G.s6.NOTIFICATIONS_UNREAD_SETTINGS,
      children: (0, n.jsx)(d.FormSwitch, {
        className: H.marginBottom40,
        style: {
          marginTop: -20
        },
        value: t,
        disabled: i || !t,
        note: y.Z.Messages.NOTIF_MIGRATION_SETTINGS_SUBTITLE,
        onChange: () => J(o),
        children: y.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
      })
    }) : s ? (0, n.jsx)(p.F, {
      setting: G.s6.NOTIFICATIONS_UNREAD_SETTINGS,
      children: (0, n.jsx)(d.FormSwitch, {
        className: H.marginBottom40,
        value: t,
        disabled: i || t,
        note: "Turns on the new notification system",
        onChange: () => (0, R.R)(!0),
        children: y.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
      })
    }) : null, (0, n.jsxs)(p.F, {
      setting: G.s6.NOTIFICATIONS_NEW_SETTINGS,
      children: [(0, n.jsx)(d.FormItem, {
        title: "New Notification Settings (Advanced, Staff Only)",
        children: (0, n.jsxs)("div", {
          style: {
            display: "flex",
            gap: 16
          },
          children: [(0, n.jsx)(p.F, {
            setting: G.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
            children: (0, n.jsx)(d.Button, {
              onClick: O.KP,
              children: "Restore most recent snapshot"
            })
          }), (0, n.jsx)(p.F, {
            setting: G.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
            children: (0, n.jsx)(d.Button, {
              onClick: () => {
                (0, R.R)(!0)
              },
              children: "Launch Migration"
            })
          }), (0, n.jsx)(p.F, {
            setting: G.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM,
            children: (0, n.jsx)(d.FormSwitch, {
              hideBorder: !0,
              value: t,
              onChange: e => {
                u.Z.setAccountFlag(V.c.USE_NEW_NOTIFICATIONS, e)
              },
              children: "Toggle new system on/off"
            })
          })]
        })
      }), (0, n.jsx)(d.FormDivider, {
        className: r()(H.marginTop40, H.marginBottom40)
      })]
    })]
  }) : null
}
async function J(e) {
  e(!0);
  let s = await (0, O.Tn)();
  0 === s.length ? await (0, h.oL)() : _.Z.show({
    title: y.Z.Messages.CONFIRM,
    body: y.Z.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_BODY.format({
      date: new Date(s[s.length - 1].recorded_at)
    }),
    cancelText: y.Z.Messages.CANCEL,
    confirmText: y.Z.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_ACTION,
    onConfirm: h.oL
  }), e(!1)
}

function $(e) {
  let s = (0, m.p)();
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
    afkTimeout: j.CM.useSetting()
  })
}