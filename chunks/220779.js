"use strict";
n.d(t, {
  A7: function() {
    return m
  },
  dE: function() {
    return R
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(410030),
  u = n(541716),
  _ = n(752305),
  c = n(893718),
  d = n(931651),
  E = n(131704),
  I = n(401227),
  T = n(142550),
  h = n(981631),
  S = n(689938),
  f = n(142544);
let N = (0, E.kt)({
    id: "1",
    type: h.d4z.DM
  }),
  A = r.forwardRef(function(e, t) {
    let {
      placeholder: n,
      headerText: r,
      onEnter: s,
      showPopout: u,
      children: _,
      hide: c
    } = e, d = (0, l.ZP)();
    return (0, i.jsx)(a.Popout, {
      align: "right",
      position: "bottom",
      shouldShow: u,
      disablePointerEvents: !1,
      renderPopout: () => (0, i.jsx)("div", {
        className: o()([f.reply, "theme-".concat(d)]),
        ref: t,
        children: (0, i.jsx)(a.FocusLock, {
          containerRef: t,
          children: (0, i.jsxs)("div", {
            children: [(0, i.jsx)(a.Text, {
              variant: "text-xs/bold",
              className: f.replyHeader,
              children: null != r ? r : S.Z.Messages.CHAT
            }), (0, i.jsx)(m, {
              onEnter: e => {
                s(e), c()
              },
              placeholder: null != n ? n : S.Z.Messages.CHAT
            })]
          })
        })
      }),
      children: () => _
    })
  });

function m(e) {
  let {
    placeholder: t,
    onEnter: n,
    setEditorRef: s,
    showEmojiButton: a = !1,
    renderAttachButton: l,
    autoFocus: d = !0,
    onFocus: E,
    channel: I,
    className: h
  } = e, [S, A] = r.useState(""), [m, O] = r.useState((0, _.JM)("")), R = () => {
    A(""), O((0, _.JM)(""))
  }, p = u.I.ATOMIC_REACTOR_REPLY_INPUT, g = r.useRef(null);
  return (0, i.jsx)(c.Z, {
    ref: g,
    placeholder: t,
    editorClassName: h,
    className: o()(f.replyInput, h),
    showRemainingCharsAfterCount: -1,
    allowNewLines: !1,
    maxCharacterCount: T.z,
    channel: null != I ? I : N,
    onChange: (e, t, n) => {
      A(t), O(n)
    },
    type: a ? {
      ...p,
      emojis: {
        button: !0
      }
    } : p,
    textValue: S,
    richValue: m,
    onSubmit: e => {
      let {
        value: t
      } = e;
      return t.length > T.z ? Promise.resolve({
        shouldClear: !1,
        shouldRefocus: !0
      }) : (n(t), R(), Promise.resolve({
        shouldClear: !0,
        shouldRefocus: !1
      }))
    },
    setEditorRef: s,
    focused: d,
    onFocus: E,
    disableThemedBackground: !0,
    emojiPickerCloseOnModalOuterClick: !0,
    disabled: !1,
    autoCompletePosition: (() => {
      if (null == g.current) return "top";
      let e = g.current.getBoundingClientRect(),
        t = window.innerHeight;
      return e.top < t / 2 ? "bottom" : "top"
    })(),
    renderAttachButton: l
  })
}
let O = (e, t) => {
    r.useEffect(() => {
      let n = t => {
          "Escape" === t.key && e()
        },
        i = n => {
          var i;
          null != n.target && !(null == t ? void 0 : null === (i = t.current) || void 0 === i ? void 0 : i.contains(null == n ? void 0 : n.target)) && e()
        };
      return document.addEventListener("keydown", n), document.addEventListener("mousedown", i), () => {
        document.removeEventListener("keydown", n), document.removeEventListener("mousedown", i)
      }
    }, [e, t])
  },
  R = e => {
    let {
      onSelectEmoji: t,
      onClick: n
    } = e, s = (0, l.ZP)(), [o, u] = r.useState(!1), _ = r.useRef(null);
    return O(() => u(!1), _), (0, i.jsx)(a.Popout, {
      align: "right",
      position: "top",
      shouldShow: o,
      disablePointerEvents: !1,
      renderPopout: () => (0, i.jsx)("div", {
        className: "theme-".concat(s),
        ref: _,
        children: (0, i.jsx)(d.$, {
          messageId: h.lds,
          channel: N,
          closePopout: () => {
            u(!1)
          },
          onSelectEmoji: (e, n, i) => {
            null != e && (t(e, n, i), u(!1))
          }
        })
      }),
      children: () => (0, i.jsx)(a.Tooltip, {
        text: S.Z.Messages.ADD_REACTION,
        children: e => (0, i.jsx)("div", {
          ...e,
          className: f.reaction,
          children: (0, i.jsx)(I.Z, {
            active: !1,
            tabIndex: 0,
            onClick: () => {
              null == n || n(), u(!0)
            }
          })
        })
      })
    })
  };
t.ZP = e => {
  let {
    onInteraction: t,
    replyHeaderText: n,
    replyPlaceholder: s,
    showReact: l = !0,
    showReply: u = !0
  } = e, [_, c] = r.useState(!1), d = r.useRef(null);
  return O(() => c(!1), d), (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)("div", {
      className: f.reactions,
      children: [l && (0, i.jsx)(R, {
        onSelectEmoji: e => {
          null != e && t({
            interactionType: T.L.ReactSubmit,
            emoji: e,
            reply: null
          })
        },
        onClick: () => {
          t({
            interactionType: T.L.ReactBegin,
            emoji: null,
            reply: null
          }), c(!1)
        }
      }), u && (0, i.jsx)(A, {
        hide: () => c(!1),
        ref: d,
        headerText: n,
        placeholder: s,
        showPopout: _,
        onEnter: e => {
          t({
            interactionType: T.L.ReplySubmit,
            emoji: null,
            reply: e
          })
        },
        children: (0, i.jsx)(a.Tooltip, {
          text: S.Z.Messages.MESSAGE_ACTION_REPLY,
          children: e => (0, i.jsx)("button", {
            ...e,
            className: o()(f.reaction, f.emojiButton),
            onClick: () => {
              t({
                interactionType: T.L.ReplyBegin,
                emoji: null,
                reply: null
              }), c(!0)
            },
            children: (0, i.jsx)(a.ArrowAngleLeftUpIcon, {})
          })
        })
      })]
    })
  })
}