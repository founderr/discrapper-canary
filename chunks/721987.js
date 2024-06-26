"use strict";
n.d(t, {
  Z: function() {
    return c
  }
}), n(47120);
var i = n(866442),
  r = n(442837),
  s = n(410030),
  o = n(607070),
  a = n(220082),
  l = n(44315),
  u = n(168631),
  _ = n(981631);

function c(e) {
  var t, n, c;
  let {
    user: d,
    displayProfile: E,
    pendingThemeColors: I,
    pendingAvatar: T,
    isPreview: h
  } = e, f = (0, s.ZP)(), S = (0, r.e7)([o.Z], () => o.Z.syncProfileThemeWithUserTheme), N = null != T ? T : null == d ? void 0 : d.getAvatarURL(null == E ? void 0 : E.guildId, 80), A = (0, l.Sl)(_.Ilk.PRIMARY_530).hex, [m, O] = (0, a.Cf)(N, A, !1);
  if (!(null == E ? void 0 : E.canEditThemes) && !h) return {
    theme: f,
    primaryColor: null,
    secondaryColor: null
  };
  let p = null == E ? void 0 : E.getPreviewThemeColors(I),
    R = null !== (t = null == p ? void 0 : p[0]) && void 0 !== t ? t : (0, i._i)(m),
    g = null !== (n = null == p ? void 0 : p[1]) && void 0 !== n ? n : (0, i._i)(O);
  return {
    theme: S ? f : null !== (c = (0, u.V3)(R)) && void 0 !== c ? c : f,
    primaryColor: R,
    secondaryColor: g
  }
}