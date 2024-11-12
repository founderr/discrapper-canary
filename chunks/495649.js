n(47120), n(789020);
var r = n(147913),
    i = n(703656),
    a = n(271383),
    s = n(430824),
    o = n(914010),
    l = n(70956),
    u = n(630388),
    c = n(745752),
    d = n(45966),
    f = n(17181),
    _ = n(981631),
    p = n(176505),
    h = n(372897);
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
let g = null,
    E = null;
class v extends r.Z {
    constructor(...e) {
        super(...e),
            m(this, 'actions', {
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
                POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e)
            }),
            m(this, 'handleConnectionOpen', (e) => {
                var t;
                null != (g = null !== (t = null != g ? g : o.Z.getGuildId()) && void 0 !== t ? t : null) && this._openOnboardingIfIncomplete(g);
            }),
            m(this, 'handleChannelSelect', (e) => {
                let { guildId: t, channelId: n } = e;
                if (g === t && E === n) return;
                if (((g = null != t ? t : null), (E = null != n ? n : null), null == g || null == E)) return;
                let r = s.Z.getGuild(t);
                null != r && r.hasFeature(_.oNc.COMMUNITY) && d.Z.shouldFetchPrompts(g, 8 * l.Z.Millis.HOUR) && (0, c.rj)(g), this._openOnboardingIfIncomplete(g, n);
            }),
            m(this, 'handleGuildDelete', (e) => {
                let { guild: t } = e;
                (0, f.discardOnboardingPromise)(t.id);
            }),
            m(this, '_openOnboardingIfIncomplete', async (e, t) => {
                var n, r;
                if ((0, f.isOnboardingActiveForGuild)(e)) {
                    (0, i.uL)(_.Z5c.CHANNEL(e, p.oC.GUILD_ONBOARDING));
                    return;
                }
                let o = s.Z.getGuild(e);
                if (null == o || !o.hasFeature(_.oNc.GUILD_ONBOARDING)) return;
                let l = a.ZP.getSelfMember(e);
                if (!(null == l || (0, u.yE)(null !== (n = l.flags) && void 0 !== n ? n : 0, h.q.COMPLETED_ONBOARDING)) && !!(0, u.yE)(null !== (r = l.flags) && void 0 !== r ? r : 0, h.q.STARTED_ONBOARDING)) await (0, f.default)({ guildId: e }), (0, i.uL)(_.Z5c.CHANNEL(e, t));
            });
    }
}
t.Z = new v();
