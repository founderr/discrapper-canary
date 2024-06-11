"use strict";
l.r(t), l.d(t, {
  default: function() {
    return H
  }
}), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("120356"),
  i = l.n(s),
  r = l("512722"),
  o = l.n(r),
  d = l("392711"),
  u = l.n(d),
  c = l("399606"),
  f = l("692547"),
  I = l("481060"),
  m = l("447543"),
  T = l("225433"),
  E = l("129861"),
  N = l("493544"),
  _ = l("700582"),
  S = l("410030"),
  h = l("933557"),
  g = l("154285"),
  p = l("666657"),
  O = l("487419"),
  A = l("664452"),
  C = l("560114"),
  x = l("699516"),
  R = l("594174"),
  M = l("373791"),
  L = l("285952"),
  v = l("759231"),
  j = l("965638"),
  P = l("302434"),
  b = l("981631"),
  D = l("689938"),
  y = l("877602"),
  G = l("164149"),
  B = l("611273");
let k = {
  INVITER: 3,
  INVITE_CODE: 3,
  USES: 1,
  EXPIRES: 2
};

function U(e) {
  var t, l;
  let {
    invite: a,
    showChannel: s = !1,
    inviteDisabled: r = !1,
    hide: o = !1
  } = e, d = a.uses;
  return a.maxUses > 0 && (d = "".concat(a.uses, "/").concat(a.maxUses)), (0, n.jsxs)(L.default, {
    className: i()(y.inviteSettingsInviteRow, G.card, {
      [y.inviteDisabledRow]: r
    }),
    children: [(0, n.jsx)(L.default, {
      grow: k.INVITER,
      basis: 0,
      align: L.default.Align.CENTER,
      className: i()(y.text),
      children: (0, n.jsxs)(L.default.Child, {
        children: [null == (t = a.inviter) ? null : (0, n.jsxs)("div", {
          className: y.user,
          children: [(0, n.jsx)(_.default, {
            user: t,
            size: I.AvatarSizes.SIZE_20,
            className: y.avatar
          }), (0, n.jsx)(E.default, {
            className: y.username,
            discriminatorClass: y.discriminator,
            user: t
          })]
        }), (l = a.channel, s ? (0, n.jsx)(I.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: (0, h.computeChannelName)(l, R.default, x.default, !0)
        }) : null)]
      })
    }), (0, n.jsx)(L.default, {
      grow: k.INVITE_CODE,
      shrink: 1,
      basis: 0,
      align: L.default.Align.CENTER,
      className: y.text,
      children: (0, n.jsx)(I.Text, {
        className: y.inviteCode,
        variant: "text-sm/normal",
        children: o ? "..." : a.code
      })
    }), (0, n.jsx)(L.default, {
      grow: k.USES,
      basis: 0,
      justify: L.default.Justify.END,
      align: L.default.Align.CENTER,
      className: i()(y.text),
      children: (0, n.jsx)(I.Text, {
        className: y.uses,
        variant: "text-sm/normal",
        children: d
      })
    }), (0, n.jsx)(L.default, {
      grow: k.EXPIRES,
      basis: 0,
      align: L.default.Align.CENTER,
      justify: L.default.Justify.END,
      className: i()(y.text, y.countdownColumn),
      children: (0, n.jsx)(I.Text, {
        className: y.countdown,
        variant: "text-sm/normal",
        children: (0, n.jsx)(M.default, {
          deadline: a.getExpiresAt()
        })
      })
    }), (0, n.jsx)(T.default, {
      className: y.revokeInvite,
      onClick: () => {
        m.default.revokeInvite(a)
      }
    })]
  })
}

