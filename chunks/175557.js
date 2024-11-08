t.d(n, {
    Z: function () {
        return h;
    }
});
var r = t(200651);
t(192379);
var a = t(108930),
    i = t(86406),
    o = t(146068),
    s = t(308545),
    l = t(397697),
    c = t(129871),
    d = t(206851),
    u = t(246933),
    m = t(995414),
    f = t(308083);
function h(e) {
    let { banner: n, ...t } = e;
    switch (n) {
        case f.qC.NIGHT_SKY:
            return (0, r.jsx)(l.Z, { ...t });
        case f.qC.CASTLE:
            return (0, r.jsx)(a.Z, { ...t });
        case f.qC.WORLD_MAP:
            return (0, r.jsx)(m.Z, { ...t });
        case f.qC.SEA_FOAM:
            return (0, r.jsx)(c.Z, { ...t });
        case f.qC.WARP_TUNNEL:
            return (0, r.jsx)(u.Z, { ...t });
        case f.qC.HOUSE:
            return (0, r.jsx)(o.Z, { ...t });
        case f.qC.HEIGHTMAP:
            return (0, r.jsx)(i.Z, { ...t });
        case f.qC.MESH:
            return (0, r.jsx)(s.Z, { ...t });
        case f.qC.SPATTER:
            return (0, r.jsx)(d.Z, { ...t });
    }
    return null;
}
