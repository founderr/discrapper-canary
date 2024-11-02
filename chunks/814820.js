n.d(t, {
    f: function () {
        return I;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(541716),
    s = n(419922),
    c = n(665906),
    u = n(271383),
    d = n(430824),
    m = n(496675),
    f = n(594174),
    h = n(838440),
    p = n(779139),
    g = n(981631),
    _ = n(388032),
    C = n(280586);
let E = (e) => {
        let { channel: t, message: n } = e,
            [l, c] = r.useState(!1),
            u = (0, p.y6)(n.id),
            d = r.useCallback(() => {
                (0, h.v)({
                    type: o.I.FORM,
                    content: '',
                    channel: t
                }).then((e) => {
                    let { valid: i } = e;
                    if (!!i) (0, p.TZ)(t, n, u.id);
                });
            }, [t, n, u]);
        return (0, i.jsx)('div', {
            className: C.welcomeCTA,
            children: (0, i.jsxs)(a.Button, {
                className: C.welcomeCTAButtonOuter,
                innerClassName: C.welcomeCTAButton,
                color: a.ButtonColors.PRIMARY,
                onMouseEnter: () => c(!0),
                onMouseLeave: () => c(!1),
                onClick: d,
                children: [
                    (0, i.jsx)(s.ZP, {
                        className: C.welcomeCTASticker,
                        isInteracting: l,
                        sticker: u,
                        size: 28
                    }),
                    _.intl.string(_.t['7Tj6HR'])
                ]
            })
        });
    },
    I = (e) => {
        let { message: t, channel: n } = e,
            r = n.getGuildId(),
            a = (0, l.e7)([f.default, m.Z, d.Z, u.ZP], () => {
                var e;
                let i = f.default.getCurrentUser(),
                    l = (0, c.xl)(n),
                    a = m.Z.can(g.Plq.SEND_MESSAGES, n),
                    o = null != r && null != i && (null === (e = u.ZP.getMember(r, i.id)) || void 0 === e ? void 0 : e.isPending),
                    s = t.author.bot,
                    h = d.Z.getGuild(r),
                    p = null != h && (h.systemChannelFlags & g.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
                return a && !l && !o && !s && p;
            });
        return null != r && a
            ? (0, i.jsx)(E, {
                  message: t,
                  channel: n
              })
            : null;
    };
