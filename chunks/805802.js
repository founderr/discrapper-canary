n.d(t, {
    S: function () {
        return c;
    }
});
var r = n(146150),
    i = n(812975),
    a = n(531171),
    s = n(695170),
    o = n(686942),
    l = n(200734),
    u = {
        dtstart: null,
        cache: !1,
        unfold: !1,
        forceset: !1,
        compatible: !1,
        tzid: null
    };
function c(e, t) {
    return (
        void 0 === t && (t = {}),
        (function (e, t) {
            var n,
                r,
                s,
                u,
                c,
                _,
                p,
                h,
                m,
                g =
                    ((n = e),
                    (r = t),
                    (s = []),
                    (u = []),
                    (c = []),
                    (_ = []),
                    (h = (p = (0, l.o)(n)).dtstart),
                    (m = p.tzid),
                    (function (e, t) {
                        if ((void 0 === t && (t = !1), !(e = e && e.trim()))) throw Error('Invalid empty string');
                        if (!t) return e.split(/\s/);
                        for (var n = e.split('\n'), r = 0; r < n.length; ) {
                            var i = (n[r] = n[r].replace(/\s+$/g, ''));
                            i ? (r > 0 && ' ' === i[0] ? ((n[r - 1] += i.slice(1)), n.splice(r, 1)) : (r += 1)) : n.splice(r, 1);
                        }
                        return n;
                    })(n, r.unfold).forEach(function (e) {
                        if (e) {
                            var t,
                                n = (function (e) {
                                    var t = (function (e) {
                                            if (-1 === e.indexOf(':'))
                                                return {
                                                    name: 'RRULE',
                                                    value: e
                                                };
                                            var t = (0, o.Vl)(e, ':', 1);
                                            return {
                                                name: t[0],
                                                value: t[1]
                                            };
                                        })(e),
                                        n = t.name,
                                        r = t.value,
                                        i = n.split(';');
                                    if (!i) throw Error('empty property name');
                                    return {
                                        name: i[0].toUpperCase(),
                                        parms: i.slice(1),
                                        value: r
                                    };
                                })(e),
                                r = n.name,
                                i = n.parms,
                                a = n.value;
                            switch (r.toUpperCase()) {
                                case 'RRULE':
                                    if (i.length) throw Error('unsupported RRULE parm: '.concat(i.join(',')));
                                    s.push((0, l.B)(e));
                                    break;
                                case 'RDATE':
                                    var d = (null !== (t = /RDATE(?:;TZID=([^:=]+))?/i.exec(e)) && void 0 !== t ? t : [])[1];
                                    d && !m && (m = d), (u = u.concat(f(a, i)));
                                    break;
                                case 'EXRULE':
                                    if (i.length) throw Error('unsupported EXRULE parm: '.concat(i.join(',')));
                                    c.push((0, l.B)(a));
                                    break;
                                case 'EXDATE':
                                    _ = _.concat(f(a, i));
                                    break;
                                case 'DTSTART':
                                    break;
                                default:
                                    throw Error('unsupported property: ' + r);
                            }
                        }
                    }),
                    {
                        dtstart: h,
                        tzid: m,
                        rrulevals: s,
                        rdatevals: u,
                        exrulevals: c,
                        exdatevals: _
                    }),
                E = g.rrulevals,
                v = g.rdatevals,
                I = g.exrulevals,
                b = g.exdatevals,
                S = g.dtstart,
                T = g.tzid,
                y = !1 === t.cache;
            if ((t.compatible && ((t.forceset = !0), (t.unfold = !0)), t.forceset || E.length > 1 || v.length || I.length || b.length)) {
                var A = new a.p(y);
                return (
                    A.dtstart(S),
                    A.tzid(T || void 0),
                    E.forEach(function (e) {
                        A.rrule(new i.Ci(d(e, S, T), y));
                    }),
                    v.forEach(function (e) {
                        A.rdate(e);
                    }),
                    I.forEach(function (e) {
                        A.exrule(new i.Ci(d(e, S, T), y));
                    }),
                    b.forEach(function (e) {
                        A.exdate(e);
                    }),
                    t.compatible && t.dtstart && A.rdate(S),
                    A
                );
            }
            var N = E[0] || {};
            return new i.Ci(d(N, N.dtstart || t.dtstart || S, N.tzid || t.tzid || T), y);
        })(
            e,
            (function (e) {
                var t = [],
                    n = Object.keys(e),
                    i = Object.keys(u);
                if (
                    (n.forEach(function (e) {
                        !(0, o.q9)(i, e) && t.push(e);
                    }),
                    t.length)
                )
                    throw Error('Invalid options: ' + t.join(', '));
                return (0, r.pi)((0, r.pi)({}, u), e);
            })(t)
        )
    );
}
function d(e, t, n) {
    return (0, r.pi)((0, r.pi)({}, e), {
        dtstart: t,
        tzid: n
    });
}
function f(e, t) {
    return (
        !(function (e) {
            e.forEach(function (e) {
                if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(e)) throw Error('unsupported RDATE/EXDATE parm: ' + e);
            });
        })(t),
        e.split(',').map(function (e) {
            return (0, s.gE)(e);
        })
    );
}
