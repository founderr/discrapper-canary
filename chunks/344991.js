t.d(n, {
  ZP: function() {
return h;
  },
  tE: function() {
return l;
  }
}), t(47120);
var l, r, i = t(735250),
  a = t(470079),
  o = t(120356),
  s = t.n(o),
  c = t(481060),
  u = t(911969),
  d = t(868819),
  m = t(970184),
  f = t(280501),
  _ = t(689938),
  p = t(780836),
  C = t(184298);

function v(e) {
  let {
icon: n,
iconSize: t
  } = e;
  return (0, i.jsx)('div', {
className: p.iconContainer,
style: {
  height: t,
  width: t
},
children: n
  });
}

function h(e) {
  let {
selectActionComponent: n,
queryOptions: t,
renderIcon: l,
renderOptionLabel: r,
defaultValues: o
  } = e, {
type: h,
placeholder: E,
maxValues: x,
disabled: I
  } = n, [T, g] = a.useState(!1), [N, S] = a.useState(!1), [b, O] = a.useState(new Map(null == o ? void 0 : o.map(e => [
e.value,
e
  ]))), [M, Z] = a.useState(new Set(b.keys())), [L, y] = a.useState(() => (null != o ? o : []).map(e => e.value)), [j, A] = a.useState(0);
  a.useEffect(() => {
let e = (null != o ? o : []).map(e => e.value);
if (e.every(e => L.includes(e)) && L.every(n => e.includes(n)))
  return;
y(e);
let n = new Map(null == o ? void 0 : o.map(e => [
  e.value,
  e
]));
O(n), Z(new Set(n.keys())), A(e => e + 1);
  }, [
o,
L
  ]);
  let {
state: R,
executeStateUpdate: P,
visualState: U,
isDisabled: B,
error: k
  } = (0, m.Ee)(n, {
type: h,
selectedOptions: Array.from(b.values())
  }), w = U === f.gH.LOADING;
  a.useEffect(() => {
if ((null == R ? void 0 : R.type) === u.re.USER_SELECT || (null == R ? void 0 : R.type) === u.re.ROLE_SELECT || (null == R ? void 0 : R.type) === u.re.MENTIONABLE_SELECT || (null == R ? void 0 : R.type) === u.re.CHANNEL_SELECT) {
  let e = new Map(R.selectedOptions.map(e => [
    e.value,
    e
  ]));
  O(e), Z(new Set(e.keys()));
}
  }, [R]);
  let G = a.useCallback(() => {
P({
  type: h,
  selectedOptions: Array.from(b.values())
}) && Z(new Set(b.keys()));
  }, [
P,
h,
b
  ]);
  a.useEffect(() => {
if (!(T || N || b.size === M.size && Array.from(b.keys()).every(e => M.has(e))))
  G();
  }, [
T,
N,
M,
b,
G
  ]);
  let D = 0 === b.size || T,
H = {
  isDisabled: I || B,
  wrapperClassName: p.select,
  options: e => new Promise(n => {
    n(t(e));
  }),
  placeholder: D ? null != E ? E : _.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER : void 0,
  onClose: () => g(!1),
  onOpen: () => g(!0),
  onBlur: () => S(!1),
  maxVisibleItems: 5,
  optionClassName: p.__invalid_selectOption,
  renderOptionPrefix: (e, n) => {
    let {
      inPill: t
    } = n, r = t ? 16 : 24, a = l(e, r);
    return null != a ? (0, i.jsx)(v, {
      icon: a,
      iconSize: r
    }) : null;
  },
  renderOptionLabel: r
};
  return (0, i.jsxs)(a.Fragment, {
children: [
  (0, i.jsxs)('div', {
    className: p.container,
    children: [
      x > 1 ? (0, i.jsx)(c.SearchableSelect, {
        className: p.badges,
        value: Array.from(b.values()),
        onChange: e => {
          !T && S(!0), O(new Map(e.map(e => [
            e.value,
            e
          ])));
        },
        multi: !0,
        inputClassNames: s()({
          [p.soloInput]: 0 === b.size,
          [p.inlineInput]: b.size > 0,
          [p.hidden]: !D
        }),
        closeOnSelect: !1,
        centerCaret: !0,
        ...H
      }, j) : (0, i.jsx)(c.SearchableSelect, {
        className: (p.badges, p.singleSelect),
        value: [...b.values()][0],
        onChange: e => O(null != e ? new Map([
          [
            e.value,
            e
          ]
        ]) : new Map()),
        clearable: !0,
        centerCaret: !0,
        ...H
      }, j),
      w ? (0, i.jsx)('div', {
        className: p.loading,
        children: (0, i.jsx)(c.Dots, {
          dotRadius: 3.5,
          themed: !0
        })
      }) : null
    ]
  }),
  null != k ? (0, i.jsx)(d.st, {
    ...(0, d.c4)(k),
    className: C.error
  }) : null
]
  });
}
(r = l || (l = {}))[r.PILL_ICON_SIZE = 16] = 'PILL_ICON_SIZE', r[r.ROW_ICON_SIZE = 24] = 'ROW_ICON_SIZE';