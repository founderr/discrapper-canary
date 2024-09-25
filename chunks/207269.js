var r = n(47120);
var i = n(704215),
    a = n(570140),
    o = n(147913),
    s = n(605236),
    l = n(430824),
    u = n(496675),
    c = n(619574),
    d = n(317816),
    _ = n(828312),
    E = n(994840),
    f = n(981631);
function h(e, t, n) {
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
class p extends o.Z {
    constructor(...e) {
        super(...e),
            h(this, 'actions', {
                POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e)
            }),
            h(this, 'handleConnectionOpen', (e) => {
                let t = (0, E.jZ)('SignUpManager'),
                    n = (0, _.t)('SignUpManager', !1),
                    r = (0, s.un)(i.z.GAME_ONE_USER_SIGNUPS),
                    o = (0, d.v)('SignUpManager'),
                    l = (0, c.e)('SignUpManager', !1),
                    u = (0, s.un)(i.z.GENSHIN_USER_SIGNUPS);
                if (t && !n && !r) {
                    a.Z.dispatch({
                        type: 'ENABLE_USER_SIGN_UP',
                        key: 'valorant-user'
                    });
                    return;
                }
                if (o && !l && !u) {
                    a.Z.dispatch({
                        type: 'ENABLE_USER_SIGN_UP',
                        key: 'genshin-user'
                    });
                    return;
                }
            }),
            h(this, 'handleChannelSelect', (e) => {
                let { guildId: t } = e;
                if (null == t) return;
                let n = (0, s.un)(i.z.GAME_ONE_USER_SIGNUPS),
                    r = (0, s.un)(i.z.GENSHIN_USER_SIGNUPS);
                if (n && r) return;
                let o = (0, _.t)('SignUpManager'),
                    d = (0, c.e)('SignUpManager');
                if (!o && !d) return;
                let E = l.Z.getGuild(t);
                if (null != E) {
                    if (E.hasFeature(f.oNc.VALORANT_L30) && u.Z.can(f.Plq.MANAGE_GUILD, E) && !n) {
                        a.Z.dispatch({
                            type: 'ENABLE_GUILD_SIGN_UP',
                            key: 'valorant-admin',
                            guildId: t
                        });
                        return;
                    }
                    if (E.hasFeature(f.oNc.GENSHIN_L30) && u.Z.can(f.Plq.MANAGE_GUILD, E) && !r) {
                        a.Z.dispatch({
                            type: 'ENABLE_GUILD_SIGN_UP',
                            key: 'genshin-admin',
                            guildId: t
                        });
                        return;
                    }
                }
            });
    }
}
t.Z = new p();
