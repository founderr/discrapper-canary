"use strict";
n.r(t);
var i = n("735250"),
  r = n("470079"),
  s = n("524437"),
  a = n("481060"),
  o = n("442837"),
  l = n("100527"),
  u = n("231467"),
  d = n("605236"),
  _ = n("246364"),
  c = n("937111"),
  E = n("741606"),
  I = n("703656"),
  T = n("314897"),
  f = n("271383"),
  S = n("594174"),
  h = n("87888"),
  A = n("63063"),
  m = n("970606"),
  N = n("645896"),
  p = n("905362"),
  O = n("353093"),
  C = n("954138"),
  R = n("169559"),
  g = n("284019"),
  L = n("308083"),
  v = n("981631"),
  D = n("689938"),
  M = n("534856");

function y(e) {
  e.stopPropagation()
}
t.default = r.memo(function(e) {
  var t;
  let {
    clan: n,
    isLoading: P,
    onClose: U,
    profileViewedAnalytics: b
  } = e, G = null == n ? void 0 : n.identityGuildId, w = (0, N.useClanInfo)(null != G ? G : null), k = null == n ? void 0 : n.tag, B = (0, R.default)("clan_guild_profile"), V = (0, C.default)("base_clan_tag_chiplet"), x = (0, o.useStateFromStores)([T.default], () => T.default.getId()), F = (0, o.useStateFromStores)([f.default], () => null != G ? f.default.getMember(G, x) : null, [G, x]), H = (0, o.useStateFromStores)([c.default], () => {
    var e;
    return (null == w ? void 0 : w.id) != null && (null === (e = c.default.getRequest(w.id)) || void 0 === e ? void 0 : e.applicationStatus) === _.GuildJoinRequestApplicationStatuses.SUBMITTED
  }), Y = null != w && w.memberCount >= L.MAX_CLAN_MEMBERS, j = (0, d.useIsDismissibleContentDismissed)(s.DismissibleContent.CLAN_TAG_WAITLIST), W = (0, o.useStateFromStores)([S.default], () => S.default.getUser(x), [x]), K = (null == F ? void 0 : F.joinedAt) != null, z = (0, O.isGuildAdoptedUserClanIdentity)(G, null == W ? void 0 : W.clan), Z = null != (0, E.default)(G);
  r.useEffect(() => {
    null != G && (0, m.trackClanProfileViewed)({
      guildId: G,
      hasJoinRequest: Z,
      ...b,
      location: l.default.CLAN_GUILD_PROFILE
    })
  }, [G, Z, b]);
  let X = r.useCallback(() => {
      !j && ((0, m.trackClanApplyWaitlist)({
        originGuildId: null == b ? void 0 : b.guildId,
        tagGuildId: G,
        messageId: null == b ? void 0 : b.messageId,
        tagUserId: null == b ? void 0 : b.tagUserId,
        location: l.default.CLAN_GUILD_PROFILE
      }), (0, a.showToast)((0, a.createToast)(D.default.Messages.CLAN_USER_WAITLIST_TOAST_SUCCESS, a.ToastType.SUCCESS)))
    }, [G, j, b]),
    Q = r.useCallback(e => {
      null != G && (e.stopPropagation(), e.preventDefault(), null == U || U(), (0, p.openAdoptClanIdentityModal)(G))
    }, [G, U]),
    q = r.useCallback(e => {
      if (null != w && null != G) e.stopPropagation(), e.preventDefault(), null == U || U(), !Z && (0, p.openClanApplyFlow)(G, w, {
        source: null == b ? void 0 : b.source,
        messageId: null == b ? void 0 : b.messageId,
        tagUserId: null == b ? void 0 : b.tagUserId,
        location: l.default.CLAN_GUILD_PROFILE
      })
    }, [w, G, Z, U, b]),
    J = r.useCallback(() => {
      open(A.default.getArticleURL(v.HelpdeskArticles.CLANS_FAQ))
    }, []),
    $ = r.useCallback(() => {
      null != G && (0, I.transitionTo)(v.Routes.GUILD_MEMBER_VERIFICATION(G))
    }, [G]),
    ee = r.useCallback(() => {
      null != G && (0, I.transitionToGuild)(G)
    }, [G]),
    et = r.useMemo(() => {
      var e, t;
      return {
        color: a.Button.Colors.BRAND,
        size: a.Button.Sizes.SMALL,
        fullWidth: !0,
        className: M.button,
        themeColor: null !== (t = null == w ? void 0 : null === (e = w.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null
      }
    }, [null == w ? void 0 : null === (t = w.branding) || void 0 === t ? void 0 : t.primaryColor]),
    en = r.useMemo(() => {
      switch (!0) {
        case !V:
          return null;
        case !K && !B && !j:
          return (0, i.jsx)(a.Button, {
            onClick: X,
            color: a.Button.Colors.PRIMARY,
            size: a.Button.Sizes.SMALL,
            fullWidth: !0,
            children: D.default.Messages.CLAN_USER_WAITLIST_CTA
          });
        case !K && !B && j:
          return (0, i.jsxs)(a.Button, {
            innerClassName: M.waitlistedButton,
            onClick: J,
            color: a.Button.Colors.PRIMARY,
            size: a.Button.Sizes.SMALL,
            fullWidth: !0,
            children: [D.default.Messages.CLAN_USER_WAITLISTED, (0, i.jsx)(h.default, {})]
          });
        case !K && Z:
          return (0, i.jsx)(g.default, {
            onClick: $,
            ...et,
            children: D.default.Messages.CLAN_USER_APPLICATION_EXISTS_TAG_GUILD_PROFILE_CTA
          });
        case !K:
          return (0, i.jsx)(g.default, {
            onClick: q,
            ...et,
            children: D.default.Messages.CLAN_USER_APPLY_TAG_GUILD_PROFILE_CTA
          });
        case K && !z:
          return (0, i.jsx)(g.default, {
            onClick: Q,
            ...et,
            children: D.default.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA
          });
        case K && z:
          return (0, i.jsx)(g.default, {
            onClick: ee,
            ...et,
            children: D.default.Messages.CLAN_USER_GO_TO_CLAN_CTA
          });
        default:
          return null
      }
    }, [et, Q, q, $, ee, Z, z, B, j, X, J, V, K]),
    ei = r.useMemo(() => ({
      className: M.container,
      onClick: y
    }), []);
  return null == k || null == w || null == G || P ? (0, i.jsx)("div", {
    ...ei,
    children: (0, i.jsx)(a.Spinner, {})
  }) : (0, i.jsxs)("div", {
    ...ei,
    children: [(0, i.jsx)(u.ClanDiscoveryCardView, {
      clan: w,
      className: M.cardContainer,
      isMember: K,
      hasPendingJoinRequest: H,
      atMaxMemberCapacity: Y
    }), null != en && (0, i.jsx)("div", {
      className: M.buttonContainer,
      children: en
    })]
  })
})