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
    let { user: n, guildId: r, channelId: f, profileType: _, onClose: h, children: p, ...m } = e,
        { interactionType: g, interactionSource: E, resetInteraction: v, interactionSourceId: I } = (0, s.Xo)(),
        T = _ === c.y0.FULL_SIZE ? (0, u.z)(n.id, r) : void 0,
        b = E === m.sourceType && g === c.P.REACT,
        y = E === m.sourceType && g === c.P.REPLY,
        S = (b || y) && I === m.sourceId;
    return (0, i.jsx)(a.Popout, {
        renderPopout: (e) => {
            let { setPopoutRef: a } = e,
                s = b ? o.Z : l.Z;
            return (0, i.jsx)(s, {
                user: n,
                guildId: r,
                channelId: f,
                profileType: _,
                onClose: h,
                modalKey: T,
                setPopoutRef: a,
                ...m
            });
        },
        onRequestClose: () => {
            v(), null == h || h();
        },
        shouldShow: S,
        ...d(g, _),
        children: p
    });
}
