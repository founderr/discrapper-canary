"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("718017"),
  i = s("442837"),
  r = s("481060"),
  o = s("224706"),
  d = s("493544"),
  u = s("430824"),
  c = s("740727"),
  E = s("729017"),
  _ = s("931240"),
  I = s("970606"),
  T = s("963202"),
  S = s("389134"),
  f = s("35313"),
  m = s("94963"),
  N = s("745628"),
  g = s("950279"),
  h = s("796918"),
  C = s("513532"),
  R = s("741595"),
  x = s("974842"),
  L = s("359380"),
  O = s("308083"),
  A = s("689938"),
  p = s("413932");
let M = e => [{
    section: d.SectionTypes.HEADER,
    label: A.default.Messages.CLAN_SETTINGS_BASIC_INFO
  }, {
    section: O.ClanSetupSteps.GAMES,
    label: A.default.Messages.CLAN_SETTTINGS_SELECT_GAMES,
    hasError: (null == e ? void 0 : e.gameApplicationIds) != null
  }, {
    section: O.ClanSetupSteps.PLAYSTYLE,
    label: A.default.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE,
    hasError: (null == e ? void 0 : e.playstyle) != null
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: d.SectionTypes.HEADER,
    label: A.default.Messages.CLAN_SETTINGS_PERSONALITY_INFO
  }, {
    section: O.ClanSetupSteps.UTILITY_TRAITS,
    label: A.default.Messages.CLAN_SETTINGS_SELECT_TRAITS
  }, {
    section: O.ClanSetupSteps.INTERESTS,
    label: A.default.Messages.CLAN_SETTINGS_SELECT_INTERESTS,
    hasError: (null == e ? void 0 : e.interests) != null
  }, {
    section: O.ClanSetupSteps.DESCRIPTION,
    label: A.default.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION,
    hasError: (null == e ? void 0 : e.description) != null || (null == e ? void 0 : e.wildcardDescriptors) != null
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: d.SectionTypes.HEADER,
    label: A.default.Messages.CLAN_SETTINGS_CUSTOMIZE_IDENTITY
  }, {
    section: O.ClanSetupSteps.CUSTOMIZE_TAG_BADGE,
    label: A.default.Messages.CLAN_SETTINGS_CLAN_BADGE,
    hasError: (null == e ? void 0 : e.tag) != null || (null == e ? void 0 : e.badgeKind) != null || (null == e ? void 0 : e.badgePrimaryColor) != null || (null == e ? void 0 : e.badgeSecondaryColor) != null
  }, {
    section: O.ClanSetupSteps.CUSTOMIZE_BANNER,
    label: A.default.Messages.CLAN_SETTINGS_CLAN_PROFILE,
    hasError: (null == e ? void 0 : e.banner) != null || (null == e ? void 0 : e.brandPrimaryColor) != null || (null == e ? void 0 : e.brandSecondaryColor) != null
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: O.ClanSetupSteps.MEMBER_APPLICATION,
    label: A.default.Messages.CLAN_SETTINGS_JOIN_APPLICATION,
    hasError: (null == e ? void 0 : e.verificationForm) != null
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: d.SectionTypes.CUSTOM,
    label: A.default.Messages.CLAN_SETTINGS_DISABLE_CLAN,
    element: D
  }],
  D = e => {
    let {
      guildId: t,
      onClose: n
    } = e, [i, o] = l.useState(!1), d = async () => {
      o(!0);
      try {
        await (0, _.disableClan)(t), n()
      } catch (e) {
        throw o(!1), e
      }
    };
    return (0, a.jsxs)(r.TabBar.Item, {
      selectedItem: !1,
      className: p.deleteItem,
      "aria-label": A.default.Messages.CLAN_SETTINGS_DISABLE_CLAN,
      onClick: () => (0, r.openModalLazy)(async () => {
        let {
          ConfirmModal: e
        } = await Promise.resolve().then(s.bind(s, "481060"));
        return t => (0, a.jsx)(e, {
          ...t,
          header: A.default.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_TITLE,
          confirmText: A.default.Messages.CONFIRM,
          cancelText: A.default.Messages.CANCEL,
          loading: i,
          onConfirm: d,
          children: (0, a.jsx)(r.Text, {
            variant: "text-md/normal",
            children: A.default.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_BODY
          })
        })
      }),
      children: [(0, a.jsx)(c.default, {
        className: p.statusDanger,
        width: 16,
        height: 16
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "status-danger",
        children: A.default.Messages.CLAN_SETTINGS_DISABLE_CLAN
      })]
    })
  };
