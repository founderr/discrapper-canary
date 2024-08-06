t.d(n, {
  Z: function() {
return h;
  }
}), t(47120);
var l = t(735250),
  r = t(470079),
  i = t(120356),
  a = t.n(i),
  o = t(481060),
  s = t(596454),
  c = t(911969),
  u = t(868819),
  d = t(970184),
  m = t(280501),
  f = t(689938),
  _ = t(184298);

function p(e) {
  let {
emoji: n,
label: t,
description: r,
isDisabled: i,
isOffset: o
  } = e, c = a()(_.labelContainer, {
[_.disabled]: i,
[_.offset]: null == n && o
  });
  return (0, l.jsxs)('div', {
className: _.option,
children: [
  null != n ? (0, l.jsx)(s.Z, {
    className: _.emoji,
    emojiId: n.id,
    emojiName: n.name,
    animated: n.animated
  }) : null,
  (0, l.jsxs)('div', {
    className: c,
    children: [
      (0, l.jsx)('strong', {
        className: _.label,
        children: t
      }),
      null != r ? (0, l.jsx)('span', {
        className: _.description,
        children: r
      }) : null
    ]
  })
]
  });
}

function C(e) {
  let {
emoji: n,
label: t
  } = e;
  return (0, l.jsx)('div', {
className: _.option,
children: (0, l.jsxs)('div', {
  className: a()(_.value, _.singleValue),
  children: [
    null != n ? (0, l.jsx)(s.Z, {
      className: _.emoji,
      src: n.src,
      emojiId: n.id,
      emojiName: n.name,
      animated: n.animated
    }) : null,
    (0, l.jsx)('span', {
      className: _.singleValueLabel,
      children: t
    })
  ]
})
  });
}

function v(e) {
  let {
options: n
  } = e;
  return (0, l.jsx)('div', {
className: _.option,
children: (0, l.jsx)('div', {
  className: _.value,
  children: n.map((e, n) => (0, l.jsxs)('div', {
    className: _.optionTag,
    children: [
      null != e.emoji ? (0, l.jsx)(s.Z, {
        className: _.smallEmoji,
        src: e.emoji.src,
        emojiId: e.emoji.id,
        emojiName: e.emoji.name,
        animated: e.emoji.animated
      }) : null,
      (0, l.jsx)('span', {
        className: _.tag,
        children: e.label
      }, e.value)
    ]
  }, n))
})
  });
}

function h(e) {
  let {
type: n,
options: t,
id: i,
placeholder: a,
maxValues: s,
minValues: h,
disabled: E
  } = e, x = r.useMemo(() => t.filter(e => e.default).map(e => e.value), [t]), {
state: I,
executeStateUpdate: T,
visualState: N,
isDisabled: g,
error: S
  } = (0, d.Ee)(e, {
type: n,
values: x
  }), O = s > 1, b = N === m.gH.LOADING, [M, L] = r.useState(!1), [Z, y] = r.useState(() => new Set(t.filter(e => e.default).map(e => e.value))), [j, A] = r.useState(Z), R = r.useMemo(() => t.some(e => null != e.emoji), [t]);
  r.useEffect(() => {
if ((null == I ? void 0 : I.type) === c.re.STRING_SELECT) {
  let e = new Set(I.values);
  y(e), A(e);
} else {
  let e = new Set(x);
  y(e), A(e);
}
  }, [
i,
x,
I
  ]);
  let P = r.useCallback(() => {
if (j !== Z)
  T({
    type: c.re.STRING_SELECT,
    values: Array.from(Z)
  }) && A(Z);
  }, [
Z,
j,
A,
T
  ]);
  r.useEffect(() => {
if (!(M || Z.size === j.size && Array.from(j).every(e => Z.has(e))))
  P();
  }, [
M,
Z,
j,
P
  ]);
  let U = o.singleSelect;
  O ? U = o.multiSelect : 0 === h && (U = o.toggleSelect);
  let B = (0, o.useVariableSelect)({
value: Z,
onChange: e => y(e),
onSelectInteraction: U
  });
  return (0, l.jsxs)(r.Fragment, {
children: [
  (0, l.jsxs)('div', {
    className: _.container,
    children: [
      (0, l.jsx)(o.Select, {
        isDisabled: E || g,
        className: _.select,
        options: t.map(e => ({
          ...e,
          disabled: O && !Z.has(e.value) && Z.size === s
        })),
        placeholder: null != a ? a : f.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
        onClose: () => L(!1),
        onOpen: () => L(!0),
        maxVisibleItems: 5,
        closeOnSelect: !O,
        optionClassName: _.selectOption,
        renderOptionLabel: e => (0, l.jsx)(p, {
          ...e,
          isDisabled: O && !Z.has(e.value) && Z.size === s,
          isOffset: R
        }),
        renderOptionValue: e => O ? (0, l.jsx)(v, {
          options: e
        }) : (0, l.jsx)(C, {
          ...e[0]
        }),
        ...B
      }),
      b ? (0, l.jsx)('div', {
        className: _.__invalid_loading,
        children: (0, l.jsx)(o.Dots, {
          dotRadius: 3.5,
          themed: !0
        })
      }) : null
    ]
  }),
  null != S ? (0, l.jsx)(u.st, {
    ...(0, u.c4)(S),
    className: _.error
  }) : null
]
  });
}