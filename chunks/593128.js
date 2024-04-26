"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("718017"),
  i = n("442837"),
  r = n("481060"),
  o = n("224706"),
  d = n("493544"),
  u = n("740727"),
  c = n("931240"),
  f = n("134726"),
  S = n("389134"),
  E = n("35313"),
  p = n("94963"),
  m = n("745628"),
  I = n("950279"),
  g = n("796918"),
  T = n("513532"),
  C = n("741595"),
  _ = n("974842"),
  A = n("359380"),
  M = n("308083"),
  h = n("689938"),
  N = n("413932");
let x = () => [{
    section: d.SectionTypes.HEADER,
    label: h.default.Messages.CLAN_SETTINGS_BASIC_INFO
  }, {
    section: M.ClanSetupSteps.GAMES,
    label: h.default.Messages.CLAN_SETTTINGS_SELECT_GAMES
  }, {
    section: M.ClanSetupSteps.PLAYSTYLE,
    label: h.default.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: d.SectionTypes.HEADER,
    label: h.default.Messages.CLAN_SETTINGS_PERSONALITY_INFO
  }, {
    section: M.ClanSetupSteps.UTILITY_TRAITS,
    label: h.default.Messages.CLAN_SETTINGS_SELECT_TRAITS
  }, {
    section: M.ClanSetupSteps.DESCRIPTION,
    label: h.default.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: d.SectionTypes.HEADER,
    label: h.default.Messages.CLAN_SETTINGS_CUSTOMIZE_IDENTITY
  }, {
    section: M.ClanSetupSteps.CUSTOMIZE_TAG_BADGE,
    label: h.default.Messages.CLAN_SETTINGS_CLAN_BADGE
  }, {
    section: M.ClanSetupSteps.CUSTOMIZE_BANNER,
    label: h.default.Messages.CLAN_SETTINGS_CLAN_PROFILE
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: M.ClanSetupSteps.MEMBER_APPLICATION,
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
      onClose: s
    } = e, [i, o] = l.useState(!1), d = async () => {
      o(!0);
      try {
        await (0, c.disableClan)(t), s()
      } catch (e) {
        throw o(!1), e
      }
    };
    return (0, a.jsxs)(r.TabBar.Item, {
      selectedItem: !1,
      className: N.deleteItem,
      "aria-label": h.default.Messages.CLAN_SETTINGS_DISABLE_CLAN,
      onClick: () => (0, r.openModalLazy)(async () => {
        let {
          ConfirmModal: e
        } = await Promise.resolve().then(n.bind(n, "481060"));
        return t => (0, a.jsx)(e, {
          ...t,
          header: h.default.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_TITLE,
          confirmText: h.default.Messages.CONFIRM,
          cancelText: h.default.Messages.CANCEL,
          loading: i,
          onConfirm: d,
          children: (0, a.jsx)(r.Text, {
            variant: "text-md/normal",
            children: h.default.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_BODY
          })
        })
      }),
      children: [(0, a.jsx)(u.default, {
        className: N.statusDanger,
        width: 16,
        height: 16
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "status-danger",
        children: h.default.Messages.CLAN_SETTINGS_DISABLE_CLAN
      })]
    })
  };
t.default = e => {
  let {
    guildId: t,
    onClose: n
  } = e, [u, b] = l.useState(M.ClanSetupSteps.GAMES), {
    settings: R,
    errors: L
  } = (0, i.useStateFromStoresObject)([S.default], () => {
    var e;
    let t = S.default.getState();
    return {
      settings: t.settings,
      errors: null !== (e = t.errors) && void 0 !== e ? e : {}
    }
  }), {
    defaultGameId: v
  } = f.ClanGuildExperiment.useExperiment({
    guildId: t,
    location: "ClanSettingsModal"
  }), G = (0, E.useFullScreenModalAnimationStyle)();
  l.useEffect(() => {
    o.default.getDetectableGames()
  }, []), l.useEffect(() => {
    (0, c.fetchClanSettings)(t)
  }, [t]);
  let D = e => (0, c.updateClanSettings)(t, e),
    j = async () => {
      await (0, c.saveClanSettings)(t, R), n()
    };
  if (null == R) return null;
  let y = x();
  return (0, a.jsxs)(s.animated.div, {
    style: G,
    className: N.modal,
    children: [(0, a.jsx)(r.Button, {
      className: N.closeButton,
      look: r.Button.Looks.OUTLINED,
      size: r.Button.Sizes.SMALL,
      color: r.Button.Colors.PRIMARY,
      onClick: j,
      children: h.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, a.jsxs)("div", {
      className: N.modalContents,
      children: [(0, a.jsx)("div", {
        className: N.sidebarWrapper,
        children: (0, a.jsx)(r.TabBar, {
          className: N.sidebar,
          selectedItem: u,
          onItemSelect: b,
          orientation: "vertical",
          children: y.map((e, l) => {
            switch (e.section) {
              case d.SectionTypes.HEADER:
                return (0, a.jsx)(r.TabBar.Header, {
                  children: e.label
                }, "header-".concat(l));
              case d.SectionTypes.DIVIDER:
                return (0, a.jsx)(r.TabBar.Separator, {}, "divider-".concat(l));
              case d.SectionTypes.CUSTOM:
                let s = e.element;
                return (0, a.jsx)(s, {
                  guildId: t,
                  onClose: n
                }, e.label);
              default:
                return (0, a.jsx)(r.TabBar.Item, {
                  id: e.section,
                  children: e.label
                }, e.section)
            }
          })
        })
      }), (0, a.jsx)("div", {
        className: N.mainContent,
        children: (() => {
          switch (u) {
            case M.ClanSetupSteps.GAMES:
              var e;
              return (0, a.jsx)(I.default, {
                handleUpdate: D,
                gameApplicationIds: null !== (e = R.gameApplicationIds) && void 0 !== e ? e : new Set,
                requiredGameId: null != v ? v : void 0,
                error: L.gameApplicationIds
              });
            case M.ClanSetupSteps.PLAYSTYLE:
              return (0, a.jsx)(C.default, {
                handleUpdate: D,
                playstyle: R.playstyle,
                error: L.playstyle
              });
            case M.ClanSetupSteps.UTILITY_TRAITS:
              return (0, a.jsx)(A.default, {
                handleUpdate: D,
                interests: R.interests
              });
            case M.ClanSetupSteps.INTERESTS:
              return (0, a.jsx)(g.default, {
                handleUpdate: D,
                interests: R.interests,
                error: L.interests
              });
            case M.ClanSetupSteps.DESCRIPTION:
              return (0, a.jsx)(m.default, {
                handleUpdate: D,
                description: R.description,
                wildcardDescriptors: R.wildcardDescriptors,
                errors: L
              });
            case M.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
              return (0, a.jsx)(_.default, {
                handleUpdate: D,
                tag: R.tag,
                error: L.tag,
                badge: R.badgeKind,
                primaryColor: R.badgePrimaryColor,
                secondaryColor: R.badgeSecondaryColor,
                furthestStep: M.ClanSetupSteps.CUSTOMIZE_TAG_BADGE
              });
            case M.ClanSetupSteps.MEMBER_APPLICATION:
              return (0, a.jsx)(T.default, {
                guildId: t
              });
            case M.ClanSetupSteps.CUSTOMIZE_BANNER:
              return (0, a.jsx)(p.default, {
                guildId: t,
                handleUpdate: D,
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