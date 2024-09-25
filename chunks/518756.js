t(47120);
var a = t(470079),
    i = t(442837),
    r = t(357156),
    o = t(984933),
    c = t(430824),
    l = t(496675),
    s = t(981631);
n.Z = (e, n) => {
    let t = (0, i.e7)([c.Z], () => c.Z.getGuild(e), [e]),
        { canCreateGuildEvent: u } = (0, r.X)(t),
        d = (0, i.e7)([o.ZP], () => o.ZP.getChannels(e)[o.Zb], [e]),
        _ = a.useMemo(
            () =>
                null != n
                    ? d.filter((e) => {
                          let { channel: t } = e;
                          return t.type === n;
                      })
                    : d,
            [d, n]
        );
    return (0, i.e7)(
        [l.Z],
        () => {
            if (l.Z.can(s.Plq.ADMINISTRATOR, t) || u) return !0;
            for (let { channel: e } of _) {
                let { canCreateGuildEvent: n } = (0, r.G)(e);
                if (n) return !0;
            }
            return !1;
        },
        [_, t, u]
    );
};
