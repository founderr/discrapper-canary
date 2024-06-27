"use strict";
n(47120);
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(442837),
  _ = n(481060),
  c = n(906732),
  d = n(318374),
  E = n(522289),
  I = n(314897),
  T = n(346656);
n(5192);
var h = n(342656),
  f = n(785717),
  S = n(726059),
  A = n(162267),
  N = n(171368),
  m = n(228168),
  O = n(689938),
  R = n(647114);
(r = i || (i = {}))[r.NOT_CHECKED = 0] = "NOT_CHECKED", r[r.NOT_OVERFLOWING = 1] = "NOT_OVERFLOWING", r[r.OVERFLOWING_LARGE_ONLY = 2] = "OVERFLOWING_LARGE_ONLY", r[r.OVERFLOWING_ALL = 3] = "OVERFLOWING_ALL";
let p = o.memo(function(e) {
  let {
    user: t,
    mutualFriends: n,
    mutualGuilds: i,
    onClose: r,
    analyticsLocation: a,
    maxIcons: u = 3,
    underlineTextOnHover: I = !1,
    showTooltips: h = !0
  } = e, {
    analyticsLocations: S
  } = (0, c.ZP)(), {
    guildId: A,
    channelId: p,
    messageId: g,
    roleId: C
  } = (0, f.KZ)(), v = o.useMemo(() => {
    var e;
    return null !== (e = null == n ? void 0 : n.map(e => {
      let {
        user: t
      } = e;
      return t
    })) && void 0 !== e ? e : []
  }, [n]), L = o.useMemo(() => {
    var e;
    return null !== (e = null == i ? void 0 : i.map(e => {
      let {
        guild: t
      } = e;
      return t
    })) && void 0 !== e ? e : []
  }, [i]), D = o.useMemo(() => O.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_SHORT.format({
    count: v.length
  }), [v]), M = o.useMemo(() => O.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_SHORT.format({
    count: L.length
  }), [L]), P = o.useRef(null), [y, U] = o.useState(!1), [b, G] = o.useState(!1), w = o.useCallback(() => {
    if (null != P.current) {
      var e;
      G((null === (e = P.current) || void 0 === e ? void 0 : e.clientHeight) > 19), U(!0)
    }
  }, []), B = o.useCallback(e => () => {
    (0, N.openUserProfileModal)({
      userId: t.id,
      sourceAnalyticsLocations: S,
      guildId: A,
      channelId: p,
      messageId: g,
      roleId: C,
      section: e,
      analyticsLocation: a
    }), null == r || r()
  }, [a, S, r, t.id, A, p, g, C]);
  o.useEffect(() => {
    w()
  }, [w, D]);
  let x = v.length > 0,
    k = L.length > 0;
  return (0, s.jsxs)("div", {
    className: l()(R.compactItemContainer, !y && R.hideElement),
    ref: P,
    children: [x && (() => {
      let e = (0, s.jsxs)(_.Clickable, {
        onClick: B(m.oh.MUTUAL_FRIENDS),
        className: l()(R.avatarAndTextContainer, R.__invalid_friendsContainer),
        children: [(0, s.jsx)("div", {
          className: R.__invalid_avatars,
          children: (0, s.jsx)(d.Z, {
            maxUsers: u,
            users: v,
            size: _.AvatarSizes.SIZE_16,
            hideOverflowCount: !0,
            disableUsernameTooltip: !0
          })
        }), (0, s.jsx)(_.Text, {
          className: l()(R.itemizedListText, I && R.underlineOnHover),
          variant: "text-sm/normal",
          color: "interactive-normal",
          children: D
        })]
      });
      return h ? (0, s.jsx)(_.TooltipContainer, {
        text: O.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_TOOLTIP,
        children: e
      }) : e
    })(), x && k && (0, s.jsx)("div", {
      "aria-hidden": "true",
      className: R.dotSpacer
    }), k && (() => {
      let e = (0, s.jsxs)(_.Clickable, {
        onClick: B(m.oh.MUTUAL_GUILDS),
        className: l()(R.avatarAndTextContainer, R.serverContainer),
        children: [!b && (0, s.jsx)("div", {
          className: R.__invalid_avatars,
          children: (0, s.jsx)(E.Z, {
            maxGuilds: u,
            guilds: L,
            size: T.Z.Sizes.SMOL,
            hideOverflowCount: !0,
            disableGuildNameTooltip: !0
          })
        }), (0, s.jsx)(_.Text, {
          className: l()(R.itemizedListText, I && R.underlineOnHover),
          variant: "text-sm/normal",
          color: "interactive-normal",
          children: M
        })]
      });
      return h ? (0, s.jsx)(_.TooltipContainer, {
        text: O.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_TOOLTIP,
        children: e
      }) : e
    })()]
  })
});
t.ZP = o.memo(function(e) {
  var t, n;
  let {
    user: i,
    onClose: r,
    className: o,
    sourceAnaylticsLocations: a
  } = e, {
    analyticsLocations: d
  } = (0, c.ZP)(), E = null !== (n = null !== (t = null == a ? void 0 : a[0]) && void 0 !== t ? t : null == d ? void 0 : d[0]) && void 0 !== n ? n : null, T = (0, u.e7)([I.default], () => I.default.getId()), f = i.id === T, N = i.bot || f, {
    enabled: m
  } = (0, h.qI)({
    autoTrackExposure: !1,
    location: E,
    disable: N
  }), {
    mutualGuilds: g
  } = (0, A.Z)(i.id), {
    mutualFriends: C
  } = (0, S.Z)(i.id);
  return !m || N || (null == C || 0 === C.length) && (null == g || 0 === g.length) ? null : (0, s.jsxs)("div", {
    className: l()(R.mainContainer, o),
    children: [(0, s.jsx)(_.Heading, {
      variant: "eyebrow",
      className: R.__invalid_title,
      children: O.Z.Messages.USER_PROFILE_MUTUALS_TITLE
    }), (0, s.jsx)(p, {
      user: i,
      mutualFriends: C,
      mutualGuilds: g,
      onClose: r
    })]
  })
})