"use strict";
r("70102"), r("311790"), r("477657"), r("811875"), r("90301"), r("652153"), r("28797"), r("817884"), r("597349"), r("667536"), r("690341"), r("115278"), r("222007"), r("370692"), r("667500"), r("453061"), r("477315"), r("527135"), r("426094"), r("332822"), r("659510"), r("990131"), r("781738");
var n = SyntaxError,
  o = Function,
  i = TypeError,
  a = function(t) {
    try {
      return o('"use strict"; return (' + t + ").constructor;")()
    } catch (t) {}
  },
  u = Object.getOwnPropertyDescriptor;
if (u) try {
  u({}, "")
} catch (t) {
  u = null
}
var l = function() {
    throw new i
  },
  s = u ? function() {
    try {
      return arguments.callee, l
    } catch (t) {
      try {
        return u(arguments, "callee").get
      } catch (t) {
        return l
      }
    }
  }() : l,
  c = r("923771")(),
  p = r("29364")(),
  f = Object.getPrototypeOf || (p ? function(t) {
    return t.__proto__
  } : null),
  y = {},
  h = "undefined" != typeof Uint8Array && f ? f(Uint8Array) : void 0,
  d = {
    "%AggregateError%": "undefined" == typeof AggregateError ? void 0 : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
    "%ArrayIteratorPrototype%": c && f ? f([][Symbol.iterator]()) : void 0,
    "%AsyncFromSyncIteratorPrototype%": void 0,
    "%AsyncFunction%": y,
    "%AsyncGenerator%": y,
    "%AsyncGeneratorFunction%": y,
    "%AsyncIteratorPrototype%": y,
    "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
    "%BigInt%": "undefined" == typeof BigInt ? void 0 : BigInt,
    "%BigInt64Array%": "undefined" == typeof BigInt64Array ? void 0 : BigInt64Array,
    "%BigUint64Array%": "undefined" == typeof BigUint64Array ? void 0 : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": "undefined" == typeof DataView ? void 0 : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array,
    "%Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array,
    "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? void 0 : FinalizationRegistry,
    "%Function%": o,
    "%GeneratorFunction%": y,
    "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
    "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
    "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": c && f ? f(f([][Symbol.iterator]())) : void 0,
    "%JSON%": "object" == typeof JSON ? JSON : void 0,
    "%Map%": "undefined" == typeof Map ? void 0 : Map,
    "%MapIteratorPrototype%": "undefined" != typeof Map && c && f ? f(new Map()[Symbol.iterator]()) : void 0,
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
    "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
    "%RegExp%": RegExp,
    "%Set%": "undefined" == typeof Set ? void 0 : Set,
    "%SetIteratorPrototype%": "undefined" != typeof Set && c && f ? f(new Set()[Symbol.iterator]()) : void 0,
    "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": c && f ? f("" [Symbol.iterator]()) : void 0,
    "%Symbol%": c ? Symbol : void 0,
    "%SyntaxError%": n,
    "%ThrowTypeError%": s,
    "%TypedArray%": h,
    "%TypeError%": i,
    "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
    "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
    "%Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
    "%Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
    "%WeakRef%": "undefined" == typeof WeakRef ? void 0 : WeakRef,
    "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet
  };
if (f) try {
  null.error
} catch (t) {
  var b = f(f(t));
  d["%Error.prototype%"] = b
}
var g = function t(e) {
    var r;
    if ("%AsyncFunction%" === e) r = a("async function () {}");
    else if ("%GeneratorFunction%" === e) r = a("function* () {}");
    else if ("%AsyncGeneratorFunction%" === e) r = a("async function* () {}");
    else if ("%AsyncGenerator%" === e) {
      var n = t("%AsyncGeneratorFunction%");
      n && (r = n.prototype)
    } else if ("%AsyncIteratorPrototype%" === e) {
      var o = t("%AsyncGenerator%");
      o && f && (r = f(o.prototype))
    }
    return d[e] = r, r
  },
  v = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  },
  m = r("459078"),
  S = r("748795"),
  x = m.call(Function.call, Array.prototype.concat),
  A = m.call(Function.apply, Array.prototype.splice),
  w = m.call(Function.call, String.prototype.replace),
  O = m.call(Function.call, String.prototype.slice),
  P = m.call(Function.call, RegExp.prototype.exec),
  j = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  E = /\\(\\)?/g,
  k = function(t) {
    var e = O(t, 0, 1),
      r = O(t, -1);
    if ("%" === e && "%" !== r) throw new n("invalid intrinsic syntax, expected closing `%`");
    if ("%" === r && "%" !== e) throw new n("invalid intrinsic syntax, expected opening `%`");
    var o = [];
    return w(t, j, function(t, e, r, n) {
      o[o.length] = r ? w(n, E, "$1") : e || t
    }), o
  },
  I = function(t, e) {
    var r, o = t;
    if (S(v, o) && (o = "%" + (r = v[o])[0] + "%"), S(d, o)) {
      var a = d[o];
      if (a === y && (a = g(o)), void 0 === a && !e) throw new i("intrinsic " + t + " exists, but is not available. Please file an issue!");
      return {
        alias: r,
        name: o,
        value: a
      }
    }
    throw new n("intrinsic " + t + " does not exist!")
  };
t.exports = function(t, e) {
  if ("string" != typeof t || 0 === t.length) throw new i("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && "boolean" != typeof e) throw new i('"allowMissing" argument must be a boolean');
  if (null === P(/^%?[^%]*%?$/, t)) throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = k(t),
    o = r.length > 0 ? r[0] : "",
    a = I("%" + o + "%", e),
    l = a.name,
    s = a.value,
    c = !1,
    p = a.alias;
  p && (o = p[0], A(r, x([0, 1], p)));
  for (var f = 1, y = !0; f < r.length; f += 1) {
    var h = r[f],
      b = O(h, 0, 1),
      g = O(h, -1);
    if (('"' === b || "'" === b || "`" === b || '"' === g || "'" === g || "`" === g) && b !== g) throw new n("property names with quotes must have matching quotes");
    if (("constructor" === h || !y) && (c = !0), o += "." + h, S(d, l = "%" + o + "%")) s = d[l];
    else if (null != s) {
      if (!(h in s)) {
        if (!e) throw new i("base intrinsic for " + t + " exists, but the property is not available.");
        return
      }
      if (u && f + 1 >= r.length) {
        var v = u(s, h);
        s = (y = !!v) && "get" in v && !("originalValue" in v.get) ? v.get : s[h]
      } else y = S(s, h), s = s[h];
      y && !c && (d[l] = s)
    }
  }
  return s
}