n.d(t, {
    z: function () {
        return s;
    }
});
var r = n(200651);
n(192379);
var i = n(206295),
    a = n(150494);
function s(e) {
    let { children: t, imageUrl: n } = e,
        { primaryColor: s, secondaryColor: o } = (0, i.Z)(''.concat(n, '?forColors'));
    return (0, r.jsxs)('div', {
        className: a.heroContainer,
        style: { backgroundImage: 'linear-gradient(180deg, '.concat(s, ' 0%, ').concat(o, ' 100%), radial-gradient(99.17% 98.53% at 0% 1.47%, #deca7b 0%, #c89b3c 30.5%, #785a28 100%)') },
        children: [
            (0, r.jsx)('img', {
                src: n,
                alt: '',
                className: a.heroSplash
            }),
            t
        ]
    });
}
