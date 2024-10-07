n.r(t),
    n.d(t, {
        default: function () {
            return c;
        }
    });
var a = n(735250);
n(470079);
var r = n(355467),
    l = n(106976),
    i = n(703656),
    s = n(914010),
    o = n(598),
    d = n(791785),
    u = n(981631);
function c(e) {
    let { onClose: t, onComplete: n, forcesTransitionToGuild: c, ...f } = e,
        { subscriptionMetadataRequest: h } = (0, o.usePaymentContext)();
    return (0, a.jsx)(d.PaymentModal, {
        ...f,
        onComplete: n,
        onClose: (e) => {
            t(e);
            let a = null == h ? void 0 : h.guild_id;
            e && null != a && (r.jg(), (0, l.i1)(a), null == n || n(), null != a && (c || s.Z.getGuildId() !== a) && (0, i.uL)(u.Z5c.CHANNEL(a)));
        },
        forceNewPaymentModal: !0
    });
}
