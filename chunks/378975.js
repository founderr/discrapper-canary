"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  r = n("120356"),
  s = n.n(r),
  u = n("481060"),
  o = n("596454"),
  i = n("911969"),
  d = n("114484"),
  c = n("970184"),
  m = n("280501"),
  p = n("689938"),
  f = n("952774");

function C(e) {
  let {
    emoji: t,
    label: n,
    description: a,
    isDisabled: r,
    isOffset: u
  } = e, i = s()(f.labelContainer, {
    [f.disabled]: r,
    [f.offset]: null == t && u
  });
  return (0, l.jsxs)("div", {
    className: f.option,
    children: [null != t ? (0, l.jsx)(o.default, {
      className: f.emoji,
      emojiId: t.id,
      emojiName: t.name,
      animated: t.animated
    }) : null, (0, l.jsxs)("div", {
      className: i,
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

function S(e) {
  let {
    emoji: t,
    label: n
  } = e;
  return (0, l.jsx)("div", {
    className: f.option,
    children: (0, l.jsxs)("div", {
      className: s()(f.value, f.singleValue),
      children: [null != t ? (0, l.jsx)(o.default, {
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

function E(e) {
  let {
    options: t
  } = e;
  return (0, l.jsx)("div", {
    className: f.option,
    children: (0, l.jsx)("div", {
      className: f.value,
      children: t.map((e, t) => (0, l.jsxs)("div", {
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
      }, t))
    })
  })
}

function v(e) {
  let {
    type: t,
    options: n,
    id: r,
    placeholder: s,
    maxValues: o,
    minValues: v,
    disabled: N
  } = e, h = a.useMemo(() => n.filter(e => e.default).map(e => e.value), [n]), {
    state: T,
    executeStateUpdate: x,
    visualState: y,
    isDisabled: g,
    error: O
  } = (0, c.useComponentState)(e, {
    type: t,
    values: h
  }), I = o > 1, j = y === m.ActionComponentState.LOADING, [_, L] = a.useState(!1), [M, R] = a.useState(() => new Set(n.filter(e => e.default).map(e => e.value))), [A, b] = a.useState(M), P = a.useMemo(() => n.some(e => null != e.emoji), [n]);
  a.useEffect(() => {
    if ((null == T ? void 0 : T.type) === i.ComponentType.STRING_SELECT) {
      let e = new Set(T.values);
      R(e), b(e)
    } else {
      let e = new Set(h);
      R(e), b(e)
    }
  }, [r, h, T]);
  let U = a.useCallback(() => {
    A !== M && x({
      type: i.ComponentType.STRING_SELECT,
      values: Array.from(M)
    }) && b(M)
  }, [M, A, b, x]);
  a.useEffect(() => {
    if (!_) !(M.size === A.size && Array.from(A).every(e => M.has(e))) && U()
  }, [_, M, A, U]);
  let w = u.singleSelect;
  I ? w = u.multiSelect : 0 === v && (w = u.toggleSelect);
  let D = (0, u.useVariableSelect)({
    value: M,
    onChange: e => R(e),
    onSelectInteraction: w
  });
  return (0, l.jsxs)(a.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: f.container,
      children: [(0, l.jsx)(u.Select, {
        isDisabled: N || g,
        className: f.select,
        options: n.map(e => ({
          ...e,
          disabled: I && !M.has(e.value) && M.size === o
        })),
        placeholder: null != s ? s : p.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
        onClose: () => L(!1),
        onOpen: () => L(!0),
        maxVisibleItems: 5,
        closeOnSelect: !I,
        optionClassName: f.selectOption,
        renderOptionLabel: e => (0, l.jsx)(C, {
          ...e,
          isDisabled: I && !M.has(e.value) && M.size === o,
          isOffset: P
        }),
        renderOptionValue: e => I ? (0, l.jsx)(E, {
          options: e
        }) : (0, l.jsx)(S, {
          ...e[0]
        }),
        ...D
      }), j ? (0, l.jsx)("div", {
        className: f.__invalid_loading,
        children: (0, l.jsx)(u.Dots, {
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