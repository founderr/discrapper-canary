t.d(n, {
    ZP: function () {
        return U;
    },
    k: function () {
        return O;
    }
}),
    t(47120);
var i = t(735250);
t(470079);
var a = t(913527),
    s = t.n(a),
    u = t(442837),
    r = t(481060),
    l = t(211739),
    d = t(87051),
    o = t(401412),
    c = t(777861),
    M = t(9156),
    _ = t(621600),
    E = t(933557),
    Z = t(981631),
    f = t(969943),
    N = t(689938);
let O = () => [
        {
            value: f.Oe.MINUTES_15,
            label: N.Z.Messages.MUTE_DURATION_15_MINUTES
        },
        {
            value: f.Oe.HOURS_1,
            label: N.Z.Messages.MUTE_DURATION_1_HOUR
        },
        {
            value: f.Oe.HOURS_3,
            label: N.Z.Messages.MUTE_DURATION_3_HOURS
        },
        {
            value: f.Oe.HOURS_8,
            label: N.Z.Messages.MUTE_DURATION_8_HOURS
        },
        {
            value: f.Oe.HOURS_24,
            label: N.Z.Messages.MUTE_DURATION_24_HOURS
        },
        {
            value: f.Oe.ALWAYS,
            label: N.Z.Messages.MUTE_DURATION_ALWAYS
        }
    ],
    T = (e) => {
        let n = e > 0 ? s()().add(e, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: n
            }
        };
    };
function U(e, n) {
    let [t, a] = (0, u.Wu)([M.ZP], () => [M.ZP.isChannelMuted(e.guild_id, e.id), M.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
        s = (0, c.U)(a),
        f = (0, E.ZP)(e, !0);
    function U(n) {
        n && e.type === Z.d4z.GUILD_CATEGORY && (0, l.c4)(e.id), d.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: n }, _.UE.muted(n));
    }
    let A = N.Z.Messages.MUTE_CHANNEL_GENERIC,
        h = N.Z.Messages.UNMUTE_CHANNEL_GENERIC;
    switch (e.type) {
        case Z.d4z.GUILD_CATEGORY:
            (A = N.Z.Messages.MUTE_CATEGORY), (h = N.Z.Messages.UNMUTE_CATEGORY);
            break;
        case Z.d4z.GROUP_DM:
            (A = N.Z.Messages.MUTE_CONVERSATION), (h = N.Z.Messages.UNMUTE_CONVERSATION);
            break;
        case Z.d4z.DM:
            (A = N.Z.Messages.MUTE_CHANNEL.format({ name: f })), (h = N.Z.Messages.UNMUTE_CHANNEL.format({ name: f }));
            break;
        default:
            (A = N.Z.Messages.MUTE_CHANNEL_GENERIC), (h = N.Z.Messages.UNMUTE_CHANNEL_GENERIC);
    }
    return t
        ? (0, i.jsx)(r.MenuItem, {
              id: 'unmute-channel',
              label: h,
              subtext: s,
              action: () => U(!1)
          })
        : (0, i.jsx)(r.MenuItem, {
              id: 'mute-channel',
              label: A,
              action: () => {
                  U(!0),
                      (0, o.s)({
                          channelId: e.id,
                          location: 'channel_context_menu'
                      });
              },
              children: O().map((t) => {
                  let { value: a, label: s } = t;
                  return (0, i.jsx)(
                      r.MenuItem,
                      {
                          id: ''.concat(a),
                          label: s,
                          action: () =>
                              (function (t) {
                                  e.type === Z.d4z.GUILD_CATEGORY && (0, l.c4)(e.id);
                                  let i = T(t);
                                  d.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, _.ZB.Muted, n);
                              })(a)
                      },
                      a
                  );
              })
          });
}
