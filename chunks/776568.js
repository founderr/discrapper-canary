n.d(t, {
    ZP: function () {
        return I;
    },
    k: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var o = n(913527),
    a = n.n(o),
    r = n(442837),
    c = n(481060),
    l = n(211739),
    u = n(87051),
    s = n(496729),
    d = n(777861),
    _ = n(9156),
    f = n(621600),
    b = n(933557),
    g = n(981631),
    p = n(969943),
    m = n(388032);
let h = () => [
        {
            value: p.Oe.MINUTES_15,
            label: m.intl.string(m.t['8ot6go'])
        },
        {
            value: p.Oe.HOURS_1,
            label: m.intl.string(m.t.UMWBZm)
        },
        {
            value: p.Oe.HOURS_3,
            label: m.intl.string(m.t.QmYWtr)
        },
        {
            value: p.Oe.HOURS_8,
            label: m.intl.string(m.t.EpAXPD)
        },
        {
            value: p.Oe.HOURS_24,
            label: m.intl.string(m.t['755t4u'])
        },
        {
            value: p.Oe.ALWAYS,
            label: m.intl.string(m.t.r3LawM)
        }
    ],
    C = (e) => {
        let t = e > 0 ? a()().add(e, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t
            }
        };
    };
function I(e, t) {
    let [n, o] = (0, r.Wu)([_.ZP], () => [_.ZP.isChannelMuted(e.guild_id, e.id), _.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
        a = (0, d.U)(o),
        p = (0, b.ZP)(e, !0);
    function I(t) {
        t && e.type === g.d4z.GUILD_CATEGORY && (0, l.c4)(e.id), u.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, f.UE.muted(t));
    }
    let T = m.intl.string(m.t.tbeRRE),
        A = m.intl.string(m.t.OYefmZ);
    switch (e.type) {
        case g.d4z.GUILD_CATEGORY:
            (T = m.intl.string(m.t.pNMCg4)), (A = m.intl.string(m.t.olaBeH));
            break;
        case g.d4z.GROUP_DM:
            (T = m.intl.string(m.t.LO3kaG)), (A = m.intl.string(m.t['s5/5fn']));
            break;
        case g.d4z.DM:
            (T = m.intl.format(m.t.byjuJi, { name: p })), (A = m.intl.format(m.t['eC+9rq'], { name: p }));
            break;
        default:
            (T = m.intl.string(m.t.tbeRRE)), (A = m.intl.string(m.t.OYefmZ));
    }
    return n
        ? (0, i.jsx)(c.MenuItem, {
              id: 'unmute-channel',
              label: A,
              subtext: a,
              action: () => I(!1)
          })
        : (0, i.jsx)(c.MenuItem, {
              id: 'mute-channel',
              label: T,
              action: () => {
                  I(!0),
                      (0, s.s)({
                          channelId: e.id,
                          location: 'channel_context_menu'
                      });
              },
              children: h().map((n) => {
                  let { value: o, label: a } = n;
                  return (0, i.jsx)(
                      c.MenuItem,
                      {
                          id: ''.concat(o),
                          label: a,
                          action: () =>
                              (function (n) {
                                  e.type === g.d4z.GUILD_CATEGORY && (0, l.c4)(e.id);
                                  let i = C(n);
                                  u.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, f.ZB.Muted, t);
                              })(o)
                      },
                      o
                  );
              })
          });
}
