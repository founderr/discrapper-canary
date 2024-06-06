"use strict";
i.r(s), i.d(s, {
  generateChannelAppsSection: function() {
    return u
  },
  generateChannelEventsSection: function() {
    return R
  },
  generateChannelGeneralSection: function() {
    return o
  },
  generateChannelMembershipSection: function() {
    return _
  },
  generateChannelStageSection: function() {
    return A
  },
  generateChannelStageVoiceSection: function() {
    return N
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
    return O
  }
}), i("653041");
var n = i("231338");

function t(e) {
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
    [n.Permissions.VIEW_CHANNEL.toString()]: {
      title: e.ROLE_PERMISSIONS_VIEW_CHANNEL,
      description: e.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION,
      flag: n.Permissions.VIEW_CHANNEL
    },
    [n.Permissions.MANAGE_CHANNELS.toString()]: {
      title: e.MANAGE_CHANNELS,
      description: e.ROLE_PERMISSIONS_MANAGE_CHANNELS_DESCRIPTION,
      flag: n.Permissions.MANAGE_CHANNELS
    },
    [n.Permissions.MANAGE_ROLES.toString()]: {
      title: e.MANAGE_ROLES,
      description: e.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION,
      flag: n.Permissions.MANAGE_ROLES
    },
    [n.Permissions.MANAGE_GUILD_EXPRESSIONS.toString()]: {
      title: e.MANAGE_EXPRESSIONS,
      description: e.ROLE_PERMISSIONS_MANAGE_EXPRESSIONS_DESCRIPTION,
      flag: n.Permissions.MANAGE_GUILD_EXPRESSIONS
    },
    [n.Permissions.CREATE_GUILD_EXPRESSIONS.toString()]: {
      title: e.CREATE_EXPRESSIONS,
      description: e.ROLE_PERMISSIONS_CREATE_EXPRESSIONS_DESCRIPTION,
      flag: n.Permissions.CREATE_GUILD_EXPRESSIONS
    },
    [n.Permissions.VIEW_AUDIT_LOG.toString()]: {
      title: e.VIEW_AUDIT_LOG,
      description: e.ROLE_PERMISSIONS_VIEW_AUDIT_LOG_DESCRIPTION,
      flag: n.Permissions.VIEW_AUDIT_LOG
    },
    [n.Permissions.VIEW_GUILD_ANALYTICS.toString()]: {
      title: e.VIEW_GUILD_ANALYTICS,
      description: e.ROLE_PERMISSIONS_VIEW_GUILD_ANALYTICS_DESCRIPTION,
      flag: n.Permissions.VIEW_GUILD_ANALYTICS
    },
    [n.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
      title: e.VIEW_CREATOR_MONETIZATION_ANALYTICS,
      description: e.ROLE_PERMISSIONS_VIEW_CREATOR_MONETIZATION_ANALYTICS_DESCRIPTION,
      flag: n.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS
    },
    [n.Permissions.MANAGE_WEBHOOKS.toString()]: {
      title: e.MANAGE_WEBHOOKS,
      description: e.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION,
      flag: n.Permissions.MANAGE_WEBHOOKS
    },
    [n.Permissions.MANAGE_GUILD.toString()]: {
      title: e.MANAGE_SERVER,
      description: e.ROLE_PERMISSIONS_MANAGE_SERVER_DESCRIPTION,
      flag: n.Permissions.MANAGE_GUILD
    },
    [n.Permissions.CREATE_INSTANT_INVITE.toString()]: {
      title: e.CREATE_INSTANT_INVITE,
      description: e.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION,
      flag: n.Permissions.CREATE_INSTANT_INVITE
    },
    [n.Permissions.CHANGE_NICKNAME.toString()]: {
      title: e.CHANGE_NICKNAME,
      description: e.ROLE_PERMISSIONS_CHANGE_NICKNAME_DESCRIPTION,
      flag: n.Permissions.CHANGE_NICKNAME
    },
    [n.Permissions.MANAGE_NICKNAMES.toString()]: {
      title: e.MANAGE_NICKNAMES,
      description: e.ROLE_PERMISSIONS_MANAGE_NICKNAMES_DESCRIPTION,
      flag: n.Permissions.MANAGE_NICKNAMES
    },
    [n.Permissions.KICK_MEMBERS.toString()]: {
      title: s.showMembershipManualApprovalPermissions ? e.KICK_MEMBERS_AND_REVIEW_APPLICATIONS : e.KICK_MEMBERS,
      description: s.showMembershipManualApprovalPermissions ? e.ROLE_PERMISSIONS_KICK_MEMBERS_AND_REVIEW_APPLICATION_DESCRIPTION : e.ROLE_PERMISSIONS_KICK_MEMBERS_DESCRIPTION,
      flag: n.Permissions.KICK_MEMBERS
    },
    [n.Permissions.BAN_MEMBERS.toString()]: {
      title: e.BAN_MEMBERS,
      description: e.ROLE_PERMISSIONS_BAN_MEMBERS_DESCRIPTION,
      flag: n.Permissions.BAN_MEMBERS
    },
    [n.Permissions.MODERATE_MEMBERS.toString()]: {
      title: e.MODERATE_MEMBER,
      description: e.ROLE_PERMISSIONS_MODERATE_MEMBER_DESCRIPTION,
      flag: n.Permissions.MODERATE_MEMBERS
    },
    [n.Permissions.SEND_MESSAGES.toString()]: {
      title: s.showForumPermissions ? e.SEND_MESSAGES_AND_CREATE_FORUM_POSTS : e.SEND_MESSAGES,
      description: s.showForumPermissions ? e.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION : e.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION,
      flag: n.Permissions.SEND_MESSAGES
    },
    [n.Permissions.EMBED_LINKS.toString()]: {
      title: e.EMBED_LINKS,
      description: e.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION,
      flag: n.Permissions.EMBED_LINKS
    },
    [n.Permissions.ATTACH_FILES.toString()]: {
      title: e.ATTACH_FILES,
      description: e.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION,
      flag: n.Permissions.ATTACH_FILES
    },
    [n.Permissions.ADD_REACTIONS.toString()]: {
      title: e.ADD_REACTIONS,
      description: e.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION,
      flag: n.Permissions.ADD_REACTIONS
    },
    [n.Permissions.USE_EXTERNAL_EMOJIS.toString()]: {
      title: e.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
      description: e.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION,
      flag: n.Permissions.USE_EXTERNAL_EMOJIS
    },
    [n.Permissions.USE_EXTERNAL_STICKERS.toString()]: {
      title: e.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
      description: e.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION,
      flag: n.Permissions.USE_EXTERNAL_STICKERS
    },
    [n.Permissions.MENTION_EVERYONE.toString()]: {
      title: e.MENTION_EVERYONE,
      description: e.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION,
      flag: n.Permissions.MENTION_EVERYONE
    },
    [n.Permissions.MANAGE_MESSAGES.toString()]: {
      title: e.MANAGE_MESSAGES,
      description: e.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION,
      flag: n.Permissions.MANAGE_MESSAGES
    },
    [n.Permissions.READ_MESSAGE_HISTORY.toString()]: {
      title: e.READ_MESSAGE_HISTORY,
      description: e.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION,
      flag: n.Permissions.READ_MESSAGE_HISTORY
    },
    [n.Permissions.SEND_TTS_MESSAGES.toString()]: {
      title: e.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
      description: e.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION,
      flag: n.Permissions.SEND_TTS_MESSAGES
    },
    [n.Permissions.USE_APPLICATION_COMMANDS.toString()]: {
      title: e.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
      description: e.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_GUILD_DESCRIPTION,
      flag: n.Permissions.USE_APPLICATION_COMMANDS
    },
    [n.Permissions.USE_EXTERNAL_APPS.toString()]: {
      title: e.ROLE_PERMISSIONS_USE_EXTERNAL_APPS,
      description: s.externalAppsEnabled ? e.ROLE_PERMISSIONS_USE_EXTERNAL_APPS_GUILD_DESCRIPTION : "".concat(e.ROLE_PERMISSIONS_USE_EXTERNAL_APPS_GUILD_DESCRIPTION, " ").concat(e.ROLE_PERMISSIONS_USE_EXTERNAL_APPS_GUILD_DESCRIPTION_NOT_ENABLED_YET),
      flag: n.Permissions.USE_EXTERNAL_APPS
    },
    [n.Permissions.SEND_VOICE_MESSAGES.toString()]: {
      title: e.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
      description: e.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE_GUILD_DESCRIPTION,
      flag: n.Permissions.SEND_VOICE_MESSAGES
    },
    [n.Permissions.USE_CLYDE_AI.toString()]: {
      title: e.ROLE_PERMISSIONS_USE_CLYDE_AI,
      description: e.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
      flag: n.Permissions.USE_CLYDE_AI
    },
    [n.Permissions.SEND_POLLS.toString()]: {
      title: e.ROLE_PERMISSIONS_SEND_POLLS,
      description: e.ROLE_PERMISSIONS_SEND_POLLS_DESCRIPTION_GUILD,
      flag: n.Permissions.SEND_POLLS
    },
    [n.Permissions.CONNECT.toString()]: {
      title: e.CONNECT,
      description: e.ROLE_PERMISSIONS_CONNECT_DESCRIPTION,
      flag: n.Permissions.CONNECT
    },
    [n.Permissions.SPEAK.toString()]: {
      title: e.SPEAK,
      description: e.ROLE_PERMISSIONS_SPEAK_DESCRIPTION,
      flag: n.Permissions.SPEAK
    },
    [n.Permissions.STREAM.toString()]: {
      title: e.VIDEO,
      description: e.ROLE_PERMISSIONS_STREAM_DESCRIPTION,
      flag: n.Permissions.STREAM
    },
    [n.Permissions.USE_EMBEDDED_ACTIVITIES.toString()]: {
      title: e.USE_EMBEDDED_ACTIVITIES,
      description: e.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION,
      flag: n.Permissions.USE_EMBEDDED_ACTIVITIES
    },
    [n.Permissions.USE_SOUNDBOARD.toString()]: {
      title: e.USE_SOUNDBOARD,
      description: (null == s ? void 0 : s.SOUNDBOARD_DESCRIPTION) || e.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION,
      flag: n.Permissions.USE_SOUNDBOARD
    },
    [n.Permissions.USE_EXTERNAL_SOUNDS.toString()]: {
      title: e.USE_EXTERNAL_SOUNDS,
      description: e.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
      flag: n.Permissions.USE_EXTERNAL_SOUNDS
    },
    [n.Permissions.USE_VAD.toString()]: {
      title: e.USE_VAD,
      description: e.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION,
      flag: n.Permissions.USE_VAD
    },
    [n.Permissions.PRIORITY_SPEAKER.toString()]: {
      title: e.PRIORITY_SPEAKER,
      description: (null == s ? void 0 : s.PRIORITY_SPEAKER_DESCRIPTION) || e.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION,
      flag: n.Permissions.PRIORITY_SPEAKER
    },
    [n.Permissions.MUTE_MEMBERS.toString()]: {
      title: e.MUTE_MEMBERS,
      description: e.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION,
      flag: n.Permissions.MUTE_MEMBERS
    },
    [n.Permissions.DEAFEN_MEMBERS.toString()]: {
      title: e.DEAFEN_MEMBERS,
      description: e.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION,
      flag: n.Permissions.DEAFEN_MEMBERS
    },
    [n.Permissions.MOVE_MEMBERS.toString()]: {
      title: e.MOVE_MEMBERS,
      description: e.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION,
      flag: n.Permissions.MOVE_MEMBERS
    },
    [n.Permissions.REQUEST_TO_SPEAK.toString()]: {
      title: e.REQUEST_TO_SPEAK,
      description: e.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION,
      flag: n.Permissions.REQUEST_TO_SPEAK,
      isExperimental: !0
    },
    [n.Permissions.ADMINISTRATOR.toString()]: {
      title: e.ADMINISTRATOR,
      description: "string" == typeof e.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION ? e.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION : e.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION.format(),
      flag: n.Permissions.ADMINISTRATOR
    },
    [n.Permissions.MANAGE_EVENTS.toString()]: {
      title: e.MANAGE_EVENTS,
      description: e.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION,
      flag: n.Permissions.MANAGE_EVENTS
    },
    [n.Permissions.CREATE_EVENTS.toString()]: {
      title: e.CREATE_EVENTS,
      description: e.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION,
      flag: n.Permissions.CREATE_EVENTS
    },
    [n.Permissions.MANAGE_THREADS.toString()]: {
      title: s.showForumPermissions ? e.MANAGE_THREADS_AND_FORUM_POSTS : e.MANAGE_THREADS,
      description: s.showForumPermissions ? e.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION : e.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION,
      flag: n.Permissions.MANAGE_THREADS
    },
    [n.Permissions.CREATE_PUBLIC_THREADS.toString()]: {
      title: e.CREATE_PUBLIC_THREADS,
      description: e.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION,
      flag: n.Permissions.CREATE_PUBLIC_THREADS
    },
    [n.Permissions.CREATE_PRIVATE_THREADS.toString()]: {
      title: e.CREATE_PRIVATE_THREADS,
      description: e.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION,
      flag: n.Permissions.CREATE_PRIVATE_THREADS
    },
    [n.Permissions.SEND_MESSAGES_IN_THREADS.toString()]: {
      title: s.showForumPermissions ? e.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS : e.SEND_MESSAGES_IN_THREADS,
      description: s.showForumPermissions ? e.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION : e.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION,
      flag: n.Permissions.SEND_MESSAGES_IN_THREADS
    },
    [n.Permissions.USE_CLYDE_AI.toString()]: {
      title: e.ROLE_PERMISSIONS_USE_CLYDE_AI,
      description: e.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
      flag: n.Permissions.USE_CLYDE_AI
    },
    [n.Permissions.SET_VOICE_CHANNEL_STATUS.toString()]: {
      title: e.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
      description: e.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
      flag: n.Permissions.SET_VOICE_CHANNEL_STATUS
    }
  }
}

