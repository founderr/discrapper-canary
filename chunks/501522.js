"use strict";
n.r(t), n("47120");
var s = n("735250"),
  l = n("470079"),
  i = n("786876");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class r extends l.Component {
  componentDidUpdate(e) {
    let {
      props: {
        location: t,
        shouldScrollToTop: n
      },
      scrollRef: {
        current: s
      }
    } = this;
    null != s && t !== e.location && (null != n ? n(this.props) && (s.scrollTop = 0) : s.scrollTop = 0)
  }
  render() {
    let {
      className: e,
      render: t
    } = this.props;
    return (0, s.jsx)("div", {
      ref: this.scrollRef,
      className: e,
      children: t(this.scrollTo, this.getScrollTop)
    })
  }
  constructor(...e) {
    super(...e), a(this, "scrollRef", l.createRef()), a(this, "scrollTo", e => {
      null != this.scrollRef.current && (this.scrollRef.current.scrollTop = e)
    }), a(this, "getScrollTop", () => null == this.scrollRef.current ? 0 : this.scrollRef.current.scrollTop)
  }
}
t.default = (0, i.withRouter)(r)