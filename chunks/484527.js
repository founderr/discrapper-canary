n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(643872),
    s = n(442837),
    c = n(481060),
    d = n(570140),
    u = n(652898),
    m = n(93093),
    p = n(768581),
    g = n(810568),
    f = n(981631),
    h = n(388032),
    x = n(561526),
    _ = n(731364);
function E(e) {
    let { detectedGame: t, trackClick: n, onInviteResolved: a } = e,
        [E, v] = i.useState(),
        I = (0, s.e7)([m.Z], () => {
            var e, t;
            return (null == E ? void 0 : null === (e = E.guild) || void 0 === e ? void 0 : e.id) != null && m.Z.isMember(null == E ? void 0 : null === (t = E.guild) || void 0 === t ? void 0 : t.id);
        }),
        C = i.useMemo(() => {
            var e;
            return null === (e = t.websites) || void 0 === e
                ? void 0
                : e.find((e) => {
                      let { category: t } = e;
                      return t === o.p.DISCORD;
                  });
        }, [t.websites]);
    if (
        (i.useEffect(() => {
            let e = async (e) => {
                let t = e.split('/').pop();
                if (null != t) {
                    let e = await (0, u.Z)(t);
                    !0 !== e.banned && (v(e.invite), null != e.invite && (null == a || a(e.invite)));
                }
            };
            null != C && e(C.url);
        }, [C, a]),
        null == E || null == E.guild || (!E.guild.features.includes('VERIFIED') && !E.guild.features.includes('PARTNER')))
    )
        return null;
    let A = p.ZP.getGuildIconURL({
        id: E.guild.id,
        icon: E.guild.icon,
        size: 32
    });
    return (0, r.jsxs)('div', {
        className: x.column,
        children: [
            (0, r.jsx)(c.Heading, {
                className: x.sectionHeader,
                variant: 'text-xs/semibold',
                color: 'header-secondary',
                children: h.intl.string(h.t.kBDZSE)
            }),
            (0, r.jsxs)('div', {
                className: l()(x.row, x.gapMd),
                children: [
                    (0, r.jsx)('img', {
                        className: _.guildIcon,
                        src: A,
                        alt: h.intl.formatToPlainString(h.t.xm6W9P, { guildName: E.guild.name })
                    }),
                    (0, r.jsxs)('div', {
                        className: _.inviteInfo,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: E.guild.name
                            }),
                            null != E.approximate_member_count &&
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-xxs/normal',
                                    children: h.intl.format(h.t.zRl6XV, { count: E.approximate_member_count })
                                })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(c.Button, {
                color: c.ButtonColors.PRIMARY,
                onClick: () => {
                    n(g.as.JoinOfficialServer),
                        d.Z.dispatch({
                            type: 'INVITE_MODAL_OPEN',
                            invite: E,
                            code: E.code,
                            context: f.IlC.APP
                        });
                },
                children: I ? h.intl.string(h.t.cEnaW1) : h.intl.string(h.t.XpeFYm)
            })
        ]
    });
}
