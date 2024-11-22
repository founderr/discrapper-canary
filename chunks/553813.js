var r,
    i = n(444675);
(t = e.exports = _),
    (r =
        'object' == typeof i && i.env && i.env.NODE_DEBUG && /\bsemver\b/i.test(i.env.NODE_DEBUG)
            ? function () {
                  var e = Array.prototype.slice.call(arguments, 0);
                  e.unshift('SEMVER'), console.log.apply(console, e);
              }
            : function () {}),
    (t.SEMVER_SPEC_VERSION = '2.0.0');
var a = Number.MAX_SAFE_INTEGER || 9007199254740991,
    s = (t.re = []),
    o = (t.src = []),
    l = (t.tokens = {}),
    u = 0;
function c(e) {
    l[e] = u++;
}
c('NUMERICIDENTIFIER'), (o[l.NUMERICIDENTIFIER] = '0|[1-9]\\d*'), c('NUMERICIDENTIFIERLOOSE'), (o[l.NUMERICIDENTIFIERLOOSE] = '[0-9]+'), c('NONNUMERICIDENTIFIER'), (o[l.NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*'), c('MAINVERSION'), (o[l.MAINVERSION] = '(' + o[l.NUMERICIDENTIFIER] + ')\\.(' + o[l.NUMERICIDENTIFIER] + ')\\.(' + o[l.NUMERICIDENTIFIER] + ')'), c('MAINVERSIONLOOSE'), (o[l.MAINVERSIONLOOSE] = '(' + o[l.NUMERICIDENTIFIERLOOSE] + ')\\.(' + o[l.NUMERICIDENTIFIERLOOSE] + ')\\.(' + o[l.NUMERICIDENTIFIERLOOSE] + ')'), c('PRERELEASEIDENTIFIER'), (o[l.PRERELEASEIDENTIFIER] = '(?:' + o[l.NUMERICIDENTIFIER] + '|' + o[l.NONNUMERICIDENTIFIER] + ')'), c('PRERELEASEIDENTIFIERLOOSE'), (o[l.PRERELEASEIDENTIFIERLOOSE] = '(?:' + o[l.NUMERICIDENTIFIERLOOSE] + '|' + o[l.NONNUMERICIDENTIFIER] + ')'), c('PRERELEASE'), (o[l.PRERELEASE] = '(?:-(' + o[l.PRERELEASEIDENTIFIER] + '(?:\\.' + o[l.PRERELEASEIDENTIFIER] + ')*))'), c('PRERELEASELOOSE'), (o[l.PRERELEASELOOSE] = '(?:-?(' + o[l.PRERELEASEIDENTIFIERLOOSE] + '(?:\\.' + o[l.PRERELEASEIDENTIFIERLOOSE] + ')*))'), c('BUILDIDENTIFIER'), (o[l.BUILDIDENTIFIER] = '[0-9A-Za-z-]+'), c('BUILD'), (o[l.BUILD] = '(?:\\+(' + o[l.BUILDIDENTIFIER] + '(?:\\.' + o[l.BUILDIDENTIFIER] + ')*))'), c('FULL'), c('FULLPLAIN'), (o[l.FULLPLAIN] = 'v?' + o[l.MAINVERSION] + o[l.PRERELEASE] + '?' + o[l.BUILD] + '?'), (o[l.FULL] = '^' + o[l.FULLPLAIN] + '$'), c('LOOSEPLAIN'), (o[l.LOOSEPLAIN] = '[v=\\s]*' + o[l.MAINVERSIONLOOSE] + o[l.PRERELEASELOOSE] + '?' + o[l.BUILD] + '?'), c('LOOSE'), (o[l.LOOSE] = '^' + o[l.LOOSEPLAIN] + '$'), c('GTLT'), (o[l.GTLT] = '((?:<|>)?=?)'), c('XRANGEIDENTIFIERLOOSE'), (o[l.XRANGEIDENTIFIERLOOSE] = o[l.NUMERICIDENTIFIERLOOSE] + '|x|X|\\*'), c('XRANGEIDENTIFIER'), (o[l.XRANGEIDENTIFIER] = o[l.NUMERICIDENTIFIER] + '|x|X|\\*'), c('XRANGEPLAIN'), (o[l.XRANGEPLAIN] = '[v=\\s]*(' + o[l.XRANGEIDENTIFIER] + ')(?:\\.(' + o[l.XRANGEIDENTIFIER] + ')(?:\\.(' + o[l.XRANGEIDENTIFIER] + ')(?:' + o[l.PRERELEASE] + ')?' + o[l.BUILD] + '?)?)?'), c('XRANGEPLAINLOOSE'), (o[l.XRANGEPLAINLOOSE] = '[v=\\s]*(' + o[l.XRANGEIDENTIFIERLOOSE] + ')(?:\\.(' + o[l.XRANGEIDENTIFIERLOOSE] + ')(?:\\.(' + o[l.XRANGEIDENTIFIERLOOSE] + ')(?:' + o[l.PRERELEASELOOSE] + ')?' + o[l.BUILD] + '?)?)?'), c('XRANGE'), (o[l.XRANGE] = '^' + o[l.GTLT] + '\\s*' + o[l.XRANGEPLAIN] + '$'), c('XRANGELOOSE'), (o[l.XRANGELOOSE] = '^' + o[l.GTLT] + '\\s*' + o[l.XRANGEPLAINLOOSE] + '$'), c('COERCE'), (o[l.COERCE] = '(^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])'), c('COERCERTL'), (s[l.COERCERTL] = RegExp(o[l.COERCE], 'g')), c('LONETILDE'), (o[l.LONETILDE] = '(?:~>?)'), c('TILDETRIM'), (o[l.TILDETRIM] = '(\\s*)' + o[l.LONETILDE] + '\\s+'), (s[l.TILDETRIM] = RegExp(o[l.TILDETRIM], 'g'));
c('TILDE'), (o[l.TILDE] = '^' + o[l.LONETILDE] + o[l.XRANGEPLAIN] + '$'), c('TILDELOOSE'), (o[l.TILDELOOSE] = '^' + o[l.LONETILDE] + o[l.XRANGEPLAINLOOSE] + '$'), c('LONECARET'), (o[l.LONECARET] = '(?:\\^)'), c('CARETTRIM'), (o[l.CARETTRIM] = '(\\s*)' + o[l.LONECARET] + '\\s+'), (s[l.CARETTRIM] = RegExp(o[l.CARETTRIM], 'g'));
c('CARET'), (o[l.CARET] = '^' + o[l.LONECARET] + o[l.XRANGEPLAIN] + '$'), c('CARETLOOSE'), (o[l.CARETLOOSE] = '^' + o[l.LONECARET] + o[l.XRANGEPLAINLOOSE] + '$'), c('COMPARATORLOOSE'), (o[l.COMPARATORLOOSE] = '^' + o[l.GTLT] + '\\s*(' + o[l.LOOSEPLAIN] + ')$|^$'), c('COMPARATOR'), (o[l.COMPARATOR] = '^' + o[l.GTLT] + '\\s*(' + o[l.FULLPLAIN] + ')$|^$'), c('COMPARATORTRIM'), (o[l.COMPARATORTRIM] = '(\\s*)' + o[l.GTLT] + '\\s*(' + o[l.LOOSEPLAIN] + '|' + o[l.XRANGEPLAIN] + ')'), (s[l.COMPARATORTRIM] = RegExp(o[l.COMPARATORTRIM], 'g'));
c('HYPHENRANGE'), (o[l.HYPHENRANGE] = '^\\s*(' + o[l.XRANGEPLAIN] + ')\\s+-\\s+(' + o[l.XRANGEPLAIN] + ')\\s*$'), c('HYPHENRANGELOOSE'), (o[l.HYPHENRANGELOOSE] = '^\\s*(' + o[l.XRANGEPLAINLOOSE] + ')\\s+-\\s+(' + o[l.XRANGEPLAINLOOSE] + ')\\s*$'), c('STAR'), (o[l.STAR] = '(<|>)?=?\\s*\\*');
for (var d = 0; d < u; d++) r(d, o[d]), !s[d] && (s[d] = new RegExp(o[d]));
function f(e, t) {
    if (
        ((!t || 'object' != typeof t) &&
            (t = {
                loose: !!t,
                includePrerelease: !1
            }),
        e instanceof _)
    )
        return e;
    if ('string' != typeof e || e.length > 256 || !(t.loose ? s[l.LOOSE] : s[l.FULL]).test(e)) return null;
    try {
        return new _(e, t);
    } catch (e) {
        return null;
    }
}
(t.parse = f),
    (t.valid = function (e, t) {
        var n = f(e, t);
        return n ? n.version : null;
    });
t.clean = function (e, t) {
    var n = f(e.trim().replace(/^[=v]+/, ''), t);
    return n ? n.version : null;
};
function _(e, t) {
    if (
        ((!t || 'object' != typeof t) &&
            (t = {
                loose: !!t,
                includePrerelease: !1
            }),
        e instanceof _)
    ) {
        if (e.loose === t.loose) return e;
        e = e.version;
    } else if ('string' != typeof e) throw TypeError('Invalid Version: ' + e);
    if (e.length > 256) throw TypeError('version is longer than 256 characters');
    if (!(this instanceof _)) return new _(e, t);
    r('SemVer', e, t), (this.options = t), (this.loose = !!t.loose);
    var n = e.trim().match(t.loose ? s[l.LOOSE] : s[l.FULL]);
    if (!n) throw TypeError('Invalid Version: ' + e);
    if (((this.raw = e), (this.major = +n[1]), (this.minor = +n[2]), (this.patch = +n[3]), this.major > a || this.major < 0)) throw TypeError('Invalid major version');
    if (this.minor > a || this.minor < 0) throw TypeError('Invalid minor version');
    if (this.patch > a || this.patch < 0) throw TypeError('Invalid patch version');
    n[4]
        ? (this.prerelease = n[4].split('.').map(function (e) {
              if (/^[0-9]+$/.test(e)) {
                  var t = +e;
                  if (t >= 0 && t < a) return t;
              }
              return e;
          }))
        : (this.prerelease = []),
        (this.build = n[5] ? n[5].split('.') : []),
        this.format();
}
(t.SemVer = _),
    (_.prototype.format = function () {
        return (this.version = this.major + '.' + this.minor + '.' + this.patch), this.prerelease.length && (this.version += '-' + this.prerelease.join('.')), this.version;
    }),
    (_.prototype.toString = function () {
        return this.version;
    }),
    (_.prototype.compare = function (e) {
        return r('SemVer.compare', this.version, this.options, e), !(e instanceof _) && (e = new _(e, this.options)), this.compareMain(e) || this.comparePre(e);
    }),
    (_.prototype.compareMain = function (e) {
        return !(e instanceof _) && (e = new _(e, this.options)), h(this.major, e.major) || h(this.minor, e.minor) || h(this.patch, e.patch);
    }),
    (_.prototype.comparePre = function (e) {
        if ((!(e instanceof _) && (e = new _(e, this.options)), this.prerelease.length && !e.prerelease.length)) return -1;
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
            else return h(n, i);
        } while (++t);
    }),
    (_.prototype.compareBuild = function (e) {
        !(e instanceof _) && (e = new _(e, this.options));
        var t = 0;
        do {
            var n = this.build[t],
                i = e.build[t];
            if ((r('prerelease compare', t, n, i), void 0 === n && void 0 === i)) return 0;
            if (void 0 === i) return 1;
            else if (void 0 === n) return -1;
            else if (n === i) continue;
            else return h(n, i);
        } while (++t);
    }),
    (_.prototype.inc = function (e, t) {
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
    (t.inc = function (e, t, n, r) {
        'string' == typeof n && ((r = n), (n = void 0));
        try {
            return new _(e, n).inc(t, r).version;
        } catch (e) {
            return null;
        }
    });
t.diff = function (e, t) {
    if (v(e, t)) return null;
    var n = f(e),
        r = f(t),
        i = '';
    if (n.prerelease.length || r.prerelease.length) {
        i = 'pre';
        var a = 'prerelease';
    }
    for (var s in n) if (('major' === s || 'minor' === s || 'patch' === s) && n[s] !== r[s]) return i + s;
    return a;
};
t.compareIdentifiers = h;
var p = /^[0-9]+$/;
function h(e, t) {
    var n = p.test(e),
        r = p.test(t);
    return n && r && ((e = +e), (t = +t)), e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1;
}
t.rcompareIdentifiers = function (e, t) {
    return h(t, e);
};
t.major = function (e, t) {
    return new _(e, t).major;
};
t.minor = function (e, t) {
    return new _(e, t).minor;
};
t.patch = function (e, t) {
    return new _(e, t).patch;
};
function m(e, t, n) {
    return new _(e, n).compare(new _(t, n));
}
(t.compare = m),
    (t.compareLoose = function (e, t) {
        return m(e, t, !0);
    });
t.compareBuild = function (e, t, n) {
    var r = new _(e, n),
        i = new _(t, n);
    return r.compare(i) || r.compareBuild(i);
};
t.rcompare = function (e, t, n) {
    return m(t, e, n);
};
t.sort = function (e, n) {
    return e.sort(function (e, r) {
        return t.compareBuild(e, r, n);
    });
};
t.rsort = function (e, n) {
    return e.sort(function (e, r) {
        return t.compareBuild(r, e, n);
    });
};
function g(e, t, n) {
    return m(e, t, n) > 0;
}
function E(e, t, n) {
    return 0 > m(e, t, n);
}
function v(e, t, n) {
    return 0 === m(e, t, n);
}
function I(e, t, n) {
    return 0 !== m(e, t, n);
}
function b(e, t, n) {
    return m(e, t, n) >= 0;
}
function T(e, t, n) {
    return 0 >= m(e, t, n);
}
function S(e, t, n, r) {
    switch (t) {
        case '===':
            return 'object' == typeof e && (e = e.version), 'object' == typeof n && (n = n.version), e === n;
        case '!==':
            return 'object' == typeof e && (e = e.version), 'object' == typeof n && (n = n.version), e !== n;
        case '':
        case '=':
        case '==':
            return v(e, n, r);
        case '!=':
            return I(e, n, r);
        case '>':
            return g(e, n, r);
        case '>=':
            return b(e, n, r);
        case '<':
            return E(e, n, r);
        case '<=':
            return T(e, n, r);
        default:
            throw TypeError('Invalid operator: ' + t);
    }
}
function y(e, t) {
    if (
        ((!t || 'object' != typeof t) &&
            (t = {
                loose: !!t,
                includePrerelease: !1
            }),
        e instanceof y)
    ) {
        if (!!t.loose === e.loose) return e;
        e = e.value;
    }
    if (!(this instanceof y)) return new y(e, t);
    r('comparator', e, t), (this.options = t), (this.loose = !!t.loose), this.parse(e), this.semver === A ? (this.value = '') : (this.value = this.operator + this.semver.version), r('comp', this);
}
(t.gt = g), (t.lt = E), (t.eq = v), (t.neq = I), (t.gte = b), (t.lte = T), (t.cmp = S), (t.Comparator = y);
var A = {};
function N(e, t) {
    if (
        ((!t || 'object' != typeof t) &&
            (t = {
                loose: !!t,
                includePrerelease: !1
            }),
        e instanceof N)
    )
        return !!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease ? e : new N(e.raw, t);
    if (e instanceof y) return new N(e.value, t);
    if (!(this instanceof N)) return new N(e, t);
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
function C(e, t) {
    for (var n = !0, r = e.slice(), i = r.pop(); n && r.length; )
        (n = r.every(function (e) {
            return i.intersects(e, t);
        })),
            (i = r.pop());
    return n;
}
(y.prototype.parse = function (e) {
    var t = this.options.loose ? s[l.COMPARATORLOOSE] : s[l.COMPARATOR],
        n = e.match(t);
    if (!n) throw TypeError('Invalid comparator: ' + e);
    (this.operator = void 0 !== n[1] ? n[1] : ''), '=' === this.operator && (this.operator = ''), n[2] ? (this.semver = new _(n[2], this.options.loose)) : (this.semver = A);
}),
    (y.prototype.toString = function () {
        return this.value;
    }),
    (y.prototype.test = function (e) {
        if ((r('Comparator.test', e, this.options.loose), this.semver === A || e === A)) return !0;
        if ('string' == typeof e)
            try {
                e = new _(e, this.options);
            } catch (e) {
                return !1;
            }
        return S(e, this.operator, this.semver, this.options);
    }),
    (y.prototype.intersects = function (e, t) {
        if (!(e instanceof y)) throw TypeError('a Comparator is required');
        if (
            ((!t || 'object' != typeof t) &&
                (t = {
                    loose: !!t,
                    includePrerelease: !1
                }),
            '' === this.operator)
        )
            return '' === this.value || ((n = new N(e.value, t)), D(this.value, n, t));
        if ('' === e.operator) return '' === e.value || ((n = new N(this.value, t)), D(e.semver, n, t));
        var n,
            r = ('>=' === this.operator || '>' === this.operator) && ('>=' === e.operator || '>' === e.operator),
            i = ('<=' === this.operator || '<' === this.operator) && ('<=' === e.operator || '<' === e.operator),
            a = this.semver.version === e.semver.version,
            s = ('>=' === this.operator || '<=' === this.operator) && ('>=' === e.operator || '<=' === e.operator),
            o = S(this.semver, '<', e.semver, t) && ('>=' === this.operator || '>' === this.operator) && ('<=' === e.operator || '<' === e.operator),
            l = S(this.semver, '>', e.semver, t) && ('<=' === this.operator || '<' === this.operator) && ('>=' === e.operator || '>' === e.operator);
        return r || i || (a && s) || o || l;
    }),
    (t.Range = N),
    (N.prototype.format = function () {
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
    (N.prototype.toString = function () {
        return this.range;
    }),
    (N.prototype.parseRange = function (e) {
        var t = this.options.loose;
        e = e.trim();
        var n = t ? s[l.HYPHENRANGELOOSE] : s[l.HYPHENRANGE];
        (e = e.replace(n, O)), r('hyphen replace', e), (e = e.replace(s[l.COMPARATORTRIM], '$1$2$3')), r('comparator trim', e, s[l.COMPARATORTRIM]), (e = (e = (e = e.replace(s[l.TILDETRIM], '$1~')).replace(s[l.CARETTRIM], '$1^')).split(/\s+/).join(' '));
        var i = t ? s[l.COMPARATORLOOSE] : s[l.COMPARATOR],
            a = e
                .split(' ')
                .map(function (e) {
                    return (function (e, t) {
                        return (
                            r('comp', e, t),
                            (e = (function (e, t) {
                                return e
                                    .trim()
                                    .split(/\s+/)
                                    .map(function (e) {
                                        return (function (e, t) {
                                            r('caret', e, t);
                                            var n = t.loose ? s[l.CARETLOOSE] : s[l.CARET];
                                            return e.replace(n, function (t, n, i, a, s) {
                                                var o;
                                                return r('caret', e, t, n, i, a, s), R(n) ? (o = '') : R(i) ? (o = '>=' + n + '.0.0 <' + (+n + 1) + '.0.0') : R(a) ? (o = '0' === n ? '>=' + n + '.' + i + '.0 <' + n + '.' + (+i + 1) + '.0' : '>=' + n + '.' + i + '.0 <' + (+n + 1) + '.0.0') : s ? (r('replaceCaret pr', s), (o = '0' === n ? ('0' === i ? '>=' + n + '.' + i + '.' + a + '-' + s + ' <' + n + '.' + i + '.' + (+a + 1) : '>=' + n + '.' + i + '.' + a + '-' + s + ' <' + n + '.' + (+i + 1) + '.0') : '>=' + n + '.' + i + '.' + a + '-' + s + ' <' + (+n + 1) + '.0.0')) : (r('no pr'), (o = '0' === n ? ('0' === i ? '>=' + n + '.' + i + '.' + a + ' <' + n + '.' + i + '.' + (+a + 1) : '>=' + n + '.' + i + '.' + a + ' <' + n + '.' + (+i + 1) + '.0') : '>=' + n + '.' + i + '.' + a + ' <' + (+n + 1) + '.0.0')), r('caret return', o), o;
                                            });
                                        })(e, t);
                                    })
                                    .join(' ');
                            })(e, t)),
                            r('caret', e),
                            (e = (function (e, t) {
                                return e
                                    .trim()
                                    .split(/\s+/)
                                    .map(function (e) {
                                        return (function (e, t) {
                                            var n = t.loose ? s[l.TILDELOOSE] : s[l.TILDE];
                                            return e.replace(n, function (t, n, i, a, s) {
                                                var o;
                                                return r('tilde', e, t, n, i, a, s), R(n) ? (o = '') : R(i) ? (o = '>=' + n + '.0.0 <' + (+n + 1) + '.0.0') : R(a) ? (o = '>=' + n + '.' + i + '.0 <' + n + '.' + (+i + 1) + '.0') : s ? (r('replaceTilde pr', s), (o = '>=' + n + '.' + i + '.' + a + '-' + s + ' <' + n + '.' + (+i + 1) + '.0')) : (o = '>=' + n + '.' + i + '.' + a + ' <' + n + '.' + (+i + 1) + '.0'), r('tilde return', o), o;
                                            });
                                        })(e, t);
                                    })
                                    .join(' ');
                            })(e, t)),
                            r('tildes', e),
                            (e = (function (e, t) {
                                return (
                                    r('replaceXRanges', e, t),
                                    e
                                        .split(/\s+/)
                                        .map(function (e) {
                                            return (function (e, t) {
                                                e = e.trim();
                                                var n = t.loose ? s[l.XRANGELOOSE] : s[l.XRANGE];
                                                return e.replace(n, function (n, i, a, s, o, l) {
                                                    r('xRange', e, n, i, a, s, o, l);
                                                    var u = R(a),
                                                        c = u || R(s),
                                                        d = c || R(o);
                                                    return '=' === i && d && (i = ''), (l = t.includePrerelease ? '-0' : ''), u ? (n = '>' === i || '<' === i ? '<0.0.0-0' : '*') : i && d ? (c && (s = 0), (o = 0), '>' === i ? ((i = '>='), c ? ((a = +a + 1), (s = 0)) : (s = +s + 1), (o = 0)) : '<=' === i && ((i = '<'), c ? (a = +a + 1) : (s = +s + 1)), (n = i + a + '.' + s + '.' + o + l)) : c ? (n = '>=' + a + '.0.0' + l + ' <' + (+a + 1) + '.0.0' + l) : d && (n = '>=' + a + '.' + s + '.0' + l + ' <' + a + '.' + (+s + 1) + '.0' + l), r('xRange return', n), n;
                                                });
                                            })(e, t);
                                        })
                                        .join(' ')
                                );
                            })(e, t)),
                            r('xrange', e),
                            (e = (function (e, t) {
                                return r('replaceStars', e, t), e.trim().replace(s[l.STAR], '');
                            })(e, t)),
                            r('stars', e),
                            e
                        );
                    })(e, this.options);
                }, this)
                .join(' ')
                .split(/\s+/);
        return (
            this.options.loose &&
                (a = a.filter(function (e) {
                    return !!e.match(i);
                })),
            (a = a.map(function (e) {
                return new y(e, this.options);
            }, this))
        );
    }),
    (N.prototype.intersects = function (e, t) {
        if (!(e instanceof N)) throw TypeError('a Range is required');
        return this.set.some(function (n) {
            return (
                C(n, t) &&
                e.set.some(function (e) {
                    return (
                        C(e, t) &&
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
    (t.toComparators = function (e, t) {
        return new N(e, t).set.map(function (e) {
            return e
                .map(function (e) {
                    return e.value;
                })
                .join(' ')
                .trim()
                .split(' ');
        });
    });
function R(e) {
    return !e || 'x' === e.toLowerCase() || '*' === e;
}
function O(e, t, n, r, i, a, s, o, l, u, c, d, f) {
    return (t = R(n) ? '' : R(r) ? '>=' + n + '.0.0' : R(i) ? '>=' + n + '.' + r + '.0' : '>=' + t), (t + ' ' + (o = R(l) ? '' : R(u) ? '<' + (+l + 1) + '.0.0' : R(c) ? '<' + l + '.' + (+u + 1) + '.0' : d ? '<=' + l + '.' + u + '.' + c + '-' + d : '<=' + o)).trim();
}
N.prototype.test = function (e) {
    if (!e) return !1;
    if ('string' == typeof e)
        try {
            e = new _(e, this.options);
        } catch (e) {
            return !1;
        }
    for (var t = 0; t < this.set.length; t++)
        if (
            (function (e, t, n) {
                for (var i = 0; i < e.length; i++) if (!e[i].test(t)) return !1;
                if (t.prerelease.length && !n.includePrerelease) {
                    for (i = 0; i < e.length; i++) {
                        if ((r(e[i].semver), e[i].semver !== A)) {
                            if (e[i].semver.prerelease.length > 0) {
                                var a = e[i].semver;
                                if (a.major === t.major && a.minor === t.minor && a.patch === t.patch) return !0;
                            }
                        }
                    }
                    return !1;
                }
                return !0;
            })(this.set[t], e, this.options)
        )
            return !0;
    return !1;
};
function D(e, t, n) {
    try {
        t = new N(t, n);
    } catch (e) {
        return !1;
    }
    return t.test(e);
}
(t.satisfies = D),
    (t.maxSatisfying = function (e, t, n) {
        var r = null,
            i = null;
        try {
            var a = new N(t, n);
        } catch (e) {
            return null;
        }
        return (
            e.forEach(function (e) {
                a.test(e) && (!r || -1 === i.compare(e)) && (i = new _((r = e), n));
            }),
            r
        );
    });
t.minSatisfying = function (e, t, n) {
    var r = null,
        i = null;
    try {
        var a = new N(t, n);
    } catch (e) {
        return null;
    }
    return (
        e.forEach(function (e) {
            a.test(e) && (!r || 1 === i.compare(e)) && (i = new _((r = e), n));
        }),
        r
    );
};
t.minVersion = function (e, t) {
    e = new N(e, t);
    var n = new _('0.0.0');
    if (e.test(n)) return n;
    if (((n = new _('0.0.0-0')), e.test(n))) return n;
    n = null;
    for (var r = 0; r < e.set.length; ++r)
        e.set[r].forEach(function (e) {
            var t = new _(e.semver.version);
            switch (e.operator) {
                case '>':
                    0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), (t.raw = t.format());
                case '':
                case '>=':
                    (!n || g(n, t)) && (n = t);
                    break;
                case '<':
                case '<=':
                    break;
                default:
                    throw Error('Unexpected operation: ' + e.operator);
            }
        });
    return n && e.test(n) ? n : null;
};
t.validRange = function (e, t) {
    try {
        return new N(e, t).range || '*';
    } catch (e) {
        return null;
    }
};
t.ltr = function (e, t, n) {
    return L(e, t, '<', n);
};
t.gtr = function (e, t, n) {
    return L(e, t, '>', n);
};
function L(e, t, n, r) {
    switch (((e = new _(e, r)), (t = new N(t, r)), n)) {
        case '>':
            (i = g), (a = T), (s = E), (o = '>'), (l = '>=');
            break;
        case '<':
            (i = E), (a = b), (s = g), (o = '<'), (l = '<=');
            break;
        default:
            throw TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (D(e, t, r)) return !1;
    for (var i, a, s, o, l, u = 0; u < t.set.length; ++u) {
        var c = t.set[u],
            d = null,
            f = null;
        if (
            (c.forEach(function (e) {
                e.semver === A && (e = new y('>=0.0.0')), (d = d || e), (f = f || e), i(e.semver, d.semver, r) ? (d = e) : s(e.semver, f.semver, r) && (f = e);
            }),
            d.operator === o || d.operator === l)
        )
            return !1;
        if ((!f.operator || f.operator === o) && a(e, f.semver)) return !1;
        if (f.operator === l && s(e, f.semver)) return !1;
    }
    return !0;
}
(t.outside = L),
    (t.prerelease = function (e, t) {
        var n = f(e, t);
        return n && n.prerelease.length ? n.prerelease : null;
    });
t.intersects = function (e, t, n) {
    return (e = new N(e, n)), (t = new N(t, n)), e.intersects(t);
};
t.coerce = function (e, t) {
    if (e instanceof _) return e;
    if (('number' == typeof e && (e = String(e)), 'string' != typeof e)) return null;
    var n,
        r = null;
    if ((t = t || {}).rtl) {
        for (; (n = s[l.COERCERTL].exec(e)) && (!r || r.index + r[0].length !== e.length); ) (!r || n.index + n[0].length !== r.index + r[0].length) && (r = n), (s[l.COERCERTL].lastIndex = n.index + n[1].length + n[2].length);
        s[l.COERCERTL].lastIndex = -1;
    } else r = e.match(s[l.COERCE]);
    return null === r ? null : f(r[2] + '.' + (r[3] || '0') + '.' + (r[4] || '0'), t);
};
