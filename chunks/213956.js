n.d(t, {
    Z: function () {
        return x;
    }
});
var s = n(200651),
    a = n(192379),
    i = n(442837),
    r = n(704215),
    l = n(481060),
    o = n(605236),
    c = n(874993),
    d = n(768762),
    u = n(430824),
    _ = n(999382),
    I = n(84613),
    E = n(392885),
    T = n(740903),
    m = n(464610),
    N = n(733629),
    S = n(598622),
    g = n(921944),
    h = n(689938),
    C = n(176981);
function x(e) {
    let t,
        { hideChangelog: n } = e,
        x = (0, i.e7)([_.Z], () => _.Z.getGuildId()),
        p = (0, i.e7)([u.Z], () => u.Z.getGuild(x)),
        R = (0, i.e7)([E.Z], () => E.Z.getCurrentPage());
    if (
        (a.useEffect(() => {
            (0, o.EW)(r.z.COMMUNITY_GUILD_SETTINGS_SAFETY, { dismissAction: g.L.AUTO });
        }, []),
        null == p)
    )
        return null;
    let L = (0, S.Q)(p);
    switch (R) {
        case T.u.OVERVIEW:
            t = (0, s.jsx)(m.Z, {
                guild: p,
                hideChangelog: n
            });
            break;
        case T.u.CAPTCHA_AND_RAID_PROTECTION:
            t = (0, s.jsx)(N.Z, {
                title: h.Z.Messages.GUILD_SETTINGS_SAFETY_CAPTCHA_RAID_PROTECTION,
                settings: L[T.u.CAPTCHA_AND_RAID_PROTECTION]
            });
            break;
        case T.u.DM_AND_SPAM_PROTECTION:
            t = (0, s.jsx)(N.Z, {
                title: h.Z.Messages.GUILD_SETTINGS_SAFETY_DM_SPAM_PROTECTION,
                settings: L[T.u.DM_AND_SPAM_PROTECTION]
            });
            break;
        case T.u.AUTOMOD:
            t = (0, s.jsx)(c.Z, { guildId: p.id });
            break;
        case T.u.PERMISSIONS:
            t = (0, s.jsx)(N.Z, {
                title: h.Z.Messages.GUILD_SETTINGS_SAFETY_PERMISSIONS_TITLE,
                settings: L[T.u.PERMISSIONS]
            });
    }
    return (0, s.jsxs)(s.Fragment, {
        children: [
            R !== T.u.OVERVIEW &&
                (0, s.jsxs)(l.Button, {
                    className: C.back,
                    innerClassName: C.backButton,
                    look: l.Button.Looks.BLANK,
                    size: l.Button.Sizes.MIN,
                    onClick: () => {
                        (0, I.K)(T.u.OVERVIEW);
                    },
                    children: [
                        (0, s.jsx)(d.Z, {
                            className: C.__invalid_arrow,
                            direction: d.Z.Directions.LEFT
                        }),
                        (0, s.jsx)(l.Text, {
                            variant: 'text-sm/semibold',
                            color: 'interactive-normal',
                            children: h.Z.Messages.BACK
                        })
                    ]
                }),
            t
        ]
    });
}
