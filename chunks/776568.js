e.d(t, {
    ZP: function () {
        return S;
    },
    k: function () {
        return m;
    }
}),
    e(47120);
var i = e(200651);
e(192379);
var r = e(913527),
    l = e.n(r),
    u = e(442837),
    a = e(481060),
    d = e(211739),
    o = e(87051),
    s = e(496729),
    c = e(777861),
    f = e(9156),
    Z = e(621600),
    h = e(933557),
    _ = e(981631),
    M = e(969943),
    g = e(388032);
let m = () => [
        {
            value: M.Oe.MINUTES_15,
            label: g.intl.string(g.t['8ot6go'])
        },
        {
            value: M.Oe.HOURS_1,
            label: g.intl.string(g.t.UMWBZm)
        },
        {
            value: M.Oe.HOURS_3,
            label: g.intl.string(g.t.QmYWtr)
        },
        {
            value: M.Oe.HOURS_8,
            label: g.intl.string(g.t.EpAXPD)
        },
        {
            value: M.Oe.HOURS_24,
            label: g.intl.string(g.t['755t4u'])
        },
        {
            value: M.Oe.ALWAYS,
            label: g.intl.string(g.t.r3LawM)
        }
    ],
    E = (n) => {
        let t = n > 0 ? l()().add(n, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: n,
                end_time: t
            }
        };
    };
function S(n, t) {
    let [e, r] = (0, u.Wu)([f.ZP], () => [f.ZP.isChannelMuted(n.guild_id, n.id), f.ZP.getChannelMuteConfig(n.guild_id, n.id)]),
        l = (0, c.U)(r),
        M = (0, h.ZP)(n, !0);
    function S(t) {
        t && n.type === _.d4z.GUILD_CATEGORY && (0, d.c4)(n.id), o.Z.updateChannelOverrideSettings(n.guild_id, n.id, { muted: t }, Z.UE.muted(t));
    }
    let O = g.intl.string(g.t.tbeRRE),
        b = g.intl.string(g.t.OYefmZ);
    switch (n.type) {
        case _.d4z.GUILD_CATEGORY:
            (O = g.intl.string(g.t.pNMCg4)), (b = g.intl.string(g.t.olaBeH));
            break;
        case _.d4z.GROUP_DM:
            (O = g.intl.string(g.t.LO3kaG)), (b = g.intl.string(g.t['s5/5fn']));
            break;
        case _.d4z.DM:
            (O = g.intl.format(g.t.byjuJi, { name: M })), (b = g.intl.format(g.t['eC+9rq'], { name: M }));
            break;
        default:
            (O = g.intl.string(g.t.tbeRRE)), (b = g.intl.string(g.t.OYefmZ));
    }
    return e
        ? (0, i.jsx)(a.MenuItem, {
              id: 'unmute-channel',
              label: b,
              subtext: l,
              action: () => S(!1)
          })
        : (0, i.jsx)(a.MenuItem, {
              id: 'mute-channel',
              label: O,
              action: () => {
                  S(!0),
                      (0, s.s)({
                          channelId: n.id,
                          location: 'channel_context_menu'
                      });
              },
              children: m().map((e) => {
                  let { value: r, label: l } = e;
                  return (0, i.jsx)(
                      a.MenuItem,
                      {
                          id: ''.concat(r),
                          label: l,
                          action: () =>
                              (function (e) {
                                  n.type === _.d4z.GUILD_CATEGORY && (0, d.c4)(n.id);
                                  let i = E(e);
                                  o.Z.updateChannelOverrideSettings(n.guild_id, n.id, i, Z.ZB.Muted, t);
                              })(r)
                      },
                      r
                  );
              })
          });
}
