"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
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
  E = n("599110"),
  g = n("964261"),
  S = n("407462"),
  C = n("526409"),
  T = n("314848"),
  v = n("49111"),
  I = n("782340"),
  _ = n("619187");
let y = (0, m.createChannelRecord)({
    id: "1",
    type: v.ChannelTypes.DM
  }),
  A = i.forwardRef(function(e, t) {
    let {
      user: n,
      onEnter: a,
      showPopout: r,
      children: p
    } = e, [m, h] = i.useState(""), [E, S] = i.useState((0, c.toRichValue)("")), C = (0, u.default)();
    return (0, l.jsx)(o.Popout, {
      align: "right",
      position: "top",
      shouldShow: r,
      renderPopout: () => (0, l.jsx)("div", {
        className: s([_.reply, "theme-".concat(C)]),
        ref: t,
        children: (0, l.jsx)(f.default, {
          placeholder: I.default.Messages.TEXTAREA_PLACEHOLDER.format({
            channel: "@".concat(n.username)
          }),
          className: _.replyInput,
          focused: !0,
          showRemainingCharsAfterCount: -1,
          allowNewLines: !1,
          maxCharacterCount: g.MAX_CHAR_COUNT,
          channel: y,
          onChange: (e, t, n) => {
            h(t), S(n)
          },
          type: d.ChatInputTypes.ATOMIC_REACTOR_REPLY_INPUT,
          textValue: m,
          richValue: E,
          onSubmit: e => {
            let {
              value: t
            } = e;
            return t.length > g.MAX_CHAR_COUNT ? Promise.resolve({
              shouldClear: !1,
              shouldRefocus: !0
            }) : (a(t), Promise.resolve({
              shouldClear: !1,
              shouldRefocus: !1
            }))
          },
          disableThemedBackground: !0,
          emojiPickerCloseOnModalOuterClick: !0
        })
      }),
      children: () => p
    })
  });
var N = e => {
  let {
    activity: t,
    user: n,
    showReact: a = !0,
    showReply: o = !0,
    requireConfirmation: d = !1,
    filename: c,
    altText: f,
    reactor: m,
    analyticsParams: g
  } = e, [I, N] = i.useState(!1), x = (0, u.default)(), [O, R] = i.useState(!1), [M, L] = i.useState(!1), [P, b] = i.useState(), [j, U] = i.useState(""), D = i.useRef(null), k = i.useRef(null), w = (0, T.default)(n);

  function F(e) {
    var t, n;
    null != e.target && (!(null == D ? void 0 : null === (t = D.current) || void 0 === t ? void 0 : t.contains(null == e ? void 0 : e.target)) && R(!1), !(null == k ? void 0 : null === (n = k.current) || void 0 === n ? void 0 : n.contains(null == e ? void 0 : e.target)) && L(!1))
  }

  function G(e) {
    E.default.track(v.AnalyticEvents.ACTIVITY_REACTOR_INTERACTED, {
      application_id: t.application_id,
      interaction_type: e,
      ...g
    })
  }
  return (i.useEffect(() => {
    let e = e => {
      "Escape" === e.key && (L(!1), R(!1))
    };
    return document.addEventListener("keydown", e), document.addEventListener("mousedown", F), () => {
      document.removeEventListener("keydown", e), document.removeEventListener("mousedown", F)
    }
  }, []), w) ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: _.reactions,
      children: [a && (0, l.jsx)(h.default, {
        active: !1,
        tabIndex: 0,
        className: _.reaction,
        onClick: () => {
          G(S.ActivityReactorInteractionTypes.ReactBegin), R(!0), L(!1)
        }
      }), o && (0, l.jsx)(A, {
        ref: k,
        user: n,
        showPopout: M,
        onEnter: e => {
          G(S.ActivityReactorInteractionTypes.ReplySubmit), U(e), N(!0)
        },
        children: (0, l.jsx)("button", {
          className: s(_.reaction, _.emojiButton),
          onClick: () => {
            G(S.ActivityReactorInteractionTypes.ReplyBegin), L(!0)
          },
          children: (0, l.jsx)(r.ArrowAngleLeftUpIcon, {})
        })
      })]
    }), O && (0, l.jsx)("div", {
      className: s([_.picker, "theme-".concat(x)]),
      ref: D,
      children: (0, l.jsx)(p.ReactionPicker, {
        messageId: "",
        channel: y,
        closePopout: () => {
          R(!1)
        },
        onSelectEmoji: e => {
          null != e && (G(S.ActivityReactorInteractionTypes.ReactSubmit), b(e), R(!1), N(!0))
        }
      })
    }), I && (0, l.jsx)(m, {
      activity: t,
      user: n,
      onComplete: e => {
        null != P ? (G(S.ActivityReactorInteractionTypes.ReactSend), (0, C.sendReaction)({
          discordCanvas: e,
          reaction: P,
          user: n,
          requireConfirmation: d,
          filename: c,
          altText: f
        }), b(void 0)) : null != j && (G(S.ActivityReactorInteractionTypes.ReplySend), (0, C.sendReply)({
          discordCanvas: e,
          reply: j,
          user: n,
          requireConfirmation: d,
          filename: c,
          altText: f
        }), U("")), N(!1)
      }
    })]
  }) : null
}