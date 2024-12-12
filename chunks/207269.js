var i = r(47120);
var a = r(704215),
    s = r(570140),
    o = r(147913),
    l = r(605236),
    u = r(430824),
    c = r(496675),
    d = r(619574),
    f = r(876612),
    _ = r(828312),
    h = r(994840),
    p = r(981631);
function m(e, n, r) {
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
class g extends o.Z {
    constructor(...e) {
        super(...e),
            m(this, 'actions', {
                POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e)
            }),
            m(this, 'handleConnectionOpen', (e) => {
                let n = (0, h.jZ)('SignUpManager'),
                    r = (0, _.t)('SignUpManager', !1),
                    i = (0, l.un)(a.z.GAME_ONE_USER_SIGNUPS),
                    o = (0, f.v)('SignUpManager'),
                    u = (0, d.e)('SignUpManager', !1),
                    c = (0, l.un)(a.z.GENSHIN_USER_SIGNUPS);
                if (n && !r && !i) {
                    s.Z.dispatch({
                        type: 'ENABLE_USER_SIGN_UP',
                        key: 'valorant-user'
                    });
                    return;
                }
                if (o && !u && !c) {
                    s.Z.dispatch({
                        type: 'ENABLE_USER_SIGN_UP',
                        key: 'genshin-user'
                    });
                    return;
                }
            }),
            m(this, 'handleChannelSelect', (e) => {
                let { guildId: n } = e;
                if (null == n) return;
                let r = (0, l.un)(a.z.GAME_ONE_USER_SIGNUPS),
                    i = (0, l.un)(a.z.GENSHIN_USER_SIGNUPS);
                if (r && i) return;
                let o = (0, _.t)('SignUpManager'),
                    f = (0, d.e)('SignUpManager');
                if (!o && !f) return;
                let h = u.Z.getGuild(n);
                if (null != h) {
                    if (h.hasFeature(p.oNc.VALORANT_L30) && c.Z.can(p.Plq.MANAGE_GUILD, h) && !r) {
                        s.Z.dispatch({
                            type: 'ENABLE_GUILD_SIGN_UP',
                            key: 'valorant-admin',
                            guildId: n
                        });
                        return;
                    }
                    if (h.hasFeature(p.oNc.GENSHIN_L30) && c.Z.can(p.Plq.MANAGE_GUILD, h) && !i) {
                        s.Z.dispatch({
                            type: 'ENABLE_GUILD_SIGN_UP',
                            key: 'genshin-admin',
                            guildId: n
                        });
                        return;
                    }
                }
            });
    }
}
n.Z = new g();