t.default = e => {
  let {
    guildId: t,
    onClose: s
  } = e, [c, D] = l.useState(O.ClanSetupSteps.GAMES), {
    settings: v,
    errors: G
  } = (0, i.useStateFromStoresObject)([S.default], () => {
    var e;
    let t = S.default.getState();
    return {
      settings: t.settings,
      errors: null !== (e = t.errors) && void 0 !== e ? e : {}
    }
  }), j = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(t)), {
    defaultGameId: U
  } = (0, T.useClanPrepilotExperiment)(j, "ClanSettingsModal"), P = (0, f.useFullScreenModalAnimationStyle)(), b = l.useCallback(e => {
    "Escape" === e.key && (e.stopPropagation(), s())
  }, [s]);
  l.useEffect(() => {
    (0, I.trackSettingsViewed)(t, (0, I.getProgressStepAnalyticsName)(c))
  }, [t, c]), l.useEffect(() => (window.addEventListener("keydown", b), () => {
    window.removeEventListener("keydown", b)
  }), [b]), l.useEffect(() => {
    o.default.getDetectableGames()
  }, []), l.useEffect(() => {
    (0, _.fetchClanSettings)(t)
  }, [t]);
  let B = e => (0, _.updateClanSettings)(t, {
      gameApplicationIds: e
    }),
    y = e => (0, _.updateClanSettings)(t, {
      playstyle: e
    }),
    F = e => (0, _.updateClanSettings)(t, {
      interests: e
    }),
    H = e => (0, _.updateClanSettings)(t, e),
    w = async () => {
      await (0, _.saveClanSettings)(t, v), s()
    }, k = l.useMemo(() => null != G && Object.values(G).some(e => null != e), [G]), V = k ? (0, a.jsxs)("div", {
      className: p.tooltipContents,
      children: [(0, a.jsx)(E.default, {
        className: p.errorIconTooltip
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(r.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          children: A.default.Messages.CLAN_SUBMIT_ERROR_TITLE
        }), (0, a.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: A.default.Messages.CLAN_SUBMIT_ERROR_SUBTITLE
        })]
      })]
    }) : null;
  if (null == v) return null;
  let Y = M(G);
  return (0, a.jsxs)(n.animated.div, {
    style: P,
    className: p.modal,
    children: [(0, a.jsx)(r.Tooltip, {
      color: r.Tooltip.Colors.GREY,
      tooltipClassName: p.tooltip,
      text: V,
      position: "left",
      "aria-label": null != k ? A.default.Messages.CLAN_SUBMIT_ERROR_TITLE : void 0,
      shouldShow: k,
      forceOpen: k,
      children: e => (0, a.jsx)(r.Button, {
        ...e,
        className: p.closeButton,
        look: r.Button.Looks.OUTLINED,
        size: r.Button.Sizes.SMALL,
        color: r.Button.Colors.PRIMARY,
        onClick: w,
        children: A.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
      })
    }), (0, a.jsxs)("div", {
      className: p.modalContents,
      children: [(0, a.jsx)("div", {
        className: p.sidebarWrapper,
        children: (0, a.jsx)(r.TabBar, {
          className: p.sidebar,
          selectedItem: c,
          onItemSelect: D,
          orientation: "vertical",
          children: Y.map((e, l) => {
            switch (e.section) {
              case d.SectionTypes.HEADER:
                return (0, a.jsx)(r.TabBar.Header, {
                  children: e.label
                }, "header-".concat(l));
              case d.SectionTypes.DIVIDER:
                return (0, a.jsx)(r.TabBar.Separator, {}, "divider-".concat(l));
              case d.SectionTypes.CUSTOM:
                let n = e.element;
                return (0, a.jsx)(n, {
                  guildId: t,
                  onClose: s
                }, e.label);
              default:
                return (0, a.jsx)(r.TabBar.Item, {
                  className: p.settingsTab,
                  "aria-label": e.label,
                  id: e.section,
                  children: (0, a.jsxs)(a.Fragment, {
                    children: [e.label, e.hasError && (0, a.jsx)(r.Tooltip, {
                      color: r.Tooltip.Colors.GREY,
                      position: "right",
                      text: A.default.Messages.CLAN_SUBMIT_ERROR_TITLE,
                      children: e => (0, a.jsx)(E.default, {
                        ...e,
                        className: p.errorIcon
                      })
                    })]
                  })
                }, e.section)
            }
          })
        })
      }), (0, a.jsx)(r.ScrollerThin, {
        className: p.mainContent,
        children: (() => {
          switch (c) {
            case O.ClanSetupSteps.GAMES:
              var e;
              return (0, a.jsx)(g.default, {
                title: A.default.Messages.CLAN_SETUP_GAMES_TITLE,
                description: A.default.Messages.CLAN_SETUP_GAMES_SUBTITLE,
                handleUpdate: B,
                gameApplicationIds: null !== (e = v.gameApplicationIds) && void 0 !== e ? e : new Set,
                requiredGameId: null != U ? U : void 0,
                error: G.gameApplicationIds
              });
            case O.ClanSetupSteps.PLAYSTYLE:
              return (0, a.jsx)(R.default, {
                title: A.default.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
                description: A.default.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
                handleUpdate: y,
                playstyle: v.playstyle,
                error: G.playstyle
              });
            case O.ClanSetupSteps.UTILITY_TRAITS:
              return (0, a.jsx)(L.default, {
                title: A.default.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
                description: A.default.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
                handleUpdate: F,
                interests: v.interests
              });
            case O.ClanSetupSteps.INTERESTS:
              return (0, a.jsx)(h.default, {
                handleUpdate: H,
                interests: v.interests,
                error: G.interests
              });
            case O.ClanSetupSteps.DESCRIPTION:
              return (0, a.jsx)(N.default, {
                handleUpdate: H,
                description: v.description,
                wildcardDescriptors: v.wildcardDescriptors,
                errors: G
              });
            case O.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
              return (0, a.jsx)(x.default, {
                handleUpdate: H,
                tag: v.tag,
                error: G.tag,
                badge: v.badgeKind,
                primaryColor: v.badgePrimaryColor,
                secondaryColor: v.badgeSecondaryColor,
                furthestStep: O.ClanSetupSteps.CUSTOMIZE_TAG_BADGE
              });
            case O.ClanSetupSteps.MEMBER_APPLICATION:
              return (0, a.jsx)(C.default, {
                guildId: t
              });
            case O.ClanSetupSteps.CUSTOMIZE_BANNER:
              return (0, a.jsx)(m.default, {
                guildId: t,
                handleUpdate: H,
                progress: v
              });
            default:
              return null
          }
        })()
      })]
    })]
  })
}