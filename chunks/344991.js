"use strict";
t.r(n), t.d(n, {
  SelectIconSize: function() {
    return l
  },
  default: function() {
    return v
  }
}), t("47120");
var l, a, r = t("735250"),
  u = t("470079"),
  s = t("120356"),
  o = t.n(s),
  i = t("481060"),
  d = t("911969"),
  c = t("114484"),
  m = t("970184"),
  p = t("280501"),
  f = t("689938"),
  C = t("129876"),
  S = t("952774");

function E(e) {
  let {
    icon: n,
    iconSize: t
  } = e;
  return (0, r.jsx)("div", {
    className: C.iconContainer,
    style: {
      height: t,
      width: t
    },
    children: n
  })
}

function v(e) {
  let {
    selectActionComponent: n,
    queryOptions: t,
    renderIcon: l,
    renderOptionLabel: a,
    defaultValues: s
  } = e, {
    type: v,
    placeholder: N,
    maxValues: h,
    disabled: T
  } = n, [g, x] = u.useState(!1), [y, O] = u.useState(!1), [I, j] = u.useState(new Map(null == s ? void 0 : s.map(e => [e.value, e]))), [_, L] = u.useState(new Set(I.keys())), [M, R] = u.useState(() => (null != s ? s : []).map(e => e.value)), [A, b] = u.useState(0);
  u.useEffect(() => {
    let e = (null != s ? s : []).map(e => e.value);
    if (e.every(e => M.includes(e)) && M.every(n => e.includes(n))) return;
    R(e);
    let n = new Map(null == s ? void 0 : s.map(e => [e.value, e]));
    j(n), L(new Set(n.keys())), b(e => e + 1)
  }, [s, M]);
  let {
    state: P,
    executeStateUpdate: U,
    visualState: w,
    isDisabled: D,
    error: k
  } = (0, m.useComponentState)(n, {
    type: v,
    selectedOptions: Array.from(I.values())
  }), G = w === p.ActionComponentState.LOADING;
  u.useEffect(() => {
    if ((null == P ? void 0 : P.type) === d.ComponentType.USER_SELECT || (null == P ? void 0 : P.type) === d.ComponentType.ROLE_SELECT || (null == P ? void 0 : P.type) === d.ComponentType.MENTIONABLE_SELECT || (null == P ? void 0 : P.type) === d.ComponentType.CHANNEL_SELECT) {
      let e = new Map(P.selectedOptions.map(e => [e.value, e]));
      j(e), L(new Set(e.keys()))
    }
  }, [P]);
  let V = u.useCallback(() => {
    U({
      type: v,
      selectedOptions: Array.from(I.values())
    }) && L(new Set(I.keys()))
  }, [U, v, I]);
  u.useEffect(() => {
    if (!g && !y) !(I.size === _.size && Array.from(I.keys()).every(e => _.has(e))) && V()
  }, [g, y, _, I, V]);
  let F = 0 === I.size || g,
    B = {
      isDisabled: T || D,
      wrapperClassName: C.select,
      options: e => new Promise(n => {
        n(t(e))
      }),
      placeholder: F ? null != N ? N : f.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER : void 0,
      onClose: () => x(!1),
      onOpen: () => x(!0),
      onBlur: () => O(!1),
      maxVisibleItems: 5,
      optionClassName: C.__invalid_selectOption,
      renderOptionPrefix: (e, n) => {
        let {
          inPill: t
        } = n, a = t ? 16 : 24, u = l(e, a);
        return null != u ? (0, r.jsx)(E, {
          icon: u,
          iconSize: a
        }) : null
      },
      renderOptionLabel: a
    };
  return (0, r.jsxs)(u.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: C.container,
      children: [h > 1 ? (0, r.jsx)(i.SearchableSelect, {
        className: C.badges,
        value: Array.from(I.values()),
        onChange: e => {
          !g && O(!0), j(new Map(e.map(e => [e.value, e])))
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