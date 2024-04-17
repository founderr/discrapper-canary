"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("224706"),
  o = n("493544"),
  c = n("153124"),
  d = n("931240"),
  u = n("134726"),
  S = n("389134"),
  T = n("745628"),
  E = n("950279"),
  p = n("796918"),
  C = n("741595"),
  m = n("884486"),
  N = n("974842"),
  I = n("359380"),
  A = n("308083"),
  f = n("689938"),
  _ = n("225540");
let b = () => [{
  section: o.SectionTypes.HEADER,
  label: f.default.Messages.CLAN_SETTINGS_BASIC_INFO
}, {
  section: A.ClanSetupSteps.GAMES,
  label: f.default.Messages.CLAN_SETTTINGS_SELECT_GAMES,
  ariaLabel: f.default.Messages.CLAN_SETTTINGS_SELECT_GAMES
}, {
  section: A.ClanSetupSteps.PLAYSTYLE,
  label: f.default.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE,
  ariaLabel: f.default.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE
}, {
  section: o.SectionTypes.DIVIDER
}, {
  section: o.SectionTypes.HEADER,
  label: f.default.Messages.CLAN_SETTINGS_PERSONALITY_INFO
}, {
  section: A.ClanSetupSteps.UTILITY_TRAITS,
  label: f.default.Messages.CLAN_SETTINGS_SELECT_TRAITS,
  ariaLabel: f.default.Messages.CLAN_SETTINGS_SELECT_TRAITS
}, {
  section: A.ClanSetupSteps.DESCRIPTION,
  label: f.default.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION,
  ariaLabel: f.default.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION
}, {
  section: A.ClanSetupSteps.PRIMETIME,
  label: f.default.Messages.CLAN_SETTINGS_SET_PRIME_TIME,
  ariaLabel: f.default.Messages.CLAN_SETTINGS_SET_PRIME_TIME
}, {
  section: o.SectionTypes.DIVIDER
}, {
  section: o.SectionTypes.HEADER,
  label: f.default.Messages.CLAN_SETTINGS_CUSTOMIZE_IDENTITY
}, {
  section: A.ClanSetupSteps.CUSTOMIZE_TAG_BADGE,
  label: f.default.Messages.CLAN_SETTINGS_CLAN_BADGE,
  ariaLabel: f.default.Messages.CLAN_SETTINGS_CLAN_BADGE
}, {
  section: A.ClanSetupSteps.CUSTOMIZE_BANNER,
  label: f.default.Messages.CLAN_SETTINGS_CLAN_PROFILE,
  ariaLabel: f.default.Messages.CLAN_SETTINGS_CLAN_PROFILE
}, {
  section: o.SectionTypes.DIVIDER
}, {
  section: A.ClanSetupSteps.MEMBER_APPLICATION,
  label: f.default.Messages.CLAN_SETTINGS_JOIN_APPLICATION,
  ariaLabel: f.default.Messages.CLAN_SETTINGS_JOIN_APPLICATION
}];
t.default = e => {
  let {
    guildId: t,
    transitionState: n,
    onClose: L
  } = e, M = (0, c.useUID)(), [g, h] = s.useState(A.ClanSetupSteps.GAMES), {
    settings: R,
    errors: x
  } = (0, l.useStateFromStoresObject)([S.default], () => {
    var e;
    let n = S.default.getState(t);
    return {
      settings: n.settings,
      errors: null !== (e = n.errors) && void 0 !== e ? e : {}
    }
  }), {
    defaultGameId: D
  } = u.ClanGuildExperiment.useExperiment({
    guildId: t,
    location: "ClanSettingsModal"
  });
  s.useEffect(() => {
    r.default.getDetectableGames()
  }, []), s.useEffect(() => {
    (0, d.fetchClanSettings)(t)
  }, [t]);
  let y = e => null;
  if (null == R) return null;
  let P = b();
  return (0, a.jsxs)(i.ModalRoot, {
    transitionState: n,
    "aria-labelledby": M,
    size: i.ModalSize.DYNAMIC,
    className: _.modal,
    hideShadow: !0,
    children: [(0, a.jsx)(i.Button, {
      className: _.closeButton,
      look: i.Button.Looks.OUTLINED,
      size: i.Button.Sizes.SMALL,
      color: i.Button.Colors.PRIMARY,
      onClick: L,
      children: f.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, a.jsxs)("div", {
      className: _.modalContents,
      children: [(0, a.jsx)("div", {
        className: _.sidebarWrapper,
        children: (0, a.jsx)(i.TabBar, {
          className: _.sidebar,
          selectedItem: g,
          onItemSelect: h,
          orientation: "vertical",
          children: P.map((e, t) => {
            switch (e.section) {
              case o.SectionTypes.HEADER:
                return (0, a.jsx)(i.TabBar.Header, {
                  children: e.label
                }, "header-".concat(t));
              case o.SectionTypes.DIVIDER:
                return (0, a.jsx)(i.TabBar.Separator, {}, "divider-".concat(t));
              default:
                return (0, a.jsx)(i.TabBar.Item, {
                  id: e.section,
                  children: e.label
                }, e.section)
            }
          })
        })
      }), (0, a.jsx)("div", {
        className: _.mainContent,
        children: (() => {
          switch (g) {
            case A.ClanSetupSteps.GAMES:
              var e;
              return (0, a.jsx)(E.default, {
                handleUpdate: y,
                gameApplicationIds: null !== (e = R.gameApplicationIds) && void 0 !== e ? e : new Set,
                requiredGameId: null != D ? D : void 0,
                error: x.gameApplicationIds
              });
            case A.ClanSetupSteps.PLAYSTYLE:
              return (0, a.jsx)(C.default, {
                handleUpdate: y,
                playstyle: R.playstyle,
                error: x.playstyle
              });
            case A.ClanSetupSteps.UTILITY_TRAITS:
              return (0, a.jsx)(I.default, {
                handleUpdate: y,
                interests: R.interests
              });
            case A.ClanSetupSteps.INTERESTS:
              return (0, a.jsx)(p.default, {
                handleUpdate: y,
                interests: R.interests,
                error: x.interests
              });
            case A.ClanSetupSteps.DESCRIPTION:
              return (0, a.jsx)(T.default, {
                handleUpdate: y,
                description: R.description,
                wildcardDescriptors: R.wildcardDescriptors,
                errors: x
              });
            case A.ClanSetupSteps.PRIMETIME:
              return (0, a.jsx)(m.default, {
                handleUpdate: y,
                selectedTimes: R.primetime,
                error: x.primetime
              });
            case A.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
              return (0, a.jsx)(N.default, {
                handleUpdate: y,
                tag: R.tag,
                error: x.tag,
                badge: R.badgeKind,
                primaryColor: R.badgePrimaryColor,
                secondaryColor: R.badgeSecondaryColor,
                furthestStep: A.ClanSetupSteps.CUSTOMIZE_TAG_BADGE
              });
            case A.ClanSetupSteps.CUSTOMIZE_BANNER:
            case A.ClanSetupSteps.MEMBER_APPLICATION:
            default:
              return null
          }
        })()
      })]
    })]
  })
}