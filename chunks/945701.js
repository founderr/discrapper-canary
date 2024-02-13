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
    reactor: f,
    analyticsParams: m
  } = e, [g, I] = i.useState(!1), N = (0, u.default)(), [x, O] = i.useState(!1), [R, M] = i.useState(!1), [L, P] = i.useState(), [b, j] = i.useState(""), U = i.useRef(null), D = i.useRef(null), k = (0, T.default)(n);

  function w(e) {
    var t, n;
    null != e.target && (!(null == U ? void 0 : null === (t = U.current) || void 0 === t ? void 0 : t.contains(null == e ? void 0 : e.target)) && O(!1), !(null == D ? void 0 : null === (n = D.current) || void 0 === n ? void 0 : n.contains(null == e ? void 0 : e.target)) && M(!1))
  }

  function F(e) {
    E.default.track(v.AnalyticEvents.ACTIVITY_REACTOR_INTERACTED, {
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
      className: _.reactions,
      children: [a && (0, l.jsx)(h.default, {
        active: !1,
        tabIndex: 0,
        className: _.reaction,
        onClick: () => {
          F(S.ActivityReactorInteractionTypes.ReactBegin), O(!0), M(!1)
        }
      }), o && (0, l.jsx)(A, {
        ref: D,
        user: n,
        showPopout: R,
        onEnter: e => {
          F(S.ActivityReactorInteractionTypes.ReplySubmit), j(e), I(!0)
        },
        children: (0, l.jsx)("button", {
          className: s(_.reaction, _.emojiButton),
          onClick: () => {
            F(S.ActivityReactorInteractionTypes.ReplyBegin), M(!0)
          },
          children: (0, l.jsx)(r.ArrowAngleLeftUpIcon, {})
        })
      })]
    }), x && (0, l.jsx)("div", {
      className: s([_.picker, "theme-".concat(N)]),
      ref: U,
      children: (0, l.jsx)(p.ReactionPicker, {
        messageId: "",
        channel: y,
        closePopout: () => {
          O(!1)
        },
        onSelectEmoji: e => {
          null != e && (F(S.ActivityReactorInteractionTypes.ReactSubmit), P(e), O(!1), I(!0))
        }
      })
    }), g && (0, l.jsx)(f, {
      activity: t,
      user: n,
      onComplete: e => {
        null != L ? (F(S.ActivityReactorInteractionTypes.ReactSend), (0, C.sendReaction)(e, L, n, d, c), P(void 0)) : null != b && (F(S.ActivityReactorInteractionTypes.ReplySend), (0, C.sendReply)(e, b, n, d, c), j("")), I(!1)
      }
    })]
  }) : null
}