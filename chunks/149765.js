r.d(n, {
    $e: function () {
        return N;
    },
    Bw: function () {
        return g;
    },
    Db: function () {
        return R;
    },
    IH: function () {
        return O;
    },
    Od: function () {
        return D;
    },
    U_: function () {
        return S;
    },
    e$: function () {
        return C;
    },
    fS: function () {
        return A;
    },
    hX: function () {
        return T;
    },
    r0: function () {
        return L;
    },
    ug: function () {
        return x;
    },
    vB: function () {
        return v;
    }
});
var i = r(309749);
var a = r(654861),
    s = r.n(a);
function o(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let l = 64,
    u = 16,
    c = 4;
function d() {
    try {
        return !0;
    } catch (e) {
        return !1;
    }
}
function f(e, n, r) {
    let i = 0;
    for (let a = 0; a < r; a++) {
        let r = e[n + a];
        if (void 0 === r) break;
        i += r * 16 ** a;
    }
    return i;
}
function _(e) {
    let n = [];
    for (let r = 0; r < e.length; r++) {
        let i = Number(e[r]);
        for (let e = 0; i || e < n.length; e++) (i += 10 * (n[e] || 0)), (n[e] = i % 16), (i = (i - n[e]) / 16);
    }
    return n;
}
function h(e) {
    let n = _(e),
        r = Array(c);
    for (let e = 0; e < c; e++) r[c - 1 - e] = f(n, e * c, c);
    return r;
}
class p {
    static fromString(e) {
        return new p(h(e), e);
    }
    static fromBit(e) {
        let n = Array(c),
            r = Math.floor(e / u);
        for (let i = 0; i < c; i++) n[c - 1 - i] = i === r ? 1 << (e - r * u) : 0;
        return new p(n);
    }
    static asUintN(e, n) {
        let { parts: r } = n,
            i = 0,
            a = 0;
        for (; a < e && a < r.length * u; ) {
            let n = Math.min(e - a, u),
                s = (1 << n) - 1,
                o = r.length - Math.floor(a / u) - 1;
            (i |= (r[o] & s) << a), (a += n);
        }
        return i;
    }
    and(e) {
        let { parts: n } = e;
        return new p(this.parts.map((e, r) => e & n[r]));
    }
    or(e) {
        let { parts: n } = e;
        return new p(this.parts.map((e, r) => e | n[r]));
    }
    xor(e) {
        let { parts: n } = e;
        return new p(this.parts.map((e, r) => e ^ n[r]));
    }
    not() {
        return new p(this.parts.map((e) => ~e));
    }
    equals(e) {
        let { parts: n } = e;
        return this.parts.every((e, r) => e === n[r]);
    }
    toString() {
        if (null != this.str) return this.str;
        let e = Array(l / 4);
        return (
            this.parts.forEach((n, r) => {
                let i = _(n.toString());
                for (let n = 0; n < 4; n++) e[n + 4 * r] = i[3 - n] || 0;
            }),
            (this.str = s().fromArray(e, 16).toString())
        );
    }
    toJSON() {
        return this.toString();
    }
    constructor(e, n) {
        o(this, 'parts', void 0), o(this, 'str', void 0), (this.parts = e), (this.str = n);
    }
}
let m = d();
m &&
    null == BigInt.prototype.toJSON &&
    (BigInt.prototype.toJSON = function () {
        return this.toString();
    });
let g = m
        ? function (e) {
              return 'bigint' == typeof e;
          }
        : function (e) {
              return e instanceof p;
          },
    E = {},
    v = m
        ? function (e) {
              return BigInt(e);
          }
        : function (e) {
              return e instanceof p ? e : ('number' == typeof e && (e = e.toString()), null != E[e]) ? E[e] : ((E[e] = p.fromString(e)), E[e]);
          },
    I = v(0),
    T = m
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I;
              return e & n;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I;
              return e.and(n);
          },
    b = m
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I;
              return e | n;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I;
              return e.or(n);
          },
    y = m
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I;
              return e ^ n;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I;
              return e.xor(n);
          },
    S = m
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I;
              return ~e;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I;
              return e.not();
          },
    A = m
        ? function (e, n) {
              return e === n;
          }
        : function (e, n) {
              return null == e || null == n ? e == n : e.equals(n);
          };
function N() {
    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    let i = n[0];
    for (let e = 1; e < n.length; e++) i = b(i, n[e]);
    return i;
}
function C(e, n) {
    return A(T(e, n), n);
}
function R(e, n) {
    return !A(T(e, n), I);
}
function O(e, n) {
    return n === I ? e : b(e, n);
}
function D(e, n) {
    return n === I ? e : y(e, T(e, n));
}
let L = m
        ? function (e) {
              return BigInt(1) << BigInt(e);
          }
        : function (e) {
              return p.fromBit(e);
          },
    x = m
        ? function (e, n) {
              return Number(BigInt.asUintN(e, n));
          }
        : function (e, n) {
              return p.asUintN(e, n);
          };
