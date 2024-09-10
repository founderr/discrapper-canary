var l = n(735250);
n(470079);
var a = n(442837),
    s = n(481060),
    i = n(289823),
    r = n(594174);
t.Z = function (e) {
    let { recipients: t, size: n, status: o, isTyping: c, className: u, ...d } = e,
        h = s.AvatarSizeSpecs[n],
        _ = (0, a.Wu)(
            [r.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = r.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, h.size, !1);
                }),
            [t, h.size]
        );
    return (0, l.jsx)(i.Z, {
        'aria-label': d['aria-label'],
        'aria-hidden': d['aria-hidden'],
        backSrc: _[0],
        frontSrc: _[1],
        size: n,
        status: o,
        isTyping: null != c && c,
        className: u
    });
};
