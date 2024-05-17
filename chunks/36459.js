"use strict";
n.r(t), n.d(t, {
  clearMentionRaidDetected: function() {
    return L
  },
  createAutomodRule: function() {
    return M
  },
  deleteAutomodRule: function() {
    return D
  },
  executeAlertAction: function() {
    return S
  },
  fetchAutomodRules: function() {
    return m
  },
  removeMentionRaidRestrictionWithFeedback: function() {
    return f
  },
  updateAutomodRule: function() {
    return R
  },
  validateAutomodRule: function() {
    return c
  }
}), n("47120");
var o = n("544891"),
  _ = n("570140"),
  u = n("367907"),
  a = n("430824"),
  E = n("496675"),
  r = n("823379"),
  i = n("709054"),
  A = n("177862"),
  s = n("787824"),
  d = n("226192"),
  T = n("981631");

function l(e) {
  return {
    type: e.type,
    metadata: (0, s._transformMetadataToSnakeCase)(e.metadata)
  }
}

function N(e) {
  var t, n;
  let o = (0, s._transformMetadataToSnakeCase)(e.triggerMetadata);
  return null != o && delete o.keywordLists, {
    id: e.id,
    name: e.name,
    guild_id: e.guildId,
    event_type: e.eventType,
    trigger_type: e.triggerType,
    trigger_metadata: o,
    actions: e.actions.filter(r.isNotNullish).map(l),
    enabled: e.enabled,
    creator_id: e.creatorId,
    position: e.position,
    exempt_channels: Array.from(null !== (t = e.exemptChannels) && void 0 !== t ? t : []),
    exempt_roles: Array.from(null !== (n = e.exemptRoles) && void 0 !== n ? n : [])
  }
}

function O(e) {
  return {
    type: e.type,
    metadata: (0, s._transformMetadataToCamelCase)(e.metadata)
  }
}

function I(e) {
  var t, n, o;
  let _ = {
    id: null !== (t = e.id) && void 0 !== t ? t : i.default.fromTimestamp(Date.now()),
    name: e.name,
    guildId: e.guild_id,
    eventType: e.event_type,
    triggerType: e.trigger_type,
    triggerMetadata: (0, s._transformMetadataToCamelCase)(e.trigger_metadata),
    actions: e.actions.filter(r.isNotNullish).map(O),
    enabled: e.enabled,
    creatorId: e.creator_id,
    position: e.position,
    exemptChannels: new Set(null !== (n = e.exempt_channels) && void 0 !== n ? n : []),
    exemptRoles: new Set(null !== (o = e.exempt_roles) && void 0 !== o ? o : [])
  };
  return null != _.triggerMetadata && delete _.triggerMetadata.keywordLists, _
}
async function c(e) {
  let t = N(e),
    n = await o.HTTP.post({
      url: T.Endpoints.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
      body: t
    });
  return (0, s._transformMetadataToCamelCase)(n.body)
}
async function M(e) {
  let t = N(e);
  return delete t.id, I((await o.HTTP.post({
    url: T.Endpoints.GUILD_AUTOMOD_RULES(e.guildId),
    body: t
  })).body)
}
async function R(e) {
  let t = N(e);
  return I((await o.HTTP.patch({
    url: T.Endpoints.GUILD_AUTOMOD_RULE(e.guildId, e.id),
    body: t
  })).body)
}
async function D(e, t) {
  return await o.HTTP.del({
    url: T.Endpoints.GUILD_AUTOMOD_RULE(t, e)
  }), !0
}
async function m(e) {
  let t = await o.HTTP.get({
    url: T.Endpoints.GUILD_AUTOMOD_RULES(e)
  });
  return Array.isArray(t.body) ? t.body.map(I) : []
}
async function S(e, t, n) {
  E.default.can(T.Permissions.MANAGE_MESSAGES, t) && await o.HTTP.post({
    url: T.Endpoints.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
    body: {
      message_id: e,
      channel_id: t.id,
      alert_action_type: n
    }
  })
}

function f(e, t, n) {
  let _ = a.default.getGuild(e);
  if (null != _ && !!E.default.can(T.Permissions.MANAGE_GUILD, _))(0, d.openConfirmRemoveMentionRaid)(() => {
    (0, u.trackWithMetadata)(T.AnalyticEvents.GUILD_AUTOMOD_FEEDBACK, {
      feedback_type: A.Feedback.MENTION_RAID_REMOVE_RESTRICTION,
      decision_id: t
    }), o.HTTP.post({
      url: T.Endpoints.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e)
    }), n()
  })
}

function L(e) {
  _.default.dispatch({
    type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
    guildId: e
  })
}