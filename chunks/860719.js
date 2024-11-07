t.d(n, {
    w: function () {
        return l;
    }
}),
    t(789020);
var i = t(85025);
function l(e) {
    let { flags: n } = e,
        t = (0, i.O)(n),
        l = null != t && ((null == t ? void 0 : t.messageContent) || (null == t ? void 0 : t.messageContentLimited)),
        o = null != t && ((null == t ? void 0 : t.guildPresences) || (null == t ? void 0 : t.guildPresencesLimited)),
        s = null != t && ((null == t ? void 0 : t.guildMembers) || (null == t ? void 0 : t.guildMembersLimited));
    return {
        hasMessageContent: l,
        hasGuildPresences: o,
        hasGuildMembers: s,
        hasIntents: l || o || s
    };
}
