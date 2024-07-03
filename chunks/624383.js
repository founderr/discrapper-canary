n.d(t, {
    c: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var s = n(120356), a = n.n(s), r = n(481060), l = n(523753);
function o(e) {
    let {
        eyebrow: t,
        title: n,
        description: s,
        button: o,
        backgroundImageUrl: c = 'https://cdn.discordapp.com/assets/discovery/generic-hero-background.png',
        className: d
    } = e;
    return (0, i.jsxs)('div', {
        className: a()(l.hero, d),
        style: { backgroundImage: 'url('.concat(c, ')') },
        children: [
            (0, i.jsx)('div', { className: l.overlay }),
            (0, i.jsxs)('div', {
                className: l.content,
                children: [
                    null != t ? (0, i.jsx)(r.Text, {
                        variant: 'eyebrow',
                        color: 'text-brand',
                        className: l.eyebrow,
                        children: t
                    }) : null,
                    (0, i.jsx)(r.Heading, {
                        variant: 'heading-lg/medium',
                        color: 'always-white',
                        children: n
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-md/medium',
                        color: 'text-muted',
                        children: s
                    }),
                    o
                ]
            })
        ]
    });
}
