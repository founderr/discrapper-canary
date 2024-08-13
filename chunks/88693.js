n.d(t, {
  U: function() {
return r;
  }
}), n(47120);
var i = n(470079),
  a = n(49898),
  s = n(9886);

function r() {
  let [e, t] = i.useState(a.WB.DEFAULT), n = i.useCallback(n => {
let i = Math.round(n);
switch (e) {
  case a.WB.DEFAULT:
    i < 260 - a.U1 && t(a.WB.COLLAPSED);
    break;
  case a.WB.COLLAPSED:
    i > 260 - a.Kl && t(a.WB.DEFAULT);
    break;
  case a.WB.FLOATING:
    i > 260 && t(a.WB.DEFAULT);
}
  }, [e]), r = i.useCallback(() => {
t(a.WB.FLOATING);
  }, []);
  return {
searchBarState: e,
tabsClassName: e === a.WB.FLOATING ? s.floatingSearchTabsMask : void 0,
onTabsAvailableWidthChange: n,
onCollapsedSearchBarClick: r
  };
}