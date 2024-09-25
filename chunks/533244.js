n.d(t, {
    CG: function () {
        return d;
    },
    OY: function () {
        return T;
    },
    SG: function () {
        return I;
    },
    T1: function () {
        return E;
    },
    i9: function () {
        return c;
    },
    kk: function () {
        return _;
    },
    lk: function () {
        return h;
    },
    pQ: function () {
        return u;
    },
    sN: function () {
        return m;
    },
    sO: function () {
        return f;
    },
    ur: function () {
        return p;
    }
});
var r = n(653041);
var i = n(913527),
    a = n.n(i),
    o = n(666657),
    s = n(676770),
    l = n(689938);
let u = {
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
};
function c(e) {
    return (null != e.dmSpamDetectedAt && a()(e.dmSpamDetectedAt).add(s.lp, 'hours') > a()()) || (null != e.raidDetectedAt && a()(e.raidDetectedAt).add(s.lp, 'hours') > a()());
}
function d(e) {
    return null != e.raidDetectedAt && a()(e.raidDetectedAt).add(s.lp, 'hours') > a()();
}
function _(e) {
    return null != e.dmSpamDetectedAt && a()(e.dmSpamDetectedAt).add(s.lp, 'hours') > a()();
}
function E(e) {
    return null == e ? void 0 : d(e) ? o.Hl.JOIN_RAID : o.Hl.DM_RAID;
}
function f(e, t) {
    let n = [];
    return e && n.push(o.dj.INVITES_DISABLED), t && n.push(o.dj.DMS_DISABLED), n;
}
function h(e, t) {
    let n = [];
    return !e && n.push(o.dj.INVITES_DISABLED), !t && n.push(o.dj.DMS_DISABLED), n;
}
function p(e) {
    return (null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date()) || (null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date());
}
function m(e) {
    return (null == e ? void 0 : e.dmsDisabledUntil) != null && new Date(e.dmsDisabledUntil) > new Date();
}
function I(e) {
    return (null == e ? void 0 : e.invitesDisabledUntil) != null && new Date(e.invitesDisabledUntil) > new Date();
}
function T(e, t) {
    var n;
    let r = null !== (n = e.dmsDisabledUntil) && void 0 !== n ? n : e.invitesDisabledUntil;
    if (null == r) return '';
    let i = null != e.dmsDisabledUntil,
        a = null != e.invitesDisabledUntil;
    switch (!0) {
        case i && a:
            return l.Z.Messages.GUILD_ANTIRAID_PAUSE_DMS_AND_JOINS_NAGBAR_MESSAGE_NEW.format({
                guildName: t,
                time: new Date(r).toLocaleString(l.Z.getLocale(), u)
            });
        case i:
            return l.Z.Messages.GUILD_ANTIRAID_PAUSE_DMS_NAGBAR_MESSAGE_NEW.format({
                guildName: t,
                time: new Date(r).toLocaleString(l.Z.getLocale(), u)
            });
        case a:
            return l.Z.Messages.GUILD_ANTIRAID_PAUSE_JOINS_NAGBAR_MESSAGE_NEW.format({
                guildName: t,
                time: new Date(r).toLocaleString(l.Z.getLocale(), u)
            });
        default:
            return '';
    }
}
