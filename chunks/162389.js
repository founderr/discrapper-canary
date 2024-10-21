s.d(t, {
    Z: function () {
        return _;
    }
});
var n = s(200651),
    l = s(192379),
    i = s(120356),
    a = s.n(i),
    r = s(442837),
    o = s(692547),
    c = s(481060),
    d = s(787014),
    u = s(659388),
    h = s(710344),
    m = s(496675),
    g = s(479099),
    E = s(710352),
    T = s(981631),
    p = s(689938),
    N = s(311475);
function _(e) {
    let { channel: t } = e,
        i = (0, r.e7)([m.Z], () => m.Z.can(T.Plq.MANAGE_CHANNELS, t), [t]),
        u = t.availableTags.length >= E.pC,
        g = t.availableTags.length > 0,
        _ = l.useCallback(() => {
            let e = t.availableTags.length >= E.pC;
            i &&
                !e &&
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await s.e('21971').then(s.bind(s, 915774));
                    return (s) =>
                        (0, n.jsx)(e, {
                            ...s,
                            channelId: t.id,
                            guildId: t.guild_id
                        });
                });
        }, [t, i]),
        x = l.useCallback(
            (e) => {
                i &&
                    (0, c.openModalLazy)(async () => {
                        let { default: l } = await s.e('21971').then(s.bind(s, 915774));
                        return (s) =>
                            (0, n.jsx)(l, {
                                ...s,
                                channelId: t.id,
                                guildId: t.guild_id,
                                tag: e
                            });
                    });
            },
            [i, t]
        ),
        {
            handleDragStart: f,
            handleDragReset: C,
            handleDragComplete: M
        } = (0, h.Z)(t.availableTags, (e) => {
            (0, d.pW)({ availableTags: e });
        });
    return (0, n.jsxs)('div', {
        className: N.tags,
        children: [
            g
                ? t.availableTags.map((e) =>
                      (0, n.jsx)(
                          S,
                          {
                              tag: e,
                              availableTags: t.availableTags,
                              canManageChannels: i,
                              onTagClick: x,
                              onDragComplete: M,
                              onDragReset: C,
                              onDragStart: f
                          },
                          e.id
                      )
                  )
                : null,
            g
                ? (0, n.jsx)(c.Clickable, {
                      onClick: _,
                      className: a()(N.addTags, { [N.disabled]: !i || u }),
                      children: (0, n.jsx)(c.PlusSmallIcon, {
                          size: 'custom',
                          'aria-label': p.Z.Messages.FORUM_TAG_CREATE,
                          color: o.Z.unsafe_rawColors.WHITE_500.css,
                          width: 20,
                          height: 20
                      })
                  })
                : (0, n.jsx)(c.Button, {
                      disabled: !i,
                      onClick: _,
                      children: p.Z.Messages.FORUM_TAG_CREATE
                  })
        ]
    });
}
function S(e) {
    let { tag: t, availableTags: s, canManageChannels: l, onTagClick: i, onDragComplete: r, onDragStart: o, onDragReset: c } = e,
        d = s.findIndex((e) => e.id === t.id),
        {
            drag: h,
            dragSourcePosition: m,
            drop: E,
            setIsDraggable: T
        } = (0, u.Z)({
            type: 'CHANNEL_SETTINGS_FORUM_TAGS',
            index: d,
            optionId: t.id,
            onDragStart: o,
            onDragComplete: r,
            onDragReset: c
        });
    return (0, n.jsx)('div', {
        className: a()(N.container, {
            [N.dropIndicatorBefore]: null != m && d < m,
            [N.dropIndicatorAfter]: null != m && d > m
        }),
        ref: (e) => h(E(e)),
        onMouseEnter: () => T(l),
        onMouseLeave: () => T(!1),
        children: (0, n.jsx)(g.Z, {
            tag: t,
            disabled: !l,
            ariaLabel: p.Z.Messages.FORUM_TAG_EDIT_LABEL.format({ name: t.name }),
            onClick: l ? () => i(t) : void 0
        })
    });
}
