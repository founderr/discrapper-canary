"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  },
  useChannelNotificationRadioItems: function() {
    return L
  }
});
var i = n("735250");
n("470079");
var s = n("442837"),
  a = n("481060"),
  r = n("92114"),
  l = n("729052"),
  u = n("9156"),
  o = n("621600"),
  c = n("981631"),
  d = n("689938");

function f(e) {
  var t, n, i;
  let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  switch (e.type) {
    case c.ChannelTypes.GUILD_VOICE:
      ;
      return s ? (t = e, [{
        setting: c.UserNotificationSettings.NULL,
        label: null != t.parent_id ? d.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : d.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: c.UserNotificationSettings.ALL_MESSAGES,
        label: d.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY
      }, {
        setting: c.UserNotificationSettings.ONLY_MENTIONS,
        label: d.default.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format()
      }, {
        setting: c.UserNotificationSettings.NO_MESSAGES,
        label: d.default.Messages.FORM_LABEL_NOTHING
      }]) : null;
    case c.ChannelTypes.GUILD_STAGE_VOICE:
      ;
      return n = e, [{
        setting: c.UserNotificationSettings.NULL,
        label: null != n.parent_id ? d.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : d.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: c.UserNotificationSettings.ONLY_MENTIONS,
        label: d.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
      }, {
        setting: c.UserNotificationSettings.NO_MESSAGES,
        label: d.default.Messages.FORM_LABEL_NOTHING
      }];
    default:
      ;
      return i = e, [{
        setting: c.UserNotificationSettings.NULL,
        label: null != i.parent_id ? d.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : d.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: c.UserNotificationSettings.ALL_MESSAGES,
        label: d.default.Messages.FORM_LABEL_ALL_MESSAGES
      }, {
        setting: c.UserNotificationSettings.ONLY_MENTIONS,
        label: d.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
      }, {
        setting: c.UserNotificationSettings.NO_MESSAGES,
        label: d.default.Messages.FORM_LABEL_NOTHING
      }]
  }
}

function L(e) {
  let t = e.getGuildId(),
    n = e.id,
    L = (0, s.useStateFromStores)([u.default], () => {
      let n = c.UserNotificationSettings.NULL;
      return null != e.parent_id && (n = u.default.getChannelMessageNotifications(t, e.parent_id)), n !== c.UserNotificationSettings.NULL ? n : u.default.getMessageNotifications(t)
    }, [t, e.parent_id]),
    E = (0, s.useStateFromStores)([u.default], () => u.default.getNewForumThreadsCreated(e)),
    _ = (0, s.useStateFromStores)([u.default], () => u.default.getChannelOverrides(t)[n], [t, n]),
    S = null == _ ? c.UserNotificationSettings.NULL : _.message_notifications,
    g = (0, l.useVoiceActivityNotificationSettingsExperiment)(e),
    p = f(e, g);
  return null == p ? null : (0, i.jsxs)(i.Fragment, {
    children: [e.isForumLikeChannel() ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(a.MenuCheckboxItem, {
        id: "new-forum-threads-created",
        label: d.default.Messages.FORUM_NEW_POSTS_CREATED,
        checked: E,
        action: () => r.default.setForumThreadsCreated(e, !E)
      }), (0, i.jsx)(a.MenuSeparator, {})]
    }) : null, p.map(s => {
      let {
        setting: l,
        label: u
      } = s;
      return (0, i.jsx)(a.MenuRadioItem, {
        group: "channel-notifications",
        id: "".concat(l),
        label: u,
        subtext: l === c.UserNotificationSettings.NULL ? function(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          switch (e) {
            case c.UserNotificationSettings.ALL_MESSAGES:
              return t.type === c.ChannelTypes.GUILD_VOICE && n ? d.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY : d.default.Messages.FORM_LABEL_ALL_MESSAGES;
            case c.UserNotificationSettings.ONLY_MENTIONS:
              return d.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
            case c.UserNotificationSettings.NO_MESSAGES:
              return d.default.Messages.FORM_LABEL_NOTHING;
            case c.UserNotificationSettings.NULL:
            default:
              return
          }
        }(L, e, g) : void 0,
        action: () => {
          var e;
          return e = l, void(null != t && r.default.updateChannelOverrideSettings(t, n, {
            message_notifications: e
          }, o.NotificationLabel.notifications(e)))
        },
        checked: l === S
      }, l)
    })]
  })
}

function E(e) {
  var t, n;
  let r = L(e),
    o = (0, s.useStateFromStores)([u.default], () => u.default.resolvedMessageNotifications(e), [e]),
    E = (0, s.useStateFromStores)([u.default], () => u.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
    _ = null == E ? c.UserNotificationSettings.NULL : E.message_notifications,
    S = (0, l.useVoiceActivityNotificationSettingsExperiment)(e),
    g = _ === c.UserNotificationSettings.NULL && e.isGuildStageVoice() ? d.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = f(e, S)) || void 0 === n ? void 0 : null === (t = n.find(e => {
      let {
        setting: t
      } = e;
      return t === o
    })) || void 0 === t ? void 0 : t.label;
  return null != r ? (0, i.jsx)(a.MenuItem, {
    id: "channel-notifications",
    label: d.default.Messages.NOTIFICATION_SETTINGS,
    subtext: g,
    children: r
  }) : null
}