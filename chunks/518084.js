n.d(t, {
    wB: function () {
        return _;
    }
}),
    n(411104);
var i,
    s,
    r,
    a,
    l = n(200651),
    o = n(192379),
    c = n(120356),
    d = n.n(c),
    u = n(877921),
    h = n.n(u),
    p = n(481060),
    f = n(981631),
    g = n(513473),
    m = n(652849);
let v = f.t_t.DEFAULT,
    _ = 1,
    E = o.createContext({
        type: v,
        opacity: _
    }),
    x = o.createContext(void 0),
    Z = (e) => {
        let { children: t, className: n, ...i } = e;
        return (0, l.jsx)(E.Consumer, {
            children: (e) => {
                let { type: s } = e;
                return (0, l.jsx)(x.Consumer, {
                    children: (e) =>
                        (0, l.jsx)('div', {
                            className: d()(g.bar, g[h()(s)], n),
                            style: e,
                            ...i,
                            children: t
                        })
                });
            }
        });
    };
class S extends (i = o.PureComponent) {
    render() {
        let { disableScroll: e, children: t, className: n } = this.props;
        return (0, l.jsx)(x.Consumer, {
            children: (i) =>
                (0, l.jsx)(E.Consumer, {
                    children: (s) => {
                        let r = d()(g.body, g[h()(s.type)], n);
                        return e
                            ? (0, l.jsx)('div', {
                                  className: r,
                                  style: i,
                                  children: t
                              })
                            : (0, l.jsx)(p.Scroller, {
                                  fade: !0,
                                  className: r,
                                  children: t
                              });
                    }
                })
        });
    }
}
(a = { disableScroll: !1 }),
    (r = 'defaultProps') in (s = S)
        ? Object.defineProperty(s, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[r] = a);
let C = (e) => {
        let { type: t = v, width: n, height: i, children: s, className: r, opacity: a = _, onClick: o } = e;
        return (0, l.jsx)(E.Provider, {
            value: {
                type: t,
                opacity: a
            },
            children: (0, l.jsx)('div', {
                className: d()(g.widget, g[h()(t)], r),
                style: {
                    width: n,
                    height: i
                },
                onClick: o,
                children: s
            })
        });
    },
    I = (e) => {
        let { children: t, className: n, dynamicSize: i = !1 } = e;
        return (0, l.jsx)(x.Consumer, {
            children: (e) =>
                (0, l.jsx)('div', {
                    className: d()(g.content, { [g.staticSize]: !i }, n),
                    style: e,
                    children: t
                })
        });
    };
(C.Background = (e) => {
    let { children: t, opacityOverride: n } = e;
    if (null == t) return null;
    let i = [Z, S, I];
    return (0, l.jsx)(E.Consumer, {
        children: (e) => {
            let { opacity: s } = e,
                r = { backgroundColor: 'rgba(54, 57, 63, '.concat('' + (null != n ? n : s), ')') };
            if ('string' == typeof t.type) return o.cloneElement(t, { style: r });
            if (i.includes(t.type))
                return (0, l.jsx)(x.Provider, {
                    value: r,
                    children: t
                });
            {
                let e = t.type.displayName;
                throw Error('Widget.Background cannot be wrapped around '.concat(e, '. Pass a DOM node or one of ').concat(i.map((e) => 'Widget.' + e.name).join(',')));
            }
        }
    });
}),
    (C.Body = S),
    (C.Content = I),
    (C.Icon = (e) => {
        let { icon: t, label: n, onClick: i, isActive: s, tooltipPosition: r = 'top', size: a = 20, isTutorial: o = !1 } = e;
        return (0, l.jsx)(p.Tooltip, {
            text: o
                ? (0, l.jsx)('div', {
                      className: g.tutorialTip,
                      children: n
                  })
                : n,
            'aria-label': n,
            position: r,
            forceOpen: o,
            color: o ? p.Tooltip.Colors.BRAND : p.Tooltip.Colors.BLACK,
            children: (e) => {
                let { onMouseEnter: r, onMouseLeave: o } = e;
                return (0, l.jsx)(p.Button, {
                    look: p.Button.Looks.BLANK,
                    size: p.Button.Sizes.NONE,
                    onClick: i,
                    onMouseEnter: r,
                    onMouseLeave: o,
                    className: d()(g.icon, { [g.toggledIconOn]: s }),
                    innerClassName: m.flexCenter,
                    'aria-label': n,
                    children: (0, l.jsx)(t, {
                        color: 'currentColor',
                        size: 'custom',
                        width: a,
                        height: a,
                        role: 'img'
                    })
                });
            }
        });
    }),
    (C.Bar = Z),
    (t.ZP = C);
