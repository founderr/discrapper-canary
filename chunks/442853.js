n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120),
    n(653041);
var i = n(192379),
    l = n(149765),
    r = n(442837),
    a = n(902704),
    s = n(592125),
    o = n(720202),
    c = n(271383),
    d = n(700785),
    u = n(231338);
let h = [],
    p = new Set();
function m(e) {
    let { entries: t, channelId: n } = e,
        m = (0, r.e7)([s.Z], () => s.Z.getChannel(n)),
        f = null == m ? void 0 : m.guild_id,
        g = i.useRef(new Set()),
        C = i.useMemo(() => {
            let e = new Set(null == t ? void 0 : t.map((e) => e.author_id));
            return !(0, a.E)([...g.current], [...e]) && (g.current = e), g.current;
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
            if (null == m || 0 === x.length) return p;
            let e = new Set();
            for (let t of x) {
                let n = d.uB({
                    user: t,
                    context: m
                });
                l.e$(n, u.Pl.VIEW_CHANNEL) && e.add(t);
            }
            return e;
        }, [x, m]);
    return i.useMemo(() => (null == t ? void 0 : t.filter((e) => v.has(e.author_id))), [t, v]);
}
