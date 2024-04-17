"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("493544"),
  o = n("153124"),
  c = n("931240"),
  d = n("134726"),
  u = n("389134"),
  S = n("745628"),
  T = n("950279"),
  E = n("796918"),
  C = n("741595"),
  p = n("884486"),
  m = n("974842"),
  N = n("359380"),
  I = n("308083"),
  f = n("689938"),
  A = n("225540");
let _ = () => [{
  section: r.SectionTypes.HEADER,
  label: f.default.Messages.CLAN_SETTINGS_BASIC_INFO
}, {
  section: I.ClanSetupSteps.GAMES,
  label: f.default.Messages.CLAN_SETTTINGS_SELECT_GAMES,
  ariaLabel: f.default.Messages.CLAN_SETTTINGS_SELECT_GAMES
}, {
  section: I.ClanSetupSteps.PLAYSTYLE,
  label: f.default.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE,
  ariaLabel: f.default.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE
}, {
  section: r.SectionTypes.DIVIDER
}, {
  section: r.SectionTypes.HEADER,
  label: f.default.Messages.CLAN_SETTINGS_PERSONALITY_INFO
}, {
  section: I.ClanSetupSteps.UTILITY_TRAITS,
  label: f.default.Messages.CLAN_SETTINGS_SELECT_TRAITS,
  ariaLabel: f.default.Messages.CLAN_SETTINGS_SELECT_TRAITS
}, {
  section: I.ClanSetupSteps.DESCRIPTION,
  label: f.default.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION,
  ariaLabel: f.default.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION
}, {
  section: I.ClanSetupSteps.PRIMETIME,
  label: f.default.Messages.CLAN_SETTINGS_SET_PRIME_TIME,
  ariaLabel: f.default.Messages.CLAN_SETTINGS_SET_PRIME_TIME
}, {
  section: r.SectionTypes.DIVIDER
}, {
  section: r.SectionTypes.HEADER,
  label: f.default.Messages.CLAN_SETTINGS_CUSTOMIZE_IDENTITY
}, {
  section: I.ClanSetupSteps.CUSTOMIZE_TAG_BADGE,
  label: f.default.Messages.CLAN_SETTINGS_CLAN_BADGE,
  ariaLabel: f.default.Messages.CLAN_SETTINGS_CLAN_BADGE
}, {
  section: I.ClanSetupSteps.CUSTOMIZE_BANNER,
  label: f.default.Messages.CLAN_SETTINGS_CLAN_PROFILE,
  ariaLabel: f.default.Messages.CLAN_SETTINGS_CLAN_PROFILE
}, {
  section: r.SectionTypes.DIVIDER
}, {
  section: I.ClanSetupSteps.MEMBER_APPLICATION,
  label: f.default.Messages.CLAN_SETTINGS_JOIN_APPLICATION,
  ariaLabel: f.default.Messages.CLAN_SETTINGS_JOIN_APPLICATION
}];
t.default = e => {
  let {
    guildId: t,
    transitionState: n,
    onClose: b
  } = e, L = (0, o.useUID)(), [M, h] = s.useState(I.ClanSetupSteps.GAMES), {
    settings: R,
    errors: g
  } = (0, l.useStateFromStoresObject)([u.default], () => {
    var e;
    let n = u.default.getState(t);
    return {
      settings: n.settings,
      errors: null !== (e = n.errors) && void 0 !== e ? e : {}
    }
  }), {
    defaultGameId: x
  } = d.ClanGuildExperiment.useExperiment({
    guildId: t,
    location: "ClanSettingsModal"
  });
  s.useEffect(() => {
    (0, c.fetchClanSettings)(t)
  }, [t]);
  let D = e => null;
  if (null == R) return null;
  let y = _();
  return (0, a.jsxs)(i.ModalRoot, {
    transitionState: n,
    "aria-labelledby": L,
    size: i.ModalSize.DYNAMIC,
    className: A.modal,
    hideShadow: !0,
    children: [(0, a.jsx)(i.Button, {
      className: A.closeButton,
      look: i.Button.Looks.OUTLINED,
      size: i.Button.Sizes.SMALL,
      color: i.Button.Colors.PRIMARY,
      onClick: b,
      children: f.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, a.jsxs)("div", {
      className: A.modalContents,
      children: [(0, a.jsx)("div", {
        className: A.sidebarWrapper,
        children: (0, a.jsx)(i.TabBar, {
          className: A.sidebar,
          selectedItem: M,
          onItemSelect: h,
          orientation: "vertical",
          children: y.map((e, t) => {
            switch (e.section) {
              case r.SectionTypes.HEADER:
                return (0, a.jsx)(i.TabBar.Header, {
                  children: e.label
                }, "header-".concat(t));
              case r.SectionTypes.DIVIDER:
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
        className: A.mainContent,
        children: (() => {
          switch (M) {
            case I.ClanSetupSteps.GAMES:
              var e;
              return (0, a.jsx)(T.default, {
                handleUpdate: D,
                selectedGames: null !== (e = R.selectedGames) && void 0 !== e ? e : new Map,
                requiredGameId: null != x ? x : void 0,
                error: g.selectedGames
              });
            case I.ClanSetupSteps.PLAYSTYLE:
              return (0, a.jsx)(C.default, {
                handleUpdate: D,
                playstyle: R.playstyle,
                error: g.playstyle
              });
            case I.ClanSetupSteps.UTILITY_TRAITS:
              return (0, a.jsx)(N.default, {
                handleUpdate: D,
                interests: R.interests
              });
            case I.ClanSetupSteps.INTERESTS:
              return (0, a.jsx)(E.default, {
                handleUpdate: D,
                interests: R.interests,
                error: g.interests
              });
            case I.ClanSetupSteps.DESCRIPTION:
              return (0, a.jsx)(S.default, {
                handleUpdate: D,
                description: R.description,
                wildcardDescriptors: R.wildcardDescriptors,
                errors: g
              });
            case I.ClanSetupSteps.PRIMETIME:
              return (0, a.jsx)(p.default, {
                handleUpdate: D,
                selectedTimes: R.primetime,
                error: g.primetime
              });
            case I.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
              return (0, a.jsx)(m.default, {
                handleUpdate: D,
                tag: R.tag,
                error: g.tag,
                badge: R.badgeKind,
                primaryColor: R.badgePrimaryColor,
                secondaryColor: R.badgeSecondaryColor,
                furthestStep: I.ClanSetupSteps.CUSTOMIZE_TAG_BADGE
              });
            case I.ClanSetupSteps.CUSTOMIZE_BANNER:
            case I.ClanSetupSteps.MEMBER_APPLICATION:
            default:
              return null
          }
        })()
      })]
    })]
  })
}