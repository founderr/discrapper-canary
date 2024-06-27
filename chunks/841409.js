var s = n(399606),
  a = n(626135),
  i = n(280570),
  r = n(914788),
  l = n(292352),
  o = n(981631);
t.Z = () => {
  let e = (0, s.e7)([r.Z], () => r.Z.getSelectedTab());
  return {
    selectedTab: e,
    handleTabChange: e => {
      i.ZP.selectTab(e), a.default.track(o.rMx.FAMILY_CENTER_ACTION, {
        action: l.YC.TabChange,
        tab: e
      })
    }
  }
}