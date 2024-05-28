"use strict";
i.r(s), i.d(s, {
  generateChannelEventsSection: function() {
    return A
  },
  generateChannelGeneralSection: function() {
    return o
  },
  generateChannelMembershipSection: function() {
    return _
  },
  generateChannelStageSection: function() {
    return N
  },
  generateChannelStageVoiceSection: function() {
    return u
  },
  generateChannelTextSection: function() {
    return l
  },
  generateChannelVoiceChatSection: function() {
    return I
  },
  generateChannelVoiceSection: function() {
    return a
  },
  generateGuildPermissionSpec: function() {
    return S
  },
  getGuildPermissionSpec: function() {
    return r
  },
  renderDescription: function() {
    return R
  }
}), i("653041");
var t = i("231338");

function n(e) {
  let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return !s && (e.permissions = e.permissions.filter(e => {
    let {
      isExperimental: s
    } = e;
    return !s
  })), e
}

function E(e, s) {
  return e.map(e => s[e.toString()])
}

function r(e, s) {
  return {
    [t.Permissions.VIEW_CHANNEL.toString()]: {
      title: e.ROLE_PERMISSIONS_VIEW_CHANNEL,
      description: e.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION,
      flag: t.Permissions.VIEW_CHANNEL
    },
    [t.Permissions.MANAGE_CHANNELS.toString()]: {
      title: e.MANAGE_CHANNELS,
      description: e.ROLE_PERMISSIONS_MANAGE_CHANNELS_DESCRIPTION,
      flag: t.Permissions.MANAGE_CHANNELS
    },
    [t.Permissions.MANAGE_ROLES.toString()]: {
      title: e.MANAGE_ROLES,
      description: e.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION,
      flag: t.Permissions.MANAGE_ROLES
    },
    [t.Permissions.MANAGE_GUILD_EXPRESSIONS.toString()]: {
      title: e.MANAGE_EXPRESSIONS,
      description: e.ROLE_PERMISSIONS_MANAGE_EXPRESSIONS_DESCRIPTION,
      flag: t.Permissions.MANAGE_GUILD_EXPRESSIONS
    },
    [t.Permissions.CREATE_GUILD_EXPRESSIONS.toString()]: {
      title: e.CREATE_EXPRESSIONS,
      description: e.ROLE_PERMISSIONS_CREATE_EXPRESSIONS_DESCRIPTION,
      flag: t.Permissions.CREATE_GUILD_EXPRESSIONS
    },
    [t.Permissions.VIEW_AUDIT_LOG.toString()]: {
      title: e.VIEW_AUDIT_LOG,
      description: e.ROLE_PERMISSIONS_VIEW_AUDIT_LOG_DESCRIPTION,
      flag: t.Permissions.VIEW_AUDIT_LOG
    },
    [t.Permissions.VIEW_GUILD_ANALYTICS.toString()]: {
      title: e.VIEW_GUILD_ANALYTICS,
      description: e.ROLE_PERMISSIONS_VIEW_GUILD_ANALYTICS_DESCRIPTION,
      flag: t.Permissions.VIEW_GUILD_ANALYTICS
    },
    [t.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
      title: e.VIEW_CREATOR_MONETIZATION_ANALYTICS,
      description: e.ROLE_PERMISSIONS_VIEW_CREATOR_MONETIZATION_ANALYTICS_DESCRIPTION,
      flag: t.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS
    },
    [t.Permissions.MANAGE_WEBHOOKS.toString()]: {
      title: e.MANAGE_WEBHOOKS,
      description: e.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION,
      flag: t.Permissions.MANAGE_WEBHOOKS
    },
    [t.Permissions.MANAGE_GUILD.toString()]: {
      title: e.MANAGE_SERVER,
      description: e.ROLE_PERMISSIONS_MANAGE_SERVER_DESCRIPTION,
      flag: t.Permissions.MANAGE_GUILD
    },
    [t.Permissions.CREATE_INSTANT_INVITE.toString()]: {
      title: e.CREATE_INSTANT_INVITE,
      description: e.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION,
      flag: t.Permissions.CREATE_INSTANT_INVITE
    },
    [t.Permissions.CHANGE_NICKNAME.toString()]: {
      title: e.CHANGE_NICKNAME,
      description: e.ROLE_PERMISSIONS_CHANGE_NICKNAME_DESCRIPTION,
      flag: t.Permissions.CHANGE_NICKNAME
    },
    [t.Permissions.MANAGE_NICKNAMES.toString()]: {
      title: e.MANAGE_NICKNAMES,
      description: e.ROLE_PERMISSIONS_MANAGE_NICKNAMES_DESCRIPTION,
      flag: t.Permissions.MANAGE_NICKNAMES
    },
    [t.Permissions.KICK_MEMBERS.toString()]: {
      title: s.showMembershipManualApprovalPermissions ? e.KICK_MEMBERS_AND_REVIEW_APPLICATIONS : e.KICK_MEMBERS,
      description: s.showMembershipManualApprovalPermissions ? e.ROLE_PERMISSIONS_KICK_MEMBERS_AND_REVIEW_APPLICATION_DESCRIPTION : e.ROLE_PERMISSIONS_KICK_MEMBERS_DESCRIPTION,
      flag: t.Permissions.KICK_MEMBERS
    },
    [t.Permissions.BAN_MEMBERS.toString()]: {
      title: e.BAN_MEMBERS,
      description: e.ROLE_PERMISSIONS_BAN_MEMBERS_DESCRIPTION,
      flag: t.Permissions.BAN_MEMBERS
    },
    [t.Permissions.MODERATE_MEMBERS.toString()]: {
      title: e.MODERATE_MEMBER,
      description: e.ROLE_PERMISSIONS_MODERATE_MEMBER_DESCRIPTION,
      flag: t.Permissions.MODERATE_MEMBERS
    },
    [t.Permissions.SEND_MESSAGES.toString()]: {
      title: s.showForumPermissions ? e.SEND_MESSAGES_AND_CREATE_FORUM_POSTS : e.SEND_MESSAGES,
      description: s.showForumPermissions ? e.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION : e.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION,
      flag: t.Permissions.SEND_MESSAGES
    },
    [t.Permissions.EMBED_LINKS.toString()]: {
      title: e.EMBED_LINKS,
      description: e.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION,
      flag: t.Permissions.EMBED_LINKS
    },
    [t.Permissions.ATTACH_FILES.toString()]: {
      title: e.ATTACH_FILES,
      description: e.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION,
      flag: t.Permissions.ATTACH_FILES
    },
    [t.Permissions.ADD_REACTIONS.toString()]: {
      title: e.ADD_REACTIONS,
      description: e.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION,
      flag: t.Permissions.ADD_REACTIONS
    },
    [t.Permissions.USE_EXTERNAL_EMOJIS.toString()]: {
      title: e.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
      description: e.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION,
      flag: t.Permissions.USE_EXTERNAL_EMOJIS
    },
    [t.Permissions.USE_EXTERNAL_STICKERS.toString()]: {
      title: e.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
      description: e.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION,
      flag: t.Permissions.USE_EXTERNAL_STICKERS
    },
    [t.Permissions.MENTION_EVERYONE.toString()]: {
      title: e.MENTION_EVERYONE,
      description: e.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION,
      flag: t.Permissions.MENTION_EVERYONE
    },
    [t.Permissions.MANAGE_MESSAGES.toString()]: {
      title: e.MANAGE_MESSAGES,
      description: e.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION,
      flag: t.Permissions.MANAGE_MESSAGES
    },
    [t.Permissions.READ_MESSAGE_HISTORY.toString()]: {
      title: e.READ_MESSAGE_HISTORY,
      description: e.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION,
      flag: t.Permissions.READ_MESSAGE_HISTORY
    },
    [t.Permissions.SEND_TTS_MESSAGES.toString()]: {
      title: e.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
      description: e.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION,
      flag: t.Permissions.SEND_TTS_MESSAGES
    },
    [t.Permissions.USE_APPLICATION_COMMANDS.toString()]: {
      title: e.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
      description: e.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_GUILD_DESCRIPTION,
      flag: t.Permissions.USE_APPLICATION_COMMANDS
    },
    [t.Permissions.SEND_VOICE_MESSAGES.toString()]: {
      title: e.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
      description: e.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE_GUILD_DESCRIPTION,
      flag: t.Permissions.SEND_VOICE_MESSAGES
    },
    [t.Permissions.USE_CLYDE_AI.toString()]: {
      title: e.ROLE_PERMISSIONS_USE_CLYDE_AI,
      description: e.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
      flag: t.Permissions.USE_CLYDE_AI
    },
    [t.Permissions.SEND_POLLS.toString()]: {
      title: e.ROLE_PERMISSIONS_SEND_POLLS,
      description: e.ROLE_PERMISSIONS_SEND_POLLS_DESCRIPTION_GUILD,
      flag: t.Permissions.SEND_POLLS
    },
    [t.Permissions.CONNECT.toString()]: {
      title: e.CONNECT,
      description: e.ROLE_PERMISSIONS_CONNECT_DESCRIPTION,
      flag: t.Permissions.CONNECT
    },
    [t.Permissions.SPEAK.toString()]: {
      title: e.SPEAK,
      description: e.ROLE_PERMISSIONS_SPEAK_DESCRIPTION,
      flag: t.Permissions.SPEAK
    },
    [t.Permissions.STREAM.toString()]: {
      title: e.VIDEO,
      description: e.ROLE_PERMISSIONS_STREAM_DESCRIPTION,
      flag: t.Permissions.STREAM
    },
    [t.Permissions.USE_EMBEDDED_ACTIVITIES.toString()]: {
      title: e.USE_EMBEDDED_ACTIVITIES,
      description: e.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION,
      flag: t.Permissions.USE_EMBEDDED_ACTIVITIES
    },
    [t.Permissions.USE_SOUNDBOARD.toString()]: {
      title: e.USE_SOUNDBOARD,
      description: (null == s ? void 0 : s.SOUNDBOARD_DESCRIPTION) || e.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION,
      flag: t.Permissions.USE_SOUNDBOARD
    },
    [t.Permissions.USE_EXTERNAL_SOUNDS.toString()]: {
      title: e.USE_EXTERNAL_SOUNDS,
      description: e.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
      flag: t.Permissions.USE_EXTERNAL_SOUNDS
    },
    [t.Permissions.USE_VAD.toString()]: {
      title: e.USE_VAD,
      description: e.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION,
      flag: t.Permissions.USE_VAD
    },
    [t.Permissions.PRIORITY_SPEAKER.toString()]: {
      title: e.PRIORITY_SPEAKER,
      description: (null == s ? void 0 : s.PRIORITY_SPEAKER_DESCRIPTION) || e.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION,
      flag: t.Permissions.PRIORITY_SPEAKER
    },
    [t.Permissions.MUTE_MEMBERS.toString()]: {
      title: e.MUTE_MEMBERS,
      description: e.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION,
      flag: t.Permissions.MUTE_MEMBERS
    },
    [t.Permissions.DEAFEN_MEMBERS.toString()]: {
      title: e.DEAFEN_MEMBERS,
      description: e.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION,
      flag: t.Permissions.DEAFEN_MEMBERS
    },
    [t.Permissions.MOVE_MEMBERS.toString()]: {
      title: e.MOVE_MEMBERS,
      description: e.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION,
      flag: t.Permissions.MOVE_MEMBERS
    },
    [t.Permissions.REQUEST_TO_SPEAK.toString()]: {
      title: e.REQUEST_TO_SPEAK,
      description: e.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION,
      flag: t.Permissions.REQUEST_TO_SPEAK,
      isExperimental: !0
    },
    [t.Permissions.ADMINISTRATOR.toString()]: {
      title: e.ADMINISTRATOR,
      description: "string" == typeof e.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION ? e.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION : e.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION.format(),
      flag: t.Permissions.ADMINISTRATOR
    },
    [t.Permissions.MANAGE_EVENTS.toString()]: {
      title: e.MANAGE_EVENTS,
      description: e.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION,
      flag: t.Permissions.MANAGE_EVENTS
    },
    [t.Permissions.CREATE_EVENTS.toString()]: {
      title: e.CREATE_EVENTS,
      description: e.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION,
      flag: t.Permissions.CREATE_EVENTS
    },
    [t.Permissions.MANAGE_THREADS.toString()]: {
      title: s.showForumPermissions ? e.MANAGE_THREADS_AND_FORUM_POSTS : e.MANAGE_THREADS,
      description: s.showForumPermissions ? e.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION : e.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION,
      flag: t.Permissions.MANAGE_THREADS
    },
    [t.Permissions.CREATE_PUBLIC_THREADS.toString()]: {
      title: e.CREATE_PUBLIC_THREADS,
      description: e.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION,
      flag: t.Permissions.CREATE_PUBLIC_THREADS
    },
    [t.Permissions.CREATE_PRIVATE_THREADS.toString()]: {
      title: e.CREATE_PRIVATE_THREADS,
      description: e.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION,
      flag: t.Permissions.CREATE_PRIVATE_THREADS
    },
    [t.Permissions.SEND_MESSAGES_IN_THREADS.toString()]: {
      title: s.showForumPermissions ? e.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS : e.SEND_MESSAGES_IN_THREADS,
      description: s.showForumPermissions ? e.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION : e.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION,
      flag: t.Permissions.SEND_MESSAGES_IN_THREADS
    },
    [t.Permissions.USE_CLYDE_AI.toString()]: {
      title: e.ROLE_PERMISSIONS_USE_CLYDE_AI,
      description: e.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
      flag: t.Permissions.USE_CLYDE_AI
    },
    [t.Permissions.SET_VOICE_CHANNEL_STATUS.toString()]: {
      title: e.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
      description: e.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
      flag: t.Permissions.SET_VOICE_CHANNEL_STATUS
    }
  }
}

