n.d(o, {
    De: function () {
        return i;
    },
    Fv: function () {
        return a;
    },
    Mg: function () {
        return e;
    },
    Zg: function () {
        return u;
    },
    _I: function () {
        return c;
    },
    aF: function () {
        return t;
    }
}),
    n(47120),
    n(757143);
let r = /[\u0300-\u036f]/g,
    O = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
function i(l) {
    return null == l ? '' : ''.concat(l.charAt(0).toUpperCase()).concat(l.slice(1));
}
let t = function (l, o) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '\u2026';
    if (null == l || null == o) return '';
    if (l.length > o) {
        let r = O.test(l) ? [...l].slice(0, o - n.length).join('') : l.substring(0, o - n.length);
        return ''.concat(r.replace(/[\s.]+$/, '')).concat(n);
    }
    return l;
};
function u(l) {
    return null != l
        ? l
              .replace(/'s /g, ' ')
              .replace(/\w+/g, (l) => l[0])
              .replace(/\s/g, '')
        : '';
}
function e(l) {
    let o = parseInt(l, 10);
    return isNaN(o) ? 0 : o;
}
let c = null == String.prototype.normalize ? (l) => l : (l) => l.normalize('NFD').replace(r, '').normalize('NFC'),
    a =
        null == String.prototype.normalize
            ? (l) => l
            : function (l) {
                  let o = n(510085),
                      r = '';
                  return (
                      [...l.normalize('NFD')].forEach((l) => {
                          var n;
                          r += null !== (n = o[l]) && void 0 !== n ? n : l;
                      }),
                      r.normalize('NFD').toLocaleLowerCase()
                  );
              };
