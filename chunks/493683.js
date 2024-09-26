var r = n(47120);
var i = n(544891),
    a = n(780384),
    o = n(570140),
    s = n(802098),
    l = n(702321),
    u = n(408987),
    c = n(57132),
    d = n(895886),
    _ = n(703656),
    E = n(359110),
    f = n(131704),
    h = n(592125),
    p = n(306680),
    m = n(626135),
    I = n(73346),
    T = n(26151),
    g = n(287734),
    S = n(981631),
    A = n(689938);
t.Z = {
    async openPrivateChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 ? arguments[4] : void 0,
            o = this._getRecipients(e),
            s = (e) => {
                t && T.Z.call(e.id, n, !0, e.isDM() ? e.getRecipientId() : null);
            };
        if (1 === o.length) {
            let [e] = o,
                t = this._openCachedDMChannel(e, a);
            if (null != t) return s(t), Promise.resolve(t.id);
        }
        try {
            let e = await i.tn.post({
                url: S.ANM.USER_CHANNELS,
                body: { recipients: o },
                context: { location: r },
                oldFormErrors: !0
            });
            null == a || a();
            let t = this._openPrivateChannel(e.body);
            return s(t), e.body.id;
        } catch (e) {
            var l;
            throw ((null == e ? void 0 : null === (l = e.body) || void 0 === l ? void 0 : l.code) === S.evJ.QUARANTINED && (0, d.default)(), e);
        }
    },
    _openCachedDMChannel(e, t) {
        let n = h.Z.getDMFromUserId(e),
            r = null != n ? h.Z.getChannel(n) : null;
        return null == r ? null : (null == t || t(), null != (0, c.PP)() ? (0, E.Kh)(r.id, { navigationReplace: !0 }) : g.default.selectPrivateChannel(r.id), r);
    },
    async ensurePrivateChannel(e) {
        let t = this._getRecipients(e),
            n = await i.tn.post({
                url: S.ANM.USER_CHANNELS,
                body: { recipients: t },
                oldFormErrors: !0
            }),
            r = (0, f.q_)(n.body);
        return (
            o.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: r
            }),
            r.id
        );
    },
    async getOrEnsurePrivateChannel(e) {
        let t = h.Z.getDMFromUserId(e);
        return null != t ? t : await this.ensurePrivateChannel(e);
    },
    async getDMChannel(e) {
        let t = await i.tn.get(S.ANM.DM_CHANNEL(e)),
            n = (0, f.q_)(t.body);
        return (
            o.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: n
            }),
            n.id
        );
    },
    _getRecipients: (e) => (null != e ? (Array.isArray(e) ? e : [e]) : []),
    _openPrivateChannel(e) {
        let t = (0, f.q_)(e);
        return (
            o.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: t
            }),
            null != (0, c.PP)() ? (0, E.Kh)(t.id, { navigationReplace: !0 }) : g.default.selectPrivateChannel(t.id),
            t
        );
    },
    closePrivateChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
            (0, l.Z)(e) &&
                m.default.track(S.rMx.CHANGE_LOG_DM_REMOVED, {
                    last_changelog_id: s.Z.latestChangelogId(),
                    unread_count: p.ZP.getUnreadCount(e)
                }),
            o.Z.dispatch({
                type: 'CHANNEL_DELETE',
                channel: {
                    id: e,
                    guild_id: void 0,
                    parent_id: void 0
                },
                silent: n
            }),
            t && !__OVERLAY__ && (0, _.uL)(S.Z5c.FRIENDS),
            i.tn
                .del({
                    url: S.ANM.CHANNEL(e),
                    query: { silent: n },
                    oldFormErrors: !0
                })
                .then(() => {
                    a.uv.announce(A.Z.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED);
                })
                .catch(() => {
                    a.uv.announce(A.Z.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED_FAILED);
                })
        );
    },
    updatePermissionOverwrite: (e, t) =>
        i.tn.put({
            url: S.ANM.CHANNEL_PERMISSIONS_OVERWRITE(e, t.id),
            body: t,
            oldFormErrors: !0
        }),
    clearPermissionOverwrite: (e, t) =>
        i.tn.del({
            url: S.ANM.CHANNEL_PERMISSIONS_OVERWRITE(e, t),
            oldFormErrors: !0
        }),
    addRecipient(e, t, n, r) {
        return i.tn
            .put({
                url: S.ANM.CHANNEL_RECIPIENT(e, t),
                context: { location: n },
                oldFormErrors: !0
            })
            .then((t) => ((a.uv.announce(A.Z.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM), null == r || r(), 201 === t.status) ? this._openPrivateChannel(t.body).id : e))
            .catch(() => (a.uv.announce(A.Z.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM_FAILED), e));
    },
    addRecipients(e, t, n, r) {
        return this.addRecipient(e, t[0], n, r).then((e) => Promise.all(t.slice(1).map((t) => this.addRecipient(e, t, n))).then(() => e));
    },
    removeRecipient: (e, t) =>
        i.tn.del({
            url: S.ANM.CHANNEL_RECIPIENT(e, t),
            oldFormErrors: !0
        }),
    setDMOwner: (e, t) =>
        i.tn.patch({
            url: S.ANM.CHANNEL(e),
            body: { owner: t },
            oldFormErrors: !0
        }),
    async setName(e, t) {
        let n = h.Z.getChannel(e),
            r = await i.tn.patch({
                url: S.ANM.CHANNEL(e),
                body: { name: t },
                oldFormErrors: !0
            }),
            a = null == n ? void 0 : n.getGuildId();
        return null != a && !(null == n ? void 0 : n.isThread()) && u.Z.checkGuildTemplateDirty(a), r;
    },
    setIcon(e, t) {
        let n = h.Z.getChannel(e);
        i.tn
            .patch({
                url: S.ANM.CHANNEL(e),
                body: { icon: t },
                oldFormErrors: !0
            })
            .then(() => {
                let e = null == n ? void 0 : n.getGuildId();
                null != e && !(null == n ? void 0 : n.isThread()) && u.Z.checkGuildTemplateDirty(e);
            });
    },
    convertToGuild: (e) =>
        i.tn.post({
            url: S.ANM.CHANNEL_CONVERT(e),
            oldFormErrors: !0
        }),
    preload(e, t) {
        o.Z.dispatch({
            type: 'CHANNEL_PRELOAD',
            guildId: e === S.ME ? null : e,
            channelId: t,
            context: S.e3s
        });
    },
    fetchChannelStoreListing(e, t) {
        let n = null != t ? S.ANM.CHANNEL_STORE_LISTING_SKU(e, t) : S.ANM.CHANNEL_STORE_LISTING(e);
        return (0, I.Kb)(n).then((t) => {
            o.Z.dispatch({
                type: 'STORE_LISTING_FETCH_SUCCESS',
                channelId: e,
                storeListing: t.body
            });
        });
    },
    async createTextChannel(e, t, n, r) {
        let a = {
            type: S.d4z.GUILD_TEXT,
            name: t,
            permission_overwrites: []
        };
        null != n && (a.parent_id = n), null != r && (a.topic = r);
        let o = await i.tn.post({
            url: S.ANM.GUILD_CHANNELS(e),
            body: a,
            oldFormErrors: !0
        });
        return u.Z.checkGuildTemplateDirty(e), o;
    },
    fetchChannel: async (e) => (await i.tn.get(S.ANM.CHANNEL(e))).body
};
