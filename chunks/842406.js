var r = n(607974),
    i = n(350434),
    a = n(91826),
    s = n(400194);
function o(e) {
    return e.call.bind(e);
}
var l = 'undefined' != typeof BigInt,
    u = 'undefined' != typeof Symbol,
    c = o(Object.prototype.toString),
    d = o(Number.prototype.valueOf),
    f = o(String.prototype.valueOf),
    _ = o(Boolean.prototype.valueOf);
if (l) var p = o(BigInt.prototype.valueOf);
if (u) var h = o(Symbol.prototype.valueOf);
function m(e, t) {
    if ('object' != typeof e) return !1;
    try {
        return t(e), !0;
    } catch (e) {
        return !1;
    }
}
(t.isArgumentsObject = r), (t.isGeneratorFunction = i), (t.isTypedArray = s);
t.isPromise = function (e) {
    return ('undefined' != typeof Promise && e instanceof Promise) || (null !== e && 'object' == typeof e && 'function' == typeof e.then && 'function' == typeof e.catch);
};
t.isArrayBufferView = function (e) {
    return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : s(e) || y(e);
};
t.isUint8Array = function (e) {
    return 'Uint8Array' === a(e);
};
t.isUint8ClampedArray = function (e) {
    return 'Uint8ClampedArray' === a(e);
};
t.isUint16Array = function (e) {
    return 'Uint16Array' === a(e);
};
t.isUint32Array = function (e) {
    return 'Uint32Array' === a(e);
};
t.isInt8Array = function (e) {
    return 'Int8Array' === a(e);
};
t.isInt16Array = function (e) {
    return 'Int16Array' === a(e);
};
t.isInt32Array = function (e) {
    return 'Int32Array' === a(e);
};
t.isFloat32Array = function (e) {
    return 'Float32Array' === a(e);
};
t.isFloat64Array = function (e) {
    return 'Float64Array' === a(e);
};
t.isBigInt64Array = function (e) {
    return 'BigInt64Array' === a(e);
};
function g(e) {
    return '[object Map]' === c(e);
}
(t.isBigUint64Array = function (e) {
    return 'BigUint64Array' === a(e);
}),
    (g.working = 'undefined' != typeof Map && g(new Map()));
function E(e) {
    return '[object Set]' === c(e);
}
(t.isMap = function (e) {
    return 'undefined' != typeof Map && (g.working ? g(e) : e instanceof Map);
}),
    (E.working = 'undefined' != typeof Set && E(new Set()));
function v(e) {
    return '[object WeakMap]' === c(e);
}
(t.isSet = function (e) {
    return 'undefined' != typeof Set && (E.working ? E(e) : e instanceof Set);
}),
    (v.working = 'undefined' != typeof WeakMap && v(new WeakMap()));
function b(e) {
    return '[object WeakSet]' === c(e);
}
(t.isWeakMap = function (e) {
    return 'undefined' != typeof WeakMap && (v.working ? v(e) : e instanceof WeakMap);
}),
    (b.working = 'undefined' != typeof WeakSet && b(new WeakSet()));
function I(e) {
    return '[object ArrayBuffer]' === c(e);
}
function S(e) {
    return 'undefined' != typeof ArrayBuffer && (I.working ? I(e) : e instanceof ArrayBuffer);
}
function T(e) {
    return '[object DataView]' === c(e);
}
function y(e) {
    return 'undefined' != typeof DataView && (T.working ? T(e) : e instanceof DataView);
}
(t.isWeakSet = function (e) {
    return b(e);
}),
    (I.working = 'undefined' != typeof ArrayBuffer && I(new ArrayBuffer())),
    (t.isArrayBuffer = S),
    (T.working = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView && T(new DataView(new ArrayBuffer(1), 0, 1))),
    (t.isDataView = y);
var A = 'undefined' != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
function N(e) {
    return '[object SharedArrayBuffer]' === c(e);
}
function C(e) {
    return void 0 !== A && (void 0 === N.working && (N.working = N(new A())), N.working ? N(e) : e instanceof A);
}
t.isSharedArrayBuffer = C;
t.isAsyncFunction = function (e) {
    return '[object AsyncFunction]' === c(e);
};
t.isMapIterator = function (e) {
    return '[object Map Iterator]' === c(e);
};
t.isSetIterator = function (e) {
    return '[object Set Iterator]' === c(e);
};
t.isGeneratorObject = function (e) {
    return '[object Generator]' === c(e);
};
function R(e) {
    return m(e, d);
}
function O(e) {
    return m(e, f);
}
function D(e) {
    return m(e, _);
}
function L(e) {
    return l && m(e, p);
}
function x(e) {
    return u && m(e, h);
}
(t.isWebAssemblyCompiledModule = function (e) {
    return '[object WebAssembly.Module]' === c(e);
}),
    (t.isNumberObject = R),
    (t.isStringObject = O),
    (t.isBooleanObject = D),
    (t.isBigIntObject = L),
    (t.isSymbolObject = x);
t.isBoxedPrimitive = function (e) {
    return R(e) || O(e) || D(e) || L(e) || x(e);
};
(t.isAnyArrayBuffer = function (e) {
    return 'undefined' != typeof Uint8Array && (S(e) || C(e));
}),
    ['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(function (e) {
        Object.defineProperty(t, e, {
            enumerable: !1,
            value: function () {
                throw Error(e + ' is not supported in userland');
            }
        });
    });
