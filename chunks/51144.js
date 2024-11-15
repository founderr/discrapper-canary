n.d(t, {
    EO: function () {
        return v;
    },
    Fc: function () {
        return E;
    },
    Ft: function () {
        return S;
    },
    W5: function () {
        return I;
    },
    _T: function () {
        return p;
    },
    oY: function () {
        return _;
    },
    u5: function () {
        return m;
    }
}),
    n(411104);
var r = n(442837),
    i = n(246946),
    a = n(594174),
    s = n(981631),
    o = n(388032);
let l = (e) => ''.concat(e[0], '...'),
    u = (e) => '@'.concat(e),
    c = {
        mode: 'full',
        decoration: 'never',
        identifiable: 'auto',
        forcePomelo: !1
    };
function d(e) {
    return !!(null != e && e.length > 0);
}
function f(e) {
    if (d(e.global_name)) return e.global_name;
    if (d(e.globalName)) return e.globalName;
    if (d(e.username)) return e.username;
    else return '???';
}
function _(e) {
    var t;
    if (null == e) return;
    let n = i.Z.hidePersonalInformation,
        r = f(e);
    return n && r.toLocaleLowerCase() === (null === (t = e.username) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && '0' === e.discriminator && (r = l(r)), r;
}
function p(e) {
    var t;
    let n = (0, r.e7)([i.Z], () => i.Z.hidePersonalInformation);
    if (null == e) return;
    let a = f(e);
    return n && a.toLocaleLowerCase() === (null === (t = e.username) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && '0' === e.discriminator && (a = l(a)), a;
}
function h(e) {
    if (null != e) {
        if (d(e.globalName)) return e.globalName;
        else if (d(e.global_name)) return e.global_name;
        else return;
    }
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case s.Skl.ONLINE:
            return t ? o.intl.string(o.t['9hghLC']) : o.intl.string(o.t.WbGtnJ);
        case s.Skl.OFFLINE:
            return o.intl.string(o.t.Vv0abG);
        case s.Skl.IDLE:
            return o.intl.string(o.t.qWbtVV);
        case s.Skl.DND:
            return o.intl.string(o.t.jaNpQE);
        case s.Skl.INVISIBLE:
            return o.intl.string(o.t.bg24HB);
        case s.Skl.STREAMING:
            return o.intl.string(o.t.XKYej4);
        case s.Skl.UNKNOWN:
        default:
            return null;
    }
}
function g(e, t) {
    let { maxDaysOld: n, minDaysOld: r = 0 } = t;
    if (null == e) return !1;
    let i = Date.now() - e.createdAt.getTime();
    return ((null == n || !!(i <= 86400000 * n)) && !!(i >= 86400000 * r)) || !1;
}
function E(e) {
    return !g(e, {
        minDaysOld: 0,
        maxDaysOld: 30
    });
}
function v(e) {
    return g(e, {
        minDaysOld: 0,
        maxDaysOld: 7
    });
}
function b(e, t, n) {
    if (null == e) return o.intl.string(o.t.sKdZ6e);
    if (!d(e.username)) return '???';
    let r = n;
    if (('always' === t.identifiable ? (r = !1) : 'never' === t.identifiable && (r = !0), '0' !== e.discriminator && e.discriminator !== s.fo$ && !t.forcePomelo)) return 'username' === t.mode ? e.username : r ? e.username : ''.concat(e.username, '#').concat(e.discriminator);
    let i = r ? l(e.username) : e.username;
    return 'never' !== t.decoration ? u(i) : i;
}
function I(e, t) {
    let n = {
            ...c,
            ...t
        },
        r = 'auto' !== n.identifiable || i.Z.hidePersonalInformation;
    return b(e, n, r);
}
function S(e) {
    return (0, r.e7)([a.default], () => {
        if (null != e) return e.isPrivate() && e.isDM() ? a.default.getUser(e.getRecipientId()) : null;
    });
}
t.ZP = {
    getName: _,
    useName: p,
    isNameConcealed: (e) => 4 === e.length && e.endsWith('...'),
    getUserTag: I,
    useUserTag: function (e, t) {
        let n = {
            ...c,
            ...t
        };
        return b(
            e,
            n,
            (0, r.e7)([i.Z], () => i.Z.hidePersonalInformation)
        );
    },
    getFormattedName: function (e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == e) return '???';
        let r = h(e),
            i = n ? I(e) : null !== (t = e.username) && void 0 !== t ? t : '???';
        return r === i ? r : null != r ? ''.concat(r, ' (').concat(i, ')') : i;
    },
    getGlobalName: h,
    humanizeStatus: m,
    useDirectMessageRecipient: S
};
