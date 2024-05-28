"use strict";
n.r(t), n("653041"), n("47120");
var a = n("243814"),
  s = n("100527"),
  l = n("208049"),
  i = n("763296"),
  r = n("697426"),
  o = n("242291"),
  u = n("641015"),
  d = n("594174"),
  c = n("996106"),
  f = n("452426"),
  E = n("736045"),
  C = n("186901"),
  h = n("231338");
t.default = {
  [h.RPCCommands.GET_SOUNDBOARD_SOUNDS]: {
    scope: {
      [C.RPC_SCOPE_CONFIG.ANY]: [a.OAuth2Scopes.RPC, C.RPC_LOCAL_SCOPE]
    },
    async handler() {
      await (0, l.maybeFetchSoundboardSounds)();
      let e = i.default.getSounds(),
        t = [];
      return e.forEach(e => e.forEach(e => t.push((0, r.soundboardSoundToAPI)(e)))), t
    }
  },
  [h.RPCCommands.PLAY_SOUNDBOARD_SOUND]: {
    scope: {
      [C.RPC_SCOPE_CONFIG.ALL]: [a.OAuth2Scopes.RPC, a.OAuth2Scopes.RPC_VOICE_WRITE]
    },
    validation: e => (0, f.default)(e).required().keys({
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
      await (0, l.maybeFetchSoundboardSounds)();
      let a = d.default.getCurrentUser(),
        r = i.default.getSound(t, n),
        f = (0, E.default)(),
        C = null != r && null != a && (0, o.canUseSoundboardSound)(a, r, f);
      if (null == f) throw new c.default({
        errorCode: h.RPCErrors.INVALID_CHANNEL
      }, "Invalid Channel.");
      if (C) {
        if ((0, u.default)(f)) null != r && (0, o.playSound)(r, f.id, [s.default.RPC]);
        else throw new c.default({
          errorCode: h.RPCErrors.INVALID_PERMISSIONS
        }, "Invalid Permissions.")
      } else throw new c.default({
        errorCode: h.RPCErrors.INVALID_SOUND
      }, "Invalid Sound.")
    }
  }
}