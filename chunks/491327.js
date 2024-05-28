"use strict";
n.r(t), n("47120");
var a = n("392711"),
  s = n.n(a),
  l = n("243814"),
  i = n("447543"),
  r = n("287734"),
  o = n("703656"),
  u = n("131704"),
  d = n("592125"),
  c = n("430824"),
  f = n("496675"),
  E = n("944486"),
  C = n("979651"),
  h = n("934415"),
  _ = n("996106"),
  S = n("914946"),
  m = n("452426"),
  p = n("561205"),
  I = n("186901"),
  g = n("981631");
t.default = {
  [g.RPCCommands.GET_CHANNEL]: {
    scope: {
      [I.RPC_SCOPE_CONFIG.ANY]: [l.OAuth2Scopes.RPC, l.OAuth2Scopes.GUILDS]
    },
    handler(e) {
      let {
        args: {
          channel_id: t
        },
        socket: n
      } = e, a = d.default.getChannel(t);
      if (null == a) throw new _.default({
        errorCode: g.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      if (a.isPrivate()) {
        let e = n.authorization.scopes;
        if (!e.includes(l.OAuth2Scopes.RPC) && !e.includes(l.OAuth2Scopes.DM_CHANNELS_READ)) throw new _.default({
          errorCode: g.RPCErrors.INVALID_PERMISSIONS
        }, "Invalid scope")
      }
      return (0, S.transformChannel)(a, (0, S.hasMessageReadPermission)(a, n.application.id, n.authorization.scopes))
    }
  },
  [g.RPCCommands.GET_CHANNELS]: {
    scope: l.OAuth2Scopes.RPC,
    handler(e) {
      let {
        args: {
          guild_id: t
        }
      } = e, n = s().values(d.default.loadAllGuildAndPrivateChannelsFromDisk());
      if (t) {
        let e = c.default.getGuild(t);
        if (null == e) throw new _.default({
          errorCode: g.RPCErrors.INVALID_GUILD
        }, "Invalid guild id: ".concat(t));
        n = n.filter(t => {
          let {
            guild_id: n
          } = t;
          return n === e.id
        })
      }
      return {
        channels: n.filter(e => f.default.can(g.Permissions.VIEW_CHANNEL, e)).map(e => {
          let {
            id: t,
            name: n,
            type: a
          } = e;
          return {
            id: t,
            name: n,
            type: a
          }
        })
      }
    }
  },
  [g.RPCCommands.GET_CHANNEL_PERMISSIONS]: {
    scope: l.OAuth2Scopes.GUILDS_MEMBERS_READ,
    handler(e) {
      let t = (0, p.default)();
      if (null == t) throw new _.default({
        errorCode: g.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel");
      return {
        permissions: f.default.computePermissions(t)
      }
    }
  },
  [g.RPCCommands.SELECT_VOICE_CHANNEL]: {
    scope: l.OAuth2Scopes.RPC,
    validation: e => (0, m.default)(e).required().keys({
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
          channel_id: a,
          timeout: s = 0,
          force: l = !1,
          navigate: i = !1
        }
      } = e;
      if (!a) return r.default.selectVoiceChannel(null), null;
      let m = E.default.getVoiceChannelId();
      if (null != m && m !== a && !1 === l) throw new _.default({
        errorCode: g.RPCErrors.SELECT_VOICE_FORCE_REQUIRED
      }, "User is already joined to a voice channel.");
      return t.storeWait(n, () => d.default.getChannel(a), s).catch(() => {
        throw new _.default({
          errorCode: g.RPCErrors.SELECT_CHANNEL_TIMED_OUT
        }, "Request to select voice channel timed out.")
      }).then(e => {
        if (null == e) throw new _.default({
          errorCode: g.RPCErrors.INVALID_CHANNEL
        }, "Invalid channel id: ".concat(a));
        if (!(0, u.isVoiceChannel)(e.type)) throw new _.default({
          errorCode: g.RPCErrors.INVALID_CHANNEL
        }, "Channel is not a voice channel");
        return Promise.all([Promise.resolve(e), (0, S.transformChannel)(e, (0, S.hasMessageReadPermission)(e, n.application.id, n.authorization.scopes))])
      }).then(e => {
        let [t, n] = e;
        if (n.guild_id) {
          if ((0, h.isChannelFull)(t, C.default, c.default)) throw new _.default({
            errorCode: g.RPCErrors.INVALID_CHANNEL
          }, "Channel is full");
          if (!f.default.can(g.Permissions.CONNECT, t)) throw new _.default({
            errorCode: g.RPCErrors.INVALID_PERMISSIONS
          }, "Connect permission required to join channel")
        }
        return r.default.selectVoiceChannel(t.id), i && (0, o.replaceWith)(g.Routes.CHANNEL(t.guild_id, t.id)), n
      })
    }
  },
  [g.RPCCommands.GET_SELECTED_VOICE_CHANNEL]: {
    scope: {
      [I.RPC_SCOPE_CONFIG.ANY]: [l.OAuth2Scopes.RPC, l.OAuth2Scopes.RPC_VOICE_READ]
    },
    handler(e) {
      let {
        socket: t
      } = e, n = E.default.getVoiceChannelId(), a = null != n ? d.default.getChannel(n) : null;
      return null != a ? (0, S.transformChannel)(a, (0, S.hasMessageReadPermission)(a, t.application.id, t.authorization.scopes)) : null
    }
  },
  [g.RPCCommands.SELECT_TEXT_CHANNEL]: {
    scope: l.OAuth2Scopes.RPC,
    validation: e => (0, m.default)(e).required().keys({
      channel_id: e.string().allow(null),
      timeout: e.number().min(0).max(60)
    }),
    handler(e) {
      let {
        server: t,
        socket: n,
        args: {
          channel_id: a,
          timeout: s = 0
        }
      } = e;
      return a ? t.storeWait(n, () => d.default.getChannel(a), s).catch(() => {
        throw new _.default({
          errorCode: g.RPCErrors.SELECT_CHANNEL_TIMED_OUT
        }, "Request to select text channel timed out.")
      }).then(e => {
        if (null == e) throw new _.default({
          errorCode: g.RPCErrors.INVALID_CHANNEL
        }, "Invalid channel id: ".concat(a));
        if (!(0, u.isTextChannel)(e.type)) throw new _.default({
          errorCode: g.RPCErrors.INVALID_CHANNEL
        }, "Channel is not a text channel");
        return Promise.all([Promise.resolve(e), (0, S.transformChannel)(e, (0, S.hasMessageReadPermission)(e, n.application.id, n.authorization.scopes))])
      }).then(e => {
        let [t, n] = e;
        if (n.guild_id && !f.default.can(g.Permissions.VIEW_CHANNEL, t)) throw new _.default({
          errorCode: g.RPCErrors.INVALID_CHANNEL
        }, "No permission to see channel");
        return n.guild_id ? (0, o.replaceWith)(g.Routes.CHANNEL(n.guild_id, t.id)) : r.default.selectPrivateChannel(t.id), n
      }) : ((0, o.transitionTo)(g.Routes.ME), null)
    }
  },
  [g.RPCCommands.CREATE_CHANNEL_INVITE]: {
    scope: l.OAuth2Scopes.RPC,
    handler(e) {
      let {
        args: {
          channel_id: t,
          ...n
        }
      } = e;
      return i.default.createInvite(t, n, "RPC").catch(() => {
        throw new _.default({
          errorCode: g.RPCErrors.INVALID_PERMISSIONS
        }, "Unable to generate an invite for ".concat(t, ". Does this user have permissions?"))
      })
    }
  }
}