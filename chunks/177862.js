"use strict";
var a, i, s, d, o, l, r, u;

function c(e) {
  return e.includes("LEGITIMATE_ACTIVITY") ? "LEGITIMATE_ACTIVITY" : e.includes("DM_SPAM") ? "DM_SPAM" : e.includes("JOIN_RAID") ? "JOIN_RAID" : "OTHER"
}
n.r(t), n.d(t, {
  Feedback: function() {
    return a
  },
  RaidAlertType: function() {
    return i
  },
  RaidLockdownFeedbackType: function() {
    return d
  },
  RaidResolutionType: function() {
    return s
  },
  getMostImportantRaidResolutionType: function() {
    return c
  }
}), n("689938"), (o = a || (a = {})).BUG = "BUG", o.ALLOWED = "ALLOWED", o.MENTION_RAID_REMOVE_RESTRICTION = "MENTION_RAID_REMOVE_RESTRICTION", (l = i || (i = {})).JOIN_RAID = "JOIN_RAID", l.MENTION_RAID = "MENTION_RAID", (r = s || (s = {})).LEGITIMATE_ACTIVITY = "LEGITIMATE_ACTIVITY", r.LEGITIMATE_ACCOUNTS = "LEGITIMATE_ACCOUNTS", r.LEGITIMATE_DMS = "LEGITIMATE_DMS", r.DM_SPAM = "DM_SPAM", r.JOIN_RAID = "JOIN_RAID", r.OTHER = "OTHER", (u = d || (d = {})).DM_SPAM = "DM_SPAM", u.MENTION_SPAM = "MENTION_SPAM", u.CHANNEL_SPAM = "CHANNEL_SPAM", u.SUS_NEW_MEMBERS = "SUS_NEW_MEMBERS", u.CHANGING_SETTINGS = "CHANGING_SETTINGS", u.OTHER = "OTHER"