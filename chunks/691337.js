var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    u = n(600164),
    c = n(259580),
    d = n(168277);
function _(e, t, n) {
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
class E extends a.PureComponent {
    handleClick(e) {
        let { onBreadcrumbClick: t } = this.props;
        null != t && t(e);
    }
    render() {
        let { breadcrumbs: e, className: t } = this.props,
            n = e.map(this.renderBreadcrumb);
        return (0, i.jsx)(u.Z, {
            justify: u.Z.Justify.START,
            className: s()(d.breadcrumbs, t),
            children: n
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'renderBreadcrumb', (e, t) => {
                let { activeId: n, onBreadcrumbClick: r, breadcrumbs: a, renderCustomBreadcrumb: o, separatorClassName: u } = this.props,
                    _ = e.id === n,
                    E = () => this.handleClick(e),
                    f = t === a.length - 1,
                    h =
                        null != o
                            ? o(e, _)
                            : (0, i.jsx)('span', {
                                  className: s()(d.breadcrumb, {
                                      [d.activeBreadcrumb]: _,
                                      [d.interactiveBreadcrumb]: null != r
                                  }),
                                  children: e.label
                              });
                return (0, i.jsxs)(
                    'div',
                    {
                        className: s()(d.breadcrumbWrapper, { [d.breadcrumbFinalWrapper]: f }),
                        children: [
                            null != r
                                ? (0, i.jsx)(l.Clickable, {
                                      tag: 'span',
                                      onClick: E,
                                      className: d.breadcrumbClickWrapper,
                                      children: h
                                  })
                                : h,
                            f
                                ? null
                                : (0, i.jsx)(c.Z, {
                                      className: s()(d.breadcrumbArrow, u),
                                      direction: c.Z.Directions.RIGHT
                                  })
                        ]
                    },
                    e.id
                );
            });
    }
}
t.Z = E;
