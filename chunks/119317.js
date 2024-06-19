var i = n(735250),
  s = n(470079),
  l = n(664751),
  a = n(481060),
  r = n(703656);
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
      currentPage: l
    } = this.state;
    return s({
      controller: (0, i.jsx)(a.Paginator, {
        totalCount: e,
        pageSize: t,
        currentPage: l,
        maxVisiblePages: n,
        onPageChange: this.handlePageChange
      })
    })
  }
  constructor(e) {
    var t, n, i;
    super(e), t = this, n = "handlePageChange", i = e => {
      let {
        onPageChange: t
      } = this.props;
      this.setState({
        currentPage: e
      }), null != t && t(e)
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i;
    let s = (0, r.s1)().location.search,
      {
        offset: a
      } = null != s && s.length > 0 && s.startsWith("?") ? l.parse(s) : {},
      o = null != a ? Math.floor(parseInt(a, 10) / e.pageSize) + 1 : 1;
    this.state = {
      currentPage: o
    }
  }
}
t.Z = o