n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(724458);
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(692547),
    a = n(481060),
    s = n(357156),
    o = n(592125),
    c = n(15274),
    u = n(924301),
    d = n(554747),
    h = n(854698),
    m = n(688641),
    p = n(388032),
    f = n(664786);
function g(e) {
    let { channelId: t } = e,
        g = (0, l.e7)([o.Z], () => o.Z.getChannel(t), [t]),
        C = (0, d.sz)(t),
        x = null != (0, d.qY)(t),
        { canManageGuildEvent: v } = (0, s.XJ)(g),
        _ = (0, l.cj)([u.ZP], () => C.reduce((e, t) => ((e[t.id] = u.ZP.getUserCount(t.id, (0, h.DK)(t))), e), {}));
    return C.length < 1 || x
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: C.map((e) =>
                  (0, i.jsx)(
                      m.Z,
                      {
                          icon: (0, i.jsx)(a.CalendarIcon, {
                              size: 'custom',
                              color: 'currentColor',
                              height: 20,
                              width: 20
                          }),
                          color: r.Z.unsafe_rawColors.GREEN_360.css,
                          title: p.intl.formatToPlainString(v(e) ? p.t['1vGXqK'] : p.t.xMJylZ, { eventName: e.name }),
                          description: p.intl.formatToPlainString(p.t.PTebCQ, { startTime: (0, h.ub)(e.scheduled_start_time).startDateTimeString }),
                          onClick: () => {
                              var t;
                              v((t = e))
                                  ? (0, a.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e('22347'), n.e('84722'), n.e('44001')]).then(n.bind(n, 296864));
                                        return (n) =>
                                            (0, i.jsx)(e, {
                                                ...n,
                                                event: t
                                            });
                                    })
                                  : (0, c.bO)({
                                        eventId: t.id,
                                        parentGuildId: t.guild_id
                                    });
                          },
                          userCount: _[e.id],
                          className: f.eventPrompt
                      },
                      e.id
                  )
              )
          });
}
