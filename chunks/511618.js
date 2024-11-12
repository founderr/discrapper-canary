var r = n(200651),
    i = n(192379),
    a = n(906732),
    s = n(965386),
    o = n(686546),
    l = n(626135),
    u = n(768581),
    c = n(981631),
    d = n(185923),
    f = n(474936),
    _ = n(388032),
    p = n(916502);
t.Z = (e) => {
    let { emojis: t } = e,
        { analyticsLocations: n } = (0, a.ZP)();
    i.useEffect(() => {
        l.default.track(c.rMx.PREMIUM_UPSELL_VIEWED, {
            type: f.cd.EMOJI_AUTOCOMPLETE_INLINE,
            location_stack: n
        });
    }, [n]);
    let h = (0, r.jsx)('div', {
        className: p.emojis,
        children: t.slice(0, 3).map((e, t) => {
            if (null == e.id) return null;
            let n = (0, r.jsx)(
                'div',
                {
                    className: p.emojiBackground,
                    children: (0, r.jsx)('img', {
                        alt: e.name,
                        className: p.emoji,
                        src: u.ZP.getEmojiURL({
                            id: e.id,
                            animated: e.animated,
                            size: d.$U
                        })
                    })
                },
                e.id
            );
            return 2 === t
                ? n
                : (0, r.jsx)(
                      o.ZP,
                      {
                          className: p.emojiMask,
                          mask: o.ZP.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI,
                          children: n
                      },
                      e.id
                  );
        })
    });
    return (0, r.jsxs)(s.RX, {
        className: p.upsell,
        children: [(0, r.jsx)(s.z5, { children: (0, r.jsx)(s.BR, { children: _.intl.format(_.t['uEky4+'], { count: t.length }) }) }), (0, r.jsx)(s.dY, { children: h })]
    });
};
