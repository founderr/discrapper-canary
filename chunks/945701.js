"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
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
  m = n("219013"),
  p = n("233069"),
  h = n("882641"),
  E = n("599110"),
  g = n("964261"),
  S = n("407462"),
  C = n("526409"),
  T = n("314848"),
  v = n("49111"),
  I = n("782340"),
  _ = n("789215");
let N = (0, p.createChannelRecord)({
    id: "1",
    type: v.ChannelTypes.DM
  }),
  A = i.forwardRef(function(e, t) {
    let {
      user: n,
      onEnter: a,
      showPopout: r,
      children: m,
      hide: p
    } = e, [h, E] = i.useState(""), [S, C] = i.useState((0, c.toRichValue)("")), T = (0, u.default)();
    return i.useEffect(() => {
      E(""), C((0, c.toRichValue)(""))
    }, [r]), (0, l.jsx)(o.Popout, {
      align: "right",
      position: "bottom",
      shouldShow: r,
      disablePointerEvents: !1,
      renderPopout: () => (0, l.jsx)("div", {
        className: s([_.reply, "theme-".concat(T)]),
        ref: t,
        children: (0, l.jsx)(o.FocusLock, {
          containerRef: t,
          children: (0, l.jsx)(f.default, {
            placeholder: I.default.Messages.TEXTAREA_PLACEHOLDER.format({
              channel: "@".concat(n.globalName)
            }),
            className: _.replyInput,
            showRemainingCharsAfterCount: -1,
            allowNewLines: !1,
            maxCharacterCount: g.MAX_CHAR_COUNT,
            channel: N,
            onChange: (e, t, n) => {
              E(t), C(n)
            },
            type: d.ChatInputTypes.ATOMIC_REACTOR_REPLY_INPUT,
            textValue: h,
            richValue: S,
            onSubmit: e => {
              let {
                value: t
              } = e;
              return t.length > g.MAX_CHAR_COUNT ? Promise.resolve({
                shouldClear: !1,
                shouldRefocus: !0
              }) : (a(t), p(), Promise.resolve({
                shouldClear: !0,
                shouldRefocus: !1
              }))
            },
            focused: !0,
            disableThemedBackground: !0,
            emojiPickerCloseOnModalOuterClick: !0,
            disabled: !1
          })
        })
      }),
      children: () => m
    })
  });
var y = e => {
  let {
    activity: t,
    user: n,
    showReact: a = !0,
    showReply: d = !0,
    requireConfirmation: c = !1,
    filename: f,
    altText: p,
    reactor: g,
    analyticsParams: y
  } = e, [x, O] = i.useState(!1), R = (0, u.default)(), [M, L] = i.useState(!1), [P, b] = i.useState(!1), [j, U] = i.useState(), [D, k] = i.useState(""), w = i.useRef(null), F = i.useRef(null), G = (0, T.default)(n);

  function B(e) {
    var t, n;
    null != e.target && (!(null == w ? void 0 : null === (t = w.current) || void 0 === t ? void 0 : t.contains(null == e ? void 0 : e.target)) && L(!1), !(null == F ? void 0 : null === (n = F.current) || void 0 === n ? void 0 : n.contains(null == e ? void 0 : e.target)) && b(!1))
  }

  function H(e) {
    E.default.track(v.AnalyticEvents.ACTIVITY_REACTOR_INTERACTED, {
      application_id: t.application_id,
      interaction_type: e,
      ...y
    })
  }
  return (i.useEffect(() => {
    let e = e => {
      "Escape" === e.key && (b(!1), L(!1))
    };
    return document.addEventListener("keydown", e), document.addEventListener("mousedown", B), () => {
      document.removeEventListener("keydown", e), document.removeEventListener("mousedown", B)
    }
  }, []), G) ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: _.reactions,
      children: [a && (0, l.jsx)(o.Popout, {
        align: "right",
        position: "top",
        shouldShow: M,
        disablePointerEvents: !1,
        renderPopout: () => (0, l.jsx)("div", {
          className: "theme-".concat(R),
          ref: w,
          children: (0, l.jsx)(m.ReactionPicker, {
            messageId: "",
            channel: N,
            closePopout: () => {
              L(!1)
            },
            onSelectEmoji: e => {
              null != e && (H(S.ActivityReactorInteractionTypes.ReactSubmit), U(e), L(!1), O(!0))
            }
          })
        }),
        children: () => (0, l.jsx)(o.Tooltip, {
          text: I.default.Messages.ADD_REACTION,
          children: e => (0, l.jsx)("div", {
            ...e,
            className: _.reaction,
            children: (0, l.jsx)(h.default, {
              active: !1,
              tabIndex: 0,
              onClick: () => {
                H(S.ActivityReactorInteractionTypes.ReactBegin), L(!0), b(!1)
              }
            })
          })
        })
      }), d && (0, l.jsx)(A, {
        hide: () => b(!1),
        ref: F,
        user: n,
        showPopout: P,
        onEnter: e => {
          H(S.ActivityReactorInteractionTypes.ReplySubmit), k(e), O(!0)
        },
        children: (0, l.jsx)(o.Tooltip, {
          text: I.default.Messages.MESSAGE_ACTION_REPLY,
          children: e => (0, l.jsx)("button", {
            ...e,
            className: s(_.reaction, _.emojiButton),
            onClick: () => {
              H(S.ActivityReactorInteractionTypes.ReplyBegin), b(!0)
            },
            children: (0, l.jsx)(r.ArrowAngleLeftUpIcon, {})
          })
        })
      })]
    }), x && (0, l.jsx)(g, {
      activity: t,
      user: n,
      onComplete: e => {
        null != j ? (H(S.ActivityReactorInteractionTypes.ReactSend), (0, C.sendReaction)({
          discordCanvas: e,
          reaction: j,
          user: n,
          requireConfirmation: c,
          filename: f,
          altText: p
        }), U(void 0)) : null != D && (H(S.ActivityReactorInteractionTypes.ReplySend), (0, C.sendReply)({
          discordCanvas: e,
          reply: D,
          user: n,
          requireConfirmation: c,
          filename: f,
          altText: p
        }), k("")), O(!1)
      }
    })]
  }) : null
}