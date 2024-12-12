r.d(n, {
    F9: function () {
        return l;
    },
    G6: function () {
        return d;
    },
    JC: function () {
        return u;
    },
    yv: function () {
        return c;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(918701),
    o = r(388032);
let l = (e) => {
        let n = (0, s.si)(e);
        return e.percentComplete > 0 ? o.intl.formatToPlainString(o.t['c59/Tk'], { remainTime: ''.concat(String(n.minutes).padStart(2, '0'), ':').concat(String(n.seconds).padStart(2, '0')) }) : o.intl.formatToPlainString(o.t.GNsKiY, { remainTime: ''.concat(String(n.minutes).padStart(2, '0'), ':').concat(String(n.seconds).padStart(2, '0')) });
    },
    u = (e) => null != e.text;
function c(e) {
    let n = 0 | Math.round(e),
        r = n % 60;
    return ''.concat((n - r) / 60, ':').concat(String(r).padStart(2, '0'));
}
function d(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2000,
        [i, s] = (0, a.useState)(e),
        o = (0, a.useRef)(null),
        l = () => {
            s(n),
                null != o.current && clearTimeout(o.current),
                (o.current = setTimeout(() => {
                    s(e);
                }, r));
        };
    return (
        (0, a.useEffect)(
            () => () => {
                null != o.current && clearTimeout(o.current);
            },
            [e]
        ),
        [i, l]
    );
}
