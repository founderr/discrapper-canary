n.d(t, {
    wB: function () {
        return _;
    }
}),
    n(411104);
var i,
    r,
    s,
    a,
    o = n(200651),
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
    x = l.createContext(void 0),
    Z = (e) => {
        let { children: t, className: n, ...i } = e;
        return (0, o.jsx)(E.Consumer, {
            children: (e) => {
                let { type: r } = e;
                return (0, o.jsx)(x.Consumer, {
                    children: (e) =>
                        (0, o.jsx)('div', {
                            className: d()(g.bar, g[h()(r)], n),
                            style: e,
                            ...i,
                            children: t
                        })
                });
            }
        });
    };
class S extends (i = l.PureComponent) {
    render() {
        let { disableScroll: e, children: t, className: n } = this.props;
        return (0, o.jsx)(x.Consumer, {
            children: (i) =>
                (0, o.jsx)(E.Consumer, {
                    children: (r) => {
                        let s = d()(g.body, g[h()(r.type)], n);
                        return e
                            ? (0, o.jsx)('div', {
                                  className: s,
                                  style: i,
                                  children: t
                              })
                            : (0, o.jsx)(p.Scroller, {
                                  fade: !0,
                                  className: s,
                                  children: t
                              });
                    }
                })
        });
    }
}
(a = { disableScroll: !1 }),
    (s = 'defaultProps') in (r = S)
        ? Object.defineProperty(r, s, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[s] = a);
let I = (e) => {
        let { type: t = v, width: n, height: i, children: r, className: s, opacity: a = _, onClick: l } = e;
        return (0, o.jsx)(E.Provider, {
            value: {
                type: t,
                opacity: a
            },
            children: (0, o.jsx)('div', {
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
    C = (e) => {
        let { children: t, className: n, dynamicSize: i = !1 } = e;
        return (0, o.jsx)(x.Consumer, {
            children: (e) =>
                (0, o.jsx)('div', {
                    className: d()(g.content, { [g.staticSize]: !i }, n),
                    style: e,
                    children: t
                })
        });
    };
(I.Background = (e) => {
    let { children: t, opacityOverride: n } = e;
    if (null == t) return null;
    let i = [Z, S, C];
    return (0, o.jsx)(E.Consumer, {
        children: (e) => {
            let { opacity: r } = e,
                s = { backgroundColor: 'rgba(54, 57, 63, '.concat('' + (null != n ? n : r), ')') };
            if ('string' == typeof t.type) return l.cloneElement(t, { style: s });
            if (i.includes(t.type))
                return (0, o.jsx)(x.Provider, {
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
    (I.Body = S),
    (I.Content = C),
    (I.Icon = (e) => {
        let { icon: t, label: n, onClick: i, isActive: r, tooltipPosition: s = 'top', size: a = 20, isTutorial: l = !1 } = e;
        return (0, o.jsx)(p.Tooltip, {
            text: l
                ? (0, o.jsx)('div', {
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
                return (0, o.jsx)(p.Button, {
                    look: p.Button.Looks.BLANK,
                    size: p.Button.Sizes.NONE,
                    onClick: i,
                    onMouseEnter: s,
                    onMouseLeave: l,
                    className: d()(g.icon, { [g.toggledIconOn]: r }),
                    innerClassName: m.flexCenter,
                    'aria-label': n,
                    children: (0, o.jsx)(t, {
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
    (I.Bar = Z),
    (t.ZP = I);
