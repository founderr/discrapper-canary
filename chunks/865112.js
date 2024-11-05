n.d(t, {
    RB: function () {
        return b;
    },
    VH: function () {
        return N;
    },
    Vi: function () {
        return A;
    },
    Vu: function () {
        return j;
    },
    q7: function () {
        return S;
    }
});
var i,
    r,
    l,
    a,
    o = n(692547),
    s = n(497089),
    c = n(650473),
    d = n(389765),
    u = n(137492),
    m = n(387661),
    h = n(659953),
    f = n(319707),
    p = n(584914),
    g = n(334702),
    _ = n(333722),
    C = n(549931),
    E = n(178561),
    I = n(39863),
    x = n(130312);
((i = l || (l = {})).CHECKED = 'CHECKED'), (i.FRIENDS = 'FRIENDS'), (i.SHARE_SCREEN = 'SHARE_SCREEN'), (i.NEW_MESSAGE = 'NEW_MESSAGE');
let v = {
    CHECKED: m,
    FRIENDS: f,
    SHARE_SCREEN: I,
    NEW_MESSAGE: C
};
((r = a || (a = {})).MISSED_MESSAGES = 'MISSED_MESSAGES'), (r.FRIEND_REQUEST_REMINDER = 'FRIEND_REQUEST_REMINDER'), (r.SCHEDULED_GUILD_EVENT = 'SCHEDULED_GUILD_EVENT'), (r.TOP_MESSAGES = 'TOP_MESSAGES'), (r.NOTIFICATION_CENTER = 'NOTIFICATION_CENTER'), (r.UPDATE_PROFILE = 'UPDATE_PROFILE'), (r.FIND_FRIENDS = 'FIND_FRIENDS'), (r.ADD_FRIEND = 'ADD_FRIEND'), (r.FIRST_MESSAGE = 'FIRST_MESSAGE');
let N = {
        MISSED_MESSAGES: _,
        FRIEND_REQUEST_REMINDER: p,
        SCHEDULED_GUILD_EVENT: h,
        TOP_MESSAGES: g,
        NOTIFICATION_CENTER: u,
        UPDATE_PROFILE: x,
        FIND_FRIENDS: d,
        ADD_FRIEND: d,
        FIRST_MESSAGE: E
    },
    T = (e) => {
        switch (e.item_enum) {
            case s.AM.ADD_FRIEND:
                return 'ADD_FRIEND';
            case s.AM.FIND_FRIENDS:
                return 'FIND_FRIENDS';
            case s.AM.FIRST_MESSAGE:
                return 'FIRST_MESSAGE';
            case s.AM.UPDATE_PROFILE:
                return 'UPDATE_PROFILE';
            default:
                return 'NOTIFICATION_CENTER';
        }
    },
    S = (e) => {
        switch (e.type) {
            case 'lifecycle_item':
                return T(e);
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
    b = (e) => {
        if ('icHighlight' === e) return 'TOP_MESSAGES';
        return 'NOTIFICATION_CENTER';
    },
    A = (e) => {
        switch (e) {
            case s.DY.GO_LIVE_PUSH:
                return {
                    icon: v.SHARE_SCREEN,
                    color: o.Z.colors.BACKGROUND_ACCENT
                };
            case s.DY.FRIEND_REQUEST_ACCEPTED:
                return {
                    icon: v.CHECKED,
                    color: o.Z.colors.STATUS_POSITIVE_BACKGROUND
                };
            case s.DY.FRIEND_REQUEST_PENDING:
            case s.DY.FRIEND_SUGGESTION_CREATED:
                return {
                    icon: v.FRIENDS,
                    color: o.Z.colors.BACKGROUND_ACCENT
                };
            case s.DY.DM_FRIEND_NUDGE:
                return {
                    icon: v.NEW_MESSAGE,
                    color: o.Z.colors.BACKGROUND_ACCENT
                };
            case s.O7.INCOMING_FRIEND_REQUESTS:
            case s.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
                return {
                    icon: v.FRIENDS,
                    color: o.Z.colors.BACKGROUND_ACCENT
                };
            default:
                return null;
        }
    },
    j = (e) => {
        switch (e.item_enum) {
            case s.AM.UPDATE_PROFILE:
                return c.Y9;
            case s.AM.ADD_FRIEND:
            case s.AM.FIND_FRIENDS:
                return c.AZ;
            case s.AM.FIRST_MESSAGE:
                return c.bj;
            default:
                return o.Z.unsafe_rawColors.BRAND_500.css;
        }
    };
