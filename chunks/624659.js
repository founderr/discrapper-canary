s.d(n, {
  Z: function() {
    return L
  }
}), s(47120);
var t = s(735250),
  a = s(470079),
  l = s(392711),
  o = s.n(l),
  r = s(481060),
  E = s(110924),
  i = s(111810),
  u = s(67866),
  c = s(285952),
  d = s(153124),
  I = s(863840),
  _ = s(154921),
  C = s(63063),
  f = s(957115),
  A = s(531578),
  T = s(689938),
  D = s(675481);

function N() {
  return (0, t.jsx)(r.Text, {
    className: D.helpdeskLink,
    variant: "text-xs/normal",
    color: "text-muted",
    children: T.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
      helpdeskURL: C.Z.getSubmitRequestURL()
    })
  })
}

function L(e) {
  let {
    header: n,
    body: s,
    problems: l,
    transitionState: C,
    feedbackProblems: L = [],
    otherKey: x,
    hasCloseButton: m,
    onSubmit: Z,
    onClose: h,
    canDismissForever: M = !0,
    showHelpdeskLink: R = !0
  } = e, S = (0, E.Z)(l), [O, B] = a.useState(!1), [U, v] = a.useState(null), [b, g] = a.useState(o().shuffle(l)), [p, V] = a.useState(""), F = (0, d.Dt)(), j = (0, I.Z)(O), G = (0, I.Z)(U), k = (0, I.Z)(Z), K = (0, I.Z)(p), H = null != U && L.includes(U);
  return a.useEffect(() => {
    !o().isEqual(S, l) && g((0, f.B)(l, x))
  }, [l, S, x]), a.useEffect(() => () => {
    k.current({
      problem: G.current,
      dontShowAgain: j.current,
      feedback: K.current
    })
  }, []), (0, t.jsxs)(r.ModalRoot, {
    transitionState: C,
    className: D.__invalid_modalRoot,
    "aria-labelledby": F,
    children: [(0, t.jsx)(i.Z, {}), (0, t.jsxs)(r.ModalHeader, {
      separator: !1,
      className: D.headerContainer,
      children: [(0, t.jsx)(_.Z, {
        id: F,
        className: D.header,
        color: _.Z.Colors.CUSTOM,
        size: _.Z.Sizes.SIZE_24,
        children: n
      }), (0, t.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "none",
        className: D.ratingBody,
        children: s
      }), m ? (0, t.jsx)(r.ModalCloseButton, {
        className: D.modalCloseButton,
        onClick: h
      }) : null]
    }), (0, t.jsxs)(r.ModalContent, {
      className: D.__invalid_content,
      children: [H ? null : (0, t.jsx)(r.FormItem, {
        className: D.problemInfo,
        children: (0, t.jsx)(u.Z, {
          options: b,
          onClick: function(e) {
            let {
              value: n
            } = e;
            v(n), !L.includes(n) && h()
          }
        })
      }), H ? (0, t.jsxs)(r.FormItem, {
        title: T.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
        className: D.problemInfo,
        children: [(0, t.jsx)(r.TextArea, {
          value: p,
          maxLength: A.iF,
          onChange: V
        }), R ? (0, t.jsx)(N, {}) : null]
      }) : null]
    }), M || H ? (0, t.jsx)(r.ModalFooter, {
      className: D.footer,
      direction: c.Z.Direction.HORIZONTAL,
      children: H ? (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(r.Button, {
          size: r.Button.Sizes.SMALL,
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.PRIMARY,
          onClick: () => {
            v(null), V("")
          },
          children: T.Z.Messages.BACK
        }), (0, t.jsx)(r.Button, {
          size: r.Button.Sizes.SMALL,
          onClick: h,
          children: T.Z.Messages.SUBMIT
        })]
      }) : M ? (0, t.jsx)(r.Checkbox, {
        size: 18,
        type: r.Checkbox.Types.INVERTED,
        value: O,
        onChange: () => B(!O),
        children: (0, t.jsx)(r.Text, {
          variant: "text-sm/normal",
          children: T.Z.Messages.DONT_SHOW_AGAIN
        })
      }) : null
    }) : null]
  })
}