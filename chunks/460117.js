n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var o = n(481060),
    l = n(596454),
    r = n(318766),
    s = n(907040),
    a = n(273039),
    d = n(185923);
function c(e) {
    let { className: t, emojiClassName: n, emoji: c, setEmoji: u, channel: m } = e,
        h = (e) => (t, n) => {
            var i, o;
            null != t &&
                (null == t.id
                    ? u({ name: null !== (i = t.optionallyDiverseSequence) && void 0 !== i ? i : '' })
                    : u({
                          id: t.id,
                          name: null !== (o = t.originalName) && void 0 !== o ? o : t.name,
                          animated: t.animated
                      }),
                n && e());
        },
        v =
            null == c || null == c.name
                ? null
                : () => {
                      var e;
                      return (0, i.jsx)(l.Z, {
                          className: n,
                          animated: null !== (e = c.animated) && void 0 !== e && e,
                          emojiId: c.id,
                          emojiName: c.name
                      });
                  };
    return (0, i.jsx)(a.Z, {
        hasSetEmoji: null != c && null != c.name,
        onClick: () => {
            u(null);
        },
        children: (0, i.jsx)(o.Popout, {
            position: 'bottom',
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(s.Z, {
                    closePopout: t,
                    onSelectEmoji: h(t),
                    pickerIntention: d.Hz.COMMUNITY_CONTENT,
                    channel: m
                });
            },
            children: (e, n) => {
                let { isShown: o } = n;
                return (0, i.jsx)(r.Z, {
                    ...e,
                    tabIndex: 0,
                    active: o,
                    className: t,
                    renderButtonContents: v
                });
            }
        })
    });
}
