"use strict";
n.d(t, {
  A7: function() {
    return m
  },
  dE: function() {
    return p
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
  f = n(689938),
  S = n(142544);
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
      body: c,
      hide: d
    } = e, E = (0, l.ZP)();
    return (0, i.jsx)(a.Popout, {
      align: "right",
      position: "bottom",
      shouldShow: u,
      disablePointerEvents: !1,
      renderPopout: () => (0, i.jsx)("div", {
        className: o()([S.reply, "theme-".concat(E)]),
        ref: t,
        children: (0, i.jsx)(a.FocusLock, {
          containerRef: t,
          children: (0, i.jsxs)("div", {
            children: [(0, i.jsx)(a.Text, {
              variant: "text-xs/bold",
              className: S.replyHeader,
              children: null != r ? r : f.Z.Messages.CHAT
            }), c, (0, i.jsx)(m, {
              onEnter: e => {
                s(e), d()
              },
              placeholder: null != n ? n : f.Z.Messages.CHAT
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
  } = e, [f, A] = r.useState(""), [m, O] = r.useState((0, _.JM)("")), p = () => {
    A(""), O((0, _.JM)(""))
  }, R = u.I.ATOMIC_REACTOR_REPLY_INPUT, g = r.useRef(null);
  return (0, i.jsx)(c.Z, {
    ref: g,
    placeholder: t,
    editorClassName: h,
    className: o()(S.replyInput, h),
    showRemainingCharsAfterCount: -1,
    allowNewLines: !1,
    maxCharacterCount: T.z,
    channel: null != I ? I : N,
    onChange: (e, t, n) => {
      A(t), O(n)
    },
    type: a ? {
      ...R,
      emojis: {
        button: !0
      }
    } : R,
    textValue: f,
    richValue: m,
    onSubmit: e => {
      let {
        value: t
      } = e;
      return t.length > T.z ? Promise.resolve({
        shouldClear: !1,
        shouldRefocus: !0
      }) : (n(t), p(), Promise.resolve({
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
  p = e => {
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
        text: f.Z.Messages.ADD_REACTION,
        children: e => (0, i.jsx)("div", {
          ...e,
          className: S.reaction,
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
    showReact: n = !0,
    showReply: s = !0,
    popoutProps: l = {}
  } = e, {
    replyHeaderText: u,
    replyPlaceholder: _,
    popoutBody: c
  } = l, [d, E] = r.useState(!1), I = r.useRef(null);
  return O(() => E(!1), I), (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)("div", {
      className: S.reactions,
      children: [n && (0, i.jsx)(p, {
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
          }), E(!1)
        }
      }), s && (0, i.jsx)(A, {
        hide: () => E(!1),
        ref: I,
        headerText: u,
        placeholder: _,
        showPopout: d,
        body: c,
        onEnter: e => {
          t({
            interactionType: T.L.ReplySubmit,
            emoji: null,
            reply: e
          })
        },
        children: (0, i.jsx)(a.Tooltip, {
          text: f.Z.Messages.MESSAGE_ACTION_REPLY,
          children: e => (0, i.jsx)("button", {
            ...e,
            className: o()(S.reaction, S.emojiButton),
            onClick: () => {
              t({
                interactionType: T.L.ReplyBegin,
                emoji: null,
                reply: null
              }), E(!0)
            },
            children: (0, i.jsx)(a.ArrowAngleLeftUpIcon, {})
          })
        })
      })]
    })
  })
}