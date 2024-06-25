n.d(t, {
  L: function() {
    return o
  }
});
var i = n(470079),
  s = n(442837),
  a = n(570140),
  r = n(480387),
  l = n(726745);

function o() {
  let e = (0, s.cj)([l.Z], () => ({
    isLoading: l.Z.getIsValidatingUsers(),
    multiAccountUsers: l.Z.getUsers()
  }));
  return i.useEffect(() => {
    a.Z.wait(() => {
      r.HJ()
    })
  }, []), e
}