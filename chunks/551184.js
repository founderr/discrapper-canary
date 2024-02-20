"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("37983"),
  a = n("884691"),
  l = n("414456"),
  s = n.n(l),
  r = n("77078"),
  o = n("98717");
let u = {
  SMALL: o.sizeSmall,
  MEDIUM: o.sizeMedium,
  LARGE: o.sizeLarge
};
class d extends a.PureComponent {
  calculateScroll() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._scroller;
    if (null == e) return;
    let {
      scrollTop: t
    } = e.getScrollerState(), {
      hideSeparator: n
    } = this.state;
    0 !== t || n ? t > 0 && n && this.setState({
      hideSeparator: !1
    }) : this.setState({
      hideSeparator: !0
    })
  }
  getScroller() {
    return this._scroller
  }
  renderChildren() {
    let {
      hideSeparator: e
    } = this.state;
    return a.Children.map(this.props.children, t => a.isValidElement(t) ? t.type === r.ModalContent || t.type === r.ModalListContent ? a.cloneElement(t, {
      scrollerRef: this.setRef,
      onScroll: this.handleScroll,
      onResize: this.handleScroll
    }) : t.type === r.ModalHeader && e ? a.cloneElement(t, {
      separator: !1
    }) : t : t)
  }
  render() {
    let {
      className: e,
      children: t,
      tag: n,
      size: a,
      fullscreenOnMobile: l,
      ...r
    } = this.props;
    return (0, i.jsx)(n, {
      className: s(o.modal, e, a, {
        [o.fullscreenOnMobile]: l
      }),
      ...r,
      children: this.renderChildren()
    })
  }
  constructor(e) {
    super(e), this._scroller = null, this.setRef = e => {
      this._scroller = e, null != e && this.calculateScroll()
    }, this.handleScroll = e => {
      this.calculateScroll();
      let {
        onScroll: t
      } = this.props;
      null == t || t(e)
    }, this.state = {
      hideSeparator: !1
    }
  }
}
d.Header = r.ModalHeader, d.Footer = r.ModalFooter, d.Content = r.ModalContent, d.ListContent = r.ModalListContent, d.CloseButton = r.ModalCloseButton, d.Sizes = u, d.defaultProps = {
  fullscreenOnMobile: !0,
  size: u.SMALL,
  tag: "div"
};
var c = d