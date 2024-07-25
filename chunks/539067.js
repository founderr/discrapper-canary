n.d(t, {
  y: function() {
return u;
  }
}), n(47120);
var r = n(470079),
  i = n(442837),
  a = n(19780),
  s = n(615830),
  o = n(630759),
  E = n(760373);

function u(e) {
  let {
userId: t,
isUserVerified: n
  } = e, u = (0, i.e7)([a.Z], () => a.Z.getSecureFramesRosterMapEntry(t)), c = (0, i.e7)([s.Z], () => s.Z.getPersistentCodesEnabled()), [l, d] = r.useState(!0), [_, f] = r.useState(!1), I = r.useCallback(async (e, t) => {
d(!0);
try {
  let n = E.GB,
    r = await (0, o.uX)(n),
    i = await (0, o.J6)(e, t, n);
  f(r && i);
} catch (e) {
  f(!1);
} finally {
  d(!1);
}
  }, []);
  return r.useEffect(() => {
c && null != u ? I(t, u) : (f(!1), d(!1));
  }, [
c,
u,
I,
t,
n
  ]), {
loading: l,
isPersistentCode: _
  };
}