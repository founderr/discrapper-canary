var i = e(200651);
e(192379);
var s = e(120356),
    r = e.n(s),
    o = e(570928),
    l = e(977059),
    a = e(388032),
    c = e(591286);
n.Z = function (t) {
    let { className: n, hasVideo: e, text: s, hasConnectedChannel: u } = t,
        { enabled: E } = (0, l.S)({ location: 'RTCConnectionStatusText' }),
        d = e ? a.intl.string(a.t.IlHdW1) : a.intl.string(a.t.WsOisr);
    return (0, i.jsx)(o.Z, {
        className: r()(n, E ? c.hoverableStatus : c.status),
        hoverText: E && u ? d : null,
        children: s
    });
};
