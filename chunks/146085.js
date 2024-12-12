r.d(n, {
    L_: function () {
        return d;
    },
    N: function () {
        return u;
    },
    gl: function () {
        return c;
    },
    xS: function () {
        return l;
    },
    yP: function () {
        return o;
    }
});
var i = r(47120);
var a = r(149765),
    s = r(981631);
let o = a.$e(s.Plq.MANAGE_CHANNELS, s.Plq.MUTE_MEMBERS, s.Plq.MOVE_MEMBERS);
a.$e(s.Plq.MANAGE_CHANNELS, s.Plq.MANAGE_ROLES);
let l = new Set([s.Plq.SPEAK, s.Plq.REQUEST_TO_SPEAK, s.Plq.USE_VAD]),
    u = a.$e(o, s.Plq.MANAGE_ROLES),
    c = a.$e(s.Plq.CONNECT, s.Plq.VIEW_CHANNEL),
    d = a.$e(c, s.Plq.READ_MESSAGE_HISTORY, s.Plq.REQUEST_TO_SPEAK, s.Plq.SPEAK, s.Plq.USE_VAD);
