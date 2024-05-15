"use strict";
i.r(t), i.d(t, {
  usePrivilegedApplicationIntents: function() {
    return n
  }
});
var l = i("630388"),
  a = i("981631");

function n(e) {
  if (null != e) return {
    guildPresences: (0, l.hasFlag)(e, a.ApplicationFlags.GATEWAY_PRESENCE),
    guildMembers: (0, l.hasFlag)(e, a.ApplicationFlags.GATEWAY_GUILD_MEMBERS),
    messageContent: (0, l.hasFlag)(e, a.ApplicationFlags.GATEWAY_MESSAGE_CONTENT),
    guildPresencesLimited: (0, l.hasFlag)(e, a.ApplicationFlags.GATEWAY_PRESENCE_LIMITED),
    guildMembersLimited: (0, l.hasFlag)(e, a.ApplicationFlags.GATEWAY_GUILD_MEMBERS_LIMITED),
    messageContentLimited: (0, l.hasFlag)(e, a.ApplicationFlags.GATEWAY_MESSAGE_CONTENT_LIMITED)
  }
}