n.d(t, {
  Y: function() {
return d;
  }
}), n(733860);
var i = n(470079),
  s = n(143927),
  a = n(963202),
  r = n(169559),
  l = n(836768),
  o = n(766219),
  c = n(49898);

function d() {
  let e = (0, r.Z)('global_discovery'),
{
  enableClanCreation: t
} = (0, a.C3)({
  location: 'global_discovery',
  includeConverted: !0,
  autoTrackExposure: !0
}),
n = (0, l.d)(e => e.selectedServerTab, s.Z),
d = i.useMemo(() => {
  let n = [
    c.vf.GAMING,
    c.vf.MUSIC,
    c.vf.ENTERTAINMENT,
    c.vf.TECH,
    c.vf.EDUCATION,
    c.vf.HUBS
  ];
  return e || t ? n.unshift(c.vf.GUILDS) : n.unshift(c.vf.FEATURED), n.map(e => ({
    id: e,
    label: (0, o.vb)(e)
  }));
}, [
  t,
  e
]);
  return {
tabs: d,
selectedTab: n,
onSelectTab: i.useCallback(e => {
  l.d.setState({
    selectedServerTab: e
  });
}, [])
  };
}