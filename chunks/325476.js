var i,
    a,
    l = t(200651),
    s = t(192379),
    o = t(120356),
    r = t.n(o),
    d = t(481060),
    c = t(600164),
    u = t(121173);
function I(e, n, t) {
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
class m extends (i = s.PureComponent) {
    render() {
        let { scrollable: e, ...n } = this.props;
        return e
            ? (0, l.jsx)('aside', {
                  className: u.sidebarScrollable,
                  children: (0, l.jsx)(d.Scroller, {
                      fade: !0,
                      className: u.scroller,
                      children: (0, l.jsx)(c.Z.Child, {
                          ...n,
                          wrap: !0
                      })
                  })
              })
            : (0, l.jsx)(c.Z.Child, {
                  ...n,
                  wrap: !0
              });
    }
}
I(m, 'defaultProps', {
    basis: 232,
    grow: 0,
    shrink: 0,
    className: u.sidebar
});
class _ extends s.PureComponent {
    render() {
        let { className: e, ...n } = this.props;
        return (0, l.jsx)(c.Z.Child, {
            className: r()(u.content, e),
            wrap: !0,
            ...n
        });
    }
}
class N extends (a = s.PureComponent) {
    render() {
        return (0, l.jsx)(c.Z, { ...this.props });
    }
}
I(N, 'defaultProps', {
    className: u.layout,
    direction: c.Z.Direction.HORIZONTAL,
    justify: c.Z.Justify.START,
    align: c.Z.Align.START,
    wrap: c.Z.Wrap.NO_WRAP,
    shrink: 1,
    grow: 1,
    basis: 'auto'
}),
    I(N, 'Direction', c.Z.Direction),
    I(N, 'Justify', c.Z.Justify),
    I(N, 'Align', c.Z.Align),
    I(N, 'Wrap', c.Z.Wrap),
    I(N, 'Sidebar', m),
    I(N, 'Content', _),
    (n.ZP = N);
