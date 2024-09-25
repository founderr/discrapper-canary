var r, i, a, o;
n.d(t, {
    $l: function () {
        return a;
    },
    C2: function () {
        return o;
    },
    J$: function () {
        return s;
    },
    wR: function () {
        return i;
    },
    x2: function () {
        return r;
    }
}),
    n(689938),
    !(function (e) {
        (e.BUG = 'BUG'), (e.ALLOWED = 'ALLOWED'), (e.MENTION_RAID_REMOVE_RESTRICTION = 'MENTION_RAID_REMOVE_RESTRICTION');
    })(r || (r = {}));
function s(e) {
    return e.includes('LEGITIMATE_ACTIVITY') ? 'LEGITIMATE_ACTIVITY' : e.includes('DM_SPAM') ? 'DM_SPAM' : e.includes('JOIN_RAID') ? 'JOIN_RAID' : 'OTHER';
}
!(function (e) {
    (e.JOIN_RAID = 'JOIN_RAID'), (e.MENTION_RAID = 'MENTION_RAID');
})(i || (i = {})),
    !(function (e) {
        (e.LEGITIMATE_ACTIVITY = 'LEGITIMATE_ACTIVITY'), (e.LEGITIMATE_ACCOUNTS = 'LEGITIMATE_ACCOUNTS'), (e.LEGITIMATE_DMS = 'LEGITIMATE_DMS'), (e.DM_SPAM = 'DM_SPAM'), (e.JOIN_RAID = 'JOIN_RAID'), (e.OTHER = 'OTHER');
    })(a || (a = {})),
    !(function (e) {
        (e.DM_SPAM = 'DM_SPAM'), (e.MENTION_SPAM = 'MENTION_SPAM'), (e.CHANNEL_SPAM = 'CHANNEL_SPAM'), (e.SUS_NEW_MEMBERS = 'SUS_NEW_MEMBERS'), (e.CHANGING_SETTINGS = 'CHANGING_SETTINGS'), (e.OTHER = 'OTHER');
    })(o || (o = {}));
