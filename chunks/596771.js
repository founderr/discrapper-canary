n.d(t, {
    _: function () {
        return b;
    }
});
var r,
    i,
    a = n(146150),
    s = n(827671),
    o = n(928125),
    l = n(387004),
    u = n(927882),
    c = n(944990),
    d = new RegExp('^'.concat(l.p.source, '*')),
    _ = new RegExp(''.concat(l.p.source, '*$'));
function E(e, t) {
    return {
        start: e,
        end: t
    };
}
var f = !!String.prototype.startsWith && '_a'.startsWith('a', 1),
    h = !!String.fromCodePoint,
    p = !!Object.fromEntries,
    I = !!String.prototype.codePointAt,
    m = !!String.prototype.trimStart,
    T = !!String.prototype.trimEnd,
    S = Number.isSafeInteger
        ? Number.isSafeInteger
        : function (e) {
              return 'number' == typeof e && isFinite(e) && Math.floor(e) === e && 9007199254740991 >= Math.abs(e);
          },
    g = !0;
try {
    var A = y('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    g = (null === (r = A.exec('a')) || void 0 === r ? void 0 : r[0]) === 'a';
} catch (e) {
    g = !1;
}
var N = f
        ? function (e, t, n) {
              return e.startsWith(t, n);
          }
        : function (e, t, n) {
              return e.slice(n, n + t.length) === t;
          },
    O = h
        ? String.fromCodePoint
        : function () {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              for (var r = '', i = t.length, a = 0; i > a; ) {
                  if ((e = t[a++]) > 1114111) throw RangeError(e + ' is not a valid code point');
                  r += e < 65536 ? String.fromCharCode(e) : String.fromCharCode(((e -= 65536) >> 10) + 55296, (e % 1024) + 56320);
              }
              return r;
          },
    R = p
        ? Object.fromEntries
        : function (e) {
              for (var t = {}, n = 0; n < e.length; n++) {
                  var r = e[n],
                      i = r[0],
                      a = r[1];
                  t[i] = a;
              }
              return t;
          },
    v = I
        ? function (e, t) {
              return e.codePointAt(t);
          }
        : function (e, t) {
              var n,
                  r = e.length;
              if (!(t < 0) && !(t >= r)) {
                  var i = e.charCodeAt(t);
                  return i < 55296 || i > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? i : ((i - 55296) << 10) + (n - 56320) + 65536;
              }
          },
    C = m
        ? function (e) {
              return e.trimStart();
          }
        : function (e) {
              return e.replace(d, '');
          },
    L = T
        ? function (e) {
              return e.trimEnd();
          }
        : function (e) {
              return e.replace(_, '');
          };
function y(e, t) {
    return new RegExp(e, t);
}
if (g) {
    var D = y('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    i = function (e, t) {
        var n;
        return (D.lastIndex = t), null !== (n = D.exec(e)[1]) && void 0 !== n ? n : '';
    };
} else
    i = function (e, t) {
        for (var n = []; ; ) {
            var r = v(e, t);
            if (
                void 0 === r ||
                P(r) ||
                (function (e) {
                    return (
                        (e >= 33 && e <= 35) ||
                        36 === e ||
                        (e >= 37 && e <= 39) ||
                        40 === e ||
                        41 === e ||
                        42 === e ||
                        43 === e ||
                        44 === e ||
                        45 === e ||
                        (e >= 46 && e <= 47) ||
                        (e >= 58 && e <= 59) ||
                        (e >= 60 && e <= 62) ||
                        (e >= 63 && e <= 64) ||
                        91 === e ||
                        92 === e ||
                        93 === e ||
                        94 === e ||
                        96 === e ||
                        123 === e ||
                        124 === e ||
                        125 === e ||
                        126 === e ||
                        161 === e ||
                        (e >= 162 && e <= 165) ||
                        166 === e ||
                        167 === e ||
                        169 === e ||
                        171 === e ||
                        172 === e ||
                        174 === e ||
                        176 === e ||
                        177 === e ||
                        182 === e ||
                        187 === e ||
                        191 === e ||
                        215 === e ||
                        247 === e ||
                        (e >= 8208 && e <= 8213) ||
                        (e >= 8214 && e <= 8215) ||
                        8216 === e ||
                        8217 === e ||
                        8218 === e ||
                        (e >= 8219 && e <= 8220) ||
                        8221 === e ||
                        8222 === e ||
                        8223 === e ||
                        (e >= 8224 && e <= 8231) ||
                        (e >= 8240 && e <= 8248) ||
                        8249 === e ||
                        8250 === e ||
                        (e >= 8251 && e <= 8254) ||
                        (e >= 8257 && e <= 8259) ||
                        8260 === e ||
                        8261 === e ||
                        8262 === e ||
                        (e >= 8263 && e <= 8273) ||
                        8274 === e ||
                        8275 === e ||
                        (e >= 8277 && e <= 8286) ||
                        (e >= 8592 && e <= 8596) ||
                        (e >= 8597 && e <= 8601) ||
                        (e >= 8602 && e <= 8603) ||
                        (e >= 8604 && e <= 8607) ||
                        8608 === e ||
                        (e >= 8609 && e <= 8610) ||
                        8611 === e ||
                        (e >= 8612 && e <= 8613) ||
                        8614 === e ||
                        (e >= 8615 && e <= 8621) ||
                        8622 === e ||
                        (e >= 8623 && e <= 8653) ||
                        (e >= 8654 && e <= 8655) ||
                        (e >= 8656 && e <= 8657) ||
                        8658 === e ||
                        8659 === e ||
                        8660 === e ||
                        (e >= 8661 && e <= 8691) ||
                        (e >= 8692 && e <= 8959) ||
                        (e >= 8960 && e <= 8967) ||
                        8968 === e ||
                        8969 === e ||
                        8970 === e ||
                        8971 === e ||
                        (e >= 8972 && e <= 8991) ||
                        (e >= 8992 && e <= 8993) ||
                        (e >= 8994 && e <= 9000) ||
                        9001 === e ||
                        9002 === e ||
                        (e >= 9003 && e <= 9083) ||
                        9084 === e ||
                        (e >= 9085 && e <= 9114) ||
                        (e >= 9115 && e <= 9139) ||
                        (e >= 9140 && e <= 9179) ||
                        (e >= 9180 && e <= 9185) ||
                        (e >= 9186 && e <= 9254) ||
                        (e >= 9255 && e <= 9279) ||
                        (e >= 9280 && e <= 9290) ||
                        (e >= 9291 && e <= 9311) ||
                        (e >= 9472 && e <= 9654) ||
                        9655 === e ||
                        (e >= 9656 && e <= 9664) ||
                        9665 === e ||
                        (e >= 9666 && e <= 9719) ||
                        (e >= 9720 && e <= 9727) ||
                        (e >= 9728 && e <= 9838) ||
                        9839 === e ||
                        (e >= 9840 && e <= 10087) ||
                        10088 === e ||
                        10089 === e ||
                        10090 === e ||
                        10091 === e ||
                        10092 === e ||
                        10093 === e ||
                        10094 === e ||
                        10095 === e ||
                        10096 === e ||
                        10097 === e ||
                        10098 === e ||
                        10099 === e ||
                        10100 === e ||
                        10101 === e ||
                        (e >= 10132 && e <= 10175) ||
                        (e >= 10176 && e <= 10180) ||
                        10181 === e ||
                        10182 === e ||
                        (e >= 10183 && e <= 10213) ||
                        10214 === e ||
                        10215 === e ||
                        10216 === e ||
                        10217 === e ||
                        10218 === e ||
                        10219 === e ||
                        10220 === e ||
                        10221 === e ||
                        10222 === e ||
                        10223 === e ||
                        (e >= 10224 && e <= 10239) ||
                        (e >= 10240 && e <= 10495) ||
                        (e >= 10496 && e <= 10626) ||
                        10627 === e ||
                        10628 === e ||
                        10629 === e ||
                        10630 === e ||
                        10631 === e ||
                        10632 === e ||
                        10633 === e ||
                        10634 === e ||
                        10635 === e ||
                        10636 === e ||
                        10637 === e ||
                        10638 === e ||
                        10639 === e ||
                        10640 === e ||
                        10641 === e ||
                        10642 === e ||
                        10643 === e ||
                        10644 === e ||
                        10645 === e ||
                        10646 === e ||
                        10647 === e ||
                        10648 === e ||
                        (e >= 10649 && e <= 10711) ||
                        10712 === e ||
                        10713 === e ||
                        10714 === e ||
                        10715 === e ||
                        (e >= 10716 && e <= 10747) ||
                        10748 === e ||
                        10749 === e ||
                        (e >= 10750 && e <= 11007) ||
                        (e >= 11008 && e <= 11055) ||
                        (e >= 11056 && e <= 11076) ||
                        (e >= 11077 && e <= 11078) ||
                        (e >= 11079 && e <= 11084) ||
                        (e >= 11085 && e <= 11123) ||
                        (e >= 11124 && e <= 11125) ||
                        (e >= 11126 && e <= 11157) ||
                        11158 === e ||
                        (e >= 11159 && e <= 11263) ||
                        (e >= 11776 && e <= 11777) ||
                        11778 === e ||
                        11779 === e ||
                        11780 === e ||
                        11781 === e ||
                        (e >= 11782 && e <= 11784) ||
                        11785 === e ||
                        11786 === e ||
                        11787 === e ||
                        11788 === e ||
                        11789 === e ||
                        (e >= 11790 && e <= 11798) ||
                        11799 === e ||
                        (e >= 11800 && e <= 11801) ||
                        11802 === e ||
                        11803 === e ||
                        11804 === e ||
                        11805 === e ||
                        (e >= 11806 && e <= 11807) ||
                        11808 === e ||
                        11809 === e ||
                        11810 === e ||
                        11811 === e ||
                        11812 === e ||
                        11813 === e ||
                        11814 === e ||
                        11815 === e ||
                        11816 === e ||
                        11817 === e ||
                        (e >= 11818 && e <= 11822) ||
                        11823 === e ||
                        (e >= 11824 && e <= 11833) ||
                        (e >= 11834 && e <= 11835) ||
                        (e >= 11836 && e <= 11839) ||
                        11840 === e ||
                        11841 === e ||
                        11842 === e ||
                        (e >= 11843 && e <= 11855) ||
                        (e >= 11856 && e <= 11857) ||
                        11858 === e ||
                        (e >= 11859 && e <= 11903) ||
                        (e >= 12289 && e <= 12291) ||
                        12296 === e ||
                        12297 === e ||
                        12298 === e ||
                        12299 === e ||
                        12300 === e ||
                        12301 === e ||
                        12302 === e ||
                        12303 === e ||
                        12304 === e ||
                        12305 === e ||
                        (e >= 12306 && e <= 12307) ||
                        12308 === e ||
                        12309 === e ||
                        12310 === e ||
                        12311 === e ||
                        12312 === e ||
                        12313 === e ||
                        12314 === e ||
                        12315 === e ||
                        12316 === e ||
                        12317 === e ||
                        (e >= 12318 && e <= 12319) ||
                        12320 === e ||
                        12336 === e ||
                        64830 === e ||
                        64831 === e ||
                        (e >= 65093 && e <= 65094)
                    );
                })(r)
            )
                break;
            n.push(r), (t += r >= 65536 ? 2 : 1);
        }
        return O.apply(void 0, n);
    };
var b = (function () {
    function e(e, t) {
        void 0 === t && (t = {}),
            (this.message = e),
            (this.position = {
                offset: 0,
                line: 1,
                column: 1
            }),
            (this.ignoreTag = !!t.ignoreTag),
            (this.locale = t.locale),
            (this.requiresOtherClause = !!t.requiresOtherClause),
            (this.shouldParseSkeletons = !!t.shouldParseSkeletons);
    }
    return (
        (e.prototype.parse = function () {
            if (0 !== this.offset()) throw Error('parser can only be used once');
            return this.parseMessage(0, '', !1);
        }),
        (e.prototype.parseMessage = function (e, t, n) {
            for (var r = []; !this.isEOF(); ) {
                var i = this.char();
                if (123 === i) {
                    var a = this.parseArgument(e, n);
                    if (a.err) return a;
                    r.push(a.val);
                } else if (125 === i && e > 0) break;
                else if (35 === i && ('plural' === t || 'selectordinal' === t)) {
                    var l = this.clonePosition();
                    this.bump(),
                        r.push({
                            type: o.wD.pound,
                            location: E(l, this.clonePosition())
                        });
                } else if (60 !== i || this.ignoreTag || 47 !== this.peek()) {
                    if (60 === i && !this.ignoreTag && M(this.peek() || 0)) {
                        var a = this.parseTag(e, t);
                        if (a.err) return a;
                        r.push(a.val);
                    } else {
                        var a = this.parseLiteral(e, t);
                        if (a.err) return a;
                        r.push(a.val);
                    }
                } else {
                    if (!n) return this.error(s.o.UNMATCHED_CLOSING_TAG, E(this.clonePosition(), this.clonePosition()));
                    break;
                }
            }
            return {
                val: r,
                err: null
            };
        }),
        (e.prototype.parseTag = function (e, t) {
            var n = this.clonePosition();
            this.bump();
            var r = this.parseTagName();
            if ((this.bumpSpace(), this.bumpIf('/>')))
                return {
                    val: {
                        type: o.wD.literal,
                        value: '<'.concat(r, '/>'),
                        location: E(n, this.clonePosition())
                    },
                    err: null
                };
            if (!this.bumpIf('>')) return this.error(s.o.INVALID_TAG, E(n, this.clonePosition()));
            var i = this.parseMessage(e + 1, t, !0);
            if (i.err) return i;
            var a = i.val,
                l = this.clonePosition();
            if (!this.bumpIf('</')) return this.error(s.o.UNCLOSED_TAG, E(n, this.clonePosition()));
            if (this.isEOF() || !M(this.char())) return this.error(s.o.INVALID_TAG, E(l, this.clonePosition()));
            var u = this.clonePosition();
            return r !== this.parseTagName()
                ? this.error(s.o.UNMATCHED_CLOSING_TAG, E(u, this.clonePosition()))
                : (this.bumpSpace(), this.bumpIf('>'))
                  ? {
                        val: {
                            type: o.wD.tag,
                            value: r,
                            children: a,
                            location: E(n, this.clonePosition())
                        },
                        err: null
                    }
                  : this.error(s.o.INVALID_TAG, E(l, this.clonePosition()));
        }),
        (e.prototype.parseTagName = function () {
            var e = this.offset();
            for (
                this.bump();
                !this.isEOF() &&
                (function (e) {
                    return 45 === e || 46 === e || (e >= 48 && e <= 57) || 95 === e || (e >= 97 && e <= 122) || (e >= 65 && e <= 90) || 183 == e || (e >= 192 && e <= 214) || (e >= 216 && e <= 246) || (e >= 248 && e <= 893) || (e >= 895 && e <= 8191) || (e >= 8204 && e <= 8205) || (e >= 8255 && e <= 8256) || (e >= 8304 && e <= 8591) || (e >= 11264 && e <= 12271) || (e >= 12289 && e <= 55295) || (e >= 63744 && e <= 64975) || (e >= 65008 && e <= 65533) || (e >= 65536 && e <= 983039);
                })(this.char());

            )
                this.bump();
            return this.message.slice(e, this.offset());
        }),
        (e.prototype.parseLiteral = function (e, t) {
            for (var n = this.clonePosition(), r = ''; ; ) {
                var i = this.tryParseQuote(t);
                if (i) {
                    r += i;
                    continue;
                }
                var a = this.tryParseUnquoted(e, t);
                if (a) {
                    r += a;
                    continue;
                }
                var s = this.tryParseLeftAngleBracket();
                if (s) {
                    r += s;
                    continue;
                }
                break;
            }
            var l = E(n, this.clonePosition());
            return {
                val: {
                    type: o.wD.literal,
                    value: r,
                    location: l
                },
                err: null
            };
        }),
        (e.prototype.tryParseLeftAngleBracket = function () {
            return !this.isEOF() &&
                60 === this.char() &&
                (this.ignoreTag ||
                    !(function (e) {
                        return M(e) || 47 === e;
                    })(this.peek() || 0))
                ? (this.bump(), '<')
                : null;
        }),
        (e.prototype.tryParseQuote = function (e) {
            if (this.isEOF() || 39 !== this.char()) return null;
            switch (this.peek()) {
                case 39:
                    return this.bump(), this.bump(), "'";
                case 123:
                case 60:
                case 62:
                case 125:
                    break;
                case 35:
                    if ('plural' === e || 'selectordinal' === e) break;
                    return null;
                default:
                    return null;
            }
            this.bump();
            var t = [this.char()];
            for (this.bump(); !this.isEOF(); ) {
                var n = this.char();
                if (39 === n) {
                    if (39 === this.peek()) t.push(39), this.bump();
                    else {
                        this.bump();
                        break;
                    }
                } else t.push(n);
                this.bump();
            }
            return O.apply(void 0, t);
        }),
        (e.prototype.tryParseUnquoted = function (e, t) {
            if (this.isEOF()) return null;
            var n = this.char();
            return 60 === n || 123 === n || (35 === n && ('plural' === t || 'selectordinal' === t)) || (125 === n && e > 0) ? null : (this.bump(), O(n));
        }),
        (e.prototype.parseArgument = function (e, t) {
            var n = this.clonePosition();
            if ((this.bump(), this.bumpSpace(), this.isEOF())) return this.error(s.o.EXPECT_ARGUMENT_CLOSING_BRACE, E(n, this.clonePosition()));
            if (125 === this.char()) return this.bump(), this.error(s.o.EMPTY_ARGUMENT, E(n, this.clonePosition()));
            var r = this.parseIdentifierIfPossible().value;
            if (!r) return this.error(s.o.MALFORMED_ARGUMENT, E(n, this.clonePosition()));
            if ((this.bumpSpace(), this.isEOF())) return this.error(s.o.EXPECT_ARGUMENT_CLOSING_BRACE, E(n, this.clonePosition()));
            switch (this.char()) {
                case 125:
                    return (
                        this.bump(),
                        {
                            val: {
                                type: o.wD.argument,
                                value: r,
                                location: E(n, this.clonePosition())
                            },
                            err: null
                        }
                    );
                case 44:
                    if ((this.bump(), this.bumpSpace(), this.isEOF())) return this.error(s.o.EXPECT_ARGUMENT_CLOSING_BRACE, E(n, this.clonePosition()));
                    return this.parseArgumentOptions(e, t, r, n);
                default:
                    return this.error(s.o.MALFORMED_ARGUMENT, E(n, this.clonePosition()));
            }
        }),
        (e.prototype.parseIdentifierIfPossible = function () {
            var e = this.clonePosition(),
                t = this.offset(),
                n = i(this.message, t),
                r = t + n.length;
            return (
                this.bumpTo(r),
                {
                    value: n,
                    location: E(e, this.clonePosition())
                }
            );
        }),
        (e.prototype.parseArgumentOptions = function (e, t, n, r) {
            var i,
                l = this.clonePosition(),
                d = this.parseIdentifierIfPossible().value,
                _ = this.clonePosition();
            switch (d) {
                case '':
                    return this.error(s.o.EXPECT_ARGUMENT_TYPE, E(l, _));
                case 'number':
                case 'date':
                case 'time':
                    this.bumpSpace();
                    var f = null;
                    if (this.bumpIf(',')) {
                        this.bumpSpace();
                        var h = this.clonePosition(),
                            p = this.parseSimpleArgStyleIfPossible();
                        if (p.err) return p;
                        var I = L(p.val);
                        if (0 === I.length) return this.error(s.o.EXPECT_ARGUMENT_STYLE, E(this.clonePosition(), this.clonePosition()));
                        f = {
                            style: I,
                            styleLocation: E(h, this.clonePosition())
                        };
                    }
                    var m = this.tryParseArgumentClose(r);
                    if (m.err) return m;
                    var T = E(r, this.clonePosition());
                    if (f && N(null == f ? void 0 : f.style, '::', 0)) {
                        var S = C(f.style.slice(2));
                        if ('number' === d) {
                            var p = this.parseNumberSkeletonFromString(S, f.styleLocation);
                            if (p.err) return p;
                            return {
                                val: {
                                    type: o.wD.number,
                                    value: n,
                                    location: T,
                                    style: p.val
                                },
                                err: null
                            };
                        }
                        if (0 === S.length) return this.error(s.o.EXPECT_DATE_TIME_SKELETON, T);
                        var g = S;
                        this.locale && (g = (0, c.T)(S, this.locale));
                        var I = {
                            type: o.aV.dateTime,
                            pattern: g,
                            location: f.styleLocation,
                            parsedOptions: this.shouldParseSkeletons ? (0, u.parseDateTimeSkeleton)(g) : {}
                        };
                        return {
                            val: {
                                type: 'date' === d ? o.wD.date : o.wD.time,
                                value: n,
                                location: T,
                                style: I
                            },
                            err: null
                        };
                    }
                    return {
                        val: {
                            type: 'number' === d ? o.wD.number : 'date' === d ? o.wD.date : o.wD.time,
                            value: n,
                            location: T,
                            style: null !== (i = null == f ? void 0 : f.style) && void 0 !== i ? i : null
                        },
                        err: null
                    };
                case 'plural':
                case 'selectordinal':
                case 'select':
                    var A = this.clonePosition();
                    if ((this.bumpSpace(), !this.bumpIf(','))) return this.error(s.o.EXPECT_SELECT_ARGUMENT_OPTIONS, E(A, (0, a.pi)({}, A)));
                    this.bumpSpace();
                    var O = this.parseIdentifierIfPossible(),
                        v = 0;
                    if ('select' !== d && 'offset' === O.value) {
                        if (!this.bumpIf(':')) return this.error(s.o.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, E(this.clonePosition(), this.clonePosition()));
                        this.bumpSpace();
                        var p = this.tryParseDecimalInteger(s.o.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, s.o.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                        if (p.err) return p;
                        this.bumpSpace(), (O = this.parseIdentifierIfPossible()), (v = p.val);
                    }
                    var y = this.tryParsePluralOrSelectOptions(e, d, t, O);
                    if (y.err) return y;
                    var m = this.tryParseArgumentClose(r);
                    if (m.err) return m;
                    var D = E(r, this.clonePosition());
                    if ('select' === d)
                        return {
                            val: {
                                type: o.wD.select,
                                value: n,
                                options: R(y.val),
                                location: D
                            },
                            err: null
                        };
                    return {
                        val: {
                            type: o.wD.plural,
                            value: n,
                            options: R(y.val),
                            offset: v,
                            pluralType: 'plural' === d ? 'cardinal' : 'ordinal',
                            location: D
                        },
                        err: null
                    };
                default:
                    return this.error(s.o.INVALID_ARGUMENT_TYPE, E(l, _));
            }
        }),
        (e.prototype.tryParseArgumentClose = function (e) {
            return this.isEOF() || 125 !== this.char()
                ? this.error(s.o.EXPECT_ARGUMENT_CLOSING_BRACE, E(e, this.clonePosition()))
                : (this.bump(),
                  {
                      val: !0,
                      err: null
                  });
        }),
        (e.prototype.parseSimpleArgStyleIfPossible = function () {
            for (var e = 0, t = this.clonePosition(); !this.isEOF(); )
                switch (this.char()) {
                    case 39:
                        this.bump();
                        var n = this.clonePosition();
                        if (!this.bumpUntil("'")) return this.error(s.o.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, E(n, this.clonePosition()));
                        this.bump();
                        break;
                    case 123:
                        (e += 1), this.bump();
                        break;
                    case 125:
                        if (!(e > 0))
                            return {
                                val: this.message.slice(t.offset, this.offset()),
                                err: null
                            };
                        e -= 1;
                        break;
                    default:
                        this.bump();
                }
            return {
                val: this.message.slice(t.offset, this.offset()),
                err: null
            };
        }),
        (e.prototype.parseNumberSkeletonFromString = function (e, t) {
            var n = [];
            try {
                n = (0, u.parseNumberSkeletonFromString)(e);
            } catch (e) {
                return this.error(s.o.INVALID_NUMBER_SKELETON, t);
            }
            return {
                val: {
                    type: o.aV.number,
                    tokens: n,
                    location: t,
                    parsedOptions: this.shouldParseSkeletons ? (0, u.parseNumberSkeleton)(n) : {}
                },
                err: null
            };
        }),
        (e.prototype.tryParsePluralOrSelectOptions = function (e, t, n, r) {
            for (var i, a = !1, o = [], l = new Set(), u = r.value, c = r.location; ; ) {
                if (0 === u.length) {
                    var d = this.clonePosition();
                    if ('select' !== t && this.bumpIf('=')) {
                        var _ = this.tryParseDecimalInteger(s.o.EXPECT_PLURAL_ARGUMENT_SELECTOR, s.o.INVALID_PLURAL_ARGUMENT_SELECTOR);
                        if (_.err) return _;
                        (c = E(d, this.clonePosition())), (u = this.message.slice(d.offset, this.offset()));
                    } else break;
                }
                if (l.has(u)) return this.error('select' === t ? s.o.DUPLICATE_SELECT_ARGUMENT_SELECTOR : s.o.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
                'other' === u && (a = !0), this.bumpSpace();
                var f = this.clonePosition();
                if (!this.bumpIf('{')) return this.error('select' === t ? s.o.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : s.o.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, E(this.clonePosition(), this.clonePosition()));
                var h = this.parseMessage(e + 1, t, n);
                if (h.err) return h;
                var p = this.tryParseArgumentClose(f);
                if (p.err) return p;
                o.push([
                    u,
                    {
                        value: h.val,
                        location: E(f, this.clonePosition())
                    }
                ]),
                    l.add(u),
                    this.bumpSpace(),
                    (u = (i = this.parseIdentifierIfPossible()).value),
                    (c = i.location);
            }
            return 0 === o.length
                ? this.error('select' === t ? s.o.EXPECT_SELECT_ARGUMENT_SELECTOR : s.o.EXPECT_PLURAL_ARGUMENT_SELECTOR, E(this.clonePosition(), this.clonePosition()))
                : this.requiresOtherClause && !a
                  ? this.error(s.o.MISSING_OTHER_CLAUSE, E(this.clonePosition(), this.clonePosition()))
                  : {
                        val: o,
                        err: null
                    };
        }),
        (e.prototype.tryParseDecimalInteger = function (e, t) {
            var n = 1,
                r = this.clonePosition();
            this.bumpIf('+') || (this.bumpIf('-') && (n = -1));
            for (var i = !1, a = 0; !this.isEOF(); ) {
                var s = this.char();
                if (s >= 48 && s <= 57) (i = !0), (a = 10 * a + (s - 48)), this.bump();
                else break;
            }
            var o = E(r, this.clonePosition());
            return i
                ? S((a *= n))
                    ? {
                          val: a,
                          err: null
                      }
                    : this.error(t, o)
                : this.error(e, o);
        }),
        (e.prototype.offset = function () {
            return this.position.offset;
        }),
        (e.prototype.isEOF = function () {
            return this.offset() === this.message.length;
        }),
        (e.prototype.clonePosition = function () {
            return {
                offset: this.position.offset,
                line: this.position.line,
                column: this.position.column
            };
        }),
        (e.prototype.char = function () {
            var e = this.position.offset;
            if (e >= this.message.length) throw Error('out of bound');
            var t = v(this.message, e);
            if (void 0 === t) throw Error('Offset '.concat(e, ' is at invalid UTF-16 code unit boundary'));
            return t;
        }),
        (e.prototype.error = function (e, t) {
            return {
                val: null,
                err: {
                    kind: e,
                    message: this.message,
                    location: t
                }
            };
        }),
        (e.prototype.bump = function () {
            if (!this.isEOF()) {
                var e = this.char();
                10 === e ? ((this.position.line += 1), (this.position.column = 1), (this.position.offset += 1)) : ((this.position.column += 1), (this.position.offset += e < 65536 ? 1 : 2));
            }
        }),
        (e.prototype.bumpIf = function (e) {
            if (N(this.message, e, this.offset())) {
                for (var t = 0; t < e.length; t++) this.bump();
                return !0;
            }
            return !1;
        }),
        (e.prototype.bumpUntil = function (e) {
            var t = this.offset(),
                n = this.message.indexOf(e, t);
            return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
        }),
        (e.prototype.bumpTo = function (e) {
            if (this.offset() > e) throw Error('targetOffset '.concat(e, ' must be greater than or equal to the current offset ').concat(this.offset()));
            for (e = Math.min(e, this.message.length); ; ) {
                var t = this.offset();
                if (t === e) break;
                if (t > e) throw Error('targetOffset '.concat(e, ' is at invalid UTF-16 code unit boundary'));
                if ((this.bump(), this.isEOF())) break;
            }
        }),
        (e.prototype.bumpSpace = function () {
            for (; !this.isEOF() && P(this.char()); ) this.bump();
        }),
        (e.prototype.peek = function () {
            if (this.isEOF()) return null;
            var e = this.char(),
                t = this.offset(),
                n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
            return null != n ? n : null;
        }),
        e
    );
})();
function M(e) {
    return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
}
function P(e) {
    return (e >= 9 && e <= 13) || 32 === e || 133 === e || (e >= 8206 && e <= 8207) || 8232 === e || 8233 === e;
}
