n.d(t, {
    c: function () {
        return r;
    }
});
var i = n(735250);
n(470079);
var s = n(481060), a = n(523753);
function r(e) {
    let {
        eyebrow: t,
        title: n,
        description: r,
        button: l,
        backgroundImageUrl: o = 'https://cdn.discordapp.com/assets/discovery/generic-hero-background.png'
    } = e;
    return (0, i.jsxs)('div', {
        className: a.hero,
        style: { backgroundImage: 'url('.concat(o, ')') },
        children: [
            (0, i.jsx)('div', { className: a.overlay }),
            (0, i.jsxs)('div', {
                className: a.content,
                children: [
                    null != t ? (0, i.jsx)(s.Text, {
                        variant: 'eyebrow',
                        color: 'text-brand',
                        className: a.eyebrow,
                        children: t
                    }) : null,
                    (0, i.jsx)(s.Heading, {
                        variant: 'heading-lg/medium',
                        color: 'always-white',
                        children: n
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/medium',
                        color: 'text-muted',
                        children: r
                    }),
                    l
                ]
            })
        ]
    });
}
