"use strict";

function a(e) {
  var l, t;
  if (null == e) return null;
  if ((null === (l = e.content) || void 0 === l ? void 0 : l.length) > 0) return e.content;
  if ((null === (t = e.embeds) || void 0 === t ? void 0 : t.length) > 0) {
    for (let l of e.embeds)
      if (null != l.rawDescription && l.rawDescription.length > 0) return l.rawDescription
  }
  return null
}
t.r(l), t.d(l, {
  default: function() {
    return a
  }
}), t("47120")