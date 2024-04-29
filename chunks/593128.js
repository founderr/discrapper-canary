"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("513715"),
  i = a("442837"),
  r = a("481060"),
  o = a("224706"),
  d = a("493544"),
  u = a("740727"),
  c = a("931240"),
  S = a("134726"),
  f = a("389134"),
  E = a("35313"),
  T = a("94963"),
  p = a("745628"),
  I = a("950279"),
  g = a("796918"),
  m = a("513532"),
  _ = a("741595"),
  C = a("974842"),
  A = a("359380"),
  M = a("308083"),
  N = a("689938"),
  h = a("943303");
let x = () => [{
    section: d.SectionTypes.HEADER,
    label: N.default.Messages.CLAN_SETTINGS_BASIC_INFO
  }, {
    section: M.ClanSetupSteps.GAMES,
    label: N.default.Messages.CLAN_SETTTINGS_SELECT_GAMES
  }, {
    section: M.ClanSetupSteps.PLAYSTYLE,
    label: N.default.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: d.SectionTypes.HEADER,
    label: N.default.Messages.CLAN_SETTINGS_PERSONALITY_INFO
  }, {
    section: M.ClanSetupSteps.UTILITY_TRAITS,
    label: N.default.Messages.CLAN_SETTINGS_SELECT_TRAITS
  }, {
    section: M.ClanSetupSteps.DESCRIPTION,
    label: N.default.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: d.SectionTypes.HEADER,
    label: N.default.Messages.CLAN_SETTINGS_CUSTOMIZE_IDENTITY
  }, {
    section: M.ClanSetupSteps.CUSTOMIZE_TAG_BADGE,
    label: N.default.Messages.CLAN_SETTINGS_CLAN_BADGE
  }, {
    section: M.ClanSetupSteps.CUSTOMIZE_BANNER,
    label: N.default.Messages.CLAN_SETTINGS_CLAN_PROFILE
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: M.ClanSetupSteps.MEMBER_APPLICATION,
    label: N.default.Messages.CLAN_SETTINGS_JOIN_APPLICATION
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: d.SectionTypes.CUSTOM,
    label: N.default.Messages.CLAN_SETTINGS_DISABLE_CLAN,
    element: L
  }],
  L = e => {
    let {
      guildId: t,
      onClose: l
    } = e, [i, o] = s.useState(!1), d = async () => {
      o(!0);
      try {
        await (0, c.disableClan)(t), l()
      } catch (e) {
        throw o(!1), e
      }
    };
    return (0, n.jsxs)(r.TabBar.Item, {
      selectedItem: !1,
      className: h.deleteItem,
      "aria-label": N.default.Messages.CLAN_SETTINGS_DISABLE_CLAN,
      onClick: () => (0, r.openModalLazy)(async () => {
        let {
          ConfirmModal: e
        } = await Promise.resolve().then(a.bind(a, "481060"));
        return t => (0, n.jsx)(e, {
          ...t,
          header: N.default.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_TITLE,
          confirmText: N.default.Messages.CONFIRM,
          cancelText: N.default.Messages.CANCEL,
          loading: i,
          onConfirm: d,
          children: (0, n.jsx)(r.Text, {
            variant: "text-md/normal",
            children: N.default.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_BODY
          })
        })
      }),
      children: [(0, n.jsx)(u.default, {
        className: h.statusDanger,
        width: 16,
        height: 16
      }), (0, n.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "status-danger",
        children: N.default.Messages.CLAN_SETTINGS_DISABLE_CLAN
      })]
    })
  };
