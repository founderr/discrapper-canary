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
    _ = o(String.prototype.valueOf),
    E = o(Boolean.prototype.valueOf);
if (l) var f = o(BigInt.prototype.valueOf);
if (u) var h = o(Symbol.prototype.valueOf);
function p(e, t) {
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
    return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : s(e) || O(e);
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
function I(e) {
    return '[object Map]' === c(e);
}
(t.isBigUint64Array = function (e) {
    return 'BigUint64Array' === a(e);
}),
    (I.working = 'undefined' != typeof Map && I(new Map()));
function m(e) {
    return '[object Set]' === c(e);
}
(t.isMap = function (e) {
    return 'undefined' != typeof Map && (I.working ? I(e) : e instanceof Map);
}),
    (m.working = 'undefined' != typeof Set && m(new Set()));
function T(e) {
    return '[object WeakMap]' === c(e);
}
(t.isSet = function (e) {
    return 'undefined' != typeof Set && (m.working ? m(e) : e instanceof Set);
}),
    (T.working = 'undefined' != typeof WeakMap && T(new WeakMap()));
function S(e) {
    return '[object WeakSet]' === c(e);
}
(t.isWeakMap = function (e) {
    return 'undefined' != typeof WeakMap && (T.working ? T(e) : e instanceof WeakMap);
}),
    (S.working = 'undefined' != typeof WeakSet && S(new WeakSet()));
function g(e) {
    return '[object ArrayBuffer]' === c(e);
}
function A(e) {
    return 'undefined' != typeof ArrayBuffer && (g.working ? g(e) : e instanceof ArrayBuffer);
}
function N(e) {
    return '[object DataView]' === c(e);
}
function O(e) {
    return 'undefined' != typeof DataView && (N.working ? N(e) : e instanceof DataView);
}
(t.isWeakSet = function (e) {
    return S(e);
}),
    (g.working = 'undefined' != typeof ArrayBuffer && g(new ArrayBuffer())),
    (t.isArrayBuffer = A),
    (N.working = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView && N(new DataView(new ArrayBuffer(1), 0, 1))),
    (t.isDataView = O);
var R = 'undefined' != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
function v(e) {
    return '[object SharedArrayBuffer]' === c(e);
}
function C(e) {
    return void 0 !== R && (void 0 === v.working && (v.working = v(new R())), v.working ? v(e) : e instanceof R);
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
function L(e) {
    return p(e, d);
}
function D(e) {
    return p(e, _);
}
function y(e) {
    return p(e, E);
}
function b(e) {
    return l && p(e, f);
}
function M(e) {
    return u && p(e, h);
}
(t.isWebAssemblyCompiledModule = function (e) {
    return '[object WebAssembly.Module]' === c(e);
}),
    (t.isNumberObject = L),
    (t.isStringObject = D),
    (t.isBooleanObject = y),
    (t.isBigIntObject = b),
    (t.isSymbolObject = M);
t.isBoxedPrimitive = function (e) {
    return L(e) || D(e) || y(e) || b(e) || M(e);
};
(t.isAnyArrayBuffer = function (e) {
    return 'undefined' != typeof Uint8Array && (A(e) || C(e));
}),
    ['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(function (e) {
        Object.defineProperty(t, e, {
            enumerable: !1,
            value: function () {
                throw Error(e + ' is not supported in userland');
            }
        });
    });
