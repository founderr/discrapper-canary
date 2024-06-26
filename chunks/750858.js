"use strict";
n.d(t, {
  Z: function() {
    return C
  },
  a: function() {
    return r
  }
});
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(873546),
  _ = n(442837),
  c = n(481060),
  d = n(607070),
  E = n(100527),
  I = n(906732),
  T = n(979264),
  h = n(372900),
  f = n(463396),
  S = n(477734),
  N = n(484459),
  A = n(467679),
  m = n(768581),
  O = n(51063),
  p = n(981631),
  R = n(250050);

function g(e) {
  let {
    compact: t
  } = e;
  return (0, s.jsx)(A.Z, {
    className: t ? R.botTagCompact : R.botTagCozy,
    type: A.Z.Types.REMIX,
    useRemSizes: !0
  })
}

function C(e) {
  var t;
  let n, {
      author: i,
      message: r,
      channel: a,
      userOverride: A,
      compact: C = !1,
      withMentionPrefix: v = !1,
      showPopout: L = !1,
      className: D,
      onClick: M,
      onContextMenu: P,
      onPopoutRequestClose: y,
      renderPopout: U,
      renderRemixTag: b = !1,
      decorations: G
    } = e,
    w = o.useContext(h.Z),
    x = null !== (t = null == a ? void 0 : a.guild_id) && void 0 !== t ? t : w,
    {
      analyticsLocations: B
    } = (0, I.ZP)(E.Z.USERNAME),
    {
      nick: k,
      colorString: V,
      colorRoleName: Z
    } = i,
    H = null != r.messageReference && null != r.webhookId && r.hasFlag(p.iLy.IS_CROSSPOST),
    F = (0, _.e7)([d.Z], () => d.Z.roleStyle),
    Y = (0, S.X$)(),
    j = o.useMemo(() => ({
      source: p.jXE.CHANNEL,
      messageId: r.id,
      tagUserId: r.author.id
    }), [r.id, r.author.id]),
    W = {
      className: R.username,
      style: "username" === F && null != V ? {
        color: V
      } : void 0,
      onClick: M,
      onContextMenu: P,
      children: (0, s.jsx)(s.Fragment, {
        children: (v ? "@" : "") + k
      })
    },
    K = o.useMemo(() => C ? (0, s.jsx)(T.ZP, {
      clan: i.clan,
      userId: r.author.id,
      contextGuildId: x,
      className: R.clanTagChiplet,
      profileViewedAnalytics: j
    }) : null, [C, j, i.clan, x, r.author.id]);
  n = null != U && null != L ? (0, s.jsx)(c.Popout, {
    preload: H ? void 0 : function() {
      let e = null != A ? A : r.author;
      return (0, N.W)(e.id, null != i.guildMemberAvatar && null != x ? (0, m.JM)({
        guildId: x,
        userId: e.id,
        avatar: i.guildMemberAvatar,
        size: 80
      }) : e.getAvatarURL(x, 80), {
        guildId: x,
        channelId: r.channel_id
      })
    },
    renderPopout: U,
    shouldShow: L,
    position: u.tq ? "window_center" : "right",
    onRequestClose: y,
    children: e => {
      let {
        onClick: t,
        ...n
      } = e;
      return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(c.Clickable, {
          tag: "span",
          ...n,
          ...W,
          className: l()(W.className, R.clickable, D)
        }), K]
      })
    }
  }) : (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(c.Clickable, {
      ...W,
      className: l()(W.className, D)
    }), K]
  });
  let z = null != G ? G[0] : null,
    q = null != G ? G[1] : null;
  return (0, s.jsxs)(I.Gt, {
    value: B,
    children: [null != z && C ? (0, s.jsxs)(s.Fragment, {
      children: [" ", z, " "]
    }) : null, "dot" === F ? (0, s.jsx)(c.RoleDot, {
      color: V,
      name: Z,
      className: R.roleDot
    }) : null, n, !C && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(T.ZP, {
        clan: i.clan,
        userId: r.author.id,
        contextGuildId: x,
        className: R.clanTagChiplet,
        profileViewedAnalytics: j
      }), (0, s.jsx)(O.Z, {
        message: r
      })]
    }), null != q ? (0, s.jsx)(s.Fragment, {
      children: q
    }) : null, null == z || C ? null : z, null != r && (0, f.f)(r) && Y && b ? (0, s.jsx)(g, {}) : null]
  })
}(i = r || (r = {}))[i.SYSTEM_TAG = 0] = "SYSTEM_TAG", i[i.BADGES = 1] = "BADGES"