n.d(s, {
  $l: function() {
    return _
  },
  RI: function() {
    return t
  },
  Ud: function() {
    return a
  }
});
var S, r, o = n(689938);
let t = "https://discord.com/community/securing-your-server";
(S = r || (r = {})).DM_SPAM = "DM_SPAM", S.MESSAGE_SPAM = "MESSAGE_SPAM", S.MENTION_SPAM = "MENTION_SPAM", S.SUSPICIOUS_USERS = "SUSPICIOUS_USERS", S.SETTINGS_SPAM = "SETTINGS_SPAM";
let a = ["MESSAGE_SPAM", "DM_SPAM", "MENTION_SPAM", "SUSPICIOUS_USERS", "SETTINGS_SPAM"],
  _ = e => {
    switch (e) {
      case "DM_SPAM":
        return o.Z.Messages.GUILD_REPORT_RAID_MODAL_CHOICE_DM_SPAM;
      case "MENTION_SPAM":
        return o.Z.Messages.GUILD_REPORT_RAID_MODAL_CHOICE_MENTION_SPAM;
      case "MESSAGE_SPAM":
        return o.Z.Messages.GUILD_REPORT_RAID_MODAL_CHOICE_MESSAGE_SPAM;
      case "SETTINGS_SPAM":
        return o.Z.Messages.GUILD_REPORT_RAID_MODAL_CHOICE_SETTINGS_SPAM;
      case "SUSPICIOUS_USERS":
        return o.Z.Messages.GUILD_REPORT_RAID_MODAL_CHOICE_SUSPICIOUS_USERS
    }
    return null
  }