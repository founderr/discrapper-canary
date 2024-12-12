r.d(n, {
    I: function () {
        return m;
    },
    O: function () {
        return s;
    }
});
var i = r(259630),
    a = r(647005);
function s(e) {
    if (0 === e.length) throw Error('Number skeleton cannot be empty');
    for (
        var n = e.split(a.r).filter(function (e) {
                return e.length > 0;
            }),
            r = [],
            i = 0,
            s = n;
        i < s.length;
        i++
    ) {
        var o = s[i].split('/');
        if (0 === o.length) throw Error('Invalid number skeleton');
        for (var l = o[0], u = o.slice(1), c = 0, d = u; c < d.length; c++) if (0 === d[c].length) throw Error('Invalid number skeleton');
        r.push({
            stem: l,
            options: u
        });
    }
    return r;
}
function o(e) {
    return e.replace(/^(.*?)-/, '');
}
var l = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
    u = /^(@+)?(\+|#+)?[rs]?$/g,
    c = /(\*)(0+)|(#+)(0+)|(0+)/g,
    d = /^(0+)$/;
function f(e) {
    var n = {};
    return (
        'r' === e[e.length - 1] ? (n.roundingPriority = 'morePrecision') : 's' === e[e.length - 1] && (n.roundingPriority = 'lessPrecision'),
        e.replace(u, function (e, r, i) {
            return 'string' != typeof i ? ((n.minimumSignificantDigits = r.length), (n.maximumSignificantDigits = r.length)) : '+' === i ? (n.minimumSignificantDigits = r.length) : '#' === r[0] ? (n.maximumSignificantDigits = r.length) : ((n.minimumSignificantDigits = r.length), (n.maximumSignificantDigits = r.length + ('string' == typeof i ? i.length : 0))), '';
        }),
        n
    );
}
function _(e) {
    switch (e) {
        case 'sign-auto':
            return { signDisplay: 'auto' };
        case 'sign-accounting':
        case '()':
            return { currencySign: 'accounting' };
        case 'sign-always':
        case '+!':
            return { signDisplay: 'always' };
        case 'sign-accounting-always':
        case '()!':
            return {
                signDisplay: 'always',
                currencySign: 'accounting'
            };
        case 'sign-except-zero':
        case '+?':
            return { signDisplay: 'exceptZero' };
        case 'sign-accounting-except-zero':
        case '()?':
            return {
                signDisplay: 'exceptZero',
                currencySign: 'accounting'
            };
        case 'sign-never':
        case '+_':
            return { signDisplay: 'never' };
    }
}
function h(e) {
    var n;
    if (('E' === e[0] && 'E' === e[1] ? ((n = { notation: 'engineering' }), (e = e.slice(2))) : 'E' === e[0] && ((n = { notation: 'scientific' }), (e = e.slice(1))), n)) {
        var r = e.slice(0, 2);
        if (('+!' === r ? ((n.signDisplay = 'always'), (e = e.slice(2))) : '+?' === r && ((n.signDisplay = 'exceptZero'), (e = e.slice(2))), !d.test(e))) throw Error('Malformed concise eng/scientific notation');
        n.minimumIntegerDigits = e.length;
    }
    return n;
}
function p(e) {
    var n = {},
        r = _(e);
    return r ? r : n;
}
function m(e) {
    for (var n = {}, r = 0, a = e; r < a.length; r++) {
        var s = a[r];
        switch (s.stem) {
            case 'percent':
            case '%':
                n.style = 'percent';
                continue;
            case '%x100':
                (n.style = 'percent'), (n.scale = 100);
                continue;
            case 'currency':
                (n.style = 'currency'), (n.currency = s.options[0]);
                continue;
            case 'group-off':
            case ',_':
                n.useGrouping = !1;
                continue;
            case 'precision-integer':
            case '.':
                n.maximumFractionDigits = 0;
                continue;
            case 'measure-unit':
            case 'unit':
                (n.style = 'unit'), (n.unit = o(s.options[0]));
                continue;
            case 'compact-short':
            case 'K':
                (n.notation = 'compact'), (n.compactDisplay = 'short');
                continue;
            case 'compact-long':
            case 'KK':
                (n.notation = 'compact'), (n.compactDisplay = 'long');
                continue;
            case 'scientific':
                n = (0, i.pi)(
                    (0, i.pi)((0, i.pi)({}, n), { notation: 'scientific' }),
                    s.options.reduce(function (e, n) {
                        return (0, i.pi)((0, i.pi)({}, e), p(n));
                    }, {})
                );
                continue;
            case 'engineering':
                n = (0, i.pi)(
                    (0, i.pi)((0, i.pi)({}, n), { notation: 'engineering' }),
                    s.options.reduce(function (e, n) {
                        return (0, i.pi)((0, i.pi)({}, e), p(n));
                    }, {})
                );
                continue;
            case 'notation-simple':
                n.notation = 'standard';
                continue;
            case 'unit-width-narrow':
                (n.currencyDisplay = 'narrowSymbol'), (n.unitDisplay = 'narrow');
                continue;
            case 'unit-width-short':
                (n.currencyDisplay = 'code'), (n.unitDisplay = 'short');
                continue;
            case 'unit-width-full-name':
                (n.currencyDisplay = 'name'), (n.unitDisplay = 'long');
                continue;
            case 'unit-width-iso-code':
                n.currencyDisplay = 'symbol';
                continue;
            case 'scale':
                n.scale = parseFloat(s.options[0]);
                continue;
            case 'rounding-mode-floor':
                n.roundingMode = 'floor';
                continue;
            case 'rounding-mode-ceiling':
                n.roundingMode = 'ceil';
                continue;
            case 'rounding-mode-down':
                n.roundingMode = 'trunc';
                continue;
            case 'rounding-mode-up':
                n.roundingMode = 'expand';
                continue;
            case 'rounding-mode-half-even':
                n.roundingMode = 'halfEven';
                continue;
            case 'rounding-mode-half-down':
                n.roundingMode = 'halfTrunc';
                continue;
            case 'rounding-mode-half-up':
                n.roundingMode = 'halfExpand';
                continue;
            case 'integer-width':
                if (s.options.length > 1) throw RangeError('integer-width stems only accept a single optional option');
                s.options[0].replace(c, function (e, r, i, a, s, o) {
                    if (r) n.minimumIntegerDigits = i.length;
                    else if (a && s) throw Error('We currently do not support maximum integer digits');
                    else if (o) throw Error('We currently do not support exact integer digits');
                    return '';
                });
                continue;
        }
        if (d.test(s.stem)) {
            n.minimumIntegerDigits = s.stem.length;
            continue;
        }
        if (l.test(s.stem)) {
            if (s.options.length > 1) throw RangeError('Fraction-precision stems only accept a single optional option');
            s.stem.replace(l, function (e, r, i, a, s, o) {
                return '*' === i ? (n.minimumFractionDigits = r.length) : a && '#' === a[0] ? (n.maximumFractionDigits = a.length) : s && o ? ((n.minimumFractionDigits = s.length), (n.maximumFractionDigits = s.length + o.length)) : ((n.minimumFractionDigits = r.length), (n.maximumFractionDigits = r.length)), '';
            });
            var m = s.options[0];
            'w' === m ? (n = (0, i.pi)((0, i.pi)({}, n), { trailingZeroDisplay: 'stripIfInteger' })) : m && (n = (0, i.pi)((0, i.pi)({}, n), f(m)));
            continue;
        }
        if (u.test(s.stem)) {
            n = (0, i.pi)((0, i.pi)({}, n), f(s.stem));
            continue;
        }
        var g = _(s.stem);
        g && (n = (0, i.pi)((0, i.pi)({}, n), g));
        var E = h(s.stem);
        E && (n = (0, i.pi)((0, i.pi)({}, n), E));
    }
    return n;
}
