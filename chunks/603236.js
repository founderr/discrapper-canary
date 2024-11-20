t.d(n, {
    I: function () {
        return Z;
    },
    S: function () {
        return T;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(533800),
    o = t(442837),
    c = t(846519),
    d = t(481060),
    u = t(914010),
    m = t(246946),
    x = t(626135),
    h = t(572004),
    g = t(630388),
    v = t(971130),
    f = t(530436),
    j = t(245335),
    N = t(981631),
    I = t(388032),
    p = t(871820),
    C = t(803636),
    E = t(739017),
    S = t(113207);
let T = o.ZP.connectStores([m.Z], () => ({ hideValue: m.Z.hideInstantInvites }))((e) => {
        let { value: n, autoFocus: t, hideValue: r, onCopy: s, disabled: o } = e,
            [u, m] = i.useState(!1),
            [x, g] = i.useState(!1),
            v = i.useMemo(() => new c.sW(1000, () => g(!1)), [g]);
        return (
            i.useEffect(
                () => () => {
                    v.cancel();
                },
                [v]
            ),
            (0, l.jsxs)('div', {
                className: a()(C.input, E.__invalid_flexJustifyBetween, E.flexCenter, {
                    [C.success]: x,
                    [C.focused]: u
                }),
                children: [
                    (0, l.jsx)(d.TextInput, {
                        className: p.copyInput,
                        name: 'invite',
                        value: r ? I.intl.string(I.t['6HzNgY']) : n,
                        editable: !1,
                        inputClassName: p.input,
                        autoFocus: t,
                        onFocus: () => (t ? m(!0) : null),
                        onBlur: () => (t ? m(!1) : null),
                        spellCheck: 'false',
                        onClick: (e) => e.currentTarget.select(),
                        'aria-label': I.intl.string(I.t.qreV29),
                        disabled: o
                    }),
                    h.wS
                        ? (0, l.jsx)(d.Button, {
                              size: d.Button.Sizes.SMALL,
                              color: x ? d.Button.Colors.GREEN : d.Button.Colors.BRAND,
                              className: p.copyButton,
                              onClick: () => {
                                  g(!0), v.delay(), s(n);
                              },
                              disabled: o,
                              children: x ? I.intl.string(I.t.q30c5u) : I.intl.string(I.t.OpuAlJ)
                          })
                        : null
                ]
            })
        );
    }),
    Z = (e) => {
        let { guild: n, noInvitesAvailable: t, showFriends: r, onClose: o, modalState: c, isGuestInviteCreationToggleEnabled: m, inviteFlags: C, setInviteFlags: E, showGuestInviteToggleForCurrentVoiceChannel: Z, copyValue: y, changePage: b, inviteChannel: _, source: R, code: A, guildScheduledEvent: k, disabled: L } = e,
            { maxAge: D, maxUses: z, networkError: B, showVanityURL: M } = c,
            G = i.useCallback(() => {
                (0, h.JG)(y),
                    x.default.track(N.rMx.COPY_INSTANT_INVITE, {
                        server: u.Z.getGuildId(),
                        channel: null == _ ? void 0 : _.id,
                        channel_type: null == _ ? void 0 : _.type,
                        location: R,
                        code: A,
                        guild_scheduled_event_id: null == k ? void 0 : k.id
                    });
            }, [y, _, R, A, k]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(T, {
                    value: y,
                    autoFocus: r,
                    onCopy: G,
                    disabled: L
                }),
                m
                    ? (0, l.jsx)('div', {
                          className: p.temporaryMembershipContainerBackground,
                          children: (0, l.jsx)(d.FormSwitch, {
                              className: p.temporaryMembershipContainer,
                              value: (0, g.yE)(C, s.$.IS_GUEST_INVITE),
                              onChange: (e) => E((0, g.mB)(C, s.$.IS_GUEST_INVITE, e)),
                              note: I.intl.string(I.t['/FeTKy']),
                              disabled: L,
                              hideBorder: !0,
                              children: Z ? I.intl.string(I.t.BPL98f) : I.intl.string(I.t['2snqsL'])
                          })
                      })
                    : null,
                t || M
                    ? null
                    : (0, l.jsxs)(d.Text, {
                          variant: 'text-xs/normal',
                          className: a()(S.marginTop8, p.footerText),
                          children: [
                              (0, v.Vg)(D, z),
                              ' ',
                              r
                                  ? (0, l.jsx)(d.Anchor, {
                                        onClick: () => b(j.RV.SETTINGS),
                                        children: I.intl.string(I.t.VNe8Pz)
                                    })
                                  : null
                          ]
                      }),
                !t && r && M
                    ? (0, l.jsxs)(d.Text, {
                          variant: 'text-xs/normal',
                          className: a()(S.marginTop8, p.footerText),
                          children: [
                              I.intl.string(I.t['0M2U9/']),
                              ' ',
                              (0, l.jsx)(d.Anchor, {
                                  onClick: () => b(j.RV.SETTINGS),
                                  children: I.intl.string(I.t.VNe8Pz)
                              })
                          ]
                      })
                    : null,
                null != B
                    ? (0, l.jsx)(f.W, {
                          guild: n,
                          error: B,
                          onClose: o
                      })
                    : null
            ]
        });
    };
