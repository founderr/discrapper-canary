S.d(e, {
  FX: function() {
    return R
  },
  Ny: function() {
    return r
  },
  WV: function() {
    return N
  },
  WW: function() {
    return i
  },
  _u: function() {
    return a
  },
  aW: function() {
    return o
  },
  kv: function() {
    return O
  },
  s4: function() {
    return l
  },
  uu: function() {
    return u
  },
  vq: function() {
    return s
  },
  xU: function() {
    return A
  },
  zO: function() {
    return I
  }
}), S(653041);
var _ = S(231338);

function t(E) {
  let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return !e && (E.permissions = E.permissions.filter(E => {
    let {
      isExperimental: e
    } = E;
    return !e
  })), E
}

function n(E, e) {
  return E.map(E => e[E.toString()])
}

function i(E, e) {
  return {
    [_.Pl.VIEW_CHANNEL.toString()]: {
      title: E.ROLE_PERMISSIONS_VIEW_CHANNEL,
      description: E.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION,
      flag: _.Pl.VIEW_CHANNEL
    },
    [_.Pl.MANAGE_CHANNELS.toString()]: {
      title: E.MANAGE_CHANNELS,
      description: E.ROLE_PERMISSIONS_MANAGE_CHANNELS_DESCRIPTION,
      flag: _.Pl.MANAGE_CHANNELS
    },
    [_.Pl.MANAGE_ROLES.toString()]: {
      title: E.MANAGE_ROLES,
      description: E.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION,
      flag: _.Pl.MANAGE_ROLES
    },
    [_.Pl.MANAGE_GUILD_EXPRESSIONS.toString()]: {
      title: E.MANAGE_EXPRESSIONS,
      description: E.ROLE_PERMISSIONS_MANAGE_EXPRESSIONS_DESCRIPTION,
      flag: _.Pl.MANAGE_GUILD_EXPRESSIONS
    },
    [_.Pl.CREATE_GUILD_EXPRESSIONS.toString()]: {
      title: E.CREATE_EXPRESSIONS,
      description: E.ROLE_PERMISSIONS_CREATE_EXPRESSIONS_DESCRIPTION,
      flag: _.Pl.CREATE_GUILD_EXPRESSIONS
    },
    [_.Pl.VIEW_AUDIT_LOG.toString()]: {
      title: E.VIEW_AUDIT_LOG,
      description: E.ROLE_PERMISSIONS_VIEW_AUDIT_LOG_DESCRIPTION,
      flag: _.Pl.VIEW_AUDIT_LOG
    },
    [_.Pl.VIEW_GUILD_ANALYTICS.toString()]: {
      title: E.VIEW_GUILD_ANALYTICS,
      description: E.ROLE_PERMISSIONS_VIEW_GUILD_ANALYTICS_DESCRIPTION,
      flag: _.Pl.VIEW_GUILD_ANALYTICS
    },
    [_.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
      title: E.VIEW_CREATOR_MONETIZATION_ANALYTICS,
      description: E.ROLE_PERMISSIONS_VIEW_CREATOR_MONETIZATION_ANALYTICS_DESCRIPTION,
      flag: _.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS
    },
    [_.Pl.MANAGE_WEBHOOKS.toString()]: {
      title: E.MANAGE_WEBHOOKS,
      description: E.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION,
      flag: _.Pl.MANAGE_WEBHOOKS
    },
    [_.Pl.MANAGE_GUILD.toString()]: {
      title: E.MANAGE_SERVER,
      description: E.ROLE_PERMISSIONS_MANAGE_SERVER_DESCRIPTION,
      flag: _.Pl.MANAGE_GUILD
    },
    [_.Pl.CREATE_INSTANT_INVITE.toString()]: {
      title: E.CREATE_INSTANT_INVITE,
      description: E.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION,
      flag: _.Pl.CREATE_INSTANT_INVITE
    },
    [_.Pl.CHANGE_NICKNAME.toString()]: {
      title: E.CHANGE_NICKNAME,
      description: E.ROLE_PERMISSIONS_CHANGE_NICKNAME_DESCRIPTION,
      flag: _.Pl.CHANGE_NICKNAME
    },
    [_.Pl.MANAGE_NICKNAMES.toString()]: {
      title: E.MANAGE_NICKNAMES,
      description: E.ROLE_PERMISSIONS_MANAGE_NICKNAMES_DESCRIPTION,
      flag: _.Pl.MANAGE_NICKNAMES
    },
    [_.Pl.KICK_MEMBERS.toString()]: {
      title: e.showMembershipManualApprovalPermissions ? E.KICK_MEMBERS_AND_REVIEW_APPLICATIONS : E.KICK_MEMBERS,
      description: e.showMembershipManualApprovalPermissions ? E.ROLE_PERMISSIONS_KICK_MEMBERS_AND_REVIEW_APPLICATION_DESCRIPTION : E.ROLE_PERMISSIONS_KICK_MEMBERS_DESCRIPTION,
      flag: _.Pl.KICK_MEMBERS
    },
    [_.Pl.BAN_MEMBERS.toString()]: {
      title: E.BAN_MEMBERS,
      description: E.ROLE_PERMISSIONS_BAN_MEMBERS_DESCRIPTION,
      flag: _.Pl.BAN_MEMBERS
    },
    [_.Pl.MODERATE_MEMBERS.toString()]: {
      title: E.MODERATE_MEMBER,
      description: E.ROLE_PERMISSIONS_MODERATE_MEMBER_DESCRIPTION,
      flag: _.Pl.MODERATE_MEMBERS
    },
    [_.Pl.SEND_MESSAGES.toString()]: {
      title: e.showForumPermissions ? E.SEND_MESSAGES_AND_CREATE_FORUM_POSTS : E.SEND_MESSAGES,
      description: e.showForumPermissions ? E.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION : E.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION,
      flag: _.Pl.SEND_MESSAGES
    },
    [_.Pl.EMBED_LINKS.toString()]: {
      title: E.EMBED_LINKS,
      description: E.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION,
      flag: _.Pl.EMBED_LINKS
    },
    [_.Pl.ATTACH_FILES.toString()]: {
      title: E.ATTACH_FILES,
      description: E.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION,
      flag: _.Pl.ATTACH_FILES
    },
    [_.Pl.ADD_REACTIONS.toString()]: {
      title: E.ADD_REACTIONS,
      description: E.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION,
      flag: _.Pl.ADD_REACTIONS
    },
    [_.Pl.USE_EXTERNAL_EMOJIS.toString()]: {
      title: E.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
      description: E.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION,
      flag: _.Pl.USE_EXTERNAL_EMOJIS
    },
    [_.Pl.USE_EXTERNAL_STICKERS.toString()]: {
      title: E.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
      description: E.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION,
      flag: _.Pl.USE_EXTERNAL_STICKERS
    },
    [_.Pl.MENTION_EVERYONE.toString()]: {
      title: E.MENTION_EVERYONE,
      description: E.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION,
      flag: _.Pl.MENTION_EVERYONE
    },
    [_.Pl.MANAGE_MESSAGES.toString()]: {
      title: E.MANAGE_MESSAGES,
      description: E.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION,
      flag: _.Pl.MANAGE_MESSAGES
    },
    [_.Pl.READ_MESSAGE_HISTORY.toString()]: {
      title: E.READ_MESSAGE_HISTORY,
      description: E.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION,
      flag: _.Pl.READ_MESSAGE_HISTORY
    },
    [_.Pl.SEND_TTS_MESSAGES.toString()]: {
      title: E.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
      description: E.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION,
      flag: _.Pl.SEND_TTS_MESSAGES
    },
    [_.Pl.USE_APPLICATION_COMMANDS.toString()]: {
      title: E.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
      description: E.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_GUILD_DESCRIPTION,
      flag: _.Pl.USE_APPLICATION_COMMANDS
    },
    [_.Pl.USE_EXTERNAL_APPS.toString()]: {
      title: E.ROLE_PERMISSIONS_USE_EXTERNAL_APPS,
      description: e.externalAppsEnabled ? E.ROLE_PERMISSIONS_USE_EXTERNAL_APPS_GUILD_DESCRIPTION : "".concat(E.ROLE_PERMISSIONS_USE_EXTERNAL_APPS_GUILD_DESCRIPTION, " ").concat(E.ROLE_PERMISSIONS_USE_EXTERNAL_APPS_GUILD_DESCRIPTION_NOT_ENABLED_YET),
      flag: _.Pl.USE_EXTERNAL_APPS
    },
    [_.Pl.SEND_VOICE_MESSAGES.toString()]: {
      title: E.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
      description: E.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE_GUILD_DESCRIPTION,
      flag: _.Pl.SEND_VOICE_MESSAGES
    },
    [_.Pl.USE_CLYDE_AI.toString()]: {
      title: E.ROLE_PERMISSIONS_USE_CLYDE_AI,
      description: E.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
      flag: _.Pl.USE_CLYDE_AI
    },
    [_.Pl.SEND_POLLS.toString()]: {
      title: E.ROLE_PERMISSIONS_SEND_POLLS,
      description: E.ROLE_PERMISSIONS_SEND_POLLS_DESCRIPTION_GUILD,
      flag: _.Pl.SEND_POLLS
    },
    [_.Pl.CONNECT.toString()]: {
      title: E.CONNECT,
      description: E.ROLE_PERMISSIONS_CONNECT_DESCRIPTION,
      flag: _.Pl.CONNECT
    },
    [_.Pl.SPEAK.toString()]: {
      title: E.SPEAK,
      description: E.ROLE_PERMISSIONS_SPEAK_DESCRIPTION,
      flag: _.Pl.SPEAK
    },
    [_.Pl.STREAM.toString()]: {
      title: E.VIDEO,
      description: E.ROLE_PERMISSIONS_STREAM_DESCRIPTION,
      flag: _.Pl.STREAM
    },
    [_.Pl.USE_EMBEDDED_ACTIVITIES.toString()]: {
      title: E.USE_EMBEDDED_ACTIVITIES,
      description: E.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION,
      flag: _.Pl.USE_EMBEDDED_ACTIVITIES
    },
    [_.Pl.USE_SOUNDBOARD.toString()]: {
      title: E.USE_SOUNDBOARD,
      description: (null == e ? void 0 : e.SOUNDBOARD_DESCRIPTION) || E.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION,
      flag: _.Pl.USE_SOUNDBOARD
    },
    [_.Pl.USE_EXTERNAL_SOUNDS.toString()]: {
      title: E.USE_EXTERNAL_SOUNDS,
      description: E.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
      flag: _.Pl.USE_EXTERNAL_SOUNDS
    },
    [_.Pl.USE_VAD.toString()]: {
      title: E.USE_VAD,
      description: E.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION,
      flag: _.Pl.USE_VAD
    },
    [_.Pl.PRIORITY_SPEAKER.toString()]: {
      title: E.PRIORITY_SPEAKER,
      description: (null == e ? void 0 : e.PRIORITY_SPEAKER_DESCRIPTION) || E.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION,
      flag: _.Pl.PRIORITY_SPEAKER
    },
    [_.Pl.MUTE_MEMBERS.toString()]: {
      title: E.MUTE_MEMBERS,
      description: E.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION,
      flag: _.Pl.MUTE_MEMBERS
    },
    [_.Pl.DEAFEN_MEMBERS.toString()]: {
      title: E.DEAFEN_MEMBERS,
      description: E.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION,
      flag: _.Pl.DEAFEN_MEMBERS
    },
    [_.Pl.MOVE_MEMBERS.toString()]: {
      title: E.MOVE_MEMBERS,
      description: E.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION,
      flag: _.Pl.MOVE_MEMBERS
    },
    [_.Pl.REQUEST_TO_SPEAK.toString()]: {
      title: E.REQUEST_TO_SPEAK,
      description: E.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION,
      flag: _.Pl.REQUEST_TO_SPEAK,
      isExperimental: !0
    },
    [_.Pl.ADMINISTRATOR.toString()]: {
      title: E.ADMINISTRATOR,
      description: "string" == typeof E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION ? E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION : E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION.format(),
      flag: _.Pl.ADMINISTRATOR
    },
    [_.Pl.MANAGE_EVENTS.toString()]: {
      title: E.MANAGE_EVENTS,
      description: E.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION,
      flag: _.Pl.MANAGE_EVENTS
    },
    [_.Pl.CREATE_EVENTS.toString()]: {
      title: E.CREATE_EVENTS,
      description: E.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION,
      flag: _.Pl.CREATE_EVENTS
    },
    [_.Pl.MANAGE_THREADS.toString()]: {
      title: e.showForumPermissions ? E.MANAGE_THREADS_AND_FORUM_POSTS : E.MANAGE_THREADS,
      description: e.showForumPermissions ? E.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION : E.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION,
      flag: _.Pl.MANAGE_THREADS
    },
    [_.Pl.CREATE_PUBLIC_THREADS.toString()]: {
      title: E.CREATE_PUBLIC_THREADS,
      description: E.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION,
      flag: _.Pl.CREATE_PUBLIC_THREADS
    },
    [_.Pl.CREATE_PRIVATE_THREADS.toString()]: {
      title: E.CREATE_PRIVATE_THREADS,
      description: E.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION,
      flag: _.Pl.CREATE_PRIVATE_THREADS
    },
    [_.Pl.SEND_MESSAGES_IN_THREADS.toString()]: {
      title: e.showForumPermissions ? E.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS : E.SEND_MESSAGES_IN_THREADS,
      description: e.showForumPermissions ? E.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION : E.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION,
      flag: _.Pl.SEND_MESSAGES_IN_THREADS
    },
    [_.Pl.USE_CLYDE_AI.toString()]: {
      title: E.ROLE_PERMISSIONS_USE_CLYDE_AI,
      description: E.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
      flag: _.Pl.USE_CLYDE_AI
    },
    [_.Pl.SET_VOICE_CHANNEL_STATUS.toString()]: {
      title: E.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
      description: E.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
      flag: _.Pl.SET_VOICE_CHANNEL_STATUS
    }
  }
}

