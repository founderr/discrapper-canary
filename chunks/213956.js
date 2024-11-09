n.d(t, {
    Z: function () {
        return v;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(704215),
    a = n(481060),
    o = n(605236),
    c = n(874993),
    d = n(768762),
    u = n(430824),
    m = n(999382),
    h = n(84613),
    g = n(392885),
    x = n(740903),
    p = n(464610),
    f = n(733629),
    C = n(598622),
    I = n(921944),
    _ = n(388032),
    N = n(176981);
function v(e) {
    let t,
        { hideChangelog: n } = e,
        v = (0, l.e7)([m.Z], () => m.Z.getGuildId()),
        T = (0, l.e7)([u.Z], () => u.Z.getGuild(v)),
        j = (0, l.e7)([g.Z], () => g.Z.getCurrentPage());
    if (
        (r.useEffect(() => {
            (0, o.EW)(s.z.COMMUNITY_GUILD_SETTINGS_SAFETY, { dismissAction: I.L.AUTO });
        }, []),
        null == T)
    )
        return null;
    let S = (0, C.Q)(T);
    switch (j) {
        case x.u.OVERVIEW:
            t = (0, i.jsx)(p.Z, {
                guild: T,
                hideChangelog: n
            });
            break;
        case x.u.CAPTCHA_AND_RAID_PROTECTION:
            t = (0, i.jsx)(f.Z, {
                title: _.intl.string(_.t['53eF5u']),
                settings: S[x.u.CAPTCHA_AND_RAID_PROTECTION]
            });
            break;
        case x.u.DM_AND_SPAM_PROTECTION:
            t = (0, i.jsx)(f.Z, {
                title: _.intl.string(_.t.O0SfFx),
                settings: S[x.u.DM_AND_SPAM_PROTECTION]
            });
            break;
        case x.u.AUTOMOD:
            t = (0, i.jsx)(c.Z, { guildId: T.id });
            break;
        case x.u.PERMISSIONS:
            t = (0, i.jsx)(f.Z, {
                title: _.intl.string(_.t.BXoNiY),
                settings: S[x.u.PERMISSIONS]
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            j !== x.u.OVERVIEW &&
                (0, i.jsxs)(a.Button, {
                    className: N.back,
                    innerClassName: N.backButton,
                    look: a.Button.Looks.BLANK,
                    size: a.Button.Sizes.MIN,
                    onClick: () => {
                        (0, h.K)(x.u.OVERVIEW);
                    },
                    children: [
                        (0, i.jsx)(d.Z, {
                            className: N.__invalid_arrow,
                            direction: d.Z.Directions.LEFT
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-sm/semibold',
                            color: 'interactive-normal',
                            children: _.intl.string(_.t['13/7kZ'])
                        })
                    ]
                }),
            t
        ]
    });
}
