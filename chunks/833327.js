var r,
    i,
    a = n(444675);
e.exports = C;
function o(e) {
    var t = this;
    (this.next = null),
        (this.entry = null),
        (this.finish = function () {
            Y(t, e);
        });
}
C.WritableState = R;
var s = { deprecate: n(220342) },
    l = n(138772),
    u = n(413135).Buffer,
    c = (void 0 !== n.g ? n.g : 'undefined' != typeof window ? window : 'undefined' != typeof self ? self : {}).Uint8Array || function () {};
function d(e) {
    return u.from(e);
}
function _(e) {
    return u.isBuffer(e) || e instanceof c;
}
var E = n(887866),
    f = n(97703).getHighWaterMark,
    h = n(531478).codes,
    p = h.ERR_INVALID_ARG_TYPE,
    m = h.ERR_METHOD_NOT_IMPLEMENTED,
    I = h.ERR_MULTIPLE_CALLBACK,
    T = h.ERR_STREAM_CANNOT_PIPE,
    g = h.ERR_STREAM_DESTROYED,
    S = h.ERR_STREAM_NULL_VALUES,
    A = h.ERR_STREAM_WRITE_AFTER_END,
    v = h.ERR_UNKNOWN_ENCODING,
    N = E.errorOrDestroy;
function O() {}
function R(e, t, i) {
    (r = r || n(827664)), (e = e || {}), 'boolean' != typeof i && (i = t instanceof r), (this.objectMode = !!e.objectMode), i && (this.objectMode = this.objectMode || !!e.writableObjectMode), (this.highWaterMark = f(this, e, 'writableHighWaterMark', i)), (this.finalCalled = !1), (this.needDrain = !1), (this.ending = !1), (this.ended = !1), (this.finished = !1), (this.destroyed = !1);
    var a = !1 === e.decodeStrings;
    (this.decodeStrings = !a),
        (this.defaultEncoding = e.defaultEncoding || 'utf8'),
        (this.length = 0),
        (this.writing = !1),
        (this.corked = 0),
        (this.sync = !0),
        (this.bufferProcessing = !1),
        (this.onwrite = function (e) {
            w(t, e);
        }),
        (this.writecb = null),
        (this.writelen = 0),
        (this.bufferedRequest = null),
        (this.lastBufferedRequest = null),
        (this.pendingcb = 0),
        (this.prefinished = !1),
        (this.errorEmitted = !1),
        (this.emitClose = !1 !== e.emitClose),
        (this.autoDestroy = !!e.autoDestroy),
        (this.bufferedRequestCount = 0),
        (this.corkedRequestsFree = new o(this));
}
function C(e) {
    var t = this instanceof (r = r || n(827664));
    if (!t && !i.call(C, this)) return new C(e);
    (this._writableState = new R(e, this, t)), (this.writable = !0), e && ('function' == typeof e.write && (this._write = e.write), 'function' == typeof e.writev && (this._writev = e.writev), 'function' == typeof e.destroy && (this._destroy = e.destroy), 'function' == typeof e.final && (this._final = e.final)), l.call(this);
}
function y(e, t) {
    var n = new A();
    N(e, n), a.nextTick(t, n);
}
function b(e, t, n, r) {
    var i;
    return null === n ? (i = new S()) : 'string' != typeof n && !t.objectMode && (i = new p('chunk', ['string', 'Buffer'], n)), !i || (N(e, i), a.nextTick(r, i), !1);
}
function L(e, t, n) {
    return !e.objectMode && !1 !== e.decodeStrings && 'string' == typeof t && (t = u.from(t, n)), t;
}
function D(e, t, n, r, i, a) {
    if (!n) {
        var o = L(t, r, i);
        r !== o && ((n = !0), (i = 'buffer'), (r = o));
    }
    var s = t.objectMode ? 1 : r.length;
    t.length += s;
    var l = t.length < t.highWaterMark;
    if ((!l && (t.needDrain = !0), t.writing || t.corked)) {
        var u = t.lastBufferedRequest;
        (t.lastBufferedRequest = {
            chunk: r,
            encoding: i,
            isBuf: n,
            callback: a,
            next: null
        }),
            u ? (u.next = t.lastBufferedRequest) : (t.bufferedRequest = t.lastBufferedRequest),
            (t.bufferedRequestCount += 1);
    } else M(e, t, !1, s, r, i, a);
    return l;
}
function M(e, t, n, r, i, a, o) {
    (t.writelen = r), (t.writecb = o), (t.writing = !0), (t.sync = !0), t.destroyed ? t.onwrite(new g('write')) : n ? e._writev(i, t.onwrite) : e._write(i, a, t.onwrite), (t.sync = !1);
}
function P(e, t, n, r, i) {
    --t.pendingcb, n ? (a.nextTick(i, r), a.nextTick(V, e, t), (e._writableState.errorEmitted = !0), N(e, r)) : (i(r), (e._writableState.errorEmitted = !0), N(e, r), V(e, t));
}
function U(e) {
    (e.writing = !1), (e.writecb = null), (e.length -= e.writelen), (e.writelen = 0);
}
function w(e, t) {
    var n = e._writableState,
        r = n.sync,
        i = n.writecb;
    if ('function' != typeof i) throw new I();
    if ((U(n), t)) P(e, n, r, t, i);
    else {
        var o = B(n) || e.destroyed;
        !o && !n.corked && !n.bufferProcessing && n.bufferedRequest && k(e, n), r ? a.nextTick(x, e, n, o, i) : x(e, n, o, i);
    }
}
function x(e, t, n, r) {
    !n && G(e, t), t.pendingcb--, r(), V(e, t);
}
function G(e, t) {
    0 === t.length && t.needDrain && ((t.needDrain = !1), e.emit('drain'));
}
function k(e, t) {
    t.bufferProcessing = !0;
    var n = t.bufferedRequest;
    if (e._writev && n && n.next) {
        var r = Array(t.bufferedRequestCount),
            i = t.corkedRequestsFree;
        i.entry = n;
        for (var a = 0, s = !0; n; ) (r[a] = n), !n.isBuf && (s = !1), (n = n.next), (a += 1);
        (r.allBuffers = s), M(e, t, !0, t.length, r, '', i.finish), t.pendingcb++, (t.lastBufferedRequest = null), i.next ? ((t.corkedRequestsFree = i.next), (i.next = null)) : (t.corkedRequestsFree = new o(t)), (t.bufferedRequestCount = 0);
    } else {
        for (; n; ) {
            var l = n.chunk,
                u = n.encoding,
                c = n.callback,
                d = t.objectMode ? 1 : l.length;
            if ((M(e, t, !1, d, l, u, c), (n = n.next), t.bufferedRequestCount--, t.writing)) break;
        }
        null === n && (t.lastBufferedRequest = null);
    }
    (t.bufferedRequest = n), (t.bufferProcessing = !1);
}
function B(e) {
    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing;
}
function F(e, t) {
    e._final(function (n) {
        t.pendingcb--, n && N(e, n), (t.prefinished = !0), e.emit('prefinish'), V(e, t);
    });
}
function Z(e, t) {
    !t.prefinished && !t.finalCalled && ('function' != typeof e._final || t.destroyed ? ((t.prefinished = !0), e.emit('prefinish')) : (t.pendingcb++, (t.finalCalled = !0), a.nextTick(F, e, t)));
}
function V(e, t) {
    var n = B(t);
    if (n && (Z(e, t), 0 === t.pendingcb && ((t.finished = !0), e.emit('finish'), t.autoDestroy))) {
        var r = e._readableState;
        (!r || (r.autoDestroy && r.endEmitted)) && e.destroy();
    }
    return n;
}
function H(e, t, n) {
    (t.ending = !0), V(e, t), n && (t.finished ? a.nextTick(n) : e.once('finish', n)), (t.ended = !0), (e.writable = !1);
}
function Y(e, t, n) {
    var r = e.entry;
    for (e.entry = null; r; ) {
        var i = r.callback;
        t.pendingcb--, i(n), (r = r.next);
    }
    t.corkedRequestsFree.next = e;
}
n(689118)(C, l),
    (R.prototype.getBuffer = function () {
        for (var e = this.bufferedRequest, t = []; e; ) t.push(e), (e = e.next);
        return t;
    }),
    !(function () {
        try {
            Object.defineProperty(R.prototype, 'buffer', {
                get: s.deprecate(
                    function () {
                        return this.getBuffer();
                    },
                    '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                    'DEP0003'
                )
            });
        } catch (e) {}
    })(),
    'function' == typeof Symbol && Symbol.hasInstance && 'function' == typeof Function.prototype[Symbol.hasInstance]
        ? ((i = Function.prototype[Symbol.hasInstance]),
          Object.defineProperty(C, Symbol.hasInstance, {
              value: function (e) {
                  return !!i.call(this, e) || (this === C && e && e._writableState instanceof R);
              }
          }))
        : (i = function (e) {
              return e instanceof this;
          }),
    (C.prototype.pipe = function () {
        N(this, new T());
    }),
    (C.prototype.write = function (e, t, n) {
        var r = this._writableState,
            i = !1,
            a = !r.objectMode && _(e);
        return a && !u.isBuffer(e) && (e = d(e)), 'function' == typeof t && ((n = t), (t = null)), a ? (t = 'buffer') : !t && (t = r.defaultEncoding), 'function' != typeof n && (n = O), r.ending ? y(this, n) : (a || b(this, r, e, n)) && (r.pendingcb++, (i = D(this, r, a, e, t, n))), i;
    }),
    (C.prototype.cork = function () {
        this._writableState.corked++;
    }),
    (C.prototype.uncork = function () {
        var e = this._writableState;
        e.corked && (e.corked--, !e.writing && !e.corked && !e.bufferProcessing && e.bufferedRequest && k(this, e));
    }),
    (C.prototype.setDefaultEncoding = function (e) {
        if (('string' == typeof e && (e = e.toLowerCase()), !(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((e + '').toLowerCase()) > -1))) throw new v(e);
        return (this._writableState.defaultEncoding = e), this;
    }),
    Object.defineProperty(C.prototype, 'writableBuffer', {
        enumerable: !1,
        get: function () {
            return this._writableState && this._writableState.getBuffer();
        }
    }),
    Object.defineProperty(C.prototype, 'writableHighWaterMark', {
        enumerable: !1,
        get: function () {
            return this._writableState.highWaterMark;
        }
    }),
    (C.prototype._write = function (e, t, n) {
        n(new m('_write()'));
    }),
    (C.prototype._writev = null),
    (C.prototype.end = function (e, t, n) {
        var r = this._writableState;
        return 'function' == typeof e ? ((n = e), (e = null), (t = null)) : 'function' == typeof t && ((n = t), (t = null)), null != e && this.write(e, t), r.corked && ((r.corked = 1), this.uncork()), !r.ending && H(this, r, n), this;
    }),
    Object.defineProperty(C.prototype, 'writableLength', {
        enumerable: !1,
        get: function () {
            return this._writableState.length;
        }
    }),
    Object.defineProperty(C.prototype, 'destroyed', {
        enumerable: !1,
        get: function () {
            return void 0 !== this._writableState && this._writableState.destroyed;
        },
        set: function (e) {
            if (!!this._writableState) this._writableState.destroyed = e;
        }
    }),
    (C.prototype.destroy = E.destroy),
    (C.prototype._undestroy = E.undestroy),
    (C.prototype._destroy = function (e, t) {
        t(e);
    });