function H(e) {
  let {
    invites: t,
    guild: s,
    hide: i,
    channel: r = null,
    showChannel: d = !1,
    loading: m = !1,
    canCreateInvites: T = !1
  } = e;
  o()(null != s, "guild is required");
  let E = (0, j.useInvitesDisabledPermission)(s),
    {
      enableInvitesDisabled: _
    } = (0, j.useInvitesDisabledExperiment)(s),
    {
      showAlertMode: h
    } = (0, g.useGuildAlertModeEnabled)(s.id),
    x = (0, c.useStateFromStores)([O.default], () => O.default.getGuildIncident(s.id)),
    R = s.hasFeature(b.GuildFeatures.INVITES_DISABLED) || h && (null == x ? void 0 : x.invitesDisabledUntil) != null && new Date(x.invitesDisabledUntil) > new Date,
    [M, G] = a.useState(!1);
  a.useEffect(() => {
    E && j.InvitesDisabledExperiment.trackExposure({
      guildId: s.id,
      location: "5c23b0_1"
    })
  }, [E, _, s.id]);
  let H = (0, S.default)(),
    F = a.useMemo(() => null == t || m ? [] : u()(t).sortBy(e => {
      var t, l;
      return (null !== (l = null === (t = e.inviter) || void 0 === t ? void 0 : t.username) && void 0 !== l ? l : "").toLowerCase()
    }).value(), [t, m]),
    w = () => {
      (0, I.openModalLazy)(async () => e => (0, n.jsx)(C.default, {
        ...e,
        channel: r,
        guild: s,
        source: b.InstantInviteSources.SETTINGS_INVITE
      }))
    },
    W = async e => {
      if (!M) {
        G(!0);
        try {
          await (0, j.setInvitesDisabled)(s, e)
        } catch (e) {} finally {
          G(!1)
        }
      }
    }, V = () => {
      if (h) {
        let e = {
          source: p.GuildIncidentActionSources.GUILD_SETTINGS
        };
        (0, I.openModalLazy)(async () => t => (0, n.jsx)(A.default, {
          ...t,
          guildId: s.id,
          analyticsData: e
        }))
      } else R ? W(!1) : (0, I.openModalLazy)(async () => function(e) {
        return (0, n.jsx)(P.default, {
          ...e,
          onConfirm: () => W(!0)
        })
      })
    };
  return (0, n.jsx)(N.ListContentScroller, {
    sections: [Math.max(1, F.length)],
    renderSection: () => {
      let e;
      return e = 0 !== F.length || m ? (0, n.jsxs)(L.default, {
        children: [(0, n.jsx)(L.default.Child, {
          grow: k.INVITER,
          basis: 0,
          className: B.marginReset,
          children: (0, n.jsx)(I.FormTitle, {
            children: D.default.Messages.INSTANT_INVITE_INVITER
          })
        }), (0, n.jsx)(L.default.Child, {
          basis: 0,
          grow: k.INVITE_CODE,
          className: B.marginReset,
          children: (0, n.jsx)(I.FormTitle, {
            children: D.default.Messages.INSTANT_INVITE_INVITE_CODE
          })
        }), (0, n.jsx)(L.default.Child, {
          grow: k.USES,
          basis: 0,
          className: y.textAlignRight,
          children: (0, n.jsx)(I.FormTitle, {
            children: D.default.Messages.INSTANT_INVITE_USES
          })
        }), (0, n.jsx)(L.default.Child, {
          grow: k.EXPIRES,
          basis: 0,
          className: y.textAlignRight,
          children: (0, n.jsx)(I.FormTitle, {
            children: D.default.Messages.INSTANT_INVITE_EXPIRES
          })
        })]
      }) : (0, n.jsxs)(I.EmptyState, {
        theme: H,
        children: [(0, n.jsx)(I.EmptyStateImage, {
          darkSrc: l("914814"),
          lightSrc: l("370392"),
          width: 256,
          height: 130
        }), (0, n.jsx)(I.EmptyStateText, {
          note: D.default.Messages.NO_INVITES_BODY,
          children: D.default.Messages.NO_INVITES_LABEL
        })]
      }), (0, n.jsx)(I.FormSection, {
        className: y.headerSection,
        children: (0, n.jsxs)(I.HeadingLevel, {
          component: (0, n.jsx)(I.FormTitle, {
            tag: I.FormTitleTags.H1,
            children: D.default.Messages.INVITES
          }),
          children: [(0, n.jsx)(I.FormText, {
            className: B.marginBottom20,
            type: I.FormTextTypes.DESCRIPTION,
            children: T ? D.default.Messages.SETTINGS_INVITE_TIP.format({
              onCreateInvite: w
            }) : D.default.Messages.SETTINGS_INVITE_TIP_WITHOUT_CREATE
          }), (_ || h || R) && (0, n.jsxs)("div", {
            className: y.inviteDisabledContainer,
            children: [(0, n.jsx)(I.Button, {
              size: I.Button.Sizes.SMALL,
              color: R ? I.Button.Colors.BRAND : I.Button.Colors.RED,
              disabled: !E,
              submitting: M,
              onClick: V,
              children: R ? D.default.Messages.ENABLE_INVITES : D.default.Messages.DISABLE_INVITES
            }), R && (0, n.jsxs)("div", {
              className: y.inviteDisabledTip,
              children: [(0, n.jsx)(v.default, {
                color: f.default.unsafe_rawColors.YELLOW_300.css
              }), (0, n.jsx)(I.Text, {
                variant: "text-sm/normal",
                children: D.default.Messages.INVITES_DISABLED_TIP
              })]
            })]
          }), (0, n.jsx)(I.FormDivider, {
            className: y.headerDivider
          }), e]
        })
      }, "header")
    },
    renderRow: e => {
      let {
        section: t,
        row: l
      } = e;
      if (0 === F.length && 0 === l && m) return (0, n.jsx)(I.Spinner, {
        className: B.marginTop20,
        type: I.Spinner.Type.SPINNING_CIRCLE
      }, "spinner");
      if (t > 0) return null;
      let a = F[l];
      return null == a ? null : (0, n.jsx)(U, {
        hide: i,
        invite: a,
        showChannel: d,
        inviteDisabled: R
      }, a.code)
    },
    rowHeight: (e, t) => e > 0 ? 0 : 0 === F.length && 0 === t && m ? 62 : null != F[t] ? 62 : 0,
    sectionHeight: () => 0 !== F.length || m ? 120 : 344
  })
}