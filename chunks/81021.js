var i,
    a = SyntaxError,
    s = Function,
    o = TypeError,
    l = function (e) {
        try {
        } catch (e) {}
    },
    u = Object.getOwnPropertyDescriptor;
if (u)
    try {
        u({}, '');
    } catch (e) {
        u = null;
    }
var c = function () {
        throw new o();
    },
    d = u
        ? (function () {
              try {
                  return arguments.callee, c;
              } catch (e) {
                  try {
                      return u(arguments, 'callee').get;
                  } catch (e) {
                      return c;
                  }
              }
          })()
        : c,
    f = r(322499)(),
    _ = r(79536)(),
    h =
        Object.getPrototypeOf ||
        (_
            ? function (e) {
                  return e.__proto__;
              }
            : null),
    p = {},
    m = 'undefined' != typeof Uint8Array && h ? h(Uint8Array) : i,
    g = {
        '%AggregateError%': 'undefined' == typeof AggregateError ? i : AggregateError,
        '%Array%': Array,
        '%ArrayBuffer%': 'undefined' == typeof ArrayBuffer ? i : ArrayBuffer,
        '%ArrayIteratorPrototype%': f && h ? h([][Symbol.iterator]()) : i,
        '%AsyncFromSyncIteratorPrototype%': i,
        '%AsyncFunction%': p,
        '%AsyncGenerator%': p,
        '%AsyncGeneratorFunction%': p,
        '%AsyncIteratorPrototype%': p,
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
        '%Error%': Error,
        '%eval%': eval,
        '%EvalError%': EvalError,
        '%Float32Array%': 'undefined' == typeof Float32Array ? i : Float32Array,
        '%Float64Array%': 'undefined' == typeof Float64Array ? i : Float64Array,
        '%FinalizationRegistry%': 'undefined' == typeof FinalizationRegistry ? i : FinalizationRegistry,
        '%Function%': s,
        '%GeneratorFunction%': p,
        '%Int8Array%': 'undefined' == typeof Int8Array ? i : Int8Array,
        '%Int16Array%': 'undefined' == typeof Int16Array ? i : Int16Array,
        '%Int32Array%': 'undefined' == typeof Int32Array ? i : Int32Array,
        '%isFinite%': isFinite,
        '%isNaN%': isNaN,
        '%IteratorPrototype%': f && h ? h(h([][Symbol.iterator]())) : i,
        '%JSON%': 'object' == typeof JSON ? JSON : i,
        '%Map%': 'undefined' == typeof Map ? i : Map,
        '%MapIteratorPrototype%': 'undefined' != typeof Map && f && h ? h(new Map()[Symbol.iterator]()) : i,
        '%Math%': Math,
        '%Number%': Number,
        '%Object%': Object,
        '%parseFloat%': parseFloat,
        '%parseInt%': parseInt,
        '%Promise%': 'undefined' == typeof Promise ? i : Promise,
        '%Proxy%': 'undefined' == typeof Proxy ? i : Proxy,
        '%RangeError%': RangeError,
        '%ReferenceError%': ReferenceError,
        '%Reflect%': 'undefined' == typeof Reflect ? i : Reflect,
        '%RegExp%': RegExp,
        '%Set%': 'undefined' == typeof Set ? i : Set,
        '%SetIteratorPrototype%': 'undefined' != typeof Set && f && h ? h(new Set()[Symbol.iterator]()) : i,
        '%SharedArrayBuffer%': 'undefined' == typeof SharedArrayBuffer ? i : SharedArrayBuffer,
        '%String%': String,
        '%StringIteratorPrototype%': f && h ? h(''[Symbol.iterator]()) : i,
        '%Symbol%': f ? Symbol : i,
        '%SyntaxError%': a,
        '%ThrowTypeError%': d,
        '%TypedArray%': m,
        '%TypeError%': o,
        '%Uint8Array%': 'undefined' == typeof Uint8Array ? i : Uint8Array,
        '%Uint8ClampedArray%': 'undefined' == typeof Uint8ClampedArray ? i : Uint8ClampedArray,
        '%Uint16Array%': 'undefined' == typeof Uint16Array ? i : Uint16Array,
        '%Uint32Array%': 'undefined' == typeof Uint32Array ? i : Uint32Array,
        '%URIError%': URIError,
        '%WeakMap%': 'undefined' == typeof WeakMap ? i : WeakMap,
        '%WeakRef%': 'undefined' == typeof WeakRef ? i : WeakRef,
        '%WeakSet%': 'undefined' == typeof WeakSet ? i : WeakSet
    };
