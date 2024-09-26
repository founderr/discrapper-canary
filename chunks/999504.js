var n = Symbol.for('react.element'),
    r = Symbol.for('react.portal'),
    i = Symbol.for('react.fragment'),
    a = Symbol.for('react.strict_mode'),
    o = Symbol.for('react.profiler'),
    s = Symbol.for('react.provider'),
    l = Symbol.for('react.context'),
    u = Symbol.for('react.forward_ref'),
    c = Symbol.for('react.suspense'),
    d = Symbol.for('react.memo'),
    _ = Symbol.for('react.lazy'),
    E = Symbol.iterator;
function f(e) {
    return null === e || 'object' != typeof e ? null : 'function' == typeof (e = (E && e[E]) || e['@@iterator']) ? e : null;
}
var h = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {}
    },
    p = Object.assign,
    m = {};
function I(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = m), (this.updater = n || h);
}
function T() {}
function g(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = m), (this.updater = n || h);
}
(I.prototype.isReactComponent = {}),
    (I.prototype.setState = function (e, t) {
        if ('object' != typeof e && 'function' != typeof e && null != e) throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.');
        this.updater.enqueueSetState(this, e, t, 'setState');
    }),
    (I.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
    }),
    (T.prototype = I.prototype);
var S = (g.prototype = new T());
(S.constructor = g), p(S, I.prototype), (S.isPureReactComponent = !0);
var A = Array.isArray,
    v = Object.prototype.hasOwnProperty,
    N = { current: null },
    O = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function R(e, t, r) {
    var i,
        a = {},
        o = null,
        s = null;
    if (null != t) for (i in (void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (o = '' + t.key), t)) v.call(t, i) && !O.hasOwnProperty(i) && (a[i] = t[i]);
    var l = arguments.length - 2;
    if (1 === l) a.children = r;
    else if (1 < l) {
        for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
        a.children = u;
    }
    if (e && e.defaultProps) for (i in (l = e.defaultProps)) void 0 === a[i] && (a[i] = l[i]);
    return {
        $$typeof: n,
        type: e,
        key: o,
        ref: s,
        props: a,
        _owner: N.current
    };
}
function C(e, t) {
    return {
        $$typeof: n,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    };
}
function y(e) {
    return 'object' == typeof e && null !== e && e.$$typeof === n;
}
function L(e) {
    var t = {
        '=': '=0',
        ':': '=2'
    };
    return (
        '$' +
        e.replace(/[=:]/g, function (e) {
            return t[e];
        })
    );
}
var b = /\/+/g;
function D(e, t) {
    return 'object' == typeof e && null !== e && null != e.key ? L('' + e.key) : t.toString(36);
}
function M(e, t, i, a, o) {
    var s = typeof e;
    ('undefined' === s || 'boolean' === s) && (e = null);
    var l = !1;
    if (null === e) l = !0;
    else
        switch (s) {
            case 'string':
            case 'number':
                l = !0;
                break;
            case 'object':
                switch (e.$$typeof) {
                    case n:
                    case r:
                        l = !0;
                }
        }
    if (l)
        return (
            (o = o((l = e))),
            (e = '' === a ? '.' + D(l, 0) : a),
            A(o)
                ? ((i = ''),
                  null != e && (i = e.replace(b, '$&/') + '/'),
                  M(o, t, i, '', function (e) {
                      return e;
                  }))
                : null != o && (y(o) && (o = C(o, i + (!o.key || (l && l.key === o.key) ? '' : ('' + o.key).replace(b, '$&/') + '/') + e)), t.push(o)),
            1
        );
    if (((l = 0), (a = '' === a ? '.' : a + ':'), A(e)))
        for (var u = 0; u < e.length; u++) {
            var c = a + D((s = e[u]), u);
            l += M(s, t, i, c, o);
        }
    else if ('function' == typeof (c = f(e))) for (e = c.call(e), u = 0; !(s = e.next()).done; ) (c = a + D((s = s.value), u++)), (l += M(s, t, i, c, o));
    else if ('object' === s) throw Error('Objects are not valid as a React child (found: ' + ('[object Object]' === (t = String(e)) ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) + '). If you meant to render a collection of children, use an array instead.');
    return l;
}
function P(e, t, n) {
    if (null == e) return e;
    var r = [],
        i = 0;
    return (
        M(e, r, '', '', function (e) {
            return t.call(n, e, i++);
        }),
        r
    );
}
function U(e) {
    if (-1 === e._status) {
        var t = e._result;
        (t = t()).then(
            function (t) {
                (0 === e._status || -1 === e._status) && ((e._status = 1), (e._result = t));
            },
            function (t) {
                (0 === e._status || -1 === e._status) && ((e._status = 2), (e._result = t));
            }
        ),
            -1 === e._status && ((e._status = 0), (e._result = t));
    }
    if (1 === e._status) return e._result.default;
    throw e._result;
}
var w = { current: null },
    x = { transition: null },
    G = {
        ReactCurrentDispatcher: w,
        ReactCurrentBatchConfig: x,
        ReactCurrentOwner: N
    };
