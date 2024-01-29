"use strict";
t.r(r), t.d(r, {
  default: function() {
    return a
  }
}), t("222007");
var l = t("509043"),
  n = t("462274"),
  i = t("449918"),
  o = t("49111");

function a(e, r) {
  var t, a;
  let {
    pendingThemeColors: s,
    isPreview: u
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, f = null == e ? void 0 : e.getAvatarURL(null == r ? void 0 : r.guildId, 80), d = (0, i.useColorValue)(o.Color.PRIMARY_530).hex, [c, P] = (0, n.useAvatarColors)(f, d, !1);
  if (!(null == r ? void 0 : r.canEditThemes) && !u) return [null, null];
  let E = null == r ? void 0 : r.getPreviewThemeColors(s),
    p = null !== (t = null == E ? void 0 : E[0]) && void 0 !== t ? t : (0, l.hex2int)(c),
    T = null !== (a = null == E ? void 0 : E[1]) && void 0 !== a ? a : (0, l.hex2int)(P);
  return [p, T]
}