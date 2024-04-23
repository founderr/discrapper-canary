"use strict";
n.r(t), n.d(t, {
  MESSAGE_SOUND: function() {
    return W
  },
  MESSAGE_SOUND_VOLUME: function() {
    return J
  }
}), n("653041");
var l, a = n("149765"),
  i = n("442837"),
  u = n("433517"),
  s = n("570140"),
  d = n("493683"),
  o = n("475179"),
  r = n("749210"),
  f = n("292556"),
  T = n("287734"),
  _ = n("933557"),
  E = n("456269"),
  c = n("15274"),
  I = n("355298"),
  N = n("601992"),
  g = n("703656"),
  C = n("359110"),
  S = n("922482"),
  A = n("427679"),
  h = n("488131"),
  p = n("695346"),
  y = n("592125"),
  O = n("430824"),
  m = n("292959"),
  M = n("496675"),
  D = n("699516"),
  R = n("944486"),
  G = n("885110"),
  U = n("246946"),
  v = n("594174"),
  L = n("979651"),
  F = n("5192"),
  P = n("150097"),
  w = n("912101"),
  V = n("358085"),
  H = n("557177"),
  k = n("51144"),
  b = n("981631"),
  Y = n("765305"),
  B = n("689938");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let W = "message1",
  J = .4,
  Q = "discord_dismissed_notification_shown",
  X = document.hasFocus(),
  q = null,
  K = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
  j = new class {
    track(e, t) {
      let n = this._channels[e];
      for (null == n && (n = [], this._channels[e] = n), n.push(t); n.length > 1;) {
        let e = n.shift();
        null != e && null != e.close && e.close()
      }
    }
    clearChannel(e) {
      let t = this._channels[e];
      null != t && (delete this._channels[e], t.forEach(e => e.close()))
    }
    constructor() {
      x(this, "_channels", {})
    }
  };

function z() {
  return !!(m.default.getDesktopType() === b.DesktopNotificationTypes.NEVER || G.default.getStatus() === b.StatusTypes.DND || p.FocusMode.getSetting()) || !1
}

