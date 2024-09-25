function n(e) {
    var t,
        r,
        i = '';
    if ('string' == typeof e || 'number' == typeof e) i += e;
    else if ('object' == typeof e) {
        if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (r = n(e[t])) && (i && (i += ' '), (i += r));
        else for (t in e) e[t] && (i && (i += ' '), (i += t));
    }
    return i;
}
function r() {
    for (var e, t, r = 0, i = ''; r < arguments.length; ) (e = arguments[r++]) && (t = n(e)) && (i && (i += ' '), (i += t));
    return i;
}
t.Z = r;
