"use strict";
var i = n(735250),
  r = n(470079),
  s = n(704215),
  o = n(481060),
  a = n(442837),
  l = n(100527),
  u = n(231467),
  _ = n(605236),
  c = n(246364),
  d = n(937111),
  E = n(741606),
  I = n(703656),
  T = n(314897),
  h = n(271383),
  f = n(594174),
  S = n(63063),
  A = n(970606),
  N = n(645896),
  m = n(905362),
  O = n(353093),
  p = n(954138),
  R = n(169559),
  g = n(284019),
  C = n(308083),
  v = n(981631),
  L = n(689938),
  D = n(667645);

function M(e) {
  e.stopPropagation()
}
t.Z = r.memo(function(e) {
  var t;
  let {
    clan: n,
    isLoading: P,
    onClose: y,
    profileViewedAnalytics: U
  } = e, b = null == n ? void 0 : n.identityGuildId, G = (0, N.Cc)(null != b ? b : null), w = null == n ? void 0 : n.tag, x = (0, R.Z)("clan_guild_profile"), B = (0, p.Z)("base_clan_tag_chiplet"), k = (0, a.e7)([T.default], () => T.default.getId()), V = (0, a.e7)([h.ZP], () => null != b ? h.ZP.getMember(b, k) : null, [b, k]), Z = (0, a.e7)([d.Z], () => {
    var e;
    return (null == G ? void 0 : G.id) != null && (null === (e = d.Z.getRequest(G.id)) || void 0 === e ? void 0 : e.applicationStatus) === c.wB.SUBMITTED
  }), H = null != G && G.memberCount >= C.Du, F = (0, _.wE)(s.z.CLAN_TAG_WAITLIST), Y = (0, a.e7)([f.default], () => f.default.getUser(k), [k]), j = (null == V ? void 0 : V.joinedAt) != null, W = (0, O.Z4)(b, null == Y ? void 0 : Y.clan), K = null != (0, E.Z)(b);
  r.useEffect(() => {
    null != b && (0, A.u0)({
      guildId: b,
      hasJoinRequest: K,
      ...U,
      location: l.Z.CLAN_GUILD_PROFILE
    })
  }, [b, K, U]);
  let z = r.useCallback(() => {
      if (!F)(0, A.pl)({
        originGuildId: null == U ? void 0 : U.guildId,
        tagGuildId: b,
        messageId: null == U ? void 0 : U.messageId,
        tagUserId: null == U ? void 0 : U.tagUserId,
        location: l.Z.CLAN_GUILD_PROFILE
      }), (0, o.showToast)((0, o.createToast)(L.Z.Messages.CLAN_USER_WAITLIST_TOAST_SUCCESS, o.ToastType.SUCCESS))
    }, [b, F, U]),
    q = r.useCallback(e => {
      if (null != b) e.stopPropagation(), e.preventDefault(), null == y || y(), (0, m.S)(b)
    }, [b, y]),
    X = r.useCallback(e => {
      if (null == G || null == b) return;
      if (e.stopPropagation(), e.preventDefault(), null == y || y(), !K)(0, m.q)(b, G, {
        source: null == U ? void 0 : U.source,
        messageId: null == U ? void 0 : U.messageId,
        tagUserId: null == U ? void 0 : U.tagUserId,
        location: l.Z.CLAN_GUILD_PROFILE
      })
    }, [G, b, K, y, U]),
    Q = r.useCallback(() => {
      open(S.Z.getArticleURL(v.BhN.CLANS_FAQ))
    }, []),
    J = r.useCallback(() => {
      if (null != b)(0, I.uL)(v.Z5c.GUILD_MEMBER_VERIFICATION(b))
    }, [b]),
    $ = r.useCallback(() => {
      if (null != b)(0, I.XU)(b)
    }, [b]),
    ee = r.useMemo(() => {
      var e, t;
      return {
        color: o.Button.Colors.BRAND,
        size: o.Button.Sizes.SMALL,
        fullWidth: !0,
        className: D.button,
        themeColor: null !== (t = null == G ? void 0 : null === (e = G.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null
      }
    }, [null == G ? void 0 : null === (t = G.branding) || void 0 === t ? void 0 : t.primaryColor]),
    et = r.useMemo(() => {
      switch (!0) {
        case !B:
          return null;
        case !j && !x && !F:
          return (0, i.jsx)(o.Button, {
            onClick: z,
            color: o.Button.Colors.PRIMARY,
            size: o.Button.Sizes.SMALL,
            fullWidth: !0,
            children: L.Z.Messages.CLAN_USER_WAITLIST_CTA
          });
        case !j && !x && F:
          return (0, i.jsxs)(o.Button, {
            innerClassName: D.waitlistedButton,
            onClick: Q,
            color: o.Button.Colors.PRIMARY,
            size: o.Button.Sizes.SMALL,
            fullWidth: !0,
            children: [L.Z.Messages.CLAN_USER_WAITLISTED, (0, i.jsx)(o.CircleInformationIcon, {
              size: "xs",
              color: "currentColor"
            })]
          });
        case !j && K:
          return (0, i.jsx)(g.Z, {
            onClick: J,
            ...ee,
            children: L.Z.Messages.CLAN_USER_APPLICATION_EXISTS_TAG_GUILD_PROFILE_CTA
          });
        case !j:
          return (0, i.jsx)(g.Z, {
            onClick: X,
            ...ee,
            children: L.Z.Messages.CLAN_USER_APPLY_TAG_GUILD_PROFILE_CTA
          });
        case j && !W:
          return (0, i.jsx)(g.Z, {
            onClick: q,
            ...ee,
            children: L.Z.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA
          });
        case j && W:
          return (0, i.jsx)(g.Z, {
            onClick: $,
            ...ee,
            children: L.Z.Messages.CLAN_USER_GO_TO_CLAN_CTA
          });
        default:
          return null
      }
    }, [ee, q, X, J, $, K, W, x, F, z, Q, B, j]),
    en = r.useMemo(() => ({
      className: D.container,
      onClick: M
    }), []);
  return null == w || null == G || null == b || P ? (0, i.jsx)("div", {
    ...en,
    children: (0, i.jsx)(o.Spinner, {})
  }) : (0, i.jsxs)("div", {
    ...en,
    children: [(0, i.jsx)(u.xV, {
      clan: G,
      className: D.cardContainer,
      isMember: j,
      hasPendingJoinRequest: Z,
      atMaxMemberCapacity: H
    }), null != et && (0, i.jsx)("div", {
      className: D.buttonContainer,
      children: et
    })]
  })
})