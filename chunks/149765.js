r.d(t, {
    $e: function () {
        return f;
    },
    Bw: function () {
        return s;
    },
    Db: function () {
        return L;
    },
    IH: function () {
        return p;
    },
    Od: function () {
        return h;
    },
    U_: function () {
        return N;
    },
    e$: function () {
        return O;
    },
    fS: function () {
        return d;
    },
    hX: function () {
        return R;
    },
    r0: function () {
        return D;
    },
    ug: function () {
        return S;
    },
    vB: function () {
        return I;
    }
}),
    r(309749);
var a = r(654861),
    n = r.n(a);
function _(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
let o = 4;
function E(e) {
    let t = [];
    for (let r = 0; r < e.length; r++) {
        let a = Number(e[r]);
        for (let e = 0; a || e < t.length; e++) (a += 10 * (t[e] || 0)), (t[e] = a % 16), (a = (a - t[e]) / 16);
    }
    return t;
}
class i {
    static fromString(e) {
        return new i(
            (function (e) {
                let t = E(e),
                    r = Array(o);
                for (let e = 0; e < o; e++)
                    r[o - 1 - e] = (function (e, t, r) {
                        let a = 0;
                        for (let n = 0; n < r; n++) {
                            let r = e[t + n];
                            if (void 0 === r) break;
                            a += r * 16 ** n;
                        }
                        return a;
                    })(t, e * o, o);
                return r;
            })(e),
            e
        );
    }
    static fromBit(e) {
        let t = Array(o),
            r = Math.floor(e / 16);
        for (let a = 0; a < o; a++) t[o - 1 - a] = a === r ? 1 << (e - 16 * r) : 0;
        return new i(t);
    }
    static asUintN(e, t) {
        let { parts: r } = t,
            a = 0,
            n = 0;
        for (; n < e && n < 16 * r.length; ) {
            let t = Math.min(e - n, 16),
                _ = (1 << t) - 1,
                o = r.length - Math.floor(n / 16) - 1;
            (a |= (r[o] & _) << n), (n += t);
        }
        return a;
    }
    and(e) {
        let { parts: t } = e;
        return new i(this.parts.map((e, r) => e & t[r]));
    }
    or(e) {
        let { parts: t } = e;
        return new i(this.parts.map((e, r) => e | t[r]));
    }
    xor(e) {
        let { parts: t } = e;
        return new i(this.parts.map((e, r) => e ^ t[r]));
    }
    not() {
        return new i(this.parts.map((e) => ~e));
    }
    equals(e) {
        let { parts: t } = e;
        return this.parts.every((e, r) => e === t[r]);
    }
    toString() {
        if (null != this.str) return this.str;
        let e = Array(16);
        return (
            this.parts.forEach((t, r) => {
                let a = E(t.toString());
                for (let t = 0; t < 4; t++) e[t + 4 * r] = a[3 - t] || 0;
            }),
            (this.str = n().fromArray(e, 16).toString())
        );
    }
    toJSON() {
        return this.toString();
    }
    constructor(e, t) {
        _(this, 'parts', void 0), _(this, 'str', void 0), (this.parts = e), (this.str = t);
    }
}
let c = (function () {
    try {
        return !0;
    } catch (e) {
        return !1;
    }
})();
c &&
    null == BigInt.prototype.toJSON &&
    (BigInt.prototype.toJSON = function () {
        return this.toString();
    });
let s = c
        ? function (e) {
              return 'bigint' == typeof e;
          }
        : function (e) {
              return e instanceof i;
          },
    l = {},
    I = c
        ? function (e) {
              return BigInt(e);
          }
        : function (e) {
              return e instanceof i ? e : ('number' == typeof e && (e = e.toString()), null != l[e]) ? l[e] : ((l[e] = i.fromString(e)), l[e]);
          },
    u = I(0),
    R = c
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
              return e & t;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
              return e.and(t);
          },
    A = c
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
              return e | t;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
              return e.or(t);
          },
    T = c
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
              return e ^ t;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
              return e.xor(t);
          },
    N = c
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
              return ~e;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
              return e.not();
          },
    d = c
        ? function (e, t) {
              return e === t;
          }
        : function (e, t) {
              return null == e || null == t ? e == t : e.equals(t);
          };
function f() {
    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    let a = t[0];
    for (let e = 1; e < t.length; e++) a = A(a, t[e]);
    return a;
}
function O(e, t) {
    return d(R(e, t), t);
}
function L(e, t) {
    return !d(R(e, t), u);
}
function p(e, t) {
    return t === u ? e : A(e, t);
}
function h(e, t) {
    return t === u ? e : T(e, R(e, t));
}
let D = c
        ? function (e) {
              return BigInt(1) << BigInt(e);
          }
        : function (e) {
              return i.fromBit(e);
          },
    S = c
        ? function (e, t) {
              return Number(BigInt.asUintN(e, t));
          }
        : function (e, t) {
              return i.asUintN(e, t);
          };
