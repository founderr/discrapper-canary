"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007");
var a = n("917351"),
  s = n.n(a),
  i = n("233736"),
  l = n("299285"),
  r = n("161454"),
  o = n("373469"),
  u = n("42203"),
  d = n("305961"),
  c = n("260320"),
  f = n("42887"),
  E = n("945956"),
  h = n("697218"),
  _ = n("800762"),
  C = n("861309"),
  I = n("578287"),
  S = n("65810"),
  m = n("716724"),
  p = n("961400"),
  T = n("694352"),
  g = n("492249"),
  A = n("49111");
let N = e => (0, m.default)(e).required().keys({
  channel_id: e.string().required()
});

function R(e) {
  var t;
  let {
    args: {
      channel_id: n
    },
    socket: a
  } = e, s = u.default.getChannel(n);
  if (null == s || !(0, I.hasMessageReadPermission)(s, a.application.id, a.authorization.scopes)) throw new C.default({
    errorCode: A.RPCErrors.INVALID_CHANNEL
  }, "Invalid channel id: ".concat(n));
  if (s.isNSFW() && (null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) !== !0) throw new C.default({
    errorCode: A.RPCErrors.INVALID_CHANNEL
  }, "Invalid nsfw channel id: ".concat(s.id))
}
let O = e => (0, m.default)(e).keys({
  lobby_id: e.string(),
  channel_id: e.string()
});

