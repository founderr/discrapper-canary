"use strict";
a.r(t), a("47120");
var n = a("392711"),
  s = a.n(n),
  l = a("430824"),
  i = a("996106"),
  r = a("452426"),
  o = a("981631");
t.default = {
  [o.RPCCommands.GET_GUILD]: {
    scope: o.OAuth2Scopes.RPC,
    validation: e => (0, r.default)(e).required().keys({
      guild_id: e.string(),
      timeout: e.number().min(0).max(60)
    }),
    handler(e) {
      let {
        socket: t,
        server: a,
        args: {
          guild_id: n,
          timeout: s = 0
        }
      } = e;
      return a.storeWait(t, () => l.default.getGuild(n), s).catch(() => {
        throw new i.default({
          errorCode: o.RPCErrors.GET_GUILD_TIMED_OUT
        }, "Request to get guild timed out.")
      }).then(e => {
        var t;
        if (null == e) throw new i.default({
          errorCode: o.RPCErrors.INVALID_GUILD
        }, "Invalid guild id: ".concat(n));
        return {
          id: e.id,
          name: e.name,
          icon_url: null !== (t = e.getIconURL(128)) && void 0 !== t ? t : null,
          members: [],
          vanity_url_code: e.vanityURLCode
        }
      })
    }
  },
  [o.RPCCommands.GET_GUILDS]: {
    scope: o.OAuth2Scopes.RPC,
    handler() {
      let e = l.default.getGuilds();
      return {
        guilds: s().map(e, e => ({
          id: e.id,
          name: e.name,
          icon_url: e.getIconURL(128)
        }))
      }
    }
  }
}