"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("920906"),
  i = s("442837"),
  r = s("215569"),
  o = s("481060"),
  d = s("224706"),
  u = s("425493"),
  c = s("852860"),
  E = s("493544"),
  _ = s("740727"),
  I = s("729017"),
  T = s("585483"),
  S = s("931240"),
  f = s("970606"),
  m = s("389134"),
  N = s("432632"),
  g = s("35313"),
  h = s("94963"),
  C = s("745628"),
  R = s("950279"),
  x = s("796918"),
  L = s("513532"),
  O = s("741595"),
  p = s("974842"),
  A = s("359380"),
  M = s("308083"),
  D = s("981631"),
  v = s("231338"),
  j = s("689938"),
  G = s("943303");
let U = e => [{
    section: E.SectionTypes.HEADER,
    label: j.default.Messages.CLAN_SETTINGS_BASIC_INFO
  }, {
    section: M.ClanSetupSteps.GAMES,
    label: j.default.Messages.CLAN_SETTTINGS_SELECT_GAMES,
    hasError: (null == e ? void 0 : e.gameApplicationIds) != null
  }, {
    section: M.ClanSetupSteps.PLAYSTYLE,
    label: j.default.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE,
    hasError: (null == e ? void 0 : e.playstyle) != null
  }, {
    section: E.SectionTypes.DIVIDER
  }, {
    section: E.SectionTypes.HEADER,
    label: j.default.Messages.CLAN_SETTINGS_PERSONALITY_INFO
  }, {
    section: M.ClanSetupSteps.UTILITY_TRAITS,
    label: j.default.Messages.CLAN_SETTINGS_SELECT_TRAITS
  }, {
    section: M.ClanSetupSteps.INTERESTS,
    label: j.default.Messages.CLAN_SETTINGS_SELECT_INTERESTS,
    hasError: (null == e ? void 0 : e.interests) != null
  }, {
    section: M.ClanSetupSteps.DESCRIPTION,
    label: j.default.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION,
    hasError: (null == e ? void 0 : e.description) != null || (null == e ? void 0 : e.wildcardDescriptors) != null
  }, {
    section: E.SectionTypes.DIVIDER
  }, {
    section: E.SectionTypes.HEADER,
    label: j.default.Messages.CLAN_SETTINGS_CUSTOMIZE_IDENTITY
  }, {
    section: M.ClanSetupSteps.CUSTOMIZE_TAG_BADGE,
    label: j.default.Messages.CLAN_SETTINGS_CLAN_BADGE,
    hasError: (null == e ? void 0 : e.tag) != null || (null == e ? void 0 : e.badgeKind) != null || (null == e ? void 0 : e.badgePrimaryColor) != null || (null == e ? void 0 : e.badgeSecondaryColor) != null
  }, {
    section: M.ClanSetupSteps.CUSTOMIZE_BANNER,
    label: j.default.Messages.CLAN_SETTINGS_CLAN_PROFILE,
    hasError: (null == e ? void 0 : e.banner) != null || (null == e ? void 0 : e.brandPrimaryColor) != null || (null == e ? void 0 : e.brandSecondaryColor) != null
  }, {
    section: E.SectionTypes.DIVIDER
  }, {
    section: M.ClanSetupSteps.MEMBER_APPLICATION,
    label: j.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION_SETUP,
    hasError: (null == e ? void 0 : e.verificationForm) != null
  }, {
    section: E.SectionTypes.DIVIDER
  }, {
    section: E.SectionTypes.CUSTOM,
    label: j.default.Messages.CLAN_SETTINGS_DISABLE_CLAN,
    element: P
  }],
  P = e => {
    let {
      guildId: t,
      onClose: n,
      dirty: i
    } = e, [r, d] = l.useState(!1), u = async () => {
      d(!0);
      try {
        await (0, S.disableClan)(t), n()
      } catch (e) {
        throw d(!1), e
      }
    };
    return (0, a.jsxs)(o.TabBar.Item, {
      selectedItem: !1,
      className: G.deleteItem,
      "aria-label": j.default.Messages.CLAN_SETTINGS_DISABLE_CLAN,
      onClick: () => {
        if (i) {
          T.ComponentDispatch.dispatch(D.ComponentActions.EMPHASIZE_NOTICE);
          return
        }(0, o.openModalLazy)(async () => {
          let {
            ConfirmModal: e
          } = await Promise.resolve().then(s.bind(s, "481060"));
          return t => (0, a.jsx)(e, {
            ...t,
            header: j.default.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_TITLE,
            confirmText: j.default.Messages.CONFIRM,
            cancelText: j.default.Messages.CANCEL,
            loading: r,
            onConfirm: u,
            children: (0, a.jsx)(o.Text, {
              variant: "text-md/normal",
              children: j.default.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_BODY
            })
          })
        })
      },
      children: [(0, a.jsx)(_.default, {
        className: G.statusDanger,
        width: 16,
        height: 16
      }), (0, a.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "status-danger",
        children: j.default.Messages.CLAN_SETTINGS_DISABLE_CLAN
      })]
    })
  },
  b = e => {
    let {
      isErrorVisible: t
    } = e, s = (0, o.useToken)(o.tokens.colors.HEADER_PRIMARY, v.ThemeTypes.DARK), l = (0, o.useToken)(o.tokens.colors.TEXT_MUTED, v.ThemeTypes.DARK);
    return t ? (0, a.jsxs)("div", {
      className: G.tooltipContents,
      children: [(0, a.jsx)(I.default, {
        className: G.errorIconTooltip
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          style: {
            color: s.hex()
          },
          children: j.default.Messages.CLAN_SUBMIT_ERROR_TITLE
        }), (0, a.jsx)(o.Text, {
          variant: "text-xs/normal",
          style: {
            color: l.hex()
          },
          children: j.default.Messages.CLAN_SUBMIT_ERROR_SUBTITLE
        })]
      })]
    }) : null
  };
