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
  var t;
  let n, {
      author: i,
      message: r,
      channel: o,
      userOverride: m,
      compact: g = !1,
      withMentionPrefix: L = !1,
      showPopout: v = !1,
      className: D,
      onClick: M,
      onContextMenu: y,
      onPopoutRequestClose: P,
      renderPopout: U,
      renderRemixTag: b = !1,
      decorations: G
    } = e,
    w = a.useContext(f.default),
    k = null !== (t = null == o ? void 0 : o.guild_id) && void 0 !== t ? t : w,
    {
      analyticsLocations: B
    } = (0, I.default)(E.default.USERNAME),
    {
      nick: x,
      colorString: V,
      colorRoleName: F
    } = i,
    H = null != r.messageReference && null != r.webhookId && r.hasFlag(O.MessageFlags.IS_CROSSPOST),
    Y = (0, d.useStateFromStores)([c.default], () => c.default.roleStyle),
    j = (0, h.useCanSeeRemixBadge)(),
    W = a.useMemo(() => ({
      source: O.AnalyticsSections.CHANNEL,
      messageId: r.id,
      tagUserId: r.author.id
    }), [r.id, r.author.id]),
    K = {
      className: C.username,
      style: "username" === Y && null != V ? {
        color: V
      } : void 0,
      onClick: M,
      onContextMenu: y,
      children: (0, s.jsx)(s.Fragment, {
        children: (L ? "@" : "") + x
      })
    },
    z = a.useMemo(() => g ? (0, s.jsx)(T.default, {
      clan: i.clan,
      userId: r.author.id,
      contextGuildId: k,
      className: C.clanTagChiplet,
      profileViewedAnalytics: W
    }) : null, [g, W, i.clan, k, r.author.id]);
  n = null != U && null != v ? (0, s.jsx)(_.Popout, {
    preload: H ? void 0 : function() {
      let e = null != m ? m : r.author;
      return (0, A.maybeFetchUserProfileForPopout)(e.id, null != i.guildMemberAvatar && null != k ? (0, N.getGuildMemberAvatarURLSimple)({
        guildId: k,
        userId: e.id,
        avatar: i.guildMemberAvatar,
        size: 80
      }) : e.getAvatarURL(k, 80), {
        guildId: k,
        channelId: r.channel_id
      })
    },
    renderPopout: U,
    shouldShow: v,
    position: u.isMobile ? "window_center" : "right",
    onRequestClose: P,
    children: e => {
      let {
        onClick: t,
        ...n
      } = e;
      return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(_.Clickable, {
          tag: "span",
          ...n,
          ...K,
          className: l()(K.className, C.clickable, D)
        }), z]
      })
    }
  }) : (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(_.Clickable, {
      ...K,
      className: l()(K.className, D)
    }), z]
  });
  let Z = null != G ? G[0] : null,
    Q = null != G ? G[1] : null;
  return (0, s.jsxs)(I.AnalyticsLocationProvider, {
    value: B,
    children: [null != Z && g ? (0, s.jsxs)(s.Fragment, {
      children: [" ", Z, " "]
    }) : null, "dot" === Y ? (0, s.jsx)(_.RoleDot, {
      color: V,
      name: F,
      className: C.roleDot
    }) : null, n, !g && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(T.default, {
        clan: i.clan,
        userId: r.author.id,
        contextGuildId: k,
        className: C.clanTagChiplet,
        profileViewedAnalytics: W
      }), (0, s.jsx)(p.default, {
        message: r
      })]
    }), null != Q ? (0, s.jsx)(s.Fragment, {
      children: Q
    }) : null, null == Z || g ? null : Z, null != r && (0, S.isRemix)(r) && j && b ? (0, s.jsx)(R, {}) : null]
  })
}(i = r || (r = {}))[i.SYSTEM_TAG = 0] = "SYSTEM_TAG", i[i.BADGES = 1] = "BADGES"