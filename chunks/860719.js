n.d(t, {
    w: function () {
        return i;
    }
}),
    n(789020);
var a = n(85025);
function i(e) {
    let { flags: t } = e,
        n = (0, a.O)(t),
        i = null != n && ((null == n ? void 0 : n.messageContent) || (null == n ? void 0 : n.messageContentLimited)),
        s = null != n && ((null == n ? void 0 : n.guildPresences) || (null == n ? void 0 : n.guildPresencesLimited)),
        r = null != n && ((null == n ? void 0 : n.guildMembers) || (null == n ? void 0 : n.guildMembersLimited));
    return {
        hasMessageContent: i,
        hasGuildPresences: s,
        hasGuildMembers: r,
        hasIntents: i || s || r
    };
}
