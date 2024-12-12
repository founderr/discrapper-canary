var i = r(47120);
var a = r(789020);
var s = r(147913),
    o = r(703656),
    l = r(271383),
    u = r(430824),
    c = r(914010),
    d = r(70956),
    f = r(630388),
    _ = r(745752),
    h = r(45966),
    p = r(17181),
    m = r(981631),
    g = r(176505),
    E = r(372897);
function v(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let I = null,
    T = null;
class b extends s.Z {
    constructor(...e) {
        super(...e),
            v(this, 'actions', {
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
                POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e)
            }),
            v(this, 'handleConnectionOpen', (e) => {
                var n;
                null != (I = null !== (n = null != I ? I : c.Z.getGuildId()) && void 0 !== n ? n : null) && this._openOnboardingIfIncomplete(I);
            }),
            v(this, 'handleChannelSelect', (e) => {
                let { guildId: n, channelId: r } = e;
                if (I === n && T === r) return;
                if (((I = null != n ? n : null), (T = null != r ? r : null), null == I || null == T)) return;
                let i = u.Z.getGuild(n);
                null != i && i.hasFeature(m.oNc.COMMUNITY) && h.Z.shouldFetchPrompts(I, 8 * d.Z.Millis.HOUR) && (0, _.rj)(I), this._openOnboardingIfIncomplete(I, r);
            }),
            v(this, 'handleGuildDelete', (e) => {
                let { guild: n } = e;
                (0, p.discardOnboardingPromise)(n.id);
            }),
            v(this, '_openOnboardingIfIncomplete', async (e, n) => {
                var r, i;
                if ((0, p.isOnboardingActiveForGuild)(e)) {
                    (0, o.uL)(m.Z5c.CHANNEL(e, g.oC.GUILD_ONBOARDING));
                    return;
                }
                let a = u.Z.getGuild(e);
                if (null == a || !a.hasFeature(m.oNc.GUILD_ONBOARDING)) return;
                let s = l.ZP.getSelfMember(e);
                if (!(null == s || (0, f.yE)(null !== (r = s.flags) && void 0 !== r ? r : 0, E.q.COMPLETED_ONBOARDING)) && !!(0, f.yE)(null !== (i = s.flags) && void 0 !== i ? i : 0, E.q.STARTED_ONBOARDING)) await (0, p.default)({ guildId: e }), (0, o.uL)(m.Z5c.CHANNEL(e, n));
            });
    }
}
n.Z = new b();
