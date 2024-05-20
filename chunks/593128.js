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
  _ = s("864293"),
  I = s("740727"),
  T = s("729017"),
  S = s("585483"),
  f = s("931240"),
  m = s("970606"),
  N = s("389134"),
  g = s("432632"),
  h = s("35313"),
  C = s("94963"),
  R = s("745628"),
  x = s("950279"),
  L = s("796918"),
  O = s("513532"),
  p = s("741595"),
  A = s("974842"),
  M = s("359380"),
  D = s("308083"),
  v = s("981631"),
  j = s("231338"),
  G = s("689938"),
  U = s("943303");
let P = e => [{
    section: E.SectionTypes.HEADER,
    label: G.default.Messages.CLAN_SETTINGS_BASIC_INFO
  }, {
    section: D.ClanSetupSteps.GAMES,
    label: G.default.Messages.CLAN_SETTTINGS_SELECT_GAMES,
    hasError: (null == e ? void 0 : e.gameApplicationIds) != null
  }, {
    section: D.ClanSetupSteps.PLAYSTYLE,
    label: G.default.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE,
    hasError: (null == e ? void 0 : e.playstyle) != null
  }, {
    section: E.SectionTypes.DIVIDER
  }, {
    section: E.SectionTypes.HEADER,
    label: G.default.Messages.CLAN_SETTINGS_PERSONALITY_INFO
  }, {
    section: D.ClanSetupSteps.UTILITY_TRAITS,
    label: G.default.Messages.CLAN_SETTINGS_SELECT_TRAITS
  }, {
    section: D.ClanSetupSteps.INTERESTS,
    label: G.default.Messages.CLAN_SETTINGS_SELECT_INTERESTS,
    hasError: (null == e ? void 0 : e.interests) != null
  }, {
    section: D.ClanSetupSteps.DESCRIPTION,
    label: G.default.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION,
    hasError: (null == e ? void 0 : e.description) != null || (null == e ? void 0 : e.wildcardDescriptors) != null
  }, {
    section: E.SectionTypes.DIVIDER
  }, {
    section: E.SectionTypes.HEADER,
    label: G.default.Messages.CLAN_SETTINGS_CUSTOMIZE_IDENTITY
  }, {
    section: D.ClanSetupSteps.CUSTOMIZE_TAG_BADGE,
    label: G.default.Messages.CLAN_SETTINGS_CLAN_BADGE,
    hasError: (null == e ? void 0 : e.tag) != null || (null == e ? void 0 : e.badgeKind) != null || (null == e ? void 0 : e.badgePrimaryColor) != null || (null == e ? void 0 : e.badgeSecondaryColor) != null
  }, {
    section: D.ClanSetupSteps.CUSTOMIZE_BANNER,
    label: G.default.Messages.CLAN_SETTINGS_CLAN_PROFILE,
    hasError: (null == e ? void 0 : e.banner) != null || (null == e ? void 0 : e.brandPrimaryColor) != null || (null == e ? void 0 : e.brandSecondaryColor) != null
  }, {
    section: E.SectionTypes.DIVIDER
  }, {
    section: D.ClanSetupSteps.MEMBER_APPLICATION,
    label: G.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION_SETUP,
    hasError: (null == e ? void 0 : e.verificationForm) != null
  }, {
    section: E.SectionTypes.DIVIDER
  }, {
    section: E.SectionTypes.CUSTOM,
    label: G.default.Messages.CLAN_SETTINGS_DISABLE_CLAN,
    element: b
  }],
  b = e => {
    let {
      guildId: t,
      onClose: n,
      dirty: i
    } = e, [r, d] = l.useState(!1), u = async () => {
      d(!0);
      try {
        await (0, f.disableClan)(t), n()
      } catch (e) {
        throw d(!1), e
      }
    };
    return (0, a.jsxs)(o.TabBar.Item, {
      selectedItem: !1,
      className: U.deleteItem,
      "aria-label": G.default.Messages.CLAN_SETTINGS_DISABLE_CLAN,
      onClick: () => {
        if (i) {
          S.ComponentDispatch.dispatch(v.ComponentActions.EMPHASIZE_NOTICE);
          return
        }(0, o.openModalLazy)(async () => {
          let {
            ConfirmModal: e
          } = await Promise.resolve().then(s.bind(s, "481060"));
          return t => (0, a.jsx)(e, {
            ...t,
            header: G.default.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_TITLE,
            confirmText: G.default.Messages.CONFIRM,
            cancelText: G.default.Messages.CANCEL,
            loading: r,
            onConfirm: u,
            children: (0, a.jsx)(o.Text, {
              variant: "text-md/normal",
              children: G.default.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_BODY
            })
          })
        })
      },
      children: [(0, a.jsx)(I.default, {
        className: U.statusDanger,
        width: 16,
        height: 16
      }), (0, a.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "status-danger",
        children: G.default.Messages.CLAN_SETTINGS_DISABLE_CLAN
      })]
    })
  },
  B = e => {
    let {
      isErrorVisible: t
    } = e, s = (0, o.useToken)(o.tokens.colors.HEADER_PRIMARY, j.ThemeTypes.DARK), l = (0, o.useToken)(o.tokens.colors.TEXT_MUTED, j.ThemeTypes.DARK);
    return t ? (0, a.jsxs)("div", {
      className: U.tooltipContents,
      children: [(0, a.jsx)(T.default, {
        className: U.errorIconTooltip
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          style: {
            color: s.hex()
          },
          children: G.default.Messages.CLAN_SUBMIT_ERROR_TITLE
        }), (0, a.jsx)(o.Text, {
          variant: "text-xs/normal",
          style: {
            color: l.hex()
          },
          children: G.default.Messages.CLAN_SUBMIT_ERROR_SUBTITLE
        })]
      })]
    }) : null
  };
