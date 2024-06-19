t.d(n, {
  Z: function() {
    return k
  }
}), t(47120);
var i = t(735250),
  s = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(512722),
  o = t.n(r),
  c = t(392711),
  d = t.n(c),
  u = t(399606),
  I = t(692547),
  N = t(481060),
  E = t(447543),
  T = t(225433),
  m = t(129861),
  _ = t(493544),
  h = t(700582),
  O = t(410030),
  g = t(933557),
  A = t(154285),
  C = t(666657),
  S = t(487419),
  x = t(664452),
  p = t(560114),
  R = t(699516),
  Z = t(594174),
  f = t(373791),
  M = t(285952),
  L = t(965638),
  v = t(302434),
  j = t(981631),
  b = t(689938),
  D = t(735916),
  P = t(5973),
  B = t(331651);
let G = {
  INVITER: 3,
  INVITE_CODE: 3,
  USES: 1,
  EXPIRES: 2
};

function y(e) {
  var n, t;
  let {
    invite: s,
    showChannel: l = !1,
    inviteDisabled: r = !1,
    hide: o = !1
  } = e, c = s.uses;
  return s.maxUses > 0 && (c = "".concat(s.uses, "/").concat(s.maxUses)), (0, i.jsxs)(M.Z, {
    className: a()(D.inviteSettingsInviteRow, P.card, {
      [D.inviteDisabledRow]: r
    }),
    children: [(0, i.jsx)(M.Z, {
      grow: G.INVITER,
      basis: 0,
      align: M.Z.Align.CENTER,
      className: a()(D.text),
      children: (0, i.jsxs)(M.Z.Child, {
        children: [null == (n = s.inviter) ? null : (0, i.jsxs)("div", {
          className: D.user,
          children: [(0, i.jsx)(h.Z, {
            user: n,
            size: N.AvatarSizes.SIZE_20,
            className: D.avatar
          }), (0, i.jsx)(m.Z, {
            className: D.username,
            discriminatorClass: D.discriminator,
            user: n
          })]
        }), (t = s.channel, l ? (0, i.jsx)(N.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: (0, g.F6)(t, Z.default, R.Z, !0)
        }) : null)]
      })
    }), (0, i.jsx)(M.Z, {
      grow: G.INVITE_CODE,
      shrink: 1,
      basis: 0,
      align: M.Z.Align.CENTER,
      className: D.text,
      children: (0, i.jsx)(N.Text, {
        className: D.inviteCode,
        variant: "text-sm/normal",
        children: o ? "..." : s.code
      })
    }), (0, i.jsx)(M.Z, {
      grow: G.USES,
      basis: 0,
      justify: M.Z.Justify.END,
      align: M.Z.Align.CENTER,
      className: a()(D.text),
      children: (0, i.jsx)(N.Text, {
        className: D.uses,
        variant: "text-sm/normal",
        children: c
      })
    }), (0, i.jsx)(M.Z, {
      grow: G.EXPIRES,
      basis: 0,
      align: M.Z.Align.CENTER,
      justify: M.Z.Justify.END,
      className: a()(D.text, D.countdownColumn),
      children: (0, i.jsx)(N.Text, {
        className: D.countdown,
        variant: "text-sm/normal",
        children: (0, i.jsx)(f.Z, {
          deadline: s.getExpiresAt()
        })
      })
    }), (0, i.jsx)(T.Z, {
      className: D.revokeInvite,
      onClick: () => {
        E.Z.revokeInvite(s)
      }
    })]
  })
}