(t.Children = {
    map: P,
    forEach: function (e, t, n) {
        P(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            P(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            P(e, function (e) {
                return e;
            }) || []
        );
    },
    only: function (e) {
        if (!y(e)) throw Error('React.Children.only expected to receive a single React element child.');
        return e;
    }
}),
    (t.Component = I),
    (t.Fragment = i),
    (t.Profiler = o),
    (t.PureComponent = g),
    (t.StrictMode = a),
    (t.Suspense = c),
    (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G),
    (t.cloneElement = function (e, t, r) {
        if (null == e) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
        var i = p({}, e.props),
            a = e.key,
            o = e.ref,
            s = e._owner;
        if (null != t) {
            if ((void 0 !== t.ref && ((o = t.ref), (s = N.current)), void 0 !== t.key && (a = '' + t.key), e.type && e.type.defaultProps)) var l = e.type.defaultProps;
            for (u in t) v.call(t, u) && !O.hasOwnProperty(u) && (i[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
        }
        var u = arguments.length - 2;
        if (1 === u) i.children = r;
        else if (1 < u) {
            l = Array(u);
            for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
            i.children = l;
        }
        return {
            $$typeof: n,
            type: e.type,
            key: a,
            ref: o,
            props: i,
            _owner: s
        };
    }),
    (t.createContext = function (e) {
        return (
            ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null
            }).Provider = {
                $$typeof: s,
                _context: e
            }),
            (e.Consumer = e)
        );
    }),
    (t.createElement = R),
    (t.createFactory = function (e) {
        var t = R.bind(null, e);
        return (t.type = e), t;
    }),
    (t.createRef = function () {
        return { current: null };
    }),
    (t.forwardRef = function (e) {
        return {
            $$typeof: u,
            render: e
        };
    }),
    (t.isValidElement = y),
    (t.lazy = function (e) {
        return {
            $$typeof: _,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: U
        };
    }),
    (t.memo = function (e, t) {
        return {
            $$typeof: d,
            type: e,
            compare: void 0 === t ? null : t
        };
    }),
    (t.startTransition = function (e) {
        var t = x.transition;
        x.transition = {};
        try {
            e();
        } finally {
            x.transition = t;
        }
    }),
    (t.unstable_act = function () {
        throw Error('act(...) is not supported in production builds of React.');
    }),
    (t.useCallback = function (e, t) {
        return w.current.useCallback(e, t);
    }),
    (t.useContext = function (e) {
        return w.current.useContext(e);
    }),
    (t.useDebugValue = function () {}),
    (t.useDeferredValue = function (e) {
        return w.current.useDeferredValue(e);
    }),
    (t.useEffect = function (e, t) {
        return w.current.useEffect(e, t);
    }),
    (t.useId = function () {
        return w.current.useId();
    }),
    (t.useImperativeHandle = function (e, t, n) {
        return w.current.useImperativeHandle(e, t, n);
    }),
    (t.useInsertionEffect = function (e, t) {
        return w.current.useInsertionEffect(e, t);
    }),
    (t.useLayoutEffect = function (e, t) {
        return w.current.useLayoutEffect(e, t);
    }),
    (t.useMemo = function (e, t) {
        return w.current.useMemo(e, t);
    }),
    (t.useReducer = function (e, t, n) {
        return w.current.useReducer(e, t, n);
    }),
    (t.useRef = function (e) {
        return w.current.useRef(e);
    }),
    (t.useState = function (e) {
        return w.current.useState(e);
    }),
    (t.useSyncExternalStore = function (e, t, n) {
        return w.current.useSyncExternalStore(e, t, n);
    }),
    (t.useTransition = function () {
        return w.current.useTransition();
    }),
    (t.version = '18.2.0');
