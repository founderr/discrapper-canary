n.d(t, {
    m: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(91192),
    o = n(589440),
    s = n(481060),
    c = n(858996),
    u = n(766075),
    d = n(109659);
function h(e) {
    var t;
    let { id: n, className: l, innerClassName: h, renderIcon: p, text: m, selected: f, trailing: g, showUnread: C = !1, ..._ } = e,
        v = (0, a.JA)(n),
        x = null !== (t = (0, o.q)(m)) && void 0 !== t ? t : '';
    return (0, i.jsx)('li', {
        children: (0, i.jsxs)(s.ClickableContainer, {
            ..._,
            buttonProps: {
                ...v,
                id: n,
                role: 'button'
            },
            tag: 'div',
            'aria-label': x,
            focusProps: {
                offset: {
                    top: 1,
                    bottom: 1,
                    right: 4
                }
            },
            onContextMenu:
                null != _.onContextMenu
                    ? _.onContextMenu
                    : (e) => {
                          e.stopPropagation();
                      },
            className: r()(u.containerDefault, d.wrapper, { [d.modeSelected]: f }, l),
            children: [
                C ? (0, i.jsx)('div', { className: r()(d.unread, d.unreadImportant) }) : null,
                (0, i.jsx)('div', {
                    className: r()([d.link, d.basicChannelRowLink, h]),
                    children: (0, i.jsxs)('div', {
                        className: c.content,
                        children: [
                            (0, i.jsx)('div', {
                                className: d.iconContainer,
                                children: p(d.icon)
                            }),
                            (0, i.jsx)('div', {
                                className: d.name,
                                'aria-hidden': !0,
                                children: m
                            }),
                            g
                        ]
                    })
                })
            ]
        })
    });
}
