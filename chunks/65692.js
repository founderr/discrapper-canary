n.d(t, {
  q: function() {
return d;
  }
}), n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
var r = n(470079),
  i = n(512722),
  a = n.n(i),
  s = n(442837),
  o = n(253135),
  E = n(314897),
  u = n(19780),
  c = n(630759),
  l = n(760373);

function d(e) {
  let {
userId: t
  } = e, n = (0, s.e7)([E.default], () => E.default.getId());
  a()(n !== t, '[useSecureFramesPairwiseFingerprint] Should not pass current user id.');
  let [i, d] = r.useState(null), [_, f] = r.useState(!1), I = (0, s.e7)([u.Z], () => u.Z.getSecureFramesRosterMapEntry(t)), S = r.useCallback(async (e, t, n) => {
f(!0);
let r = E.default.getId(),
  {
    key: i
  } = await (0, c.Wg)(n);
d(await (0, o.Il)(l.Xj, new Uint8Array(i), r, new Uint8Array(t), e, l.KN, l.iQ)), f(!1);
  }, []);
  return r.useEffect(() => {
null != I && S(t, I, l.GB);
  }, [
S,
t,
I
  ]), r.useMemo(() => ({
fingerprint: i,
userKey: I,
loading: _
  }), [
i,
_,
I
  ]);
}