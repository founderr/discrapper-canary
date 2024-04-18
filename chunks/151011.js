"use strict";
i.r(t), i("47120");
var n, r = i("735250"),
  s = i("470079"),
  a = i("120356"),
  l = i.n(a),
  o = i("481060"),
  u = i("86813"),
  c = i("826026"),
  d = i("981631"),
  f = i("400910");

function p(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e
}
let C = e => (0, r.jsx)("div", {
  className: e.className,
  children: e.children
});
class m extends(n = s.PureComponent) {
  isSortable(e) {
    return null != e.sort && !1 !== e.sort
  }
  getDefaultSort(e) {
    return (t, i) => {
      let n = t[e],
        r = i[e];
      return null != n && null != r ? n === r ? 0 : n < r ? -1 : 1 : 0
    }
  }
  renderHeader() {
    let {
      columns: e,
      data: t,
      sortDirection: i,
      sortKey: n,
      headerCellClassName: s,
      headerClassName: a,
      sortedHeaderCellClassName: p,
      stickyHeader: m
    } = this.props, h = e.map(e => {
      let a = null != e.renderHeader ? e.renderHeader(e, t) : e.key,
        C = i === d.TableSortDirections.ASCENDING ? c.default : u.default;
      return (0, r.jsx)(o.Clickable, {
        className: l()(f.headerCell, s, e.headerCellClassName, e.cellClassName, n === e.key && p, {
          [f.clickable]: this.isSortable(e)
        }),
        onClick: this.isSortable(e) ? () => this.handleSort(e.key) : void 0,
        children: (0, r.jsxs)("div", {
          className: f.headerCellContent,
          children: [a, this.isSortable(e) && n === e.key ? (0, r.jsx)(C, {
            className: f.sortIcon
          }) : null]
        })
      }, e.key)
    });
    return (0, r.jsx)(C, {
      className: l()(a, f.row, {
        [f.stickyHeader]: m
      }),
      children: h
    })
  }
  renderBody() {
    let {
      columns: e,
      data: t,
      sortData: i,
      sortKey: n,
      sortDirection: r,
      bodyCellClassName: a,
      rowClassName: o,
      cellProps: u,
      rowProps: c,
      rowComponent: p,
      cellComponent: C
    } = this.props, m = t;
    if (i) {
      let i = null != n ? e.find(e => {
          let {
            key: t
          } = e;
          return t === n
        }) : null,
        s = [...t],
        a = null != i && i.sort,
        l = null != i && null != n && this.isSortable(i) ? s.sort("function" == typeof a ? (e, t) => a(e, t, r) : this.getDefaultSort(n)) : s;
      m = null != i && r === d.TableSortDirections.DESCENDING ? l.reverse() : l
    }
    return m.map((t, i) => {
      let n = e.map(e => (0, s.createElement)(C, {
        ...u,
        key: e.key,
        item: t,
        className: l()(a, e.bodyCellClassName, e.cellClassName)
      }, null != e.render ? e.render(t, u, i) : t[e.key]));
      return (0, s.createElement)(p, {
        ...c,
        key: t.key,
        item: t,
        className: l()(f.row, o)
      }, n)
    })
  }
  render() {
    let {
      className: e,
      hasHeader: t
    } = this.props;
    return (0, r.jsxs)("div", {
      className: e,
      children: [t ? this.renderHeader() : null, this.renderBody()]
    })
  }
  constructor(...e) {
    super(...e), p(this, "handleSort", e => {
      let {
        sortKey: t,
        sortDirection: i,
        onSort: n
      } = this.props;
      null != n && n(e, t === e ? i === d.TableSortDirections.ASCENDING ? d.TableSortDirections.DESCENDING : d.TableSortDirections.ASCENDING : d.TableSortDirections.ASCENDING)
    })
  }
}
p(m, "SortDirection", d.TableSortDirections), p(m, "defaultProps", {
  initialSortDirection: d.TableSortDirections.ASCENDING,
  rowHeaderComponent: C,
  rowComponent: e => (0, r.jsx)("div", {
    className: e.className,
    children: e.children
  }),
  cellComponent: e => (0, r.jsx)("div", {
    className: e.className,
    children: e.children
  }),
  hasHeader: !0,
  sortData: !0,
  stickyHeader: !1
}), t.default = m