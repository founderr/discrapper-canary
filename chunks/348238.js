"use strict";
n.r(t), n.d(t, {
  useClickInteractionCommandName: function() {
    return w
  },
  useClickInteractionUserAvatar: function() {
    return P
  },
  useClickInteractionUserUsername: function() {
    return O
  },
  useClickMessage: function() {
    return B
  },
  useClickMessageAuthorAvatar: function() {
    return L
  },
  useClickMessageAuthorUsername: function() {
    return R
  },
  useClickReferencedMessageAuthorAvatar: function() {
    return D
  },
  useClickReferencedMessageAuthorUsername: function() {
    return v
  },
  useClickReply: function() {
    return k
  },
  useContextMenuMessage: function() {
    return y
  },
  useContextMenuModerateUser: function() {
    return j
  },
  useContextMenuRaidAlert: function() {
    return b
  },
  useContextMenuUser: function() {
    return U
  },
  useFocusInside: function() {
    return F
  },
  useHoveredMessage: function() {
    return G
  }
}), n("789020"), n("47120");
var s = n("735250"),
  l = n("470079"),
  a = n("668781"),
  i = n("239091"),
  r = n("904245"),
  o = n("144144"),
  u = n("40851"),
  d = n("592125"),
  c = n("323873"),
  f = n("375954"),
  E = n("594174"),
  _ = n("585483"),
  m = n("5967"),
  T = n("630388"),
  I = n("358085"),
  p = n("51144"),
  h = n("91047"),
  N = n("901461"),
  S = n("50284"),
  C = n("981631"),
  A = n("689938");

function g(e, t, n) {
  return l.useCallback(() => {
    n({
      [e]: !t
    })
  }, [e, n, t])
}

function M(e, t, n) {
  return l.useCallback(s => {
    let l = E.default.getUser(e);
    if (null == l) return;
    if (s.preventDefault(), s.stopPropagation(), !s.shiftKey) {
      n();
      return
    }
    let a = "@".concat(p.default.getUserTag(l, {
        decoration: "never"
      })),
      i = "<@".concat(e, ">");
    _.ComponentDispatch.dispatchToLastSubscribed(C.ComponentActions.INSERT_TEXT, {
      plainText: a,
      rawText: i
    }), o.default.startTyping(t)
  }, [e, t, n])
}

function R(e, t, n, s) {
  let l = g("usernameProfile", n, s);
  return M(e.author.id, t.id, l)
}

function v(e, t, n, s) {
  let l = g("referencedUsernameProfile", n, s);
  return M(null == e ? void 0 : e.author.id, t.id, l)
}

function O(e, t, n, s) {
  let l = g("interactionUsernameProfile", n, s);
  return M(null == e ? void 0 : e.user.id, t.id, l)
}

function x(e) {
  return l.useCallback(t => {
    t.preventDefault(), t.stopPropagation(), e()
  }, [e])
}

function L(e, t) {
  return x(g("avatarProfile", e, t))
}

function D(e, t) {
  return x(g("referencedAvatarProfile", e, t))
}

function P(e, t) {
  return x(g("interactionAvatarProfile", e, t))
}

function y(e, t, a, r) {
  let {
    id: o
  } = t, {
    id: E,
    flags: _
  } = e, m = (0, T.hasFlag)(_, C.MessageFlags.EPHEMERAL), p = (0, N.default)(e), h = (0, u.useAppContext)();
  return l.useCallback((e, t) => {
    if (m) return;
    if (!I.isPlatformEmbedded) {
      let t = e.target;
      if ("A" === t.tagName && "" !== t.textContent || null == window.getSelection) return;
      let n = window.getSelection();
      if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return
    }
    let l = d.default.getChannel(o),
      u = f.default.getMessage(o, E),
      _ = c.default.isEditing(o, E);
    null != l && null != u && !_ && (a({
      contextMenu: !0
    }), (0, i.openContextMenuLazy)(e, async () => {
      if (p) {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("37766"), n.e("6532")]).then(n.bind(n, "240678"));
        return n => (0, s.jsx)(e, {
          ...n,
          message: u,
          channel: l,
          mediaItem: t
        })
      } {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("37766"), n.e("37220"), n.e("33361"), n.e("53751")]).then(n.bind(n, "225138"));
        return n => (0, s.jsx)(e, {
          ...n,
          message: u,
          channel: l,
          mediaItem: t,
          shouldHideMediaOptions: r
        })
      }
    }, {
      onClose: () => a({
        contextMenu: !1
      }),
      context: h
    }))
  }, [m, o, E, a, h, p, r])
}

