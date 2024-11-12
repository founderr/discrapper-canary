n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var r = n(512722),
    l = n.n(r),
    a = n(442837),
    o = n(955415),
    s = n(131704),
    c = n(601964),
    d = n(199902),
    u = n(914010),
    m = n(358595),
    h = n(981631),
    f = n(245335),
    p = n(388032),
    _ = n(691784);
function g(e) {
    let t,
        n,
        r,
        { invite: g, currentUserId: E, guild: C, onTransitionToInviteChannel: I, onAcceptInstantInvite: x } = e,
        v = null == C ? void 0 : C.id,
        N = (0, a.e7)([u.Z], () => u.Z.getGuildId()),
        T = (0, a.e7)([d.Z], () => (null != g && null != g.target_user ? d.Z.getActiveStreamForUser(g.target_user.id, v) : null), [g, v]),
        S = (0, a.e7)([d.Z], () => (null != g && null != g.target_user ? d.Z.getStreamForUser(g.target_user.id, v) : null), [g, v]),
        A = null != g && g.target_type === f.Iq.STREAM && null != g.target_user && null != T,
        b = null != g && null != S && null != g.channel && null != g.guild && S.channelId === g.channel.id && S.guildId === g.guild.id;
    l()(null != g, 'Invite cannot be null');
    let { target_type: j, target_user: Z } = g;
    l()(j === f.Iq.STREAM && null != Z, 'invalid streaming invite');
    let R = E === Z.id,
        L = g.state === h.r2o.ACCEPTING,
        P = null != C;
    if (null == C) {
        if (null == g.guild) return (0, i.jsx)(m.Z, {});
        C = new c.ZP(g.guild);
    }
    let y = null != g.channel ? (0, s.jD)(g.channel) : null,
        O = A ? I : x;
    P && !b ? (r = R ? p.intl.string(p.t.oBLoZG) : p.intl.formatToPlainString(p.t['0QJmAw'], { name: Z.username })) : ((t = p.intl.string(p.t['I6JG4+'])), (n = o.Z.Button.Colors.GREEN), A && ((t = p.intl.string(p.t['Q1W99/'])), (n = o.Z.Button.Colors.PRIMARY)), (r = R ? p.intl.string(p.t['4hyaHh']) : p.intl.formatToPlainString(p.t.QmlLEh, { name: Z.username })));
    let M = N === C.id && null != y ? (0, i.jsx)(o.Z.Channel, { channel: y }) : p.intl.formatToPlainString(p.t.u0vaDA, { guildName: C.name });
    return (0, i.jsxs)(o.Z, {
        children: [
            (0, i.jsx)(o.Z.Header, { text: p.intl.string(p.t['wS+5WV']) }),
            (0, i.jsxs)(o.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: _.headerLine,
                        children: [
                            (0, i.jsx)(o.Z.Icon, {
                                guild: C,
                                onClick: P && b ? O : void 0
                            }),
                            (0, i.jsx)(o.Z.Info, {
                                title: r,
                                onClick: P && b ? O : void 0,
                                children: M
                            })
                        ]
                    }),
                    b
                        ? (0, i.jsx)(o.Z.Button, {
                              disabled: P && !b,
                              onClick: O,
                              submitting: L,
                              isDisabled: A && b,
                              color: n,
                              children: t
                          })
                        : null
                ]
            })
        ]
    });
}
