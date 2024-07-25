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

function v(e) {
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

function C(e) {
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
disabled: x
  } = e, E = r.useMemo(() => t.filter(e => e.default).map(e => e.value), [t]), {
state: I,
executeStateUpdate: N,
visualState: T,
isDisabled: g,
error: S
  } = (0, d.Ee)(e, {
type: n,
values: E
  }), b = s > 1, O = T === m.gH.LOADING, [M, j] = r.useState(!1), [y, Z] = r.useState(() => new Set(t.filter(e => e.default).map(e => e.value))), [L, R] = r.useState(y), A = r.useMemo(() => t.some(e => null != e.emoji), [t]);
  r.useEffect(() => {
if ((null == I ? void 0 : I.type) === c.re.STRING_SELECT) {
  let e = new Set(I.values);
  Z(e), R(e);
} else {
  let e = new Set(E);
  Z(e), R(e);
}
  }, [
i,
E,
I
  ]);
  let B = r.useCallback(() => {
if (L !== y)
  N({
    type: c.re.STRING_SELECT,
    values: Array.from(y)
  }) && R(y);
  }, [
y,
L,
R,
N
  ]);
  r.useEffect(() => {
if (!(M || y.size === L.size && Array.from(L).every(e => y.has(e))))
  B();
  }, [
M,
y,
L,
B
  ]);
  let P = o.singleSelect;
  b ? P = o.multiSelect : 0 === h && (P = o.toggleSelect);
  let k = (0, o.useVariableSelect)({
value: y,
onChange: e => Z(e),
onSelectInteraction: P
  });
  return (0, l.jsxs)(r.Fragment, {
children: [
  (0, l.jsxs)('div', {
    className: _.container,
    children: [
      (0, l.jsx)(o.Select, {
        isDisabled: x || g,
        className: _.select,
        options: t.map(e => ({
          ...e,
          disabled: b && !y.has(e.value) && y.size === s
        })),
        placeholder: null != a ? a : f.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
        onClose: () => j(!1),
        onOpen: () => j(!0),
        maxVisibleItems: 5,
        closeOnSelect: !b,
        optionClassName: _.selectOption,
        renderOptionLabel: e => (0, l.jsx)(p, {
          ...e,
          isDisabled: b && !y.has(e.value) && y.size === s,
          isOffset: A
        }),
        renderOptionValue: e => b ? (0, l.jsx)(C, {
          options: e
        }) : (0, l.jsx)(v, {
          ...e[0]
        }),
        ...k
      }),
      O ? (0, l.jsx)('div', {
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