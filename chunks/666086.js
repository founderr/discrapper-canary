var r = n(47120);
var i = n(392711);
var a = n(106351),
    o = n(904245),
    s = n(147913),
    l = n(367907),
    u = n(447003),
    c = n(592125),
    d = n(271383),
    _ = n(430824),
    E = n(375954),
    f = n(944486),
    h = n(626135),
    p = n(522558),
    m = n(581025),
    I = n(795448),
    T = n(441623),
    g = n(474936),
    S = n(981631);
function A(e, t, n) {
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
let v = 50,
    N = 1000;
class O extends s.Z {
    isChannelEligible(e, t, n) {
        switch (e.type) {
            case a.d.DM:
            case a.d.GROUP_DM:
                return !0;
            case a.d.GUILD_TEXT:
                return t.length <= v && (null == n ? void 0 : n.rulesChannelId) !== e.id && !e.isNSFW() && !(0, u.Z)(e) && null == e.linkedLobby;
            default:
                return !1;
        }
    }
    maybeSendGiftingPromptSystemMessageDebounced(e, t, n) {
        (0, i.debounce)(() => {
            let r = f.Z.getChannelId();
            !T.Z.isGiftIntentMessageInCooldown(n) && e === r && E.Z.isReady(e) && (o.Z.sendGiftingPromptSystemMessage(e, t, n), (0, I.PV)(n));
        }, N)();
    }
    handleChannelSelect(e, t) {
        let { enabled: n } = m.G.getCurrentConfig({ location: 'PremiumGiftingIntentManager handleChannelSelect' }, { autoTrackExposure: !1 }),
            { enabled: r } = p.w.getCurrentConfig({ location: 'PremiumGiftingIntentManager handleChannelSelect' }, { autoTrackExposure: !1 }),
            i = d.ZP.getMemberIds(e),
            a = _.Z.getGuild(e),
            o = c.Z.getChannel(t);
        if ((n || r) && null != o && this.isChannelEligible(o, i, a)) {
            let t = new Set(null != e ? i : o.recipients),
                a = T.Z.getFriendAnniversaries().filter((e) => t.has(e));
            if (r && a.length > 0) {
                let e = a[0];
                this.maybeSendGiftingPromptSystemMessageDebounced(o.id, g.hX.FRIEND_ANNIVERSARY, e);
            }
            n &&
                h.default.track(S.rMx.FRIEND_ANNIVERSARIES_CHANNEL_VIEWED, {
                    friend_anniversaries_count: a.length,
                    ...(0, l.v_)(o)
                });
        }
    }
    onChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        this.handleChannelSelect(t, n);
    }
    onPostConnectionOpen() {
        let e = f.Z.getChannelId();
        if (null != e) {
            let t = c.Z.getChannel(e);
            this.handleChannelSelect(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id);
        }
    }
    constructor(...e) {
        super(...e),
            A(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.onPostConnectionOpen(),
                CHANNEL_SELECT: (e) => this.onChannelSelect(e)
            });
    }
}
t.Z = new O();
