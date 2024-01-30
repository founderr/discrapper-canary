"use strict";
n.r(t), n.d(t, {
  isActivityInTextSupportedForChannelType: function() {
    return u
  },
  isActivitiesInTextEnabled: function() {
    return c
  },
  useIsActivitiesInTextEnabled: function() {
    return f
  },
  useActivitiesInTextButtonVisibility: function() {
    return _
  },
  useIsActivitiesInTextActionBarEnabled: function() {
    return h
  }
});
var i = n("298386"),
  s = n("446674"),
  r = n("862205"),
  a = n("42203");
let o = (0, r.createExperiment)({
    kind: "user",
    id: "2023-08_activities_in_text",
    label: "Activities in Text User",
    defaultConfig: {
      enabled: !1,
      actionBarEnabled: !1
    },
    treatments: [{
      id: 1,
      label: "enable Activities in text channels",
      config: {
        enabled: !0,
        actionBarEnabled: !1,
        showInOmniButtonMenu: !0,
        showChatInputButton: !1
      }
    }, {
      id: 2,
      label: "enable Activities in text channels with action bar",
      config: {
        enabled: !0,
        actionBarEnabled: !0,
        showInOmniButtonMenu: !0,
        showChatInputButton: !1
      }
    }, {
      id: 3,
      label: "enable Activities in text with the rocket button in chat input",
      config: {
        enabled: !0,
        actionBarEnabled: !1,
        showInOmniButtonMenu: !1,
        showChatInputButton: !0
      }
    }]
  }),
  l = (0, r.createExperiment)({
    kind: "guild",
    id: "2023-11_activities_in_text_guild",
    label: "Activities in Text Guild",
    defaultConfig: {
      enabled: !1,
      actionBarEnabled: !1
    },
    treatments: [{
      id: 1,
      label: "enable Activities in text channels",
      config: {
        enabled: !0,
        actionBarEnabled: !1,
        showInOmniButtonMenu: !0,
        showChatInputButton: !1
      }
    }, {
      id: 2,
      label: "enable Activities in text channels with action bar",
      config: {
        enabled: !0,
        actionBarEnabled: !0,
        showInOmniButtonMenu: !0,
        showChatInputButton: !1
      }
    }]
  });

function u(e) {
  return [i.ChannelTypes.GUILD_TEXT, i.ChannelTypes.GROUP_DM, i.ChannelTypes.DM].includes(e)
}

function d(e) {
  return null != e && u(e.type)
}

function c(e, t) {
  if (null == e) return !1;
  let n = u(e.type);
  return (null == e ? void 0 : e.guild_id) != null ? l.getCurrentConfig({
    guildId: e.guild_id,
    location: t
  }, {
    autoTrackExposure: !1
  }).enabled && n : o.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: !1
  }).enabled && n
}

function f(e, t) {
  let n = (0, s.useStateFromStores)([a.default], () => a.default.getChannel(e)),
    i = d(n),
    r = (null == n ? void 0 : n.guild_id) != null ? l : o,
    u = r.useExperiment({
      guildId: null == n ? void 0 : n.guild_id,
      location: t
    }, {
      autoTrackExposure: !1
    });
  return u.enabled && i
}

function _(e, t) {
  let n = (0, s.useStateFromStores)([a.default], () => a.default.getChannel(e)),
    i = d(n),
    r = o.useExperiment({
      location: t
    }, {
      autoTrackExposure: !1
    });
  return r.enabled && i ? {
    showInOmniButtonMenu: r.showInOmniButtonMenu,
    showChatInputButton: r.showChatInputButton
  } : null
}

function h(e, t) {
  let n = (0, s.useStateFromStores)([a.default], () => a.default.getChannel(e)),
    i = (null == n ? void 0 : n.guild_id) != null ? l : o,
    r = i.useExperiment({
      guildId: null == n ? void 0 : n.guild_id,
      location: t
    }, {
      autoTrackExposure: !1
    });
  return r.actionBarEnabled
}