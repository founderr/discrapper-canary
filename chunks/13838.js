"use strict";
a.r(t), a("47120");
var n = a("392711"),
  s = a.n(n),
  l = a("902704"),
  i = a("812206"),
  r = a("594190"),
  o = a("199902"),
  u = a("592125"),
  d = a("430824"),
  c = a("131951"),
  f = a("19780"),
  E = a("594174"),
  h = a("979651"),
  _ = a("996106"),
  C = a("914946"),
  m = a("238679"),
  S = a("452426"),
  p = a("295424"),
  I = a("863141"),
  T = a("186901"),
  g = a("981631");
let A = e => (0, S.default)(e).required().keys({
  channel_id: e.string().required()
});

function N(e) {
  var t;
  let {
    args: {
      channel_id: a
    },
    socket: n
  } = e, s = u.default.getChannel(a);
  if (null == s || !(0, C.hasMessageReadPermission)(s, n.application.id, n.authorization.scopes)) throw new _.default({
    errorCode: g.RPCErrors.INVALID_CHANNEL
  }, "Invalid channel id: ".concat(a));
  if (s.isNSFW() && (null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) !== !0) throw new _.default({
    errorCode: g.RPCErrors.INVALID_CHANNEL
  }, "Invalid nsfw channel id: ".concat(s.id))
}
let v = e => (0, S.default)(e).keys({
  channel_id: e.string().allow(null)
});

