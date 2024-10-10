r.d(t, {
    $e: function () {
        return O;
    },
    Bw: function () {
        return s;
    },
    Db: function () {
        return f;
    },
    IH: function () {
        return L;
    },
    Od: function () {
        return S;
    },
    U_: function () {
        return N;
    },
    e$: function () {
        return p;
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
        return h;
    },
    vB: function () {
        return u;
    }
}),
    r(309749);
var n = r(654861),
    a = r.n(n);
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
function i(e) {
    let t = [];
    for (let r = 0; r < e.length; r++) {
        let n = Number(e[r]);
        for (let e = 0; n || e < t.length; e++) (n += 10 * (t[e] || 0)), (t[e] = n % 16), (n = (n - t[e]) / 16);
    }
    return t;
}
class E {
    static fromString(e) {
        return new E(
            (function (e) {
                let t = i(e),
                    r = Array(o);
                for (let e = 0; e < o; e++)
                    r[o - 1 - e] = (function (e, t, r) {
                        let n = 0;
                        for (let a = 0; a < r; a++) {
                            let r = e[t + a];
                            if (void 0 === r) break;
                            n += r * 16 ** a;
                        }
                        return n;
                    })(t, e * o, o);
                return r;
            })(e),
            e
        );
    }
    static fromBit(e) {
        let t = Array(o),
            r = Math.floor(e / 16);
        for (let n = 0; n < o; n++) t[o - 1 - n] = n === r ? 1 << (e - 16 * r) : 0;
        return new E(t);
    }
    static asUintN(e, t) {
        let { parts: r } = t,
            n = 0,
            a = 0;
        for (; a < e && a < 16 * r.length; ) {
            let t = Math.min(e - a, 16),
                _ = (1 << t) - 1,
                o = r.length - Math.floor(a / 16) - 1;
            (n |= (r[o] & _) << a), (a += t);
        }
        return n;
    }
    and(e) {
        let { parts: t } = e;
        return new E(this.parts.map((e, r) => e & t[r]));
    }
    or(e) {
        let { parts: t } = e;
        return new E(this.parts.map((e, r) => e | t[r]));
    }
    xor(e) {
        let { parts: t } = e;
        return new E(this.parts.map((e, r) => e ^ t[r]));
    }
    not() {
        return new E(this.parts.map((e) => ~e));
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
                let n = i(t.toString());
                for (let t = 0; t < 4; t++) e[t + 4 * r] = n[3 - t] || 0;
            }),
            (this.str = a().fromArray(e, 16).toString())
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
              return e instanceof E;
          },
    I = {},
    u = c
        ? function (e) {
              return BigInt(e);
          }
        : function (e) {
              return e instanceof E ? e : ('number' == typeof e && (e = e.toString()), null != I[e]) ? I[e] : ((I[e] = E.fromString(e)), I[e]);
          },
    l = u(0),
    R = c
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
              return e & t;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
              return e.and(t);
          },
    A = c
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
              return e | t;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
              return e.or(t);
          },
    T = c
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
              return e ^ t;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
              return e.xor(t);
          },
    N = c
        ? function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
              return ~e;
          }
        : function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
              return e.not();
          },
    d = c
        ? function (e, t) {
              return e === t;
          }
        : function (e, t) {
              return null == e || null == t ? e == t : e.equals(t);
          };
function O() {
    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    let n = t[0];
    for (let e = 1; e < t.length; e++) n = A(n, t[e]);
    return n;
}
function p(e, t) {
    return d(R(e, t), t);
}
function f(e, t) {
    return !d(R(e, t), l);
}
function L(e, t) {
    return t === l ? e : A(e, t);
}
function S(e, t) {
    return t === l ? e : T(e, R(e, t));
}
let D = c
        ? function (e) {
              return BigInt(1) << BigInt(e);
          }
        : function (e) {
              return E.fromBit(e);
          },
    h = c
        ? function (e, t) {
              return Number(BigInt.asUintN(e, t));
          }
        : function (e, t) {
              return E.asUintN(e, t);
          };
