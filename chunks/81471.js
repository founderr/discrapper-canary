var i = n(735250),
    a = n(470079),
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
    g = n(868807),
    p = n(981631),
    T = n(217702),
    f = n(689938),
    S = n(877148),
    C = n(554034);
let N = a.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: s, message: N } = (0, g.a)(t),
        A = (0, d.p)(),
        v = (0, l.e7)([I.Z], () => null != N && I.Z.isBlockedForMessage(N), [N]),
        L = (0, l.e7)([m.Z], () => m.Z.can(p.Plq.MANAGE_MESSAGES, t)),
        Z = h.cC.useSetting(),
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
            className: S.messageReplacement,
            variant: 'text-sm/normal',
            color: 'text-muted',
            children: f.Z.Messages.MESSAGE_REQUESTS_ERROR_LOADING_PREVIEW
        });
    else if (n) {
        if (null != N && v)
            O = (0, i.jsx)(o.Text, {
                className: S.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: f.Z.Messages.MESSAGE_REQUESTS_BLOCKED_MESSAGE
            });
        else if (null != N) {
            let { contentPlaceholder: e, renderedContent: t } = (0, E.f)(N, R, v, r()(S.messageContent, C.inlineFormat), {
                leadingIconClass: S.messageContentIcon,
                trailingIconClass: S.messageContentIcon,
                iconSize: T.WW
            });
            O =
                null != t
                    ? (0, i.jsx)(o.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: S.messageContent,
                          children: t
                      })
                    : (0, i.jsx)(o.Text, {
                          tag: 'span',
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: S.messageReplacement,
                          children: e
                      });
        } else
            O = (0, i.jsx)(o.Text, {
                className: S.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: f.Z.Messages.MESSAGE_REQUESTS_DELETED_MESSAGE
            });
    } else O = null;
    return (0, i.jsx)(c.a.Provider, {
        value: (0, u.Z)(Z, L),
        children: (0, i.jsx)(o.FocusBlock, {
            className: S.messageFocusBlock,
            children: O
        })
    });
});
t.Z = N;
