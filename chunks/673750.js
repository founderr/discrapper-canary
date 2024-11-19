n.d(t, {
    $V: function () {
        return i;
    },
    Bz: function () {
        return C;
    },
    hc: function () {
        return R;
    }
}),
    n(653041),
    n(47120);
var r,
    i,
    a,
    s,
    o = n(512722),
    l = n.n(o),
    u = n(544891),
    c = n(911969),
    d = n(367907),
    f = n(710845),
    _ = n(432877),
    p = n(873741),
    h = n(314897),
    m = n(866960),
    g = n(70956),
    E = n(403182),
    v = n(651655),
    b = n(861990),
    I = n(141795),
    S = n(981631),
    T = n(959517);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let A = null;
__OVERLAY__ && (A = n(237997).Z), ((a = r || (r = {})).OVERLAY_UNLOCKED = 'overlay_unlocked'), (a.OVERLAY_UNLOCKED_PINNED = 'overlay_unlocked_pinned'), (a.OVERLAY_LOCKED_ACTIVATED = 'overlay_locked_activated'), ((s = i || (i = {}))[(s.SEND = 0)] = 'SEND'), (s[(s.EDIT = 1)] = 'EDIT'), (s[(s.COMMAND = 2)] = 'COMMAND');
let N = (e) => 0 === e.type,
    C = (e) => 1 === e.type,
    R = (e) => (N(e) ? e.message.nonce : C(e) ? e.message.messageId : e.message.data.id),
    O = [1 * g.Z.Millis.MINUTE, 5 * g.Z.Millis.MINUTE];
class D extends v.Z {
    isFull() {
        return this.queue.length >= this.maxSize;
    }
    drain(e, t) {
        switch ((this.logger.log('Draining Message Queue with: ', e.type), e.type)) {
            case 0:
                this.handleSend(e.message, t);
                break;
            case 1:
                this.handleEdit(e.message, t);
                break;
            case 2:
                this.handleCommand(e.message, t);
        }
    }
    cancelRequest(e) {
        var t;
        this.logger.log('Cancel message send: ', e), null === (t = this.requests.get(e)) || void 0 === t || t.abort(), this.requests.delete(e), this.cancelQueueMetricTimers(e);
    }
    cancelPendingSendRequests(e) {
        let t = [],
            n = [];
        for (; this.queue.length > 0; ) {
            let r = this.queue.shift(),
                { message: i } = r;
            0 === i.type && i.message.channelId === e ? t.push(i.message) : n.push(r);
        }
        return this.queue.push(...n), this.logger.log('Cancel pending send requests', t.length), t;
    }
    startQueueMetricTimers(e) {
        let t = O.map((e) =>
            setTimeout(() => {
                (0, d.yw)(S.rMx.SEND_MESSAGE_QUEUED, { queued_duration_ms: e });
            }, e)
        );
        this.analyticsTimeouts.set(e, t);
    }
    cancelQueueMetricTimers(e) {
        var t;
        null === (t = this.analyticsTimeouts.get(e)) || void 0 === t || t.forEach(clearTimeout), this.analyticsTimeouts.delete(e);
    }
    createResponseHandler(e, t) {
        return (n) => {
            if ((null != e && (this.requests.delete(e), this.cancelQueueMetricTimers(e)), n.hasErr)) return t(null, n);
            if (null != n.body && (n.body.code === S.evJ.SLOWMODE_RATE_LIMITED || n.body.code === S.evJ.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED)) t(null, n);
            else if (429 === n.status) {
                let e = parseInt(n.headers['retry-after']);
                isNaN(e) ? t(null, n) : t({ retryAfter: e * g.Z.Millis.SECOND });
            } else t(null, n);
        };
    }
    handleSend(e, t) {
        let n;
        let { channelId: r, ...i } = e,
            a = (0, p.d)(),
            s = {
                mobile_network_type: m.Z.getType(),
                ...i,
                ...(null != a && { signal_strength: a })
            };
        if (_.ZP.get('send_fail_100')) {
            this.logger.log('Skipping message send because send_fail_100 is enabled'),
                t(null, {
                    ok: !1,
                    hasErr: !1,
                    status: 500,
                    headers: {},
                    body: '{}',
                    text: 'Simulated failure'
                });
            return;
        }
        null != A && (A.isInstanceLocked() ? (n = { location: 'overlay_locked_activated' }) : !A.isInstanceLocked() && (n = A.isPinned(S.Odu.TEXT) ? { location: 'overlay_unlocked_pinned' } : { location: 'overlay_unlocked' }));
        let o = this.createResponseHandler(e.nonce, t),
            l = new AbortController();
        this.startQueueMetricTimers(e.nonce),
            u.tn.post(
                {
                    url: S.ANM.MESSAGES(r),
                    body: s,
                    context: n,
                    oldFormErrors: !0,
                    ...T.hs,
                    signal: l.signal,
                    rejectWithError: !0,
                    onRequestCreated: () => {
                        null != e.nonce && this.requests.set(e.nonce, l);
                    }
                },
                o
            );
    }
    handleEdit(e, t) {
        let { channelId: n, messageId: r, ...i } = e,
            a = new AbortController();
        u.tn.patch(
            {
                url: S.ANM.MESSAGE(n, r),
                body: i,
                retries: 1,
                oldFormErrors: !0,
                signal: a.signal,
                rejectWithError: !0,
                onRequestCreated: () => {
                    this.requests.set(r, a);
                }
            },
            this.createResponseHandler(r, t)
        );
    }
    handleCommand(e, t) {
        let n,
            { applicationId: r, guildId: i, channelId: a, data: s, nonce: o, attachments: d, maxSizeCallback: f, analytics_location: _, sectionName: p, source: m } = e,
            g = {
                type: c.B8.APPLICATION_COMMAND,
                application_id: r,
                guild_id: i,
                channel_id: a,
                session_id: h.default.getSessionId(),
                data: s,
                nonce: o,
                analytics_location: _,
                section_name: p,
                source: m
            };
        if (null != d) {
            (g.data.attachments = []), (n = []);
            g.data.attachments = d.map((e, t) => (l()(e.status === I.m.COMPLETED, 'Uploads must be staged before trying to send a message'), (0, b.B)(e, t)));
        }
        let v = new AbortController();
        u.tn.post(
            {
                url: S.ANM.INTERACTIONS,
                fields: [
                    {
                        name: 'payload_json',
                        value: JSON.stringify(g)
                    }
                ],
                attachments: n,
                signal: v.signal,
                rejectWithError: !0,
                onRequestCreated: (e) => {
                    this.requests.set(o, v),
                        e.on('progress', (e) => {
                            let { total: t } = e,
                                n = (0, E.dg)(i);
                            null != t && t > n && (this.cancelRequest(o), null == f || f(n));
                        });
                }
            },
            this.createResponseHandler(o, t)
        );
    }
    constructor(e = 5) {
        super(new f.Z('MessageQueue')), y(this, 'maxSize', void 0), y(this, 'requests', void 0), y(this, 'analyticsTimeouts', void 0), (this.maxSize = e), (this.requests = new Map()), (this.analyticsTimeouts = new Map());
    }
}
t.ZP = new D();
