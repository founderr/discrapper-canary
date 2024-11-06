n.d(t, {
    Z: function () {
        return _;
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
    u = n(199902),
    d = n(914010),
    m = n(358595),
    h = n(981631),
    f = n(245335),
    p = n(388032),
    g = n(691784);
function _(e) {
    let t,
        n,
        r,
        { invite: _, currentUserId: E, guild: C, onTransitionToInviteChannel: I, onAcceptInstantInvite: x } = e,
        N = null == C ? void 0 : C.id,
        v = (0, a.e7)([d.Z], () => d.Z.getGuildId()),
        T = (0, a.e7)([u.Z], () => (null != _ && null != _.target_user ? u.Z.getActiveStreamForUser(_.target_user.id, N) : null), [_, N]),
        S = (0, a.e7)([u.Z], () => (null != _ && null != _.target_user ? u.Z.getStreamForUser(_.target_user.id, N) : null), [_, N]),
        A = null != _ && _.target_type === f.Iq.STREAM && null != _.target_user && null != T,
        b = null != _ && null != S && null != _.channel && null != _.guild && S.channelId === _.channel.id && S.guildId === _.guild.id;
    l()(null != _, 'Invite cannot be null');
    let { target_type: j, target_user: Z } = _;
    l()(j === f.Iq.STREAM && null != Z, 'invalid streaming invite');
    let R = E === Z.id,
        P = _.state === h.r2o.ACCEPTING,
        L = null != C;
    if (null == C) {
        if (null == _.guild) return (0, i.jsx)(m.Z, {});
        C = new c.ZP(_.guild);
    }
    let y = null != _.channel ? (0, s.jD)(_.channel) : null,
        O = A ? I : x;
    L && !b ? (r = R ? p.intl.string(p.t.oBLoZG) : p.intl.formatToPlainString(p.t['0QJmAw'], { name: Z.username })) : ((t = p.intl.string(p.t['I6JG4+'])), (n = o.Z.Button.Colors.GREEN), A && ((t = p.intl.string(p.t['Q1W99/'])), (n = o.Z.Button.Colors.PRIMARY)), (r = R ? p.intl.string(p.t['4hyaHh']) : p.intl.formatToPlainString(p.t.QmlLEh, { name: Z.username })));
    let M = v === C.id && null != y ? (0, i.jsx)(o.Z.Channel, { channel: y }) : p.intl.formatToPlainString(p.t.u0vaDA, { guildName: C.name });
    return (0, i.jsxs)(o.Z, {
        children: [
            (0, i.jsx)(o.Z.Header, { text: p.intl.string(p.t['wS+5WV']) }),
            (0, i.jsxs)(o.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: g.headerLine,
                        children: [
                            (0, i.jsx)(o.Z.Icon, {
                                guild: C,
                                onClick: L && b ? O : void 0
                            }),
                            (0, i.jsx)(o.Z.Info, {
                                title: r,
                                onClick: L && b ? O : void 0,
                                children: M
                            })
                        ]
                    }),
                    b
                        ? (0, i.jsx)(o.Z.Button, {
                              disabled: L && !b,
                              onClick: O,
                              submitting: P,
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
