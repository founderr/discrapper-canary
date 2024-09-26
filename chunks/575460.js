n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    l = n(259580),
    s = n(528027),
    a = n(686807),
    o = n(113318),
    c = n(131809);
function u(e) {
    let { benefit: t, guildId: n, onClick: u } = e,
        d = (0, o.Z)(n, t.ref_id),
        h = (0, r.jsx)(s.Z, {
            guildId: n,
            emojiId: t.emoji_id,
            emojiName: t.emoji_name
        });
    return (0, r.jsxs)(i.Clickable, {
        className: c.container,
        onClick: () => {
            null == d || d.navigateToChannel(), u();
        },
        'aria-label': null == d ? void 0 : d.ariaLabel,
        role: 'link',
        children: [
            (0, r.jsx)('div', {
                className: c.emojiContainer,
                children: h
            }),
            (0, r.jsxs)('div', {
                className: c.infoContainer,
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        className: c.name,
                        children: (0, a.Z)(t)
                    }),
                    (0, r.jsx)(i.Text, {
                        color: 'interactive-normal',
                        variant: 'text-sm/normal',
                        children: t.description
                    })
                ]
            }),
            (0, r.jsx)(l.Z, {
                direction: l.Z.Directions.RIGHT,
                className: c.caret
            })
        ]
    });
}
