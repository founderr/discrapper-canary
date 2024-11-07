i.d(t, {
    Z: function () {
        return v;
    }
}),
    i(47120);
var n = i(200651),
    a = i(192379),
    r = i(120356),
    o = i.n(r),
    l = i(912370),
    s = i(477690),
    c = i(481060),
    d = i(453499),
    u = i(626135),
    h = i(463571),
    p = i(34674),
    m = i(132871),
    _ = i(147890),
    f = i(409425),
    g = i(57716),
    x = i(981631),
    C = i(388032),
    b = i(495161);
function I(e) {
    let { collectionTitle: t, title: i, description: a, handleClick: r, imageSrc: l, ctaLabel: s, ctaLink: d, applicationId: u } = e,
        p = '936929561302675456' === u,
        m =
            null == u
                ? (0, n.jsx)(c.Button, {
                      className: b.applicationCta,
                      onClick: r,
                      children: s
                  })
                : (0, n.jsx)(h.Z, {
                      href: x.Z5c.APPLICATION_DIRECTORY_PROFILE(u),
                      children: (0, n.jsx)(c.Button, {
                          className: b.applicationCta,
                          onClick: r,
                          children: s
                      })
                  });
    return (0, n.jsxs)('div', {
        className: b.card,
        children: [
            (0, n.jsx)('div', {
                className: b.textContainer,
                children: (0, n.jsxs)('div', {
                    className: b.verticallyCenter,
                    children: [
                        (0, n.jsx)(c.Text, {
                            className: b.collectionTitle,
                            tag: 'span',
                            color: 'header-secondary',
                            variant: 'heading-deprecated-12/semibold',
                            children: t
                        }),
                        (0, n.jsxs)(c.Heading, {
                            className: b.applicationName,
                            variant: 'heading-xxl/medium',
                            children: [i, ' ', p && (0, n.jsx)(f.Z, {})]
                        }),
                        (0, n.jsx)(c.Text, {
                            className: b.applicationDescription,
                            variant: 'text-md/normal',
                            lineClamp: 3,
                            children: a
                        }),
                        null == d
                            ? m
                            : (0, n.jsx)(c.Anchor, {
                                  onClick: r,
                                  href: d,
                                  className: o()((0, c.getButtonStyle)({ grow: !1 }), b.applicationCta),
                                  children: s
                              })
                    ]
                })
            }),
            (0, n.jsx)('div', {
                className: b.imageContainer,
                children: (0, n.jsx)('img', {
                    alt: i,
                    className: b.image,
                    src: l
                })
            })
        ]
    });
}
function v(e) {
    let {
            collection: t,
            collection: { id: i, title: r, application_directory_collection_items: c }
        } = e,
        h = (0, g.Z)({ collection: t }),
        [f, v] = a.useState(),
        N = (0, m.useApplicationDirectoryHistory)((e) => e.guildId);
    return (
        a.useEffect(() => {
            let e = null == h ? void 0 : h.current;
            if (null == e) return;
            let t = new ResizeObserver(() => {
                let t = document.body.offsetWidth < parseFloat(s.Z.COLLECTION_GALLERY_MEDIA_BREAKPOINT) ? parseFloat(s.Z.COLLECTION_GALLERY_COLUMN_CARD_HEIGHT) : parseFloat(s.Z.COLLECTION_GALLERY_ROW_CARD_HEIGHT);
                v(e.offsetWidth / t);
            });
            return (
                t.observe(document.body),
                () => {
                    t.disconnect();
                }
            );
        }, [h]),
        (0, n.jsx)('article', {
            ref: h,
            className: o()({ [b.collectionBottomMargin]: c.length <= 1 }),
            children: (0, n.jsx)(d.Z, {
                aspectRatio: f,
                themedPagination: !0,
                paginationClassName: b.paginationControls,
                paginationArrowClassName: b.paginationArrow,
                items: c,
                onChangeItem: (e, t, n) => {
                    let { application: a } = e;
                    null != a &&
                        u.default.track(x.rMx.APP_DIRECTORY_COLLECTION_SCROLLED, {
                            collection_id: i,
                            offset: n,
                            results: [a.id],
                            guild_id: N
                        });
                },
                renderItem: (e) => {
                    let { id: t, image_hash: a, application: o, type: s, description: c, title: d, call_to_action_label: h, call_to_action_url: m } = e;
                    if (null == a) return;
                    let f = (0, p.$_)({
                        itemId: t,
                        hash: a
                    });
                    if (s === l.C.APPLICATION && null != o) {
                        var g, b;
                        return (0, n.jsx)(I, {
                            collectionTitle: r,
                            title: o.name,
                            description: null !== (b = null === (g = o.directory_entry) || void 0 === g ? void 0 : g.short_description) && void 0 !== b ? b : o.description,
                            handleClick: () => {
                                u.default.track(x.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                    collection_id: i,
                                    application_id: o.id,
                                    guild_id: N,
                                    shown_mutual_guilds_count: void 0
                                }),
                                    (0, _.goToApplication)({ applicationId: o.id });
                            },
                            imageSrc: f,
                            ctaLabel: C.intl.string(C.t.xKUoVl),
                            applicationId: o.id
                        });
                    }
                    if (s === l.C.LINK && null != d && null != m && null != h)
                        return (0, n.jsx)(I, {
                            collectionTitle: r,
                            title: d,
                            description: c,
                            handleClick: () => {
                                u.default.track(x.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                    collection_id: i,
                                    link: m,
                                    guild_id: N,
                                    shown_mutual_guilds_count: void 0
                                });
                            },
                            imageSrc: f,
                            ctaLabel: h,
                            ctaLink: m
                        });
                }
            })
        })
    );
}
