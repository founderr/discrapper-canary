n.d(t, {
    T: function () {
        return b;
    },
    v: function () {
        return v;
    }
}),
    n(390547),
    n(724458),
    n(653041),
    n(47120),
    n(411104);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(348327),
    l = n.n(o),
    u = n(498405),
    c = n(597442),
    d = n(21340),
    f = n(922770),
    _ = n(857595),
    p = n(607070),
    h = n(828214),
    m = n(898560),
    g = n(788314),
    E = n(7758);
function v(e) {
    var t;
    let { navId: n, variant: a = 'flexible', hideScroller: o = !1, className: f, children: v, onClose: b, onSelect: S } = e,
        T = (function e(t) {
            return (function e(t) {
                return null == t
                    ? []
                    : i.Children.toArray(t).flatMap((t) => {
                          var n;
                          return null == t ? [] : Array.isArray(t) ? e(t) : t.type === i.Fragment ? (null !== (n = e(t.props.children)) && void 0 !== n ? n : []) : [t];
                      });
            })(t).reduce((t, n) => {
                var r, i;
                if (n.type === h.Cl)
                    return (
                        t.push({
                            type: 'separator',
                            navigable: !1
                        }),
                        t
                    );
                if (n.type === h.kS) {
                    let r = e(n.props.children);
                    return (
                        r.length > 0 &&
                            (t.push({
                                type: 'groupstart',
                                length: r.length,
                                navigable: !1,
                                props: n.props
                            }),
                            t.push(...r),
                            t.push({
                                type: 'groupend',
                                length: r.length,
                                navigable: !1,
                                props: n.props
                            })),
                        t
                    );
                }
                if (n.type === h.sN)
                    return (
                        t.push(
                            null != n.props.render
                                ? {
                                      type: 'customitem',
                                      key: n.props.id,
                                      navigable: null == n.props.navigable || n.props.navigable,
                                      render: n.props.render,
                                      props: n.props
                                  }
                                : {
                                      type: 'item',
                                      key: n.props.id,
                                      navigable: !0,
                                      label: n.props.label,
                                      children: n.props.children ? e(n.props.children) : void 0,
                                      onChildrenScroll: n.props.onChildrenScroll,
                                      props: n.props,
                                      childRowHeight: n.props.childRowHeight,
                                      listClassName: n.props.listClassName,
                                      subMenuClassName: n.props.subMenuClassName
                                  }
                        ),
                        t
                    );
                else if (n.type === h.S8)
                    return (
                        t.push({
                            type: 'checkbox',
                            key: n.props.id,
                            navigable: !0,
                            props: n.props
                        }),
                        t
                    );
                else if (n.type === h.k5)
                    return (
                        t.push({
                            type: 'radio',
                            key: n.props.id,
                            navigable: !0,
                            props: n.props
                        }),
                        t
                    );
                else if (n.type === h.II)
                    return (
                        t.push(
                            null != n.props.control
                                ? {
                                      type: 'control',
                                      key: n.props.id,
                                      navigable: !0,
                                      props: n.props
                                  }
                                : {
                                      type: 'compositecontrol',
                                      key: n.props.id,
                                      navigable: !1 !== n.props.interactive,
                                      children: n.props.children,
                                      props: n.props
                                  }
                        ),
                        t
                    );
                throw Error('Menu API only allows Items and groups of Items as children. Received '.concat(null !== (i = null !== (r = null == n ? void 0 : n.type) && void 0 !== r ? r : n) && void 0 !== i ? i : typeof n, ' (').concat(typeof n, ') instead'));
            }, []);
        })(v),
        y = (function e(t) {
            return t.reduce(
                (t, n) =>
                    n.navigable
                        ? (t.push({
                              key: n.key,
                              children: 'item' === n.type && null != n.children ? e(n.children) : void 0
                          }),
                          t)
                        : t,
                []
            );
        })(T),
        A = i.useRef([]);
    !l()(A.current, y) && (A.current = y);
    let N = null === (t = T.find((e) => null != e.key)) || void 0 === t ? void 0 : t.key,
        C = (0, u.ZP)({
            navId: n,
            items: A.current,
            initialFocusPath: p.Z.keyboardModeEnabled && null != N ? [N] : [],
            closeMenu: b
        });
    i.useEffect(() => {
        C.isUsingKeyboardNavigation ? !p.Z.keyboardModeEnabled && (0, _.Qj)() : p.Z.keyboardModeEnabled && (0, _.rf)();
    }, [C.isUsingKeyboardNavigation]);
    let R = i.useRef(null);
    (0, c.T)(R);
    let O = o ? d.u2 : d.zJ;
    return (0, r.jsx)(m.r.Provider, {
        value: S,
        children: (0, r.jsx)('div', {
            className: s()(E.menu, E[a], f),
            ...C.getContainerProps(),
            ref: R,
            'aria-label': e['aria-label'],
            children: (0, r.jsxs)(O, {
                className: E.scroller,
                children: [
                    0 === T.length &&
                        (0, r.jsx)(g.ck, {
                            disabled: !0,
                            label: () => (0, r.jsx)(I, {}),
                            menuItemProps: C.getItemProps({ path: ['empty'] }),
                            isFocused: !1,
                            onFocus: () => {},
                            onClose: b
                        }),
                    T.length > 0 &&
                        (function e(t, n, i, a) {
                            let s = 0,
                                o = [];
                            return t.reduce((t, l, u) => {
                                let c = o.length > 0 ? o[o.length - 1] : t;
                                switch (l.type) {
                                    case 'separator':
                                        c.push((0, r.jsx)(g.Z0, {}, 'separator-'.concat(u))), (s = 0);
                                        break;
                                    case 'groupstart':
                                        s > 0 && l.length > 0 && (c.push((0, r.jsx)(g.Z0, {}, 'separator-'.concat(u))), (s = 0)), o.push([]);
                                        break;
                                    case 'groupend':
                                        o.length > 0 &&
                                            t.push(
                                                (0, r.jsx)(
                                                    g.ZA,
                                                    {
                                                        contents: o.pop(),
                                                        ...l.props
                                                    },
                                                    'group-'.concat(u)
                                                )
                                            );
                                        break;
                                    case 'item': {
                                        let { children: t, childRowHeight: o, onChildrenScroll: u, listClassName: d, subMenuClassName: f } = l,
                                            _ = null != t,
                                            p = [...i, l.key],
                                            h = n.isFocused(p),
                                            m = (0, r.jsx)(
                                                g.ck,
                                                {
                                                    ...l.props,
                                                    label: l.label,
                                                    hasSubmenu: null != t,
                                                    isFocused: h,
                                                    menuItemProps: {
                                                        ...n.getItemProps({
                                                            path: p,
                                                            hasSubmenu: _
                                                        }),
                                                        ...(null != t ? { 'aria-haspopup': !0 } : {})
                                                    },
                                                    onClose: a
                                                },
                                                l.key
                                            );
                                        _
                                            ? null != o
                                                ? c.push(
                                                      (0, r.jsx)(
                                                          g.P2,
                                                          {
                                                              ...l.props,
                                                              parentItem: m,
                                                              isFocused: h,
                                                              menuSubmenuProps: n.getSubmenuProps({ path: p }),
                                                              rows: e(t, n, p, a),
                                                              rowHeight: o,
                                                              onScroll: u,
                                                              listClassName: d
                                                          },
                                                          ''.concat(l.key, '-submenu')
                                                      )
                                                  )
                                                : c.push(
                                                      (0, r.jsx)(
                                                          g.LY,
                                                          {
                                                              ...l.props,
                                                              subMenuClassName: f,
                                                              parentItem: m,
                                                              isFocused: h,
                                                              menuSubmenuProps: n.getSubmenuProps({ path: p }),
                                                              renderSubmenu: () => e(t, n, p, a)
                                                          },
                                                          ''.concat(l.key, '-submenu')
                                                      )
                                                  )
                                            : c.push(m),
                                            s++;
                                        break;
                                    }
                                    case 'customitem': {
                                        let e = [...i, l.key];
                                        c.push(
                                            (0, r.jsx)(
                                                g.kq,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({
                                                        path: e,
                                                        navigable: l.navigable
                                                    }),
                                                    onClose: a,
                                                    children: l.render
                                                },
                                                l.key
                                            )
                                        ),
                                            s++;
                                        break;
                                    }
                                    case 'checkbox': {
                                        let e = [...i, l.key];
                                        c.push(
                                            (0, r.jsx)(
                                                g.oC,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({
                                                        path: e,
                                                        role: 'menuitemcheckbox'
                                                    })
                                                },
                                                l.key
                                            )
                                        ),
                                            s++;
                                        break;
                                    }
                                    case 'radio': {
                                        let e = [...i, l.key];
                                        c.push(
                                            (0, r.jsx)(
                                                g.Rk,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({
                                                        path: e,
                                                        role: 'menuitemradio'
                                                    })
                                                },
                                                l.key
                                            )
                                        ),
                                            s++;
                                        break;
                                    }
                                    case 'control': {
                                        let e = [...i, l.key];
                                        c.push(
                                            (0, r.jsx)(
                                                g.lc,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e }),
                                                    onClose: a
                                                },
                                                l.key
                                            )
                                        ),
                                            s++;
                                        break;
                                    }
                                    case 'compositecontrol': {
                                        let e = [...i, l.key];
                                        c.push(
                                            (0, r.jsx)(
                                                g.$I,
                                                {
                                                    ...l.props,
                                                    isFocused: n.isFocused(e),
                                                    menuItemProps: n.getItemProps({ path: e }),
                                                    onClose: a,
                                                    children: l.children
                                                },
                                                l.key
                                            )
                                        ),
                                            s++;
                                    }
                                }
                                return t;
                            }, []);
                        })(T, C, [], b)
                ]
            })
        })
    });
}
function b() {
    return (0, r.jsx)('div', {
        className: s()(E.menu, E.loader, E.flexible),
        children: (0, r.jsx)(f.$, {})
    });
}
function I() {
    let e = '\u266B (つ\uFF61\u25D5‿‿\u25D5\uFF61)つ \u266A',
        [t, n] = i.useState(e);
    return (
        i.useEffect(() => {
            if (p.Z.useReducedMotion) return;
            let t = setInterval(() => {
                n((t) => (t === e ? '\u266B \u2282(\uFF61\u25D5‿‿\u25D5\uFF61\u2282) \u266A' : e));
            }, 700);
            return () => clearInterval(t);
        }, []),
        (0, r.jsx)('div', {
            style: {
                width: '100%',
                textAlign: 'center'
            },
            children: t
        })
    );
}
