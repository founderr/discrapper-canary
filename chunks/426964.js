"use strict";
n.r(t);
var i = n("735250"),
  r = n("470079"),
  a = n("481060"),
  s = n("442837"),
  o = n("100527"),
  l = n("231467"),
  u = n("741606"),
  d = n("703656"),
  _ = n("314897"),
  c = n("271383"),
  E = n("594174"),
  I = n("970606"),
  T = n("645896"),
  f = n("905362"),
  S = n("353093"),
  h = n("169559"),
  A = n("284019"),
  m = n("981631"),
  N = n("689938"),
  p = n("917013");

function O(e) {
  e.stopPropagation()
}
t.default = r.memo(function(e) {
  var t, n;
  let {
    clan: R,
    isLoading: C,
    onClose: g,
    profileViewedAnalytics: L
  } = e, v = (0, T.useClanInfo)(null !== (n = null == R ? void 0 : R.identityGuildId) && void 0 !== n ? n : null), D = null == R ? void 0 : R.tag, M = (0, h.default)("clan_guild_profile"), y = null == R ? void 0 : R.identityGuildId, P = (0, s.useStateFromStores)([_.default], () => _.default.getId()), U = (0, s.useStateFromStores)([c.default], () => null != y ? c.default.getMember(y, P) : null, [y, P]), b = (0, s.useStateFromStores)([E.default], () => E.default.getUser(P), [P]), G = (null == U ? void 0 : U.joinedAt) != null, w = (0, S.isGuildAdoptedUserClanIdentity)(y, null == b ? void 0 : b.clan), k = null != (0, u.default)(y);
  r.useEffect(() => {
    null != y && (0, I.trackClanProfileViewed)({
      guildId: y,
      hasJoinRequest: k,
      ...L,
      location: o.default.CLAN_GUILD_PROFILE
    })
  }, [y, k, L]);
  let B = r.useCallback(e => {
      null != y && (e.stopPropagation(), e.preventDefault(), null == g || g(), (0, f.openAdoptClanIdentityModal)(y))
    }, [y, g]),
    V = r.useCallback(e => {
      if (null != v && null != y) e.stopPropagation(), e.preventDefault(), null == g || g(), !k && (0, f.openClanApplyFlow)(y, v, {
        source: null == L ? void 0 : L.source,
        messageId: null == L ? void 0 : L.messageId,
        tagUserId: null == L ? void 0 : L.tagUserId,
        location: o.default.CLAN_GUILD_PROFILE
      })
    }, [v, y, k, g, L]),
    x = r.useCallback(() => {
      null != y && (0, d.transitionTo)(m.Routes.GUILD_MEMBER_VERIFICATION(y))
    }, [y]),
    F = r.useCallback(() => {
      null != y && (0, d.transitionToGuild)(y)
    }, [y]),
    H = r.useMemo(() => {
      var e, t;
      return {
        color: a.Button.Colors.BRAND,
        size: a.Button.Sizes.SMALL,
        fullWidth: !0,
        className: p.button,
        themeColor: null !== (t = null == v ? void 0 : null === (e = v.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null
      }
    }, [null == v ? void 0 : null === (t = v.branding) || void 0 === t ? void 0 : t.primaryColor]),
    Y = r.useMemo(() => {
      switch (!0) {
        case !M:
          return null;
        case !G && k:
          return (0, i.jsx)(A.default, {
            onClick: x,
            ...H,
            children: N.default.Messages.CLAN_USER_APPLICATION_EXISTS_TAG_GUILD_PROFILE_CTA
          });
        case !G:
          return (0, i.jsx)(A.default, {
            onClick: V,
            ...H,
            children: N.default.Messages.CLAN_USER_APPLY_TAG_GUILD_PROFILE_CTA
          });
        case G && !w:
          return (0, i.jsx)(A.default, {
            onClick: B,
            ...H,
            children: N.default.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA
          });
        case G && w:
          return (0, i.jsx)(A.default, {
            onClick: F,
            ...H,
            children: N.default.Messages.CLAN_USER_GO_TO_CLAN_CTA
          });
        default:
          return null
      }
    }, [H, B, V, x, F, k, w, G, M]),
    j = r.useMemo(() => ({
      className: p.container,
      onClick: O
    }), []);
  return null == D || null == v || null == y || C ? (0, i.jsx)("div", {
    ...j,
    children: (0, i.jsx)(a.Spinner, {})
  }) : (0, i.jsxs)("div", {
    ...j,
    children: [(0, i.jsx)(l.ClanDiscoveryCardView, {
      clan: v,
      className: p.cardContainer,
      isMember: G
    }), null != Y && (0, i.jsx)("div", {
      className: p.buttonContainer,
      children: Y
    })]
  })
})