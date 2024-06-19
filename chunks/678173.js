i.d(n, {
  T: function() {
    return t
  }
});
var a = i(470079),
  l = i(127255);

function t(e, n, i) {
  let t = (0, l.Z)({
    guildId: e,
    channel: i
  });
  return a.useMemo(() => {
    var e;
    return null !== (e = t.find(e => e.application.id === n)) && void 0 !== e ? e : null
  }, [t, n])
}