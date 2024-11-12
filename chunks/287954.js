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
    let { user: c, guildId: d, channelId: f, profileType: _, sourceType: p, sourceDetails: h, sourceId: m, onClose: g, children: E } = e,
        { interactionType: v, interactionSource: I, resetInteraction: b, interactionSourceId: S } = (0, a.Xo)(),
        T = _ === u.y0.FULL_SIZE ? (0, l.z)(c.id, d) : void 0,
        y = I === p && v === u.P.REACT,
        A = I === p && v === u.P.REPLY;
    return (0, r.jsx)(i.Popout, {
        renderPopout: (e) => {
            let { setPopoutRef: t } = e,
                n = y ? s.Z : o.Z;
            return (0, r.jsx)(n, {
                user: c,
                guildId: d,
                channelId: f,
                profileType: _,
                sourceType: p,
                sourceDetails: h,
                onClose: g,
                modalKey: T,
                setPopoutRef: t
            });
        },
        onRequestClose: () => {
            b(), null == g || g();
        },
        shouldShow: (y || A) && S === m,
        ...((t = v),
        (n = _),
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
        children: E
    });
}
