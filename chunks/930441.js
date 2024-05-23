"use strict";
n.r(t), n.d(t, {
  EMAILS_SUBSECTION: function() {
    return a
  },
  EmailCategories: function() {
    return r
  },
  EmailCategoriesList: function() {
    return l
  },
  MarketingEmailCategories: function() {
    return o
  }
});
var i, r, s = n("689938");
let a = "emails";
(i = r || (r = {})).COMMUNICATION = "communication", i.SOCIAL = "social", i.TIPS = "tips", i.RECOMMENDATIONS_AND_EVENTS = "recommendations_and_events", i.UPDATES_AND_ANNOUNCEMENTS = "updates_and_announcements", i.FAMILY_CENTER_DIGEST = "family_center_digest";
let o = ["tips", "recommendations_and_events", "updates_and_announcements"],
  l = [{
    category: "communication",
    label: () => s.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION,
    subLabel: () => s.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION_SUBLABEL
  }, {
    category: "social",
    label: () => s.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL,
    subLabel: () => s.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL_SUBLABEL
  }, {
    category: "updates_and_announcements",
    label: () => s.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS,
    subLabel: () => s.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS_SUBLABEL
  }, {
    category: "tips",
    label: () => s.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS,
    subLabel: () => s.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS_SUBLABEL
  }, {
    category: "recommendations_and_events",
    label: () => s.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS,
    subLabel: () => s.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS_SUBLABEL
  }]