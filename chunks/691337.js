n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(600164),
    u = n(259580),
    c = n(609848);
class d extends i.PureComponent {
    handleClick(e) {
        let { onBreadcrumbClick: t } = this.props;
        null != t && t(e);
    }
    render() {
        let { breadcrumbs: e, className: t } = this.props,
            n = e.map(this.renderBreadcrumb);
        return (0, r.jsx)(l.Z, {
            justify: l.Z.Justify.START,
            className: s()(c.breadcrumbs, t),
            children: n
        });
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'renderBreadcrumb'),
            (i = (e, t) => {
                let { activeId: n, onBreadcrumbClick: i, breadcrumbs: a, renderCustomBreadcrumb: l, separatorClassName: d } = this.props,
                    f = e.id === n,
                    _ = t === a.length - 1,
                    p =
                        null != l
                            ? l(e, f)
                            : (0, r.jsx)('span', {
                                  className: s()(c.breadcrumb, {
                                      [c.activeBreadcrumb]: f,
                                      [c.interactiveBreadcrumb]: null != i
                                  }),
                                  children: e.label
                              });
                return (0, r.jsxs)(
                    'div',
                    {
                        className: s()(c.breadcrumbWrapper, { [c.breadcrumbFinalWrapper]: _ }),
                        children: [
                            null != i
                                ? (0, r.jsx)(o.Clickable, {
                                      tag: 'span',
                                      onClick: () => this.handleClick(e),
                                      className: c.breadcrumbClickWrapper,
                                      children: p
                                  })
                                : p,
                            _
                                ? null
                                : (0, r.jsx)(u.Z, {
                                      className: s()(c.breadcrumbArrow, d),
                                      direction: u.Z.Directions.RIGHT
                                  })
                        ]
                    },
                    e.id
                );
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
t.Z = d;
