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
  S = n("49111"),
  g = n("782340"),
  C = n("619187");
let T = (0, c.createChannelRecord)({
    id: "1",
    type: S.ChannelTypes.DM
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
          "aria-label": g.default.Messages.QUICK_REPLY_CLOSE_ARIA_LABEL,
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
    reactor: u
  } = e, [c, p] = i.useState(!1), [m, S] = i.useState(!1), [g, I] = i.useState(!1), [_, y] = i.useState(), [A, N] = i.useState(""), x = i.useRef(null), O = i.useRef(null), R = (0, E.default)(n);

  function M(e) {
    var t, n;
    null != e.target && (!(null == x ? void 0 : null === (t = x.current) || void 0 === t ? void 0 : t.contains(null == e ? void 0 : e.target)) && S(!1), !(null == O ? void 0 : null === (n = O.current) || void 0 === n ? void 0 : n.contains(null == e ? void 0 : e.target)) && I(!1))
  }
  return (i.useEffect(() => {
    let e = e => {
      "Escape" === e.key && (I(!1), S(!1))
    };
    return document.addEventListener("keydown", e), document.addEventListener("mousedown", M), () => {
      document.removeEventListener("keydown", e), document.removeEventListener("mousedown", M)
    }
  }, []), R) ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: C.reactions,
      children: [s && (0, l.jsx)(f.default, {
        active: !1,
        tabIndex: 0,
        className: C.reaction,
        onClick: () => {
          S(!0), I(!1)
        }
      }), r && (0, l.jsx)("button", {
        style: {
          backgroundColor: "transparent",
          marginTop: 4,
          marginLeft: 8
        },
        className: C.reaction,
        onClick: () => {
          I(!0)
        },
        children: (0, l.jsx)(a.ArrowAngleLeftUpIcon, {})
      })]
    }), m && (0, l.jsx)("div", {
      className: C.picker,
      ref: x,
      children: (0, l.jsx)(d.ReactionPicker, {
        messageId: "",
        channel: T,
        closePopout: () => {
          S(!1)
        },
        onSelectEmoji: e => {
          null != e && (y(e), S(!1), p(!0))
        }
      })
    }), g && (0, l.jsx)(v, {
      ref: O,
      user: n,
      activity: t,
      hide: () => I(!1),
      onEnter: e => {
        N(e), p(!0)
      }
    }), c && (0, l.jsx)(u, {
      activity: t,
      user: n,
      onComplete: e => {
        null != _ ? ((0, h.sendReaction)(e, _, n, o), y(void 0)) : null != A && ((0, h.sendReply)(e, A, n, o), N("")), p(!1)
      }
    })]
  }) : null
}