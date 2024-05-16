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
  o = n("120356"),
  s = n.n(o),
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
    defaultValues: o
  } = e, {
    type: E,
    placeholder: N,
    maxValues: h,
    disabled: g
  } = t, [T, y] = i.useState(!1), [I, x] = i.useState(!1), [O, j] = i.useState(new Map(null == o ? void 0 : o.map(e => [e.value, e]))), [L, _] = i.useState(new Set(O.keys())), [M, R] = i.useState(() => (null != o ? o : []).map(e => e.value)), [A, b] = i.useState(0);
  i.useEffect(() => {
    let e = (null != o ? o : []).map(e => e.value);
    if (e.every(e => M.includes(e)) && M.every(t => e.includes(t))) return;
    R(e);
    let t = new Map(null == o ? void 0 : o.map(e => [e.value, e]));
    j(t), _(new Set(t.keys())), b(e => e + 1)
  }, [o, M]);
  let {
    state: U,
    executeStateUpdate: P,
    visualState: k,
    isDisabled: w,
    error: D
  } = (0, p.useComponentState)(t, {
    type: E,
    selectedOptions: Array.from(O.values())
  }), G = k === m.ActionComponentState.LOADING;
  i.useEffect(() => {
    if ((null == U ? void 0 : U.type) === d.ComponentType.USER_SELECT || (null == U ? void 0 : U.type) === d.ComponentType.ROLE_SELECT || (null == U ? void 0 : U.type) === d.ComponentType.MENTIONABLE_SELECT || (null == U ? void 0 : U.type) === d.ComponentType.CHANNEL_SELECT) {
      let e = new Map(U.selectedOptions.map(e => [e.value, e]));
      j(e), _(new Set(e.keys()))
    }
  }, [U]);
  let F = i.useCallback(() => {
    P({
      type: E,
      selectedOptions: Array.from(O.values())
    }) && _(new Set(O.keys()))
  }, [P, E, O]);
  i.useEffect(() => {
    if (!T && !I) !(O.size === L.size && Array.from(O.keys()).every(e => L.has(e))) && F()
  }, [T, I, L, O, F]);
  let V = 0 === O.size || T,
    B = {
      isDisabled: g || w,
      wrapperClassName: S.select,
      options: e => new Promise(t => {
        t(n(e))
      }),
      placeholder: V ? null != N ? N : f.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER : void 0,
      onClose: () => y(!1),
      onOpen: () => y(!0),
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
          !T && x(!0), j(new Map(e.map(e => [e.value, e])))
        },
        multi: !0,
        inputClassNames: s()({
          [S.soloInput]: 0 === O.size,
          [S.inlineInput]: O.size > 0,
          [S.hidden]: !V
        }),
        closeOnSelect: !1,
        centerCaret: !0,
        ...B
      }, A) : (0, u.jsx)(r.SearchableSelect, {
        className: (S.badges, S.singleSelect),
        value: [...O.values()][0],
        onChange: e => j(null != e ? new Map([
          [e.value, e]
        ]) : new Map),
        clearable: !0,
        centerCaret: !0,
        ...B
      }, A), G ? (0, u.jsx)("div", {
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