n.r(l), n(47120), n(757143);
var t = n(735250),
  s = n(470079),
  a = n(120356),
  o = n.n(a),
  r = n(225857),
  i = n(290843),
  c = n(692547),
  u = n(481060),
  d = n(881052),
  h = n(186523),
  C = n(246364),
  E = n(915509),
  I = n(592286),
  m = n(689938),
  x = n(370350);
let g = "MULTIPLE_CHOICE",
  M = e => {
    let {
      choice: l,
      index: n,
      onChange: a,
      onClear: c,
      onReorder: d,
      isDropHovered: C
    } = e, E = s.useRef(null), I = s.useRef(null), [, M, N] = (0, r.c)({
      type: g,
      item: {
        choice: l,
        index: n
      },
      end: (e, l) => {
        null != e && !l.didDrop() && d(e.choice, null, !0)
      }
    }), [, p] = (0, i.L)({
      accept: g,
      hover: (e, l) => {
        var t;
        let {
          index: s
        } = e, a = null === (t = E.current) || void 0 === t ? void 0 : t.getBoundingClientRect(), o = l.getClientOffset();
        if (null == a || null == o) return;
        let r = (a.bottom - a.top) / 2,
          i = o.y - a.top;
        (!(s < n) || !(i < r)) && (!(s > n) || !(i > r)) && d(e.choice, n, !1)
      },
      drop: e => {
        d(e.choice, n, !0)
      }
    });
    return s.useLayoutEffect(() => (M(I), N(p(E)), () => {
      M(null), p(null)
    }), [M, p, N]), (0, t.jsxs)("div", {
      ref: E,
      className: o()(x.draggableInputContainer, {
        [x.dragging]: C
      }),
      "data-dnd-name": l,
      children: [(0, t.jsx)("div", {
        className: x.radioIconEmptyContainer,
        children: (0, t.jsx)(h.Z, {
          height: 20,
          width: 20,
          className: x.radioIconEmpty
        })
      }), (0, t.jsxs)("div", {
        className: x.inputWrapper,
        children: [(0, t.jsx)(u.TextInput, {
          autoFocus: !0,
          onChange: e => a(e),
          placeholder: m.Z.Messages.MEMBER_VERIFICATION_MULTIPLE_CHOICE_PLACEHOLDER.format({
            index: n + 1
          }),
          value: l
        }), (0, t.jsx)(u.Button, {
          className: x.clearButton,
          onClick: c,
          look: u.Button.Looks.BLANK,
          size: u.Button.Sizes.NONE,
          children: (0, t.jsx)(u.CircleXIcon, {
            size: "md",
            color: "currentColor",
            className: x.clearIcon
          })
        })]
      }), (0, t.jsx)("div", {
        ref: I,
        className: x.dragContainer,
        "data-dnd-name": l,
        children: (0, t.jsx)(u.DragIcon, {
          size: "xs",
          color: "currentColor",
          className: x.dragIcon
        })
      })]
    })
  };
l.default = function(e) {
  var l, n;
  let {
    field: a,
    onSave: o,
    onClose: r
  } = e, [i, h] = s.useState(null !== (l = null == a ? void 0 : a.label) && void 0 !== l ? l : ""), [g, N] = s.useState(null !== (n = null == a ? void 0 : a.choices) && void 0 !== n ? n : [""]), [p, R] = s.useState(null), [_, j] = s.useState(null), v = (e, l) => {
    null != p && R(null);
    let n = e.replace(/(\r\n|\n|\r)/g, " ");
    n.length > I.au && (n = n.slice(0, I.au));
    let t = [...g];
    t[l] = n, N(t)
  }, L = (e, l, n) => {
    if (null == g) return;
    null != p && R(null);
    let t = g.indexOf(e),
      s = [...g];
    null != l && l !== t && (s.splice(t, 1), s.splice(l, 0, e), N(s)), n ? null !== l && j(null) : l !== _ && j(l)
  }, f = e => {
    null != p && R(null);
    let l = [...g.slice(0, e), ...g.slice(e + 1)];
    N(0 === l.length ? [""] : l)
  }, B = async () => {
    null != p && R(null);
    let e = i.trim();
    if ("" === e) {
      R(m.Z.Messages.MEMBER_VERIFICATION_FIELD_QUESTION_REQUIRED_ERROR);
      return
    }
    if (0 === g.map(e => e.trim()).filter(e => "" !== e).length) {
      R(m.Z.Messages.MEMBER_VERIFICATION_CHOICES_REQUIRED_ERROR);
      return
    }
    let l = {
      field_type: C.QJ.MULTIPLE_CHOICE,
      label: e,
      choices: g,
      required: !0
    };
    try {
      await o(l), r()
    } catch (e) {
      R(new d.Hx(e).getAnyErrorMessage())
    }
  };
  return (0, t.jsxs)(E.Z, {
    ...e,
    errorText: p,
    title: m.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
    onConfirm: B,
    onCancel: r,
    children: [(0, t.jsx)(u.TextInput, {
      autoFocus: !0,
      className: x.spacedItem,
      onChange: e => {
        null != p && R(null);
        let l = e.replace(/(\r\n|\n|\r)/g, " ");
        l.length > I.XN && (l = e.slice(0, I.XN)), h(l)
      },
      placeholder: m.Z.Messages.MEMBER_VERIFICATION_FIELD_QUESTION,
      value: i
    }), (0, t.jsx)("div", {
      className: x.divider
    }), g.map((e, l) => (0, t.jsx)(M, {
      choice: e,
      index: l,
      onChange: e => v(e, l),
      onClear: () => f(l),
      onReorder: L,
      isDropHovered: l === _
    }, "choice-".concat(l))), g.length !== I.mb && (0, t.jsxs)("div", {
      className: x.addItemContainer,
      children: [(0, t.jsx)(u.CirclePlusIcon, {
        size: "custom",
        height: 17,
        width: 17,
        color: c.Z.unsafe_rawColors.BLUE_345.css
      }), (0, t.jsx)(u.Clickable, {
        className: x.addItemButton,
        onClick: () => {
          null != p && R(null), g.length !== I.mb && N([...g, ""])
        },
        children: (0, t.jsx)(u.Text, {
          color: "text-link",
          variant: "text-md/normal",
          children: m.Z.Messages.MEMBER_VERIFICATION_MULTIPLE_CHOICE_ADD
        })
      })]
    })]
  })
}