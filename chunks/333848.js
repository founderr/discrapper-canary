t(411104);
var i = t(990547),
    r = t(283693),
    c = t(570140),
    l = t(408987),
    a = t(9156),
    o = t(621600),
    d = t(573261),
    u = t(87051),
    s = t(981631),
    _ = t(526761);
e.Z = {
    createChannel(n) {
        let { guildId: e, type: t, name: E, permissionOverwrites: p = [], bitrate: h, userLimit: T, parentId: A, skuId: g, branchId: f } = n;
        c.Z.dispatch({ type: 'CREATE_CHANNEL_MODAL_SUBMIT' });
        let v = {
            type: t,
            name: E,
            permission_overwrites: p
        };
        if ((null != h && h !== s.epw && (v.bitrate = h), null != T && T > 0 && (v.user_limit = T), null != A && (v.parent_id = A), t === s.d4z.GUILD_STORE)) {
            if (null == g) throw Error('Unexpected missing SKU');
            (v.sku_id = g), (v.branch_id = f);
        }
        return d.Z.post({
            url: s.ANM.GUILD_CHANNELS(e),
            body: v,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (n) => {
                    var e, t;
                    return (0, r.iG)({
                        is_private: p.length > 0,
                        channel_id: null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.id,
                        channel_type: null == n ? void 0 : null === (t = n.body) || void 0 === t ? void 0 : t.type
                    });
                }
            },
            rejectWithError: !1
        }).then(
            (n) => (a.ZP.isOptInEnabled(e) && u.Z.updateChannelOverrideSettings(e, n.body.id, { flags: _.ic.OPT_IN_ENABLED }, o.ZB.OptedIn), l.Z.checkGuildTemplateDirty(e), n),
            (n) => {
                throw (
                    (c.Z.dispatch({
                        type: 'CREATE_CHANNEL_MODAL_SUBMIT_FAILURE',
                        errors: n.body
                    }),
                    n)
                );
            }
        );
    },
    createRoleSubscriptionTemplateChannel: (n, e, t, c) =>
        d.Z.post({
            url: s.ANM.GUILD_CHANNELS(n),
            body: {
                name: e,
                type: t,
                topic: c
            },
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (n) => {
                    var e, t;
                    return (0, r.iG)({
                        is_private: !0,
                        channel_id: null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.id,
                        channel_type: null == n ? void 0 : null === (t = n.body) || void 0 === t ? void 0 : t.type
                    });
                }
            },
            rejectWithError: !1
        })
};
