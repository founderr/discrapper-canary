t.d(n, {
  ZP: function() {
    return c
  },
  k: function() {
    return o
  }
}), t(47120);
var E = t(735250);
t(470079);
var _ = t(913527),
  s = t.n(_),
  a = t(442837),
  u = t(481060),
  r = t(211739),
  i = t(92114),
  M = t(777861),
  l = t(9156),
  S = t(621600),
  N = t(933557),
  A = t(981631),
  O = t(969943),
  I = t(689938);
let o = () => [{
    value: O.Oe.MINUTES_15,
    label: I.Z.Messages.MUTE_DURATION_15_MINUTES
  }, {
    value: O.Oe.HOURS_1,
    label: I.Z.Messages.MUTE_DURATION_1_HOUR
  }, {
    value: O.Oe.HOURS_3,
    label: I.Z.Messages.MUTE_DURATION_3_HOURS
  }, {
    value: O.Oe.HOURS_8,
    label: I.Z.Messages.MUTE_DURATION_8_HOURS
  }, {
    value: O.Oe.HOURS_24,
    label: I.Z.Messages.MUTE_DURATION_24_HOURS
  }, {
    value: O.Oe.ALWAYS,
    label: I.Z.Messages.MUTE_DURATION_ALWAYS
  }],
  T = e => {
    let n = e > 0 ? s()().add(e, "second").toISOString() : null;
    return {
      muted: !0,
      mute_config: {
        selected_time_window: e,
        end_time: n
      }
    }
  };

function c(e, n) {
  let [t, _] = (0, a.Wu)([l.ZP], () => [l.ZP.isChannelMuted(e.guild_id, e.id), l.ZP.getChannelMuteConfig(e.guild_id, e.id)]), s = (0, M.U)(_), O = (0, N.ZP)(e, !0);

  function c(n) {
    n && e.type === A.d4z.GUILD_CATEGORY && (0, r.c4)(e.id), i.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
      muted: n
    }, S.UE.muted(n))
  }
  let d = I.Z.Messages.MUTE_CHANNEL_GENERIC,
    R = I.Z.Messages.UNMUTE_CHANNEL_GENERIC;
  switch (e.type) {
    case A.d4z.GUILD_CATEGORY:
      d = I.Z.Messages.MUTE_CATEGORY, R = I.Z.Messages.UNMUTE_CATEGORY;
      break;
    case A.d4z.GROUP_DM:
      d = I.Z.Messages.MUTE_CONVERSATION, R = I.Z.Messages.UNMUTE_CONVERSATION;
      break;
    case A.d4z.DM:
      d = I.Z.Messages.MUTE_CHANNEL.format({
        name: O
      }), R = I.Z.Messages.UNMUTE_CHANNEL.format({
        name: O
      });
      break;
    default:
      d = I.Z.Messages.MUTE_CHANNEL_GENERIC, R = I.Z.Messages.UNMUTE_CHANNEL_GENERIC
  }
  return t ? (0, E.jsx)(u.MenuItem, {
    id: "unmute-channel",
    label: R,
    subtext: s,
    action: () => c(!1)
  }) : (0, E.jsx)(u.MenuItem, {
    id: "mute-channel",
    label: d,
    action: () => c(!0),
    children: o().map(t => {
      let {
        value: _,
        label: s
      } = t;
      return (0, E.jsx)(u.MenuItem, {
        id: "".concat(_),
        label: s,
        action: () => (function(t) {
          e.type === A.d4z.GUILD_CATEGORY && (0, r.c4)(e.id);
          let E = T(t);
          i.Z.updateChannelOverrideSettings(e.guild_id, e.id, E, S.ZB.Muted, n)
        })(_)
      }, _)
    })
  })
}