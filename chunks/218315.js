var r = n(47120);
var i = n(789020);
var a = n(735250);
n(470079);
var o = n(481060),
    s = n(147913),
    l = n(160404),
    u = n(314897),
    c = n(592125),
    d = n(271383),
    _ = n(914010),
    E = n(630388),
    f = n(526120),
    h = n(563534),
    p = n(734893),
    m = n(846121),
    I = n(931261),
    T = n(460347),
    g = n(372897);
function S(e, t, n) {
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
class A extends s.Z {
    constructor(...e) {
        super(...e),
            S(this, 'onboardingCompleteGuilds', new Set()),
            S(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
                GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e),
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
                MESSAGE_CREATE: (e) => this.handleMessageSend(e),
                THREAD_CREATE: (e) => this.handleThreadCreate(e)
            }),
            S(this, 'handlePostConnectionOpen', () => {
                let e = _.Z.getGuildId();
                null != e && this._getOrLoadOnboardingMemberActions(e);
            }),
            S(this, 'handleGuildMemberUpdate', (e) => {
                let { flags: t, user: r, guildId: i } = e;
                if (r.id === u.default.getId()) {
                    if (!this.onboardingCompleteGuilds.has(i) && (0, E.yE)(null != t ? t : 0, g.q.COMPLETED_HOME_ACTIONS)) {
                        var s, l;
                        this.onboardingCompleteGuilds.add(i);
                        let e = null !== (l = null === (s = h.Z.getNewMemberActions(i)) || void 0 === s ? void 0 : s.length) && void 0 !== l ? l : 0;
                        if (0 === e) return;
                        (0, o.openModalLazy)(async () => {
                            let { default: t } = await n.e('92339').then(n.bind(n, 184100));
                            return (n) =>
                                (0, a.jsx)(t, {
                                    ...n,
                                    initialPercent: (e - 1) / e,
                                    numActions: e
                                });
                        });
                    }
                }
            }),
            S(this, 'handleGuildDelete', (e) => {
                let { guild: t } = e;
                this.onboardingCompleteGuilds.delete(t.id);
            }),
            S(this, 'handleChannelSelect', async (e) => {
                let { guildId: t, channelId: n } = e;
                if (null == t || null == n) return;
                let { memberActions: r, completedActions: i } = await this._getOrLoadOnboardingMemberActions(t),
                    a = null == r ? void 0 : r.find((e) => e.channelId === n);
                (null == i ? void 0 : i[n]) !== !0 && null != a && a.actionType === p.oi.VIEW && (0, f.Oh)(t, n);
            }),
            S(this, 'handleMessageSend', (e) => {
                var t;
                let { guildId: n, channelId: r, message: i } = e;
                if (null == n || null == r || (null === (t = i.author) || void 0 === t ? void 0 : t.id) !== u.default.getId()) return;
                let a = c.Z.getChannel(r);
                (null == a ? void 0 : a.isForumPost()) && (null == a ? void 0 : a.parent_id) != null && this._completeChatAction(n, a.parent_id), this._completeChatAction(n, r);
            }),
            S(this, 'handleThreadCreate', (e) => {
                var t;
                let { channel: n, isNewlyCreated: r } = e;
                if (!!r && null != n.parent_id && !!(null === (t = c.Z.getChannel(n.parent_id)) || void 0 === t ? void 0 : t.isForumLikeChannel())) n.ownerId === u.default.getId() && this._completeChatAction(n.guild_id, n.parent_id);
            }),
            S(this, '_completeChatAction', async (e, t) => {
                let { memberActions: n, completedActions: r } = await this._getOrLoadOnboardingMemberActions(e),
                    i = null == n ? void 0 : n.find((e) => e.channelId === t);
                (null == r ? void 0 : r[t]) !== !0 && null != i && i.actionType === p.oi.CHAT && (0, f.Oh)(e, t);
            }),
            S(this, '_getOrLoadOnboardingMemberActions', async (e) => {
                var t, n;
                let r = (0, I.s)(e),
                    i = l.Z.isFullServerPreview(e);
                if (!r && !i) return {};
                let a = d.ZP.getSelfMember(e);
                if (null == a || !(0, T.m)(null !== (t = a.joinedAt) && void 0 !== t ? t : void 0, null !== (n = a.flags) && void 0 !== n ? n : void 0)) return {};
                let [o, s] = await Promise.all([this._getOrLoadOnboardingHomeSettings(e, a), this._getOrLoadMemberActions(e, a)]);
                return {
                    memberActions: o,
                    completedActions: s
                };
            }),
            S(this, '_getOrLoadOnboardingHomeSettings', async (e, t) => {
                var n, r;
                let i = h.Z.getNewMemberActions(e),
                    a = h.Z.getIsLoading(e);
                if (!(null == i && !a && (0, T.m)(null !== (n = t.joinedAt) && void 0 !== n ? n : void 0, null !== (r = t.flags) && void 0 !== r ? r : void 0))) return i;
                {
                    let t = await (0, f.cP)(e);
                    return null == t ? void 0 : t.newMemberActions;
                }
            }),
            S(this, '_getOrLoadMemberActions', async (e, t) => {
                var n;
                let { completedActions: r, loading: i } = m.Z.getState(e);
                return null == r && !i && (0, E.yE)(null !== (n = t.flags) && void 0 !== n ? n : 0, g.q.STARTED_HOME_ACTIONS) ? await (0, f.Fg)(e) : r;
            });
    }
}
t.Z = new A();
