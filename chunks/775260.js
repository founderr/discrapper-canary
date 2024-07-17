n.d(t, {
  Y: function() {
return c;
  }
}), n(733860);
var i = n(470079),
  s = n(143927),
  a = n(169559),
  r = n(836768),
  l = n(766219),
  o = n(49898);

function c() {
  let e = (0, a.Z)('global_discovery'),
t = (0, r.d)(e => e.selectedServerTab, s.Z),
n = i.useMemo(() => {
  let t = [
    o.vf.GAMING,
    o.vf.MUSIC,
    o.vf.ENTERTAINMENT,
    o.vf.TECH,
    o.vf.EDUCATION,
    o.vf.HUBS
  ];
  return e ? t.unshift(o.vf.GUILDS) : t.unshift(o.vf.FEATURED), t.map(e => ({
    id: e,
    label: (0, l.vb)(e)
  }));
}, [e]);
  return {
tabs: n,
selectedTab: t,
onSelectTab: i.useCallback(e => {
  r.d.setState({
    selectedServerTab: e
  });
}, [])
  };
}