function S(e, s) {
  var i, S, o, _, l, a, I, u, N, A;
  let R, O = r(e, s);
  let T = [function(e, s, i) {
    let r = [n.Permissions.VIEW_CHANNEL, n.Permissions.MANAGE_CHANNELS, n.Permissions.MANAGE_ROLES, n.Permissions.CREATE_GUILD_EXPRESSIONS, n.Permissions.MANAGE_GUILD_EXPRESSIONS, n.Permissions.VIEW_AUDIT_LOG, n.Permissions.VIEW_GUILD_ANALYTICS];
    return i.showCreatorMonetizationAnalyticsPermission && r.push(n.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS), r.push(n.Permissions.MANAGE_WEBHOOKS), r.push(n.Permissions.MANAGE_GUILD), t({
      title: s.ROLE_PERMISSIONS_SECTION_GENERAL_GUILD,
      permissions: E(r, e)
    })
  }(O, e, s), function(e, s) {
    let i = [n.Permissions.CREATE_INSTANT_INVITE, n.Permissions.CHANGE_NICKNAME, n.Permissions.MANAGE_NICKNAMES, n.Permissions.KICK_MEMBERS, n.Permissions.BAN_MEMBERS, n.Permissions.MODERATE_MEMBERS];
    return t({
      title: s.ROLE_PERMISSIONS_SECTION_MEMBERSHIP,
      permissions: E(i, e)
    })
  }(O, e), (i = O, S = e, o = s, R = [n.Permissions.SEND_MESSAGES, n.Permissions.SEND_MESSAGES_IN_THREADS, n.Permissions.CREATE_PUBLIC_THREADS, n.Permissions.CREATE_PRIVATE_THREADS, n.Permissions.EMBED_LINKS, n.Permissions.ATTACH_FILES, n.Permissions.ADD_REACTIONS, n.Permissions.USE_EXTERNAL_EMOJIS, n.Permissions.USE_EXTERNAL_STICKERS, n.Permissions.MENTION_EVERYONE, n.Permissions.MANAGE_MESSAGES, n.Permissions.MANAGE_THREADS, n.Permissions.READ_MESSAGE_HISTORY, n.Permissions.SEND_TTS_MESSAGES, n.Permissions.SEND_VOICE_MESSAGES, n.Permissions.USE_CLYDE_AI, n.Permissions.SEND_POLLS], !o.showClydeAIPermissions && (R = R.filter(e => e !== n.Permissions.USE_CLYDE_AI)), t({
    title: S.ROLE_PERMISSIONS_SECTION_TEXT,
    permissions: E(R, i)
  })), function(e, s, i) {
    let r = [n.Permissions.CONNECT, n.Permissions.SPEAK, n.Permissions.STREAM, n.Permissions.USE_SOUNDBOARD, n.Permissions.USE_EXTERNAL_SOUNDS, n.Permissions.USE_VAD, n.Permissions.PRIORITY_SPEAKER, n.Permissions.MUTE_MEMBERS, n.Permissions.DEAFEN_MEMBERS, n.Permissions.MOVE_MEMBERS, n.Permissions.SET_VOICE_CHANNEL_STATUS];
    return t({
      title: s.ROLE_PERMISSIONS_SECTION_VOICE,
      permissions: E(r, e)
    })
  }(O, e, 0), function(e, s) {
    let i = [n.Permissions.USE_APPLICATION_COMMANDS, n.Permissions.USE_EMBEDDED_ACTIVITIES, n.Permissions.USE_EXTERNAL_APPS];
    return t({
      title: s.ROLE_PERMISSIONS_SECTION_APPS,
      permissions: E(i, e)
    })
  }(O, e)];
  if (s.showStageChannelPermissions) {
    ;
    T.push((_ = O, l = e, a = s, t({
      title: l.ROLE_PERMISSIONS_SECTION_STAGE,
      permissions: E([n.Permissions.REQUEST_TO_SPEAK], _)
    }, a.showExperimental)))
  }
  return T.push((I = O, u = e, N = s, t({
    title: u.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS,
    permissions: E([n.Permissions.CREATE_EVENTS, n.Permissions.MANAGE_EVENTS], I)
  }, N.showExperimental))), T.push((A = O, t({
    title: e.ROLE_PERMISSIONS_SECTION_ADVANCED,
    permissions: E([n.Permissions.ADMINISTRATOR], A)
  }))), T
}

