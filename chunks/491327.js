n(47120);
var i = n(392711),
  s = n.n(i),
  l = n(243814),
  a = n(447543),
  r = n(287734),
  o = n(703656),
  c = n(131704),
  u = n(592125),
  d = n(430824),
  E = n(496675),
  h = n(944486),
  _ = n(979651),
  I = n(934415),
  m = n(996106),
  g = n(914946),
  p = n(452426),
  T = n(561205),
  N = n(186901),
  S = n(981631);
t.Z = {
  [S.Etm.GET_CHANNEL]: {
    scope: {
      [N.Gp.ANY]: [l.x.RPC, l.x.GUILDS]
    },
    handler(e) {
      let {
        args: {
          channel_id: t
        },
        socket: n
      } = e, i = u.Z.getChannel(t);
      if (null == i) throw new m.Z({
        errorCode: S.lTL.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      if (i.isPrivate()) {
        let e = n.authorization.scopes;
        if (!e.includes(l.x.RPC) && !e.includes(l.x.DM_CHANNELS_READ)) throw new m.Z({
          errorCode: S.lTL.INVALID_PERMISSIONS
        }, "Invalid scope")
      }
      return (0, g.T5)(i, (0, g.zM)(i, n.application.id, n.authorization.scopes))
    }
  },
  [S.Etm.GET_CHANNELS]: {
    scope: l.x.RPC,
    handler(e) {
      let {
        args: {
          guild_id: t
        }
      } = e, n = s().values(u.Z.loadAllGuildAndPrivateChannelsFromDisk());
      if (t) {
        let e = d.Z.getGuild(t);
        if (null == e) throw new m.Z({
          errorCode: S.lTL.INVALID_GUILD
        }, "Invalid guild id: ".concat(t));
        n = n.filter(t => {
          let {
            guild_id: n
          } = t;
          return n === e.id
        })
      }
      return {
        channels: n.filter(e => E.Z.can(S.Plq.VIEW_CHANNEL, e)).map(e => {
          let {
            id: t,
            name: n,
            type: i
          } = e;
          return {
            id: t,
            name: n,
            type: i
          }
        })
      }
    }
  },
  [S.Etm.GET_CHANNEL_PERMISSIONS]: {
    scope: l.x.GUILDS_MEMBERS_READ,
    handler(e) {
      let t = (0, T.Z)();
      if (null == t) throw new m.Z({
        errorCode: S.lTL.INVALID_CHANNEL
      }, "Invalid channel");
      return {
        permissions: E.Z.computePermissions(t)
      }
    }
  },
  [S.Etm.SELECT_VOICE_CHANNEL]: {
    scope: l.x.RPC,
    validation: e => (0, p.Z)(e).required().keys({
      channel_id: e.string().allow(null),
      timeout: e.number().min(0).max(60),
      force: e.boolean(),
      navigate: e.boolean()
    }),
    handler(e) {
      let {
        server: t,
        socket: n,
        args: {
          channel_id: i,
          timeout: s = 0,
          force: l = !1,
          navigate: a = !1
        }
      } = e;
      if (!i) return r.default.selectVoiceChannel(null), null;
      let p = h.Z.getVoiceChannelId();
      if (null != p && p !== i && !1 === l) throw new m.Z({
        errorCode: S.lTL.SELECT_VOICE_FORCE_REQUIRED
      }, "User is already joined to a voice channel.");
      return t.storeWait(n, () => u.Z.getChannel(i), s).catch(() => {
        throw new m.Z({
          errorCode: S.lTL.SELECT_CHANNEL_TIMED_OUT
        }, "Request to select voice channel timed out.")
      }).then(e => {
        if (null == e) throw new m.Z({
          errorCode: S.lTL.INVALID_CHANNEL
        }, "Invalid channel id: ".concat(i));
        if (!(0, c.vd)(e.type)) throw new m.Z({
          errorCode: S.lTL.INVALID_CHANNEL
        }, "Channel is not a voice channel");
        return Promise.all([Promise.resolve(e), (0, g.T5)(e, (0, g.zM)(e, n.application.id, n.authorization.scopes))])
      }).then(e => {
        let [t, n] = e;
        if (n.guild_id) {
          if ((0, I.rY)(t, _.Z, d.Z)) throw new m.Z({
            errorCode: S.lTL.INVALID_CHANNEL
          }, "Channel is full");
          if (!E.Z.can(S.Plq.CONNECT, t)) throw new m.Z({
            errorCode: S.lTL.INVALID_PERMISSIONS
          }, "Connect permission required to join channel")
        }
        return r.default.selectVoiceChannel(t.id), a && (0, o.dL)(S.Z5c.CHANNEL(t.guild_id, t.id)), n
      })
    }
  },
  [S.Etm.GET_SELECTED_VOICE_CHANNEL]: {
    scope: {
      [N.Gp.ANY]: [l.x.RPC, l.x.RPC_VOICE_READ]
    },
    handler(e) {
      let {
        socket: t
      } = e, n = h.Z.getVoiceChannelId(), i = null != n ? u.Z.getChannel(n) : null;
      return null != i ? (0, g.T5)(i, (0, g.zM)(i, t.application.id, t.authorization.scopes)) : null
    }
  },
  [S.Etm.SELECT_TEXT_CHANNEL]: {
    scope: l.x.RPC,
    validation: e => (0, p.Z)(e).required().keys({
      channel_id: e.string().allow(null),
      timeout: e.number().min(0).max(60)
    }),
    handler(e) {
      let {
        server: t,
        socket: n,
        args: {
          channel_id: i,
          timeout: s = 0
        }
      } = e;
      return i ? t.storeWait(n, () => u.Z.getChannel(i), s).catch(() => {
        throw new m.Z({
          errorCode: S.lTL.SELECT_CHANNEL_TIMED_OUT
        }, "Request to select text channel timed out.")
      }).then(e => {
        if (null == e) throw new m.Z({
          errorCode: S.lTL.INVALID_CHANNEL
        }, "Invalid channel id: ".concat(i));
        if (!(0, c.Qm)(e.type)) throw new m.Z({
          errorCode: S.lTL.INVALID_CHANNEL
        }, "Channel is not a text channel");
        return Promise.all([Promise.resolve(e), (0, g.T5)(e, (0, g.zM)(e, n.application.id, n.authorization.scopes))])
      }).then(e => {
        let [t, n] = e;
        if (n.guild_id && !E.Z.can(S.Plq.VIEW_CHANNEL, t)) throw new m.Z({
          errorCode: S.lTL.INVALID_CHANNEL
        }, "No permission to see channel");
        return n.guild_id ? (0, o.dL)(S.Z5c.CHANNEL(n.guild_id, t.id)) : r.default.selectPrivateChannel(t.id), n
      }) : ((0, o.uL)(S.Z5c.ME), null)
    }
  },
  [S.Etm.CREATE_CHANNEL_INVITE]: {
    scope: l.x.RPC,
    handler(e) {
      let {
        args: {
          channel_id: t,
          ...n
        }
      } = e;
      return a.Z.createInvite(t, n, "RPC").catch(() => {
        throw new m.Z({
          errorCode: S.lTL.INVALID_PERMISSIONS
        }, "Unable to generate an invite for ".concat(t, ". Does this user have permissions?"))
      })
    }
  }
}