function l(E, e) {
  var S, l, I, r, s, N, o, A, R, O;
  let u, a = i(E, e);
  let P = [function(E, e, S) {
    let i = [_.Pl.VIEW_CHANNEL, _.Pl.MANAGE_CHANNELS, _.Pl.MANAGE_ROLES, _.Pl.CREATE_GUILD_EXPRESSIONS, _.Pl.MANAGE_GUILD_EXPRESSIONS, _.Pl.VIEW_AUDIT_LOG, _.Pl.VIEW_GUILD_ANALYTICS];
    return S.showCreatorMonetizationAnalyticsPermission && i.push(_.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS), i.push(_.Pl.MANAGE_WEBHOOKS), i.push(_.Pl.MANAGE_GUILD), t({
      title: e.ROLE_PERMISSIONS_SECTION_GENERAL_GUILD,
      permissions: n(i, E)
    })
  }(a, E, e), function(E, e) {
    let S = [_.Pl.CREATE_INSTANT_INVITE, _.Pl.CHANGE_NICKNAME, _.Pl.MANAGE_NICKNAMES, _.Pl.KICK_MEMBERS, _.Pl.BAN_MEMBERS, _.Pl.MODERATE_MEMBERS];
    return t({
      title: e.ROLE_PERMISSIONS_SECTION_MEMBERSHIP,
      permissions: n(S, E)
    })
  }(a, E), (S = a, l = E, I = e, u = [_.Pl.SEND_MESSAGES, _.Pl.SEND_MESSAGES_IN_THREADS, _.Pl.CREATE_PUBLIC_THREADS, _.Pl.CREATE_PRIVATE_THREADS, _.Pl.EMBED_LINKS, _.Pl.ATTACH_FILES, _.Pl.ADD_REACTIONS, _.Pl.USE_EXTERNAL_EMOJIS, _.Pl.USE_EXTERNAL_STICKERS, _.Pl.MENTION_EVERYONE, _.Pl.MANAGE_MESSAGES, _.Pl.MANAGE_THREADS, _.Pl.READ_MESSAGE_HISTORY, _.Pl.SEND_TTS_MESSAGES, _.Pl.SEND_VOICE_MESSAGES, _.Pl.USE_CLYDE_AI, _.Pl.SEND_POLLS], !I.showClydeAIPermissions && (u = u.filter(E => E !== _.Pl.USE_CLYDE_AI)), t({
    title: l.ROLE_PERMISSIONS_SECTION_TEXT,
    permissions: n(u, S)
  })), function(E, e, S) {
    let i = [_.Pl.CONNECT, _.Pl.SPEAK, _.Pl.STREAM, _.Pl.USE_SOUNDBOARD, _.Pl.USE_EXTERNAL_SOUNDS, _.Pl.USE_VAD, _.Pl.PRIORITY_SPEAKER, _.Pl.MUTE_MEMBERS, _.Pl.DEAFEN_MEMBERS, _.Pl.MOVE_MEMBERS, _.Pl.SET_VOICE_CHANNEL_STATUS];
    return t({
      title: e.ROLE_PERMISSIONS_SECTION_VOICE,
      permissions: n(i, E)
    })
  }(a, E, 0), function(E, e) {
    let S = [_.Pl.USE_APPLICATION_COMMANDS, _.Pl.USE_EMBEDDED_ACTIVITIES, _.Pl.USE_EXTERNAL_APPS];
    return t({
      title: e.ROLE_PERMISSIONS_SECTION_APPS,
      permissions: n(S, E)
    })
  }(a, E)];
  if (e.showStageChannelPermissions) {
    ;
    P.push((r = a, s = E, N = e, t({
      title: s.ROLE_PERMISSIONS_SECTION_STAGE,
      permissions: n([_.Pl.REQUEST_TO_SPEAK], r)
    }, N.showExperimental)))
  }
  return P.push((o = a, A = E, R = e, t({
    title: A.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS,
    permissions: n([_.Pl.CREATE_EVENTS, _.Pl.MANAGE_EVENTS], o)
  }, R.showExperimental))), P.push((O = a, t({
    title: E.ROLE_PERMISSIONS_SECTION_ADVANCED,
    permissions: n([_.Pl.ADMINISTRATOR], O)
  }))), P
}

