t.d(n, {
  n: function() {
return d;
  }
});
var l = t(442837),
  r = t(210753),
  a = t(594174),
  o = t(81063),
  i = t(162461),
  u = t(26033),
  s = t(561308),
  c = t(701488);

function d(e) {
  var n, t, d, E, _, f, v;
  let T = (0, l.e7)([a.default], () => a.default.getUser(e.author_id)),
{
  activity: x,
  activityApplication: m,
  fallbackApplication: N
} = (0, s.qy)(e),
h = (0, i.wh)('useRichActivityDataForEntry'),
{
  coverImageUrl: I
} = (0, r.$)(null === (n = null != N ? N : m) || void 0 === n ? void 0 : n.id),
g = null !== (_ = null === (t = null != N ? N : m) || void 0 === t ? void 0 : t.getIconURL(c.Si.LARGE)) && void 0 !== _ ? _ : void 0;
  if (!h || null == x)
return {
  isRich: !1,
  richIcon: void 0,
  iconUrl: g,
  iconFallbackUrl: void 0,
  iconTitle: void 0,
  coverImageUrl: I,
  appName: (0, u.d)(e) ? e.extra.game_name : void 0,
  user: T,
  inExperiment: h,
  activity: void 0,
  state: void 0,
  details: void 0,
  party: void 0
};
  let M = null != m && (null === (d = x.assets) || void 0 === d ? void 0 : d.large_image) != null ? (0, o.getAssetImage)(m.id, x.assets.large_image, [
  c.Si.LARGE,
  c.Si.LARGE
]) : void 0,
A = null !== (f = null === (E = x.assets) || void 0 === E ? void 0 : E.large_text) && void 0 !== f ? f : void 0,
C = null !== (v = x.name) && void 0 !== v ? v : 'game_name' in e.extra ? e.extra.game_name : void 0,
R = x.details,
S = x.state,
Z = x.party;
  return {
isRich: null != M || null != A || null != R || null != S || null != Z,
richIcon: M,
coverImageUrl: I,
iconUrl: null != M ? M : g,
iconFallbackUrl: null != M ? g : void 0,
iconTitle: A,
user: T,
activity: x,
state: S,
details: R,
party: Z,
appName: C,
inExperiment: h
  };
}