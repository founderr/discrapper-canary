n.d(t, {
    Z: function () {
        return B;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(512722),
    s = n.n(o),
    c = n(392711),
    d = n.n(c),
    u = n(399606),
    m = n(692547),
    h = n(481060),
    p = n(447543),
    g = n(225433),
    x = n(129861),
    f = n(493544),
    b = n(700582),
    v = n(410030),
    C = n(933557),
    N = n(346486),
    I = n(600164),
    j = n(666657),
    _ = n(487419),
    T = n(664452),
    S = n(560114),
    Z = n(699516),
    E = n(594174),
    y = n(965638),
    A = n(981631),
    R = n(388032),
    k = n(690873),
    L = n(869042),
    O = n(113207);
let w = {
    INVITER: 3,
    INVITE_CODE: 3,
    USES: 1,
    EXPIRES: 2
};
function M(e) {
    var t, n;
    let { invite: l, showChannel: r = !1, inviteDisabled: o = !1, hide: s = !1 } = e,
        c = l.uses;
    return (
        l.maxUses > 0 && (c = ''.concat(l.uses, '/').concat(l.maxUses)),
        (0, i.jsxs)(I.Z, {
            className: a()(k.inviteSettingsInviteRow, L.card, { [k.inviteDisabledRow]: o }),
            children: [
                (0, i.jsx)(I.Z, {
                    grow: w.INVITER,
                    basis: 0,
                    align: I.Z.Align.CENTER,
                    className: a()(k.text),
                    children: (0, i.jsxs)(I.Z.Child, {
                        children: [
                            null == (t = l.inviter)
                                ? null
                                : (0, i.jsxs)('div', {
                                      className: k.user,
                                      children: [
                                          (0, i.jsx)(b.Z, {
                                              user: t,
                                              size: h.AvatarSizes.SIZE_20,
                                              className: k.avatar
                                          }),
                                          (0, i.jsx)(x.Z, {
                                              className: k.username,
                                              discriminatorClass: k.discriminator,
                                              user: t
                                          })
                                      ]
                                  }),
                            ((n = l.channel),
                            r
                                ? (0, i.jsx)(h.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: (0, C.F6)(n, E.default, Z.Z, !0)
                                  })
                                : null)
                        ]
                    })
                }),
                (0, i.jsx)(I.Z, {
                    grow: w.INVITE_CODE,
                    shrink: 1,
                    basis: 0,
                    align: I.Z.Align.CENTER,
                    className: k.text,
                    children: (0, i.jsx)(h.Text, {
                        className: k.inviteCode,
                        variant: 'text-sm/normal',
                        children: s ? '...' : l.code
                    })
                }),
                (0, i.jsx)(I.Z, {
                    grow: w.USES,
                    basis: 0,
                    justify: I.Z.Justify.END,
                    align: I.Z.Align.CENTER,
                    className: a()(k.text),
                    children: (0, i.jsx)(h.Text, {
                        className: k.uses,
                        variant: 'text-sm/normal',
                        children: c
                    })
                }),
                (0, i.jsx)(I.Z, {
                    grow: w.EXPIRES,
                    basis: 0,
                    align: I.Z.Align.CENTER,
                    justify: I.Z.Justify.END,
                    className: a()(k.text, k.countdownColumn),
                    children: (0, i.jsx)(h.Text, {
                        className: k.countdown,
                        variant: 'text-sm/normal',
                        children: (0, i.jsx)(N.Z, { deadline: l.getExpiresAt() })
                    })
                }),
                (0, i.jsx)(g.Z, {
                    className: k.revokeInvite,
                    onClick: () => {
                        p.Z.revokeInvite(l);
                    }
                })
            ]
        })
    );
}
function B(e) {
    let { invites: t, guild: r, hide: a, channel: o = null, showChannel: c = !1, loading: p = !1, canCreateInvites: g = !1 } = e;
    s()(null != r, 'guild is required');
    let x = (0, y.M)(r),
        b = (0, u.e7)([_.Z], () => _.Z.getGuildIncident(r.id)),
        C = r.hasFeature(A.oNc.INVITES_DISABLED) || ((null == b ? void 0 : b.invitesDisabledUntil) != null && new Date(b.invitesDisabledUntil) > new Date()),
        N = (0, v.ZP)(),
        Z = l.useMemo(
            () =>
                null == t || p
                    ? []
                    : d()(t)
                          .sortBy((e) => {
                              var t, n;
                              return (null !== (n = null === (t = e.inviter) || void 0 === t ? void 0 : t.username) && void 0 !== n ? n : '').toLowerCase();
                          })
                          .value(),
            [t, p]
        ),
        E = () => {
            (0, h.openModalLazy)(
                async () => (e) =>
                    (0, i.jsx)(S.default, {
                        ...e,
                        channel: o,
                        guild: r,
                        source: A.t4x.SETTINGS_INVITE
                    })
            );
        },
        L = () => {
            let e = { source: j.Zu.GUILD_SETTINGS };
            (0, h.openModalLazy)(
                async () => (t) =>
                    (0, i.jsx)(T.default, {
                        ...t,
                        guildId: r.id,
                        analyticsData: e
                    })
            );
        };
    return (0, i.jsx)(f.Xi, {
        sections: [Math.max(1, Z.length)],
        renderSection: () => {
            let e;
            return (
                (e =
                    0 !== Z.length || p
                        ? (0, i.jsxs)(I.Z, {
                              children: [
                                  (0, i.jsx)(I.Z.Child, {
                                      grow: w.INVITER,
                                      basis: 0,
                                      className: O.marginReset,
                                      children: (0, i.jsx)(h.FormTitle, { children: R.intl.string(R.t.EgHyKy) })
                                  }),
                                  (0, i.jsx)(I.Z.Child, {
                                      basis: 0,
                                      grow: w.INVITE_CODE,
                                      className: O.marginReset,
                                      children: (0, i.jsx)(h.FormTitle, { children: R.intl.string(R.t.LBlFEB) })
                                  }),
                                  (0, i.jsx)(I.Z.Child, {
                                      grow: w.USES,
                                      basis: 0,
                                      className: k.textAlignRight,
                                      children: (0, i.jsx)(h.FormTitle, { children: R.intl.string(R.t.erWrmJ) })
                                  }),
                                  (0, i.jsx)(I.Z.Child, {
                                      grow: w.EXPIRES,
                                      basis: 0,
                                      className: k.textAlignRight,
                                      children: (0, i.jsx)(h.FormTitle, { children: R.intl.string(R.t['1aM27e']) })
                                  })
                              ]
                          })
                        : (0, i.jsxs)(h.EmptyState, {
                              theme: N,
                              children: [
                                  (0, i.jsx)(h.EmptyStateImage, {
                                      darkSrc: n(914814),
                                      lightSrc: n(370392),
                                      width: 256,
                                      height: 130
                                  }),
                                  (0, i.jsx)(h.EmptyStateText, {
                                      note: R.intl.string(R.t.F53CAQ),
                                      children: R.intl.string(R.t['+nLJkZ'])
                                  })
                              ]
                          })),
                (0, i.jsx)(
                    h.FormSection,
                    {
                        className: k.headerSection,
                        children: (0, i.jsxs)(h.HeadingLevel, {
                            component: (0, i.jsx)(h.FormTitle, {
                                tag: h.FormTitleTags.H1,
                                children: R.intl.string(R.t['9F90iY'])
                            }),
                            children: [
                                (0, i.jsx)(h.FormText, {
                                    className: O.marginBottom20,
                                    type: h.FormTextTypes.DESCRIPTION,
                                    children: g ? R.intl.format(R.t['97VdNj'], { onCreateInvite: E }) : R.intl.string(R.t.WDw38P)
                                }),
                                (0, i.jsxs)('div', {
                                    className: k.inviteDisabledContainer,
                                    children: [
                                        (0, i.jsx)(h.Button, {
                                            size: h.Button.Sizes.SMALL,
                                            color: C ? h.Button.Colors.BRAND : h.Button.Colors.RED,
                                            disabled: !x,
                                            onClick: L,
                                            children: C ? R.intl.string(R.t['/dbw3N']) : R.intl.string(R.t.Uwsjn5)
                                        }),
                                        C &&
                                            (0, i.jsxs)('div', {
                                                className: k.inviteDisabledTip,
                                                children: [
                                                    (0, i.jsx)(h.CircleWarningIcon, {
                                                        size: 'custom',
                                                        width: 20,
                                                        height: 20,
                                                        color: m.Z.unsafe_rawColors.YELLOW_300.css
                                                    }),
                                                    (0, i.jsx)(h.Text, {
                                                        variant: 'text-sm/normal',
                                                        children: R.intl.string(R.t['2LLbj4'])
                                                    })
                                                ]
                                            })
                                    ]
                                }),
                                (0, i.jsx)(h.FormDivider, { className: k.headerDivider }),
                                e
                            ]
                        })
                    },
                    'header'
                )
            );
        },
        renderRow: (e) => {
            let { section: t, row: n } = e;
            if (0 === Z.length && 0 === n && p)
                return (0, i.jsx)(
                    h.Spinner,
                    {
                        className: O.marginTop20,
                        type: h.Spinner.Type.SPINNING_CIRCLE
                    },
                    'spinner'
                );
            if (t > 0) return null;
            let l = Z[n];
            return null == l
                ? null
                : (0, i.jsx)(
                      M,
                      {
                          hide: a,
                          invite: l,
                          showChannel: c,
                          inviteDisabled: C
                      },
                      l.code
                  );
        },
        rowHeight: (e, t) => (e > 0 ? 0 : 0 === Z.length && 0 === t && p ? 62 : null != Z[t] ? 62 : 0),
        sectionHeight: () => (0 !== Z.length || p ? 120 : 344)
    });
}
