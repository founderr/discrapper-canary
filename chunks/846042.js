r.d(n, {
    DA: function () {
        return l;
    },
    Db: function () {
        return d;
    },
    RQ: function () {
        return f;
    },
    WG: function () {
        return _;
    },
    ZL: function () {
        return c;
    },
    ie: function () {
        return o;
    },
    jg: function () {
        return s;
    },
    kT: function () {
        return h;
    },
    n8: function () {
        return u;
    }
});
var i = r(250327),
    a = r(25487);
function s(e, n) {
    return e
        ? {
              value: n(e.value),
              rest: e.rest
          }
        : e;
}
function o(e, n) {
    var r = n.match(e);
    return r
        ? {
              value: parseInt(r[0], 10),
              rest: n.slice(r[0].length)
          }
        : null;
}
function l(e, n) {
    var r = n.match(e);
    if (!r) return null;
    if ('Z' === r[0])
        return {
            value: 0,
            rest: n.slice(1)
        };
    var a = '+' === r[1] ? 1 : -1,
        s = r[2] ? parseInt(r[2], 10) : 0,
        o = r[3] ? parseInt(r[3], 10) : 0,
        l = r[5] ? parseInt(r[5], 10) : 0;
    return {
        value: a * (s * i.vh + o * i.yJ + l * i.qk),
        rest: n.slice(r[0].length)
    };
}
function u(e) {
    return o(a.z.anyDigitsSigned, e);
}
function c(e, n) {
    switch (e) {
        case 1:
            return o(a.z.singleDigit, n);
        case 2:
            return o(a.z.twoDigits, n);
        case 3:
            return o(a.z.threeDigits, n);
        case 4:
            return o(a.z.fourDigits, n);
        default:
            return o(RegExp('^\\d{1,' + e + '}'), n);
    }
}
function d(e, n) {
    switch (e) {
        case 1:
            return o(a.z.singleDigitSigned, n);
        case 2:
            return o(a.z.twoDigitsSigned, n);
        case 3:
            return o(a.z.threeDigitsSigned, n);
        case 4:
            return o(a.z.fourDigitsSigned, n);
        default:
            return o(RegExp('^-?\\d{1,' + e + '}'), n);
    }
}
function f(e) {
    switch (e) {
        case 'morning':
            return 4;
        case 'evening':
            return 17;
        case 'pm':
        case 'noon':
        case 'afternoon':
            return 12;
        default:
            return 0;
    }
}
function _(e, n) {
    var r,
        i = n > 0,
        a = i ? n : 1 - n;
    if (a <= 50) r = e || 100;
    else {
        var s = a + 50,
            o = 100 * Math.floor(s / 100),
            l = e >= s % 100;
        r = e + o - (l ? 100 : 0);
    }
    return i ? r : 1 - r;
}
function h(e) {
    return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
}
