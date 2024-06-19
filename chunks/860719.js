i.d(n, {
  w: function() {
    return l
  }
}), i(789020);
var t = i(85025);

function l(e) {
  let {
    flags: n
  } = e, i = (0, t.O)(n), l = null != i && ((null == i ? void 0 : i.messageContent) || (null == i ? void 0 : i.messageContentLimited)), a = null != i && ((null == i ? void 0 : i.guildPresences) || (null == i ? void 0 : i.guildPresencesLimited)), s = null != i && ((null == i ? void 0 : i.guildMembers) || (null == i ? void 0 : i.guildMembersLimited));
  return {
    hasMessageContent: l,
    hasGuildPresences: a,
    hasGuildMembers: s,
    hasIntents: l || a || s
  }
}