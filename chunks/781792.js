r.d(n, {
    e: function () {
        return c;
    }
});
var i = r(789020);
var a = r(544891),
    s = r(570140),
    o = r(962086),
    l = r(160404),
    u = r(981631);
function c(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (l.Z.isFullServerPreview(e)) {
        (0, o.aq)(e, { memberOptions: n });
        return;
    }
    return (
        s.Z.dispatch({
            type: 'GUILD_MEMBER_UPDATE_LOCAL',
            guildId: e,
            roles: n.roles,
            flags: n.flags
        }),
        a.tn.patch({
            url: u.ANM.SET_GUILD_MEMBER(e),
            body: n,
            oldFormErrors: !!r || void 0,
            rejectWithError: !1
        })
    );
}
