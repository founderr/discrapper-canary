n.d(t, {
  Z: function() {
    return R
  }
}), n(47120);
var s = n(392711),
  i = n.n(s),
  l = n(442837),
  a = n(570140),
  r = n(573979),
  o = n(814443),
  c = n(592125),
  u = n(271383),
  d = n(430824),
  E = n(131951),
  h = n(158776),
  _ = n(19780),
  I = n(699516),
  m = n(944486),
  T = n(594174),
  g = n(979651),
  p = n(626135),
  N = n(823379),
  S = n(358085),
  C = n(914946),
  A = n(238679),
  f = n(863141),
  Z = n(981631),
  L = n(701488),
  O = n(65154);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class R {
  loadServer() {
    for (let e of (S.isPlatformEmbedded && this.registerTransportsForEmbeddedPlatform(), this.transports)) this.rpcServer.registerTransport(e);
    for (let [e, t] of Object.entries(this.rpcCommandHandlers)) this.rpcServer.setCommandHandler(e, t);
    for (let [e, t] of Object.entries(this.rpcEventHandlers)) this.rpcServer.setEventHandler(e, t)
  }
  init() {
    this.rpcServer.getCurrentUser = () => T.default.getCurrentUser(), this.rpcServer.onConnect = e => {
      a.Z.dispatch({
        type: "RPC_APP_CONNECTED",
        socketId: e.id,
        application: e.application
      }), p.default.track(Z.rMx.AUTHORIZED_APP_CONNECTED, {
        app_id: e.application.id,
        transport: e.transport
      })
    }, this.rpcServer.onDisconnect = (e, t) => {
      a.Z.dispatch({
        type: "RPC_APP_DISCONNECTED",
        socketId: e.id,
        application: e.application,
        reason: t
      })
    };
    let e = [c.Z, u.ZP, h.Z, g.Z, E.Z, _.Z];
    new l.Fh(e.concat(this.stores), () => this.rpcServer.updateSubscriptions()).attach("RPCServerManager"), a.Z.subscribe("MESSAGE_CREATE", e => this.handleMessage(e)), a.Z.subscribe("MESSAGE_UPDATE", e => this.handleMessage(e)), a.Z.subscribe("MESSAGE_DELETE", e => this.handleMessage(e)), a.Z.subscribe("SPEAKING", e => this.handleSpeaking(e)), a.Z.subscribe("OAUTH2_TOKEN_REVOKE", e => this.handleOAuth2TokenRevoke(e)), a.Z.subscribe("GUILD_CREATE", e => this.handleGuildCreate(e)), a.Z.subscribe("CHANNEL_CREATE", e => this.handleChannelCreate(e)), a.Z.subscribe("LOGOUT", () => this.handleLogout()), a.Z.subscribe("VOICE_CHANNEL_SELECT", e => this.handleVoiceChannelSelect(e)), a.Z.subscribe("RPC_NOTIFICATION_CREATE", e => this.handleNotificationCreate(e)), a.Z.subscribe("ACTIVITY_JOIN", e => this.handleActivityJoin(e)), a.Z.subscribe("ACTIVITY_LAYOUT_MODE_UPDATE", e => this.handleActivityLayoutModeUpdate(e)), a.Z.subscribe("THERMAL_STATE_CHANGE", e => this.handleThermalStateChange(e)), a.Z.subscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", e => this.handleScreenOrientationUpdate(e)), (0, A.HU)(e => this.rpcServer.dispatchToSubscriptions(Z.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, e)), a.Z.subscribe("RELATIONSHIP_ADD", e => this.handleRelationshipAdd(e)), a.Z.subscribe("RELATIONSHIP_REMOVE", e => this.handleRelationshipRemove(e)), a.Z.subscribe("PRESENCE_UPDATES", e => this.handlePresenceUpdate(e)), a.Z.subscribe("PRESENCES_REPLACE", () => this.handlePresencesReplace()), a.Z.subscribe("ENTITLEMENT_CREATE", e => this.handleEntitlementCreate(e)), a.Z.subscribe("ENTITLEMENT_DELETE", e => this.handleEntitlementDelete(e)), a.Z.subscribe("USER_ACHIEVEMENT_UPDATE", e => this.handleUserAchievementUpdate(e))
  }
  handleMessage(e) {
    let t, n, s;
    if (0 === this.rpcServer.subscriptions.length) return;
    "MESSAGE_CREATE" === e.type && this.handleActivityMessage(e);
    let i = null;
    switch (e.type) {
      case "MESSAGE_CREATE":
        if ("SENDING" === e.message.state) return;
        t = Z.zMe.MESSAGE_CREATE, n = e.channelId, s = e.message, i = "".concat(t).concat(e.message.id);
        break;
      case "MESSAGE_UPDATE":
        t = Z.zMe.MESSAGE_UPDATE, n = e.message.channel_id, s = e.message;
        break;
      case "MESSAGE_DELETE":
        t = Z.zMe.MESSAGE_DELETE, n = e.channelId, s = {
          id: e.id
        }, i = "".concat(t).concat(e.id);
        break;
      default:
        return (0, N.vE)(e)
    }
    null != n && this.rpcServer.dispatchToSubscriptions(t, {
      channel_id: n
    }, {
      channel_id: n,
      message: (0, C.Xb)(s)
    }, i)
  }
  handleSpeaking(e) {
    if (0 === this.rpcServer.subscriptions.length) return;
    let t = 0 !== e.speakingFlags ? Z.zMe.SPEAKING_START : Z.zMe.SPEAKING_STOP;
    if (e.context === O.Yn.DEFAULT) {
      let n = m.Z.getVoiceChannelId();
      if (null != n) {
        let s = c.Z.getChannel(n);
        if (null == s) return;
        let i = g.Z.getVoiceState(s.getGuildId(), e.userId);
        if (null == i) return;
        this.rpcServer.dispatchToSubscriptions(t, {
          channel_id: i.channelId
        }, {
          channel_id: i.channelId,
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
    if (0 !== this.rpcServer.subscriptions.length) this.rpcServer.dispatchToSubscriptions(Z.zMe.VOICE_CHANNEL_SELECT, {}, {
      channel_id: n,
      guild_id: t
    })
  }
  handleNotificationCreate(e) {
    let {
      channelId: t,
      message: n,
      icon: s,
      title: i,
      body: l
    } = e;
    if (0 !== this.rpcServer.subscriptions.length) this.rpcServer.dispatchToSubscriptions(Z.zMe.NOTIFICATION_CREATE, {}, {
      channel_id: t,
      message: (0, C.Xb)(n),
      icon_url: null != s ? (0, C.RE)(s) : null,
      title: i,
      body: l
    })
  }
  handleActivityJoin(e) {
    let {
      applicationId: t,
      secret: n,
      intent: s,
      embedded: i
    } = e;
    if (0 === this.rpcServer.subscriptions.length) return;
    let l = {
      secret: n
    };
    i && (l.intent = s), this.rpcServer.dispatchToSubscriptions(Z.zMe.ACTIVITY_JOIN, e => e.socket.application.id === t, l), this.rpcServer.dispatchToSubscriptions(Z.zMe.GAME_JOIN, e => e.socket.application.id === t, l)
  }
  handleActivityLayoutModeUpdate(e) {
    let {
      applicationId: t,
      layoutMode: n
    } = e;
    if (0 === this.rpcServer.subscriptions.length) return;
    let s = n !== L.cE.FOCUSED;
    this.rpcServer.dispatchToSubscriptions(Z.zMe.ACTIVITY_PIP_MODE_UPDATE, e => e.socket.application.id === t, {
      is_pip_mode: s
    });
    this.rpcServer.dispatchToSubscriptions(Z.zMe.ACTIVITY_LAYOUT_MODE_UPDATE, e => e.socket.application.id === t, {
      layout_mode: n
    })
  }
  handleThermalStateChange(e) {
    let {
      applicationId: t,
      rawThermalState: n
    } = e;
    if (0 === this.rpcServer.subscriptions.length || null == t) return;
    let s = {
      thermal_state: (0, r.Z)(n)
    };
    this.rpcServer.dispatchToSubscriptions(Z.zMe.THERMAL_STATE_UPDATE, e => e.socket.application.id === t, s)
  }
  handleScreenOrientationUpdate(e) {
    let {
      screenOrientation: t
    } = e;
    if (0 !== this.rpcServer.subscriptions.length) this.rpcServer.dispatchToSubscriptions(Z.zMe.ORIENTATION_UPDATE, {}, {
      screen_orientation: t
    })
  }
  handleActivityMessage(e) {
    var t;
    let {
      channelId: n,
      message: s
    } = e;
    if (0 === this.rpcServer.subscriptions.length) return;
    let {
      application: i,
      activity: l
    } = s;
    if (null == i || null == l || null == l.party_id) return;
    let a = T.default.getUser(null === (t = s.author) || void 0 === t ? void 0 : t.id);
    if (null == a) return;
    let r = T.default.getCurrentUser();
    if (null == r || a.id === r.id) return;
    let o = l.type === Z.mFx.JOIN_REQUEST ? h.Z.getApplicationActivity(r.id, i.id) : h.Z.getApplicationActivity(a.id, i.id);
    if (null == o || null == o.party || o.party.id !== l.party_id) return;
    let c = o.application_id;
    switch (l.type) {
      case Z.mFx.JOIN:
        this.rpcServer.dispatchToSubscriptions(Z.zMe.ACTIVITY_INVITE, e => e.socket.application.id === c, {
          user: (0, f.Z)(a),
          activity: o,
          type: l.type,
          channel_id: n,
          message_id: s.id
        });
        break;
      case Z.mFx.JOIN_REQUEST:
        this.rpcServer.dispatchToSubscriptions(Z.zMe.ACTIVITY_JOIN_REQUEST, e => e.socket.application.id === c, {
          user: (0, f.Z)(a)
        })
    }
  }
  handleOAuth2TokenRevoke(e) {
    let {
      accessToken: t
    } = e;
    this.rpcServer.sockets.forEach(e => {
      if (e.authorization.accessToken === t) e.close(Z.$VG.TOKEN_REVOKED, "Token revoked")
    })
  }
  handleGuildCreate(e) {
    let {
      guild: {
        id: t
      }
    } = e, n = d.Z.getGuild(t);
    if (0 !== this.rpcServer.subscriptions.length && null != n) this.rpcServer.dispatchToSubscriptions(Z.zMe.GUILD_CREATE, {}, {
      id: t,
      name: n.name
    })
  }
  handleChannelCreate(e) {
    let {
      channel: {
        id: t,
        name: n,
        type: s
      }
    } = e;
    if (0 !== this.rpcServer.subscriptions.length) this.rpcServer.dispatchToSubscriptions(Z.zMe.CHANNEL_CREATE, {}, {
      id: t,
      name: n,
      type: s
    })
  }
  handleLogout() {
    this.rpcServer.sockets.forEach(e => e.close(Z.$VG.CLOSE_NORMAL, "User logout"))
  }
  handleRelationshipAdd(e) {
    let {
      relationship: {
        id: t,
        type: n
      }
    } = e;
    if (0 !== this.rpcServer.subscriptions.length) this.rpcServer.dispatchToSubscriptions(Z.zMe.RELATIONSHIP_UPDATE, {}, (0, C.cD)(n, t))
  }
  handleRelationshipRemove(e) {
    let {
      relationship: {
        id: t
      }
    } = e;
    if (0 !== this.rpcServer.subscriptions.length) this.rpcServer.dispatchToSubscriptions(Z.zMe.RELATIONSHIP_UPDATE, {}, (0, C.cD)(Z.OGo.NONE, t))
  }
  handlePresenceUpdate(e) {
    let {
      updates: t
    } = e;
    if (0 !== this.rpcServer.subscriptions.length) t.forEach(e => {
      let {
        guildId: t,
        user: {
          id: n
        }
      } = e;
      if (null != t) return;
      let s = I.Z.getRelationshipType(n);
      s === Z.OGo.NONE && o.Z.getUserAffinitiesUserIds().has(n) && (s = Z.OGo.IMPLICIT), s !== Z.OGo.NONE && this.rpcServer.dispatchToSubscriptions(Z.zMe.RELATIONSHIP_UPDATE, {}, (0, C.cD)(s, n))
    })
  }
  handlePresencesReplace() {
    if (0 !== this.rpcServer.subscriptions.length) i().forEach(I.Z.getRelationships(), (e, t) => {
      this.rpcServer.dispatchToSubscriptions(Z.zMe.RELATIONSHIP_UPDATE, {}, (0, C.cD)(e, t))
    })
  }
  handleEntitlementCreate(e) {
    let {
      entitlement: t
    } = e;
    if (0 !== this.rpcServer.subscriptions.length) this.rpcServer.dispatchToSubscriptions(Z.zMe.ENTITLEMENT_CREATE, e => e.socket.application.id === t.application_id, {
      entitlement: t
    })
  }
  handleEntitlementDelete(e) {
    let {
      entitlement: t
    } = e;
    if (0 !== this.rpcServer.subscriptions.length) this.rpcServer.dispatchToSubscriptions(Z.zMe.ENTITLEMENT_DELETE, e => e.socket.application.id === t.application_id, {
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
    this.rpcServer.dispatchToSubscriptions(Z.zMe.USER_ACHIEVEMENT_UPDATE, e => e.socket.application.id === n, {
      user_achievement: t
    })
  }
  constructor(e) {
    v(this, "rpcServer", void 0), v(this, "transports", void 0), v(this, "rpcCommandHandlers", void 0), v(this, "rpcEventHandlers", void 0), v(this, "stores", void 0), v(this, "registerTransportsForEmbeddedPlatform", void 0), this.rpcServer = e.server, this.transports = e.transports, this.rpcCommandHandlers = e.commands, this.rpcEventHandlers = e.events, this.stores = e.stores, this.registerTransportsForEmbeddedPlatform = e.registerTransportsForEmbeddedPlatform
  }
}