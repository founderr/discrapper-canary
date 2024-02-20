"use strict";
E.r(_), E.d(_, {
  isBigFlag: function() {
    return n
  },
  default: function() {
    return C
  }
}), E("274635");
var t = E("552442"),
  o = E.n(t);
let I = 4;

function T(e) {
  let _ = [];
  for (let E = 0; E < e.length; E++) {
    let t = Number(e[E]);
    for (let e = 0; t || e < _.length; e++) t += 10 * (_[e] || 0), _[e] = t % 16, t = (t - _[e]) / 16
  }
  return _
}
class r {
  static fromString(e) {
    return new r(function(e) {
      let _ = T(e),
        E = Array(I);
      for (let e = 0; e < I; e++) E[I - 1 - e] = function(e, _, E) {
        let t = 0;
        for (let o = 0; o < E; o++) {
          let E = e[_ + o];
          if (void 0 === E) break;
          t += E * 16 ** o
        }
        return t
      }(_, e * I, I);
      return E
    }(e), e)
  }
  static fromBit(e) {
    let _ = Array(I),
      E = Math.floor(e / 16);
    for (let t = 0; t < I; t++) _[I - 1 - t] = t === E ? 1 << e - 16 * E : 0;
    return new r(_)
  }
  static asUintN(e, _) {
    let {
      parts: E
    } = _, t = 0, o = 0;
    for (; o < e && o < 16 * E.length;) {
      let _ = Math.min(e - o, 16),
        I = (1 << _) - 1,
        T = E.length - Math.floor(o / 16) - 1;
      t |= (E[T] & I) << o, o += _
    }
    return t
  }
  and(e) {
    let {
      parts: _
    } = e;
    return new r(this.parts.map((e, E) => e & _[E]))
  }
  or(e) {
    let {
      parts: _
    } = e;
    return new r(this.parts.map((e, E) => e | _[E]))
  }
  xor(e) {
    let {
      parts: _
    } = e;
    return new r(this.parts.map((e, E) => e ^ _[E]))
  }
  not() {
    return new r(this.parts.map(e => ~e))
  }
  equals(e) {
    let {
      parts: _
    } = e;
    return this.parts.every((e, E) => e === _[E])
  }
  toString() {
    if (null != this.str) return this.str;
    let e = Array(16);
    return this.parts.forEach((_, E) => {
      let t = T(_.toString());
      for (let _ = 0; _ < 4; _++) e[_ + 4 * E] = t[3 - _] || 0
    }), this.str = o.fromArray(e, 16).toString()
  }
  toJSON() {
    return this.toString()
  }
  constructor(e, _) {
    this.parts = e, this.str = _
  }
}
let a = function() {
  try {
    return !0
  } catch (e) {
    return !1
  }
}();
a && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
  return this.toString()
});
let n = a ? function(e) {
    return "bigint" == typeof e
  } : function(e) {
    return e instanceof r
  },
  i = {},
  A = a ? function(e) {
    return BigInt(e)
  } : function(e) {
    return e instanceof r ? e : ("number" == typeof e && (e = e.toString()), null != i[e]) ? i[e] : (i[e] = r.fromString(e), i[e])
  },
  s = A(0),
  R = a ? function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
      _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
    return e & _
  } : function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
      _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
    return e.and(_)
  },
  N = a ? function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
      _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
    return e | _
  } : function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
      _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
    return e.or(_)
  },
  O = a ? function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
      _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
    return e ^ _
  } : function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
      _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
    return e.xor(_)
  },
  S = a ? function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
    return ~e
  } : function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
    return e.not()
  },
  L = a ? function(e, _) {
    return e === _
  } : function(e, _) {
    return null == e || null == _ ? e == _ : e.equals(_)
  },
  l = a ? function(e) {
    return BigInt(1) << BigInt(e)
  } : function(e) {
    return r.fromBit(e)
  },
  D = a ? function(e, _) {
    return Number(BigInt.asUintN(e, _))
  } : function(e, _) {
    return r.asUintN(e, _)
  };
var C = {
  asUintN: D,
  combine: function() {
    for (var e = arguments.length, _ = Array(e), E = 0; E < e; E++) _[E] = arguments[E];
    let t = _[0];
    for (let e = 1; e < _.length; e++) t = N(t, _[e]);
    return t
  },
  add: function(e, _) {
    return _ === s ? e : N(e, _)
  },
  remove: function(e, _) {
    return _ === s ? e : O(e, R(e, _))
  },
  filter: R,
  invert: S,
  has: function(e, _) {
    return L(R(e, _), _)
  },
  hasAny: function(e, _) {
    return !L(R(e, _), s)
  },
  equals: L,
  deserialize: A,
  getFlag: l
}