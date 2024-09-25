n.d(t, {
    f: function () {
        return S;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(481060),
    l = n(541716),
    u = n(419922),
    c = n(665906),
    d = n(271383),
    _ = n(430824),
    E = n(496675),
    f = n(594174),
    h = n(838440),
    p = n(779139),
    m = n(981631),
    I = n(689938),
    T = n(280586);
let g = (e) => {
        let { channel: t, message: n } = e,
            [r, o] = a.useState(!1),
            c = (0, p.y6)(n.id),
            d = a.useCallback(() => {
                (0, h.v)({
                    type: l.I.FORM,
                    content: '',
                    channel: t
                }).then((e) => {
                    let { valid: r } = e;
                    if (!!r) (0, p.TZ)(t, n, c.id);
                });
            }, [t, n, c]);
        return (0, i.jsx)('div', {
            className: T.welcomeCTA,
            children: (0, i.jsxs)(s.Button, {
                className: T.welcomeCTAButtonOuter,
                innerClassName: T.welcomeCTAButton,
                color: s.ButtonColors.PRIMARY,
                onMouseEnter: () => o(!0),
                onMouseLeave: () => o(!1),
                onClick: d,
                children: [
                    (0, i.jsx)(u.ZP, {
                        className: T.welcomeCTASticker,
                        isInteracting: r,
                        sticker: c,
                        size: 28
                    }),
                    I.Z.Messages.WELCOME_CTA_LABEL
                ]
            })
        });
    },
    S = (e) => {
        let { message: t, channel: n } = e,
            r = n.getGuildId(),
            a = (0, o.e7)([f.default, E.Z, _.Z, d.ZP], () => {
                var e;
                let i = f.default.getCurrentUser(),
                    a = (0, c.xl)(n),
                    o = E.Z.can(m.Plq.SEND_MESSAGES, n),
                    s = null != r && null != i && (null === (e = d.ZP.getMember(r, i.id)) || void 0 === e ? void 0 : e.isPending),
                    l = t.author.bot,
                    u = _.Z.getGuild(r),
                    h = null != u && (u.systemChannelFlags & m.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
                return o && !a && !s && !l && h;
            });
        return null != r && a
            ? (0, i.jsx)(g, {
                  message: t,
                  channel: n
              })
            : null;
    };
