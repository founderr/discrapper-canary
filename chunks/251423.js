n.d(t, {
  L: function() {
    return l
  }
});
var s = n(470079),
  r = n(442837),
  i = n(570140),
  a = n(480387),
  o = n(726745);

function l() {
  let e = (0, r.cj)([o.Z], () => ({
    isLoading: o.Z.getIsValidatingUsers(),
    multiAccountUsers: o.Z.getUsers()
  }));
  return s.useEffect(() => {
    i.Z.wait(() => {
      a.HJ()
    })
  }, []), e
}