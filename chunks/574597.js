t.d(n, {
    Z: function () {
        return T;
    }
});
var l = t(735250),
    i = t(470079),
    r = t(866442),
    a = t(481060),
    o = t(129861),
    s = t(91218),
    c = t(829883),
    u = t(518738),
    d = t(14263),
    m = t(592125),
    f = t(430824),
    _ = t(158776),
    p = t(594174),
    h = t(970184),
    C = t(280501),
    v = t(811654),
    x = t(344991),
    E = t(981631),
    I = t(296555);
function T(e) {
    var n;
    let t = (0, h.CJ)(),
        T = null == t ? void 0 : null === (n = t.message) || void 0 === n ? void 0 : n.getChannelId(),
        g = m.Z.getChannel(T),
        N = f.Z.getGuild(null == g ? void 0 : g.getGuildId()),
        b = (0, d.Z)(null == N ? void 0 : N.id, v.HI),
        S = i.useMemo(() => (0, v.tx)(e.defaultValues, null == N ? void 0 : N.id), [e.defaultValues, N]);
    return (0, l.jsx)(x.ZP, {
        selectActionComponent: e,
        queryOptions: (n) => (0, v._H)(e.type, n, T),
        renderIcon: (e, n) => {
            let t = n === x.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === C.tM.USER) {
                let i = p.default.getUser(e.value);
                if (null == i) return;
                return (0, l.jsx)(a.Avatar, {
                    size: t ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                    src: i.getAvatarURL(null == N ? void 0 : N.id, n),
                    status: t ? null : _.Z.getStatus(i.id),
                    'aria-hidden': !0
                });
            }
            if ((null == e ? void 0 : e.type) === C.tM.ROLE) {
                var i;
                let t = null != N ? f.Z.getRole(N.id, e.value) : void 0;
                if (null == t || null == N) return;
                let o = (0, c._b)(N, t) ? (0, u.Kz)(t, n) : null;
                return null != o
                    ? (0, l.jsx)(s.Z, { ...o })
                    : (0, l.jsx)(a.ShieldUserIcon, {
                          size: 'custom',
                          color: null !== (i = t.colorString) && void 0 !== i ? i : (0, r.Rf)(E.p6O),
                          height: n,
                          width: n
                      });
            }
        },
        renderOptionLabel: (e) => {
            let n = null;
            if (e.type === C.tM.USER) {
                let t = p.default.getUser(e.value);
                null != t &&
                    (n = (0, l.jsx)(o.Z, {
                        className: I.tag,
                        usernameClass: I.username,
                        discriminatorClass: I.discriminator,
                        botClass: I.bot,
                        user: t,
                        forceUsername: !0
                    }));
            } else if (e.type === C.tM.ROLE) {
                let t = null != N ? f.Z.getRole(N.id, e.value) : void 0,
                    i = null == t ? null : null == b ? void 0 : b[t.id];
                null != i &&
                    (n = (0, l.jsxs)('div', {
                        className: I.roleCountContainer,
                        children: [
                            (0, l.jsx)(a.UserIcon, {
                                size: 'sm',
                                color: 'currentColor',
                                className: I.roleCountIcon
                            }),
                            (0, l.jsx)('span', {
                                className: I.roleCountText,
                                children: i
                            })
                        ]
                    }));
            }
            return (0, l.jsxs)('span', {
                className: I.label,
                children: [
                    (0, l.jsx)('span', {
                        className: I.labelText,
                        children: e.label
                    }),
                    n
                ]
            });
        },
        defaultValues: S
    });
}
