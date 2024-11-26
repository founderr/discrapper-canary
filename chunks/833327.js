var r,
    i,
    a = n(444675);
function s(e) {
    var t = this;
    (this.next = null),
        (this.entry = null),
        (this.finish = function () {
            (function (e, t, n) {
                var r = e.entry;
                for (e.entry = null; r; ) {
                    var i = r.callback;
                    t.pendingcb--, i(n), (r = r.next);
                }
                t.corkedRequestsFree.next = e;
            })(t, e);
        });
}
(e.exports = A), (A.WritableState = y);
var o = { deprecate: n(220342) },
    l = n(138772),
    u = n(413135).Buffer,
    c = (void 0 !== n.g ? n.g : 'undefined' != typeof window ? window : 'undefined' != typeof self ? self : {}).Uint8Array || function () {},
    d = n(887866),
    f = n(97703).getHighWaterMark,
    _ = n(531478).codes,
    p = _.ERR_INVALID_ARG_TYPE,
    h = _.ERR_METHOD_NOT_IMPLEMENTED,
    m = _.ERR_MULTIPLE_CALLBACK,
    g = _.ERR_STREAM_CANNOT_PIPE,
    E = _.ERR_STREAM_DESTROYED,
    v = _.ERR_STREAM_NULL_VALUES,
    I = _.ERR_STREAM_WRITE_AFTER_END,
    T = _.ERR_UNKNOWN_ENCODING,
    b = d.errorOrDestroy;
