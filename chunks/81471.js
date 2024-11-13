var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
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
    v = n(877148),
    S = n(554034);
let N = r.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: l, message: N } = (0, _.a)(t),
        T = (0, d.p)(),
        A = (0, s.e7)([f.Z], () => null != N && f.Z.isBlockedForMessage(N), [N]),
        b = (0, s.e7)([g.Z], () => g.Z.can(E.Plq.MANAGE_MESSAGES, t)),
        x = p.cC.useSetting(),
        { content: Z } = r.useMemo(
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
        L = null;
    if (l)
        L = (0, i.jsx)(o.Text, {
            className: v.messageReplacement,
            variant: 'text-sm/normal',
            color: 'text-muted',
            children: C.intl.string(C.t.BZHld3)
        });
    else if (n) {
        if (null != N && A)
            L = (0, i.jsx)(o.Text, {
                className: v.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: C.intl.string(C.t['WPe+xM'])
            });
        else if (null != N) {
            let { contentPlaceholder: e, renderedContent: t } = (0, m.f)(N, Z, A, a()(v.messageContent, S.inlineFormat), {
                leadingIconClass: v.messageContentIcon,
                trailingIconClass: v.messageContentIcon,
                iconSize: I.WW
            });
            L =
                null != t
                    ? (0, i.jsx)(o.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: v.messageContent,
                          children: t
                      })
                    : (0, i.jsx)(o.Text, {
                          tag: 'span',
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: v.messageReplacement,
                          children: e
                      });
        } else
            L = (0, i.jsx)(o.Text, {
                className: v.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: C.intl.string(C.t['0KfDxM'])
            });
    } else L = null;
    return (0, i.jsx)(c.a.Provider, {
        value: (0, u.Z)(x, b),
        children: (0, i.jsx)(o.FocusBlock, {
            className: v.messageFocusBlock,
            children: L
        })
    });
});
t.Z = N;
