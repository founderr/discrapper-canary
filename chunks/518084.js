n.d(t, {
    wB: function () {
        return _;
    }
}),
    n(411104);
var i,
    r,
    s,
    o,
    a = n(200651),
    l = n(192379),
    c = n(120356),
    d = n.n(c),
    u = n(877921),
    h = n.n(u),
    p = n(481060),
    f = n(981631),
    g = n(344037),
    m = n(739017);
let v = f.t_t.DEFAULT,
    _ = 1,
    E = l.createContext({
        type: v,
        opacity: _
    }),
    Z = l.createContext(void 0),
    x = (e) => {
        let { children: t, className: n, ...i } = e;
        return (0, a.jsx)(E.Consumer, {
            children: (e) => {
                let { type: r } = e;
                return (0, a.jsx)(Z.Consumer, {
                    children: (e) =>
                        (0, a.jsx)('div', {
                            className: d()(n, g.bar, g[h()(r)]),
                            style: e,
                            ...i,
                            children: t
                        })
                });
            }
        });
    };
class I extends (i = l.PureComponent) {
    render() {
        let { disableScroll: e, children: t, className: n } = this.props;
        return (0, a.jsx)(Z.Consumer, {
            children: (i) =>
                (0, a.jsx)(E.Consumer, {
                    children: (r) => {
                        let s = d()(g.body, g[h()(r.type)], n);
                        return e
                            ? (0, a.jsx)('div', {
                                  className: s,
                                  style: i,
                                  children: t
                              })
                            : (0, a.jsx)(p.Scroller, {
                                  fade: !0,
                                  className: s,
                                  children: t
                              });
                    }
                })
        });
    }
}
(o = { disableScroll: !1 }),
    (s = 'defaultProps') in (r = I)
        ? Object.defineProperty(r, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[s] = o);
let C = (e) => {
        let { type: t = v, width: n, height: i, children: r, className: s, opacity: o = _, onClick: l } = e;
        return (0, a.jsx)(E.Provider, {
            value: {
                type: t,
                opacity: o
            },
            children: (0, a.jsx)('div', {
                className: d()(g.widget, g[h()(t)], s),
                style: {
                    width: n,
                    height: i
                },
                onClick: l,
                children: r
            })
        });
    },
    S = (e) => {
        let { children: t, className: n, dynamicSize: i = !1 } = e;
        return (0, a.jsx)(Z.Consumer, {
            children: (e) =>
                (0, a.jsx)('div', {
                    className: d()(g.content, n, { [g.staticSize]: !i }),
                    style: e,
                    children: t
                })
        });
    };
(C.Background = (e) => {
    let { children: t, opacityOverride: n } = e;
    if (null == t) return null;
    let i = [x, I, S];
    return (0, a.jsx)(E.Consumer, {
        children: (e) => {
            let { opacity: r } = e,
                s = { backgroundColor: 'rgba(54, 57, 63, '.concat('' + (null != n ? n : r), ')') };
            if ('string' == typeof t.type) return l.cloneElement(t, { style: s });
            if (i.includes(t.type))
                return (0, a.jsx)(Z.Provider, {
                    value: s,
                    children: t
                });
            {
                let e = t.type.displayName;
                throw Error('Widget.Background cannot be wrapped around '.concat(e, '. Pass a DOM node or one of ').concat(i.map((e) => 'Widget.' + e.name).join(',')));
            }
        }
    });
}),
    (C.Body = I),
    (C.Content = S),
    (C.Icon = (e) => {
        let { icon: t, label: n, onClick: i, isActive: r, tooltipPosition: s = 'top', size: o = 20, isTutorial: l = !1 } = e;
        return (0, a.jsx)(p.Tooltip, {
            text: l
                ? (0, a.jsx)('div', {
                      className: g.tutorialTip,
                      children: n
                  })
                : n,
            'aria-label': n,
            position: s,
            forceOpen: l,
            color: l ? p.Tooltip.Colors.BRAND : p.Tooltip.Colors.BLACK,
            children: (e) => {
                let { onMouseEnter: s, onMouseLeave: l } = e;
                return (0, a.jsx)(p.Button, {
                    look: p.Button.Looks.BLANK,
                    size: p.Button.Sizes.NONE,
                    onClick: i,
                    onMouseEnter: s,
                    onMouseLeave: l,
                    className: d()(g.icon, { [g.toggledIconOn]: r }),
                    innerClassName: m.flexCenter,
                    'aria-label': n,
                    children: (0, a.jsx)(t, {
                        color: 'currentColor',
                        size: 'custom',
                        width: o,
                        height: o,
                        role: 'img'
                    })
                });
            }
        });
    }),
    (C.Bar = x),
    (t.ZP = C);
