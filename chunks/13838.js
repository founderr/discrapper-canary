n(47120);
var s = n(392711),
  i = n.n(s),
  l = n(243814),
  a = n(902704),
  r = n(812206),
  o = n(594190),
  c = n(199902),
  u = n(592125),
  d = n(271383),
  E = n(430824),
  h = n(131951),
  _ = n(19780),
  I = n(594174),
  m = n(979651),
  T = n(996106),
  g = n(914946),
  p = n(238679),
  N = n(452426),
  S = n(295424),
  C = n(222263),
  A = n(863141),
  f = n(186901),
  Z = n(981631);
let L = e => (0, N.Z)(e).required().keys({
  channel_id: e.string().required()
});

function O(e) {
  var t;
  let {
    args: {
      channel_id: n
    },
    socket: s
  } = e, i = u.Z.getChannel(n);
  if (null == i || !(0, g.zM)(i, s.application.id, s.authorization.scopes)) throw new T.Z({
    errorCode: Z.lTL.INVALID_CHANNEL
  }, "Invalid channel id: ".concat(n));
  if (i.isNSFW() && (null === (t = I.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) !== !0) throw new T.Z({
    errorCode: Z.lTL.INVALID_CHANNEL
  }, "Invalid nsfw channel id: ".concat(i.id))
}
let v = e => (0, N.Z)(e).keys({
  channel_id: e.string().allow(null)
});

function R(e) {
  let {
    args: {
      channel_id: t
    }
  } = e;
  if (null != t && null == u.Z.getChannel(t)) throw new T.Z({
    errorCode: Z.lTL.INVALID_CHANNEL
  }, "Invalid channel id: ".concat(t))
}
let P = {
  [Z.zMe.GUILD_STATUS]: {
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
      if (null == E.Z.getGuild(t)) throw new T.Z({
        errorCode: Z.lTL.INVALID_GUILD
      }, "Invalid guild id: ".concat(t));
      return e => {
        var n;
        let {
          prevState: s,
          dispatch: l
        } = e, a = E.Z.getGuild(t);
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
  [Z.zMe.VOICE_STATE_CREATE]: {
    scope: {
      [f.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
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
      if (null == u.Z.getChannel(t)) throw new T.Z({
        errorCode: Z.lTL.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: s
        } = e, l = u.Z.getChannel(t);
        if (null == l) return;
        let a = l.getGuildId(),
          r = Object.values(m.Z.getVoiceStatesForChannel(l.id));
        return n && i().differenceBy(r, n, e => {
          let {
            userId: t
          } = e;
          return t
        }).forEach(e => s((0, g.aE)(a, l.id, e))), r
      }
    }
  },
  [Z.zMe.VOICE_STATE_DELETE]: {
    scope: {
      [f.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
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
      if (null == u.Z.getChannel(t)) throw new T.Z({
        errorCode: Z.lTL.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: s
        } = e, l = u.Z.getChannel(t);
        if (null == l) return;
        let a = l.getGuildId(),
          r = Object.values(m.Z.getVoiceStatesForChannel(l.id));
        return i().differenceBy(n, r, e => {
          let {
            userId: t
          } = e;
          return t
        }).forEach(e => s((0, g.aE)(a, l.id, e))), r
      }
    }
  },
  [Z.zMe.VOICE_STATE_UPDATE]: {
    scope: {
      [f.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
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
      if (null == u.Z.getChannel(t)) throw new T.Z({
        errorCode: Z.lTL.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: s
        } = e, l = u.Z.getChannel(t);
        if (null == l) return;
        let a = l.getGuildId(),
          r = Object.values(m.Z.getVoiceStatesForChannel(l.id)).map(e => (0, g.aE)(a, l.id, e));
        return i().differenceWith(r, n, i().isEqual).forEach(e => s(e)), r
      }
    }
  },
  [Z.zMe.VOICE_CONNECTION_STATUS]: {
    scope: {
      [f.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, s = {
        state: (0, g.zy)(_.Z.getState()),
        hostname: _.Z.getHostname(),
        pings: _.Z.getPings(),
        average_ping: _.Z.getAveragePing(),
        last_ping: _.Z.getLastPing()
      };
      return !i().isEqual(s, t) && n(s), s
    }
  },
  [Z.zMe.MESSAGE_CREATE]: {
    scope: l.x.RPC,
    validation: L,
    handler: O
  },
  [Z.zMe.MESSAGE_UPDATE]: {
    scope: l.x.RPC,
    validation: L,
    handler: O
  },
  [Z.zMe.MESSAGE_DELETE]: {
    scope: l.x.RPC,
    validation: L,
    handler: O
  },
  [Z.zMe.SPEAKING_START]: {
    scope: {
      [f.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ, f.lH]
    },
    validation: v,
    handler: R
  },
  [Z.zMe.SPEAKING_STOP]: {
    scope: {
      [f.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ, f.lH]
    },
    validation: v,
    handler: R
  },
  [Z.zMe.GUILD_CREATE]: {
    scope: l.x.RPC,
    handler() {}
  },
  [Z.zMe.CHANNEL_CREATE]: {
    scope: l.x.RPC,
    handler() {}
  },
  [Z.zMe.GAME_JOIN]: {
    scope: {
      [f.Gp.ANY]: [l.x.RPC, f.lH]
    },
    handler() {}
  },
  [Z.zMe.GAME_SPECTATE]: {
    scope: {
      [f.Gp.ANY]: [l.x.RPC, f.lH]
    },
    handler() {}
  },
  [Z.zMe.ACTIVITY_JOIN]: {
    scope: {
      [f.Gp.ANY]: [l.x.RPC, f.wE, f.lH]
    },
    handler() {}
  },
  [Z.zMe.ACTIVITY_JOIN_REQUEST]: {
    scope: {
      [f.Gp.ANY]: [l.x.RPC, f.lH]
    },
    handler() {}
  },
  [Z.zMe.ACTIVITY_SPECTATE]: {
    scope: {
      [f.Gp.ANY]: [l.x.RPC, f.wE, f.lH]
    },
    handler() {}
  },
  [Z.zMe.ACTIVITY_INVITE]: {
    scope: {
      [f.Gp.ANY]: [l.x.RPC, f.lH]
    },
    handler() {}
  },
  [Z.zMe.ACTIVITY_PIP_MODE_UPDATE]: {
    scope: {
      [f.Gp.ANY]: [l.x.RPC, f.wE, f.lH]
    },
    handler() {}
  },
  [Z.zMe.ACTIVITY_LAYOUT_MODE_UPDATE]: {
    scope: {
      [f.Gp.ANY]: [l.x.RPC, f.wE, f.lH]
    },
    handler() {}
  },
  [Z.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: p.gQ,
  [Z.zMe.THERMAL_STATE_UPDATE]: {
    scope: {
      [f.Gp.ANY]: [f.wE]
    },
    handler() {}
  },
  [Z.zMe.ORIENTATION_UPDATE]: {
    scope: {
      [f.Gp.ANY]: [f.wE]
    },
    handler() {}
  },
  [Z.zMe.VOICE_CHANNEL_SELECT]: {
    scope: l.x.RPC,
    handler() {}
  },
  [Z.zMe.NOTIFICATION_CREATE]: {
    scope: {
      [f.Gp.ALL]: [l.x.RPC, l.x.RPC_NOTIFICATIONS_READ]
    },
    handler() {}
  },
  [Z.zMe.RELATIONSHIP_UPDATE]: {
    scope: l.x.RELATIONSHIPS_READ,
    handler() {}
  },
  [Z.zMe.CURRENT_USER_UPDATE]: {
    scope: {
      [f.Gp.ANY]: [f.lH, l.x.IDENTIFY]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, s = {
        currentUser: I.default.getCurrentUser()
      };
      return null != s.currentUser && (null == t || !(0, a.Z)(s, t)) && n((0, A.Z)(s.currentUser)), s
    }
  },
  [Z.zMe.CURRENT_GUILD_MEMBER_UPDATE]: {
    scope: {
      [f.Gp.ALL]: [l.x.IDENTIFY, l.x.GUILDS_MEMBERS_READ]
    },
    handler(e) {
      let {
        args: {
          guild_id: t
        }
      } = e;
      return e => {
        let {
          prevState: n,
          dispatch: s
        } = e, i = {
          currentGuildMember: d.ZP.getSelfMember(t)
        };
        return null != i.currentGuildMember && (null == n || !(0, a.Z)(i, n)) && s((0, C.Z)(i.currentGuildMember)), i
      }
    }
  },
  [Z.zMe.ENTITLEMENT_CREATE]: {
    scope: {
      [f.Gp.ANY]: [f.lH, f.wE]
    },
    handler() {}
  },
  [Z.zMe.ENTITLEMENT_DELETE]: {
    scope: {
      [f.Gp.ANY]: [f.lH, f.wE]
    },
    handler() {}
  },
  [Z.zMe.USER_ACHIEVEMENT_UPDATE]: {
    scope: f.lH,
    handler() {}
  },
  [Z.zMe.SCREENSHARE_STATE_UPDATE]: {
    scope: {
      [f.Gp.ALL]: [f.lH, l.x.RPC_SCREENSHARE_READ]
    },
    handler: () => e => {
      var t, n;
      let {
        prevState: s,
        dispatch: l
      } = e, a = c.Z.getStreamerActiveStreamMetadata(), u = (null == a ? void 0 : a.pid) != null ? o.ZP.getGameForPID(a.pid) : null, d = (null == u ? void 0 : u.id) != null ? r.Z.getApplication(u.id) : null, E = null != d ? (0, S.Z)(d) : null, h = null == a ? void 0 : a.sourceName, _ = {
        active: null != a,
        pid: null !== (t = null == a ? void 0 : a.pid) && void 0 !== t ? t : null,
        application: (n = null != E, n) ? {
          name: h
        } : null
      };
      return !i().isEqual(_, s) && l(_), _
    }
  },
  [Z.zMe.VIDEO_STATE_UPDATE]: {
    scope: {
      [f.Gp.ALL]: [f.lH, l.x.RPC_VIDEO_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, s = {
        active: h.Z.isVideoEnabled()
      };
      return !i().isEqual(s, t) && n(s), s
    }
  }
};
t.Z = P