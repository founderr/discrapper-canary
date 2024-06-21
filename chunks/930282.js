"use strict";
n.d(t, {
  HR: function() {
    return S
  },
  L5: function() {
    return h
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(653603),
  l = n.n(a),
  u = n(902704),
  _ = n(453687),
  c = n(318713),
  d = n(981631),
  E = n(689938),
  I = n(425577),
  T = n(25450);

function h(e, t) {
  return e.type === d.uaV.VOICE_HANGOUT_INVITE ? "" : e.hasFlag(d.iLy.SOURCE_MESSAGE_DELETED) ? E.Z.Messages.SOURCE_MESSAGE_DELETED : t
}

function S(e, t) {
  var n, i;
  let {
    message: r
  } = t, {
    message: s
  } = e;
  return (0, u.Z)(e, t, ["message"]) && r.content === s.content && r.state === s.state && (null === (n = r.editedTimestamp) || void 0 === n ? void 0 : n.toString()) === (null === (i = s.editedTimestamp) || void 0 === i ? void 0 : i.toString())
}
t.ZP = r.memo(function(e) {
  var t;
  let {
    className: n,
    message: s,
    children: a,
    content: u,
    onUpdate: S,
    contentRef: f
  } = e, N = s.isEdited(), A = s.state === d.yb.SEND_FAILED, m = s.state === d.yb.SENDING, O = s.isCommandType(), R = null === (t = s.editedTimestamp) || void 0 === t ? void 0 : t.toString(), p = r.useRef(!1);
  return r.useLayoutEffect(() => {
    p.current ? null != S && S() : p.current = !0
  }, [S, s.content, u, R, a]), (0, i.jsxs)("div", {
    id: (0, _.ut)(s),
    ref: f,
    className: o()(n, T.markup, {
      [I.messageContent]: !0,
      [I.isSending]: m && !O,
      [I.markupRtl]: "rtl" === l()(s.content),
      [I.isFailed]: A,
      [I.isUnsupported]: s.isUnsupported
    }),
    children: [null != a ? a : h(s, u), N && null != s.editedTimestamp && (0, i.jsxs)(i.Fragment, {
      children: [" ", (0, i.jsx)(c.Z, {
        timestamp: s.editedTimestamp,
        isEdited: !0,
        isInline: !1,
        children: (0, i.jsxs)("span", {
          className: I.edited,
          children: ["(", E.Z.Messages.MESSAGE_EDITED, ")"]
        })
      })]
    })]
  })
}, S)