function k(e) {
  let {
    invites: n,
    guild: l,
    hide: a,
    channel: r = null,
    showChannel: c = !1,
    loading: E = !1,
    canCreateInvites: T = !1
  } = e;
  o()(null != l, "guild is required");
  let m = (0, L.MQ)(l),
    {
      enableInvitesDisabled: h
    } = (0, L.FR)(l),
    {
      showAlertMode: g
    } = (0, A.sw)(l.id),
    R = (0, u.e7)([S.Z], () => S.Z.getGuildIncident(l.id)),
    Z = l.hasFeature(j.oNc.INVITES_DISABLED) || g && (null == R ? void 0 : R.invitesDisabledUntil) != null && new Date(R.invitesDisabledUntil) > new Date,
    [f, P] = s.useState(!1);
  s.useEffect(() => {
    m && L.WC.trackExposure({
      guildId: l.id,
      location: "5c23b0_1"
    })
  }, [m, h, l.id]);
  let k = (0, O.ZP)(),
    U = s.useMemo(() => null == n || E ? [] : d()(n).sortBy(e => {
      var n, t;
      return (null !== (t = null === (n = e.inviter) || void 0 === n ? void 0 : n.username) && void 0 !== t ? t : "").toLowerCase()
    }).value(), [n, E]),
    H = () => {
      (0, N.openModalLazy)(async () => e => (0, i.jsx)(p.default, {
        ...e,
        channel: r,
        guild: l,
        source: j.t4x.SETTINGS_INVITE
      }))
    },
    W = async e => {
      if (!f) {
        P(!0);
        try {
          await (0, L.AG)(l, e)
        } catch (e) {} finally {
          P(!1)
        }
      }
    }, w = () => {
      if (g) {
        let e = {
          source: C.Zu.GUILD_SETTINGS
        };
        (0, N.openModalLazy)(async () => n => (0, i.jsx)(x.default, {
          ...n,
          guildId: l.id,
          analyticsData: e
        }))
      } else Z ? W(!1) : (0, N.openModalLazy)(async () => function(e) {
        return (0, i.jsx)(v.Z, {
          ...e,
          onConfirm: () => W(!0)
        })
      })
    };
  return (0, i.jsx)(_.Xi, {
    sections: [Math.max(1, U.length)],
    renderSection: () => {
      let e;
      return e = 0 !== U.length || E ? (0, i.jsxs)(M.Z, {
        children: [(0, i.jsx)(M.Z.Child, {
          grow: G.INVITER,
          basis: 0,
          className: B.marginReset,
          children: (0, i.jsx)(N.FormTitle, {
            children: b.Z.Messages.INSTANT_INVITE_INVITER
          })
        }), (0, i.jsx)(M.Z.Child, {
          basis: 0,
          grow: G.INVITE_CODE,
          className: B.marginReset,
          children: (0, i.jsx)(N.FormTitle, {
            children: b.Z.Messages.INSTANT_INVITE_INVITE_CODE
          })
        }), (0, i.jsx)(M.Z.Child, {
          grow: G.USES,
          basis: 0,
          className: D.textAlignRight,
          children: (0, i.jsx)(N.FormTitle, {
            children: b.Z.Messages.INSTANT_INVITE_USES
          })
        }), (0, i.jsx)(M.Z.Child, {
          grow: G.EXPIRES,
          basis: 0,
          className: D.textAlignRight,
          children: (0, i.jsx)(N.FormTitle, {
            children: b.Z.Messages.INSTANT_INVITE_EXPIRES
          })
        })]
      }) : (0, i.jsxs)(N.EmptyState, {
        theme: k,
        children: [(0, i.jsx)(N.EmptyStateImage, {
          darkSrc: t(914814),
          lightSrc: t(370392),
          width: 256,
          height: 130
        }), (0, i.jsx)(N.EmptyStateText, {
          note: b.Z.Messages.NO_INVITES_BODY,
          children: b.Z.Messages.NO_INVITES_LABEL
        })]
      }), (0, i.jsx)(N.FormSection, {
        className: D.headerSection,
        children: (0, i.jsxs)(N.HeadingLevel, {
          component: (0, i.jsx)(N.FormTitle, {
            tag: N.FormTitleTags.H1,
            children: b.Z.Messages.INVITES
          }),
          children: [(0, i.jsx)(N.FormText, {
            className: B.marginBottom20,
            type: N.FormTextTypes.DESCRIPTION,
            children: T ? b.Z.Messages.SETTINGS_INVITE_TIP.format({
              onCreateInvite: H
            }) : b.Z.Messages.SETTINGS_INVITE_TIP_WITHOUT_CREATE
          }), (h || g || Z) && (0, i.jsxs)("div", {
            className: D.inviteDisabledContainer,
            children: [(0, i.jsx)(N.Button, {
              size: N.Button.Sizes.SMALL,
              color: Z ? N.Button.Colors.BRAND : N.Button.Colors.RED,
              disabled: !m,
              submitting: f,
              onClick: w,
              children: Z ? b.Z.Messages.ENABLE_INVITES : b.Z.Messages.DISABLE_INVITES
            }), Z && (0, i.jsxs)("div", {
              className: D.inviteDisabledTip,
              children: [(0, i.jsx)(N.CircleExclamationPointIcon, {
                size: "custom",
                width: 20,
                height: 20,
                color: I.Z.unsafe_rawColors.YELLOW_300.css
              }), (0, i.jsx)(N.Text, {
                variant: "text-sm/normal",
                children: b.Z.Messages.INVITES_DISABLED_TIP
              })]
            })]
          }), (0, i.jsx)(N.FormDivider, {
            className: D.headerDivider
          }), e]
        })
      }, "header")
    },
    renderRow: e => {
      let {
        section: n,
        row: t
      } = e;
      if (0 === U.length && 0 === t && E) return (0, i.jsx)(N.Spinner, {
        className: B.marginTop20,
        type: N.Spinner.Type.SPINNING_CIRCLE
      }, "spinner");
      if (n > 0) return null;
      let s = U[t];
      return null == s ? null : (0, i.jsx)(y, {
        hide: a,
        invite: s,
        showChannel: c,
        inviteDisabled: Z
      }, s.code)
    },
    rowHeight: (e, n) => e > 0 ? 0 : 0 === U.length && 0 === n && E ? 62 : null != U[n] ? 62 : 0,
    sectionHeight: () => 0 !== U.length || E ? 120 : 344
  })
}