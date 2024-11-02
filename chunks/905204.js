t.d(n, {
    Z: function () {
        return C;
    }
}),
    t(536091),
    t(653041),
    t(47120),
    t(724458);
var l = t(192379),
    a = t(392711),
    i = t.n(a),
    r = t(442837),
    o = t(570140),
    s = t(724213),
    c = t(9156),
    d = t(630388),
    u = t(823379),
    h = t(549817),
    m = t(45966),
    f = t(526761);
function p(e) {
    o.Z.dispatch({
        type: 'CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES',
        guildId: e
    });
}
let x = {};
function C(e) {
    let n = (0, r.e7)(
        [m.Z],
        () => {
            var n;
            return null !== (n = m.Z.getPendingResponseOptions(e)) && void 0 !== n ? n : x;
        },
        [e]
    );
    return (
        l.useEffect(() => (p(e), () => p(e)), [e]),
        l.useEffect(() => {
            null != n && 0 !== Object.keys(n).length && h.Z.updateOnboardingResponses(e);
        }, [e, n]),
        {
            handleSelectOption: l.useCallback(
                (n, t, l) => {
                    let a = m.Z.getOnboardingResponses(e),
                        { addedRoleIds: r, removedRoleIds: p } = (function (e, n, t, l) {
                            var a, r, o, s, c;
                            let d = [],
                                h = [];
                            if (e.singleSelect && t) {
                                let t = e.options.find((e) => l.includes(e.id));
                                (d = i().difference(null !== (a = n.roleIds) && void 0 !== a ? a : [], null !== (r = null == t ? void 0 : t.roleIds) && void 0 !== r ? r : [])), (h = i().difference(null !== (o = null == t ? void 0 : t.roleIds) && void 0 !== o ? o : [], null !== (s = n.roleIds) && void 0 !== s ? s : []));
                            } else if (t) (d = null !== (c = n.roleIds) && void 0 !== c ? c : []), (h = []);
                            else {
                                let t = e.options.filter((e) => l.includes(e.id)),
                                    a = t.filter((e) => n.id !== e.id),
                                    r = t
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(u.lm),
                                    o = a
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(u.lm);
                                (d = []), (h = i().difference(r, o));
                            }
                            return {
                                addedRoleIds: d,
                                removedRoleIds: h
                            };
                        })(n, t, l, a),
                        { addedChannelIds: x, removedChannelIds: C } = (function (e) {
                            var n, t, l, a, r;
                            let { guildId: o, prompt: c, option: d, selected: h, responses: f } = e,
                                p = [],
                                x = [];
                            if (c.singleSelect && h) {
                                let e = c.options.find((e) => f.includes(e.id));
                                (p = i().difference(null !== (n = d.channelIds) && void 0 !== n ? n : [], null !== (t = null == e ? void 0 : e.channelIds) && void 0 !== t ? t : [])), (x = i().difference(null !== (l = null == e ? void 0 : e.channelIds) && void 0 !== l ? l : [], null !== (a = d.channelIds) && void 0 !== a ? a : []));
                            } else if (h) (p = null !== (r = d.channelIds) && void 0 !== r ? r : []), (x = []);
                            else {
                                let e = c.options.filter((e) => f.includes(e.id)),
                                    n = e.filter((e) => d.id !== e.id),
                                    t = e
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(u.lm),
                                    l = n
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(u.lm);
                                (p = []), (x = i().difference(t, l));
                            }
                            return (
                                (0, s.hi)(o) && p.push(...m.Z.getDefaultChannelIds(o)),
                                {
                                    addedChannelIds: p,
                                    removedChannelIds: x
                                }
                            );
                        })({
                            guildId: e,
                            prompt: n,
                            option: t,
                            selected: l,
                            responses: a
                        }),
                        g = x.reduce((n, t) => {
                            let l = c.ZP.getChannelIdFlags(e, t);
                            return (n[t] = { flags: (0, d.mB)(l, f.ic.OPT_IN_ENABLED, !0) }), n;
                        }, {}),
                        _ = C.reduce((n, t) => {
                            let l = c.ZP.getChannelIdFlags(e, t);
                            return (n[t] = { flags: (0, d.mB)(l, f.ic.OPT_IN_ENABLED, !1) }), n;
                        }, {}),
                        b = {
                            ...g,
                            ..._
                        };
                    h.Z.selectOption(e, n.id, t.id, l),
                        o.Z.dispatch({
                            type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK',
                            guildId: e,
                            overrides: b
                        }),
                        h.Z.updateRolesLocal(e, r, p);
                },
                [e]
            )
        }
    );
}
