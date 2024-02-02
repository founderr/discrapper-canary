"use strict";
r.r(t), r.d(t, {
  default: function() {
    return s
  }
}), r("222007");
var o = r("614858"),
  a = r("883474");
let l = new Set([o.BadgeCategory.PARTNERED, o.BadgeCategory.VERIFIED, o.BadgeCategory.VERIFIED_AND_PARTNERED, o.BadgeCategory.COMMUNITY, o.BadgeCategory.DISCOVERABLE]);

function s(e) {
  if (null == e) return !1;
  let t = (0, a.getGuildTraits)(e),
    r = (0, o.getBadgeCategory)(t);
  return l.has(r)
}