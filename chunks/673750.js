r.d(n, {
    $V: function () {
        return a;
    },
    Bz: function () {
        return R;
    },
    hc: function () {
        return O;
    }
});
var i,
    a,
    s = r(653041);
var o = r(47120);
var l = r(512722),
    u = r.n(l),
    c = r(544891),
    d = r(911969),
    f = r(367907),
    _ = r(710845),
    h = r(432877),
    p = r(873741),
    m = r(314897),
    g = r(866960),
    E = r(70956),
    v = r(403182),
    I = r(651655),
    T = r(861990),
    b = r(141795),
    y = r(981631),
    S = r(959517);
function A(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let N = null;
__OVERLAY__ && (N = r(237997).Z),
    !(function (e) {
        (e.OVERLAY_UNLOCKED = 'overlay_unlocked'), (e.OVERLAY_UNLOCKED_PINNED = 'overlay_unlocked_pinned'), (e.OVERLAY_LOCKED_ACTIVATED = 'overlay_locked_activated');
    })(i || (i = {})),
    !(function (e) {
        (e[(e.SEND = 0)] = 'SEND'), (e[(e.EDIT = 1)] = 'EDIT'), (e[(e.COMMAND = 2)] = 'COMMAND');
    })(a || (a = {}));
let C = (e) => 0 === e.type,
    R = (e) => 1 === e.type,
    O = (e) => (C(e) ? e.message.nonce : R(e) ? e.message.messageId : e.message.data.id),
    D = [1 * E.Z.Millis.MINUTE, 5 * E.Z.Millis.MINUTE];
class L extends I.Z {
    isFull() {
        return this.queue.length >= this.maxSize;
    }
    drain(e, n) {
        switch ((this.logger.log('Draining Message Queue with: ', e.type), e.type)) {
            case 0:
                this.handleSend(e.message, n);
                break;
            case 1:
                this.handleEdit(e.message, n);
                break;
            case 2:
                this.handleCommand(e.message, n);
        }
    }
    cancelRequest(e) {
        var n;
        this.logger.log('Cancel message send: ', e), null === (n = this.requests.get(e)) || void 0 === n || n.abort(), this.requests.delete(e), this.cancelQueueMetricTimers(e);
    }
    cancelPendingSendRequests(e) {
        let n = [],
            r = [];
        for (; this.queue.length > 0; ) {
            let i = this.queue.shift(),
                { message: a } = i;
            0 === a.type && a.message.channelId === e ? n.push(a.message) : r.push(i);
        }
        return this.queue.push(...r), this.logger.log('Cancel pending send requests', n.length), n;
    }
    startQueueMetricTimers(e) {
        let n = D.map((e) =>
            setTimeout(() => {
                (0, f.yw)(y.rMx.SEND_MESSAGE_QUEUED, { queued_duration_ms: e });
            }, e)
        );
        this.analyticsTimeouts.set(e, n);
    }
    cancelQueueMetricTimers(e) {
        var n;
        null === (n = this.analyticsTimeouts.get(e)) || void 0 === n || n.forEach(clearTimeout), this.analyticsTimeouts.delete(e);
    }
    createResponseHandler(e, n) {
        return (r) => {
            if ((null != e && (this.requests.delete(e), this.cancelQueueMetricTimers(e)), r.hasErr)) return n(null, r);
            if (null != r.body && (r.body.code === y.evJ.SLOWMODE_RATE_LIMITED || r.body.code === y.evJ.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED)) n(null, r);
            else if (429 === r.status) {
                let e = parseInt(r.headers['retry-after']);
                isNaN(e) ? n(null, r) : n({ retryAfter: e * E.Z.Millis.SECOND });
            } else n(null, r);
        };
    }
    handleSend(e, n) {
        let r;
        let { channelId: i, ...a } = e,
            s = (0, p.d)(),
            o = {
                mobile_network_type: g.Z.getType(),
                ...a,
                ...(null != s && { signal_strength: s })
            };
        if (h.ZP.get('send_fail_100')) {
            this.logger.log('Skipping message send because send_fail_100 is enabled'),
                n(null, {
                    ok: !1,
                    hasErr: !1,
                    status: 500,
                    headers: {},
                    body: '{}',
                    text: 'Simulated failure'
                });
            return;
        }
        null != N && (N.isInstanceLocked() ? (r = { location: 'overlay_locked_activated' }) : !N.isInstanceLocked() && (r = N.isPinned(y.Odu.TEXT) ? { location: 'overlay_unlocked_pinned' } : { location: 'overlay_unlocked' }));
        let l = this.createResponseHandler(e.nonce, n),
            u = new AbortController();
        this.startQueueMetricTimers(e.nonce),
            c.tn.post(
                {
                    url: y.ANM.MESSAGES(i),
                    body: o,
                    context: r,
                    oldFormErrors: !0,
                    ...S.hs,
                    signal: u.signal,
                    rejectWithError: !0,
                    onRequestCreated: () => {
                        null != e.nonce && this.requests.set(e.nonce, u);
                    }
                },
                l
            );
    }
    handleEdit(e, n) {
        let { channelId: r, messageId: i, ...a } = e,
            s = new AbortController();
        c.tn.patch(
            {
                url: y.ANM.MESSAGE(r, i),
                body: a,
                retries: 1,
                oldFormErrors: !0,
                signal: s.signal,
                rejectWithError: !0,
                onRequestCreated: () => {
                    this.requests.set(i, s);
                }
            },
            this.createResponseHandler(i, n)
        );
    }
    handleCommand(e, n) {
        let r,
            { applicationId: i, guildId: a, channelId: s, data: o, nonce: l, attachments: f, maxSizeCallback: _, analytics_location: h, sectionName: p, source: g } = e,
            E = {
                type: d.B8.APPLICATION_COMMAND,
                application_id: i,
                guild_id: a,
                channel_id: s,
                session_id: m.default.getSessionId(),
                data: o,
                nonce: l,
                analytics_location: h,
                section_name: p,
                source: g
            };
        if (null != f) {
            (E.data.attachments = []), (r = []);
            let e = f;
            E.data.attachments = e.map((e, n) => (u()(e.status === b.m.COMPLETED, 'Uploads must be staged before trying to send a message'), (0, T.B)(e, n)));
        }
        let I = new AbortController();
        c.tn.post(
            {
                url: y.ANM.INTERACTIONS,
                fields: [
                    {
                        name: 'payload_json',
                        value: JSON.stringify(E)
                    }
                ],
                attachments: r,
                signal: I.signal,
                rejectWithError: !0,
                onRequestCreated: (e) => {
                    this.requests.set(l, I),
                        e.on('progress', (e) => {
                            let { total: n } = e,
                                r = (0, v.dg)(a);
                            null != n && n > r && (this.cancelRequest(l), null == _ || _(r));
                        });
                }
            },
            this.createResponseHandler(l, n)
        );
    }
    constructor(e = 5) {
        super(new _.Z('MessageQueue')), A(this, 'maxSize', void 0), A(this, 'requests', void 0), A(this, 'analyticsTimeouts', void 0), (this.maxSize = e), (this.requests = new Map()), (this.analyticsTimeouts = new Map());
    }
}
n.ZP = new L();
