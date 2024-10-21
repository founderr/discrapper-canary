var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(570928),
    s = n(977059),
    o = n(689938),
    c = n(666790);
t.Z = function (e) {
    let { className: t, hasVideo: n, text: l } = e,
        { enabled: u } = (0, s.S)({ location: 'RTCConnectionStatusText' }),
        d = n ? o.Z.Messages.E2EE_VIDEO_DETAILS : o.Z.Messages.E2EE_VOICE_DETAILS;
    return (0, i.jsx)(a.Z, {
        className: r()(t, u ? c.hoverableStatus : c.status),
        hoverText: u ? d : null,
        children: l
    });
};
