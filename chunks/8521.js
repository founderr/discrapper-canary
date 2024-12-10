var i = n(200651),
    r = n(192379),
    l = n(949389),
    a = n(63063),
    o = n(324262),
    s = n(981631),
    c = n(388032),
    d = n(511189);
t.Z = (e) => {
    let { guild: t } = e,
        n = r.useCallback(() => {
            (0, l.xm)(t.id);
        }, [t.id]);
    return (0, i.jsx)(o.Z, {
        guild: t,
        onDismissed: n,
        message: c.intl.format(c.t['+QqO3d'], {
            maxMemberCount: t.maxMembers,
            maxMembersUrl: a.Z.getArticleURL(s.BhN.MAX_MEMBERS)
        }),
        type: s.vID.MAX_MEMBER_COUNT,
        image: d,
        imageMarginX: 61
    });
};
