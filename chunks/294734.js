n.d(t, {
    Z: function () {
        return Z;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(793030),
    l = n(442837),
    r = n(902704),
    o = n(692547),
    c = n(481060),
    d = n(356264),
    u = n(628238),
    _ = n(930282),
    E = n(25015),
    I = n(438075),
    m = n(695346),
    T = n(592125),
    N = n(906467),
    h = n(430824),
    C = n(496675),
    p = n(699516),
    f = n(594174),
    g = n(100604),
    A = n(694784),
    S = n(39154),
    M = n(245216),
    O = n(689938),
    x = n(85961);
function R() {
    return (0, i.jsxs)('div', {
        className: x.headerContainer,
        children: [
            (0, i.jsx)(M.Z, {
                size: 'xs',
                className: x.headerIcon,
                color: o.Z.colors.TEXT_LOW_CONTRAST
            }),
            (0, i.jsx)(s.xv, {
                className: x.headerText,
                variant: 'text-sm/semibold',
                color: 'text-low-contrast',
                children: O.Z.Messages.MESSAGE_FORWARDED
            })
        ]
    });
}
function v(e) {
    let { message: t, snapshot: n, index: u } = e,
        _ = a.useMemo(() => new g.r(t, n, u), [t, n, u]),
        E = (0, l.e7)([T.Z, f.default, p.Z, C.Z, h.Z, d.Z], () => _.getForwardInfo(T.Z, f.default, p.Z, C.Z, h.Z, d.Z).footerInfo, [_], r.Z),
        I = a.useCallback(() => {
            (0, A.Z)(t);
        }, [t]);
    return null == E
        ? null
        : (0, i.jsxs)(c.Clickable, {
              className: x.footerContainer,
              onClick: I,
              children: [
                  null != E.originIconUrl
                      ? (0, i.jsx)('img', {
                            className: x.originIcon,
                            src: E.originIconUrl,
                            alt: ''
                        })
                      : null,
                  (0, i.jsx)(s.xv, {
                      className: x.footerText,
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
    let { message: n, snapshot: s, index: r } = e,
        o = a.useMemo(() => (0, S.Z)(n, s), [n, s]),
        c = m.RS.useSetting(),
        d = m.NA.useSetting(),
        h = (0, l.e7)([N.Z], () => N.Z.isDeveloper),
        C = (0, u.A)((null !== (t = o.editedTimestamp) && void 0 !== t ? t : o.timestamp).valueOf()),
        { content: p, hasSpoilerEmbeds: f } = (0, E.Z)(o, {
            hideSimpleEmbedContent: c && d,
            isInteracting: !1,
            formatInline: !1,
            allowList: C,
            allowHeading: C,
            allowLinks: !0,
            allowDevLinks: h,
            previewLinkTarget: !0
        }),
        g = (0, l.e7)([T.Z], () => T.Z.getChannel(n.channel_id)),
        A = m.jU.useSetting();
    return null == g
        ? null
        : (0, i.jsxs)(
              'div',
              {
                  className: x.container,
                  children: [
                      (0, i.jsx)('div', { className: x.quote }),
                      (0, i.jsxs)('div', {
                          className: x.content,
                          children: [
                              (0, i.jsx)(R, {}),
                              (0, i.jsx)(_.ZP, {
                                  message: o,
                                  content: p
                              }),
                              (0, I.Z)({
                                  channelMessageProps: {
                                      message: o,
                                      channel: g,
                                      compact: A
                                  },
                                  hasSpoilerEmbeds: f,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1
                              }),
                              (0, i.jsx)(v, {
                                  message: n,
                                  snapshot: s,
                                  index: r
                              })
                          ]
                      })
                  ]
              },
              r
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
