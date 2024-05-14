"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("47120");
var a = n("470079"),
  l = n("876215"),
  s = n("442837"),
  i = n("146282"),
  r = n("219634"),
  o = n("897674"),
  u = n("206583");
let d = new Set([l.ContentInventoryEntryType.PLAYED_GAME, l.ContentInventoryEntryType.WATCHED_MEDIA, l.ContentInventoryEntryType.TOP_GAME, l.ContentInventoryEntryType.LISTENED_SESSION]);

function c(e) {
  let t = (0, o.default)(u.ContentInventoryFeedKey.GLOBAL_FEED);
  return t = (0, r.default)({
    entries: t,
    channelId: e
  }), t = a.useMemo(() => null == t ? void 0 : t.filter(e => d.has(e.content_type)), [t]), {
    requestId: (0, s.useStateFromStores)([i.default], () => i.default.getFeedRequestId(u.ContentInventoryFeedKey.GLOBAL_FEED)),
    entries: t
  }
}