var s = n(399606),
  i = n(626135),
  a = n(280570),
  l = n(914788),
  r = n(292352),
  c = n(981631);
t.Z = () => {
  let e = (0, s.e7)([l.Z], () => l.Z.getSelectedTab());
  return {
    selectedTab: e,
    handleTabChange: e => {
      a.ZP.selectTab(e), i.default.track(c.rMx.FAMILY_CENTER_ACTION, {
        action: r.YC.TabChange,
        tab: e
      })
    }
  }
}