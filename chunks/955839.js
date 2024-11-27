r.d(t, {
    q: function () {
        return o;
    }
}),
    r(47120),
    r(653041);
var i = r(192379),
    s = r(442837),
    a = r(232567),
    n = r(281494),
    l = r(276444);
let o = (e) => {
    let { searchQuery: t, selectedUsers: r } = e,
        o = (0, s.e7)([l.Z], () => l.Z.getRecipientStatus()),
        [C, d] = i.useState(0),
        [c, x] = i.useState([]),
        [h, p] = i.useState(!1),
        [f, u] = i.useState(!1),
        [m, _] = i.useState(new Map());
    i.useEffect(() => {
        j(0);
    }, [t]);
    let j = async (e) => {
        try {
            if (null == e) return;
            p(!0);
            let i = [...m.values()];
            for (let [e, t] of o)
                if (t === n.Fe.PENDING && !m.has(e)) {
                    let t = await (0, a.PR)(e);
                    i.push(t);
                }
            let s = await (0, n.iF)(e, t);
            x((t) => {
                let a = s.users.filter((e) => !r.has(e.id));
                return ((i = i.filter((e) => !r.has(e.id))), 0 === e) ? [...r.values(), ...i.values(), ...a] : [...t, ...a];
            }),
                _((e) => {
                    for (let t of i) e.set(t.id, t);
                    return e;
                }),
                d(s.nextIndex);
        } catch (e) {
            u(!0);
        } finally {
            p(!1);
        }
    };
    return {
        eligibleUsers: c,
        fetchUsers: () => j(C),
        hasError: f,
        isFetching: h,
        resendUsers: m
    };
};
