var r = n(411104);
var i = n(990547),
    a = n(283693),
    o = n(570140),
    s = n(408987),
    l = n(9156),
    u = n(621600),
    c = n(573261),
    d = n(87051),
    _ = n(981631),
    E = n(526761);
t.Z = {
    createChannel(e) {
        let { guildId: t, type: n, name: r, permissionOverwrites: f = [], bitrate: h, userLimit: p, parentId: m, skuId: I, branchId: T } = e;
        o.Z.dispatch({ type: 'CREATE_CHANNEL_MODAL_SUBMIT' });
        let g = {
            type: n,
            name: r,
            permission_overwrites: f
        };
        if ((null != h && h !== _.epw && (g.bitrate = h), null != p && p > 0 && (g.user_limit = p), null != m && (g.parent_id = m), n === _.d4z.GUILD_STORE)) {
            if (null == I) throw Error('Unexpected missing SKU');
            (g.sku_id = I), (g.branch_id = T);
        }
        return c.Z.post({
            url: _.ANM.GUILD_CHANNELS(t),
            body: g,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                    var t, n;
                    return (0, a.iG)({
                        is_private: f.length > 0,
                        channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                        channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                    });
                }
            }
        }).then(
            (e) => (l.ZP.isOptInEnabled(t) && d.Z.updateChannelOverrideSettings(t, e.body.id, { flags: E.ic.OPT_IN_ENABLED }, u.ZB.OptedIn), s.Z.checkGuildTemplateDirty(t), e),
            (e) => {
                throw (
                    (o.Z.dispatch({
                        type: 'CREATE_CHANNEL_MODAL_SUBMIT_FAILURE',
                        errors: e.body
                    }),
                    e)
                );
            }
        );
    },
    createRoleSubscriptionTemplateChannel: (e, t, n, r) =>
        c.Z.post({
            url: _.ANM.GUILD_CHANNELS(e),
            body: {
                name: t,
                type: n,
                topic: r
            },
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                    var t, n;
                    return (0, a.iG)({
                        is_private: !0,
                        channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                        channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                    });
                }
            }
        })
};
