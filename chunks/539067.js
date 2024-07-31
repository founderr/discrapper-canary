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
userId: t
  } = e, n = (0, i.e7)([a.Z], () => a.Z.getSecureFramesRosterMapEntry(t)), u = (0, i.e7)([s.Z], () => s.Z.getPersistentCodesEnabled()), [c, l] = r.useState(!0), [d, _] = r.useState(!1), f = r.useCallback(async (e, t) => {
l(!0);
try {
  let n = E.GB,
    r = await (0, o.uX)(n),
    i = await (0, o.J6)(e, t, n);
  _(r && i);
} catch (e) {
  _(!1);
} finally {
  l(!1);
}
  }, []);
  return r.useEffect(() => {
u && null != n ? f(t, n) : (_(!1), l(!1));
  }, [
u,
n,
f,
t
  ]), {
loading: c,
isPersistentCode: d
  };
}