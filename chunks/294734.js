n.d(t, {
    Z: function () {
        return D;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(793030),
    o = n(442837),
    s = n(902704),
    l = n(692547),
    u = n(481060),
    c = n(356264),
    d = n(628238),
    _ = n(930282),
    E = n(25015),
    f = n(438075),
    h = n(695346),
    p = n(592125),
    m = n(906467),
    I = n(430824),
    T = n(496675),
    g = n(699516),
    S = n(594174),
    A = n(100604),
    v = n(694784),
    N = n(39154),
    O = n(245216),
    R = n(689938),
    C = n(85961);
function y() {
    return (0, r.jsxs)('div', {
        className: C.headerContainer,
        children: [
            (0, r.jsx)(O.Z, {
                size: 'xs',
                className: C.headerIcon,
                color: l.Z.colors.TEXT_LOW_CONTRAST
            }),
            (0, r.jsx)(a.xv, {
                className: C.headerText,
                variant: 'text-sm/semibold',
                color: 'text-low-contrast',
                children: R.Z.Messages.MESSAGE_FORWARDED
            })
        ]
    });
}
function b(e) {
    let { message: t, snapshot: n, index: d } = e,
        _ = i.useMemo(() => new A.r(t, n, d), [t, n, d]),
        E = (0, o.e7)([p.Z, S.default, g.Z, T.Z, I.Z, c.Z], () => _.getForwardInfo(p.Z, S.default, g.Z, T.Z, I.Z, c.Z).footerInfo, [_], s.Z),
        f = i.useCallback(() => {
            (0, v.Z)(t);
        }, [t]);
    return null == E
        ? null
        : (0, r.jsxs)(u.Clickable, {
              className: C.footerContainer,
              onClick: f,
              children: [
                  null != E.originIconUrl
                      ? (0, r.jsx)('img', {
                            className: C.originIcon,
                            src: E.originIconUrl,
                            alt: ''
                        })
                      : null,
                  (0, r.jsx)(a.xv, {
                      className: C.footerText,
                      variant: 'text-sm/medium',
                      color: 'none',
                      children: ''.concat(E.originLabel, '  \u2022  ').concat(E.timestampLabel)
                  }),
                  (0, r.jsx)(u.ChevronSmallRightIcon, {
                      size: 'xxs',
                      color: l.Z.colors.TEXT_LOW_CONTRAST
                  })
              ]
          });
}
function L(e) {
    var t;
    let { message: n, snapshot: a, index: s } = e,
        l = i.useMemo(() => (0, N.Z)(n, a), [n, a]),
        u = h.RS.useSetting(),
        c = h.NA.useSetting(),
        I = u && c,
        T = (0, o.e7)([m.Z], () => m.Z.isDeveloper),
        g = (0, d.A)((null !== (t = l.editedTimestamp) && void 0 !== t ? t : l.timestamp).valueOf()),
        { content: S, hasSpoilerEmbeds: A } = (0, E.Z)(l, {
            hideSimpleEmbedContent: I,
            isInteracting: !1,
            formatInline: !1,
            allowList: g,
            allowHeading: g,
            allowLinks: !0,
            allowDevLinks: T,
            previewLinkTarget: !0
        }),
        v = (0, o.e7)([p.Z], () => p.Z.getChannel(n.channel_id)),
        O = h.jU.useSetting();
    return null == v
        ? null
        : (0, r.jsxs)(
              'div',
              {
                  className: C.container,
                  children: [
                      (0, r.jsx)('div', { className: C.quote }),
                      (0, r.jsxs)('div', {
                          className: C.content,
                          children: [
                              (0, r.jsx)(y, {}),
                              (0, r.jsx)(_.ZP, {
                                  message: l,
                                  content: S
                              }),
                              (0, f.Z)({
                                  channelMessageProps: {
                                      message: l,
                                      channel: v,
                                      compact: O
                                  },
                                  hasSpoilerEmbeds: A,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1
                              }),
                              (0, r.jsx)(b, {
                                  message: n,
                                  snapshot: a,
                                  index: s
                              })
                          ]
                      })
                  ]
              },
              s
          );
}
function D(e) {
    let { message: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, n) =>
            (0, r.jsx)(
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
