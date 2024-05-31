"use strict";
n.r(t), n.d(t, {
  UsernameDecorationTypes: function() {
    return r
  },
  default: function() {
    return g
  }
});
var i, r, s = n("735250"),
  a = n("470079"),
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
  p = n("51063"),
  O = n("981631"),
  C = n("822545");

function R(e) {
  let {
    compact: t
  } = e;
  return (0, s.jsx)(m.default, {
    className: t ? C.botTagCompact : C.botTagCozy,
    type: m.default.Types.REMIX,
    useRemSizes: !0
  })
}

function g(e) {
  let t, {
      author: n,
      message: i,
      userOverride: r,
      compact: o = !1,
      withMentionPrefix: m = !1,
      showPopout: g = !1,
      className: L,
      onClick: v,
      onContextMenu: D,
      onPopoutRequestClose: M,
      renderPopout: y,
      renderRemixTag: P = !1,
      decorations: U
    } = e,
    b = a.useContext(f.default),
    {
      analyticsLocations: G
    } = (0, I.default)(E.default.USERNAME),
    {
      nick: w,
      colorString: k,
      colorRoleName: B
    } = n,
    V = null != i.messageReference && null != i.webhookId,
    x = (0, d.useStateFromStores)([c.default], () => c.default.roleStyle),
    F = (0, h.useCanSeeRemixBadge)(),
    H = a.useMemo(() => ({
      source: O.AnalyticsSections.CHANNEL,
      messageId: i.id,
      tagUserId: i.author.id
    }), [i.id, i.author.id]),
    Y = {
      className: C.username,
      style: "username" === x && null != k ? {
        color: k
      } : void 0,
      onClick: v,
      onContextMenu: D,
      children: (0, s.jsx)(s.Fragment, {
        children: (m ? "@" : "") + w
      })
    },
    j = a.useMemo(() => o ? (0, s.jsx)(T.default, {
      clan: n.clan,
      userId: i.author.id,
      contextGuildId: b,
      className: C.clanTagChiplet,
      profileViewedAnalytics: H
    }) : null, [o, H, n.clan, b, i.author.id]);
  t = null != y && null != g ? (0, s.jsx)(_.Popout, {
    preload: V ? void 0 : function() {
      let e = null != r ? r : i.author;
      return (0, A.maybeFetchUserProfileForPopout)(e.id, null != n.guildMemberAvatar && null != b ? (0, N.getGuildMemberAvatarURLSimple)({
        guildId: b,
        userId: e.id,
        avatar: n.guildMemberAvatar,
        size: 80
      }) : e.getAvatarURL(b, 80), {
        guildId: b,
        channelId: i.channel_id
      })
    },
    renderPopout: y,
    shouldShow: g,
    position: u.isMobile ? "window_center" : "right",
    onRequestClose: M,
    children: e => {
      let {
        onClick: t,
        ...n
      } = e;
      return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(_.Clickable, {
          tag: "span",
          ...n,
          ...Y,
          className: l()(Y.className, C.clickable, L)
        }), j]
      })
    }
  }) : (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(_.Clickable, {
      ...Y,
      className: l()(Y.className, L)
    }), j]
  });
  let W = null != U ? U[0] : null,
    K = null != U ? U[1] : null;
  return (0, s.jsxs)(I.AnalyticsLocationProvider, {
    value: G,
    children: [null != W && o ? (0, s.jsxs)(s.Fragment, {
      children: [" ", W, " "]
    }) : null, "dot" === x ? (0, s.jsx)(_.RoleDot, {
      color: k,
      name: B,
      className: C.roleDot
    }) : null, t, !o && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(T.default, {
        clan: n.clan,
        userId: i.author.id,
        contextGuildId: b,
        className: C.clanTagChiplet,
        profileViewedAnalytics: H
      }), (0, s.jsx)(p.default, {
        message: i
      })]
    }), null != K ? (0, s.jsx)(s.Fragment, {
      children: K
    }) : null, null == W || o ? null : W, null != i && (0, S.isRemix)(i) && F && P ? (0, s.jsx)(R, {}) : null]
  })
}(i = r || (r = {}))[i.SYSTEM_TAG = 0] = "SYSTEM_TAG", i[i.BADGES = 1] = "BADGES"