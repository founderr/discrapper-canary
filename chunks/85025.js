s.d(n, {
    O: function () {
        return o;
    }
});
var t = s(630388),
    i = s(981631);
function o(e) {
    if (null != e)
        return {
            guildPresences: (0, t.yE)(e, i.udG.GATEWAY_PRESENCE),
            guildMembers: (0, t.yE)(e, i.udG.GATEWAY_GUILD_MEMBERS),
            messageContent: (0, t.yE)(e, i.udG.GATEWAY_MESSAGE_CONTENT),
            guildPresencesLimited: (0, t.yE)(e, i.udG.GATEWAY_PRESENCE_LIMITED),
            guildMembersLimited: (0, t.yE)(e, i.udG.GATEWAY_GUILD_MEMBERS_LIMITED),
            messageContentLimited: (0, t.yE)(e, i.udG.GATEWAY_MESSAGE_CONTENT_LIMITED)
        };
}
