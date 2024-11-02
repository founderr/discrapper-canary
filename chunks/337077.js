n.d(t, {
    M: function () {
        return o;
    }
}),
    n(47120),
    n(653041);
var a = n(192379),
    i = n(392711),
    r = n(591759),
    l = n(158222),
    s = n(154135);
function o(e, t, n) {
    let o = a.useRef(new Map()),
        [, c] = a.useState(null),
        [d, u] = a.useState(null),
        m = a.useMemo(
            () =>
                i.debounce((e, n) => {
                    if (null == n || e || 0 === t) return;
                    let a = n.match(r.Z.URL_REGEX);
                    if (null == a || 0 === a.length) {
                        (o.current = new Map()), u(null);
                        return;
                    }
                    u(i.uniq(a).slice(0, s.Yh));
                }, 1000),
            [t, o]
        );
    a.useEffect(() => {
        m(e, n);
    }, [m, n, e]),
        a.useEffect(() => {
            (async function e(e, t) {
                if (null == t) return;
                let n = e.current,
                    a = new Set(n.keys()),
                    i = t.filter((e) => !(null == a ? void 0 : a.has(e)));
                if (0 !== i.length)
                    try {
                        let t = await l.V6(i);
                        (e.current = (function (e, t, n) {
                            return (
                                null == n ||
                                    n.forEach((n) => {
                                        let a = (function (e, t) {
                                            return e.find((e) => (null == t ? void 0 : t.url) != null && e.startsWith(t.url));
                                        })(t, n);
                                        if (null == a) return;
                                        let i = e.get(a);
                                        null == i ? e.set(a, [n]) : i.push(n);
                                    }),
                                e
                            );
                        })(new Map(n), i, null == t ? void 0 : t.embeds)),
                            c({});
                    } catch (e) {}
            })(o, d);
        }, [d]);
    let h = o.current,
        g = a.useMemo(() => {
            let e = [];
            return (
                null == d ||
                    d.forEach((t) => {
                        let n = h.get(t);
                        null != n && e.push(...n);
                    }),
                e.length > 0 ? e : null
            );
        }, [d, h]);
    return { embeds: e ? null : g };
}
