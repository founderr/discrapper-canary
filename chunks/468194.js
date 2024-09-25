n.d(t, {
    De: function () {
        return s;
    },
    Fv: function () {
        return E;
    },
    Mg: function () {
        return c;
    },
    Zg: function () {
        return u;
    },
    _I: function () {
        return d;
    },
    aF: function () {
        return l;
    }
});
var r = n(47120);
var i = n(757143);
let a = /[\u0300-\u036f]/g,
    o = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
function s(e) {
    return null == e ? '' : ''.concat(e.charAt(0).toUpperCase()).concat(e.slice(1));
}
let l = function (e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '\u2026';
    if (null == e || null == t) return '';
    if (e.length > t) {
        let r = o.test(e) ? [...e].slice(0, t - n.length).join('') : e.substring(0, t - n.length);
        return ''.concat(r.replace(/[\s.]+$/, '')).concat(n);
    }
    return e;
};
function u(e) {
    return null != e
        ? e
              .replace(/'s /g, ' ')
              .replace(/\w+/g, (e) => e[0])
              .replace(/\s/g, '')
        : '';
}
function c(e) {
    let t = parseInt(e, 10);
    return isNaN(t) ? 0 : t;
}
let d = null == String.prototype.normalize ? (e) => e : (e) => e.normalize('NFD').replace(a, '').normalize('NFC');
function _(e) {
    let t = n(510085),
        r = '';
    return (
        [...e.normalize('NFD')].forEach((e) => {
            var n;
            r += null !== (n = t[e]) && void 0 !== n ? n : e;
        }),
        r.normalize('NFD').toLocaleLowerCase()
    );
}
let E = null == String.prototype.normalize ? (e) => e : _;
