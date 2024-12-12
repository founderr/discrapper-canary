var i = r(653041);
var a = r(371193);
var s = r(501501),
    o = r.n(s),
    l = r(78650),
    u = r.n(l),
    c = r(505444),
    d = r.n(c);
function f(e) {
    let n = Object.keys(e)[0];
    return ''.concat(n, '(').concat(e[n], ')');
}
let _ = /rgba\(([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+)\)/;
function h(e) {
    let n = e.match(_);
    return (
        null != n &&
            (e = 'rgba('
                .concat(0 | n[1], ', ')
                .concat(0 | n[2], ', ')
                .concat(0 | n[3], ', ')
                .concat(n[4], ')')),
        e
    );
}
function p(e) {
    return e && (e.transform && (e.transform = e.WebkitTransform = e.MozTransform = e.transform.map(f).join(' ')), e.color && (e.color = h(e.color)), e.backgroundColor && (e.backgroundColor = h(e.backgroundColor))), e;
}
function m(e, n, r) {
    if (e.setNativeProps) e.setNativeProps(n);
    else {
        if (!e.nodeType || void 0 === e.setAttribute) return !1;
        d().setValueForStyles(e, p(n.style), r._reactInternalInstance);
    }
}
function g(e) {
    return (e.transform = e.transform || []), e.transform.push({ translateZ: 0 }), e;
}
function E(e, n, r) {
    return void 0 !== n && void 0 != r ? u()(n, r) : e;
}
function v(e, n) {
    let r;
    let { toValueMin: i, toValueMax: s, tension: o = 0, friction: l = 0, loop: u, reverse: c, invert: d, callback: f, type: _ = 'spring', shouldLoop: h, durationMin: p, durationMax: m, ...g } = n,
        I = e._value,
        T = E(n.duration, p, m),
        b = E(n.toValue, i, s),
        y = a[_](e, {
            ...g,
            toValue: b,
            tension: o,
            friction: l,
            duration: T
        }),
        S = y;
    if (c || d) {
        let i = E(n.duration, p, m);
        (r = a[_](e, {
            ...g,
            toValue: c ? I : -b,
            tension: o,
            friction: l,
            duration: i
        })),
            (S = a.sequence([y, r]));
    }
    u
        ? S.start(() => {
              (!h || (h && h())) && (f ? f(v.bind(null, e, n)) : v(e, n));
          })
        : S.start(f);
}
function I(e) {
    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
    return e.interpolate({
        inputRange: [0, 1],
        outputRange: r
    });
}
a.inject.ApplyAnimatedValues(m, (e) => e);
let T = { CLAMP: 'clamp' };
n.Z = {
    ...a,
    Easing: o(),
    accelerate: g,
    animate: v,
    interpolate: I,
    Extrapolate: T,
    div: a.createAnimatedComponent('div'),
    span: a.createAnimatedComponent('span'),
    img: a.createAnimatedComponent('img'),
    a: a.createAnimatedComponent('a'),
    form: a.createAnimatedComponent('form'),
    ul: a.createAnimatedComponent('ul'),
    li: a.createAnimatedComponent('li'),
    g: a.createAnimatedComponent('g'),
    use: a.createAnimatedComponent('use'),
    path: a.createAnimatedComponent('path'),
    section: a.createAnimatedComponent('section'),
    video: a.createAnimatedComponent('video')
};
