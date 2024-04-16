"use strict";
n.r(l), n.d(l, {
  default: function() {
    return v
  }
}), n("47120");
var t = n("735250"),
  a = n("470079"),
  s = n("120356"),
  u = n.n(s),
  i = n("481060"),
  o = n("596454"),
  r = n("911969"),
  d = n("114484"),
  c = n("970184"),
  m = n("280501"),
  p = n("689938"),
  f = n("706130");

function S(e) {
  let {
    emoji: l,
    label: n,
    description: a,
    isDisabled: s,
    isOffset: i
  } = e, r = u()(f.labelContainer, {
    [f.disabled]: s,
    [f.offset]: null == l && i
  });
  return (0, t.jsxs)("div", {
    className: f.option,
    children: [null != l ? (0, t.jsx)(o.default, {
      className: f.emoji,
      emojiId: l.id,
      emojiName: l.name,
      animated: l.animated
    }) : null, (0, t.jsxs)("div", {
      className: r,
      children: [(0, t.jsx)("strong", {
        className: f.label,
        children: n
      }), null != a ? (0, t.jsx)("span", {
        className: f.description,
        children: a
      }) : null]
    })]
  })
}

function C(e) {
  let {
    emoji: l,
    label: n
  } = e;
  return (0, t.jsx)("div", {
    className: f.option,
    children: (0, t.jsxs)("div", {
      className: u()(f.value, f.singleValue),
      children: [null != l ? (0, t.jsx)(o.default, {
        className: f.emoji,
        src: l.src,
        emojiId: l.id,
        emojiName: l.name,
        animated: l.animated
      }) : null, (0, t.jsx)("span", {
        className: f.singleValueLabel,
        children: n
      })]
    })
  })
}

function E(e) {
  let {
    options: l
  } = e;
  return (0, t.jsx)("div", {
    className: f.option,
    children: (0, t.jsx)("div", {
      className: f.value,
      children: l.map((e, l) => (0, t.jsxs)("div", {
        className: f.optionTag,
        children: [null != e.emoji ? (0, t.jsx)(o.default, {
          className: f.smallEmoji,
          src: e.emoji.src,
          emojiId: e.emoji.id,
          emojiName: e.emoji.name,
          animated: e.emoji.animated
        }) : null, (0, t.jsx)("span", {
          className: f.tag,
          children: e.label
        }, e.value)]
      }, l))
    })
  })
}

function v(e) {
  let {
    type: l,
    options: n,
    id: s,
    placeholder: u,
    maxValues: o,
    minValues: v,
    disabled: N
  } = e, h = a.useMemo(() => n.filter(e => e.default).map(e => e.value), [n]), {
    state: T,
    executeStateUpdate: y,
    visualState: x,
    isDisabled: j,
    error: g
  } = (0, c.useComponentState)(e, {
    type: l,
    values: h
  }), O = o > 1, I = x === m.ActionComponentState.LOADING, [L, _] = a.useState(!1), [R, A] = a.useState(() => new Set(n.filter(e => e.default).map(e => e.value))), [M, b] = a.useState(R), w = a.useMemo(() => n.some(e => null != e.emoji), [n]);
  a.useEffect(() => {
    if ((null == T ? void 0 : T.type) === r.ComponentType.STRING_SELECT) {
      let e = new Set(T.values);
      A(e), b(e)
    } else {
      let e = new Set(h);
      A(e), b(e)
    }
  }, [s, h, T]);
  let U = a.useCallback(() => {
    M !== R && y({
      type: r.ComponentType.STRING_SELECT,
      values: Array.from(R)
    }) && b(R)
  }, [R, M, b, y]);
  a.useEffect(() => {
    if (!L) !(R.size === M.size && Array.from(M).every(e => R.has(e))) && U()
  }, [L, R, M, U]);
  let D = i.singleSelect;
  O ? D = i.multiSelect : 0 === v && (D = i.toggleSelect);
  let k = (0, i.useVariableSelect)({
    value: R,
    onChange: e => A(e),
    onSelectInteraction: D
  });
  return (0, t.jsxs)(a.Fragment, {
    children: [(0, t.jsxs)("div", {
      className: f.container,
      children: [(0, t.jsx)(i.Select, {
        isDisabled: N || j,
        className: f.select,
        options: n.map(e => ({
          ...e,
          disabled: O && !R.has(e.value) && R.size === o
        })),
        placeholder: null != u ? u : p.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
        onClose: () => _(!1),
        onOpen: () => _(!0),
        maxVisibleItems: 5,
        closeOnSelect: !O,
        optionClassName: f.selectOption,
        renderOptionLabel: e => (0, t.jsx)(S, {
          ...e,
          isDisabled: O && !R.has(e.value) && R.size === o,
          isOffset: w
        }),
        renderOptionValue: e => O ? (0, t.jsx)(E, {
          options: e
        }) : (0, t.jsx)(C, {
          ...e[0]
        }),
        ...k
      }), I ? (0, t.jsx)("div", {
        className: f.__invalid_loading,
        children: (0, t.jsx)(i.Dots, {
          dotRadius: 3.5,
          themed: !0
        })
      }) : null]
    }), null != g ? (0, t.jsx)(d.InteractionStatusMessage, {
      ...(0, d.getFailedContent)(g),
      className: f.error
    }) : null]
  })
}