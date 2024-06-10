"use strict";
n.r(t), n.d(t, {
  SelectIconSize: function() {
    return l
  },
  default: function() {
    return E
  }
}), n("47120");
var l, a, u = n("735250"),
  i = n("470079"),
  s = n("120356"),
  o = n.n(s),
  r = n("481060"),
  d = n("911969"),
  c = n("114484"),
  p = n("970184"),
  m = n("280501"),
  f = n("689938"),
  S = n("783894"),
  C = n("622252");

function v(e) {
  let {
    icon: t,
    iconSize: n
  } = e;
  return (0, u.jsx)("div", {
    className: S.iconContainer,
    style: {
      height: n,
      width: n
    },
    children: t
  })
}

function E(e) {
  let {
    selectActionComponent: t,
    queryOptions: n,
    renderIcon: l,
    renderOptionLabel: a,
    defaultValues: s
  } = e, {
    type: E,
    placeholder: N,
    maxValues: h,
    disabled: T
  } = t, [I, g] = i.useState(!1), [y, x] = i.useState(!1), [O, _] = i.useState(new Map(null == s ? void 0 : s.map(e => [e.value, e]))), [j, M] = i.useState(new Set(O.keys())), [L, R] = i.useState(() => (null != s ? s : []).map(e => e.value)), [A, b] = i.useState(0);
  i.useEffect(() => {
    let e = (null != s ? s : []).map(e => e.value);
    if (e.every(e => L.includes(e)) && L.every(t => e.includes(t))) return;
    R(e);
    let t = new Map(null == s ? void 0 : s.map(e => [e.value, e]));
    _(t), M(new Set(t.keys())), b(e => e + 1)
  }, [s, L]);
  let {
    state: U,
    executeStateUpdate: P,
    visualState: k,
    isDisabled: w,
    error: D
  } = (0, p.useComponentState)(t, {
    type: E,
    selectedOptions: Array.from(O.values())
  }), B = k === m.ActionComponentState.LOADING;
  i.useEffect(() => {
    if ((null == U ? void 0 : U.type) === d.ComponentType.USER_SELECT || (null == U ? void 0 : U.type) === d.ComponentType.ROLE_SELECT || (null == U ? void 0 : U.type) === d.ComponentType.MENTIONABLE_SELECT || (null == U ? void 0 : U.type) === d.ComponentType.CHANNEL_SELECT) {
      let e = new Map(U.selectedOptions.map(e => [e.value, e]));
      _(e), M(new Set(e.keys()))
    }
  }, [U]);
  let F = i.useCallback(() => {
    P({
      type: E,
      selectedOptions: Array.from(O.values())
    }) && M(new Set(O.keys()))
  }, [P, E, O]);
  i.useEffect(() => {
    if (!I && !y) !(O.size === j.size && Array.from(O.keys()).every(e => j.has(e))) && F()
  }, [I, y, j, O, F]);
  let G = 0 === O.size || I,
    V = {
      isDisabled: T || w,
      wrapperClassName: S.select,
      options: e => new Promise(t => {
        t(n(e))
      }),
      placeholder: G ? null != N ? N : f.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER : void 0,
      onClose: () => g(!1),
      onOpen: () => g(!0),
      onBlur: () => x(!1),
      maxVisibleItems: 5,
      optionClassName: S.__invalid_selectOption,
      renderOptionPrefix: (e, t) => {
        let {
          inPill: n
        } = t, a = n ? 16 : 24, i = l(e, a);
        return null != i ? (0, u.jsx)(v, {
          icon: i,
          iconSize: a
        }) : null
      },
      renderOptionLabel: a
    };
  return (0, u.jsxs)(i.Fragment, {
    children: [(0, u.jsxs)("div", {
      className: S.container,
      children: [h > 1 ? (0, u.jsx)(r.SearchableSelect, {
        className: S.badges,
        value: Array.from(O.values()),
        onChange: e => {
          !I && x(!0), _(new Map(e.map(e => [e.value, e])))
        },
        multi: !0,
        inputClassNames: o()({
          [S.soloInput]: 0 === O.size,
          [S.inlineInput]: O.size > 0,
          [S.hidden]: !G
        }),
        closeOnSelect: !1,
        centerCaret: !0,
        ...V
      }, A) : (0, u.jsx)(r.SearchableSelect, {
        className: (S.badges, S.singleSelect),
        value: [...O.values()][0],
        onChange: e => _(null != e ? new Map([
          [e.value, e]
        ]) : new Map),
        clearable: !0,
        centerCaret: !0,
        ...V
      }, A), B ? (0, u.jsx)("div", {
        className: S.loading,
        children: (0, u.jsx)(r.Dots, {
          dotRadius: 3.5,
          themed: !0
        })
      }) : null]
    }), null != D ? (0, u.jsx)(c.InteractionStatusMessage, {
      ...(0, c.getFailedContent)(D),
      className: C.error
    }) : null]
  })
}(a = l || (l = {}))[a.PILL_ICON_SIZE = 16] = "PILL_ICON_SIZE", a[a.ROW_ICON_SIZE = 24] = "ROW_ICON_SIZE"