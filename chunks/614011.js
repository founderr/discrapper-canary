n.d(t, {
    O: function () {
        return c;
    },
    W: function () {
        return d;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(134432),
    s = n(999534),
    l = n(242493);
let u = 3000;
function c() {
    (0, o.po)(''.concat(l, '?query=true'));
}
function d(e) {
    let { onPlayed: t, played: n } = e,
        [r, o] = a.useState(n),
        c = a.useRef(0);
    if (
        (a.useEffect(
            () => (
                clearTimeout(c.current),
                (c.current = setTimeout(() => {
                    t();
                }, u)),
                () => {
                    clearTimeout(c.current), t();
                }
            ),
            [t]
        ),
        a.useEffect(() => {
            o((e) => !e);
        }, [n]),
        n)
    )
        return null;
    let d = ''.concat(l, '?query=').concat(r);
    return (0, i.jsx)('div', {
        className: s.demoEffectOverlay,
        children: (0, i.jsx)('img', {
            alt: '',
            className: s.demoEffectImg,
            src: d
        })
    });
}