function o(e, s) {
  let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
    showManageWebhooks: !0
  };
  return {
    title: s,
    permissions: E((null == i ? void 0 : i.showManageWebhooks) ? [n.Permissions.VIEW_CHANNEL, n.Permissions.MANAGE_CHANNELS, n.Permissions.MANAGE_ROLES, n.Permissions.MANAGE_WEBHOOKS] : [n.Permissions.VIEW_CHANNEL, n.Permissions.MANAGE_CHANNELS, n.Permissions.MANAGE_ROLES], e)
  }
}

function _(e, s) {
  return {
    title: s,
    permissions: E([n.Permissions.CREATE_INSTANT_INVITE], e)
  }
}

function l(e, s, i) {
  let t = [n.Permissions.SEND_MESSAGES, n.Permissions.SEND_MESSAGES_IN_THREADS, n.Permissions.CREATE_PUBLIC_THREADS, n.Permissions.CREATE_PRIVATE_THREADS, n.Permissions.EMBED_LINKS, n.Permissions.ATTACH_FILES, n.Permissions.ADD_REACTIONS, n.Permissions.USE_EXTERNAL_EMOJIS, n.Permissions.USE_EXTERNAL_STICKERS, n.Permissions.MENTION_EVERYONE, n.Permissions.MANAGE_MESSAGES, n.Permissions.MANAGE_THREADS, n.Permissions.READ_MESSAGE_HISTORY, n.Permissions.SEND_TTS_MESSAGES, n.Permissions.SEND_VOICE_MESSAGES, n.Permissions.USE_CLYDE_AI, n.Permissions.SEND_POLLS];
  return (!i.showPrivateThreads || !i.showCreateThreads) && (t = t.filter(e => e !== n.Permissions.CREATE_PRIVATE_THREADS)), !i.showCreateThreads && (t = t.filter(e => e !== n.Permissions.CREATE_PUBLIC_THREADS)), !i.showClydeAIPermissions && (t = t.filter(e => e !== n.Permissions.USE_CLYDE_AI)), {
    title: s,
    description: i.sectionDescription,
    permissions: E(t, e)
  }
}

