n(47120);
var i = n(200651),
    s = n(192379),
    l = n(994640),
    a = n(247007),
    r = n(999464),
    o = n(503406),
    c = n(463115),
    d = n(888592);
t.Z = (e) => {
    let { onClose: t, invite: n, forceGuildScrollHeight: u = !0, isNUXFlow: m } = e,
        [x, h] = s.useState([d.tF.VERIFY_EMAIL]),
        [g, v] = s.useState(''),
        [N, j] = s.useState(''),
        [f, C] = s.useState(void 0),
        [I, p] = s.useState([]),
        S = (e) => {
            h(x.concat(e).slice(-4));
        };
    switch (x[x.length - 1]) {
        case d.tF.VERIFY_EMAIL:
            return (0, i.jsx)(l.Z, {
                setGuildsInfo: p,
                setStep: S,
                email: g,
                setEmail: v,
                setGuildId: C,
                invite: n,
                onClose: t,
                isNUXFlow: m
            });
        case d.tF.SELECT_SCHOOL:
            return (0, i.jsx)(a.Z, {
                guildsInfo: I,
                setStep: S,
                email: g,
                setGuildId: C,
                forceGuildScrollHeight: u
            });
        case d.tF.SUBMIT_SCHOOL:
            return (0, i.jsx)(r.Z, {
                onBack: () => {
                    x.length > 1 && h(x.slice(0, -1).slice(-4));
                },
                setStep: S,
                email: g,
                school: N,
                setSchool: j
            });
        case d.tF.VERIFY_PIN:
            return (0, i.jsx)(o.Z, {
                email: g,
                onClose: t,
                guildId: f
            });
        case d.tF.EMAIL_WAITLIST:
            return (0, i.jsx)(c.Z, {
                setStep: S,
                school: N
            });
        default:
            return null;
    }
};
