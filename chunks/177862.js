"use strict";
var o, _, u, r, a, E, i, s;

function A(e) {
  return e.includes("LEGITIMATE_ACTIVITY") ? "LEGITIMATE_ACTIVITY" : e.includes("DM_SPAM") ? "DM_SPAM" : e.includes("JOIN_RAID") ? "JOIN_RAID" : "OTHER"
}
n.r(t), n.d(t, {
  Feedback: function() {
    return o
  },
  RaidAlertType: function() {
    return _
  },
  RaidLockdownFeedbackType: function() {
    return r
  },
  RaidResolutionType: function() {
    return u
  },
  getMostImportantRaidResolutionType: function() {
    return A
  }
}), n("689938"), (a = o || (o = {})).BUG = "BUG", a.ALLOWED = "ALLOWED", a.MENTION_RAID_REMOVE_RESTRICTION = "MENTION_RAID_REMOVE_RESTRICTION", (E = _ || (_ = {})).JOIN_RAID = "JOIN_RAID", E.MENTION_RAID = "MENTION_RAID", (i = u || (u = {})).LEGITIMATE_ACTIVITY = "LEGITIMATE_ACTIVITY", i.LEGITIMATE_ACCOUNTS = "LEGITIMATE_ACCOUNTS", i.LEGITIMATE_DMS = "LEGITIMATE_DMS", i.DM_SPAM = "DM_SPAM", i.JOIN_RAID = "JOIN_RAID", i.OTHER = "OTHER", (s = r || (r = {})).DM_SPAM = "DM_SPAM", s.MENTION_SPAM = "MENTION_SPAM", s.CHANNEL_SPAM = "CHANNEL_SPAM", s.SUS_NEW_MEMBERS = "SUS_NEW_MEMBERS", s.CHANGING_SETTINGS = "CHANGING_SETTINGS", s.OTHER = "OTHER"