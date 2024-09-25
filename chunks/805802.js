n.d(t, {
    S: function () {
        return _;
    }
});
var r = n(146150),
    i = n(812975),
    a = n(531171),
    o = n(695170),
    s = n(686942),
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
    var n = [],
        r = [],
        i = [],
        a = [],
        o = (0, l.o)(e),
        s = o.dtstart,
        u = o.tzid;
    return (
        m(e, t.unfold).forEach(function (e) {
            if (e) {
                var t,
                    o = p(e),
                    s = o.name,
                    c = o.parms,
                    d = o.value;
                switch (s.toUpperCase()) {
                    case 'RRULE':
                        if (c.length) throw Error('unsupported RRULE parm: '.concat(c.join(',')));
                        n.push((0, l.B)(e));
                        break;
                    case 'RDATE':
                        var _ = null !== (t = /RDATE(?:;TZID=([^:=]+))?/i.exec(e)) && void 0 !== t ? t : [],
                            E = _[1];
                        E && !u && (u = E), (r = r.concat(T(d, c)));
                        break;
                    case 'EXRULE':
                        if (c.length) throw Error('unsupported EXRULE parm: '.concat(c.join(',')));
                        i.push((0, l.B)(d));
                        break;
                    case 'EXDATE':
                        a = a.concat(T(d, c));
                        break;
                    case 'DTSTART':
                        break;
                    default:
                        throw Error('unsupported property: ' + s);
                }
            }
        }),
        {
            dtstart: s,
            tzid: u,
            rrulevals: n,
            rdatevals: r,
            exrulevals: i,
            exdatevals: a
        }
    );
}
function d(e, t) {
    var n = c(e, t),
        r = n.rrulevals,
        o = n.rdatevals,
        s = n.exrulevals,
        l = n.exdatevals,
        u = n.dtstart,
        d = n.tzid,
        _ = !1 === t.cache;
    if ((t.compatible && ((t.forceset = !0), (t.unfold = !0)), t.forceset || r.length > 1 || o.length || s.length || l.length)) {
        var f = new a.p(_);
        return (
            f.dtstart(u),
            f.tzid(d || void 0),
            r.forEach(function (e) {
                f.rrule(new i.Ci(E(e, u, d), _));
            }),
            o.forEach(function (e) {
                f.rdate(e);
            }),
            s.forEach(function (e) {
                f.exrule(new i.Ci(E(e, u, d), _));
            }),
            l.forEach(function (e) {
                f.exdate(e);
            }),
            t.compatible && t.dtstart && f.rdate(u),
            f
        );
    }
    var h = r[0] || {};
    return new i.Ci(E(h, h.dtstart || t.dtstart || u, h.tzid || t.tzid || d), _);
}
function _(e, t) {
    return void 0 === t && (t = {}), d(e, f(t));
}
function E(e, t, n) {
    return (0, r.pi)((0, r.pi)({}, e), {
        dtstart: t,
        tzid: n
    });
}
function f(e) {
    var t = [],
        n = Object.keys(e),
        i = Object.keys(u);
    if (
        (n.forEach(function (e) {
            !(0, s.q9)(i, e) && t.push(e);
        }),
        t.length)
    )
        throw Error('Invalid options: ' + t.join(', '));
    return (0, r.pi)((0, r.pi)({}, u), e);
}
function h(e) {
    if (-1 === e.indexOf(':'))
        return {
            name: 'RRULE',
            value: e
        };
    var t = (0, s.Vl)(e, ':', 1);
    return {
        name: t[0],
        value: t[1]
    };
}
function p(e) {
    var t = h(e),
        n = t.name,
        r = t.value,
        i = n.split(';');
    if (!i) throw Error('empty property name');
    return {
        name: i[0].toUpperCase(),
        parms: i.slice(1),
        value: r
    };
}
function m(e, t) {
    if ((void 0 === t && (t = !1), !(e = e && e.trim()))) throw Error('Invalid empty string');
    if (!t) return e.split(/\s/);
    for (var n = e.split('\n'), r = 0; r < n.length; ) {
        var i = (n[r] = n[r].replace(/\s+$/g, ''));
        i ? (r > 0 && ' ' === i[0] ? ((n[r - 1] += i.slice(1)), n.splice(r, 1)) : (r += 1)) : n.splice(r, 1);
    }
    return n;
}
function I(e) {
    e.forEach(function (e) {
        if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(e)) throw Error('unsupported RDATE/EXDATE parm: ' + e);
    });
}
function T(e, t) {
    return (
        I(t),
        e.split(',').map(function (e) {
            return (0, o.gE)(e);
        })
    );
}
