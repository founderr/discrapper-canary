"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  },
  getMuteTimes: function() {
    return L
  }
}), a("47120");
var s = a("735250");
a("470079");
var n = a("913527"),
  i = a.n(n),
  l = a("442837"),
  u = a("481060"),
  d = a("211739"),
  o = a("92114"),
  r = a("777861"),
  _ = a("9156"),
  f = a("621600"),
  c = a("933557"),
  E = a("981631"),
  N = a("969943"),
  M = a("689938");
let L = () => [{
    value: N.MuteUntilSeconds.MINUTES_15,
    label: M.default.Messages.MUTE_DURATION_15_MINUTES
  }, {
    value: N.MuteUntilSeconds.HOURS_1,
    label: M.default.Messages.MUTE_DURATION_1_HOUR
  }, {
    value: N.MuteUntilSeconds.HOURS_3,
    label: M.default.Messages.MUTE_DURATION_3_HOURS
  }, {
    value: N.MuteUntilSeconds.HOURS_8,
    label: M.default.Messages.MUTE_DURATION_8_HOURS
  }, {
    value: N.MuteUntilSeconds.HOURS_24,
    label: M.default.Messages.MUTE_DURATION_24_HOURS
  }, {
    value: N.MuteUntilSeconds.ALWAYS,
    label: M.default.Messages.MUTE_DURATION_ALWAYS
  }],
  g = e => {
    let t = e > 0 ? i()().add(e, "second").toISOString() : null;
    return {
      muted: !0,
      mute_config: {
        selected_time_window: e,
        end_time: t
      }
    }
  };

function S(e, t) {
  let [a, n] = (0, l.useStateFromStoresArray)([_.default], () => [_.default.isChannelMuted(e.guild_id, e.id), _.default.getChannelMuteConfig(e.guild_id, e.id)]), i = (0, r.useMutedUntilText)(n), N = (0, c.default)(e, !0);

  function S(t) {
    t && e.type === E.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id), o.default.updateChannelOverrideSettings(e.guild_id, e.id, {
      muted: t
    }, f.NotificationLabel.muted(t))
  }
  let O = M.default.Messages.MUTE_CHANNEL_GENERIC,
    A = M.default.Messages.UNMUTE_CHANNEL_GENERIC;
  switch (e.type) {
    case E.ChannelTypes.GUILD_CATEGORY:
      O = M.default.Messages.MUTE_CATEGORY, A = M.default.Messages.UNMUTE_CATEGORY;
      break;
    case E.ChannelTypes.GROUP_DM:
      O = M.default.Messages.MUTE_CONVERSATION, A = M.default.Messages.UNMUTE_CONVERSATION;
      break;
    case E.ChannelTypes.DM:
      O = M.default.Messages.MUTE_CHANNEL.format({
        name: N
      }), A = M.default.Messages.UNMUTE_CHANNEL.format({
        name: N
      });
      break;
    default:
      O = M.default.Messages.MUTE_CHANNEL_GENERIC, A = M.default.Messages.UNMUTE_CHANNEL_GENERIC
  }
  return a ? (0, s.jsx)(u.MenuItem, {
    id: "unmute-channel",
    label: A,
    subtext: i,
    action: () => S(!1)
  }) : (0, s.jsx)(u.MenuItem, {
    id: "mute-channel",
    label: O,
    action: () => S(!0),
    children: L().map(a => {
      let {
        value: n,
        label: i
      } = a;
      return (0, s.jsx)(u.MenuItem, {
        id: "".concat(n),
        label: i,
        action: () => (function(a) {
          e.type === E.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id);
          let s = g(a);
          o.default.updateChannelOverrideSettings(e.guild_id, e.id, s, f.NotificationLabels.Muted, t)
        })(n)
      }, n)
    })
  })
}