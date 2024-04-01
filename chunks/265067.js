"use strict";
n.r(t), n("653041"), n("47120");
var a = n("100527"),
  s = n("208049"),
  l = n("763296"),
  i = n("697426"),
  r = n("242291"),
  o = n("641015"),
  u = n("594174"),
  d = n("996106"),
  c = n("452426"),
  f = n("736045"),
  E = n("186901"),
  _ = n("231338");
t.default = {
  [_.RPCCommands.GET_SOUNDBOARD_SOUNDS]: {
    scope: {
      [E.RPC_SCOPE_CONFIG.ANY]: [_.OAuth2Scopes.RPC, E.RPC_LOCAL_SCOPE]
    },
    async handler() {
      await (0, s.maybeFetchSoundboardSounds)();
      let e = l.default.getSounds(),
        t = [];
      return e.forEach(e => e.forEach(e => t.push((0, i.soundboardSoundToAPI)(e)))), t
    }
  },
  [_.RPCCommands.PLAY_SOUNDBOARD_SOUND]: {
    scope: {
      [E.RPC_SCOPE_CONFIG.ALL]: [_.OAuth2Scopes.RPC, _.OAuth2Scopes.RPC_VOICE_WRITE]
    },
    validation: e => (0, c.default)(e).required().keys({
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
      await (0, s.maybeFetchSoundboardSounds)();
      let i = u.default.getCurrentUser(),
        c = l.default.getSound(t, n),
        E = (0, f.default)(),
        h = null != c && null != i && (0, r.canUseSoundboardSound)(i, c, E);
      if (null == E) throw new d.default({
        errorCode: _.RPCErrors.INVALID_CHANNEL
      }, "Invalid Channel.");
      if (h) {
        if ((0, o.default)(E)) null != c && (0, r.playSound)(c, E.id, [a.default.RPC]);
        else throw new d.default({
          errorCode: _.RPCErrors.INVALID_PERMISSIONS
        }, "Invalid Permissions.")
      } else throw new d.default({
        errorCode: _.RPCErrors.INVALID_SOUND
      }, "Invalid Sound.")
    }
  }
}