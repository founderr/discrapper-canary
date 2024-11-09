i.d(e, {
    Z: function () {
        return o;
    }
});
var l = i(200651);
i(192379);
var t = i(120356),
    a = i.n(t),
    r = i(481060),
    s = i(388032),
    c = i(571032);
function o(n) {
    let { guild: e, speakers: i, speakerCount: t, className: o } = n,
        u = i.slice(0, 5),
        d = u.map((n) => {
            var i, t;
            return (0, l.jsxs)(
                'div',
                {
                    className: c.speakerContainer,
                    children: [
                        (0, l.jsx)(r.Avatar, {
                            src: null == n ? void 0 : null === (i = n.user) || void 0 === i ? void 0 : i.getAvatarURL(e.id, 20),
                            size: r.AvatarSizes.SIZE_20,
                            className: c.avatar,
                            'aria-label': ''.concat(null == n ? void 0 : n.userNick, '-avatar')
                        }),
                        (0, l.jsx)('div', {
                            className: c.textInGridContainer,
                            children: (0, l.jsx)(r.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                className: c.textInGrid,
                                children: null == n ? void 0 : n.userNick
                            })
                        })
                    ]
                },
                null == n ? void 0 : null === (t = n.user) || void 0 === t ? void 0 : t.id
            );
        }),
        h = t - u.length;
    return (0, l.jsxs)('div', {
        className: a()(c.grid, o),
        children: [
            d,
            h > 0 &&
                (0, l.jsxs)('div', {
                    className: c.speakerContainer,
                    children: [
                        (0, l.jsx)('div', {
                            className: c.iconMicrophone,
                            children: (0, l.jsx)(r.MicrophoneIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                height: 12
                            })
                        }),
                        (0, l.jsx)(r.Text, {
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            className: c.textInGrid,
                            children: s.intl.format(s.t['185ggI'], { count: h })
                        })
                    ]
                })
        ]
    });
}
