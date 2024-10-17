n.d(t, {
    wB: function () {
        return m;
    }
}),
    n(411104);
var i,
    s,
    a,
    r,
    o = n(735250),
    l = n(470079),
    c = n(120356),
    d = n.n(c),
    u = n(877921),
    h = n.n(u),
    p = n(481060),
    f = n(981631),
    _ = n(344037),
    E = n(739017);
let g = f.t_t.DEFAULT,
    m = 1,
    I = l.createContext({
        type: g,
        opacity: m
    }),
    Z = l.createContext(void 0),
    v = (e) => {
        let { children: t, className: n, ...i } = e;
        return (0, o.jsx)(I.Consumer, {
            children: (e) => {
                let { type: s } = e;
                return (0, o.jsx)(Z.Consumer, {
                    children: (e) =>
                        (0, o.jsx)('div', {
                            className: d()(n, _.bar, _[h()(s)]),
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
        return (0, o.jsx)(Z.Consumer, {
            children: (i) =>
                (0, o.jsx)(I.Consumer, {
                    children: (s) => {
                        let a = d()(_.body, _[h()(s.type)], n);
                        return e
                            ? (0, o.jsx)('div', {
                                  className: a,
                                  style: i,
                                  children: t
                              })
                            : (0, o.jsx)(p.Scroller, {
                                  fade: !0,
                                  className: a,
                                  children: t
                              });
                    }
                })
        });
    }
}
(r = { disableScroll: !1 }),
    (a = 'defaultProps') in (s = S)
        ? Object.defineProperty(s, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[a] = r);
let C = (e) => {
        let { type: t = g, width: n, height: i, children: s, className: a, opacity: r = m, onClick: l } = e;
        return (0, o.jsx)(I.Provider, {
            value: {
                type: t,
                opacity: r
            },
            children: (0, o.jsx)('div', {
                className: d()(_.widget, _[h()(t)], a),
                style: {
                    width: n,
                    height: i
                },
                onClick: l,
                children: s
            })
        });
    },
    x = (e) => {
        let { children: t, className: n, dynamicSize: i = !1 } = e;
        return (0, o.jsx)(Z.Consumer, {
            children: (e) =>
                (0, o.jsx)('div', {
                    className: d()(_.content, n, { [_.staticSize]: !i }),
                    style: e,
                    children: t
                })
        });
    };
(C.Background = (e) => {
    let { children: t, opacityOverride: n } = e;
    if (null == t) return null;
    let i = [v, S, x];
    return (0, o.jsx)(I.Consumer, {
        children: (e) => {
            let { opacity: s } = e,
                a = { backgroundColor: 'rgba(54, 57, 63, '.concat('' + (null != n ? n : s), ')') };
            if ('string' == typeof t.type) return l.cloneElement(t, { style: a });
            if (i.includes(t.type))
                return (0, o.jsx)(Z.Provider, {
                    value: a,
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
    (C.Content = x),
    (C.Icon = (e) => {
        let { icon: t, label: n, onClick: i, isActive: s, tooltipPosition: a = 'top', size: r = 20, isTutorial: l = !1 } = e;
        return (0, o.jsx)(p.Tooltip, {
            text: l
                ? (0, o.jsx)('div', {
                      className: _.tutorialTip,
                      children: n
                  })
                : n,
            'aria-label': n,
            position: a,
            forceOpen: l,
            color: l ? p.Tooltip.Colors.BRAND : p.Tooltip.Colors.BLACK,
            children: (e) => {
                let { onMouseEnter: a, onMouseLeave: l } = e;
                return (0, o.jsx)(p.Button, {
                    look: p.Button.Looks.BLANK,
                    size: p.Button.Sizes.NONE,
                    onClick: i,
                    onMouseEnter: a,
                    onMouseLeave: l,
                    className: d()(_.icon, { [_.toggledIconOn]: s }),
                    innerClassName: E.flexCenter,
                    'aria-label': n,
                    children: (0, o.jsx)(t, {
                        color: 'currentColor',
                        size: 'custom',
                        width: r,
                        height: r,
                        role: 'img'
                    })
                });
            }
        });
    }),
    (C.Bar = v),
    (t.ZP = C);
