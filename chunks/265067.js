n(653041), n(47120);
var i = n(243814),
  s = n(100527),
  l = n(208049),
  a = n(763296),
  r = n(697426),
  o = n(242291),
  c = n(641015),
  u = n(594174),
  d = n(996106),
  E = n(452426),
  h = n(736045),
  _ = n(186901),
  I = n(231338);
t.Z = {
  [I.Et.GET_SOUNDBOARD_SOUNDS]: {
    scope: {
      [_.Gp.ANY]: [i.x.RPC, _.lH]
    },
    async handler() {
      await (0, l.w)();
      let e = a.Z.getSounds(),
        t = [];
      return e.forEach(e => e.forEach(e => t.push((0, r.QL)(e)))), t
    }
  },
  [I.Et.PLAY_SOUNDBOARD_SOUND]: {
    scope: {
      [_.Gp.ALL]: [i.x.RPC, i.x.RPC_VOICE_WRITE]
    },
    validation: e => (0, E.Z)(e).required().keys({
      guild_id: e.string(),
      sound_id: e.string()
    }),
    async handler(e) {
      let {
        args: {
          guild_id: t,
          sound_id: n
        }
      } = e;
      await (0, l.w)();
      let i = u.default.getCurrentUser(),
        r = a.Z.getSound(t, n),
        E = (0, h.Z)(),
        _ = null != r && null != i && (0, o.Nq)(i, r, E);
      if (null == E) throw new d.Z({
        errorCode: I.lT.INVALID_CHANNEL
      }, "Invalid Channel.");
      if (_) {
        if ((0, c.Z)(E)) null != r && (0, o.GN)(r, E.id, [s.Z.RPC]);
        else throw new d.Z({
          errorCode: I.lT.INVALID_PERMISSIONS
        }, "Invalid Permissions.")
      } else throw new d.Z({
        errorCode: I.lT.INVALID_SOUND
      }, "Invalid Sound.")
    }
  }
}