t.default = e => {
  let {
    guildId: t,
    onClose: a
  } = e, [u, L] = s.useState(M.ClanSetupSteps.GAMES), {
    settings: b,
    errors: R
  } = (0, i.useStateFromStoresObject)([f.default], () => {
    var e;
    let t = f.default.getState();
    return {
      settings: t.settings,
      errors: null !== (e = t.errors) && void 0 !== e ? e : {}
    }
  }), {
    defaultGameId: G
  } = S.ClanGuildExperiment.useExperiment({
    guildId: t,
    location: "ClanSettingsModal"
  }), v = (0, E.useFullScreenModalAnimationStyle)();
  s.useEffect(() => {
    o.default.getDetectableGames()
  }, []), s.useEffect(() => {
    (0, c.fetchClanSettings)(t)
  }, [t]);
  let D = e => (0, c.updateClanSettings)(t, {
      gameApplicationIds: e
    }),
    j = e => (0, c.updateClanSettings)(t, {
      playstyle: e
    }),
    y = e => (0, c.updateClanSettings)(t, {
      interests: e
    }),
    P = e => (0, c.updateClanSettings)(t, e),
    O = async () => {
      await (0, c.saveClanSettings)(t, b), a()
    };
  if (null == b) return null;
  let U = x();
  return (0, n.jsxs)(l.animated.div, {
    style: v,
    className: h.modal,
    children: [(0, n.jsx)(r.Button, {
      className: h.closeButton,
      look: r.Button.Looks.OUTLINED,
      size: r.Button.Sizes.SMALL,
      color: r.Button.Colors.PRIMARY,
      onClick: O,
      children: N.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, n.jsxs)("div", {
      className: h.modalContents,
      children: [(0, n.jsx)("div", {
        className: h.sidebarWrapper,
        children: (0, n.jsx)(r.TabBar, {
          className: h.sidebar,
          selectedItem: u,
          onItemSelect: L,
          orientation: "vertical",
          children: U.map((e, s) => {
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
        className: h.mainContent,
        children: (() => {
          switch (u) {
            case M.ClanSetupSteps.GAMES:
              var e;
              return (0, n.jsx)(I.default, {
                title: N.default.Messages.CLAN_SETUP_GAMES_TITLE,
                description: N.default.Messages.CLAN_SETUP_GAMES_SUBTITLE,
                handleUpdate: D,
                gameApplicationIds: null !== (e = b.gameApplicationIds) && void 0 !== e ? e : new Set,
                requiredGameId: null != G ? G : void 0,
                error: R.gameApplicationIds
              });
            case M.ClanSetupSteps.PLAYSTYLE:
              return (0, n.jsx)(_.default, {
                title: N.default.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
                description: N.default.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
                handleUpdate: j,
                playstyle: b.playstyle,
                error: R.playstyle
              });
            case M.ClanSetupSteps.UTILITY_TRAITS:
              return (0, n.jsx)(A.default, {
                title: N.default.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
                description: N.default.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
                handleUpdate: y,
                interests: b.interests
              });
            case M.ClanSetupSteps.INTERESTS:
              return (0, n.jsx)(g.default, {
                handleUpdate: P,
                interests: b.interests,
                error: R.interests
              });
            case M.ClanSetupSteps.DESCRIPTION:
              return (0, n.jsx)(p.default, {
                handleUpdate: P,
                description: b.description,
                wildcardDescriptors: b.wildcardDescriptors,
                errors: R
              });
            case M.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
              return (0, n.jsx)(C.default, {
                handleUpdate: P,
                tag: b.tag,
                error: R.tag,
                badge: b.badgeKind,
                primaryColor: b.badgePrimaryColor,
                secondaryColor: b.badgeSecondaryColor,
                furthestStep: M.ClanSetupSteps.CUSTOMIZE_TAG_BADGE
              });
            case M.ClanSetupSteps.MEMBER_APPLICATION:
              return (0, n.jsx)(m.default, {
                guildId: t
              });
            case M.ClanSetupSteps.CUSTOMIZE_BANNER:
              return (0, n.jsx)(T.default, {
                guildId: t,
                handleUpdate: P,
                progress: b
              });
            default:
              return null
          }
        })()
      })]
    })]
  })
}