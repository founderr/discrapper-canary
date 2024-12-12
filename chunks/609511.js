var i = r(939793),
    a = r(861960),
    s = r(777994),
    o = r(326048),
    l = r(688709),
    u = '[object Boolean]',
    c = '[object Date]',
    d = '[object Map]',
    f = '[object Number]',
    _ = '[object RegExp]',
    h = '[object Set]',
    p = '[object String]',
    m = '[object Symbol]',
    g = '[object ArrayBuffer]',
    E = '[object DataView]',
    v = '[object Float32Array]',
    I = '[object Float64Array]',
    T = '[object Int8Array]',
    b = '[object Int16Array]',
    y = '[object Int32Array]',
    S = '[object Uint8Array]',
    A = '[object Uint8ClampedArray]',
    N = '[object Uint16Array]',
    C = '[object Uint32Array]';
function R(e, n, r) {
    var R = e.constructor;
    switch (n) {
        case g:
            return i(e);
        case u:
        case c:
            return new R(+e);
        case E:
            return a(e, r);
        case v:
        case I:
        case T:
        case b:
        case y:
        case S:
        case A:
        case N:
        case C:
            return l(e, r);
        case d:
            return new R();
        case f:
        case p:
            return new R(e);
        case _:
            return s(e);
        case h:
            return new R();
        case m:
            return o(e);
    }
}
e.exports = R;
