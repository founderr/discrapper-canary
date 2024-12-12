r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(510659),
    o = r(511341),
    l = r(215105),
    u = r(429974),
    c = r(228168);
function d(e, n) {
    return e === c.P.REACT
        ? {
              position: 'left',
              align: 'top',
              animationPosition: 'right',
              spacing: 8
          }
        : {
              position: 'bottom',
              align: n === c.y0.FULL_SIZE ? 'center' : 'left',
              animationPosition: 'top',
              spacing: 6
          };
}
function f(e) {
    let { user: n, guildId: r, channelId: f, profileType: _, sourceType: h, sourceDetails: p, sourceId: m, onClose: g, children: E, entry: v } = e,
        { interactionType: I, interactionSource: T, resetInteraction: b, interactionSourceId: y } = (0, s.Xo)(),
        S = _ === c.y0.FULL_SIZE ? (0, u.z)(n.id, r) : void 0,
        A = T === h && I === c.P.REACT,
        N = T === h && I === c.P.REPLY,
        C = (A || N) && y === m;
    return (0, i.jsx)(a.Popout, {
        renderPopout: (e) => {
            let { setPopoutRef: a } = e,
                s = A ? o.Z : l.Z;
            return (0, i.jsx)(s, {
                user: n,
                guildId: r,
                channelId: f,
                profileType: _,
                sourceType: h,
                sourceDetails: p,
                entry: v,
                onClose: g,
                modalKey: S,
                setPopoutRef: a
            });
        },
        onRequestClose: () => {
            b(), null == g || g();
        },
        shouldShow: C,
        ...d(I, _),
        children: E
    });
}
