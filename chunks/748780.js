var r = n(653041);
var i = n(269054);
var a = n(217209),
    o = n.n(a),
    s = n(78650),
    l = n.n(s),
    u = n(505444),
    c = n.n(u);
function d(e) {
    let t = Object.keys(e)[0];
    return ''.concat(t, '(').concat(e[t], ')');
}
let _ = /rgba\(([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+)\)/;
function E(e) {
    let t = e.match(_);
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
function f(e) {
    return e && (e.transform && (e.transform = e.WebkitTransform = e.MozTransform = e.transform.map(d).join(' ')), e.color && (e.color = E(e.color)), e.backgroundColor && (e.backgroundColor = E(e.backgroundColor))), e;
}
function h(e, t, n) {
    if (e.setNativeProps) e.setNativeProps(t);
    else {
        if (!e.nodeType || void 0 === e.setAttribute) return !1;
        c().setValueForStyles(e, f(t.style), n._reactInternalInstance);
    }
}
function p(e) {
    return (e.transform = e.transform || []), e.transform.push({ translateZ: 0 }), e;
}
function m(e, t, n) {
    return void 0 !== t && void 0 != n ? l()(t, n) : e;
}
function I(e, t) {
    let n;
    let { toValueMin: r, toValueMax: a, tension: o = 0, friction: s = 0, loop: l, reverse: u, invert: c, callback: d, type: _ = 'spring', shouldLoop: E, durationMin: f, durationMax: h, ...p } = t,
        T = e._value,
        g = m(t.duration, f, h),
        S = m(t.toValue, r, a),
        A = i[_](e, {
            ...p,
            toValue: S,
            tension: o,
            friction: s,
            duration: g
        }),
        v = A;
    if (u || c) {
        let r = m(t.duration, f, h);
        (n = i[_](e, {
            ...p,
            toValue: u ? T : -S,
            tension: o,
            friction: s,
            duration: r
        })),
            (v = i.sequence([A, n]));
    }
    l
        ? v.start(() => {
              (!E || (E && E())) && (d ? d(I.bind(null, e, t)) : I(e, t));
          })
        : v.start(d);
}
function T(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return e.interpolate({
        inputRange: [0, 1],
        outputRange: n
    });
}
i.inject.ApplyAnimatedValues(h, (e) => e);
let g = { CLAMP: 'clamp' };
t.Z = {
    ...i,
    Easing: o(),
    accelerate: p,
    animate: I,
    interpolate: T,
    Extrapolate: g,
    div: i.createAnimatedComponent('div'),
    span: i.createAnimatedComponent('span'),
    img: i.createAnimatedComponent('img'),
    a: i.createAnimatedComponent('a'),
    form: i.createAnimatedComponent('form'),
    ul: i.createAnimatedComponent('ul'),
    li: i.createAnimatedComponent('li'),
    g: i.createAnimatedComponent('g'),
    use: i.createAnimatedComponent('use'),
    path: i.createAnimatedComponent('path'),
    section: i.createAnimatedComponent('section'),
    video: i.createAnimatedComponent('video')
};
