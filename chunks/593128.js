"use strict";
s.r(t), s("47120");
var n = s("735250"),
  a = s("470079"),
  l = s("442837"),
  i = s("481060"),
  r = s("224706"),
  o = s("493544"),
  d = s("153124"),
  c = s("931240"),
  u = s("134726"),
  S = s("389134"),
  T = s("745628"),
  E = s("950279"),
  p = s("796918"),
  C = s("741595"),
  m = s("884486"),
  _ = s("974842"),
  N = s("359380"),
  I = s("308083"),
  A = s("689938"),
  f = s("225540");
let b = () => [{
  section: o.SectionTypes.HEADER,
  label: A.default.Messages.CLAN_SETTINGS_BASIC_INFO
}, {
  section: I.ClanSetupSteps.GAMES,
  label: A.default.Messages.CLAN_SETTTINGS_SELECT_GAMES,
  ariaLabel: A.default.Messages.CLAN_SETTTINGS_SELECT_GAMES
}, {
  section: I.ClanSetupSteps.PLAYSTYLE,
  label: A.default.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE,
  ariaLabel: A.default.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE
}, {
  section: o.SectionTypes.DIVIDER
}, {
  section: o.SectionTypes.HEADER,
  label: A.default.Messages.CLAN_SETTINGS_PERSONALITY_INFO
}, {
  section: I.ClanSetupSteps.UTILITY_TRAITS,
  label: A.default.Messages.CLAN_SETTINGS_SELECT_TRAITS,
  ariaLabel: A.default.Messages.CLAN_SETTINGS_SELECT_TRAITS
}, {
  section: I.ClanSetupSteps.DESCRIPTION,
  label: A.default.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION,
  ariaLabel: A.default.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION
}, {
  section: I.ClanSetupSteps.PRIMETIME,
  label: A.default.Messages.CLAN_SETTINGS_SET_PRIME_TIME,
  ariaLabel: A.default.Messages.CLAN_SETTINGS_SET_PRIME_TIME
}, {
  section: o.SectionTypes.DIVIDER
}, {
  section: o.SectionTypes.HEADER,
  label: A.default.Messages.CLAN_SETTINGS_CUSTOMIZE_IDENTITY
}, {
  section: I.ClanSetupSteps.CUSTOMIZE_TAG_BADGE,
  label: A.default.Messages.CLAN_SETTINGS_CLAN_BADGE,
  ariaLabel: A.default.Messages.CLAN_SETTINGS_CLAN_BADGE
}, {
  section: I.ClanSetupSteps.CUSTOMIZE_BANNER,
  label: A.default.Messages.CLAN_SETTINGS_CLAN_PROFILE,
  ariaLabel: A.default.Messages.CLAN_SETTINGS_CLAN_PROFILE
}, {
  section: o.SectionTypes.DIVIDER
}, {
  section: I.ClanSetupSteps.MEMBER_APPLICATION,
  label: A.default.Messages.CLAN_SETTINGS_JOIN_APPLICATION,
  ariaLabel: A.default.Messages.CLAN_SETTINGS_JOIN_APPLICATION
}];
t.default = e => {
  let {
    guildId: t,
    transitionState: s,
    onClose: g
  } = e, M = (0, d.useUID)(), [L, h] = a.useState(I.ClanSetupSteps.GAMES), {
    settings: R,
    errors: x
  } = (0, l.useStateFromStoresObject)([S.default], () => {
    var e;
    let t = S.default.getState();
    return {
      settings: t.settings,
      errors: null !== (e = t.errors) && void 0 !== e ? e : {}
    }
  }), {
    defaultGameId: y
  } = u.ClanGuildExperiment.useExperiment({
    guildId: t,
    location: "ClanSettingsModal"
  });
  a.useEffect(() => {
    r.default.getDetectableGames()
  }, []), a.useEffect(() => {
    (0, c.fetchClanSettings)(t)
  }, [t]);
  let D = e => (0, c.updateClanSettings)(t, e),
    P = async () => {
      await (0, c.saveClanSettings)(t, R), g()
    };
  if (null == R) return null;
  let j = b();
  return (0, n.jsxs)(i.ModalRoot, {
    transitionState: s,
    "aria-labelledby": M,
    size: i.ModalSize.DYNAMIC,
    className: f.modal,
    hideShadow: !0,
    children: [(0, n.jsx)(i.Button, {
      className: f.closeButton,
      look: i.Button.Looks.OUTLINED,
      size: i.Button.Sizes.SMALL,
      color: i.Button.Colors.PRIMARY,
      onClick: P,
      children: A.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, n.jsxs)("div", {
      className: f.modalContents,
      children: [(0, n.jsx)("div", {
        className: f.sidebarWrapper,
        children: (0, n.jsx)(i.TabBar, {
          className: f.sidebar,
          selectedItem: L,
          onItemSelect: h,
          orientation: "vertical",
          children: j.map((e, t) => {
            switch (e.section) {
              case o.SectionTypes.HEADER:
                return (0, n.jsx)(i.TabBar.Header, {
                  children: e.label
                }, "header-".concat(t));
              case o.SectionTypes.DIVIDER:
                return (0, n.jsx)(i.TabBar.Separator, {}, "divider-".concat(t));
              default:
                return (0, n.jsx)(i.TabBar.Item, {
                  id: e.section,
                  children: e.label
                }, e.section)
            }
          })
        })
      }), (0, n.jsx)("div", {
        className: f.mainContent,
        children: (() => {
          switch (L) {
            case I.ClanSetupSteps.GAMES:
              var e;
              return (0, n.jsx)(E.default, {
                handleUpdate: D,
                gameApplicationIds: null !== (e = R.gameApplicationIds) && void 0 !== e ? e : new Set,
                requiredGameId: null != y ? y : void 0,
                error: x.gameApplicationIds
              });
            case I.ClanSetupSteps.PLAYSTYLE:
              return (0, n.jsx)(C.default, {
                handleUpdate: D,
                playstyle: R.playstyle,
                error: x.playstyle
              });
            case I.ClanSetupSteps.UTILITY_TRAITS:
              return (0, n.jsx)(N.default, {
                handleUpdate: D,
                interests: R.interests
              });
            case I.ClanSetupSteps.INTERESTS:
              return (0, n.jsx)(p.default, {
                handleUpdate: D,
                interests: R.interests,
                error: x.interests
              });
            case I.ClanSetupSteps.DESCRIPTION:
              return (0, n.jsx)(T.default, {
                handleUpdate: D,
                description: R.description,
                wildcardDescriptors: R.wildcardDescriptors,
                errors: x
              });
            case I.ClanSetupSteps.PRIMETIME:
              return (0, n.jsx)(m.default, {
                handleUpdate: D,
                selectedTimes: R.primetime,
                error: x.primetime
              });
            case I.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
              return (0, n.jsx)(_.default, {
                handleUpdate: D,
                tag: R.tag,
                error: x.tag,
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