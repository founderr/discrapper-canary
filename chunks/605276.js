var a = l(200651),
    i = l(192379),
    t = l(399606),
    r = l(481060),
    s = l(904245),
    d = l(368844),
    c = l(249842),
    o = l(838367),
    u = l(6025),
    h = l(592125),
    m = l(375954),
    g = l(496675),
    x = l(768581),
    C = l(526120),
    f = l(825334),
    v = l(981631),
    I = l(388032),
    Z = l(469085);
let p = i.memo(function (e) {
        let { guild: n } = e,
            l = (0, t.e7)([o.Z], () => o.Z.getGuild(n.id), [n]);
        return (
            i.useEffect(() => {
                null == l && (0, c.P)(n.id);
            }, [n.id, l]),
            (0, a.jsx)('div', {
                className: Z.sidebarCardWrapper,
                children: (0, a.jsxs)('div', {
                    className: Z.sidebarCard,
                    children: [
                        (0, a.jsx)(r.Heading, {
                            className: Z.sidebarCardHeader,
                            variant: 'heading-md/bold',
                            color: 'header-primary',
                            children: I.intl.string(I.t['6YriCA'])
                        }),
                        (0, a.jsx)(r.Text, {
                            className: Z.guildDescription,
                            variant: 'text-md/normal',
                            color: 'text-normal',
                            children: n.description
                        }),
                        (0, a.jsx)('div', {
                            className: Z.guildInfo,
                            children:
                                (null == l ? void 0 : l.memberCount) != null &&
                                (null == l ? void 0 : l.presenceCount) != null &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)('div', { className: Z.dotOnline }),
                                        (0, a.jsx)(r.Text, {
                                            className: Z.guildInfoText,
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: I.intl.format(I.t.QAdRCw, {
                                                online: null == l ? void 0 : l.presenceCount,
                                                total: null == l ? void 0 : l.memberCount
                                            })
                                        })
                                    ]
                                })
                        })
                    ]
                })
            })
        );
    }),
    j = (e) => {
        let { channelId: n, title: l, icon: c } = e,
            o = (0, t.e7)([h.Z], () => h.Z.getChannel(n)),
            f = (0, t.e7)([m.Z], () => m.Z.getMessages(n)),
            I = (0, t.e7)([g.Z], () => g.Z.can(v.Plq.VIEW_CHANNEL, o)),
            p = f.first(),
            j = (0, d.zy)(p, !1),
            N = (null == j ? void 0 : j.length) > 0 ? j[0] : null,
            _ = null != o && null == p && !f.loadingMore && !f.ready && !f.hasFetched && I;
        i.useEffect(() => {
            _ &&
                s.Z.fetchMessages({
                    channelId: n,
                    after: n,
                    limit: 5
                });
        }, [n, _]);
        let b = (e) => {
            null != o &&
                (e.shiftKey
                    ? (0, C.C3)(o.guild_id, o.id)
                    : u.Z.openResourceChannelAsSidebar({
                          guildId: o.guild_id,
                          channelId: o.id
                      }));
        };
        return (0, a.jsx)(
            r.Clickable,
            {
                className: Z.resourceChannel,
                onClick: (e) => b(e),
                children: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (() => {
                            let e = x.ZP.getResourceChannelIconURL({
                                channelId: n,
                                icon: c
                            });
                            return null != c && null != e
                                ? (0, a.jsx)('img', {
                                      src: e,
                                      className: Z.resourceImage,
                                      alt: '',
                                      'aria-hidden': !0
                                  })
                                : null != N
                                  ? (0, a.jsx)('img', {
                                        className: Z.resourceImage,
                                        src: N.src,
                                        alt: N.alt
                                    })
                                  : (0, a.jsx)('div', {
                                        className: Z.placeholderImage,
                                        children: (0, a.jsx)(r.PaperIcon, {
                                            size: 'xs',
                                            color: 'currentColor'
                                        })
                                    });
                        })(),
                        (0, a.jsx)(r.Text, {
                            className: Z.guildInfoText,
                            variant: 'text-sm/semibold',
                            color: 'none',
                            children: l
                        })
                    ]
                })
            },
            n
        );
    },
    N = i.memo(function (e) {
        let { guild: n } = e,
            l = (0, f.Z)(n.id);
        return 0 === l.length
            ? null
            : (0, a.jsx)('div', {
                  className: Z.sidebarCardWrapper,
                  children: (0, a.jsxs)('div', {
                      className: Z.sidebarCard,
                      children: [
                          (0, a.jsx)(r.Heading, {
                              className: Z.sidebarCardHeader,
                              variant: 'heading-md/bold',
                              color: 'header-primary',
                              children: I.intl.string(I.t.xwY4LS)
                          }),
                          (0, a.jsx)('div', {
                              className: Z.resourceChannelsList,
                              children: l.map((e) =>
                                  (0, a.jsx)(
                                      j,
                                      {
                                          channelId: e.channelId,
                                          title: e.title,
                                          icon: e.icon
                                      },
                                      'widget-resource-'.concat(e.channelId)
                                  )
                              )
                          })
                      ]
                  })
              });
    }),
    _ = i.memo(function (e) {
        let { guild: n, isNewMember: l } = e;
        return (0, a.jsxs)('aside', {
            className: Z.sidebar,
            children: [(0, a.jsx)(p, { guild: n }), l && (0, a.jsx)(N, { guild: n })]
        });
    });
n.Z = _;
