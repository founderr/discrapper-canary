r.d(n, {
    $P: function () {
        return c;
    },
    P1: function () {
        return _;
    },
    TY: function () {
        return d;
    },
    Tx: function () {
        return l;
    },
    VR: function () {
        return h;
    },
    W6: function () {
        return u;
    },
    wx: function () {
        return s.wx;
    }
});
var i = r(924301),
    a = r(131704),
    s = r(245335);
function o(e) {
    return e.type === s.wx.GROUP_DM || (null != e.channel && (0, a.bc)(e.channel.type));
}
function l(e) {
    let n = e.guild_scheduled_event;
    return null != n && (0, i.Ld)(n);
}
function u(e) {
    return e.target_type === s.Iq.ROLE_SUBSCRIPTIONS_PURCHASE;
}
function c(e) {
    return null != e.channel && null != e.stage_instance;
}
function d(e) {
    return e.target_type === s.Iq.STREAM && null != e.target_user;
}
function f(e) {
    return e.type === s.wx.FRIEND || (null == e.guild && null != e.inviter);
}
function _(e) {
    return e.target_type === s.Iq.EMBEDDED_APPLICATION;
}
function h(e) {
    return 'number' == typeof e.type ? e.type : o(e) ? s.wx.GROUP_DM : f(e) ? s.wx.FRIEND : s.wx.GUILD;
}
