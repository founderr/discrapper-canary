var n,
    r = 'object' == typeof Reflect ? Reflect : null,
    i =
        r && 'function' == typeof r.apply
            ? r.apply
            : function (e, n, r) {
                  return Function.prototype.apply.call(e, n, r);
              };
function a(e) {
    console && console.warn && console.warn(e);
}
n =
    r && 'function' == typeof r.ownKeys
        ? r.ownKeys
        : Object.getOwnPropertySymbols
          ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
            }
          : function (e) {
                return Object.getOwnPropertyNames(e);
            };
var s =
    Number.isNaN ||
    function (e) {
        return e != e;
    };
function o() {
    o.init.call(this);
}
(e.exports = o), (e.exports.once = v), (o.EventEmitter = o), (o.prototype._events = void 0), (o.prototype._eventsCount = 0), (o.prototype._maxListeners = void 0);
var l = 10;
function u(e) {
    if ('function' != typeof e) throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
function c(e) {
    return void 0 === e._maxListeners ? o.defaultMaxListeners : e._maxListeners;
}
function d(e, n, r, i) {
    if ((u(r), void 0 === (o = e._events) ? ((o = e._events = Object.create(null)), (e._eventsCount = 0)) : (void 0 !== o.newListener && (e.emit('newListener', n, r.listener ? r.listener : r), (o = e._events)), (l = o[n])), void 0 === l)) (l = o[n] = r), ++e._eventsCount;
    else if (('function' == typeof l ? (l = o[n] = i ? [r, l] : [l, r]) : i ? l.unshift(r) : l.push(r), (s = c(e)) > 0 && l.length > s && !l.warned)) {
        l.warned = !0;
        var s,
            o,
            l,
            d = Error('Possible EventEmitter memory leak detected. ' + l.length + ' ' + String(n) + ' listeners added. Use emitter.setMaxListeners() to increase limit');
        (d.name = 'MaxListenersExceededWarning'), (d.emitter = e), (d.type = n), (d.count = l.length), a(d);
    }
    return e;
}
function f() {
    if (!this.fired) return (this.target.removeListener(this.type, this.wrapFn), (this.fired = !0), 0 == arguments.length) ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function _(e, n, r) {
    var i = {
            fired: !1,
            wrapFn: void 0,
            target: e,
            type: n,
            listener: r
        },
        a = f.bind(i);
    return (a.listener = r), (i.wrapFn = a), a;
}
function h(e, n, r) {
    var i = e._events;
    if (void 0 === i) return [];
    var a = i[n];
    return void 0 === a ? [] : 'function' == typeof a ? (r ? [a.listener || a] : [a]) : r ? E(a) : m(a, a.length);
}
function p(e) {
    var n = this._events;
    if (void 0 !== n) {
        var r = n[e];
        if ('function' == typeof r) return 1;
        if (void 0 !== r) return r.length;
    }
    return 0;
}
function m(e, n) {
    for (var r = Array(n), i = 0; i < n; ++i) r[i] = e[i];
    return r;
}
function g(e, n) {
    for (; n + 1 < e.length; n++) e[n] = e[n + 1];
    e.pop();
}
function E(e) {
    for (var n = Array(e.length), r = 0; r < n.length; ++r) n[r] = e[r].listener || e[r];
    return n;
}
function v(e, n) {
    return new Promise(function (r, i) {
        function a(r) {
            e.removeListener(n, s), i(r);
        }
        function s() {
            'function' == typeof e.removeListener && e.removeListener('error', a), r([].slice.call(arguments));
        }
        T(e, n, s, { once: !0 }), 'error' !== n && I(e, a, { once: !0 });
    });
}
function I(e, n, r) {
    'function' == typeof e.on && T(e, 'error', n, r);
}
function T(e, n, r, i) {
    if ('function' == typeof e.on) i.once ? e.once(n, r) : e.on(n, r);
    else if ('function' == typeof e.addEventListener)
        e.addEventListener(n, function a(s) {
            i.once && e.removeEventListener(n, a), r(s);
        });
    else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
Object.defineProperty(o, 'defaultMaxListeners', {
    enumerable: !0,
    get: function () {
        return l;
    },
    set: function (e) {
        if ('number' != typeof e || e < 0 || s(e)) throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + '.');
        l = e;
    }
}),
    (o.init = function () {
        (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && ((this._events = Object.create(null)), (this._eventsCount = 0)), (this._maxListeners = this._maxListeners || void 0);
    }),
    (o.prototype.setMaxListeners = function (e) {
        if ('number' != typeof e || e < 0 || s(e)) throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + '.');
        return (this._maxListeners = e), this;
    }),
    (o.prototype.getMaxListeners = function () {
        return c(this);
    }),
    (o.prototype.emit = function (e) {
        for (var n = [], r = 1; r < arguments.length; r++) n.push(arguments[r]);
        var a = 'error' === e,
            s = this._events;
        if (void 0 !== s) a = a && void 0 === s.error;
        else if (!a) return !1;
        if (a) {
            if ((n.length > 0 && (o = n[0]), o instanceof Error)) throw o;
            var o,
                l = Error('Unhandled error.' + (o ? ' (' + o.message + ')' : ''));
            throw ((l.context = o), l);
        }
        var u = s[e];
        if (void 0 === u) return !1;
        if ('function' == typeof u) i(u, this, n);
        else {
            for (var c = u.length, d = m(u, c), r = 0; r < c; ++r) i(d[r], this, n);
        }
        return !0;
    }),
    (o.prototype.addListener = function (e, n) {
        return d(this, e, n, !1);
    }),
    (o.prototype.on = o.prototype.addListener),
    (o.prototype.prependListener = function (e, n) {
        return d(this, e, n, !0);
    }),
    (o.prototype.once = function (e, n) {
        return u(n), this.on(e, _(this, e, n)), this;
    }),
    (o.prototype.prependOnceListener = function (e, n) {
        return u(n), this.prependListener(e, _(this, e, n)), this;
    }),
    (o.prototype.removeListener = function (e, n) {
        var r, i, a, s, o;
        if ((u(n), void 0 === (i = this._events) || void 0 === (r = i[e]))) return this;
        if (r === n || r.listener === n) 0 == --this._eventsCount ? (this._events = Object.create(null)) : (delete i[e], i.removeListener && this.emit('removeListener', e, r.listener || n));
        else if ('function' != typeof r) {
            for (a = -1, s = r.length - 1; s >= 0; s--)
                if (r[s] === n || r[s].listener === n) {
                    (o = r[s].listener), (a = s);
                    break;
                }
            if (a < 0) return this;
            0 === a ? r.shift() : g(r, a), 1 === r.length && (i[e] = r[0]), void 0 !== i.removeListener && this.emit('removeListener', e, o || n);
        }
        return this;
    }),
    (o.prototype.off = o.prototype.removeListener),
    (o.prototype.removeAllListeners = function (e) {
        var n, r, i;
        if (void 0 === (r = this._events)) return this;
        if (void 0 === r.removeListener) return 0 == arguments.length ? ((this._events = Object.create(null)), (this._eventsCount = 0)) : void 0 !== r[e] && (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete r[e]), this;
        if (0 == arguments.length) {
            var a,
                s = Object.keys(r);
            for (i = 0; i < s.length; ++i) 'removeListener' !== (a = s[i]) && this.removeAllListeners(a);
            return this.removeAllListeners('removeListener'), (this._events = Object.create(null)), (this._eventsCount = 0), this;
        }
        if ('function' == typeof (n = r[e])) this.removeListener(e, n);
        else if (void 0 !== n) for (i = n.length - 1; i >= 0; i--) this.removeListener(e, n[i]);
        return this;
    }),
    (o.prototype.listeners = function (e) {
        return h(this, e, !0);
    }),
    (o.prototype.rawListeners = function (e) {
        return h(this, e, !1);
    }),
    (o.listenerCount = function (e, n) {
        return 'function' == typeof e.listenerCount ? e.listenerCount(n) : p.call(e, n);
    }),
    (o.prototype.listenerCount = p),
    (o.prototype.eventNames = function () {
        return this._eventsCount > 0 ? n(this._events) : [];
    });
