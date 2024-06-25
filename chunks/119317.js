var s = n(735250),
  i = n(470079),
  l = n(664751),
  a = n(481060),
  r = n(703656);
class o extends i.PureComponent {
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
      children: i
    } = this.props, {
      currentPage: l
    } = this.state;
    return i({
      controller: (0, s.jsx)(a.Paginator, {
        totalCount: e,
        pageSize: t,
        currentPage: l,
        maxVisiblePages: n,
        onPageChange: this.handlePageChange
      })
    })
  }
  constructor(e) {
    var t, n, s;
    super(e), t = this, n = "handlePageChange", s = e => {
      let {
        onPageChange: t
      } = this.props;
      this.setState({
        currentPage: e
      }), null != t && t(e)
    }, n in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s;
    let i = (0, r.s1)().location.search,
      {
        offset: a
      } = null != i && i.length > 0 && i.startsWith("?") ? l.parse(i) : {},
      o = null != a ? Math.floor(parseInt(a, 10) / e.pageSize) + 1 : 1;
    this.state = {
      currentPage: o
    }
  }
}
t.Z = o