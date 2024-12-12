r.d(t, {
    W: function () {
        return p;
    }
});
var a = r(967752),
    n = r(622916),
    _ = r(394798),
    o = r(573736),
    E = r(928541),
    i = r(617726),
    c = r(370336),
    s = r(116698),
    l = r(538022),
    I = r(510529),
    u = r(263449),
    R = r(255768),
    A = r(380132),
    T = r(151122),
    N = r(112797),
    d = r(305625),
    f = r(820754),
    O = r(822578);
let L = "Not capturing exception because it's already been captured.";
class p {
    constructor(e) {
        if (((this._options = e), (this._integrations = {}), (this._numProcessing = 0), (this._outcomes = {}), (this._hooks = {}), (this._eventProcessors = []), e.dsn ? (this._dsn = (0, a.vK)(e.dsn)) : R.X && n.kg.warn('No DSN provided, client will not send events.'), this._dsn)) {
            let t = (0, I.U)(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
            this._transport = e.transport({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...e.transportOptions,
                url: t
            });
        }
    }
    captureException(e, t, r) {
        let a = (0, _.DM)();
        if ((0, _.YO)(e)) return R.X && n.kg.log(L), a;
        let o = {
            event_id: a,
            ...t
        };
        return this._process(this.eventFromException(e, o).then((e) => this._captureEvent(e, o, r))), o.event_id;
    }
    captureMessage(e, t, r, a) {
        let n = {
                event_id: (0, _.DM)(),
                ...r
            },
            E = (0, o.Le)(e) ? e : String(e),
            i = (0, o.pt)(e) ? this.eventFromMessage(E, t, n) : this.eventFromException(e, n);
        return this._process(i.then((e) => this._captureEvent(e, n, a))), n.event_id;
    }
    captureEvent(e, t, r) {
        let a = (0, _.DM)();
        if (t && t.originalException && (0, _.YO)(t.originalException)) return R.X && n.kg.log(L), a;
        let o = {
                event_id: a,
                ...t
            },
            E = (e.sdkProcessingMetadata || {}).capturedSpanScope;
        return this._process(this._captureEvent(e, o, E || r)), o.event_id;
    }
    captureSession(e) {
        'string' != typeof e.release ? R.X && n.kg.warn('Discarded session because of missing or non-string release') : (this.sendSession(e), (0, N.CT)(e, { init: !1 }));
    }
    getDsn() {
        return this._dsn;
    }
    getOptions() {
        return this._options;
    }
    getSdkMetadata() {
        return this._options._metadata;
    }
    getTransport() {
        return this._transport;
    }
    flush(e) {
        let t = this._transport;
        return t ? (this.emit('flush'), this._isClientDoneProcessing(e).then((r) => t.flush(e).then((e) => r && e))) : (0, E.WD)(!0);
    }
    close(e) {
        return this.flush(e).then((e) => ((this.getOptions().enabled = !1), this.emit('close'), e));
    }
    getEventProcessors() {
        return this._eventProcessors;
    }
    addEventProcessor(e) {
        this._eventProcessors.push(e);
    }
    init() {
        this._isEnabled() && this._setupIntegrations();
    }
    getIntegrationByName(e) {
        return this._integrations[e];
    }
    addIntegration(e) {
        let t = this._integrations[e.name];
        (0, T.m7)(this, e, this._integrations), !t && (0, T.uf)(this, [e]);
    }
    sendEvent(e, t = {}) {
        this.emit('beforeSendEvent', e, t);
        let r = (0, A.Mq)(e, this._dsn, this._options._metadata, this._options.tunnel);
        for (let e of t.attachments || []) r = (0, i.BO)(r, (0, i.zQ)(e));
        let a = this.sendEnvelope(r);
        a && a.then((t) => this.emit('afterSendEvent', e, t), null);
    }
    sendSession(e) {
        let t = (0, A.Q3)(e, this._dsn, this._options._metadata, this._options.tunnel);
        this.sendEnvelope(t);
    }
    recordDroppedEvent(e, t, r) {
        if (this._options.sendClientReports) {
            let a = 'number' == typeof r ? r : 1,
                _ = `${e}:${t}`;
            R.X && n.kg.log(`Recording outcome: "${_}"${a > 1 ? ` (${a} times)` : ''}`), (this._outcomes[_] = (this._outcomes[_] || 0) + a);
        }
    }
    on(e, t) {
        let r = (this._hooks[e] = this._hooks[e] || []);
        return (
            r.push(t),
            () => {
                let e = r.indexOf(t);
                e > -1 && r.splice(e, 1);
            }
        );
    }
    emit(e, ...t) {
        let r = this._hooks[e];
        r && r.forEach((e) => e(...t));
    }
    sendEnvelope(e) {
        return (this.emit('beforeEnvelope', e), this._isEnabled() && this._transport) ? this._transport.send(e).then(null, (e) => (R.X && n.kg.error('Error while sending event:', e), e)) : (R.X && n.kg.error('Transport disabled'), (0, E.WD)({}));
    }
    _setupIntegrations() {
        let { integrations: e } = this._options;
        (this._integrations = (0, T.q4)(this, e)), (0, T.uf)(this, e);
    }
    _updateSessionFromEvent(e, t) {
        let r = !1,
            a = !1,
            n = t.exception && t.exception.values;
        if (n)
            for (let e of ((a = !0), n)) {
                let t = e.mechanism;
                if (t && !1 === t.handled) {
                    r = !0;
                    break;
                }
            }
        let _ = 'ok' === e.status;
        ((_ && 0 === e.errors) || (_ && r)) &&
            ((0, N.CT)(e, {
                ...(r && { status: 'crashed' }),
                errors: e.errors || Number(a || r)
            }),
            this.captureSession(e));
    }
    _isClientDoneProcessing(e) {
        return new E.cW((t) => {
            let r = 0,
                a = setInterval(() => {
                    0 == this._numProcessing ? (clearInterval(a), t(!0)) : ((r += 1), e && r >= e && (clearInterval(a), t(!1)));
                }, 1);
        });
    }
    _isEnabled() {
        return !1 !== this.getOptions().enabled && void 0 !== this._transport;
    }
    _prepareEvent(e, t, r, a = (0, u.aF)()) {
        let n = this.getOptions(),
            _ = Object.keys(this._integrations);
        return (
            !t.integrations && _.length > 0 && (t.integrations = _),
            this.emit('preprocessEvent', e, t),
            !e.type && a.setLastEventId(e.event_id || t.event_id),
            (0, O.R)(n, e, t, r, this, a).then((e) => {
                if (null === e) return e;
                let t = {
                    ...a.getPropagationContext(),
                    ...(r ? r.getPropagationContext() : void 0)
                };
                if (!(e.contexts && e.contexts.trace) && t) {
                    let { traceId: r, spanId: a, parentSpanId: n, dsc: _ } = t;
                    e.contexts = {
                        trace: (0, c.Jr)({
                            trace_id: r,
                            span_id: a,
                            parent_span_id: n
                        }),
                        ...e.contexts
                    };
                    let o = _ || (0, d._l)(r, this);
                    e.sdkProcessingMetadata = {
                        dynamicSamplingContext: o,
                        ...e.sdkProcessingMetadata
                    };
                }
                return e;
            })
        );
    }
    _captureEvent(e, t = {}, r) {
        return this._processEvent(e, t, r).then(
            (e) => e.event_id,
            (e) => {
                R.X && ('log' === e.logLevel ? n.kg.log(e.message) : n.kg.warn(e));
            }
        );
    }
    _processEvent(e, t, r) {
        let a = this.getOptions(),
            { sampleRate: n } = a,
            _ = D(e),
            i = h(e),
            c = e.type || 'error',
            l = `before send for type \`${c}\``,
            I = void 0 === n ? void 0 : (0, f.o)(n);
        if (i && 'number' == typeof I && Math.random() > I) return this.recordDroppedEvent('sample_rate', 'error', e), (0, E.$2)(new s.b(`Discarding event because it's not included in the random sample (sampling rate = ${n})`, 'log'));
        let u = 'replay_event' === c ? 'replay' : c,
            R = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
        return this._prepareEvent(e, t, r, R)
            .then((r) => {
                if (null === r) throw (this.recordDroppedEvent('event_processor', u, e), new s.b('An event processor returned `null`, will not send event.', 'log'));
                return t.data && !0 === t.data.__sentry__
                    ? r
                    : (function (e, t) {
                          let r = `${t} must return \`null\` or a valid event.`;
                          if ((0, o.J8)(e))
                              return e.then(
                                  (e) => {
                                      if (!(0, o.PO)(e) && null !== e) throw new s.b(r);
                                      return e;
                                  },
                                  (e) => {
                                      throw new s.b(`${t} rejected with ${e}`);
                                  }
                              );
                          if (!(0, o.PO)(e) && null !== e) throw new s.b(r);
                          return e;
                      })(
                          (function (e, t, r, a) {
                              let { beforeSend: n, beforeSendTransaction: _, beforeSendSpan: o } = t;
                              if (h(r) && n) return n(r, a);
                              if (D(r)) {
                                  if (r.spans && o) {
                                      let t = [];
                                      for (let a of r.spans) {
                                          let r = o(a);
                                          r ? t.push(r) : e.recordDroppedEvent('before_send', 'span');
                                      }
                                      r.spans = t;
                                  }
                                  if (_) {
                                      if (r.spans) {
                                          let e = r.spans.length;
                                          r.sdkProcessingMetadata = {
                                              ...r.sdkProcessingMetadata,
                                              spanCountBeforeProcessing: e
                                          };
                                      }
                                      return _(r, a);
                                  }
                              }
                              return r;
                          })(this, a, r, t),
                          l
                      );
            })
            .then((a) => {
                if (null === a) {
                    if ((this.recordDroppedEvent('before_send', u, e), _)) {
                        let t = 1 + (e.spans || []).length;
                        this.recordDroppedEvent('before_send', 'span', t);
                    }
                    throw new s.b(`${l} returned \`null\`, will not send event.`, 'log');
                }
                let n = r && r.getSession();
                if ((!_ && n && this._updateSessionFromEvent(n, a), _)) {
                    let e = (a.sdkProcessingMetadata && a.sdkProcessingMetadata.spanCountBeforeProcessing) || 0,
                        t = e - (a.spans ? a.spans.length : 0);
                    t > 0 && this.recordDroppedEvent('before_send', 'span', t);
                }
                let o = a.transaction_info;
                return (
                    _ &&
                        o &&
                        a.transaction !== e.transaction &&
                        (a.transaction_info = {
                            ...o,
                            source: 'custom'
                        }),
                    this.sendEvent(a, t),
                    a
                );
            })
            .then(null, (e) => {
                if (e instanceof s.b) throw e;
                throw (
                    (this.captureException(e, {
                        data: { __sentry__: !0 },
                        originalException: e
                    }),
                    new s.b(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${e}`))
                );
            });
    }
    _process(e) {
        this._numProcessing++,
            e.then(
                (e) => (this._numProcessing--, e),
                (e) => (this._numProcessing--, e)
            );
    }
    _clearOutcomes() {
        let e = this._outcomes;
        return (
            (this._outcomes = {}),
            Object.entries(e).map(([e, t]) => {
                let [r, a] = e.split(':');
                return {
                    reason: r,
                    category: a,
                    quantity: t
                };
            })
        );
    }
    _flushOutcomes() {
        R.X && n.kg.log('Flushing outcomes...');
        let e = this._clearOutcomes();
        if (0 === e.length) {
            R.X && n.kg.log('No outcomes to send');
            return;
        }
        if (!this._dsn) {
            R.X && n.kg.log('No dsn provided, will not send outcomes');
            return;
        }
        R.X && n.kg.log('Sending outcomes:', e);
        let t = (0, l.y)(e, this._options.tunnel && (0, a.RA)(this._dsn));
        this.sendEnvelope(t);
    }
}
function h(e) {
    return void 0 === e.type;
}
function D(e) {
    return 'transaction' === e.type;
}
