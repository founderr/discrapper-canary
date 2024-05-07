"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("47120");
var a = n("392711"),
  s = n.n(a),
  i = n("442837"),
  l = n("570140"),
  r = n("573979"),
  o = n("592125"),
  u = n("271383"),
  d = n("430824"),
  c = n("131951"),
  f = n("158776"),
  E = n("19780"),
  h = n("699516"),
  _ = n("944486"),
  C = n("800599"),
  m = n("594174"),
  S = n("979651"),
  p = n("626135"),
  g = n("823379"),
  I = n("358085"),
  T = n("914946"),
  A = n("238679"),
  N = n("863141"),
  v = n("981631"),
  R = n("701488"),
  O = n("65154");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class M {
  loadServer() {
    for (let e of (I.isPlatformEmbedded && this.registerTransportsForEmbeddedPlatform(), this.transports)) this.rpcServer.registerTransport(e);
    for (let [e, t] of Object.entries(this.rpcCommandHandlers)) this.rpcServer.setCommandHandler(e, t);
    for (let [e, t] of Object.entries(this.rpcEventHandlers)) this.rpcServer.setEventHandler(e, t)
  }
  init() {
    this.rpcServer.getCurrentUser = () => m.default.getCurrentUser(), this.rpcServer.onConnect = e => {
      l.default.dispatch({
        type: "RPC_APP_CONNECTED",
        socketId: e.id,
        application: e.application
      }), p.default.track(v.AnalyticEvents.AUTHORIZED_APP_CONNECTED, {
        app_id: e.application.id,
        transport: e.transport
      })
    }, this.rpcServer.onDisconnect = (e, t) => {
      l.default.dispatch({
        type: "RPC_APP_DISCONNECTED",
        socketId: e.id,
        application: e.application,
        reason: t
      })
    };
    let e = [o.default, u.default, f.default, S.default, c.default, E.default];
    new i.BatchedStoreListener(e.concat(this.stores), () => this.rpcServer.updateSubscriptions()).attach("RPCServerManager"), l.default.subscribe("MESSAGE_CREATE", e => this.handleMessage(e)), l.default.subscribe("MESSAGE_UPDATE", e => this.handleMessage(e)), l.default.subscribe("MESSAGE_DELETE", e => this.handleMessage(e)), l.default.subscribe("SPEAKING", e => this.handleSpeaking(e)), l.default.subscribe("OAUTH2_TOKEN_REVOKE", e => this.handleOAuth2TokenRevoke(e)), l.default.subscribe("GUILD_CREATE", e => this.handleGuildCreate(e)), l.default.subscribe("CHANNEL_CREATE", e => this.handleChannelCreate(e)), l.default.subscribe("LOGOUT", () => this.handleLogout()), l.default.subscribe("VOICE_CHANNEL_SELECT", e => this.handleVoiceChannelSelect(e)), l.default.subscribe("RPC_NOTIFICATION_CREATE", e => this.handleNotificationCreate(e)), l.default.subscribe("ACTIVITY_JOIN", e => this.handleActivityJoin(e)), l.default.subscribe("ACTIVITY_LAYOUT_MODE_UPDATE", e => this.handleActivityLayoutModeUpdate(e)), l.default.subscribe("THERMAL_STATE_CHANGE", e => this.handleThermalStateChange(e)), l.default.subscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", e => this.handleScreenOrientationUpdate(e)), (0, A.subscribeToActivityInstanceConnectedParticipants)(e => this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, e)), l.default.subscribe("RELATIONSHIP_ADD", e => this.handleRelationshipAdd(e)), l.default.subscribe("RELATIONSHIP_REMOVE", e => this.handleRelationshipRemove(e)), l.default.subscribe("PRESENCE_UPDATES", e => this.handlePresenceUpdate(e)), l.default.subscribe("PRESENCES_REPLACE", () => this.handlePresencesReplace()), l.default.subscribe("ENTITLEMENT_CREATE", e => this.handleEntitlementCreate(e)), l.default.subscribe("ENTITLEMENT_DELETE", e => this.handleEntitlementDelete(e)), l.default.subscribe("USER_ACHIEVEMENT_UPDATE", e => this.handleUserAchievementUpdate(e))
  }
  handleMessage(e) {
    let t, n, a;
    if (0 === this.rpcServer.subscriptions.length) return;
    "MESSAGE_CREATE" === e.type && this.handleActivityMessage(e);
    let s = null;
    switch (e.type) {
      case "MESSAGE_CREATE":
        if ("SENDING" === e.message.state) return;
        t = v.RPCEvents.MESSAGE_CREATE, n = e.channelId, a = e.message, s = "".concat(t).concat(e.message.id);
        break;
      case "MESSAGE_UPDATE":
        t = v.RPCEvents.MESSAGE_UPDATE, n = e.message.channel_id, a = e.message;
        break;
      case "MESSAGE_DELETE":
        t = v.RPCEvents.MESSAGE_DELETE, n = e.channelId, a = {
          id: e.id
        }, s = "".concat(t).concat(e.id);
        break;
      default:
        return (0, g.assertNever)(e)
    }
    null != n && this.rpcServer.dispatchToSubscriptions(t, {
      channel_id: n
    }, {
      channel_id: n,
      message: (0, T.transformInternalTextMessage)(a)
    }, s)
  }
  handleSpeaking(e) {
    if (0 === this.rpcServer.subscriptions.length) return;
    let t = 0 !== e.speakingFlags ? v.RPCEvents.SPEAKING_START : v.RPCEvents.SPEAKING_STOP;
    if (e.context === O.MediaEngineContextTypes.DEFAULT) {
      let n = _.default.getVoiceChannelId();
      if (null != n) {
        let a = o.default.getChannel(n);
        if (null == a) return;
        let s = S.default.getVoiceState(a.getGuildId(), e.userId);
        if (null == s) return;
        this.rpcServer.dispatchToSubscriptions(t, {
          channel_id: s.channelId
        }, {
          channel_id: s.channelId,
          user_id: e.userId
        })
      }
    }
  }
  handleVoiceChannelSelect(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.VOICE_CHANNEL_SELECT, {}, {
      channel_id: n,
      guild_id: t
    })
  }
  handleNotificationCreate(e) {
    let {
      channelId: t,
      message: n,
      icon: a,
      title: s,
      body: i
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.NOTIFICATION_CREATE, {}, {
      channel_id: t,
      message: (0, T.transformInternalTextMessage)(n),
      icon_url: null != a ? (0, T.getRemoteIconURL)(a) : null,
      title: s,
      body: i
    })
  }
  handleActivityJoin(e) {
    let {
      applicationId: t,
      secret: n,
      intent: a,
      embedded: s
    } = e;
    if (0 === this.rpcServer.subscriptions.length) return;
    let i = {
      secret: n
    };
    s && (i.intent = a), this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ACTIVITY_JOIN, e => e.socket.application.id === t, i), this.rpcServer.dispatchToSubscriptions(v.RPCEvents.GAME_JOIN, e => e.socket.application.id === t, i)
  }
  handleActivityLayoutModeUpdate(e) {
    let {
      applicationId: t,
      layoutMode: n
    } = e;
    if (0 === this.rpcServer.subscriptions.length) return;
    let a = n !== R.ActivityLayoutMode.FOCUSED;
    this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ACTIVITY_PIP_MODE_UPDATE, e => e.socket.application.id === t, {
      is_pip_mode: a
    });
    this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE, e => e.socket.application.id === t, {
      layout_mode: n
    })
  }
  handleThermalStateChange(e) {
    let {
      applicationId: t,
      rawThermalState: n
    } = e;
    if (0 === this.rpcServer.subscriptions.length || null == t) return;
    let a = {
      thermal_state: (0, r.default)(n)
    };
    this.rpcServer.dispatchToSubscriptions(v.RPCEvents.THERMAL_STATE_UPDATE, e => e.socket.application.id === t, a)
  }
  handleScreenOrientationUpdate(e) {
    let {
      screenOrientation: t
    } = e;
    if (0 === this.rpcServer.subscriptions.length) return;
    let n = t === R.ActivityScreenOrientation.PORTRAIT ? "portrait" : "landscape";
    this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ORIENTATION_UPDATE, {}, {
      screen_orientation: t,
      orientation: n
    })
  }
  handleActivityMessage(e) {
    var t;
    let {
      channelId: n,
      message: a
    } = e;
    if (0 === this.rpcServer.subscriptions.length) return;
    let {
      application: s,
      activity: i
    } = a;
    if (null == s || null == i || null == i.party_id) return;
    let l = m.default.getUser(null === (t = a.author) || void 0 === t ? void 0 : t.id);
    if (null == l) return;
    let r = m.default.getCurrentUser();
    if (null == r || l.id === r.id) return;
    let o = i.type === v.ActivityActionTypes.JOIN_REQUEST ? f.default.getApplicationActivity(r.id, s.id) : f.default.getApplicationActivity(l.id, s.id);
    if (null == o || null == o.party || o.party.id !== i.party_id) return;
    let u = o.application_id;
    switch (i.type) {
      case v.ActivityActionTypes.JOIN:
        this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ACTIVITY_INVITE, e => e.socket.application.id === u, {
          user: (0, N.default)(l),
          activity: o,
          type: i.type,
          channel_id: n,
          message_id: a.id
        });
        break;
      case v.ActivityActionTypes.JOIN_REQUEST:
        this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ACTIVITY_JOIN_REQUEST, e => e.socket.application.id === u, {
          user: (0, N.default)(l)
        })
    }
  }
  handleOAuth2TokenRevoke(e) {
    let {
      accessToken: t
    } = e;
    this.rpcServer.sockets.forEach(e => {
      e.authorization.accessToken === t && e.close(v.RPCCloseCodes.TOKEN_REVOKED, "Token revoked")
    })
  }
  handleGuildCreate(e) {
    let {
      guild: {
        id: t
      }
    } = e, n = d.default.getGuild(t);
    0 !== this.rpcServer.subscriptions.length && null != n && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.GUILD_CREATE, {}, {
      id: t,
      name: n.name
    })
  }
  handleChannelCreate(e) {
    let {
      channel: {
        id: t,
        name: n,
        type: a
      }
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.CHANNEL_CREATE, {}, {
      id: t,
      name: n,
      type: a
    })
  }
  handleLogout() {
    this.rpcServer.sockets.forEach(e => e.close(v.RPCCloseCodes.CLOSE_NORMAL, "User logout"))
  }
  handleRelationshipAdd(e) {
    let {
      relationship: {
        id: t,
        type: n
      }
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.RELATIONSHIP_UPDATE, {}, (0, T.transformRelationship)(n, t))
  }
  handleRelationshipRemove(e) {
    let {
      relationship: {
        id: t
      }
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.RELATIONSHIP_UPDATE, {}, (0, T.transformRelationship)(v.RelationshipTypes.NONE, t))
  }
  handlePresenceUpdate(e) {
    let {
      updates: t
    } = e;
    0 !== this.rpcServer.subscriptions.length && t.forEach(e => {
      let {
        guildId: t,
        user: {
          id: n
        }
      } = e;
      if (null != t) return;
      let a = h.default.getRelationshipType(n);
      a === v.RelationshipTypes.NONE && C.default.getUserAffinitiesUserIds().has(n) && (a = v.RelationshipTypes.IMPLICIT), a !== v.RelationshipTypes.NONE && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.RELATIONSHIP_UPDATE, {}, (0, T.transformRelationship)(a, n))
    })
  }
  handlePresencesReplace() {
    0 !== this.rpcServer.subscriptions.length && s().forEach(h.default.getRelationships(), (e, t) => {
      this.rpcServer.dispatchToSubscriptions(v.RPCEvents.RELATIONSHIP_UPDATE, {}, (0, T.transformRelationship)(e, t))
    })
  }
  handleEntitlementCreate(e) {
    let {
      entitlement: t
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ENTITLEMENT_CREATE, e => e.socket.application.id === t.application_id, {
      entitlement: t
    })
  }
  handleEntitlementDelete(e) {
    let {
      entitlement: t
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ENTITLEMENT_DELETE, e => e.socket.application.id === t.application_id, {
      entitlement: t
    })
  }
  handleUserAchievementUpdate(e) {
    let {
      userAchievement: t
    } = e;
    if (0 === this.rpcServer.subscriptions.length) return;
    let {
      application_id: n
    } = t;
    this.rpcServer.dispatchToSubscriptions(v.RPCEvents.USER_ACHIEVEMENT_UPDATE, e => e.socket.application.id === n, {
      user_achievement: t
    })
  }
  constructor(e) {
    L(this, "rpcServer", void 0), L(this, "transports", void 0), L(this, "rpcCommandHandlers", void 0), L(this, "rpcEventHandlers", void 0), L(this, "stores", void 0), L(this, "registerTransportsForEmbeddedPlatform", void 0), this.rpcServer = e.server, this.transports = e.transports, this.rpcCommandHandlers = e.commands, this.rpcEventHandlers = e.events, this.stores = e.stores, this.registerTransportsForEmbeddedPlatform = e.registerTransportsForEmbeddedPlatform
  }
}