n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(385499),
    s = n(739566),
    c = n(464891),
    u = n(83561),
    d = n(834129),
    m = n(674563),
    f = n(388032),
    h = n(38814);
function p(e) {
    let { message: t, compact: n, usernameHook: r } = e,
        p = (0, s.ZP)(t),
        g = r(p),
        {
            avatarSrc: _,
            eventHandlers: { onMouseEnter: C, onMouseLeave: E }
        } = (0, u.m)(!0);
    return (0, i.jsx)('div', {
        onMouseEnter: C,
        onMouseLeave: E,
        children: (0, i.jsx)(d.Z, {
            className: l()(h.mainContainer, { [h.compact]: n }),
            iconNode: n ? null : (0, i.jsx)(u.S, { src: _ }),
            iconContainerClassName: h.iconContainer,
            compact: n,
            children: (0, i.jsxs)('div', {
                className: l()(h.content, { [h.compact]: n }),
                children: [
                    (0, i.jsx)(c.nD, {
                        message: t,
                        messageClassname: h.spanCorrection,
                        className: l()(h.usernameContainer, h.spanCorrection, { [h.compact]: n }),
                        username: (0, i.jsxs)('div', {
                            className: h.spanCorrection,
                            children: [
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: h.username,
                                    children: f.intl.string(f.t.hG1StL)
                                }),
                                (0, i.jsx)(o.Z, {
                                    type: m.Hb.SYSTEM_DM,
                                    className: h.systemTag
                                })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: l()(h.__invalid_messageContent, { [h.compact]: n }),
                        children: f.intl.format(f.t.qntXNT, {
                            username: p.nick,
                            usernameHook: g
                        })
                    })
                ]
            })
        })
    });
}