function R(e) {
  let {
    args: {
      channel_id: t
    }
  } = e;
  if (null != t && null == u.default.getChannel(t)) throw new _.default({
    errorCode: g.RPCErrors.INVALID_CHANNEL
  }, "Invalid channel id: ".concat(t))
}
let L = {
  [g.RPCEvents.GUILD_STATUS]: {
    scope: g.OAuth2Scopes.RPC,
    validation: e => (0, S.default)(e).required().keys({
      guild_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          guild_id: t
        }
      } = e;
      if (null == d.default.getGuild(t)) throw new _.default({
        errorCode: g.RPCErrors.INVALID_GUILD
      }, "Invalid guild id: ".concat(t));
      return e => {
        var a;
        let {
          prevState: n,
          dispatch: l
        } = e, i = d.default.getGuild(t);
        if (null == i) return;
        let r = {
          guild: {
            id: i.id,
            name: i.name,
            icon_url: null !== (a = i.getIconURL(128)) && void 0 !== a ? a : null
          },
          online: 0
        };
        return !s().isEqual(n, r) && l(r), r
      }
    }
  },
  [g.RPCEvents.VOICE_STATE_CREATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, g.OAuth2Scopes.RPC_VOICE_READ]
    },
    validation: e => (0, S.default)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == u.default.getChannel(t)) throw new _.default({
        errorCode: g.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: a,
          dispatch: n
        } = e, l = u.default.getChannel(t);
        if (null == l) return;
        let i = l.getGuildId(),
          r = Object.values(h.default.getVoiceStatesForChannel(l.id));
        return a && s().differenceBy(r, a, e => {
          let {
            userId: t
          } = e;
          return t
        }).forEach(e => n((0, C.transformVoiceState)(i, l.id, e))), r
      }
    }
  },
  [g.RPCEvents.VOICE_STATE_DELETE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, g.OAuth2Scopes.RPC_VOICE_READ]
    },
    validation: e => (0, S.default)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == u.default.getChannel(t)) throw new _.default({
        errorCode: g.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: a,
          dispatch: n
        } = e, l = u.default.getChannel(t);
        if (null == l) return;
        let i = l.getGuildId(),
          r = Object.values(h.default.getVoiceStatesForChannel(l.id));
        return s().differenceBy(a, r, e => {
          let {
            userId: t
          } = e;
          return t
        }).forEach(e => n((0, C.transformVoiceState)(i, l.id, e))), r
      }
    }
  },
  [g.RPCEvents.VOICE_STATE_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, g.OAuth2Scopes.RPC_VOICE_READ]
    },
    validation: e => (0, S.default)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == u.default.getChannel(t)) throw new _.default({
        errorCode: g.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: a,
          dispatch: n
        } = e, l = u.default.getChannel(t);
        if (null == l) return;
        let i = l.getGuildId(),
          r = Object.values(h.default.getVoiceStatesForChannel(l.id)).map(e => (0, C.transformVoiceState)(i, l.id, e));
        return s().differenceWith(r, a, s().isEqual).forEach(e => n(e)), r
      }
    }
  },
  [g.RPCEvents.VOICE_CONNECTION_STATUS]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, g.OAuth2Scopes.RPC_VOICE_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: a
      } = e, n = {
        state: (0, C.getVoiceConnectionState)(f.default.getState()),
        hostname: f.default.getHostname(),
        pings: f.default.getPings(),
        average_ping: f.default.getAveragePing(),
        last_ping: f.default.getLastPing()
      };
      return !s().isEqual(n, t) && a(n), n
    }
  },
  [g.RPCEvents.MESSAGE_CREATE]: {
    scope: g.OAuth2Scopes.RPC,
    validation: A,
    handler: N
  },
  [g.RPCEvents.MESSAGE_UPDATE]: {
    scope: g.OAuth2Scopes.RPC,
    validation: A,
    handler: N
  },
  [g.RPCEvents.MESSAGE_DELETE]: {
    scope: g.OAuth2Scopes.RPC,
    validation: A,
    handler: N
  },
  [g.RPCEvents.SPEAKING_START]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, g.OAuth2Scopes.RPC_VOICE_READ, T.RPC_LOCAL_SCOPE]
    },
    validation: v,
    handler: R
  },
  [g.RPCEvents.SPEAKING_STOP]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, g.OAuth2Scopes.RPC_VOICE_READ, T.RPC_LOCAL_SCOPE]
    },
    validation: v,
    handler: R
  },
  [g.RPCEvents.GUILD_CREATE]: {
    scope: g.OAuth2Scopes.RPC,
    handler() {}
  },
  [g.RPCEvents.CHANNEL_CREATE]: {
    scope: g.OAuth2Scopes.RPC,
    handler() {}
  },
  [g.RPCEvents.GAME_JOIN]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.GAME_SPECTATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ACTIVITY_JOIN]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, T.RPC_AUTHENTICATED_SCOPE, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ACTIVITY_JOIN_REQUEST]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ACTIVITY_SPECTATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, T.RPC_AUTHENTICATED_SCOPE, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ACTIVITY_INVITE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ACTIVITY_PIP_MODE_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, T.RPC_AUTHENTICATED_SCOPE, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [g.OAuth2Scopes.RPC, T.RPC_AUTHENTICATED_SCOPE, T.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: m.activityInstanceConnectedParticipantsUpdateEvent,
  [g.RPCEvents.THERMAL_STATE_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [T.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ORIENTATION_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [T.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.VOICE_CHANNEL_SELECT]: {
    scope: g.OAuth2Scopes.RPC,
    handler() {}
  },
  [g.RPCEvents.NOTIFICATION_CREATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ALL]: [g.OAuth2Scopes.RPC, g.OAuth2Scopes.RPC_NOTIFICATIONS_READ]
    },
    handler() {}
  },
  [g.RPCEvents.RELATIONSHIP_UPDATE]: {
    scope: g.OAuth2Scopes.RELATIONSHIPS_READ,
    handler() {}
  },
  [g.RPCEvents.CURRENT_USER_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [T.RPC_LOCAL_SCOPE, g.OAuth2Scopes.IDENTIFY]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: a
      } = e, n = {
        currentUser: E.default.getCurrentUser()
      };
      return null != n.currentUser && (null == t || !(0, l.default)(n, t)) && a((0, I.default)(n.currentUser)), n
    }
  },
  [g.RPCEvents.ENTITLEMENT_CREATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [T.RPC_LOCAL_SCOPE, T.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.ENTITLEMENT_DELETE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ANY]: [T.RPC_LOCAL_SCOPE, T.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [g.RPCEvents.USER_ACHIEVEMENT_UPDATE]: {
    scope: T.RPC_LOCAL_SCOPE,
    handler() {}
  },
  [g.RPCEvents.SCREENSHARE_STATE_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ALL]: [T.RPC_LOCAL_SCOPE, g.OAuth2Scopes.RPC_SCREENSHARE_READ]
    },
    handler: () => e => {
      var t, a;
      let {
        prevState: n,
        dispatch: l
      } = e, u = o.default.getStreamerActiveStreamMetadata(), d = (null == u ? void 0 : u.pid) != null ? r.default.getGameForPID(u.pid) : null, c = (null == d ? void 0 : d.id) != null ? i.default.getApplication(d.id) : null, f = null != c ? (0, p.default)(c) : null, E = null == u ? void 0 : u.sourceName, h = {
        active: null != u,
        pid: null !== (t = null == u ? void 0 : u.pid) && void 0 !== t ? t : null,
        application: (a = null != f, a) ? {
          name: E
        } : null
      };
      return !s().isEqual(h, n) && l(h), h
    }
  },
  [g.RPCEvents.VIDEO_STATE_UPDATE]: {
    scope: {
      [T.RPC_SCOPE_CONFIG.ALL]: [T.RPC_LOCAL_SCOPE, g.OAuth2Scopes.RPC_VIDEO_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: a
      } = e, n = {
        active: c.default.isVideoEnabled()
      };
      return !s().isEqual(n, t) && a(n), n
    }
  }
};
t.default = L