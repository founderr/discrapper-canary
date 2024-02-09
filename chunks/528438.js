"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
}), l("222007");
var r = l("509043"),
  a = l("462274"),
  n = l("449918"),
  s = l("49111");

function i(e, t) {
  var l, i;
  let {
    pendingThemeColors: o,
    isPreview: u
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, d = null == e ? void 0 : e.getAvatarURL(null == t ? void 0 : t.guildId, 80), c = (0, n.useColorValue)(s.Color.PRIMARY_530).hex, [f, T] = (0, a.useAvatarColors)(d, c, !1);
  if (!(null == t ? void 0 : t.canEditThemes) && !u) return [null, null];
  let p = null == t ? void 0 : t.getPreviewThemeColors(o),
    m = null !== (l = null == p ? void 0 : p[0]) && void 0 !== l ? l : (0, r.hex2int)(f),
    E = null !== (i = null == p ? void 0 : p[1]) && void 0 !== i ? i : (0, r.hex2int)(T);
  return [m, E]
}