function S(e, s) {
  var i, S, o, _, l, a, I, u, N, A;
  let R, O = r(e, s);
  let T = [function(e, s, i) {
    let r = [t.Permissions.VIEW_CHANNEL, t.Permissions.MANAGE_CHANNELS, t.Permissions.MANAGE_ROLES, t.Permissions.CREATE_GUILD_EXPRESSIONS, t.Permissions.MANAGE_GUILD_EXPRESSIONS, t.Permissions.VIEW_AUDIT_LOG, t.Permissions.VIEW_GUILD_ANALYTICS];
    return i.showCreatorMonetizationAnalyticsPermission && r.push(t.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS), r.push(t.Permissions.MANAGE_WEBHOOKS), r.push(t.Permissions.MANAGE_GUILD), n({
      title: s.ROLE_PERMISSIONS_SECTION_GENERAL_GUILD,
      permissions: E(r, e)
    })
  }(O, e, s), function(e, s) {
    let i = [t.Permissions.CREATE_INSTANT_INVITE, t.Permissions.CHANGE_NICKNAME, t.Permissions.MANAGE_NICKNAMES, t.Permissions.KICK_MEMBERS, t.Permissions.BAN_MEMBERS, t.Permissions.MODERATE_MEMBERS];
    return n({
      title: s.ROLE_PERMISSIONS_SECTION_MEMBERSHIP,
      permissions: E(i, e)
    })
  }(O, e), (i = O, S = e, o = s, R = [t.Permissions.SEND_MESSAGES, t.Permissions.SEND_MESSAGES_IN_THREADS, t.Permissions.CREATE_PUBLIC_THREADS, t.Permissions.CREATE_PRIVATE_THREADS, t.Permissions.EMBED_LINKS, t.Permissions.ATTACH_FILES, t.Permissions.ADD_REACTIONS, t.Permissions.USE_EXTERNAL_EMOJIS, t.Permissions.USE_EXTERNAL_STICKERS, t.Permissions.MENTION_EVERYONE, t.Permissions.MANAGE_MESSAGES, t.Permissions.MANAGE_THREADS, t.Permissions.READ_MESSAGE_HISTORY, t.Permissions.SEND_TTS_MESSAGES, t.Permissions.USE_APPLICATION_COMMANDS, t.Permissions.SEND_VOICE_MESSAGES, t.Permissions.USE_CLYDE_AI, t.Permissions.SEND_POLLS], !o.showClydeAIPermissions && (R = R.filter(e => e !== t.Permissions.USE_CLYDE_AI)), n({
    title: S.ROLE_PERMISSIONS_SECTION_TEXT,
    permissions: E(R, i)
  })), function(e, s, i) {
    let r = [t.Permissions.CONNECT, t.Permissions.SPEAK, t.Permissions.STREAM, t.Permissions.USE_EMBEDDED_ACTIVITIES, t.Permissions.USE_SOUNDBOARD, t.Permissions.USE_EXTERNAL_SOUNDS, t.Permissions.USE_VAD, t.Permissions.PRIORITY_SPEAKER, t.Permissions.MUTE_MEMBERS, t.Permissions.DEAFEN_MEMBERS, t.Permissions.MOVE_MEMBERS, t.Permissions.SET_VOICE_CHANNEL_STATUS];
    return n({
      title: s.ROLE_PERMISSIONS_SECTION_VOICE,
      permissions: E(r, e)
    })
  }(O, e, 0)];
  if (s.showStageChannelPermissions) {
    ;
    T.push((_ = O, l = e, a = s, n({
      title: l.ROLE_PERMISSIONS_SECTION_STAGE,
      permissions: E([t.Permissions.REQUEST_TO_SPEAK], _)
    }, a.showExperimental)))
  }
  return T.push((I = O, u = e, N = s, n({
    title: u.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS,
    permissions: E([t.Permissions.CREATE_EVENTS, t.Permissions.MANAGE_EVENTS], I)
  }, N.showExperimental))), T.push((A = O, n({
    title: e.ROLE_PERMISSIONS_SECTION_ADVANCED,
    permissions: E([t.Permissions.ADMINISTRATOR], A)
  }))), T
}

