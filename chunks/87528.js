i.d(t, {
    Z: function () {
        return C;
    }
}),
    i(47120),
    i(724458),
    i(653041);
var n = i(735250),
    a = i(470079),
    r = i(912370),
    s = i(477690),
    o = i(313201),
    l = i(626135),
    c = i(463571),
    d = i(744142),
    u = i(132871),
    h = i(147890),
    _ = i(216547),
    p = i(57716),
    m = i(981631),
    g = i(341151);
function C(e) {
    let {
            collection: t,
            collection: { id: i, title: C, application_directory_collection_items: x }
        } = e,
        [f, I] = a.useState(300),
        [b, N] = a.useState(4),
        v = parseFloat(s.Z.COLLECTION_LIST_CARD_GAP),
        E = (0, u.useApplicationDirectoryHistory)((e) => e.guildId),
        A = (0, p.Z)({ collection: t });
    a.useEffect(() => {
        function e() {
            var e;
            let t = null === (e = A.current) || void 0 === e ? void 0 : e.offsetWidth,
                i = 1;
            return null == t ? 300 : (t >= 500 && (i = 2), t >= 700 && (i = 3), t >= 1000 && (i = 4), N(i), (t - (i - 1) * v) / i);
        }
        let t = A.current;
        if (null == t) return;
        let i = new ResizeObserver(() => {
            I(e());
        });
        return (
            I(e()),
            i.observe(t),
            () => {
                i.disconnect();
            }
        );
    }, [v, A]);
    let T = (0, o.Dt)();
    return (0, n.jsx)('div', {
        ref: A,
        children: (0, n.jsx)(_.Z, {
            header: C,
            headerId: T,
            tileWidth: f,
            tileMargin: v,
            onScroll: (e) => {
                let { tileIndex: t } = e,
                    n = x.slice(t, t + b).reduce((e, t) => {
                        let { type: i, application: n } = t;
                        return i === r.C.APPLICATION && null != n && e.push(n.id), e;
                    }, []);
                l.default.track(m.rMx.APP_DIRECTORY_COLLECTION_SCROLLED, {
                    collection_id: i,
                    offset: t,
                    results: n,
                    guild_id: E
                });
            },
            children: (0, n.jsx)('ul', {
                'aria-labelledby': T,
                className: g.itemsContainer,
                children: x.map((e) => {
                    let { id: t, type: a, application: s } = e;
                    if (a === r.C.APPLICATION && null != s)
                        return (0, n.jsx)(
                            'li',
                            {
                                style: { width: f },
                                className: g.itemContainer,
                                children: (0, n.jsx)(c.Z, {
                                    className: g.seoAnchor,
                                    href: m.Z5c.APPLICATION_DIRECTORY_PROFILE(s.id),
                                    children: (0, n.jsx)(d.Z, {
                                        application: s,
                                        onClick: (e) => {
                                            let { mutualGuilds: t } = e;
                                            l.default.track(m.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                                collection_id: i,
                                                application_id: s.id,
                                                guild_id: E,
                                                shown_mutual_guilds_count: t.length
                                            }),
                                                (0, h.goToApplication)({ applicationId: s.id });
                                        },
                                        animatesOnHover: !0
                                    })
                                })
                            },
                            t
                        );
                })
            })
        })
    });
}
