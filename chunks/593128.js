"use strict";
t(47120);
var n = t(735250),
  i = t(470079),
  l = t(920906),
  a = t(442837),
  r = t(215569),
  o = t(481060),
  c = t(224706),
  d = t(425493),
  u = t(852860),
  E = t(493544),
  _ = t(585483),
  I = t(931240),
  T = t(970606),
  N = t(389134),
  m = t(432632),
  S = t(35313),
  h = t(94963),
  g = t(745628),
  C = t(950279),
  x = t(796918),
  R = t(513532),
  L = t(741595),
  O = t(974842),
  A = t(359380),
  p = t(308083),
  M = t(981631),
  f = t(231338),
  D = t(689938),
  v = t(740268);
let j = e => [{
    section: E.ID.HEADER,
    label: D.Z.Messages.CLAN_SETTINGS_BASIC_INFO
  }, {
    section: p.Wy.GAMES,
    label: D.Z.Messages.CLAN_SETTTINGS_SELECT_GAMES,
    hasError: (null == e ? void 0 : e.gameApplicationIds) != null
  }, {
    section: p.Wy.PLAYSTYLE,
    label: D.Z.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE,
    hasError: (null == e ? void 0 : e.playstyle) != null
  }, {
    section: E.ID.DIVIDER
  }, {
    section: E.ID.HEADER,
    label: D.Z.Messages.CLAN_SETTINGS_PERSONALITY_INFO
  }, {
    section: p.Wy.UTILITY_TRAITS,
    label: D.Z.Messages.CLAN_SETTINGS_SELECT_TRAITS
  }, {
    section: p.Wy.INTERESTS,
    label: D.Z.Messages.CLAN_SETTINGS_SELECT_INTERESTS,
    hasError: (null == e ? void 0 : e.interests) != null
  }, {
    section: p.Wy.DESCRIPTION,
    label: D.Z.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION,
    hasError: (null == e ? void 0 : e.description) != null || (null == e ? void 0 : e.wildcardDescriptors) != null
  }, {
    section: E.ID.DIVIDER
  }, {
    section: E.ID.HEADER,
    label: D.Z.Messages.CLAN_SETTINGS_CUSTOMIZE_IDENTITY
  }, {
    section: p.Wy.CUSTOMIZE_TAG_BADGE,
    label: D.Z.Messages.CLAN_SETTINGS_CLAN_BADGE,
    hasError: (null == e ? void 0 : e.tag) != null || (null == e ? void 0 : e.badgeKind) != null || (null == e ? void 0 : e.badgePrimaryColor) != null || (null == e ? void 0 : e.badgeSecondaryColor) != null
  }, {
    section: p.Wy.CUSTOMIZE_BANNER,
    label: D.Z.Messages.CLAN_SETTINGS_CLAN_PROFILE,
    hasError: (null == e ? void 0 : e.banner) != null || (null == e ? void 0 : e.brandPrimaryColor) != null || (null == e ? void 0 : e.brandSecondaryColor) != null
  }, {
    section: E.ID.DIVIDER
  }, {
    section: p.Wy.MEMBER_APPLICATION,
    label: D.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION_SETUP,
    hasError: (null == e ? void 0 : e.verificationForm) != null
  }, {
    section: E.ID.DIVIDER
  }, {
    section: E.ID.CUSTOM,
    label: D.Z.Messages.CLAN_SETTINGS_DISABLE_CLAN,
    element: Z
  }],
  Z = e => {
    let {
      guildId: s,
      onClose: l,
      dirty: a
    } = e, [r, c] = i.useState(!1), d = async () => {
      c(!0);
      try {
        await (0, I.nr)(s), l()
      } catch (e) {
        throw c(!1), e
      }
    };
    return (0, n.jsxs)(o.TabBar.Item, {
      selectedItem: !1,
      className: v.deleteItem,
      "aria-label": D.Z.Messages.CLAN_SETTINGS_DISABLE_CLAN,
      onClick: () => {
        if (a) {
          _.S.dispatch(M.CkL.EMPHASIZE_NOTICE);
          return
        }(0, o.openModalLazy)(async () => {
          let {
            ConfirmModal: e
          } = await Promise.resolve().then(t.bind(t, 481060));
          return s => (0, n.jsx)(e, {
            ...s,
            header: D.Z.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_TITLE,
            confirmText: D.Z.Messages.CONFIRM,
            cancelText: D.Z.Messages.CANCEL,
            loading: r,
            onConfirm: d,
            children: (0, n.jsx)(o.Text, {
              variant: "text-md/normal",
              children: D.Z.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_BODY
            })
          })
        })
      },
      children: [(0, n.jsx)(o.TrashIcon, {
        size: "xs",
        color: "currentColor",
        className: v.statusDanger
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "status-danger",
        children: D.Z.Messages.CLAN_SETTINGS_DISABLE_CLAN
      })]
    })
  },
  U = e => {
    let {
      isErrorVisible: s
    } = e, t = (0, o.useToken)(o.tokens.colors.HEADER_PRIMARY, f.BR.DARK), i = (0, o.useToken)(o.tokens.colors.TEXT_MUTED, f.BR.DARK);
    return s ? (0, n.jsxs)("div", {
      className: v.tooltipContents,
      children: [(0, n.jsx)(o.WarningIcon, {
        size: "xs",
        color: "currentColor",
        className: v.errorIconTooltip
      }), (0, n.jsxs)("div", {
        children: [(0, n.jsx)(o.Text, {
          variant: "text-sm/medium",
          style: {
            color: t.hex()
          },
          children: D.Z.Messages.CLAN_SUBMIT_ERROR_TITLE
        }), (0, n.jsx)(o.Text, {
          variant: "text-xs/normal",
          style: {
            color: i.hex()
          },
          children: D.Z.Messages.CLAN_SUBMIT_ERROR_SUBTITLE
        })]
      })]
    }) : null
  };
