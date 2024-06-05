"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var n = s("735250"),
  a = s("470079"),
  l = s("512722"),
  i = s.n(l),
  u = s("481060"),
  d = s("626135"),
  r = s("358085"),
  o = s("981631"),
  c = s("689938");

function f(e) {
  let t = a.useCallback(() => {
    i()(null != e, "text cannot be null"), d.default.track(o.AnalyticEvents.MESSAGE_MENU_GOOGLE_SEARCHED), window.open("https://www.google.com/search?q=".concat(encodeURIComponent(e)), "_blank")
  }, [e]);
  return r.isPlatformEmbedded && null != e && (null == e ? void 0 : e.length) !== 0 ? [(0, n.jsx)(u.MenuItem, {
    id: "search-google",
    label: c.default.Messages.SEARCH_WITH_GOOGLE,
    action: t
  }, "search-google")] : null
}