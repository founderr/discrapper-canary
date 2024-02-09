"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("273481"),
  o = n("77078"),
  u = n("841098"),
  d = n("850391"),
  c = n("149022"),
  f = n("681060"),
  p = n("219013"),
  m = n("233069"),
  h = n("882641"),
  E = n("945330"),
  g = n("964261"),
  S = n("526409"),
  C = n("314848"),
  T = n("49111"),
  v = n("782340"),
  I = n("619187");
let _ = (0, m.createChannelRecord)({
    id: "1",
    type: T.ChannelTypes.DM
  }),
  y = i.forwardRef(function(e, t) {
    let {
      user: n,
      hide: a,
      onEnter: r
    } = e, [p, m] = i.useState(""), [h, S] = i.useState((0, c.toRichValue)("")), C = (0, u.default)();
    return (0, l.jsxs)("div", {
      className: s([I.reply, "theme-".concat(C)]),
      ref: t,
      children: [(0, l.jsxs)("div", {
        className: I.replyHeader,
        children: [(0, l.jsxs)(o.Text, {
          variant: "text-md/bold",
          children: ["What do you want to say to ", n.globalName, "?"]
        }), (0, l.jsx)(o.Clickable, {
          className: I.closeIcon,
          "aria-label": v.default.Messages.QUICK_REPLY_CLOSE_ARIA_LABEL,
          onClick: a,
          children: (0, l.jsx)(E.default, {})
        })]
      }), (0, l.jsx)(f.default, {
        className: I.replyInput,
        focused: !0,
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: g.MAX_CHAR_COUNT,
        channel: _,
        onChange: (e, t, n) => {
          m(t), S(n)
        },
        type: d.ChatInputTypes.ATOMIC_REACTOR_REPLY_INPUT,
        textValue: p,
        richValue: h,
        onSubmit: e => {
          let {
            value: t
          } = e;
          return t.length > g.MAX_CHAR_COUNT ? Promise.resolve({
            shouldClear: !1,
            shouldRefocus: !0
          }) : (r(t), Promise.resolve({
            shouldClear: !1,
            shouldRefocus: !1
          }))
        },
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0
      })]
    })
  });
var A = e => {
  let {
    activity: t,
    user: n,
    showReact: a = !0,
    showReply: o = !0,
    requireConfirmation: d = !1,
    filename: c,
    reactor: f
  } = e, [m, E] = i.useState(!1), g = (0, u.default)(), [T, v] = i.useState(!1), [A, N] = i.useState(!1), [x, O] = i.useState(), [R, M] = i.useState(""), L = i.useRef(null), P = i.useRef(null), b = (0, C.default)(n);

  function j(e) {
    var t, n;
    null != e.target && (!(null == L ? void 0 : null === (t = L.current) || void 0 === t ? void 0 : t.contains(null == e ? void 0 : e.target)) && v(!1), !(null == P ? void 0 : null === (n = P.current) || void 0 === n ? void 0 : n.contains(null == e ? void 0 : e.target)) && N(!1))
  }
  return (i.useEffect(() => {
    let e = e => {
      "Escape" === e.key && (N(!1), v(!1))
    };
    return document.addEventListener("keydown", e), document.addEventListener("mousedown", j), () => {
      document.removeEventListener("keydown", e), document.removeEventListener("mousedown", j)
    }
  }, []), b) ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: I.reactions,
      children: [a && (0, l.jsx)(h.default, {
        active: !1,
        tabIndex: 0,
        className: I.reaction,
        onClick: () => {
          v(!0), N(!1)
        }
      }), o && (0, l.jsx)("button", {
        style: {
          backgroundColor: "transparent",
          marginTop: 4,
          marginLeft: 8
        },
        className: I.reaction,
        onClick: () => {
          N(!0)
        },
        children: (0, l.jsx)(r.ArrowAngleLeftUpIcon, {})
      })]
    }), T && (0, l.jsx)("div", {
      className: s([I.picker, "theme-".concat(g)]),
      ref: L,
      children: (0, l.jsx)(p.ReactionPicker, {
        messageId: "",
        channel: _,
        closePopout: () => {
          v(!1)
        },
        onSelectEmoji: e => {
          null != e && (O(e), v(!1), E(!0))
        }
      })
    }), A && (0, l.jsx)(y, {
      ref: P,
      user: n,
      activity: t,
      hide: () => N(!1),
      onEnter: e => {
        M(e), E(!0)
      }
    }), m && (0, l.jsx)(f, {
      activity: t,
      user: n,
      onComplete: e => {
        null != x ? ((0, S.sendReaction)(e, x, n, d, c), O(void 0)) : null != R && ((0, S.sendReply)(e, R, n, d, c), M("")), E(!1)
      }
    })]
  }) : null
}