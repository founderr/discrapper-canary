t.d(n, {
    Z: function () {
        return N;
    }
});
var l = t(735250),
    i = t(470079),
    a = t(866442),
    r = t(481060),
    o = t(129861),
    s = t(91218),
    c = t(829883),
    u = t(518738),
    d = t(14263),
    m = t(592125),
    f = t(430824),
    _ = t(158776),
    p = t(594174),
    C = t(970184),
    h = t(280501),
    E = t(811654),
    I = t(344991),
    T = t(981631),
    x = t(296555);
function N(e) {
    var n;
    let t = (0, C.CJ)(),
        N = null == t ? void 0 : null === (n = t.message) || void 0 === n ? void 0 : n.getChannelId(),
        v = m.Z.getChannel(N),
        g = f.Z.getGuild(null == v ? void 0 : v.getGuildId()),
        b = (0, d.Z)(null == g ? void 0 : g.id, E.HI),
        O = i.useMemo(() => (0, E.tx)(e.defaultValues, null == g ? void 0 : g.id), [e.defaultValues, g]);
    return (0, l.jsx)(I.ZP, {
        selectActionComponent: e,
        queryOptions: (n) => (0, E._H)(e.type, n, N),
        renderIcon: (e, n) => {
            let t = n === I.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === h.tM.USER) {
                let i = p.default.getUser(e.value);
                if (null == i) return;
                return (0, l.jsx)(r.Avatar, {
                    size: t ? r.AvatarSizes.SIZE_16 : r.AvatarSizes.SIZE_24,
                    src: i.getAvatarURL(null == g ? void 0 : g.id, n),
                    status: t ? null : _.Z.getStatus(i.id),
                    'aria-hidden': !0
                });
            }
            if ((null == e ? void 0 : e.type) === h.tM.ROLE) {
                var i;
                let t = null != g ? f.Z.getRole(g.id, e.value) : void 0;
                if (null == t || null == g) return;
                let o = (0, c._b)(g, t) ? (0, u.Kz)(t, n) : null;
                return null != o
                    ? (0, l.jsx)(s.Z, { ...o })
                    : (0, l.jsx)(r.ShieldUserIcon, {
                          size: 'custom',
                          color: null !== (i = t.colorString) && void 0 !== i ? i : (0, a.Rf)(T.p6O),
                          height: n,
                          width: n
                      });
            }
        },
        renderOptionLabel: (e) => {
            let n = null;
            if (e.type === h.tM.USER) {
                let t = p.default.getUser(e.value);
                null != t &&
                    (n = (0, l.jsx)(o.Z, {
                        className: x.tag,
                        usernameClass: x.username,
                        discriminatorClass: x.discriminator,
                        botClass: x.bot,
                        user: t,
                        forceUsername: !0
                    }));
            } else if (e.type === h.tM.ROLE) {
                let t = null != g ? f.Z.getRole(g.id, e.value) : void 0,
                    i = null == t ? null : null == b ? void 0 : b[t.id];
                null != i &&
                    (n = (0, l.jsxs)('div', {
                        className: x.roleCountContainer,
                        children: [
                            (0, l.jsx)(r.UserIcon, {
                                size: 'sm',
                                color: 'currentColor',
                                className: x.roleCountIcon
                            }),
                            (0, l.jsx)('span', {
                                className: x.roleCountText,
                                children: i
                            })
                        ]
                    }));
            }
            return (0, l.jsxs)('span', {
                className: x.label,
                children: [
                    (0, l.jsx)('span', {
                        className: x.labelText,
                        children: e.label
                    }),
                    n
                ]
            });
        },
        defaultValues: O
    });
}
