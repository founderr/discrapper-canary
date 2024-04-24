"use strict";
a.r(t), a.d(t, {
  default: function() {
    return P
  }
}), a("47120");
var n = a("392711"),
  s = a.n(n),
  l = a("442837"),
  i = a("570140"),
  r = a("573979"),
  o = a("592125"),
  u = a("271383"),
  d = a("430824"),
  c = a("131951"),
  f = a("158776"),
  E = a("19780"),
  h = a("699516"),
  _ = a("944486"),
  C = a("800599"),
  m = a("594174"),
  S = a("979651"),
  I = a("626135"),
  p = a("823379"),
  T = a("358085"),
  g = a("914946"),
  A = a("238679"),
  N = a("863141"),
  v = a("981631"),
  R = a("701488"),
  O = a("65154");

function L(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class P {
  loadServer() {
    for (let e of (T.isPlatformEmbedded && this.registerTransportsForEmbeddedPlatform(), this.transports)) this.rpcServer.registerTransport(e);
    for (let [e, t] of Object.entries(this.rpcCommandHandlers)) this.rpcServer.setCommandHandler(e, t);
    for (let [e, t] of Object.entries(this.rpcEventHandlers)) this.rpcServer.setEventHandler(e, t)
  }
  init() {
    this.rpcServer.getCurrentUser = () => m.default.getCurrentUser(), this.rpcServer.onConnect = e => {
      i.default.dispatch({
        type: "RPC_APP_CONNECTED",
        socketId: e.id,
        application: e.application
      }), I.default.track(v.AnalyticEvents.AUTHORIZED_APP_CONNECTED, {
        app_id: e.application.id,
        transport: e.transport
      })
    }, this.rpcServer.onDisconnect = (e, t) => {
      i.default.dispatch({
        type: "RPC_APP_DISCONNECTED",
        socketId: e.id,
        application: e.application,
        reason: t
      })
    };
    let e = [o.default, u.default, f.default, S.default, c.default, E.default];
    new l.BatchedStoreListener(e.concat(this.stores), () => this.rpcServer.updateSubscriptions()).attach("RPCServerManager"), i.default.subscribe("MESSAGE_CREATE", e => this.handleMessage(e)), i.default.subscribe("MESSAGE_UPDATE", e => this.handleMessage(e)), i.default.subscribe("MESSAGE_DELETE", e => this.handleMessage(e)), i.default.subscribe("SPEAKING", e => this.handleSpeaking(e)), i.default.subscribe("OAUTH2_TOKEN_REVOKE", e => this.handleOAuth2TokenRevoke(e)), i.default.subscribe("GUILD_CREATE", e => this.handleGuildCreate(e)), i.default.subscribe("CHANNEL_CREATE", e => this.handleChannelCreate(e)), i.default.subscribe("LOGOUT", () => this.handleLogout()), i.default.subscribe("VOICE_CHANNEL_SELECT", e => this.handleVoiceChannelSelect(e)), i.default.subscribe("RPC_NOTIFICATION_CREATE", e => this.handleNotificationCreate(e)), i.default.subscribe("ACTIVITY_JOIN", e => this.handleActivityJoin(e)), i.default.subscribe("ACTIVITY_LAYOUT_MODE_UPDATE", e => this.handleActivityLayoutModeUpdate(e)), i.default.subscribe("THERMAL_STATE_CHANGE", e => this.handleThermalStateChange(e)), i.default.subscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", e => this.handleScreenOrientationUpdate(e)), (0, A.subscribeToActivityInstanceConnectedParticipants)(e => this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, e)), i.default.subscribe("RELATIONSHIP_ADD", e => this.handleRelationshipAdd(e)), i.default.subscribe("RELATIONSHIP_REMOVE", e => this.handleRelationshipRemove(e)), i.default.subscribe("PRESENCE_UPDATES", e => this.handlePresenceUpdate(e)), i.default.subscribe("PRESENCES_REPLACE", () => this.handlePresencesReplace()), i.default.subscribe("ENTITLEMENT_CREATE", e => this.handleEntitlementCreate(e)), i.default.subscribe("ENTITLEMENT_DELETE", e => this.handleEntitlementDelete(e)), i.default.subscribe("USER_ACHIEVEMENT_UPDATE", e => this.handleUserAchievementUpdate(e))
  }
  handleMessage(e) {
    let t, a, n;
    if (0 === this.rpcServer.subscriptions.length) return;
    "MESSAGE_CREATE" === e.type && this.handleActivityMessage(e);
    let s = null;
    switch (e.type) {
      case "MESSAGE_CREATE":
        if ("SENDING" === e.message.state) return;
        t = v.RPCEvents.MESSAGE_CREATE, a = e.channelId, n = e.message, s = "".concat(t).concat(e.message.id);
        break;
      case "MESSAGE_UPDATE":
        t = v.RPCEvents.MESSAGE_UPDATE, a = e.message.channel_id, n = e.message;
        break;
      case "MESSAGE_DELETE":
        t = v.RPCEvents.MESSAGE_DELETE, a = e.channelId, n = {
          id: e.id
        }, s = "".concat(t).concat(e.id);
        break;
      default:
        return (0, p.assertNever)(e)
    }
    null != a && this.rpcServer.dispatchToSubscriptions(t, {
      channel_id: a
    }, {
      channel_id: a,
      message: (0, g.transformInternalTextMessage)(n)
    }, s)
  }
  handleSpeaking(e) {
    if (0 === this.rpcServer.subscriptions.length) return;
    let t = 0 !== e.speakingFlags ? v.RPCEvents.SPEAKING_START : v.RPCEvents.SPEAKING_STOP;
    if (e.context === O.MediaEngineContextTypes.DEFAULT) {
      let a = _.default.getVoiceChannelId();
      if (null != a) {
        let n = o.default.getChannel(a);
        if (null == n) return;
        let s = S.default.getVoiceState(n.getGuildId(), e.userId);
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
      channelId: a
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.VOICE_CHANNEL_SELECT, {}, {
      channel_id: a,
      guild_id: t
    })
  }
  handleNotificationCreate(e) {
    let {
      channelId: t,
      message: a,
      icon: n,
      title: s,
      body: l
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.NOTIFICATION_CREATE, {}, {
      channel_id: t,
      message: (0, g.transformInternalTextMessage)(a),
      icon_url: null != n ? (0, g.getRemoteIconURL)(n) : null,
      title: s,
      body: l
    })
  }
  handleActivityJoin(e) {
    let {
      applicationId: t,
      secret: a,
      intent: n,
      embedded: s
    } = e;
    if (0 === this.rpcServer.subscriptions.length) return;
    let l = {
      secret: a
    };
    s && (l.intent = n), this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ACTIVITY_JOIN, e => e.socket.application.id === t, l), this.rpcServer.dispatchToSubscriptions(v.RPCEvents.GAME_JOIN, e => e.socket.application.id === t, l)
  }
  handleActivityLayoutModeUpdate(e) {
    let {
      applicationId: t,
      layoutMode: a
    } = e;
    if (0 === this.rpcServer.subscriptions.length) return;
    let n = a !== R.ActivityLayoutMode.FOCUSED;
    this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ACTIVITY_PIP_MODE_UPDATE, e => e.socket.application.id === t, {
      is_pip_mode: n
    });
    this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE, e => e.socket.application.id === t, {
      layout_mode: a
    })
  }
  handleThermalStateChange(e) {
    let {
      applicationId: t,
      rawThermalState: a
    } = e;
    if (0 === this.rpcServer.subscriptions.length || null == t) return;
    let n = {
      thermal_state: (0, r.default)(a)
    };
    this.rpcServer.dispatchToSubscriptions(v.RPCEvents.THERMAL_STATE_UPDATE, e => e.socket.application.id === t, n)
  }
  handleScreenOrientationUpdate(e) {
    let {
      screenOrientation: t
    } = e;
    if (0 === this.rpcServer.subscriptions.length) return;
    let a = t === R.ActivityScreenOrientation.PORTRAIT ? "portrait" : "landscape";
    this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ORIENTATION_UPDATE, {}, {
      screen_orientation: t,
      orientation: a
    })
  }
  handleActivityMessage(e) {
    var t;
    let {
      channelId: a,
      message: n
    } = e;
    if (0 === this.rpcServer.subscriptions.length) return;
    let {
      application: s,
      activity: l
    } = n;
    if (null == s || null == l || null == l.party_id) return;
    let i = m.default.getUser(null === (t = n.author) || void 0 === t ? void 0 : t.id);
    if (null == i) return;
    let r = m.default.getCurrentUser();
    if (null == r || i.id === r.id) return;
    let o = l.type === v.ActivityActionTypes.JOIN_REQUEST ? f.default.getApplicationActivity(r.id, s.id) : f.default.getApplicationActivity(i.id, s.id);
    if (null == o || null == o.party || o.party.id !== l.party_id) return;
    let u = o.application_id;
    switch (l.type) {
      case v.ActivityActionTypes.JOIN:
        this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ACTIVITY_INVITE, e => e.socket.application.id === u, {
          user: (0, N.default)(i),
          activity: o,
          type: l.type,
          channel_id: a,
          message_id: n.id
        });
        break;
      case v.ActivityActionTypes.JOIN_REQUEST:
        this.rpcServer.dispatchToSubscriptions(v.RPCEvents.ACTIVITY_JOIN_REQUEST, e => e.socket.application.id === u, {
          user: (0, N.default)(i)
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
    } = e, a = d.default.getGuild(t);
    0 !== this.rpcServer.subscriptions.length && null != a && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.GUILD_CREATE, {}, {
      id: t,
      name: a.name
    })
  }
  handleChannelCreate(e) {
    let {
      channel: {
        id: t,
        name: a,
        type: n
      }
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.CHANNEL_CREATE, {}, {
      id: t,
      name: a,
      type: n
    })
  }
  handleLogout() {
    this.rpcServer.sockets.forEach(e => e.close(v.RPCCloseCodes.CLOSE_NORMAL, "User logout"))
  }
  handleRelationshipAdd(e) {
    let {
      relationship: {
        id: t,
        type: a
      }
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.RELATIONSHIP_UPDATE, {}, (0, g.transformRelationship)(a, t))
  }
  handleRelationshipRemove(e) {
    let {
      relationship: {
        id: t
      }
    } = e;
    0 !== this.rpcServer.subscriptions.length && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.RELATIONSHIP_UPDATE, {}, (0, g.transformRelationship)(v.RelationshipTypes.NONE, t))
  }
  handlePresenceUpdate(e) {
    let {
      updates: t
    } = e;
    0 !== this.rpcServer.subscriptions.length && t.forEach(e => {
      let {
        guildId: t,
        user: {
          id: a
        }
      } = e;
      if (null != t) return;
      let n = h.default.getRelationshipType(a);
      n === v.RelationshipTypes.NONE && C.default.getUserAffinitiesUserIds().has(a) && (n = v.RelationshipTypes.IMPLICIT), n !== v.RelationshipTypes.NONE && this.rpcServer.dispatchToSubscriptions(v.RPCEvents.RELATIONSHIP_UPDATE, {}, (0, g.transformRelationship)(n, a))
    })
  }
  handlePresencesReplace() {
    0 !== this.rpcServer.subscriptions.length && s().forEach(h.default.getRelationships(), (e, t) => {
      this.rpcServer.dispatchToSubscriptions(v.RPCEvents.RELATIONSHIP_UPDATE, {}, (0, g.transformRelationship)(e, t))
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
      application_id: a
    } = t;
    this.rpcServer.dispatchToSubscriptions(v.RPCEvents.USER_ACHIEVEMENT_UPDATE, e => e.socket.application.id === a, {
      user_achievement: t
    })
  }
  constructor(e) {
    L(this, "rpcServer", void 0), L(this, "transports", void 0), L(this, "rpcCommandHandlers", void 0), L(this, "rpcEventHandlers", void 0), L(this, "stores", void 0), L(this, "registerTransportsForEmbeddedPlatform", void 0), this.rpcServer = e.server, this.transports = e.transports, this.rpcCommandHandlers = e.commands, this.rpcEventHandlers = e.events, this.stores = e.stores, this.registerTransportsForEmbeddedPlatform = e.registerTransportsForEmbeddedPlatform
  }
}