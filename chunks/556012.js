"use strict";
o.r(t), o.d(t, {
  getActionInfo: function() {
    return E
  }
});
var n = o("933557"),
  a = o("592125"),
  l = o("699516"),
  u = o("594174"),
  s = o("93879"),
  r = o("862443"),
  A = o("789695"),
  i = o("696202"),
  d = o("273504"),
  _ = o("590433"),
  c = o("689938");
let C = e => {
    if (e === d.AutomodActionType.QUARANTINE_USER) return !1;
    return !0
  },
  I = e => {
    switch (e) {
      case d.AutomodActionType.BLOCK_MESSAGE:
      case d.AutomodActionType.FLAG_TO_CHANNEL:
      case d.AutomodActionType.USER_COMMUNICATION_DISABLED:
      case d.AutomodActionType.QUARANTINE_USER:
        return !0;
      default:
        return !1
    }
  },
  T = e => {
    switch (e) {
      case d.AutomodActionType.BLOCK_MESSAGE:
        return c.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
      case d.AutomodActionType.FLAG_TO_CHANNEL:
        return c.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
      case d.AutomodActionType.USER_COMMUNICATION_DISABLED:
        return c.default.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER;
      case d.AutomodActionType.QUARANTINE_USER:
        return c.default.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER
    }
  },
  O = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.AutomodTriggerType.KEYWORD;
    switch (e) {
      case d.AutomodActionType.BLOCK_MESSAGE:
        switch (t) {
          case d.AutomodTriggerType.MENTION_SPAM:
            return c.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_MENTION_SPAM;
          case d.AutomodTriggerType.ML_SPAM:
            return c.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_ML_SPAM;
          default:
            return c.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION
        }
      case d.AutomodActionType.FLAG_TO_CHANNEL:
        return c.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DESCRIPTION;
      case d.AutomodActionType.USER_COMMUNICATION_DISABLED:
        return c.default.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER_DESCRIPTION;
      case d.AutomodActionType.QUARANTINE_USER:
        return c.default.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER_DESCRIPTION
    }
  },
  N = (e, t) => {
    var o, s, r;
    switch (e) {
      case d.AutomodActionType.QUARANTINE_USER:
      case d.AutomodActionType.BLOCK_MESSAGE:
        return null;
      case d.AutomodActionType.FLAG_TO_CHANNEL: {
        let e = null == t ? void 0 : null === (o = t.metadata) || void 0 === o ? void 0 : o.channelId;
        if (null == e) return null;
        let s = a.default.getChannel(e);
        if (null == s) return null;
        let r = (0, n.computeChannelName)(s, u.default, l.default);
        return c.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DISPLAY_HELPER.format({
          channelName: r
        })
      }
      case d.AutomodActionType.USER_COMMUNICATION_DISABLED: {
        let e = null !== (r = null == t ? void 0 : null === (s = t.metadata) || void 0 === s ? void 0 : s.durationSeconds) && void 0 !== r ? r : 0,
          o = (0, _.getFriendlyDurationString)(e);
        if (null == o) return null;
        return c.default.Messages.GUILD_AUTOMOD_ACTIONS_USER_DISABLE_COMMUNICATION_DISPLAY_HELPER.format({
          duration: o
        })
      }
    }
  },
  S = e => {
    switch (e) {
      case d.AutomodActionType.BLOCK_MESSAGE:
        return i.default;
      case d.AutomodActionType.FLAG_TO_CHANNEL:
        return s.default;
      case d.AutomodActionType.USER_COMMUNICATION_DISABLED:
        return A.default;
      case d.AutomodActionType.QUARANTINE_USER:
        return r.default
    }
  };

function E(e, t, o) {
  var n, a, l, u;
  return I(e) ? {
    headerText: null !== (n = T(e)) && void 0 !== n ? n : "",
    descriptionText: null !== (a = O(e, o)) && void 0 !== a ? a : "",
    helperText: null !== (l = N(e, t)) && void 0 !== l ? l : null,
    icon: null !== (u = S(e)) && void 0 !== u ? u : i.default,
    isEditable: C(e)
  } : null
}