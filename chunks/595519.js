n.d(t, {
    NX: function () {
        return c;
    },
    WS: function () {
        return u;
    },
    l5: function () {
        return l;
    },
    qB: function () {
        return d;
    }
});
var r = n(106351), i = n(442837), a = n(592125), o = n(496675), s = n(231338);
function l(e) {
    var t;
    if (null == e || void 0 === e)
        return !1;
    let n = a.Z.getChannel(e.parent_id);
    if (null != n && (null == n ? void 0 : n.type) !== r.d.GUILD_CATEGORY)
        return !1;
    return t = e.type, [
        r.d.GUILD_TEXT,
        r.d.GROUP_DM,
        r.d.DM
    ].includes(t);
}
function u(e, t) {
    if (null == e)
        return !1;
    let n = l(e), r = o.Z.can(s.Pl.USE_EMBEDDED_ACTIVITIES, e), i = r && o.Z.can(s.Pl.SEND_MESSAGES | s.Pl.USE_APPLICATION_COMMANDS, e);
    return (null == e ? void 0 : e.guild_id) == null ? n : t ? i && n : r && n;
}
function c(e, t) {
    let {
        isActivitiesInTextEnabledForChannelType: n,
        channelGuildId: r,
        hasPermission: u
    } = (0, i.cj)([
        a.Z,
        o.Z
    ], () => {
        let n = a.Z.getChannel(e), r = o.Z.can(s.Pl.USE_EMBEDDED_ACTIVITIES, n), i = r && o.Z.can(s.Pl.SEND_MESSAGES | s.Pl.USE_APPLICATION_COMMANDS, n);
        return {
            isActivitiesInTextEnabledForChannelType: l(n),
            channelGuildId: null == n ? void 0 : n.guild_id,
            hasPermission: t ? i : r
        };
    });
    return null != r ? u && n : n;
}
function d(e) {
    let t = (0, i.e7)([a.Z], () => a.Z.getChannel(e)), n = (0, i.e7)([o.Z], () => o.Z.can(s.Pl.USE_EMBEDDED_ACTIVITIES, t)), r = l(t), u = null == t ? void 0 : t.guild_id;
    return null != u ? n && r : r;
}
