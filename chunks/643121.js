"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var r = l("65597"),
  a = l("845579"),
  n = l("102985"),
  s = l("697218"),
  i = l("782340");
let o = "legacy_username";

function u(e) {
  var t;
  let l = a.LegacyUsernameDisabled.useSetting(),
    u = (0, r.default)([s.default], () => s.default.getCurrentUser()),
    d = (0, r.default)([n.default], () => n.default.hidePersonalInformation);
  if (null == e) return [];
  let c = null !== (t = null == e ? void 0 : e.getBadges()) && void 0 !== t ? t : [];
  return null != u && u.id === e.userId && l && (c = c.filter(e => e.id !== o)), d && (c = c.map(e => ({
    ...e,
    description: e.id === o ? i.default.Messages.STREAMER_MODE_ENABLED : e.description
  }))), c
}