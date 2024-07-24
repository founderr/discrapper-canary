n.d(t, {
  U: function() {
return s;
  }
}), n(47120);
var i = n(470079);

function s() {
  let [e, t] = i.useState(!1), n = i.useRef(e), s = i.useCallback(e => {
!n.current && e < 10 ? (n.current = !0, t(!0)) : n.current && e > 240 && (n.current = !1, t(!1));
  }, []);
  return i.useMemo(() => ({
collapsed: e,
onTabsAvailableWidthChange: s
  }), [
e,
s
  ]);
}