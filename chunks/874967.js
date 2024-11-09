n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(866442),
    c = n(692547),
    d = n(84735),
    f = n(481060),
    _ = n(600164),
    h = n(981631),
    p = n(647422),
    m = n(113207);
function g(e, t, n) {
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
let E = l().memoize((e) => {
    let t = !1;
    if (null != e && (0, u.FX)(e)) {
        let n = (0, u._i)(e);
        null != n && (t = 0.2 > (0, u.Bd)(n));
    }
    return t ? c.Z.unsafe_rawColors.BLACK_500.css : c.Z.unsafe_rawColors.WHITE_500.css;
});
class v extends i.PureComponent {
    render() {
        let e;
        let { selected: t, color: n, className: i, children: a } = this.props,
            o = E(n);
        return (
            t
                ? (e = {
                      color: o,
                      background: null != n ? n : c.Z.unsafe_rawColors.BRAND_500.css
                  })
                : null != n && (e = { color: n }),
            (0, r.jsx)(d.t, {
                offset: { left: 4 },
                children: (0, r.jsxs)(_.Z, {
                    className: s()(p.selectableItem, i, { [p.selected]: t }),
                    onClick: this.handleClick,
                    onKeyUp: this.handleKeyUp,
                    align: _.Z.Align.CENTER,
                    style: {
                        ...e,
                        ...this.props.style
                    },
                    role: 'button',
                    tabIndex: 0,
                    children: [
                        (0, r.jsx)(_.Z, {
                            align: _.Z.Align.CENTER,
                            className: p.selectableItemLabel,
                            shrink: 1,
                            children: a
                        }),
                        t &&
                            (0, r.jsx)(_.Z, {
                                wrap: _.Z.Wrap.WRAP,
                                className: m.marginReset,
                                grow: 0,
                                shrink: 0,
                                children: (0, r.jsx)(f.CheckmarkLargeIcon, {
                                    size: 'md',
                                    color: o
                                })
                            })
                    ]
                })
            })
        );
    }
    constructor(...e) {
        super(...e),
            g(this, 'state', { color: E(this.props.color) }),
            g(this, 'handleKeyUp', (e) => {
                if (e.which === h.yXg.ENTER || e.which === h.yXg.SPACE) {
                    let { onClick: e, ...t } = this.props;
                    e(t);
                }
            }),
            g(this, 'handleClick', () => {
                let { onClick: e, ...t } = this.props;
                e(t);
            });
    }
}
t.Z = v;
