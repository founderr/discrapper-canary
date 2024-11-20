t.d(n, {
    Z: function () {
        return I;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(749210),
    u = t(287734),
    o = t(933557),
    d = t(314897),
    s = t(592125),
    c = t(984933),
    Z = t(271383),
    f = t(430824),
    g = t(496675),
    m = t(699516),
    M = t(594174),
    v = t(979651),
    x = t(934415),
    P = t(700785),
    h = t(981631),
    p = t(388032);
function I(e, n) {
    let t = (0, i.e7)([c.ZP], () => c.ZP.getChannels(n)[c.Zb], [n]),
        I = (0, i.e7)(
            [v.Z, s.Z],
            () => {
                let t = v.Z.getUserVoiceChannelId(n, e.id);
                return s.Z.getChannel(t);
            },
            [n, e.id]
        );
    if ((0, i.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, e.id), [n, e.id]) || null == I) return null;
    let b = e.id === d.default.getId();
    if (!b && !g.Z.can(h.Plq.MOVE_MEMBERS, I)) return null;
    let C = t.filter((n) => {
        let { channel: t } = n;
        return (
            t.id !== I.id &&
            (b
                ? g.Z.can(h.Plq.CONNECT, t) && !(0, x.rY)(t, v.Z, f.Z)
                : g.Z.can(h.Plq.MOVE_MEMBERS, t) &&
                  (g.Z.can(h.Plq.CONNECT, t) ||
                      P.BT({
                          permission: h.Plq.CONNECT,
                          user: e,
                          context: t
                      })) &&
                  !(0, x.rY)(t, v.Z, f.Z))
        );
    });
    return 0 === C.length
        ? null
        : (0, l.jsx)(r.MenuItem, {
              id: 'voice-move',
              label: p.intl.string(p.t.FAplmp),
              children: C.map((t) => {
                  let { channel: i } = t;
                  return (0, l.jsx)(
                      r.MenuItem,
                      {
                          id: i.id,
                          action: () => {
                              var t;
                              return (t = i), void (e.id === d.default.getId() ? u.default.selectVoiceChannel(t.id) : a.Z.setChannel(n, e.id, t.id));
                          },
                          label: (0, o.F6)(i, M.default, m.Z)
                      },
                      i.id
                  );
              })
          });
}
