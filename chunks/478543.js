n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    l = n.n(o),
    u = n(481060),
    c = n(942389),
    d = n(572004),
    f = n(63063),
    _ = n(358085),
    p = n(145022),
    h = n(981631),
    m = n(388032),
    g = n(528370);
function E(e) {
    let { url: t } = e,
        [n, a] = i.useState(!1),
        o = i.useRef(void 0),
        l = i.useCallback(() => {
            if (!n) (0, d.JG)(t) && a(!0), (o.current = setTimeout(() => a(!1), 2000));
        }, [t, n]);
    return (
        i.useEffect(() => () => clearTimeout(o.current), []),
        d.wS
            ? (0, r.jsxs)(u.Clickable, {
                  className: s()(g.copyLink, n ? g.copied : null),
                  onClick: l,
                  children: [
                      (0, r.jsx)(u.LinkIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: g.copyLinkIcon
                      }),
                      n ? m.intl.string(m.t.GmrIJS) : m.intl.string(m.t.iVzBOj)
                  ]
              })
            : null
    );
}
function v(e) {
    let { subHead: t, buildDetails: n, buttonColor: a, buttonClick: o, buttonText: l, disabled: c = !1, submitting: d = !1 } = e;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: g.buildInfo,
                children: [
                    (0, r.jsx)(u.Text, {
                        variant: 'text-sm/medium',
                        className: g.subHead,
                        children: t
                    }),
                    (0, r.jsx)('div', {
                        className: g.buildDetails,
                        children: n
                    })
                ]
            }),
            (0, r.jsx)(u.Button, {
                submitting: d,
                color: a,
                onClick: o,
                className: s()(g.button, c ? g.disabledButtonOverride : null),
                size: g.buttonSize,
                disabled: c,
                children: l
            })
        ]
    });
}
t.Z = (e) => {
    var t, n, a;
    let { loading: o = !1, currentOverrides: d, linkMeta: b, url: I, applyBuildOverride: T, clearBuildOverride: S } = e,
        [y, A] = i.useState(!1),
        N = i.useCallback(() => {
            if (!y) A(!0), T().catch(() => A(!1));
        }, [T, y]),
        C = i.useCallback(() => {
            if (!y) A(!0), S().catch(() => A(!1));
        }, [S, y]);
    return (0, r.jsxs)('div', {
        className: g.wrapper,
        children: [
            ((t = b),
            (n = I),
            (a = o),
            (0, r.jsxs)(u.Text, {
                variant: 'text-xs/normal',
                className: g.titleRegion,
                children: [
                    (0, r.jsx)('strong', {
                        className: g.title,
                        children: null != t && null != t.releaseChannel ? m.intl.formatToPlainString(m.t.bFj63d, { releaseChannel: t.releaseChannel }) : m.intl.string(m.t.Wj3LW1)
                    }),
                    (0, r.jsx)(u.Anchor, {
                        className: g.infoLink,
                        href: f.Z.getArticleURL(h.BhN.BUILD_OVERRIDE_EMBED),
                        target: '_blank',
                        children: (0, r.jsx)(u.CircleInformationIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: g.infoIcon
                        })
                    }),
                    a ? null : (0, r.jsx)(E, { url: n })
                ]
            })),
            (0, r.jsxs)('div', {
                className: g.content,
                children: [
                    (0, r.jsx)(c.Z, { className: g.icon }),
                    o
                        ? (0, r.jsxs)(i.Fragment, {
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: g.buildInfo,
                                      children: [(0, r.jsx)('div', { className: s()(g.barLoader, g.barTitle) }), (0, r.jsx)('div', { className: g.barLoader })]
                                  }),
                                  (0, r.jsx)('div', { className: g.buttonLoader })
                              ]
                          })
                        : (function (e) {
                              var t, n;
                              let r,
                                  i,
                                  a,
                                  { currentOverrides: s, linkMeta: o, applyBuildOverride: c, clearBuildOverride: d, submitting: f } = e,
                                  h = ['discord_web'];
                              !_.isPlatformEmbedded && h.push('discord_marketing', 'discord_developers');
                              let g = (0, p.Z)(o, h);
                              if (!g.valid)
                                  return (function (e) {
                                      return v({
                                          subHead: m.intl.string(m.t.ODXApK),
                                          buttonColor: u.Button.Colors.TRANSPARENT,
                                          buttonText: 'Invalid',
                                          buildDetails: e,
                                          disabled: !0
                                      });
                                  })(g.reason);
                              l()(null != o, 'BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved');
                              let { discord_web: E, discord_developers: b } = o.targetBuildOverride,
                                  I = null != E ? E : b;
                              if ((l()(null != I, 'BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved'), (t = I), null == (n = s) || null == n.discord_web ? 1 : t.id !== n.discord_web.id || t.type !== n.discord_web.type)) (i = m.intl.string(m.t.nOunHB)), (r = c), (a = u.Button.Colors.GREEN);
                              else (i = m.intl.string(m.t.tX4xrq)), (r = d), (a = u.Button.Colors.RED);
                              return v({
                                  subHead: m.intl.string(m.t.RCYGoq),
                                  buildDetails: I.id,
                                  buttonClick: r,
                                  buttonText: i,
                                  buttonColor: a,
                                  submitting: f
                              });
                          })({
                              currentOverrides: d,
                              linkMeta: b,
                              applyBuildOverride: N,
                              clearBuildOverride: C,
                              submitting: y
                          })
                ]
            })
        ]
    });
};
