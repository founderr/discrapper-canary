n(47120);
var i = n(392711),
  s = n.n(i),
  l = n(243814),
  a = n(902704),
  r = n(812206),
  o = n(594190),
  c = n(199902),
  u = n(592125),
  d = n(430824),
  E = n(131951),
  h = n(19780),
  _ = n(594174),
  I = n(979651),
  m = n(996106),
  g = n(914946),
  p = n(238679),
  N = n(452426),
  T = n(295424),
  C = n(863141),
  S = n(186901),
  A = n(981631);
let f = e => (0, N.Z)(e).required().keys({
  channel_id: e.string().required()
});

function Z(e) {
  var t;
  let {
    args: {
      channel_id: n
    },
    socket: i
  } = e, s = u.Z.getChannel(n);
  if (null == s || !(0, g.zM)(s, i.application.id, i.authorization.scopes)) throw new m.Z({
    errorCode: A.lTL.INVALID_CHANNEL
  }, "Invalid channel id: ".concat(n));
  if (s.isNSFW() && (null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) !== !0) throw new m.Z({
    errorCode: A.lTL.INVALID_CHANNEL
  }, "Invalid nsfw channel id: ".concat(s.id))
}
let v = e => (0, N.Z)(e).keys({
  channel_id: e.string().allow(null)
});