function Z(e) {
  return null != L.default.getVoiceStateForChannel(e)
}
class $ extends(l = i.default.Store) {
  initialize() {
    this.waitFor(v.default, y.default, m.default, O.default, A.default, D.default, M.default, L.default, I.default)
  }
}
x($, "displayName", "NotificationStore"), new $(s.default, __OVERLAY__ ? {} : {
  NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
    let {
      enabled: t
    } = e;
    t === b.NotificationPermissionTypes.ENABLED && !V.isPlatformEmbedded && w.default.showNotification(n("185672"), B.default.Messages.NOTIFICATION_TITLE_DISCORD, B.default.Messages.BROWSER_NOTIFICATIONS_ENABLED_BODY, {
      notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE"
    }, {
      omitViewTracking: !0,
      sound: W,
      volume: J,
      tag: "hello",
      onClick: () => {
        window.focus()
      }
    })
  },
  NOTIFICATION_CREATE: function(e) {
    let {
      icon: t,
      title: n,
      body: l,
      trackingProps: a,
      options: i
    } = e;
    return !z() && (w.default.showNotification(t, n, l, a, i), !1)
  },
  WINDOW_FOCUS: function(e) {
    if (X = e.focused) {
      let e = R.default.getChannelId();
      null != e && j.clearChannel(e)
    }
  },
  MESSAGE_CREATE: function(e) {
    var t, l;
    let {
      channelId: a,
      message: i,
      optimistic: u
    } = e;
    if (u) return !1;
    let d = y.default.getChannel(a),
      r = v.default.getUser(null === (t = i.author) || void 0 === t ? void 0 : t.id);
    if (null == d || null == r || d.isBroadcastChannel()) return !1;
    let T = (0, P.shouldNotify)(i, a, !X),
      _ = m.default.getNotifyMessagesInSelectedChannel() && (0, P.shouldNotifyForSelectedChannel)(i, a);
    if (!T && !_) return !1;
    let E = !m.default.isSoundDisabled(W);
    if (_ && (E && H.playSound("message3", .4), !X) || !T) return !1;
    let c = n("808506").default,
      I = n("237997").default;
    if (null != c.getFocusedPID() && I.getTextChatNotificationMode() === b.OverlayNotificationTextChatTypes.ENABLED && !U.default.disableNotifications) return !1;
    let {
      icon: g,
      title: S,
      body: A
    } = (0, P.makeTextChatNotification)(d, i, r);
    if (s.default.dispatch({
        type: "RPC_NOTIFICATION_CREATE",
        channelId: d.id,
        message: i,
        icon: g,
        title: S,
        body: A
      }), (0, N.trackMessageNotificationTimestamps)(i, d.guild_id), m.default.getDesktopType() === b.DesktopNotificationTypes.NEVER) return E && H.playSound(W, J), !1;
    let h = w.default.showNotification(g, S, A, {
      notif_type: "MESSAGE_CREATE",
      notif_user_id: null === (l = i.author) || void 0 === l ? void 0 : l.id,
      message_id: i.id,
      message_type: i.type,
      channel_id: d.id,
      channel_type: d.type,
      guild_id: d.guild_id
    }, {
      omitViewTracking: !0,
      tag: i.id,
      sound: E ? W : void 0,
      volume: J,
      onClick() {
        (0, C.transitionToChannel)(d.id), (d.type === b.ChannelTypes.GUILD_VOICE || d.type === b.ChannelTypes.GUILD_STAGE_VOICE) && o.default.updateChatOpen(d.id, !0), f.default.clickedNotification()
      }
    });
    null != h && j.track(d.id, h)
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && j.clearChannel(t), !1
  },
  MESSAGE_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return j.clearChannel(t), !1
  },
  ACTIVITY_START: function(e) {
    let {
      userId: t,
      activity: n
    } = e;
    if (z()) return !1;
    if (n.type === b.ActivityTypes.PLAYING) {
      let e = v.default.getUser(t);
      if (null == e) return !1;
      let l = k.default.getName(e),
        a = n.name,
        i = e.getAvatarURL(void 0, 128),
        u = B.default.Messages.NOTIFICATION_TITLE_START_GAME,
        s = B.default.Messages.NOTIFICATION_BODY_START_GAME.format({
          username: l,
          gameName: a
        });
      return w.default.showNotification(i, u, s, {
        notif_type: "ACTIVITY_START",
        activity_type: b.ActivityTypes.PLAYING,
        notif_user_id: t,
        activity_name: a
      }, {
        sound: "message2",
        playSoundIfDisabled: !1,
        volume: .4,
        onClick() {
          d.default.openPrivateChannel(t)
        }
      }), !1
    }
    return !1
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    if (z()) return;
    let n = v.default.getCurrentUser();
    if (null == n) return;
    let l = t.find(e => e.userId === n.id);
    if (null == l) return;
    let {
      channelId: a,
      guildId: i,
      suppress: u,
      requestToSpeakTimestamp: s
    } = l;
    if (null == a || null == i || !(!u && null != s)) return;
    let d = O.default.getGuild(i),
      o = y.default.getChannel(a),
      r = A.default.getStageInstanceByChannel(a);
    null != d && null != o && null != r && w.default.showNotification(d.getIconURL(128), o.name, B.default.Messages.STAGE_SPEAK_INVITE_PUSH_NOTIFICATION.format({
      channelName: (0, _.computeChannelName)(o, v.default, D.default),
      channelTopic: null == r ? void 0 : r.topic
    }), {
      notif_type: "Stage Speak Invite"
    }, {})
  },
  STAGE_INSTANCE_UPDATE: function(e) {
    let {
      instance: t
    } = e;
    if (z() || !t.send_start_notification || Z(t.channel_id)) return !1;
    let n = v.default.getCurrentUser(),
      l = O.default.getGuild(t.guild_id),
      i = y.default.getChannel(t.channel_id),
      u = v.default.getUser(t.host_id);
    if (null == n || null == i || null == l || null == u || !(0, P.shouldNotifyBase)(n, u, i) || !M.default.can(a.combine(b.Permissions.CONNECT, b.Permissions.VIEW_CHANNEL), i)) return !1;
    w.default.showNotification(l.getIconURL(128), B.default.Messages.STAGE_START_PUSH_NOTIFICATION_TITLE.format({
      guildName: l.name
    }), B.default.Messages.STAGE_START_PUSH_NOTIFICATION_BODY.format({
      username: F.default.getName(l.id, i.id, u),
      topic: t.topic
    }), {
      notif_type: "STAGE_INSTANCE_CREATE",
      guild_id: l.id,
      channel_id: i.id
    }, {
      onClick() {
        (0, S.connectAndOpen)(i)
      }
    })
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    if (z() || null == t.notification_type) return !1;
    t.notification_type === Y.GuildScheduledEventNotificationTypes.EVENT_START && (t.entity_type === Y.GuildScheduledEventEntityTypes.STAGE_INSTANCE || t.entity_type === Y.GuildScheduledEventEntityTypes.VOICE ? ! function(e) {
      if (z()) return !1;
      let t = e.channel_id;
      if (null == t || Z(t)) return !1;
      let n = v.default.getCurrentUser(),
        l = O.default.getGuild(e.guild_id),
        i = y.default.getChannel(e.channel_id),
        u = v.default.getUser(e.host_id);
      if (null == n || null == i || null == l || null == u || !M.default.can(a.combine(b.Permissions.CONNECT, b.Permissions.VIEW_CHANNEL), i)) return !1;
      w.default.showNotification(l.getIconURL(128), B.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({
        guildName: l.name
      }), B.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_BODY.format({
        topic: e.name,
        username: F.default.getName(l.id, i.id, u)
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: l.id,
        channel_id: i.id
      }, {
        onClick() {
          e.entity_type === Y.GuildScheduledEventEntityTypes.STAGE_INSTANCE && (0, S.connectAndOpen)(i), e.entity_type === Y.GuildScheduledEventEntityTypes.VOICE && T.default.selectVoiceChannel(i.id)
        }
      })
    }(t) : t.entity_type === Y.GuildScheduledEventEntityTypes.EXTERNAL && ! function(e) {
      if (z()) return !1;
      let t = v.default.getCurrentUser(),
        n = O.default.getGuild(e.guild_id);
      if (null == t || null == n) return !1;
      w.default.showNotification(n.getIconURL(128), B.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({
        guildName: n.name
      }), B.default.Messages.GUILD_SCHEDULED_EVENT_EXTERNAL_START_BODY.format({
        topic: e.name
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: n.id
      }, {
        onClick() {
          r.default.transitionToGuildSync(e.guild_id), (0, c.openGuildEventDetails)({
            eventId: e.id
          })
        }
      })
    }(t))
  },
  THREAD_CREATE: function(e) {
    var t;
    let {
      channel: n,
      isNewlyCreated: l
    } = e;
    if (z()) return !1;
    let a = y.default.getChannel(n.parent_id);
    if (null == a || !b.ChannelTypesSets.GUILD_THREADS_ONLY.has(a.type) || !l || !(0, P.shouldNotifyForForumThreadCreation)(n, a, !X)) return !1;
    let {
      author: i,
      user: u
    } = (0, E.getForumPostAuthor)(n);
    if (null == u) return !1;
    let s = O.default.getGuild(a.guild_id);
    if (null == s) return !1;
    let d = B.default.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_TITLE_MOBILE.format({
        channelName: a.name,
        guildName: s.name
      }),
      o = B.default.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_BODY_MOBILE.format({
        channelName: n.name,
        userUsername: null !== (t = null == i ? void 0 : i.nick) && void 0 !== t ? t : null == u ? void 0 : u.username
      }),
      r = u.getAvatarURL(void 0, 128);
    w.default.showNotification(r, d, o, {
      notif_type: "THREAD_CREATE",
      notif_user_id: u.id
    }, {
      onClick() {
        (0, h.openThreadSidebarForViewing)(n)
      }
    })
  },
  GENERIC_PUSH_NOTIFICATION_SENT: function(e) {
    let {
      icon: t,
      title: n,
      body: l,
      route: a,
      trackingType: i,
      tag: u
    } = e;
    return !z() && null != n && null != l && null != i && (w.default.showNotification(t, n, l, {
      notif_type: i
    }, {
      onClick() {
        null != a && (0, g.transitionTo)(a)
      },
      tag: u
    }), !1)
  },
  WINDOW_HIDDEN: function() {
    let e = (0, V.isWindows)(),
      t = (0, V.isLinux)();
    if (!(!u.Storage.get(Q, !1) && V.isPlatformEmbedded && (e || t))) return !1;
    let l = !1;
    return null != q && (l = K.includes(q)), !!l && (w.default.showNotification(n("95045"), B.default.Messages.NOTIFICATION_TITLE_DISCORD, B.default.Messages.NOTIFICATION_BODY_DISCORD_HIDDEN, {
      notif_type: "WINDOW_HIDDEN"
    }, {
      overrideStreamerMode: !0,
      onClick: () => {
        (0, g.transitionTo)(b.Routes.SETTINGS(e ? "windows" : "linux"))
      },
      onShown: () => {
        u.Storage.set(Q, !0)
      }
    }), !1)
  },
  LOGOUT: function() {
    return u.Storage.remove(Q), !1
  },
  CONNECTION_OPEN: function(e) {
    let {
      countryCode: t
    } = e;
    q = t
  }
})