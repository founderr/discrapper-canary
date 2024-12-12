function n(e, n, r) {
    switch (r.length) {
        case 0:
            return e.call(n);
        case 1:
            return e.call(n, r[0]);
        case 2:
            return e.call(n, r[0], r[1]);
        case 3:
            return e.call(n, r[0], r[1], r[2]);
    }
    return e.apply(n, r);
}
e.exports = n;