function U(e, t) {
  return l.useCallback(n => {
    let s = E.default.getUser(e),
      l = d.default.getChannel(t);
    null != s && null != l && (n.stopPropagation(), (0, h.openUserContextMenu)(n, s, l))
  }, [e, t])
}

function j(e, t, n) {
  return l.useCallback(s => {
    let l = E.default.getUser(e),
      a = d.default.getChannel(t);
    null != l && null != a && (s.stopPropagation(), (0, h.openModerateUserContextMenu)(s, {
      user: l,
      channel: a,
      moderationAlertId: n
    }))
  }, [e, t, n])
}

function b(e, t) {
  return l.useCallback(n => {
    let s = E.default.getUser(e),
      l = d.default.getChannel(t);
    null != s && null != l && (n.stopPropagation(), (0, h.openModerationRaidContextMenu)(n, s, l.guild_id))
  }, [e, t])
}

function B(e, t) {
  let {
    id: n
  } = e, {
    id: s
  } = t;
  return l.useCallback(e => {
    e.altKey && (e.preventDefault(), (0, S.default)(s, n))
  }, [s, n])
}

function G(e, t, n) {
  let s = "".concat(e, ":").concat(t),
    a = l.useRef(n),
    [i, r] = l.useState(n);
  a.current = i || a.current;
  let o = l.useCallback(() => {
      !i && (_.ComponentDispatch.dispatchKeyed(C.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, s, !0), r(!0))
    }, [i, s]),
    u = l.useCallback(() => {
      _.ComponentDispatch.dispatchKeyed(C.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, s, !1), r(!1)
    }, [s]);
  return {
    hasHovered: a.current,
    isHovered: i,
    handleMouseEnter: o,
    handleMouseLeave: u
  }
}

function F(e, t) {
  let [n, s] = l.useState(!1), [a, i] = l.useState(!1), r = l.useCallback(t => {
    var n, l;
    let a = null !== (l = null === (n = (0, m.eventOwnerDocument)(t)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== l ? l : null;
    (t.target === t.currentTarget || t.currentTarget.contains(a)) && (i(!0), s(!0)), null != e && e(t)
  }, [e]);
  return {
    handleFocus: r,
    handleBlur: l.useCallback(e => {
      var n, l;
      let a = null !== (l = null === (n = (0, m.eventOwnerDocument)(e)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== l ? l : null;
      (e.target === e.currentTarget || !e.currentTarget.contains(a)) && s(!1), null != t && t(e)
    }, [t]),
    isFocused: n,
    hasFocused: a
  }
}

function k(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return l.useCallback(() => {
    null != t && (n ? a.default.show({
      title: A.default.Messages.UNBLOCK_TO_JUMP_TITLE,
      body: A.default.Messages.UNBLOCK_TO_JUMP_BODY.format({
        name: t.author.username
      }),
      confirmText: A.default.Messages.OKAY
    }) : r.default.jumpToMessage({
      channelId: t.channel_id,
      messageId: t.id,
      flash: !0,
      returnMessageId: e.id
    }))
  }, [n, e.id, t])
}

function w(e, t) {
  let n = g("interactionData", e, t);
  return l.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), n()
  }, [n])
}