function I(E, e) {
  let S = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
    showManageWebhooks: !0
  };
  return {
    title: e,
    permissions: n((null == S ? void 0 : S.showManageWebhooks) ? [_.Pl.VIEW_CHANNEL, _.Pl.MANAGE_CHANNELS, _.Pl.MANAGE_ROLES, _.Pl.MANAGE_WEBHOOKS] : [_.Pl.VIEW_CHANNEL, _.Pl.MANAGE_CHANNELS, _.Pl.MANAGE_ROLES], E)
  }
}

function r(E, e) {
  return {
    title: e,
    permissions: n([_.Pl.CREATE_INSTANT_INVITE], E)
  }
}

function s(E, e, S) {
  let t = [_.Pl.SEND_MESSAGES, _.Pl.SEND_MESSAGES_IN_THREADS, _.Pl.CREATE_PUBLIC_THREADS, _.Pl.CREATE_PRIVATE_THREADS, _.Pl.EMBED_LINKS, _.Pl.ATTACH_FILES, _.Pl.ADD_REACTIONS, _.Pl.USE_EXTERNAL_EMOJIS, _.Pl.USE_EXTERNAL_STICKERS, _.Pl.MENTION_EVERYONE, _.Pl.MANAGE_MESSAGES, _.Pl.MANAGE_THREADS, _.Pl.READ_MESSAGE_HISTORY, _.Pl.SEND_TTS_MESSAGES, _.Pl.SEND_VOICE_MESSAGES, _.Pl.USE_CLYDE_AI, _.Pl.SEND_POLLS];
  return (!S.showPrivateThreads || !S.showCreateThreads) && (t = t.filter(E => E !== _.Pl.CREATE_PRIVATE_THREADS)), !S.showCreateThreads && (t = t.filter(E => E !== _.Pl.CREATE_PUBLIC_THREADS)), !S.showClydeAIPermissions && (t = t.filter(E => E !== _.Pl.USE_CLYDE_AI)), {
    title: e,
    description: S.sectionDescription,
    permissions: n(t, E)
  }
}

