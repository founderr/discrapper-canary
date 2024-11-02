n(47120), n(653041);
var i = n(192379),
    l = n(442837),
    s = n(430824),
    a = n(496675),
    o = n(771845),
    r = n(99325),
    c = n(273387),
    d = n(981631);
t.Z = (e, t) => {
    let [n, u] = i.useState(!1),
        m = (0, l.e7)([c.Z], () => c.Z.getAdminGuildEntryIds(t)),
        C = (0, l.Wu)(
            [o.ZP, s.Z, a.Z],
            () => {
                let t = o.ZP.getFlattenedGuildIds(),
                    n = [];
                return (
                    t.forEach((t) => {
                        let i = s.Z.getGuild(t);
                        null != i && a.Z.can(d.Plq.ADMINISTRATOR, i) && i.id !== e && n.push(i);
                    }),
                    n
                );
            },
            [e]
        ),
        x = i.useCallback(async () => {
            u(!0),
                await r._Q(
                    t,
                    C.map((e) => e.id)
                ),
                u(!1);
        }, [t, C]);
    i.useEffect(() => {
        x();
    }, []);
    let f = i.useMemo(() => C.filter((e) => !(null == m ? void 0 : m.has(e.id))), [C, m]);
    return {
        availableGuilds: f,
        addedGuilds: i.useMemo(() => C.filter((e) => (null == m ? void 0 : m.has(e.id))), [C, m]),
        loading: n
    };
};
