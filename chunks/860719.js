n.d(a, {
    w: function () {
        return t;
    }
}),
    n(789020);
var i = n(85025);
function t(e) {
    let { flags: a } = e,
        n = (0, i.O)(a),
        t = null != n && ((null == n ? void 0 : n.messageContent) || (null == n ? void 0 : n.messageContentLimited)),
        r = null != n && ((null == n ? void 0 : n.guildPresences) || (null == n ? void 0 : n.guildPresencesLimited)),
        l = null != n && ((null == n ? void 0 : n.guildMembers) || (null == n ? void 0 : n.guildMembersLimited));
    return {
        hasMessageContent: t,
        hasGuildPresences: r,
        hasGuildMembers: l,
        hasIntents: t || r || l
    };
}
