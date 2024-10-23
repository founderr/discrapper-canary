n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(510659),
    s = n(511341),
    o = n(215105),
    l = n(429974),
    u = n(228168);
function c(e) {
    var t, n;
    let { user: c, guildId: d, channelId: _, profileType: E, sourceType: f, sourceDetails: h, sourceId: p, onClose: I, children: m } = e,
        { interactionType: T, interactionSource: S, resetInteraction: g, interactionSourceId: A } = (0, a.Xo)(),
        N = E === u.y0.FULL_SIZE ? (0, l.z)(c.id, d) : void 0,
        R = S === f && T === u.P.REACT,
        O = S === f && T === u.P.REPLY;
    return (0, r.jsx)(i.Popout, {
        renderPopout: (e) => {
            let { setPopoutRef: t } = e,
                n = R ? s.Z : o.Z;
            return (0, r.jsx)(n, {
                user: c,
                guildId: d,
                channelId: _,
                profileType: E,
                sourceType: f,
                sourceDetails: h,
                onClose: I,
                modalKey: N,
                setPopoutRef: t
            });
        },
        onRequestClose: () => {
            g(), null == I || I();
        },
        shouldShow: (R || O) && A === p,
        ...((t = T),
        (n = E),
        t === u.P.REACT
            ? {
                  position: 'left',
                  align: 'top',
                  animationPosition: 'right',
                  spacing: 8
              }
            : {
                  position: 'bottom',
                  align: n === u.y0.FULL_SIZE ? 'center' : 'left',
                  animationPosition: 'top',
                  spacing: 6
              }),
        children: m
    });
}
