"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("718017"),
  i = a("442837"),
  r = a("481060"),
  o = a("224706"),
  d = a("493544"),
  u = a("430824"),
  c = a("740727"),
  S = a("931240"),
  f = a("963202"),
  E = a("389134"),
  T = a("35313"),
  p = a("94963"),
  I = a("745628"),
  g = a("950279"),
  m = a("796918"),
  _ = a("513532"),
  C = a("741595"),
  A = a("974842"),
  M = a("359380"),
  N = a("308083"),
  h = a("689938"),
  x = a("413932");
let L = () => [{
    section: d.SectionTypes.HEADER,
    label: h.default.Messages.CLAN_SETTINGS_BASIC_INFO
  }, {
    section: N.ClanSetupSteps.GAMES,
    label: h.default.Messages.CLAN_SETTTINGS_SELECT_GAMES
  }, {
    section: N.ClanSetupSteps.PLAYSTYLE,
    label: h.default.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: d.SectionTypes.HEADER,
    label: h.default.Messages.CLAN_SETTINGS_PERSONALITY_INFO
  }, {
    section: N.ClanSetupSteps.UTILITY_TRAITS,
    label: h.default.Messages.CLAN_SETTINGS_SELECT_TRAITS
  }, {
    section: N.ClanSetupSteps.DESCRIPTION,
    label: h.default.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: d.SectionTypes.HEADER,
    label: h.default.Messages.CLAN_SETTINGS_CUSTOMIZE_IDENTITY
  }, {
    section: N.ClanSetupSteps.CUSTOMIZE_TAG_BADGE,
    label: h.default.Messages.CLAN_SETTINGS_CLAN_BADGE
  }, {
    section: N.ClanSetupSteps.CUSTOMIZE_BANNER,
    label: h.default.Messages.CLAN_SETTINGS_CLAN_PROFILE
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: N.ClanSetupSteps.MEMBER_APPLICATION,
    label: h.default.Messages.CLAN_SETTINGS_JOIN_APPLICATION
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: d.SectionTypes.CUSTOM,
    label: h.default.Messages.CLAN_SETTINGS_DISABLE_CLAN,
    element: b
  }],
  b = e => {
    let {
      guildId: t,
      onClose: l
    } = e, [i, o] = s.useState(!1), d = async () => {
      o(!0);
      try {
        await (0, S.disableClan)(t), l()
      } catch (e) {
        throw o(!1), e
      }
    };
    return (0, n.jsxs)(r.TabBar.Item, {
      selectedItem: !1,
      className: x.deleteItem,
      "aria-label": h.default.Messages.CLAN_SETTINGS_DISABLE_CLAN,
      onClick: () => (0, r.openModalLazy)(async () => {
        let {
          ConfirmModal: e
        } = await Promise.resolve().then(a.bind(a, "481060"));
        return t => (0, n.jsx)(e, {
          ...t,
          header: h.default.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_TITLE,
          confirmText: h.default.Messages.CONFIRM,
          cancelText: h.default.Messages.CANCEL,
          loading: i,
          onConfirm: d,
          children: (0, n.jsx)(r.Text, {
            variant: "text-md/normal",
            children: h.default.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_BODY
          })
        })
      }),
      children: [(0, n.jsx)(c.default, {
        className: x.statusDanger,
        width: 16,
        height: 16
      }), (0, n.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "status-danger",
        children: h.default.Messages.CLAN_SETTINGS_DISABLE_CLAN
      })]
    })
  };
