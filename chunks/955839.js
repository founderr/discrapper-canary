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
    let { searchQuery: t, selectedUsers: r, limit: o } = e,
        C = (0, s.e7)([l.Z], () => l.Z.getRecipientStatus()),
        [d, c] = i.useState(0),
        [x, h] = i.useState([]),
        [p, f] = i.useState(!1),
        [u, m] = i.useState(!1),
        [_, j] = i.useState(new Map());
    i.useEffect(() => {
        g(0, o);
    }, [t]);
    let g = async (e, i) => {
        if (!p && !u && null != e)
            try {
                f(!0);
                let s = [..._.values()];
                for (let [e, t] of C)
                    if (t === n.Fe.PENDING && !_.has(e)) {
                        let t = await (0, a.PR)(e);
                        s.push(t);
                    }
                let l = await (0, n.iF)(e, t, i);
                h((t) => {
                    let i = l.users.filter((e) => !r.has(e.id));
                    return ((s = s.filter((e) => !r.has(e.id))), 0 === e) ? [...r.values(), ...s.values(), ...i] : [...t, ...i];
                }),
                    j((e) => {
                        for (let t of s) e.set(t.id, t);
                        return e;
                    }),
                    c(l.nextIndex);
            } catch (e) {
                m(!0);
            } finally {
                f(!1);
            }
    };
    return {
        eligibleUsers: x,
        fetchUsers: () => g(d, o),
        hasError: u,
        isFetching: p,
        resendUsers: _
    };
};
