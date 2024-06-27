"use strict";
n.d(t, {
  n: function() {
    return p
  }
}), n(757143), n(411104), n(47120);
var i, r, s, o, a = n(735250),
  l = n(470079),
  u = n(120356),
  _ = n.n(u),
  c = n(372817),
  d = n(866442),
  E = n(692547),
  I = n(1561),
  T = n(993365),
  h = n(981631),
  f = n(399189);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let A = {
    side: f.side,
    top: f.top,
    "top-pill": f.topPill
  },
  N = l.forwardRef(function(e, t) {
    let {
      children: n,
      id: i,
      ...r
    } = e;
    return (0, a.jsx)("div", {
      ...r,
      ref: t,
      role: "tabpanel",
      id: m(i),
      tabIndex: -1,
      children: n
    })
  });

function m(e) {
  return "".concat(e.replace(/\s+/g, "-").toLowerCase(), "-tab")
}

function O(e, t) {
  if (null == e) return;
  let n = {};
  return "Selected" === t ? (n.backgroundColor = e, n.color = E.Z.unsafe_rawColors.WHITE_500.css, n) : ("Hover" === t && (n.backgroundColor = (0, d.wK)(e, .1)), n.color = e, n)
}(o = i || (i = {})).DEFAULT = "Default", o.HOVER = "Hover", o.SELECTED = "Selected";
class R extends(r = l.Component) {
  getStyle() {
    let {
      color: e,
      id: t,
      selectedItem: n,
      itemType: i
    } = this.props, {
      hover: r,
      active: s
    } = this.state;
    if (null != e) {
      if ("side" === i) return null != t && n === t || s ? O(e, "Selected") : r ? O(e, "Hover") : O(e);
      if ("top" === i) return n === t ? {
        borderColor: e,
        color: e
      } : r ? {
        borderColor: (0, d.wK)(e, .1),
        color: (0, d.wK)(e, .6)
      } : {
        borderColor: "transparent",
        color: (0, d.wK)(e, .4)
      };
      if ("top-pill" === i) return n === t ? {
        backgroundColor: (0, d.wK)(e, .2),
        color: e
      } : {
        backgroundColor: e,
        color: E.Z.unsafe_rawColors.WHITE_500.css
      }
    }
  }
  render() {
    let {
      children: e,
      className: t,
      id: n,
      selectedItem: i,
      color: r,
      disabled: s,
      onContextMenu: o,
      clickableRef: l,
      look: u,
      disableItemStyles: c
    } = this.props, d = this.props["aria-label"], E = i === n;
    return (0, a.jsx)(I.P, {
      className: _()(t, {
        [f.item]: !c,
        [f.brand]: "brand" === u,
        [f.selected]: null == r && E,
        [f.themed]: "grey" === u,
        [f.disabled]: null == r && s
      }),
      style: this.getStyle(),
      role: "tab",
      "aria-selected": E,
      "aria-controls": E ? m("".concat(n)) : void 0,
      "aria-disabled": s,
      tabIndex: E ? 0 : -1,
      onMouseEnter: null != r ? this.handleMouseOver : void 0,
      onClick: this.handleClick,
      onMouseLeave: null != r ? this.handleMouseOut : void 0,
      onMouseUp: null != r ? this.handleMouseUp : void 0,
      onMouseDown: this.handleMouseDown,
      onContextMenu: o,
      "aria-label": d,
      ref: l,
      children: e
    })
  }
  constructor(...e) {
    super(...e), S(this, "state", {
      hover: !1,
      active: !1
    }), S(this, "handleClick", e => {
      let {
        disabled: t,
        onClick: n,
        id: i,
        onItemSelect: r
      } = this.props;
      if (!t) null != n ? n(e) : null != r && r(i)
    }), S(this, "handleMouseDown", () => {
      let {
        color: e
      } = this.props;
      null != e && this.setState({
        active: !0
      })
    }), S(this, "handleMouseUp", () => {
      this.setState({
        active: !1
      })
    }), S(this, "handleMouseOver", () => {
      this.setState({
        hover: !0
      })
    }), S(this, "handleMouseOut", () => {
      this.setState({
        hover: !1,
        active: !1
      })
    })
  }
}
S(R, "defaultProps", {
  disabled: !1,
  look: "grey",
  disableItemStyles: !1
});
class p extends(s = l.Component) {
  render() {
    let {
      className: e,
      children: t,
      type: n = "side",
      style: i,
      "aria-label": r,
      orientation: s = "horizontal"
    } = this.props;
    return (0, a.jsx)("div", {
      ref: this.tabBarRef,
      className: _()(e, A[n]),
      style: i,
      role: "tablist",
      "aria-orientation": s,
      onKeyDown: this.handleKeyDown,
      "aria-label": r,
      children: l.Children.map(t, this.renderChildren)
    })
  }
  constructor(...e) {
    super(...e), S(this, "tabBarRef", l.createRef()), S(this, "focusManager", (0, c.E)({
      getFocusableElements: () => {
        let e = this.tabBarRef.current;
        return null != e ? Array.from(e.querySelectorAll('[role="tab"][aria-disabled="false"]')) : []
      },
      getActiveElement: () => {
        var e;
        return null === (e = this.tabBarRef.current) || void 0 === e ? void 0 : e.ownerDocument.activeElement
      }
    })), S(this, "renderChildren", e => {
      let {
        selectedItem: t,
        onItemSelect: n,
        type: i = "side",
        look: r = "grey"
      } = this.props;
      return l.isValidElement(e) ? l.cloneElement(e, {
        selectedItem: t,
        onItemSelect: n,
        itemType: i,
        look: r
      }) : null
    }), S(this, "getNodeForKeydownEvent", async e => {
      let {
        orientation: t = "horizontal"
      } = this.props, n = "vertical" === t ? h.yXg.ARROW_UP : h.yXg.ARROW_LEFT, i = "vertical" === t ? h.yXg.ARROW_DOWN : h.yXg.ARROW_RIGHT;
      switch (e.which) {
        case n:
          return this.focusManager.getPreviousFocusableElement();
        case i:
          return this.focusManager.getNextFocusableElement();
        case h.yXg.HOME:
          return this.focusManager.getFirstFocusableElement();
        case h.yXg.END:
          return this.focusManager.getLastFocusableElement()
      }
      return null
    }), S(this, "handleKeyDown", async e => {
      let t = await this.getNodeForKeydownEvent(e);
      null != t && (e.preventDefault(), t.focus())
    })
  }
}
S(p, "Header", function(e) {
  let {
    className: t,
    onClick: n,
    children: i,
    "aria-expanded": r,
    "aria-controls": s
  } = e;
  return (0, a.jsx)(I.P, {
    tabIndex: null == n ? -1 : 0,
    className: _()(f.header, t),
    onClick: n,
    "aria-expanded": r,
    "aria-controls": s,
    focusProps: {
      offset: {
        top: -6
      }
    },
    children: (0, a.jsx)(T.x, {
      variant: "eyebrow",
      color: "none",
      className: f.headerText,
      children: i
    })
  })
}), S(p, "Item", R), S(p, "Separator", function(e) {
  let {
    style: t
  } = e;
  return (0, a.jsx)("div", {
    className: f.separator,
    style: t
  })
}), S(p, "Panel", N)