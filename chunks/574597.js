t.d(n, {
    Z: function () {
        return I;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(866442),
    a = t(481060),
    o = t(129861),
    s = t(91218),
    c = t(829883),
    u = t(518738),
    d = t(14263),
    m = t(592125),
    f = t(430824),
    p = t(158776),
    x = t(594174),
    h = t(970184),
    v = t(280501),
    _ = t(811654),
    C = t(344991),
    b = t(981631),
    g = t(967831);
function I(e) {
    var n;
    let t = (0, h.CJ)(),
        I = null == t ? void 0 : null === (n = t.message) || void 0 === n ? void 0 : n.getChannelId(),
        j = m.Z.getChannel(I),
        S = f.Z.getGuild(null == j ? void 0 : j.getGuildId()),
        N = (0, d.Z)(null == S ? void 0 : S.id, _.HI),
        T = i.useMemo(() => (0, _.tx)(e.defaultValues, null == S ? void 0 : S.id), [e.defaultValues, S]);
    return (0, l.jsx)(C.ZP, {
        selectActionComponent: e,
        queryOptions: (n) => (0, _._H)(e.type, n, I),
        renderIcon: (e, n) => {
            let t = n === C.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === v.tM.USER) {
                let i = x.default.getUser(e.value);
                if (null == i) return;
                return (0, l.jsx)(a.Avatar, {
                    size: t ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                    src: i.getAvatarURL(null == S ? void 0 : S.id, n),
                    status: t ? null : p.Z.getStatus(i.id),
                    'aria-hidden': !0
                });
            }
            if ((null == e ? void 0 : e.type) === v.tM.ROLE) {
                var i;
                let t = null != S ? f.Z.getRole(S.id, e.value) : void 0;
                if (null == t || null == S) return;
                let o = (0, c._b)(S, t) ? (0, u.Kz)(t, n) : null;
                return null != o
                    ? (0, l.jsx)(s.Z, { ...o })
                    : (0, l.jsx)(a.ShieldUserIcon, {
                          size: 'custom',
                          color: null !== (i = t.colorString) && void 0 !== i ? i : (0, r.Rf)(b.p6O),
                          height: n,
                          width: n
                      });
            }
        },
        renderOptionLabel: (e) => {
            let n = null;
            if (e.type === v.tM.USER) {
                let t = x.default.getUser(e.value);
                null != t &&
                    (n = (0, l.jsx)(o.Z, {
                        className: g.tag,
                        usernameClass: g.username,
                        discriminatorClass: g.discriminator,
                        botClass: g.bot,
                        user: t,
                        forceUsername: !0
                    }));
            } else if (e.type === v.tM.ROLE) {
                let t = null != S ? f.Z.getRole(S.id, e.value) : void 0,
                    i = null == t ? null : null == N ? void 0 : N[t.id];
                null != i &&
                    (n = (0, l.jsxs)('div', {
                        className: g.roleCountContainer,
                        children: [
                            (0, l.jsx)(a.UserIcon, {
                                size: 'sm',
                                color: 'currentColor',
                                className: g.roleCountIcon
                            }),
                            (0, l.jsx)('span', {
                                className: g.roleCountText,
                                children: i
                            })
                        ]
                    }));
            }
            return (0, l.jsxs)('span', {
                className: g.label,
                children: [
                    (0, l.jsx)('span', {
                        className: g.labelText,
                        children: e.label
                    }),
                    n
                ]
            });
        },
        defaultValues: T
    });
}
