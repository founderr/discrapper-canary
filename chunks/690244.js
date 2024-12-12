var i,
    a = r(401801),
    s = r(104509),
    o = r(333567),
    l = r(284456),
    u = r(429675),
    c = r(815329),
    d = r(102099),
    f = Function,
    _ = function (e) {
        try {
        } catch (e) {}
    },
    h = Object.getOwnPropertyDescriptor;
if (h)
    try {
        h({}, '');
    } catch (e) {
        h = null;
    }
var p = function () {
        throw new c();
    },
    m = h
        ? (function () {
              try {
                  return arguments.callee, p;
              } catch (e) {
                  try {
                      return h(arguments, 'callee').get;
                  } catch (e) {
                      return p;
                  }
              }
          })()
        : p,
    g = r(322499)(),
    E = r(79536)(),
    v =
        Object.getPrototypeOf ||
        (E
            ? function (e) {
                  return e.__proto__;
              }
            : null),
    I = {},
    T = 'undefined' != typeof Uint8Array && v ? v(Uint8Array) : i,
    b = {
        __proto__: null,
        '%AggregateError%': 'undefined' == typeof AggregateError ? i : AggregateError,
        '%Array%': Array,
        '%ArrayBuffer%': 'undefined' == typeof ArrayBuffer ? i : ArrayBuffer,
        '%ArrayIteratorPrototype%': g && v ? v([][Symbol.iterator]()) : i,
        '%AsyncFromSyncIteratorPrototype%': i,
        '%AsyncFunction%': I,
        '%AsyncGenerator%': I,
        '%AsyncGeneratorFunction%': I,
        '%AsyncIteratorPrototype%': I,
        '%Atomics%': 'undefined' == typeof Atomics ? i : Atomics,
        '%BigInt%': 'undefined' == typeof BigInt ? i : BigInt,
        '%BigInt64Array%': 'undefined' == typeof BigInt64Array ? i : BigInt64Array,
        '%BigUint64Array%': 'undefined' == typeof BigUint64Array ? i : BigUint64Array,
        '%Boolean%': Boolean,
        '%DataView%': 'undefined' == typeof DataView ? i : DataView,
        '%Date%': Date,
        '%decodeURI%': decodeURI,
        '%decodeURIComponent%': decodeURIComponent,
        '%encodeURI%': encodeURI,
        '%encodeURIComponent%': encodeURIComponent,
        '%Error%': a,
        '%eval%': eval,
        '%EvalError%': s,
        '%Float32Array%': 'undefined' == typeof Float32Array ? i : Float32Array,
        '%Float64Array%': 'undefined' == typeof Float64Array ? i : Float64Array,
        '%FinalizationRegistry%': 'undefined' == typeof FinalizationRegistry ? i : FinalizationRegistry,
        '%Function%': f,
        '%GeneratorFunction%': I,
        '%Int8Array%': 'undefined' == typeof Int8Array ? i : Int8Array,
        '%Int16Array%': 'undefined' == typeof Int16Array ? i : Int16Array,
        '%Int32Array%': 'undefined' == typeof Int32Array ? i : Int32Array,
        '%isFinite%': isFinite,
        '%isNaN%': isNaN,
        '%IteratorPrototype%': g && v ? v(v([][Symbol.iterator]())) : i,
        '%JSON%': 'object' == typeof JSON ? JSON : i,
        '%Map%': 'undefined' == typeof Map ? i : Map,
        '%MapIteratorPrototype%': 'undefined' != typeof Map && g && v ? v(new Map()[Symbol.iterator]()) : i,
        '%Math%': Math,
        '%Number%': Number,
        '%Object%': Object,
        '%parseFloat%': parseFloat,
        '%parseInt%': parseInt,
        '%Promise%': 'undefined' == typeof Promise ? i : Promise,
        '%Proxy%': 'undefined' == typeof Proxy ? i : Proxy,
        '%RangeError%': o,
        '%ReferenceError%': l,
        '%Reflect%': 'undefined' == typeof Reflect ? i : Reflect,
        '%RegExp%': RegExp,
        '%Set%': 'undefined' == typeof Set ? i : Set,
        '%SetIteratorPrototype%': 'undefined' != typeof Set && g && v ? v(new Set()[Symbol.iterator]()) : i,
        '%SharedArrayBuffer%': 'undefined' == typeof SharedArrayBuffer ? i : SharedArrayBuffer,
        '%String%': String,
        '%StringIteratorPrototype%': g && v ? v(''[Symbol.iterator]()) : i,
        '%Symbol%': g ? Symbol : i,
        '%SyntaxError%': u,
        '%ThrowTypeError%': m,
        '%TypedArray%': T,
        '%TypeError%': c,
        '%Uint8Array%': 'undefined' == typeof Uint8Array ? i : Uint8Array,
        '%Uint8ClampedArray%': 'undefined' == typeof Uint8ClampedArray ? i : Uint8ClampedArray,
        '%Uint16Array%': 'undefined' == typeof Uint16Array ? i : Uint16Array,
        '%Uint32Array%': 'undefined' == typeof Uint32Array ? i : Uint32Array,
        '%URIError%': d,
        '%WeakMap%': 'undefined' == typeof WeakMap ? i : WeakMap,
        '%WeakRef%': 'undefined' == typeof WeakRef ? i : WeakRef,
        '%WeakSet%': 'undefined' == typeof WeakSet ? i : WeakSet
    };
if (v)
    try {
        null.error;
    } catch (e) {
        var y = v(v(e));
        b['%Error.prototype%'] = y;
    }
