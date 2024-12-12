r.d(n, {
    Zm: function () {
        return T;
    },
    aq: function () {
        return C;
    },
    iD: function () {
        return I;
    },
    mL: function () {
        return b;
    },
    og: function () {
        return N;
    },
    zS: function () {
        return A;
    }
});
var i = r(47120);
var a = r(570140),
    s = r(367907),
    o = r(703656),
    l = r(592125),
    u = r(984933),
    c = r(271383),
    d = r(430824),
    f = r(496675),
    _ = r(944486),
    h = r(9156),
    p = r(626135),
    m = r(160404),
    g = r(225675),
    E = r(981631),
    v = r(176505);
function I(e, n) {
    p.default.track(E.rMx.VIEW_AS_ROLES_SELECTED, {
        num_roles: Object.keys(n.roles).length,
        ...(0, s.hH)(e),
        is_viewing_as_member: n.type === g.z.NEW_MEMBER
    }),
        a.Z.dispatch({
            type: 'IMPERSONATE_UPDATE',
            guildId: e,
            data: n
        }),
        y(e);
}
function T(e, n) {
    let r = m.Z.getData(e);
    null != r &&
        r.type === n.type &&
        (p.default.track(E.rMx.VIEW_AS_ROLES_SELECTED, {
            num_roles: Object.keys(r.roles).length,
            ...(0, s.hH)(e),
            is_viewing_as_member: r.type === g.z.NEW_MEMBER
        }),
        a.Z.dispatch({
            type: 'IMPERSONATE_UPDATE',
            guildId: e,
            data: {
                ...r,
                ...n
            }
        }),
        y(e));
}
function b(e) {
    a.Z.dispatch({
        type: 'IMPERSONATE_STOP',
        guildId: e
    });
}
function y(e) {
    let n = _.Z.getChannelId(e),
        r = l.Z.getChannel(n);
    if (!(null != n && (0, v.AB)(n)) && !f.Z.can(E.Plq.VIEW_CHANNEL, r)) {
        let n = u.ZP.getDefaultChannel(e);
        null != n && (0, o.uL)(E.Z5c.CHANNEL(e, n.id));
    }
}
function S(e, n) {
    let r = [...u.ZP.getSelectableChannelIds(e), ...u.ZP.getVocalChannelIds(e)],
        i = Array.from(n);
    u.ZP.addConditionalChangeListener(() => {
        let n = c.ZP.getSelfMember(e);
        if (null == n) return !1;
        if (i.some((e) => !n.roles.includes(e))) return !0;
        let a = [...u.ZP.getSelectableChannelIds(e), ...u.ZP.getVocalChannelIds(e)].filter((e) => !r.includes(e));
        return a.length > 0 && A(e, a, []), !1;
    });
}
function A(e, n, r) {
    let i = new Set(h.ZP.getOptedInChannels(e));
    n.forEach((e) => i.add(e)),
        r.forEach((e) => i.delete(e)),
        T(e, {
            type: g.z.NEW_MEMBER,
            optInChannels: i
        });
}
function N(e, n) {
    let r = d.Z.getRoles(e);
    S(e, n);
    let i = {};
    n.forEach((e) => (i[e] = r[e])),
        T(e, {
            type: g.z.NEW_MEMBER,
            roles: i
        });
}
function C(e, n) {
    T(e, {
        type: g.z.NEW_MEMBER,
        ...n
    });
}
