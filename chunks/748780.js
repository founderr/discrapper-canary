n(653041);
var r = n(371193),
    i = n(501501),
    a = n.n(i),
    s = n(78650),
    o = n.n(s),
    l = n(505444),
    u = n.n(l);
function c(e) {
    let t = Object.keys(e)[0];
    return ''.concat(t, '(').concat(e[t], ')');
}
let d = /rgba\(([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+)\)/;
function f(e) {
    let t = e.match(d);
    return (
        null != t &&
            (e = 'rgba('
                .concat(0 | t[1], ', ')
                .concat(0 | t[2], ', ')
                .concat(0 | t[3], ', ')
                .concat(t[4], ')')),
        e
    );
}
r.inject.ApplyAnimatedValues(
    function (e, t, n) {
        if (e.setNativeProps) e.setNativeProps(t);
        else {
            if (!e.nodeType || void 0 === e.setAttribute) return !1;
            var r;
            u().setValueForStyles(e, ((r = t.style) && (r.transform && (r.transform = r.WebkitTransform = r.MozTransform = r.transform.map(c).join(' ')), r.color && (r.color = f(r.color)), r.backgroundColor && (r.backgroundColor = f(r.backgroundColor))), r), n._reactInternalInstance);
        }
    },
    (e) => e
);
function _(e, t, n) {
    return void 0 !== t && void 0 != n ? o()(t, n) : e;
}
t.Z = {
    ...r,
    Easing: a(),
    accelerate: function (e) {
        return (e.transform = e.transform || []), e.transform.push({ translateZ: 0 }), e;
    },
    animate: function e(t, n) {
        let i;
        let { toValueMin: a, toValueMax: s, tension: o = 0, friction: l = 0, loop: u, reverse: c, invert: d, callback: f, type: p = 'spring', shouldLoop: h, durationMin: m, durationMax: g, ...E } = n,
            v = t._value,
            I = _(n.duration, m, g),
            b = _(n.toValue, a, s),
            T = r[p](t, {
                ...E,
                toValue: b,
                tension: o,
                friction: l,
                duration: I
            }),
            S = T;
        if (c || d) {
            let e = _(n.duration, m, g);
            (i = r[p](t, {
                ...E,
                toValue: c ? v : -b,
                tension: o,
                friction: l,
                duration: e
            })),
                (S = r.sequence([T, i]));
        }
        u
            ? S.start(() => {
                  (!h || (h && h())) && (f ? f(e.bind(null, t, n)) : e(t, n));
              })
            : S.start(f);
    },
    interpolate: function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return e.interpolate({
            inputRange: [0, 1],
            outputRange: n
        });
    },
    Extrapolate: { CLAMP: 'clamp' },
    div: r.createAnimatedComponent('div'),
    span: r.createAnimatedComponent('span'),
    img: r.createAnimatedComponent('img'),
    a: r.createAnimatedComponent('a'),
    form: r.createAnimatedComponent('form'),
    ul: r.createAnimatedComponent('ul'),
    li: r.createAnimatedComponent('li'),
    g: r.createAnimatedComponent('g'),
    use: r.createAnimatedComponent('use'),
    path: r.createAnimatedComponent('path'),
    section: r.createAnimatedComponent('section'),
    video: r.createAnimatedComponent('video')
};
