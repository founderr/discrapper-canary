var r = n(47120);
var i = n(653041);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(512722),
    c = n.n(u),
    d = n(481060),
    _ = n(942389),
    E = n(572004),
    f = n(63063),
    h = n(358085),
    p = n(145022),
    m = n(981631),
    I = n(689938),
    T = n(528370);
function g(e, t) {
    return null != t && null != t.discord_web && e.id === t.discord_web.id && e.type === t.discord_web.type;
}
function S(e) {
    let { url: t } = e,
        [n, r] = o.useState(!1),
        i = o.useRef(void 0),
        s = o.useCallback(() => {
            if (!n) (0, E.JG)(t) && r(!0), (i.current = setTimeout(() => r(!1), 2000));
        }, [t, n]);
    return (
        o.useEffect(() => () => clearTimeout(i.current), []),
        E.wS
            ? (0, a.jsxs)(d.Clickable, {
                  className: l()(T.copyLink, n ? T.copied : null),
                  onClick: s,
                  children: [
                      (0, a.jsx)(d.LinkIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: T.copyLinkIcon
                      }),
                      n ? I.Z.Messages.BUILD_OVERRIDE_LINK_COPIED : I.Z.Messages.BUILD_OVERRIDE_LINK_COPY
                  ]
              })
            : null
    );
}
function A() {
    return (0, a.jsxs)(o.Fragment, {
        children: [
            (0, a.jsxs)('div', {
                className: T.buildInfo,
                children: [(0, a.jsx)('div', { className: l()(T.barLoader, T.barTitle) }), (0, a.jsx)('div', { className: T.barLoader })]
            }),
            (0, a.jsx)('div', { className: T.buttonLoader })
        ]
    });
}
function v(e) {
    let { subHead: t, buildDetails: n, buttonColor: r, buttonClick: i, buttonText: s, disabled: u = !1, submitting: c = !1 } = e;
    return (0, a.jsxs)(o.Fragment, {
        children: [
            (0, a.jsxs)('div', {
                className: T.buildInfo,
                children: [
                    (0, a.jsx)(d.Text, {
                        variant: 'text-sm/medium',
                        className: T.subHead,
                        children: t
                    }),
                    (0, a.jsx)('div', {
                        className: T.buildDetails,
                        children: n
                    })
                ]
            }),
            (0, a.jsx)(d.Button, {
                submitting: c,
                color: r,
                onClick: i,
                className: l()(T.button, u ? T.disabledButtonOverride : null),
                size: T.buttonSize,
                disabled: u,
                children: s
            })
        ]
    });
}
function N(e) {
    let t,
        n,
        r,
        { currentOverrides: i, linkMeta: a, applyBuildOverride: o, clearBuildOverride: s, submitting: l } = e,
        u = ['discord_web'];
    !h.isPlatformEmbedded && u.push('discord_marketing', 'discord_developers');
    let _ = (0, p.Z)(a, u);
    if (!_.valid) return O(_.reason);
    c()(null != a, 'BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved');
    let { discord_web: E, discord_developers: f } = a.targetBuildOverride,
        m = null != E ? E : f;
    return (
        c()(null != m, 'BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved'),
        g(m, i) ? ((n = I.Z.Messages.BUILD_OVERRIDE_CLEAR), (t = s), (r = d.Button.Colors.RED)) : ((n = I.Z.Messages.BUILD_OVERRIDE_APPLY), (t = o), (r = d.Button.Colors.GREEN)),
        v({
            subHead: I.Z.Messages.BUILD_OVERRIDE_ID,
            buildDetails: m.id,
            buttonClick: t,
            buttonText: n,
            buttonColor: r,
            submitting: l
        })
    );
}
function O(e) {
    return v({
        subHead: I.Z.Messages.BUILD_OVERRIDE_ISNT_AVAILABLE,
        buttonColor: d.Button.Colors.TRANSPARENT,
        buttonText: 'Invalid',
        buildDetails: e,
        disabled: !0
    });
}
function R(e, t, n) {
    return (0, a.jsxs)(d.Text, {
        variant: 'text-xs/normal',
        className: T.titleRegion,
        children: [
            (0, a.jsx)('strong', {
                className: T.title,
                children: null != e && null != e.releaseChannel ? I.Z.Messages.BUILD_OVERRIDE_FOR.format({ releaseChannel: e.releaseChannel }) : I.Z.Messages.BUILD_OVERRIDE
            }),
            (0, a.jsx)(d.Anchor, {
                className: T.infoLink,
                href: f.Z.getArticleURL(m.BhN.BUILD_OVERRIDE_EMBED),
                target: '_blank',
                children: (0, a.jsx)(d.CircleInformationIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: T.infoIcon
                })
            }),
            n ? null : (0, a.jsx)(S, { url: t })
        ]
    });
}
let C = (e) => {
    let { loading: t = !1, currentOverrides: n, linkMeta: r, url: i, applyBuildOverride: s, clearBuildOverride: l } = e,
        [u, c] = o.useState(!1),
        d = o.useCallback(() => {
            if (!u) c(!0), s().catch(() => c(!1));
        }, [s, u]),
        E = o.useCallback(() => {
            if (!u) c(!0), l().catch(() => c(!1));
        }, [l, u]);
    return (0, a.jsxs)('div', {
        className: T.wrapper,
        children: [
            R(r, i, t),
            (0, a.jsxs)('div', {
                className: T.content,
                children: [
                    (0, a.jsx)(_.Z, { className: T.icon }),
                    t
                        ? A()
                        : N({
                              currentOverrides: n,
                              linkMeta: r,
                              applyBuildOverride: d,
                              clearBuildOverride: E,
                              submitting: u
                          })
                ]
            })
        ]
    });
};
t.Z = C;
