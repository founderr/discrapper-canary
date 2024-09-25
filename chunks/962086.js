n.d(t, {
    Zm: function () {
        return g;
    },
    aq: function () {
        return R;
    },
    iD: function () {
        return T;
    },
    mL: function () {
        return S;
    },
    og: function () {
        return O;
    },
    zS: function () {
        return N;
    }
});
var r = n(47120);
var i = n(570140),
    a = n(367907),
    o = n(703656),
    s = n(592125),
    l = n(984933),
    u = n(271383),
    c = n(430824),
    d = n(496675),
    _ = n(944486),
    E = n(9156),
    f = n(626135),
    h = n(160404),
    p = n(225675),
    m = n(981631),
    I = n(176505);
function T(e, t) {
    f.default.track(m.rMx.VIEW_AS_ROLES_SELECTED, {
        num_roles: Object.keys(t.roles).length,
        ...(0, a.hH)(e),
        is_viewing_as_member: t.type === p.z.NEW_MEMBER
    }),
        i.Z.dispatch({
            type: 'IMPERSONATE_UPDATE',
            guildId: e,
            data: t
        }),
        A(e);
}
function g(e, t) {
    let n = h.Z.getData(e);
    null != n &&
        n.type === t.type &&
        (f.default.track(m.rMx.VIEW_AS_ROLES_SELECTED, {
            num_roles: Object.keys(n.roles).length,
            ...(0, a.hH)(e),
            is_viewing_as_member: n.type === p.z.NEW_MEMBER
        }),
        i.Z.dispatch({
            type: 'IMPERSONATE_UPDATE',
            guildId: e,
            data: {
                ...n,
                ...t
            }
        }),
        A(e));
}
function S(e) {
    i.Z.dispatch({
        type: 'IMPERSONATE_STOP',
        guildId: e
    });
}
function A(e) {
    let t = _.Z.getChannelId(e),
        n = s.Z.getChannel(t);
    if (!(null != t && (0, I.AB)(t)) && !d.Z.can(m.Plq.VIEW_CHANNEL, n)) {
        let t = l.ZP.getDefaultChannel(e);
        null != t && (0, o.uL)(m.Z5c.CHANNEL(e, t.id));
    }
}
function v(e, t) {
    let n = [...l.ZP.getSelectableChannelIds(e), ...l.ZP.getVocalChannelIds(e)],
        r = Array.from(t);
    l.ZP.addConditionalChangeListener(() => {
        let t = u.ZP.getSelfMember(e);
        if (null == t) return !1;
        if (r.some((e) => !t.roles.includes(e))) return !0;
        let i = [...l.ZP.getSelectableChannelIds(e), ...l.ZP.getVocalChannelIds(e)].filter((e) => !n.includes(e));
        return i.length > 0 && N(e, i, []), !1;
    });
}
function N(e, t, n) {
    let r = new Set(E.ZP.getOptedInChannels(e));
    t.forEach((e) => r.add(e)),
        n.forEach((e) => r.delete(e)),
        g(e, {
            type: p.z.NEW_MEMBER,
            optInChannels: r
        });
}
function O(e, t) {
    let n = c.Z.getRoles(e);
    v(e, t);
    let r = {};
    t.forEach((e) => (r[e] = n[e])),
        g(e, {
            type: p.z.NEW_MEMBER,
            roles: r
        });
}
function R(e, t) {
    g(e, {
        type: p.z.NEW_MEMBER,
        ...t
    });
}
