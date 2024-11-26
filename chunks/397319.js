n.d(t, {
    LM: function () {
        return o;
    },
    Rf: function () {
        return l;
    },
    UW: function () {
        return s;
    },
    to: function () {
        return a;
    }
});
var r = n(697),
    i = n(165352);
function a(e) {
    return `${String(e.hour).padStart(2, '0')}:${String(e.minute).padStart(2, '0')}:${String(e.second).padStart(2, '0')}${e.millisecond ? String(e.millisecond / 1000).slice(1) : ''}`;
}
function s(e) {
    let t = (0, r.Mw)(e, new i.IQ());
    return `${String(t.year).padStart(4, '0')}-${String(t.month).padStart(2, '0')}-${String(t.day).padStart(2, '0')}`;
}
function o(e) {
    return `${s(e)}T${a(e)}`;
}
function l(e) {
    var t;
    let n, r, i;
    return `${o(e)}${((n = 0 > Math.sign((t = e.offset)) ? '-' : '+'), (r = Math.floor((t = Math.abs(t)) / 3600000)), (i = (t % 3600000) / 60000), `${n}${String(r).padStart(2, '0')}:${String(i).padStart(2, '0')}`)}[${e.timeZone}]`;
}
