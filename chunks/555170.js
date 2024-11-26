var r,
    i,
    a,
    s,
    o,
    l = n(444675);
(e.exports = A), (A.ReadableState = y), n(836560).EventEmitter;
var u = function (e, t) {
        return e.listeners(t).length;
    },
    c = n(138772),
    d = n(413135).Buffer,
    f = (void 0 !== n.g ? n.g : 'undefined' != typeof window ? window : 'undefined' != typeof self ? self : {}).Uint8Array || function () {},
    _ = n(260907);
i = _ && _.debuglog ? _.debuglog('stream') : function () {};
var p = n(443551),
    h = n(887866),
    m = n(97703).getHighWaterMark,
    g = n(531478).codes,
    E = g.ERR_INVALID_ARG_TYPE,
    v = g.ERR_STREAM_PUSH_AFTER_EOF,
    I = g.ERR_METHOD_NOT_IMPLEMENTED,
    T = g.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
n(689118)(A, c);
var b = h.errorOrDestroy,
    S = ['error', 'close', 'destroy', 'pause', 'resume'];
function y(e, t, i) {
    (r = r || n(827664)), (e = e || {}), 'boolean' != typeof i && (i = t instanceof r), (this.objectMode = !!e.objectMode), i && (this.objectMode = this.objectMode || !!e.readableObjectMode), (this.highWaterMark = m(this, e, 'readableHighWaterMark', i)), (this.buffer = new p()), (this.length = 0), (this.pipes = null), (this.pipesCount = 0), (this.flowing = null), (this.ended = !1), (this.endEmitted = !1), (this.reading = !1), (this.sync = !0), (this.needReadable = !1), (this.emittedReadable = !1), (this.readableListening = !1), (this.resumeScheduled = !1), (this.paused = !0), (this.emitClose = !1 !== e.emitClose), (this.autoDestroy = !!e.autoDestroy), (this.destroyed = !1), (this.defaultEncoding = e.defaultEncoding || 'utf8'), (this.awaitDrain = 0), (this.readingMore = !1), (this.decoder = null), (this.encoding = null), e.encoding && (!a && (a = n(2682).StringDecoder), (this.decoder = new a(e.encoding)), (this.encoding = e.encoding));
}
function A(e) {
    if (((r = r || n(827664)), !(this instanceof A))) return new A(e);
    var t = this instanceof r;
    (this._readableState = new y(e, this, t)), (this.readable = !0), e && ('function' == typeof e.read && (this._read = e.read), 'function' == typeof e.destroy && (this._destroy = e.destroy)), c.call(this);
}
function N(e, t, n, r, a) {
    i('readableAddChunk', t);
    var s,
        o,
        l = e._readableState;
    if (null === t)
        (l.reading = !1),
            (function (e, t) {
                if ((i('onEofChunk'), !t.ended)) {
                    if (t.decoder) {
                        var n = t.decoder.end();
                        n && n.length && (t.buffer.push(n), (t.length += t.objectMode ? 1 : n.length));
                    }
                    (t.ended = !0), t.sync ? O(e) : ((t.needReadable = !1), !t.emittedReadable && ((t.emittedReadable = !0), D(e)));
                }
            })(e, l);
    else if (
        (!a &&
            (o = (function (e, t) {
                var n, r;
                if (((r = t), !d.isBuffer(r) && !(r instanceof f) && 'string' != typeof t && void 0 !== t && !e.objectMode)) n = new E('chunk', ['string', 'Buffer', 'Uint8Array'], t);
                return n;
            })(l, t)),
        o)
    )
        b(e, o);
    else if (l.objectMode || (t && t.length > 0)) {
        if ('string' != typeof t && !l.objectMode && Object.getPrototypeOf(t) !== d.prototype) {
            (s = t), (t = d.from(s));
        }
        if (r) l.endEmitted ? b(e, new T()) : C(e, l, t, !0);
        else if (l.ended) b(e, new v());
        else {
            if (l.destroyed) return !1;
            (l.reading = !1), l.decoder && !n ? ((t = l.decoder.write(t)), l.objectMode || 0 !== t.length ? C(e, l, t, !1) : L(e, l)) : C(e, l, t, !1);
        }
    } else !r && ((l.reading = !1), L(e, l));
    return !l.ended && (l.length < l.highWaterMark || 0 === l.length);
}
function C(e, t, n, r) {
    t.flowing && 0 === t.length && !t.sync ? ((t.awaitDrain = 0), e.emit('data', n)) : ((t.length += t.objectMode ? 1 : n.length), r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && O(e)), L(e, t);
}
Object.defineProperty(A.prototype, 'destroyed', {
    enumerable: !1,
    get: function () {
        return void 0 !== this._readableState && this._readableState.destroyed;
    },
    set: function (e) {
        if (!!this._readableState) this._readableState.destroyed = e;
    }
}),
    (A.prototype.destroy = h.destroy),
    (A.prototype._undestroy = h.undestroy),
    (A.prototype._destroy = function (e, t) {
        t(e);
    }),
    (A.prototype.push = function (e, t) {
        var n,
            r = this._readableState;
        return r.objectMode ? (n = !0) : 'string' == typeof e && ((t = t || r.defaultEncoding) !== r.encoding && ((e = d.from(e, t)), (t = '')), (n = !0)), N(this, e, t, !1, n);
    }),
    (A.prototype.unshift = function (e) {
        return N(this, e, null, !0, !1);
    });
