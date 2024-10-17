s.d(t, {
    O: function () {
        return o;
    }
});
var a = s(735250);
s(470079);
var r = s(442837),
    n = s(481060),
    i = s(607070),
    l = s(564032);
function o(e) {
    let { category: t } = e,
        s = (0, r.e7)([i.Z], () => i.Z.useReducedMotion);
    return (0, a.jsx)('div', {
        className: l.banner,
        'aria-label': t.name,
        children: (0, a.jsxs)('div', {
            className: l.mainContent,
            style: { backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/content/f7fcebe03d45107413f90019d20fbece106970e96ff5a01bfe73353e6d91fe1e.png', ')') },
            children: [
                !s &&
                    (0, a.jsx)('img', {
                        src: 'https://cdn.discordapp.com/assets/content/b7658932823f6b897cde41e166798d487c836da43f32d59ff392ecb1c5aee4e8.png',
                        className: l.animatedLayer,
                        alt: '',
                        'aria-hidden': !0
                    }),
                (0, a.jsx)(n.Text, {
                    className: l.summary,
                    variant: 'text-md/normal',
                    children: t.summary
                })
            ]
        })
    });
}
