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
  p = n("745628"),
  m = n("950279"),
  I = n("796918"),
  g = n("513532"),
  T = n("741595"),
  C = n("974842"),
  _ = n("359380"),
  A = n("308083"),
  M = n("689938"),
  h = n("225540");
let N = () => [{
    section: d.SectionTypes.HEADER,
    label: M.default.Messages.CLAN_SETTINGS_BASIC_INFO
  }, {
    section: A.ClanSetupSteps.GAMES,
    label: M.default.Messages.CLAN_SETTTINGS_SELECT_GAMES
  }, {
    section: A.ClanSetupSteps.PLAYSTYLE,
    label: M.default.Messages.CLAN_SETTTINGS_SELECT_PLAYSTYLE
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: d.SectionTypes.HEADER,
    label: M.default.Messages.CLAN_SETTINGS_PERSONALITY_INFO
  }, {
    section: A.ClanSetupSteps.UTILITY_TRAITS,
    label: M.default.Messages.CLAN_SETTINGS_SELECT_TRAITS
  }, {
    section: A.ClanSetupSteps.DESCRIPTION,
    label: M.default.Messages.CLAN_SETTINGS_WRITE_DESCRIPTION
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: d.SectionTypes.HEADER,
    label: M.default.Messages.CLAN_SETTINGS_CUSTOMIZE_IDENTITY
  }, {
    section: A.ClanSetupSteps.CUSTOMIZE_TAG_BADGE,
    label: M.default.Messages.CLAN_SETTINGS_CLAN_BADGE
  }, {
    section: A.ClanSetupSteps.CUSTOMIZE_BANNER,
    label: M.default.Messages.CLAN_SETTINGS_CLAN_PROFILE
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: A.ClanSetupSteps.MEMBER_APPLICATION,
    label: M.default.Messages.CLAN_SETTINGS_JOIN_APPLICATION
  }, {
    section: d.SectionTypes.DIVIDER
  }, {
    section: d.SectionTypes.CUSTOM,
    label: M.default.Messages.CLAN_SETTINGS_DISABLE_CLAN,
    element: x
  }],
  x = e => {
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
      className: h.deleteItem,
      "aria-label": M.default.Messages.CLAN_SETTINGS_DISABLE_CLAN,
      onClick: () => (0, r.openModalLazy)(async () => {
        let {
          ConfirmModal: e
        } = await Promise.resolve().then(n.bind(n, "481060"));
        return t => (0, a.jsx)(e, {
          ...t,
          header: M.default.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_TITLE,
          confirmText: M.default.Messages.CONFIRM,
          cancelText: M.default.Messages.CANCEL,
          loading: i,
          onConfirm: d,
          children: (0, a.jsx)(r.Text, {
            variant: "text-md/normal",
            children: M.default.Messages.CLAN_SETTINGS_DISABLE_CONFIRM_BODY
          })
        })
      }),
      children: [(0, a.jsx)(u.default, {
        className: h.statusDanger,
        width: 16,
        height: 16
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "status-danger",
        children: M.default.Messages.CLAN_SETTINGS_DISABLE_CLAN
      })]
    })
  };
t.default = e => {
  let {
    guildId: t,
    onClose: n
  } = e, [u, x] = l.useState(A.ClanSetupSteps.GAMES), {
    settings: b,
    errors: R
  } = (0, i.useStateFromStoresObject)([S.default], () => {
    var e;
    let t = S.default.getState();
    return {
      settings: t.settings,
      errors: null !== (e = t.errors) && void 0 !== e ? e : {}
    }
  }), {
    defaultGameId: L
  } = f.ClanGuildExperiment.useExperiment({
    guildId: t,
    location: "ClanSettingsModal"
  }), v = (0, E.useFullScreenModalAnimationStyle)();
  l.useEffect(() => {
    o.default.getDetectableGames()
  }, []), l.useEffect(() => {
    (0, c.fetchClanSettings)(t)
  }, [t]);
  let G = e => (0, c.updateClanSettings)(t, e),
    D = async () => {
      await (0, c.saveClanSettings)(t, b), n()
    };
  if (null == b) return null;
  let j = N();
  return (0, a.jsxs)(s.animated.div, {
    style: v,
    className: h.modal,
    children: [(0, a.jsx)(r.Button, {
      className: h.closeButton,
      look: r.Button.Looks.OUTLINED,
      size: r.Button.Sizes.SMALL,
      color: r.Button.Colors.PRIMARY,
      onClick: D,
      children: M.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, a.jsxs)("div", {
      className: h.modalContents,
      children: [(0, a.jsx)("div", {
        className: h.sidebarWrapper,
        children: (0, a.jsx)(r.TabBar, {
          className: h.sidebar,
          selectedItem: u,
          onItemSelect: x,
          orientation: "vertical",
          children: j.map((e, l) => {
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
        className: h.mainContent,
        children: (() => {
          switch (u) {
            case A.ClanSetupSteps.GAMES:
              var e;
              return (0, a.jsx)(m.default, {
                handleUpdate: G,
                gameApplicationIds: null !== (e = b.gameApplicationIds) && void 0 !== e ? e : new Set,
                requiredGameId: null != L ? L : void 0,
                error: R.gameApplicationIds
              });
            case A.ClanSetupSteps.PLAYSTYLE:
              return (0, a.jsx)(T.default, {
                handleUpdate: G,
                playstyle: b.playstyle,
                error: R.playstyle
              });
            case A.ClanSetupSteps.UTILITY_TRAITS:
              return (0, a.jsx)(_.default, {
                handleUpdate: G,
                interests: b.interests
              });
            case A.ClanSetupSteps.INTERESTS:
              return (0, a.jsx)(I.default, {
                handleUpdate: G,
                interests: b.interests,
                error: R.interests
              });
            case A.ClanSetupSteps.DESCRIPTION:
              return (0, a.jsx)(p.default, {
                handleUpdate: G,
                description: b.description,
                wildcardDescriptors: b.wildcardDescriptors,
                errors: R
              });
            case A.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
              return (0, a.jsx)(C.default, {
                handleUpdate: G,
                tag: b.tag,
                error: R.tag,
                badge: b.badgeKind,
                primaryColor: b.badgePrimaryColor,
                secondaryColor: b.badgeSecondaryColor,
                furthestStep: A.ClanSetupSteps.CUSTOMIZE_TAG_BADGE
              });
            case A.ClanSetupSteps.MEMBER_APPLICATION:
              return (0, a.jsx)(g.default, {
                guildId: t
              });
            case A.ClanSetupSteps.CUSTOMIZE_BANNER:
            default:
              return null
          }
        })()
      })]
    })]
  })
}