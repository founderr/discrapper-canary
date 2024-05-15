"use strict";
i.r(t), i.d(t, {
  useBotDataAccess: function() {
    return a
  }
}), i("789020");
var l = i("85025");

function a(e) {
  let {
    flags: t
  } = e, i = (0, l.usePrivilegedApplicationIntents)(t), a = null != i && ((null == i ? void 0 : i.messageContent) || (null == i ? void 0 : i.messageContentLimited)), n = null != i && ((null == i ? void 0 : i.guildPresences) || (null == i ? void 0 : i.guildPresencesLimited)), s = null != i && ((null == i ? void 0 : i.guildMembers) || (null == i ? void 0 : i.guildMembersLimited));
  return {
    hasMessageContent: a,
    hasGuildPresences: n,
    hasGuildMembers: s,
    hasIntents: a || n || s
  }
}