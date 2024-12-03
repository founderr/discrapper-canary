n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(40851),
    s = n(357156),
    o = n(390322),
    c = n(88479),
    d = n(592125),
    u = n(15274),
    h = n(482241),
    p = n(389303),
    m = n(554747),
    f = n(388032);
function g(e) {
    let { channelId: t, onClick: n } = e,
        g = (0, a.bp)(),
        C = (0, m.qY)(t),
        x = (0, l.e7)([d.Z], () => d.Z.getChannel(t), [t]),
        { canManageGuildEvent: v } = (0, s.XJ)(x),
        _ = v(C);
    if (null == C) return null;
    let I = () => {
            if (null != x && (0, p.Z)(x)) {
                (0, u.lC)(x, g);
                return;
            }
            n();
        },
        E = () => {
            h.Z.endEvent(C.id, C.guild_id);
        };
    return _
        ? (0, i.jsx)(r.Popout, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(o.Z, {
                      children: (0, i.jsx)(r.Menu, {
                          navId: 'exit-options',
                          onSelect: () => {},
                          'aria-label': f.intl.string(f.t['K6/mk5']),
                          onClose: t,
                          children: (0, i.jsx)(r.MenuItem, {
                              id: 'end-voice-event',
                              color: 'danger',
                              action: E,
                              label: f.intl.string(f.t.qaYzPD),
                              icon: r.CircleXIcon
                          })
                      })
                  });
              },
              align: 'center',
              position: 'top',
              animation: r.Popout.Animation.FADE,
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, i.jsx)(c.Z, {
                      label: f.intl.string(f.t['6vrfgo']),
                      onClick: I,
                      onPopoutClick: t
                  });
              }
          })
        : (0, i.jsx)(c.Z, {
              label: f.intl.string(f.t['6vrfgo']),
              onClick: n
          });
}
