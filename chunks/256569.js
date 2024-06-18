"use strict";
t.d(s, {
  Z: function() {
    return T
  }
}), t(47120), t(177593);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(481060),
  o = t(347469),
  c = t(853276),
  d = t(596390),
  u = t(870472),
  E = t(403655);

function _(e) {
  let {
    resizableNode: s,
    onResize: t,
    onResizeEnd: i
  } = e, l = (0, o.Z)({
    minDimension: d.tq,
    resizableDomNodeRef: s,
    onElementResize: t,
    onElementResizeEnd: i,
    orientation: o.y.VERTICAL_BOTTOM,
    throttleDuration: 16
  });
  return (0, n.jsx)("div", {
    onMouseDown: l,
    className: E.resizeHandle
  })
}
let I = i.forwardRef(function(e, s) {
  let {
    children: t,
    onFocus: l,
    onBlur: a,
    onClick: o
  } = e, c = i.useRef(null), [u, I] = i.useState(d.tq);
  return (0, n.jsxs)(r.Clickable, {
    className: E.textArea,
    onFocus: l,
    onBlur: a,
    onClick: o,
    innerRef: c,
    ignoreKeyPress: !0,
    style: {
      minHeight: u
    },
    children: [(0, n.jsx)(r.AdvancedScroller, {
      className: E.innerScroller,
      style: {
        minHeight: u - 2
      },
      ref: s,
      children: t
    }), (0, n.jsx)(_, {
      resizableNode: c,
      onResize: I,
      onResizeEnd: e => {
        I(e), null == l || l()
      }
    })]
  })
});

function T(e) {
  var s;
  let {
    initialValue: t,
    onChangeTags: l,
    onChangeNewTagValue: o,
    tagErrors: d = {},
    placeholder: _,
    className: T,
    maxTags: N
  } = e, m = i.useRef(null), S = i.useRef(null), h = i.useRef(null), g = (0, u.V)(t), {
    handlePasteEvent: C,
    handleInputChange: x,
    handleKeyDown: R,
    handleContainerKeyUp: L,
    handleRemoveTag: O,
    handleTagChangeEvent: A,
    handleSelectTag: p,
    handleUnselectTag: M,
    handleResetTagSelections: f,
    handleInputBlurEvent: D
  } = (0, u.Q)(g, {
    scrollerRef: h,
    mainInputRef: m,
    mainContainerRef: S
  }), {
    state: {
      value: v,
      tags: j,
      selections: Z,
      isSelecting: U
    }
  } = g, [G, P] = i.useState(!1), b = i.useCallback(() => {
    var e;
    P(!1), f(), null === (e = m.current) || void 0 === e || e.focus({
      preventScroll: !0
    })
  }, [f]);
  i.useEffect(() => {
    if (!G) l(j)
  }, [l, j, G]), i.useEffect(() => {
    if (!G) o(v)
  }, [o, v, G]);
  let B = i.useCallback(function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      e && b(), P(!1)
    }, [b]),
    y = i.useCallback(e => s => {
      if (s) {
        var t;
        let s = Z.includes(j[e]);
        null === (t = m.current) || void 0 === t || t.focus(), s ? M(e) : (p(e), setImmediate(() => {
          var e;
          null === (e = m.current) || void 0 === e || e.blur(), setTimeout(() => {
            var e;
            return null === (e = S.current) || void 0 === e ? void 0 : e.focus()
          }, 16)
        }))
      } else M(e, !0), P(!0)
    }, [p, M, Z, j]);
  return (0, n.jsxs)("div", {
    className: a()(E.mainContainer, T),
    ref: S,
    tabIndex: 0,
    onKeyUp: L,
    children: [(0, n.jsxs)(I, {
      ref: h,
      onClick: b,
      children: [j.map((e, s) => (0, n.jsx)(c.Z, {
        value: e,
        onChange: A(s),
        onBlur: B,
        onFocus: y(s),
        onRemove: () => O(s),
        isSelected: Z.includes(e),
        isSelecting: U,
        error: d[e],
        forceShowErrorTooltip: !G && s === j.length - 1
      }, s)), (0, n.jsx)("input", {
        className: a()(E.mainTextInput, {
          [E.isEditingOtherNodes]: G
        }),
        ref: m,
        onChange: x,
        onKeyDownCapture: R,
        onPaste: C,
        onBlur: D,
        placeholder: 0 === j.length ? _ : void 0,
        value: v
      })]
    }), null != N && (0, n.jsxs)(r.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: E.maxTags,
      children: [null !== (s = null == j ? void 0 : j.length) && void 0 !== s ? s : 0, "/", N]
    })]
  })
}