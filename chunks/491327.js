"use strict";
a.r(t), a("47120");
var n = a("392711"),
  s = a.n(n),
  l = a("447543"),
  i = a("287734"),
  r = a("703656"),
  o = a("131704"),
  u = a("592125"),
  d = a("430824"),
  c = a("496675"),
  f = a("944486"),
  E = a("979651"),
  h = a("934415"),
  _ = a("996106"),
  C = a("914946"),
  m = a("452426"),
  S = a("561205"),
  p = a("186901"),
  I = a("981631");
t.default = {
  [I.RPCCommands.GET_CHANNEL]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [I.OAuth2Scopes.RPC, I.OAuth2Scopes.GUILDS]
    },
    handler(e) {
      let {
        args: {
          channel_id: t
        },
        socket: a
      } = e, n = u.default.getChannel(t);
      if (null == n) throw new _.default({
        errorCode: I.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel id: ".concat(t));
      if (n.isPrivate()) {
        let e = a.authorization.scopes;
        if (!e.includes(I.OAuth2Scopes.RPC) && !e.includes(I.OAuth2Scopes.DM_CHANNELS_READ)) throw new _.default({
          errorCode: I.RPCErrors.INVALID_PERMISSIONS
        }, "Invalid scope")
      }
      return (0, C.transformChannel)(n, (0, C.hasMessageReadPermission)(n, a.application.id, a.authorization.scopes))
    }
  },
  [I.RPCCommands.GET_CHANNELS]: {
    scope: I.OAuth2Scopes.RPC,
    handler(e) {
      let {
        args: {
          guild_id: t
        }
      } = e, a = s().values(u.default.loadAllGuildAndPrivateChannelsFromDisk());
      if (t) {
        let e = d.default.getGuild(t);
        if (null == e) throw new _.default({
          errorCode: I.RPCErrors.INVALID_GUILD
        }, "Invalid guild id: ".concat(t));
        a = a.filter(t => {
          let {
            guild_id: a
          } = t;
          return a === e.id
        })
      }
      return {
        channels: a.filter(e => c.default.can(I.Permissions.VIEW_CHANNEL, e)).map(e => {
          let {
            id: t,
            name: a,
            type: n
          } = e;
          return {
            id: t,
            name: a,
            type: n
          }
        })
      }
    }
  },
  [I.RPCCommands.GET_CHANNEL_PERMISSIONS]: {
    scope: I.OAuth2Scopes.GUILDS_MEMBERS_READ,
    handler(e) {
      let t = (0, S.default)();
      if (null == t) throw new _.default({
        errorCode: I.RPCErrors.INVALID_CHANNEL
      }, "Invalid channel");
      return {
        permissions: c.default.computePermissions(t)
      }
    }
  },
  [I.RPCCommands.SELECT_VOICE_CHANNEL]: {
    scope: I.OAuth2Scopes.RPC,
    validation: e => (0, m.default)(e).required().keys({
      channel_id: e.string().allow(null),
      timeout: e.number().min(0).max(60),
      force: e.boolean(),
      navigate: e.boolean()
    }),
    handler(e) {
      let {
        server: t,
        socket: a,
        args: {
          channel_id: n,
          timeout: s = 0,
          force: l = !1,
          navigate: m = !1
        }
      } = e;
      if (!n) return i.default.selectVoiceChannel(null), null;
      let S = f.default.getVoiceChannelId();
      if (null != S && S !== n && !1 === l) throw new _.default({
        errorCode: I.RPCErrors.SELECT_VOICE_FORCE_REQUIRED
      }, "User is already joined to a voice channel.");
      return t.storeWait(a, () => u.default.getChannel(n), s).catch(() => {
        throw new _.default({
          errorCode: I.RPCErrors.SELECT_CHANNEL_TIMED_OUT
        }, "Request to select voice channel timed out.")
      }).then(e => {
        if (null == e) throw new _.default({
          errorCode: I.RPCErrors.INVALID_CHANNEL
        }, "Invalid channel id: ".concat(n));
        if (!(0, o.isVoiceChannel)(e.type)) throw new _.default({
          errorCode: I.RPCErrors.INVALID_CHANNEL
        }, "Channel is not a voice channel");
        return Promise.all([Promise.resolve(e), (0, C.transformChannel)(e, (0, C.hasMessageReadPermission)(e, a.application.id, a.authorization.scopes))])
      }).then(e => {
        let [t, a] = e;
        if (a.guild_id) {
          if ((0, h.isChannelFull)(t, E.default, d.default)) throw new _.default({
            errorCode: I.RPCErrors.INVALID_CHANNEL
          }, "Channel is full");
          if (!c.default.can(I.Permissions.CONNECT, t)) throw new _.default({
            errorCode: I.RPCErrors.INVALID_PERMISSIONS
          }, "Connect permission required to join channel")
        }
        return i.default.selectVoiceChannel(t.id), m && (0, r.replaceWith)(I.Routes.CHANNEL(t.guild_id, t.id)), a
      })
    }
  },
  [I.RPCCommands.GET_SELECTED_VOICE_CHANNEL]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [I.OAuth2Scopes.RPC, I.OAuth2Scopes.RPC_VOICE_READ]
    },
    handler(e) {
      let {
        socket: t
      } = e, a = f.default.getVoiceChannelId(), n = null != a ? u.default.getChannel(a) : null;
      return null != n ? (0, C.transformChannel)(n, (0, C.hasMessageReadPermission)(n, t.application.id, t.authorization.scopes)) : null
    }
  },
  [I.RPCCommands.SELECT_TEXT_CHANNEL]: {
    scope: I.OAuth2Scopes.RPC,
    validation: e => (0, m.default)(e).required().keys({
      channel_id: e.string().allow(null),
      timeout: e.number().min(0).max(60)
    }),
    handler(e) {
      let {
        server: t,
        socket: a,
        args: {
          channel_id: n,
          timeout: s = 0
        }
      } = e;
      return n ? t.storeWait(a, () => u.default.getChannel(n), s).catch(() => {
        throw new _.default({
          errorCode: I.RPCErrors.SELECT_CHANNEL_TIMED_OUT
        }, "Request to select text channel timed out.")
      }).then(e => {
        if (null == e) throw new _.default({
          errorCode: I.RPCErrors.INVALID_CHANNEL
        }, "Invalid channel id: ".concat(n));
        if (!(0, o.isTextChannel)(e.type)) throw new _.default({
          errorCode: I.RPCErrors.INVALID_CHANNEL
        }, "Channel is not a text channel");
        return Promise.all([Promise.resolve(e), (0, C.transformChannel)(e, (0, C.hasMessageReadPermission)(e, a.application.id, a.authorization.scopes))])
      }).then(e => {
        let [t, a] = e;
        if (a.guild_id && !c.default.can(I.Permissions.VIEW_CHANNEL, t)) throw new _.default({
          errorCode: I.RPCErrors.INVALID_CHANNEL
        }, "No permission to see channel");
        return a.guild_id ? (0, r.replaceWith)(I.Routes.CHANNEL(a.guild_id, t.id)) : i.default.selectPrivateChannel(t.id), a
      }) : ((0, r.transitionTo)(I.Routes.ME), null)
    }
  },
  [I.RPCCommands.CREATE_CHANNEL_INVITE]: {
    scope: I.OAuth2Scopes.RPC,
    handler(e) {
      let {
        args: {
          channel_id: t,
          ...a
        }
      } = e;
      return l.default.createInvite(t, a, "RPC").catch(() => {
        throw new _.default({
          errorCode: I.RPCErrors.INVALID_PERMISSIONS
        }, "Unable to generate an invite for ".concat(t, ". Does this user have permissions?"))
      })
    }
  }
}