n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(510659),
    o = n(511341),
    s = n(215105),
    l = n(429974),
    u = n(228168);
function c(e, t) {
    return e === u.P.REACT
        ? {
              position: 'left',
              align: 'top',
              animationPosition: 'right',
              spacing: 8
          }
        : {
              position: 'bottom',
              align: t === u.y0.FULL_SIZE ? 'center' : 'left',
              animationPosition: 'top',
              spacing: 6
          };
}
function d(e) {
    let { user: t, guildId: n, channelId: d, profileType: _, sourceType: E, sourceDetails: f, onClose: h, children: p } = e,
        { interactionType: m, interactionSource: I, resetInteraction: T } = (0, a.Xo)(),
        g = _ === u.y0.FULL_SIZE ? (0, l.z)(t.id, n) : void 0,
        S = I === E && m === u.P.REACT,
        A = I === E && m === u.P.REPLY,
        v = S || A;
    return (0, r.jsx)(i.Popout, {
        renderPopout: (e) => {
            let { setPopoutRef: i } = e,
                a = S ? o.Z : s.Z;
            return (0, r.jsx)(a, {
                user: t,
                guildId: n,
                channelId: d,
                profileType: _,
                sourceType: E,
                sourceDetails: f,
                onClose: h,
                modalKey: g,
                setPopoutRef: i
            });
        },
        onRequestClose: () => {
            T(), null == h || h();
        },
        shouldShow: v,
        ...c(m, _),
        children: p
    });
}
