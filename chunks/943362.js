n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(239091),
    l = n(782568),
    u = n(364640),
    c = n(124072),
    d = n(198620),
    f = n(746878),
    _ = n(981631),
    p = n(940617),
    h = n(578786);
function m(e) {
    return {
        react(t, i, m) {
            let g = m.noStyleAndInteraction
                    ? void 0
                    : async (n) => {
                          let r = await (0, d.B_)(t.attachmentUrl);
                          e.shouldStopPropagation && (null == n || n.stopPropagation()), u.Z.trackLinkClicked(r), e.shouldCloseDefaultModals && (0, s.closeAllModals)(), (0, l.Z)(r);
                      },
                E = m.noStyleAndInteraction
                    ? _.dG4
                    : (e) => {
                          (0, o.jW)(e, async () => {
                              let { default: e } = await n.e('98466').then(n.bind(n, 151578));
                              return (n) =>
                                  (0, r.jsx)(e, {
                                      ...n,
                                      attachmentUrl: t.attachmentUrl,
                                      attachmentName: t.attachmentName
                                  });
                          });
                      };
            return (0, r.jsxs)(
                c.Z,
                {
                    role: 'link',
                    href: t.attachmentUrl,
                    onClick: g,
                    onContextMenu: E,
                    className: 'attachmentLink',
                    children: [
                        (0, r.jsx)(s.AttachmentIcon, {
                            size: 'xs',
                            className: a()(h.icon, p.icon),
                            color: s.tokens.colors.MENTION_FOREGROUND
                        }),
                        (0, f.S)(t, i, m)
                    ]
                },
                m.key
            );
        }
    };
}
