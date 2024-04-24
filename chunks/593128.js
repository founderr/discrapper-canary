"use strict";
n.r(t), n("47120");
var s = n("735250"),
  a = n("470079"),
  i = n("442837"),
  l = n("481060"),
  r = n("224706"),
  o = n("493544"),
  c = n("153124"),
  d = n("931240"),
  u = n("134726"),
  S = n("389134"),
  T = n("745628"),
  E = n("950279"),
  p = n("796918"),
  C = n("513532"),
  m = n("741595"),
  _ = n("884486"),
  I = n("974842"),
  N = n("359380"),
  f = n("308083"),
  A = n("689938"),
  g = n("225540");
let b = () => [{
  section: o.SectionTypes.HEADER,
  label: A.default.Messages.CLAN_SETTINGS_BASIC_INFO
}, {
  section: f.ClanSetupSteps.GAMES,
  label: A.default.Messages.CLAN_SETTTINGS_SELECT_GAMES,
  ariaLabel: A.default.Messages.CLAN_SETTTINGS_SELECT_GAMES
}, {
  section: f.ClanSetupSteps.PLAYSTYLE,
  label: A.default.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE,
  ariaLabel: A.default.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE
}, {
  section: o.SectionTypes.DIVIDER
}, {
  section: o.SectionTypes.HEADER,
  label: A.default.Messages.CLAN_SETTINGS_PERSONALITY_INFO
}, {
  section: f.ClanSetupSteps.UTILITY_TRAITS,
  label: A.default.Messages.CLAN_SETTINGS_SELECT_TRAITS,
  ariaLabel: A.default.Messages.CLAN_SETTINGS_SELECT_TRAITS
}, {
  section: f.ClanSetupSteps.DESCRIPTION,
  label: A.default.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION,
  ariaLabel: A.default.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION
}, {
  section: f.ClanSetupSteps.PRIMETIME,
  label: A.default.Messages.CLAN_SETTINGS_SET_PRIME_TIME,
  ariaLabel: A.default.Messages.CLAN_SETTINGS_SET_PRIME_TIME
}, {
  section: o.SectionTypes.DIVIDER
}, {
  section: o.SectionTypes.HEADER,
  label: A.default.Messages.CLAN_SETTINGS_CUSTOMIZE_IDENTITY
}, {
  section: f.ClanSetupSteps.CUSTOMIZE_TAG_BADGE,
  label: A.default.Messages.CLAN_SETTINGS_CLAN_BADGE,
  ariaLabel: A.default.Messages.CLAN_SETTINGS_CLAN_BADGE
}, {
  section: f.ClanSetupSteps.CUSTOMIZE_BANNER,
  label: A.default.Messages.CLAN_SETTINGS_CLAN_PROFILE,
  ariaLabel: A.default.Messages.CLAN_SETTINGS_CLAN_PROFILE
}, {
  section: o.SectionTypes.DIVIDER
}, {
  section: f.ClanSetupSteps.MEMBER_APPLICATION,
  label: A.default.Messages.CLAN_SETTINGS_JOIN_APPLICATION,
  ariaLabel: A.default.Messages.CLAN_SETTINGS_JOIN_APPLICATION
}];
t.default = e => {
  let {
    guildId: t,
    transitionState: n,
    onClose: M
  } = e, L = (0, c.useUID)(), [R, h] = a.useState(f.ClanSetupSteps.GAMES), {
    settings: x,
    errors: y
  } = (0, i.useStateFromStoresObject)([S.default], () => {
    var e;
    let t = S.default.getState();
    return {
      settings: t.settings,
      errors: null !== (e = t.errors) && void 0 !== e ? e : {}
    }
  }), {
    defaultGameId: D
  } = u.ClanGuildExperiment.useExperiment({
    guildId: t,
    location: "ClanSettingsModal"
  });
  a.useEffect(() => {
    r.default.getDetectableGames()
  }, []), a.useEffect(() => {
    (0, d.fetchClanSettings)(t)
  }, [t]);
  let P = e => (0, d.updateClanSettings)(t, e),
    j = async () => {
      await (0, d.saveClanSettings)(t, x), M()
    };
  if (null == x) return null;
  let v = b();
  return (0, s.jsxs)(l.ModalRoot, {
    transitionState: n,
    "aria-labelledby": L,
    size: l.ModalSize.DYNAMIC,
    className: g.modal,
    hideShadow: !0,
    children: [(0, s.jsx)(l.Button, {
      className: g.closeButton,
      look: l.Button.Looks.OUTLINED,
      size: l.Button.Sizes.SMALL,
      color: l.Button.Colors.PRIMARY,
      onClick: j,
      children: A.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, s.jsxs)("div", {
      className: g.modalContents,
      children: [(0, s.jsx)("div", {
        className: g.sidebarWrapper,
        children: (0, s.jsx)(l.TabBar, {
          className: g.sidebar,
          selectedItem: R,
          onItemSelect: h,
          orientation: "vertical",
          children: v.map((e, t) => {
            switch (e.section) {
              case o.SectionTypes.HEADER:
                return (0, s.jsx)(l.TabBar.Header, {
                  children: e.label
                }, "header-".concat(t));
              case o.SectionTypes.DIVIDER:
                return (0, s.jsx)(l.TabBar.Separator, {}, "divider-".concat(t));
              default:
                return (0, s.jsx)(l.TabBar.Item, {
                  id: e.section,
                  children: e.label
                }, e.section)
            }
          })
        })
      }), (0, s.jsx)("div", {
        className: g.mainContent,
        children: (() => {
          switch (R) {
            case f.ClanSetupSteps.GAMES:
              var e;
              return (0, s.jsx)(E.default, {
                handleUpdate: P,
                gameApplicationIds: null !== (e = x.gameApplicationIds) && void 0 !== e ? e : new Set,
                requiredGameId: null != D ? D : void 0,
                error: y.gameApplicationIds
              });
            case f.ClanSetupSteps.PLAYSTYLE:
              return (0, s.jsx)(m.default, {
                handleUpdate: P,
                playstyle: x.playstyle,
                error: y.playstyle
              });
            case f.ClanSetupSteps.UTILITY_TRAITS:
              return (0, s.jsx)(N.default, {
                handleUpdate: P,
                interests: x.interests
              });
            case f.ClanSetupSteps.INTERESTS:
              return (0, s.jsx)(p.default, {
                handleUpdate: P,
                interests: x.interests,
                error: y.interests
              });
            case f.ClanSetupSteps.DESCRIPTION:
              return (0, s.jsx)(T.default, {
                handleUpdate: P,
                description: x.description,
                wildcardDescriptors: x.wildcardDescriptors,
                errors: y
              });
            case f.ClanSetupSteps.PRIMETIME:
              return (0, s.jsx)(_.default, {
                handleUpdate: P,
                selectedTimes: x.primetime,
                error: y.primetime
              });
            case f.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
              return (0, s.jsx)(I.default, {
                handleUpdate: P,
                tag: x.tag,
                error: y.tag,
                badge: x.badgeKind,
                primaryColor: x.badgePrimaryColor,
                secondaryColor: x.badgeSecondaryColor,
                furthestStep: f.ClanSetupSteps.CUSTOMIZE_TAG_BADGE
              });
            case f.ClanSetupSteps.MEMBER_APPLICATION:
              return (0, s.jsx)(C.default, {
                guildId: t
              });
            case f.ClanSetupSteps.CUSTOMIZE_BANNER:
            default:
              return null
          }
        })()
      })]
    })]
  })
}