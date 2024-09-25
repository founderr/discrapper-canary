n.d(t, {
    L_: function () {
        return c;
    },
    N: function () {
        return l;
    },
    gl: function () {
        return u;
    },
    xS: function () {
        return s;
    },
    yP: function () {
        return o;
    }
});
var r = n(47120);
var i = n(149765),
    a = n(981631);
let o = i.$e(a.Plq.MANAGE_CHANNELS, a.Plq.MUTE_MEMBERS, a.Plq.MOVE_MEMBERS);
i.$e(a.Plq.MANAGE_CHANNELS, a.Plq.MANAGE_ROLES);
let s = new Set([a.Plq.SPEAK, a.Plq.REQUEST_TO_SPEAK, a.Plq.USE_VAD]),
    l = i.$e(o, a.Plq.MANAGE_ROLES),
    u = i.$e(a.Plq.CONNECT, a.Plq.VIEW_CHANNEL),
    c = i.$e(u, a.Plq.READ_MESSAGE_HISTORY, a.Plq.REQUEST_TO_SPEAK, a.Plq.SPEAK, a.Plq.USE_VAD);
