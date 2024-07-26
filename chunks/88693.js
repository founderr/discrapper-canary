n.d(t, {
  U: function() {
return r;
  }
}), n(47120);
var i = n(470079),
  s = n(49898),
  a = n(453378);

function r() {
  let [e, t] = i.useState(s.WB.DEFAULT), n = i.useRef(e), r = i.useCallback(e => {
t(e), n.current = e;
  }, []), l = i.useCallback(e => {
let t = Math.round(e);
switch (n.current) {
  case s.WB.DEFAULT:
    t < 260 - s.U1 && r(s.WB.COLLAPSED);
    break;
  case s.WB.COLLAPSED:
    t > 260 - s.Kl && r(s.WB.DEFAULT);
    break;
  case s.WB.FLOATING:
    t > 260 && r(s.WB.DEFAULT);
}
  }, [r]), o = i.useCallback(() => {
r(s.WB.DEFAULT);
  }, [r]), c = i.useCallback(() => {
r(s.WB.FLOATING);
  }, [r]), d = e === s.WB.FLOATING ? a.floatingSearchTabsMask : void 0;
  return i.useMemo(() => ({
searchBarState: e,
tabsClassName: d,
resetSearchBarState: o,
onTabsAvailableWidthChange: l,
onCollapsedSearchBarClick: c
  }), [
c,
o,
l,
e,
d
  ]);
}