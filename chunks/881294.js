n.d(t, {
    z: function () {
        return a;
    }
});
var i = n(594174),
    r = n(626135),
    l = n(258971);
function a(e, t) {
    var n;
    let a = l.z8.getField('sessionId'),
        o = l.z8.getField('guildId'),
        s = null === (n = l.z8.getField('entrypoint')) || void 0 === n ? void 0 : n.name,
        c = i.default.getCurrentUser();
    return r.default.track(e, {
        ...t,
        guild_id: o,
        directory_session_id: a,
        source: s,
        user_id: null == c ? void 0 : c.id
    });
}
