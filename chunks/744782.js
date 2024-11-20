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
    f = t(981631),
    j = t(388032),
    N = t(871661);
let { INVITE_OPTIONS_7_DAYS: I, INVITE_OPTIONS_UNLIMITED: p } = g.ZP;
function C(e) {
    var n, t, C;
    let { onClose: E, event: S } = e,
        T = null == S ? void 0 : S.guild_id,
        Z = (0, i.e7)(
            [d.ZP],
            () => {
                var e;
                return null != T ? (null === (e = d.ZP.getDefaultChannel(T)) || void 0 === e ? void 0 : e.id) : null;
            },
            [T]
        ),
        y = (0, i.e7)([u.Z], () => u.Z.getGuild(T), [T]),
        { channel_id: b, id: _ } = null != S ? S : {},
        R = (0, i.e7)(
            [m.Z],
            () => {
                let e = null != b ? b : Z;
                return null == e ? null : m.Z.getInvite(e);
            },
            [b, Z]
        );
    if (null == S) return E(), null;
    let A = null !== (n = null == y ? void 0 : y.vanityURLCode) && void 0 !== n ? n : null == R ? void 0 : R.code,
        k =
            null != A
                ? (0, a.tV)({
                      baseCode: A,
                      guildScheduledEventId: _
                  })
                : null,
        L = null == k || null == R,
        D = (0, s.Z)(null != k ? k : ''),
        z = null !== (t = null == R ? void 0 : R.maxAge) && void 0 !== t ? t : I.value,
        B = null !== (C = null == R ? void 0 : R.maxUses) && void 0 !== C ? C : p.value;
    return (0, l.jsxs)('div', {
        className: N.container,
        children: [
            (0, l.jsx)(r.Clickable, {
                onClick: E,
                className: N.close,
                'aria-label': j.intl.string(j.t.cpT0Cg),
                children: (0, l.jsx)(r.XSmallIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, l.jsx)(c.Z, {
                children: (0, l.jsx)('div', {
                    className: N.iconContainer,
                    children: (0, l.jsx)(r.CalendarIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 30,
                        width: 30,
                        className: N.icon
                    })
                })
            }),
            (0, l.jsx)(r.Heading, {
                variant: 'heading-xl/semibold',
                className: N.header,
                children: j.intl.string(j.t.UzNv7u)
            }),
            (0, l.jsx)(r.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: N.body,
                children: j.intl.string(j.t.UetJjI)
            }),
            (0, l.jsxs)('div', {
                className: N.invite,
                children: [
                    (0, l.jsx)(o.S, {
                        value: D,
                        autoFocus: !1,
                        onCopy: (e) => {
                            if (L) return;
                            (0, h.JG)(e);
                            let n = (0, v.xC)(S.entity_type);
                            x.default.track(f.rMx.COPY_INSTANT_INVITE, {
                                server: S.guild_id,
                                channel: b,
                                channel_type: n,
                                location: f.t4x.GUILD_EVENTS,
                                code: R.code,
                                guild_scheduled_event_id: null == S ? void 0 : S.id
                            });
                        }
                    }),
                    (null == y ? void 0 : y.vanityURLCode) == null &&
                        (0, l.jsx)(r.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: N.inviteDetail,
                            children: (0, g.Vg)(z, B)
                        })
                ]
            })
        ]
    });
}
