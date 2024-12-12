r.d(n, {
    E6: function () {
        return v;
    },
    HP: function () {
        return E;
    },
    II: function () {
        return T;
    },
    fK: function () {
        return g;
    },
    pL: function () {
        return I;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(902704),
    o = r(765250),
    l = r(214629),
    u = r(317381),
    c = r(812206),
    d = r(594190),
    f = r(788983),
    _ = r(355863),
    h = r(293273),
    p = r(145597),
    m = r(501787);
async function g() {
    let e = { outOfProcessOverlay: !0 },
        { default: n } = await Promise.all([r.e('50506'), r.e('35535'), r.e('90508'), r.e('13351'), r.e('39701'), r.e('93382'), r.e('70205'), r.e('86778'), r.e('27702'), r.e('79507'), r.e('50751'), r.e('32803')]).then(r.bind(r, 989373)),
        a = (e) =>
            (0, i.jsx)(n, {
                withTitleBar: !1,
                windowKey: e
            });
    (0, o.te)(m.OVERLAY_V3_LAYOUT_ID, _.Z.getDefaultLayout(m.OVERLAY_V3_LAYOUT_ID, 1), 1), await f.bA(m.OVERLAY_V3_KEY, a, e);
}
function E(e, n) {
    if (e === n) return !0;
    if (e.length !== n.length) return !1;
    for (let r = 0; r < e.length; r++) if (e[r].widget !== n[r].widget) return !1;
    return !0;
}
function v(e, n) {
    if (e === n) return !0;
    if (e.length !== n.length) return !1;
    for (let r = 0; r < e.length; r++) if (e[r].index !== n[r].index || e[r].notification !== n[r].notification || e[r].locked !== n[r].locked) return !1;
    return !0;
}
function I() {
    var e, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.ZP,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.Z,
        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.ZP,
        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.Z,
        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0, l.e1)(),
        f = a.getCurrentEmbeddedActivity(),
        _ = null == f ? void 0 : f.applicationId,
        m = null == _ ? void 0 : s.getApplication(_);
    if (null != f && null != m && o)
        return {
            id: f.applicationId,
            altId: void 0,
            name: m.name
        };
    let g = (0, p.QF)(),
        E = r.getGameForPID(g),
        v = i.getActivityForPID(g);
    return (null == E || null == E.id || null == E.name) && (null == v || null == v.application_id)
        ? void 0
        : {
              id: null !== (e = null == E ? void 0 : E.id) && void 0 !== e ? e : null == v ? void 0 : v.application_id,
              altId: null == v ? void 0 : v.application_id,
              name: null !== (n = null == E ? void 0 : E.name) && void 0 !== n ? n : null == v ? void 0 : v.name
          };
}
function T() {
    let e = (0, l.PR)();
    return (0, a.e7)([d.ZP, h.Z, u.ZP, c.Z], () => I(d.ZP, h.Z, u.ZP, c.Z, e), [e], s.Z);
}
