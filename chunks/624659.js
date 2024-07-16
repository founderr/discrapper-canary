n.d(t, {
  Z: function() {
return L;
  }
}), n(47120);
var s = n(735250),
  o = n(470079),
  a = n(392711),
  l = n.n(a),
  r = n(481060),
  i = n(110924),
  E = n(572539),
  u = n(111810),
  c = n(285952),
  d = n(153124),
  _ = n(863840),
  b = n(154921),
  I = n(63063),
  C = n(957115),
  f = n(531578),
  m = n(689938),
  A = n(487448);

function N() {
  return (0, s.jsx)(r.Text, {
className: A.helpdeskLink,
variant: 'text-xs/normal',
color: 'text-muted',
children: m.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
  helpdeskURL: I.Z.getSubmitRequestURL()
})
  });
}

function L(e) {
  let {
header: t,
body: n,
problems: a,
transitionState: I,
feedbackProblems: L = [],
otherKey: T,
hasCloseButton: x,
onSubmit: D,
onClose: h,
canDismissForever: p = !0,
showHelpdeskLink: S = !0
  } = e, Z = (0, i.Z)(a), [B, M] = o.useState(!1), [R, O] = o.useState(null), [j, g] = o.useState(l().shuffle(a)), [U, v] = o.useState(''), V = (0, d.Dt)(), F = (0, _.Z)(B), G = (0, _.Z)(R), k = (0, _.Z)(D), K = (0, _.Z)(U), y = null != R && L.includes(R);
  return o.useEffect(() => {
!l().isEqual(Z, a) && g((0, C.B)(a, T));
  }, [
a,
Z,
T
  ]), o.useEffect(() => () => {
k.current({
  problem: G.current,
  dontShowAgain: F.current,
  feedback: K.current
});
  }, []), (0, s.jsxs)(r.ModalRoot, {
transitionState: I,
className: A.__invalid_modalRoot,
'aria-labelledby': V,
children: [
  (0, s.jsx)(u.Z, {}),
  (0, s.jsxs)(r.ModalHeader, {
    separator: !1,
    className: A.headerContainer,
    children: [
      (0, s.jsx)(b.Z, {
        id: V,
        className: A.header,
        color: b.Z.Colors.CUSTOM,
        size: b.Z.Sizes.SIZE_24,
        children: t
      }),
      (0, s.jsx)(r.Text, {
        variant: 'text-md/normal',
        color: 'none',
        className: A.ratingBody,
        children: n
      }),
      x ? (0, s.jsx)(r.ModalCloseButton, {
        className: A.modalCloseButton,
        onClick: h
      }) : null
    ]
  }),
  (0, s.jsxs)(r.ModalContent, {
    className: A.__invalid_content,
    children: [
      y ? null : (0, s.jsx)(r.FormItem, {
        className: A.problemInfo,
        children: (0, s.jsx)(E.Z, {
          options: j,
          onClick: function(e) {
            let {
              value: t
            } = e;
            O(t), !L.includes(t) && h();
          }
        })
      }),
      y ? (0, s.jsxs)(r.FormItem, {
        title: m.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
        className: A.problemInfo,
        children: [
          (0, s.jsx)(r.TextArea, {
            value: U,
            maxLength: f.iF,
            onChange: v
          }),
          S ? (0, s.jsx)(N, {}) : null
        ]
      }) : null
    ]
  }),
  p || y ? (0, s.jsx)(r.ModalFooter, {
    className: A.footer,
    direction: c.Z.Direction.HORIZONTAL,
    children: y ? (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)(r.Button, {
          size: r.Button.Sizes.SMALL,
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.PRIMARY,
          onClick: () => {
            O(null), v('');
          },
          children: m.Z.Messages.BACK
        }),
        (0, s.jsx)(r.Button, {
          size: r.Button.Sizes.SMALL,
          onClick: h,
          children: m.Z.Messages.SUBMIT
        })
      ]
    }) : p ? (0, s.jsx)(r.Checkbox, {
      size: 18,
      type: r.Checkbox.Types.INVERTED,
      value: B,
      onChange: () => M(!B),
      children: (0, s.jsx)(r.Text, {
        variant: 'text-sm/normal',
        children: m.Z.Messages.DONT_SHOW_AGAIN
      })
    }) : null
  }) : null
]
  });
}