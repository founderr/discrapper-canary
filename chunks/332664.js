a.d(n, {
  L: function() {
    return f
  },
  Z: function() {
    return g
  }
}), a(47120);
var s = a(735250),
  l = a(470079),
  t = a(120356),
  r = a.n(t),
  i = a(392711),
  o = a.n(i),
  c = a(481060),
  u = a(110924),
  d = a(67866),
  E = a(285952),
  R = a(153124),
  _ = a(863840),
  T = a(63063),
  M = a(957115),
  O = a(531578),
  m = a(689938),
  S = a(675481);
let A = [{
  className: S.emojiSad,
  rating: O.aZ.BAD,
  classNameSelected: S.selected
}, {
  className: S.emojiNeutral,
  rating: O.aZ.NEUTRAL,
  classNameSelected: S.selected
}, {
  className: S.emojiHappy,
  rating: O.aZ.GOOD,
  classNameSelected: S.selected
}];

function f(e) {
  let {
    className: n,
    selectedRating: a,
    ratingConfigs: l,
    onChangeRating: t
  } = e;
  return (0, s.jsx)(E.Z, {
    justify: E.Z.Justify.BETWEEN,
    align: E.Z.Align.CENTER,
    className: r()(S.ratingsSelector, n),
    children: (null != l ? l : A).map(e => {
      let {
        rating: n,
        className: l,
        classNameSelected: i
      } = e;
      return (0, s.jsx)(c.Clickable, {
        onClick: () => t(n),
        "aria-label": n,
        children: (0, s.jsx)("div", {
          className: r()(l, a === n ? i : null)
        })
      }, n)
    })
  })
}

function N() {
  return (0, s.jsx)(c.Text, {
    className: S.helpdeskLink,
    variant: "text-xs/normal",
    color: "text-muted",
    children: m.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
      helpdeskURL: T.Z.getSubmitRequestURL()
    })
  })
}

function g(e) {
  let {
    header: n,
    body: a,
    problemTitle: t,
    problems: i,
    transitionState: T,
    ratingConfigs: A,
    feedbackProblems: g = [],
    otherKey: Z,
    ratingsSelectorClassName: x,
    hideDontShowCheckbox: h,
    startRating: p = null,
    onSubmit: D,
    onClose: b
  } = e, P = (0, u.Z)(i), [I, C] = l.useState(!1), [k, L] = l.useState(p), [j, v] = l.useState(null), [B, G] = l.useState(o().shuffle(i)), [U, y] = l.useState(""), F = (0, R.Dt)(), H = (0, _.Z)(k), Y = (0, _.Z)(I), K = (0, _.Z)(j), w = (0, _.Z)(D), z = (0, _.Z)(U), q = null != j && g.includes(j);
  return l.useEffect(() => {
    !o().isEqual(P, i) && G((0, M.B)(i, Z))
  }, [i, P, Z]), l.useEffect(() => () => {
    w.current({
      rating: H.current,
      problem: K.current,
      dontShowAgain: Y.current,
      feedback: z.current
    })
  }, []), (0, s.jsxs)(c.ModalRoot, {
    transitionState: T,
    className: S.__invalid_modalRoot,
    "aria-labelledby": F,
    children: [(0, s.jsxs)(c.ModalHeader, {
      separator: !1,
      className: S.headerContainer,
      children: [(0, s.jsx)(c.Heading, {
        id: F,
        variant: "heading-xl/extrabold",
        color: "none",
        children: n
      }), (0, s.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "none",
        className: S.ratingBody,
        children: a
      }), q ? null : (0, s.jsx)(f, {
        className: r()(S.emojis, x),
        selectedRating: k,
        onChangeRating: function(e) {
          L(e), e === O.aZ.GOOD && b()
        },
        ratingConfigs: A
      })]
    }), (0, s.jsxs)(c.ModalContent, {
      className: S.__invalid_content,
      children: [null == k || k === O.aZ.GOOD || q ? null : (0, s.jsx)(c.FormItem, {
        title: t,
        className: S.problemInfo,
        children: (0, s.jsx)(d.Z, {
          options: B,
          onClick: function(e) {
            let {
              value: n
            } = e;
            v(n), !g.includes(n) && b()
          },
          hideCaret: e => {
            let {
              value: n
            } = e;
            return !g.includes(n)
          }
        })
      }), q ? (0, s.jsxs)(c.FormItem, {
        title: m.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
        className: S.problemInfo,
        children: [(0, s.jsx)(c.TextArea, {
          value: U,
          maxLength: O.iF,
          onChange: y
        }), (0, s.jsx)(N, {})]
      }) : null]
    }), (q || !h) && (0, s.jsx)(c.ModalFooter, {
      className: S.footer,
      direction: E.Z.Direction.HORIZONTAL,
      children: q ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          look: c.Button.Looks.LINK,
          color: c.Button.Colors.PRIMARY,
          onClick: () => {
            v(null), y("")
          },
          children: m.Z.Messages.BACK
        }), (0, s.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          onClick: b,
          children: m.Z.Messages.SUBMIT
        })]
      }) : (0, s.jsx)(c.Checkbox, {
        type: c.Checkbox.Types.INVERTED,
        size: 18,
        value: I,
        onChange: () => C(!I),
        children: (0, s.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: m.Z.Messages.DONT_SHOW_AGAIN
        })
      })
    })]
  })
}