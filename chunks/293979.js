n.d(t, {
    X9: function () {
        return R;
    },
    b8: function () {
        return Z;
    },
    hz: function () {
        return A;
    }
}),
    n(47120),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var l = n(192379),
    u = n(512722),
    i = n.n(u),
    r = n(442837),
    a = n(544891),
    o = n(570140),
    d = n(911969),
    c = n(81897),
    s = n(155268),
    E = n(603721),
    T = n(314897),
    I = n(592125),
    f = n(271383),
    p = n(914010),
    m = n(768581),
    S = n(70956),
    C = n(709054),
    _ = n(970184),
    g = n(471073),
    N = n(892902),
    h = n(981631),
    v = n(388032);
let O = (e) => {
    let t = !0;
    return (
        e.forEach((e) => {
            !e() && (t = !1);
        }),
        t
    );
};
function A(e) {
    var t;
    let n = (0, _.CJ)(),
        l = null == n ? void 0 : null === (t = n.modal) || void 0 === t ? void 0 : t.components[0];
    return (null == l ? void 0 : l.type) === d.re.ACTION_ROW && l.components[0].id === e;
}
function L(e) {
    return l.useMemo(() => {
        let t = p.Z.getGuildId(),
            n = null != t && null != e.bot ? f.ZP.getMember(t, e.bot.id) : void 0,
            l = m.ZP.getApplicationIconURL({
                id: e.id,
                icon: e.icon,
                botIconFirst: !0,
                bot: null != n ? e.bot : void 0
            }),
            u = null != n && null != e.bot ? e.bot.username : e.name;
        return {
            applicationIconURL: l,
            applicationName: u,
            applicationBaseUrl: (0, s.Z)(e.id)
        };
    }, [e.id, e.icon, e.name, e.bot]);
}
function R(e, t) {
    let { application: n, customId: u, components: s } = e,
        f = (0, c.Z)(),
        [p, m] = l.useState(null),
        [_, N] = l.useState(null),
        A = (0, r.e7)([g.Z], () => g.Z.getModalState(_), [_]),
        R = l.useRef(new Set()),
        Z = l.useCallback(() => {
            m(null),
                N(null),
                O(R.current) &&
                    N(
                        (function (e, t) {
                            let n = C.default.fromTimestamp(Date.now()),
                                l = e.channelId,
                                u = I.Z.getChannel(l);
                            i()(null != u, 'expected channel');
                            let r = y(e.customId, e.components);
                            (0, E.kz)(n, { data: { interactionType: d.B8.MODAL_SUBMIT } });
                            let o = () => {
                                (null == t || !t.aborted) &&
                                    a.tn
                                        .post({
                                            url: h.ANM.INTERACTIONS,
                                            body: {
                                                type: d.B8.MODAL_SUBMIT,
                                                application_id: e.application.id,
                                                channel_id: u.id,
                                                guild_id: u.guild_id,
                                                data: {
                                                    id: e.id,
                                                    custom_id: e.customId,
                                                    components: r
                                                },
                                                session_id: T.default.getSessionId(),
                                                nonce: n
                                            },
                                            signal: t,
                                            rejectWithError: !1
                                        })
                                        .catch((e) => {
                                            429 === e.status ? setTimeout(o, e.body.retry_after * S.Z.Millis.SECOND) : (0, E.yr)(n);
                                        });
                            };
                            return o(), n;
                        })(e, f)
                    );
        }, [f, e]);
    l.useEffect(() => {
        A === g.i.SUCCEEDED &&
            (o.Z.dispatch({
                type: 'CLEAR_INTERACTION_MODAL_STATE',
                customId: u
            }),
            t()),
            A === g.i.ERRORED && m(v.intl.string(v.t.uJgdEh));
    }, [_, A, t, u]);
    let { applicationIconURL: M, applicationName: b } = L(n);
    return {
        components: s,
        applicationIconURL: M,
        applicationName: b,
        submissionState: A,
        error: p,
        validators: R.current,
        onSubmit: Z
    };
}
function Z(e) {
    let { application: t, customId: n } = e,
        { applicationIconURL: l, applicationName: u, applicationBaseUrl: r } = L(t),
        a = I.Z.getChannel(e.channelId);
    i()(null != a, 'channel should not be null');
    let o = {
        instance_id: ''.concat(e.channelId, ':').concat(t.id, ':').concat(n),
        custom_id: n,
        channel_id: e.channelId
    };
    null != a.guild_id && '' !== a.guild_id && (o.guild_id = a.guild_id);
    let d = new URL(null != r ? r : '');
    return (
        (d.pathname = e.iframePath),
        {
            applicationIconURL: l,
            applicationName: u,
            applicationBaseUrl: r,
            queryParams: o,
            iframeUrl: d.toString()
        }
    );
}
let y = (e, t) =>
    t.map((t) => {
        switch (t.type) {
            case d.re.ACTION_ROW:
                return {
                    type: t.type,
                    components: y(e, t.components)
                };
            case d.re.TEXT_INPUT: {
                let n = N.Z.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    value: (null == n ? void 0 : n.type) === t.type ? n.value : null
                };
            }
            case d.re.STRING_SELECT: {
                let n = N.Z.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    values: (null == n ? void 0 : n.type) === t.type ? n.values : null
                };
            }
            default:
                i()(!1, 'unreachable');
        }
    });
