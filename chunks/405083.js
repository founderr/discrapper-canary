n.r(a),
    n.d(a, {
        default: function () {
            return f;
        }
    });
var t = n(735250);
n(470079);
var r = n(355467),
    o = n(106976),
    i = n(703656),
    s = n(914010),
    d = n(598),
    c = n(791785),
    l = n(981631);
function f(e) {
    let { onClose: a, onComplete: n, forcesTransitionToGuild: f, ...u } = e,
        { subscriptionMetadataRequest: _ } = (0, d.usePaymentContext)();
    return (0, t.jsx)(c.PaymentModal, {
        ...u,
        onComplete: n,
        onClose: (e) => {
            a(e);
            let t = null == _ ? void 0 : _.guild_id;
            e && null != t && (r.jg(), (0, o.i1)(t), null == n || n(), null != t && (f || s.Z.getGuildId() !== t) && (0, i.uL)(l.Z5c.CHANNEL(t)));
        },
        forceNewPaymentModal: !0
    });
}
