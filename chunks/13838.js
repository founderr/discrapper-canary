"use strict";
n.r(t), n("47120");
var a = n("392711"),
  s = n.n(a),
  l = n("902704"),
  i = n("812206"),
  r = n("594190"),
  o = n("199902"),
  u = n("592125"),
  d = n("430824"),
  c = n("157305"),
  f = n("131951"),
  E = n("19780"),
  _ = n("594174"),
  h = n("979651"),
  C = n("996106"),
  m = n("914946"),
  S = n("238679"),
  I = n("452426"),
  T = n("295424"),
  p = n("863141"),
  g = n("186901"),
  N = n("981631");
let A = e => (0, I.default)(e).required().keys({
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
  if (null == s || !(0, m.hasMessageReadPermission)(s, a.application.id, a.authorization.scopes)) throw new C.default({
    errorCode: N.RPCErrors.INVALID_CHANNEL
  }, "Invalid channel id: ".concat(n));
  if (s.isNSFW() && (null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) !== !0) throw new C.default({
    errorCode: N.RPCErrors.INVALID_CHANNEL
  }, "Invalid nsfw channel id: ".concat(s.id))
}
let O = e => (0, I.default)(e).keys({
  lobby_id: e.string().allow(null),
  channel_id: e.string().allow(null)
});

function v(e) {
  let {
    args: {
      lobby_id: t,
      channel_id: n
    }
  } = e;
  if (null != n && null == u.default.getChannel(n)) throw new C.default({
    errorCode: N.RPCErrors.INVALID_CHANNEL
  }, "Invalid channel id: ".concat(n));
  if (null != t && null == c.default.getLobby(t)) throw new C.default({
    errorCode: N.RPCErrors.INVALID_LOBBY
  }, "Invalid lobby id: ".concat(t))
}
let L = {
  [N.RPCEvents.GUILD_STATUS]: {
    scope: N.OAuth2Scopes.RPC,
    validation: e => (0, I.default)(e).required().keys({
      guild_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          guild_id: t
        }
      } = e;
      if (null == d.default.getGuild(t)) throw new C.default({
        errorCode: N.RPCErrors.INVALID_GUILD
      }, "Invalid guild id: ".concat(t));
      return e => {
        var n;
        let {
          prevState: a,
          dispatch: l
        } = e, i = d.default.getGuild(t);
        if (null == i) return;
        let r = {
          guild: {
            id: i.id,
            name: i.name,
            icon_url: null !== (n = i.getIconURL(128)) && void 0 !== n ? n : null
          },
          online: 0
        };
        return !s().isEqual(a, r) && l(r), r
      }
    }
  },
  [N.RPCEvents.VOICE_STATE_CREATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [N.OAuth2Scopes.RPC, N.OAuth2Scopes.RPC_VOICE_READ]
    },
    validation: e => (0, I.default)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == u.default.getChannel(t)) throw new C.default({
        errorCode: N.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: a
        } = e, l = u.default.getChannel(t);
        if (null == l) return;
        let i = l.getGuildId(),
          r = Object.values(h.default.getVoiceStatesForChannel(l.id));
        return n && s().differenceBy(r, n, e => {
          let {
            userId: t
          } = e;
          return t
        }).forEach(e => a((0, m.transformVoiceState)(i, l.id, e))), r
      }
    }
  },
  [N.RPCEvents.VOICE_STATE_DELETE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [N.OAuth2Scopes.RPC, N.OAuth2Scopes.RPC_VOICE_READ]
    },
    validation: e => (0, I.default)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == u.default.getChannel(t)) throw new C.default({
        errorCode: N.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: a
        } = e, l = u.default.getChannel(t);
        if (null == l) return;
        let i = l.getGuildId(),
          r = Object.values(h.default.getVoiceStatesForChannel(l.id));
        return s().differenceBy(n, r, e => {
          let {
            userId: t
          } = e;
          return t
        }).forEach(e => a((0, m.transformVoiceState)(i, l.id, e))), r
      }
    }
  },
  [N.RPCEvents.VOICE_STATE_UPDATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [N.OAuth2Scopes.RPC, N.OAuth2Scopes.RPC_VOICE_READ]
    },
    validation: e => (0, I.default)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == u.default.getChannel(t)) throw new C.default({
        errorCode: N.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: a
        } = e, l = u.default.getChannel(t);
        if (null == l) return;
        let i = l.getGuildId(),
          r = Object.values(h.default.getVoiceStatesForChannel(l.id)).map(e => (0, m.transformVoiceState)(i, l.id, e));
        return s().differenceWith(r, n, s().isEqual).forEach(e => a(e)), r
      }
    }
  },
  [N.RPCEvents.VOICE_CONNECTION_STATUS]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [N.OAuth2Scopes.RPC, N.OAuth2Scopes.RPC_VOICE_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, a = {
        state: (0, m.getVoiceConnectionState)(E.default.getState()),
        hostname: E.default.getHostname(),
        pings: E.default.getPings(),
        average_ping: E.default.getAveragePing(),
        last_ping: E.default.getLastPing()
      };
      return !s().isEqual(a, t) && n(a), a
    }
  },
  [N.RPCEvents.MESSAGE_CREATE]: {
    scope: N.OAuth2Scopes.RPC,
    validation: A,
    handler: R
  },
  [N.RPCEvents.MESSAGE_UPDATE]: {
    scope: N.OAuth2Scopes.RPC,
    validation: A,
    handler: R
  },
  [N.RPCEvents.MESSAGE_DELETE]: {
    scope: N.OAuth2Scopes.RPC,
    validation: A,
    handler: R
  },
  [N.RPCEvents.SPEAKING_START]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [N.OAuth2Scopes.RPC, N.OAuth2Scopes.RPC_VOICE_READ, g.RPC_LOCAL_SCOPE]
    },
    validation: O,
    handler: v
  },
  [N.RPCEvents.SPEAKING_STOP]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [N.OAuth2Scopes.RPC, N.OAuth2Scopes.RPC_VOICE_READ, g.RPC_LOCAL_SCOPE]
    },
    validation: O,
    handler: v
  },
  [N.RPCEvents.GUILD_CREATE]: {
    scope: N.OAuth2Scopes.RPC,
    handler() {}
  },
  [N.RPCEvents.CHANNEL_CREATE]: {
    scope: N.OAuth2Scopes.RPC,
    handler() {}
  },
  [N.RPCEvents.GAME_JOIN]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [N.OAuth2Scopes.RPC, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [N.RPCEvents.GAME_SPECTATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [N.OAuth2Scopes.RPC, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [N.RPCEvents.ACTIVITY_JOIN]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [N.OAuth2Scopes.RPC, g.RPC_AUTHENTICATED_SCOPE, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [N.RPCEvents.ACTIVITY_JOIN_REQUEST]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [N.OAuth2Scopes.RPC, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [N.RPCEvents.ACTIVITY_SPECTATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [N.OAuth2Scopes.RPC, g.RPC_AUTHENTICATED_SCOPE, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [N.RPCEvents.ACTIVITY_INVITE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [N.OAuth2Scopes.RPC, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [N.RPCEvents.ACTIVITY_PIP_MODE_UPDATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [N.OAuth2Scopes.RPC, g.RPC_AUTHENTICATED_SCOPE, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [N.RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [N.OAuth2Scopes.RPC, g.RPC_AUTHENTICATED_SCOPE, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [N.RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: S.activityInstanceConnectedParticipantsUpdateEvent,
  [N.RPCEvents.THERMAL_STATE_UPDATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [g.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [N.RPCEvents.ORIENTATION_UPDATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [g.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [N.RPCEvents.ACTIVITY_INSTANCE_UPDATE]: {
    handler() {}
  },
  [N.RPCEvents.VOICE_CHANNEL_SELECT]: {
    scope: N.OAuth2Scopes.RPC,
    handler() {}
  },
  [N.RPCEvents.NOTIFICATION_CREATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ALL]: [N.OAuth2Scopes.RPC, N.OAuth2Scopes.RPC_NOTIFICATIONS_READ]
    },
    handler() {}
  },
  [N.RPCEvents.RELATIONSHIP_UPDATE]: {
    scope: N.OAuth2Scopes.RELATIONSHIPS_READ,
    handler() {}
  },
  [N.RPCEvents.CURRENT_USER_UPDATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [g.RPC_LOCAL_SCOPE, N.OAuth2Scopes.IDENTIFY]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, a = {
        currentUser: _.default.getCurrentUser()
      };
      return null != a.currentUser && (null == t || !(0, l.default)(a, t)) && n((0, p.default)(a.currentUser)), a
    }
  },
  [N.RPCEvents.LOBBY_UPDATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [g.RPC_AUTHENTICATED_SCOPE, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [N.RPCEvents.LOBBY_DELETE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [g.RPC_AUTHENTICATED_SCOPE, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [N.RPCEvents.LOBBY_MEMBER_CONNECT]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [g.RPC_AUTHENTICATED_SCOPE, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [N.RPCEvents.LOBBY_MEMBER_UPDATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [g.RPC_AUTHENTICATED_SCOPE, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [N.RPCEvents.LOBBY_MEMBER_DISCONNECT]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [g.RPC_AUTHENTICATED_SCOPE, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [N.RPCEvents.LOBBY_MESSAGE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [g.RPC_AUTHENTICATED_SCOPE, g.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [N.RPCEvents.ENTITLEMENT_CREATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [g.RPC_LOCAL_SCOPE, g.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [N.RPCEvents.ENTITLEMENT_DELETE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ANY]: [g.RPC_LOCAL_SCOPE, g.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [N.RPCEvents.USER_ACHIEVEMENT_UPDATE]: {
    scope: g.RPC_LOCAL_SCOPE,
    handler() {}
  },
  [N.RPCEvents.SCREENSHARE_STATE_UPDATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ALL]: [g.RPC_LOCAL_SCOPE, N.OAuth2Scopes.RPC_SCREENSHARE_READ]
    },
    handler: () => e => {
      var t, n;
      let {
        prevState: a,
        dispatch: l
      } = e, u = o.default.getStreamerActiveStreamMetadata(), d = (null == u ? void 0 : u.pid) != null ? r.default.getGameForPID(u.pid) : null, c = (null == d ? void 0 : d.id) != null ? i.default.getApplication(d.id) : null, f = null != c ? (0, T.default)(c) : null, E = null == u ? void 0 : u.sourceName, _ = {
        active: null != u,
        pid: null !== (t = null == u ? void 0 : u.pid) && void 0 !== t ? t : null,
        application: (n = null != f, n) ? {
          name: E
        } : null
      };
      return !s().isEqual(_, a) && l(_), _
    }
  },
  [N.RPCEvents.VIDEO_STATE_UPDATE]: {
    scope: {
      [g.RPC_SCOPE_CONFIG.ALL]: [g.RPC_LOCAL_SCOPE, N.OAuth2Scopes.RPC_VIDEO_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, a = {
        active: f.default.isVideoEnabled()
      };
      return !s().isEqual(a, t) && n(a), a
    }
  }
};
t.default = L