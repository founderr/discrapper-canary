"use strict";
e.r(s), e.d(s, {
  generateChannelEventsSection: function() {
    return P
  },
  generateChannelGeneralSection: function() {
    return r
  },
  generateChannelMembershipSection: function() {
    return I
  },
  generateChannelStageSection: function() {
    return A
  },
  generateChannelStageVoiceSection: function() {
    return O
  },
  generateChannelTextSection: function() {
    return o
  },
  generateChannelVoiceChatSection: function() {
    return R
  },
  generateChannelVoiceSection: function() {
    return N
  },
  generateGuildPermissionSpec: function() {
    return t
  },
  getGuildPermissionSpec: function() {
    return _
  },
  renderDescription: function() {
    return a
  }
}), e("653041");
var S = e("231338");

function i(E) {
  let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return !s && (E.permissions = E.permissions.filter(E => {
    let {
      isExperimental: s
    } = E;
    return !s
  })), E
}

function n(E, s) {
  return E.map(E => s[E.toString()])
}

function _(E, s) {
  return {
    [S.Permissions.VIEW_CHANNEL.toString()]: {
      title: E.ROLE_PERMISSIONS_VIEW_CHANNEL,
      description: E.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION,
      flag: S.Permissions.VIEW_CHANNEL
    },
    [S.Permissions.MANAGE_CHANNELS.toString()]: {
      title: E.MANAGE_CHANNELS,
      description: E.ROLE_PERMISSIONS_MANAGE_CHANNELS_DESCRIPTION,
      flag: S.Permissions.MANAGE_CHANNELS
    },
    [S.Permissions.MANAGE_ROLES.toString()]: {
      title: E.MANAGE_ROLES,
      description: E.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION,
      flag: S.Permissions.MANAGE_ROLES
    },
    [S.Permissions.MANAGE_GUILD_EXPRESSIONS.toString()]: {
      title: E.MANAGE_EXPRESSIONS,
      description: E.ROLE_PERMISSIONS_MANAGE_EXPRESSIONS_DESCRIPTION,
      flag: S.Permissions.MANAGE_GUILD_EXPRESSIONS
    },
    [S.Permissions.CREATE_GUILD_EXPRESSIONS.toString()]: {
      title: E.CREATE_EXPRESSIONS,
      description: E.ROLE_PERMISSIONS_CREATE_EXPRESSIONS_DESCRIPTION,
      flag: S.Permissions.CREATE_GUILD_EXPRESSIONS
    },
    [S.Permissions.VIEW_AUDIT_LOG.toString()]: {
      title: E.VIEW_AUDIT_LOG,
      description: E.ROLE_PERMISSIONS_VIEW_AUDIT_LOG_DESCRIPTION,
      flag: S.Permissions.VIEW_AUDIT_LOG
    },
    [S.Permissions.VIEW_GUILD_ANALYTICS.toString()]: {
      title: E.VIEW_GUILD_ANALYTICS,
      description: E.ROLE_PERMISSIONS_VIEW_GUILD_ANALYTICS_DESCRIPTION,
      flag: S.Permissions.VIEW_GUILD_ANALYTICS
    },
    [S.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
      title: E.VIEW_CREATOR_MONETIZATION_ANALYTICS,
      description: E.ROLE_PERMISSIONS_VIEW_CREATOR_MONETIZATION_ANALYTICS_DESCRIPTION,
      flag: S.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS
    },
    [S.Permissions.MANAGE_WEBHOOKS.toString()]: {
      title: E.MANAGE_WEBHOOKS,
      description: E.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION,
      flag: S.Permissions.MANAGE_WEBHOOKS
    },
    [S.Permissions.MANAGE_GUILD.toString()]: {
      title: E.MANAGE_SERVER,
      description: E.ROLE_PERMISSIONS_MANAGE_SERVER_DESCRIPTION,
      flag: S.Permissions.MANAGE_GUILD
    },
    [S.Permissions.CREATE_INSTANT_INVITE.toString()]: {
      title: E.CREATE_INSTANT_INVITE,
      description: E.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION,
      flag: S.Permissions.CREATE_INSTANT_INVITE
    },
    [S.Permissions.CHANGE_NICKNAME.toString()]: {
      title: E.CHANGE_NICKNAME,
      description: E.ROLE_PERMISSIONS_CHANGE_NICKNAME_DESCRIPTION,
      flag: S.Permissions.CHANGE_NICKNAME
    },
    [S.Permissions.MANAGE_NICKNAMES.toString()]: {
      title: E.MANAGE_NICKNAMES,
      description: E.ROLE_PERMISSIONS_MANAGE_NICKNAMES_DESCRIPTION,
      flag: S.Permissions.MANAGE_NICKNAMES
    },
    [S.Permissions.KICK_MEMBERS.toString()]: {
      title: s.showMembershipManualApprovalPermissions ? E.KICK_MEMBERS_AND_REVIEW_APPLICATIONS : E.KICK_MEMBERS,
      description: s.showMembershipManualApprovalPermissions ? E.ROLE_PERMISSIONS_KICK_MEMBERS_AND_REVIEW_APPLICATION_DESCRIPTION : E.ROLE_PERMISSIONS_KICK_MEMBERS_DESCRIPTION,
      flag: S.Permissions.KICK_MEMBERS
    },
    [S.Permissions.BAN_MEMBERS.toString()]: {
      title: E.BAN_MEMBERS,
      description: E.ROLE_PERMISSIONS_BAN_MEMBERS_DESCRIPTION,
      flag: S.Permissions.BAN_MEMBERS
    },
    [S.Permissions.MODERATE_MEMBERS.toString()]: {
      title: E.MODERATE_MEMBER,
      description: E.ROLE_PERMISSIONS_MODERATE_MEMBER_DESCRIPTION,
      flag: S.Permissions.MODERATE_MEMBERS
    },
    [S.Permissions.SEND_MESSAGES.toString()]: {
      title: s.showForumPermissions ? E.SEND_MESSAGES_AND_CREATE_FORUM_POSTS : E.SEND_MESSAGES,
      description: s.showForumPermissions ? E.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION : E.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION,
      flag: S.Permissions.SEND_MESSAGES
    },
    [S.Permissions.EMBED_LINKS.toString()]: {
      title: E.EMBED_LINKS,
      description: E.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION,
      flag: S.Permissions.EMBED_LINKS
    },
    [S.Permissions.ATTACH_FILES.toString()]: {
      title: E.ATTACH_FILES,
      description: E.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION,
      flag: S.Permissions.ATTACH_FILES
    },
    [S.Permissions.ADD_REACTIONS.toString()]: {
      title: E.ADD_REACTIONS,
      description: E.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION,
      flag: S.Permissions.ADD_REACTIONS
    },
    [S.Permissions.USE_EXTERNAL_EMOJIS.toString()]: {
      title: E.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
      description: E.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION,
      flag: S.Permissions.USE_EXTERNAL_EMOJIS
    },
    [S.Permissions.USE_EXTERNAL_STICKERS.toString()]: {
      title: E.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
      description: E.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION,
      flag: S.Permissions.USE_EXTERNAL_STICKERS
    },
    [S.Permissions.MENTION_EVERYONE.toString()]: {
      title: E.MENTION_EVERYONE,
      description: E.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION,
      flag: S.Permissions.MENTION_EVERYONE
    },
    [S.Permissions.MANAGE_MESSAGES.toString()]: {
      title: E.MANAGE_MESSAGES,
      description: E.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION,
      flag: S.Permissions.MANAGE_MESSAGES
    },
    [S.Permissions.READ_MESSAGE_HISTORY.toString()]: {
      title: E.READ_MESSAGE_HISTORY,
      description: E.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION,
      flag: S.Permissions.READ_MESSAGE_HISTORY
    },
    [S.Permissions.SEND_TTS_MESSAGES.toString()]: {
      title: E.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
      description: E.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION,
      flag: S.Permissions.SEND_TTS_MESSAGES
    },
    [S.Permissions.USE_APPLICATION_COMMANDS.toString()]: {
      title: E.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
      description: E.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_GUILD_DESCRIPTION,
      flag: S.Permissions.USE_APPLICATION_COMMANDS
    },
    [S.Permissions.SEND_VOICE_MESSAGES.toString()]: {
      title: E.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
      description: E.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE_GUILD_DESCRIPTION,
      flag: S.Permissions.SEND_VOICE_MESSAGES
    },
    [S.Permissions.USE_CLYDE_AI.toString()]: {
      title: E.ROLE_PERMISSIONS_USE_CLYDE_AI,
      description: E.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
      flag: S.Permissions.USE_CLYDE_AI
    },
    [S.Permissions.SEND_POLLS.toString()]: {
      title: E.ROLE_PERMISSIONS_SEND_POLLS,
      description: E.ROLE_PERMISSIONS_SEND_POLLS_DESCRIPTION_GUILD,
      flag: S.Permissions.SEND_POLLS
    },
    [S.Permissions.CONNECT.toString()]: {
      title: E.CONNECT,
      description: E.ROLE_PERMISSIONS_CONNECT_DESCRIPTION,
      flag: S.Permissions.CONNECT
    },
    [S.Permissions.SPEAK.toString()]: {
      title: E.SPEAK,
      description: E.ROLE_PERMISSIONS_SPEAK_DESCRIPTION,
      flag: S.Permissions.SPEAK
    },
    [S.Permissions.STREAM.toString()]: {
      title: E.VIDEO,
      description: E.ROLE_PERMISSIONS_STREAM_DESCRIPTION,
      flag: S.Permissions.STREAM
    },
    [S.Permissions.USE_EMBEDDED_ACTIVITIES.toString()]: {
      title: E.USE_EMBEDDED_ACTIVITIES,
      description: E.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION,
      flag: S.Permissions.USE_EMBEDDED_ACTIVITIES
    },
    [S.Permissions.USE_SOUNDBOARD.toString()]: {
      title: E.USE_SOUNDBOARD,
      description: (null == s ? void 0 : s.SOUNDBOARD_DESCRIPTION) || E.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION,
      flag: S.Permissions.USE_SOUNDBOARD
    },
    [S.Permissions.USE_EXTERNAL_SOUNDS.toString()]: {
      title: E.USE_EXTERNAL_SOUNDS,
      description: E.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
      flag: S.Permissions.USE_EXTERNAL_SOUNDS
    },
    [S.Permissions.USE_VAD.toString()]: {
      title: E.USE_VAD,
      description: E.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION,
      flag: S.Permissions.USE_VAD
    },
    [S.Permissions.PRIORITY_SPEAKER.toString()]: {
      title: E.PRIORITY_SPEAKER,
      description: (null == s ? void 0 : s.PRIORITY_SPEAKER_DESCRIPTION) || E.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION,
      flag: S.Permissions.PRIORITY_SPEAKER
    },
    [S.Permissions.MUTE_MEMBERS.toString()]: {
      title: E.MUTE_MEMBERS,
      description: E.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION,
      flag: S.Permissions.MUTE_MEMBERS
    },
    [S.Permissions.DEAFEN_MEMBERS.toString()]: {
      title: E.DEAFEN_MEMBERS,
      description: E.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION,
      flag: S.Permissions.DEAFEN_MEMBERS
    },
    [S.Permissions.MOVE_MEMBERS.toString()]: {
      title: E.MOVE_MEMBERS,
      description: E.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION,
      flag: S.Permissions.MOVE_MEMBERS
    },
    [S.Permissions.REQUEST_TO_SPEAK.toString()]: {
      title: E.REQUEST_TO_SPEAK,
      description: E.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION,
      flag: S.Permissions.REQUEST_TO_SPEAK,
      isExperimental: !0
    },
    [S.Permissions.ADMINISTRATOR.toString()]: {
      title: E.ADMINISTRATOR,
      description: "string" == typeof E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION ? E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION : E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION.format(),
      flag: S.Permissions.ADMINISTRATOR
    },
    [S.Permissions.MANAGE_EVENTS.toString()]: {
      title: E.MANAGE_EVENTS,
      description: E.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION,
      flag: S.Permissions.MANAGE_EVENTS
    },
    [S.Permissions.CREATE_EVENTS.toString()]: {
      title: E.CREATE_EVENTS,
      description: E.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION,
      flag: S.Permissions.CREATE_EVENTS
    },
    [S.Permissions.MANAGE_THREADS.toString()]: {
      title: s.showForumPermissions ? E.MANAGE_THREADS_AND_FORUM_POSTS : E.MANAGE_THREADS,
      description: s.showForumPermissions ? E.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION : E.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION,
      flag: S.Permissions.MANAGE_THREADS
    },
    [S.Permissions.CREATE_PUBLIC_THREADS.toString()]: {
      title: E.CREATE_PUBLIC_THREADS,
      description: E.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION,
      flag: S.Permissions.CREATE_PUBLIC_THREADS
    },
    [S.Permissions.CREATE_PRIVATE_THREADS.toString()]: {
      title: E.CREATE_PRIVATE_THREADS,
      description: E.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION,
      flag: S.Permissions.CREATE_PRIVATE_THREADS
    },
    [S.Permissions.SEND_MESSAGES_IN_THREADS.toString()]: {
      title: s.showForumPermissions ? E.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS : E.SEND_MESSAGES_IN_THREADS,
      description: s.showForumPermissions ? E.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION : E.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION,
      flag: S.Permissions.SEND_MESSAGES_IN_THREADS
    },
    [S.Permissions.USE_CLYDE_AI.toString()]: {
      title: E.ROLE_PERMISSIONS_USE_CLYDE_AI,
      description: E.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
      flag: S.Permissions.USE_CLYDE_AI
    },
    [S.Permissions.SET_VOICE_CHANNEL_STATUS.toString()]: {
      title: s.inVoiceBgExperiment ? E.VOICE_CHANNEL_CUSTOMIZE_PERMISSION_TITLE : E.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
      description: s.inVoiceBgExperiment ? E.VOICE_CHANNEL_CUSTOMIZE_PERMISSION_DESCRIPTION : E.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
      flag: S.Permissions.SET_VOICE_CHANNEL_STATUS
    }
  }
}

