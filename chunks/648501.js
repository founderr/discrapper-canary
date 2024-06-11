"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
});
var l = n("735250");
n("470079");
var a = n("442837"),
  s = n("692547"),
  i = n("481060"),
  r = n("619915"),
  o = n("456269"),
  u = n("921711"),
  d = n("71275"),
  c = n("601070"),
  f = n("430824"),
  h = n("496675"),
  m = n("306680"),
  C = n("979651"),
  p = n("968358"),
  g = n("790901"),
  E = n("714794"),
  S = n("355363"),
  _ = n("687352"),
  I = n("135724"),
  N = n("25601"),
  T = n("981631"),
  A = n("490897"),
  L = n("689938"),
  v = n("658609");

function x(e) {
  var t;
  let {
    channel: n,
    isChannelSelected: x,
    isChannelCollapsed: R,
    voiceStates: M,
    enableConnectedUserLimit: y,
    enableActivities: O,
    isSubscriptionGated: b,
    needSubscriptionToAccess: D,
    isNewChannel: j,
    muted: P,
    resolvedUnreadSetting: G
  } = e, U = (0, a.useStateFromStores)([m.default], () => m.default.getMentionCount(n.id)), w = (0, r.default)(n), B = (0, a.useStateFromStores)([h.default], () => !h.default.can(T.Permissions.CONNECT, n)), F = (0, a.useStateFromStores)([C.default], () => C.default.hasVideo(n.id)), V = (0, d.useStageHasMedia)(n.id) && n.isGuildStageVoice(), H = (0, S.default)({
    channel: n,
    locked: B,
    video: F || V,
    selected: x
  }), k = (0, a.useStateFromStores)([c.default], () => c.default.getNewThreadCount(n.guild_id, n.id)), Y = (0, o.useUnreadThreadsCountForParent)(n.guild_id, n.id), K = (0, a.useStateFromStores)([f.default], () => {
    var e, t;
    return null !== (t = null === (e = f.default.getGuild(n.guild_id)) || void 0 === e ? void 0 : e.hasFeature(T.GuildFeatures.COMMUNITY)) && void 0 !== t && t
  });
  if ((0, E.default)(U)) return (0, l.jsx)(N.default, {
    mentionsCount: U
  });
  if ((0, u.showPremiumChannelIconButton)(b)) return (0, l.jsx)(u.default, {
    locked: D
  });
  if (j) return (0, l.jsx)(i.TextBadge, {
    text: L.default.Messages.NEW,
    color: s.default.unsafe_rawColors.BRAND_260.css,
    className: v.newChannel
  });
  if (!P && G === A.UnreadSetting.ALL_MESSAGES && n.isForumLikeChannel() && null != k && k > 0) return (0, l.jsx)(i.Text, {
    variant: "text-xs/semibold",
    color: "text-brand",
    children: L.default.Messages.CHANNEL_NEW_POSTS_LABEL.format({
      count: (0, i.getBadgeCountString)(k)
    })
  });
  if (!P && n.isForumLikeChannel() && null != Y && Y > 0) return (0, l.jsx)(i.Text, {
    variant: "text-xs/semibold",
    color: "text-muted",
    children: (0, i.getBadgeCountString)(Y)
  });
  let W = null !== (t = null == M ? void 0 : M.length) && void 0 !== t ? t : 0;
  return null != y && y && H ? (0, l.jsx)(I.default, {
    userCount: W,
    video: F || V,
    channel: n
  }) : R && (0, p.hasStream)(M) && K ? (0, l.jsx)(i.TextBadge, {
    text: L.default.Messages.LIVE,
    color: s.default.unsafe_rawColors.RED_400.css
  }) : null != O && O && (0, g.showChannelItemEmbeddedActivities)(w) ? (0, l.jsx)(_.default, {
    embeddedApps: w,
    muted: P
  }) : null
}