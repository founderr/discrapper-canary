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
  E = s("931240"),
  _ = s("970606"),
  I = s("963202"),
  T = s("389134"),
  S = s("35313"),
  f = s("94963"),
  m = s("745628"),
  N = s("950279"),
  g = s("796918"),
  h = s("513532"),
  C = s("741595"),
  R = s("974842"),
  x = s("359380"),
  L = s("308083"),
  O = s("689938"),
  A = s("413932");
let p = () => [{
    section: d.SectionTypes.HEADER,
    label: O.default.Messages.CLAN_SETTINGS_BASIC_INFO
  }, {
    section: L.ClanSetupSteps.GAMES,
    label: O.default.Messages.CLAN_SETTTINGS_SELECT_GAMES
  }, {
    section: L.ClanSetupSteps.PLAYSTYLE,
    label: O.default.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: d.SectionTypes.HEADER,
    label: O.default.Messages.CLAN_SETTINGS_PERSONALITY_INFO
  }, {
    section: L.ClanSetupSteps.UTILITY_TRAITS,
    label: O.default.Messages.CLAN_SETTINGS_SELECT_TRAITS
  }, {
    section: L.ClanSetupSteps.INTERESTS,
    label: O.default.Messages.CLAN_SETTINGS_SELECT_INTERESTS
  }, {
    section: L.ClanSetupSteps.DESCRIPTION,
    label: O.default.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: d.SectionTypes.HEADER,
    label: O.default.Messages.CLAN_SETTINGS_CUSTOMIZE_IDENTITY
  }, {
    section: L.ClanSetupSteps.CUSTOMIZE_TAG_BADGE,
    label: O.default.Messages.CLAN_SETTINGS_CLAN_BADGE
  }, {
    section: L.ClanSetupSteps.CUSTOMIZE_BANNER,
    label: O.default.Messages.CLAN_SETTINGS_CLAN_PROFILE
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: L.ClanSetupSteps.MEMBER_APPLICATION,
    label: O.default.Messages.CLAN_SETTINGS_JOIN_APPLICATION
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: d.SectionTypes.CUSTOM,
    label: O.default.Messages.CLAN_SETTINGS_DISABLE_CLAN,
    element: M
  }],
  M = e => {
    let {
      guildId: t,
      onClose: n
    } = e, [i, o] = l.useState(!1), d = async () => {
      o(!0);
      try {
        await (0, E.disableClan)(t), n()
      } catch (e) {
        throw o(!1), e
      }
    };
    return (0, a.jsxs)(r.TabBar.Item, {
      selectedItem: !1,
      className: A.deleteItem,
      "aria-label": O.default.Messages.CLAN_SETTINGS_DISABLE_CLAN,
      onClick: () => (0, r.openModalLazy)(async () => {
        let {
          ConfirmModal: e
        } = await Promise.resolve().then(s.bind(s, "481060"));
        return t => (0, a.jsx)(e, {
          ...t,
          header: O.default.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_TITLE,
          confirmText: O.default.Messages.CONFIRM,
          cancelText: O.default.Messages.CANCEL,
          loading: i,
          onConfirm: d,
          children: (0, a.jsx)(r.Text, {
            variant: "text-md/normal",
            children: O.default.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_BODY
          })
        })
      }),
      children: [(0, a.jsx)(c.default, {
        className: A.statusDanger,
        width: 16,
        height: 16
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "status-danger",
        children: O.default.Messages.CLAN_SETTINGS_DISABLE_CLAN
      })]
    })
  };
