t.d(n, {
    w: function () {
        return a;
    }
}),
    t(789020);
var i = t(85025);
function a(e) {
    let { flags: n } = e,
        t = (0, i.O)(n),
        a = null != t && ((null == t ? void 0 : t.messageContent) || (null == t ? void 0 : t.messageContentLimited)),
        r = null != t && ((null == t ? void 0 : t.guildPresences) || (null == t ? void 0 : t.guildPresencesLimited)),
        o = null != t && ((null == t ? void 0 : t.guildMembers) || (null == t ? void 0 : t.guildMembersLimited));
    return {
        hasMessageContent: a,
        hasGuildPresences: r,
        hasGuildMembers: o,
        hasIntents: a || r || o
    };
}