s.Z = e => {
  let {
    guildId: s,
    onClose: t
  } = e, [f, Z] = i.useState(p.Wy.GAMES), {
    initialSettings: G,
    settings: P,
    errors: b,
    submitting: B,
    dirty: y
  } = (0, a.cj)([N.Z], () => {
    var e;
    let s = N.Z.getState();
    return {
      initialSettings: s.initialSettings,
      settings: s.settings,
      errors: null !== (e = s.errors) && void 0 !== e ? e : {},
      submitting: s.submitting,
      dirty: s.dirty
    }
  }), F = i.useCallback(e => {
    y ? _.S.dispatch(M.CkL.EMPHASIZE_NOTICE) : Z(e)
  }, [y]), k = (0, m.N)(s, "ClanSettingsModal"), H = (0, S.f)(), w = i.useCallback(e => {
    "Escape" === e.key && (e.stopPropagation(), t())
  }, [t]);
  i.useEffect(() => {
    (0, T.GO)(s, (0, T.Qh)(f))
  }, [s, f]), i.useEffect(() => (window.addEventListener("keydown", w), () => {
    window.removeEventListener("keydown", w)
  }), [w]), i.useEffect(() => {
    c.Z.getDetectableGames()
  }, []), i.useEffect(() => {
    (0, I.aH)(s)
  }, [s]);
  let V = i.useCallback(e => (0, I.mf)(s, {
      gameApplicationIds: e
    }), [s]),
    Y = i.useCallback(e => (0, I.mf)(s, {
      playstyle: e
    }), [s]),
    W = i.useCallback(e => (0, I.mf)(s, {
      interests: e
    }), [s]),
    z = i.useCallback(e => (0, I.mf)(s, e), [s]),
    K = i.useCallback(() => {
      y ? _.S.dispatch(M.CkL.EMPHASIZE_NOTICE) : t()
    }, [y, t]),
    q = async () => {
      await (0, I.Ii)(s, P), (0, T.Af)(s)
    }, X = i.useMemo(() => null != b && Object.values(b).some(e => null != e), [b]);
  if (null == P) return null;
  let Q = j(b);
  return (0, n.jsxs)(l.animated.div, {
    style: H,
    className: v.modal,
    children: [(0, n.jsx)(o.Tooltip, {
      color: o.Tooltip.Colors.GREY,
      tooltipClassName: v.tooltip,
      text: (0, n.jsx)(U, {
        isErrorVisible: X
      }),
      position: "left",
      "aria-label": null != X ? D.Z.Messages.CLAN_SUBMIT_ERROR_TITLE : void 0,
      shouldShow: X,
      forceOpen: X,
      children: e => (0, n.jsx)(d.Z, {
        ...e,
        className: v.closeButton,
        closeAction: K,
        keybind: "ESC"
      })
    }), (0, n.jsxs)("div", {
      className: v.modalContents,
      children: [(0, n.jsx)("div", {
        className: v.sidebarWrapper,
        children: (0, n.jsx)(o.TabBar, {
          className: v.sidebar,
          selectedItem: f,
          onItemSelect: F,
          orientation: "vertical",
          children: Q.map((e, i) => {
            switch (e.section) {
              case E.ID.HEADER:
                return (0, n.jsx)(o.TabBar.Header, {
                  children: e.label
                }, "header-".concat(i));
              case E.ID.DIVIDER:
                return (0, n.jsx)(o.TabBar.Separator, {}, "divider-".concat(i));
              case E.ID.CUSTOM:
                let l = e.element;
                return (0, n.jsx)(l, {
                  dirty: y,
                  guildId: s,
                  onClose: t
                }, e.label);
              default:
                return (0, n.jsx)(o.TabBar.Item, {
                  className: v.settingsTab,
                  "aria-label": e.label,
                  id: e.section,
                  children: (0, n.jsxs)(n.Fragment, {
                    children: [e.label, e.hasError && (0, n.jsx)(o.Tooltip, {
                      color: o.Tooltip.Colors.GREY,
                      position: "right",
                      text: D.Z.Messages.CLAN_SUBMIT_ERROR_TITLE,
                      children: e => (0, n.jsx)(o.WarningIcon, {
                        size: "xs",
                        color: "currentColor",
                        ...e,
                        className: v.errorIcon
                      })
                    })]
                  })
                }, e.section)
            }
          })
        })
      }), (0, n.jsxs)("div", {
        className: v.mainContent,
        children: [(0, n.jsx)(o.ScrollerThin, {
          children: (() => {
            switch (f) {
              case p.Wy.GAMES:
                var e;
                return (0, n.jsx)(C.Z, {
                  title: D.Z.Messages.CLAN_SETUP_GAMES_TITLE,
                  description: D.Z.Messages.CLAN_SETUP_GAMES_SUBTITLE,
                  handleUpdate: V,
                  gameApplicationIds: null !== (e = P.gameApplicationIds) && void 0 !== e ? e : new Set,
                  requiredGameId: null != k ? k : void 0,
                  error: b.gameApplicationIds,
                  inSettings: !0
                });
              case p.Wy.PLAYSTYLE:
                return (0, n.jsx)(L.Z, {
                  title: D.Z.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
                  description: D.Z.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
                  handleUpdate: Y,
                  playstyle: P.playstyle,
                  error: b.playstyle
                });
              case p.Wy.UTILITY_TRAITS:
                return (0, n.jsx)(A.Z, {
                  guildId: s,
                  title: D.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
                  description: D.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
                  handleUpdate: W,
                  progress: P,
                  requiredGameId: null != k ? k : void 0
                });
              case p.Wy.INTERESTS:
                return (0, n.jsx)(x.Z, {
                  guildId: s,
                  handleUpdate: z,
                  progress: P,
                  error: b.interests
                });
              case p.Wy.DESCRIPTION:
                return (0, n.jsx)(g.Z, {
                  guildId: s,
                  handleUpdate: z,
                  progress: P,
                  errors: b
                });
              case p.Wy.CUSTOMIZE_TAG_BADGE:
                return (0, n.jsx)(O.Z, {
                  handleUpdate: z,
                  tag: P.tag,
                  error: b.tag,
                  badge: P.badgeKind,
                  primaryColor: P.badgePrimaryColor,
                  secondaryColor: P.badgeSecondaryColor,
                  furthestStep: p.Wy.CUSTOMIZE_TAG_BADGE,
                  inSettings: !0
                });
              case p.Wy.MEMBER_APPLICATION:
                return (0, n.jsx)(R.Z, {
                  guildId: s,
                  inSettings: !0,
                  error: b.verificationForm
                });
              case p.Wy.CUSTOMIZE_BANNER:
                return (0, n.jsx)(h.Z, {
                  guildId: s,
                  handleUpdate: z,
                  progress: P
                });
              default:
                return null
            }
          })()
        }), (0, n.jsx)(r.W, {
          component: "div",
          children: y && (0, n.jsx)(o.SlideIn, {
            className: v.noticeRegion,
            children: (0, n.jsx)(u.Z, {
              onSave: q,
              submitting: B,
              onReset: () => {
                (0, I.mf)(s, G)
              },
              errorMessage: Object.values(b).find(e => null != e)
            })
          })
        })]
      })]
    })]
  })
}