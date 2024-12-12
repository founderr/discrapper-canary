r.d(n, {
    Fx: function () {
        return d;
    },
    I6: function () {
        return f;
    },
    hl: function () {
        return _;
    }
});
var i = r(146150),
    a = r(707908),
    s = r(686942),
    o = r(812975),
    l = r(695170),
    u = r(713267),
    c = r(68808);
function d(e) {
    for (var n = [], r = Object.keys(e), a = 0, u = r; a < u.length; a++) {
        var c = u[a];
        !(0, s.q9)(o.DY, c) && n.push(c), (0, l.J_)(e[c]) && !(0, l.qb)(e[c]) && n.push(c);
    }
    if (n.length) throw Error('Invalid options: ' + n.join(', '));
    return (0, i.pi)({}, e);
}
function f(e) {
    var n = (0, i.pi)((0, i.pi)({}, o.WN), d(e));
    if (((0, s.EN)(n.byeaster) && (n.freq = o.Ci.YEARLY), !((0, s.EN)(n.freq) && o.Ci.FREQUENCIES[n.freq]))) throw Error('Invalid frequency: '.concat(n.freq, ' ').concat(e.freq));
    if ((!n.dtstart && (n.dtstart = new Date(new Date().setMilliseconds(0))), (0, s.EN)(n.wkst) ? (0, s.hj)(n.wkst) || (n.wkst = n.wkst.weekday) : (n.wkst = o.Ci.MO.weekday), (0, s.EN)(n.bysetpos))) {
        (0, s.hj)(n.bysetpos) && (n.bysetpos = [n.bysetpos]);
        for (var r = 0; r < n.bysetpos.length; r++) {
            var a = n.bysetpos[r];
            if (0 === a || !(a >= -366 && a <= 366)) throw Error('bysetpos must be between 1 and 366, or between -366 and -1');
        }
    }
    if (!(n.byweekno || (0, s.Dw)(n.byweekno) || (0, s.Dw)(n.byyearday) || n.bymonthday || (0, s.Dw)(n.bymonthday) || (0, s.EN)(n.byweekday) || (0, s.EN)(n.byeaster)))
        switch (n.freq) {
            case o.Ci.YEARLY:
                !n.bymonth && (n.bymonth = n.dtstart.getUTCMonth() + 1), (n.bymonthday = n.dtstart.getUTCDate());
                break;
            case o.Ci.MONTHLY:
                n.bymonthday = n.dtstart.getUTCDate();
                break;
            case o.Ci.WEEKLY:
                n.byweekday = [(0, l.FO)(n.dtstart)];
        }
    if (((0, s.EN)(n.bymonth) && !(0, s.kJ)(n.bymonth) && (n.bymonth = [n.bymonth]), (0, s.EN)(n.byyearday) && !(0, s.kJ)(n.byyearday) && (0, s.hj)(n.byyearday) && (n.byyearday = [n.byyearday]), (0, s.EN)(n.bymonthday))) {
        if ((0, s.kJ)(n.bymonthday)) {
            for (var c = [], f = [], r = 0; r < n.bymonthday.length; r++) {
                var a = n.bymonthday[r];
                a > 0 ? c.push(a) : a < 0 && f.push(a);
            }
            (n.bymonthday = c), (n.bynmonthday = f);
        } else n.bymonthday < 0 ? ((n.bynmonthday = [n.bymonthday]), (n.bymonthday = [])) : ((n.bynmonthday = []), (n.bymonthday = [n.bymonthday]));
    } else (n.bymonthday = []), (n.bynmonthday = []);
    if (((0, s.EN)(n.byweekno) && !(0, s.kJ)(n.byweekno) && (n.byweekno = [n.byweekno]), (0, s.EN)(n.byweekday))) {
        if ((0, s.hj)(n.byweekday)) (n.byweekday = [n.byweekday]), (n.bynweekday = null);
        else if ((0, s.xs)(n.byweekday)) (n.byweekday = [u.O.fromStr(n.byweekday).weekday]), (n.bynweekday = null);
        else if (n.byweekday instanceof u.O) !n.byweekday.n || n.freq > o.Ci.MONTHLY ? ((n.byweekday = [n.byweekday.weekday]), (n.bynweekday = null)) : ((n.bynweekday = [[n.byweekday.weekday, n.byweekday.n]]), (n.byweekday = null));
        else {
            for (var _ = [], h = [], r = 0; r < n.byweekday.length; r++) {
                var p = n.byweekday[r];
                if ((0, s.hj)(p)) {
                    _.push(p);
                    continue;
                }
                if ((0, s.xs)(p)) {
                    _.push(u.O.fromStr(p).weekday);
                    continue;
                }
                !p.n || n.freq > o.Ci.MONTHLY ? _.push(p.weekday) : h.push([p.weekday, p.n]);
            }
            (n.byweekday = (0, s.Dw)(_) ? _ : null), (n.bynweekday = (0, s.Dw)(h) ? h : null);
        }
    } else n.bynweekday = null;
    return (0, s.EN)(n.byhour) ? (0, s.hj)(n.byhour) && (n.byhour = [n.byhour]) : (n.byhour = n.freq < o.Ci.HOURLY ? [n.dtstart.getUTCHours()] : null), (0, s.EN)(n.byminute) ? (0, s.hj)(n.byminute) && (n.byminute = [n.byminute]) : (n.byminute = n.freq < o.Ci.MINUTELY ? [n.dtstart.getUTCMinutes()] : null), (0, s.EN)(n.bysecond) ? (0, s.hj)(n.bysecond) && (n.bysecond = [n.bysecond]) : (n.bysecond = n.freq < o.Ci.SECONDLY ? [n.dtstart.getUTCSeconds()] : null), { parsedOptions: n };
}
function _(e) {
    var n = e.dtstart.getTime() % 1000;
    if (!(0, a.e)(e.freq)) return [];
    var r = [];
    return (
        e.byhour.forEach(function (i) {
            e.byminute.forEach(function (a) {
                e.bysecond.forEach(function (e) {
                    r.push(new c.q(i, a, e, n));
                });
            });
        }),
        r
    );
}
