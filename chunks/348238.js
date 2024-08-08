n.d(t, {
  $3: function() {
return w;
  },
  Go: function() {
return k;
  },
  NU: function() {
return b;
  },
  Nk: function() {
return L;
  },
  R9: function() {
return P;
  },
  RN: function() {
return y;
  },
  Wl: function() {
return v;
  },
  XO: function() {
return M;
  },
  Xn: function() {
return V;
  },
  bb: function() {
return G;
  },
  qo: function() {
return j;
  },
  rY: function() {
return D;
  },
  sR: function() {
return B;
  },
  tn: function() {
return F;
  },
  wq: function() {
return U;
  }
}), n(789020), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(668781),
  r = n(239091),
  l = n(904245),
  o = n(144144),
  c = n(40851),
  u = n(675478),
  d = n(592125),
  _ = n(323873),
  E = n(375954),
  I = n(594174),
  m = n(585483),
  T = n(5967),
  h = n(630388),
  N = n(358085),
  f = n(51144),
  C = n(91047),
  p = n(901461),
  g = n(50284),
  S = n(917990),
  A = n(981631),
  R = n(689938);

function O(e, t, n) {
  return s.useCallback(() => {
n({
  [e]: !t
});
  }, [
e,
n,
t
  ]);
}

function x(e, t, n) {
  return s.useCallback(i => {
let s = I.default.getUser(e);
if (null == s)
  return;
if (i.preventDefault(), i.stopPropagation(), !i.shiftKey) {
  n();
  return;
}
let a = '@'.concat(f.ZP.getUserTag(s, {
    decoration: 'never'
  })),
  r = '<@'.concat(e, '>');
m.S.dispatchToLastSubscribed(A.CkL.INSERT_TEXT, {
  plainText: a,
  rawText: r
}), o.Z.startTyping(t);
  }, [
e,
t,
n
  ]);
}

function M(e, t, n, i) {
  let s = O('usernameProfile', n, i);
  return x(e.author.id, t.id, s);
}

function v(e, t, n, i) {
  let s = O('referencedUsernameProfile', n, i);
  return x(null == e ? void 0 : e.author.id, t.id, s);
}

function L(e, t, n, i) {
  let s = O('interactionUsernameProfile', n, i);
  return x(null == e ? void 0 : e.user.id, t.id, s);
}

function Z(e) {
  return s.useCallback(t => {
t.preventDefault(), t.stopPropagation(), e();
  }, [e]);
}

function P(e, t) {
  return Z(O('avatarProfile', e, t));
}

function D(e, t) {
  return Z(O('referencedAvatarProfile', e, t));
}

function b(e, t) {
  return Z(O('interactionAvatarProfile', e, t));
}

function j(e, t, a, l) {
  let {
id: o
  } = t, {
id: u,
flags: I
  } = e, m = (0, h.yE)(I, A.iLy.EPHEMERAL), T = (0, p.Z)(e), f = (0, c.bp)();
  return s.useCallback((e, t) => {
if (m)
  return;
if (!N.isPlatformEmbedded) {
  let t = e.target;
  if ('A' === t.tagName && '' !== t.textContent || null == window.getSelection)
    return;
  let n = window.getSelection();
  if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode)))
    return;
}
let s = d.Z.getChannel(o),
  c = E.Z.getMessage(o, u),
  I = _.Z.isEditing(o, u);
if (null != s && null != c && !I)
  a({
    contextMenu: !0
  }), (0, r.jW)(e, async () => {
    if (T) {
      let {
        default: e
      } = await Promise.all([
        n.e('29975'),
        n.e('47919')
      ]).then(n.bind(n, 240678));
      return n => (0, i.jsx)(e, {
        ...n,
        message: c,
        channel: s,
        mediaItem: t
      });
    } {
      let {
        default: e
      } = await Promise.all([
        n.e('29975'),
        n.e('37220'),
        n.e('92557'),
        n.e('55261')
      ]).then(n.bind(n, 225138));
      return n => (0, i.jsx)(e, {
        ...n,
        message: c,
        channel: s,
        mediaItem: t,
        shouldHideMediaOptions: l
      });
    }
  }, {
    onClose: () => a({
      contextMenu: !1
    }),
    context: f
  });
  }, [
m,
o,
u,
a,
f,
T,
l
  ]);
}

