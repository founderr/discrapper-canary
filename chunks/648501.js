n.d(t, {
  Z: function() {
    return v
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(692547),
  r = n(481060),
  a = n(619915),
  o = n(456269),
  u = n(921711),
  c = n(71275),
  d = n(601070),
  h = n(430824),
  g = n(496675),
  p = n(306680),
  m = n(979651),
  C = n(968358),
  E = n(790901),
  f = n(714794),
  _ = n(355363),
  I = n(687352),
  N = n(135724),
  Z = n(25601),
  S = n(981631),
  x = n(490897),
  T = n(689938),
  L = n(219644);

function v(e) {
  var t;
  let {
    channel: n,
    isChannelSelected: v,
    isChannelCollapsed: A,
    voiceStates: M,
    enableConnectedUserLimit: R,
    enableActivities: O,
    isSubscriptionGated: P,
    needSubscriptionToAccess: j,
    isNewChannel: b,
    muted: D,
    resolvedUnreadSetting: y
  } = e, U = (0, i.e7)([p.ZP], () => p.ZP.getMentionCount(n.id)), G = (0, a.ZP)(n), w = (0, i.e7)([g.Z], () => !g.Z.can(S.Plq.CONNECT, n)), k = (0, i.e7)([m.Z], () => m.Z.hasVideo(n.id)), B = (0, c.PK)(n.id) && n.isGuildStageVoice(), V = (0, _.ZP)({
    channel: n,
    locked: w,
    video: k || B,
    selected: v
  }), H = (0, i.e7)([d.Z], () => d.Z.getNewThreadCount(n.guild_id, n.id)), F = (0, o.n2)(n.guild_id, n.id), W = (0, i.e7)([h.Z], () => {
    var e, t;
    return null !== (t = null === (e = h.Z.getGuild(n.guild_id)) || void 0 === e ? void 0 : e.hasFeature(S.oNc.COMMUNITY)) && void 0 !== t && t
  });
  if ((0, f.Z)(U)) return (0, l.jsx)(Z.Z, {
    mentionsCount: U
  });
  if ((0, u.O)(P)) return (0, l.jsx)(u.Z, {
    locked: j
  });
  if (b) return (0, l.jsx)(r.TextBadge, {
    text: T.Z.Messages.NEW,
    color: s.Z.unsafe_rawColors.BRAND_260.css,
    className: L.newChannel
  });
  if (!D && y === x.i.ALL_MESSAGES && n.isForumLikeChannel() && null != H && H > 0) return (0, l.jsx)(r.Text, {
    variant: "text-xs/semibold",
    color: "text-brand",
    children: T.Z.Messages.CHANNEL_NEW_POSTS_LABEL.format({
      count: (0, r.getBadgeCountString)(H)
    })
  });
  if (!D && n.isForumLikeChannel() && null != F && F > 0) return (0, l.jsx)(r.Text, {
    variant: "text-xs/semibold",
    color: "text-muted",
    children: (0, r.getBadgeCountString)(F)
  });
  let Y = null !== (t = null == M ? void 0 : M.length) && void 0 !== t ? t : 0;
  return null != R && R && V ? (0, l.jsx)(N.Z, {
    userCount: Y,
    video: k || B,
    channel: n
  }) : A && (0, C.a)(M) && W ? (0, l.jsx)(r.TextBadge, {
    text: T.Z.Messages.LIVE,
    color: s.Z.unsafe_rawColors.RED_400.css
  }) : null != O && O && (0, E.u)(G) ? (0, l.jsx)(I.Z, {
    embeddedApps: G,
    muted: D
  }) : null
}