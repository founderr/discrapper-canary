"use strict";
t.r(l), t.d(l, {
  default: function() {
    return d
  }
}), t("47120");
var a = t("470079"),
  n = t("876215"),
  s = t("442837"),
  o = t("146282"),
  i = t("897674"),
  r = t("206583");
let c = new Set([n.ContentInventoryEntryType.PLAYED_GAME]);

function d() {
  let e = (0, i.default)(r.ContentInventoryFeedKey.GLOBAL_FEED);
  return e = a.useMemo(() => null == e ? void 0 : e.filter(e => c.has(e.content_type)), [e]), {
    requestId: (0, s.useStateFromStores)([o.default], () => o.default.getFeedRequestId(r.ContentInventoryFeedKey.GLOBAL_FEED)),
    entries: e
  }
}