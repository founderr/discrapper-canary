n.d(t, {
    Z: function () {
        return j;
    }
});
var i = n(200651),
    l = n(192379),
    s = n(120356),
    r = n.n(s),
    a = n(442837),
    o = n(692547),
    c = n(481060),
    d = n(787014),
    u = n(603211),
    h = n(710344),
    m = n(496675),
    g = n(479099),
    p = n(710352),
    x = n(981631),
    f = n(388032),
    v = n(28772);
function j(e) {
    let { channel: t } = e,
        s = (0, a.e7)([m.Z], () => m.Z.can(x.Plq.MANAGE_CHANNELS, t), [t]),
        u = t.availableTags.length >= p.pC,
        g = t.availableTags.length > 0,
        j = l.useCallback(() => {
            let e = t.availableTags.length >= p.pC;
            s &&
                !e &&
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e('21971').then(n.bind(n, 915774));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            channelId: t.id,
                            guildId: t.guild_id
                        });
                });
        }, [t, s]),
        b = l.useCallback(
            (e) => {
                s &&
                    (0, c.openModalLazy)(async () => {
                        let { default: l } = await n.e('21971').then(n.bind(n, 915774));
                        return (n) =>
                            (0, i.jsx)(l, {
                                ...n,
                                channelId: t.id,
                                guildId: t.guild_id,
                                tag: e
                            });
                    });
            },
            [s, t]
        ),
        {
            handleDragStart: T,
            handleDragReset: N,
            handleDragComplete: S
        } = (0, h.Z)(t.availableTags, (e) => {
            (0, d.pW)({ availableTags: e });
        });
    return (0, i.jsxs)('div', {
        className: v.tags,
        children: [
            g
                ? t.availableTags.map((e) =>
                      (0, i.jsx)(
                          C,
                          {
                              tag: e,
                              availableTags: t.availableTags,
                              canManageChannels: s,
                              onTagClick: b,
                              onDragComplete: S,
                              onDragReset: N,
                              onDragStart: T
                          },
                          e.id
                      )
                  )
                : null,
            g
                ? (0, i.jsx)(c.Clickable, {
                      onClick: j,
                      className: r()(v.addTags, { [v.disabled]: !s || u }),
                      children: (0, i.jsx)(c.PlusSmallIcon, {
                          size: 'custom',
                          'aria-label': f.intl.string(f.t['/jubeH']),
                          color: o.Z.unsafe_rawColors.WHITE_500.css,
                          width: 20,
                          height: 20
                      })
                  })
                : (0, i.jsx)(c.Button, {
                      disabled: !s,
                      onClick: j,
                      children: f.intl.string(f.t['/jubeH'])
                  })
        ]
    });
}
function C(e) {
    let { tag: t, availableTags: n, canManageChannels: l, onTagClick: s, onDragComplete: a, onDragStart: o, onDragReset: c } = e,
        d = n.findIndex((e) => e.id === t.id),
        {
            drag: h,
            dragSourcePosition: m,
            drop: p,
            setIsDraggable: x
        } = (0, u.Z)({
            type: 'CHANNEL_SETTINGS_FORUM_TAGS',
            index: d,
            optionId: t.id,
            onDragStart: o,
            onDragComplete: a,
            onDragReset: c
        });
    return (0, i.jsx)('div', {
        className: r()(v.container, {
            [v.dropIndicatorBefore]: null != m && d < m,
            [v.dropIndicatorAfter]: null != m && d > m
        }),
        ref: (e) => h(p(e)),
        onMouseEnter: () => x(l),
        onMouseLeave: () => x(!1),
        children: (0, i.jsx)(g.Z, {
            tag: t,
            disabled: !l,
            ariaLabel: f.intl.formatToPlainString(f.t.jhSvBw, { name: t.name }),
            onClick: l ? () => s(t) : void 0
        })
    });
}
