n.d(t, {
    B: function () {
        return m;
    },
    Os: function () {
        return h;
    },
    _L: function () {
        return f;
    },
    jU: function () {
        return I;
    },
    nG: function () {
        return p;
    }
});
var r = n(149765),
    i = n(442837),
    a = n(41776);
n(314897);
var o = n(592125),
    s = n(430824),
    l = n(496675),
    u = n(700785),
    c = n(146085),
    d = n(427679),
    _ = n(981631);
function E(e, t, n) {
    var r, i;
    return {
        id: e,
        type: t,
        deny: BigFlagUtils.remove(null !== (r = null == n ? void 0 : n.deny) && void 0 !== r ? r : PermissionUtils.NONE, MODERATE_STAGE_CHANNEL_PERMISSIONS),
        allow: BigFlagUtils.combine(MODERATE_STAGE_CHANNEL_PERMISSIONS, null !== (i = null == n ? void 0 : n.allow) && void 0 !== i ? i : PermissionUtils.NONE)
    };
}
function f(e, t, n) {
    var i, a;
    let o = null == n ? void 0 : n.permissionOverwrites[e];
    return {
        id: e,
        type: t,
        deny: null !== (i = null == o ? void 0 : o.deny) && void 0 !== i ? i : u.Hn,
        allow: r.Od(null !== (a = null == o ? void 0 : o.allow) && void 0 !== a ? a : u.Hn, c.yP)
    };
}
function h(e) {
    let { allow: t, deny: n } = e;
    return r.fS(t, u.Hn) && r.fS(n, u.Hn);
}
function p(e) {
    return (0, i.e7)(
        [l.Z, s.Z, o.Z],
        () => {
            let t = o.Z.getChannel(e),
                n = s.Z.getGuild(null == t ? void 0 : t.getGuildId());
            return !!(l.Z.can(_.Plq.ADMINISTRATOR, n) || l.Z.can(_.Plq.MANAGE_ROLES, t, void 0, void 0, !0) || l.Z.can(c.N, t)) || !1;
        },
        [e]
    );
}
function m(e) {
    return (0, i.e7)([o.Z, l.Z], () => null != e && l.Z.can(_.Plq.MUTE_MEMBERS, o.Z.getChannel(e)), [e]);
}
function I(e) {
    return !!(null != e && e.isGuildStageVoice() && a.Z.isLurking(e.guild_id) && d.Z.isPublic(e.id)) && l.Z.can(c.gl, e);
}
