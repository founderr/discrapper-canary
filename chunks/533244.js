n.d(t, {
    CG: function () {
        return c;
    },
    OY: function () {
        return E;
    },
    SG: function () {
        return g;
    },
    T1: function () {
        return f;
    },
    i9: function () {
        return u;
    },
    kk: function () {
        return d;
    },
    lk: function () {
        return p;
    },
    pQ: function () {
        return l;
    },
    sN: function () {
        return m;
    },
    sO: function () {
        return _;
    },
    ur: function () {
        return h;
    }
}),
    n(653041);
var r = n(913527),
    i = n.n(r),
    a = n(666657),
    s = n(676770),
    o = n(388032);
let l = {
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
};
function u(e) {
    return (null != e.dmSpamDetectedAt && i()(e.dmSpamDetectedAt).add(s.lp, 'hours') > i()()) || (null != e.raidDetectedAt && i()(e.raidDetectedAt).add(s.lp, 'hours') > i()());
}
function c(e) {
    return null != e.raidDetectedAt && i()(e.raidDetectedAt).add(s.lp, 'hours') > i()();
}
function d(e) {
    return null != e.dmSpamDetectedAt && i()(e.dmSpamDetectedAt).add(s.lp, 'hours') > i()();
}
function f(e) {
    return null == e ? void 0 : c(e) ? a.Hl.JOIN_RAID : a.Hl.DM_RAID;
}
function _(e, t) {
    let n = [];
    return e && n.push(a.dj.INVITES_DISABLED), t && n.push(a.dj.DMS_DISABLED), n;
}
function p(e, t) {
    let n = [];
    return !e && n.push(a.dj.INVITES_DISABLED), !t && n.push(a.dj.DMS_DISABLED), n;
}
function h(e) {
    return (null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date()) || (null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date());
}
function m(e) {
    return (null == e ? void 0 : e.dmsDisabledUntil) != null && new Date(e.dmsDisabledUntil) > new Date();
}
function g(e) {
    return (null == e ? void 0 : e.invitesDisabledUntil) != null && new Date(e.invitesDisabledUntil) > new Date();
}
function E(e, t) {
    var n;
    let r = null !== (n = e.dmsDisabledUntil) && void 0 !== n ? n : e.invitesDisabledUntil;
    if (null == r) return '';
    let i = null != e.dmsDisabledUntil,
        a = null != e.invitesDisabledUntil;
    switch (!0) {
        case i && a:
            return o.intl.formatToPlainString(o.t.hCZitb, {
                guildName: t,
                time: new Date(r).toLocaleString(o.intl.currentLocale, l)
            });
        case i:
            return o.intl.formatToPlainString(o.t.HNKxf3, {
                guildName: t,
                time: new Date(r).toLocaleString(o.intl.currentLocale, l)
            });
        case a:
            return o.intl.formatToPlainString(o.t.M3iSyM, {
                guildName: t,
                time: new Date(r).toLocaleString(o.intl.currentLocale, l)
            });
        default:
            return '';
    }
}
