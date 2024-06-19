n.d(t, {
  L: function() {
    return o
  }
});
var i = n(470079),
  s = n(442837),
  l = n(570140),
  a = n(480387),
  r = n(726745);

function o() {
  let e = (0, s.cj)([r.Z], () => ({
    isLoading: r.Z.getIsValidatingUsers(),
    multiAccountUsers: r.Z.getUsers()
  }));
  return i.useEffect(() => {
    l.Z.wait(() => {
      a.HJ()
    })
  }, []), e
}