r.d(n, {
    $6: function () {
        return f;
    },
    OV: function () {
        return l;
    },
    Qe: function () {
        return c;
    },
    Rw: function () {
        return s;
    },
    X9: function () {
        return d;
    },
    bc: function () {
        return i;
    },
    gb: function () {
        return u;
    },
    wI: function () {
        return o;
    }
});
var i,
    a = r(259630);
!(function (e) {
    (e.FORMAT_ERROR = 'FORMAT_ERROR'), (e.UNSUPPORTED_FORMATTER = 'UNSUPPORTED_FORMATTER'), (e.INVALID_CONFIG = 'INVALID_CONFIG'), (e.MISSING_DATA = 'MISSING_DATA'), (e.MISSING_TRANSLATION = 'MISSING_TRANSLATION');
})(i || (i = {}));
var s = (function (e) {
        function n(r, i, a) {
            var s = this,
                o = a ? (a instanceof Error ? a : Error(String(a))) : void 0;
            return (
                ((s =
                    e.call(
                        this,
                        '[@formatjs/intl Error '
                            .concat(r, '] ')
                            .concat(i, '\n')
                            .concat(o ? '\n'.concat(o.message, '\n').concat(o.stack) : '')
                    ) || this).code = r),
                'function' == typeof Error.captureStackTrace && Error.captureStackTrace(s, n),
                s
            );
        }
        return (0, a.ZT)(n, e), n;
    })(Error),
    o = (function (e) {
        function n(n, r) {
            return e.call(this, i.UNSUPPORTED_FORMATTER, n, r) || this;
        }
        return (0, a.ZT)(n, e), n;
    })(s),
    l = (function (e) {
        function n(n, r) {
            return e.call(this, i.INVALID_CONFIG, n, r) || this;
        }
        return (0, a.ZT)(n, e), n;
    })(s),
    u = (function (e) {
        function n(n, r) {
            return e.call(this, i.MISSING_DATA, n, r) || this;
        }
        return (0, a.ZT)(n, e), n;
    })(s),
    c = (function (e) {
        function n(n, r, a) {
            var s = e.call(this, i.FORMAT_ERROR, ''.concat(n, '\nLocale: ').concat(r, '\n'), a) || this;
            return (s.locale = r), s;
        }
        return (0, a.ZT)(n, e), n;
    })(s),
    d = (function (e) {
        function n(n, r, i, a) {
            var s =
                e.call(
                    this,
                    ''
                        .concat(n, '\nMessageID: ')
                        .concat(null == i ? void 0 : i.id, '\nDefault Message: ')
                        .concat(null == i ? void 0 : i.defaultMessage, '\nDescription: ')
                        .concat(null == i ? void 0 : i.description, '\n'),
                    r,
                    a
                ) || this;
            return (s.descriptor = i), (s.locale = r), s;
        }
        return (0, a.ZT)(n, e), n;
    })(c),
    f = (function (e) {
        function n(n, r) {
            var a =
                e.call(
                    this,
                    i.MISSING_TRANSLATION,
                    'Missing message: "'
                        .concat(n.id, '" for locale "')
                        .concat(r, '", using ')
                        .concat(
                            n.defaultMessage
                                ? 'default message ('.concat(
                                      'string' == typeof n.defaultMessage
                                          ? n.defaultMessage
                                          : n.defaultMessage
                                                .map(function (e) {
                                                    var n;
                                                    return null !== (n = e.value) && void 0 !== n ? n : JSON.stringify(e);
                                                })
                                                .join(),
                                      ')'
                                  )
                                : 'id',
                            ' as fallback.'
                        )
                ) || this;
            return (a.descriptor = n), a;
        }
        return (0, a.ZT)(n, e), n;
    })(s);
