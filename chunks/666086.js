n(47120);
var r = n(106351),
    i = n(147913),
    a = n(367907),
    s = n(447003),
    o = n(592125),
    l = n(271383),
    u = n(430824),
    c = n(944486),
    d = n(626135),
    _ = n(522558),
    E = n(581025),
    f = n(441623),
    h = n(981631);
class p extends i.Z {
    isChannelEligible(e, t, n) {
        switch (e.type) {
            case r.d.DM:
            case r.d.GROUP_DM:
                return !0;
            case r.d.GUILD_TEXT:
                return t.length <= 50 && (null == n ? void 0 : n.rulesChannelId) !== e.id && !e.isNSFW() && !(0, s.Z)(e) && null == e.linkedLobby;
            default:
                return !1;
        }
    }
    handleChannelSelect(e, t) {
        let { enabled: n } = E.G.getCurrentConfig({ location: 'PremiumGiftingIntentManager handleChannelSelect' }, { autoTrackExposure: !1 }),
            { enabled: r } = _.w.getCurrentConfig({ location: 'PremiumGiftingIntentManager handleChannelSelect' }, { autoTrackExposure: !1 }),
            i = l.ZP.getMemberIds(e),
            s = u.Z.getGuild(e),
            c = o.Z.getChannel(t);
        if ((n || r) && null != c && this.isChannelEligible(c, i, s)) {
            let t = new Set(null != e ? i : c.recipients),
                r = f.Z.getFriendAnniversaries().filter((e) => t.has(e));
            n &&
                d.default.track(h.rMx.FRIEND_ANNIVERSARIES_CHANNEL_VIEWED, {
                    friend_anniversaries_count: r.length,
                    ...(0, a.v_)(c)
                });
        }
    }
    onChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        this.handleChannelSelect(t, n);
    }
    onPostConnectionOpen() {
        let e = c.Z.getChannelId();
        if (null != e) {
            let t = o.Z.getChannel(e);
            this.handleChannelSelect(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id);
        }
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
                CHANNEL_SELECT: (e) => this.onChannelSelect(e)
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
t.Z = new p();
