"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("65597"),
  l = a("845579"),
  s = a("102985"),
  i = a("697218"),
  r = a("782340");
let u = "legacy_username";

function o(e) {
  var t;
  let a = l.LegacyUsernameDisabled.useSetting(),
    o = (0, n.default)([i.default], () => i.default.getCurrentUser()),
    c = (0, n.default)([s.default], () => s.default.hidePersonalInformation);
  if (null == e) return [];
  let d = null !== (t = null == e ? void 0 : e.getBadges()) && void 0 !== t ? t : [];
  return null != o && o.id === e.userId && a && (d = d.filter(e => e.id !== u)), c && (d = d.map(e => ({
    ...e,
    description: e.id === u ? r.default.Messages.STREAMER_MODE_ENABLED : e.description
  }))), d
}