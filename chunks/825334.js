"use strict";
t.r(l), t.d(l, {
  default: function() {
    return i
  }
});
var a = t("399606"),
  n = t("592125"),
  s = t("563534");

function i(e) {
  return (0, a.useStateFromStoresArray)([s.default, n.default], () => s.default.getResourceChannels(e).filter(e => null != n.default.getChannel(e.channelId)))
}