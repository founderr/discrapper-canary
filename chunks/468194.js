n.d(t, {
    De: function () {
        return a;
    },
    Fv: function () {
        return c;
    },
    Mg: function () {
        return l;
    },
    Zg: function () {
        return o;
    },
    _I: function () {
        return u;
    },
    aF: function () {
        return s;
    }
}),
    n(47120),
    n(757143);
let r = /[\u0300-\u036f]/g,
    i = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
function a(e) {
    return null == e ? '' : ''.concat(e.charAt(0).toUpperCase()).concat(e.slice(1));
}
let s = function (e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '\u2026';
    if (null == e || null == t) return '';
    if (e.length > t) {
        let r = i.test(e) ? [...e].slice(0, t - n.length).join('') : e.substring(0, t - n.length);
        return ''.concat(r.replace(/[\s.]+$/, '')).concat(n);
    }
    return e;
};
function o(e) {
    return null != e
        ? e
              .replace(/'s /g, ' ')
              .replace(/\w+/g, (e) => e[0])
              .replace(/\s/g, '')
        : '';
}
function l(e) {
    let t = parseInt(e, 10);
    return isNaN(t) ? 0 : t;
}
let u = null == String.prototype.normalize ? (e) => e : (e) => e.normalize('NFD').replace(r, '').normalize('NFC'),
    c =
        null == String.prototype.normalize
            ? (e) => e
            : function (e) {
                  let t = n(510085),
                      r = '';
                  return (
                      [...e.normalize('NFD')].forEach((e) => {
                          var n;
                          r += null !== (n = t[e]) && void 0 !== n ? n : e;
                      }),
                      r.normalize('NFD').toLocaleLowerCase()
                  );
              };
