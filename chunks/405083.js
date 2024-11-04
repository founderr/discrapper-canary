n.r(a),
    n.d(a, {
        default: function () {
            return f;
        }
    });
var t = n(200651);
n(192379);
var r = n(355467),
    o = n(106976),
    i = n(703656),
    s = n(914010),
    d = n(563132),
    c = n(791785),
    l = n(981631);
function f(e) {
    let { onClose: a, onComplete: n, forcesTransitionToGuild: f, ...u } = e,
        { subscriptionMetadataRequest: m } = (0, d.usePaymentContext)();
    return (0, t.jsx)(c.PaymentModal, {
        ...u,
        onComplete: n,
        onClose: (e) => {
            a(e);
            let t = null == m ? void 0 : m.guild_id;
            e && null != t && (r.jg(), (0, o.i1)(t), null == n || n(), null != t && (f || s.Z.getGuildId() !== t) && (0, i.uL)(l.Z5c.CHANNEL(t)));
        },
        forceNewPaymentModal: !0
    });
}
