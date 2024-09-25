var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(289823),
    s = n(594174);
function l(e) {
    let { recipients: t, size: n, status: l, isTyping: u, className: c, ...d } = e,
        _ = a.AvatarSizeSpecs[n],
        E = (0, i.Wu)(
            [s.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = s.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, _.size, !1);
                }),
            [t, _.size]
        );
    return (0, r.jsx)(o.Z, {
        'aria-label': d['aria-label'],
        'aria-hidden': d['aria-hidden'],
        backSrc: E[0],
        frontSrc: E[1],
        size: n,
        status: l,
        isTyping: null != u && u,
        className: c
    });
}
t.Z = l;
