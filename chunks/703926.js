s.d(n, {
    m: function () {
        return T;
    }
});
var t = s(200651),
    l = s(192379),
    i = s(481060),
    r = s(474936),
    a = s(910485),
    c = s(426831),
    o = s(257510),
    u = s(74838),
    d = s(720834),
    _ = s(385925),
    m = s(588921),
    I = s(718720),
    E = s(721513),
    p = s(959191);
let N = {
        [r.Cj.STANDARD_BOX]: _,
        [r.Cj.CAKE]: m,
        [r.Cj.CHEST]: I,
        [r.Cj.COFFEE]: E,
        [r.Cj.SNOWGLOBE]: '',
        [r.Cj.BOX]: '',
        [r.Cj.CUP]: '',
        [r.Cj.SEASONAL_CAKE]: o,
        [r.Cj.SEASONAL_CHEST]: u,
        [r.Cj.SEASONAL_COFFEE]: d,
        [r.Cj.SEASONAL_STANDARD_BOX]: c,
        [r.Cj.NITROWEEN_STANDARD]: p.Z
    },
    T = l.forwardRef(function (e, n) {
        let { isSelected: s, giftStyle: l, setSelectedGiftStyle: r, onFocus: c, onBlur: o } = e;
        return (0, t.jsx)(i.Clickable, {
            className: a.button,
            innerRef: n,
            onClick: () => r(l),
            onFocus: c,
            onBlur: o,
            children: (0, t.jsx)('img', {
                style: {
                    width: '100%',
                    height: '100%'
                },
                alt: '',
                src: N[l],
                className: s ? a.customGiftBoxHighlighted : a.customGiftBox
            })
        });
    });
