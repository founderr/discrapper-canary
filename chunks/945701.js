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
  f = n("42203"),
  p = n("882641"),
  m = n("945330"),
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
    } = e, [c, f] = i.useState(""), [p, h] = i.useState((0, o.toRichValue)(""));
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
          children: (0, l.jsx)(m.default, {})
        })]
      }), (0, l.jsx)(u.default, {
        className: C.replyInput,
        focused: !0,
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: T,
        onChange: (e, t, n) => {
          f(t), h(n)
        },
        type: r.ChatInputTypes.ATOMIC_REACTOR_REPLY_INPUT,
        textValue: c,
        richValue: p,
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
var I = e => {
  var t;
  let {
    activity: n,
    user: s,
    showReact: r = !0,
    showReply: o = !0,
    requireConfirmation: u = !1,
    reactor: c
  } = e, [m, g] = i.useState(!1), [S, T] = i.useState(!1), [I, _] = i.useState(!1), [y, A] = i.useState(), [N, x] = i.useState(""), O = i.useRef(null), R = i.useRef(null), M = (0, E.default)(s), L = f.default.getDMFromUserId(null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : ""), P = f.default.getChannel(L);

  function b(e) {
    var t, n;
    null != e.target && (!(null == O ? void 0 : null === (t = O.current) || void 0 === t ? void 0 : t.contains(null == e ? void 0 : e.target)) && T(!1), !(null == R ? void 0 : null === (n = R.current) || void 0 === n ? void 0 : n.contains(null == e ? void 0 : e.target)) && _(!1))
  }
  return (i.useEffect(() => {
    let e = e => {
      "Escape" === e.key && (_(!1), T(!1))
    };
    return document.addEventListener("keydown", e), document.addEventListener("mousedown", b), () => {
      document.removeEventListener("keydown", e), document.removeEventListener("mousedown", b)
    }
  }, []), M) ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: C.reactions,
      children: [r && (0, l.jsx)(p.default, {
        active: !1,
        tabIndex: 0,
        className: C.reaction,
        onClick: () => {
          T(!0), _(!1)
        }
      }), o && (0, l.jsx)("button", {
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
    }), S && null != P && (0, l.jsx)("div", {
      className: C.picker,
      ref: O,
      children: (0, l.jsx)(d.ReactionPicker, {
        messageId: "",
        channel: P,
        closePopout: () => T(!1),
        onSelectEmoji: e => {
          null != e && (A(e), T(!1), g(!0))
        }
      })
    }), I && (0, l.jsx)(v, {
      ref: R,
      user: s,
      activity: n,
      hide: () => _(!1),
      onEnter: e => {
        x(e), g(!0)
      }
    }), m && (0, l.jsx)(c, {
      activity: n,
      user: s,
      onComplete: e => {
        null != y ? ((0, h.sendReaction)(e, y, s, u), A(void 0)) : null != N && ((0, h.sendReply)(e, N, s, u), x("")), g(!1)
      }
    })]
  }) : null
}