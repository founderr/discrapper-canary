l.d(n, {
    Z: function () {
        return C;
    }
});
var t = l(200651);
l(192379);
var i = l(442837),
    a = l(481060),
    r = l(749210),
    s = l(287734),
    u = l(933557),
    d = l(314897),
    o = l(592125),
    c = l(984933),
    Z = l(271383),
    E = l(430824),
    M = l(496675),
    f = l(699516),
    _ = l(594174),
    g = l(979651),
    I = l(934415),
    m = l(700785),
    R = l(981631),
    N = l(689938);
function C(e, n) {
    let l = (0, i.e7)([c.ZP], () => c.ZP.getChannels(n)[c.Zb], [n]),
        C = (0, i.e7)(
            [g.Z, o.Z],
            () => {
                let l = g.Z.getUserVoiceChannelId(n, e.id);
                return o.Z.getChannel(l);
            },
            [n, e.id]
        );
    if ((0, i.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, e.id), [n, e.id]) || null == C) return null;
    let O = e.id === d.default.getId();
    if (!O && !M.Z.can(R.Plq.MOVE_MEMBERS, C)) return null;
    let A = l.filter((n) => {
        let { channel: l } = n;
        return (
            l.id !== C.id &&
            (O
                ? M.Z.can(R.Plq.CONNECT, l) && !(0, I.rY)(l, g.Z, E.Z)
                : M.Z.can(R.Plq.MOVE_MEMBERS, l) &&
                  (M.Z.can(R.Plq.CONNECT, l) ||
                      m.BT({
                          permission: R.Plq.CONNECT,
                          user: e,
                          context: l
                      })) &&
                  !(0, I.rY)(l, g.Z, E.Z))
        );
    });
    return 0 === A.length
        ? null
        : (0, t.jsx)(a.MenuItem, {
              id: 'voice-move',
              label: N.Z.Messages.MOVE_TO,
              children: A.map((l) => {
                  let { channel: i } = l;
                  return (0, t.jsx)(
                      a.MenuItem,
                      {
                          id: i.id,
                          action: () => {
                              var l;
                              return (l = i), void (e.id === d.default.getId() ? s.default.selectVoiceChannel(l.id) : r.Z.setChannel(n, e.id, l.id));
                          },
                          label: (0, u.F6)(i, _.default, f.Z)
                      },
                      i.id
                  );
              })
          });
}
