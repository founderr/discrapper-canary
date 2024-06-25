n(47120);
var s = n(392711),
  i = n.n(s),
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
  T = n(914946),
  g = n(238679),
  p = n(452426),
  N = n(295424),
  S = n(863141),
  C = n(186901),
  A = n(981631);
let f = e => (0, p.Z)(e).required().keys({
  channel_id: e.string().required()
});

function Z(e) {
  var t;
  let {
    args: {
      channel_id: n
    },
    socket: s
  } = e, i = u.Z.getChannel(n);
  if (null == i || !(0, T.zM)(i, s.application.id, s.authorization.scopes)) throw new m.Z({
    errorCode: A.lTL.INVALID_CHANNEL
  }, "Invalid channel id: ".concat(n));
  if (i.isNSFW() && (null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) !== !0) throw new m.Z({
    errorCode: A.lTL.INVALID_CHANNEL
  }, "Invalid nsfw channel id: ".concat(i.id))
}
let L = e => (0, p.Z)(e).keys({
  channel_id: e.string().allow(null)
});

function O(e) {
  let {
    args: {
      channel_id: t
    }
  } = e;
  if (null != t && null == u.Z.getChannel(t)) throw new m.Z({
    errorCode: A.lTL.INVALID_CHANNEL
  }, "Invalid channel id: ".concat(t))
}
let v = {
  [A.zMe.GUILD_STATUS]: {
    scope: l.x.RPC,
    validation: e => (0, p.Z)(e).required().keys({
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
          prevState: s,
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
        return !i().isEqual(s, r) && l(r), r
      }
    }
  },
  [A.zMe.VOICE_STATE_CREATE]: {
    scope: {
      [C.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
    },
    validation: e => (0, p.Z)(e).required().keys({
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
          dispatch: s
        } = e, l = u.Z.getChannel(t);
        if (null == l) return;
        let a = l.getGuildId(),
          r = Object.values(I.Z.getVoiceStatesForChannel(l.id));
        return n && i().differenceBy(r, n, e => {
          let {
            userId: t
          } = e;
          return t
        }).forEach(e => s((0, T.aE)(a, l.id, e))), r
      }
    }
  },
  [A.zMe.VOICE_STATE_DELETE]: {
    scope: {
      [C.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
    },
    validation: e => (0, p.Z)(e).required().keys({
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
          dispatch: s
        } = e, l = u.Z.getChannel(t);
        if (null == l) return;
        let a = l.getGuildId(),
          r = Object.values(I.Z.getVoiceStatesForChannel(l.id));
        return i().differenceBy(n, r, e => {
          let {
            userId: t
          } = e;
          return t
        }).forEach(e => s((0, T.aE)(a, l.id, e))), r
      }
    }
  },
  [A.zMe.VOICE_STATE_UPDATE]: {
    scope: {
      [C.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
    },
    validation: e => (0, p.Z)(e).required().keys({
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
          dispatch: s
        } = e, l = u.Z.getChannel(t);
        if (null == l) return;
        let a = l.getGuildId(),
          r = Object.values(I.Z.getVoiceStatesForChannel(l.id)).map(e => (0, T.aE)(a, l.id, e));
        return i().differenceWith(r, n, i().isEqual).forEach(e => s(e)), r
      }
    }
  },
  [A.zMe.VOICE_CONNECTION_STATUS]: {
    scope: {
      [C.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, s = {
        state: (0, T.zy)(h.Z.getState()),
        hostname: h.Z.getHostname(),
        pings: h.Z.getPings(),
        average_ping: h.Z.getAveragePing(),
        last_ping: h.Z.getLastPing()
      };
      return !i().isEqual(s, t) && n(s), s
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
      [C.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ, C.lH]
    },
    validation: L,
    handler: O
  },
  [A.zMe.SPEAKING_STOP]: {
    scope: {
      [C.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ, C.lH]
    },
    validation: L,
    handler: O
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
      [C.Gp.ANY]: [l.x.RPC, C.lH]
    },
    handler() {}
  },
  [A.zMe.GAME_SPECTATE]: {
    scope: {
      [C.Gp.ANY]: [l.x.RPC, C.lH]
    },
    handler() {}
  },
  [A.zMe.ACTIVITY_JOIN]: {
    scope: {
      [C.Gp.ANY]: [l.x.RPC, C.wE, C.lH]
    },
    handler() {}
  },
  [A.zMe.ACTIVITY_JOIN_REQUEST]: {
    scope: {
      [C.Gp.ANY]: [l.x.RPC, C.lH]
    },
    handler() {}
  },
  [A.zMe.ACTIVITY_SPECTATE]: {
    scope: {
      [C.Gp.ANY]: [l.x.RPC, C.wE, C.lH]
    },
    handler() {}
  },
  [A.zMe.ACTIVITY_INVITE]: {
    scope: {
      [C.Gp.ANY]: [l.x.RPC, C.lH]
    },
    handler() {}
  },
  [A.zMe.ACTIVITY_PIP_MODE_UPDATE]: {
    scope: {
      [C.Gp.ANY]: [l.x.RPC, C.wE, C.lH]
    },
    handler() {}
  },
  [A.zMe.ACTIVITY_LAYOUT_MODE_UPDATE]: {
    scope: {
      [C.Gp.ANY]: [l.x.RPC, C.wE, C.lH]
    },
    handler() {}
  },
  [A.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: g.gQ,
  [A.zMe.THERMAL_STATE_UPDATE]: {
    scope: {
      [C.Gp.ANY]: [C.wE]
    },
    handler() {}
  },
  [A.zMe.ORIENTATION_UPDATE]: {
    scope: {
      [C.Gp.ANY]: [C.wE]
    },
    handler() {}
  },
  [A.zMe.VOICE_CHANNEL_SELECT]: {
    scope: l.x.RPC,
    handler() {}
  },
  [A.zMe.NOTIFICATION_CREATE]: {
    scope: {
      [C.Gp.ALL]: [l.x.RPC, l.x.RPC_NOTIFICATIONS_READ]
    },
    handler() {}
  },
  [A.zMe.RELATIONSHIP_UPDATE]: {
    scope: l.x.RELATIONSHIPS_READ,
    handler() {}
  },
  [A.zMe.CURRENT_USER_UPDATE]: {
    scope: {
      [C.Gp.ANY]: [C.lH, l.x.IDENTIFY]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, s = {
        currentUser: _.default.getCurrentUser()
      };
      return null != s.currentUser && (null == t || !(0, a.Z)(s, t)) && n((0, S.Z)(s.currentUser)), s
    }
  },
  [A.zMe.ENTITLEMENT_CREATE]: {
    scope: {
      [C.Gp.ANY]: [C.lH, C.wE]
    },
    handler() {}
  },
  [A.zMe.ENTITLEMENT_DELETE]: {
    scope: {
      [C.Gp.ANY]: [C.lH, C.wE]
    },
    handler() {}
  },
  [A.zMe.USER_ACHIEVEMENT_UPDATE]: {
    scope: C.lH,
    handler() {}
  },
  [A.zMe.SCREENSHARE_STATE_UPDATE]: {
    scope: {
      [C.Gp.ALL]: [C.lH, l.x.RPC_SCREENSHARE_READ]
    },
    handler: () => e => {
      var t, n;
      let {
        prevState: s,
        dispatch: l
      } = e, a = c.Z.getStreamerActiveStreamMetadata(), u = (null == a ? void 0 : a.pid) != null ? o.ZP.getGameForPID(a.pid) : null, d = (null == u ? void 0 : u.id) != null ? r.Z.getApplication(u.id) : null, E = null != d ? (0, N.Z)(d) : null, h = null == a ? void 0 : a.sourceName, _ = {
        active: null != a,
        pid: null !== (t = null == a ? void 0 : a.pid) && void 0 !== t ? t : null,
        application: (n = null != E, n) ? {
          name: h
        } : null
      };
      return !i().isEqual(_, s) && l(_), _
    }
  },
  [A.zMe.VIDEO_STATE_UPDATE]: {
    scope: {
      [C.Gp.ALL]: [C.lH, l.x.RPC_VIDEO_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, s = {
        active: E.Z.isVideoEnabled()
      };
      return !i().isEqual(s, t) && n(s), s
    }
  }
};
t.Z = v