r.d(e, {
    HI: function () {
        return a.HI;
    },
    Ii: function () {
        return a.Ii;
    },
    Jo: function () {
        return a.Jo;
    },
    O4: function () {
        return a.O4;
    },
    Qc: function () {
        return s;
    },
    VG: function () {
        return a.VG;
    },
    Wh: function () {
        return a.Wh;
    },
    Wi: function () {
        return a.Wi;
    },
    pe: function () {
        return a.pe;
    },
    rp: function () {
        return a.rp;
    },
    uf: function () {
        return a.uf;
    },
    wD: function () {
        return a.wD;
    },
    yx: function () {
        return a.yx;
    }
});
var n = r(146150),
    i = r(827671),
    o = r(596771),
    a = r(928125);
function s(t, e) {
    void 0 === e && (e = {}),
        (e = (0, n.pi)(
            {
                shouldParseSkeletons: !0,
                requiresOtherClause: !0
            },
            e
        ));
    var r = new o._(t, e).parse();
    if (r.err) {
        var s = SyntaxError(i.o[r.err.kind]);
        throw ((s.location = r.err.location), (s.originalMessage = r.err.message), s);
    }
    return (
        !(null == e ? void 0 : e.captureLocation) &&
            !(function t(e) {
                e.forEach(function (e) {
                    if ((delete e.location, (0, a.Wi)(e) || (0, a.Jo)(e))) for (var r in e.options) delete e.options[r].location, t(e.options[r].value);
                    else (0, a.uf)(e) && (0, a.Wh)(e.style) ? delete e.style.location : ((0, a.rp)(e) || (0, a.pe)(e)) && (0, a.Ii)(e.style) ? delete e.style.location : (0, a.HI)(e) && t(e.children);
                });
            })(r.val),
        r.val
    );
}
