n.d(t, {
    wB: function () {
        return _;
    }
}),
    n(411104);
var i,
    r,
    s,
    l,
    a = n(200651),
    o = n(192379),
    c = n(120356),
    d = n.n(c),
    u = n(877921),
    h = n.n(u),
    p = n(481060),
    f = n(981631),
    m = n(344037),
    g = n(739017);
let v = f.t_t.DEFAULT,
    _ = 1,
    E = o.createContext({
        type: v,
        opacity: _
    }),
    x = o.createContext(void 0),
    I = (e) => {
        let { children: t, className: n, ...i } = e;
        return (0, a.jsx)(E.Consumer, {
            children: (e) => {
                let { type: r } = e;
                return (0, a.jsx)(x.Consumer, {
                    children: (e) =>
                        (0, a.jsx)('div', {
                            className: d()(n, m.bar, m[h()(r)]),
                            style: e,
                            ...i,
                            children: t
                        })
                });
            }
        });
    };
class Z extends (i = o.PureComponent) {
    render() {
        let { disableScroll: e, children: t, className: n } = this.props;
        return (0, a.jsx)(x.Consumer, {
            children: (i) =>
                (0, a.jsx)(E.Consumer, {
                    children: (r) => {
                        let s = d()(m.body, m[h()(r.type)], n);
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
(l = { disableScroll: !1 }),
    (s = 'defaultProps') in (r = Z)
        ? Object.defineProperty(r, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[s] = l);
let S = (e) => {
        let { type: t = v, width: n, height: i, children: r, className: s, opacity: l = _, onClick: o } = e;
        return (0, a.jsx)(E.Provider, {
            value: {
                type: t,
                opacity: l
            },
            children: (0, a.jsx)('div', {
                className: d()(m.widget, m[h()(t)], s),
                style: {
                    width: n,
                    height: i
                },
                onClick: o,
                children: r
            })
        });
    },
    C = (e) => {
        let { children: t, className: n, dynamicSize: i = !1 } = e;
        return (0, a.jsx)(x.Consumer, {
            children: (e) =>
                (0, a.jsx)('div', {
                    className: d()(m.content, n, { [m.staticSize]: !i }),
                    style: e,
                    children: t
                })
        });
    };
(S.Background = (e) => {
    let { children: t, opacityOverride: n } = e;
    if (null == t) return null;
    let i = [I, Z, C];
    return (0, a.jsx)(E.Consumer, {
        children: (e) => {
            let { opacity: r } = e,
                s = { backgroundColor: 'rgba(54, 57, 63, '.concat('' + (null != n ? n : r), ')') };
            if ('string' == typeof t.type) return o.cloneElement(t, { style: s });
            if (i.includes(t.type))
                return (0, a.jsx)(x.Provider, {
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
    (S.Body = Z),
    (S.Content = C),
    (S.Icon = (e) => {
        let { icon: t, label: n, onClick: i, isActive: r, tooltipPosition: s = 'top', size: l = 20, isTutorial: o = !1 } = e;
        return (0, a.jsx)(p.Tooltip, {
            text: o
                ? (0, a.jsx)('div', {
                      className: m.tutorialTip,
                      children: n
                  })
                : n,
            'aria-label': n,
            position: s,
            forceOpen: o,
            color: o ? p.Tooltip.Colors.BRAND : p.Tooltip.Colors.BLACK,
            children: (e) => {
                let { onMouseEnter: s, onMouseLeave: o } = e;
                return (0, a.jsx)(p.Button, {
                    look: p.Button.Looks.BLANK,
                    size: p.Button.Sizes.NONE,
                    onClick: i,
                    onMouseEnter: s,
                    onMouseLeave: o,
                    className: d()(m.icon, { [m.toggledIconOn]: r }),
                    innerClassName: g.flexCenter,
                    'aria-label': n,
                    children: (0, a.jsx)(t, {
                        color: 'currentColor',
                        size: 'custom',
                        width: l,
                        height: l,
                        role: 'img'
                    })
                });
            }
        });
    }),
    (S.Bar = I),
    (t.ZP = S);