if (h)
    try {
        null.error;
    } catch (e) {
        var E = h(h(e));
        g['%Error.prototype%'] = E;
    }
var v = function e(n) {
        var r;
        if ('%AsyncFunction%' === n) r = l('async function () {}');
        else if ('%GeneratorFunction%' === n) r = l('function* () {}');
        else if ('%AsyncGeneratorFunction%' === n) r = l('async function* () {}');
        else if ('%AsyncGenerator%' === n) {
            var i = e('%AsyncGeneratorFunction%');
            i && (r = i.prototype);
        } else if ('%AsyncIteratorPrototype%' === n) {
            var a = e('%AsyncGenerator%');
            a && h && (r = h(a.prototype));
        }
        return (g[n] = r), r;
    },
    I = {
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
    T = r(390976),
    b = r(706165),
    y = T.call(Function.call, Array.prototype.concat),
    S = T.call(Function.apply, Array.prototype.splice),
    A = T.call(Function.call, String.prototype.replace),
    N = T.call(Function.call, String.prototype.slice),
    C = T.call(Function.call, RegExp.prototype.exec),
    R = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    O = /\\(\\)?/g,
    D = function (e) {
        var n = N(e, 0, 1),
            r = N(e, -1);
        if ('%' === n && '%' !== r) throw new a('invalid intrinsic syntax, expected closing `%`');
        if ('%' === r && '%' !== n) throw new a('invalid intrinsic syntax, expected opening `%`');
        var i = [];
        return (
            A(e, R, function (e, n, r, a) {
                i[i.length] = r ? A(a, O, '$1') : n || e;
            }),
            i
        );
    },
    L = function (e, n) {
        var r,
            i = e;
        if ((b(I, i) && (i = '%' + (r = I[i])[0] + '%'), b(g, i))) {
            var s = g[i];
            if ((s === p && (s = v(i)), void 0 === s && !n)) throw new o('intrinsic ' + e + ' exists, but is not available. Please file an issue!');
            return {
                alias: r,
                name: i,
                value: s
            };
        }
        throw new a('intrinsic ' + e + ' does not exist!');
    };
e.exports = function (e, n) {
    if ('string' != typeof e || 0 === e.length) throw new o('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && 'boolean' != typeof n) throw new o('"allowMissing" argument must be a boolean');
    if (null === C(/^%?[^%]*%?$/, e)) throw new a('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    var r = D(e),
        i = r.length > 0 ? r[0] : '',
        s = L('%' + i + '%', n),
        l = s.name,
        c = s.value,
        d = !1,
        f = s.alias;
    f && ((i = f[0]), S(r, y([0, 1], f)));
    for (var _ = 1, h = !0; _ < r.length; _ += 1) {
        var p = r[_],
            m = N(p, 0, 1),
            E = N(p, -1);
        if (('"' === m || "'" === m || '`' === m || '"' === E || "'" === E || '`' === E) && m !== E) throw new a('property names with quotes must have matching quotes');
        if ((('constructor' === p || !h) && (d = !0), (i += '.' + p), b(g, (l = '%' + i + '%')))) c = g[l];
        else if (null != c) {
            if (!(p in c)) {
                if (!n) throw new o('base intrinsic for ' + e + ' exists, but the property is not available.');
                return;
            }
            if (u && _ + 1 >= r.length) {
                var v = u(c, p);
                c = (h = !!v) && 'get' in v && !('originalValue' in v.get) ? v.get : c[p];
            } else (h = b(c, p)), (c = c[p]);
            h && !d && (g[l] = c);
        }
    }
    return c;
};
