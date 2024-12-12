var r = 'function' == typeof Symbol && Symbol.for,
    i = r ? Symbol.for('react.element') : 60103,
    a = r ? Symbol.for('react.portal') : 60106,
    s = r ? Symbol.for('react.fragment') : 60107,
    o = r ? Symbol.for('react.strict_mode') : 60108,
    l = r ? Symbol.for('react.profiler') : 60114,
    u = r ? Symbol.for('react.provider') : 60109,
    c = r ? Symbol.for('react.context') : 60110,
    d = r ? Symbol.for('react.async_mode') : 60111,
    f = r ? Symbol.for('react.concurrent_mode') : 60111,
    _ = r ? Symbol.for('react.forward_ref') : 60112,
    h = r ? Symbol.for('react.suspense') : 60113,
    p = r ? Symbol.for('react.suspense_list') : 60120,
    m = r ? Symbol.for('react.memo') : 60115,
    g = r ? Symbol.for('react.lazy') : 60116,
    E = r ? Symbol.for('react.block') : 60121,
    v = r ? Symbol.for('react.fundamental') : 60117,
    I = r ? Symbol.for('react.responder') : 60118,
    T = r ? Symbol.for('react.scope') : 60119;
function b(e) {
    if ('object' == typeof e && null !== e) {
        var n = e.$$typeof;
        switch (n) {
            case i:
                switch ((e = e.type)) {
                    case d:
                    case f:
                    case s:
                    case l:
                    case o:
                    case h:
                        return e;
                    default:
                        switch ((e = e && e.$$typeof)) {
                            case c:
                            case _:
                            case g:
                            case m:
                            case u:
                                return e;
                            default:
                                return n;
                        }
                }
            case a:
                return n;
        }
    }
}
function y(e) {
    return b(e) === f;
}
(n.AsyncMode = d),
    (n.ConcurrentMode = f),
    (n.ContextConsumer = c),
    (n.ContextProvider = u),
    (n.Element = i),
    (n.ForwardRef = _),
    (n.Fragment = s),
    (n.Lazy = g),
    (n.Memo = m),
    (n.Portal = a),
    (n.Profiler = l),
    (n.StrictMode = o),
    (n.Suspense = h),
    (n.isAsyncMode = function (e) {
        return y(e) || b(e) === d;
    }),
    (n.isConcurrentMode = y),
    (n.isContextConsumer = function (e) {
        return b(e) === c;
    }),
    (n.isContextProvider = function (e) {
        return b(e) === u;
    }),
    (n.isElement = function (e) {
        return 'object' == typeof e && null !== e && e.$$typeof === i;
    }),
    (n.isForwardRef = function (e) {
        return b(e) === _;
    }),
    (n.isFragment = function (e) {
        return b(e) === s;
    }),
    (n.isLazy = function (e) {
        return b(e) === g;
    }),
    (n.isMemo = function (e) {
        return b(e) === m;
    }),
    (n.isPortal = function (e) {
        return b(e) === a;
    }),
    (n.isProfiler = function (e) {
        return b(e) === l;
    }),
    (n.isStrictMode = function (e) {
        return b(e) === o;
    }),
    (n.isSuspense = function (e) {
        return b(e) === h;
    }),
    (n.isValidElementType = function (e) {
        return 'string' == typeof e || 'function' == typeof e || e === s || e === f || e === l || e === o || e === h || e === p || ('object' == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === u || e.$$typeof === c || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === I || e.$$typeof === T || e.$$typeof === E));
    }),
    (n.typeOf = b);
