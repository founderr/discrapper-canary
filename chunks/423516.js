var l = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    i = n(481060),
    o = n(570928),
    a = n(540059),
    c = n(977059),
    u = n(388032),
    d = n(586802);
t.Z = function (e) {
    let { className: t, hasVideo: n, text: r, hasConnectedChannel: h } = e,
        x = (0, a.Q)('RTCConnectionStatusText'),
        { enabled: g } = (0, c.S)({ location: 'RTCConnectionStatusText' }),
        N = n ? u.intl.string(u.t.IlHdW1) : u.intl.string(u.t.WsOisr);
    return (0, l.jsx)(o.Z, {
        className: s()(t, g ? d.hoverableStatus : d.status),
        hoverText:
            g && h
                ? x
                    ? (0, l.jsx)(i.Text, {
                          variant: 'text-md/medium',
                          color: 'currentColor',
                          children: N
                      })
                    : N
                : null,
        children: x
            ? (0, l.jsx)(i.Text, {
                  variant: 'text-md/medium',
                  color: 'currentColor',
                  children: r
              })
            : r
    });
};
