var l = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    i = n(570928),
    o = n(977059),
    a = n(388032),
    c = n(586802);
t.Z = function (e) {
    let { className: t, hasVideo: n, text: s, hasConnectedChannel: u } = e,
        { enabled: d } = (0, o.S)({ location: 'RTCConnectionStatusText' }),
        h = n ? a.intl.string(a.t.IlHdW1) : a.intl.string(a.t.WsOisr);
    return (0, l.jsx)(i.Z, {
        className: r()(t, d ? c.hoverableStatus : c.status),
        hoverText: d && u ? h : null,
        children: s
    });
};
