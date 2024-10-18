s.d(t, {
    O: function () {
        return a;
    }
});
var n = s(630388),
    i = s(981631);
function a(e) {
    if (null != e)
        return {
            guildPresences: (0, n.yE)(e, i.udG.GATEWAY_PRESENCE),
            guildMembers: (0, n.yE)(e, i.udG.GATEWAY_GUILD_MEMBERS),
            messageContent: (0, n.yE)(e, i.udG.GATEWAY_MESSAGE_CONTENT),
            guildPresencesLimited: (0, n.yE)(e, i.udG.GATEWAY_PRESENCE_LIMITED),
            guildMembersLimited: (0, n.yE)(e, i.udG.GATEWAY_GUILD_MEMBERS_LIMITED),
            messageContentLimited: (0, n.yE)(e, i.udG.GATEWAY_MESSAGE_CONTENT_LIMITED)
        };
}
