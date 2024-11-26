r.d(t, {
    s: function () {
        return N;
    }
});
var a = r(394798),
    n = r(101284),
    _ = r(370336),
    o = r(622916),
    E = r(263449),
    i = r(255768),
    c = r(380132),
    s = r(899195),
    l = r(988097),
    I = r(696486),
    u = r(305625),
    R = r(966497),
    A = r(241225),
    T = r(881243);
class N {
    constructor(e = {}) {
        (this._traceId = e.traceId || (0, a.DM)()),
            (this._spanId = e.spanId || (0, a.DM)().substring(16)),
            (this._startTime = e.startTimestamp || (0, n.ph)()),
            (this._attributes = {}),
            this.setAttributes({
                [l.S3]: 'manual',
                [l.$J]: e.op,
                ...e.attributes
            }),
            (this._name = e.name),
            e.parentSpanId && (this._parentSpanId = e.parentSpanId),
            'sampled' in e && (this._sampled = e.sampled),
            e.endTimestamp && (this._endTime = e.endTimestamp),
            (this._events = []),
            (this._isStandaloneSpan = e.isStandalone),
            this._endTime && this._onSpanEnded();
    }
    addLink(e) {
        return this;
    }
    addLinks(e) {
        return this;
    }
    recordException(e, t) {}
    spanContext() {
        let { _spanId: e, _traceId: t, _sampled: r } = this;
        return {
            spanId: e,
            traceId: t,
            traceFlags: r ? I.i0 : I.ve
        };
    }
    setAttribute(e, t) {
        return void 0 === t ? delete this._attributes[e] : (this._attributes[e] = t), this;
    }
    setAttributes(e) {
        return Object.keys(e).forEach((t) => this.setAttribute(t, e[t])), this;
    }
    updateStartTime(e) {
        this._startTime = (0, I.$k)(e);
    }
    setStatus(e) {
        return (this._status = e), this;
    }
    updateName(e) {
        return (this._name = e), this;
    }
    end(e) {
        if (!this._endTime) (this._endTime = (0, I.$k)(e)), (0, R.w)(this), this._onSpanEnded();
    }
    getSpanJSON() {
        return (0, _.Jr)({
            data: this._attributes,
            description: this._name,
            op: this._attributes[l.$J],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: (0, I._4)(this._status),
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[l.S3],
            _metrics_summary: (0, s.y)(this),
            profile_id: this._attributes[l.p6],
            exclusive_time: this._attributes[l.JQ],
            measurements: (0, A.l)(this._events),
            is_segment: (this._isStandaloneSpan && (0, I.Gx)(this) === this) || void 0,
            segment_id: this._isStandaloneSpan ? (0, I.Gx)(this).spanContext().spanId : void 0
        });
    }
    isRecording() {
        return !this._endTime && !!this._sampled;
    }
    addEvent(e, t, r) {
        i.X && o.kg.log('[Tracing] Adding an event to span:', e);
        let a = d(t) ? t : r || (0, n.ph)(),
            _ = d(t) ? {} : t || {},
            E = {
                name: e,
                time: (0, I.$k)(a),
                attributes: _
            };
        return this._events.push(E), this;
    }
    isStandaloneSpan() {
        return !!this._isStandaloneSpan;
    }
    _onSpanEnded() {
        let e = (0, E.s3)();
        if ((e && e.emit('spanEnd', this), !(this._isStandaloneSpan || this === (0, I.Gx)(this)))) return;
        if (this._isStandaloneSpan) {
            this._sampled
                ? (function (e) {
                      let t = (0, E.s3)();
                      if (!t) return;
                      let r = e[1];
                      if (!r || 0 === r.length) {
                          t.recordDroppedEvent('before_send', 'span');
                          return;
                      }
                      let a = t.getTransport();
                      a &&
                          a.send(e).then(null, (e) => {
                              i.X && o.kg.error('Error while sending span:', e);
                          });
                  })((0, c.uE)([this], e))
                : (i.X && o.kg.log('[Tracing] Discarding standalone span because its trace was not chosen to be sampled.'), e && e.recordDroppedEvent('sample_rate', 'span'));
            return;
        }
        let t = this._convertSpanToTransaction();
        t && ((0, T.I1)(this).scope || (0, E.nZ)()).captureEvent(t);
    }
    _convertSpanToTransaction() {
        if (!f((0, I.XU)(this))) return;
        !this._name && (i.X && o.kg.warn('Transaction has no name, falling back to `<unlabeled transaction>`.'), (this._name = '<unlabeled transaction>'));
        let { scope: e, isolationScope: t } = (0, T.I1)(this),
            r = (e || (0, E.nZ)()).getClient() || (0, E.s3)();
        if (!0 !== this._sampled) {
            i.X && o.kg.log('[Tracing] Discarding transaction because its trace was not chosen to be sampled.'), r && r.recordDroppedEvent('sample_rate', 'transaction');
            return;
        }
        let a = (0, I.Dp)(this)
                .filter(
                    (e) =>
                        e !== this &&
                        !(function (e) {
                            return e instanceof N && e.isStandaloneSpan();
                        })(e)
                )
                .map((e) => (0, I.XU)(e))
                .filter(f),
            n = this._attributes[l.Zj],
            c = {
                contexts: { trace: (0, I.HR)(this) },
                spans: a.length > 1000 ? a.sort((e, t) => e.start_timestamp - t.start_timestamp).slice(0, 1000) : a,
                start_timestamp: this._startTime,
                timestamp: this._endTime,
                transaction: this._name,
                type: 'transaction',
                sdkProcessingMetadata: {
                    capturedSpanScope: e,
                    capturedSpanIsolationScope: t,
                    ...(0, _.Jr)({ dynamicSamplingContext: (0, u.jC)(this) })
                },
                _metrics_summary: (0, s.y)(this),
                ...(n && { transaction_info: { source: n } })
            },
            R = (0, A.l)(this._events);
        return R && Object.keys(R).length && (i.X && o.kg.log('[Measurements] Adding measurements to transaction event', JSON.stringify(R, void 0, 2)), (c.measurements = R)), c;
    }
}
function d(e) {
    return (e && 'number' == typeof e) || e instanceof Date || Array.isArray(e);
}
function f(e) {
    return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id;
}
