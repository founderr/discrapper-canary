var s = n(399606),
  a = n(626135),
  i = n(280570),
  l = n(914788),
  r = n(292352),
  c = n(981631);
t.Z = () => {
  let e = (0, s.e7)([l.Z], () => l.Z.getSelectedTab());
  return {
    selectedTab: e,
    handleTabChange: e => {
      i.ZP.selectTab(e), a.default.track(c.rMx.FAMILY_CENTER_ACTION, {
        action: r.YC.TabChange,
        tab: e
      })
    }
  }
}