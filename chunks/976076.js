n.d(t, {
  Z: function() {
return l;
  }
}), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(470079),
  a = n(143927),
  s = n(836768),
  r = n(49898);

function l() {
  let e = (0, s.d)(e => e.selectedPage, a.Z);
  return i.useEffect(() => {
let e = function(e) {
  if ('/discovery/quests' === e)
    return r.F$.QUESTS;
  return r.F$.SERVERS;
}(new URL(window.location.href).pathname);
s.d.setState({
  selectedPage: e
});
  }, []), e;
}