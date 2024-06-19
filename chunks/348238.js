n.d(t, {
  $3: function() {
    return G
  },
  Go: function() {
    return y
  },
  NU: function() {
    return P
  },
  Nk: function() {
    return x
  },
  R9: function() {
    return L
  },
  RN: function() {
    return U
  },
  Wl: function() {
    return M
  },
  XO: function() {
    return R
  },
  Xn: function() {
    return F
  },
  bb: function() {
    return k
  },
  qo: function() {
    return D
  },
  rY: function() {
    return Z
  },
  sR: function() {
    return b
  },
  tn: function() {
    return B
  },
  wq: function() {
    return j
  }
}), n(789020), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(668781),
  a = n(239091),
  r = n(904245),
  o = n(144144),
  c = n(40851),
  u = n(592125),
  d = n(323873),
  E = n(375954),
  _ = n(594174),
  I = n(585483),
  T = n(5967),
  N = n(630388),
  m = n(358085),
  h = n(51144),
  C = n(91047),
  S = n(901461),
  A = n(50284),
  p = n(981631),
  g = n(689938);

function f(e, t, n) {
  return i.useCallback(() => {
    n({
      [e]: !t
    })
  }, [e, n, t])
}

function O(e, t, n) {
  return i.useCallback(s => {
    let i = _.default.getUser(e);
    if (null == i) return;
    if (s.preventDefault(), s.stopPropagation(), !s.shiftKey) {
      n();
      return
    }
    let l = "@".concat(h.ZP.getUserTag(i, {
        decoration: "never"
      })),
      a = "<@".concat(e, ">");
    I.S.dispatchToLastSubscribed(p.CkL.INSERT_TEXT, {
      plainText: l,
      rawText: a
    }), o.Z.startTyping(t)
  }, [e, t, n])
}

function R(e, t, n, s) {
  let i = f("usernameProfile", n, s);
  return O(e.author.id, t.id, i)
}

function M(e, t, n, s) {
  let i = f("referencedUsernameProfile", n, s);
  return O(null == e ? void 0 : e.author.id, t.id, i)
}

function x(e, t, n, s) {
  let i = f("interactionUsernameProfile", n, s);
  return O(null == e ? void 0 : e.user.id, t.id, i)
}

function v(e) {
  return i.useCallback(t => {
    t.preventDefault(), t.stopPropagation(), e()
  }, [e])
}

function L(e, t) {
  return v(f("avatarProfile", e, t))
}

function Z(e, t) {
  return v(f("referencedAvatarProfile", e, t))
}

function P(e, t) {
  return v(f("interactionAvatarProfile", e, t))
}

function D(e, t, l, r) {
  let {
    id: o
  } = t, {
    id: _,
    flags: I
  } = e, T = (0, N.yE)(I, p.iLy.EPHEMERAL), h = (0, S.Z)(e), C = (0, c.bp)();
  return i.useCallback((e, t) => {
    if (T) return;
    if (!m.isPlatformEmbedded) {
      let t = e.target;
      if ("A" === t.tagName && "" !== t.textContent || null == window.getSelection) return;
      let n = window.getSelection();
      if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return
    }
    let i = u.Z.getChannel(o),
      c = E.Z.getMessage(o, _),
      I = d.Z.isEditing(o, _);
    if (null != i && null != c && !I) l({
      contextMenu: !0
    }), (0, a.jW)(e, async () => {
      if (h) {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("47939"), n.e("91260")]).then(n.bind(n, 240678));
        return n => (0, s.jsx)(e, {
          ...n,
          message: c,
          channel: i,
          mediaItem: t
        })
      } {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("47939"), n.e("37220"), n.e("92557"), n.e("81857")]).then(n.bind(n, 225138));
        return n => (0, s.jsx)(e, {
          ...n,
          message: c,
          channel: i,
          mediaItem: t,
          shouldHideMediaOptions: r
        })
      }
    }, {
      onClose: () => l({
        contextMenu: !1
      }),
      context: C
    })
  }, [T, o, _, l, C, h, r])
}

function j(e, t) {
  return i.useCallback(n => {
    let s = _.default.getUser(e),
      i = u.Z.getChannel(t);
    null != s && null != i && (n.stopPropagation(), (0, C.Pv)(n, s, i))
  }, [e, t])
}

function U(e, t, n) {
  return i.useCallback(s => {
    let i = _.default.getUser(e),
      l = u.Z.getChannel(t);
    null != i && null != l && (s.stopPropagation(), (0, C._j)(s, {
      user: i,
      channel: l,
      moderationAlertId: n
    }))
  }, [e, t, n])
}

function b(e, t) {
  return i.useCallback(n => {
    let s = _.default.getUser(e),
      i = u.Z.getChannel(t);
    null != s && null != i && (n.stopPropagation(), (0, C.xS)(n, s, i.guild_id))
  }, [e, t])
}

function y(e, t) {
  let {
    id: n
  } = e, {
    id: s
  } = t;
  return i.useCallback(e => {
    e.altKey && (e.preventDefault(), (0, A.Z)(s, n))
  }, [s, n])
}

function B(e, t, n) {
  let s = "".concat(e, ":").concat(t),
    l = i.useRef(n),
    [a, r] = i.useState(n);
  l.current = a || l.current;
  let o = i.useCallback(() => {
      !a && (I.S.dispatchKeyed(p.LPv.ANIMATE_CHAT_AVATAR, s, !0), r(!0))
    }, [a, s]),
    c = i.useCallback(() => {
      I.S.dispatchKeyed(p.LPv.ANIMATE_CHAT_AVATAR, s, !1), r(!1)
    }, [s]);
  return {
    hasHovered: l.current,
    isHovered: a,
    handleMouseEnter: o,
    handleMouseLeave: c
  }
}

function k(e, t) {
  let [n, s] = i.useState(!1), [l, a] = i.useState(!1), r = i.useCallback(t => {
    var n, i;
    let l = null !== (i = null === (n = (0, T.uB)(t)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== i ? i : null;
    (t.target === t.currentTarget || t.currentTarget.contains(l)) && (a(!0), s(!0)), null != e && e(t)
  }, [e]);
  return {
    handleFocus: r,
    handleBlur: i.useCallback(e => {
      var n, i;
      let l = null !== (i = null === (n = (0, T.uB)(e)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== i ? i : null;
      (e.target === e.currentTarget || !e.currentTarget.contains(l)) && s(!1), null != t && t(e)
    }, [t]),
    isFocused: n,
    hasFocused: l
  }
}

function G(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return i.useCallback(() => {
    null != t && (n ? l.Z.show({
      title: g.Z.Messages.UNBLOCK_TO_JUMP_TITLE,
      body: g.Z.Messages.UNBLOCK_TO_JUMP_BODY.format({
        name: t.author.username
      }),
      confirmText: g.Z.Messages.OKAY
    }) : r.Z.jumpToMessage({
      channelId: t.channel_id,
      messageId: t.id,
      flash: !0,
      returnMessageId: e.id
    }))
  }, [n, e.id, t])
}

function F(e, t) {
  let n = f("interactionData", e, t);
  return i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), n()
  }, [n])
}