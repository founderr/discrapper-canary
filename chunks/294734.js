n.d(t, {
    Z: function () {
        return P;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(793030),
    a = n(442837),
    o = n(902704),
    s = n(692547),
    c = n(481060),
    u = n(356264),
    d = n(628238),
    m = n(930282),
    h = n(25015),
    f = n(438075),
    p = n(695346),
    g = n(592125),
    _ = n(906467),
    C = n(430824),
    E = n(496675),
    I = n(699516),
    x = n(594174),
    v = n(100604),
    N = n(694784),
    T = n(39154),
    S = n(245216),
    b = n(388032),
    A = n(85961);
function j() {
    return (0, i.jsxs)('div', {
        className: A.headerContainer,
        children: [
            (0, i.jsx)(S.Z, {
                size: 'xs',
                className: A.headerIcon,
                color: s.Z.colors.TEXT_LOW_CONTRAST
            }),
            (0, i.jsx)(l.xv, {
                className: A.headerText,
                variant: 'text-sm/semibold',
                color: 'text-low-contrast',
                children: b.intl.string(b.t.ToyvLi)
            })
        ]
    });
}
function Z(e) {
    let { message: t, snapshot: n, index: d } = e,
        m = r.useMemo(() => new v.r(t, n, d), [t, n, d]),
        h = (0, a.e7)([g.Z, x.default, I.Z, E.Z, C.Z, u.Z], () => m.getForwardInfo(g.Z, x.default, I.Z, E.Z, C.Z, u.Z).footerInfo, [m], o.Z),
        f = r.useCallback(() => {
            (0, N.Z)(t);
        }, [t]);
    return null == h
        ? null
        : (0, i.jsxs)(c.Clickable, {
              className: A.footerContainer,
              onClick: f,
              children: [
                  null != h.originIconUrl
                      ? (0, i.jsx)('img', {
                            className: A.originIcon,
                            src: h.originIconUrl,
                            alt: ''
                        })
                      : null,
                  (0, i.jsx)(l.xv, {
                      className: A.footerText,
                      variant: 'text-sm/medium',
                      color: 'none',
                      children: ''.concat(h.originLabel, '  \u2022  ').concat(h.timestampLabel)
                  }),
                  (0, i.jsx)(c.ChevronSmallRightIcon, {
                      size: 'xxs',
                      color: s.Z.colors.TEXT_LOW_CONTRAST
                  })
              ]
          });
}
function R(e) {
    var t;
    let { message: n, snapshot: l, index: o } = e,
        s = r.useMemo(() => (0, T.Z)(n, l), [n, l]),
        c = p.RS.useSetting(),
        u = p.NA.useSetting(),
        C = (0, a.e7)([_.Z], () => _.Z.isDeveloper),
        E = (0, d.A)((null !== (t = s.editedTimestamp) && void 0 !== t ? t : s.timestamp).valueOf()),
        { content: I, hasSpoilerEmbeds: x } = (0, h.Z)(s, {
            hideSimpleEmbedContent: c && u,
            isInteracting: !1,
            formatInline: !1,
            allowList: E,
            allowHeading: E,
            allowLinks: !0,
            allowDevLinks: C,
            previewLinkTarget: !0
        }),
        v = (0, a.e7)([g.Z], () => g.Z.getChannel(n.channel_id)),
        N = p.jU.useSetting();
    return null == v
        ? null
        : (0, i.jsxs)(
              'div',
              {
                  className: A.container,
                  children: [
                      (0, i.jsx)('div', { className: A.quote }),
                      (0, i.jsxs)('div', {
                          className: A.content,
                          children: [
                              (0, i.jsx)(j, {}),
                              (0, i.jsx)(m.ZP, {
                                  message: s,
                                  content: I
                              }),
                              (0, f.Z)({
                                  channelMessageProps: {
                                      message: s,
                                      channel: v,
                                      compact: N
                                  },
                                  hasSpoilerEmbeds: x,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1
                              }),
                              (0, i.jsx)(Z, {
                                  message: n,
                                  snapshot: l,
                                  index: o
                              })
                          ]
                      })
                  ]
              },
              o
          );
}
function P(e) {
    let { message: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.messageSnapshots.map((e, n) =>
            (0, i.jsx)(
                R,
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
