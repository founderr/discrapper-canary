"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  },
  getMuteTimes: function() {
    return _
  }
}), n("47120");
var a = n("735250");
n("470079");
var i = n("913527"),
  r = n.n(i),
  s = n("442837"),
  o = n("481060"),
  u = n("211739"),
  l = n("92114"),
  d = n("777861"),
  c = n("9156"),
  E = n("621600"),
  T = n("933557"),
  f = n("981631"),
  I = n("969943"),
  p = n("689938");
let _ = () => [{
    value: I.MuteUntilSeconds.MINUTES_15,
    label: p.default.Messages.MUTE_DURATION_15_MINUTES
  }, {
    value: I.MuteUntilSeconds.HOURS_1,
    label: p.default.Messages.MUTE_DURATION_1_HOUR
  }, {
    value: I.MuteUntilSeconds.HOURS_3,
    label: p.default.Messages.MUTE_DURATION_3_HOURS
  }, {
    value: I.MuteUntilSeconds.HOURS_8,
    label: p.default.Messages.MUTE_DURATION_8_HOURS
  }, {
    value: I.MuteUntilSeconds.HOURS_24,
    label: p.default.Messages.MUTE_DURATION_24_HOURS
  }, {
    value: I.MuteUntilSeconds.ALWAYS,
    label: p.default.Messages.MUTE_DURATION_ALWAYS
  }],
  N = e => {
    let t = e > 0 ? r()().add(e, "second").toISOString() : null;
    return {
      muted: !0,
      mute_config: {
        selected_time_window: e,
        end_time: t
      }
    }
  };

function S(e, t) {
  let [n, i] = (0, s.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), r = (0, d.useMutedUntilText)(i), I = (0, T.default)(e, !0);

  function S(t) {
    t && e.type === f.ChannelTypes.GUILD_CATEGORY && (0, u.categoryCollapse)(e.id), l.default.updateChannelOverrideSettings(e.guild_id, e.id, {
      muted: t
    }, E.NotificationLabel.muted(t))
  }
  let C = p.default.Messages.MUTE_CHANNEL_GENERIC,
    A = p.default.Messages.UNMUTE_CHANNEL_GENERIC;
  switch (e.type) {
    case f.ChannelTypes.GUILD_CATEGORY:
      C = p.default.Messages.MUTE_CATEGORY, A = p.default.Messages.UNMUTE_CATEGORY;
      break;
    case f.ChannelTypes.GROUP_DM:
      C = p.default.Messages.MUTE_CONVERSATION, A = p.default.Messages.UNMUTE_CONVERSATION;
      break;
    case f.ChannelTypes.DM:
      C = p.default.Messages.MUTE_CHANNEL.format({
        name: I
      }), A = p.default.Messages.UNMUTE_CHANNEL.format({
        name: I
      });
      break;
    default:
      C = p.default.Messages.MUTE_CHANNEL_GENERIC, A = p.default.Messages.UNMUTE_CHANNEL_GENERIC
  }
  return n ? (0, a.jsx)(o.MenuItem, {
    id: "unmute-channel",
    label: A,
    subtext: r,
    action: () => S(!1)
  }) : (0, a.jsx)(o.MenuItem, {
    id: "mute-channel",
    label: C,
    action: () => S(!0),
    children: _().map(n => {
      let {
        value: i,
        label: r
      } = n;
      return (0, a.jsx)(o.MenuItem, {
        id: "".concat(i),
        label: r,
        action: () => (function(n) {
          e.type === f.ChannelTypes.GUILD_CATEGORY && (0, u.categoryCollapse)(e.id);
          let a = N(n);
          l.default.updateChannelOverrideSettings(e.guild_id, e.id, a, E.NotificationLabels.Muted, t)
        })(i)
      }, i)
    })
  })
}