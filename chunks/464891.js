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
  T = n(98278),
  h = n(869765),
  S = n(243317),
  f = n(621853),
  N = n(484459),
  A = n(204197),
  m = n(740492),
  O = n(430824),
  R = n(496675),
  p = n(594174),
  g = n(176278),
  C = n(768581),
  v = n(585483),
  L = n(630388),
  D = n(74538),
  M = n(276554),
  P = n(421399),
  y = n(453687),
  U = n(318713),
  b = n(304176),
  G = n(47930),
  w = n(981631),
  B = n(689938),
  k = n(425577),
  x = n(255963);

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
      className: o()(E, k.avatar, {
        [k.compact]: r,
        [k.clickable]: null != s,
        [k.communicationDisabledOpacity]: d
      }),
      alt: " "
    }), null == n || r ? null : (0, i.jsx)("img", {
      className: k.avatarDecoration,
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
    children: [(0, i.jsx)(P.Z, {
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
        className: k.separator,
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
    badges: h
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [!l && n, (0, i.jsxs)(u.H, {
      className: o()(k.header, I),
      "aria-describedby": E,
      "aria-labelledby": d,
      children: [_ && l && (0, i.jsx)(U.Z, {
        id: (0, y.Dv)(t),
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
        id: (0, y.Dv)(t),
        timestamp: t.timestamp,
        className: T
      }), null != h && h.length > 0 ? (0, i.jsx)("div", {
        className: k.badgesContainer,
        children: h
      }) : null]
    })]
  })
}
let F = e => {
  !e && (0, T.z)()
};

function Y(e) {
  let {
    currentUserIsPremium: t,
    author: n
  } = e, r = (0, l.e7)([f.Z], () => {
    var e;
    return null === (e = f.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.premiumSince
  });
  return (0, i.jsx)(u.Tooltip, {
    tooltipClassName: k.nitroAuthorBadgeTootip,
    shouldShow: null != r,
    text: B.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({
      date: r
    }),
    onTooltipShow: () => (0, N.Z)(n.id),
    children: e => (0, i.jsx)(u.Clickable, {
      className: k.nitroAuthorBadgeContainer,
      onClick: () => F(t),
      "aria-label": B.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({
        date: r
      }),
      children: (0, i.jsx)("img", {
        alt: "",
        className: k.nitroBadgeSvg,
        src: x,
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
    renderPopout: T,
    showTimestampOnHover: f,
    roleIcon: U,
    subscribeToGroupId: x,
    hideTimestamp: F,
    className: j,
    channel: W
  } = e, K = r.useMemo(() => null != T ? e => T(e, t) : void 0, [T, t]), [, z] = (0, E.ZP)(t.author.id, e.guildId), q = (0, l.e7)([O.Z], () => O.Z.getGuild(e.guildId), [e.guildId]), X = null != t.author && null != q && R.Z.canManageUser(w.Plq.MODERATE_MEMBERS, t.author, q), Q = z && X, J = function(e) {
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
      compact: S = !1,
      subscribeToGroupId: f,
      animate: O = !0,
      onContextMenu: R,
      onClickAvatar: p,
      onPopoutRequestClose: g,
      showAvatarPopout: L
    } = s, [D, M] = r.useState(!1), {
      analyticsLocations: P
    } = (0, c.ZP)(_.Z.AVATAR), y = (0, l.e7)([m.ZP], () => {
      var e;
      return null !== (e = s.displayCompactAvatars) && void 0 !== e ? e : m.ZP.displayCompactAvatars
    }), U = null != T.messageReference && null != T.webhookId && T.hasFlag(w.iLy.IS_CROSSPOST), b = T.author, {
      id: G
    } = b, B = S ? 32 : 80, {
      avatarSrc: k,
      avatarDecorationSrc: x,
      eventHandlers: Z
    } = (0, A.Z)({
      user: b,
      guildId: o,
      size: B,
      animateOnHover: null != f ? !D : !O,
      showPending: !0
    }), H = T.isInteractionPlaceholder(), F = r.useMemo(() => {
      var e, t;
      return H && null == b.avatar && (null === (e = T.application) || void 0 === e ? void 0 : e.icon) != null ? null !== (t = C.ZP.getApplicationIconURL({
        id: T.application.id,
        icon: T.application.icon,
        size: B,
        fallbackAvatar: !1
      })) && void 0 !== t ? t : k : k
    }, [H, null === (t = T.application) || void 0 === t ? void 0 : t.icon, null === (n = T.application) || void 0 === n ? void 0 : n.id, b.avatar, B, k]);
    return (r.useEffect(() => {
      if (null != f) return v.S.subscribeKeyed(w.LPv.ANIMATE_CHAT_AVATAR, "".concat(f, ":").concat(G), M), () => void v.S.unsubscribeKeyed(w.LPv.ANIMATE_CHAT_AVATAR, "".concat(f, ":").concat(G), M)
    }, [G, f]), S && !y) ? void 0 : null != d && null != L ? (0, i.jsx)(c.Gt, {
      value: P,
      children: (0, i.jsx)(u.Popout, {
        preload: U ? void 0 : function() {
          return (0, N.W)(T.author.id, null != h.guildMemberAvatar && null != o ? C.ZP.getGuildMemberAvatarURLSimple({
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
        shouldShow: L,
        position: a.tq ? "window_center" : "right",
        onRequestClose: g,
        children: e => V({
          ...Z,
          avatarSrc: F,
          avatarDecorationSrc: x,
          compact: S,
          onClick: p,
          onContextMenu: R,
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
        avatarDecorationSrc: x,
        compact: S,
        onClick: p,
        onContextMenu: R,
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
  }), $ = (0, l.e7)([m.ZP], () => {
    var t;
    return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : m.ZP.displayCompactAvatars
  }), ee = (!s || $) && null != U && null != q ? (0, i.jsx)(u.Popout, {
    animation: u.Popout.Animation.TRANSLATE,
    align: "center",
    autoInvert: !0,
    nudgeAlignIntoViewport: !0,
    position: "right",
    renderPopout: () => (0, i.jsx)(b.Z, {
      roleIcon: U,
      guild: q
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, i.jsx)(g.Z, {
        ...U,
        className: k.roleIcon,
        onClick: t
      })
    }
  }, "role-icon-children") : (!s || $) && null != U ? (0, i.jsx)(g.Z, {
    ...U,
    className: k.roleIcon
  }, "role-icon-children") : null, et = (0, G.x)({
    message: t,
    channel: W,
    user: null == t ? void 0 : t.author,
    compact: s,
    isRepliedMessage: !1
  }), en = [], ei = p.default.getCurrentUser(), er = D.ZP.isPremium(t.author), es = D.ZP.isPremium(ei), eo = null == W ? void 0 : W.isPrivate();
  (0, M.R)(null != U, "Message Username") && er && !s && !eo && en.push((0, i.jsx)(Y, {
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
  (0, L.yE)(t.flags, w.iLy.SUPPRESS_NOTIFICATIONS) && ea.push((0, i.jsx)(S.Z, {}, "suppress-notifications"));
  let el = {};
  el[P.a.SYSTEM_TAG] = et, el[P.a.BADGES] = en;
  let eu = Z(e, K, el),
    e_ = (0, y.XX)(t, x),
    ec = (0, y.Dv)(t),
    ed = F ? "".concat(e_) : "".concat(e_, " ").concat(ec),
    eE = (null == n ? void 0 : n.state) === h.Y.LOADED ? (0, y.Gq)(t) : void 0;
  return (0, i.jsx)(H, {
    message: t,
    avatar: J,
    username: (0, i.jsxs)(i.Fragment, {
      children: [Q && (0, i.jsx)(u.Tooltip, {
        text: B.Z.Messages.GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY,
        children: e => (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(u.ClockWarningIcon, {
            size: "xxs",
            color: "currentColor",
            ...e,
            className: s ? k.compactCommunicationDisabled : k.communicationDisabled
          }), (0, i.jsx)(u.HiddenVisually, {
            children: B.Z.Messages.GUILD_COMMUNICATION_DISABLED_BOTTOM_SHEET_TITLE
          })]
        })
      }), eu]
    }),
    usernameSpanId: (0, y.XX)(t, x),
    usernameClassName: o()(k.headerText, {
      [k.hasRoleIcon]: null != ee,
      [k.hasBadges]: null != et || ea.length > 0
    }),
    compact: s,
    showTimestamp: !0 !== F,
    showTimestampOnHover: f,
    ariaLabelledBy: ed,
    ariaDescribedBy: eE,
    className: j,
    badges: ea
  })
}