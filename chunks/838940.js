n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(528027),
    o = n(686807),
    c = n(113318),
    u = n(495347);
function d(e) {
    let { benefit: t, guildId: n } = e,
        i = (0, c.Z)(n, t.ref_id),
        d = (0, r.jsx)(a.Z, {
            guildId: n,
            emojiId: t.emoji_id,
            emojiName: t.emoji_name
        }),
        h =
            null != i
                ? (0, r.jsx)(s.Clickable, {
                      className: u.__invalid_channelLink,
                      onClick: i.navigateToChannel,
                      'aria-label': i.ariaLabel,
                      role: 'link',
                      children: (0, r.jsx)(s.Text, {
                          variant: 'text-md/medium',
                          color: 'header-primary',
                          className: l()(u.name, u.linkedName),
                          children: (0, o.Z)(t)
                      })
                  })
                : (0, r.jsx)(s.Text, {
                      variant: 'text-md/medium',
                      color: 'header-primary',
                      className: u.name,
                      children: (0, o.Z)(t)
                  });
    return (0, r.jsxs)('div', {
        className: u.container,
        children: [
            (0, r.jsxs)('div', {
                className: u.infoContainer,
                children: [
                    h,
                    (0, r.jsx)(s.Text, {
                        color: 'interactive-normal',
                        variant: 'text-sm/normal',
                        children: t.description
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: u.emojiContainer,
                children: d
            })
        ]
    });
}
