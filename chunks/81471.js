var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(95398),
    d = n(905405),
    u = n(255269),
    _ = n(937889),
    E = n(267128),
    h = n(695346),
    m = n(496675),
    I = n(699516),
    p = n(868807),
    g = n(981631),
    T = n(217702),
    f = n(689938),
    C = n(877148),
    S = n(554034);
let N = a.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: s, message: N } = (0, p.a)(t),
        A = (0, d.p)(),
        v = (0, l.e7)([I.Z], () => null != N && I.Z.isBlockedForMessage(N), [N]),
        Z = (0, l.e7)([m.Z], () => m.Z.can(g.Plq.MANAGE_MESSAGES, t)),
        L = h.cC.useSetting(),
        { content: R } = a.useMemo(
            () =>
                (null == N ? void 0 : N.content) != null && '' !== N.content
                    ? (0, _.ZP)(N, {
                          formatInline: !0,
                          noStyleAndInteraction: !0,
                          shouldFilterKeywords: A
                      })
                    : { content: null },
            [N, A]
        ),
        O = null;
    if (s)
        O = (0, i.jsx)(o.Text, {
            className: C.messageReplacement,
            variant: 'text-sm/normal',
            color: 'text-muted',
            children: f.Z.Messages.MESSAGE_REQUESTS_ERROR_LOADING_PREVIEW
        });
    else if (n) {
        if (null != N && v)
            O = (0, i.jsx)(o.Text, {
                className: C.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: f.Z.Messages.MESSAGE_REQUESTS_BLOCKED_MESSAGE
            });
        else if (null != N) {
            let { contentPlaceholder: e, renderedContent: t } = (0, E.f)(N, R, v, r()(C.messageContent, S.inlineFormat), {
                leadingIconClass: C.messageContentIcon,
                trailingIconClass: C.messageContentIcon,
                iconSize: T.WW
            });
            O =
                null != t
                    ? (0, i.jsx)(o.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: C.messageContent,
                          children: t
                      })
                    : (0, i.jsx)(o.Text, {
                          tag: 'span',
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: C.messageReplacement,
                          children: e
                      });
        } else
            O = (0, i.jsx)(o.Text, {
                className: C.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: f.Z.Messages.MESSAGE_REQUESTS_DELETED_MESSAGE
            });
    } else O = null;
    return (0, i.jsx)(c.a.Provider, {
        value: (0, u.Z)(L, Z),
        children: (0, i.jsx)(o.FocusBlock, {
            className: C.messageFocusBlock,
            children: O
        })
    });
});
t.Z = N;
