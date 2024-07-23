n.d(t, {
  l: function() {
return E;
  }
}), n(47120);
var r = n(470079),
  a = n(442837),
  o = n(19780),
  s = n(615830),
  i = n(630759),
  c = n(760373);

function E(e) {
  let {
otherUserId: t,
isOtherUserVerified: n
  } = e, E = (0, a.e7)([o.Z], () => o.Z.getSecureFramesRosterMapEntry(t)), u = (0, a.e7)([s.Z], () => s.Z.getPersistentCodesEnabled()), [l, d] = r.useState(!0), [_, f] = r.useState(!1), I = r.useCallback(async (e, t) => {
d(!0);
try {
  let n = c.GB,
    r = await (0, i.uX)(n),
    a = await (0, i.J6)(e, t, n);
  f(r && a);
} catch (e) {
  f(!1);
} finally {
  d(!1);
}
  }, []);
  return r.useEffect(() => {
!u || n || null == E ? (f(!1), d(!1)) : I(t, E);
  }, [
u,
E,
I,
n,
t
  ]), {
loading: l,
isPersistentCode: _
  };
}