n.d(t, {
    Lb: function () {
        return s;
    },
    Rr: function () {
        return i;
    },
    jp: function () {
        return o;
    },
    v$: function () {
        return c;
    },
    xy: function () {
        return a;
    },
    zd: function () {
        return d;
    }
}),
    n(47120);
var i,
    r,
    l = n(981631);
let a = 15,
    s = 3,
    o = 50;
function c(e) {
    switch (e.type) {
        case 0:
            if (e.data.channel_type === l.d4z.GUILD_ANNOUNCEMENT) return 'announcement';
            return 'message';
        case 1:
            return 'summary';
        case 2:
            return 'hotwheels_gaming_activity';
        case 3:
            return 'hotwheels_custom_status';
        case 4:
            return 'guild_event';
        case 5:
            return 'recommended_guilds';
    }
}
((r = i || (i = {}))[(r.MESSAGE = 0)] = 'MESSAGE'), (r[(r.SUMMARY = 1)] = 'SUMMARY'), (r[(r.ACTIVITY = 2)] = 'ACTIVITY'), (r[(r.CUSTOM_STATUS = 3)] = 'CUSTOM_STATUS'), (r[(r.GUILD_EVENT = 4)] = 'GUILD_EVENT'), (r[(r.RECOMMENDED_GUILDS = 5)] = 'RECOMMENDED_GUILDS');
let d = new Set([0, 1, 3]);
l.hBH.IMAGE, l.hBH.GIFV;
