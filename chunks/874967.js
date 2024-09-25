var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(392711),
    u = n.n(l),
    c = n(866442),
    d = n(692547),
    _ = n(84735),
    E = n(481060),
    f = n(600164),
    h = n(981631),
    p = n(647422),
    m = n(113207);
function I(e, t, n) {
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
let T = u().memoize((e) => {
    let t = !1;
    if (null != e && (0, c.FX)(e)) {
        let n = (0, c._i)(e);
        null != n && (t = 0.2 > (0, c.Bd)(n));
    }
    return t ? d.Z.unsafe_rawColors.BLACK_500.css : d.Z.unsafe_rawColors.WHITE_500.css;
});
class g extends a.PureComponent {
    render() {
        let e;
        let { selected: t, color: n, className: r, children: a } = this.props,
            o = T(n);
        return (
            t
                ? (e = {
                      color: o,
                      background: null != n ? n : d.Z.unsafe_rawColors.BRAND_500.css
                  })
                : null != n && (e = { color: n }),
            (0, i.jsx)(_.t, {
                offset: { left: 4 },
                children: (0, i.jsxs)(f.Z, {
                    className: s()(p.selectableItem, r, { [p.selected]: t }),
                    onClick: this.handleClick,
                    onKeyUp: this.handleKeyUp,
                    align: f.Z.Align.CENTER,
                    style: {
                        ...e,
                        ...this.props.style
                    },
                    role: 'button',
                    tabIndex: 0,
                    children: [
                        (0, i.jsx)(f.Z, {
                            align: f.Z.Align.CENTER,
                            className: p.selectableItemLabel,
                            shrink: 1,
                            children: a
                        }),
                        t &&
                            (0, i.jsx)(f.Z, {
                                wrap: f.Z.Wrap.WRAP,
                                className: m.marginReset,
                                grow: 0,
                                shrink: 0,
                                children: (0, i.jsx)(E.CheckmarkLargeIcon, {
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
            I(this, 'state', { color: T(this.props.color) }),
            I(this, 'handleKeyUp', (e) => {
                if (e.which === h.yXg.ENTER || e.which === h.yXg.SPACE) {
                    let { onClick: e, ...t } = this.props;
                    e(t);
                }
            }),
            I(this, 'handleClick', () => {
                let { onClick: e, ...t } = this.props;
                e(t);
            });
    }
}
t.Z = g;
