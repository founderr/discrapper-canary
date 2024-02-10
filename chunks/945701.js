"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
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
  g = n("599110"),
  S = n("964261"),
  C = n("407462"),
  T = n("526409"),
  v = n("314848"),
  I = n("49111"),
  _ = n("782340"),
  y = n("619187");
let A = (0, m.createChannelRecord)({
    id: "1",
    type: I.ChannelTypes.DM
  }),
  N = i.forwardRef(function(e, t) {
    let {
      user: n,
      hide: a,
      onEnter: r
    } = e, [p, m] = i.useState(""), [h, g] = i.useState((0, c.toRichValue)("")), C = (0, u.default)();
    return (0, l.jsxs)("div", {
      className: s([y.reply, "theme-".concat(C)]),
      ref: t,
      children: [(0, l.jsxs)("div", {
        className: y.replyHeader,
        children: [(0, l.jsxs)(o.Text, {
          variant: "text-md/bold",
          children: ["What do you want to say to ", n.globalName, "?"]
        }), (0, l.jsx)(o.Clickable, {
          className: y.closeIcon,
          "aria-label": _.default.Messages.QUICK_REPLY_CLOSE_ARIA_LABEL,
          onClick: a,
          children: (0, l.jsx)(E.default, {})
        })]
      }), (0, l.jsx)(f.default, {
        className: y.replyInput,
        focused: !0,
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: S.MAX_CHAR_COUNT,
        channel: A,
        onChange: (e, t, n) => {
          m(t), g(n)
        },
        type: d.ChatInputTypes.ATOMIC_REACTOR_REPLY_INPUT,
        textValue: p,
        richValue: h,
        onSubmit: e => {
          let {
            value: t
          } = e;
          return t.length > S.MAX_CHAR_COUNT ? Promise.resolve({
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
var x = e => {
  let {
    activity: t,
    user: n,
    showReact: a = !0,
    showReply: o = !0,
    requireConfirmation: d = !1,
    filename: c,
    reactor: f,
    analyticsParams: m
  } = e, [E, S] = i.useState(!1), _ = (0, u.default)(), [x, O] = i.useState(!1), [R, M] = i.useState(!1), [L, P] = i.useState(), [b, j] = i.useState(""), U = i.useRef(null), D = i.useRef(null), k = (0, v.default)(n);

  function w(e) {
    var t, n;
    null != e.target && (!(null == U ? void 0 : null === (t = U.current) || void 0 === t ? void 0 : t.contains(null == e ? void 0 : e.target)) && O(!1), !(null == D ? void 0 : null === (n = D.current) || void 0 === n ? void 0 : n.contains(null == e ? void 0 : e.target)) && M(!1))
  }

  function F(e) {
    g.default.track(I.AnalyticEvents.ACTIVITY_REACTOR_INTERACTED, {
      application_id: t.application_id,
      interaction_type: e,
      ...m
    })
  }
  return (i.useEffect(() => {
    let e = e => {
      "Escape" === e.key && (M(!1), O(!1))
    };
    return document.addEventListener("keydown", e), document.addEventListener("mousedown", w), () => {
      document.removeEventListener("keydown", e), document.removeEventListener("mousedown", w)
    }
  }, []), k) ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: y.reactions,
      children: [a && (0, l.jsx)(h.default, {
        active: !1,
        tabIndex: 0,
        className: y.reaction,
        onClick: () => {
          F(C.ActivityReactorInteractionTypes.ReactBegin), O(!0), M(!1)
        }
      }), o && (0, l.jsx)("button", {
        style: {
          backgroundColor: "transparent",
          marginTop: 4,
          marginLeft: 8
        },
        className: y.reaction,
        onClick: () => {
          F(C.ActivityReactorInteractionTypes.ReplyBegin), M(!0)
        },
        children: (0, l.jsx)(r.ArrowAngleLeftUpIcon, {})
      })]
    }), x && (0, l.jsx)("div", {
      className: s([y.picker, "theme-".concat(_)]),
      ref: U,
      children: (0, l.jsx)(p.ReactionPicker, {
        messageId: "",
        channel: A,
        closePopout: () => {
          O(!1)
        },
        onSelectEmoji: e => {
          null != e && (F(C.ActivityReactorInteractionTypes.ReactSubmit), P(e), O(!1), S(!0))
        }
      })
    }), R && (0, l.jsx)(N, {
      ref: D,
      user: n,
      activity: t,
      hide: () => M(!1),
      onEnter: e => {
        F(C.ActivityReactorInteractionTypes.ReplySubmit), j(e), S(!0)
      }
    }), E && (0, l.jsx)(f, {
      activity: t,
      user: n,
      onComplete: e => {
        null != L ? (F(C.ActivityReactorInteractionTypes.ReactSend), (0, T.sendReaction)(e, L, n, d, c), P(void 0)) : null != b && (F(C.ActivityReactorInteractionTypes.ReplySend), (0, T.sendReply)(e, b, n, d, c), j("")), S(!1)
      }
    })]
  }) : null
}