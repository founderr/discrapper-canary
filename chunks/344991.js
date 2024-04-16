"use strict";
t.r(n), t.d(n, {
  SelectIconSize: function() {
    return l
  },
  default: function() {
    return N
  }
}), t("47120");
var l, a, s = t("735250"),
  u = t("470079"),
  i = t("120356"),
  o = t.n(i),
  r = t("481060"),
  d = t("911969"),
  c = t("114484"),
  m = t("970184"),
  p = t("280501"),
  f = t("689938"),
  S = t("328824"),
  C = t("706130");

function E(e) {
  let {
    icon: n,
    iconSize: t
  } = e;
  return (0, s.jsx)("div", {
    className: S.iconContainer,
    style: {
      height: t,
      width: t
    },
    children: n
  })
}

function N(e) {
  let {
    selectActionComponent: n,
    queryOptions: t,
    renderIcon: l,
    renderOptionLabel: a,
    defaultValues: i
  } = e, {
    type: N,
    placeholder: v,
    maxValues: T,
    disabled: h
  } = n, [x, y] = u.useState(!1), [j, O] = u.useState(!1), [g, I] = u.useState(new Map(null == i ? void 0 : i.map(e => [e.value, e]))), [_, L] = u.useState(new Set(g.keys())), [R, M] = u.useState(() => (null != i ? i : []).map(e => e.value)), [A, b] = u.useState(0);
  u.useEffect(() => {
    let e = (null != i ? i : []).map(e => e.value);
    if (e.every(e => R.includes(e)) && R.every(n => e.includes(n))) return;
    M(e);
    let n = new Map(null == i ? void 0 : i.map(e => [e.value, e]));
    I(n), L(new Set(n.keys())), b(e => e + 1)
  }, [i, R]);
  let {
    state: w,
    executeStateUpdate: D,
    visualState: P,
    isDisabled: U,
    error: k
  } = (0, m.useComponentState)(n, {
    type: N,
    selectedOptions: Array.from(g.values())
  }), G = P === p.ActionComponentState.LOADING;
  u.useEffect(() => {
    if ((null == w ? void 0 : w.type) === d.ComponentType.USER_SELECT || (null == w ? void 0 : w.type) === d.ComponentType.ROLE_SELECT || (null == w ? void 0 : w.type) === d.ComponentType.MENTIONABLE_SELECT || (null == w ? void 0 : w.type) === d.ComponentType.CHANNEL_SELECT) {
      let e = new Map(w.selectedOptions.map(e => [e.value, e]));
      I(e), L(new Set(e.keys()))
    }
  }, [w]);
  let B = u.useCallback(() => {
    D({
      type: N,
      selectedOptions: Array.from(g.values())
    }) && L(new Set(g.keys()))
  }, [D, N, g]);
  u.useEffect(() => {
    if (!x && !j) !(g.size === _.size && Array.from(g.keys()).every(e => _.has(e))) && B()
  }, [x, j, _, g, B]);
  let V = 0 === g.size || x,
    z = {
      isDisabled: h || U,
      wrapperClassName: S.select,
      options: e => new Promise(n => {
        n(t(e))
      }),
      placeholder: V ? null != v ? v : f.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER : void 0,
      onClose: () => y(!1),
      onOpen: () => y(!0),
      onBlur: () => O(!1),
      maxVisibleItems: 5,
      optionClassName: S.__invalid_selectOption,
      renderOptionPrefix: (e, n) => {
        let {
          inPill: t
        } = n, a = t ? 16 : 24, u = l(e, a);
        return null != u ? (0, s.jsx)(E, {
          icon: u,
          iconSize: a
        }) : null
      },
      renderOptionLabel: a
    };
  return (0, s.jsxs)(u.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: S.container,
      children: [T > 1 ? (0, s.jsx)(r.SearchableSelect, {
        className: S.badges,
        value: Array.from(g.values()),
        onChange: e => {
          !x && O(!0), I(new Map(e.map(e => [e.value, e])))
        },
        multi: !0,
        inputClassNames: o()({
          [S.soloInput]: 0 === g.size,
          [S.inlineInput]: g.size > 0,
          [S.hidden]: !V
        }),
        closeOnSelect: !1,
        centerCaret: !0,
        ...z
      }, A) : (0, s.jsx)(r.SearchableSelect, {
        className: (S.badges, S.singleSelect),
        value: [...g.values()][0],
        onChange: e => I(null != e ? new Map([
          [e.value, e]
        ]) : new Map),
        clearable: !0,
        centerCaret: !0,
        ...z
      }, A), G ? (0, s.jsx)("div", {
        className: S.loading,
        children: (0, s.jsx)(r.Dots, {
          dotRadius: 3.5,
          themed: !0
        })
      }) : null]
    }), null != k ? (0, s.jsx)(c.InteractionStatusMessage, {
      ...(0, c.getFailedContent)(k),
      className: C.error
    }) : null]
  })
}(a = l || (l = {}))[a.PILL_ICON_SIZE = 16] = "PILL_ICON_SIZE", a[a.ROW_ICON_SIZE = 24] = "ROW_ICON_SIZE"