s.d(t, {
    w: function () {
        return i;
    }
}),
    s(789020);
var n = s(85025);
function i(e) {
    let { flags: t } = e,
        s = (0, n.O)(t),
        i = null != s && ((null == s ? void 0 : s.messageContent) || (null == s ? void 0 : s.messageContentLimited)),
        a = null != s && ((null == s ? void 0 : s.guildPresences) || (null == s ? void 0 : s.guildPresencesLimited)),
        r = null != s && ((null == s ? void 0 : s.guildMembers) || (null == s ? void 0 : s.guildMembersLimited));
    return {
        hasMessageContent: i,
        hasGuildPresences: a,
        hasGuildMembers: r,
        hasIntents: i || a || r
    };
}
