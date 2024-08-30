n(47120);
var i = n(392711),
    a = n.n(i),
    s = n(243814),
    r = n(447543),
    l = n(287734),
    o = n(703656),
    c = n(131704),
    d = n(592125),
    u = n(430824),
    _ = n(496675),
    h = n(944486),
    E = n(979651),
    m = n(934415),
    I = n(996106),
    g = n(914946),
    p = n(452426),
    T = n(561205),
    f = n(186901),
    S = n(981631);
t.Z = {
    [S.Etm.GET_CHANNEL]: {
        scope: {
            [f.Gp.ANY]: [s.x.RPC, s.x.GUILDS, s.x.GUILDS_CHANNELS_READ]
        },
        handler(e) {
            let {
                    args: { channel_id: t },
                    socket: n
                } = e,
                i = d.Z.getChannel(t);
            if (null == i) throw new I.Z({ errorCode: S.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
            if (i.isPrivate()) {
                let e = n.authorization.scopes;
                if (!e.includes(s.x.RPC) && !e.includes(s.x.DM_CHANNELS_READ)) throw new I.Z({ errorCode: S.lTL.INVALID_PERMISSIONS }, 'Invalid scope');
            }
            return (0, g.T5)(i, (0, g.zM)(i, n.application.id, n.authorization.scopes));
        }
    },
    [S.Etm.GET_CHANNELS]: {
        scope: s.x.RPC,
        handler(e) {
            let {
                    args: { guild_id: t }
                } = e,
                n = a().values(d.Z.loadAllGuildAndPrivateChannelsFromDisk());
            if (t) {
                let e = u.Z.getGuild(t);
                if (null == e) throw new I.Z({ errorCode: S.lTL.INVALID_GUILD }, 'Invalid guild id: '.concat(t));
                n = n.filter((t) => {
                    let { guild_id: n } = t;
                    return n === e.id;
                });
            }
            return {
                channels: n
                    .filter((e) => _.Z.can(S.Plq.VIEW_CHANNEL, e))
                    .map((e) => {
                        let { id: t, name: n, type: i } = e;
                        return {
                            id: t,
                            name: n,
                            type: i
                        };
                    })
            };
        }
    },
    [S.Etm.GET_CHANNEL_PERMISSIONS]: {
        scope: {
            [f.Gp.ANY]: [s.x.GUILDS_MEMBERS_READ, s.x.GUILDS_CHANNELS_READ]
        },
        handler(e) {
            let t = (0, T.Z)();
            if (null == t) throw new I.Z({ errorCode: S.lTL.INVALID_CHANNEL }, 'Invalid channel');
            return { permissions: _.Z.computePermissions(t) };
        }
    },
    [S.Etm.SELECT_VOICE_CHANNEL]: {
        scope: s.x.RPC,
        validation: (e) =>
            (0, p.Z)(e)
                .required()
                .keys({
                    channel_id: e.string().allow(null),
                    timeout: e.number().min(0).max(60),
                    force: e.boolean(),
                    navigate: e.boolean()
                }),
        handler(e) {
            let {
                server: t,
                socket: n,
                args: { channel_id: i, timeout: a = 0, force: s = !1, navigate: r = !1 }
            } = e;
            if (!i) return l.default.selectVoiceChannel(null), null;
            let p = h.Z.getVoiceChannelId();
            if (null != p && p !== i && !1 === s) throw new I.Z({ errorCode: S.lTL.SELECT_VOICE_FORCE_REQUIRED }, 'User is already joined to a voice channel.');
            return t
                .storeWait(n, () => d.Z.getChannel(i), a)
                .catch(() => {
                    throw new I.Z({ errorCode: S.lTL.SELECT_CHANNEL_TIMED_OUT }, 'Request to select voice channel timed out.');
                })
                .then((e) => {
                    if (null == e) throw new I.Z({ errorCode: S.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(i));
                    if (!(0, c.vd)(e.type)) throw new I.Z({ errorCode: S.lTL.INVALID_CHANNEL }, 'Channel is not a voice channel');
                    return Promise.all([Promise.resolve(e), (0, g.T5)(e, (0, g.zM)(e, n.application.id, n.authorization.scopes))]);
                })
                .then((e) => {
                    let [t, n] = e;
                    if (n.guild_id) {
                        if ((0, m.rY)(t, E.Z, u.Z)) throw new I.Z({ errorCode: S.lTL.INVALID_CHANNEL }, 'Channel is full');
                        if (!_.Z.can(S.Plq.CONNECT, t)) throw new I.Z({ errorCode: S.lTL.INVALID_PERMISSIONS }, 'Connect permission required to join channel');
                    }
                    return l.default.selectVoiceChannel(t.id), r && (0, o.dL)(S.Z5c.CHANNEL(t.guild_id, t.id)), n;
                });
        }
    },
    [S.Etm.GET_SELECTED_VOICE_CHANNEL]: {
        scope: {
            [f.Gp.ANY]: [s.x.RPC, s.x.RPC_VOICE_READ]
        },
        handler(e) {
            let { socket: t } = e,
                n = h.Z.getVoiceChannelId(),
                i = null != n ? d.Z.getChannel(n) : null;
            return null != i ? (0, g.T5)(i, (0, g.zM)(i, t.application.id, t.authorization.scopes)) : null;
        }
    },
    [S.Etm.SELECT_TEXT_CHANNEL]: {
        scope: s.x.RPC,
        validation: (e) =>
            (0, p.Z)(e)
                .required()
                .keys({
                    channel_id: e.string().allow(null),
                    timeout: e.number().min(0).max(60)
                }),
        handler(e) {
            let {
                server: t,
                socket: n,
                args: { channel_id: i, timeout: a = 0 }
            } = e;
            return i
                ? t
                      .storeWait(n, () => d.Z.getChannel(i), a)
                      .catch(() => {
                          throw new I.Z({ errorCode: S.lTL.SELECT_CHANNEL_TIMED_OUT }, 'Request to select text channel timed out.');
                      })
                      .then((e) => {
                          if (null == e) throw new I.Z({ errorCode: S.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(i));
                          if (!(0, c.Qm)(e.type)) throw new I.Z({ errorCode: S.lTL.INVALID_CHANNEL }, 'Channel is not a text channel');
                          return Promise.all([Promise.resolve(e), (0, g.T5)(e, (0, g.zM)(e, n.application.id, n.authorization.scopes))]);
                      })
                      .then((e) => {
                          let [t, n] = e;
                          if (n.guild_id && !_.Z.can(S.Plq.VIEW_CHANNEL, t)) throw new I.Z({ errorCode: S.lTL.INVALID_CHANNEL }, 'No permission to see channel');
                          return n.guild_id ? (0, o.dL)(S.Z5c.CHANNEL(n.guild_id, t.id)) : l.default.selectPrivateChannel(t.id), n;
                      })
                : ((0, o.uL)(S.Z5c.ME), null);
        }
    },
    [S.Etm.CREATE_CHANNEL_INVITE]: {
        scope: s.x.RPC,
        handler(e) {
            let {
                args: { channel_id: t, ...n }
            } = e;
            return r.Z.createInvite(t, n, 'RPC').catch(() => {
                throw new I.Z({ errorCode: S.lTL.INVALID_PERMISSIONS }, 'Unable to generate an invite for '.concat(t, '. Does this user have permissions?'));
            });
        }
    }
};
