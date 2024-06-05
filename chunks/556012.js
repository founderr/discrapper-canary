"use strict";
n.r(t), n.d(t, {
  getActionInfo: function() {
    return S
  }
});
var r = n("933557"),
  o = n("592125"),
  i = n("699516"),
  u = n("594174"),
  a = n("93879"),
  l = n("862443"),
  s = n("789695"),
  T = n("696202"),
  d = n("273504"),
  E = n("590433"),
  A = n("689938");
let _ = e => {
    if (e === d.AutomodActionType.QUARANTINE_USER) return !1;
    return !0
  },
  c = e => {
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
  I = e => {
    switch (e) {
      case d.AutomodActionType.BLOCK_MESSAGE:
        return A.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
      case d.AutomodActionType.FLAG_TO_CHANNEL:
        return A.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
      case d.AutomodActionType.USER_COMMUNICATION_DISABLED:
        return A.default.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER;
      case d.AutomodActionType.QUARANTINE_USER:
        return A.default.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER
    }
  },
  O = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.AutomodTriggerType.KEYWORD;
    switch (e) {
      case d.AutomodActionType.BLOCK_MESSAGE:
        switch (t) {
          case d.AutomodTriggerType.MENTION_SPAM:
            return A.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_MENTION_SPAM;
          case d.AutomodTriggerType.ML_SPAM:
            return A.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_ML_SPAM;
          default:
            return A.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION
        }
      case d.AutomodActionType.FLAG_TO_CHANNEL:
        return A.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DESCRIPTION;
      case d.AutomodActionType.USER_COMMUNICATION_DISABLED:
        return A.default.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER_DESCRIPTION;
      case d.AutomodActionType.QUARANTINE_USER:
        return A.default.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER_DESCRIPTION
    }
  },
  N = (e, t) => {
    var n, a, l;
    switch (e) {
      case d.AutomodActionType.QUARANTINE_USER:
      case d.AutomodActionType.BLOCK_MESSAGE:
        return null;
      case d.AutomodActionType.FLAG_TO_CHANNEL: {
        let e = null == t ? void 0 : null === (n = t.metadata) || void 0 === n ? void 0 : n.channelId;
        if (null == e) return null;
        let a = o.default.getChannel(e);
        if (null == a) return null;
        let l = (0, r.computeChannelName)(a, u.default, i.default);
        return A.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DISPLAY_HELPER.format({
          channelName: l
        })
      }
      case d.AutomodActionType.USER_COMMUNICATION_DISABLED: {
        let e = null !== (l = null == t ? void 0 : null === (a = t.metadata) || void 0 === a ? void 0 : a.durationSeconds) && void 0 !== l ? l : 0,
          n = (0, E.getFriendlyDurationString)(e);
        if (null == n) return null;
        return A.default.Messages.GUILD_AUTOMOD_ACTIONS_USER_DISABLE_COMMUNICATION_DISPLAY_HELPER.format({
          duration: n
        })
      }
    }
  },
  g = e => {
    switch (e) {
      case d.AutomodActionType.BLOCK_MESSAGE:
        return T.default;
      case d.AutomodActionType.FLAG_TO_CHANNEL:
        return a.default;
      case d.AutomodActionType.USER_COMMUNICATION_DISABLED:
        return s.default;
      case d.AutomodActionType.QUARANTINE_USER:
        return l.default
    }
  };

function S(e, t, n) {
  var r, o, i, u;
  return c(e) ? {
    headerText: null !== (r = I(e)) && void 0 !== r ? r : "",
    descriptionText: null !== (o = O(e, n)) && void 0 !== o ? o : "",
    helperText: null !== (i = N(e, t)) && void 0 !== i ? i : null,
    icon: null !== (u = g(e)) && void 0 !== u ? u : T.default,
    isEditable: _(e)
  } : null
}