t.default = e => {
  let {
    guildId: t,
    onClose: s
  } = e, [_, v] = l.useState(M.ClanSetupSteps.GAMES), {
    initialSettings: P,
    settings: y,
    errors: B,
    submitting: F,
    dirty: H
  } = (0, i.useStateFromStoresObject)([m.default], () => {
    var e;
    let t = m.default.getState();
    return {
      initialSettings: t.initialSettings,
      settings: t.settings,
      errors: null !== (e = t.errors) && void 0 !== e ? e : {},
      submitting: t.submitting,
      dirty: t.dirty
    }
  }), k = l.useCallback(e => {
    H ? T.ComponentDispatch.dispatch(D.ComponentActions.EMPHASIZE_NOTICE) : v(e)
  }, [H]), w = (0, N.useDefaultGameIdForClan)(t, "ClanSettingsModal"), V = (0, g.useFullScreenModalAnimationStyle)(), Y = l.useCallback(e => {
    "Escape" === e.key && (e.stopPropagation(), s())
  }, [s]);
  l.useEffect(() => {
    (0, f.trackSettingsViewed)(t, (0, f.getProgressStepAnalyticsName)(_))
  }, [t, _]), l.useEffect(() => (window.addEventListener("keydown", Y), () => {
    window.removeEventListener("keydown", Y)
  }), [Y]), l.useEffect(() => {
    d.default.getDetectableGames()
  }, []), l.useEffect(() => {
    (0, S.fetchClanSettings)(t)
  }, [t]);
  let W = l.useCallback(e => (0, S.updateClanSettings)(t, {
      gameApplicationIds: e
    }), [t]),
    z = l.useCallback(e => (0, S.updateClanSettings)(t, {
      playstyle: e
    }), [t]),
    K = l.useCallback(e => (0, S.updateClanSettings)(t, {
      interests: e
    }), [t]),
    Z = l.useCallback(e => (0, S.updateClanSettings)(t, e), [t]),
    X = l.useCallback(() => {
      H ? T.ComponentDispatch.dispatch(D.ComponentActions.EMPHASIZE_NOTICE) : s()
    }, [H, s]),
    Q = async () => {
      await (0, S.saveClanSettings)(t, y), (0, f.trackSettingsSaved)(t)
    }, J = l.useMemo(() => null != B && Object.values(B).some(e => null != e), [B]);
  if (null == y) return null;
  let q = U(B);
  return (0, a.jsxs)(n.animated.div, {
    style: V,
    className: G.modal,
    children: [(0, a.jsx)(o.Tooltip, {
      color: o.Tooltip.Colors.GREY,
      tooltipClassName: G.tooltip,
      text: (0, a.jsx)(b, {
        isErrorVisible: J
      }),
      position: "left",
      "aria-label": null != J ? j.default.Messages.CLAN_SUBMIT_ERROR_TITLE : void 0,
      shouldShow: J,
      forceOpen: J,
      children: e => (0, a.jsx)(u.default, {
        ...e,
        className: G.closeButton,
        closeAction: X,
        keybind: "ESC"
      })
    }), (0, a.jsxs)("div", {
      className: G.modalContents,
      children: [(0, a.jsx)("div", {
        className: G.sidebarWrapper,
        children: (0, a.jsx)(o.TabBar, {
          className: G.sidebar,
          selectedItem: _,
          onItemSelect: k,
          orientation: "vertical",
          children: q.map((e, l) => {
            switch (e.section) {
              case E.SectionTypes.HEADER:
                return (0, a.jsx)(o.TabBar.Header, {
                  children: e.label
                }, "header-".concat(l));
              case E.SectionTypes.DIVIDER:
                return (0, a.jsx)(o.TabBar.Separator, {}, "divider-".concat(l));
              case E.SectionTypes.CUSTOM:
                let n = e.element;
                return (0, a.jsx)(n, {
                  dirty: H,
                  guildId: t,
                  onClose: s
                }, e.label);
              default:
                return (0, a.jsx)(o.TabBar.Item, {
                  className: G.settingsTab,
                  "aria-label": e.label,
                  id: e.section,
                  children: (0, a.jsxs)(a.Fragment, {
                    children: [e.label, e.hasError && (0, a.jsx)(o.Tooltip, {
                      color: o.Tooltip.Colors.GREY,
                      position: "right",
                      text: j.default.Messages.CLAN_SUBMIT_ERROR_TITLE,
                      children: e => (0, a.jsx)(I.default, {
                        ...e,
                        className: G.errorIcon
                      })
                    })]
                  })
                }, e.section)
            }
          })
        })
      }), (0, a.jsxs)("div", {
        className: G.mainContent,
        children: [(0, a.jsx)(o.ScrollerThin, {
          children: (() => {
            switch (_) {
              case M.ClanSetupSteps.GAMES:
                var e;
                return (0, a.jsx)(R.default, {
                  title: j.default.Messages.CLAN_SETUP_GAMES_TITLE,
                  description: j.default.Messages.CLAN_SETUP_GAMES_SUBTITLE,
                  handleUpdate: W,
                  gameApplicationIds: null !== (e = y.gameApplicationIds) && void 0 !== e ? e : new Set,
                  requiredGameId: null != w ? w : void 0,
                  error: B.gameApplicationIds,
                  inSettings: !0
                });
              case M.ClanSetupSteps.PLAYSTYLE:
                return (0, a.jsx)(O.default, {
                  title: j.default.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
                  description: j.default.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
                  handleUpdate: z,
                  playstyle: y.playstyle,
                  error: B.playstyle
                });
              case M.ClanSetupSteps.UTILITY_TRAITS:
                return (0, a.jsx)(A.default, {
                  guildId: t,
                  title: j.default.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
                  description: j.default.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
                  handleUpdate: K,
                  progress: y,
                  requiredGameId: null != w ? w : void 0
                });
              case M.ClanSetupSteps.INTERESTS:
                return (0, a.jsx)(x.default, {
                  guildId: t,
                  handleUpdate: Z,
                  progress: y,
                  error: B.interests
                });
              case M.ClanSetupSteps.DESCRIPTION:
                return (0, a.jsx)(C.default, {
                  guildId: t,
                  handleUpdate: Z,
                  progress: y,
                  errors: B
                });
              case M.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
                return (0, a.jsx)(p.default, {
                  handleUpdate: Z,
                  tag: y.tag,
                  error: B.tag,
                  badge: y.badgeKind,
                  primaryColor: y.badgePrimaryColor,
                  secondaryColor: y.badgeSecondaryColor,
                  furthestStep: M.ClanSetupSteps.CUSTOMIZE_TAG_BADGE,
                  inSettings: !0
                });
              case M.ClanSetupSteps.MEMBER_APPLICATION:
                return (0, a.jsx)(L.default, {
                  guildId: t,
                  inSettings: !0
                });
              case M.ClanSetupSteps.CUSTOMIZE_BANNER:
                return (0, a.jsx)(h.default, {
                  guildId: t,
                  handleUpdate: Z,
                  progress: y
                });
              default:
                return null
            }
          })()
        }), (0, a.jsx)(r.TransitionGroup, {
          component: "div",
          children: H && (0, a.jsx)(o.SlideIn, {
            className: G.noticeRegion,
            children: (0, a.jsx)(c.default, {
              onSave: Q,
              submitting: F,
              onReset: () => {
                (0, S.updateClanSettings)(t, P)
              },
              errorMessage: Object.values(B).find(e => null != e)
            })
          })
        })]
      })]
    })]
  })
}