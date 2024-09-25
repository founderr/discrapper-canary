var r = n(754675),
    i = n(39493),
    a = n(855543),
    o = n(143866),
    s = n(142670),
    l = '[object Boolean]',
    u = '[object Date]',
    c = '[object Map]',
    d = '[object Number]',
    _ = '[object RegExp]',
    E = '[object Set]',
    f = '[object String]',
    h = '[object Symbol]',
    p = '[object ArrayBuffer]',
    m = '[object DataView]',
    I = '[object Float32Array]',
    T = '[object Float64Array]',
    g = '[object Int8Array]',
    S = '[object Int16Array]',
    A = '[object Int32Array]',
    v = '[object Uint8Array]',
    N = '[object Uint8ClampedArray]',
    O = '[object Uint16Array]',
    R = '[object Uint32Array]';
function C(e, t, n) {
    var C = e.constructor;
    switch (t) {
        case p:
            return r(e);
        case l:
        case u:
            return new C(+e);
        case m:
            return i(e, n);
        case I:
        case T:
        case g:
        case S:
        case A:
        case v:
        case N:
        case O:
        case R:
            return s(e, n);
        case c:
            return new C();
        case d:
        case f:
            return new C(e);
        case _:
            return a(e);
        case E:
            return new C();
        case h:
            return o(e);
    }
}
e.exports = C;
