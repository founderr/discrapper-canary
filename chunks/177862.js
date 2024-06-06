"use strict";
var a, l, i, u, r, d, s, o;

function c(e) {
  return e.includes("LEGITIMATE_ACTIVITY") ? "LEGITIMATE_ACTIVITY" : e.includes("DM_SPAM") ? "DM_SPAM" : e.includes("JOIN_RAID") ? "JOIN_RAID" : "OTHER"
}
n.r(t), n.d(t, {
  Feedback: function() {
    return a
  },
  RaidAlertType: function() {
    return l
  },
  RaidLockdownFeedbackType: function() {
    return u
  },
  RaidResolutionType: function() {
    return i
  },
  getMostImportantRaidResolutionType: function() {
    return c
  }
}), n("689938"), (r = a || (a = {})).BUG = "BUG", r.ALLOWED = "ALLOWED", r.MENTION_RAID_REMOVE_RESTRICTION = "MENTION_RAID_REMOVE_RESTRICTION", (d = l || (l = {})).JOIN_RAID = "JOIN_RAID", d.MENTION_RAID = "MENTION_RAID", (s = i || (i = {})).LEGITIMATE_ACTIVITY = "LEGITIMATE_ACTIVITY", s.LEGITIMATE_ACCOUNTS = "LEGITIMATE_ACCOUNTS", s.LEGITIMATE_DMS = "LEGITIMATE_DMS", s.DM_SPAM = "DM_SPAM", s.JOIN_RAID = "JOIN_RAID", s.OTHER = "OTHER", (o = u || (u = {})).DM_SPAM = "DM_SPAM", o.MENTION_SPAM = "MENTION_SPAM", o.CHANNEL_SPAM = "CHANNEL_SPAM", o.SUS_NEW_MEMBERS = "SUS_NEW_MEMBERS", o.CHANGING_SETTINGS = "CHANGING_SETTINGS", o.OTHER = "OTHER"