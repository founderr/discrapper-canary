"use strict";
n.r(t);
var i = n("735250"),
  r = n("470079"),
  a = n("524437"),
  s = n("481060"),
  o = n("442837"),
  l = n("100527"),
  u = n("231467"),
  d = n("605236"),
  _ = n("741606"),
  c = n("703656"),
  E = n("314897"),
  I = n("271383"),
  T = n("594174"),
  f = n("970606"),
  S = n("645896"),
  h = n("905362"),
  A = n("353093"),
  m = n("954138"),
  N = n("169559"),
  p = n("284019"),
  O = n("981631"),
  C = n("689938"),
  R = n("534856");

function g(e) {
  e.stopPropagation()
}
t.default = r.memo(function(e) {
  var t;
  let {
    clan: n,
    isLoading: L,
    onClose: v,
    profileViewedAnalytics: D
  } = e, M = null == n ? void 0 : n.identityGuildId, y = (0, S.useClanInfo)(null != M ? M : null), P = null == n ? void 0 : n.tag, U = (0, N.default)("clan_guild_profile"), b = (0, m.default)("base_clan_tag_chiplet"), G = (0, o.useStateFromStores)([E.default], () => E.default.getId()), w = (0, o.useStateFromStores)([I.default], () => null != M ? I.default.getMember(M, G) : null, [M, G]), B = (0, d.useIsDismissibleContentDismissed)(a.DismissibleContent.CLAN_TAG_WAITLIST), k = (0, o.useStateFromStores)([T.default], () => T.default.getUser(G), [G]), V = (null == w ? void 0 : w.joinedAt) != null, x = (0, A.isGuildAdoptedUserClanIdentity)(M, null == k ? void 0 : k.clan), F = null != (0, _.default)(M);
  r.useEffect(() => {
    null != M && (0, f.trackClanProfileViewed)({
      guildId: M,
      hasJoinRequest: F,
      ...D,
      location: l.default.CLAN_GUILD_PROFILE
    })
  }, [M, F, D]);
  let H = r.useCallback(() => {
      !B && ((0, f.trackClanApplyWaitlist)({
        originGuildId: null == D ? void 0 : D.guildId,
        tagGuildId: M,
        messageId: null == D ? void 0 : D.messageId,
        tagUserId: null == D ? void 0 : D.tagUserId,
        location: l.default.CLAN_GUILD_PROFILE
      }), (0, s.showToast)((0, s.createToast)(C.default.Messages.CLAN_USER_WAITLIST_TOAST_SUCCESS, s.ToastType.SUCCESS)))
    }, [M, B, D]),
    Y = r.useCallback(e => {
      null != M && (e.stopPropagation(), e.preventDefault(), null == v || v(), (0, h.openAdoptClanIdentityModal)(M))
    }, [M, v]),
    j = r.useCallback(e => {
      if (null != y && null != M) e.stopPropagation(), e.preventDefault(), null == v || v(), !F && (0, h.openClanApplyFlow)(M, y, {
        source: null == D ? void 0 : D.source,
        messageId: null == D ? void 0 : D.messageId,
        tagUserId: null == D ? void 0 : D.tagUserId,
        location: l.default.CLAN_GUILD_PROFILE
      })
    }, [y, M, F, v, D]),
    W = r.useCallback(() => {
      null != M && (0, c.transitionTo)(O.Routes.GUILD_MEMBER_VERIFICATION(M))
    }, [M]),
    K = r.useCallback(() => {
      null != M && (0, c.transitionToGuild)(M)
    }, [M]),
    z = r.useMemo(() => {
      var e, t;
      return {
        color: s.Button.Colors.BRAND,
        size: s.Button.Sizes.SMALL,
        fullWidth: !0,
        className: R.button,
        themeColor: null !== (t = null == y ? void 0 : null === (e = y.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null
      }
    }, [null == y ? void 0 : null === (t = y.branding) || void 0 === t ? void 0 : t.primaryColor]),
    Z = r.useMemo(() => {
      switch (!0) {
        case !b:
          return null;
        case !V && !U && !B:
          return (0, i.jsx)(s.Button, {
            onClick: H,
            color: s.Button.Colors.PRIMARY,
            size: s.Button.Sizes.SMALL,
            fullWidth: !0,
            children: C.default.Messages.JOIN_WAITLIST
          });
        case !V && !U && B:
          return (0, i.jsx)(s.Button, {
            onClick: H,
            color: s.Button.Colors.PRIMARY,
            size: s.Button.Sizes.SMALL,
            fullWidth: !0,
            disabled: !0,
            children: C.default.Messages.CLAN_USER_WAITLISTED
          });
        case !V && F:
          return (0, i.jsx)(p.default, {
            onClick: W,
            ...z,
            children: C.default.Messages.CLAN_USER_APPLICATION_EXISTS_TAG_GUILD_PROFILE_CTA
          });
        case !V:
          return (0, i.jsx)(p.default, {
            onClick: j,
            ...z,
            children: C.default.Messages.CLAN_USER_APPLY_TAG_GUILD_PROFILE_CTA
          });
        case V && !x:
          return (0, i.jsx)(p.default, {
            onClick: Y,
            ...z,
            children: C.default.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA
          });
        case V && x:
          return (0, i.jsx)(p.default, {
            onClick: K,
            ...z,
            children: C.default.Messages.CLAN_USER_GO_TO_CLAN_CTA
          });
        default:
          return null
      }
    }, [z, Y, j, W, K, F, x, U, B, H, b, V]),
    X = r.useMemo(() => ({
      className: R.container,
      onClick: g
    }), []);
  return null == P || null == y || null == M || L ? (0, i.jsx)("div", {
    ...X,
    children: (0, i.jsx)(s.Spinner, {})
  }) : (0, i.jsxs)("div", {
    ...X,
    children: [(0, i.jsx)(u.ClanDiscoveryCardView, {
      clan: y,
      className: R.cardContainer,
      isMember: V
    }), null != Z && (0, i.jsx)("div", {
      className: R.buttonContainer,
      children: Z
    })]
  })
})