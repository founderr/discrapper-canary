t.d(n, {
    Z: function () {
        return Z;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    o = t(481060),
    s = t(666520),
    r = t(592125),
    c = t(430824),
    a = t(944486),
    d = t(785717),
    u = t(621853),
    f = t(172351),
    m = t(280885),
    p = t(900927),
    x = t(678738),
    I = t(179828),
    h = t(228168),
    v = t(388032),
    g = t(11633);
function Z(e) {
    var n;
    let { user: t, currentUser: Z, displayProfile: _, subsection: b, onClose: j } = e,
        { trackUserProfileAction: E } = (0, d.KZ)(),
        T = (0, l.e7)([c.Z], () => ((null == _ ? void 0 : _.guildId) != null ? c.Z.getGuild(_.guildId) : null)),
        N = (0, l.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }),
        S = (0, l.e7)([r.Z, a.Z], () => r.Z.getChannel(a.Z.getChannelId()));
    return (0, i.jsxs)(o.ScrollerThin, {
        fade: !0,
        className: g.scroller,
        children: [
            (null == _ ? void 0 : _.bio) != null &&
                (null == _ ? void 0 : _.bio) !== '' &&
                (0, i.jsx)(m.Z, {
                    userBio: _.bio,
                    setLineClamp: !1
                }),
            (null == N ? void 0 : N.popularApplicationCommandIds) != null &&
                null != S &&
                (0, i.jsx)(f.Z, {
                    applicationId: N.id,
                    commandIds: N.popularApplicationCommandIds,
                    channel: S,
                    guildId: null !== (n = null == _ ? void 0 : _.guildId) && void 0 !== n ? n : void 0,
                    onClick: j
                }),
            null != T &&
                (0, i.jsx)(I.Z, {
                    user: t,
                    currentUser: Z,
                    guild: T,
                    scrollIntoView: b === h.Tb.ROLES
                }),
            (0, i.jsx)(x.Z, {
                heading: v.intl.string(v.t['A//N4u']),
                children: (0, i.jsx)(p.Z, {
                    userId: t.id,
                    guildId: null == _ ? void 0 : _.guildId,
                    tooltipDelay: h.vB
                })
            }),
            (0, i.jsx)(x.Z, {
                heading: v.intl.string(v.t.PbMNh4),
                scrollIntoView: b === h.Tb.NOTE,
                children: (0, i.jsx)(s.Z, {
                    userId: t.id,
                    className: g.note,
                    autoFocus: b === h.Tb.NOTE,
                    onUpdate: () => E({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
