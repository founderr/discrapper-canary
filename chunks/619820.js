e.exports = function (e) {
    var n, i;
    if (((n = r(618336)), (i = r(919089)), 'keypress' === e.type)) {
        var a = String.fromCharCode(e.which);
        return !e.shiftKey && (a = a.toLowerCase()), a;
    }
    return n[e.which] ? n[e.which] : i[e.which] ? i[e.which] : String.fromCharCode(e.which).toLowerCase();
};
