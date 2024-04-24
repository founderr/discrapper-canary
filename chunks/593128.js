"use strict";
a.r(t), a("47120");
var n = a("735250"),
  i = a("470079"),
  l = a("718017"),
  s = a("442837"),
  r = a("481060"),
  o = a("224706"),
  d = a("493544"),
  u = a("931240"),
  c = a("134726"),
  S = a("389134"),
  f = a("35313"),
  E = a("745628"),
  p = a("950279"),
  T = a("796918"),
  m = a("513532"),
  I = a("741595"),
  g = a("884486"),
  _ = a("974842"),
  C = a("359380"),
  M = a("308083"),
  A = a("689938"),
  N = a("225540");
let h = () => [{
  section: d.SectionTypes.HEADER,
  label: A.default.Messages.CLAN_SETTINGS_BASIC_INFO
}, {
  section: M.ClanSetupSteps.GAMES,
  label: A.default.Messages.CLAN_SETTTINGS_SELECT_GAMES,
  ariaLabel: A.default.Messages.CLAN_SETTTINGS_SELECT_GAMES
}, {
  section: M.ClanSetupSteps.PLAYSTYLE,
  label: A.default.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE,
  ariaLabel: A.default.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE
}, {
  section: d.SectionTypes.DIVIDER
}, {
  section: d.SectionTypes.HEADER,
  label: A.default.Messages.CLAN_SETTINGS_PERSONALITY_INFO
}, {
  section: M.ClanSetupSteps.UTILITY_TRAITS,
  label: A.default.Messages.CLAN_SETTINGS_SELECT_TRAITS,
  ariaLabel: A.default.Messages.CLAN_SETTINGS_SELECT_TRAITS
}, {
  section: M.ClanSetupSteps.DESCRIPTION,
  label: A.default.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION,
  ariaLabel: A.default.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION
}, {
  section: M.ClanSetupSteps.PRIMETIME,
  label: A.default.Messages.CLAN_SETTINGS_SET_PRIME_TIME,
  ariaLabel: A.default.Messages.CLAN_SETTINGS_SET_PRIME_TIME
}, {
  section: d.SectionTypes.DIVIDER
}, {
  section: d.SectionTypes.HEADER,
  label: A.default.Messages.CLAN_SETTINGS_CUSTOMIZE_IDENTITY
}, {
  section: M.ClanSetupSteps.CUSTOMIZE_TAG_BADGE,
  label: A.default.Messages.CLAN_SETTINGS_CLAN_BADGE,
  ariaLabel: A.default.Messages.CLAN_SETTINGS_CLAN_BADGE
}, {
  section: M.ClanSetupSteps.CUSTOMIZE_BANNER,
  label: A.default.Messages.CLAN_SETTINGS_CLAN_PROFILE,
  ariaLabel: A.default.Messages.CLAN_SETTINGS_CLAN_PROFILE
}, {
  section: d.SectionTypes.DIVIDER
}, {
  section: M.ClanSetupSteps.MEMBER_APPLICATION,
  label: A.default.Messages.CLAN_SETTINGS_JOIN_APPLICATION,
  ariaLabel: A.default.Messages.CLAN_SETTINGS_JOIN_APPLICATION
}];
t.default = e => {
  let {
    guildId: t,
    onClose: a
  } = e, [b, x] = i.useState(M.ClanSetupSteps.GAMES), {
    settings: L,
    errors: R
  } = (0, s.useStateFromStoresObject)([S.default], () => {
    var e;
    let t = S.default.getState();
    return {
      settings: t.settings,
      errors: null !== (e = t.errors) && void 0 !== e ? e : {}
    }
  }), {
    defaultGameId: G
  } = c.ClanGuildExperiment.useExperiment({
    guildId: t,
    location: "ClanSettingsModal"
  }), v = (0, f.useFullScreenModalAnimationStyle)();
  i.useEffect(() => {
    o.default.getDetectableGames()
  }, []), i.useEffect(() => {
    (0, u.fetchClanSettings)(t)
  }, [t]);
  let D = e => (0, u.updateClanSettings)(t, e),
    j = async () => {
      await (0, u.saveClanSettings)(t, L), a()
    };
  if (null == L) return null;
  let y = h();
  return (0, n.jsxs)(l.animated.div, {
    style: v,
    className: N.modal,
    children: [(0, n.jsx)(r.Button, {
      className: N.closeButton,
      look: r.Button.Looks.OUTLINED,
      size: r.Button.Sizes.SMALL,
      color: r.Button.Colors.PRIMARY,
      onClick: j,
      children: A.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, n.jsxs)("div", {
      className: N.modalContents,
      children: [(0, n.jsx)("div", {
        className: N.sidebarWrapper,
        children: (0, n.jsx)(r.TabBar, {
          className: N.sidebar,
          selectedItem: b,
          onItemSelect: x,
          orientation: "vertical",
          children: y.map((e, t) => {
            switch (e.section) {
              case d.SectionTypes.HEADER:
                return (0, n.jsx)(r.TabBar.Header, {
                  children: e.label
                }, "header-".concat(t));
              case d.SectionTypes.DIVIDER:
                return (0, n.jsx)(r.TabBar.Separator, {}, "divider-".concat(t));
              default:
                return (0, n.jsx)(r.TabBar.Item, {
                  id: e.section,
                  children: e.label
                }, e.section)
            }
          })
        })
      }), (0, n.jsx)("div", {
        className: N.mainContent,
        children: (() => {
          switch (b) {
            case M.ClanSetupSteps.GAMES:
              var e;
              return (0, n.jsx)(p.default, {
                handleUpdate: D,
                gameApplicationIds: null !== (e = L.gameApplicationIds) && void 0 !== e ? e : new Set,
                requiredGameId: null != G ? G : void 0,
                error: R.gameApplicationIds
              });
            case M.ClanSetupSteps.PLAYSTYLE:
              return (0, n.jsx)(I.default, {
                handleUpdate: D,
                playstyle: L.playstyle,
                error: R.playstyle
              });
            case M.ClanSetupSteps.UTILITY_TRAITS:
              return (0, n.jsx)(C.default, {
                handleUpdate: D,
                interests: L.interests
              });
            case M.ClanSetupSteps.INTERESTS:
              return (0, n.jsx)(T.default, {
                handleUpdate: D,
                interests: L.interests,
                error: R.interests
              });
            case M.ClanSetupSteps.DESCRIPTION:
              return (0, n.jsx)(E.default, {
                handleUpdate: D,
                description: L.description,
                wildcardDescriptors: L.wildcardDescriptors,
                errors: R
              });
            case M.ClanSetupSteps.PRIMETIME:
              return (0, n.jsx)(g.default, {
                handleUpdate: D,
                selectedTimes: L.primetime,
                error: R.primetime
              });
            case M.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
              return (0, n.jsx)(_.default, {
                handleUpdate: D,
                tag: L.tag,
                error: R.tag,
                badge: L.badgeKind,
                primaryColor: L.badgePrimaryColor,
                secondaryColor: L.badgeSecondaryColor,
                furthestStep: M.ClanSetupSteps.CUSTOMIZE_TAG_BADGE
              });
            case M.ClanSetupSteps.MEMBER_APPLICATION:
              return (0, n.jsx)(m.default, {
                guildId: t
              });
            case M.ClanSetupSteps.CUSTOMIZE_BANNER:
            default:
              return null
          }
        })()
      })]
    })]
  })
}