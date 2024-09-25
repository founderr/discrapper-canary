var r,
    i,
    a,
    o,
    s,
    l = n(444675);
(e.exports = y), (y.ReadableState = C), n(836560).EventEmitter;
var u = function (e, t) {
        return e.listeners(t).length;
    },
    c = n(138772),
    d = n(413135).Buffer,
    _ = (void 0 !== n.g ? n.g : 'undefined' != typeof window ? window : 'undefined' != typeof self ? self : {}).Uint8Array || function () {};
function E(e) {
    return d.from(e);
}
function f(e) {
    return d.isBuffer(e) || e instanceof _;
}
var h = n(260907);
i = h && h.debuglog ? h.debuglog('stream') : function () {};
var p = n(443551),
    m = n(887866),
    I = n(97703).getHighWaterMark,
    T = n(531478).codes,
    g = T.ERR_INVALID_ARG_TYPE,
    S = T.ERR_STREAM_PUSH_AFTER_EOF,
    A = T.ERR_METHOD_NOT_IMPLEMENTED,
    v = T.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
n(689118)(y, c);
var N = m.errorOrDestroy,
    O = ['error', 'close', 'destroy', 'pause', 'resume'];
function R(e, t, n) {
    if ('function' == typeof e.prependListener) return e.prependListener(t, n);
    e._events && e._events[t] ? (Array.isArray(e._events[t]) ? e._events[t].unshift(n) : (e._events[t] = [n, e._events[t]])) : e.on(t, n);
}
function C(e, t, i) {
    (r = r || n(827664)), (e = e || {}), 'boolean' != typeof i && (i = t instanceof r), (this.objectMode = !!e.objectMode), i && (this.objectMode = this.objectMode || !!e.readableObjectMode), (this.highWaterMark = I(this, e, 'readableHighWaterMark', i)), (this.buffer = new p()), (this.length = 0), (this.pipes = null), (this.pipesCount = 0), (this.flowing = null), (this.ended = !1), (this.endEmitted = !1), (this.reading = !1), (this.sync = !0), (this.needReadable = !1), (this.emittedReadable = !1), (this.readableListening = !1), (this.resumeScheduled = !1), (this.paused = !0), (this.emitClose = !1 !== e.emitClose), (this.autoDestroy = !!e.autoDestroy), (this.destroyed = !1), (this.defaultEncoding = e.defaultEncoding || 'utf8'), (this.awaitDrain = 0), (this.readingMore = !1), (this.decoder = null), (this.encoding = null), e.encoding && (!a && (a = n(2682).StringDecoder), (this.decoder = new a(e.encoding)), (this.encoding = e.encoding));
}
function y(e) {
    if (((r = r || n(827664)), !(this instanceof y))) return new y(e);
    var t = this instanceof r;
    (this._readableState = new C(e, this, t)), (this.readable = !0), e && ('function' == typeof e.read && (this._read = e.read), 'function' == typeof e.destroy && (this._destroy = e.destroy)), c.call(this);
}
function b(e, t, n, r, a) {
    i('readableAddChunk', t);
    var o,
        s = e._readableState;
    if (null === t) (s.reading = !1), w(e, s);
    else if ((!a && (o = D(s, t)), o)) N(e, o);
    else if (s.objectMode || (t && t.length > 0)) {
        if (('string' != typeof t && !s.objectMode && Object.getPrototypeOf(t) !== d.prototype && (t = E(t)), r)) s.endEmitted ? N(e, new v()) : L(e, s, t, !0);
        else if (s.ended) N(e, new S());
        else {
            if (s.destroyed) return !1;
            (s.reading = !1), s.decoder && !n ? ((t = s.decoder.write(t)), s.objectMode || 0 !== t.length ? L(e, s, t, !1) : k(e, s)) : L(e, s, t, !1);
        }
    } else !r && ((s.reading = !1), k(e, s));
    return !s.ended && (s.length < s.highWaterMark || 0 === s.length);
}
function L(e, t, n, r) {
    t.flowing && 0 === t.length && !t.sync ? ((t.awaitDrain = 0), e.emit('data', n)) : ((t.length += t.objectMode ? 1 : n.length), r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && x(e)), k(e, t);
}
function D(e, t) {
    var n;
    return !f(t) && 'string' != typeof t && void 0 !== t && !e.objectMode && (n = new g('chunk', ['string', 'Buffer', 'Uint8Array'], t)), n;
}
Object.defineProperty(y.prototype, 'destroyed', {
    enumerable: !1,
    get: function () {
        return void 0 !== this._readableState && this._readableState.destroyed;
    },
    set: function (e) {
        if (!!this._readableState) this._readableState.destroyed = e;
    }
}),
    (y.prototype.destroy = m.destroy),
    (y.prototype._undestroy = m.undestroy),
    (y.prototype._destroy = function (e, t) {
        t(e);
    }),
    (y.prototype.push = function (e, t) {
        var n,
            r = this._readableState;
        return r.objectMode ? (n = !0) : 'string' == typeof e && ((t = t || r.defaultEncoding) !== r.encoding && ((e = d.from(e, t)), (t = '')), (n = !0)), b(this, e, t, !1, n);
    }),
    (y.prototype.unshift = function (e) {
        return b(this, e, null, !0, !1);
    }),
    (y.prototype.isPaused = function () {
        return !1 === this._readableState.flowing;
    }),
    (y.prototype.setEncoding = function (e) {
        !a && (a = n(2682).StringDecoder);
        var t = new a(e);
        (this._readableState.decoder = t), (this._readableState.encoding = this._readableState.decoder.encoding);
        for (var r = this._readableState.buffer.head, i = ''; null !== r; ) (i += t.write(r.data)), (r = r.next);
        return this._readableState.buffer.clear(), '' !== i && this._readableState.buffer.push(i), (this._readableState.length = i.length), this;
    });
