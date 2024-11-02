var i,
    l,
    r = t(200651),
    a = t(192379),
    o = t(120356),
    s = t.n(o),
    d = t(481060),
    c = t(600164),
    u = t(121173);
function m(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
class h extends (i = a.PureComponent) {
    render() {
        let { scrollable: e, ...n } = this.props;
        return e
            ? (0, r.jsx)('aside', {
                  className: u.sidebarScrollable,
                  children: (0, r.jsx)(d.Scroller, {
                      fade: !0,
                      className: u.scroller,
                      children: (0, r.jsx)(c.Z.Child, {
                          ...n,
                          wrap: !0
                      })
                  })
              })
            : (0, r.jsx)(c.Z.Child, {
                  ...n,
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
        let { className: e, ...n } = this.props;
        return (0, r.jsx)(c.Z.Child, {
            className: s()(u.content, e),
            wrap: !0,
            ...n
        });
    }
}
class g extends (l = a.PureComponent) {
    render() {
        return (0, r.jsx)(c.Z, { ...this.props });
    }
}
m(g, 'defaultProps', {
    className: u.layout,
    direction: c.Z.Direction.HORIZONTAL,
    justify: c.Z.Justify.START,
    align: c.Z.Align.START,
    wrap: c.Z.Wrap.NO_WRAP,
    shrink: 1,
    grow: 1,
    basis: 'auto'
}),
    m(g, 'Direction', c.Z.Direction),
    m(g, 'Justify', c.Z.Justify),
    m(g, 'Align', c.Z.Align),
    m(g, 'Wrap', c.Z.Wrap),
    m(g, 'Sidebar', h),
    m(g, 'Content', p),
    (n.ZP = g);
