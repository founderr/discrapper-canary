t.d(n, {
    Z: function () {
        return E;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(264229),
    s = t(751499),
    o = t(366980),
    d = t(603236),
    c = t(939863),
    u = t(984933),
    m = t(430824),
    x = t(341165),
    h = t(626135),
    g = t(572004),
    v = t(971130),
    f = t(230900),
    N = t(981631),
    j = t(388032),
    I = t(871661);
let { INVITE_OPTIONS_7_DAYS: p, INVITE_OPTIONS_UNLIMITED: C } = v.ZP;
function E(e) {
    var n, t, E;
    let { onClose: S, event: T } = e,
        y = null == T ? void 0 : T.guild_id,
        Z = (0, i.e7)(
            [u.ZP],
            () => {
                var e;
                return null != y ? (null === (e = u.ZP.getDefaultChannel(y)) || void 0 === e ? void 0 : e.id) : null;
            },
            [y]
        ),
        b = (0, i.e7)([m.Z], () => m.Z.getGuild(y), [y]),
        _ = (null == b ? void 0 : b.vanityURLCode) != null && (null == b ? void 0 : b.vanityURLCode.length) > 0,
        { enabled: R } = s.Z.useExperiment(
            {
                guildId: null != y ? y : N.lds,
                location: 'bd50e8_1'
            },
            { autoTrackExposure: _ }
        ),
        { channel_id: k, id: A } = null != T ? T : {},
        L = (0, i.e7)(
            [x.Z],
            () => {
                let e = null != k ? k : Z;
                return null == e ? null : x.Z.getInvite(e);
            },
            [k, Z]
        );
    if (null == T) return S(), null;
    let D = R && null !== (n = null == b ? void 0 : b.vanityURLCode) && void 0 !== n ? n : null == L ? void 0 : L.code,
        z =
            null != D
                ? (0, a.tV)({
                      baseCode: D,
                      guildScheduledEventId: A
                  })
                : null,
        B = null == z || null == L,
        M = (0, o.Z)(null != z ? z : ''),
        G = null !== (t = null == L ? void 0 : L.maxAge) && void 0 !== t ? t : p.value,
        U = null !== (E = null == L ? void 0 : L.maxUses) && void 0 !== E ? E : C.value;
    return (0, l.jsxs)('div', {
        className: I.container,
        children: [
            (0, l.jsx)(r.Clickable, {
                onClick: S,
                className: I.close,
                'aria-label': j.intl.string(j.t.cpT0Cg),
                children: (0, l.jsx)(r.XSmallIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, l.jsx)(c.Z, {
                children: (0, l.jsx)('div', {
                    className: I.iconContainer,
                    children: (0, l.jsx)(r.CalendarIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 30,
                        width: 30,
                        className: I.icon
                    })
                })
            }),
            (0, l.jsx)(r.Heading, {
                variant: 'heading-xl/semibold',
                className: I.header,
                children: j.intl.string(j.t.UzNv7u)
            }),
            (0, l.jsx)(r.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: I.body,
                children: j.intl.string(j.t.UetJjI)
            }),
            (0, l.jsxs)('div', {
                className: I.invite,
                children: [
                    (0, l.jsx)(d.S, {
                        value: M,
                        autoFocus: !1,
                        onCopy: (e) => {
                            if (B) return;
                            (0, g.JG)(e);
                            let n = (0, f.xC)(T.entity_type);
                            h.default.track(N.rMx.COPY_INSTANT_INVITE, {
                                server: T.guild_id,
                                channel: k,
                                channel_type: n,
                                location: N.t4x.GUILD_EVENTS,
                                code: L.code,
                                guild_scheduled_event_id: null == T ? void 0 : T.id
                            });
                        }
                    }),
                    (null == b ? void 0 : b.vanityURLCode) == null &&
                        (0, l.jsx)(r.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: I.inviteDetail,
                            children: (0, v.Vg)(G, U)
                        })
                ]
            })
        ]
    });
}