t.default = e => {
  let {
    guildId: t,
    onClose: s
  } = e, [I, j] = l.useState(D.ClanSetupSteps.GAMES), {
    initialSettings: b,
    settings: y,
    errors: F,
    submitting: H,
    dirty: k
  } = (0, i.useStateFromStoresObject)([N.default], () => {
    var e;
    let t = N.default.getState();
    return {
      initialSettings: t.initialSettings,
      settings: t.settings,
      errors: null !== (e = t.errors) && void 0 !== e ? e : {},
      submitting: t.submitting,
      dirty: t.dirty
    }
  }), w = l.useCallback(e => {
    k ? S.ComponentDispatch.dispatch(v.ComponentActions.EMPHASIZE_NOTICE) : j(e)
  }, [k]), V = (0, g.useDefaultGameIdForClan)(t, "ClanSettingsModal"), Y = (0, h.useFullScreenModalAnimationStyle)(), W = l.useCallback(e => {
    "Escape" === e.key && (e.stopPropagation(), s())
  }, [s]);
  l.useEffect(() => {
    (0, m.trackSettingsViewed)(t, (0, m.getProgressStepAnalyticsName)(I))
  }, [t, I]), l.useEffect(() => (window.addEventListener("keydown", W), () => {
    window.removeEventListener("keydown", W)
  }), [W]), l.useEffect(() => {
    d.default.getDetectableGames()
  }, []), l.useEffect(() => {
    (0, f.fetchClanSettings)(t)
  }, [t]);
  let z = l.useCallback(e => (0, f.updateClanSettings)(t, {
      gameApplicationIds: e
    }), [t]),
    K = l.useCallback(e => (0, f.updateClanSettings)(t, {
      playstyle: e
    }), [t]),
    Z = l.useCallback(e => (0, f.updateClanSettings)(t, {
      interests: e
    }), [t]),
    X = l.useCallback(e => (0, f.updateClanSettings)(t, e), [t]),
    Q = l.useCallback(() => {
      k ? S.ComponentDispatch.dispatch(v.ComponentActions.EMPHASIZE_NOTICE) : s()
    }, [k, s]),
    J = async () => {
      await (0, f.saveClanSettings)(t, y), (0, m.trackSettingsSaved)(t)
    }, q = l.useMemo(() => null != F && Object.values(F).some(e => null != e), [F]);
  if (null == y) return null;
  let $ = P(F);
  return (0, a.jsxs)(n.animated.div, {
    style: Y,
    className: U.modal,
    children: [(0, a.jsx)(o.Tooltip, {
      color: o.Tooltip.Colors.GREY,
      tooltipClassName: U.tooltip,
      text: (0, a.jsx)(B, {
        isErrorVisible: q
      }),
      position: "left",
      "aria-label": null != q ? G.default.Messages.CLAN_SUBMIT_ERROR_TITLE : void 0,
      shouldShow: q,
      forceOpen: q,
      children: e => (0, a.jsx)(u.default, {
        ...e,
        className: U.closeButton,
        closeAction: Q,
        keybind: "ESC"
      })
    }), (0, a.jsxs)("div", {
      className: U.modalContents,
      children: [(0, a.jsx)("div", {
        className: U.sidebarWrapper,
        children: (0, a.jsx)(o.TabBar, {
          className: U.sidebar,
          selectedItem: I,
          onItemSelect: w,
          orientation: "vertical",
          children: $.map((e, l) => {
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
                  dirty: k,
                  guildId: t,
                  onClose: s
                }, e.label);
              default:
                return (0, a.jsx)(o.TabBar.Item, {
                  className: U.settingsTab,
                  "aria-label": e.label,
                  id: e.section,
                  children: (0, a.jsxs)(a.Fragment, {
                    children: [e.label, e.hasError && (0, a.jsx)(o.Tooltip, {
                      color: o.Tooltip.Colors.GREY,
                      position: "right",
                      text: G.default.Messages.CLAN_SUBMIT_ERROR_TITLE,
                      children: e => (0, a.jsx)(T.default, {
                        ...e,
                        className: U.errorIcon
                      })
                    })]
                  })
                }, e.section)
            }
          })
        })
      }), (0, a.jsxs)(o.ScrollerThin, {
        className: U.mainContent,
        children: [(() => {
          switch (I) {
            case D.ClanSetupSteps.GAMES:
              var e;
              return (0, a.jsx)(x.default, {
                title: G.default.Messages.CLAN_SETUP_GAMES_TITLE,
                description: G.default.Messages.CLAN_SETUP_GAMES_SUBTITLE,
                handleUpdate: z,
                gameApplicationIds: null !== (e = y.gameApplicationIds) && void 0 !== e ? e : new Set,
                requiredGameId: null != V ? V : void 0,
                error: F.gameApplicationIds,
                inSettings: !0
              });
            case D.ClanSetupSteps.PLAYSTYLE:
              return (0, a.jsx)(p.default, {
                title: G.default.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
                description: G.default.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
                handleUpdate: K,
                playstyle: y.playstyle,
                error: F.playstyle
              });
            case D.ClanSetupSteps.UTILITY_TRAITS:
              return (0, a.jsx)(M.default, {
                guildId: t,
                title: G.default.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
                description: G.default.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
                handleUpdate: Z,
                progress: y,
                requiredGameId: null != V ? V : void 0
              });
            case D.ClanSetupSteps.INTERESTS:
              return (0, a.jsx)(L.default, {
                guildId: t,
                handleUpdate: X,
                progress: y,
                error: F.interests
              });
            case D.ClanSetupSteps.DESCRIPTION:
              return (0, a.jsx)(R.default, {
                guildId: t,
                handleUpdate: X,
                progress: y,
                errors: F
              });
            case D.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
              return (0, a.jsx)(A.default, {
                handleUpdate: X,
                tag: y.tag,
                error: F.tag,
                badge: y.badgeKind,
                primaryColor: y.badgePrimaryColor,
                secondaryColor: y.badgeSecondaryColor,
                furthestStep: D.ClanSetupSteps.CUSTOMIZE_TAG_BADGE,
                inSettings: !0
              });
            case D.ClanSetupSteps.MEMBER_APPLICATION:
              return (0, a.jsx)(O.default, {
                guildId: t,
                inSettings: !0
              });
            case D.ClanSetupSteps.CUSTOMIZE_BANNER:
              return (0, a.jsx)(C.default, {
                guildId: t,
                handleUpdate: X,
                progress: y
              });
            default:
              return null
          }
        })(), (0, a.jsx)(r.TransitionGroup, {
          component: "div",
          children: k && (0, a.jsx)(_.default, {
            className: U.noticeRegion,
            children: (0, a.jsx)(c.default, {
              onSave: J,
              submitting: H,
              onReset: () => {
                (0, f.updateClanSettings)(t, b)
              },
              errorMessage: Object.values(F).find(e => null != e)
            })
          })
        })]
      })]
    })]
  })
}