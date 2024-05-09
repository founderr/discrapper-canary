"use strict";
n.r(t), n.d(t, {
  UsernameDecorationTypes: function() {
    return r
  },
  default: function() {
    return C
  }
});
var i, r, a = n("735250"),
  s = n("470079"),
  o = n("120356"),
  l = n.n(o),
  u = n("873546"),
  d = n("442837"),
  _ = n("481060"),
  c = n("607070"),
  E = n("100527"),
  I = n("906732"),
  T = n("979264"),
  f = n("372900"),
  S = n("463396"),
  h = n("477734"),
  A = n("484459"),
  m = n("467679"),
  N = n("768581"),
  p = n("981631"),
  O = n("822545");

function R(e) {
  let {
    compact: t
  } = e;
  return (0, a.jsx)(m.default, {
    className: t ? O.botTagCompact : O.botTagCozy,
    type: m.default.Types.REMIX,
    useRemSizes: !0
  })
}

function C(e) {
  let t, {
      author: n,
      message: i,
      userOverride: r,
      compact: o = !1,
      withMentionPrefix: m = !1,
      showPopout: C = !1,
      className: g,
      onClick: L,
      onContextMenu: v,
      onPopoutRequestClose: D,
      renderPopout: M,
      renderRemixTag: y = !1,
      decorations: P
    } = e,
    U = s.useContext(f.default),
    {
      analyticsLocations: b
    } = (0, I.default)(E.default.USERNAME),
    G = m ? "@" : "",
    {
      nick: w,
      colorString: B,
      colorRoleName: k
    } = n,
    V = null != i.messageReference && null != i.webhookId,
    x = (0, d.useStateFromStores)([c.default], () => c.default.roleStyle),
    F = (0, h.useCanSeeRemixBadge)(),
    H = s.useMemo(() => ({
      source: p.AnalyticsSections.CHANNEL,
      messageId: i.id,
      tagUserId: i.author.id
    }), [i.id, i.author.id]),
    Y = {
      className: O.username,
      style: "username" === x && null != B ? {
        color: B
      } : void 0,
      onClick: L,
      onContextMenu: v,
      children: o ? (0, a.jsxs)(a.Fragment, {
        children: [G + w, (0, a.jsx)(T.default, {
          clan: n.clan,
          userId: i.author.id,
          contextGuildId: U,
          className: O.clanTagChiplet,
          profileViewedAnalytics: H
        })]
      }) : (0, a.jsx)(a.Fragment, {
        children: G + w
      })
    };
  t = null != M && null != C ? (0, a.jsx)(_.Popout, {
    preload: V ? void 0 : function() {
      let e = null != r ? r : i.author;
      return (0, A.maybeFetchUserProfileForPopout)(e.id, null != n.guildMemberAvatar && null != U ? (0, N.getGuildMemberAvatarURLSimple)({
        guildId: U,
        userId: e.id,
        avatar: n.guildMemberAvatar,
        size: 80
      }) : e.getAvatarURL(U, 80), {
        guildId: U,
        channelId: i.channel_id
      })
    },
    renderPopout: M,
    shouldShow: C,
    position: u.isMobile ? "window_center" : "right",
    onRequestClose: D,
    children: e => {
      let {
        onClick: t,
        ...n
      } = e;
      return (0, a.jsx)(_.Clickable, {
        tag: "span",
        ...n,
        ...Y,
        className: l()(Y.className, O.clickable, g)
      })
    }
  }) : (0, a.jsx)(_.Clickable, {
    ...Y,
    className: l()(Y.className, g)
  });
  let j = null != P ? P[0] : null,
    W = null != P ? P[1] : null;
  return (0, a.jsxs)(I.AnalyticsLocationProvider, {
    value: b,
    children: [null != j && o ? (0, a.jsxs)(a.Fragment, {
      children: [" ", j, " "]
    }) : null, "dot" === x ? (0, a.jsx)(_.RoleDot, {
      color: B,
      name: k,
      className: O.roleDot
    }) : null, t, !o && (0, a.jsx)(T.default, {
      clan: n.clan,
      userId: i.author.id,
      contextGuildId: U,
      className: O.clanTagChiplet,
      profileViewedAnalytics: H
    }), null != W ? (0, a.jsx)(a.Fragment, {
      children: W
    }) : null, null == j || o ? null : j, null != i && (0, S.default)(i) && F && y ? (0, a.jsx)(R, {}) : null]
  })
}(i = r || (r = {}))[i.SYSTEM_TAG = 0] = "SYSTEM_TAG", i[i.BADGES = 1] = "BADGES"