"use strict";
n.d(t, {
  CF: function() {
    return Z
  },
  ZP: function() {
    return j
  },
  nD: function() {
    return H
  }
}), n(47120), n(653041), n(789020);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(873546),
  l = n(442837),
  u = n(481060),
  _ = n(100527),
  c = n(906732),
  d = n(366030),
  E = n(71619),
  I = n(340797),
  T = n(276554),
  h = n(453687),
  f = n(304176),
  S = n(98278),
  N = n(869765),
  A = n(243317),
  m = n(621853),
  O = n(484459),
  p = n(204197),
  R = n(740492),
  g = n(430824),
  C = n(496675),
  v = n(594174),
  L = n(176278),
  D = n(768581),
  M = n(585483),
  P = n(630388),
  y = n(74538),
  U = n(534761),
  b = n(307187),
  G = n(750858),
  w = n(981631),
  x = n(689938),
  B = n(250050),
  k = n(255963);

function V(e) {
  let {
    avatarSrc: t,
    avatarDecorationSrc: n,
    compact: r,
    onClick: s,
    onContextMenu: a,
    onMouseDown: l,
    onMouseEnter: u,
    onMouseLeave: _,
    onKeyDown: c,
    showCommunicationDisabledStyles: d = !1,
    className: E
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("img", {
      onClick: s,
      onContextMenu: a,
      onMouseDown: l,
      onKeyDown: c,
      onMouseEnter: u,
      onMouseLeave: _,
      src: t,
      "aria-hidden": !0,
      className: o()(E, B.avatar, {
        [B.compact]: r,
        [B.clickable]: null != s,
        [B.communicationDisabledOpacity]: d
      }),
      alt: " "
    }), null == n || r ? null : (0, i.jsx)("img", {
      className: B.avatarDecoration,
      src: n,
      alt: " ",
      "aria-hidden": !0
    })]
  })
}

function Z(e, t, n) {
  let {
    message: r,
    channel: s,
    author: o,
    compact: a = !1,
    onContextMenu: l,
    showUsernamePopout: u,
    roleIcon: _,
    onClickUsername: c,
    onPopoutRequestClose: d
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(G.Z, {
      message: r,
      channel: s,
      author: o,
      compact: a,
      roleIcon: _,
      showPopout: u,
      renderPopout: t,
      onClick: c,
      onContextMenu: l,
      onPopoutRequestClose: d,
      decorations: n,
      renderRemixTag: !0
    }), a && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("i", {
        className: B.separator,
        children: ":"
      }), " "]
    })]
  })
}

function H(e) {
  let {
    message: t,
    avatar: n,
    username: r,
    usernameSpanId: s,
    usernameClassName: a,
    compact: l,
    showTimestamp: _,
    showTimestampOnHover: c,
    ariaLabelledBy: d,
    ariaDescribedBy: E,
    className: I,
    messageClassname: T,
    badges: f
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [!l && n, (0, i.jsxs)(u.H, {
      className: o()(B.header, I),
      "aria-describedby": E,
      "aria-labelledby": d,
      children: [_ && l && (0, i.jsx)(U.Z, {
        id: (0, h.Dv)(t),
        compact: !0,
        timestamp: t.timestamp,
        isVisibleOnlyOnHover: c,
        className: T,
        isInline: !1
      }), l && n, (0, i.jsx)("span", {
        id: s,
        className: a,
        children: r
      }), _ && !l && (0, i.jsx)(U.Z, {
        id: (0, h.Dv)(t),
        timestamp: t.timestamp,
        className: T
      }), null != f && f.length > 0 ? (0, i.jsx)("div", {
        className: B.badgesContainer,
        children: f
      }) : null]
    })]
  })
}
let F = e => {
  !e && (0, S.z)()
};

