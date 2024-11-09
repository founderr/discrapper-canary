var n = i(200651);
i(192379);
var a = i(442837),
    l = i(481060),
    s = i(289823),
    r = i(594174);
t.Z = function (e) {
    let { recipients: t, size: i, status: c, isTyping: d, className: o, ...u } = e,
        A = l.AvatarSizeSpecs[i],
        I = (0, a.Wu)(
            [r.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = r.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, A.size, !1);
                }),
            [t, A.size]
        );
    return (0, n.jsx)(s.Z, {
        'aria-label': u['aria-label'],
        'aria-hidden': u['aria-hidden'],
        backSrc: I[0],
        frontSrc: I[1],
        size: i,
        status: c,
        isTyping: null != d && d,
        className: o
    });
};
