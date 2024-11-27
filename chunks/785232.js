var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(289823),
    o = n(594174);
t.Z = function (e) {
    let { recipients: t, size: n, status: s, isTyping: c, className: u, ...d } = e,
        m = l.AvatarSizeSpecs[n],
        h = (0, r.Wu)(
            [o.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = o.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, m.size, !1);
                }),
            [t, m.size]
        );
    return (0, i.jsx)(a.Z, {
        'aria-label': d['aria-label'],
        'aria-hidden': d['aria-hidden'],
        backSrc: h[0],
        frontSrc: h[1],
        size: n,
        status: s,
        isTyping: null != c && c,
        className: u
    });
};
