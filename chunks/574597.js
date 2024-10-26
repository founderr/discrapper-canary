t.d(n, {
    Z: function () {
        return N;
    }
});
var l = t(200651),
    i = t(192379),
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
    x = t(344991),
    E = t(981631),
    T = t(967831);
function N(e) {
    var n;
    let t = (0, C.CJ)(),
        N = null == t ? void 0 : null === (n = t.message) || void 0 === n ? void 0 : n.getChannelId(),
        v = m.Z.getChannel(N),
        b = _.Z.getGuild(null == v ? void 0 : v.getGuildId()),
        g = (0, d.Z)(null == b ? void 0 : b.id, I.HI),
        S = i.useMemo(() => (0, I.tx)(e.defaultValues, null == b ? void 0 : b.id), [e.defaultValues, b]);
    return (0, l.jsx)(x.ZP, {
        selectActionComponent: e,
        queryOptions: (n) => (0, I._H)(e.type, n, N),
        renderIcon: (e, n) => {
            let t = n === x.tE.PILL_ICON_SIZE;
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
                          color: null !== (i = t.colorString) && void 0 !== i ? i : (0, a.Rf)(E.p6O),
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
                        className: T.tag,
                        usernameClass: T.username,
                        discriminatorClass: T.discriminator,
                        botClass: T.bot,
                        user: t,
                        forceUsername: !0
                    }));
            } else if (e.type === h.tM.ROLE) {
                let t = null != b ? _.Z.getRole(b.id, e.value) : void 0,
                    i = null == t ? null : null == g ? void 0 : g[t.id];
                null != i &&
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
                                children: i
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
