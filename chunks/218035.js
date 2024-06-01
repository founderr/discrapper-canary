"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  },
  useChannelNotificationRadioItems: function() {
    return E
  }
});
var l = n("735250");
n("470079");
var a = n("442837"),
  i = n("481060"),
  u = n("92114"),
  s = n("729052"),
  r = n("9156"),
  d = n("621600"),
  o = n("981631"),
  c = n("689938");

function f(e) {
  var t, n, l;
  let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  switch (e.type) {
    case o.ChannelTypes.GUILD_VOICE:
      ;
      return a ? (t = e, [{
        setting: o.UserNotificationSettings.NULL,
        label: null != t.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: o.UserNotificationSettings.ALL_MESSAGES,
        label: c.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY
      }, {
        setting: o.UserNotificationSettings.ONLY_MENTIONS,
        label: c.default.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format()
      }, {
        setting: o.UserNotificationSettings.NO_MESSAGES,
        label: c.default.Messages.FORM_LABEL_NOTHING
      }]) : null;
    case o.ChannelTypes.GUILD_STAGE_VOICE:
      ;
      return n = e, [{
        setting: o.UserNotificationSettings.NULL,
        label: null != n.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: o.UserNotificationSettings.ONLY_MENTIONS,
        label: c.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
      }, {
        setting: o.UserNotificationSettings.NO_MESSAGES,
        label: c.default.Messages.FORM_LABEL_NOTHING
      }];
    default:
      ;
      return l = e, [{
        setting: o.UserNotificationSettings.NULL,
        label: null != l.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: o.UserNotificationSettings.ALL_MESSAGES,
        label: c.default.Messages.FORM_LABEL_ALL_MESSAGES
      }, {
        setting: o.UserNotificationSettings.ONLY_MENTIONS,
        label: c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
      }, {
        setting: o.UserNotificationSettings.NO_MESSAGES,
        label: c.default.Messages.FORM_LABEL_NOTHING
      }]
  }
}

function E(e) {
  let t = e.getGuildId(),
    n = e.id,
    E = (0, a.useStateFromStores)([r.default], () => {
      let n = o.UserNotificationSettings.NULL;
      return null != e.parent_id && (n = r.default.getChannelMessageNotifications(t, e.parent_id)), n !== o.UserNotificationSettings.NULL ? n : r.default.getMessageNotifications(t)
    }, [t, e.parent_id]),
    S = (0, a.useStateFromStores)([r.default], () => r.default.getNewForumThreadsCreated(e)),
    N = (0, a.useStateFromStores)([r.default], () => r.default.getChannelOverrides(t)[n], [t, n]),
    _ = null == N ? o.UserNotificationSettings.NULL : N.message_notifications,
    g = (0, s.useVoiceActivityNotificationSettingsExperiment)(e),
    C = f(e, g);
  return null == C ? null : (0, l.jsxs)(l.Fragment, {
    children: [e.isForumLikeChannel() ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(i.MenuCheckboxItem, {
        id: "new-forum-threads-created",
        label: c.default.Messages.FORUM_NEW_POSTS_CREATED,
        checked: S,
        action: () => u.default.setForumThreadsCreated(e, !S)
      }), (0, l.jsx)(i.MenuSeparator, {})]
    }) : null, C.map(a => {
      let {
        setting: s,
        label: r
      } = a;
      return (0, l.jsx)(i.MenuRadioItem, {
        group: "channel-notifications",
        id: "".concat(s),
        label: r,
        subtext: s === o.UserNotificationSettings.NULL ? function(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          switch (e) {
            case o.UserNotificationSettings.ALL_MESSAGES:
              return t.type === o.ChannelTypes.GUILD_VOICE && n ? c.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY : c.default.Messages.FORM_LABEL_ALL_MESSAGES;
            case o.UserNotificationSettings.ONLY_MENTIONS:
              return c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
            case o.UserNotificationSettings.NO_MESSAGES:
              return c.default.Messages.FORM_LABEL_NOTHING;
            case o.UserNotificationSettings.NULL:
            default:
              return
          }
        }(E, e, g) : void 0,
        action: () => {
          var e;
          return e = s, void(null != t && u.default.updateChannelOverrideSettings(t, n, {
            message_notifications: e
          }, d.NotificationLabel.notifications(e)))
        },
        checked: s === _
      }, s)
    })]
  })
}

function S(e) {
  var t, n;
  let u = E(e),
    d = (0, a.useStateFromStores)([r.default], () => r.default.resolvedMessageNotifications(e), [e]),
    S = (0, a.useStateFromStores)([r.default], () => r.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
    N = null == S ? o.UserNotificationSettings.NULL : S.message_notifications,
    _ = (0, s.useVoiceActivityNotificationSettingsExperiment)(e),
    g = N === o.UserNotificationSettings.NULL && e.isGuildStageVoice() ? c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = f(e, _)) || void 0 === n ? void 0 : null === (t = n.find(e => {
      let {
        setting: t
      } = e;
      return t === d
    })) || void 0 === t ? void 0 : t.label;
  return null != u ? (0, l.jsx)(i.MenuItem, {
    id: "channel-notifications",
    label: c.default.Messages.NOTIFICATION_SETTINGS,
    subtext: g,
    children: u
  }) : null
}