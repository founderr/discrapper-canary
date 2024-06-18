"use strict";
n.d(t, {
  h: function() {
    return c
  }
}), n(733860);
var i = n(470079),
  r = n(399606),
  s = n(496675),
  o = n(771845),
  a = n(594174),
  l = n(74538),
  u = n(981631),
  _ = n(231338);

function c(e, t) {
  var n;
  let c = (0, r.e7)([a.default], () => a.default.getCurrentUser()),
    d = null !== (n = null == e ? void 0 : e.guild_id) && void 0 !== n ? n : u.lds,
    E = (0, r.e7)([o.ZP], () => o.ZP.getFlattenedGuildIds()),
    I = (0, r.e7)([s.Z], () => null == e || null == e.guild_id || s.Z.can(_.Pl.USE_EXTERNAL_SOUNDS, e));
  return i.useMemo(() => {
    if ((l.ZP.canUseSoundboardEverywhere(c) || !t) && I) {
      let e = "" !== d,
        t = e ? E.filter(e => e !== d) : E;
      return e && t.unshift(d), t
    }
    return [d]
  }, [c, t, d, E, I])
}