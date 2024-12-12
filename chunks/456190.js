r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(51144),
    a = r(616922),
    s = r(388032);
function o(e, n, r) {
    switch (n) {
        case a.kG.USER_ACTIVITY_PLAY:
            if (e.isCurrentUser) return s.intl.string(s.t.ZpDeUF);
            if (e.playingSameTrack) return s.intl.string(s.t.TYSymZ);
            if (e.notPlayable) return s.intl.formatToPlainString(s.t.SqJBnJ, { name: a.ai });
            return;
        case a.kG.USER_ACTIVITY_SYNC:
            if (e.isCurrentUser) return s.intl.string(s.t['AOU/CQ']);
            if (e.syncingWithUser || e.syncingWithParty) return s.intl.string(s.t.m8CScn);
            if (e.notPlayable) return s.intl.formatToPlainString(s.t.SqJBnJ, { name: a.ai });
            return s.intl.formatToPlainString(s.t.CT9xYG, { name: null != r ? r : i.ZP.getName(e.user) });
        case a.kG.EMBED_SYNC:
            if (e.isCurrentUser) return s.intl.string(s.t['AOU/CQ']);
            if (e.syncingWithUser || e.syncingWithParty) return s.intl.string(s.t.m8CScn);
            if (e.notPlayable) return s.intl.formatToPlainString(s.t.SqJBnJ, { name: a.ai });
            return;
        default:
            return;
    }
}
