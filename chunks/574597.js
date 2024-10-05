t.d(n, {
    Z: function () {
        return T;
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
    _ = t(430824),
    f = t(158776),
    p = t(594174),
    C = t(970184),
    h = t(280501),
    I = t(811654),
    E = t(344991),
    x = t(981631),
    v = t(967831);
function T(e) {
    var n;
    let t = (0, C.CJ)(),
        T = null == t ? void 0 : null === (n = t.message) || void 0 === n ? void 0 : n.getChannelId(),
        N = m.Z.getChannel(T),
        b = _.Z.getGuild(null == N ? void 0 : N.getGuildId()),
        g = (0, d.Z)(null == b ? void 0 : b.id, I.HI),
        S = i.useMemo(() => (0, I.tx)(e.defaultValues, null == b ? void 0 : b.id), [e.defaultValues, b]);
    return (0, l.jsx)(E.ZP, {
        selectActionComponent: e,
        queryOptions: (n) => (0, I._H)(e.type, n, T),
        renderIcon: (e, n) => {
            let t = n === E.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === h.tM.USER) {
                let i = p.default.getUser(e.value);
                if (null == i) return;
                return (0, l.jsx)(r.Avatar, {
                    size: t ? r.AvatarSizes.SIZE_16 : r.AvatarSizes.SIZE_24,
                    src: i.getAvatarURL(null == b ? void 0 : b.id, n),
                    status: t ? null : f.Z.getStatus(i.id),
                    'aria-hidden': !0
                });
            }
            if ((null == e ? void 0 : e.type) === h.tM.ROLE) {
                var i;
                let t = null != b ? _.Z.getRole(b.id, e.value) : void 0;
                if (null == t || null == b) return;
                let o = (0, c._b)(b, t) ? (0, u.Kz)(t, n) : null;
                return null != o
                    ? (0, l.jsx)(s.Z, { ...o })
                    : (0, l.jsx)(r.ShieldUserIcon, {
                          size: 'custom',
                          color: null !== (i = t.colorString) && void 0 !== i ? i : (0, a.Rf)(x.p6O),
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
                        className: v.tag,
                        usernameClass: v.username,
                        discriminatorClass: v.discriminator,
                        botClass: v.bot,
                        user: t,
                        forceUsername: !0
                    }));
            } else if (e.type === h.tM.ROLE) {
                let t = null != b ? _.Z.getRole(b.id, e.value) : void 0,
                    i = null == t ? null : null == g ? void 0 : g[t.id];
                null != i &&
                    (n = (0, l.jsxs)('div', {
                        className: v.roleCountContainer,
                        children: [
                            (0, l.jsx)(r.UserIcon, {
                                size: 'sm',
                                color: 'currentColor',
                                className: v.roleCountIcon
                            }),
                            (0, l.jsx)('span', {
                                className: v.roleCountText,
                                children: i
                            })
                        ]
                    }));
            }
            return (0, l.jsxs)('span', {
                className: v.label,
                children: [
                    (0, l.jsx)('span', {
                        className: v.labelText,
                        children: e.label
                    }),
                    n
                ]
            });
        },
        defaultValues: S
    });
}
