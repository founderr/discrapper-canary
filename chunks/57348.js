i.d(t, {
    Z: function () {
        return x;
    }
});
var n = i(200651);
i(192379);
var a = i(120356),
    r = i.n(a),
    o = i(912370),
    l = i(481060),
    s = i(626135),
    c = i(463571),
    d = i(34674),
    u = i(218864),
    h = i(950854),
    p = i(132871),
    m = i(147890),
    _ = i(57716),
    f = i(981631),
    g = i(867187);
function x(e) {
    let {
            collection: t,
            collection: { id: i, title: a, application_directory_collection_items: x }
        } = e,
        C = (0, _.Z)({ collection: t }),
        b = (0, p.useApplicationDirectoryHistory)((e) => e.guildId);
    return (0, n.jsxs)('div', {
        ref: C,
        children: [
            (0, n.jsx)(l.Heading, {
                variant: 'heading-lg/semibold',
                className: g.header,
                children: a
            }),
            (0, n.jsx)('div', {
                className: g.list,
                children: x.map((e) => {
                    let { id: t, type: a, application: p, image_hash: _, title: x, description: C, call_to_action_label: I, call_to_action_url: v } = e;
                    if (null == _) return;
                    let N = (0, d.$_)({
                        itemId: t,
                        hash: _
                    });
                    return a === o.C.APPLICATION && null != p
                        ? (0, n.jsx)(
                              c.Z,
                              {
                                  href: f.Z5c.APPLICATION_DIRECTORY_PROFILE(p.id),
                                  className: g.item,
                                  children: (0, n.jsx)(u.Z, {
                                      imageSrc: N,
                                      application: p,
                                      onClick: (e) => {
                                          let { mutualGuilds: t } = e;
                                          s.default.track(f.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                              collection_id: i,
                                              application_id: p.id,
                                              guild_id: b,
                                              shown_mutual_guilds_count: t.length
                                          }),
                                              (0, m.goToApplication)({ applicationId: p.id });
                                      },
                                      animatesOnHover: !0
                                  })
                              },
                              t
                          )
                        : a === o.C.LINK && null != x
                          ? (0, n.jsxs)(
                                h.Z,
                                {
                                    className: r()(g.item, g.linkCard),
                                    imageSrc: N,
                                    header: x,
                                    headerClassName: g.cardHeader,
                                    children: [
                                        (0, n.jsx)(l.Text, {
                                            variant: 'text-sm/normal',
                                            className: g.linkDescription,
                                            children: C
                                        }),
                                        (0, n.jsx)(l.Anchor, {
                                            onClick: () => {
                                                s.default.track(f.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                                    collection_id: i,
                                                    link: v,
                                                    guild_id: b,
                                                    shown_mutual_guilds_count: void 0
                                                });
                                            },
                                            href: v,
                                            className: r()((0, l.getButtonStyle)(), g.linkCta),
                                            children: I
                                        })
                                    ]
                                },
                                t
                            )
                          : void 0;
                })
            })
        ]
    });
}
