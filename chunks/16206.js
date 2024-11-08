t.d(n, {
    Z: function () {
        return i;
    }
});
var s = t(981631),
    r = t(388032);
function i(e) {
    if (null == e) return null;
    switch (e.type) {
        case s.d4z.GUILD_ANNOUNCEMENT:
            return r.intl.string(r.t.l1dkSE);
        case s.d4z.GUILD_STORE:
            return r.intl.string(r.t['P1/Erq']);
        case s.d4z.DM:
        case s.d4z.GROUP_DM:
            return r.intl.string(r.t.jN2DfX);
        case s.d4z.PRIVATE_THREAD:
            return r.intl.string(r.t.F1zyvb);
        case s.d4z.ANNOUNCEMENT_THREAD:
        case s.d4z.PUBLIC_THREAD:
            return r.intl.string(r.t['7Xm5QE']);
        case s.d4z.GUILD_TEXT:
            return r.intl.string(r.t.Pnajj4);
        case s.d4z.GUILD_FORUM:
            return e.isMediaChannel() ? r.intl.string(r.t.seKITE) : r.intl.string(r.t.GbryDQ);
        case s.d4z.GUILD_MEDIA:
            return r.intl.string(r.t.seKITE);
        case s.d4z.GUILD_STAGE_VOICE:
            return r.intl.string(r.t.EErMzM);
        case s.d4z.GUILD_VOICE:
            return r.intl.string(r.t.BVZqJi);
        case s.d4z.GUILD_CATEGORY:
        default:
            return null;
    }
}
