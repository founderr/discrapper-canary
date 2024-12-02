var i = n(200651);
n(192379);
var s = n(442837),
    a = n(481060),
    r = n(289823),
    l = n(594174);
e.Z = function (t) {
    let { recipients: e, size: n, status: o, isTyping: d, className: c, ...u } = t,
        _ = a.AvatarSizeSpecs[n],
        A = (0, s.Wu)(
            [l.default],
            () =>
                e.slice(0, 2).map((t) => {
                    let e = l.default.getUser(t);
                    if (null != e) return e.getAvatarURL(void 0, _.size, !1);
                }),
            [e, _.size]
        );
    return (0, i.jsx)(r.Z, {
        'aria-label': u['aria-label'],
        'aria-hidden': u['aria-hidden'],
        backSrc: A[0],
        frontSrc: A[1],
        size: n,
        status: o,
        isTyping: null != d && d,
        className: c
    });
};
