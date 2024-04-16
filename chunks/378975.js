"use strict";
t.r(n), t.d(n, {
  default: function() {
    return N
  }
}), t("47120");
var l = t("735250"),
  a = t("470079"),
  s = t("120356"),
  u = t.n(s),
  i = t("481060"),
  o = t("596454"),
  r = t("911969"),
  d = t("114484"),
  c = t("970184"),
  m = t("280501"),
  p = t("689938"),
  f = t("706130");

function S(e) {
  let {
    emoji: n,
    label: t,
    description: a,
    isDisabled: s,
    isOffset: i
  } = e, r = u()(f.labelContainer, {
    [f.disabled]: s,
    [f.offset]: null == n && i
  });
  return (0, l.jsxs)("div", {
    className: f.option,
    children: [null != n ? (0, l.jsx)(o.default, {
      className: f.emoji,
      emojiId: n.id,
      emojiName: n.name,
      animated: n.animated
    }) : null, (0, l.jsxs)("div", {
      className: r,
      children: [(0, l.jsx)("strong", {
        className: f.label,
        children: t
      }), null != a ? (0, l.jsx)("span", {
        className: f.description,
        children: a
      }) : null]
    })]
  })
}

function C(e) {
  let {
    emoji: n,
    label: t
  } = e;
  return (0, l.jsx)("div", {
    className: f.option,
    children: (0, l.jsxs)("div", {
      className: u()(f.value, f.singleValue),
      children: [null != n ? (0, l.jsx)(o.default, {
        className: f.emoji,
        src: n.src,
        emojiId: n.id,
        emojiName: n.name,
        animated: n.animated
      }) : null, (0, l.jsx)("span", {
        className: f.singleValueLabel,
        children: t
      })]
    })
  })
}

function E(e) {
  let {
    options: n
  } = e;
  return (0, l.jsx)("div", {
    className: f.option,
    children: (0, l.jsx)("div", {
      className: f.value,
      children: n.map((e, n) => (0, l.jsxs)("div", {
        className: f.optionTag,
        children: [null != e.emoji ? (0, l.jsx)(o.default, {
          className: f.smallEmoji,
          src: e.emoji.src,
          emojiId: e.emoji.id,
          emojiName: e.emoji.name,
          animated: e.emoji.animated
        }) : null, (0, l.jsx)("span", {
          className: f.tag,
          children: e.label
        }, e.value)]
      }, n))
    })
  })
}

function N(e) {
  let {
    type: n,
    options: t,
    id: s,
    placeholder: u,
    maxValues: o,
    minValues: N,
    disabled: v
  } = e, T = a.useMemo(() => t.filter(e => e.default).map(e => e.value), [t]), {
    state: h,
    executeStateUpdate: x,
    visualState: y,
    isDisabled: j,
    error: O
  } = (0, c.useComponentState)(e, {
    type: n,
    values: T
  }), g = o > 1, I = y === m.ActionComponentState.LOADING, [_, L] = a.useState(!1), [R, M] = a.useState(() => new Set(t.filter(e => e.default).map(e => e.value))), [A, b] = a.useState(R), w = a.useMemo(() => t.some(e => null != e.emoji), [t]);
  a.useEffect(() => {
    if ((null == h ? void 0 : h.type) === r.ComponentType.STRING_SELECT) {
      let e = new Set(h.values);
      M(e), b(e)
    } else {
      let e = new Set(T);
      M(e), b(e)
    }
  }, [s, T, h]);
  let D = a.useCallback(() => {
    A !== R && x({
      type: r.ComponentType.STRING_SELECT,
      values: Array.from(R)
    }) && b(R)
  }, [R, A, b, x]);
  a.useEffect(() => {
    if (!_) !(R.size === A.size && Array.from(A).every(e => R.has(e))) && D()
  }, [_, R, A, D]);
  let P = i.singleSelect;
  g ? P = i.multiSelect : 0 === N && (P = i.toggleSelect);
  let U = (0, i.useVariableSelect)({
    value: R,
    onChange: e => M(e),
    onSelectInteraction: P
  });
  return (0, l.jsxs)(a.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: f.container,
      children: [(0, l.jsx)(i.Select, {
        isDisabled: v || j,
        className: f.select,
        options: t.map(e => ({
          ...e,
          disabled: g && !R.has(e.value) && R.size === o
        })),
        placeholder: null != u ? u : p.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
        onClose: () => L(!1),
        onOpen: () => L(!0),
        maxVisibleItems: 5,
        closeOnSelect: !g,
        optionClassName: f.selectOption,
        renderOptionLabel: e => (0, l.jsx)(S, {
          ...e,
          isDisabled: g && !R.has(e.value) && R.size === o,
          isOffset: w
        }),
        renderOptionValue: e => g ? (0, l.jsx)(E, {
          options: e
        }) : (0, l.jsx)(C, {
          ...e[0]
        }),
        ...U
      }), I ? (0, l.jsx)("div", {
        className: f.__invalid_loading,
        children: (0, l.jsx)(i.Dots, {
          dotRadius: 3.5,
          themed: !0
        })
      }) : null]
    }), null != O ? (0, l.jsx)(d.InteractionStatusMessage, {
      ...(0, d.getFailedContent)(O),
      className: f.error
    }) : null]
  })
}