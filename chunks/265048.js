t.d(n, {
  F: function() {
return T;
  }
});
var l = t(735250);
t(470079);
var r = t(442837),
  a = t(438139),
  o = t(210753),
  i = t(706454),
  u = t(594174),
  s = t(81063),
  c = t(162461),
  d = t(561308),
  E = t(701488);

function _(e) {
  let {
message: n
  } = e;
  return (0, l.jsx)('div', {
children: n
  });
}
let f = (0, a.Z)(_),
  T = e => {
var n, t, a, T, v;
let m = (0, r.e7)([i.default], () => i.default.locale),
  x = (0, r.e7)([u.default], () => u.default.getUser(e.author_id)),
  {
    activity: N,
    activityApplication: h,
    fallbackApplication: I
  } = (0, d.qy)(e),
  g = null != I ? I : h,
  M = (0, c.wh)('useGamingContentData'),
  {
    coverImageUrl: A
  } = (0, o.$)(null == g ? void 0 : g.id),
  C = null !== (a = null == g ? void 0 : g.getIconURL(E.Si.LARGE)) && void 0 !== a ? a : void 0;
if (!M || null == N)
  return {
    iconUrl: C,
    gameTitle: e.extra.game_name,
    user: x,
    inExperiment: M,
    coverImageUrl: A
  };
let R = null != h && (null === (n = N.assets) || void 0 === n ? void 0 : n.large_image) != null ? (0, s.getAssetImage)(h.id, N.assets.large_image, [
    E.Si.LARGE,
    E.Si.LARGE
  ]) : void 0,
  Z = null !== (T = null === (t = N.assets) || void 0 === t ? void 0 : t.large_text) && void 0 !== T ? T : void 0,
  S = null !== (v = N.name) && void 0 !== v ? v : e.extra.game_name,
  p = N.details,
  O = N.state,
  P = N.party,
  L = null != N.timestamps ? (0, l.jsx)(f, {
    timestamps: N.timestamps
  }) : (0, l.jsx)(_, {
    message: (0, d.yh)(e, m)
  });
return {
  iconUrl: null != R ? R : C,
  iconFallbackUrl: null != R ? C : void 0,
  iconTitle: Z,
  user: x,
  activity: N,
  state: O,
  details: p,
  party: P,
  gameTitle: S,
  gameTime: L,
  inExperiment: M,
  richIcon: R,
  coverImageUrl: A
};
  };