function a(e, s) {
  return {
    title: s,
    permissions: E([n.Permissions.CONNECT, n.Permissions.SPEAK, n.Permissions.STREAM, n.Permissions.USE_SOUNDBOARD, n.Permissions.USE_EXTERNAL_SOUNDS, n.Permissions.USE_VAD, n.Permissions.PRIORITY_SPEAKER, n.Permissions.MUTE_MEMBERS, n.Permissions.DEAFEN_MEMBERS, n.Permissions.MOVE_MEMBERS, n.Permissions.SET_VOICE_CHANNEL_STATUS], e)
  }
}

function I(e, s, i) {
  let t = [n.Permissions.SEND_MESSAGES, n.Permissions.EMBED_LINKS, n.Permissions.ATTACH_FILES, n.Permissions.ADD_REACTIONS, n.Permissions.USE_EXTERNAL_EMOJIS, n.Permissions.USE_EXTERNAL_STICKERS, n.Permissions.MENTION_EVERYONE, n.Permissions.MANAGE_MESSAGES, n.Permissions.READ_MESSAGE_HISTORY, n.Permissions.SEND_TTS_MESSAGES, n.Permissions.USE_APPLICATION_COMMANDS, n.Permissions.SEND_VOICE_MESSAGES, n.Permissions.SEND_POLLS];
  return {
    title: s,
    description: i.sectionDescription,
    permissions: E(t, e)
  }
}

function u(e, s) {
  return {
    title: s,
    permissions: E([n.Permissions.USE_APPLICATION_COMMANDS, n.Permissions.USE_EMBEDDED_ACTIVITIES, n.Permissions.USE_EXTERNAL_APPS], e)
  }
}

function N(e, s, i) {
  return {
    title: s,
    permissions: E(i ? [n.Permissions.CONNECT, n.Permissions.STREAM, n.Permissions.MUTE_MEMBERS, n.Permissions.MOVE_MEMBERS] : [n.Permissions.CONNECT, n.Permissions.MUTE_MEMBERS, n.Permissions.MOVE_MEMBERS], e)
  }
}

function A(e, s) {
  return {
    title: s,
    permissions: E([n.Permissions.REQUEST_TO_SPEAK, n.Permissions.MENTION_EVERYONE], e)
  }
}

function R(e, s) {
  return {
    title: s,
    permissions: E([n.Permissions.CREATE_EVENTS, n.Permissions.MANAGE_EVENTS], e)
  }
}

function O(e) {
  return null == e ? e : "string" == typeof e ? e.trim() : "function" == typeof e.format ? e.format() : e
}