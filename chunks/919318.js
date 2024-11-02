l.d(n, {
    ZP: function () {
        return H;
    }
}),
    l(47120);
var a = l(200651),
    i = l(192379),
    t = l(120356),
    r = l.n(t),
    s = l(442837),
    d = l(481060),
    c = l(904245),
    o = l(368844),
    u = l(73315),
    h = l(454585),
    m = l(406432),
    g = l(169525),
    x = l(524444),
    C = l(703656),
    f = l(6025),
    v = l(695346),
    I = l(592125),
    Z = l(984933),
    p = l(375954),
    j = l(496675),
    N = l(451478),
    _ = l(768581),
    b = l(526120),
    E = l(689981),
    A = l(825334),
    S = l(981631),
    k = l(388032),
    y = l(147715),
    w = l(554034),
    M = l(931057);
function P(e) {
    let n,
        l,
        { firstMedia: i, channelId: t } = e,
        d = (0, s.e7)([I.Z], () => I.Z.getChannel(t)),
        [c, o] = (0, g.hL)({
            media: i,
            channel: d
        }),
        h = (0, g.MC)(o),
        C = (0, s.e7)([N.Z], () => N.Z.isFocused()),
        f = (0, m.d$)(i.src),
        Z = v.QK.useSetting(),
        { src: p, width: j, height: _, alt: b } = i;
    return (
        _ > j ? (l = 72) : (n = 72),
        (0, a.jsxs)('div', {
            className: y.media,
            children: [
                (0, x.Yi)({
                    src: p,
                    maxHeight: n,
                    maxWidth: l,
                    width: j,
                    height: _,
                    alt: null != b && c && null != h ? h : b,
                    autoPlay: Z,
                    animated: f && !c && C,
                    containerClassName: y.thumbnailContainer,
                    imageClassName: r()({ [y.obscured]: c })
                }),
                c &&
                    (0, a.jsx)(u.Z, {
                        obscureReason: o,
                        iconClassname: y.obscuredTag
                    })
            ]
        })
    );
}
function B(e) {
    let { resource: n } = e,
        l = (0, s.e7)([I.Z], () => I.Z.getChannel(n.channelId)),
        t = (0, s.e7)([p.Z], () => p.Z.getMessages(n.channelId)),
        u = (0, s.e7)([j.Z], () => j.Z.can(S.Plq.VIEW_CHANNEL, l)),
        m = t.first(),
        g = (0, E.Z)(m),
        x = (0, o.zy)(m, !1),
        C = (null == x ? void 0 : x.length) > 0 ? x[0] : null,
        v = null != l && null == t.first() && !t.loadingMore && !t.ready && !t.hasFetched && u;
    i.useEffect(() => {
        v &&
            c.Z.fetchMessages({
                channelId: n.channelId,
                after: n.channelId,
                limit: 5
            });
    }, [n.channelId, v]);
    if (null == l || null == l.guild_id) return null;
    let Z = _.ZP.getResourceChannelIconURL({
            channelId: l.id,
            icon: n.icon
        }),
        N = null == n.description || 0 === n.description.length;
    return (0, a.jsxs)(d.Clickable, {
        className: y.row,
        onClick: (e) => {
            null != l &&
                (e.shiftKey
                    ? (0, b.C3)(l.guild_id, l.id)
                    : f.Z.openResourceChannelAsSidebar({
                          guildId: l.guild_id,
                          channelId: l.id
                      }));
        },
        children: [
            (0, a.jsxs)('div', {
                className: y.content,
                children: [
                    (0, a.jsx)(d.Text, {
                        className: y.title,
                        variant: 'text-md/bold',
                        color: 'header-primary',
                        children: n.title
                    }),
                    N &&
                        null != g &&
                        (0, a.jsx)(d.Text, {
                            className: y.messageContent,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            lineClamp: 3,
                            children: h.Z.parse(g, !0, {
                                guildId: l.guild_id,
                                channelId: l.id
                            })
                        }),
                    !N &&
                        (0, a.jsx)(d.Text, {
                            className: r()(y.messageContent, w.markup),
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            lineClamp: 3,
                            children: h.Z.parse(n.description, !0, {
                                guildId: l.guild_id,
                                channelId: l.id
                            })
                        })
                ]
            }),
            null != n.icon && null != Z
                ? (0, a.jsx)('div', {
                      className: y.media,
                      children: (0, a.jsx)('img', {
                          src: Z,
                          className: y.__invalid_thumbnail,
                          width: 72,
                          height: 72,
                          alt: '',
                          'aria-hidden': !0
                      })
                  })
                : null,
            null == Z && null != C
                ? (0, a.jsx)(P, {
                      firstMedia: C,
                      channelId: n.channelId
                  })
                : null
        ]
    });
}
function H(e) {
    let { guild: n, isNewMember: l } = e,
        i = (0, A.Z)(n.id);
    if (0 === i.length)
        return l
            ? null
            : (0, a.jsxs)('div', {
                  className: y.emptyContainer,
                  children: [
                      (0, a.jsx)(d.Heading, {
                          variant: 'heading-xl/bold',
                          color: 'header-primary',
                          children: k.intl.string(k.t.owvC9f)
                      }),
                      (0, a.jsx)('img', {
                          className: y.emptyStateImage,
                          src: M,
                          alt: ''
                      }),
                      (0, a.jsx)(d.Button, {
                          className: y.emptyStateButton,
                          onClick: () => {
                              let e = Z.ZP.getDefaultChannel(n.id);
                              null != e && (0, C.uL)(S.Z5c.CHANNEL(n.id, e.id));
                          },
                          fullWidth: !0,
                          children: k.intl.string(k.t['3iCBUl'])
                      })
                  ]
              });
    return (0, a.jsxs)('div', {
        className: y.container,
        children: [
            (0, a.jsx)(d.Heading, {
                variant: 'heading-lg/bold',
                color: 'header-primary',
                children: k.intl.string(k.t.xwY4LS)
            }),
            i.map((e) => (0, a.jsx)(B, { resource: e }, e.channelId))
        ]
    });
}
