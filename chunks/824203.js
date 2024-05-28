"use strict";
n.r(t), n.d(t, {
  getEphemeralReasonMessage: function() {
    return _
  },
  useShouldShowUserAppBetaNoticeForCommand: function() {
    return d
  }
}), n("373793");
var i = n("39621"),
  r = n("911969"),
  s = n("213459"),
  a = n("581364"),
  o = n("807169"),
  l = n("104793"),
  u = n("689938");

function d(e, t, n) {
  var i, u, d, _;
  let c = (0, o.usePermissionContext)(t, r.ApplicationCommandType.CHAT),
    E = (0, s.useUserIndexState)(!0, !1),
    I = (0, s.useGuildIndexState)(null == t ? void 0 : t.guild_id, !1),
    T = (0, a.isGuildInUserAppExperiment)(null == t ? void 0 : t.guild_id, n);
  if (null == e || T) return !1;
  let {
    context: f,
    userId: S,
    roleIds: h,
    isImpersonating: A
  } = c, m = null === (u = I.result) || void 0 === u ? void 0 : null === (i = u.sections[e.applicationId]) || void 0 === i ? void 0 : i.descriptor;
  if (void 0 !== m) {
    let n = (0, l.computeAllowedForChannel)(m.permissions, t, null == t ? void 0 : t.guild_id),
      i = (0, l.computeAllowedForUser)(m.permissions, f.guild_id, S, h, A);
    if ((0, l.hasAccess)(e, c, i, n, m.botId) === l.HasAccessResult.ALLOWED) return !1
  }
  let N = null === (_ = E.result) || void 0 === _ ? void 0 : null === (d = _.sections[e.applicationId]) || void 0 === d ? void 0 : d.commands;
  return null != N && e.id in N
}

function _(e) {
  switch (e) {
    case i.EphemeralMessageReason.FEATURE_LIMITED:
      return u.default.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_FEATURE_LIMITED;
    case i.EphemeralMessageReason.GUILD_FEATURE_LIMITED:
      return u.default.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_GUILD_FEATURE_LIMITED;
    case i.EphemeralMessageReason.USER_FEATURE_LIMITED:
      return u.default.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_USER_FEATURE_LIMITED;
    case i.EphemeralMessageReason.SLOWMODE:
      return u.default.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_SLOWMODE;
    case i.EphemeralMessageReason.RATE_LIMIT:
      return u.default.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_RATE_LIMIT;
    case i.EphemeralMessageReason.CANNOT_MESSAGE_USER:
      return u.default.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_CANNOT_MESSAGE_USER;
    case i.EphemeralMessageReason.USER_VERIFICATION_LEVEL:
      return u.default.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_USER_VERIFICATION_LEVEL;
    case i.EphemeralMessageReason.CANNOT_UNARCHIVE_THREAD:
      return u.default.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_CANNOT_UNARCHIVE_THREAD;
    case i.EphemeralMessageReason.CANNOT_JOIN_THREAD:
      return u.default.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_CANNOT_JOIN_THREAD;
    case i.EphemeralMessageReason.MISSING_PERMISSIONS:
      return u.default.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_MISSING_PERMISSIONS;
    case i.EphemeralMessageReason.CANNOT_SEND_ATTACHMENTS:
      return u.default.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_CANNOT_SEND_ATTACHMENTS;
    case i.EphemeralMessageReason.CANNOT_SEND_EMBEDS:
      return u.default.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_CANNOT_SEND_EMBEDS;
    case i.EphemeralMessageReason.CANNOT_SEND_STICKERS:
      return u.default.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_CANNOT_SEND_STICKERS;
    case i.EphemeralMessageReason.AUTOMOD_BLOCKED:
      return u.default.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_AUTOMOD_BLOCKED;
    case i.EphemeralMessageReason.HARMFUL_LINK:
      return u.default.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_HARMFUL_LINK;
    case i.EphemeralMessageReason.CANNOT_USE_COMMAND:
      return u.default.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_CANNOT_USE_COMMAND;
    case i.EphemeralMessageReason.BETA_GUILD_SIZE:
      return u.default.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_BETA;
    default:
      return u.default.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_REASON_UNKNOWN
  }
}