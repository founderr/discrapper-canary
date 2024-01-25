"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("65597"),
  a = n("845579"),
  s = n("102985"),
  i = n("697218"),
  r = n("782340");
let u = "legacy_username";

function o(e) {
  var t;
  let n = a.LegacyUsernameDisabled.useSetting(),
    o = (0, l.default)([i.default], () => i.default.getCurrentUser()),
    c = (0, l.default)([s.default], () => s.default.hidePersonalInformation);
  if (null == e) return [];
  let d = null !== (t = null == e ? void 0 : e.getBadges()) && void 0 !== t ? t : [];
  return null != o && o.id === e.userId && n && (d = d.filter(e => e.id !== u)), c && (d = d.map(e => ({
    ...e,
    description: e.id === u ? r.default.Messages.STREAMER_MODE_ENABLED : e.description
  }))), d
}