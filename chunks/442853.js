n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120),
    n(653041);
var i = n(192379),
    l = n(149765),
    r = n(442837),
    s = n(902704),
    a = n(592125),
    o = n(720202),
    c = n(271383),
    u = n(700785),
    d = n(231338);
let h = [],
    m = new Set();
function p(e) {
    let { entries: t, channelId: n } = e,
        p = (0, r.e7)([a.Z], () => a.Z.getChannel(n)),
        f = null == p ? void 0 : p.guild_id,
        g = i.useRef(new Set()),
        C = i.useMemo(() => {
            let e = new Set(null == t ? void 0 : t.map((e) => e.author_id));
            return !(0, s.E)([...g.current], [...e]) && (g.current = e), g.current;
        }, [t]);
    i.useEffect(() => {
        if (null != f)
            Array.from(C).forEach((e) => {
                o.Z.requestMember(f, e);
            });
    }, [C, f]);
    let x = (0, r.Wu)(
            [c.ZP],
            () => {
                if (null == f) return h;
                let e = [];
                for (let t of C) c.ZP.isMember(f, t) && e.push(t);
                return e;
            },
            [C, f]
        ),
        v = i.useMemo(() => {
            if (null == p || 0 === x.length) return m;
            let e = new Set();
            for (let t of x) {
                let n = u.uB({
                    user: t,
                    context: p
                });
                l.e$(n, d.Pl.VIEW_CHANNEL) && e.add(t);
            }
            return e;
        }, [x, p]);
    return i.useMemo(() => (null == t ? void 0 : t.filter((e) => v.has(e.author_id))), [t, v]);
}
