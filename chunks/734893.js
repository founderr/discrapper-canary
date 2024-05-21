"use strict";
n.r(t), n.d(t, {
  ChannelEditBlockTypes: function() {
    return a
  },
  NEW_MEMBER_ACTION_MAX: function() {
    return T
  },
  NEW_MEMBER_ACTION_TITLE_MAX_LENGTH: function() {
    return I
  },
  NEW_MEMBER_ACTION_TITLE_MIN_LENGTH: function() {
    return E
  },
  NewMemberActionTypes: function() {
    return s
  },
  RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH: function() {
    return h
  },
  RESOURCE_CHANNEL_MAX: function() {
    return A
  },
  RESOURCE_CHANNEL_TITLE_MAX_LENGTH: function() {
    return S
  },
  RESOURCE_CHANNEL_TITLE_MIN_LENGTH: function() {
    return f
  },
  WELCOME_MESSAGE_MAX_LENGTH: function() {
    return c
  },
  WELCOME_MESSAGE_MIN_LENGTH: function() {
    return _
  },
  actionsFromServer: function() {
    return C
  },
  isChannelValidForNewMemberAction: function() {
    return D
  },
  isChannelValidForResourceChannel: function() {
    return v
  },
  isSettingsEmpty: function() {
    return g
  },
  isSettingsValid: function() {
    return L
  },
  isWelcomeMessageEmpty: function() {
    return R
  },
  newMemberActionFromServer: function() {
    return m
  },
  resourceChannelFromServer: function() {
    return N
  },
  settingsFromServer: function() {
    return p
  },
  settingsToServer: function() {
    return O
  }
});
var i, r, s, a, o = n("592125"),
  l = n("823379"),
  u = n("700785"),
  d = n("981631");
let _ = 7,
  c = 300,
  E = 7,
  I = 60,
  T = 5,
  f = 1,
  S = 30,
  h = 200,
  A = 7;

function m(e) {
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

function N(e) {
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

function p(e) {
  if (null == e) return null;
  let {
    welcome_message: t,
    new_member_actions: n,
    resource_channels: i,
    enabled: r
  } = e, s = {
    authorIds: t.author_ids,
    message: t.message
  }, a = n.filter(e => (0, l.isNotNullish)(o.default.getChannel(e.channel_id))).map(m);
  return {
    welcomeMessage: s,
    newMemberActions: a,
    resourceChannels: i.filter(e => (0, l.isNotNullish)(o.default.getChannel(e.channel_id))).map(N),
    enabled: r
  }
}

function O(e, t) {
  var n, i;
  if (null == t) return null;
  let {
    welcomeMessage: r,
    newMemberActions: s,
    resourceChannels: a,
    enabled: u
  } = t, d = {
    author_ids: null !== (n = null == r ? void 0 : r.authorIds) && void 0 !== n ? n : [],
    message: null !== (i = null == r ? void 0 : r.message) && void 0 !== i ? i : ""
  }, _ = (null != s ? s : []).filter(e => (0, l.isNotNullish)(o.default.getChannel(e.channelId))).map(e => {
    var t, n, i, r, s, a, o;
    return {
      channel_id: e.channelId,
      action_type: e.actionType,
      title: e.title,
      description: e.description,
      emoji: {
        id: null !== (r = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : void 0,
        name: null !== (s = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== s ? s : void 0,
        animated: null !== (a = null === (i = e.emoji) || void 0 === i ? void 0 : i.animated) && void 0 !== a ? a : void 0
      },
      icon: null !== (o = e.icon) && void 0 !== o ? o : void 0
    }
  });
  return {
    guild_id: e,
    welcome_message: d,
    new_member_actions: _,
    resource_channels: (null != a ? a : []).filter(e => (0, l.isNotNullish)(o.default.getChannel(e.channelId))).map(e => {
      var t, n, i, r, s, a, o;
      return {
        channel_id: e.channelId,
        title: e.title,
        description: e.description,
        emoji: {
          id: null !== (r = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : void 0,
          name: null !== (s = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== s ? s : void 0,
          animated: null !== (a = null === (i = e.emoji) || void 0 === i ? void 0 : i.animated) && void 0 !== a ? a : void 0
        },
        icon: null !== (o = e.icon) && void 0 !== o ? o : void 0
      }
    }),
    enabled: u
  }
}(i = s || (s = {}))[i.VIEW = 0] = "VIEW", i[i.CHAT = 1] = "CHAT";
let C = e => {
  if (null == e) return null;
  let t = {};
  for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
  return t
};

function R(e) {
  return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0
}

function g(e) {
  return null == e || !!R(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0
}

function L(e) {
  var t, n;
  return null != e && (!!g(e) || (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.message) != null && !(e.welcomeMessage.message.length < _) && (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < 3) && !0)
}

function v(e) {
  return e.type === d.ChannelTypes.GUILD_TEXT && !u.canEveryoneRole(d.Permissions.SEND_MESSAGES, e) && u.canEveryoneRole(d.Permissions.VIEW_CHANNEL, e)
}

function D(e) {
  switch (e.type) {
    case d.ChannelTypes.GUILD_TEXT:
    case d.ChannelTypes.GUILD_ANNOUNCEMENT:
    case d.ChannelTypes.GUILD_FORUM:
    case d.ChannelTypes.GUILD_MEDIA:
      return u.canEveryoneRole(d.Permissions.VIEW_CHANNEL, e);
    default:
      return !1
  }
}(r = a || (a = {}))[r.DEFAULT = 0] = "DEFAULT", r[r.TODO = 1] = "TODO", r[r.RESOURCE = 2] = "RESOURCE"