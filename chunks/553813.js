var r,
    i = n(444675);
(t = e.exports = g),
    (r =
        'object' == typeof i && i.env && i.env.NODE_DEBUG && /\bsemver\b/i.test(i.env.NODE_DEBUG)
            ? function () {
                  var e = Array.prototype.slice.call(arguments, 0);
                  e.unshift('SEMVER'), console.log.apply(console, e);
              }
            : function () {}),
    (t.SEMVER_SPEC_VERSION = '2.0.0');
var a = 256,
    o = Number.MAX_SAFE_INTEGER || 9007199254740991,
    s = 16,
    l = (t.re = []),
    u = (t.src = []),
    c = (t.tokens = {}),
    d = 0;
function _(e) {
    c[e] = d++;
}
_('NUMERICIDENTIFIER'), (u[c.NUMERICIDENTIFIER] = '0|[1-9]\\d*'), _('NUMERICIDENTIFIERLOOSE'), (u[c.NUMERICIDENTIFIERLOOSE] = '[0-9]+'), _('NONNUMERICIDENTIFIER'), (u[c.NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*'), _('MAINVERSION'), (u[c.MAINVERSION] = '(' + u[c.NUMERICIDENTIFIER] + ')\\.(' + u[c.NUMERICIDENTIFIER] + ')\\.(' + u[c.NUMERICIDENTIFIER] + ')'), _('MAINVERSIONLOOSE'), (u[c.MAINVERSIONLOOSE] = '(' + u[c.NUMERICIDENTIFIERLOOSE] + ')\\.(' + u[c.NUMERICIDENTIFIERLOOSE] + ')\\.(' + u[c.NUMERICIDENTIFIERLOOSE] + ')'), _('PRERELEASEIDENTIFIER'), (u[c.PRERELEASEIDENTIFIER] = '(?:' + u[c.NUMERICIDENTIFIER] + '|' + u[c.NONNUMERICIDENTIFIER] + ')'), _('PRERELEASEIDENTIFIERLOOSE'), (u[c.PRERELEASEIDENTIFIERLOOSE] = '(?:' + u[c.NUMERICIDENTIFIERLOOSE] + '|' + u[c.NONNUMERICIDENTIFIER] + ')'), _('PRERELEASE'), (u[c.PRERELEASE] = '(?:-(' + u[c.PRERELEASEIDENTIFIER] + '(?:\\.' + u[c.PRERELEASEIDENTIFIER] + ')*))'), _('PRERELEASELOOSE'), (u[c.PRERELEASELOOSE] = '(?:-?(' + u[c.PRERELEASEIDENTIFIERLOOSE] + '(?:\\.' + u[c.PRERELEASEIDENTIFIERLOOSE] + ')*))'), _('BUILDIDENTIFIER'), (u[c.BUILDIDENTIFIER] = '[0-9A-Za-z-]+'), _('BUILD'), (u[c.BUILD] = '(?:\\+(' + u[c.BUILDIDENTIFIER] + '(?:\\.' + u[c.BUILDIDENTIFIER] + ')*))'), _('FULL'), _('FULLPLAIN'), (u[c.FULLPLAIN] = 'v?' + u[c.MAINVERSION] + u[c.PRERELEASE] + '?' + u[c.BUILD] + '?'), (u[c.FULL] = '^' + u[c.FULLPLAIN] + '$'), _('LOOSEPLAIN'), (u[c.LOOSEPLAIN] = '[v=\\s]*' + u[c.MAINVERSIONLOOSE] + u[c.PRERELEASELOOSE] + '?' + u[c.BUILD] + '?'), _('LOOSE'), (u[c.LOOSE] = '^' + u[c.LOOSEPLAIN] + '$'), _('GTLT'), (u[c.GTLT] = '((?:<|>)?=?)'), _('XRANGEIDENTIFIERLOOSE'), (u[c.XRANGEIDENTIFIERLOOSE] = u[c.NUMERICIDENTIFIERLOOSE] + '|x|X|\\*'), _('XRANGEIDENTIFIER'), (u[c.XRANGEIDENTIFIER] = u[c.NUMERICIDENTIFIER] + '|x|X|\\*'), _('XRANGEPLAIN'), (u[c.XRANGEPLAIN] = '[v=\\s]*(' + u[c.XRANGEIDENTIFIER] + ')(?:\\.(' + u[c.XRANGEIDENTIFIER] + ')(?:\\.(' + u[c.XRANGEIDENTIFIER] + ')(?:' + u[c.PRERELEASE] + ')?' + u[c.BUILD] + '?)?)?'), _('XRANGEPLAINLOOSE'), (u[c.XRANGEPLAINLOOSE] = '[v=\\s]*(' + u[c.XRANGEIDENTIFIERLOOSE] + ')(?:\\.(' + u[c.XRANGEIDENTIFIERLOOSE] + ')(?:\\.(' + u[c.XRANGEIDENTIFIERLOOSE] + ')(?:' + u[c.PRERELEASELOOSE] + ')?' + u[c.BUILD] + '?)?)?'), _('XRANGE'), (u[c.XRANGE] = '^' + u[c.GTLT] + '\\s*' + u[c.XRANGEPLAIN] + '$'), _('XRANGELOOSE'), (u[c.XRANGELOOSE] = '^' + u[c.GTLT] + '\\s*' + u[c.XRANGEPLAINLOOSE] + '$'), _('COERCE'), (u[c.COERCE] = '(^|[^\\d])(\\d{1,' + s + '})(?:\\.(\\d{1,' + s + '}))?(?:\\.(\\d{1,' + s + '}))?(?:$|[^\\d])'), _('COERCERTL'), (l[c.COERCERTL] = RegExp(u[c.COERCE], 'g')), _('LONETILDE'), (u[c.LONETILDE] = '(?:~>?)'), _('TILDETRIM'), (u[c.TILDETRIM] = '(\\s*)' + u[c.LONETILDE] + '\\s+'), (l[c.TILDETRIM] = RegExp(u[c.TILDETRIM], 'g'));
var E = '$1~';
_('TILDE'), (u[c.TILDE] = '^' + u[c.LONETILDE] + u[c.XRANGEPLAIN] + '$'), _('TILDELOOSE'), (u[c.TILDELOOSE] = '^' + u[c.LONETILDE] + u[c.XRANGEPLAINLOOSE] + '$'), _('LONECARET'), (u[c.LONECARET] = '(?:\\^)'), _('CARETTRIM'), (u[c.CARETTRIM] = '(\\s*)' + u[c.LONECARET] + '\\s+'), (l[c.CARETTRIM] = RegExp(u[c.CARETTRIM], 'g'));
var f = '$1^';
_('CARET'), (u[c.CARET] = '^' + u[c.LONECARET] + u[c.XRANGEPLAIN] + '$'), _('CARETLOOSE'), (u[c.CARETLOOSE] = '^' + u[c.LONECARET] + u[c.XRANGEPLAINLOOSE] + '$'), _('COMPARATORLOOSE'), (u[c.COMPARATORLOOSE] = '^' + u[c.GTLT] + '\\s*(' + u[c.LOOSEPLAIN] + ')$|^$'), _('COMPARATOR'), (u[c.COMPARATOR] = '^' + u[c.GTLT] + '\\s*(' + u[c.FULLPLAIN] + ')$|^$'), _('COMPARATORTRIM'), (u[c.COMPARATORTRIM] = '(\\s*)' + u[c.GTLT] + '\\s*(' + u[c.LOOSEPLAIN] + '|' + u[c.XRANGEPLAIN] + ')'), (l[c.COMPARATORTRIM] = RegExp(u[c.COMPARATORTRIM], 'g'));
var h = '$1$2$3';
_('HYPHENRANGE'), (u[c.HYPHENRANGE] = '^\\s*(' + u[c.XRANGEPLAIN] + ')\\s+-\\s+(' + u[c.XRANGEPLAIN] + ')\\s*$'), _('HYPHENRANGELOOSE'), (u[c.HYPHENRANGELOOSE] = '^\\s*(' + u[c.XRANGEPLAINLOOSE] + ')\\s+-\\s+(' + u[c.XRANGEPLAINLOOSE] + ')\\s*$'), _('STAR'), (u[c.STAR] = '(<|>)?=?\\s*\\*');
for (var p = 0; p < d; p++) r(p, u[p]), !l[p] && (l[p] = new RegExp(u[p]));
function m(e, t) {
    if (
        ((!t || 'object' != typeof t) &&
            (t = {
                loose: !!t,
                includePrerelease: !1
            }),
        e instanceof g)
    )
        return e;
    if ('string' != typeof e || e.length > a || !(t.loose ? l[c.LOOSE] : l[c.FULL]).test(e)) return null;
    try {
        return new g(e, t);
    } catch (e) {
        return null;
    }
}
function I(e, t) {
    var n = m(e, t);
    return n ? n.version : null;
}
function T(e, t) {
    var n = m(e.trim().replace(/^[=v]+/, ''), t);
    return n ? n.version : null;
}
function g(e, t) {
    if (
        ((!t || 'object' != typeof t) &&
            (t = {
                loose: !!t,
                includePrerelease: !1
            }),
        e instanceof g)
    ) {
        if (e.loose === t.loose) return e;
        e = e.version;
    } else if ('string' != typeof e) throw TypeError('Invalid Version: ' + e);
    if (e.length > a) throw TypeError('version is longer than ' + a + ' characters');
    if (!(this instanceof g)) return new g(e, t);
    r('SemVer', e, t), (this.options = t), (this.loose = !!t.loose);
    var n = e.trim().match(t.loose ? l[c.LOOSE] : l[c.FULL]);
    if (!n) throw TypeError('Invalid Version: ' + e);
    if (((this.raw = e), (this.major = +n[1]), (this.minor = +n[2]), (this.patch = +n[3]), this.major > o || this.major < 0)) throw TypeError('Invalid major version');
    if (this.minor > o || this.minor < 0) throw TypeError('Invalid minor version');
    if (this.patch > o || this.patch < 0) throw TypeError('Invalid patch version');
    n[4]
        ? (this.prerelease = n[4].split('.').map(function (e) {
              if (/^[0-9]+$/.test(e)) {
                  var t = +e;
                  if (t >= 0 && t < o) return t;
              }
              return e;
          }))
        : (this.prerelease = []),
        (this.build = n[5] ? n[5].split('.') : []),
        this.format();
}
function S(e, t, n, r) {
    'string' == typeof n && ((r = n), (n = void 0));
    try {
        return new g(e, n).inc(t, r).version;
    } catch (e) {
        return null;
    }
}
function A(e, t) {
    if (G(e, t)) return null;
    var n = m(e),
        r = m(t),
        i = '';
    if (n.prerelease.length || r.prerelease.length) {
        i = 'pre';
        var a = 'prerelease';
    }
    for (var o in n) if (('major' === o || 'minor' === o || 'patch' === o) && n[o] !== r[o]) return i + o;
    return a;
}
(t.parse = m),
    (t.valid = I),
    (t.clean = T),
    (t.SemVer = g),
    (g.prototype.format = function () {
        return (this.version = this.major + '.' + this.minor + '.' + this.patch), this.prerelease.length && (this.version += '-' + this.prerelease.join('.')), this.version;
    }),
    (g.prototype.toString = function () {
        return this.version;
    }),
    (g.prototype.compare = function (e) {
        return r('SemVer.compare', this.version, this.options, e), !(e instanceof g) && (e = new g(e, this.options)), this.compareMain(e) || this.comparePre(e);
    }),
    (g.prototype.compareMain = function (e) {
        return !(e instanceof g) && (e = new g(e, this.options)), N(this.major, e.major) || N(this.minor, e.minor) || N(this.patch, e.patch);
    }),
    (g.prototype.comparePre = function (e) {
        if ((!(e instanceof g) && (e = new g(e, this.options)), this.prerelease.length && !e.prerelease.length)) return -1;
        if (!this.prerelease.length && e.prerelease.length) return 1;
        if (!this.prerelease.length && !e.prerelease.length) return 0;
        var t = 0;
        do {
            var n = this.prerelease[t],
                i = e.prerelease[t];
            if ((r('prerelease compare', t, n, i), void 0 === n && void 0 === i)) return 0;
            if (void 0 === i) return 1;
            else if (void 0 === n) return -1;
            else if (n === i) continue;
            else return N(n, i);
        } while (++t);
    }),
    (g.prototype.compareBuild = function (e) {
        !(e instanceof g) && (e = new g(e, this.options));
        var t = 0;
        do {
            var n = this.build[t],
                i = e.build[t];
            if ((r('prerelease compare', t, n, i), void 0 === n && void 0 === i)) return 0;
            if (void 0 === i) return 1;
            else if (void 0 === n) return -1;
            else if (n === i) continue;
            else return N(n, i);
        } while (++t);
    }),
    (g.prototype.inc = function (e, t) {
        switch (e) {
            case 'premajor':
                (this.prerelease.length = 0), (this.patch = 0), (this.minor = 0), this.major++, this.inc('pre', t);
                break;
            case 'preminor':
                (this.prerelease.length = 0), (this.patch = 0), this.minor++, this.inc('pre', t);
                break;
            case 'prepatch':
                (this.prerelease.length = 0), this.inc('patch', t), this.inc('pre', t);
                break;
            case 'prerelease':
                0 === this.prerelease.length && this.inc('patch', t), this.inc('pre', t);
                break;
            case 'major':
                (0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++, (this.minor = 0), (this.patch = 0), (this.prerelease = []);
                break;
            case 'minor':
                (0 !== this.patch || 0 === this.prerelease.length) && this.minor++, (this.patch = 0), (this.prerelease = []);
                break;
            case 'patch':
                0 === this.prerelease.length && this.patch++, (this.prerelease = []);
                break;
            case 'pre':
                if (0 === this.prerelease.length) this.prerelease = [0];
                else {
                    for (var n = this.prerelease.length; --n >= 0; ) 'number' == typeof this.prerelease[n] && (this.prerelease[n]++, (n = -2));
                    -1 === n && this.prerelease.push(0);
                }
                t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : (this.prerelease = [t, 0]));
                break;
            default:
                throw Error('invalid increment argument: ' + e);
        }
        return this.format(), (this.raw = this.version), this;
    }),
    (t.inc = S),
    (t.diff = A),
    (t.compareIdentifiers = N);
var v = /^[0-9]+$/;
function N(e, t) {
    var n = v.test(e),
        r = v.test(t);
    return n && r && ((e = +e), (t = +t)), e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1;
}
function O(e, t) {
    return N(t, e);
}
function R(e, t) {
    return new g(e, t).major;
}
function C(e, t) {
    return new g(e, t).minor;
}
function y(e, t) {
    return new g(e, t).patch;
}
function b(e, t, n) {
    return new g(e, n).compare(new g(t, n));
}
function L(e, t) {
    return b(e, t, !0);
}
function D(e, t, n) {
    var r = new g(e, n),
        i = new g(t, n);
    return r.compare(i) || r.compareBuild(i);
}
function M(e, t, n) {
    return b(t, e, n);
}
function P(e, n) {
    return e.sort(function (e, r) {
        return t.compareBuild(e, r, n);
    });
}
function U(e, n) {
    return e.sort(function (e, r) {
        return t.compareBuild(r, e, n);
    });
}
function w(e, t, n) {
    return b(e, t, n) > 0;
}
function x(e, t, n) {
    return 0 > b(e, t, n);
}
function G(e, t, n) {
    return 0 === b(e, t, n);
}
function k(e, t, n) {
    return 0 !== b(e, t, n);
}
function B(e, t, n) {
    return b(e, t, n) >= 0;
}
function F(e, t, n) {
    return 0 >= b(e, t, n);
}
function Z(e, t, n, r) {
    switch (t) {
        case '===':
            return 'object' == typeof e && (e = e.version), 'object' == typeof n && (n = n.version), e === n;
        case '!==':
            return 'object' == typeof e && (e = e.version), 'object' == typeof n && (n = n.version), e !== n;
        case '':
        case '=':
        case '==':
            return G(e, n, r);
        case '!=':
            return k(e, n, r);
        case '>':
            return w(e, n, r);
        case '>=':
            return B(e, n, r);
        case '<':
            return x(e, n, r);
        case '<=':
            return F(e, n, r);
        default:
            throw TypeError('Invalid operator: ' + t);
    }
}
function V(e, t) {
    if (
        ((!t || 'object' != typeof t) &&
            (t = {
                loose: !!t,
                includePrerelease: !1
            }),
        e instanceof V)
    ) {
        if (!!t.loose === e.loose) return e;
        e = e.value;
    }
    if (!(this instanceof V)) return new V(e, t);
    r('comparator', e, t), (this.options = t), (this.loose = !!t.loose), this.parse(e), this.semver === H ? (this.value = '') : (this.value = this.operator + this.semver.version), r('comp', this);
}
(t.rcompareIdentifiers = O), (t.major = R), (t.minor = C), (t.patch = y), (t.compare = b), (t.compareLoose = L), (t.compareBuild = D), (t.rcompare = M), (t.sort = P), (t.rsort = U), (t.gt = w), (t.lt = x), (t.eq = G), (t.neq = k), (t.gte = B), (t.lte = F), (t.cmp = Z), (t.Comparator = V);
var H = {};
function Y(e, t) {
    if (
        ((!t || 'object' != typeof t) &&
            (t = {
                loose: !!t,
                includePrerelease: !1
            }),
        e instanceof Y)
    )
        return !!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease ? e : new Y(e.raw, t);
    if (e instanceof V) return new Y(e.value, t);
    if (!(this instanceof Y)) return new Y(e, t);
    if (
        ((this.options = t),
        (this.loose = !!t.loose),
        (this.includePrerelease = !!t.includePrerelease),
        (this.raw = e),
        (this.set = e
            .split(/\s*\|\|\s*/)
            .map(function (e) {
                return this.parseRange(e.trim());
            }, this)
            .filter(function (e) {
                return e.length;
            })),
        !this.set.length)
    )
        throw TypeError('Invalid SemVer Range: ' + e);
    this.format();
}
function j(e, t) {
    for (var n = !0, r = e.slice(), i = r.pop(); n && r.length; )
        (n = r.every(function (e) {
            return i.intersects(e, t);
        })),
            (i = r.pop());
    return n;
}
function W(e, t) {
    return new Y(e, t).set.map(function (e) {
        return e
            .map(function (e) {
                return e.value;
            })
            .join(' ')
            .trim()
            .split(' ');
    });
}
function K(e, t) {
    return r('comp', e, t), (e = X(e, t)), r('caret', e), (e = q(e, t)), r('tildes', e), (e = J(e, t)), r('xrange', e), (e = et(e, t)), r('stars', e), e;
}
function z(e) {
    return !e || 'x' === e.toLowerCase() || '*' === e;
}
function q(e, t) {
    return e
        .trim()
        .split(/\s+/)
        .map(function (e) {
            return Q(e, t);
        })
        .join(' ');
}
function Q(e, t) {
    var n = t.loose ? l[c.TILDELOOSE] : l[c.TILDE];
    return e.replace(n, function (t, n, i, a, o) {
        var s;
        return r('tilde', e, t, n, i, a, o), z(n) ? (s = '') : z(i) ? (s = '>=' + n + '.0.0 <' + (+n + 1) + '.0.0') : z(a) ? (s = '>=' + n + '.' + i + '.0 <' + n + '.' + (+i + 1) + '.0') : o ? (r('replaceTilde pr', o), (s = '>=' + n + '.' + i + '.' + a + '-' + o + ' <' + n + '.' + (+i + 1) + '.0')) : (s = '>=' + n + '.' + i + '.' + a + ' <' + n + '.' + (+i + 1) + '.0'), r('tilde return', s), s;
    });
}
function X(e, t) {
    return e
        .trim()
        .split(/\s+/)
        .map(function (e) {
            return $(e, t);
        })
        .join(' ');
}
function $(e, t) {
    r('caret', e, t);
    var n = t.loose ? l[c.CARETLOOSE] : l[c.CARET];
    return e.replace(n, function (t, n, i, a, o) {
        var s;
        return r('caret', e, t, n, i, a, o), z(n) ? (s = '') : z(i) ? (s = '>=' + n + '.0.0 <' + (+n + 1) + '.0.0') : z(a) ? (s = '0' === n ? '>=' + n + '.' + i + '.0 <' + n + '.' + (+i + 1) + '.0' : '>=' + n + '.' + i + '.0 <' + (+n + 1) + '.0.0') : o ? (r('replaceCaret pr', o), (s = '0' === n ? ('0' === i ? '>=' + n + '.' + i + '.' + a + '-' + o + ' <' + n + '.' + i + '.' + (+a + 1) : '>=' + n + '.' + i + '.' + a + '-' + o + ' <' + n + '.' + (+i + 1) + '.0') : '>=' + n + '.' + i + '.' + a + '-' + o + ' <' + (+n + 1) + '.0.0')) : (r('no pr'), (s = '0' === n ? ('0' === i ? '>=' + n + '.' + i + '.' + a + ' <' + n + '.' + i + '.' + (+a + 1) : '>=' + n + '.' + i + '.' + a + ' <' + n + '.' + (+i + 1) + '.0') : '>=' + n + '.' + i + '.' + a + ' <' + (+n + 1) + '.0.0')), r('caret return', s), s;
    });
}
function J(e, t) {
    return (
        r('replaceXRanges', e, t),
        e
            .split(/\s+/)
            .map(function (e) {
                return ee(e, t);
            })
            .join(' ')
    );
}
function ee(e, t) {
    e = e.trim();
    var n = t.loose ? l[c.XRANGELOOSE] : l[c.XRANGE];
    return e.replace(n, function (n, i, a, o, s, l) {
        r('xRange', e, n, i, a, o, s, l);
        var u = z(a),
            c = u || z(o),
            d = c || z(s),
            _ = d;
        return '=' === i && _ && (i = ''), (l = t.includePrerelease ? '-0' : ''), u ? (n = '>' === i || '<' === i ? '<0.0.0-0' : '*') : i && _ ? (c && (o = 0), (s = 0), '>' === i ? ((i = '>='), c ? ((a = +a + 1), (o = 0)) : (o = +o + 1), (s = 0)) : '<=' === i && ((i = '<'), c ? (a = +a + 1) : (o = +o + 1)), (n = i + a + '.' + o + '.' + s + l)) : c ? (n = '>=' + a + '.0.0' + l + ' <' + (+a + 1) + '.0.0' + l) : d && (n = '>=' + a + '.' + o + '.0' + l + ' <' + a + '.' + (+o + 1) + '.0' + l), r('xRange return', n), n;
    });
}
function et(e, t) {
    return r('replaceStars', e, t), e.trim().replace(l[c.STAR], '');
}
function en(e, t, n, r, i, a, o, s, l, u, c, d, _) {
    return (t = z(n) ? '' : z(r) ? '>=' + n + '.0.0' : z(i) ? '>=' + n + '.' + r + '.0' : '>=' + t), (t + ' ' + (s = z(l) ? '' : z(u) ? '<' + (+l + 1) + '.0.0' : z(c) ? '<' + l + '.' + (+u + 1) + '.0' : d ? '<=' + l + '.' + u + '.' + c + '-' + d : '<=' + s)).trim();
}
function er(e, t, n) {
    for (var i = 0; i < e.length; i++) if (!e[i].test(t)) return !1;
    if (t.prerelease.length && !n.includePrerelease) {
        for (i = 0; i < e.length; i++) {
            if ((r(e[i].semver), e[i].semver !== H)) {
                if (e[i].semver.prerelease.length > 0) {
                    var a = e[i].semver;
                    if (a.major === t.major && a.minor === t.minor && a.patch === t.patch) return !0;
                }
            }
        }
        return !1;
    }
    return !0;
}
function ei(e, t, n) {
    try {
        t = new Y(t, n);
    } catch (e) {
        return !1;
    }
    return t.test(e);
}
function ea(e, t, n) {
    var r = null,
        i = null;
    try {
        var a = new Y(t, n);
    } catch (e) {
        return null;
    }
    return (
        e.forEach(function (e) {
            a.test(e) && (!r || -1 === i.compare(e)) && (i = new g((r = e), n));
        }),
        r
    );
}
function eo(e, t, n) {
    var r = null,
        i = null;
    try {
        var a = new Y(t, n);
    } catch (e) {
        return null;
    }
    return (
        e.forEach(function (e) {
            a.test(e) && (!r || 1 === i.compare(e)) && (i = new g((r = e), n));
        }),
        r
    );
}
function es(e, t) {
    e = new Y(e, t);
    var n = new g('0.0.0');
    if (e.test(n)) return n;
    if (((n = new g('0.0.0-0')), e.test(n))) return n;
    n = null;
    for (var r = 0; r < e.set.length; ++r)
        e.set[r].forEach(function (e) {
            var t = new g(e.semver.version);
            switch (e.operator) {
                case '>':
                    0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), (t.raw = t.format());
                case '':
                case '>=':
                    (!n || w(n, t)) && (n = t);
                    break;
                case '<':
                case '<=':
                    break;
                default:
                    throw Error('Unexpected operation: ' + e.operator);
            }
        });
    return n && e.test(n) ? n : null;
}
function el(e, t) {
    try {
        return new Y(e, t).range || '*';
    } catch (e) {
        return null;
    }
}
function eu(e, t, n) {
    return ed(e, t, '<', n);
}
function ec(e, t, n) {
    return ed(e, t, '>', n);
}
function ed(e, t, n, r) {
    switch (((e = new g(e, r)), (t = new Y(t, r)), n)) {
        case '>':
            (i = w), (a = F), (o = x), (s = '>'), (l = '>=');
            break;
        case '<':
            (i = x), (a = B), (o = w), (s = '<'), (l = '<=');
            break;
        default:
            throw TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (ei(e, t, r)) return !1;
    for (var i, a, o, s, l, u = 0; u < t.set.length; ++u) {
        var c = t.set[u],
            d = null,
            _ = null;
        if (
            (c.forEach(function (e) {
                e.semver === H && (e = new V('>=0.0.0')), (d = d || e), (_ = _ || e), i(e.semver, d.semver, r) ? (d = e) : o(e.semver, _.semver, r) && (_ = e);
            }),
            d.operator === s || d.operator === l)
        )
            return !1;
        if ((!_.operator || _.operator === s) && a(e, _.semver)) return !1;
        if (_.operator === l && o(e, _.semver)) return !1;
    }
    return !0;
}
function e_(e, t) {
    var n = m(e, t);
    return n && n.prerelease.length ? n.prerelease : null;
}
function eE(e, t, n) {
    return (e = new Y(e, n)), (t = new Y(t, n)), e.intersects(t);
}
function ef(e, t) {
    if (e instanceof g) return e;
    if (('number' == typeof e && (e = String(e)), 'string' != typeof e)) return null;
    var n,
        r = null;
    if ((t = t || {}).rtl) {
        for (; (n = l[c.COERCERTL].exec(e)) && (!r || r.index + r[0].length !== e.length); ) (!r || n.index + n[0].length !== r.index + r[0].length) && (r = n), (l[c.COERCERTL].lastIndex = n.index + n[1].length + n[2].length);
        l[c.COERCERTL].lastIndex = -1;
    } else r = e.match(l[c.COERCE]);
    return null === r ? null : m(r[2] + '.' + (r[3] || '0') + '.' + (r[4] || '0'), t);
}
(V.prototype.parse = function (e) {
    var t = this.options.loose ? l[c.COMPARATORLOOSE] : l[c.COMPARATOR],
        n = e.match(t);
    if (!n) throw TypeError('Invalid comparator: ' + e);
    (this.operator = void 0 !== n[1] ? n[1] : ''), '=' === this.operator && (this.operator = ''), n[2] ? (this.semver = new g(n[2], this.options.loose)) : (this.semver = H);
}),
    (V.prototype.toString = function () {
        return this.value;
    }),
    (V.prototype.test = function (e) {
        if ((r('Comparator.test', e, this.options.loose), this.semver === H || e === H)) return !0;
        if ('string' == typeof e)
            try {
                e = new g(e, this.options);
            } catch (e) {
                return !1;
            }
        return Z(e, this.operator, this.semver, this.options);
    }),
    (V.prototype.intersects = function (e, t) {
        if (!(e instanceof V)) throw TypeError('a Comparator is required');
        if (
            ((!t || 'object' != typeof t) &&
                (t = {
                    loose: !!t,
                    includePrerelease: !1
                }),
            '' === this.operator)
        )
            return '' === this.value || ((n = new Y(e.value, t)), ei(this.value, n, t));
        if ('' === e.operator) return '' === e.value || ((n = new Y(this.value, t)), ei(e.semver, n, t));
        var n,
            r = ('>=' === this.operator || '>' === this.operator) && ('>=' === e.operator || '>' === e.operator),
            i = ('<=' === this.operator || '<' === this.operator) && ('<=' === e.operator || '<' === e.operator),
            a = this.semver.version === e.semver.version,
            o = ('>=' === this.operator || '<=' === this.operator) && ('>=' === e.operator || '<=' === e.operator),
            s = Z(this.semver, '<', e.semver, t) && ('>=' === this.operator || '>' === this.operator) && ('<=' === e.operator || '<' === e.operator),
            l = Z(this.semver, '>', e.semver, t) && ('<=' === this.operator || '<' === this.operator) && ('>=' === e.operator || '>' === e.operator);
        return r || i || (a && o) || s || l;
    }),
    (t.Range = Y),
    (Y.prototype.format = function () {
        return (
            (this.range = this.set
                .map(function (e) {
                    return e.join(' ').trim();
                })
                .join('||')
                .trim()),
            this.range
        );
    }),
    (Y.prototype.toString = function () {
        return this.range;
    }),
    (Y.prototype.parseRange = function (e) {
        var t = this.options.loose;
        e = e.trim();
        var n = t ? l[c.HYPHENRANGELOOSE] : l[c.HYPHENRANGE];
        (e = e.replace(n, en)), r('hyphen replace', e), (e = e.replace(l[c.COMPARATORTRIM], h)), r('comparator trim', e, l[c.COMPARATORTRIM]), (e = (e = (e = e.replace(l[c.TILDETRIM], E)).replace(l[c.CARETTRIM], f)).split(/\s+/).join(' '));
        var i = t ? l[c.COMPARATORLOOSE] : l[c.COMPARATOR],
            a = e
                .split(' ')
                .map(function (e) {
                    return K(e, this.options);
                }, this)
                .join(' ')
                .split(/\s+/);
        return (
            this.options.loose &&
                (a = a.filter(function (e) {
                    return !!e.match(i);
                })),
            (a = a.map(function (e) {
                return new V(e, this.options);
            }, this))
        );
    }),
    (Y.prototype.intersects = function (e, t) {
        if (!(e instanceof Y)) throw TypeError('a Range is required');
        return this.set.some(function (n) {
            return (
                j(n, t) &&
                e.set.some(function (e) {
                    return (
                        j(e, t) &&
                        n.every(function (n) {
                            return e.every(function (e) {
                                return n.intersects(e, t);
                            });
                        })
                    );
                })
            );
        });
    }),
    (t.toComparators = W),
    (Y.prototype.test = function (e) {
        if (!e) return !1;
        if ('string' == typeof e)
            try {
                e = new g(e, this.options);
            } catch (e) {
                return !1;
            }
        for (var t = 0; t < this.set.length; t++) if (er(this.set[t], e, this.options)) return !0;
        return !1;
    }),
    (t.satisfies = ei),
    (t.maxSatisfying = ea),
    (t.minSatisfying = eo),
    (t.minVersion = es),
    (t.validRange = el),
    (t.ltr = eu),
    (t.gtr = ec),
    (t.outside = ed),
    (t.prerelease = e_),
    (t.intersects = eE),
    (t.coerce = ef);
