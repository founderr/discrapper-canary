"use strict";
a.r(t), a("653041"), a("47120");
var n = a("100527"),
  s = a("208049"),
  l = a("763296"),
  i = a("697426"),
  r = a("242291"),
  o = a("641015"),
  u = a("594174"),
  d = a("996106"),
  c = a("452426"),
  f = a("736045"),
  E = a("186901"),
  h = a("231338");
t.default = {
  [h.RPCCommands.GET_SOUNDBOARD_SOUNDS]: {
    scope: {
      [E.RPC_SCOPE_CONFIG.ANY]: [h.OAuth2Scopes.RPC, E.RPC_LOCAL_SCOPE]
    },
    async handler() {
      await (0, s.maybeFetchSoundboardSounds)();
      let e = l.default.getSounds(),
        t = [];
      return e.forEach(e => e.forEach(e => t.push((0, i.soundboardSoundToAPI)(e)))), t
    }
  },
  [h.RPCCommands.PLAY_SOUNDBOARD_SOUND]: {
    scope: {
      [E.RPC_SCOPE_CONFIG.ALL]: [h.OAuth2Scopes.RPC, h.OAuth2Scopes.RPC_VOICE_WRITE]
    },
    validation: e => (0, c.default)(e).required().keys({
      guild_id: e.string(),
      sound_id: e.string()
    }),
    async handler(e) {
      let {
        args: {
          guild_id: t,
          sound_id: a
        }
      } = e;
      await (0, s.maybeFetchSoundboardSounds)();
      let i = u.default.getCurrentUser(),
        c = l.default.getSound(t, a),
        E = (0, f.default)(),
        _ = null != c && null != i && (0, r.canUseSoundboardSound)(i, c, E);
      if (null == E) throw new d.default({
        errorCode: h.RPCErrors.INVALID_CHANNEL
      }, "Invalid Channel.");
      if (_) {
        if ((0, o.default)(E)) null != c && (0, r.playSound)(c, E.id, [n.default.RPC]);
        else throw new d.default({
          errorCode: h.RPCErrors.INVALID_PERMISSIONS
        }, "Invalid Permissions.")
      } else throw new d.default({
        errorCode: h.RPCErrors.INVALID_SOUND
      }, "Invalid Sound.")
    }
  }
}