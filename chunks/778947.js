"use strict";
n.r(t), n.d(t, {
  BaseMessageHeader: function() {
    return Y
  },
  default: function() {
    return K
  },
  renderUsername: function() {
    return H
  }
}), n("47120"), n("653041"), n("789020");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("873546"),
  l = n("442837"),
  u = n("481060"),
  d = n("100527"),
  _ = n("906732"),
  c = n("366030"),
  E = n("71619"),
  I = n("340797"),
  T = n("276554"),
  f = n("453687"),
  S = n("304176"),
  h = n("98278"),
  A = n("869765"),
  m = n("243317"),
  N = n("621853"),
  p = n("484459"),
  O = n("204197"),
  C = n("740492"),
  R = n("430824"),
  g = n("496675"),
  L = n("594174"),
  v = n("789695"),
  D = n("176278"),
  M = n("768581"),
  y = n("585483"),
  P = n("630388"),
  U = n("74538"),
  b = n("534761"),
  G = n("307187"),
  w = n("750858"),
  k = n("981631"),
  B = n("689938"),
  V = n("822545"),
  x = n("255963");

function F(e) {
  let {
    avatarSrc: t,
    avatarDecorationSrc: n,
    compact: r,
    onClick: s,
    onContextMenu: o,
    onMouseDown: l,
    onMouseEnter: u,
    onMouseLeave: d,
    onKeyDown: _,
    showCommunicationDisabledStyles: c = !1,
    className: E
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("img", {
      onClick: s,
      onContextMenu: o,
      onMouseDown: l,
      onKeyDown: _,
      onMouseEnter: u,
      onMouseLeave: d,
      src: t,
      "aria-hidden": !0,
      className: a()(E, V.avatar, {
        [V.compact]: r,
        [V.clickable]: null != s,
        [V.communicationDisabledOpacity]: c
      }),
      alt: " "
    }), null == n || r ? null : (0, i.jsx)("img", {
      className: V.avatarDecoration,
      src: n,
      alt: " ",
      "aria-hidden": !0
    })]
  })
}

function H(e, t, n) {
  let {
    message: r,
    channel: s,
    author: a,
    compact: o = !1,
    onContextMenu: l,
    showUsernamePopout: u,
    roleIcon: d,
    onClickUsername: _,
    onPopoutRequestClose: c
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(w.default, {
      message: r,
      channel: s,
      author: a,
      compact: o,
      roleIcon: d,
      showPopout: u,
      renderPopout: t,
      onClick: _,
      onContextMenu: l,
      onPopoutRequestClose: c,
      decorations: n,
      renderRemixTag: !0
    }), o && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("i", {
        className: V.separator,
        children: ":"
      }), " "]
    })]
  })
}

function Y(e) {
  let {
    message: t,
    avatar: n,
    username: r,
    usernameSpanId: s,
    usernameClassName: o,
    compact: l,
    showTimestamp: d,
    showTimestampOnHover: _,
    ariaLabelledBy: c,
    ariaDescribedBy: E,
    className: I,
    messageClassname: T,
    badges: S
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [!l && n, (0, i.jsxs)(u.H, {
      className: a()(V.header, I),
      "aria-describedby": E,
      "aria-labelledby": c,
      children: [d && l && (0, i.jsx)(b.default, {
        id: (0, f.getMessageTimestampId)(t),
        compact: !0,
        timestamp: t.timestamp,
        isVisibleOnlyOnHover: _,
        className: T,
        isInline: !1
      }), l && n, (0, i.jsx)("span", {
        id: s,
        className: o,
        children: r
      }), d && !l && (0, i.jsx)(b.default, {
        id: (0, f.getMessageTimestampId)(t),
        timestamp: t.timestamp,
        className: T
      }), null != S && S.length > 0 ? (0, i.jsx)("div", {
        className: V.badgesContainer,
        children: S
      }) : null]
    })]
  })
}
let j = e => {
  !e && (0, h.navigateToPremiumMarketingPage)()
};

