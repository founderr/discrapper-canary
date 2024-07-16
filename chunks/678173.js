a.d(n, {
  T: function() {
return i;
  }
});
var t = a(470079),
  s = a(127255);

function i(e, n, a) {
  let i = (0, s.Z)({
guildId: e,
channel: a
  });
  return t.useMemo(() => {
var e;
return null !== (e = i.find(e => e.application.id === n)) && void 0 !== e ? e : null;
  }, [
i,
n
  ]);
}