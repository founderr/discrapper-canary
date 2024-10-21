n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var s = n(120356),
    a = n.n(s),
    l = n(442837),
    r = n(963838),
    o = n(37091),
    c = n(689938),
    u = n(282827);
function d(e) {
    let t,
        { channelId: n, userId: s } = e,
        [d, h] = (0, l.Wu)([o.Z], () => [o.Z.getWaitingHighFive(n, s), o.Z.getCompletedHighFive(n, s)]);
    if (null != h)
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    alt: c.Z.Messages.CALL_HIGH_FIVE_EXCLAMATION,
                    src: (0, r._r)({
                        name: h[0],
                        id: null,
                        animated: !1
                    }),
                    className: a()(u.completeLeft, u.highFive)
                }),
                (0, i.jsx)('img', {
                    alt: c.Z.Messages.CALL_HIGH_FIVE_EXCLAMATION,
                    src: (0, r._r)({
                        name: h[1],
                        id: null,
                        animated: !1
                    }),
                    className: a()(u.completeRight, u.highFive)
                })
            ]
        });
    else {
        if (null == d) return null;
        t = (0, i.jsx)('img', {
            alt: c.Z.Messages.CALL_HIGH_FIVE_EXCLAMATION,
            src: (0, r._r)({
                name: d,
                id: null,
                animated: !1
            }),
            className: a()(u.waiting, u.highFive)
        });
    }
    return (0, i.jsx)('div', {
        className: u.root,
        children: t
    });
}
