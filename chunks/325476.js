var i,
    l,
    r = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
    c = n(481060),
    d = n(600164),
    u = n(408974);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class h extends (i = a.PureComponent) {
    render() {
        let { scrollable: e, ...t } = this.props;
        return e
            ? (0, r.jsx)('aside', {
                  className: u.sidebarScrollable,
                  children: (0, r.jsx)(c.Scroller, {
                      fade: !0,
                      className: u.scroller,
                      children: (0, r.jsx)(d.Z.Child, {
                          ...t,
                          wrap: !0
                      })
                  })
              })
            : (0, r.jsx)(d.Z.Child, {
                  ...t,
                  wrap: !0
              });
    }
}
m(h, 'defaultProps', {
    basis: 232,
    grow: 0,
    shrink: 0,
    className: u.sidebar
});
class p extends a.PureComponent {
    render() {
        let { className: e, ...t } = this.props;
        return (0, r.jsx)(d.Z.Child, {
            className: s()(u.content, e),
            wrap: !0,
            ...t
        });
    }
}
class g extends (l = a.PureComponent) {
    render() {
        return (0, r.jsx)(d.Z, { ...this.props });
    }
}
m(g, 'defaultProps', {
    className: u.layout,
    direction: d.Z.Direction.HORIZONTAL,
    justify: d.Z.Justify.START,
    align: d.Z.Align.START,
    wrap: d.Z.Wrap.NO_WRAP,
    shrink: 1,
    grow: 1,
    basis: 'auto'
}),
    m(g, 'Direction', d.Z.Direction),
    m(g, 'Justify', d.Z.Justify),
    m(g, 'Align', d.Z.Align),
    m(g, 'Wrap', d.Z.Wrap),
    m(g, 'Sidebar', h),
    m(g, 'Content', p),
    (t.ZP = g);
