n.d(t, {
    Z: function () {
        return A;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(866442),
    o = n(481060),
    s = n(129861),
    l = n(91218),
    u = n(829883),
    c = n(518738),
    d = n(14263),
    _ = n(592125),
    E = n(430824),
    f = n(158776),
    h = n(594174),
    p = n(970184),
    m = n(280501),
    I = n(811654),
    T = n(344991),
    g = n(981631),
    S = n(967831);
function A(e) {
    var t;
    let n = (0, p.CJ)(),
        A = null == n ? void 0 : null === (t = n.message) || void 0 === t ? void 0 : t.getChannelId(),
        v = _.Z.getChannel(A),
        N = E.Z.getGuild(null == v ? void 0 : v.getGuildId()),
        O = (0, d.Z)(null == N ? void 0 : N.id, I.HI),
        R = (t) => (0, I._H)(e.type, t, A),
        C = (e, t) => {
            let n = t === T.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === m.tM.USER) {
                let i = h.default.getUser(e.value);
                if (null == i) return;
                return (0, r.jsx)(o.Avatar, {
                    size: n ? o.AvatarSizes.SIZE_16 : o.AvatarSizes.SIZE_24,
                    src: i.getAvatarURL(null == N ? void 0 : N.id, t),
                    status: n ? null : f.Z.getStatus(i.id),
                    'aria-hidden': !0
                });
            }
            if ((null == e ? void 0 : e.type) === m.tM.ROLE) {
                var i;
                let n = null != N ? E.Z.getRole(N.id, e.value) : void 0;
                if (null == n || null == N) return;
                let s = (0, u._b)(N, n) ? (0, c.Kz)(n, t) : null;
                return null != s
                    ? (0, r.jsx)(l.Z, { ...s })
                    : (0, r.jsx)(o.ShieldUserIcon, {
                          size: 'custom',
                          color: null !== (i = n.colorString) && void 0 !== i ? i : (0, a.Rf)(g.p6O),
                          height: t,
                          width: t
                      });
            }
        },
        y = (e) => {
            let t = null;
            if (e.type === m.tM.USER) {
                let n = h.default.getUser(e.value);
                null != n &&
                    (t = (0, r.jsx)(s.Z, {
                        className: S.tag,
                        usernameClass: S.username,
                        discriminatorClass: S.discriminator,
                        botClass: S.bot,
                        user: n,
                        forceUsername: !0
                    }));
            } else if (e.type === m.tM.ROLE) {
                let n = null != N ? E.Z.getRole(N.id, e.value) : void 0,
                    i = null == n ? null : null == O ? void 0 : O[n.id];
                null != i &&
                    (t = (0, r.jsxs)('div', {
                        className: S.roleCountContainer,
                        children: [
                            (0, r.jsx)(o.UserIcon, {
                                size: 'sm',
                                color: 'currentColor',
                                className: S.roleCountIcon
                            }),
                            (0, r.jsx)('span', {
                                className: S.roleCountText,
                                children: i
                            })
                        ]
                    }));
            }
            return (0, r.jsxs)('span', {
                className: S.label,
                children: [
                    (0, r.jsx)('span', {
                        className: S.labelText,
                        children: e.label
                    }),
                    t
                ]
            });
        },
        b = i.useMemo(() => (0, I.tx)(e.defaultValues, null == N ? void 0 : N.id), [e.defaultValues, N]);
    return (0, r.jsx)(T.ZP, {
        selectActionComponent: e,
        queryOptions: R,
        renderIcon: C,
        renderOptionLabel: y,
        defaultValues: b
    });
}