function W(e) {
  let {
    currentUserIsPremium: t,
    author: n
  } = e, r = (0, l.useStateFromStores)([N.default], () => {
    var e;
    return null === (e = N.default.getUserProfile(n.id)) || void 0 === e ? void 0 : e.premiumSince
  });
  return (0, i.jsx)(u.Tooltip, {
    tooltipClassName: V.nitroAuthorBadgeTootip,
    shouldShow: null != r,
    text: B.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
      date: r
    }),
    onTooltipShow: () => (0, p.default)(n.id),
    children: e => (0, i.jsx)(u.Clickable, {
      className: V.nitroAuthorBadgeContainer,
      onClick: () => j(t),
      "aria-label": B.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
        date: r
      }),
      children: (0, i.jsx)("img", {
        alt: "",
        className: V.nitroBadgeSvg,
        src: x,
        ...e
      })
    })
  })
}

function K(e) {
  let {
    message: t,
    repliedMessage: n,
    compact: s = !1,
    renderPopout: h,
    showTimestampOnHover: N,
    roleIcon: b,
    subscribeToGroupId: x,
    hideTimestamp: j,
    className: K,
    channel: z
  } = e, Z = r.useMemo(() => null != h ? e => h(e, t) : void 0, [h, t]), [, X] = (0, E.default)(t.author.id, e.guildId), Q = (0, l.useStateFromStores)([R.default], () => R.default.getGuild(e.guildId), [e.guildId]), q = null != t.author && null != Q && g.default.canManageUser(k.Permissions.MODERATE_MEMBERS, t.author, Q), J = X && q, $ = function(e) {
    var t, n;
    let {
      props: s,
      guildId: a,
      handleRenderPopout: c,
      showCommunicationDisabledStyles: E = !1,
      className: I
    } = e, {
      message: T,
      author: f,
      compact: S = !1,
      subscribeToGroupId: h,
      animate: A = !0,
      onContextMenu: m,
      onClickAvatar: N,
      onPopoutRequestClose: R,
      showAvatarPopout: g
    } = s, [L, v] = r.useState(!1), {
      analyticsLocations: D
    } = (0, _.default)(d.default.AVATAR), P = (0, l.useStateFromStores)([C.default], () => {
      var e;
      return null !== (e = s.displayCompactAvatars) && void 0 !== e ? e : C.default.displayCompactAvatars
    }), U = null != T.messageReference && null != T.webhookId, b = T.author, {
      id: G
    } = b, w = S ? 32 : 80, {
      avatarSrc: B,
      avatarDecorationSrc: V,
      eventHandlers: x
    } = (0, O.default)({
      user: b,
      guildId: a,
      size: w,
      animateOnHover: null != h ? !L : !A,
      showPending: !0
    }), H = T.isInteractionPlaceholder(), Y = r.useMemo(() => {
      var e, t;
      return H && null == b.avatar && (null === (e = T.application) || void 0 === e ? void 0 : e.icon) != null ? null !== (t = M.default.getApplicationIconURL({
        id: T.application.id,
        icon: T.application.icon,
        size: w,
        fallbackAvatar: !1
      })) && void 0 !== t ? t : B : B
    }, [H, null === (t = T.application) || void 0 === t ? void 0 : t.icon, null === (n = T.application) || void 0 === n ? void 0 : n.id, b.avatar, w, B]);
    if (r.useEffect(() => {
        if (null != h) return y.ComponentDispatch.subscribeKeyed(k.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, "".concat(h, ":").concat(G), v), () => void y.ComponentDispatch.unsubscribeKeyed(k.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, "".concat(h, ":").concat(G), v)
      }, [G, h]), !S || P) return null != c && null != g ? (0, i.jsx)(_.AnalyticsLocationProvider, {
      value: D,
      children: (0, i.jsx)(u.Popout, {
        preload: U ? void 0 : function() {
          return (0, p.maybeFetchUserProfileForPopout)(T.author.id, null != f.guildMemberAvatar && null != a ? M.default.getGuildMemberAvatarURLSimple({
            guildId: a,
            userId: T.author.id,
            avatar: f.guildMemberAvatar,
            size: 80
          }) : T.author.getAvatarURL(void 0, 80, !1), {
            guildId: a,
            channelId: T.channel_id
          })
        },
        renderPopout: c,
        shouldShow: g,
        position: o.isMobile ? "window_center" : "right",
        onRequestClose: R,
        children: e => F({
          ...x,
          avatarSrc: Y,
          avatarDecorationSrc: V,
          compact: S,
          onClick: N,
          onContextMenu: m,
          onMouseDown: e.onMouseDown,
          onKeyDown: e.onKeyDown,
          showCommunicationDisabledStyles: E,
          className: I
        })
      })
    }) : (0, i.jsx)(_.AnalyticsLocationProvider, {
      value: D,
      children: F({
        ...x,
        avatarSrc: Y,
        avatarDecorationSrc: V,
        compact: S,
        onClick: N,
        onContextMenu: m,
        onMouseDown: void 0,
        onKeyDown: void 0,
        showCommunicationDisabledStyles: E,
        className: I
      })
    })
  }({
    props: e,
    guildId: e.guildId,
    handleRenderPopout: Z,
    showCommunicationDisabledStyles: J
  }), ee = (0, l.useStateFromStores)([C.default], () => {
    var t;
    return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : C.default.displayCompactAvatars
  }), et = (!s || ee) && null != b && null != Q ? (0, i.jsx)(u.Popout, {
    animation: u.Popout.Animation.TRANSLATE,
    align: "center",
    autoInvert: !0,
    nudgeAlignIntoViewport: !0,
    position: "right",
    renderPopout: () => (0, i.jsx)(S.default, {
      roleIcon: b,
      guild: Q
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, i.jsx)(D.default, {
        ...b,
        className: V.roleIcon,
        onClick: t
      })
    }
  }, "role-icon-children") : (!s || ee) && null != b ? (0, i.jsx)(D.default, {
    ...b,
    className: V.roleIcon
  }, "role-icon-children") : null, en = (0, G.renderSystemTag)({
    message: t,
    channel: z,
    user: null == t ? void 0 : t.author,
    compact: s,
    isRepliedMessage: !1
  }), ei = [], er = L.default.getCurrentUser(), es = U.default.isPremium(t.author), ea = U.default.isPremium(er), eo = null == z ? void 0 : z.isPrivate();
  (0, T.shouldShowNitroBadge)(null != b, "Message Username") && es && !s && !eo && ei.push((0, i.jsx)(W, {
    currentUserIsPremium: ea,
    author: t.author
  }, "nitro-author")), null != et && ei.push(et), null != Q && ei.push((0, i.jsx)(I.default, {
    guild: Q,
    message: t
  }, "new-member")), null != z && null != Q && ei.push((0, i.jsx)(c.default, {
    guild: Q,
    channel: z,
    userId: t.author.id,
    messageId: t.id
  }, "connections"));
  let el = [];
  (0, P.hasFlag)(t.flags, k.MessageFlags.SUPPRESS_NOTIFICATIONS) && el.push((0, i.jsx)(m.default, {}, "suppress-notifications"));
  let eu = {};
  eu[w.UsernameDecorationTypes.SYSTEM_TAG] = en, eu[w.UsernameDecorationTypes.BADGES] = ei;
  let ed = H(e, Z, eu),
    e_ = (0, f.getMessageUsernameId)(t, x),
    ec = (0, f.getMessageTimestampId)(t),
    eE = j ? "".concat(e_) : "".concat(e_, " ").concat(ec),
    eI = (null == n ? void 0 : n.state) === A.ReferencedMessageState.LOADED ? (0, f.getMessageReplyId)(t) : void 0;
  return (0, i.jsx)(Y, {
    message: t,
    avatar: $,
    username: (0, i.jsxs)(i.Fragment, {
      children: [J && (0, i.jsx)(u.Tooltip, {
        text: B.default.Messages.GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY,
        children: e => (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(v.default, {
            ...e,
            width: 12,
            height: 12,
            className: s ? V.compactCommunicationDisabled : V.communicationDisabled
          }), (0, i.jsx)(u.HiddenVisually, {
            children: B.default.Messages.GUILD_COMMUNICATION_DISABLED_BOTTOM_SHEET_TITLE
          })]
        })
      }), ed]
    }),
    usernameSpanId: (0, f.getMessageUsernameId)(t, x),
    usernameClassName: a()(V.headerText, {
      [V.hasRoleIcon]: null != et,
      [V.hasBadges]: null != en || el.length > 0
    }),
    compact: s,
    showTimestamp: !0 !== j,
    showTimestampOnHover: N,
    ariaLabelledBy: eE,
    ariaDescribedBy: eI,
    className: K,
    badges: el
  })
}