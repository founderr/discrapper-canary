"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("273481"),
  s = n("77078"),
  r = n("850391"),
  o = n("149022"),
  u = n("681060"),
  d = n("219013"),
  c = n("233069"),
  f = n("882641"),
  p = n("945330"),
  m = n("964261"),
  h = n("526409"),
  E = n("314848"),
  g = n("49111"),
  S = n("782340"),
  C = n("619187");
let T = (0, c.createChannelRecord)({
    id: "1",
    type: g.ChannelTypes.DM
  }),
  v = i.forwardRef(function(e, t) {
    let {
      user: n,
      hide: a,
      onEnter: d
    } = e, [c, f] = i.useState(""), [h, E] = i.useState((0, o.toRichValue)(""));
    return (0, l.jsxs)("div", {
      className: C.reply,
      ref: t,
      children: [(0, l.jsxs)("div", {
        className: C.replyHeader,
        children: [(0, l.jsxs)(s.Text, {
          variant: "text-md/bold",
          children: ["What do you want to say to ", n.globalName, "?"]
        }), (0, l.jsx)(s.Clickable, {
          "aria-label": S.default.Messages.QUICK_REPLY_CLOSE_ARIA_LABEL,
          onClick: a,
          children: (0, l.jsx)(p.default, {})
        })]
      }), (0, l.jsx)(u.default, {
        className: C.replyInput,
        focused: !0,
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: m.MAX_CHAR_COUNT,
        channel: T,
        onChange: (e, t, n) => {
          f(t), E(n)
        },
        type: r.ChatInputTypes.ATOMIC_REACTOR_REPLY_INPUT,
        textValue: c,
        richValue: h,
        onSubmit: e => {
          let {
            value: t
          } = e;
          return t.length > m.MAX_CHAR_COUNT ? Promise.resolve({
            shouldClear: !1,
            shouldRefocus: !0
          }) : (d(t), Promise.resolve({
            shouldClear: !1,
            shouldRefocus: !1
          }))
        },
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0
      })]
    })
  });
var I = e => {
  let {
    activity: t,
    user: n,
    showReact: s = !0,
    showReply: r = !0,
    requireConfirmation: o = !1,
    filename: u,
    reactor: c
  } = e, [p, m] = i.useState(!1), [g, S] = i.useState(!1), [I, _] = i.useState(!1), [y, A] = i.useState(), [N, x] = i.useState(""), O = i.useRef(null), R = i.useRef(null), M = (0, E.default)(n);

  function L(e) {
    var t, n;
    null != e.target && (!(null == O ? void 0 : null === (t = O.current) || void 0 === t ? void 0 : t.contains(null == e ? void 0 : e.target)) && S(!1), !(null == R ? void 0 : null === (n = R.current) || void 0 === n ? void 0 : n.contains(null == e ? void 0 : e.target)) && _(!1))
  }
  return (i.useEffect(() => {
    let e = e => {
      "Escape" === e.key && (_(!1), S(!1))
    };
    return document.addEventListener("keydown", e), document.addEventListener("mousedown", L), () => {
      document.removeEventListener("keydown", e), document.removeEventListener("mousedown", L)
    }
  }, []), M) ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: C.reactions,
      children: [s && (0, l.jsx)(f.default, {
        active: !1,
        tabIndex: 0,
        className: C.reaction,
        onClick: () => {
          S(!0), _(!1)
        }
      }), r && (0, l.jsx)("button", {
        style: {
          backgroundColor: "transparent",
          marginTop: 4,
          marginLeft: 8
        },
        className: C.reaction,
        onClick: () => {
          _(!0)
        },
        children: (0, l.jsx)(a.ArrowAngleLeftUpIcon, {})
      })]
    }), g && (0, l.jsx)("div", {
      className: C.picker,
      ref: O,
      children: (0, l.jsx)(d.ReactionPicker, {
        messageId: "",
        channel: T,
        closePopout: () => {
          S(!1)
        },
        onSelectEmoji: e => {
          null != e && (A(e), S(!1), m(!0))
        }
      })
    }), I && (0, l.jsx)(v, {
      ref: R,
      user: n,
      activity: t,
      hide: () => _(!1),
      onEnter: e => {
        x(e), m(!0)
      }
    }), p && (0, l.jsx)(c, {
      activity: t,
      user: n,
      onComplete: e => {
        null != y ? ((0, h.sendReaction)(e, y, n, o, u), A(void 0)) : null != N && ((0, h.sendReply)(e, N, n, o, u), x("")), m(!1)
      }
    })]
  }) : null
}