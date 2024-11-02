var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(570928),
    o = n(977059),
    s = n(388032),
    c = n(666790);
t.Z = function (e) {
    let { className: t, hasVideo: n, text: l } = e,
        { enabled: u } = (0, o.S)({ location: 'RTCConnectionStatusText' }),
        d = n ? s.intl.string(s.t.IlHdW1) : s.intl.string(s.t.WsOisr);
    return (0, i.jsx)(a.Z, {
        className: r()(t, u ? c.hoverableStatus : c.status),
        hoverText: u ? d : null,
        children: l
    });
};
