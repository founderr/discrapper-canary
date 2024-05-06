"use strict";
n.r(t);
var i = n("735250"),
  r = n("470079"),
  a = n("481060"),
  s = n("442837"),
  o = n("231467"),
  l = n("741606"),
  u = n("703656"),
  d = n("314897"),
  _ = n("271383"),
  c = n("594174"),
  E = n("970606"),
  I = n("645896"),
  T = n("905362"),
  f = n("353093"),
  S = n("169559"),
  h = n("284019"),
  A = n("981631"),
  m = n("689938"),
  N = n("917013");

function p(e) {
  e.stopPropagation()
}
t.default = r.memo(function(e) {
  var t, O;
  let {
    clan: R,
    isLoading: C,
    onClose: g,
    profileViewedAnalytics: L
  } = e, v = (0, I.useClanInfo)(null !== (O = null == R ? void 0 : R.identityGuildId) && void 0 !== O ? O : null), D = null == R ? void 0 : R.tag, M = (0, S.default)("clan_guild_profile"), y = null == R ? void 0 : R.identityGuildId, P = (0, s.useStateFromStores)([d.default], () => d.default.getId()), U = (0, s.useStateFromStores)([_.default], () => null != y ? _.default.getMember(y, P) : null, [y, P]), b = (0, s.useStateFromStores)([c.default], () => c.default.getUser(P), [P]), G = (null == U ? void 0 : U.joinedAt) != null, w = (0, f.isGuildAdoptedUserClanIdentity)(y, null == b ? void 0 : b.clan), B = null != (0, l.default)(y);
  r.useEffect(() => {
    null != y && (0, E.trackClanProfileViewed)({
      guildId: y,
      hasJoinRequest: B,
      ...L
    })
  }, [y, B, L]);
  let k = r.useCallback(e => {
      null != y && (e.stopPropagation(), e.preventDefault(), null == g || g(), (0, T.openAdoptClanIdentityModal)(y))
    }, [y, g]),
    V = r.useCallback(e => {
      if (null != v) e.stopPropagation(), e.preventDefault(), null == g || g(), !B && (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("80026"), n.e("18482")]).then(n.bind(n, "767593"));
        return t => (0, i.jsx)(e, {
          ...t,
          clan: v
        })
      })
    }, [v, B, g]),
    x = r.useCallback(() => {
      null != y && (0, u.transitionTo)(A.Routes.GUILD_MEMBER_VERIFICATION(y))
    }, [y]),
    F = r.useCallback(() => {
      null != y && (0, u.transitionToGuild)(y)
    }, [y]),
    H = r.useMemo(() => {
      var e, t;
      return {
        color: a.Button.Colors.BRAND,
        size: a.Button.Sizes.SMALL,
        fullWidth: !0,
        className: N.button,
        themeColor: null !== (t = null == v ? void 0 : null === (e = v.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null
      }
    }, [null == v ? void 0 : null === (t = v.branding) || void 0 === t ? void 0 : t.primaryColor]),
    Y = r.useMemo(() => {
      switch (!0) {
        case !M:
          return null;
        case !G && B:
          return (0, i.jsx)(h.default, {
            onClick: x,
            ...H,
            children: m.default.Messages.CLAN_USER_APPLICATION_EXISTS_TAG_GUILD_PROFILE_CTA
          });
        case !G:
          return (0, i.jsx)(h.default, {
            onClick: V,
            ...H,
            children: m.default.Messages.CLAN_USER_APPLY_TAG_GUILD_PROFILE_CTA
          });
        case G && !w:
          return (0, i.jsx)(h.default, {
            onClick: k,
            ...H,
            children: m.default.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA
          });
        case G && w:
          return (0, i.jsx)(h.default, {
            onClick: F,
            ...H,
            children: m.default.Messages.CLAN_USER_GO_TO_CLAN_CTA
          });
        default:
          return null
      }
    }, [H, k, V, x, F, B, w, G, M]),
    j = r.useMemo(() => ({
      className: N.container,
      onClick: p
    }), []);
  return null == D || null == v || null == y || C ? (0, i.jsx)("div", {
    ...j,
    children: (0, i.jsx)(a.Spinner, {})
  }) : (0, i.jsxs)("div", {
    ...j,
    children: [(0, i.jsx)(o.ClanDiscoveryCardView, {
      clan: v,
      className: N.cardContainer,
      isMember: G
    }), null != Y && (0, i.jsx)("div", {
      className: N.buttonContainer,
      children: Y
    })]
  })
})