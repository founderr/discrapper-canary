n(411104);
var i = n(990547),
    r = n(283693),
    l = n(570140),
    o = n(408987),
    u = n(9156),
    a = n(621600),
    s = n(573261),
    c = n(87051),
    d = n(981631),
    f = n(526761);
t.Z = {
    createChannel(e) {
        let { guildId: t, type: n, name: p, permissionOverwrites: _ = [], bitrate: E, userLimit: g, parentId: h, skuId: m, branchId: S } = e;
        l.Z.dispatch({ type: 'CREATE_CHANNEL_MODAL_SUBMIT' });
        let I = {
            type: n,
            name: p,
            permission_overwrites: _
        };
        if ((null != E && E !== d.epw && (I.bitrate = E), null != g && g > 0 && (I.user_limit = g), null != h && (I.parent_id = h), n === d.d4z.GUILD_STORE)) {
            if (null == m) throw Error('Unexpected missing SKU');
            (I.sku_id = m), (I.branch_id = S);
        }
        return s.Z.post({
            url: d.ANM.GUILD_CHANNELS(t),
            body: I,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                    var t, n;
                    return (0, r.iG)({
                        is_private: _.length > 0,
                        channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                        channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                    });
                }
            },
            rejectWithError: !1
        }).then(
            (e) => (u.ZP.isOptInEnabled(t) && c.Z.updateChannelOverrideSettings(t, e.body.id, { flags: f.ic.OPT_IN_ENABLED }, a.ZB.OptedIn), o.Z.checkGuildTemplateDirty(t), e),
            (e) => {
                throw (
                    (l.Z.dispatch({
                        type: 'CREATE_CHANNEL_MODAL_SUBMIT_FAILURE',
                        errors: e.body
                    }),
                    e)
                );
            }
        );
    },
    createRoleSubscriptionTemplateChannel: (e, t, n, l) =>
        s.Z.post({
            url: d.ANM.GUILD_CHANNELS(e),
            body: {
                name: t,
                type: n,
                topic: l
            },
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                    var t, n;
                    return (0, r.iG)({
                        is_private: !0,
                        channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                        channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                    });
                }
            },
            rejectWithError: !1
        })
};
