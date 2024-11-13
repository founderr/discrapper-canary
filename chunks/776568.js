e.d(t, {
    ZP: function () {
        return A;
    },
    k: function () {
        return p;
    }
}),
    e(47120);
var i = e(200651);
e(192379);
var a = e(913527),
    r = e.n(a),
    l = e(442837),
    u = e(481060),
    o = e(211739),
    c = e(87051),
    d = e(496729),
    s = e(777861),
    f = e(9156),
    E = e(621600),
    g = e(933557),
    _ = e(981631),
    v = e(969943),
    C = e(388032);
let p = () => [
        {
            value: v.Oe.MINUTES_15,
            label: C.intl.string(C.t['8ot6go'])
        },
        {
            value: v.Oe.HOURS_1,
            label: C.intl.string(C.t.UMWBZm)
        },
        {
            value: v.Oe.HOURS_3,
            label: C.intl.string(C.t.QmYWtr)
        },
        {
            value: v.Oe.HOURS_8,
            label: C.intl.string(C.t.EpAXPD)
        },
        {
            value: v.Oe.HOURS_24,
            label: C.intl.string(C.t['755t4u'])
        },
        {
            value: v.Oe.ALWAYS,
            label: C.intl.string(C.t.r3LawM)
        }
    ],
    h = (n) => {
        let t = n > 0 ? r()().add(n, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: n,
                end_time: t
            }
        };
    };
function A(n, t) {
    let [e, a] = (0, l.Wu)([f.ZP], () => [f.ZP.isChannelMuted(n.guild_id, n.id), f.ZP.getChannelMuteConfig(n.guild_id, n.id)]),
        r = (0, s.U)(a),
        v = (0, g.ZP)(n, !0);
    function A(t) {
        t && n.type === _.d4z.GUILD_CATEGORY && (0, o.c4)(n.id), c.Z.updateChannelOverrideSettings(n.guild_id, n.id, { muted: t }, E.UE.muted(t));
    }
    let O = C.intl.string(C.t.tbeRRE),
        R = C.intl.string(C.t.OYefmZ);
    switch (n.type) {
        case _.d4z.GUILD_CATEGORY:
            (O = C.intl.string(C.t.pNMCg4)), (R = C.intl.string(C.t.olaBeH));
            break;
        case _.d4z.GROUP_DM:
            (O = C.intl.string(C.t.LO3kaG)), (R = C.intl.string(C.t['s5/5fn']));
            break;
        case _.d4z.DM:
            (O = C.intl.format(C.t.byjuJi, { name: v })), (R = C.intl.format(C.t['eC+9rq'], { name: v }));
            break;
        default:
            (O = C.intl.string(C.t.tbeRRE)), (R = C.intl.string(C.t.OYefmZ));
    }
    return e
        ? (0, i.jsx)(u.MenuItem, {
              id: 'unmute-channel',
              label: R,
              subtext: r,
              action: () => A(!1)
          })
        : (0, i.jsx)(u.MenuItem, {
              id: 'mute-channel',
              label: O,
              action: () => {
                  A(!0),
                      (0, d.s)({
                          channelId: n.id,
                          location: 'channel_context_menu'
                      });
              },
              children: p().map((e) => {
                  let { value: a, label: r } = e;
                  return (0, i.jsx)(
                      u.MenuItem,
                      {
                          id: ''.concat(a),
                          label: r,
                          action: () =>
                              (function (e) {
                                  n.type === _.d4z.GUILD_CATEGORY && (0, o.c4)(n.id);
                                  let i = h(e);
                                  c.Z.updateChannelOverrideSettings(n.guild_id, n.id, i, E.ZB.Muted, t);
                              })(a)
                      },
                      a
                  );
              })
          });
}
