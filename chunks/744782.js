t.d(n, {
    Z: function () {
        return C;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(264229),
    s = t(366980),
    o = t(603236),
    c = t(939863),
    d = t(984933),
    u = t(430824),
    m = t(341165),
    x = t(626135),
    h = t(572004),
    g = t(971130),
    v = t(230900),
    j = t(981631),
    p = t(388032),
    f = t(880083);
let { INVITE_OPTIONS_7_DAYS: I, INVITE_OPTIONS_UNLIMITED: N } = g.ZP;
function C(e) {
    var n, t, C;
    let { onClose: E, event: S } = e,
        T = null == S ? void 0 : S.guild_id,
        y = (0, i.e7)(
            [d.ZP],
            () => {
                var e;
                return null != T ? (null === (e = d.ZP.getDefaultChannel(T)) || void 0 === e ? void 0 : e.id) : null;
            },
            [T]
        ),
        b = (0, i.e7)([u.Z], () => u.Z.getGuild(T), [T]),
        { channel_id: Z, id: R } = null != S ? S : {},
        _ = (0, i.e7)(
            [m.Z],
            () => {
                let e = null != Z ? Z : y;
                return null == e ? null : m.Z.getInvite(e);
            },
            [Z, y]
        );
    if (null == S) return E(), null;
    let k = null !== (n = null == b ? void 0 : b.vanityURLCode) && void 0 !== n ? n : null == _ ? void 0 : _.code,
        A =
            null != k
                ? (0, a.tV)({
                      baseCode: k,
                      guildScheduledEventId: R
                  })
                : null,
        D = null == A || null == _,
        L = (0, s.Z)(null != A ? A : ''),
        B = null !== (t = null == _ ? void 0 : _.maxAge) && void 0 !== t ? t : I.value,
        M = null !== (C = null == _ ? void 0 : _.maxUses) && void 0 !== C ? C : N.value;
    return (0, l.jsxs)('div', {
        className: f.container,
        children: [
            (0, l.jsx)(r.Clickable, {
                onClick: E,
                className: f.close,
                'aria-label': p.intl.string(p.t.cpT0Cg),
                children: (0, l.jsx)(r.XSmallIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, l.jsx)(c.Z, {
                children: (0, l.jsx)('div', {
                    className: f.iconContainer,
                    children: (0, l.jsx)(r.CalendarIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 30,
                        width: 30,
                        className: f.icon
                    })
                })
            }),
            (0, l.jsx)(r.Heading, {
                variant: 'heading-xl/semibold',
                className: f.header,
                children: p.intl.string(p.t.UzNv7u)
            }),
            (0, l.jsx)(r.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: f.body,
                children: p.intl.string(p.t.UetJjI)
            }),
            (0, l.jsxs)('div', {
                className: f.invite,
                children: [
                    (0, l.jsx)(o.S, {
                        value: L,
                        autoFocus: !1,
                        onCopy: (e) => {
                            if (D) return;
                            (0, h.JG)(e);
                            let n = (0, v.xC)(S.entity_type);
                            x.default.track(j.rMx.COPY_INSTANT_INVITE, {
                                server: S.guild_id,
                                channel: Z,
                                channel_type: n,
                                location: j.t4x.GUILD_EVENTS,
                                code: _.code,
                                guild_scheduled_event_id: null == S ? void 0 : S.id
                            });
                        }
                    }),
                    (null == b ? void 0 : b.vanityURLCode) == null &&
                        (0, l.jsx)(r.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: f.inviteDetail,
                            children: (0, g.Vg)(B, M)
                        })
                ]
            })
        ]
    });
}
