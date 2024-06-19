n(47120);
var l = n(735250),
  a = n(470079),
  i = n(333032);

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class s extends a.Component {
  componentDidUpdate(e) {
    let {
      props: {
        location: t,
        shouldScrollToTop: n
      },
      scrollRef: {
        current: l
      }
    } = this;
    if (null != l) t !== e.location && (null != n ? n(this.props) && (l.scrollTop = 0) : l.scrollTop = 0)
  }
  render() {
    let {
      className: e,
      render: t
    } = this.props;
    return (0, l.jsx)("div", {
      ref: this.scrollRef,
      className: e,
      children: t(this.scrollTo, this.getScrollTop)
    })
  }
  constructor(...e) {
    super(...e), r(this, "scrollRef", a.createRef()), r(this, "scrollTo", e => {
      null != this.scrollRef.current && (this.scrollRef.current.scrollTop = e)
    }), r(this, "getScrollTop", () => null == this.scrollRef.current ? 0 : this.scrollRef.current.scrollTop)
  }
}
t.Z = (0, i.EN)(s)