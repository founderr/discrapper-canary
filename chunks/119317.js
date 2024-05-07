"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  i = n("664751"),
  l = n("481060"),
  r = n("703656");
class o extends s.PureComponent {
  componentDidUpdate(e) {
    let {
      resetCurrentPage: t
    } = this.props;
    !e.resetCurrentPage && t && this.setState({
      currentPage: 1
    })
  }
  render() {
    let {
      totalCount: e,
      pageSize: t,
      maxVisiblePages: n,
      children: s
    } = this.props, {
      currentPage: i
    } = this.state;
    return s({
      controller: (0, a.jsx)(l.Paginator, {
        totalCount: e,
        pageSize: t,
        currentPage: i,
        maxVisiblePages: n,
        onPageChange: this.handlePageChange
      })
    })
  }
  constructor(e) {
    var t, n, a;
    super(e), t = this, n = "handlePageChange", a = e => {
      let {
        onPageChange: t
      } = this.props;
      this.setState({
        currentPage: e
      }), null != t && t(e)
    }, n in t ? Object.defineProperty(t, n, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = a;
    let s = (0, r.getHistory)().location.search,
      {
        offset: l
      } = null != s && s.length > 0 && s.startsWith("?") ? i.parse(s) : {},
      o = null != l ? Math.floor(parseInt(l, 10) / e.pageSize) + 1 : 1;
    this.state = {
      currentPage: o
    }
  }
}
t.default = o