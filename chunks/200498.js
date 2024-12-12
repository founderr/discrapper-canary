r.d(n, {
    B: function () {
        return E;
    },
    Os: function () {
        return m;
    },
    _L: function () {
        return p;
    },
    jU: function () {
        return v;
    },
    nG: function () {
        return g;
    }
});
var i = r(149765),
    a = r(442837),
    s = r(41776);
r(314897);
var o = r(592125),
    l = r(430824),
    u = r(496675),
    c = r(700785),
    d = r(146085),
    f = r(427679),
    _ = r(981631);
function h(e, n, r) {
    var i, a;
    return {
        id: e,
        type: n,
        deny: BigFlagUtils.remove(null !== (i = null == r ? void 0 : r.deny) && void 0 !== i ? i : PermissionUtils.NONE, MODERATE_STAGE_CHANNEL_PERMISSIONS),
        allow: BigFlagUtils.combine(MODERATE_STAGE_CHANNEL_PERMISSIONS, null !== (a = null == r ? void 0 : r.allow) && void 0 !== a ? a : PermissionUtils.NONE)
    };
}
function p(e, n, r) {
    var a, s;
    let o = null == r ? void 0 : r.permissionOverwrites[e];
    return {
        id: e,
        type: n,
        deny: null !== (a = null == o ? void 0 : o.deny) && void 0 !== a ? a : c.Hn,
        allow: i.Od(null !== (s = null == o ? void 0 : o.allow) && void 0 !== s ? s : c.Hn, d.yP)
    };
}
function m(e) {
    let { allow: n, deny: r } = e;
    return i.fS(n, c.Hn) && i.fS(r, c.Hn);
}
function g(e) {
    return (0, a.e7)(
        [u.Z, l.Z, o.Z],
        () => {
            let n = o.Z.getChannel(e),
                r = l.Z.getGuild(null == n ? void 0 : n.getGuildId());
            return !!(u.Z.can(_.Plq.ADMINISTRATOR, r) || u.Z.can(_.Plq.MANAGE_ROLES, n, void 0, void 0, !0) || u.Z.can(d.N, n)) || !1;
        },
        [e]
    );
}
function E(e) {
    return (0, a.e7)([o.Z, u.Z], () => null != e && u.Z.can(_.Plq.MUTE_MEMBERS, o.Z.getChannel(e)), [e]);
}
function v(e) {
    return !!(null != e && e.isGuildStageVoice() && s.Z.isLurking(e.guild_id) && f.Z.isPublic(e.id)) && u.Z.can(d.gl, e);
}