function N(E, e) {
  return {
    title: e,
    permissions: n([_.Pl.CONNECT, _.Pl.SPEAK, _.Pl.STREAM, _.Pl.USE_SOUNDBOARD, _.Pl.USE_EXTERNAL_SOUNDS, _.Pl.USE_VAD, _.Pl.PRIORITY_SPEAKER, _.Pl.MUTE_MEMBERS, _.Pl.DEAFEN_MEMBERS, _.Pl.MOVE_MEMBERS, _.Pl.SET_VOICE_CHANNEL_STATUS], E)
  }
}

function o(E, e, S) {
  let t = [_.Pl.SEND_MESSAGES, _.Pl.EMBED_LINKS, _.Pl.ATTACH_FILES, _.Pl.ADD_REACTIONS, _.Pl.USE_EXTERNAL_EMOJIS, _.Pl.USE_EXTERNAL_STICKERS, _.Pl.MENTION_EVERYONE, _.Pl.MANAGE_MESSAGES, _.Pl.READ_MESSAGE_HISTORY, _.Pl.SEND_TTS_MESSAGES, _.Pl.USE_APPLICATION_COMMANDS, _.Pl.SEND_VOICE_MESSAGES, _.Pl.SEND_POLLS];
  return {
    title: e,
    description: S.sectionDescription,
    permissions: n(t, E)
  }
}

function A(E, e) {
  return {
    title: e,
    permissions: n([_.Pl.USE_APPLICATION_COMMANDS, _.Pl.USE_EMBEDDED_ACTIVITIES, _.Pl.USE_EXTERNAL_APPS], E)
  }
}

function R(E, e, S) {
  return {
    title: e,
    permissions: n(S ? [_.Pl.CONNECT, _.Pl.STREAM, _.Pl.MUTE_MEMBERS, _.Pl.MOVE_MEMBERS] : [_.Pl.CONNECT, _.Pl.MUTE_MEMBERS, _.Pl.MOVE_MEMBERS], E)
  }
}

function O(E, e) {
  return {
    title: e,
    permissions: n([_.Pl.REQUEST_TO_SPEAK, _.Pl.MENTION_EVERYONE], E)
  }
}

function u(E, e) {
  return {
    title: e,
    permissions: n([_.Pl.CREATE_EVENTS, _.Pl.MANAGE_EVENTS], E)
  }
}

function a(E) {
  return null == E ? E : "string" == typeof E ? E.trim() : "function" == typeof E.format ? E.format() : E
}