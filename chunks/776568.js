E.d(n, {
  ZP: function() {
    return c
  },
  k: function() {
    return T
  }
}), E(47120);
var t = E(735250);
E(470079);
var _ = E(913527),
  s = E.n(_),
  a = E(442837),
  r = E(481060),
  u = E(211739),
  M = E(92114),
  i = E(777861),
  l = E(9156),
  S = E(621600),
  N = E(933557),
  A = E(981631),
  O = E(969943),
  I = E(689938);
let T = () => [{
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
  o = e => {
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
  let [E, _] = (0, a.Wu)([l.ZP], () => [l.ZP.isChannelMuted(e.guild_id, e.id), l.ZP.getChannelMuteConfig(e.guild_id, e.id)]), s = (0, i.U)(_), O = (0, N.ZP)(e, !0);

  function c(n) {
    n && e.type === A.d4z.GUILD_CATEGORY && (0, u.c4)(e.id), M.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
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
  return E ? (0, t.jsx)(r.MenuItem, {
    id: "unmute-channel",
    label: R,
    subtext: s,
    action: () => c(!1)
  }) : (0, t.jsx)(r.MenuItem, {
    id: "mute-channel",
    label: d,
    action: () => c(!0),
    children: T().map(E => {
      let {
        value: _,
        label: s
      } = E;
      return (0, t.jsx)(r.MenuItem, {
        id: "".concat(_),
        label: s,
        action: () => (function(E) {
          e.type === A.d4z.GUILD_CATEGORY && (0, u.c4)(e.id);
          let t = o(E);
          M.Z.updateChannelOverrideSettings(e.guild_id, e.id, t, S.ZB.Muted, n)
        })(_)
      }, _)
    })
  })
}