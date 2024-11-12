n(789020), n(47120);
var r = n(87051),
    i = n(147913),
    a = n(592125),
    s = n(430824),
    o = n(9156),
    l = n(70956),
    u = n(630388),
    c = n(621600),
    d = n(113449),
    f = n(981631),
    _ = n(526761);
let p = 1 * l.Z.Millis.DAY;
class h extends i.Z {
    checkGuilds() {
        o.ZP.useNewNotifications &&
            Object.values(s.Z.getGuilds()).forEach((e) => {
                if (null == e.joinedAt || Date.now() - e.joinedAt.getTime() > p || o.ZP.getMessageNotifications(e.id) === f.bL.ALL_MESSAGES) return;
                for (let t of Object.values(o.ZP.getChannelOverrides(e.id))) if ((null != t.message_notifications && t.message_notifications !== f.bL.NULL) || (null != t.flags && (0, u.EB)(t.flags, _.ic.UNREADS_ALL_MESSAGES | _.ic.UNREADS_ONLY_MENTIONS))) return;
                let t = Object.values(a.Z.getMutableBasicGuildChannelsForGuild(e.id)).filter((e) => e.type === f.d4z.GUILD_ANNOUNCEMENT);
                if (0 === t.length) return;
                let n = {};
                for (let r of t) n[r.id] = { flags: (0, d.pq)(o.ZP.getChannelIdFlags(e.id, r.id), _.ic.UNREADS_ALL_MESSAGES) };
                r.Z.updateChannelOverrideSettingsBulk(e.id, n, c.ZB.AnnouncementAutoEnable);
            });
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                GUILD_CREATE: () => this.checkGuilds(),
                POST_CONNECTION_OPEN: () => this.checkGuilds()
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.Z = new h();
