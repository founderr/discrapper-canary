a.r(n),
    a.d(n, {
        default: function () {
            return f;
        }
    });
var t = a(200651);
a(192379);
var o = a(355467),
    i = a(106976),
    r = a(703656),
    l = a(914010),
    d = a(563132),
    c = a(791785),
    s = a(981631);
function f(e) {
    let { onClose: n, onComplete: a, forcesTransitionToGuild: f, ...u } = e,
        { subscriptionMetadataRequest: b } = (0, d.usePaymentContext)();
    return (0, t.jsx)(c.PaymentModal, {
        ...u,
        onComplete: a,
        onClose: (e) => {
            n(e);
            let t = null == b ? void 0 : b.guild_id;
            e && null != t && (o.jg(), (0, i.i1)(t), null == a || a(), null != t && (f || l.Z.getGuildId() !== t) && (0, r.uL)(s.Z5c.CHANNEL(t)));
        },
        forceNewPaymentModal: !0
    });
}
