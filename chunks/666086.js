var r = n(47120);
var i = n(106351),
    a = n(147913),
    o = n(367907),
    s = n(447003),
    l = n(592125),
    u = n(271383),
    c = n(430824),
    d = n(944486),
    _ = n(626135),
    E = n(522558),
    f = n(581025),
    h = n(441623),
    p = n(981631);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let I = 50;
class T extends a.Z {
    isChannelEligible(e, t, n) {
        switch (e.type) {
            case i.d.DM:
            case i.d.GROUP_DM:
                return !0;
            case i.d.GUILD_TEXT:
                return t.length <= I && (null == n ? void 0 : n.rulesChannelId) !== e.id && !e.isNSFW() && !(0, s.Z)(e) && null == e.linkedLobby;
            default:
                return !1;
        }
    }
    handleChannelSelect(e, t) {
        let { enabled: n } = f.G.getCurrentConfig({ location: 'PremiumGiftingIntentManager handleChannelSelect' }, { autoTrackExposure: !1 }),
            { enabled: r } = E.w.getCurrentConfig({ location: 'PremiumGiftingIntentManager handleChannelSelect' }, { autoTrackExposure: !1 }),
            i = u.ZP.getMemberIds(e),
            a = c.Z.getGuild(e),
            s = l.Z.getChannel(t);
        if ((n || r) && null != s && this.isChannelEligible(s, i, a)) {
            let t = new Set(null != e ? i : s.recipients),
                r = h.Z.getFriendAnniversaries().filter((e) => t.has(e));
            n &&
                _.default.track(p.rMx.FRIEND_ANNIVERSARIES_CHANNEL_VIEWED, {
                    friend_anniversaries_count: r.length,
                    ...(0, o.v_)(s)
                });
        }
    }
    onChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        this.handleChannelSelect(t, n);
    }
    onPostConnectionOpen() {
        let e = d.Z.getChannelId();
        if (null != e) {
            let t = l.Z.getChannel(e);
            this.handleChannelSelect(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id);
        }
    }
    constructor(...e) {
        super(...e),
            m(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
                CHANNEL_SELECT: (e) => this.onChannelSelect(e)
            });
    }
}
t.Z = new T();
