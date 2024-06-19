n.d(e, {
  Pz: function() {
    return m
  },
  am: function() {
    return g
  }
}), n(47120);
var s, i = n(735250),
  o = n(470079),
  r = n(120356),
  l = n.n(r),
  a = n(481060),
  c = n(996753),
  u = n(100320);

function h(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t
}
let p = {
  CENTER: u.alignCenter,
  LEFT: u.alignLeft
};
class d extends(s = o.PureComponent) {
  componentDidUpdate(t) {
    let {
      selectedIndex: e
    } = this.props;
    t.selectedIndex !== e && this.handleSelectedIndexChange(e)
  }
  render() {
    let {
      renderItem: t,
      items: e,
      vertical: n,
      paginationContainerClass: s,
      align: r
    } = this.props, c = n ? u.verticalPaginationItemContainer : u.horizontalPaginationItemContainer;
    return (0, i.jsx)(a.AdvancedScrollerAuto, {
      orientation: n ? "vertical" : "horizontal",
      className: l()(c, s, r),
      ref: this.handleSetScrollerRef,
      children: e.map((e, n) => o.cloneElement(t(e, n), {
        onClick: () => this.handlePageClick(n),
        key: n,
        ref: t => {
          this._paginationItemRefs[n] = t
        }
      }))
    })
  }
  constructor(...t) {
    super(...t), h(this, "_scrollerRef", null), h(this, "_paginationItemRefs", []), h(this, "handleSetScrollerRef", t => {
      this._scrollerRef = t
    }), h(this, "handleSelectedIndexChange", t => {
      let e = this._scrollerRef;
      if (null == e) return;
      let n = this._paginationItemRefs[t];
      if (null != n) e.scrollIntoViewNode({
        node: n,
        animate: !0,
        padding: this.props.scrollToPadding
      })
    }), h(this, "handlePageClick", t => {
      let {
        onSetItem: e
      } = this.props;
      e(t)
    })
  }
}
h(d, "Align", p), h(d, "defaultProps", {
  scrollToPadding: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  align: p.CENTER
});
class g extends o.PureComponent {
  render() {
    let {
      className: t
    } = this.props;
    return (0, i.jsx)(a.Button, {
      look: a.Button.Looks.BLANK,
      size: a.Button.Sizes.NONE,
      className: l()(u.prevButtonContainer, t),
      onClick: this.handlePrevClick,
      children: (0, i.jsx)(c.Z, {
        className: u.arrow,
        direction: c.Z.Directions.LEFT
      })
    })
  }
  constructor(...t) {
    super(...t), h(this, "handlePrevClick", t => {
      t.stopPropagation(), t.preventDefault();
      let {
        onClick: e
      } = this.props;
      null == e || e(t)
    })
  }
}
class m extends o.PureComponent {
  render() {
    let {
      className: t
    } = this.props;
    return (0, i.jsx)(a.Button, {
      look: a.Button.Looks.BLANK,
      size: a.Button.Sizes.NONE,
      className: l()(u.nextButtonContainer, t),
      onClick: this.handleNextClick,
      children: (0, i.jsx)(c.Z, {
        className: u.arrow,
        direction: c.Z.Directions.RIGHT
      })
    })
  }
  constructor(...t) {
    super(...t), h(this, "handleNextClick", t => {
      t.stopPropagation(), t.preventDefault();
      let {
        onClick: e
      } = this.props;
      null == e || e(t)
    })
  }
}
e.ZP = 12633 == n.j ? d : null