function t(E, s) {
  var e, t, r, I, o, N, R, O, A, P;
  let a, M = _(E, s);
  let T = [function(E, s, e) {
    let _ = [S.Permissions.VIEW_CHANNEL, S.Permissions.MANAGE_CHANNELS, S.Permissions.MANAGE_ROLES, S.Permissions.CREATE_GUILD_EXPRESSIONS, S.Permissions.MANAGE_GUILD_EXPRESSIONS, S.Permissions.VIEW_AUDIT_LOG, S.Permissions.VIEW_GUILD_ANALYTICS];
    return e.showCreatorMonetizationAnalyticsPermission && _.push(S.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS), _.push(S.Permissions.MANAGE_WEBHOOKS), _.push(S.Permissions.MANAGE_GUILD), i({
      title: s.ROLE_PERMISSIONS_SECTION_GENERAL_GUILD,
      permissions: n(_, E)
    })
  }(M, E, s), function(E, s) {
    let e = [S.Permissions.CREATE_INSTANT_INVITE, S.Permissions.CHANGE_NICKNAME, S.Permissions.MANAGE_NICKNAMES, S.Permissions.KICK_MEMBERS, S.Permissions.BAN_MEMBERS, S.Permissions.MODERATE_MEMBERS];
    return i({
      title: s.ROLE_PERMISSIONS_SECTION_MEMBERSHIP,
      permissions: n(e, E)
    })
  }(M, E), (e = M, t = E, r = s, a = [S.Permissions.SEND_MESSAGES, S.Permissions.SEND_MESSAGES_IN_THREADS, S.Permissions.CREATE_PUBLIC_THREADS, S.Permissions.CREATE_PRIVATE_THREADS, S.Permissions.EMBED_LINKS, S.Permissions.ATTACH_FILES, S.Permissions.ADD_REACTIONS, S.Permissions.USE_EXTERNAL_EMOJIS, S.Permissions.USE_EXTERNAL_STICKERS, S.Permissions.MENTION_EVERYONE, S.Permissions.MANAGE_MESSAGES, S.Permissions.MANAGE_THREADS, S.Permissions.READ_MESSAGE_HISTORY, S.Permissions.SEND_TTS_MESSAGES, S.Permissions.USE_APPLICATION_COMMANDS, S.Permissions.SEND_VOICE_MESSAGES, S.Permissions.USE_CLYDE_AI, S.Permissions.SEND_POLLS], !r.showClydeAIPermissions && (a = a.filter(E => E !== S.Permissions.USE_CLYDE_AI)), i({
    title: t.ROLE_PERMISSIONS_SECTION_TEXT,
    permissions: n(a, e)
  })), function(E, s, e) {
    let _ = [S.Permissions.CONNECT, S.Permissions.SPEAK, S.Permissions.STREAM, S.Permissions.USE_EMBEDDED_ACTIVITIES, S.Permissions.USE_SOUNDBOARD, S.Permissions.USE_EXTERNAL_SOUNDS, S.Permissions.USE_VAD, S.Permissions.PRIORITY_SPEAKER, S.Permissions.MUTE_MEMBERS, S.Permissions.DEAFEN_MEMBERS, S.Permissions.MOVE_MEMBERS, S.Permissions.SET_VOICE_CHANNEL_STATUS];
    return i({
      title: s.ROLE_PERMISSIONS_SECTION_VOICE,
      permissions: n(_, E)
    })
  }(M, E, 0)];
  if (s.showStageChannelPermissions) {
    ;
    T.push((I = M, o = E, N = s, i({
      title: o.ROLE_PERMISSIONS_SECTION_STAGE,
      permissions: n([S.Permissions.REQUEST_TO_SPEAK], I)
    }, N.showExperimental)))
  }
  return T.push((R = M, O = E, A = s, i({
    title: O.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS,
    permissions: n([S.Permissions.CREATE_EVENTS, S.Permissions.MANAGE_EVENTS], R)
  }, A.showExperimental))), T.push((P = M, i({
    title: E.ROLE_PERMISSIONS_SECTION_ADVANCED,
    permissions: n([S.Permissions.ADMINISTRATOR], P)
  }))), T
}