function o(e, s) {
  let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
    showManageWebhooks: !0
  };
  return {
    title: s,
    permissions: E((null == i ? void 0 : i.showManageWebhooks) ? [t.Permissions.VIEW_CHANNEL, t.Permissions.MANAGE_CHANNELS, t.Permissions.MANAGE_ROLES, t.Permissions.MANAGE_WEBHOOKS] : [t.Permissions.VIEW_CHANNEL, t.Permissions.MANAGE_CHANNELS, t.Permissions.MANAGE_ROLES], e)
  }
}

function _(e, s) {
  return {
    title: s,
    permissions: E([t.Permissions.CREATE_INSTANT_INVITE], e)
  }
}

function l(e, s, i) {
  let n = [t.Permissions.SEND_MESSAGES, t.Permissions.SEND_MESSAGES_IN_THREADS, t.Permissions.CREATE_PUBLIC_THREADS, t.Permissions.CREATE_PRIVATE_THREADS, t.Permissions.EMBED_LINKS, t.Permissions.ATTACH_FILES, t.Permissions.ADD_REACTIONS, t.Permissions.USE_EXTERNAL_EMOJIS, t.Permissions.USE_EXTERNAL_STICKERS, t.Permissions.MENTION_EVERYONE, t.Permissions.MANAGE_MESSAGES, t.Permissions.MANAGE_THREADS, t.Permissions.READ_MESSAGE_HISTORY, t.Permissions.SEND_TTS_MESSAGES, t.Permissions.USE_APPLICATION_COMMANDS, t.Permissions.SEND_VOICE_MESSAGES, t.Permissions.USE_CLYDE_AI, t.Permissions.USE_EMBEDDED_ACTIVITIES, t.Permissions.SEND_POLLS];
  return (!i.showPrivateThreads || !i.showCreateThreads) && (n = n.filter(e => e !== t.Permissions.CREATE_PRIVATE_THREADS)), !i.showCreateThreads && (n = n.filter(e => e !== t.Permissions.CREATE_PUBLIC_THREADS)), !i.showClydeAIPermissions && (n = n.filter(e => e !== t.Permissions.USE_CLYDE_AI)), {
    title: s,
    description: i.sectionDescription,
    permissions: E(n, e)
  }
}

