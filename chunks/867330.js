function n(e) {
    var t,
        r,
        i = '';
    if ('string' == typeof e || 'number' == typeof e) i += e;
    else if ('object' == typeof e) {
        if (Array.isArray(e)) {
            var a = e.length;
            for (t = 0; t < a; t++) e[t] && (r = n(e[t])) && (i && (i += ' '), (i += r));
        } else for (r in e) e[r] && (i && (i += ' '), (i += r));
    }
    return i;
}
function r() {
    for (var e, t, r = 0, i = '', a = arguments.length; r < a; r++) (e = arguments[r]) && (t = n(e)) && (i && (i += ' '), (i += t));
    return i;
}
t.Z = r;
