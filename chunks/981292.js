n.d(t, {
    W3: function () {
        return c;
    },
    pJ: function () {
        return r;
    }
});
var r,
    i = n(47120);
var a = n(653041);
var o = n(735250),
    s = n(470079);
!(function (e) {
    (e[(e.MOUNTED = 0)] = 'MOUNTED'), (e[(e.ENTERED = 1)] = 'ENTERED'), (e[(e.YEETED = 2)] = 'YEETED');
})(r || (r = {}));
let l = {};
function u(e) {
    return e;
}
function c(e) {
    let { items: t, renderItem: n, getItemKey: r, wrapChildren: i = u, lazyCleanUpDelay: a } = e,
        c = s.useRef(-1);
    s.useLayoutEffect(() => () => clearTimeout(c.current));
    let [, d] = s.useState(l),
        _ = s.useRef(null),
        E = s.useMemo(() => {
            var e;
            let i = new Set(null === (e = _.current) || void 0 === e ? void 0 : e.keys()),
                o = new Map(_.current);
            for (let e of t) {
                let t = r(e),
                    s = o.get(t);
                if (null == s) {
                    let r = null != _.current ? 1 : 0,
                        i = () => {
                            var e, n;
                            let r = null === (e = _.current) || void 0 === e ? void 0 : e.get(t);
                            null == r || (2 === r.state ? (null === (n = _.current) || void 0 === n || n.delete(t), null != a ? (clearTimeout(c.current), (c.current = setTimeout(() => d({}), a))) : d({})) : __DEV__ && console.warn("SimpleTransitionGroup.cleanUp: Attempted to remove an item that isn't yeetable: ".concat(t)));
                        },
                        o = n(t, e, r, i);
                    s = {
                        item: e,
                        children: o,
                        state: r,
                        cleanUp: i,
                        renderItem: n
                    };
                } else if (s.item !== e || s.renderItem !== n || 2 === s.state) {
                    let { cleanUp: r } = s,
                        i = 2 === s.state ? 1 : s.state,
                        a = n(t, e, i, s.cleanUp);
                    s = {
                        item: e,
                        children: a,
                        state: i,
                        cleanUp: r,
                        renderItem: n
                    };
                }
                o.set(t, s), i.delete(t);
            }
            for (let e of i) {
                let t = o.get(e);
                if (null != t) {
                    if (2 !== t.state || t.renderItem !== n) {
                        let { item: r, cleanUp: i } = t,
                            a = n(e, t.item, 2, t.cleanUp);
                        null !=
                        (t = {
                            item: r,
                            children: a,
                            state: 2,
                            cleanUp: i,
                            renderItem: n
                        }).children
                            ? o.set(e, t)
                            : o.delete(e);
                    } else o.set(e, t);
                }
            }
            return o;
        }, [t, r, n, a]);
    s.useInsertionEffect(
        () => (
            (_.current = E),
            () => {
                var e;
                return null === (e = _.current) || void 0 === e ? void 0 : e.clear();
            }
        ),
        [E]
    );
    let f = [];
    for (let [, e] of E) f.push(e.children);
    return (0, o.jsx)(o.Fragment, { children: f.length > 0 ? i(f, t) : null });
}
function d() {
    return 'key';
}
