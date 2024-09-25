n.d(t, {
    T: function () {
        return b;
    },
    v: function () {
        return y;
    }
});
var r = n(390547);
var i = n(724458);
var a = n(653041);
var o = n(47120);
var s = n(411104);
var l = n(735250),
    u = n(470079),
    c = n(120356),
    d = n.n(c),
    _ = n(348327),
    E = n.n(_),
    f = n(498405),
    h = n(597442),
    p = n(21340),
    m = n(922770),
    I = n(857595),
    T = n(607070),
    g = n(828214),
    S = n(898560),
    A = n(788314),
    v = n(667947);
function N(e) {
    return null == e
        ? []
        : u.Children.toArray(e).flatMap((e) => {
              var t;
              return null == e ? [] : Array.isArray(e) ? N(e) : e.type === u.Fragment ? (null !== (t = N(e.props.children)) && void 0 !== t ? t : []) : [e];
          });
}
function O(e) {
    return N(e).reduce((e, t) => {
        var n, r;
        if (t.type === g.Cl)
            return (
                e.push({
                    type: 'separator',
                    navigable: !1
                }),
                e
            );
        if (t.type === g.kS) {
            let n = O(t.props.children);
            return (
                n.length > 0 &&
                    (e.push({
                        type: 'groupstart',
                        length: n.length,
                        navigable: !1,
                        props: t.props
                    }),
                    e.push(...n),
                    e.push({
                        type: 'groupend',
                        length: n.length,
                        navigable: !1,
                        props: t.props
                    })),
                e
            );
        }
        if (t.type === g.sN)
            return (
                e.push(
                    null != t.props.render
                        ? {
                              type: 'customitem',
                              key: t.props.id,
                              navigable: null == t.props.navigable || t.props.navigable,
                              render: t.props.render,
                              props: t.props
                          }
                        : {
                              type: 'item',
                              key: t.props.id,
                              navigable: !0,
                              label: t.props.label,
                              children: t.props.children ? O(t.props.children) : void 0,
                              onChildrenScroll: t.props.onChildrenScroll,
                              props: t.props,
                              childRowHeight: t.props.childRowHeight,
                              listClassName: t.props.listClassName,
                              subMenuClassName: t.props.subMenuClassName
                          }
                ),
                e
            );
        else if (t.type === g.S8)
            return (
                e.push({
                    type: 'checkbox',
                    key: t.props.id,
                    navigable: !0,
                    props: t.props
                }),
                e
            );
        else if (t.type === g.k5)
            return (
                e.push({
                    type: 'radio',
                    key: t.props.id,
                    navigable: !0,
                    props: t.props
                }),
                e
            );
        else if (t.type === g.II)
            return (
                e.push(
                    null != t.props.control
                        ? {
                              type: 'control',
                              key: t.props.id,
                              navigable: !0,
                              props: t.props
                          }
                        : {
                              type: 'compositecontrol',
                              key: t.props.id,
                              navigable: !1 !== t.props.interactive,
                              children: t.props.children,
                              props: t.props
                          }
                ),
                e
            );
        throw Error('Menu API only allows Items and groups of Items as children. Received '.concat(null !== (r = null !== (n = null == t ? void 0 : t.type) && void 0 !== n ? n : t) && void 0 !== r ? r : typeof t, ' (').concat(typeof t, ') instead'));
    }, []);
}
function R(e) {
    return e.reduce(
        (e, t) =>
            t.navigable
                ? (e.push({
                      key: t.key,
                      children: 'item' === t.type && null != t.children ? R(t.children) : void 0
                  }),
                  e)
                : e,
        []
    );
}
function C(e, t, n, r) {
    let i = 0,
        a = [];
    return e.reduce((e, o, s) => {
        let u = a.length > 0 ? a[a.length - 1] : e;
        switch (o.type) {
            case 'separator':
                u.push((0, l.jsx)(A.Z0, {}, 'separator-'.concat(s))), (i = 0);
                break;
            case 'groupstart':
                i > 0 && o.length > 0 && (u.push((0, l.jsx)(A.Z0, {}, 'separator-'.concat(s))), (i = 0)), a.push([]);
                break;
            case 'groupend':
                a.length > 0 &&
                    e.push(
                        (0, l.jsx)(
                            A.ZA,
                            {
                                contents: a.pop(),
                                ...o.props
                            },
                            'group-'.concat(s)
                        )
                    );
                break;
            case 'item': {
                let { children: e, childRowHeight: a, onChildrenScroll: s, listClassName: c, subMenuClassName: d } = o,
                    _ = null != e,
                    E = [...n, o.key],
                    f = t.isFocused(E),
                    h = null != e ? { 'aria-haspopup': !0 } : {},
                    p = (0, l.jsx)(
                        A.ck,
                        {
                            ...o.props,
                            label: o.label,
                            hasSubmenu: null != e,
                            isFocused: f,
                            menuItemProps: {
                                ...t.getItemProps({
                                    path: E,
                                    hasSubmenu: _
                                }),
                                ...h
                            },
                            onClose: r
                        },
                        o.key
                    );
                _
                    ? null != a
                        ? u.push(
                              (0, l.jsx)(
                                  A.P2,
                                  {
                                      ...o.props,
                                      parentItem: p,
                                      isFocused: f,
                                      menuSubmenuProps: t.getSubmenuProps({ path: E }),
                                      rows: C(e, t, E, r),
                                      rowHeight: a,
                                      onScroll: s,
                                      listClassName: c
                                  },
                                  ''.concat(o.key, '-submenu')
                              )
                          )
                        : u.push(
                              (0, l.jsx)(
                                  A.LY,
                                  {
                                      ...o.props,
                                      subMenuClassName: d,
                                      parentItem: p,
                                      isFocused: f,
                                      menuSubmenuProps: t.getSubmenuProps({ path: E }),
                                      renderSubmenu: () => C(e, t, E, r)
                                  },
                                  ''.concat(o.key, '-submenu')
                              )
                          )
                    : u.push(p),
                    i++;
                break;
            }
            case 'customitem': {
                let e = [...n, o.key];
                u.push(
                    (0, l.jsx)(
                        A.kq,
                        {
                            ...o.props,
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({
                                path: e,
                                navigable: o.navigable
                            }),
                            onClose: r,
                            children: o.render
                        },
                        o.key
                    )
                ),
                    i++;
                break;
            }
            case 'checkbox': {
                let e = [...n, o.key];
                u.push(
                    (0, l.jsx)(
                        A.oC,
                        {
                            ...o.props,
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({
                                path: e,
                                role: 'menuitemcheckbox'
                            })
                        },
                        o.key
                    )
                ),
                    i++;
                break;
            }
            case 'radio': {
                let e = [...n, o.key];
                u.push(
                    (0, l.jsx)(
                        A.Rk,
                        {
                            ...o.props,
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({
                                path: e,
                                role: 'menuitemradio'
                            })
                        },
                        o.key
                    )
                ),
                    i++;
                break;
            }
            case 'control': {
                let e = [...n, o.key];
                u.push(
                    (0, l.jsx)(
                        A.lc,
                        {
                            ...o.props,
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({ path: e }),
                            onClose: r
                        },
                        o.key
                    )
                ),
                    i++;
                break;
            }
            case 'compositecontrol': {
                let e = [...n, o.key];
                u.push(
                    (0, l.jsx)(
                        A.$I,
                        {
                            ...o.props,
                            isFocused: t.isFocused(e),
                            menuItemProps: t.getItemProps({ path: e }),
                            onClose: r,
                            children: o.children
                        },
                        o.key
                    )
                ),
                    i++;
            }
        }
        return e;
    }, []);
}
function y(e) {
    var t;
    let { navId: n, variant: r = 'flexible', hideScroller: i = !1, className: a, children: o, onClose: s, onSelect: c } = e,
        _ = O(o),
        m = R(_),
        g = u.useRef([]);
    !E()(g.current, m) && (g.current = m);
    let N = null === (t = _.find((e) => null != e.key)) || void 0 === t ? void 0 : t.key,
        y = (0, f.ZP)({
            navId: n,
            items: g.current,
            initialFocusPath: T.Z.keyboardModeEnabled && null != N ? [N] : [],
            closeMenu: s
        });
    u.useEffect(() => {
        y.isUsingKeyboardNavigation ? !T.Z.keyboardModeEnabled && (0, I.Qj)() : T.Z.keyboardModeEnabled && (0, I.rf)();
    }, [y.isUsingKeyboardNavigation]);
    let b = u.useRef(null);
    (0, h.T)(b);
    let D = i ? p.u2 : p.zJ;
    return (0, l.jsx)(S.r.Provider, {
        value: c,
        children: (0, l.jsx)('div', {
            className: d()(v.menu, v[r], a),
            ...y.getContainerProps(),
            ref: b,
            'aria-label': e['aria-label'],
            children: (0, l.jsxs)(D, {
                className: v.scroller,
                children: [
                    0 === _.length &&
                        (0, l.jsx)(A.ck, {
                            disabled: !0,
                            label: () => (0, l.jsx)(L, {}),
                            menuItemProps: y.getItemProps({ path: ['empty'] }),
                            isFocused: !1,
                            onFocus: () => {},
                            onClose: s
                        }),
                    _.length > 0 && C(_, y, [], s)
                ]
            })
        })
    });
}
function b() {
    return (0, l.jsx)('div', {
        className: d()(v.menu, v.loader, v.flexible),
        children: (0, l.jsx)(m.$, {})
    });
}
function L() {
    let e = '\u266B (つ\uFF61\u25D5‿‿\u25D5\uFF61)つ \u266A',
        t = '\u266B \u2282(\uFF61\u25D5‿‿\u25D5\uFF61\u2282) \u266A',
        [n, r] = u.useState(e);
    return (
        u.useEffect(() => {
            if (T.Z.useReducedMotion) return;
            let n = setInterval(() => {
                r((n) => (n === e ? t : e));
            }, 700);
            return () => clearInterval(n);
        }, []),
        (0, l.jsx)('div', {
            style: {
                width: '100%',
                textAlign: 'center'
            },
            children: n
        })
    );
}
