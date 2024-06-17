"use strict";
t.r(l), t.d(l, {
  default: function() {
    return d
  }
}), t("47120");
var a = t("470079"),
  s = t("876215"),
  n = t("442837"),
  i = t("146282"),
  r = t("897674"),
  o = t("206583");
let c = new Set([s.ContentInventoryEntryType.PLAYED_GAME]);

function d() {
  let e = (0, r.default)(o.ContentInventoryFeedKey.GLOBAL_FEED);
  return e = a.useMemo(() => null == e ? void 0 : e.filter(e => c.has(e.content_type)), [e]), {
    requestId: (0, n.useStateFromStores)([i.default], () => i.default.getFeedRequestId(o.ContentInventoryFeedKey.GLOBAL_FEED)),
    entries: e
  }
}