function v(e) {
  let {
    args: {
      lobby_id: t,
      channel_id: n
    }
  } = e;
  if (null != n) {
    let e = u.default.getChannel(n);
    if (null == e) throw new C.default({
      errorCode: A.RPCErrors.INVALID_CHANNEL
    }, "Invalid channel id: ".concat(n))
  }
  if (null != t) {
    let e = c.default.getLobby(t);
    if (null == e) throw new C.default({
      errorCode: A.RPCErrors.INVALID_LOBBY
    }, "Invalid lobby id: ".concat(t))
  }
}
let L = {
  [A.RPCEvents.GUILD_STATUS]: {
    scope: A.OAuth2Scopes.RPC,
    validation: e => (0, m.default)(e).required().keys({
      guild_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          guild_id: t
        }
      } = e;
      if (null == d.default.getGuild(t)) throw new C.default({
        errorCode: A.RPCErrors.INVALID_GUILD
      }, "Invalid guild id: ".concat(t));
      return e => {
        var n;
        let {
          prevState: a,
          dispatch: i
        } = e, l = d.default.getGuild(t);
        if (null == l) return;
        let r = {
          guild: {
            id: l.id,
            name: l.name,
            icon_url: null !== (n = l.getIconURL(128)) && void 0 !== n ? n : null
          },
          online: 0
        };
        return !s.isEqual(a, r) && i(r), r
      }
    }
  },
  [A.RPCEvents.VOICE_STATE_CREATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, A.OAuth2Scopes.RPC_VOICE_READ]
    },
    validation: e => (0, m.default)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == u.default.getChannel(t)) throw new C.default({
        errorCode: A.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: a
        } = e, i = u.default.getChannel(t);
        if (null == i) return;
        let l = i.getGuildId(),
          r = Object.values(_.default.getVoiceStatesForChannel(i.id));
        if (n) {
          let e = s.differenceBy(r, n, e => {
            let {
              userId: t
            } = e;
            return t
          });
          e.forEach(e => a((0, I.transformVoiceState)(l, i.id, e)))
        }
        return r
      }
    }
  },
  [A.RPCEvents.VOICE_STATE_DELETE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, A.OAuth2Scopes.RPC_VOICE_READ]
    },
    validation: e => (0, m.default)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == u.default.getChannel(t)) throw new C.default({
        errorCode: A.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: a
        } = e, i = u.default.getChannel(t);
        if (null == i) return;
        let l = i.getGuildId(),
          r = Object.values(_.default.getVoiceStatesForChannel(i.id)),
          o = s.differenceBy(n, r, e => {
            let {
              userId: t
            } = e;
            return t
          });
        return o.forEach(e => a((0, I.transformVoiceState)(l, i.id, e))), r
      }
    }
  },
  [A.RPCEvents.VOICE_STATE_UPDATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, A.OAuth2Scopes.RPC_VOICE_READ]
    },
    validation: e => (0, m.default)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == u.default.getChannel(t)) throw new C.default({
        errorCode: A.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: a
        } = e, i = u.default.getChannel(t);
        if (null == i) return;
        let l = i.getGuildId(),
          r = Object.values(_.default.getVoiceStatesForChannel(i.id)).map(e => (0, I.transformVoiceState)(l, i.id, e)),
          o = s.differenceWith(r, n, s.isEqual);
        return o.forEach(e => a(e)), r
      }
    }
  },
  [A.RPCEvents.VOICE_CONNECTION_STATUS]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, A.OAuth2Scopes.RPC_VOICE_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, a = {
        state: (0, I.getVoiceConnectionState)(E.default.getState()),
        hostname: E.default.getHostname(),
        pings: E.default.getPings(),
        average_ping: E.default.getAveragePing(),
        last_ping: E.default.getLastPing()
      };
      return !s.isEqual(a, t) && n(a), a
    }
  },
  [A.RPCEvents.MESSAGE_CREATE]: {
    scope: A.OAuth2Scopes.RPC,
    validation: N,
    handler: R
  },
  [A.RPCEvents.MESSAGE_UPDATE]: {
    scope: A.OAuth2Scopes.RPC,
    validation: N,
    handler: R
  },
  [A.RPCEvents.MESSAGE_DELETE]: {
    scope: A.OAuth2Scopes.RPC,
    validation: N,
    handler: R
  },
  [A.RPCEvents.SPEAKING_START]: {
    [g.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, A.OAuth2Scopes.RPC_VOICE_READ, g.RPC_LOCAL_SCOPE],
    validation: O,
    handler: v
  },
  [A.RPCEvents.SPEAKING_STOP]: {
    [g.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, A.OAuth2Scopes.RPC_VOICE_READ, g.RPC_LOCAL_SCOPE],
    validation: O,
    handler: v
  },
  [A.RPCEvents.GUILD_CREATE]: {
    scope: A.OAuth2Scopes.RPC,
    handler() {}
  },
  [A.RPCEvents.CHANNEL_CREATE]: {
    scope: A.OAuth2Scopes.RPC,
    handler() {}
  },
  [A.RPCEvents.GAME_JOIN]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.GAME_SPECTATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ACTIVITY_JOIN]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, g.RPC_AUTHENTICATED_SCOPE, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ACTIVITY_JOIN_REQUEST]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ACTIVITY_SPECTATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, g.RPC_AUTHENTICATED_SCOPE, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ACTIVITY_INVITE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ACTIVITY_PIP_MODE_UPDATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, g.RPC_AUTHENTICATED_SCOPE, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, g.RPC_AUTHENTICATED_SCOPE, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: S.activityInstanceConnectedParticipantsUpdateEvent,
  [A.RPCEvents.THERMAL_STATE_UPDATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [g.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ORIENTATION_UPDATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [g.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ACTIVITY_INSTANCE_UPDATE]: {
    handler() {}
  },
  [A.RPCEvents.VOICE_CHANNEL_SELECT]: {
    scope: A.OAuth2Scopes.RPC,
    handler() {}
  },
  [A.RPCEvents.NOTIFICATION_CREATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ALL]: [A.OAuth2Scopes.RPC, A.OAuth2Scopes.RPC_NOTIFICATIONS_READ]
    },
    handler() {}
  },
  [A.RPCEvents.RELATIONSHIP_UPDATE]: {
    scope: A.OAuth2Scopes.RELATIONSHIPS_READ,
    handler() {}
  },
  [A.RPCEvents.CURRENT_USER_UPDATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [g.RPC_LOCAL_SCOPE, A.OAuth2Scopes.IDENTIFY]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, a = {
        currentUser: h.default.getCurrentUser()
      };
      return null != a.currentUser && (null == t || !(0, i.default)(a, t)) && n((0, T.default)(a.currentUser)), a
    }
  },
  [A.RPCEvents.LOBBY_UPDATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [g.RPC_AUTHENTICATED_SCOPE, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.LOBBY_DELETE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [g.RPC_AUTHENTICATED_SCOPE, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.LOBBY_MEMBER_CONNECT]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [g.RPC_AUTHENTICATED_SCOPE, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.LOBBY_MEMBER_UPDATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [g.RPC_AUTHENTICATED_SCOPE, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.LOBBY_MEMBER_DISCONNECT]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [g.RPC_AUTHENTICATED_SCOPE, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.LOBBY_MESSAGE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [g.RPC_AUTHENTICATED_SCOPE, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ENTITLEMENT_CREATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [g.RPC_LOCAL_SCOPE, g.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ENTITLEMENT_DELETE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [g.RPC_LOCAL_SCOPE, g.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.USER_ACHIEVEMENT_UPDATE]: {
    scope: g.RPC_LOCAL_SCOPE,
    handler() {}
  },
  [A.RPCEvents.SCREENSHARE_STATE_UPDATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ALL]: [g.RPC_LOCAL_SCOPE, A.OAuth2Scopes.RPC_SCREENSHARE_READ]
    },
    handler: () => e => {
      var t, n;
      let {
        prevState: a,
        dispatch: i
      } = e, u = o.default.getStreamerActiveStreamMetadata(), d = (null == u ? void 0 : u.pid) != null ? r.default.getGameForPID(u.pid) : null, c = (null == d ? void 0 : d.id) != null ? l.default.getApplication(d.id) : null, f = null != c ? (0, p.default)(c) : null, E = null == u ? void 0 : u.sourceName, h = {
        active: null != u,
        pid: null !== (t = null == u ? void 0 : u.pid) && void 0 !== t ? t : null,
        application: (n = null != f, n) ? {
          name: E
        } : null
      };
      return !s.isEqual(h, a) && i(h), h
    }
  },
  [A.RPCEvents.VIDEO_STATE_UPDATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ALL]: [g.RPC_LOCAL_SCOPE, A.OAuth2Scopes.RPC_VIDEO_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, a = {
        active: f.default.isVideoEnabled()
      };
      return !s.isEqual(a, t) && n(a), a
    }
  }
};
var M = L