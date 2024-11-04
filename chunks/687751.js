var i = n(200651);
n(192379);
var r = n(481060),
    a = n(570140),
    l = n(317770),
    s = n(592125),
    o = n(944486),
    c = n(914010),
    d = n(594174),
    u = n(758119),
    h = n(920644),
    m = n(208381),
    p = n(723359),
    g = n(981631);
function f(e, t) {
    var n;
    if (null == e) return;
    let i = d.default.getCurrentUser();
    (null === (n = s.Z.getChannel(t)) || void 0 === n ? void 0 : n.isNSFW()) && null != i && null == i.nsfwAllowed && (0, u.mN)(p.L0.NSFW_CHANNEL);
}
class _ extends l.Z {
    _initialize() {
        a.Z.subscribe('CONNECTION_OPEN', this.handleConnectionOpen), a.Z.subscribe('CHANNEL_SELECT', this.handleChannelSelect), a.Z.subscribe('AGE_GATE_MODAL_OPEN', this.handleAgeGateModalOpen), a.Z.subscribe('AGE_GATE_MODAL_CLOSE', this.handleAgeGateModalClose), a.Z.subscribe('AGE_GATE_SUCCESS_MODAL_OPEN', this.handleAgeGateSuccess), a.Z.subscribe('AGE_GATE_FAILURE_MODAL_OPEN', this.handleAgeGateFailure);
    }
    _terminate() {
        a.Z.unsubscribe('CONNECTION_OPEN', this.handleConnectionOpen), a.Z.unsubscribe('CHANNEL_SELECT', this.handleChannelSelect), a.Z.unsubscribe('AGE_GATE_MODAL_OPEN', this.handleAgeGateModalOpen), a.Z.unsubscribe('AGE_GATE_MODAL_CLOSE', this.handleAgeGateModalClose), a.Z.unsubscribe('AGE_GATE_SUCCESS_MODAL_OPEN', this.handleAgeGateSuccess), a.Z.unsubscribe('AGE_GATE_FAILURE_MODAL_OPEN', this.handleAgeGateFailure);
    }
    handleChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        f(t, n);
    }
    handleConnectionOpen() {
        let e = c.Z.getGuildId();
        f(e, o.Z.getChannelId());
    }
    handleAgeGateModalOpen(e) {
        let { source: t } = e;
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await n.e('1716').then(n.bind(n, 746882));
                return (n) =>
                    (0, i.jsx)(e, {
                        source: t,
                        ...n
                    });
            },
            {
                modalKey: p.dG,
                onCloseRequest: g.dG4
            }
        );
    }
    handleAgeGateSuccess() {
        (0, r.updateModal)(p.dG, (e) => (0, i.jsx)(m.Z, { ...e }));
    }
    handleAgeGateFailure(e) {
        let { underageMessage: t } = e;
        (0, r.updateModal)(p.dG, (e) =>
            (0, i.jsx)(h.Z, {
                underageMessage: t,
                ...e
            })
        );
    }
    handleAgeGateModalClose() {
        (0, r.closeModal)(p.dG);
    }
}
t.Z = new _();
