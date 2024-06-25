n(47120);
var s = n(392711),
  i = n.n(s),
  l = n(243814),
  a = n(430824),
  r = n(996106),
  o = n(452426),
  c = n(981631);
t.Z = {
  [c.Etm.GET_GUILD]: {
    scope: l.x.RPC,
    validation: e => (0, o.Z)(e).required().keys({
      guild_id: e.string(),
      timeout: e.number().min(0).max(60)
    }),
    handler(e) {
      let {
        socket: t,
        server: n,
        args: {
          guild_id: s,
          timeout: i = 0
        }
      } = e;
      return n.storeWait(t, () => a.Z.getGuild(s), i).catch(() => {
        throw new r.Z({
          errorCode: c.lTL.GET_GUILD_TIMED_OUT
        }, "Request to get guild timed out.")
      }).then(e => {
        var t;
        if (null == e) throw new r.Z({
          errorCode: c.lTL.INVALID_GUILD
        }, "Invalid guild id: ".concat(s));
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
  [c.Etm.GET_GUILDS]: {
    scope: l.x.RPC,
    handler() {
      let e = a.Z.getGuilds();
      return {
        guilds: i().map(e, e => ({
          id: e.id,
          name: e.name,
          icon_url: e.getIconURL(128)
        }))
      }
    }
  }
}