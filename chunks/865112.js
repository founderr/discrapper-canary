n.d(t, {
    RB: function () {
        return N;
    },
    VH: function () {
        return S;
    },
    Vi: function () {
        return O;
    },
    Vu: function () {
        return R;
    },
    q7: function () {
        return v;
    }
});
var r,
    i,
    a = n(692547),
    o = n(497089),
    s = n(650473),
    l = n(389765),
    u = n(137492),
    c = n(387661),
    d = n(659953),
    _ = n(319707),
    E = n(584914),
    f = n(334702),
    h = n(333722),
    p = n(549931),
    m = n(178561),
    I = n(39863),
    T = n(130312);
!(function (e) {
    (e.CHECKED = 'CHECKED'), (e.FRIENDS = 'FRIENDS'), (e.SHARE_SCREEN = 'SHARE_SCREEN'), (e.NEW_MESSAGE = 'NEW_MESSAGE');
})(r || (r = {}));
let g = {
    CHECKED: c,
    FRIENDS: _,
    SHARE_SCREEN: I,
    NEW_MESSAGE: p
};
!(function (e) {
    (e.MISSED_MESSAGES = 'MISSED_MESSAGES'), (e.FRIEND_REQUEST_REMINDER = 'FRIEND_REQUEST_REMINDER'), (e.SCHEDULED_GUILD_EVENT = 'SCHEDULED_GUILD_EVENT'), (e.TOP_MESSAGES = 'TOP_MESSAGES'), (e.NOTIFICATION_CENTER = 'NOTIFICATION_CENTER'), (e.UPDATE_PROFILE = 'UPDATE_PROFILE'), (e.FIND_FRIENDS = 'FIND_FRIENDS'), (e.ADD_FRIEND = 'ADD_FRIEND'), (e.FIRST_MESSAGE = 'FIRST_MESSAGE');
})(i || (i = {}));
let S = {
        MISSED_MESSAGES: h,
        FRIEND_REQUEST_REMINDER: E,
        SCHEDULED_GUILD_EVENT: d,
        TOP_MESSAGES: f,
        NOTIFICATION_CENTER: u,
        UPDATE_PROFILE: T,
        FIND_FRIENDS: l,
        ADD_FRIEND: l,
        FIRST_MESSAGE: m
    },
    A = (e) => {
        switch (e.item_enum) {
            case o.AM.ADD_FRIEND:
                return 'ADD_FRIEND';
            case o.AM.FIND_FRIENDS:
                return 'FIND_FRIENDS';
            case o.AM.FIRST_MESSAGE:
                return 'FIRST_MESSAGE';
            case o.AM.UPDATE_PROFILE:
                return 'UPDATE_PROFILE';
            default:
                return 'NOTIFICATION_CENTER';
        }
    },
    v = (e) => {
        switch (e.type) {
            case 'lifecycle_item':
                return A(e);
            case 'missed_messages':
                return 'MISSED_MESSAGES';
            case 'friend_request_reminder':
                return 'FRIEND_REQUEST_REMINDER';
            case 'scheduled_guild_event_started':
                return 'SCHEDULED_GUILD_EVENT';
            case 'top_messages':
                return 'TOP_MESSAGES';
            default:
                return 'NOTIFICATION_CENTER';
        }
    },
    N = (e) => {
        if ('icHighlight' === e) return 'TOP_MESSAGES';
        return 'NOTIFICATION_CENTER';
    },
    O = (e) => {
        switch (e) {
            case o.DY.GO_LIVE_PUSH:
                return {
                    icon: g.SHARE_SCREEN,
                    color: a.Z.colors.BACKGROUND_ACCENT
                };
            case o.DY.FRIEND_REQUEST_ACCEPTED:
                return {
                    icon: g.CHECKED,
                    color: a.Z.colors.STATUS_POSITIVE_BACKGROUND
                };
            case o.DY.FRIEND_REQUEST_PENDING:
            case o.DY.FRIEND_SUGGESTION_CREATED:
                return {
                    icon: g.FRIENDS,
                    color: a.Z.colors.BACKGROUND_ACCENT
                };
            case o.DY.DM_FRIEND_NUDGE:
                return {
                    icon: g.NEW_MESSAGE,
                    color: a.Z.colors.BACKGROUND_ACCENT
                };
            case o.O7.INCOMING_FRIEND_REQUESTS:
            case o.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
                return {
                    icon: g.FRIENDS,
                    color: a.Z.colors.BACKGROUND_ACCENT
                };
            default:
                return null;
        }
    },
    R = (e) => {
        switch (e.item_enum) {
            case o.AM.UPDATE_PROFILE:
                return s.Y9;
            case o.AM.ADD_FRIEND:
            case o.AM.FIND_FRIENDS:
                return s.AZ;
            case o.AM.FIRST_MESSAGE:
                return s.bj;
            default:
                return a.Z.unsafe_rawColors.BRAND_500.css;
        }
    };
