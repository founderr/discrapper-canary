"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
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
  m = n("526409"),
  h = n("314848"),
  E = n("49111"),
  S = n("782340"),
  g = n("619187");
let C = (0, c.createChannelRecord)({
    id: "1",
    type: E.ChannelTypes.DM
  }),
  T = i.forwardRef(function(e, t) {
    let {
      user: n,
      hide: a,
      onEnter: d
    } = e, [c, f] = i.useState(""), [m, h] = i.useState((0, o.toRichValue)(""));
    return (0, l.jsxs)("div", {
      className: g.reply,
      ref: t,
      children: [(0, l.jsxs)("div", {
        className: g.replyHeader,
        children: [(0, l.jsxs)(s.Text, {
          variant: "text-md/bold",
          children: ["What do you want to say to ", n.globalName, "?"]
        }), (0, l.jsx)(s.Clickable, {
          "aria-label": S.default.Messages.QUICK_REPLY_CLOSE_ARIA_LABEL,
          onClick: a,
          children: (0, l.jsx)(p.default, {})
        })]
      }), (0, l.jsx)(u.default, {
        className: g.replyInput,
        focused: !0,
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: C,
        onChange: (e, t, n) => {
          f(t), h(n)
        },
        type: r.ChatInputTypes.ATOMIC_REACTOR_REPLY_INPUT,
        textValue: c,
        richValue: m,
        onSubmit: () => new Promise(e => {
          d(c), e({
            shouldClear: !1,
            shouldRefocus: !1
          }), a()
        }),
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0
      })]
    })
  });
var v = e => {
  let {
    activity: t,
    user: n,
    showReact: s = !0,
    showReply: r = !0,
    requireConfirmation: o = !1,
    reactor: u
  } = e, [c, p] = i.useState(!1), [E, S] = i.useState(!1), [v, I] = i.useState(!1), [_, y] = i.useState(), [A, N] = i.useState(""), x = i.useRef(null), O = i.useRef(null), R = (0, h.default)(n);

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
      className: g.reactions,
      children: [s && (0, l.jsx)(f.default, {
        active: !1,
        tabIndex: 0,
        className: g.reaction,
        onClick: () => {
          S(!0), I(!1)
        }
      }), r && (0, l.jsx)("button", {
        style: {
          backgroundColor: "transparent",
          marginTop: 4,
          marginLeft: 8
        },
        className: g.reaction,
        onClick: () => {
          I(!0)
        },
        children: (0, l.jsx)(a.ArrowAngleLeftUpIcon, {})
      })]
    }), E && (0, l.jsx)("div", {
      className: g.picker,
      ref: x,
      children: (0, l.jsx)(d.ReactionPicker, {
        messageId: "",
        channel: C,
        closePopout: () => {
          S(!1)
        },
        onSelectEmoji: e => {
          null != e && (y(e), S(!1), p(!0))
        }
      })
    }), v && (0, l.jsx)(T, {
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
        null != _ ? ((0, m.sendReaction)(e, _, n, o), y(void 0)) : null != A && ((0, m.sendReply)(e, A, n, o), N("")), p(!1)
      }
    })]
  }) : null
}