r.d(n, {
    Vk: function () {
        return a;
    },
    YK: function () {
        return d;
    },
    ap: function () {
        return f;
    },
    bv: function () {
        return o;
    },
    gl: function () {
        return l;
    },
    iP: function () {
        return c;
    },
    n0: function () {
        return s;
    },
    nc: function () {
        return i;
    },
    wF: function () {
        return _;
    }
});
var i,
    a,
    s,
    o,
    l,
    u = r(358085);
let c = u.isPlatformEmbedded && ((0, u.isWindows)() || !1);
function d(e) {
    switch (e) {
        case 'News Nudge':
        case 'Welcome Nudge':
        case 'Go Live Nudge':
        case 'Go Live Non Voice Nudge':
            return 0;
        case 'Text Chat':
            return 1;
        case 'Activity User Join':
        case 'Activity Invite':
            return 3;
        case 'Incoming Call':
            return 2;
        case 'Clips Reminder Notification':
        case 'Clips Notification':
            return 4;
        default:
            return 5;
    }
}
!(function (e) {
    (e[(e.WELCOME = 0)] = 'WELCOME'), (e[(e.NEWS = 1)] = 'NEWS'), (e[(e.GO_LIVE_VOICE = 2)] = 'GO_LIVE_VOICE'), (e[(e.GO_LIVE_NON_VOICE = 3)] = 'GO_LIVE_NON_VOICE'), (e[(e.KEYBIND_INDICATORS = 4)] = 'KEYBIND_INDICATORS'), (e[(e.CONTENT_INVENTORY = 5)] = 'CONTENT_INVENTORY');
})(i || (i = {})),
    !(function (e) {
        (e[(e.Nudge = 0)] = 'Nudge'), (e[(e.TextChat = 1)] = 'TextChat'), (e[(e.VoiceCall = 2)] = 'VoiceCall'), (e[(e.Activity = 3)] = 'Activity'), (e[(e.Clips = 4)] = 'Clips'), (e[(e.Other = 5)] = 'Other');
    })(a || (a = {})),
    !(function (e) {
        (e.NewsNudge = 'News Nudge'), (e.WelcomeNudge = 'Welcome Nudge'), (e.TextChat = 'Text Chat'), (e.ActivityUserJoin = 'Activity User Join'), (e.ActivityInvite = 'Activity Invite'), (e.IncomingCall = 'Incoming Call'), (e.GoLiveNudge = 'Go Live Nudge'), (e.GoLiveNonVoiceNudge = 'Go Live Non Voice Nudge'), (e.OverlayCrashed = 'Overlay Crashed'), (e.ClipsReminderNotification = 'Clips Reminder Notification'), (e.ClipsNotification = 'Clips Notification'), (e.KeybindIndicatorsNotification = 'Keybind Indicators Notification'), (e.SendGameInvitesNotification = 'Send Game Invites Notification');
    })(s || (s = {})),
    !(function (e) {
        (e[(e.Viewed = 0)] = 'Viewed'), (e[(e.Clicked = 1)] = 'Clicked');
    })(o || (o = {}));
let f = Object.freeze({
    LOW: 'background-opacity-low',
    MEDIUM: 'background-opacity-medium',
    HIGH: 'background-opacity-high',
    FULL: 'background-opacity-full',
    DISABLED: null
});
!(function (e) {
    (e[(e.Disabled = 0)] = 'Disabled'), (e[(e.Hook = 1)] = 'Hook'), (e[(e.OutOfProcess = 2)] = 'OutOfProcess');
})(l || (l = {}));
let _ = Object.freeze({
    BOTTOM: 0,
    LOWER: 0.25,
    UPPER: 0.75,
    TOP: 1
});
