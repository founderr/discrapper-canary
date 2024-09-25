n.d(t, {
    Z: function () {
        return g;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(475179),
    s = n(287734),
    l = n(933557),
    u = n(124072),
    c = n(703656),
    d = n(131704),
    _ = n(592125),
    E = n(430824),
    f = n(699516),
    h = n(594174),
    p = n(934415),
    m = n(900849),
    I = n(981631);
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e || null == t) return;
    let r = E.Z.getGuild(e);
    if ((null == r ? void 0 : r.joinedAt) == null) {
        m.Ub(e, {}, { channelId: t });
        return;
    }
    let i = _.Z.getChannel(t);
    if (null != i && (0, d.bw)(i.type)) {
        if (n) {
            o.Z.updateChatOpen(i.id, !0), (0, c.uL)(I.Z5c.CHANNEL(e, t));
            return;
        }
        s.default.selectVoiceChannel(i.id);
        return;
    }
    (0, c.uL)(I.Z5c.CHANNEL(e, t));
}
function g(e) {
    let { channel: t, onClick: n, beforeTransition: o, className: s, openChatWithoutConnecting: c } = e,
        d = (0, i.e7)([h.default, f.Z], () => (null == t ? '' : (0, l.F6)(t, h.default, f.Z)), [t]);
    return (0, r.jsx)(a.Tooltip, {
        text: d,
        position: 'top',
        children: (e) => {
            let { onMouseEnter: i, onMouseLeave: l } = e;
            return (0, r.jsx)(u.Z, {
                role: 'link',
                className: s,
                onClick: (e) => {
                    e.stopPropagation(), null != n ? n() : (null != o && o(), (0, a.closeAllModals)(), T(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, c));
                },
                onMouseEnter: i,
                onMouseLeave: l,
                iconType: (0, p.wl)(t),
                children: d
            });
        }
    });
}