function r(E, s) {
  let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
    showManageWebhooks: !0
  };
  return {
    title: s,
    permissions: n((null == e ? void 0 : e.showManageWebhooks) ? [S.Permissions.VIEW_CHANNEL, S.Permissions.MANAGE_CHANNELS, S.Permissions.MANAGE_ROLES, S.Permissions.MANAGE_WEBHOOKS] : [S.Permissions.VIEW_CHANNEL, S.Permissions.MANAGE_CHANNELS, S.Permissions.MANAGE_ROLES], E)
  }
}

function I(E, s) {
  return {
    title: s,
    permissions: n([S.Permissions.CREATE_INSTANT_INVITE], E)
  }
}

function o(E, s, e) {
  let i = [S.Permissions.SEND_MESSAGES, S.Permissions.SEND_MESSAGES_IN_THREADS, S.Permissions.CREATE_PUBLIC_THREADS, S.Permissions.CREATE_PRIVATE_THREADS, S.Permissions.EMBED_LINKS, S.Permissions.ATTACH_FILES, S.Permissions.ADD_REACTIONS, S.Permissions.USE_EXTERNAL_EMOJIS, S.Permissions.USE_EXTERNAL_STICKERS, S.Permissions.MENTION_EVERYONE, S.Permissions.MANAGE_MESSAGES, S.Permissions.MANAGE_THREADS, S.Permissions.READ_MESSAGE_HISTORY, S.Permissions.SEND_TTS_MESSAGES, S.Permissions.USE_APPLICATION_COMMANDS, S.Permissions.SEND_VOICE_MESSAGES, S.Permissions.USE_CLYDE_AI, S.Permissions.USE_EMBEDDED_ACTIVITIES, S.Permissions.SEND_POLLS];
  return (!e.showPrivateThreads || !e.showCreateThreads) && (i = i.filter(E => E !== S.Permissions.CREATE_PRIVATE_THREADS)), !e.showCreateThreads && (i = i.filter(E => E !== S.Permissions.CREATE_PUBLIC_THREADS)), !e.showClydeAIPermissions && (i = i.filter(E => E !== S.Permissions.USE_CLYDE_AI)), {
    title: s,
    description: e.sectionDescription,
    permissions: n(i, E)
  }
}

