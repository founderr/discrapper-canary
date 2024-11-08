n.d(t, {
    Zm: function () {
        return v;
    },
    aq: function () {
        return y;
    },
    iD: function () {
        return E;
    },
    mL: function () {
        return I;
    },
    og: function () {
        return T;
    },
    zS: function () {
        return b;
    }
}),
    n(47120);
var r = n(570140),
    i = n(367907),
    a = n(703656),
    s = n(592125),
    o = n(984933),
    l = n(271383),
    u = n(430824),
    c = n(496675),
    d = n(944486),
    f = n(9156),
    _ = n(626135),
    h = n(160404),
    p = n(225675),
    m = n(981631),
    g = n(176505);
function E(e, t) {
    _.default.track(m.rMx.VIEW_AS_ROLES_SELECTED, {
        num_roles: Object.keys(t.roles).length,
        ...(0, i.hH)(e),
        is_viewing_as_member: t.type === p.z.NEW_MEMBER
    }),
        r.Z.dispatch({
            type: 'IMPERSONATE_UPDATE',
            guildId: e,
            data: t
        }),
        S(e);
}
function v(e, t) {
    let n = h.Z.getData(e);
    null != n &&
        n.type === t.type &&
        (_.default.track(m.rMx.VIEW_AS_ROLES_SELECTED, {
            num_roles: Object.keys(n.roles).length,
            ...(0, i.hH)(e),
            is_viewing_as_member: n.type === p.z.NEW_MEMBER
        }),
        r.Z.dispatch({
            type: 'IMPERSONATE_UPDATE',
            guildId: e,
            data: {
                ...n,
                ...t
            }
        }),
        S(e));
}
function I(e) {
    r.Z.dispatch({
        type: 'IMPERSONATE_STOP',
        guildId: e
    });
}
function S(e) {
    let t = d.Z.getChannelId(e),
        n = s.Z.getChannel(t);
    if (!(null != t && (0, g.AB)(t)) && !c.Z.can(m.Plq.VIEW_CHANNEL, n)) {
        let t = o.ZP.getDefaultChannel(e);
        null != t && (0, a.uL)(m.Z5c.CHANNEL(e, t.id));
    }
}
function b(e, t, n) {
    let r = new Set(f.ZP.getOptedInChannels(e));
    t.forEach((e) => r.add(e)),
        n.forEach((e) => r.delete(e)),
        v(e, {
            type: p.z.NEW_MEMBER,
            optInChannels: r
        });
}
function T(e, t) {
    let n = u.Z.getRoles(e);
    !(function (e, t) {
        let n = [...o.ZP.getSelectableChannelIds(e), ...o.ZP.getVocalChannelIds(e)],
            r = Array.from(t);
        o.ZP.addConditionalChangeListener(() => {
            let t = l.ZP.getSelfMember(e);
            if (null == t) return !1;
            if (r.some((e) => !t.roles.includes(e))) return !0;
            let i = [...o.ZP.getSelectableChannelIds(e), ...o.ZP.getVocalChannelIds(e)].filter((e) => !n.includes(e));
            return i.length > 0 && b(e, i, []), !1;
        });
    })(e, t);
    let r = {};
    t.forEach((e) => (r[e] = n[e])),
        v(e, {
            type: p.z.NEW_MEMBER,
            roles: r
        });
}
function y(e, t) {
    v(e, {
        type: p.z.NEW_MEMBER,
        ...t
    });
}
