"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  u = n("120356"),
  i = n.n(u),
  o = n("481060"),
  s = n("596454"),
  r = n("911969"),
  d = n("114484"),
  c = n("970184"),
  p = n("280501"),
  m = n("689938"),
  f = n("622252");

function S(e) {
  let {
    emoji: t,
    label: n,
    description: a,
    isDisabled: u,
    isOffset: o
  } = e, r = i()(f.labelContainer, {
    [f.disabled]: u,
    [f.offset]: null == t && o
  });
  return (0, l.jsxs)("div", {
    className: f.option,
    children: [null != t ? (0, l.jsx)(s.default, {
      className: f.emoji,
      emojiId: t.id,
      emojiName: t.name,
      animated: t.animated
    }) : null, (0, l.jsxs)("div", {
      className: r,
      children: [(0, l.jsx)("strong", {
        className: f.label,
        children: n
      }), null != a ? (0, l.jsx)("span", {
        className: f.description,
        children: a
      }) : null]
    })]
  })
}

function C(e) {
  let {
    emoji: t,
    label: n
  } = e;
  return (0, l.jsx)("div", {
    className: f.option,
    children: (0, l.jsxs)("div", {
      className: i()(f.value, f.singleValue),
      children: [null != t ? (0, l.jsx)(s.default, {
        className: f.emoji,
        src: t.src,
        emojiId: t.id,
        emojiName: t.name,
        animated: t.animated
      }) : null, (0, l.jsx)("span", {
        className: f.singleValueLabel,
        children: n
      })]
    })
  })
}

function v(e) {
  let {
    options: t
  } = e;
  return (0, l.jsx)("div", {
    className: f.option,
    children: (0, l.jsx)("div", {
      className: f.value,
      children: t.map((e, t) => (0, l.jsxs)("div", {
        className: f.optionTag,
        children: [null != e.emoji ? (0, l.jsx)(s.default, {
          className: f.smallEmoji,
          src: e.emoji.src,
          emojiId: e.emoji.id,
          emojiName: e.emoji.name,
          animated: e.emoji.animated
        }) : null, (0, l.jsx)("span", {
          className: f.tag,
          children: e.label
        }, e.value)]
      }, t))
    })
  })
}

function E(e) {
  let {
    type: t,
    options: n,
    id: u,
    placeholder: i,
    maxValues: s,
    minValues: E,
    disabled: N
  } = e, h = a.useMemo(() => n.filter(e => e.default).map(e => e.value), [n]), {
    state: g,
    executeStateUpdate: T,
    visualState: y,
    isDisabled: I,
    error: x
  } = (0, c.useComponentState)(e, {
    type: t,
    values: h
  }), O = s > 1, j = y === p.ActionComponentState.LOADING, [L, _] = a.useState(!1), [M, R] = a.useState(() => new Set(n.filter(e => e.default).map(e => e.value))), [A, b] = a.useState(M), U = a.useMemo(() => n.some(e => null != e.emoji), [n]);
  a.useEffect(() => {
    if ((null == g ? void 0 : g.type) === r.ComponentType.STRING_SELECT) {
      let e = new Set(g.values);
      R(e), b(e)
    } else {
      let e = new Set(h);
      R(e), b(e)
    }
  }, [u, h, g]);
  let P = a.useCallback(() => {
    A !== M && T({
      type: r.ComponentType.STRING_SELECT,
      values: Array.from(M)
    }) && b(M)
  }, [M, A, b, T]);
  a.useEffect(() => {
    if (!L) !(M.size === A.size && Array.from(A).every(e => M.has(e))) && P()
  }, [L, M, A, P]);
  let k = o.singleSelect;
  O ? k = o.multiSelect : 0 === E && (k = o.toggleSelect);
  let w = (0, o.useVariableSelect)({
    value: M,
    onChange: e => R(e),
    onSelectInteraction: k
  });
  return (0, l.jsxs)(a.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: f.container,
      children: [(0, l.jsx)(o.Select, {
        isDisabled: N || I,
        className: f.select,
        options: n.map(e => ({
          ...e,
          disabled: O && !M.has(e.value) && M.size === s
        })),
        placeholder: null != i ? i : m.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
        onClose: () => _(!1),
        onOpen: () => _(!0),
        maxVisibleItems: 5,
        closeOnSelect: !O,
        optionClassName: f.selectOption,
        renderOptionLabel: e => (0, l.jsx)(S, {
          ...e,
          isDisabled: O && !M.has(e.value) && M.size === s,
          isOffset: U
        }),
        renderOptionValue: e => O ? (0, l.jsx)(v, {
          options: e
        }) : (0, l.jsx)(C, {
          ...e[0]
        }),
        ...w
      }), j ? (0, l.jsx)("div", {
        className: f.__invalid_loading,
        children: (0, l.jsx)(o.Dots, {
          dotRadius: 3.5,
          themed: !0
        })
      }) : null]
    }), null != x ? (0, l.jsx)(d.InteractionStatusMessage, {
      ...(0, d.getFailedContent)(x),
      className: f.error
    }) : null]
  })
}