r.d(n, {
    KL: function () {
        return g;
    },
    Lc: function () {
        return v;
    },
    Lw: function () {
        return b;
    },
    Ry: function () {
        return a;
    },
    X3: function () {
        return h;
    },
    YE: function () {
        return i;
    },
    al: function () {
        return I;
    },
    bJ: function () {
        return _;
    },
    e8: function () {
        return T;
    },
    tA: function () {
        return m;
    },
    uu: function () {
        return E;
    },
    zM: function () {
        return p;
    }
});
var i,
    a,
    s = r(610138);
var o = r(216116);
var l = r(78328);
var u = r(815648);
var c = r(47120);
var d = r(243814),
    f = r(981631);
let _ = 'xbox://communitylinking/donut/audio',
    h = 'https://www.xbox.com/en-US/apps/xbox-app-for-mobile',
    p = 'https://login.live.com',
    m = [d.x.VOICE, d.x.DM_CHANNELS_READ, d.x.GUILDS, d.x.GUILDS_MEMBERS_READ, d.x.IDENTIFY, d.x.CONNECTIONS, d.x.ACTIVITIES_READ],
    g = [d.x.VOICE, d.x.DM_CHANNELS_READ, d.x.GUILDS, d.x.GUILDS_MEMBERS_READ, d.x.IDENTIFY, d.x.CONNECTIONS],
    E = 'https://my.account.sony.com',
    v = (e) => {
        let { guildId: n, channelName: r, guildName: i, channelId: a, muted: s, deafened: o, nonce: l } = e,
            u = {
                channelid: a,
                guildid: n,
                channelname: r,
                guildname: i,
                muted: String(s),
                deafened: String(o)
            };
        return null != l && (u.nonce = l), new URLSearchParams(u);
    };
!(function (e) {
    (e.PLAYSTATION = 'playstation'), (e.XBOX = 'xbox');
})(i || (i = {}));
let I = new Set(['xbox', 'playstation']);
f.M7m.XBOX,
    f.M7m.PS5,
    !(function (e) {
        (e[(e.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 270000)] = 'CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED'), (e[(e.CONSOLE_DEVICE_UNAVAILABLE = 270001)] = 'CONSOLE_DEVICE_UNAVAILABLE'), (e[(e.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002)] = 'CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS'), (e[(e.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003)] = 'CONSOLE_DEVICE_COMMUNICATION_RESTRICTED'), (e[(e.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004)] = 'CONSOLE_DEVICE_INVALID_POWER_MODE'), (e[(e.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005)] = 'CONSOLE_DEVICE_ACCOUNT_LINK_ERROR'), (e[(e.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006)] = 'CONSOLE_DEVICE_MAX_MEMBERS_REACHED'), (e[(e.CONSOLE_DEVICE_BAD_COMMAND = 270007)] = 'CONSOLE_DEVICE_BAD_COMMAND');
    })(a || (a = {}));
let T = new Set([270000]),
    b = 'console error alert';
