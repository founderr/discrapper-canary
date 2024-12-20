var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(95398),
    d = n(905405),
    u = n(255269),
    h = n(937889),
    m = n(267128),
    p = n(695346),
    g = n(496675),
    f = n(699516),
    _ = n(868807),
    E = n(981631),
    I = n(217702),
    C = n(388032),
    v = n(560006),
    S = n(665162);
let N = r.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: l, message: N } = (0, _.a)(t),
        T = (0, d.p)(),
        { isBlocked: b, isIgnored: x } = (0, o.cj)(
            [f.Z],
            () => ({
                isBlocked: null != N && f.Z.isBlockedForMessage(N),
                isIgnored: null != N && f.Z.isIgnoredForMessage(N)
            }),
            [N]
        ),
        A = (0, o.e7)([g.Z], () => g.Z.can(E.Plq.MANAGE_MESSAGES, t)),
        Z = p.cC.useSetting(),
        { content: L } = r.useMemo(
            () =>
                (null == N ? void 0 : N.content) != null && '' !== N.content
                    ? (0, h.ZP)(N, {
                          formatInline: !0,
                          noStyleAndInteraction: !0,
                          shouldFilterKeywords: T
                      })
                    : { content: null },
            [N, T]
        ),
        P = null;
    if (l)
        P = (0, i.jsx)(s.Text, {
            className: v.messageReplacement,
            variant: 'text-sm/normal',
            color: 'text-muted',
            children: C.intl.string(C.t.BZHld3)
        });
    else if (n) {
        if (null != N && b)
            P = (0, i.jsx)(s.Text, {
                className: v.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: C.intl.string(C.t['WPe+xM'])
            });
        else if (null != N && x)
            P = (0, i.jsx)(s.Text, {
                className: v.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: C.intl.string(C.t.uxrh1N)
            });
        else if (null != N) {
            let { contentPlaceholder: e, renderedContent: t } = (0, m.f)(N, L, b, x, a()(v.messageContent, S.inlineFormat), {
                leadingIconClass: v.messageContentIcon,
                trailingIconClass: v.messageContentIcon,
                iconSize: I.WW
            });
            P =
                null != t
                    ? (0, i.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: v.messageContent,
                          children: t
                      })
                    : (0, i.jsx)(s.Text, {
                          tag: 'span',
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: v.messageReplacement,
                          children: e
                      });
        } else
            P = (0, i.jsx)(s.Text, {
                className: v.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: C.intl.string(C.t['0KfDxM'])
            });
    } else P = null;
    return (0, i.jsx)(c.a.Provider, {
        value: (0, u.Z)(Z, A),
        children: (0, i.jsx)(s.FocusBlock, {
            className: v.messageFocusBlock,
            children: P
        })
    });
});
t.Z = N;
