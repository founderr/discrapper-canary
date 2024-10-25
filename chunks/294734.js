n.d(t, {
    Z: function () {
        return Z;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(793030),
    r = n(442837),
    l = n(902704),
    o = n(692547),
    c = n(481060),
    u = n(356264),
    d = n(628238),
    _ = n(930282),
    E = n(25015),
    I = n(438075),
    m = n(695346),
    f = n(592125),
    T = n(906467),
    h = n(430824),
    N = n(496675),
    p = n(699516),
    C = n(594174),
    g = n(100604),
    S = n(694784),
    A = n(39154),
    x = n(245216),
    R = n(689938),
    v = n(85961);
function O() {
    return (0, i.jsxs)('div', {
        className: v.headerContainer,
        children: [
            (0, i.jsx)(x.Z, {
                size: 'xs',
                className: v.headerIcon,
                color: o.Z.colors.TEXT_LOW_CONTRAST
            }),
            (0, i.jsx)(s.xv, {
                className: v.headerText,
                variant: 'text-sm/semibold',
                color: 'text-low-contrast',
                children: R.Z.Messages.MESSAGE_FORWARDED
            })
        ]
    });
}
function M(e) {
    let { message: t, snapshot: n, index: d } = e,
        _ = a.useMemo(() => new g.r(t, n, d), [t, n, d]),
        E = (0, r.e7)([f.Z, C.default, p.Z, N.Z, h.Z, u.Z], () => _.getForwardInfo(f.Z, C.default, p.Z, N.Z, h.Z, u.Z).footerInfo, [_], l.Z),
        I = a.useCallback(() => {
            (0, S.Z)(t);
        }, [t]);
    return null == E
        ? null
        : (0, i.jsxs)(c.Clickable, {
              className: v.footerContainer,
              onClick: I,
              children: [
                  null != E.originIconUrl
                      ? (0, i.jsx)('img', {
                            className: v.originIcon,
                            src: E.originIconUrl,
                            alt: ''
                        })
                      : null,
                  (0, i.jsx)(s.xv, {
                      className: v.footerText,
                      variant: 'text-sm/medium',
                      color: 'none',
                      children: ''.concat(E.originLabel, '  \u2022  ').concat(E.timestampLabel)
                  }),
                  (0, i.jsx)(c.ChevronSmallRightIcon, {
                      size: 'xxs',
                      color: o.Z.colors.TEXT_LOW_CONTRAST
                  })
              ]
          });
}
function L(e) {
    var t;
    let { message: n, snapshot: s, index: l } = e,
        o = a.useMemo(() => (0, A.Z)(n, s), [n, s]),
        c = m.RS.useSetting(),
        u = m.NA.useSetting(),
        h = (0, r.e7)([T.Z], () => T.Z.isDeveloper),
        N = (0, d.A)((null !== (t = o.editedTimestamp) && void 0 !== t ? t : o.timestamp).valueOf()),
        { content: p, hasSpoilerEmbeds: C } = (0, E.Z)(o, {
            hideSimpleEmbedContent: c && u,
            isInteracting: !1,
            formatInline: !1,
            allowList: N,
            allowHeading: N,
            allowLinks: !0,
            allowDevLinks: h,
            previewLinkTarget: !0
        }),
        g = (0, r.e7)([f.Z], () => f.Z.getChannel(n.channel_id)),
        S = m.jU.useSetting();
    return null == g
        ? null
        : (0, i.jsxs)(
              'div',
              {
                  className: v.container,
                  children: [
                      (0, i.jsx)('div', { className: v.quote }),
                      (0, i.jsxs)('div', {
                          className: v.content,
                          children: [
                              (0, i.jsx)(O, {}),
                              (0, i.jsx)(_.ZP, {
                                  message: o,
                                  content: p
                              }),
                              (0, I.Z)({
                                  channelMessageProps: {
                                      message: o,
                                      channel: g,
                                      compact: S
                                  },
                                  hasSpoilerEmbeds: C,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1
                              }),
                              (0, i.jsx)(M, {
                                  message: n,
                                  snapshot: s,
                                  index: l
                              })
                          ]
                      })
                  ]
              },
              l
          );
}
function Z(e) {
    let { message: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.messageSnapshots.map((e, n) =>
            (0, i.jsx)(
                L,
                {
                    message: t,
                    snapshot: e,
                    index: n
                },
                n
            )
        )
    });
}
