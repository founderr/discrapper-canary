"use strict";
n.r(t), n.d(t, {
  ClydeEditProfileModalContent: function() {
    return S
  },
  default: function() {
    return I
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  l = n("446674"),
  s = n("77078"),
  a = n("305961"),
  o = n("145131"),
  u = n("599110"),
  c = n("335189"),
  d = n("473591"),
  f = n("980215"),
  E = n("879253"),
  h = n("709594"),
  _ = n("49111"),
  C = n("782340"),
  p = n("947399");

function S(e) {
  let {
    onClose: t,
    guildId: n
  } = e, {
    settings: S,
    isFetchingSettings: I,
    isSavingSettings: R,
    hasPendingChanges: m,
    errors: g
  } = (0, l.useStateFromStoresObject)([d.default], () => ({
    settings: d.default.getSettings(n),
    isFetchingSettings: d.default.isFetchingSettings(n),
    isSavingSettings: d.default.isSavingSettings(),
    hasPendingChanges: d.default.hasPendingChanges(),
    errors: d.default.getErrors()
  })), v = (0, l.useStateFromStores)([a.default], () => a.default.getGuild(n)), L = (0, f.useClydeProfilesEnabled)(v), [T, N] = r.useState(!1);
  r.useEffect(() => ((0, c.startEditingClydeProfile)(), () => {
    (0, c.doneEditingClydeProfile)(), (0, c.resetPendingChanges)()
  }), []), r.useEffect(() => {
    (0, c.fetchClydeSettings)(n, !0)
  }, [n]), r.useEffect(() => {
    (m || null != g) && N(!1)
  }, [m, g]);
  let A = async () => {
    if (null == n || !d.default.hasPendingChanges()) return;
    let e = d.default.getPendingUpdates();
    await (0, c.saveClydeProfile)(n, function(e) {
      let t = {};
      return void 0 !== e.pendingPersonality && (t.personality = e.pendingPersonality), void 0 !== e.pendingNick && (t.nick = e.pendingNick), void 0 !== e.pendingAvatar && (t.avatar = e.pendingAvatar), void 0 !== e.pendingBanner && (t.banner = e.pendingBanner), void 0 !== e.pendingAccentColor && (t.accent_color = e.pendingAccentColor), void 0 !== e.pendingThemeColors && (t.theme_colors = e.pendingThemeColors), t
    }(e)), N(!0)
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(s.ModalHeader, {
      separator: !1,
      children: [(0, i.jsx)("div", {
        className: p.heading,
        children: (0, i.jsx)(s.Heading, {
          variant: "heading-xl/semibold",
          children: C.default.Messages.CLYDE_CUSTOMIZE
        })
      }), (0, i.jsx)(s.ModalCloseButton, {
        onClick: t
      })]
    }), (0, i.jsx)(s.ScrollerAuto, {
      className: p.content,
      children: I || null == S ? (0, i.jsx)(s.Spinner, {
        type: s.Spinner.Type.SPINNING_CIRCLE
      }) : (0, i.jsxs)(i.Fragment, {
        children: [L && (0, i.jsx)(h.default, {
          guildId: n
        }), null != S && (0, i.jsx)("div", {
          className: p.section,
          children: (0, i.jsx)(E.ClydeEditProfileModalPersonalitySection, {
            settings: S
          })
        })]
      })
    }), (0, i.jsxs)(s.ModalFooter, {
      direction: o.default.Direction.HORIZONTAL,
      className: p.footer,
      children: [(0, i.jsx)("div", {
        className: p.resetButtonContainer,
        children: (0, i.jsx)(s.Button, {
          onClick: () => {
            (0, c.resetPendingChanges)(), u.default.track(_.AnalyticEvents.CLYDE_AI_PROFILE_MODAL_RESET_BUTTON_CLICKED, {
              guild_id: n
            })
          },
          color: s.ButtonColors.PRIMARY,
          size: s.ButtonSizes.SMALL,
          disabled: !m,
          children: C.default.Messages.RESET
        })
      }), m && null == g && (0, i.jsx)("div", {
        className: p.pendingChangesMessage,
        children: C.default.Messages.SETTINGS_NOTICE_MESSAGE
      }), T && (0, i.jsx)("div", {
        className: p.successfullSaveMessage,
        children: C.default.Messages.CLYDE_SETTINGS_SAVE_SUCCESS
      }), null != g && (0, i.jsx)("div", {
        className: p.errorMessage,
        children: C.default.Messages.CLYDE_SETTINGS_SAVE_FAILED
      }), (0, i.jsx)("div", {
        children: (0, i.jsx)(s.Button, {
          onClick: A,
          color: s.ButtonColors.GREEN,
          size: s.ButtonSizes.SMALL,
          submitting: R,
          disabled: !m,
          children: C.default.Messages.SAVE_CHANGES
        })
      })]
    })]
  })
}

function I(e) {
  let {
    transitionState: t,
    onClose: n,
    guildId: r
  } = e;
  return (0, i.jsx)(s.ModalRoot, {
    transitionState: t,
    size: s.ModalSize.LARGE,
    children: (0, i.jsx)(S, {
      onClose: n,
      guildId: r
    })
  })
}