n.d(t, {
    ZP: function () {
        return S;
    },
    k: function () {
        return T;
    }
});
var r = n(47120);
var i = n(735250);
n(470079);
var a = n(913527),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    u = n(211739),
    c = n(87051),
    d = n(401412),
    _ = n(777861),
    E = n(9156),
    f = n(621600),
    h = n(933557),
    p = n(981631),
    m = n(969943),
    I = n(689938);
let T = () => [
        {
            value: m.Oe.MINUTES_15,
            label: I.Z.Messages.MUTE_DURATION_15_MINUTES
        },
        {
            value: m.Oe.HOURS_1,
            label: I.Z.Messages.MUTE_DURATION_1_HOUR
        },
        {
            value: m.Oe.HOURS_3,
            label: I.Z.Messages.MUTE_DURATION_3_HOURS
        },
        {
            value: m.Oe.HOURS_8,
            label: I.Z.Messages.MUTE_DURATION_8_HOURS
        },
        {
            value: m.Oe.HOURS_24,
            label: I.Z.Messages.MUTE_DURATION_24_HOURS
        },
        {
            value: m.Oe.ALWAYS,
            label: I.Z.Messages.MUTE_DURATION_ALWAYS
        }
    ],
    g = (e) => {
        let t = e > 0 ? o()().add(e, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t
            }
        };
    };
function S(e, t) {
    let [n, r] = (0, s.Wu)([E.ZP], () => [E.ZP.isChannelMuted(e.guild_id, e.id), E.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
        a = (0, _.U)(r),
        o = (0, h.ZP)(e, !0);
    function m(n) {
        e.type === p.d4z.GUILD_CATEGORY && (0, u.c4)(e.id);
        let r = g(n);
        c.Z.updateChannelOverrideSettings(e.guild_id, e.id, r, f.ZB.Muted, t);
    }
    function S(t) {
        t && e.type === p.d4z.GUILD_CATEGORY && (0, u.c4)(e.id), c.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, f.UE.muted(t));
    }
    let A = I.Z.Messages.MUTE_CHANNEL_GENERIC,
        v = I.Z.Messages.UNMUTE_CHANNEL_GENERIC;
    switch (e.type) {
        case p.d4z.GUILD_CATEGORY:
            (A = I.Z.Messages.MUTE_CATEGORY), (v = I.Z.Messages.UNMUTE_CATEGORY);
            break;
        case p.d4z.GROUP_DM:
            (A = I.Z.Messages.MUTE_CONVERSATION), (v = I.Z.Messages.UNMUTE_CONVERSATION);
            break;
        case p.d4z.DM:
            (A = I.Z.Messages.MUTE_CHANNEL.format({ name: o })), (v = I.Z.Messages.UNMUTE_CHANNEL.format({ name: o }));
            break;
        default:
            (A = I.Z.Messages.MUTE_CHANNEL_GENERIC), (v = I.Z.Messages.UNMUTE_CHANNEL_GENERIC);
    }
    return n
        ? (0, i.jsx)(l.MenuItem, {
              id: 'unmute-channel',
              label: v,
              subtext: a,
              action: () => S(!1)
          })
        : (0, i.jsx)(l.MenuItem, {
              id: 'mute-channel',
              label: A,
              action: () => {
                  S(!0),
                      (0, d.s)({
                          channelId: e.id,
                          location: 'channel_context_menu'
                      });
              },
              children: T().map((e) => {
                  let { value: t, label: n } = e;
                  return (0, i.jsx)(
                      l.MenuItem,
                      {
                          id: ''.concat(t),
                          label: n,
                          action: () => m(t)
                      },
                      t
                  );
              })
          });
}
