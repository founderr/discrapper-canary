n.d(t, {
    Z: function () {
        return L;
    },
    q: function () {
        return k;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    o = n(153867),
    s = n(607070),
    c = n(100527),
    d = n(906732),
    u = n(895924),
    v = n(264165),
    m = n(70097),
    x = n(740492),
    h = n(592125),
    g = n(430824),
    C = n(496675),
    p = n(944486),
    T = n(566620),
    _ = n(317381),
    I = n(122613),
    f = n(678173),
    N = n(696068),
    j = n(361213),
    b = n(778569),
    S = n(412019),
    E = n(981631),
    y = n(388032),
    A = n(496996);
function Z(e) {
    return (0, a.e7)(
        [g.Z, C.Z],
        () => {
            let t = g.Z.getGuild(e);
            return null != t && C.Z.can(E.Plq.CREATE_INSTANT_INVITE, t);
        },
        [e]
    );
}
let O = ['embedded_background'];
function L(e) {
    var t, n;
    let { applicationId: c, guildId: d, selectedChannelId: u, setSelectedChannelId: C, enableSelectedTextChannelInvite: _ } = e,
        I = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        E = (0, f.T)(null != d ? d : null, null != c ? c : null),
        [L, k] = l.useState(_ && !x.ZP.disableInviteWithTextChannelActivityLaunch),
        B = (0, N.F)(d);
    l.useEffect(() => {
        var e;
        T.w1({ guildId: d }), C(null !== (e = (0, N.d)({ guildId: d })) && void 0 !== e ? e : void 0);
    }, [d, C]);
    let M = null == E ? void 0 : E.activity.activity_preview_video_asset_id,
        D = null != M ? (0, j.Z)(null !== (t = null == E ? void 0 : E.application.id) && void 0 !== t ? t : '', M) : null,
        { url: R } = (0, b.Z)({
            applicationId: null !== (n = null == E ? void 0 : E.application.id) && void 0 !== n ? n : '',
            size: 1024,
            names: O
        }),
        P = (0, a.e7)([g.Z], () => g.Z.getGuild(d)),
        H = (0, a.e7)([h.Z, p.Z], () => h.Z.getChannel(p.Z.getChannelId())),
        F = Z(null != d ? d : void 0);
    if ((null == E ? void 0 : E.application) == null || null == P) return null;
    let w = (null == H ? void 0 : H.name) == null || (null == H ? void 0 : H.name) === '' ? y.intl.string(y.t.PlAffn) : '#'.concat(H.name);
    return (0, i.jsxs)(r.Scroller, {
        className: A.scroll,
        children: [
            null != D || null != R
                ? (0, i.jsx)(v.Z, {
                      aspectRatio: 16 / 9,
                      className: A.imageContainer,
                      children: (0, i.jsx)(m.Z, {
                          className: A.video,
                          src: D,
                          loop: !0,
                          autoPlay: !I,
                          poster: R,
                          muted: !0
                      })
                  })
                : null,
            (0, i.jsxs)('div', {
                className: A.descriptionArea,
                children: [
                    (0, i.jsx)(r.Heading, {
                        variant: 'heading-xl/semibold',
                        children: null == E ? void 0 : E.application.name
                    }),
                    (0, i.jsx)(r.Text, {
                        className: A.descriptionAreaSubtext,
                        variant: 'text-md/normal',
                        children: null == E ? void 0 : E.application.description
                    })
                ]
            }),
            (0, i.jsx)(r.Select, {
                placeholder: y.intl.string(y.t.SUryfX),
                optionClassName: A.__invalid_option,
                options: B,
                isSelected: (e) => {
                    let { channel: t } = e;
                    return t.id === u;
                },
                select: (e) => {
                    let { channel: t } = e;
                    return C(t.id);
                },
                serialize: (e) => {
                    let { channel: t } = e;
                    return t.id;
                },
                renderOptionValue: () => {
                    let e = B.find((e) => e.value.channel.id === u);
                    return null == e
                        ? null
                        : (0, i.jsx)(S.O, {
                              channel: e.value.channel,
                              users: e.value.users
                          });
                },
                renderOptionLabel: (e) => {
                    let {
                        value: { channel: t, users: n }
                    } = e;
                    return (0, i.jsx)(S.O, {
                        channel: t,
                        users: n
                    });
                }
            }),
            F && _
                ? (0, i.jsxs)(r.Clickable, {
                      className: A.checkboxContainer,
                      onClick: () => {
                          let e = !L;
                          o.ZP.updatedUnsyncedSettings({ disableInviteWithTextChannelActivityLaunch: !e }), k(e);
                      },
                      children: [
                          (0, i.jsx)(r.Checkbox, {
                              type: r.Checkbox.Types.INVERTED,
                              className: A.checkbox,
                              value: L,
                              displayOnly: !0
                          }),
                          (0, i.jsxs)(r.Text, {
                              variant: 'text-sm/normal',
                              children: [y.intl.string(y.t.x3JFq6), ' ', (0, i.jsx)('strong', { children: w })]
                          })
                      ]
                  })
                : null
        ]
    });
}
function k(e) {
    let { applicationId: t, guildId: n, locationObject: l, onBack: o, onClose: s, selectedChannelId: v, enableSelectedTextChannelInvite: m } = e,
        { analyticsLocations: g } = (0, d.ZP)(c.Z.ACTIVITY_CHANNEL_SELECTOR),
        C = (0, f.T)(null != n ? n : null, null != t ? t : null),
        N = (0, a.e7)([h.Z, p.Z], () => h.Z.getChannel(p.Z.getChannelId())),
        j = (0, a.e7)([x.ZP], () => m && !x.ZP.disableInviteWithTextChannelActivityLaunch),
        b = (0, a.e7)([_.ZP], () => null != v && '' !== v && _.ZP.getEmbeddedActivitiesForChannel(v).some((e) => e.applicationId === t)),
        S = Z(n),
        O = async () => {
            var e;
            if (null != v && '' !== v && null != C && null != n && '' !== n)
                (await (0, I.Z)({
                    targetApplicationId: null === (e = C.application) || void 0 === e ? void 0 : e.id,
                    locationObject: l,
                    channelId: v,
                    analyticsLocations: g,
                    commandOrigin: u.bB.APPLICATION_LAUNCHER
                })) &&
                    (s(),
                    null != N &&
                        S &&
                        j &&
                        (await T.sN({
                            activityChannelId: v,
                            invitedChannelId: N.id,
                            applicationId: C.application.id,
                            location: E.Sbl.ACTIVITY_SHELF
                        })));
        };
    return (0, i.jsx)(d.Gt, {
        value: g,
        children: (0, i.jsxs)('div', {
            className: A.footerContainer,
            children: [
                (0, i.jsx)(r.Clickable, {
                    onClick: o,
                    className: A.backToBrowse,
                    children: (0, i.jsx)(r.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: y.intl.string(y.t['13/7kZ'])
                    })
                }),
                null == v
                    ? (0, i.jsx)('div', {})
                    : (0, i.jsx)(r.Button, {
                          className: A.launchButton,
                          onClick: O,
                          color: b ? r.Button.Colors.GREEN : void 0,
                          fullWidth: !0,
                          children: b ? y.intl.string(y.t.sqe0ho) : y.intl.string(y.t.QO7rOz)
                      })
            ]
        })
    });
}
