n.d(t, {
    EO: function () {
        return N;
    },
    Fc: function () {
        return v;
    },
    Ft: function () {
        return y;
    },
    W5: function () {
        return R;
    },
    _T: function () {
        return I;
    },
    oY: function () {
        return m;
    },
    u5: function () {
        return S;
    }
});
var r = n(411104);
var i = n(442837),
    a = n(246946),
    o = n(594174),
    s = n(981631),
    l = n(689938);
let u = 86400000,
    c = '???',
    d = (e) => ''.concat(e[0], '...'),
    _ = (e) => '@'.concat(e),
    E = (e) => 4 === e.length && e.endsWith('...'),
    f = {
        mode: 'full',
        decoration: 'never',
        identifiable: 'auto',
        forcePomelo: !1
    };
function h(e) {
    return !!(null != e && e.length > 0);
}
function p(e) {
    if (h(e.global_name)) return e.global_name;
    if (h(e.globalName)) return e.globalName;
    if (h(e.username)) return e.username;
    else return c;
}
function m(e) {
    var t;
    if (null == e) return;
    let n = a.Z.hidePersonalInformation,
        r = p(e);
    return n && r.toLocaleLowerCase() === (null === (t = e.username) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && '0' === e.discriminator && (r = d(r)), r;
}
function I(e) {
    var t;
    let n = (0, i.e7)([a.Z], () => a.Z.hidePersonalInformation);
    if (null == e) return;
    let r = p(e);
    return n && r.toLocaleLowerCase() === (null === (t = e.username) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && '0' === e.discriminator && (r = d(r)), r;
}
function T(e) {
    if (null != e) {
        if (h(e.globalName)) return e.globalName;
        else if (h(e.global_name)) return e.global_name;
        else return;
    }
}
function g(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == e) return c;
    let r = T(e),
        i = n ? R(e) : null !== (t = e.username) && void 0 !== t ? t : c;
    return r === i ? r : null != r ? ''.concat(r, ' (').concat(i, ')') : i;
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case s.Skl.ONLINE:
            return t ? l.Z.Messages.STATUS_ONLINE_MOBILE : l.Z.Messages.STATUS_ONLINE;
        case s.Skl.OFFLINE:
            return l.Z.Messages.STATUS_OFFLINE;
        case s.Skl.IDLE:
            return l.Z.Messages.STATUS_IDLE;
        case s.Skl.DND:
            return l.Z.Messages.STATUS_DND;
        case s.Skl.INVISIBLE:
            return l.Z.Messages.STATUS_INVISIBLE;
        case s.Skl.STREAMING:
            return l.Z.Messages.STATUS_STREAMING;
        case s.Skl.UNKNOWN:
        default:
            return null;
    }
}
function A(e, t) {
    let { maxDaysOld: n, minDaysOld: r = 0 } = t;
    if (null == e) return !1;
    let i = Date.now() - e.createdAt.getTime(),
        a = null == n || i <= u * n,
        o = i >= u * r;
    return (!!a && !!o) || !1;
}
function v(e) {
    return !A(e, {
        minDaysOld: 0,
        maxDaysOld: 30
    });
}
function N(e) {
    return A(e, {
        minDaysOld: 0,
        maxDaysOld: 7
    });
}
function O(e, t, n) {
    if (null == e) return l.Z.Messages.UNKNOWN_USER_MENTION_PLACEHOLDER;
    if (!h(e.username)) return c;
    let r = n;
    if (('always' === t.identifiable ? (r = !1) : 'never' === t.identifiable && (r = !0), '0' !== e.discriminator && e.discriminator !== s.fo$ && !t.forcePomelo)) return 'username' === t.mode ? e.username : r ? e.username : ''.concat(e.username, '#').concat(e.discriminator);
    let i = r ? d(e.username) : e.username;
    return 'never' !== t.decoration ? _(i) : i;
}
function R(e, t) {
    let n = {
            ...f,
            ...t
        },
        r = 'auto' !== n.identifiable || a.Z.hidePersonalInformation;
    return O(e, n, r);
}
function C(e, t) {
    let n = {
        ...f,
        ...t
    };
    return O(
        e,
        n,
        (0, i.e7)([a.Z], () => a.Z.hidePersonalInformation)
    );
}
function y(e) {
    return (0, i.e7)([o.default], () => {
        if (null != e) return e.isPrivate() && e.isDM() ? o.default.getUser(e.getRecipientId()) : null;
    });
}
t.ZP = {
    getName: m,
    useName: I,
    isNameConcealed: E,
    getUserTag: R,
    useUserTag: C,
    getFormattedName: g,
    getGlobalName: T,
    humanizeStatus: S,
    useDirectMessageRecipient: y
};
