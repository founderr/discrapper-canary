r.d(n, {
    W3: function () {
        return d;
    },
    pJ: function () {
        return i;
    }
});
var i,
    a = r(47120);
var s = r(653041);
var o = r(200651),
    l = r(192379);
!(function (e) {
    (e[(e.MOUNTED = 0)] = 'MOUNTED'), (e[(e.ENTERED = 1)] = 'ENTERED'), (e[(e.YEETED = 2)] = 'YEETED');
})(i || (i = {}));
let u = {};
function c(e) {
    return e;
}
function d(e) {
    let { items: n, renderItem: r, getItemKey: i, wrapChildren: a = c, lazyCleanUpDelay: s } = e,
        d = l.useRef(-1);
    l.useLayoutEffect(() => () => clearTimeout(d.current));
    let [, f] = l.useState(u),
        _ = l.useRef(null),
        h = l.useMemo(() => {
            var e;
            let a = new Set(null === (e = _.current) || void 0 === e ? void 0 : e.keys()),
                o = new Map(_.current);
            for (let e of n) {
                let n = i(e),
                    l = o.get(n);
                if (null == l) {
                    let i = null != _.current ? 1 : 0,
                        a = () => {
                            var e, r;
                            let i = null === (e = _.current) || void 0 === e ? void 0 : e.get(n);
                            null == i || (2 === i.state ? (null === (r = _.current) || void 0 === r || r.delete(n), null != s ? (clearTimeout(d.current), (d.current = setTimeout(() => f({}), s))) : f({})) : __DEV__ && console.warn("SimpleTransitionGroup.cleanUp: Attempted to remove an item that isn't yeetable: ".concat(n)));
                        },
                        o = r(n, e, i, a);
                    l = {
                        item: e,
                        children: o,
                        state: i,
                        cleanUp: a,
                        renderItem: r
                    };
                } else if (l.item !== e || l.renderItem !== r || 2 === l.state) {
                    let { cleanUp: i } = l,
                        a = 2 === l.state ? 1 : l.state,
                        s = r(n, e, a, l.cleanUp);
                    l = {
                        item: e,
                        children: s,
                        state: a,
                        cleanUp: i,
                        renderItem: r
                    };
                }
                o.set(n, l), a.delete(n);
            }
            for (let e of a) {
                let n = o.get(e);
                if (null != n) {
                    if (2 !== n.state || n.renderItem !== r) {
                        let { item: i, cleanUp: a } = n,
                            s = r(e, n.item, 2, n.cleanUp);
                        null !=
                        (n = {
                            item: i,
                            children: s,
                            state: 2,
                            cleanUp: a,
                            renderItem: r
                        }).children
                            ? o.set(e, n)
                            : o.delete(e);
                    } else o.set(e, n);
                }
            }
            return o;
        }, [n, i, r, s]);
    l.useInsertionEffect(
        () => (
            (_.current = h),
            () => {
                var e;
                return null === (e = _.current) || void 0 === e ? void 0 : e.clear();
            }
        ),
        [h]
    );
    let p = [];
    for (let [, e] of h) p.push(e.children);
    return (0, o.jsx)(o.Fragment, { children: p.length > 0 ? a(p, n) : null });
}
function f() {
    return 'key';
}