var M = 1073741824;
function P(e) {
    return e >= M ? (e = M) : (e--, (e |= e >>> 1), (e |= e >>> 2), (e |= e >>> 4), (e |= e >>> 8), (e |= e >>> 16), e++), e;
}
function U(e, t) {
    if (e <= 0 || (0 === t.length && t.ended)) return 0;
    if (t.objectMode) return 1;
    if (e != e) return t.flowing && t.length ? t.buffer.head.data.length : t.length;
    return (e > t.highWaterMark && (t.highWaterMark = P(e)), e <= t.length) ? e : t.ended ? t.length : ((t.needReadable = !0), 0);
}
function w(e, t) {
    if ((i('onEofChunk'), !t.ended)) {
        if (t.decoder) {
            var n = t.decoder.end();
            n && n.length && (t.buffer.push(n), (t.length += t.objectMode ? 1 : n.length));
        }
        (t.ended = !0), t.sync ? x(e) : ((t.needReadable = !1), !t.emittedReadable && ((t.emittedReadable = !0), G(e)));
    }
}
function x(e) {
    var t = e._readableState;
    i('emitReadable', t.needReadable, t.emittedReadable), (t.needReadable = !1), !t.emittedReadable && (i('emitReadable', t.flowing), (t.emittedReadable = !0), l.nextTick(G, e));
}
function G(e) {
    var t = e._readableState;
    i('emitReadable_', t.destroyed, t.length, t.ended), !t.destroyed && (t.length || t.ended) && (e.emit('readable'), (t.emittedReadable = !1)), (t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark), j(e);
}
function k(e, t) {
    !t.readingMore && ((t.readingMore = !0), l.nextTick(B, e, t));
}
function B(e, t) {
    for (; !t.reading && !t.ended && (t.length < t.highWaterMark || (t.flowing && 0 === t.length)); ) {
        var n = t.length;
        if ((i('maybeReadMore read 0'), e.read(0), n === t.length)) break;
    }
    t.readingMore = !1;
}
function F(e) {
    return function () {
        var t = e._readableState;
        i('pipeOnDrain', t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && u(e, 'data') && ((t.flowing = !0), j(e));
    };
}
function Z(e) {
    var t = e._readableState;
    (t.readableListening = e.listenerCount('readable') > 0), t.resumeScheduled && !t.paused ? (t.flowing = !0) : e.listenerCount('data') > 0 && e.resume();
}
function V(e) {
    i('readable nexttick read 0'), e.read(0);
}
function H(e, t) {
    !t.resumeScheduled && ((t.resumeScheduled = !0), l.nextTick(Y, e, t));
}
function Y(e, t) {
    i('resume', t.reading), !t.reading && e.read(0), (t.resumeScheduled = !1), e.emit('resume'), j(e), t.flowing && !t.reading && e.read(0);
}
function j(e) {
    var t = e._readableState;
    for (i('flow', t.flowing); t.flowing && null !== e.read(); );
}
function W(e, t) {
    var n;
    return 0 === t.length ? null : (t.objectMode ? (n = t.buffer.shift()) : !e || e >= t.length ? ((n = t.decoder ? t.buffer.join('') : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length)), t.buffer.clear()) : (n = t.buffer.consume(e, t.decoder)), n);
}
function K(e) {
    var t = e._readableState;
    i('endReadable', t.endEmitted), !t.endEmitted && ((t.ended = !0), l.nextTick(z, t, e));
}
function z(e, t) {
    if ((i('endReadableNT', e.endEmitted, e.length), !e.endEmitted && 0 === e.length && ((e.endEmitted = !0), (t.readable = !1), t.emit('end'), e.autoDestroy))) {
        var n = t._writableState;
        (!n || (n.autoDestroy && n.finished)) && t.destroy();
    }
}
function q(e, t) {
    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
    return -1;
}
(y.prototype.read = function (e) {
    i('read', e), (e = parseInt(e, 10));
    var t,
        n = this._readableState,
        r = e;
    if ((0 !== e && (n.emittedReadable = !1), 0 === e && n.needReadable && ((0 !== n.highWaterMark ? n.length >= n.highWaterMark : n.length > 0) || n.ended))) return i('read: emitReadable', n.length, n.ended), 0 === n.length && n.ended ? K(this) : x(this), null;
    if (0 === (e = U(e, n)) && n.ended) return 0 === n.length && K(this), null;
    var a = n.needReadable;
    return i('need readable', a), (0 === n.length || n.length - e < n.highWaterMark) && i('length less than watermark', (a = !0)), n.ended || n.reading ? i('reading or ended', (a = !1)) : a && (i('do read'), (n.reading = !0), (n.sync = !0), 0 === n.length && (n.needReadable = !0), this._read(n.highWaterMark), (n.sync = !1), !n.reading && (e = U(r, n))), null === (t = e > 0 ? W(e, n) : null) ? ((n.needReadable = n.length <= n.highWaterMark), (e = 0)) : ((n.length -= e), (n.awaitDrain = 0)), 0 === n.length && (!n.ended && (n.needReadable = !0), r !== e && n.ended && K(this)), null !== t && this.emit('data', t), t;
}),
    (y.prototype._read = function (e) {
        N(this, new A('_read()'));
    }),
    (y.prototype.pipe = function (e, t) {
        var n = this,
            r = this._readableState;
        switch (r.pipesCount) {
            case 0:
                r.pipes = e;
                break;
            case 1:
                r.pipes = [r.pipes, e];
                break;
            default:
                r.pipes.push(e);
        }
        (r.pipesCount += 1), i('pipe count=%d opts=%j', r.pipesCount, t);
        var a = (t && !1 === t.end) || e === l.stdout || e === l.stderr ? m : s;
        function o(e, t) {
            i('onunpipe'), e === n && t && !1 === t.hasUnpiped && ((t.hasUnpiped = !0), _());
        }
        function s() {
            i('onend'), e.end();
        }
        r.endEmitted ? l.nextTick(a) : n.once('end', a), e.on('unpipe', o);
        var c = F(n);
        e.on('drain', c);
        var d = !1;
        function _() {
            i('cleanup'), e.removeListener('close', h), e.removeListener('finish', p), e.removeListener('drain', c), e.removeListener('error', f), e.removeListener('unpipe', o), n.removeListener('end', s), n.removeListener('end', m), n.removeListener('data', E), (d = !0), r.awaitDrain && (!e._writableState || e._writableState.needDrain) && c();
        }
        function E(t) {
            i('ondata');
            var a = e.write(t);
            i('dest.write', a), !1 === a && (((1 === r.pipesCount && r.pipes === e) || (r.pipesCount > 1 && -1 !== q(r.pipes, e))) && !d && (i('false write response, pause', r.awaitDrain), r.awaitDrain++), n.pause());
        }
        function f(t) {
            i('onerror', t), m(), e.removeListener('error', f), 0 === u(e, 'error') && N(e, t);
        }
        function h() {
            e.removeListener('finish', p), m();
        }
        function p() {
            i('onfinish'), e.removeListener('close', h), m();
        }
        function m() {
            i('unpipe'), n.unpipe(e);
        }
        return n.on('data', E), R(e, 'error', f), e.once('close', h), e.once('finish', p), e.emit('pipe', n), !r.flowing && (i('pipe resume'), n.resume()), e;
    }),
    (y.prototype.unpipe = function (e) {
        var t = this._readableState,
            n = { hasUnpiped: !1 };
        if (0 === t.pipesCount) return this;
        if (1 === t.pipesCount) return e && e !== t.pipes ? this : (!e && (e = t.pipes), (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1), e && e.emit('unpipe', this, n), this);
        if (!e) {
            var r = t.pipes,
                i = t.pipesCount;
            (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
            for (var a = 0; a < i; a++) r[a].emit('unpipe', this, { hasUnpiped: !1 });
            return this;
        }
        var o = q(t.pipes, e);
        return -1 === o ? this : (t.pipes.splice(o, 1), (t.pipesCount -= 1), 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit('unpipe', this, n), this);
    }),
    (y.prototype.on = function (e, t) {
        var n = c.prototype.on.call(this, e, t),
            r = this._readableState;
        return 'data' === e ? ((r.readableListening = this.listenerCount('readable') > 0), !1 !== r.flowing && this.resume()) : 'readable' === e && !r.endEmitted && !r.readableListening && ((r.readableListening = r.needReadable = !0), (r.flowing = !1), (r.emittedReadable = !1), i('on readable', r.length, r.reading), r.length ? x(this) : !r.reading && l.nextTick(V, this)), n;
    }),
    (y.prototype.addListener = y.prototype.on),
    (y.prototype.removeListener = function (e, t) {
        var n = c.prototype.removeListener.call(this, e, t);
        return 'readable' === e && l.nextTick(Z, this), n;
    }),
    (y.prototype.removeAllListeners = function (e) {
        var t = c.prototype.removeAllListeners.apply(this, arguments);
        return ('readable' === e || void 0 === e) && l.nextTick(Z, this), t;
    }),
    (y.prototype.resume = function () {
        var e = this._readableState;
        return !e.flowing && (i('resume'), (e.flowing = !e.readableListening), H(this, e)), (e.paused = !1), this;
    }),
    (y.prototype.pause = function () {
        return i('call pause flowing=%j', this._readableState.flowing), !1 !== this._readableState.flowing && (i('pause'), (this._readableState.flowing = !1), this.emit('pause')), (this._readableState.paused = !0), this;
    }),
    (y.prototype.wrap = function (e) {
        var t = this,
            n = this._readableState,
            r = !1;
        for (var a in (e.on('end', function () {
            if ((i('wrapped end'), n.decoder && !n.ended)) {
                var e = n.decoder.end();
                e && e.length && t.push(e);
            }
            t.push(null);
        }),
        e.on('data', function (a) {
            if ((i('wrapped data'), n.decoder && (a = n.decoder.write(a)), n.objectMode && null == a)) return;
            if (!!n.objectMode || (!!a && !!a.length)) !t.push(a) && ((r = !0), e.pause());
        }),
        e))
            void 0 === this[a] &&
                'function' == typeof e[a] &&
                (this[a] = (function (t) {
                    return function () {
                        return e[t].apply(e, arguments);
                    };
                })(a));
        for (var o = 0; o < O.length; o++) e.on(O[o], this.emit.bind(this, O[o]));
        return (
            (this._read = function (t) {
                i('wrapped _read', t), r && ((r = !1), e.resume());
            }),
            this
        );
    }),
    'function' == typeof Symbol &&
        (y.prototype[Symbol.asyncIterator] = function () {
            return void 0 === o && (o = n(634587)), o(this);
        }),
    Object.defineProperty(y.prototype, 'readableHighWaterMark', {
        enumerable: !1,
        get: function () {
            return this._readableState.highWaterMark;
        }
    }),
    Object.defineProperty(y.prototype, 'readableBuffer', {
        enumerable: !1,
        get: function () {
            return this._readableState && this._readableState.buffer;
        }
    }),
    Object.defineProperty(y.prototype, 'readableFlowing', {
        enumerable: !1,
        get: function () {
            return this._readableState.flowing;
        },
        set: function (e) {
            this._readableState && (this._readableState.flowing = e);
        }
    }),
    (y._fromList = W),
    Object.defineProperty(y.prototype, 'readableLength', {
        enumerable: !1,
        get: function () {
            return this._readableState.length;
        }
    }),
    'function' == typeof Symbol &&
        (y.from = function (e, t) {
            return void 0 === s && (s = n(787838)), s(y, e, t);
        });