function Y(e) {
  let {
    currentUserIsPremium: t,
    author: n
  } = e, r = (0, l.e7)([m.Z], () => {
    var e;
    return null === (e = m.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.premiumSince
  });
  return (0, i.jsx)(u.Tooltip, {
    tooltipClassName: B.nitroAuthorBadgeTootip,
    shouldShow: null != r,
    text: x.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({
      date: r
    }),
    onTooltipShow: () => (0, O.Z)(n.id),
    children: e => (0, i.jsx)(u.Clickable, {
      className: B.nitroAuthorBadgeContainer,
      onClick: () => F(t),
      "aria-label": x.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({
        date: r
      }),
      children: (0, i.jsx)("img", {
        alt: "",
        className: B.nitroBadgeSvg,
        src: k,
        ...e
      })
    })
  })
}

function j(e) {
  let {
    message: t,
    repliedMessage: n,
    compact: s = !1,
    renderPopout: S,
    showTimestampOnHover: m,
    roleIcon: U,
    subscribeToGroupId: k,
    hideTimestamp: F,
    className: j,
    channel: W
  } = e, K = r.useMemo(() => null != S ? e => S(e, t) : void 0, [S, t]), [, z] = (0, E.ZP)(t.author.id, e.guildId), q = (0, l.e7)([g.Z], () => g.Z.getGuild(e.guildId), [e.guildId]), X = null != t.author && null != q && C.Z.canManageUser(w.Plq.MODERATE_MEMBERS, t.author, q), Q = z && X, J = function(e) {
    var t, n;
    let {
      props: s,
      guildId: o,
      handleRenderPopout: d,
      showCommunicationDisabledStyles: E = !1,
      className: I
    } = e, {
      message: T,
      author: h,
      compact: f = !1,
      subscribeToGroupId: S,
      animate: N = !0,
      onContextMenu: A,
      onClickAvatar: m,
      onPopoutRequestClose: g,
      showAvatarPopout: C
    } = s, [v, L] = r.useState(!1), {
      analyticsLocations: P
    } = (0, c.ZP)(_.Z.AVATAR), y = (0, l.e7)([R.ZP], () => {
      var e;
      return null !== (e = s.displayCompactAvatars) && void 0 !== e ? e : R.ZP.displayCompactAvatars
    }), U = null != T.messageReference && null != T.webhookId && T.hasFlag(w.iLy.IS_CROSSPOST), b = T.author, {
      id: G
    } = b, x = f ? 32 : 80, {
      avatarSrc: B,
      avatarDecorationSrc: k,
      eventHandlers: Z
    } = (0, p.Z)({
      user: b,
      guildId: o,
      size: x,
      animateOnHover: null != S ? !v : !N,
      showPending: !0
    }), H = T.isInteractionPlaceholder(), F = r.useMemo(() => {
      var e, t;
      return H && null == b.avatar && (null === (e = T.application) || void 0 === e ? void 0 : e.icon) != null ? null !== (t = D.ZP.getApplicationIconURL({
        id: T.application.id,
        icon: T.application.icon,
        size: x,
        fallbackAvatar: !1
      })) && void 0 !== t ? t : B : B
    }, [H, null === (t = T.application) || void 0 === t ? void 0 : t.icon, null === (n = T.application) || void 0 === n ? void 0 : n.id, b.avatar, x, B]);
    return (r.useEffect(() => {
      if (null != S) return M.S.subscribeKeyed(w.LPv.ANIMATE_CHAT_AVATAR, "".concat(S, ":").concat(G), L), () => void M.S.unsubscribeKeyed(w.LPv.ANIMATE_CHAT_AVATAR, "".concat(S, ":").concat(G), L)
    }, [G, S]), f && !y) ? void 0 : null != d && null != C ? (0, i.jsx)(c.Gt, {
      value: P,
      children: (0, i.jsx)(u.Popout, {
        preload: U ? void 0 : function() {
          return (0, O.W)(T.author.id, null != h.guildMemberAvatar && null != o ? D.ZP.getGuildMemberAvatarURLSimple({
            guildId: o,
            userId: T.author.id,
            avatar: h.guildMemberAvatar,
            size: 80
          }) : T.author.getAvatarURL(void 0, 80, !1), {
            guildId: o,
            channelId: T.channel_id
          })
        },
        renderPopout: d,
        shouldShow: C,
        position: a.tq ? "window_center" : "right",
        onRequestClose: g,
        children: e => V({
          ...Z,
          avatarSrc: F,
          avatarDecorationSrc: k,
          compact: f,
          onClick: m,
          onContextMenu: A,
          onMouseDown: e.onMouseDown,
          onKeyDown: e.onKeyDown,
          showCommunicationDisabledStyles: E,
          className: I
        })
      })
    }) : (0, i.jsx)(c.Gt, {
      value: P,
      children: V({
        ...Z,
        avatarSrc: F,
        avatarDecorationSrc: k,
        compact: f,
        onClick: m,
        onContextMenu: A,
        onMouseDown: void 0,
        onKeyDown: void 0,
        showCommunicationDisabledStyles: E,
        className: I
      })
    })
  }({
    props: e,
    guildId: e.guildId,
    handleRenderPopout: K,
    showCommunicationDisabledStyles: Q
  }), $ = (0, l.e7)([R.ZP], () => {
    var t;
    return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : R.ZP.displayCompactAvatars
  }), ee = (!s || $) && null != U && null != q ? (0, i.jsx)(u.Popout, {
    animation: u.Popout.Animation.TRANSLATE,
    align: "center",
    autoInvert: !0,
    nudgeAlignIntoViewport: !0,
    position: "right",
    renderPopout: () => (0, i.jsx)(f.Z, {
      roleIcon: U,
      guild: q
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, i.jsx)(L.Z, {
        ...U,
        className: B.roleIcon,
        onClick: t
      })
    }
  }, "role-icon-children") : (!s || $) && null != U ? (0, i.jsx)(L.Z, {
    ...U,
    className: B.roleIcon
  }, "role-icon-children") : null, et = (0, b.x)({
    message: t,
    channel: W,
    user: null == t ? void 0 : t.author,
    compact: s,
    isRepliedMessage: !1
  }), en = [], ei = v.default.getCurrentUser(), er = y.ZP.isPremium(t.author), es = y.ZP.isPremium(ei), eo = null == W ? void 0 : W.isPrivate();
  (0, T.R)(null != U, "Message Username") && er && !s && !eo && en.push((0, i.jsx)(Y, {
    currentUserIsPremium: es,
    author: t.author
  }, "nitro-author")), null != ee && en.push(ee), null != q && en.push((0, i.jsx)(I.Z, {
    guild: q,
    message: t
  }, "new-member")), null != W && null != q && en.push((0, i.jsx)(d.Z, {
    guild: q,
    channel: W,
    userId: t.author.id,
    messageId: t.id
  }, "connections"));
  let ea = [];
  (0, P.yE)(t.flags, w.iLy.SUPPRESS_NOTIFICATIONS) && ea.push((0, i.jsx)(A.Z, {}, "suppress-notifications"));
  let el = {};
  el[G.a.SYSTEM_TAG] = et, el[G.a.BADGES] = en;
  let eu = Z(e, K, el),
    e_ = (0, h.XX)(t, k),
    ec = (0, h.Dv)(t),
    ed = F ? "".concat(e_) : "".concat(e_, " ").concat(ec),
    eE = (null == n ? void 0 : n.state) === N.Y.LOADED ? (0, h.Gq)(t) : void 0;
  return (0, i.jsx)(H, {
    message: t,
    avatar: J,
    username: (0, i.jsxs)(i.Fragment, {
      children: [Q && (0, i.jsx)(u.Tooltip, {
        text: x.Z.Messages.GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY,
        children: e => (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(u.ClockWarningIcon, {
            size: "xxs",
            color: "currentColor",
            ...e,
            className: s ? B.compactCommunicationDisabled : B.communicationDisabled
          }), (0, i.jsx)(u.HiddenVisually, {
            children: x.Z.Messages.GUILD_COMMUNICATION_DISABLED_BOTTOM_SHEET_TITLE
          })]
        })
      }), eu]
    }),
    usernameSpanId: (0, h.XX)(t, k),
    usernameClassName: o()(B.headerText, {
      [B.hasRoleIcon]: null != ee,
      [B.hasBadges]: null != et || ea.length > 0
    }),
    compact: s,
    showTimestamp: !0 !== F,
    showTimestampOnHover: m,
    ariaLabelledBy: ed,
    ariaDescribedBy: eE,
    className: j,
    badges: ea
  })
}