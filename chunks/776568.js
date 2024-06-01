"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  },
  getMuteTimes: function() {
    return g
  }
}), n("47120");
var l = n("735250");
n("470079");
var a = n("913527"),
  i = n.n(a),
  u = n("442837"),
  s = n("481060"),
  r = n("211739"),
  d = n("92114"),
  o = n("777861"),
  c = n("9156"),
  f = n("621600"),
  E = n("933557"),
  S = n("981631"),
  N = n("969943"),
  _ = n("689938");
let g = () => [{
    value: N.MuteUntilSeconds.MINUTES_15,
    label: _.default.Messages.MUTE_DURATION_15_MINUTES
  }, {
    value: N.MuteUntilSeconds.HOURS_1,
    label: _.default.Messages.MUTE_DURATION_1_HOUR
  }, {
    value: N.MuteUntilSeconds.HOURS_3,
    label: _.default.Messages.MUTE_DURATION_3_HOURS
  }, {
    value: N.MuteUntilSeconds.HOURS_8,
    label: _.default.Messages.MUTE_DURATION_8_HOURS
  }, {
    value: N.MuteUntilSeconds.HOURS_24,
    label: _.default.Messages.MUTE_DURATION_24_HOURS
  }, {
    value: N.MuteUntilSeconds.ALWAYS,
    label: _.default.Messages.MUTE_DURATION_ALWAYS
  }],
  C = e => {
    let t = e > 0 ? i()().add(e, "second").toISOString() : null;
    return {
      muted: !0,
      mute_config: {
        selected_time_window: e,
        end_time: t
      }
    }
  };

function T(e, t) {
  let [n, a] = (0, u.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), i = (0, o.useMutedUntilText)(a), N = (0, E.default)(e, !0);

  function T(t) {
    t && e.type === S.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id), d.default.updateChannelOverrideSettings(e.guild_id, e.id, {
      muted: t
    }, f.NotificationLabel.muted(t))
  }
  let h = _.default.Messages.MUTE_CHANNEL_GENERIC,
    L = _.default.Messages.UNMUTE_CHANNEL_GENERIC;
  switch (e.type) {
    case S.ChannelTypes.GUILD_CATEGORY:
      h = _.default.Messages.MUTE_CATEGORY, L = _.default.Messages.UNMUTE_CATEGORY;
      break;
    case S.ChannelTypes.GROUP_DM:
      h = _.default.Messages.MUTE_CONVERSATION, L = _.default.Messages.UNMUTE_CONVERSATION;
      break;
    case S.ChannelTypes.DM:
      h = _.default.Messages.MUTE_CHANNEL.format({
        name: N
      }), L = _.default.Messages.UNMUTE_CHANNEL.format({
        name: N
      });
      break;
    default:
      h = _.default.Messages.MUTE_CHANNEL_GENERIC, L = _.default.Messages.UNMUTE_CHANNEL_GENERIC
  }
  return n ? (0, l.jsx)(s.MenuItem, {
    id: "unmute-channel",
    label: L,
    subtext: i,
    action: () => T(!1)
  }) : (0, l.jsx)(s.MenuItem, {
    id: "mute-channel",
    label: h,
    action: () => T(!0),
    children: g().map(n => {
      let {
        value: a,
        label: i
      } = n;
      return (0, l.jsx)(s.MenuItem, {
        id: "".concat(a),
        label: i,
        action: () => (function(n) {
          e.type === S.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id);
          let l = C(n);
          d.default.updateChannelOverrideSettings(e.guild_id, e.id, l, f.NotificationLabels.Muted, t)
        })(a)
      }, a)
    })
  })
}