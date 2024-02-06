"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("884691"),
  s = n("298386"),
  a = n("65597"),
  i = n("656038"),
  r = n("42203"),
  u = n("923959"),
  o = n("449008");

function d(e) {
  let t = (0, a.useStateFromStoresArray)([u.default], () => u.default.getVocalChannelIds(e)),
    n = (0, a.useStateFromStoresArray)([r.default], () => t.map(e => r.default.getChannel(e)).filter(o.isNotNullish), [t]),
    d = l.useMemo(() => n.filter(e => !(0, i.default)(e) && e.type === s.ChannelTypes.GUILD_VOICE), [n]);
  return d
}