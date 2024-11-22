n.d(t, {
    E6: function () {
        return E;
    },
    HP: function () {
        return g;
    },
    II: function () {
        return b;
    },
    fK: function () {
        return m;
    },
    pL: function () {
        return I;
    },
    yp: function () {
        return v;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(902704),
    s = n(765250),
    o = n(214629),
    l = n(317381),
    u = n(812206),
    c = n(594190),
    d = n(788983),
    f = n(355863),
    _ = n(293273),
    p = n(145597),
    h = n(501787);
async function m() {
    let { default: e } = await Promise.all([n.e('50506'), n.e('23755'), n.e('35535'), n.e('90508'), n.e('13351'), n.e('70205'), n.e('39701'), n.e('9540'), n.e('31915'), n.e('54109'), n.e('50751'), n.e('58730')]).then(n.bind(n, 989373));
    (0, s.te)(h.OVERLAY_V3_LAYOUT_ID, f.Z.getDefaultLayout(h.OVERLAY_V3_LAYOUT_ID, 1), 1),
        await d.bA(
            h.OVERLAY_V3_KEY,
            (t) =>
                (0, r.jsx)(e, {
                    withTitleBar: !1,
                    windowKey: t
                }),
            { outOfProcessOverlay: !0 }
        );
}
function g(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].widget !== t[n].widget) return !1;
    return !0;
}
function E(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].index !== t[n].index || e[n].notification !== t[n].notification || e[n].locked !== t[n].locked) return !1;
    return !0;
}
function v(e, t) {
    return e.participantsVersion === t.participantsVersion;
}
function I() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.ZP,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.Z,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.ZP,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u.Z,
        s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0, o.e1)(),
        d = i.getCurrentEmbeddedActivity(),
        f = null == d ? void 0 : d.applicationId,
        h = null == f ? void 0 : a.getApplication(f);
    if (null != d && null != h && s)
        return {
            id: d.applicationId,
            altId: void 0,
            name: h.name
        };
    let m = (0, p.QF)(),
        g = n.getGameForPID(m),
        E = r.getActivityForPID(m);
    return (null == g || null == g.id || null == g.name) && (null == E || null == E.application_id)
        ? void 0
        : {
              id: null !== (e = null == g ? void 0 : g.id) && void 0 !== e ? e : null == E ? void 0 : E.application_id,
              altId: null == E ? void 0 : E.application_id,
              name: null !== (t = null == g ? void 0 : g.name) && void 0 !== t ? t : null == E ? void 0 : E.name
          };
}
function b() {
    let e = (0, o.PR)();
    return (0, i.e7)([c.ZP, _.Z, l.ZP, u.Z], () => I(c.ZP, _.Z, l.ZP, u.Z, e), [e], a.Z);
}
