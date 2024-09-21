s.d(n, {
    w: function () {
        return i;
    }
}),
    s(789020);
var t = s(85025);
function i(e) {
    let { flags: n } = e,
        s = (0, t.O)(n),
        i = null != s && ((null == s ? void 0 : s.messageContent) || (null == s ? void 0 : s.messageContentLimited)),
        o = null != s && ((null == s ? void 0 : s.guildPresences) || (null == s ? void 0 : s.guildPresencesLimited)),
        l = null != s && ((null == s ? void 0 : s.guildMembers) || (null == s ? void 0 : s.guildMembersLimited));
    return {
        hasMessageContent: i,
        hasGuildPresences: o,
        hasGuildMembers: l,
        hasIntents: i || o || l
    };
}
