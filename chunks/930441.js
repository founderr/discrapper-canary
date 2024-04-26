"use strict";
a.r(t), a.d(t, {
  EMAILS_SUBSECTION: function() {
    return i
  },
  EmailCategories: function() {
    return s
  },
  EmailCategoriesList: function() {
    return o
  },
  MarketingEmailCategories: function() {
    return r
  }
});
var n, s, l = a("689938");
let i = "emails";
(n = s || (s = {})).COMMUNICATION = "communication", n.SOCIAL = "social", n.TIPS = "tips", n.RECOMMENDATIONS_AND_EVENTS = "recommendations_and_events", n.UPDATES_AND_ANNOUNCEMENTS = "updates_and_announcements", n.FAMILY_CENTER_DIGEST = "family_center_digest";
let r = ["tips", "recommendations_and_events", "updates_and_announcements"],
  o = [{
    category: "communication",
    label: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION,
    subLabel: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION_SUBLABEL
  }, {
    category: "social",
    label: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL,
    subLabel: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL_SUBLABEL
  }, {
    category: "updates_and_announcements",
    label: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS,
    subLabel: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS_SUBLABEL
  }, {
    category: "tips",
    label: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS,
    subLabel: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS_SUBLABEL
  }, {
    category: "recommendations_and_events",
    label: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS,
    subLabel: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS_SUBLABEL
  }]