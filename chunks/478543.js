n(47120), n(653041);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    l = n.n(o),
    u = n(481060),
    c = n(942389),
    d = n(572004),
    _ = n(63063),
    E = n(358085),
    f = n(145022),
    h = n(981631),
    p = n(689938),
    I = n(528370);
function m(e) {
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
                  className: s()(I.copyLink, n ? I.copied : null),
                  onClick: l,
                  children: [
                      (0, r.jsx)(u.LinkIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: I.copyLinkIcon
                      }),
                      n ? p.Z.Messages.BUILD_OVERRIDE_LINK_COPIED : p.Z.Messages.BUILD_OVERRIDE_LINK_COPY
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
                className: I.buildInfo,
                children: [
                    (0, r.jsx)(u.Text, {
                        variant: 'text-sm/medium',
                        className: I.subHead,
                        children: t
                    }),
                    (0, r.jsx)('div', {
                        className: I.buildDetails,
                        children: n
                    })
                ]
            }),
            (0, r.jsx)(u.Button, {
                submitting: d,
                color: a,
                onClick: o,
                className: s()(I.button, c ? I.disabledButtonOverride : null),
                size: I.buttonSize,
                disabled: c,
                children: l
            })
        ]
    });
}
t.Z = (e) => {
    var t, n, a;
    let { loading: o = !1, currentOverrides: d, linkMeta: S, url: g, applyBuildOverride: A, clearBuildOverride: N } = e,
        [O, R] = i.useState(!1),
        v = i.useCallback(() => {
            if (!O) R(!0), A().catch(() => R(!1));
        }, [A, O]),
        C = i.useCallback(() => {
            if (!O) R(!0), N().catch(() => R(!1));
        }, [N, O]);
    return (0, r.jsxs)('div', {
        className: I.wrapper,
        children: [
            ((t = S),
            (n = g),
            (a = o),
            (0, r.jsxs)(u.Text, {
                variant: 'text-xs/normal',
                className: I.titleRegion,
                children: [
                    (0, r.jsx)('strong', {
                        className: I.title,
                        children: null != t && null != t.releaseChannel ? p.Z.Messages.BUILD_OVERRIDE_FOR.format({ releaseChannel: t.releaseChannel }) : p.Z.Messages.BUILD_OVERRIDE
                    }),
                    (0, r.jsx)(u.Anchor, {
                        className: I.infoLink,
                        href: _.Z.getArticleURL(h.BhN.BUILD_OVERRIDE_EMBED),
                        target: '_blank',
                        children: (0, r.jsx)(u.CircleInformationIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: I.infoIcon
                        })
                    }),
                    a ? null : (0, r.jsx)(m, { url: n })
                ]
            })),
            (0, r.jsxs)('div', {
                className: I.content,
                children: [
                    (0, r.jsx)(c.Z, { className: I.icon }),
                    o
                        ? (0, r.jsxs)(i.Fragment, {
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: I.buildInfo,
                                      children: [(0, r.jsx)('div', { className: s()(I.barLoader, I.barTitle) }), (0, r.jsx)('div', { className: I.barLoader })]
                                  }),
                                  (0, r.jsx)('div', { className: I.buttonLoader })
                              ]
                          })
                        : (function (e) {
                              var t, n;
                              let r,
                                  i,
                                  a,
                                  { currentOverrides: s, linkMeta: o, applyBuildOverride: c, clearBuildOverride: d, submitting: _ } = e,
                                  h = ['discord_web'];
                              !E.isPlatformEmbedded && h.push('discord_marketing', 'discord_developers');
                              let I = (0, f.Z)(o, h);
                              if (!I.valid)
                                  return (function (e) {
                                      return T({
                                          subHead: p.Z.Messages.BUILD_OVERRIDE_ISNT_AVAILABLE,
                                          buttonColor: u.Button.Colors.TRANSPARENT,
                                          buttonText: 'Invalid',
                                          buildDetails: e,
                                          disabled: !0
                                      });
                                  })(I.reason);
                              l()(null != o, 'BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved');
                              let { discord_web: m, discord_developers: S } = o.targetBuildOverride,
                                  g = null != m ? m : S;
                              if ((l()(null != g, 'BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved'), (t = g), null == (n = s) || null == n.discord_web ? 1 : t.id !== n.discord_web.id || t.type !== n.discord_web.type)) (i = p.Z.Messages.BUILD_OVERRIDE_APPLY), (r = c), (a = u.Button.Colors.GREEN);
                              else (i = p.Z.Messages.BUILD_OVERRIDE_CLEAR), (r = d), (a = u.Button.Colors.RED);
                              return T({
                                  subHead: p.Z.Messages.BUILD_OVERRIDE_ID,
                                  buildDetails: g.id,
                                  buttonClick: r,
                                  buttonText: i,
                                  buttonColor: a,
                                  submitting: _
                              });
                          })({
                              currentOverrides: d,
                              linkMeta: S,
                              applyBuildOverride: v,
                              clearBuildOverride: C,
                              submitting: O
                          })
                ]
            })
        ]
    });
};
