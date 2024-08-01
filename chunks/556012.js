t.d(n, {
  c: function() {
return E;
  }
});
var a = t(481060),
  r = t(933557),
  _ = t(592125),
  s = t(699516),
  l = t(594174),
  A = t(273504),
  o = t(590433),
  I = t(689938);
let O = e => {
if (e === A.jj.QUARANTINE_USER)
  return !1;
return !0;
  },
  u = e => {
switch (e) {
  case A.jj.BLOCK_MESSAGE:
  case A.jj.FLAG_TO_CHANNEL:
  case A.jj.USER_COMMUNICATION_DISABLED:
  case A.jj.QUARANTINE_USER:
    return !0;
  default:
    return !1;
}
  },
  c = e => {
switch (e) {
  case A.jj.BLOCK_MESSAGE:
    return I.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
  case A.jj.FLAG_TO_CHANNEL:
    return I.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
  case A.jj.USER_COMMUNICATION_DISABLED:
    return I.Z.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER;
  case A.jj.QUARANTINE_USER:
    return I.Z.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER;
}
  },
  i = function(e) {
let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A.fX.KEYWORD;
switch (e) {
  case A.jj.BLOCK_MESSAGE:
    switch (n) {
      case A.fX.MENTION_SPAM:
        return I.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_MENTION_SPAM;
      case A.fX.ML_SPAM:
        return I.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_ML_SPAM;
      default:
        return I.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION;
    }
  case A.jj.FLAG_TO_CHANNEL:
    return I.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DESCRIPTION;
  case A.jj.USER_COMMUNICATION_DISABLED:
    return I.Z.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER_DESCRIPTION;
  case A.jj.QUARANTINE_USER:
    return I.Z.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER_DESCRIPTION;
}
  },
  S = (e, n) => {
var t, a, O;
switch (e) {
  case A.jj.QUARANTINE_USER:
  case A.jj.BLOCK_MESSAGE:
    return null;
  case A.jj.FLAG_TO_CHANNEL: {
    let e = null == n ? void 0 : null === (t = n.metadata) || void 0 === t ? void 0 : t.channelId;
    if (null == e)
      return null;
    let a = _.Z.getChannel(e);
    if (null == a)
      return null;
    let A = (0, r.F6)(a, l.default, s.Z);
    return I.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DISPLAY_HELPER.format({
      channelName: A
    });
  }
  case A.jj.USER_COMMUNICATION_DISABLED: {
    let e = null !== (O = null == n ? void 0 : null === (a = n.metadata) || void 0 === a ? void 0 : a.durationSeconds) && void 0 !== O ? O : 0,
      t = (0, o.L9)(e);
    if (null == t)
      return null;
    return I.Z.Messages.GUILD_AUTOMOD_ACTIONS_USER_DISABLE_COMMUNICATION_DISPLAY_HELPER.format({
      duration: t
    });
  }
}
  },
  N = e => {
switch (e) {
  case A.jj.BLOCK_MESSAGE:
    return a.CircleXIcon;
  case A.jj.FLAG_TO_CHANNEL:
    return a.TextIcon;
  case A.jj.USER_COMMUNICATION_DISABLED:
    return a.ClockWarningIcon;
  case A.jj.QUARANTINE_USER:
    return a.ChatXIcon;
}
  };

function E(e, n, t) {
  var r, _, s, l;
  return u(e) ? {
headerText: null !== (r = c(e)) && void 0 !== r ? r : '',
descriptionText: null !== (_ = i(e, t)) && void 0 !== _ ? _ : '',
helperText: null !== (s = S(e, n)) && void 0 !== s ? s : null,
icon: null !== (l = N(e)) && void 0 !== l ? l : a.CircleXIcon,
isEditable: O(e)
  } : null;
}