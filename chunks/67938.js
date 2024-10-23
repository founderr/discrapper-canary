r.d(t, {
    O: function () {
        return o;
    }
});
var s = r(200651);
r(192379);
var n = r(442837),
    a = r(481060),
    i = r(607070),
    l = r(564032);
function o(e) {
    let { category: t } = e,
        r = (0, n.e7)([i.Z], () => i.Z.useReducedMotion);
    return (0, s.jsx)('div', {
        className: l.banner,
        'aria-label': t.name,
        children: (0, s.jsxs)('div', {
            className: l.mainContent,
            style: { backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/content/f7fcebe03d45107413f90019d20fbece106970e96ff5a01bfe73353e6d91fe1e.png', ')') },
            children: [
                !r &&
                    (0, s.jsx)('img', {
                        src: 'https://cdn.discordapp.com/assets/content/b7658932823f6b897cde41e166798d487c836da43f32d59ff392ecb1c5aee4e8.png',
                        className: l.animatedLayer,
                        alt: '',
                        'aria-hidden': !0
                    }),
                (0, s.jsx)(a.Text, {
                    className: l.summary,
                    variant: 'text-md/normal',
                    children: t.summary
                })
            ]
        })
    });
}