function L(e) {
  let {
    args: {
      channel_id: t
    }
  } = e;
  if (null != t && null == u.Z.getChannel(t)) throw new m.Z({
    errorCode: A.lTL.INVALID_CHANNEL
  }, "Invalid channel id: ".concat(t))
}
let O = {
  [A.zMe.GUILD_STATUS]: {
    scope: l.x.RPC,
    validation: e => (0, N.Z)(e).required().keys({
      guild_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          guild_id: t
        }
      } = e;
      if (null == d.Z.getGuild(t)) throw new m.Z({
        errorCode: A.lTL.INVALID_GUILD
      }, "Invalid guild id: ".concat(t));
      return e => {
        var n;
        let {
          prevState: i,
          dispatch: l
        } = e, a = d.Z.getGuild(t);
        if (null == a) return;
        let r = {
          guild: {
            id: a.id,
            name: a.name,
            icon_url: null !== (n = a.getIconURL(128)) && void 0 !== n ? n : null
          },
          online: 0
        };
        return !s().isEqual(i, r) && l(r), r
      }
    }
  },
  [A.zMe.VOICE_STATE_CREATE]: {
    scope: {
      [S.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
    },
    validation: e => (0, N.Z)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == u.Z.getChannel(t)) throw new m.Z({
        errorCode: A.lTL.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: i
        } = e, l = u.Z.getChannel(t);
        if (null == l) return;
        let a = l.getGuildId(),
          r = Object.values(I.Z.getVoiceStatesForChannel(l.id));
        return n && s().differenceBy(r, n, e => {
          let {
            userId: t
          } = e;
          return t
        }).forEach(e => i((0, g.aE)(a, l.id, e))), r
      }
    }
  },
  [A.zMe.VOICE_STATE_DELETE]: {
    scope: {
      [S.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
    },
    validation: e => (0, N.Z)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == u.Z.getChannel(t)) throw new m.Z({
        errorCode: A.lTL.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: i
        } = e, l = u.Z.getChannel(t);
        if (null == l) return;
        let a = l.getGuildId(),
          r = Object.values(I.Z.getVoiceStatesForChannel(l.id));
        return s().differenceBy(n, r, e => {
          let {
            userId: t
          } = e;
          return t
        }).forEach(e => i((0, g.aE)(a, l.id, e))), r
      }
    }
  },
  [A.zMe.VOICE_STATE_UPDATE]: {
    scope: {
      [S.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
    },
    validation: e => (0, N.Z)(e).required().keys({
      channel_id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == u.Z.getChannel(t)) throw new m.Z({
        errorCode: A.lTL.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: i
        } = e, l = u.Z.getChannel(t);
        if (null == l) return;
        let a = l.getGuildId(),
          r = Object.values(I.Z.getVoiceStatesForChannel(l.id)).map(e => (0, g.aE)(a, l.id, e));
        return s().differenceWith(r, n, s().isEqual).forEach(e => i(e)), r
      }
    }
  },
  [A.zMe.VOICE_CONNECTION_STATUS]: {
    scope: {
      [S.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, i = {
        state: (0, g.zy)(h.Z.getState()),
        hostname: h.Z.getHostname(),
        pings: h.Z.getPings(),
        average_ping: h.Z.getAveragePing(),
        last_ping: h.Z.getLastPing()
      };
      return !s().isEqual(i, t) && n(i), i
    }
  },
  [A.zMe.MESSAGE_CREATE]: {
    scope: l.x.RPC,
    validation: f,
    handler: Z
  },
  [A.zMe.MESSAGE_UPDATE]: {
    scope: l.x.RPC,
    validation: f,
    handler: Z
  },
  [A.zMe.MESSAGE_DELETE]: {
    scope: l.x.RPC,
    validation: f,
    handler: Z
  },
  [A.zMe.SPEAKING_START]: {
    scope: {
      [S.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ, S.lH]
    },
    validation: v,
    handler: L
  },
  [A.zMe.SPEAKING_STOP]: {
    scope: {
      [S.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ, S.lH]
    },
    validation: v,
    handler: L
  },
  [A.zMe.GUILD_CREATE]: {
    scope: l.x.RPC,
    handler() {}
  },
  [A.zMe.CHANNEL_CREATE]: {
    scope: l.x.RPC,
    handler() {}
  },
  [A.zMe.GAME_JOIN]: {
    scope: {
      [S.Gp.ANY]: [l.x.RPC, S.lH]
    },
    handler() {}
  },
  [A.zMe.GAME_SPECTATE]: {
    scope: {
      [S.Gp.ANY]: [l.x.RPC, S.lH]
    },
    handler() {}
  },
  [A.zMe.ACTIVITY_JOIN]: {
    scope: {
      [S.Gp.ANY]: [l.x.RPC, S.wE, S.lH]
    },
    handler() {}
  },
  [A.zMe.ACTIVITY_JOIN_REQUEST]: {
    scope: {
      [S.Gp.ANY]: [l.x.RPC, S.lH]
    },
    handler() {}
  },
  [A.zMe.ACTIVITY_SPECTATE]: {
    scope: {
      [S.Gp.ANY]: [l.x.RPC, S.wE, S.lH]
    },
    handler() {}
  },
  [A.zMe.ACTIVITY_INVITE]: {
    scope: {
      [S.Gp.ANY]: [l.x.RPC, S.lH]
    },
    handler() {}
  },
  [A.zMe.ACTIVITY_PIP_MODE_UPDATE]: {
    scope: {
      [S.Gp.ANY]: [l.x.RPC, S.wE, S.lH]
    },
    handler() {}
  },
  [A.zMe.ACTIVITY_LAYOUT_MODE_UPDATE]: {
    scope: {
      [S.Gp.ANY]: [l.x.RPC, S.wE, S.lH]
    },
    handler() {}
  },
  [A.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: p.gQ,
  [A.zMe.THERMAL_STATE_UPDATE]: {
    scope: {
      [S.Gp.ANY]: [S.wE]
    },
    handler() {}
  },
  [A.zMe.ORIENTATION_UPDATE]: {
    scope: {
      [S.Gp.ANY]: [S.wE]
    },
    handler() {}
  },
  [A.zMe.VOICE_CHANNEL_SELECT]: {
    scope: l.x.RPC,
    handler() {}
  },
  [A.zMe.NOTIFICATION_CREATE]: {
    scope: {
      [S.Gp.ALL]: [l.x.RPC, l.x.RPC_NOTIFICATIONS_READ]
    },
    handler() {}
  },
  [A.zMe.RELATIONSHIP_UPDATE]: {
    scope: l.x.RELATIONSHIPS_READ,
    handler() {}
  },
  [A.zMe.CURRENT_USER_UPDATE]: {
    scope: {
      [S.Gp.ANY]: [S.lH, l.x.IDENTIFY]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, i = {
        currentUser: _.default.getCurrentUser()
      };
      return null != i.currentUser && (null == t || !(0, a.Z)(i, t)) && n((0, C.Z)(i.currentUser)), i
    }
  },
  [A.zMe.ENTITLEMENT_CREATE]: {
    scope: {
      [S.Gp.ANY]: [S.lH, S.wE]
    },
    handler() {}
  },
  [A.zMe.ENTITLEMENT_DELETE]: {
    scope: {
      [S.Gp.ANY]: [S.lH, S.wE]
    },
    handler() {}
  },
  [A.zMe.USER_ACHIEVEMENT_UPDATE]: {
    scope: S.lH,
    handler() {}
  },
  [A.zMe.SCREENSHARE_STATE_UPDATE]: {
    scope: {
      [S.Gp.ALL]: [S.lH, l.x.RPC_SCREENSHARE_READ]
    },
    handler: () => e => {
      var t, n;
      let {
        prevState: i,
        dispatch: l
      } = e, a = c.Z.getStreamerActiveStreamMetadata(), u = (null == a ? void 0 : a.pid) != null ? o.ZP.getGameForPID(a.pid) : null, d = (null == u ? void 0 : u.id) != null ? r.Z.getApplication(u.id) : null, E = null != d ? (0, T.Z)(d) : null, h = null == a ? void 0 : a.sourceName, _ = {
        active: null != a,
        pid: null !== (t = null == a ? void 0 : a.pid) && void 0 !== t ? t : null,
        application: (n = null != E, n) ? {
          name: h
        } : null
      };
      return !s().isEqual(_, i) && l(_), _
    }
  },
  [A.zMe.VIDEO_STATE_UPDATE]: {
    scope: {
      [S.Gp.ALL]: [S.lH, l.x.RPC_VIDEO_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, i = {
        active: E.Z.isVideoEnabled()
      };
      return !s().isEqual(i, t) && n(i), i
    }
  }
};
t.Z = O