function S() {}
function y(e, t, i) {
    (r = r || n(827664)), (e = e || {}), 'boolean' != typeof i && (i = t instanceof r), (this.objectMode = !!e.objectMode), i && (this.objectMode = this.objectMode || !!e.writableObjectMode), (this.highWaterMark = f(this, e, 'writableHighWaterMark', i)), (this.finalCalled = !1), (this.needDrain = !1), (this.ending = !1), (this.ended = !1), (this.finished = !1), (this.destroyed = !1);
    var o = !1 === e.decodeStrings;
    (this.decodeStrings = !o),
        (this.defaultEncoding = e.defaultEncoding || 'utf8'),
        (this.length = 0),
        (this.writing = !1),
        (this.corked = 0),
        (this.sync = !0),
        (this.bufferProcessing = !1),
        (this.onwrite = function (e) {
            (function (e, t) {
                var n,
                    r,
                    i,
                    s,
                    o,
                    l,
                    u = e._writableState,
                    c = u.sync,
                    d = u.writecb;
                if ('function' != typeof d) throw new m();
                if ((((n = u).writing = !1), (n.writecb = null), (n.length -= n.writelen), (n.writelen = 0), t)) {
                    (r = e), (i = u), (s = c), (o = t), (l = d), --i.pendingcb, s ? (a.nextTick(l, o), a.nextTick(L, r, i), (r._writableState.errorEmitted = !0), b(r, o)) : (l(o), (r._writableState.errorEmitted = !0), b(r, o), L(r, i));
                } else {
                    var f = O(u) || e.destroyed;
                    !f && !u.corked && !u.bufferProcessing && u.bufferedRequest && R(e, u), c ? a.nextTick(C, e, u, f, d) : C(e, u, f, d);
                }
            })(t, e);
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
        (this.corkedRequestsFree = new s(this));
}
function A(e) {
    var t = this instanceof (r = r || n(827664));
    if (!t && !i.call(A, this)) return new A(e);
    (this._writableState = new y(e, this, t)), (this.writable = !0), e && ('function' == typeof e.write && (this._write = e.write), 'function' == typeof e.writev && (this._writev = e.writev), 'function' == typeof e.destroy && (this._destroy = e.destroy), 'function' == typeof e.final && (this._final = e.final)), l.call(this);
}
n(689118)(A, l),
    (y.prototype.getBuffer = function () {
        for (var e = this.bufferedRequest, t = []; e; ) t.push(e), (e = e.next);
        return t;
    }),
    !(function () {
        try {
            Object.defineProperty(y.prototype, 'buffer', {
                get: o.deprecate(
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
          Object.defineProperty(A, Symbol.hasInstance, {
              value: function (e) {
                  return !!i.call(this, e) || (this === A && e && e._writableState instanceof y);
              }
          }))
        : (i = function (e) {
              return e instanceof this;
          }),
    (A.prototype.pipe = function () {
        b(this, new g());
    });
(A.prototype.write = function (e, t, n) {
    var r,
        i,
        s,
        o,
        l,
        d,
        f,
        _,
        h,
        m,
        g = this._writableState,
        E = !1;
    var T = !g.objectMode && ((r = e), u.isBuffer(r) || r instanceof c);
    if (T && !u.isBuffer(e)) {
        (i = e), (e = u.from(i));
    }
    if (('function' == typeof t && ((n = t), (t = null)), T ? (t = 'buffer') : !t && (t = g.defaultEncoding), 'function' != typeof n && (n = S), g.ending)) {
        (s = this), (o = n), b(s, (l = new I())), a.nextTick(o, l);
    } else {
        if (T || ((d = this), (f = g), (_ = e), (h = n), null === _ ? (m = new v()) : 'string' != typeof _ && !f.objectMode && (m = new p('chunk', ['string', 'Buffer'], _)), !m || (b(d, m), a.nextTick(h, m), 0)))
            g.pendingcb++,
                (E = (function (e, t, n, r, i, a) {
                    if (!n) {
                        var s,
                            o,
                            l,
                            c = ((s = t), (o = r), (l = i), !s.objectMode && !1 !== s.decodeStrings && 'string' == typeof o && (o = u.from(o, l)), o);
                        r !== c && ((n = !0), (i = 'buffer'), (r = c));
                    }
                    var d = t.objectMode ? 1 : r.length;
                    t.length += d;
                    var f = t.length < t.highWaterMark;
                    if ((!f && (t.needDrain = !0), t.writing || t.corked)) {
                        var _ = t.lastBufferedRequest;
                        (t.lastBufferedRequest = {
                            chunk: r,
                            encoding: i,
                            isBuf: n,
                            callback: a,
                            next: null
                        }),
                            _ ? (_.next = t.lastBufferedRequest) : (t.bufferedRequest = t.lastBufferedRequest),
                            (t.bufferedRequestCount += 1);
                    } else N(e, t, !1, d, r, i, a);
                    return f;
                })(this, g, T, e, t, n));
    }
    return E;
}),
    (A.prototype.cork = function () {
        this._writableState.corked++;
    }),
    (A.prototype.uncork = function () {
        var e = this._writableState;
        e.corked && (e.corked--, !e.writing && !e.corked && !e.bufferProcessing && e.bufferedRequest && R(this, e));
    }),
    (A.prototype.setDefaultEncoding = function (e) {
        if (('string' == typeof e && (e = e.toLowerCase()), !(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((e + '').toLowerCase()) > -1))) throw new T(e);
        return (this._writableState.defaultEncoding = e), this;
    }),
    Object.defineProperty(A.prototype, 'writableBuffer', {
        enumerable: !1,
        get: function () {
            return this._writableState && this._writableState.getBuffer();
        }
    });
Object.defineProperty(A.prototype, 'writableHighWaterMark', {
    enumerable: !1,
    get: function () {
        return this._writableState.highWaterMark;
    }
});
function N(e, t, n, r, i, a, s) {
    (t.writelen = r), (t.writecb = s), (t.writing = !0), (t.sync = !0), t.destroyed ? t.onwrite(new E('write')) : n ? e._writev(i, t.onwrite) : e._write(i, a, t.onwrite), (t.sync = !1);
}
function C(e, t, n, r) {
    !n &&
        (function (e, t) {
            0 === t.length && t.needDrain && ((t.needDrain = !1), e.emit('drain'));
        })(e, t),
        t.pendingcb--,
        r(),
        L(e, t);
}
function R(e, t) {
    t.bufferProcessing = !0;
    var n = t.bufferedRequest;
    if (e._writev && n && n.next) {
        var r = Array(t.bufferedRequestCount),
            i = t.corkedRequestsFree;
        i.entry = n;
        for (var a = 0, o = !0; n; ) (r[a] = n), !n.isBuf && (o = !1), (n = n.next), (a += 1);
        (r.allBuffers = o), N(e, t, !0, t.length, r, '', i.finish), t.pendingcb++, (t.lastBufferedRequest = null), i.next ? ((t.corkedRequestsFree = i.next), (i.next = null)) : (t.corkedRequestsFree = new s(t)), (t.bufferedRequestCount = 0);
    } else {
        for (; n; ) {
            var l = n.chunk,
                u = n.encoding,
                c = n.callback,
                d = t.objectMode ? 1 : l.length;
            if ((N(e, t, !1, d, l, u, c), (n = n.next), t.bufferedRequestCount--, t.writing)) break;
        }
        null === n && (t.lastBufferedRequest = null);
    }
    (t.bufferedRequest = n), (t.bufferProcessing = !1);
}
function O(e) {
    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing;
}
function D(e, t) {
    e._final(function (n) {
        t.pendingcb--, n && b(e, n), (t.prefinished = !0), e.emit('prefinish'), L(e, t);
    });
}
(A.prototype._write = function (e, t, n) {
    n(new h('_write()'));
}),
    (A.prototype._writev = null),
    (A.prototype.end = function (e, t, n) {
        var r = this._writableState;
        return (
            'function' == typeof e ? ((n = e), (e = null), (t = null)) : 'function' == typeof t && ((n = t), (t = null)),
            null != e && this.write(e, t),
            r.corked && ((r.corked = 1), this.uncork()),
            !r.ending &&
                (function (e, t, n) {
                    (t.ending = !0), L(e, t), n && (t.finished ? a.nextTick(n) : e.once('finish', n)), (t.ended = !0), (e.writable = !1);
                })(this, r, n),
            this
        );
    }),
    Object.defineProperty(A.prototype, 'writableLength', {
        enumerable: !1,
        get: function () {
            return this._writableState.length;
        }
    });
function L(e, t) {
    var n,
        r,
        i = O(t);
    if (i) {
        if (((n = e), (r = t).prefinished || r.finalCalled || ('function' != typeof n._final || r.destroyed ? ((r.prefinished = !0), n.emit('prefinish')) : (r.pendingcb++, (r.finalCalled = !0), a.nextTick(D, n, r))), 0 === t.pendingcb && ((t.finished = !0), e.emit('finish'), t.autoDestroy))) {
            var s = e._readableState;
            (!s || (s.autoDestroy && s.endEmitted)) && e.destroy();
        }
    }
    return i;
}
Object.defineProperty(A.prototype, 'destroyed', {
    enumerable: !1,
    get: function () {
        return void 0 !== this._writableState && this._writableState.destroyed;
    },
    set: function (e) {
        if (!!this._writableState) this._writableState.destroyed = e;
    }
}),
    (A.prototype.destroy = d.destroy),
    (A.prototype._undestroy = d.undestroy),
    (A.prototype._destroy = function (e, t) {
        t(e);
    });