(A.prototype.isPaused = function () {
    return !1 === this._readableState.flowing;
}),
    (A.prototype.setEncoding = function (e) {
        !a && (a = n(2682).StringDecoder);
        var t = new a(e);
        (this._readableState.decoder = t), (this._readableState.encoding = this._readableState.decoder.encoding);
        for (var r = this._readableState.buffer.head, i = ''; null !== r; ) (i += t.write(r.data)), (r = r.next);
        return this._readableState.buffer.clear(), '' !== i && this._readableState.buffer.push(i), (this._readableState.length = i.length), this;
    });
function R(e, t) {
    if (e <= 0 || (0 === t.length && t.ended)) return 0;
    if (t.objectMode) return 1;
    if (e != e) return t.flowing && t.length ? t.buffer.head.data.length : t.length;
    if (e > t.highWaterMark) {
        var n;
        t.highWaterMark = ((n = e) >= 1073741824 ? (n = 1073741824) : (n--, (n |= n >>> 1), (n |= n >>> 2), (n |= n >>> 4), (n |= n >>> 8), (n |= n >>> 16), n++), n);
    }
    return e <= t.length ? e : t.ended ? t.length : ((t.needReadable = !0), 0);
}
A.prototype.read = function (e) {
    i('read', e), (e = parseInt(e, 10));
    var t,
        n = this._readableState,
        r = e;
    if ((0 !== e && (n.emittedReadable = !1), 0 === e && n.needReadable && ((0 !== n.highWaterMark ? n.length >= n.highWaterMark : n.length > 0) || n.ended))) return i('read: emitReadable', n.length, n.ended), 0 === n.length && n.ended ? B(this) : O(this), null;
    if (0 === (e = R(e, n)) && n.ended) return 0 === n.length && B(this), null;
    var a = n.needReadable;
    return i('need readable', a), (0 === n.length || n.length - e < n.highWaterMark) && i('length less than watermark', (a = !0)), n.ended || n.reading ? i('reading or ended', (a = !1)) : a && (i('do read'), (n.reading = !0), (n.sync = !0), 0 === n.length && (n.needReadable = !0), this._read(n.highWaterMark), (n.sync = !1), !n.reading && (e = R(r, n))), null === (t = e > 0 ? U(e, n) : null) ? ((n.needReadable = n.length <= n.highWaterMark), (e = 0)) : ((n.length -= e), (n.awaitDrain = 0)), 0 === n.length && (!n.ended && (n.needReadable = !0), r !== e && n.ended && B(this)), null !== t && this.emit('data', t), t;
};
function O(e) {
    var t = e._readableState;
    i('emitReadable', t.needReadable, t.emittedReadable), (t.needReadable = !1), !t.emittedReadable && (i('emitReadable', t.flowing), (t.emittedReadable = !0), l.nextTick(D, e));
}
function D(e) {
    var t = e._readableState;
    i('emitReadable_', t.destroyed, t.length, t.ended), !t.destroyed && (t.length || t.ended) && (e.emit('readable'), (t.emittedReadable = !1)), (t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark), k(e);
}
function L(e, t) {
    !t.readingMore && ((t.readingMore = !0), l.nextTick(x, e, t));
}
function x(e, t) {
    for (; !t.reading && !t.ended && (t.length < t.highWaterMark || (t.flowing && 0 === t.length)); ) {
        var n = t.length;
        if ((i('maybeReadMore read 0'), e.read(0), n === t.length)) break;
    }
    t.readingMore = !1;
}
(A.prototype._read = function (e) {
    b(this, new I('_read()'));
}),
    (A.prototype.pipe = function (e, t) {
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
        var a = (t && !1 === t.end) || e === l.stdout || e === l.stderr ? m : o;
        function s(t, a) {
            i('onunpipe'),
                t === n &&
                    a &&
                    !1 === a.hasUnpiped &&
                    ((a.hasUnpiped = !0),
                    (function () {
                        i('cleanup'), e.removeListener('close', p), e.removeListener('finish', h), e.removeListener('drain', c), e.removeListener('error', _), e.removeListener('unpipe', s), n.removeListener('end', o), n.removeListener('end', m), n.removeListener('data', f), (d = !0), r.awaitDrain && (!e._writableState || e._writableState.needDrain) && c();
                    })());
        }
        function o() {
            i('onend'), e.end();
        }
        r.endEmitted ? l.nextTick(a) : n.once('end', a), e.on('unpipe', s);
        var c = (function (e) {
            return function () {
                var t = e._readableState;
                i('pipeOnDrain', t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && u(e, 'data') && ((t.flowing = !0), k(e));
            };
        })(n);
        e.on('drain', c);
        var d = !1;
        function f(t) {
            i('ondata');
            var a = e.write(t);
            i('dest.write', a), !1 === a && (((1 === r.pipesCount && r.pipes === e) || (r.pipesCount > 1 && -1 !== Z(r.pipes, e))) && !d && (i('false write response, pause', r.awaitDrain), r.awaitDrain++), n.pause());
        }
        function _(t) {
            i('onerror', t), m(), e.removeListener('error', _), 0 === u(e, 'error') && b(e, t);
        }
        function p() {
            e.removeListener('finish', h), m();
        }
        function h() {
            i('onfinish'), e.removeListener('close', p), m();
        }
        function m() {
            i('unpipe'), n.unpipe(e);
        }
        return (
            n.on('data', f),
            !(function (e, t, n) {
                if ('function' == typeof e.prependListener) return e.prependListener(t, n);
                e._events && e._events[t] ? (Array.isArray(e._events[t]) ? e._events[t].unshift(n) : (e._events[t] = [n, e._events[t]])) : e.on(t, n);
            })(e, 'error', _),
            e.once('close', p),
            e.once('finish', h),
            e.emit('pipe', n),
            !r.flowing && (i('pipe resume'), n.resume()),
            e
        );
    });
function w(e) {
    var t = e._readableState;
    (t.readableListening = e.listenerCount('readable') > 0), t.resumeScheduled && !t.paused ? (t.flowing = !0) : e.listenerCount('data') > 0 && e.resume();
}
function P(e) {
    i('readable nexttick read 0'), e.read(0);
}
(A.prototype.unpipe = function (e) {
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
    var s = Z(t.pipes, e);
    return -1 === s ? this : (t.pipes.splice(s, 1), (t.pipesCount -= 1), 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit('unpipe', this, n), this);
}),
    (A.prototype.on = function (e, t) {
        var n = c.prototype.on.call(this, e, t),
            r = this._readableState;
        return 'data' === e ? ((r.readableListening = this.listenerCount('readable') > 0), !1 !== r.flowing && this.resume()) : 'readable' === e && !r.endEmitted && !r.readableListening && ((r.readableListening = r.needReadable = !0), (r.flowing = !1), (r.emittedReadable = !1), i('on readable', r.length, r.reading), r.length ? O(this) : !r.reading && l.nextTick(P, this)), n;
    }),
    (A.prototype.addListener = A.prototype.on),
    (A.prototype.removeListener = function (e, t) {
        var n = c.prototype.removeListener.call(this, e, t);
        return 'readable' === e && l.nextTick(w, this), n;
    }),
    (A.prototype.removeAllListeners = function (e) {
        var t = c.prototype.removeAllListeners.apply(this, arguments);
        return ('readable' === e || void 0 === e) && l.nextTick(w, this), t;
    }),
    (A.prototype.resume = function () {
        var e = this._readableState;
        return (
            !e.flowing &&
                (i('resume'),
                (e.flowing = !e.readableListening),
                (function (e, t) {
                    !t.resumeScheduled && ((t.resumeScheduled = !0), l.nextTick(M, e, t));
                })(this, e)),
            (e.paused = !1),
            this
        );
    });
function M(e, t) {
    i('resume', t.reading), !t.reading && e.read(0), (t.resumeScheduled = !1), e.emit('resume'), k(e), t.flowing && !t.reading && e.read(0);
}
function k(e) {
    var t = e._readableState;
    for (i('flow', t.flowing); t.flowing && null !== e.read(); );
}
function U(e, t) {
    var n;
    return 0 === t.length ? null : (t.objectMode ? (n = t.buffer.shift()) : !e || e >= t.length ? ((n = t.decoder ? t.buffer.join('') : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length)), t.buffer.clear()) : (n = t.buffer.consume(e, t.decoder)), n);
}
function B(e) {
    var t = e._readableState;
    i('endReadable', t.endEmitted), !t.endEmitted && ((t.ended = !0), l.nextTick(G, t, e));
}
function G(e, t) {
    if ((i('endReadableNT', e.endEmitted, e.length), !e.endEmitted && 0 === e.length && ((e.endEmitted = !0), (t.readable = !1), t.emit('end'), e.autoDestroy))) {
        var n = t._writableState;
        (!n || (n.autoDestroy && n.finished)) && t.destroy();
    }
}
function Z(e, t) {
    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
    return -1;
}
(A.prototype.pause = function () {
    return i('call pause flowing=%j', this._readableState.flowing), !1 !== this._readableState.flowing && (i('pause'), (this._readableState.flowing = !1), this.emit('pause')), (this._readableState.paused = !0), this;
}),
    (A.prototype.wrap = function (e) {
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
        for (var s = 0; s < S.length; s++) e.on(S[s], this.emit.bind(this, S[s]));
        return (
            (this._read = function (t) {
                i('wrapped _read', t), r && ((r = !1), e.resume());
            }),
            this
        );
    }),
    'function' == typeof Symbol &&
        (A.prototype[Symbol.asyncIterator] = function () {
            return void 0 === s && (s = n(634587)), s(this);
        }),
    Object.defineProperty(A.prototype, 'readableHighWaterMark', {
        enumerable: !1,
        get: function () {
            return this._readableState.highWaterMark;
        }
    }),
    Object.defineProperty(A.prototype, 'readableBuffer', {
        enumerable: !1,
        get: function () {
            return this._readableState && this._readableState.buffer;
        }
    }),
    Object.defineProperty(A.prototype, 'readableFlowing', {
        enumerable: !1,
        get: function () {
            return this._readableState.flowing;
        },
        set: function (e) {
            this._readableState && (this._readableState.flowing = e);
        }
    }),
    (A._fromList = U),
    Object.defineProperty(A.prototype, 'readableLength', {
        enumerable: !1,
        get: function () {
            return this._readableState.length;
        }
    }),
    'function' == typeof Symbol &&
        (A.from = function (e, t) {
            return void 0 === o && (o = n(787838)), o(A, e, t);
        });
