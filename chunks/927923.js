n.d(t, {
    KL: function () {
        return p;
    },
    Lc: function () {
        return I;
    },
    Lw: function () {
        return S;
    },
    Ry: function () {
        return i;
    },
    X3: function () {
        return E;
    },
    YE: function () {
        return r;
    },
    al: function () {
        return T;
    },
    bJ: function () {
        return _;
    },
    e8: function () {
        return g;
    },
    tA: function () {
        return h;
    },
    uu: function () {
        return m;
    },
    zM: function () {
        return f;
    }
});
var r,
    i,
    a = n(610138);
var o = n(216116);
var s = n(78328);
var l = n(815648);
var u = n(47120);
var c = n(243814),
    d = n(981631);
let _ = 'xbox://communitylinking/donut/audio',
    E = 'https://www.xbox.com/en-US/apps/xbox-app-for-mobile',
    f = 'https://login.live.com',
    h = [c.x.VOICE, c.x.DM_CHANNELS_READ, c.x.GUILDS, c.x.GUILDS_MEMBERS_READ, c.x.IDENTIFY, c.x.CONNECTIONS, c.x.ACTIVITIES_READ],
    p = [c.x.VOICE, c.x.DM_CHANNELS_READ, c.x.GUILDS, c.x.GUILDS_MEMBERS_READ, c.x.IDENTIFY, c.x.CONNECTIONS],
    m = 'https://my.account.sony.com',
    I = (e) => {
        let { guildId: t, channelName: n, guildName: r, channelId: i, muted: a, deafened: o, nonce: s } = e,
            l = {
                channelid: i,
                guildid: t,
                channelname: n,
                guildname: r,
                muted: String(a),
                deafened: String(o)
            };
        return null != s && (l.nonce = s), new URLSearchParams(l);
    };
!(function (e) {
    (e.PLAYSTATION = 'playstation'), (e.XBOX = 'xbox');
})(r || (r = {}));
let T = new Set(['xbox', 'playstation']);
d.M7m.XBOX,
    d.M7m.PS5,
    !(function (e) {
        (e[(e.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 270000)] = 'CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED'), (e[(e.CONSOLE_DEVICE_UNAVAILABLE = 270001)] = 'CONSOLE_DEVICE_UNAVAILABLE'), (e[(e.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002)] = 'CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS'), (e[(e.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003)] = 'CONSOLE_DEVICE_COMMUNICATION_RESTRICTED'), (e[(e.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004)] = 'CONSOLE_DEVICE_INVALID_POWER_MODE'), (e[(e.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005)] = 'CONSOLE_DEVICE_ACCOUNT_LINK_ERROR'), (e[(e.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006)] = 'CONSOLE_DEVICE_MAX_MEMBERS_REACHED'), (e[(e.CONSOLE_DEVICE_BAD_COMMAND = 270007)] = 'CONSOLE_DEVICE_BAD_COMMAND');
    })(i || (i = {}));
let g = new Set([270000]),
    S = 'console error alert';