function a(e, s) {
  return {
    title: s,
    permissions: E([t.Permissions.CONNECT, t.Permissions.SPEAK, t.Permissions.STREAM, t.Permissions.USE_EMBEDDED_ACTIVITIES, t.Permissions.USE_SOUNDBOARD, t.Permissions.USE_EXTERNAL_SOUNDS, t.Permissions.USE_VAD, t.Permissions.PRIORITY_SPEAKER, t.Permissions.MUTE_MEMBERS, t.Permissions.DEAFEN_MEMBERS, t.Permissions.MOVE_MEMBERS, t.Permissions.SET_VOICE_CHANNEL_STATUS], e)
  }
}

function I(e, s, i) {
  let n = [t.Permissions.SEND_MESSAGES, t.Permissions.EMBED_LINKS, t.Permissions.ATTACH_FILES, t.Permissions.ADD_REACTIONS, t.Permissions.USE_EXTERNAL_EMOJIS, t.Permissions.USE_EXTERNAL_STICKERS, t.Permissions.MENTION_EVERYONE, t.Permissions.MANAGE_MESSAGES, t.Permissions.READ_MESSAGE_HISTORY, t.Permissions.SEND_TTS_MESSAGES, t.Permissions.USE_APPLICATION_COMMANDS, t.Permissions.SEND_VOICE_MESSAGES, t.Permissions.SEND_POLLS];
  return {
    title: s,
    description: i.sectionDescription,
    permissions: E(n, e)
  }
}

function u(e, s, i) {
  return {
    title: s,
    permissions: E(i ? [t.Permissions.CONNECT, t.Permissions.STREAM, t.Permissions.MUTE_MEMBERS, t.Permissions.MOVE_MEMBERS] : [t.Permissions.CONNECT, t.Permissions.MUTE_MEMBERS, t.Permissions.MOVE_MEMBERS], e)
  }
}

function N(e, s) {
  return {
    title: s,
    permissions: E([t.Permissions.REQUEST_TO_SPEAK, t.Permissions.MENTION_EVERYONE], e)
  }
}

function A(e, s) {
  return {
    title: s,
    permissions: E([t.Permissions.CREATE_EVENTS, t.Permissions.MANAGE_EVENTS], e)
  }
}

function R(e) {
  return null == e ? e : "string" == typeof e ? e.trim() : "function" == typeof e.format ? e.format() : e
}