t.default = e => {
  let {
    guildId: t,
    onClose: a
  } = e, [c, b] = s.useState(N.ClanSetupSteps.GAMES), {
    settings: R,
    errors: G
  } = (0, i.useStateFromStoresObject)([E.default], () => {
    var e;
    let t = E.default.getState();
    return {
      settings: t.settings,
      errors: null !== (e = t.errors) && void 0 !== e ? e : {}
    }
  }), v = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(t)), {
    defaultGameId: D
  } = (0, f.useClanGuildExperiment)(v, "ClanSettingsModal"), j = (0, T.useFullScreenModalAnimationStyle)();
  s.useEffect(() => {
    o.default.getDetectableGames()
  }, []), s.useEffect(() => {
    (0, S.fetchClanSettings)(t)
  }, [t]);
  let y = e => (0, S.updateClanSettings)(t, {
      gameApplicationIds: e
    }),
    P = e => (0, S.updateClanSettings)(t, {
      playstyle: e
    }),
    O = e => (0, S.updateClanSettings)(t, {
      interests: e
    }),
    U = e => (0, S.updateClanSettings)(t, e),
    F = async () => {
      await (0, S.saveClanSettings)(t, R), a()
    };
  if (null == R) return null;
  let B = L();
  return (0, n.jsxs)(l.animated.div, {
    style: j,
    className: x.modal,
    children: [(0, n.jsx)(r.Button, {
      className: x.closeButton,
      look: r.Button.Looks.OUTLINED,
      size: r.Button.Sizes.SMALL,
      color: r.Button.Colors.PRIMARY,
      onClick: F,
      children: h.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, n.jsxs)("div", {
      className: x.modalContents,
      children: [(0, n.jsx)("div", {
        className: x.sidebarWrapper,
        children: (0, n.jsx)(r.TabBar, {
          className: x.sidebar,
          selectedItem: c,
          onItemSelect: b,
          orientation: "vertical",
          children: B.map((e, s) => {
            switch (e.section) {
              case d.SectionTypes.HEADER:
                return (0, n.jsx)(r.TabBar.Header, {
                  children: e.label
                }, "header-".concat(s));
              case d.SectionTypes.DIVIDER:
                return (0, n.jsx)(r.TabBar.Separator, {}, "divider-".concat(s));
              case d.SectionTypes.CUSTOM:
                let l = e.element;
                return (0, n.jsx)(l, {
                  guildId: t,
                  onClose: a
                }, e.label);
              default:
                return (0, n.jsx)(r.TabBar.Item, {
                  id: e.section,
                  children: e.label
                }, e.section)
            }
          })
        })
      }), (0, n.jsx)("div", {
        className: x.mainContent,
        children: (() => {
          switch (c) {
            case N.ClanSetupSteps.GAMES:
              var e;
              return (0, n.jsx)(g.default, {
                title: h.default.Messages.CLAN_SETUP_GAMES_TITLE,
                description: h.default.Messages.CLAN_SETUP_GAMES_SUBTITLE,
                handleUpdate: y,
                gameApplicationIds: null !== (e = R.gameApplicationIds) && void 0 !== e ? e : new Set,
                requiredGameId: null != D ? D : void 0,
                error: G.gameApplicationIds
              });
            case N.ClanSetupSteps.PLAYSTYLE:
              return (0, n.jsx)(C.default, {
                title: h.default.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
                description: h.default.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
                handleUpdate: P,
                playstyle: R.playstyle,
                error: G.playstyle
              });
            case N.ClanSetupSteps.UTILITY_TRAITS:
              return (0, n.jsx)(M.default, {
                title: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
                description: h.default.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
                handleUpdate: O,
                interests: R.interests
              });
            case N.ClanSetupSteps.INTERESTS:
              return (0, n.jsx)(m.default, {
                handleUpdate: U,
                interests: R.interests,
                error: G.interests
              });
            case N.ClanSetupSteps.DESCRIPTION:
              return (0, n.jsx)(I.default, {
                handleUpdate: U,
                description: R.description,
                wildcardDescriptors: R.wildcardDescriptors,
                errors: G
              });
            case N.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
              return (0, n.jsx)(A.default, {
                handleUpdate: U,
                tag: R.tag,
                error: G.tag,
                badge: R.badgeKind,
                primaryColor: R.badgePrimaryColor,
                secondaryColor: R.badgeSecondaryColor,
                furthestStep: N.ClanSetupSteps.CUSTOMIZE_TAG_BADGE
              });
            case N.ClanSetupSteps.MEMBER_APPLICATION:
              return (0, n.jsx)(_.default, {
                guildId: t
              });
            case N.ClanSetupSteps.CUSTOMIZE_BANNER:
              return (0, n.jsx)(p.default, {
                guildId: t,
                handleUpdate: U,
                progress: R
              });
            default:
              return null
          }
        })()
      })]
    })]
  })
}