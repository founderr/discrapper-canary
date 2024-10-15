var r = n(627420),
    i = n(375964),
    a = n.n(i),
    s = n(924658),
    o = n.n(s),
    l = n(539590),
    u = n.n(l);
let c = (e) => ({
        ...o(),
        ...u(),
        ...e
    }),
    d = new r.ZP({
        getMessages: (e) => {
            if ('en-US' === e) return c(a());
            return n(385007)('./'.concat(e, '.jsona'))
                .then((e) => {
                    let { default: t } = e;
                    return t;
                })
                .then(c);
        },
        getLanguages: () => n(515297)
    });
t.Z = d;
