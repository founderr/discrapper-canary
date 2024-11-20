n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(40851),
    s = n(357156),
    o = n(390322),
    c = n(871499),
    d = n(592125),
    u = n(15274),
    h = n(482241),
    p = n(389303),
    m = n(554747),
    f = n(388032),
    g = n(249786);
function C(e) {
    let { channelId: t, onClick: n } = e,
        C = (0, a.bp)(),
        x = (0, m.qY)(t),
        _ = (0, l.e7)([d.Z], () => d.Z.getChannel(t), [t]),
        { canManageGuildEvent: v } = (0, s.XJ)(_),
        I = v(x);
    if (null == x) return null;
    let E = () => {
            if (null != _ && (0, p.Z)(_)) {
                (0, u.lC)(_, C);
                return;
            }
            n();
        },
        b = () => {
            h.Z.endEvent(x.id, x.guild_id);
        };
    return I
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
                              action: b,
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
                  return (0, i.jsx)(c.d, {
                      label: f.intl.string(f.t['6vrfgo']),
                      color: 'red',
                      iconComponent: r.PhoneHangUpIcon,
                      onClick: E,
                      onPopoutClick: t,
                      className: g.buttonSpacing
                  });
              }
          })
        : (0, i.jsx)(c.d, {
              className: g.buttonSpacing,
              label: f.intl.string(f.t['6vrfgo']),
              color: 'red',
              iconComponent: r.PhoneHangUpIcon,
              onClick: n
          });
}
