t.d(n, {
    w: function () {
        return i;
    }
}),
    t(789020);
var s = t(85025);
function i(e) {
    let { flags: n } = e,
        t = (0, s.O)(n),
        i = null != t && ((null == t ? void 0 : t.messageContent) || (null == t ? void 0 : t.messageContentLimited)),
        o = null != t && ((null == t ? void 0 : t.guildPresences) || (null == t ? void 0 : t.guildPresencesLimited)),
        l = null != t && ((null == t ? void 0 : t.guildMembers) || (null == t ? void 0 : t.guildMembersLimited));
    return {
        hasMessageContent: i,
        hasGuildPresences: o,
        hasGuildMembers: l,
        hasIntents: i || o || l
    };
}
