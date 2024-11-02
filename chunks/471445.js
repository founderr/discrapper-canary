n.d(t, {
    KS: function () {
        return h;
    },
    Th: function () {
        return p;
    },
    bT: function () {
        return _;
    }
});
var r = n(481060),
    i = n(281956),
    a = n(271383),
    s = n(430824),
    o = n(607744),
    l = n(594174),
    u = n(447003),
    c = n(176505),
    d = n(981631),
    f = n(388032);
function _(e, t, n, r) {
    if (null == e) return null;
    if (e.id === (null == t ? void 0 : t.rulesChannelId)) return f.intl.string(f.t['/7EhaW']);
    switch (e.type) {
        case d.d4z.GUILD_TEXT:
            if (r) return f.intl.string(f.t.LKpYbm);
            if (e.isNSFW()) return f.intl.string(f.t.vvASTU);
            if ((0, u.Z)(e)) return f.intl.string(f.t.jQ1plp);
            if (null != e.linkedLobby) return f.intl.string(f.t.Lt3PAA);
            return f.intl.string(f.t.t1yj0N);
        case d.d4z.GUILD_FORUM:
            let i = e.isMediaChannel();
            if (e.isNSFW()) return i ? f.intl.string(f.t['pZ/fYW']) : f.intl.string(f.t.ibmpPj);
            if ((0, u.Z)(e)) return i ? f.intl.string(f.t.gfVCfH) : f.intl.string(f.t.UbLM3N);
            return i ? f.intl.string(f.t.seKITE) : f.intl.string(f.t['0sDXdn']);
        case d.d4z.GUILD_MEDIA:
            if (e.isNSFW()) return f.intl.string(f.t['pZ/fYW']);
            if ((0, u.Z)(e)) return f.intl.string(f.t.gfVCfH);
            return f.intl.string(f.t.seKITE);
        case d.d4z.GUILD_STAGE_VOICE:
            if (n) return f.intl.string(f.t.ZjZB3t);
            if ((0, u.Z)(e)) return f.intl.string(f.t['7pRuCQ']);
            return f.intl.string(f.t.eJFSiI);
        case d.d4z.GUILD_VOICE:
            if (n) return f.intl.string(f.t.xY8Wtr);
            if ((0, u.Z)(e)) return f.intl.string(f.t.qaY8Dg);
            return f.intl.string(f.t['0kBmo6']);
        case d.d4z.GUILD_ANNOUNCEMENT:
            if (e.isNSFW()) return f.intl.string(f.t.eRc6o6);
            if ((0, u.Z)(e)) return f.intl.string(f.t.EHLQws);
            return f.intl.string(f.t.GtDRi4);
        case d.d4z.GUILD_STORE:
            return f.intl.string(f.t.Ea4NDA);
        case d.d4z.DM:
            return f.intl.string(f.t.jN2DfX);
        case d.d4z.GROUP_DM:
            return f.intl.string(f.t['e5y+go']);
        case d.d4z.GUILD_DIRECTORY:
            return f.intl.string(f.t.IzZTIS);
        case d.d4z.PUBLIC_THREAD:
            return f.intl.string(f.t['7Xm5QE']);
        case d.d4z.PRIVATE_THREAD:
            return f.intl.string(f.t.F1zyvb);
        default:
            return null;
    }
}
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: f = !1, video: _ = !1, stream: h = !1, hasActiveThreads: p = !1, textFocused: m = !1 } = n;
    if (null == e) return null;
    null == t && (t = s.Z.getGuild(e.getGuildId()));
    let g = (0, i.n)(null == t ? void 0 : t.id, [s.Z, o.Z, l.default, a.ZP]);
    if ((null == e ? void 0 : e.id) === (null == t ? void 0 : t.rulesChannelId)) return r.BookCheckIcon;
    switch (e.type) {
        case d.d4z.GUILD_ANNOUNCEMENT:
            if (p) {
                if (e.isNSFW()) return r.AnnouncementsWarningIcon;
                if ((0, u.Z)(e)) return r.AnnouncementsLockIcon;
                else return r.AnnouncementsIcon;
            }
            if (e.isNSFW()) return r.AnnouncementsWarningIcon;
            if ((0, u.Z)(e)) return r.AnnouncementsLockIcon;
            return r.AnnouncementsIcon;
        case d.d4z.GUILD_STORE:
            return r.TagIcon;
        case d.d4z.DM:
        case d.d4z.GROUP_DM:
            return r.AtIcon;
        case d.d4z.PRIVATE_THREAD:
            return r.ThreadLockIcon;
        case d.d4z.ANNOUNCEMENT_THREAD:
        case d.d4z.PUBLIC_THREAD:
            if (e.isNSFW()) return r.ThreadWarningIcon;
            if (e.isForumPost()) return r.ChatIcon;
            else return r.ThreadIcon;
        case d.d4z.GUILD_TEXT:
            if (p) {
                if (e.isNSFW()) return r.TextWarningIcon;
                if ((0, u.Z)(e)) return r.TextLockIcon;
                else return r.TextIcon;
            }
            if (e.isNSFW()) return r.TextWarningIcon;
            if ((0, u.Z)(e)) return r.TextLockIcon;
            if (null != e.linkedLobby) return r.RefreshIcon;
            return r.TextIcon;
        case d.d4z.GUILD_FORUM:
            let E = e.isMediaChannel();
            if (e.isNSFW()) return E ? r.ImageWarningIcon : r.ForumWarningIcon;
            if ((0, u.Z)(e)) return E ? r.ImageLockIcon : r.ForumLockIcon;
            else return E ? r.ImageIcon : r.ForumIcon;
        case d.d4z.GUILD_MEDIA:
            if (e.isNSFW()) return r.ImageWarningIcon;
            if ((0, u.Z)(e)) return r.ImageLockIcon;
            else return r.ImageIcon;
        case d.d4z.GUILD_STAGE_VOICE:
            if (g) return (0, u.Z)(e) ? r.LockIcon : r.StageLockIcon;
            if (f) return r.LockIcon;
            if ((0, u.Z)(e)) return r.StageLockIcon;
            else return r.StageIcon;
        case d.d4z.GUILD_VOICE:
            if (m) return r.ChatIcon;
            if (e.isNSFW()) return r.VoiceWarningIcon;
            if (h) return r.ScreenArrowIcon;
            if (g) {
                if ((0, u.Z)(e)) return r.LockIcon;
                return _ ? r.VideoLockIcon : r.VoiceLockIcon;
            }
            if (f) return r.LockIcon;
            if ((0, u.Z)(e)) return _ ? r.VideoLockIcon : r.VoiceLockIcon;
            else return _ ? r.VideoIcon : r.VoiceNormalIcon;
        case d.d4z.GUILD_DIRECTORY:
            return r.HubIcon;
        case d.d4z.GUILD_CATEGORY:
            return r.FolderIcon;
        default:
            if (c.EC.has(e.id)) {
                if (e.id === c.HY.GUILD_HOME || e.id === c.HY.SERVER_GUIDE) return r.SignPostIcon;
                if (e.id === c.HY.CHANNEL_BROWSER || e.id === c.HY.CUSTOMIZE_COMMUNITY) return r.ChannelListMagnifyingGlassIcon;
            }
            return null;
    }
}
function p(e) {
    switch (e) {
        case d.d4z.GUILD_ANNOUNCEMENT:
            return r.AnnouncementsIcon;
        case d.d4z.GUILD_STORE:
            return r.TagIcon;
        case d.d4z.DM:
        case d.d4z.GROUP_DM:
            return r.AtIcon;
        case d.d4z.PRIVATE_THREAD:
            return r.ThreadLockIcon;
        case d.d4z.ANNOUNCEMENT_THREAD:
        case d.d4z.PUBLIC_THREAD:
            return r.ThreadIcon;
        case d.d4z.GUILD_TEXT:
        case d.d4z.GUILD_FORUM:
        case d.d4z.GUILD_MEDIA:
            return r.TextIcon;
        case d.d4z.GUILD_STAGE_VOICE:
            return r.StageIcon;
        case d.d4z.GUILD_VOICE:
            return r.VoiceNormalIcon;
        case d.d4z.GUILD_CATEGORY:
            return r.FolderIcon;
        default:
            return null;
    }
}
