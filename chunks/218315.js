n(47120), n(789020);
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(147913),
    s = n(160404),
    o = n(314897),
    l = n(592125),
    u = n(271383),
    c = n(914010),
    d = n(630388),
    f = n(526120),
    _ = n(563534),
    p = n(734893),
    h = n(846121),
    m = n(931261),
    g = n(460347),
    E = n(372897);
function v(e, t, n) {
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
class b extends a.Z {
    constructor(...e) {
        super(...e),
            v(this, 'onboardingCompleteGuilds', new Set()),
            v(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
                GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e),
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
                MESSAGE_CREATE: (e) => this.handleMessageSend(e),
                THREAD_CREATE: (e) => this.handleThreadCreate(e)
            }),
            v(this, 'handlePostConnectionOpen', () => {
                let e = c.Z.getGuildId();
                null != e && this._getOrLoadOnboardingMemberActions(e);
            }),
            v(this, 'handleGuildMemberUpdate', (e) => {
                let { flags: t, user: a, guildId: s } = e;
                if (a.id === o.default.getId()) {
                    if (!this.onboardingCompleteGuilds.has(s) && (0, d.yE)(null != t ? t : 0, E.q.COMPLETED_HOME_ACTIONS)) {
                        var l, u;
                        this.onboardingCompleteGuilds.add(s);
                        let e = null !== (u = null === (l = _.Z.getNewMemberActions(s)) || void 0 === l ? void 0 : l.length) && void 0 !== u ? u : 0;
                        if (0 === e) return;
                        (0, i.openModalLazy)(async () => {
                            let { default: t } = await n.e('92339').then(n.bind(n, 184100));
                            return (n) =>
                                (0, r.jsx)(t, {
                                    ...n,
                                    initialPercent: (e - 1) / e,
                                    numActions: e
                                });
                        });
                    }
                }
            }),
            v(this, 'handleGuildDelete', (e) => {
                let { guild: t } = e;
                this.onboardingCompleteGuilds.delete(t.id);
            }),
            v(this, 'handleChannelSelect', async (e) => {
                let { guildId: t, channelId: n } = e;
                if (null == t || null == n) return;
                let { memberActions: r, completedActions: i } = await this._getOrLoadOnboardingMemberActions(t),
                    a = null == r ? void 0 : r.find((e) => e.channelId === n);
                (null == i ? void 0 : i[n]) !== !0 && null != a && a.actionType === p.oi.VIEW && (0, f.Oh)(t, n);
            }),
            v(this, 'handleMessageSend', (e) => {
                var t;
                let { guildId: n, channelId: r, message: i } = e;
                if (null == n || null == r || (null === (t = i.author) || void 0 === t ? void 0 : t.id) !== o.default.getId()) return;
                let a = l.Z.getChannel(r);
                (null == a ? void 0 : a.isForumPost()) && (null == a ? void 0 : a.parent_id) != null && this._completeChatAction(n, a.parent_id), this._completeChatAction(n, r);
            }),
            v(this, 'handleThreadCreate', (e) => {
                var t;
                let { channel: n, isNewlyCreated: r } = e;
                if (!!r && null != n.parent_id && !!(null === (t = l.Z.getChannel(n.parent_id)) || void 0 === t ? void 0 : t.isForumLikeChannel())) n.ownerId === o.default.getId() && this._completeChatAction(n.guild_id, n.parent_id);
            }),
            v(this, '_completeChatAction', async (e, t) => {
                let { memberActions: n, completedActions: r } = await this._getOrLoadOnboardingMemberActions(e),
                    i = null == n ? void 0 : n.find((e) => e.channelId === t);
                (null == r ? void 0 : r[t]) !== !0 && null != i && i.actionType === p.oi.CHAT && (0, f.Oh)(e, t);
            }),
            v(this, '_getOrLoadOnboardingMemberActions', async (e) => {
                var t, n;
                let r = (0, m.s)(e),
                    i = s.Z.isFullServerPreview(e);
                if (!r && !i) return {};
                let a = u.ZP.getSelfMember(e);
                if (null == a || !(0, g.m)(null !== (t = a.joinedAt) && void 0 !== t ? t : void 0, null !== (n = a.flags) && void 0 !== n ? n : void 0)) return {};
                let [o, l] = await Promise.all([this._getOrLoadOnboardingHomeSettings(e, a), this._getOrLoadMemberActions(e, a)]);
                return {
                    memberActions: o,
                    completedActions: l
                };
            }),
            v(this, '_getOrLoadOnboardingHomeSettings', async (e, t) => {
                var n, r;
                let i = _.Z.getNewMemberActions(e),
                    a = _.Z.getIsLoading(e);
                if (!(null == i && !a && (0, g.m)(null !== (n = t.joinedAt) && void 0 !== n ? n : void 0, null !== (r = t.flags) && void 0 !== r ? r : void 0))) return i;
                {
                    let t = await (0, f.cP)(e);
                    return null == t ? void 0 : t.newMemberActions;
                }
            }),
            v(this, '_getOrLoadMemberActions', async (e, t) => {
                var n;
                let { completedActions: r, loading: i } = h.Z.getState(e);
                return null == r && !i && (0, d.yE)(null !== (n = t.flags) && void 0 !== n ? n : 0, E.q.STARTED_HOME_ACTIONS) ? await (0, f.Fg)(e) : r;
            });
    }
}
t.Z = new b();