function N(E, s) {
  return {
    title: s,
    permissions: n([S.Permissions.CONNECT, S.Permissions.SPEAK, S.Permissions.STREAM, S.Permissions.USE_EMBEDDED_ACTIVITIES, S.Permissions.USE_SOUNDBOARD, S.Permissions.USE_EXTERNAL_SOUNDS, S.Permissions.USE_VAD, S.Permissions.PRIORITY_SPEAKER, S.Permissions.MUTE_MEMBERS, S.Permissions.DEAFEN_MEMBERS, S.Permissions.MOVE_MEMBERS, S.Permissions.SET_VOICE_CHANNEL_STATUS], E)
  }
}

function R(E, s, e) {
  let i = [S.Permissions.SEND_MESSAGES, S.Permissions.EMBED_LINKS, S.Permissions.ATTACH_FILES, S.Permissions.ADD_REACTIONS, S.Permissions.USE_EXTERNAL_EMOJIS, S.Permissions.USE_EXTERNAL_STICKERS, S.Permissions.MENTION_EVERYONE, S.Permissions.MANAGE_MESSAGES, S.Permissions.READ_MESSAGE_HISTORY, S.Permissions.SEND_TTS_MESSAGES, S.Permissions.USE_APPLICATION_COMMANDS, S.Permissions.SEND_VOICE_MESSAGES, S.Permissions.SEND_POLLS];
  return {
    title: s,
    description: e.sectionDescription,
    permissions: n(i, E)
  }
}

function O(E, s, e) {
  return {
    title: s,
    permissions: n(e ? [S.Permissions.CONNECT, S.Permissions.STREAM, S.Permissions.MUTE_MEMBERS, S.Permissions.MOVE_MEMBERS] : [S.Permissions.CONNECT, S.Permissions.MUTE_MEMBERS, S.Permissions.MOVE_MEMBERS], E)
  }
}

function A(E, s) {
  return {
    title: s,
    permissions: n([S.Permissions.REQUEST_TO_SPEAK, S.Permissions.MENTION_EVERYONE], E)
  }
}

function P(E, s) {
  return {
    title: s,
    permissions: n([S.Permissions.CREATE_EVENTS, S.Permissions.MANAGE_EVENTS], E)
  }
}

function a(E) {
  return null == E ? E : "string" == typeof E ? E.trim() : "function" == typeof E.format ? E.format() : E
}