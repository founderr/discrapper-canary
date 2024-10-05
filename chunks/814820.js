n.d(t, {
    f: function () {
        return p;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(442837),
    l = n(481060),
    r = n(541716),
    o = n(419922),
    c = n(665906),
    d = n(271383),
    u = n(430824),
    _ = n(496675),
    E = n(594174),
    I = n(838440),
    m = n(779139),
    T = n(981631),
    N = n(689938),
    h = n(280586);
let C = (e) => {
        let { channel: t, message: n } = e,
            [s, c] = a.useState(!1),
            d = (0, m.y6)(n.id),
            u = a.useCallback(() => {
                (0, I.v)({
                    type: r.I.FORM,
                    content: '',
                    channel: t
                }).then((e) => {
                    let { valid: i } = e;
                    if (!!i) (0, m.TZ)(t, n, d.id);
                });
            }, [t, n, d]);
        return (0, i.jsx)('div', {
            className: h.welcomeCTA,
            children: (0, i.jsxs)(l.Button, {
                className: h.welcomeCTAButtonOuter,
                innerClassName: h.welcomeCTAButton,
                color: l.ButtonColors.PRIMARY,
                onMouseEnter: () => c(!0),
                onMouseLeave: () => c(!1),
                onClick: u,
                children: [
                    (0, i.jsx)(o.ZP, {
                        className: h.welcomeCTASticker,
                        isInteracting: s,
                        sticker: d,
                        size: 28
                    }),
                    N.Z.Messages.WELCOME_CTA_LABEL
                ]
            })
        });
    },
    p = (e) => {
        let { message: t, channel: n } = e,
            a = n.getGuildId(),
            l = (0, s.e7)([E.default, _.Z, u.Z, d.ZP], () => {
                var e;
                let i = E.default.getCurrentUser(),
                    s = (0, c.xl)(n),
                    l = _.Z.can(T.Plq.SEND_MESSAGES, n),
                    r = null != a && null != i && (null === (e = d.ZP.getMember(a, i.id)) || void 0 === e ? void 0 : e.isPending),
                    o = t.author.bot,
                    I = u.Z.getGuild(a),
                    m = null != I && (I.systemChannelFlags & T.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
                return l && !s && !r && !o && m;
            });
        return null != a && l
            ? (0, i.jsx)(C, {
                  message: t,
                  channel: n
              })
            : null;
    };
