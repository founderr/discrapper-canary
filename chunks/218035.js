"use strict";
a.r(t), a.d(t, {
  default: function() {
    return E
  },
  useChannelNotificationRadioItems: function() {
    return c
  }
});
var s = a("735250");
a("470079");
var n = a("442837"),
  i = a("481060"),
  l = a("92114"),
  u = a("729052"),
  d = a("9156"),
  o = a("621600"),
  r = a("981631"),
  _ = a("689938");

function f(e) {
  var t, a, s;
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  switch (e.type) {
    case r.ChannelTypes.GUILD_VOICE:
      ;
      return n ? (t = e, [{
        setting: r.UserNotificationSettings.NULL,
        label: null != t.parent_id ? _.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : _.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: r.UserNotificationSettings.ALL_MESSAGES,
        label: _.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY
      }, {
        setting: r.UserNotificationSettings.ONLY_MENTIONS,
        label: _.default.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format()
      }, {
        setting: r.UserNotificationSettings.NO_MESSAGES,
        label: _.default.Messages.FORM_LABEL_NOTHING
      }]) : null;
    case r.ChannelTypes.GUILD_STAGE_VOICE:
      ;
      return a = e, [{
        setting: r.UserNotificationSettings.NULL,
        label: null != a.parent_id ? _.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : _.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: r.UserNotificationSettings.ONLY_MENTIONS,
        label: _.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
      }, {
        setting: r.UserNotificationSettings.NO_MESSAGES,
        label: _.default.Messages.FORM_LABEL_NOTHING
      }];
    default:
      ;
      return s = e, [{
        setting: r.UserNotificationSettings.NULL,
        label: null != s.parent_id ? _.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : _.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: r.UserNotificationSettings.ALL_MESSAGES,
        label: _.default.Messages.FORM_LABEL_ALL_MESSAGES
      }, {
        setting: r.UserNotificationSettings.ONLY_MENTIONS,
        label: _.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
      }, {
        setting: r.UserNotificationSettings.NO_MESSAGES,
        label: _.default.Messages.FORM_LABEL_NOTHING
      }]
  }
}

function c(e) {
  let t = e.getGuildId(),
    a = e.id,
    c = (0, n.useStateFromStores)([d.default], () => {
      let a = r.UserNotificationSettings.NULL;
      return null != e.parent_id && (a = d.default.getChannelMessageNotifications(t, e.parent_id)), a !== r.UserNotificationSettings.NULL ? a : d.default.getMessageNotifications(t)
    }, [t, e.parent_id]),
    E = (0, n.useStateFromStores)([d.default], () => d.default.getNewForumThreadsCreated(e)),
    N = (0, n.useStateFromStores)([d.default], () => d.default.getChannelOverrides(t)[a], [t, a]),
    M = null == N ? r.UserNotificationSettings.NULL : N.message_notifications,
    L = (0, u.useVoiceActivityNotificationSettingsExperiment)(e),
    g = f(e, L);
  return null == g ? null : (0, s.jsxs)(s.Fragment, {
    children: [e.isForumLikeChannel() ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(i.MenuCheckboxItem, {
        id: "new-forum-threads-created",
        label: _.default.Messages.FORUM_NEW_POSTS_CREATED,
        checked: E,
        action: () => l.default.setForumThreadsCreated(e, !E)
      }), (0, s.jsx)(i.MenuSeparator, {})]
    }) : null, g.map(n => {
      let {
        setting: u,
        label: d
      } = n;
      return (0, s.jsx)(i.MenuRadioItem, {
        group: "channel-notifications",
        id: "".concat(u),
        label: d,
        subtext: u === r.UserNotificationSettings.NULL ? function(e, t) {
          let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          switch (e) {
            case r.UserNotificationSettings.ALL_MESSAGES:
              return t.type === r.ChannelTypes.GUILD_VOICE && a ? _.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY : _.default.Messages.FORM_LABEL_ALL_MESSAGES;
            case r.UserNotificationSettings.ONLY_MENTIONS:
              return _.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
            case r.UserNotificationSettings.NO_MESSAGES:
              return _.default.Messages.FORM_LABEL_NOTHING;
            case r.UserNotificationSettings.NULL:
            default:
              return
          }
        }(c, e, L) : void 0,
        action: () => {
          var e;
          return e = u, void(null != t && l.default.updateChannelOverrideSettings(t, a, {
            message_notifications: e
          }, o.NotificationLabel.notifications(e)))
        },
        checked: u === M
      }, u)
    })]
  })
}

function E(e) {
  var t, a;
  let l = c(e),
    o = (0, n.useStateFromStores)([d.default], () => d.default.resolvedMessageNotifications(e), [e]),
    E = (0, n.useStateFromStores)([d.default], () => d.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
    N = null == E ? r.UserNotificationSettings.NULL : E.message_notifications,
    M = (0, u.useVoiceActivityNotificationSettingsExperiment)(e),
    L = N === r.UserNotificationSettings.NULL && e.isGuildStageVoice() ? _.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (a = f(e, M)) || void 0 === a ? void 0 : null === (t = a.find(e => {
      let {
        setting: t
      } = e;
      return t === o
    })) || void 0 === t ? void 0 : t.label;
  return null != l ? (0, s.jsx)(i.MenuItem, {
    id: "channel-notifications",
    label: _.default.Messages.NOTIFICATION_SETTINGS,
    subtext: L,
    children: l
  }) : null
}