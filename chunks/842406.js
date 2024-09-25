var r = n(607974),
    i = n(350434),
    a = n(91826),
    o = n(400194);
function s(e) {
    return e.call.bind(e);
}
var l = 'undefined' != typeof BigInt,
    u = 'undefined' != typeof Symbol,
    c = s(Object.prototype.toString),
    d = s(Number.prototype.valueOf),
    _ = s(String.prototype.valueOf),
    E = s(Boolean.prototype.valueOf);
if (l) var f = s(BigInt.prototype.valueOf);
if (u) var h = s(Symbol.prototype.valueOf);
function p(e, t) {
    if ('object' != typeof e) return !1;
    try {
        return t(e), !0;
    } catch (e) {
        return !1;
    }
}
function m(e) {
    return ('undefined' != typeof Promise && e instanceof Promise) || (null !== e && 'object' == typeof e && 'function' == typeof e.then && 'function' == typeof e.catch);
}
function I(e) {
    return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : o(e) || Z(e);
}
function T(e) {
    return 'Uint8Array' === a(e);
}
function g(e) {
    return 'Uint8ClampedArray' === a(e);
}
function S(e) {
    return 'Uint16Array' === a(e);
}
function A(e) {
    return 'Uint32Array' === a(e);
}
function v(e) {
    return 'Int8Array' === a(e);
}
function N(e) {
    return 'Int16Array' === a(e);
}
function O(e) {
    return 'Int32Array' === a(e);
}
function R(e) {
    return 'Float32Array' === a(e);
}
function C(e) {
    return 'Float64Array' === a(e);
}
function y(e) {
    return 'BigInt64Array' === a(e);
}
function b(e) {
    return 'BigUint64Array' === a(e);
}
function L(e) {
    return '[object Map]' === c(e);
}
function D(e) {
    return 'undefined' != typeof Map && (L.working ? L(e) : e instanceof Map);
}
function M(e) {
    return '[object Set]' === c(e);
}
function P(e) {
    return 'undefined' != typeof Set && (M.working ? M(e) : e instanceof Set);
}
function U(e) {
    return '[object WeakMap]' === c(e);
}
function w(e) {
    return 'undefined' != typeof WeakMap && (U.working ? U(e) : e instanceof WeakMap);
}
function x(e) {
    return '[object WeakSet]' === c(e);
}
function G(e) {
    return x(e);
}
function k(e) {
    return '[object ArrayBuffer]' === c(e);
}
function B(e) {
    return 'undefined' != typeof ArrayBuffer && (k.working ? k(e) : e instanceof ArrayBuffer);
}
function F(e) {
    return '[object DataView]' === c(e);
}
function Z(e) {
    return 'undefined' != typeof DataView && (F.working ? F(e) : e instanceof DataView);
}
(t.isArgumentsObject = r), (t.isGeneratorFunction = i), (t.isTypedArray = o), (t.isPromise = m), (t.isArrayBufferView = I), (t.isUint8Array = T), (t.isUint8ClampedArray = g), (t.isUint16Array = S), (t.isUint32Array = A), (t.isInt8Array = v), (t.isInt16Array = N), (t.isInt32Array = O), (t.isFloat32Array = R), (t.isFloat64Array = C), (t.isBigInt64Array = y), (t.isBigUint64Array = b), (L.working = 'undefined' != typeof Map && L(new Map())), (t.isMap = D), (M.working = 'undefined' != typeof Set && M(new Set())), (t.isSet = P), (U.working = 'undefined' != typeof WeakMap && U(new WeakMap())), (t.isWeakMap = w), (x.working = 'undefined' != typeof WeakSet && x(new WeakSet())), (t.isWeakSet = G), (k.working = 'undefined' != typeof ArrayBuffer && k(new ArrayBuffer())), (t.isArrayBuffer = B), (F.working = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView && F(new DataView(new ArrayBuffer(1), 0, 1))), (t.isDataView = Z);
var V = 'undefined' != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
function H(e) {
    return '[object SharedArrayBuffer]' === c(e);
}
function Y(e) {
    return void 0 !== V && (void 0 === H.working && (H.working = H(new V())), H.working ? H(e) : e instanceof V);
}
function j(e) {
    return '[object AsyncFunction]' === c(e);
}
function W(e) {
    return '[object Map Iterator]' === c(e);
}
function K(e) {
    return '[object Set Iterator]' === c(e);
}
function z(e) {
    return '[object Generator]' === c(e);
}
function q(e) {
    return '[object WebAssembly.Module]' === c(e);
}
function Q(e) {
    return p(e, d);
}
function X(e) {
    return p(e, _);
}
function $(e) {
    return p(e, E);
}
function J(e) {
    return l && p(e, f);
}
function ee(e) {
    return u && p(e, h);
}
function et(e) {
    return Q(e) || X(e) || $(e) || J(e) || ee(e);
}
function en(e) {
    return 'undefined' != typeof Uint8Array && (B(e) || Y(e));
}
(t.isSharedArrayBuffer = Y),
    (t.isAsyncFunction = j),
    (t.isMapIterator = W),
    (t.isSetIterator = K),
    (t.isGeneratorObject = z),
    (t.isWebAssemblyCompiledModule = q),
    (t.isNumberObject = Q),
    (t.isStringObject = X),
    (t.isBooleanObject = $),
    (t.isBigIntObject = J),
    (t.isSymbolObject = ee),
    (t.isBoxedPrimitive = et),
    (t.isAnyArrayBuffer = en),
    ['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(function (e) {
        Object.defineProperty(t, e, {
            enumerable: !1,
            value: function () {
                throw Error(e + ' is not supported in userland');
            }
        });
    });
