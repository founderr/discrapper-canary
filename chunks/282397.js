let r, i;
n(47120);
var a,
    s,
    o,
    l,
    u = n(442837),
    c = n(570140),
    d = n(904245),
    f = n(911969),
    _ = n(314897),
    p = n(592125),
    h = n(70956),
    m = n(622449);
let g = 5 * h.Z.Millis.MINUTE,
    E = 10 * h.Z.Millis.SECOND,
    v = {},
    I = {},
    b = {};
let S = {};
function T(e) {
    var t;
    if (null == e) return !1;
    let n = v[e];
    if (null == n) return !1;
    null === (t = n.onSuccess) || void 0 === t || t.call(n), y(e);
}
function y(e) {
    if (null != S[e]) {
        delete S[e];
        return;
    }
    let t = v[e];
    delete v[e];
    let n = b[e];
    null != n && delete I[n],
        delete b[e],
        (S[e] = {
            insertedAt: Date.now(),
            nonce: e,
            messageId: n,
            interaction: t
        });
}
class A extends (a = u.ZP.Store) {
    getInteraction(e) {
        let t = I[e.id];
        return null != t ? v[t] : null;
    }
    getMessageInteractionStates() {
        let e = {};
        for (let [t, n] of Object.entries(v)) {
            let r = b[t];
            null != r && (e[r] = n.state);
        }
        return e;
    }
    canQueueInteraction(e, t) {
        let n = I[e];
        return (null == n || null == v[n] || v[n].state === m.F.FAILED) && (null == v[t] || v[t].state === m.F.FAILED) && !0;
    }
    getIFrameModalApplicationId() {
        return i;
    }
    getIFrameModalKey() {
        return r;
    }
}
(l = 'InteractionStore'),
    (o = 'displayName') in (s = A)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.ZP = new A(c.Z, {
        LOGOUT: function () {
            (v = {}),
                (I = {}),
                (b = {}),
                (S = {}),
                setInterval(() => {
                    let e = Date.now();
                    for (let [t, n] of Object.entries(S)) e - n.insertedAt > E && delete S[t];
                }, g);
        },
        INTERACTION_QUEUE: function (e) {
            let { nonce: t, messageId: n, data: r, onCreate: i, onCancel: a, onSuccess: s, onFailure: o } = e;
            null != n && ((I[n] = t), (b[t] = n)),
                (v[t] = {
                    state: m.F.QUEUED,
                    data: r,
                    onCreate: i,
                    onCancel: a,
                    onSuccess: s,
                    onFailure: o
                });
        },
        INTERACTION_CREATE: function (e) {
            var t;
            let { nonce: n, interactionId: r } = e;
            if (null == n) return !1;
            let i = v[n];
            if (null == i || i.state !== m.F.QUEUED) return !1;
            (i.state = m.F.CREATED), null === (t = i.onCreate) || void 0 === t || t.call(i, r);
        },
        INTERACTION_SUCCESS: function (e) {
            let { nonce: t } = e;
            T(t);
        },
        INTERACTION_FAILURE: function (e) {
            var t;
            let { nonce: n, errorCode: r, errorMessage: i, status: a, reasonCode: s } = e;
            if (null == n) return !1;
            let o = v[n];
            if (null == o) return !1;
            null === (t = o.onFailure) || void 0 === t || t.call(o, r, i, a, s),
                o.data.interactionType === f.B8.APPLICATION_COMMAND
                    ? y(n)
                    : (v[n] = {
                          ...o,
                          state: m.F.FAILED,
                          errorCode: r,
                          errorMessage: i
                      });
        },
        MESSAGE_CREATE: function (e) {
            let { message: t } = e;
            if (null == t.nonce) return !1;
            {
                var n;
                let e = v[t.nonce];
                if (null == e) return !1;
                null === (n = e.onSuccess) || void 0 === n || n.call(e), y(t.nonce);
            }
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (null == p.Z.getChannel(t)) return !1;
            for (let [e, t] of Object.entries(v)) t.state === m.F.FAILED && y(e);
        },
        INTERACTION_IFRAME_MODAL_CREATE: function (e) {
            let { application: t, nonce: n } = e;
            (i = t.id), T(n);
        },
        INTERACTION_IFRAME_MODAL_CLOSE: function () {
            (r = void 0), (i = void 0);
        },
        INTERACTION_IFRAME_MODAL_KEY_CREATE: function (e) {
            let { modalKey: t } = e;
            r = t;
        },
        INTERACTION_MODAL_CREATE: function (e) {
            let { nonce: t } = e;
            T(t);
        },
        EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
            let t,
                n,
                { participants: r } = e,
                i = _.default.getSessionId(),
                a = _.default.getId(),
                s = r.find((e) => e.user_id === a && e.session_id === i);
            if (null == s || null == s.nonce) return;
            let o = S[s.nonce];
            if ((null == o ? ((t = b[s.nonce]), (n = v[s.nonce])) : ((t = o.messageId), (n = o.interaction)), null != n && null != t)) y(s.nonce), null != t && 'channelId' in n.data && d.Z.deleteMessage(n.data.channelId, t, !0);
        }
    }));
