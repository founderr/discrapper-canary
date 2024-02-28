"use strict";
n.r(t), n.d(t, {
  WELCOME_MESSAGE_MIN_LENGTH: function() {
    return o
  },
  WELCOME_MESSAGE_MAX_LENGTH: function() {
    return s
  },
  NEW_MEMBER_ACTION_TITLE_MIN_LENGTH: function() {
    return c
  },
  NEW_MEMBER_ACTION_TITLE_MAX_LENGTH: function() {
    return E
  },
  NEW_MEMBER_ACTION_MAX: function() {
    return _
  },
  RESOURCE_CHANNEL_TITLE_MIN_LENGTH: function() {
    return f
  },
  RESOURCE_CHANNEL_TITLE_MAX_LENGTH: function() {
    return T
  },
  RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH: function() {
    return I
  },
  RESOURCE_CHANNEL_MAX: function() {
    return S
  },
  NewMemberActionTypes: function() {
    return l
  },
  newMemberActionFromServer: function() {
    return N
  },
  resourceChannelFromServer: function() {
    return p
  },
  settingsFromServer: function() {
    return m
  },
  settingsToServer: function() {
    return A
  },
  actionsFromServer: function() {
    return M
  },
  isWelcomeMessageEmpty: function() {
    return h
  },
  isSettingsEmpty: function() {
    return C
  },
  isSettingsValid: function() {
    return O
  },
  isChannelValidForResourceChannel: function() {
    return v
  },
  isChannelValidForNewMemberAction: function() {
    return g
  }
});
var i, l, u = n("42203"),
  a = n("449008"),
  r = n("991170"),
  d = n("49111");
let o = 7,
  s = 300,
  c = 7,
  E = 60,
  _ = 5,
  f = 1,
  T = 30,
  I = 200,
  S = 7;

function N(e) {
  var t;
  return {
    channelId: e.channel_id,
    actionType: e.action_type,
    title: e.title,
    description: e.description,
    emoji: null == e.emoji ? null : {
      id: e.emoji.id,
      name: e.emoji.name,
      animated: e.emoji.animated
    },
    icon: null !== (t = e.icon) && void 0 !== t ? t : null
  }
}

function p(e) {
  var t, n;
  return {
    channelId: e.channel_id,
    title: e.title,
    description: null !== (t = e.description) && void 0 !== t ? t : "",
    emoji: null == e.emoji ? null : {
      id: e.emoji.id,
      name: e.emoji.name,
      animated: e.emoji.animated
    },
    icon: null !== (n = e.icon) && void 0 !== n ? n : null
  }
}

function m(e) {
  if (null == e) return null;
  let {
    welcome_message: t,
    new_member_actions: n,
    resource_channels: i,
    enabled: l
  } = e, r = {
    authorIds: t.author_ids,
    message: t.message
  }, d = n.filter(e => (0, a.isNotNullish)(u.default.getChannel(e.channel_id))).map(N), o = i.filter(e => (0, a.isNotNullish)(u.default.getChannel(e.channel_id))).map(p);
  return {
    welcomeMessage: r,
    newMemberActions: d,
    resourceChannels: o,
    enabled: l
  }
}

function A(e, t) {
  var n, i;
  if (null == t) return null;
  let {
    welcomeMessage: l,
    newMemberActions: r,
    resourceChannels: d,
    enabled: o
  } = t, s = {
    author_ids: null !== (n = null == l ? void 0 : l.authorIds) && void 0 !== n ? n : [],
    message: null !== (i = null == l ? void 0 : l.message) && void 0 !== i ? i : ""
  }, c = (null != r ? r : []).filter(e => (0, a.isNotNullish)(u.default.getChannel(e.channelId))).map(e => {
    var t, n, i, l, u, a, r;
    return {
      channel_id: e.channelId,
      action_type: e.actionType,
      title: e.title,
      description: e.description,
      emoji: {
        id: null !== (l = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== l ? l : void 0,
        name: null !== (u = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== u ? u : void 0,
        animated: null !== (a = null === (i = e.emoji) || void 0 === i ? void 0 : i.animated) && void 0 !== a ? a : void 0
      },
      icon: null !== (r = e.icon) && void 0 !== r ? r : void 0
    }
  }), E = (null != d ? d : []).filter(e => (0, a.isNotNullish)(u.default.getChannel(e.channelId))).map(e => {
    var t, n, i, l, u, a, r;
    return {
      channel_id: e.channelId,
      title: e.title,
      description: e.description,
      emoji: {
        id: null !== (l = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== l ? l : void 0,
        name: null !== (u = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== u ? u : void 0,
        animated: null !== (a = null === (i = e.emoji) || void 0 === i ? void 0 : i.animated) && void 0 !== a ? a : void 0
      },
      icon: null !== (r = e.icon) && void 0 !== r ? r : void 0
    }
  });
  return {
    guild_id: e,
    welcome_message: s,
    new_member_actions: c,
    resource_channels: E,
    enabled: o
  }
}(i = l || (l = {}))[i.VIEW = 0] = "VIEW", i[i.CHAT = 1] = "CHAT";
let M = e => {
  if (null == e) return null;
  let t = {};
  for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
  return t
};

function h(e) {
  return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0
}

function C(e) {
  return null == e || !!h(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0
}

function O(e) {
  var t, n;
  return null != e && (!!C(e) || (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.message) != null && !(e.welcomeMessage.message.length < o) && (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < 3) && !0)
}

function v(e) {
  return e.type === d.ChannelTypes.GUILD_TEXT && !r.default.canEveryoneRole(d.Permissions.SEND_MESSAGES, e) && r.default.canEveryoneRole(d.Permissions.VIEW_CHANNEL, e)
}

function g(e) {
  switch (e.type) {
    case d.ChannelTypes.GUILD_TEXT:
    case d.ChannelTypes.GUILD_ANNOUNCEMENT:
    case d.ChannelTypes.GUILD_FORUM:
    case d.ChannelTypes.GUILD_MEDIA:
      return r.default.canEveryoneRole(d.Permissions.VIEW_CHANNEL, e);
    default:
      return !1
  }
}