function U(e, t) {
  return s.useCallback(n => {
let i = I.default.getUser(e),
  s = d.Z.getChannel(t);
null != i && null != s && (n.stopPropagation(), (0, C.Pv)(n, i, s));
  }, [
e,
t
  ]);
}

function y(e, t, n) {
  return s.useCallback(i => {
let s = I.default.getUser(e),
  a = d.Z.getChannel(t);
null != s && null != a && (i.stopPropagation(), (0, C._j)(i, {
  user: s,
  channel: a,
  moderationAlertId: n
}));
  }, [
e,
t,
n
  ]);
}

function B(e, t) {
  return s.useCallback(n => {
let i = I.default.getUser(e),
  s = d.Z.getChannel(t);
null != i && null != s && (n.stopPropagation(), (0, C.xS)(n, i, s.guild_id));
  }, [
e,
t
  ]);
}

function k(e, t) {
  let {
id: n
  } = e, {
id: i
  } = t;
  return s.useCallback(e => {
e.altKey && (e.preventDefault(), (0, g.Z)(i, n));
  }, [
i,
n
  ]);
}

function F(e, t, n) {
  let {
canShowReactionsOnMessageHover: i
  } = S.Z.useExperiment({
location: 'useHoveredMessage'
  }, {
autoTrackExposure: !1
  }), a = ''.concat(e, ':').concat(t), r = s.useRef(n), [l, o] = s.useState(n);
  r.current = l || r.current;
  let c = s.useCallback(() => {
  i && (0, u.T6)(), !l && (m.S.dispatchKeyed(A.LPv.ANIMATE_CHAT_AVATAR, a, !0), o(!0));
}, [
  l,
  a,
  i
]),
d = s.useCallback(() => {
  m.S.dispatchKeyed(A.LPv.ANIMATE_CHAT_AVATAR, a, !1), o(!1);
}, [a]);
  return {
hasHovered: r.current,
isHovered: l,
handleMouseEnter: c,
handleMouseLeave: d
  };
}

function G(e, t) {
  let [n, i] = s.useState(!1), [a, r] = s.useState(!1), l = s.useCallback(t => {
var n, s;
let a = null !== (s = null === (n = (0, T.uB)(t)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== s ? s : null;
(t.target === t.currentTarget || t.currentTarget.contains(a)) && (r(!0), i(!0)), null != e && e(t);
  }, [e]);
  return {
handleFocus: l,
handleBlur: s.useCallback(e => {
  var n, s;
  let a = null !== (s = null === (n = (0, T.uB)(e)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== s ? s : null;
  (e.target === e.currentTarget || !e.currentTarget.contains(a)) && i(!1), null != t && t(e);
}, [t]),
isFocused: n,
hasFocused: a
  };
}

function w(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return s.useCallback(() => {
null != t && (n ? a.Z.show({
  title: R.Z.Messages.UNBLOCK_TO_JUMP_TITLE,
  body: R.Z.Messages.UNBLOCK_TO_JUMP_BODY.format({
    name: t.author.username
  }),
  confirmText: R.Z.Messages.OKAY
}) : l.Z.jumpToMessage({
  channelId: t.channel_id,
  messageId: t.id,
  flash: !0,
  returnMessageId: e.id
}));
  }, [
n,
e.id,
t
  ]);
}

function V(e, t) {
  let n = O('interactionData', e, t);
  return s.useCallback(e => {
e.preventDefault(), e.stopPropagation(), n();
  }, [n]);
}