var n = s(399606),
  a = s(626135),
  i = s(280570),
  r = s(914788),
  l = s(292352),
  o = s(981631);
t.Z = () => {
  let e = (0, n.e7)([r.Z], () => r.Z.getSelectedTab());
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