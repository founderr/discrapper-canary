r.d(t, {
    W: function () {
        return L;
    }
});
var n = r(967752),
    a = r(622916),
    _ = r(394798),
    o = r(573736),
    i = r(928541),
    E = r(617726),
    c = r(370336),
    s = r(116698),
    I = r(538022),
    u = r(510529),
    l = r(263449),
    R = r(255768),
    A = r(380132),
    T = r(151122),
    N = r(112797),
    d = r(305625),
    O = r(820754),
    p = r(822578);
let f = "Not capturing exception because it's already been captured.";
class L {
    constructor(e) {
        if (((this._options = e), (this._integrations = {}), (this._numProcessing = 0), (this._outcomes = {}), (this._hooks = {}), (this._eventProcessors = []), e.dsn ? (this._dsn = (0, n.vK)(e.dsn)) : R.X && a.kg.warn('No DSN provided, client will not send events.'), this._dsn)) {
            let t = (0, u.U)(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
            this._transport = e.transport({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...e.transportOptions,
                url: t
            });
        }
    }
    captureException(e, t, r) {
        let n = (0, _.DM)();
        if ((0, _.YO)(e)) return R.X && a.kg.log(f), n;
        let o = {
            event_id: n,
            ...t
        };
        return this._process(this.eventFromException(e, o).then((e) => this._captureEvent(e, o, r))), o.event_id;
    }
    captureMessage(e, t, r, n) {
        let a = {
                event_id: (0, _.DM)(),
                ...r
            },
            i = (0, o.Le)(e) ? e : String(e),
            E = (0, o.pt)(e) ? this.eventFromMessage(i, t, a) : this.eventFromException(e, a);
        return this._process(E.then((e) => this._captureEvent(e, a, n))), a.event_id;
    }
    captureEvent(e, t, r) {
        let n = (0, _.DM)();
        if (t && t.originalException && (0, _.YO)(t.originalException)) return R.X && a.kg.log(f), n;
        let o = {
                event_id: n,
                ...t
            },
            i = (e.sdkProcessingMetadata || {}).capturedSpanScope;
        return this._process(this._captureEvent(e, o, i || r)), o.event_id;
    }
    captureSession(e) {
        'string' != typeof e.release ? R.X && a.kg.warn('Discarded session because of missing or non-string release') : (this.sendSession(e), (0, N.CT)(e, { init: !1 }));
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
        return t ? (this.emit('flush'), this._isClientDoneProcessing(e).then((r) => t.flush(e).then((e) => r && e))) : (0, i.WD)(!0);
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
        for (let e of t.attachments || []) r = (0, E.BO)(r, (0, E.zQ)(e));
        let n = this.sendEnvelope(r);
        n && n.then((t) => this.emit('afterSendEvent', e, t), null);
    }
    sendSession(e) {
        let t = (0, A.Q3)(e, this._dsn, this._options._metadata, this._options.tunnel);
        this.sendEnvelope(t);
    }
    recordDroppedEvent(e, t, r) {
        if (this._options.sendClientReports) {
            let n = 'number' == typeof r ? r : 1,
                _ = `${e}:${t}`;
            R.X && a.kg.log(`Recording outcome: "${_}"${n > 1 ? ` (${n} times)` : ''}`), (this._outcomes[_] = (this._outcomes[_] || 0) + n);
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
        return (this.emit('beforeEnvelope', e), this._isEnabled() && this._transport) ? this._transport.send(e).then(null, (e) => (R.X && a.kg.error('Error while sending event:', e), e)) : (R.X && a.kg.error('Transport disabled'), (0, i.WD)({}));
    }
    _setupIntegrations() {
        let { integrations: e } = this._options;
        (this._integrations = (0, T.q4)(this, e)), (0, T.uf)(this, e);
    }
    _updateSessionFromEvent(e, t) {
        let r = !1,
            n = !1,
            a = t.exception && t.exception.values;
        if (a)
            for (let e of ((n = !0), a)) {
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
                errors: e.errors || Number(n || r)
            }),
            this.captureSession(e));
    }
    _isClientDoneProcessing(e) {
        return new i.cW((t) => {
            let r = 0,
                n = setInterval(() => {
                    0 == this._numProcessing ? (clearInterval(n), t(!0)) : ((r += 1), e && r >= e && (clearInterval(n), t(!1)));
                }, 1);
        });
    }
    _isEnabled() {
        return !1 !== this.getOptions().enabled && void 0 !== this._transport;
    }
    _prepareEvent(e, t, r, n = (0, l.aF)()) {
        let a = this.getOptions(),
            _ = Object.keys(this._integrations);
        return (
            !t.integrations && _.length > 0 && (t.integrations = _),
            this.emit('preprocessEvent', e, t),
            !e.type && n.setLastEventId(e.event_id || t.event_id),
            (0, p.R)(a, e, t, r, this, n).then((e) => {
                if (null === e) return e;
                let t = {
                    ...n.getPropagationContext(),
                    ...(r ? r.getPropagationContext() : void 0)
                };
                if (!(e.contexts && e.contexts.trace) && t) {
                    let { traceId: r, spanId: n, parentSpanId: a, dsc: _ } = t;
                    e.contexts = {
                        trace: (0, c.Jr)({
                            trace_id: r,
                            span_id: n,
                            parent_span_id: a
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
                R.X && ('log' === e.logLevel ? a.kg.log(e.message) : a.kg.warn(e));
            }
        );
    }
    _processEvent(e, t, r) {
        let n = this.getOptions(),
            { sampleRate: a } = n,
            _ = D(e),
            E = S(e),
            c = e.type || 'error',
            I = `before send for type \`${c}\``,
            u = void 0 === a ? void 0 : (0, O.o)(a);
        if (E && 'number' == typeof u && Math.random() > u) return this.recordDroppedEvent('sample_rate', 'error', e), (0, i.$2)(new s.b(`Discarding event because it's not included in the random sample (sampling rate = ${a})`, 'log'));
        let l = 'replay_event' === c ? 'replay' : c,
            R = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
        return this._prepareEvent(e, t, r, R)
            .then((r) => {
                if (null === r) throw (this.recordDroppedEvent('event_processor', l, e), new s.b('An event processor returned `null`, will not send event.', 'log'));
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
                          (function (e, t, r, n) {
                              let { beforeSend: a, beforeSendTransaction: _, beforeSendSpan: o } = t;
                              if (S(r) && a) return a(r, n);
                              if (D(r)) {
                                  if (r.spans && o) {
                                      let t = [];
                                      for (let n of r.spans) {
                                          let r = o(n);
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
                                      return _(r, n);
                                  }
                              }
                              return r;
                          })(this, n, r, t),
                          I
                      );
            })
            .then((n) => {
                if (null === n) {
                    if ((this.recordDroppedEvent('before_send', l, e), _)) {
                        let t = 1 + (e.spans || []).length;
                        this.recordDroppedEvent('before_send', 'span', t);
                    }
                    throw new s.b(`${I} returned \`null\`, will not send event.`, 'log');
                }
                let a = r && r.getSession();
                if ((!_ && a && this._updateSessionFromEvent(a, n), _)) {
                    let e = (n.sdkProcessingMetadata && n.sdkProcessingMetadata.spanCountBeforeProcessing) || 0,
                        t = e - (n.spans ? n.spans.length : 0);
                    t > 0 && this.recordDroppedEvent('before_send', 'span', t);
                }
                let o = n.transaction_info;
                return (
                    _ &&
                        o &&
                        n.transaction !== e.transaction &&
                        (n.transaction_info = {
                            ...o,
                            source: 'custom'
                        }),
                    this.sendEvent(n, t),
                    n
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
                let [r, n] = e.split(':');
                return {
                    reason: r,
                    category: n,
                    quantity: t
                };
            })
        );
    }
    _flushOutcomes() {
        R.X && a.kg.log('Flushing outcomes...');
        let e = this._clearOutcomes();
        if (0 === e.length) {
            R.X && a.kg.log('No outcomes to send');
            return;
        }
        if (!this._dsn) {
            R.X && a.kg.log('No dsn provided, will not send outcomes');
            return;
        }
        R.X && a.kg.log('Sending outcomes:', e);
        let t = (0, I.y)(e, this._options.tunnel && (0, n.RA)(this._dsn));
        this.sendEnvelope(t);
    }
}
function S(e) {
    return void 0 === e.type;
}
function D(e) {
    return 'transaction' === e.type;
}
