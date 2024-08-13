n.d(t, {
  n: function() {
return d;
  }
});
var r = n(442837),
  i = n(210753),
  a = n(594174),
  s = n(81063),
  o = n(162461),
  l = n(26033),
  u = n(561308),
  c = n(701488);

function d(e) {
  var t, n, d, _, E, f, h, p, m, I, T;
  let g = (0, r.e7)([a.default], () => a.default.getUser(e.author_id)),
{
  activity: S,
  activityApplication: A,
  fallbackApplication: N
} = (0, u.qy)(e),
v = (0, o.wh)('useRichActivityDataForEntry'),
{
  coverImageUrl: O
} = (0, i.$)(null === (t = null != N ? N : A) || void 0 === t ? void 0 : t.id),
R = null !== (h = null === (n = null != N ? N : A) || void 0 === n ? void 0 : n.getIconURL(c.Si.LARGE)) && void 0 !== h ? h : void 0;
  if (!v || null == S)
return {
  isRich: !1,
  richIcon: void 0,
  iconUrl: R,
  iconFallbackUrl: void 0,
  iconTitle: void 0,
  coverImageUrl: O,
  appName: (0, l.dX)(e) ? e.extra.game_name : void 0,
  user: g,
  inExperiment: v,
  activity: void 0,
  state: void 0,
  details: void 0,
  party: void 0
};
  let C = null !== (p = null === (d = S.assets) || void 0 === d ? void 0 : d.large_image) && void 0 !== p ? p : null === (_ = S.assets) || void 0 === _ ? void 0 : _.small_image,
y = null != A && null != C ? (0, s.getAssetImage)(A.id, C, [
  c.Si.LARGE,
  c.Si.LARGE
]) : void 0,
D = null !== (I = null !== (m = null === (E = S.assets) || void 0 === E ? void 0 : E.large_text) && void 0 !== m ? m : null === (f = S.assets) || void 0 === f ? void 0 : f.small_text) && void 0 !== I ? I : void 0,
L = null !== (T = S.name) && void 0 !== T ? T : 'game_name' in e.extra ? e.extra.game_name : void 0,
b = S.details,
M = S.state,
P = S.party;
  return {
isRich: null != y || null != D || null != b || null != M || null != P,
richIcon: y,
coverImageUrl: O,
iconUrl: null != y ? y : R,
iconFallbackUrl: null != y ? R : void 0,
iconTitle: D,
user: g,
activity: S,
state: M,
details: b,
party: P,
appName: L,
inExperiment: v
  };
}