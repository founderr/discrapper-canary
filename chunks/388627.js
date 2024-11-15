n.d(t, {
    E6: function () {
        return h;
    },
    HP: function () {
        return p;
    },
    II: function () {
        return E;
    },
    fK: function () {
        return _;
    },
    pL: function () {
        return g;
    },
    yp: function () {
        return m;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(902704),
    s = n(765250),
    o = n(594190),
    l = n(788983),
    u = n(355863),
    c = n(293273),
    d = n(145597),
    f = n(501787);
async function _() {
    let { default: e } = await Promise.all([n.e('50506'), n.e('23755'), n.e('35535'), n.e('90508'), n.e('13351'), n.e('70205'), n.e('9540'), n.e('51866'), n.e('54109'), n.e('56295')]).then(n.bind(n, 989373));
    (0, s.te)(f.$S, u.Z.getDefaultLayout(f.$S, 1), 1),
        await l.bA(
            f.$J,
            (t) =>
                (0, r.jsx)(e, {
                    withTitleBar: !1,
                    windowKey: t
                }),
            { outOfProcessOverlay: !0 }
        );
}
function p(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].widget !== t[n].widget) return !1;
    return !0;
}
function h(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].index !== t[n].index || e[n].notification !== t[n].notification || e[n].locked !== t[n].locked) return !1;
    return !0;
}
function m(e, t) {
    return e.participantsVersion === t.participantsVersion;
}
function g() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.ZP,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Z,
        i = (0, d.QF)(),
        a = n.getGameForPID(i),
        s = r.getActivityForPID(i);
    return (null == a || null == a.id || null == a.name) && (null == s || null == s.application_id)
        ? void 0
        : {
              id: null !== (e = null == a ? void 0 : a.id) && void 0 !== e ? e : null == s ? void 0 : s.application_id,
              altId: null == s ? void 0 : s.application_id,
              name: null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : null == s ? void 0 : s.name
          };
}
function E() {
    return (0, i.e7)([o.ZP, c.Z], () => g(o.ZP, c.Z), [], a.Z);
}
