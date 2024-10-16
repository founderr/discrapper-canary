r.d(t, {
    O: function () {
        return l;
    }
});
var a = r(735250);
r(470079);
var n = r(442837),
    s = r(481060),
    i = r(607070),
    o = r(564032);
function l(e) {
    let { category: t } = e,
        r = (0, n.e7)([i.Z], () => i.Z.useReducedMotion);
    return (0, a.jsx)('div', {
        className: o.banner,
        'aria-label': t.name,
        children: (0, a.jsxs)('div', {
            className: o.mainContent,
            style: { backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/content/f7fcebe03d45107413f90019d20fbece106970e96ff5a01bfe73353e6d91fe1e.png', ')') },
            children: [
                !r &&
                    (0, a.jsx)('img', {
                        src: 'https://cdn.discordapp.com/assets/content/b7658932823f6b897cde41e166798d487c836da43f32d59ff392ecb1c5aee4e8.png',
                        className: o.animatedLayer,
                        alt: '',
                        'aria-hidden': !0
                    }),
                (0, a.jsx)(s.Text, {
                    className: o.summary,
                    variant: 'text-md/normal',
                    children: t.summary
                })
            ]
        })
    });
}
