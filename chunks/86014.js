var i = n(735250),
    a = n(470079),
    s = n(143927),
    r = n(481060),
    l = n(100527),
    o = n(970606),
    c = n(374939),
    d = n(901040),
    u = n(207796),
    _ = n(895068),
    h = n(689938),
    E = n(266489);
t.Z = a.memo(function (e) {
    let { width: t, paddingVertical: n = 16, paddingHorizontal: m = 32, variant: I = _.Bj.DEFAULT, onScroll: g } = e,
        p = a.useRef(null),
        T = (0, u.GN)((e) => e.completedNux, s.Z),
        f = a.useCallback(() => {
            var e;
            null === (e = p.current) || void 0 === e || e.scrollToTop();
        }, []);
    return (0, i.jsx)(c.Z, {
        ref: p,
        title: (0, i.jsx)(r.Text, {
            className: E.globalDiscoveryTitle,
            variant: 'display-lg',
            color: 'header-primary',
            children: h.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_TITLE_2.format({})
        }),
        description: h.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
        button: T
            ? null
            : (0, i.jsx)('div', {
                  children: (0, i.jsx)(r.Button, {
                      look: r.ButtonLooks.FILLED,
                      size: r.ButtonSizes.MEDIUM,
                      className: E.heroButton,
                      onClick: () => {
                          (0, o.GS)({ location: l.Z.GLOBAL_DISCOVERY }), (0, u.fH)(u.v0.GET_STARTED);
                      },
                      children: (0, i.jsx)(r.Text, {
                          variant: 'text-sm/medium',
                          color: 'always-white',
                          children: h.Z.Messages.CLAN_DISCOVERY_UPSELL_USER_CTA
                      })
                  })
              }),
        bannerBackground: (0, i.jsx)(d.Z, {}),
        onScroll: g,
        children: (0, i.jsx)(_.ZP, {
            width: t,
            onUpdatePage: f,
            paddingHorizontal: m,
            paddingVertical: n,
            variant: I
        })
    });
});
