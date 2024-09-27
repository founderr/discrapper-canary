n(47120);
var i = n(237997),
    a = n(998502),
    s = n(576027),
    r = n(13838),
    l = n(812967),
    o = n(350085),
    c = n(910484),
    d = n(443952),
    u = n(266572),
    _ = n(177698),
    h = n(121826),
    E = n(753335),
    m = n(567481),
    I = n(498164),
    g = n(111097),
    p = n(908711),
    T = n(197941),
    f = n(462414),
    S = n(662194),
    C = n(188861);
let N = {
        ...s.A,
        ...d.Z,
        ...u.Z,
        ...h.Z,
        ...E.Z,
        ...m.Z,
        ...I.Z,
        ...g.Z,
        ...T.Z,
        ...S.Z,
        ...f.Z,
        ..._.Z,
        ...p.Z
    },
    A = {
        ...r.Z,
        ...o.M,
        ...c.n
    };
t.Z = {
    server: l.Z,
    commands: N,
    events: A,
    stores: [i.Z],
    transports: [C.Z],
    registerTransportsForEmbeddedPlatform: function () {
        a.ZP.ensureModule('discord_rpc').then(() => {
            for (let e of [n(178318).Z, n(967351).Z]) l.Z.registerTransport(e);
        });
    }
};
