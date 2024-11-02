n(411104);
var r = n(990547),
    i = n(283693),
    a = n(570140),
    s = n(408987),
    o = n(9156),
    l = n(621600),
    u = n(573261),
    c = n(87051),
    d = n(981631),
    f = n(526761);
t.Z = {
    createChannel(e) {
        let { guildId: t, type: n, name: _, permissionOverwrites: h = [], bitrate: p, userLimit: m, parentId: g, skuId: E, branchId: v } = e;
        a.Z.dispatch({ type: 'CREATE_CHANNEL_MODAL_SUBMIT' });
        let I = {
            type: n,
            name: _,
            permission_overwrites: h
        };
        if ((null != p && p !== d.epw && (I.bitrate = p), null != m && m > 0 && (I.user_limit = m), null != g && (I.parent_id = g), n === d.d4z.GUILD_STORE)) {
            if (null == E) throw Error('Unexpected missing SKU');
            (I.sku_id = E), (I.branch_id = v);
        }
        return u.Z.post({
            url: d.ANM.GUILD_CHANNELS(t),
            body: I,
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                    var t, n;
                    return (0, i.iG)({
                        is_private: h.length > 0,
                        channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                        channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                    });
                }
            }
        }).then(
            (e) => (o.ZP.isOptInEnabled(t) && c.Z.updateChannelOverrideSettings(t, e.body.id, { flags: f.ic.OPT_IN_ENABLED }, l.ZB.OptedIn), s.Z.checkGuildTemplateDirty(t), e),
            (e) => {
                throw (
                    (a.Z.dispatch({
                        type: 'CREATE_CHANNEL_MODAL_SUBMIT_FAILURE',
                        errors: e.body
                    }),
                    e)
                );
            }
        );
    },
    createRoleSubscriptionTemplateChannel: (e, t, n, a) =>
        u.Z.post({
            url: d.ANM.GUILD_CHANNELS(e),
            body: {
                name: t,
                type: n,
                topic: a
            },
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                    var t, n;
                    return (0, i.iG)({
                        is_private: !0,
                        channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                        channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                    });
                }
            }
        })
};
