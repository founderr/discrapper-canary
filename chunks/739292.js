r.d(n, {
    HI: function () {
        return o.HI;
    },
    Ii: function () {
        return o.Ii;
    },
    Jo: function () {
        return o.Jo;
    },
    O4: function () {
        return o.O4;
    },
    Qc: function () {
        return u;
    },
    VG: function () {
        return o.VG;
    },
    Wh: function () {
        return o.Wh;
    },
    Wi: function () {
        return o.Wi;
    },
    pe: function () {
        return o.pe;
    },
    rp: function () {
        return o.rp;
    },
    uf: function () {
        return o.uf;
    },
    wD: function () {
        return o.wD;
    },
    yx: function () {
        return o.yx;
    }
});
var i = r(259630),
    a = r(939990),
    s = r(262291),
    o = r(73745);
function l(e) {
    e.forEach(function (e) {
        if ((delete e.location, (0, o.Wi)(e) || (0, o.Jo)(e))) for (var n in e.options) delete e.options[n].location, l(e.options[n].value);
        else (0, o.uf)(e) && (0, o.Wh)(e.style) ? delete e.style.location : ((0, o.rp)(e) || (0, o.pe)(e)) && (0, o.Ii)(e.style) ? delete e.style.location : (0, o.HI)(e) && l(e.children);
    });
}
function u(e, n) {
    void 0 === n && (n = {}),
        (n = (0, i.pi)(
            {
                shouldParseSkeletons: !0,
                requiresOtherClause: !0
            },
            n
        ));
    var r = new s._(e, n).parse();
    if (r.err) {
        var o = SyntaxError(a.o[r.err.kind]);
        throw ((o.location = r.err.location), (o.originalMessage = r.err.message), o);
    }
    return !(null == n ? void 0 : n.captureLocation) && l(r.val), r.val;
}
