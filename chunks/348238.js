"use strict";
n.r(t), n.d(t, {
  useClickInteractionCommandName: function() {
    return w
  },
  useClickInteractionUserAvatar: function() {
    return x
  },
  useClickInteractionUserUsername: function() {
    return v
  },
  useClickMessage: function() {
    return G
  },
  useClickMessageAuthorAvatar: function() {
    return P
  },
  useClickMessageAuthorUsername: function() {
    return O
  },
  useClickReferencedMessageAuthorAvatar: function() {
    return D
  },
  useClickReferencedMessageAuthorUsername: function() {
    return R
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
    return B
  }
}), n("789020"), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("668781"),
  i = n("239091"),
  r = n("904245"),
  o = n("144144"),
  u = n("40851"),
  d = n("592125"),
  c = n("323873"),
  E = n("375954"),
  f = n("594174"),
  _ = n("585483"),
  T = n("5967"),
  I = n("630388"),
  m = n("358085"),
  N = n("51144"),
  p = n("91047"),
  S = n("901461"),
  C = n("50284"),
  A = n("981631"),
  h = n("689938");

function g(e, t, n) {
  return a.useCallback(() => {
    n({
      [e]: !t
    })
  }, [e, n, t])
}

function M(e, t, n) {
  return a.useCallback(s => {
    let a = f.default.getUser(e);
    if (null == a) return;
    if (s.preventDefault(), s.stopPropagation(), !s.shiftKey) {
      n();
      return
    }
    let l = "@".concat(N.default.getUserTag(a, {
        decoration: "never"
      })),
      i = "<@".concat(e, ">");
    _.ComponentDispatch.dispatchToLastSubscribed(A.ComponentActions.INSERT_TEXT, {
      plainText: l,
      rawText: i
    }), o.default.startTyping(t)
  }, [e, t, n])
}

function O(e, t, n, s) {
  let a = g("usernameProfile", n, s);
  return M(e.author.id, t.id, a)
}

function R(e, t, n, s) {
  let a = g("referencedUsernameProfile", n, s);
  return M(null == e ? void 0 : e.author.id, t.id, a)
}

function v(e, t, n, s) {
  let a = g("interactionUsernameProfile", n, s);
  return M(null == e ? void 0 : e.user.id, t.id, a)
}

function L(e) {
  return a.useCallback(t => {
    t.preventDefault(), t.stopPropagation(), e()
  }, [e])
}

function P(e, t) {
  return L(g("avatarProfile", e, t))
}

function D(e, t) {
  return L(g("referencedAvatarProfile", e, t))
}

function x(e, t) {
  return L(g("interactionAvatarProfile", e, t))
}

function y(e, t, l, r) {
  let {
    id: o
  } = t, {
    id: f,
    flags: _
  } = e, T = (0, I.hasFlag)(_, A.MessageFlags.EPHEMERAL), N = (0, S.default)(e), p = (0, u.useAppContext)();
  return a.useCallback((e, t) => {
    if (T) return;
    if (!m.isPlatformEmbedded) {
      let t = e.target;
      if ("A" === t.tagName && "" !== t.textContent || null == window.getSelection) return;
      let n = window.getSelection();
      if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return
    }
    let a = d.default.getChannel(o),
      u = E.default.getMessage(o, f),
      _ = c.default.isEditing(o, f);
    null != a && null != u && !_ && (l({
      contextMenu: !0
    }), (0, i.openContextMenuLazy)(e, async () => {
      if (N) {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("2047"), n.e("37766"), n.e("68125")]).then(n.bind(n, "240678"));
        return n => (0, s.jsx)(e, {
          ...n,
          message: u,
          channel: a,
          mediaItem: t
        })
      } {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("2047"), n.e("37766"), n.e("37220"), n.e("75301"), n.e("53751")]).then(n.bind(n, "225138"));
        return n => (0, s.jsx)(e, {
          ...n,
          message: u,
          channel: a,
          mediaItem: t,
          shouldHideMediaOptions: r
        })
      }
    }, {
      onClose: () => l({
        contextMenu: !1
      }),
      context: p
    }))
  }, [T, o, f, l, p, N, r])
}

function U(e, t) {
  return a.useCallback(n => {
    let s = f.default.getUser(e),
      a = d.default.getChannel(t);
    null != s && null != a && (n.stopPropagation(), (0, p.openUserContextMenu)(n, s, a))
  }, [e, t])
}

function j(e, t, n) {
  return a.useCallback(s => {
    let a = f.default.getUser(e),
      l = d.default.getChannel(t);
    null != a && null != l && (s.stopPropagation(), (0, p.openModerateUserContextMenu)(s, {
      user: a,
      channel: l,
      moderationAlertId: n
    }))
  }, [e, t, n])
}

function b(e, t) {
  return a.useCallback(n => {
    let s = f.default.getUser(e),
      a = d.default.getChannel(t);
    null != s && null != a && (n.stopPropagation(), (0, p.openModerationRaidContextMenu)(n, s, a.guild_id))
  }, [e, t])
}

function G(e, t) {
  let {
    id: n
  } = e, {
    id: s
  } = t;
  return a.useCallback(e => {
    e.altKey && (e.preventDefault(), (0, C.default)(s, n))
  }, [s, n])
}

function B(e, t, n) {
  let s = "".concat(e, ":").concat(t),
    l = a.useRef(n),
    [i, r] = a.useState(n);
  l.current = i || l.current;
  let o = a.useCallback(() => {
      !i && (_.ComponentDispatch.dispatchKeyed(A.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, s, !0), r(!0))
    }, [i, s]),
    u = a.useCallback(() => {
      _.ComponentDispatch.dispatchKeyed(A.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, s, !1), r(!1)
    }, [s]);
  return {
    hasHovered: l.current,
    isHovered: i,
    handleMouseEnter: o,
    handleMouseLeave: u
  }
}

function F(e, t) {
  let [n, s] = a.useState(!1), [l, i] = a.useState(!1), r = a.useCallback(t => {
    var n, a;
    let l = null !== (a = null === (n = (0, T.eventOwnerDocument)(t)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== a ? a : null;
    (t.target === t.currentTarget || t.currentTarget.contains(l)) && (i(!0), s(!0)), null != e && e(t)
  }, [e]);
  return {
    handleFocus: r,
    handleBlur: a.useCallback(e => {
      var n, a;
      let l = null !== (a = null === (n = (0, T.eventOwnerDocument)(e)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== a ? a : null;
      (e.target === e.currentTarget || !e.currentTarget.contains(l)) && s(!1), null != t && t(e)
    }, [t]),
    isFocused: n,
    hasFocused: l
  }
}

function k(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return a.useCallback(() => {
    null != t && (n ? l.default.show({
      title: h.default.Messages.UNBLOCK_TO_JUMP_TITLE,
      body: h.default.Messages.UNBLOCK_TO_JUMP_BODY.format({
        name: t.author.username
      }),
      confirmText: h.default.Messages.OKAY
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
  return a.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), n()
  }, [n])
}