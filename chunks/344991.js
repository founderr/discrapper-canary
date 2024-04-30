"use strict";
n.r(t), n.d(t, {
  SelectIconSize: function() {
    return l
  },
  default: function() {
    return v
  }
}), n("47120");
var l, a, r = n("735250"),
  s = n("470079"),
  u = n("120356"),
  o = n.n(u),
  i = n("481060"),
  d = n("911969"),
  c = n("114484"),
  m = n("970184"),
  p = n("280501"),
  f = n("689938"),
  C = n("129876"),
  S = n("952774");

function E(e) {
  let {
    icon: t,
    iconSize: n
  } = e;
  return (0, r.jsx)("div", {
    className: C.iconContainer,
    style: {
      height: n,
      width: n
    },
    children: t
  })
}

function v(e) {
  let {
    selectActionComponent: t,
    queryOptions: n,
    renderIcon: l,
    renderOptionLabel: a,
    defaultValues: u
  } = e, {
    type: v,
    placeholder: N,
    maxValues: h,
    disabled: T
  } = t, [x, y] = s.useState(!1), [g, O] = s.useState(!1), [I, j] = s.useState(new Map(null == u ? void 0 : u.map(e => [e.value, e]))), [_, L] = s.useState(new Set(I.keys())), [M, R] = s.useState(() => (null != u ? u : []).map(e => e.value)), [A, b] = s.useState(0);
  s.useEffect(() => {
    let e = (null != u ? u : []).map(e => e.value);
    if (e.every(e => M.includes(e)) && M.every(t => e.includes(t))) return;
    R(e);
    let t = new Map(null == u ? void 0 : u.map(e => [e.value, e]));
    j(t), L(new Set(t.keys())), b(e => e + 1)
  }, [u, M]);
  let {
    state: P,
    executeStateUpdate: U,
    visualState: w,
    isDisabled: D,
    error: k
  } = (0, m.useComponentState)(t, {
    type: v,
    selectedOptions: Array.from(I.values())
  }), G = w === p.ActionComponentState.LOADING;
  s.useEffect(() => {
    if ((null == P ? void 0 : P.type) === d.ComponentType.USER_SELECT || (null == P ? void 0 : P.type) === d.ComponentType.ROLE_SELECT || (null == P ? void 0 : P.type) === d.ComponentType.MENTIONABLE_SELECT || (null == P ? void 0 : P.type) === d.ComponentType.CHANNEL_SELECT) {
      let e = new Map(P.selectedOptions.map(e => [e.value, e]));
      j(e), L(new Set(e.keys()))
    }
  }, [P]);
  let V = s.useCallback(() => {
    U({
      type: v,
      selectedOptions: Array.from(I.values())
    }) && L(new Set(I.keys()))
  }, [U, v, I]);
  s.useEffect(() => {
    if (!x && !g) !(I.size === _.size && Array.from(I.keys()).every(e => _.has(e))) && V()
  }, [x, g, _, I, V]);
  let F = 0 === I.size || x,
    B = {
      isDisabled: T || D,
      wrapperClassName: C.select,
      options: e => new Promise(t => {
        t(n(e))
      }),
      placeholder: F ? null != N ? N : f.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER : void 0,
      onClose: () => y(!1),
      onOpen: () => y(!0),
      onBlur: () => O(!1),
      maxVisibleItems: 5,
      optionClassName: C.__invalid_selectOption,
      renderOptionPrefix: (e, t) => {
        let {
          inPill: n
        } = t, a = n ? 16 : 24, s = l(e, a);
        return null != s ? (0, r.jsx)(E, {
          icon: s,
          iconSize: a
        }) : null
      },
      renderOptionLabel: a
    };
  return (0, r.jsxs)(s.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: C.container,
      children: [h > 1 ? (0, r.jsx)(i.SearchableSelect, {
        className: C.badges,
        value: Array.from(I.values()),
        onChange: e => {
          !x && O(!0), j(new Map(e.map(e => [e.value, e])))
        },
        multi: !0,
        inputClassNames: o()({
          [C.soloInput]: 0 === I.size,
          [C.inlineInput]: I.size > 0,
          [C.hidden]: !F
        }),
        closeOnSelect: !1,
        centerCaret: !0,
        ...B
      }, A) : (0, r.jsx)(i.SearchableSelect, {
        className: (C.badges, C.singleSelect),
        value: [...I.values()][0],
        onChange: e => j(null != e ? new Map([
          [e.value, e]
        ]) : new Map),
        clearable: !0,
        centerCaret: !0,
        ...B
      }, A), G ? (0, r.jsx)("div", {
        className: C.loading,
        children: (0, r.jsx)(i.Dots, {
          dotRadius: 3.5,
          themed: !0
        })
      }) : null]
    }), null != k ? (0, r.jsx)(c.InteractionStatusMessage, {
      ...(0, c.getFailedContent)(k),
      className: S.error
    }) : null]
  })
}(a = l || (l = {}))[a.PILL_ICON_SIZE = 16] = "PILL_ICON_SIZE", a[a.ROW_ICON_SIZE = 24] = "ROW_ICON_SIZE"