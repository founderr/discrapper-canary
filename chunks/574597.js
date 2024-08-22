t.d(n, {
    Z: function () {
        return x;
    }
});
var l = t(735250),
    a = t(470079),
    i = t(866442),
    r = t(481060),
    o = t(129861),
    s = t(91218),
    c = t(829883),
    u = t(518738),
    d = t(14263),
    m = t(592125),
    _ = t(430824),
    f = t(158776),
    p = t(594174),
    E = t(970184),
    I = t(280501),
    C = t(811654),
    h = t(344991),
    N = t(981631),
    T = t(296555);
function x(e) {
    var n;
    let t = (0, E.CJ)(),
        x = null == t ? void 0 : null === (n = t.message) || void 0 === n ? void 0 : n.getChannelId(),
        v = m.Z.getChannel(x),
        g = _.Z.getGuild(null == v ? void 0 : v.getGuildId()),
        b = (0, d.Z)(null == g ? void 0 : g.id, C.HI),
        S = a.useMemo(() => (0, C.tx)(e.defaultValues, null == g ? void 0 : g.id), [e.defaultValues, g]);
    return (0, l.jsx)(h.ZP, {
        selectActionComponent: e,
        queryOptions: (n) => (0, C._H)(e.type, n, x),
        renderIcon: (e, n) => {
            let t = n === h.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === I.tM.USER) {
                let a = p.default.getUser(e.value);
                if (null == a) return;
                return (0, l.jsx)(r.Avatar, {
                    size: t ? r.AvatarSizes.SIZE_16 : r.AvatarSizes.SIZE_24,
                    src: a.getAvatarURL(null == g ? void 0 : g.id, n),
                    status: t ? null : f.Z.getStatus(a.id),
                    'aria-hidden': !0
                });
            }
            if ((null == e ? void 0 : e.type) === I.tM.ROLE) {
                var a;
                let t = null != g ? _.Z.getRole(g.id, e.value) : void 0;
                if (null == t || null == g) return;
                let o = (0, c._b)(g, t) ? (0, u.Kz)(t, n) : null;
                return null != o
                    ? (0, l.jsx)(s.Z, { ...o })
                    : (0, l.jsx)(r.ShieldUserIcon, {
                          size: 'custom',
                          color: null !== (a = t.colorString) && void 0 !== a ? a : (0, i.Rf)(N.p6O),
                          height: n,
                          width: n
                      });
            }
        },
        renderOptionLabel: (e) => {
            let n = null;
            if (e.type === I.tM.USER) {
                let t = p.default.getUser(e.value);
                null != t &&
                    (n = (0, l.jsx)(o.Z, {
                        className: T.tag,
                        usernameClass: T.username,
                        discriminatorClass: T.discriminator,
                        botClass: T.bot,
                        user: t,
                        forceUsername: !0
                    }));
            } else if (e.type === I.tM.ROLE) {
                let t = null != g ? _.Z.getRole(g.id, e.value) : void 0,
                    a = null == t ? null : null == b ? void 0 : b[t.id];
                null != a &&
                    (n = (0, l.jsxs)('div', {
                        className: T.roleCountContainer,
                        children: [
                            (0, l.jsx)(r.UserIcon, {
                                size: 'sm',
                                color: 'currentColor',
                                className: T.roleCountIcon
                            }),
                            (0, l.jsx)('span', {
                                className: T.roleCountText,
                                children: a
                            })
                        ]
                    }));
            }
            return (0, l.jsxs)('span', {
                className: T.label,
                children: [
                    (0, l.jsx)('span', {
                        className: T.labelText,
                        children: e.label
                    }),
                    n
                ]
            });
        },
        defaultValues: S
    });
}
