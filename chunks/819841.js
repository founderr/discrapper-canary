function r(e) {
    var n,
        i,
        a = '';
    if ('string' == typeof e || 'number' == typeof e) a += e;
    else if ('object' == typeof e) {
        if (Array.isArray(e)) for (n = 0; n < e.length; n++) e[n] && (i = r(e[n])) && (a && (a += ' '), (a += i));
        else for (n in e) e[n] && (a && (a += ' '), (a += n));
    }
    return a;
}
function i() {
    for (var e, n, i = 0, a = ''; i < arguments.length; ) (e = arguments[i++]) && (n = r(e)) && (a && (a += ' '), (a += n));
    return a;
}
n.Z = i;
