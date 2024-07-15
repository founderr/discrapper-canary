n.d(t, {
  Y: function() {
return c;
  }
}), n(733860);
var i = n(470079),
  a = n(143927),
  s = n(169559),
  r = n(836768),
  l = n(766219),
  o = n(49898);

function c() {
  var e;
  let t = (0, s.Z)('global_discovery'),
n = (0, r.d)(e => e.selectedServerTab, a.Z),
c = i.useMemo(() => {
  let e = [
    o.vf.GAMING,
    o.vf.MUSIC,
    o.vf.ENTERTAINMENT,
    o.vf.TECH,
    o.vf.EDUCATION,
    o.vf.HUBS
  ];
  return t && e.unshift(o.vf.GUILDS), e.map(e => ({
    id: e,
    label: (0, l.vb)(e)
  }));
}, [t]),
d = null !== (e = c.find(e => e.id === n)) && void 0 !== e ? e : c[0];
  return {
tabs: c,
selectedTab: d,
onSelectTab: i.useCallback(e => {
  r.d.setState({
    selectedServerTab: e.id
  });
}, [])
  };
}