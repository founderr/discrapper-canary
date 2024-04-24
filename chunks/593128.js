"use strict";
a.r(t), a("47120");
var n = a("735250"),
  l = a("470079"),
  i = a("718017"),
  s = a("442837"),
  r = a("481060"),
  o = a("224706"),
  d = a("493544"),
  u = a("931240"),
  c = a("134726"),
  f = a("389134"),
  S = a("35313"),
  E = a("745628"),
  p = a("950279"),
  T = a("796918"),
  I = a("513532"),
  m = a("741595"),
  g = a("974842"),
  _ = a("359380"),
  C = a("308083"),
  A = a("689938"),
  M = a("225540");
let N = () => [{
  section: d.SectionTypes.HEADER,
  label: A.default.Messages.CLAN_SETTINGS_BASIC_INFO
}, {
  section: C.ClanSetupSteps.GAMES,
  label: A.default.Messages.CLAN_SETTTINGS_SELECT_GAMES,
  ariaLabel: A.default.Messages.CLAN_SETTTINGS_SELECT_GAMES
}, {
  section: C.ClanSetupSteps.PLAYSTYLE,
  label: A.default.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE,
  ariaLabel: A.default.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE
}, {
  section: d.SectionTypes.DIVIDER
}, {
  section: d.SectionTypes.HEADER,
  label: A.default.Messages.CLAN_SETTINGS_PERSONALITY_INFO
}, {
  section: C.ClanSetupSteps.UTILITY_TRAITS,
  label: A.default.Messages.CLAN_SETTINGS_SELECT_TRAITS,
  ariaLabel: A.default.Messages.CLAN_SETTINGS_SELECT_TRAITS
}, {
  section: C.ClanSetupSteps.DESCRIPTION,
  label: A.default.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION,
  ariaLabel: A.default.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION
}, {
  section: d.SectionTypes.DIVIDER
}, {
  section: d.SectionTypes.HEADER,
  label: A.default.Messages.CLAN_SETTINGS_CUSTOMIZE_IDENTITY
}, {
  section: C.ClanSetupSteps.CUSTOMIZE_TAG_BADGE,
  label: A.default.Messages.CLAN_SETTINGS_CLAN_BADGE,
  ariaLabel: A.default.Messages.CLAN_SETTINGS_CLAN_BADGE
}, {
  section: C.ClanSetupSteps.CUSTOMIZE_BANNER,
  label: A.default.Messages.CLAN_SETTINGS_CLAN_PROFILE,
  ariaLabel: A.default.Messages.CLAN_SETTINGS_CLAN_PROFILE
}, {
  section: d.SectionTypes.DIVIDER
}, {
  section: C.ClanSetupSteps.MEMBER_APPLICATION,
  label: A.default.Messages.CLAN_SETTINGS_JOIN_APPLICATION,
  ariaLabel: A.default.Messages.CLAN_SETTINGS_JOIN_APPLICATION
}];
t.default = e => {
  let {
    guildId: t,
    onClose: a
  } = e, [h, b] = l.useState(C.ClanSetupSteps.GAMES), {
    settings: x,
    errors: L
  } = (0, s.useStateFromStoresObject)([f.default], () => {
    var e;
    let t = f.default.getState();
    return {
      settings: t.settings,
      errors: null !== (e = t.errors) && void 0 !== e ? e : {}
    }
  }), {
    defaultGameId: R
  } = c.ClanGuildExperiment.useExperiment({
    guildId: t,
    location: "ClanSettingsModal"
  }), G = (0, S.useFullScreenModalAnimationStyle)();
  l.useEffect(() => {
    o.default.getDetectableGames()
  }, []), l.useEffect(() => {
    (0, u.fetchClanSettings)(t)
  }, [t]);
  let v = e => (0, u.updateClanSettings)(t, e),
    D = async () => {
      await (0, u.saveClanSettings)(t, x), a()
    };
  if (null == x) return null;
  let j = N();
  return (0, n.jsxs)(i.animated.div, {
    style: G,
    className: M.modal,
    children: [(0, n.jsx)(r.Button, {
      className: M.closeButton,
      look: r.Button.Looks.OUTLINED,
      size: r.Button.Sizes.SMALL,
      color: r.Button.Colors.PRIMARY,
      onClick: D,
      children: A.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, n.jsxs)("div", {
      className: M.modalContents,
      children: [(0, n.jsx)("div", {
        className: M.sidebarWrapper,
        children: (0, n.jsx)(r.TabBar, {
          className: M.sidebar,
          selectedItem: h,
          onItemSelect: b,
          orientation: "vertical",
          children: j.map((e, t) => {
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
        className: M.mainContent,
        children: (() => {
          switch (h) {
            case C.ClanSetupSteps.GAMES:
              var e;
              return (0, n.jsx)(p.default, {
                handleUpdate: v,
                gameApplicationIds: null !== (e = x.gameApplicationIds) && void 0 !== e ? e : new Set,
                requiredGameId: null != R ? R : void 0,
                error: L.gameApplicationIds
              });
            case C.ClanSetupSteps.PLAYSTYLE:
              return (0, n.jsx)(m.default, {
                handleUpdate: v,
                playstyle: x.playstyle,
                error: L.playstyle
              });
            case C.ClanSetupSteps.UTILITY_TRAITS:
              return (0, n.jsx)(_.default, {
                handleUpdate: v,
                interests: x.interests
              });
            case C.ClanSetupSteps.INTERESTS:
              return (0, n.jsx)(T.default, {
                handleUpdate: v,
                interests: x.interests,
                error: L.interests
              });
            case C.ClanSetupSteps.DESCRIPTION:
              return (0, n.jsx)(E.default, {
                handleUpdate: v,
                description: x.description,
                wildcardDescriptors: x.wildcardDescriptors,
                errors: L
              });
            case C.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
              return (0, n.jsx)(g.default, {
                handleUpdate: v,
                tag: x.tag,
                error: L.tag,
                badge: x.badgeKind,
                primaryColor: x.badgePrimaryColor,
                secondaryColor: x.badgeSecondaryColor,
                furthestStep: C.ClanSetupSteps.CUSTOMIZE_TAG_BADGE
              });
            case C.ClanSetupSteps.MEMBER_APPLICATION:
              return (0, n.jsx)(I.default, {
                guildId: t
              });
            case C.ClanSetupSteps.CUSTOMIZE_BANNER:
            default:
              return null
          }
        })()
      })]
    })]
  })
}