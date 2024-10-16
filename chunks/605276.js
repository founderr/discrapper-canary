var a = l(735250),
    i = l(470079),
    r = l(399606),
    t = l(481060),
    s = l(904245),
    d = l(368844),
    c = l(249842),
    o = l(838367),
    u = l(6025),
    h = l(592125),
    m = l(375954),
    g = l(496675),
    C = l(768581),
    x = l(526120),
    f = l(825334),
    I = l(981631),
    v = l(689938),
    _ = l(469085);
let Z = i.memo(function (e) {
        let { guild: n } = e,
            l = (0, r.e7)([o.Z], () => o.Z.getGuild(n.id), [n]);
        return (
            i.useEffect(() => {
                null == l && (0, c.P)(n.id);
            }, [n.id, l]),
            (0, a.jsx)('div', {
                className: _.sidebarCardWrapper,
                children: (0, a.jsxs)('div', {
                    className: _.sidebarCard,
                    children: [
                        (0, a.jsx)(t.Heading, {
                            className: _.sidebarCardHeader,
                            variant: 'heading-md/bold',
                            color: 'header-primary',
                            children: v.Z.Messages.GUILD_HOME_ABOUT
                        }),
                        (0, a.jsx)(t.Text, {
                            className: _.guildDescription,
                            variant: 'text-md/normal',
                            color: 'text-normal',
                            children: n.description
                        }),
                        (0, a.jsx)('div', {
                            className: _.guildInfo,
                            children:
                                (null == l ? void 0 : l.memberCount) != null &&
                                (null == l ? void 0 : l.presenceCount) != null &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)('div', { className: _.dotOnline }),
                                        (0, a.jsx)(t.Text, {
                                            className: _.guildInfoText,
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: v.Z.Messages.GUILD_ONBOARDING_HOME_GUILD_MEMBERS_RATIO.format({
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
    N = (e) => {
        let { channelId: n, title: l, icon: c } = e,
            o = (0, r.e7)([h.Z], () => h.Z.getChannel(n)),
            f = (0, r.e7)([m.Z], () => m.Z.getMessages(n)),
            v = (0, r.e7)([g.Z], () => g.Z.can(I.Plq.VIEW_CHANNEL, o)),
            Z = f.first(),
            N = (0, d.zy)(Z, !1),
            j = (null == N ? void 0 : N.length) > 0 ? N[0] : null,
            p = null != o && null == Z && !f.loadingMore && !f.ready && !f.hasFetched && v;
        i.useEffect(() => {
            p &&
                s.Z.fetchMessages({
                    channelId: n,
                    after: n,
                    limit: 5
                });
        }, [n, p]);
        let b = (e) => {
            null != o &&
                (e.shiftKey
                    ? (0, x.C3)(o.guild_id, o.id)
                    : u.Z.openResourceChannelAsSidebar({
                          guildId: o.guild_id,
                          channelId: o.id
                      }));
        };
        return (0, a.jsx)(
            t.Clickable,
            {
                className: _.resourceChannel,
                onClick: (e) => b(e),
                children: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (() => {
                            let e = C.ZP.getResourceChannelIconURL({
                                channelId: n,
                                icon: c
                            });
                            return null != c && null != e
                                ? (0, a.jsx)('img', {
                                      src: e,
                                      className: _.resourceImage,
                                      alt: '',
                                      'aria-hidden': !0
                                  })
                                : null != j
                                  ? (0, a.jsx)('img', {
                                        className: _.resourceImage,
                                        src: j.src,
                                        alt: j.alt
                                    })
                                  : (0, a.jsx)('div', {
                                        className: _.placeholderImage,
                                        children: (0, a.jsx)(t.PaperIcon, {
                                            size: 'xs',
                                            color: 'currentColor'
                                        })
                                    });
                        })(),
                        (0, a.jsx)(t.Text, {
                            className: _.guildInfoText,
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
    j = i.memo(function (e) {
        let { guild: n } = e,
            l = (0, f.Z)(n.id);
        return 0 === l.length
            ? null
            : (0, a.jsx)('div', {
                  className: _.sidebarCardWrapper,
                  children: (0, a.jsxs)('div', {
                      className: _.sidebarCard,
                      children: [
                          (0, a.jsx)(t.Heading, {
                              className: _.sidebarCardHeader,
                              variant: 'heading-md/bold',
                              color: 'header-primary',
                              children: v.Z.Messages.GUILD_HOME_RESOURCES
                          }),
                          (0, a.jsx)('div', {
                              className: _.resourceChannelsList,
                              children: l.map((e) =>
                                  (0, a.jsx)(
                                      N,
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
    p = i.memo(function (e) {
        let { guild: n, isNewMember: l } = e;
        return (0, a.jsxs)('aside', {
            className: _.sidebar,
            children: [(0, a.jsx)(Z, { guild: n }), l && (0, a.jsx)(j, { guild: n })]
        });
    });
n.Z = p;
