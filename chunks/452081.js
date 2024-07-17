n.d(t, {
  z: function() {
return r;
  }
}), n(47120);
var i = n(470079),
  s = n(113434),
  a = n(689938);

function r() {
  let [e, t] = i.useState(s.e5.UNCLAIMED), n = i.useMemo(() => [{
  id: s.e5.UNCLAIMED,
  label: a.Z.Messages.QUESTS_ALL
},
{
  id: s.e5.CLAIMED,
  label: a.Z.Messages.QUESTS_CLAIMED
}
  ], []);
  return {
tabs: n,
selectedTab: e,
onSelectTab: i.useCallback(e => {
  t(e);
}, [])
  };
}