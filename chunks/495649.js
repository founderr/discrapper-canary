var r = n(47120);
var i = n(789020);
var a = n(147913),
    o = n(703656),
    s = n(271383),
    l = n(430824),
    u = n(914010),
    c = n(70956),
    d = n(630388),
    _ = n(745752),
    E = n(45966),
    f = n(17181),
    h = n(981631),
    p = n(176505),
    m = n(372897);
function I(e, t, n) {
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
let T = null,
    g = null;
class S extends a.Z {
    constructor(...e) {
        super(...e),
            I(this, 'actions', {
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
                POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e)
            }),
            I(this, 'handleConnectionOpen', (e) => {
                var t;
                null != (T = null !== (t = null != T ? T : u.Z.getGuildId()) && void 0 !== t ? t : null) && this._openOnboardingIfIncomplete(T);
            }),
            I(this, 'handleChannelSelect', (e) => {
                let { guildId: t, channelId: n } = e;
                if (T === t && g === n) return;
                if (((T = null != t ? t : null), (g = null != n ? n : null), null == T || null == g)) return;
                let r = l.Z.getGuild(t);
                null != r && r.hasFeature(h.oNc.COMMUNITY) && E.Z.shouldFetchPrompts(T, 8 * c.Z.Millis.HOUR) && (0, _.rj)(T), this._openOnboardingIfIncomplete(T, n);
            }),
            I(this, 'handleGuildDelete', (e) => {
                let { guild: t } = e;
                (0, f.discardOnboardingPromise)(t.id);
            }),
            I(this, '_openOnboardingIfIncomplete', async (e, t) => {
                var n, r;
                if ((0, f.isOnboardingActiveForGuild)(e)) {
                    (0, o.uL)(h.Z5c.CHANNEL(e, p.oC.GUILD_ONBOARDING));
                    return;
                }
                let i = l.Z.getGuild(e);
                if (null == i || !i.hasFeature(h.oNc.GUILD_ONBOARDING)) return;
                let a = s.ZP.getSelfMember(e);
                if (!(null == a || (0, d.yE)(null !== (n = a.flags) && void 0 !== n ? n : 0, m.q.COMPLETED_ONBOARDING)) && !!(0, d.yE)(null !== (r = a.flags) && void 0 !== r ? r : 0, m.q.STARTED_ONBOARDING)) await (0, f.default)({ guildId: e }), (0, o.uL)(h.Z5c.CHANNEL(e, t));
            });
    }
}
t.Z = new S();
