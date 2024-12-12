r.d(n, {
    c: function () {
        return s;
    },
    m: function () {
        return o;
    }
});
let i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split(''),
    a = [];
for (let e = 0; e < i.length; e++) a[i[e].charCodeAt(0)] = e;
function s(e) {
    let n = (3 * e.length) / 4;
    '=' == e[e.length - 2] ? (n -= 2) : '=' == e[e.length - 1] && (n -= 1);
    let r = new Uint8Array(n),
        i = 0,
        s = 0,
        o,
        l = 0;
    for (let n = 0; n < e.length; n++) {
        if (void 0 === (o = a[e.charCodeAt(n)]))
            switch (e[n]) {
                case '=':
                    s = 0;
                case '\n':
                case '\r':
                case '\t':
                case ' ':
                    continue;
                default:
                    throw Error('invalid base64 string.');
            }
        switch (s) {
            case 0:
                (l = o), (s = 1);
                break;
            case 1:
                (r[i++] = (l << 2) | ((48 & o) >> 4)), (l = o), (s = 2);
                break;
            case 2:
                (r[i++] = ((15 & l) << 4) | ((60 & o) >> 2)), (l = o), (s = 3);
                break;
            case 3:
                (r[i++] = ((3 & l) << 6) | o), (s = 0);
        }
    }
    if (1 == s) throw Error('invalid base64 string.');
    return r.subarray(0, i);
}
function o(e) {
    let n = '',
        r = 0,
        a,
        s = 0;
    for (let o = 0; o < e.length; o++)
        switch (((a = e[o]), r)) {
            case 0:
                (n += i[a >> 2]), (s = (3 & a) << 4), (r = 1);
                break;
            case 1:
                (n += i[s | (a >> 4)]), (s = (15 & a) << 2), (r = 2);
                break;
            case 2:
                (n += i[s | (a >> 6)] + i[63 & a]), (r = 0);
        }
    return r && ((n += i[s] + '='), 1 == r && (n += '=')), n;
}
(a['-'.charCodeAt(0)] = i.indexOf('+')), (a['_'.charCodeAt(0)] = i.indexOf('/'));
