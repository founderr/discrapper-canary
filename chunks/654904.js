n.d(t, {
    $r: function () {
        return f;
    },
    DP: function () {
        return h;
    },
    Ly: function () {
        return p;
    },
    SG: function () {
        return _;
    }
});
var r = n(200651);
n(192379);
var i = n(866442),
    a = n(481060);
n(531643);
var s = n(768581);
n(403182);
var o = n(51144),
    l = n(661543),
    u = n(200299),
    c = n(486324),
    d = n(388032);
function f(e, t, i, s) {
    (0, a.openModalLazy)(async () => {
        let { default: a } = await Promise.all([n.e('70687'), n.e('51425')]).then(n.bind(n, 28130));
        return (n) =>
            (0, r.jsx)(a, {
                filters: s,
                maxFileSizeBytes: u.B,
                imageSpecifications: e === c.pC.BANNER ? d.intl.string(d.t.IhzZlp) : void 0,
                onComplete: (n, r) =>
                    (0, l.j)({
                        imageSrc: n,
                        file: r,
                        uploadType: e,
                        guildId: t,
                        isTryItOutFlow: i
                    }),
                uploadType: e,
                showUpsellHeader: !0,
                ...n
            });
    });
}
function _(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (null != e) return e;
    let { size: i = 80, canAnimate: a = !0 } = r,
        o = null === e;
    return o && null == t ? s.ZP.getDefaultAvatarURL(n.id, n.discriminator) : o || (null == t ? void 0 : t.avatar) == null ? n.getAvatarURL(void 0, i, a) : n.getAvatarURL(null == t ? void 0 : t.guildId, i, a);
}
function p(e) {
    var t;
    let { pendingNickname: n, pendingGlobalName: r, user: i, guildMember: a } = e,
        s = '' === n ? null : null != n ? n : null == a ? void 0 : a.nick,
        l = '' === r ? i.username : r;
    return null !== (t = null != s ? s : l) && void 0 !== t ? t : o.ZP.getName(i);
}
function h(e) {
    return (null != e ? (0, i.Bd)(e) : 1) > 0.25;
}
