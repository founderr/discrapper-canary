n.d(t, {
    Em: function () {
        return _;
    },
    Kx: function () {
        return u;
    },
    _P: function () {
        return c;
    },
    eg: function () {
        return f;
    },
    is: function () {
        return m;
    },
    l8: function () {
        return d;
    },
    s: function () {
        return E;
    }
});
var r = n(470079);
function i(e) {
    return null != e.hasChildItems ? e.hasChildItems : !!(e.childItems || (e.title && r.Children.count(e.children) > 0)) || !1;
}
(function e(e) {
    return null;
}).getCollectionNode = function* (e, t) {
    let { childItems: n, title: a, children: o } = e,
        s = e.title || e.children,
        l = e.textValue || ('string' == typeof s ? s : '') || e['aria-label'] || '';
    !l && !(null == t ? void 0 : t.suppressTextValueWarning) && console.warn('<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop.'),
        yield {
            type: 'item',
            props: e,
            rendered: s,
            textValue: l,
            'aria-label': e['aria-label'],
            hasChildNodes: i(e),
            *childNodes() {
                if (n)
                    for (let e of n)
                        yield {
                            type: 'item',
                            value: e
                        };
                else if (a) {
                    let e = [];
                    r.Children.forEach(o, (t) => {
                        e.push({
                            type: 'item',
                            element: t
                        });
                    }),
                        yield* e;
                }
            }
        };
};
(function e(e) {
    return null;
}).getCollectionNode = function* (e) {
    let { children: t, title: n, items: i } = e;
    yield {
        type: 'section',
        props: e,
        hasChildNodes: !0,
        rendered: n,
        'aria-label': e['aria-label'],
        *childNodes() {
            if ('function' == typeof t) {
                if (!i) throw Error('props.children was a function but props.items is missing');
                for (let e of i)
                    yield {
                        type: 'item',
                        value: e,
                        renderer: t
                    };
            } else {
                let e = [];
                r.Children.forEach(t, (t) => {
                    e.push({
                        type: 'item',
                        element: t
                    });
                }),
                    yield* e;
            }
        }
    };
};
class a {
    build(e, t) {
        return (this.context = t), o(() => this.iterateCollection(e));
    }
    *iterateCollection(e) {
        let { children: t, items: n } = e;
        if ('function' == typeof t) {
            if (!n) throw Error('props.children was a function but props.items is missing');
            for (let n of e.items) yield* this.getFullNode({ value: n }, { renderer: t });
        } else {
            let e = [];
            r.Children.forEach(t, (t) => {
                e.push(t);
            });
            let n = 0;
            for (let t of e)
                for (let e of this.getFullNode(
                    {
                        element: t,
                        index: n
                    },
                    {}
                ))
                    n++, yield e;
        }
    }
    getKey(e, t, n, r) {
        if (null != e.key) return e.key;
        if ('cell' === t.type && null != t.key) return `${r}${t.key}`;
        let i = t.value;
        if (null != i) {
            var a;
            let e = null !== (a = i.key) && void 0 !== a ? a : i.id;
            if (null == e) throw Error('No key found for item');
            return e;
        }
        return r ? `${r}.${t.index}` : `$.${t.index}`;
    }
    getChildState(e, t) {
        return { renderer: t.renderer || e.renderer };
    }
    *getFullNode(e, t, n, i) {
        let a = e.element;
        if (!a && e.value && t && t.renderer) {
            let n = this.cache.get(e.value);
            if (n && (!n.shouldInvalidate || !n.shouldInvalidate(this.context))) {
                (n.index = e.index), (n.parentKey = i ? i.key : null), yield n;
                return;
            }
            a = t.renderer(e.value);
        }
        if (r.isValidElement(a)) {
            let r = a.type;
            if ('function' != typeof r && 'function' != typeof r.getCollectionNode) {
                let e = 'function' == typeof a.type ? a.type.name : a.type;
                throw Error(`Unknown element <${e}> in collection.`);
            }
            let o = r.getCollectionNode(a.props, this.context),
                u = e.index,
                c = o.next();
            for (; !c.done && c.value; ) {
                let r = c.value;
                e.index = u;
                let d = r.key;
                !d && (d = r.element ? null : this.getKey(a, e, t, n));
                let _ = [
                    ...this.getFullNode(
                        {
                            ...r,
                            key: d,
                            index: u,
                            wrapper: s(e.wrapper, r.wrapper)
                        },
                        this.getChildState(t, r),
                        n ? `${n}${a.key}` : a.key,
                        i
                    )
                ];
                for (let t of _) {
                    if (((t.value = r.value || e.value), t.value && this.cache.set(t.value, t), e.type && t.type !== e.type)) throw Error(`Unsupported type <${l(t.type)}> in <${l(i.type)}>. Only <${l(e.type)}> is supported.`);
                    u++, yield t;
                }
                c = o.next(_);
            }
            return;
        }
        if (null == e.key) return;
        let u = this,
            c = {
                type: e.type,
                props: e.props,
                key: e.key,
                parentKey: i ? i.key : null,
                value: e.value,
                level: i ? i.level + 1 : 0,
                index: e.index,
                rendered: e.rendered,
                textValue: e.textValue,
                'aria-label': e['aria-label'],
                wrapper: e.wrapper,
                shouldInvalidate: e.shouldInvalidate,
                hasChildNodes: e.hasChildNodes,
                childNodes: o(function* () {
                    if (!e.hasChildNodes) return;
                    let n = 0;
                    for (let r of e.childNodes()) for (let e of (null != r.key && (r.key = `${c.key}${r.key}`), (r.index = n), u.getFullNode(r, u.getChildState(t, r), c.key, c))) n++, yield e;
                })
            };
        yield c;
    }
    constructor() {
        this.cache = new WeakMap();
    }
}
function o(e) {
    let t = [],
        n = null;
    return {
        *[Symbol.iterator]() {
            for (let e of t) yield e;
            for (let r of (!n && (n = e()), n)) t.push(r), yield r;
        }
    };
}
function s(e, t) {
    return e && t ? (n) => e(t(n)) : e ? e : t ? t : void 0;
}
function l(e) {
    return e[0].toUpperCase() + e.slice(1);
}
function u(e, t, n) {
    let i = (0, r.useMemo)(() => new a(), []),
        { children: o, items: s, collection: l } = e;
    return (0, r.useMemo)(
        () =>
            l
                ? l
                : t(
                      i.build(
                          {
                              children: o,
                              items: s
                          },
                          n
                      )
                  ),
        [i, o, s, l, n, t]
    );
}
function c(e, t) {
    return 'function' == typeof t.getChildren ? t.getChildren(e.key) : e.childNodes;
}
function d(e) {
    return _(e, 0);
}
function _(e, t) {
    if (t < 0) return;
    let n = 0;
    for (let r of e) {
        if (n === t) return r;
        n++;
    }
}
function E(e) {
    let t;
    for (let n of e) t = n;
    return t;
}
function f(e, t, n) {
    if (t.parentKey === n.parentKey) return t.index - n.index;
    let r = [...h(e, t), t],
        i = [...h(e, n), n],
        a = r.slice(0, i.length).findIndex((e, t) => e !== i[t]);
    return -1 !== a ? ((t = r[a]), (n = i[a]), t.index - n.index) : r.findIndex((e) => e === n) >= 0 ? 1 : (i.findIndex((e) => e === t), -1);
}
function h(e, t) {
    let n = [];
    for (; (null == t ? void 0 : t.parentKey) != null; ) (t = e.getItem(t.parentKey)), n.unshift(t);
    return n;
}
let p = new WeakMap();
function m(e) {
    let t = p.get(e);
    if (null != t) return t;
    t = 0;
    let n = (r) => {
        for (let i of r) 'section' === i.type ? n(c(i, e)) : t++;
    };
    return n(e), p.set(e, t), t;
}
