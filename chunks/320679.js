"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983"),
  r = n("884691"),
  s = n("118810"),
  i = n("446674"),
  l = n("77078"),
  o = n("599110"),
  u = n("791776"),
  d = n("206230"),
  c = n("862013"),
  f = n("49111");

function h(e) {
  var t;
  let n = e.ctrlKey || e.altKey || e.metaKey;
  if (n || e.keyCode !== f.KeyboardKeys.TAB || null == e.target) return;
  let {
    target: a
  } = e, r = null === (t = (0, u.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
  (0, s.isElement)(a) && o.default.track(f.AnalyticEvents.KEYBOARD_SHORTCUT_USED, {
    shortcut_name: "tab_navigation",
    source_class_list: null != r ? Array.from(r.classList) : [],
    location_object: a.tagName
  })
}

function p(e) {
  let {
    children: t
  } = e, n = (0, i.useStateFromStoresObject)([d.default], () => ({
    enabled: d.default.useReducedMotion,
    rawValue: d.default.rawPrefersReducedMotion
  })), s = (0, i.useStateFromStoresObject)([d.default], () => ({
    enabled: d.default.useForcedColors,
    rawValue: d.default.systemForcedColors
  })), o = (0, i.useStateFromStores)([d.default], () => d.default.alwaysShowLinkDecorations), u = r.useMemo(() => ({
    reducedMotion: n,
    prefersCrossfades: !1,
    forcedColors: s,
    alwaysShowLinkDecorations: o
  }), [n, s, o]);
  return r.useEffect(() => ((0, c.insertAccessibilityLabelElements)(), window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h)), []), (0, a.jsx)(l.AccessibilityPreferencesContext.Provider, {
    value: u,
    children: t
  })
}