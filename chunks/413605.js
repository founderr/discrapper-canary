n.d(t, {
    $P: function () {
        return u;
    },
    P1: function () {
        return _;
    },
    TY: function () {
        return c;
    },
    Tx: function () {
        return s;
    },
    VR: function () {
        return E;
    },
    W6: function () {
        return l;
    },
    wx: function () {
        return a.wx;
    }
});
var r = n(924301),
    i = n(131704),
    a = n(245335);
function o(e) {
    return e.type === a.wx.GROUP_DM || (null != e.channel && (0, i.bc)(e.channel.type));
}
function s(e) {
    let t = e.guild_scheduled_event;
    return null != t && (0, r.Ld)(t);
}
function l(e) {
    return e.target_type === a.Iq.ROLE_SUBSCRIPTIONS_PURCHASE;
}
function u(e) {
    return null != e.channel && null != e.stage_instance;
}
function c(e) {
    return e.target_type === a.Iq.STREAM && null != e.target_user;
}
function d(e) {
    return e.type === a.wx.FRIEND || (null == e.guild && null != e.inviter);
}
function _(e) {
    return e.target_type === a.Iq.EMBEDDED_APPLICATION;
}
function E(e) {
    return 'number' == typeof e.type ? e.type : o(e) ? a.wx.GROUP_DM : d(e) ? a.wx.FRIEND : a.wx.GUILD;
}
