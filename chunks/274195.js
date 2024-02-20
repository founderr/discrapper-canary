"use strict";
r("222007"), r("311790"), r("477657"), r("811875"), r("90301"), r("652153"), r("28797"), r("817884"), r("597349"), r("667536"), r("690341"), r("70102");
var n = r("187798"),
  o = r("478898"),
  i = r("48494"),
  a = r("682086");

function u(t) {
  return t.call.bind(t)
}
var l = "undefined" != typeof BigInt,
  s = "undefined" != typeof Symbol,
  c = u(Object.prototype.toString),
  p = u(Number.prototype.valueOf),
  f = u(String.prototype.valueOf),
  y = u(Boolean.prototype.valueOf);
if (l) var h = u(BigInt.prototype.valueOf);
if (s) var d = u(Symbol.prototype.valueOf);

function b(t, e) {
  if ("object" != typeof t) return !1;
  try {
    return e(t), !0
  } catch (t) {
    return !1
  }
}
e.isArgumentsObject = n, e.isGeneratorFunction = o, e.isTypedArray = a;
e.isPromise = function(t) {
  return "undefined" != typeof Promise && t instanceof Promise || null !== t && "object" == typeof t && "function" == typeof t.then && "function" == typeof t.catch
};
e.isArrayBufferView = function(t) {
  return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : a(t) || O(t)
};
e.isUint8Array = function(t) {
  return "Uint8Array" === i(t)
};
e.isUint8ClampedArray = function(t) {
  return "Uint8ClampedArray" === i(t)
};
e.isUint16Array = function(t) {
  return "Uint16Array" === i(t)
};
e.isUint32Array = function(t) {
  return "Uint32Array" === i(t)
};
e.isInt8Array = function(t) {
  return "Int8Array" === i(t)
};
e.isInt16Array = function(t) {
  return "Int16Array" === i(t)
};
e.isInt32Array = function(t) {
  return "Int32Array" === i(t)
};
e.isFloat32Array = function(t) {
  return "Float32Array" === i(t)
};
e.isFloat64Array = function(t) {
  return "Float64Array" === i(t)
};
e.isBigInt64Array = function(t) {
  return "BigInt64Array" === i(t)
};

function g(t) {
  return "[object Map]" === c(t)
}
e.isBigUint64Array = function(t) {
  return "BigUint64Array" === i(t)
}, g.working = "undefined" != typeof Map && g(new Map);

function v(t) {
  return "[object Set]" === c(t)
}
e.isMap = function(t) {
  return "undefined" != typeof Map && (g.working ? g(t) : t instanceof Map)
}, v.working = "undefined" != typeof Set && v(new Set);

function m(t) {
  return "[object WeakMap]" === c(t)
}
e.isSet = function(t) {
  return "undefined" != typeof Set && (v.working ? v(t) : t instanceof Set)
}, m.working = "undefined" != typeof WeakMap && m(new WeakMap);

function S(t) {
  return "[object WeakSet]" === c(t)
}
e.isWeakMap = function(t) {
  return "undefined" != typeof WeakMap && (m.working ? m(t) : t instanceof WeakMap)
}, S.working = "undefined" != typeof WeakSet && S(new WeakSet);

function x(t) {
  return "[object ArrayBuffer]" === c(t)
}

function A(t) {
  return "undefined" != typeof ArrayBuffer && (x.working ? x(t) : t instanceof ArrayBuffer)
}

function w(t) {
  return "[object DataView]" === c(t)
}

function O(t) {
  return "undefined" != typeof DataView && (w.working ? w(t) : t instanceof DataView)
}
e.isWeakSet = function(t) {
  return S(t)
}, x.working = "undefined" != typeof ArrayBuffer && x(new ArrayBuffer), e.isArrayBuffer = A, w.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && w(new DataView(new ArrayBuffer(1), 0, 1)), e.isDataView = O;
var P = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;

function j(t) {
  return "[object SharedArrayBuffer]" === c(t)
}

function E(t) {
  return void 0 !== P && (void 0 === j.working && (j.working = j(new P)), j.working ? j(t) : t instanceof P)
}
e.isSharedArrayBuffer = E;
e.isAsyncFunction = function(t) {
  return "[object AsyncFunction]" === c(t)
};
e.isMapIterator = function(t) {
  return "[object Map Iterator]" === c(t)
};
e.isSetIterator = function(t) {
  return "[object Set Iterator]" === c(t)
};
e.isGeneratorObject = function(t) {
  return "[object Generator]" === c(t)
};

function k(t) {
  return b(t, p)
}

function I(t) {
  return b(t, f)
}

function M(t) {
  return b(t, y)
}

function F(t) {
  return l && b(t, h)
}

function R(t) {
  return s && b(t, d)
}
e.isWebAssemblyCompiledModule = function(t) {
  return "[object WebAssembly.Module]" === c(t)
}, e.isNumberObject = k, e.isStringObject = I, e.isBooleanObject = M, e.isBigIntObject = F, e.isSymbolObject = R;
e.isBoxedPrimitive = function(t) {
  return k(t) || I(t) || M(t) || F(t) || R(t)
};
e.isAnyArrayBuffer = function(t) {
  return "undefined" != typeof Uint8Array && (A(t) || E(t))
}, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(t) {
  Object.defineProperty(e, t, {
    enumerable: !1,
    value: function() {
      throw Error(t + " is not supported in userland")
    }
  })
})