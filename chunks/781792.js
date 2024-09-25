n.d(t, {
    e: function () {
        return u;
    }
});
var r = n(789020);
var i = n(544891),
    a = n(570140),
    o = n(962086),
    s = n(160404),
    l = n(981631);
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (s.Z.isFullServerPreview(e)) {
        (0, o.aq)(e, { memberOptions: t });
        return;
    }
    return (
        a.Z.dispatch({
            type: 'GUILD_MEMBER_UPDATE_LOCAL',
            guildId: e,
            roles: t.roles,
            flags: t.flags
        }),
        i.tn.patch({
            url: l.ANM.SET_GUILD_MEMBER(e),
            body: t,
            oldFormErrors: !!n || void 0
        })
    );
}
