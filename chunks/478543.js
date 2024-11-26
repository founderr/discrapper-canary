n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    l = n.n(o),
    u = n(481060),
    c = n(240872),
    d = n(19780),
    f = n(942389),
    _ = n(572004),
    p = n(63063),
    h = n(358085),
    m = n(145022),
    g = n(981631),
    E = n(388032),
    v = n(434016);
function I(e) {
    let { url: t } = e,
        [n, a] = i.useState(!1),
        o = i.useRef(void 0),
        l = i.useCallback(() => {
            if (!n) (0, _.JG)(t) && a(!0), (o.current = setTimeout(() => a(!1), 2000));
        }, [t, n]);
    return (
        i.useEffect(() => () => clearTimeout(o.current), []),
        _.wS
            ? (0, r.jsxs)(u.Clickable, {
                  className: s()(v.copyLink, n ? v.copied : null),
                  onClick: l,
                  children: [
                      (0, r.jsx)(u.LinkIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: v.copyLinkIcon
                      }),
                      n ? E.intl.string(E.t.GmrIJS) : E.intl.string(E.t.iVzBOj)
                  ]
              })
            : null
    );
}
function T(e) {
    let { subHead: t, buildDetails: n, buttonColor: a, buttonClick: o, buttonText: l, disabled: c = !1, submitting: d = !1 } = e;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: v.buildInfo,
                children: [
                    (0, r.jsx)(u.Text, {
                        variant: 'text-sm/medium',
                        className: v.subHead,
                        children: t
                    }),
                    (0, r.jsx)('div', {
                        className: v.buildDetails,
                        children: n
                    })
                ]
            }),
            (0, r.jsx)(u.Button, {
                submitting: d,
                color: a,
                onClick: o,
                className: s()(v.button, c ? v.disabledButtonOverride : null),
                size: v.buttonSize,
                disabled: c,
                children: l
            })
        ]
    });
}
t.Z = (e) => {
    var t, n, a;
    let { loading: o = !1, currentOverrides: _, linkMeta: b, url: S, applyBuildOverride: y, clearBuildOverride: A } = e,
        [N, C] = i.useState(!1),
        R = i.useCallback(() => {
            if (!N) C(!0), y().catch(() => C(!1));
        }, [y, N]),
        O = i.useCallback(() => {
            if (!N) C(!0), A().catch(() => C(!1));
        }, [A, N]);
    return (0, r.jsxs)('div', {
        className: v.wrapper,
        children: [
            ((t = b),
            (n = S),
            (a = o),
            (0, r.jsxs)(u.Text, {
                variant: 'text-xs/normal',
                className: v.titleRegion,
                children: [
                    (0, r.jsx)('strong', {
                        className: v.title,
                        children: null != t && null != t.releaseChannel ? E.intl.formatToPlainString(E.t.bFj63d, { releaseChannel: t.releaseChannel }) : E.intl.string(E.t.Wj3LW1)
                    }),
                    (0, r.jsx)(u.Anchor, {
                        className: v.infoLink,
                        href: p.Z.getArticleURL(g.BhN.BUILD_OVERRIDE_EMBED),
                        target: '_blank',
                        children: (0, r.jsx)(u.CircleInformationIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: v.infoIcon
                        })
                    }),
                    a ? null : (0, r.jsx)(I, { url: n })
                ]
            })),
            (0, r.jsxs)('div', {
                className: v.content,
                children: [
                    (0, r.jsx)(f.Z, { className: v.icon }),
                    o
                        ? (0, r.jsxs)(i.Fragment, {
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: v.buildInfo,
                                      children: [(0, r.jsx)('div', { className: s()(v.barLoader, v.barTitle) }), (0, r.jsx)('div', { className: v.barLoader })]
                                  }),
                                  (0, r.jsx)('div', { className: v.buttonLoader })
                              ]
                          })
                        : (function (e) {
                              var t, n;
                              let r,
                                  i,
                                  a,
                                  { currentOverrides: s, linkMeta: o, applyBuildOverride: f, clearBuildOverride: _, submitting: p } = e,
                                  g = ['discord_web'];
                              !h.isPlatformEmbedded && g.push('discord_marketing', 'discord_developers');
                              let v = (0, m.Z)(o, g);
                              if (!v.valid)
                                  return (function (e) {
                                      return T({
                                          subHead: E.intl.string(E.t.ODXApK),
                                          buttonColor: u.Button.Colors.TRANSPARENT,
                                          buttonText: 'Invalid',
                                          buildDetails: e,
                                          disabled: !0
                                      });
                                  })(v.reason);
                              l()(null != o, 'BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved');
                              let { discord_web: I, discord_developers: b } = o.targetBuildOverride,
                                  S = null != I ? I : b;
                              if ((l()(null != S, 'BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved'), (t = S), null == (n = s) || null == n.discord_web ? 1 : t.id !== n.discord_web.id || t.type !== n.discord_web.type)) (i = E.intl.string(E.t.nOunHB)), (r = f), (a = u.Button.Colors.GREEN);
                              else (i = E.intl.string(E.t.tX4xrq)), (r = _), (a = u.Button.Colors.RED);
                              return T({
                                  subHead: E.intl.string(E.t.RCYGoq),
                                  buildDetails: S.id,
                                  buttonClick: () => {
                                      d.Z.isConnected()
                                          ? c.Z.show({
                                                title: E.intl.string(E.t.tiu1l5),
                                                body: E.intl.string(E.t['zK+lqa']),
                                                onConfirm: r,
                                                cancelText: E.intl.string(E.t['ETE/oK']),
                                                confirmText: E.intl.string(E.t['QDX/qq'])
                                            })
                                          : r();
                                  },
                                  buttonText: i,
                                  buttonColor: a,
                                  submitting: p
                              });
                          })({
                              currentOverrides: _,
                              linkMeta: b,
                              applyBuildOverride: R,
                              clearBuildOverride: O,
                              submitting: N
                          })
                ]
            })
        ]
    });
};
