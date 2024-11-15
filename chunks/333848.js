t(411104);
var i = t(990547),
    c = t(283693),
    r = t(570140),
    l = t(408987),
    a = t(9156),
    o = t(621600),
    d = t(573261),
    u = t(87051),
    s = t(981631),
    _ = t(526761);
e.Z = {
    createChannel(n) {
        let { guildId: e, type: t, name: p, permissionOverwrites: E = [], bitrate: h, userLimit: T, parentId: A, skuId: g, branchId: f } = n;
        r.Z.dispatch({ type: 'CREATE_CHANNEL_MODAL_SUBMIT' });
        let v = {
            type: t,
            name: p,
            permission_overwrites: E
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
                    return (0, c.iG)({
                        is_private: E.length > 0,
                        channel_id: null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.id,
                        channel_type: null == n ? void 0 : null === (t = n.body) || void 0 === t ? void 0 : t.type
                    });
                }
            }
        }).then(
            (n) => (a.ZP.isOptInEnabled(e) && u.Z.updateChannelOverrideSettings(e, n.body.id, { flags: _.ic.OPT_IN_ENABLED }, o.ZB.OptedIn), l.Z.checkGuildTemplateDirty(e), n),
            (n) => {
                throw (
                    (r.Z.dispatch({
                        type: 'CREATE_CHANNEL_MODAL_SUBMIT_FAILURE',
                        errors: n.body
                    }),
                    n)
                );
            }
        );
    },
    createRoleSubscriptionTemplateChannel: (n, e, t, r) =>
        d.Z.post({
            url: s.ANM.GUILD_CHANNELS(n),
            body: {
                name: e,
                type: t,
                topic: r
            },
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (n) => {
                    var e, t;
                    return (0, c.iG)({
                        is_private: !0,
                        channel_id: null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.id,
                        channel_type: null == n ? void 0 : null === (t = n.body) || void 0 === t ? void 0 : t.type
                    });
                }
            }
        })
};
