r.d(n, {
    CG: function () {
        return f;
    },
    OY: function () {
        return I;
    },
    SG: function () {
        return v;
    },
    T1: function () {
        return h;
    },
    i9: function () {
        return d;
    },
    kk: function () {
        return _;
    },
    lk: function () {
        return m;
    },
    pQ: function () {
        return c;
    },
    sN: function () {
        return E;
    },
    sO: function () {
        return p;
    },
    ur: function () {
        return g;
    }
});
var i = r(653041);
var a = r(913527),
    s = r.n(a),
    o = r(666657),
    l = r(676770),
    u = r(388032);
let c = {
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
};
function d(e) {
    return (null != e.dmSpamDetectedAt && s()(e.dmSpamDetectedAt).add(l.lp, 'hours') > s()()) || (null != e.raidDetectedAt && s()(e.raidDetectedAt).add(l.lp, 'hours') > s()());
}
function f(e) {
    return null != e.raidDetectedAt && s()(e.raidDetectedAt).add(l.lp, 'hours') > s()();
}
function _(e) {
    return null != e.dmSpamDetectedAt && s()(e.dmSpamDetectedAt).add(l.lp, 'hours') > s()();
}
function h(e) {
    return null == e ? void 0 : f(e) ? o.Hl.JOIN_RAID : o.Hl.DM_RAID;
}
function p(e, n) {
    let r = [];
    return e && r.push(o.dj.INVITES_DISABLED), n && r.push(o.dj.DMS_DISABLED), r;
}
function m(e, n) {
    let r = [];
    return !e && r.push(o.dj.INVITES_DISABLED), !n && r.push(o.dj.DMS_DISABLED), r;
}
function g(e) {
    return (null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date()) || (null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date());
}
function E(e) {
    return (null == e ? void 0 : e.dmsDisabledUntil) != null && new Date(e.dmsDisabledUntil) > new Date();
}
function v(e) {
    return (null == e ? void 0 : e.invitesDisabledUntil) != null && new Date(e.invitesDisabledUntil) > new Date();
}
function I(e, n) {
    var r;
    let i = null !== (r = e.dmsDisabledUntil) && void 0 !== r ? r : e.invitesDisabledUntil;
    if (null == i) return '';
    let a = null != e.dmsDisabledUntil,
        s = null != e.invitesDisabledUntil;
    switch (!0) {
        case a && s:
            return u.intl.formatToPlainString(u.t.hCZitb, {
                guildName: n,
                time: new Date(i).toLocaleString(u.intl.currentLocale, c)
            });
        case a:
            return u.intl.formatToPlainString(u.t.HNKxf3, {
                guildName: n,
                time: new Date(i).toLocaleString(u.intl.currentLocale, c)
            });
        case s:
            return u.intl.formatToPlainString(u.t.M3iSyM, {
                guildName: n,
                time: new Date(i).toLocaleString(u.intl.currentLocale, c)
            });
        default:
            return '';
    }
}