var S = function e(n) {
        var r;
        if ('%AsyncFunction%' === n) r = _('async function () {}');
        else if ('%GeneratorFunction%' === n) r = _('function* () {}');
        else if ('%AsyncGeneratorFunction%' === n) r = _('async function* () {}');
        else if ('%AsyncGenerator%' === n) {
            var i = e('%AsyncGeneratorFunction%');
            i && (r = i.prototype);
        } else if ('%AsyncIteratorPrototype%' === n) {
            var a = e('%AsyncGenerator%');
            a && v && (r = v(a.prototype));
        }
        return (b[n] = r), r;
    },
    A = {
        __proto__: null,
        '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
        '%ArrayPrototype%': ['Array', 'prototype'],
        '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
        '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
        '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
        '%ArrayProto_values%': ['Array', 'prototype', 'values'],
        '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
        '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
        '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
        '%BooleanPrototype%': ['Boolean', 'prototype'],
        '%DataViewPrototype%': ['DataView', 'prototype'],
        '%DatePrototype%': ['Date', 'prototype'],
        '%ErrorPrototype%': ['Error', 'prototype'],
        '%EvalErrorPrototype%': ['EvalError', 'prototype'],
        '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
        '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
        '%FunctionPrototype%': ['Function', 'prototype'],
        '%Generator%': ['GeneratorFunction', 'prototype'],
        '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
        '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
        '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
        '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
        '%JSONParse%': ['JSON', 'parse'],
        '%JSONStringify%': ['JSON', 'stringify'],
        '%MapPrototype%': ['Map', 'prototype'],
        '%NumberPrototype%': ['Number', 'prototype'],
        '%ObjectPrototype%': ['Object', 'prototype'],
        '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
        '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
        '%PromisePrototype%': ['Promise', 'prototype'],
        '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
        '%Promise_all%': ['Promise', 'all'],
        '%Promise_reject%': ['Promise', 'reject'],
        '%Promise_resolve%': ['Promise', 'resolve'],
        '%RangeErrorPrototype%': ['RangeError', 'prototype'],
        '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
        '%RegExpPrototype%': ['RegExp', 'prototype'],
        '%SetPrototype%': ['Set', 'prototype'],
        '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
        '%StringPrototype%': ['String', 'prototype'],
        '%SymbolPrototype%': ['Symbol', 'prototype'],
        '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
        '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
        '%TypeErrorPrototype%': ['TypeError', 'prototype'],
        '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
        '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
        '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
        '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
        '%URIErrorPrototype%': ['URIError', 'prototype'],
        '%WeakMapPrototype%': ['WeakMap', 'prototype'],
        '%WeakSetPrototype%': ['WeakSet', 'prototype']
    },
    N = r(390976),
    C = r(706165),
    R = N.call(Function.call, Array.prototype.concat),
    O = N.call(Function.apply, Array.prototype.splice),
    D = N.call(Function.call, String.prototype.replace),
    L = N.call(Function.call, String.prototype.slice),
    x = N.call(Function.call, RegExp.prototype.exec),
    w = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    P = /\\(\\)?/g,
    M = function (e) {
        var n = L(e, 0, 1),
            r = L(e, -1);
        if ('%' === n && '%' !== r) throw new u('invalid intrinsic syntax, expected closing `%`');
        if ('%' === r && '%' !== n) throw new u('invalid intrinsic syntax, expected opening `%`');
        var i = [];
        return (
            D(e, w, function (e, n, r, a) {
                i[i.length] = r ? D(a, P, '$1') : n || e;
            }),
            i
        );
    },
    k = function (e, n) {
        var r,
            i = e;
        if ((C(A, i) && (i = '%' + (r = A[i])[0] + '%'), C(b, i))) {
            var a = b[i];
            if ((a === I && (a = S(i)), void 0 === a && !n)) throw new c('intrinsic ' + e + ' exists, but is not available. Please file an issue!');
            return {
                alias: r,
                name: i,
                value: a
            };
        }
        throw new u('intrinsic ' + e + ' does not exist!');
    };
e.exports = function (e, n) {
    if ('string' != typeof e || 0 === e.length) throw new c('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && 'boolean' != typeof n) throw new c('"allowMissing" argument must be a boolean');
    if (null === x(/^%?[^%]*%?$/, e)) throw new u('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    var r = M(e),
        i = r.length > 0 ? r[0] : '',
        a = k('%' + i + '%', n),
        s = a.name,
        o = a.value,
        l = !1,
        d = a.alias;
    d && ((i = d[0]), O(r, R([0, 1], d)));
    for (var f = 1, _ = !0; f < r.length; f += 1) {
        var p = r[f],
            m = L(p, 0, 1),
            g = L(p, -1);
        if (('"' === m || "'" === m || '`' === m || '"' === g || "'" === g || '`' === g) && m !== g) throw new u('property names with quotes must have matching quotes');
        if ((('constructor' === p || !_) && (l = !0), (i += '.' + p), C(b, (s = '%' + i + '%')))) o = b[s];
        else if (null != o) {
            if (!(p in o)) {
                if (!n) throw new c('base intrinsic for ' + e + ' exists, but the property is not available.');
                return;
            }
            if (h && f + 1 >= r.length) {
                var E = h(o, p);
                o = (_ = !!E) && 'get' in E && !('originalValue' in E.get) ? E.get : o[p];
            } else (_ = C(o, p)), (o = o[p]);
            _ && !l && (b[s] = o);
        }
    }
    return o;
};
