"use strict";
n.r(t), n.d(t, {
  getIconComponent: function() {
    return r
  },
  pxToRem: function() {
    return s
  },
  getCommandQuery: function() {
    return u
  }
});
var l = n("524768"),
  i = n("991630"),
  o = n("943161"),
  a = n("317041");
let r = e => e.type === l.ApplicationCommandSectionType.BUILT_IN ? o.default : i.default;

function s(e) {
  return "".concat(e / 16, "rem")
}

function u(e, t) {
  let n = t,
    l = !1,
    i = t.indexOf(":");
  if (i >= 0) {
    let e = t.lastIndexOf(" ", i);
    e >= 0 ? (t = t.substring(0, e), l = !0) : t = t.substring(0, i)
  } else t = t.substring(0, t.length);
  let o = t.split(" ", a.MAX_SUBCOMMAND_LEVEL + 1);
  return o.length > a.MAX_SUBCOMMAND_LEVEL && (l = !0, o.pop()), t = o.join(" "), (n.length > t.length || t.endsWith(" ")) && (l = !0, t = t.trimEnd()), {
    text: t,
    parts: o,
    hasSpaceTerminator: l
  }
}