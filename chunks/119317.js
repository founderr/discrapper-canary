"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("664751"),
  i = a("481060"),
  r = a("703656");
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
      maxVisiblePages: a,
      children: s
    } = this.props, {
      currentPage: l
    } = this.state;
    return s({
      controller: (0, n.jsx)(i.Paginator, {
        totalCount: e,
        pageSize: t,
        currentPage: l,
        maxVisiblePages: a,
        onPageChange: this.handlePageChange
      })
    })
  }
  constructor(e) {
    var t, a, n;
    super(e), t = this, a = "handlePageChange", n = e => {
      let {
        onPageChange: t
      } = this.props;
      this.setState({
        currentPage: e
      }), null != t && t(e)
    }, a in t ? Object.defineProperty(t, a, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[a] = n;
    let s = (0, r.getHistory)().location.search,
      {
        offset: i
      } = null != s && s.length > 0 && s.startsWith("?") ? l.parse(s) : {},
      o = null != i ? Math.floor(parseInt(i, 10) / e.pageSize) + 1 : 1;
    this.state = {
      currentPage: o
    }
  }
}
t.default = o