t.default = e => {
  let {
    guildId: t,
    onClose: s
  } = e, [c, M] = l.useState(L.ClanSetupSteps.GAMES), {
    settings: D,
    errors: v
  } = (0, i.useStateFromStoresObject)([T.default], () => {
    var e;
    let t = T.default.getState();
    return {
      settings: t.settings,
      errors: null !== (e = t.errors) && void 0 !== e ? e : {}
    }
  }), G = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(t)), {
    defaultGameId: j
  } = (0, I.useClanPrepilotExperiment)(G, "ClanSettingsModal"), U = (0, S.useFullScreenModalAnimationStyle)(), P = l.useCallback(e => {
    "Escape" === e.key && (e.stopPropagation(), s())
  }, [s]);
  l.useEffect(() => {
    (0, _.trackSettingsViewed)(t, (0, _.getProgressStepAnalyticsName)(c))
  }, [t, c]), l.useEffect(() => (window.addEventListener("keydown", P), () => {
    window.removeEventListener("keydown", P)
  }), [P]), l.useEffect(() => {
    o.default.getDetectableGames()
  }, []), l.useEffect(() => {
    (0, E.fetchClanSettings)(t)
  }, [t]);
  let b = e => (0, E.updateClanSettings)(t, {
      gameApplicationIds: e
    }),
    B = e => (0, E.updateClanSettings)(t, {
      playstyle: e
    }),
    y = e => (0, E.updateClanSettings)(t, {
      interests: e
    }),
    F = e => (0, E.updateClanSettings)(t, e),
    H = async () => {
      await (0, E.saveClanSettings)(t, D), s()
    };
  if (null == D) return null;
  let w = p();
  return (0, a.jsxs)(n.animated.div, {
    style: U,
    className: A.modal,
    children: [(0, a.jsx)(r.Button, {
      className: A.closeButton,
      look: r.Button.Looks.OUTLINED,
      size: r.Button.Sizes.SMALL,
      color: r.Button.Colors.PRIMARY,
      onClick: H,
      children: O.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, a.jsxs)("div", {
      className: A.modalContents,
      children: [(0, a.jsx)("div", {
        className: A.sidebarWrapper,
        children: (0, a.jsx)(r.TabBar, {
          className: A.sidebar,
          selectedItem: c,
          onItemSelect: M,
          orientation: "vertical",
          children: w.map((e, l) => {
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
                  id: e.section,
                  children: e.label
                }, e.section)
            }
          })
        })
      }), (0, a.jsx)(r.ScrollerThin, {
        className: A.mainContent,
        children: (() => {
          switch (c) {
            case L.ClanSetupSteps.GAMES:
              var e;
              return (0, a.jsx)(N.default, {
                title: O.default.Messages.CLAN_SETUP_GAMES_TITLE,
                description: O.default.Messages.CLAN_SETUP_GAMES_SUBTITLE,
                handleUpdate: b,
                gameApplicationIds: null !== (e = D.gameApplicationIds) && void 0 !== e ? e : new Set,
                requiredGameId: null != j ? j : void 0,
                error: v.gameApplicationIds
              });
            case L.ClanSetupSteps.PLAYSTYLE:
              return (0, a.jsx)(C.default, {
                title: O.default.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
                description: O.default.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
                handleUpdate: B,
                playstyle: D.playstyle,
                error: v.playstyle
              });
            case L.ClanSetupSteps.UTILITY_TRAITS:
              return (0, a.jsx)(x.default, {
                title: O.default.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
                description: O.default.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
                handleUpdate: y,
                interests: D.interests
              });
            case L.ClanSetupSteps.INTERESTS:
              return (0, a.jsx)(g.default, {
                handleUpdate: F,
                interests: D.interests,
                error: v.interests
              });
            case L.ClanSetupSteps.DESCRIPTION:
              return (0, a.jsx)(m.default, {
                handleUpdate: F,
                description: D.description,
                wildcardDescriptors: D.wildcardDescriptors,
                errors: v
              });
            case L.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
              return (0, a.jsx)(R.default, {
                handleUpdate: F,
                tag: D.tag,
                error: v.tag,
                badge: D.badgeKind,
                primaryColor: D.badgePrimaryColor,
                secondaryColor: D.badgeSecondaryColor,
                furthestStep: L.ClanSetupSteps.CUSTOMIZE_TAG_BADGE
              });
            case L.ClanSetupSteps.MEMBER_APPLICATION:
              return (0, a.jsx)(h.default, {
                guildId: t
              });
            case L.ClanSetupSteps.CUSTOMIZE_BANNER:
              return (0, a.jsx)(f.default, {
                guildId: t,
                handleUpdate: F,
                progress: D
              });
            default:
              return null
          }
        })()
      })]
    })]
  })
}