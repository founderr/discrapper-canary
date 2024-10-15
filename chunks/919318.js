l.d(n, {
    ZP: function () {
        return B;
    }
}),
    l(47120);
var a = l(735250),
    i = l(470079),
    r = l(120356),
    t = l.n(r),
    s = l(442837),
    d = l(481060),
    c = l(904245),
    o = l(368844),
    u = l(73315),
    h = l(454585),
    m = l(406432),
    g = l(169525),
    C = l(524444),
    x = l(703656),
    f = l(6025),
    I = l(695346),
    v = l(592125),
    _ = l(984933),
    Z = l(375954),
    N = l(496675),
    j = l(451478),
    p = l(768581),
    b = l(526120),
    E = l(689981),
    M = l(825334),
    A = l(981631),
    S = l(689938),
    T = l(147715),
    R = l(554034),
    P = l(931057);
function k(e) {
    let n,
        l,
        { firstMedia: i, channelId: r } = e,
        d = (0, s.e7)([v.Z], () => v.Z.getChannel(r)),
        [c, o] = (0, g.hL)({
            media: i,
            channel: d
        }),
        h = (0, g.MC)(o),
        x = (0, s.e7)([j.Z], () => j.Z.isFocused()),
        f = (0, m.d$)(i.src),
        _ = I.QK.useSetting(),
        { src: Z, width: N, height: p, alt: b } = i;
    return (
        p > N ? (l = 72) : (n = 72),
        (0, a.jsxs)('div', {
            className: T.media,
            children: [
                (0, C.Yi)({
                    src: Z,
                    maxHeight: n,
                    maxWidth: l,
                    width: N,
                    height: p,
                    alt: null != b && c && null != h ? h : b,
                    autoPlay: _,
                    animated: f && !c && x,
                    containerClassName: T.thumbnailContainer,
                    imageClassName: t()({ [T.obscured]: c })
                }),
                c &&
                    (0, a.jsx)(u.Z, {
                        obscureReason: o,
                        iconClassname: T.obscuredTag
                    })
            ]
        })
    );
}
function y(e) {
    let { resource: n } = e,
        l = (0, s.e7)([v.Z], () => v.Z.getChannel(n.channelId)),
        r = (0, s.e7)([Z.Z], () => Z.Z.getMessages(n.channelId)),
        u = (0, s.e7)([N.Z], () => N.Z.can(A.Plq.VIEW_CHANNEL, l)),
        m = r.first(),
        g = (0, E.Z)(m),
        C = (0, o.zy)(m, !1),
        x = (null == C ? void 0 : C.length) > 0 ? C[0] : null,
        I = null != l && null == r.first() && !r.loadingMore && !r.ready && !r.hasFetched && u;
    i.useEffect(() => {
        I &&
            c.Z.fetchMessages({
                channelId: n.channelId,
                after: n.channelId,
                limit: 5
            });
    }, [n.channelId, I]);
    if (null == l || null == l.guild_id) return null;
    let _ = p.ZP.getResourceChannelIconURL({
            channelId: l.id,
            icon: n.icon
        }),
        j = null == n.description || 0 === n.description.length;
    return (0, a.jsxs)(d.Clickable, {
        className: T.row,
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
                className: T.content,
                children: [
                    (0, a.jsx)(d.Text, {
                        className: T.title,
                        variant: 'text-md/bold',
                        color: 'header-primary',
                        children: n.title
                    }),
                    j &&
                        null != g &&
                        (0, a.jsx)(d.Text, {
                            className: T.messageContent,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            lineClamp: 3,
                            children: h.Z.parse(g, !0, {
                                guildId: l.guild_id,
                                channelId: l.id
                            })
                        }),
                    !j &&
                        (0, a.jsx)(d.Text, {
                            className: t()(T.messageContent, R.markup),
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
            null != n.icon && null != _
                ? (0, a.jsx)('div', {
                      className: T.media,
                      children: (0, a.jsx)('img', {
                          src: _,
                          className: T.__invalid_thumbnail,
                          width: 72,
                          height: 72,
                          alt: '',
                          'aria-hidden': !0
                      })
                  })
                : null,
            null == _ && null != x
                ? (0, a.jsx)(k, {
                      firstMedia: x,
                      channelId: n.channelId
                  })
                : null
        ]
    });
}
function B(e) {
    let { guild: n, isNewMember: l } = e,
        i = (0, M.Z)(n.id);
    if (0 === i.length)
        return l
            ? null
            : (0, a.jsxs)('div', {
                  className: T.emptyContainer,
                  children: [
                      (0, a.jsx)(d.Heading, {
                          variant: 'heading-xl/bold',
                          color: 'header-primary',
                          children: S.Z.Messages.MEMBER_ACTION_COMPLETE_EMPTY_STATE
                      }),
                      (0, a.jsx)('img', {
                          className: T.emptyStateImage,
                          src: P,
                          alt: ''
                      }),
                      (0, a.jsx)(d.Button, {
                          className: T.emptyStateButton,
                          onClick: () => {
                              let e = _.ZP.getDefaultChannel(n.id);
                              null != e && (0, x.uL)(A.Z5c.CHANNEL(n.id, e.id));
                          },
                          fullWidth: !0,
                          children: S.Z.Messages.MEMBER_ACTION_COMPLETE_EMPTY_STATE_CTA
                      })
                  ]
              });
    return (0, a.jsxs)('div', {
        className: T.container,
        children: [
            (0, a.jsx)(d.Heading, {
                variant: 'heading-lg/bold',
                color: 'header-primary',
                children: S.Z.Messages.GUILD_HOME_RESOURCES
            }),
            i.map((e) => (0, a.jsx)(y, { resource: e }, e.channelId))
        ]
    });
}
