"use strict";
n.r(t), n.d(t, {
  COMMUNITY_PORTAL_SERVER_SAFETY_PAGE: function() {
    return r
  },
  REPORT_RAID_OPTIONS: function() {
    return i
  },
  getReportRaidTypeLabel: function() {
    return d
  }
});
var a, l, s = n("689938");
let r = "https://discord.com/community/securing-your-server";
(a = l || (l = {})).DM_SPAM = "DM_SPAM", a.MESSAGE_SPAM = "MESSAGE_SPAM", a.MENTION_SPAM = "MENTION_SPAM", a.SUSPICIOUS_USERS = "SUSPICIOUS_USERS", a.SETTINGS_SPAM = "SETTINGS_SPAM";
let i = ["MESSAGE_SPAM", "DM_SPAM", "MENTION_SPAM", "SUSPICIOUS_USERS", "SETTINGS_SPAM"],
  d = e => {
    switch (e) {
      case "DM_SPAM":
        return s.default.Messages.GUILD_REPORT_RAID_MODAL_CHOICE_DM_SPAM;
      case "MENTION_SPAM":
        return s.default.Messages.GUILD_REPORT_RAID_MODAL_CHOICE_MENTION_SPAM;
      case "MESSAGE_SPAM":
        return s.default.Messages.GUILD_REPORT_RAID_MODAL_CHOICE_MESSAGE_SPAM;
      case "SETTINGS_SPAM":
        return s.default.Messages.GUILD_REPORT_RAID_MODAL_CHOICE_SETTINGS_SPAM;
      case "SUSPICIOUS_USERS":
        return s.default.Messages.GUILD_REPORT_RAID_MODAL_CHOICE_SUSPICIOUS_USERS
    }
    return null
  }