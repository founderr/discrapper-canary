n.d(t, {
    X9: function () {
        return U;
    },
    b8: function () {
        return w;
    },
    hz: function () {
        return M;
    }
});
var r = n(47120);
var i = n(315314);
var a = n(610138);
var o = n(216116);
var s = n(78328);
var l = n(815648);
var u = n(470079),
    c = n(512722),
    d = n.n(c),
    _ = n(442837),
    E = n(544891),
    f = n(570140),
    h = n(911969),
    p = n(81897),
    m = n(155268),
    I = n(603721),
    T = n(314897),
    g = n(592125),
    S = n(271383),
    A = n(914010),
    v = n(768581),
    N = n(70956),
    O = n(709054),
    R = n(970184),
    C = n(471073),
    y = n(892902),
    b = n(981631),
    L = n(689938);
let D = (e) => {
    let t = !0;
    return (
        e.forEach((e) => {
            !e() && (t = !1);
        }),
        t
    );
};
function M(e) {
    var t;
    let n = (0, R.CJ)(),
        r = null == n ? void 0 : null === (t = n.modal) || void 0 === t ? void 0 : t.components[0];
    return (null == r ? void 0 : r.type) === h.re.ACTION_ROW && r.components[0].id === e;
}
function P(e) {
    return u.useMemo(() => {
        let t = A.Z.getGuildId(),
            n = null != t && null != e.bot ? S.ZP.getMember(t, e.bot.id) : void 0,
            r = v.ZP.getApplicationIconURL({
                id: e.id,
                icon: e.icon,
                botIconFirst: !0,
                bot: null != n ? e.bot : void 0
            }),
            i = null != n && null != e.bot ? e.bot.username : e.name;
        return {
            applicationIconURL: r,
            applicationName: i,
            applicationBaseUrl: (0, m.Z)(e.id)
        };
    }, [e.id, e.icon, e.name, e.bot]);
}
function U(e, t) {
    let { application: n, customId: r, components: i } = e,
        a = (0, p.Z)(),
        [o, s] = u.useState(null),
        [l, c] = u.useState(null),
        d = (0, _.e7)([C.Z], () => C.Z.getModalState(l), [l]),
        E = u.useRef(new Set()),
        h = u.useCallback(() => {
            s(null), c(null), D(E.current) && c(G(e, a));
        }, [a, e]);
    u.useEffect(() => {
        d === C.i.SUCCEEDED &&
            (f.Z.dispatch({
                type: 'CLEAR_INTERACTION_MODAL_STATE',
                customId: r
            }),
            t()),
            d === C.i.ERRORED && s(L.Z.Messages.INTERACTION_FORM_SUBMISSION_FAILED);
    }, [l, d, t, r]);
    let { applicationIconURL: m, applicationName: I } = P(n);
    return {
        components: i,
        applicationIconURL: m,
        applicationName: I,
        submissionState: d,
        error: o,
        validators: E.current,
        onSubmit: h
    };
}
function w(e) {
    let { application: t, customId: n } = e,
        { applicationIconURL: r, applicationName: i, applicationBaseUrl: a } = P(t),
        o = g.Z.getChannel(e.channelId);
    d()(null != o, 'channel should not be null');
    let s = {
        instance_id: ''.concat(e.channelId, ':').concat(t.id, ':').concat(n),
        custom_id: n,
        channel_id: e.channelId
    };
    null != o.guild_id && '' !== o.guild_id && (s.guild_id = o.guild_id);
    let l = new URL(null != a ? a : '');
    return (
        (l.pathname = e.iframePath),
        {
            applicationIconURL: r,
            applicationName: i,
            applicationBaseUrl: a,
            queryParams: s,
            iframeUrl: l.toString()
        }
    );
}
let x = (e, t) =>
    t.map((t) => {
        switch (t.type) {
            case h.re.ACTION_ROW:
                return {
                    type: t.type,
                    components: x(e, t.components)
                };
            case h.re.INPUT_TEXT: {
                let n = y.Z.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    value: (null == n ? void 0 : n.type) === t.type ? n.value : null
                };
            }
            case h.re.STRING_SELECT: {
                let n = y.Z.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    values: (null == n ? void 0 : n.type) === t.type ? n.values : null
                };
            }
            default:
                d()(!1, 'unreachable');
        }
    });
function G(e, t) {
    let n = O.default.fromTimestamp(Date.now()),
        r = e.channelId,
        i = g.Z.getChannel(r);
    d()(null != i, 'expected channel');
    let a = x(e.customId, e.components);
    (0, I.kz)(n, { data: { interactionType: h.B8.MODAL_SUBMIT } });
    let o = () => {
        (null == t || !t.aborted) &&
            E.tn
                .post({
                    url: b.ANM.INTERACTIONS,
                    body: {
                        type: h.B8.MODAL_SUBMIT,
                        application_id: e.application.id,
                        channel_id: i.id,
                        guild_id: i.guild_id,
                        data: {
                            id: e.id,
                            custom_id: e.customId,
                            components: a
                        },
                        session_id: T.default.getSessionId(),
                        nonce: n
                    },
                    signal: t
                })
                .catch((e) => {
                    429 === e.status ? setTimeout(o, e.body.retry_after * N.Z.Millis.SECOND) : (0, I.yr)(n);
                });
    };
    return o(), n;
}
