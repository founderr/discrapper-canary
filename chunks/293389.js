t(47120);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(442837),
  o = t(692547),
  c = t(481060),
  E = t(224706),
  d = t(225433),
  _ = t(594190),
  T = t(320724),
  S = t(77498),
  u = t(283595),
  I = t(797717),
  N = t(546591),
  A = t(626135),
  C = t(251625),
  O = t(358085),
  m = t(210887),
  h = t(981631),
  g = t(689938),
  R = t(90197),
  M = t(972667),
  x = t(83922),
  p = t(5973),
  D = t(331651);
let L = r.ZP.connectStores([m.Z], () => ({
    theme: m.Z.theme
  }))(c.EmptyState),
  P = (0, O.isWindows)();

function Z(e) {
  let {
    onClose: s
  } = e, t = (0, r.e7)([_.ZP], () => _.ZP.getCandidateGames()), [a, o] = i.useState(null), d = t.map(e => ({
    key: e.pid,
    value: e,
    label: null != e.name ? e.name : ""
  }));
  return (0, n.jsxs)(c.Dialog, {
    className: l()(R.addGamePopout, M.elevationBorderHigh),
    "aria-label": g.Z.Messages.SETTINGS_GAMES_ADD_NEW_GAME,
    children: [(0, n.jsx)(c.SearchableSelect, {
      placeholder: g.Z.Messages.SELECT,
      value: a,
      options: d,
      onChange: function(e) {
        o(e)
      }
    }), (0, n.jsx)(c.FormDivider, {
      className: l()(D.marginTop8, D.marginBottom8)
    }), (0, n.jsxs)("div", {
      className: l()(R.actions, x.horizontal),
      children: [(0, n.jsx)(c.Button, {
        className: R.cancelButton,
        look: c.ButtonLooks.LINK,
        color: c.ButtonColors.PRIMARY,
        onClick: s,
        children: g.Z.Messages.CANCEL
      }), (0, n.jsx)(c.Button, {
        disabled: null == a,
        onClick: function() {
          if (null != a) E.Z.addGame(a.pid, a.name), s()
        },
        children: g.Z.Messages.SETTINGS_GAMES_ADD_NEW_GAME
      })]
    })]
  })
}

function f(e) {
  var s;
  let {
    rawGame: t,
    nowPlaying: a = !1,
    isOverride: T
  } = e, C = (0, r.cj)([S.Z, _.ZP, u.Z], () => (0, _.FZ)(t)), [O, m] = i.useState(!1), [M, D] = i.useState(null !== (s = C.name) && void 0 !== s ? s : "???"), L = l()(x.flexCenter, {
    [R.game]: !a,
    [R.activeGame]: a,
    [p.card]: !a,
    [R.nowPlaying]: null != C && a
  });

  function Z() {
    E.Z.deleteEntry(C)
  }

  function f() {
    C.name !== M && E.Z.editName(C, M)
  }

  function v(e) {
    13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault())
  }

  function j() {
    E.Z.toggleDetection(C)
  }

  function U() {
    if (O) return;
    let e = null != C.id ? S.Z.getDetectableGame(C.id) : null;
    A.default.track(h.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
      application_id: null == e ? void 0 : e.id,
      game_name: C.name
    }), (0, c.showToast)((0, c.createToast)(g.Z.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION_CONFIRMATION.format({
      gameName: C.name
    }), c.ToastType.SUCCESS)), m(!0)
  }
  return (0, n.jsxs)("div", {
    className: L,
    children: [(0, n.jsxs)("div", {
      className: l()(R.gameNameLastPlayed, x.vertical),
      children: [C.verified && !T ? (0, n.jsxs)("div", {
        className: R.detectedApplication,
        children: [(0, n.jsx)("div", {
          className: R.gameName,
          children: C.name
        }), (0, n.jsx)(c.Tooltip, {
          text: g.Z.Messages.SETTINGS_GAMES_VERIFIED_ICON,
          children: e => (0, n.jsx)(I.Z, {
            className: R.gameVerifiedIcon,
            size: 18,
            color: o.Z.unsafe_rawColors.BRAND_500.css,
            ...e,
            children: (0, n.jsx)(c.CheckmarkSmallIcon, {
              size: "custom",
              width: 18,
              height: 18,
              color: o.Z.unsafe_rawColors.WHITE_500.css
            })
          })
        })]
      }) : (0, n.jsx)("input", {
        className: l()(R.gameName, R.gameNameInput),
        type: "text",
        maxLength: 128,
        value: M,
        onBlur: f,
        onKeyDown: v,
        onChange: e => D(e.target.value)
      }), function() {
        let e;
        let {
          played: s,
          exePath: t
        } = C;
        return a ? e = g.Z.Messages.SETTINGS_GAMES_NOW_PLAYING_STATE : null != s && "" !== s && (e = g.Z.Messages.SETTINGS_GAMES_LAST_PLAYED.format({
          when: s
        })), (0, n.jsx)("div", {
          className: R.lastPlayed,
          children: (0, n.jsx)(N.Z, {
            hoverText: null != t && "" !== t ? t.toUpperCase() : "",
            children: e
          })
        })
      }()]
    }), T ? null : O ? null : (0, n.jsx)("div", {
      className: l()(x.flexCenter, x.noWrap, x.justifyBetween, R.toggleContainer),
      children: (0, n.jsx)(c.Tooltip, {
        text: g.Z.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION,
        children: e => {
          let {
            onMouseEnter: s,
            onMouseLeave: t
          } = e;
          return (0, n.jsx)(c.Clickable, {
            "aria-label": g.Z.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION,
            className: R.toggleIcon,
            onClick: U,
            onMouseEnter: s,
            onMouseLeave: t,
            children: (0, n.jsx)(c.FlagIcon, {
              size: "md",
              color: "currentColor",
              className: R.toggleIconOn,
              colorClass: R.fill
            })
          })
        }
      })
    }), function() {
      let {
        detectable: e
      } = C, s = e ? (0, n.jsx)(c.EyeIcon, {
        size: "md",
        color: "currentColor",
        className: R.toggleIconOn,
        colorClass: R.fill
      }) : (0, n.jsx)(c.EyeSlashIcon, {
        size: "md",
        color: "currentColor",
        className: R.toggleIconOff,
        colorClass: R.fill
      });
      return (0, n.jsx)("div", {
        className: l()(x.flexCenter, x.noWrap, x.justifyBetween, R.toggleContainer),
        children: (0, n.jsx)(c.Tooltip, {
          text: g.Z.Messages.SETTINGS_GAMES_TOGGLE_DETECTION,
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: i
            } = e;
            return (0, n.jsx)(c.Clickable, {
              "aria-label": g.Z.Messages.SETTINGS_GAMES_TOGGLE_DETECTION,
              className: R.toggleIcon,
              onClick: j,
              onMouseEnter: t,
              onMouseLeave: i,
              children: s
            })
          }
        })
      })
    }(), function() {
      if (!P) return null;
      let {
        overlay: e,
        overlayWarn: s
      } = C, t = e ? (0, n.jsx)(c.ScreenIcon, {
        size: "md",
        color: "currentColor",
        className: R.toggleIconOn,
        colorClass: R.fill
      }) : (0, n.jsx)(c.ScreenSlashIcon, {
        size: "md",
        color: "currentColor",
        className: R.toggleIconOff,
        colorClass: R.fill
      }), i = s ? (0, n.jsx)(c.Tooltip, {
        text: g.Z.Messages.SETTINGS_GAMES_OVERLAY_WARNING,
        children: e => (0, n.jsx)("i", {
          className: R.overlayWarningIcon,
          ...e
        })
      }) : null;
      return (0, n.jsxs)("div", {
        className: l()(x.flexCenter, x.noWrap, x.justifyBetween, R.toggleContainer),
        children: [i, (0, n.jsx)(c.Tooltip, {
          text: g.Z.Messages.SETTINGS_GAMES_TOGGLE_OVERLAY,
          children: s => {
            let {
              onMouseEnter: i,
              onMouseLeave: a
            } = s;
            return (0, n.jsx)(c.Clickable, {
              "aria-label": g.Z.Messages.SETTINGS_GAMES_TOGGLE_OVERLAY,
              className: R.toggleIcon,
              onClick: () => {
                var s;
                return s = !e, void E.Z.toggleOverlay(C, s)
              },
              onMouseEnter: i,
              onMouseLeave: a,
              children: t
            })
          }
        })]
      })
    }(), !a || T ? (0, n.jsx)(d.Z, {
      className: R.removeGame,
      onClick: Z
    }) : null]
  })
}

function v() {
  return (0, n.jsx)("div", {
    className: l()(x.flexCenter, R.notDetected, R.activeGame),
    children: (0, n.jsxs)("div", {
      className: l()(R.gameNameLastPlayed, x.vertical),
      children: [(0, n.jsx)("div", {
        className: R.gameName,
        children: g.Z.Messages.SETTINGS_GAMES_NO_GAME_DETECTED
      }), (0, n.jsx)("div", {
        className: R.lastPlayed,
        children: g.Z.Messages.SETTINGS_GAMES_NOT_PLAYING
      })]
    })
  })
}

function j(e) {
  let {
    children: s
  } = e;
  return (0, n.jsxs)(L, {
    className: D.marginTop40,
    children: [(0, n.jsx)(c.EmptyStateImage, {
      darkSrc: t(879601),
      lightSrc: t(889e3),
      width: 430,
      height: 250
    }), s]
  })
}
let U = (0, C.oH)(function() {
  for (var e = arguments.length, s = Array(e), t = 0; t < e; t++) s[t] = arguments[t];
  return new Set(s.map(e => e.exePath))
});
s.Z = function(e) {
  let {
    className: s,
    showHeader: t = !0
  } = e, a = (0, r.Wu)([_.ZP], () => _.ZP.getGamesSeen(!0)), {
    runningGame: o,
    overrideExePaths: E
  } = (0, r.cj)([_.ZP], () => ({
    runningGame: _.ZP.getVisibleGame(),
    overrideExePaths: U(..._.ZP.getOverrides())
  }));
  return i.useEffect(() => ((0, T.K)(), T.P), []), (0, n.jsxs)(c.FormSection, {
    tag: "h1",
    title: t ? g.Z.Messages.REGISTERED_GAMES : null,
    className: s,
    children: [null != o ? (0, n.jsx)(f, {
      rawGame: o,
      isOverride: E.has(o.exePath),
      nowPlaying: !0
    }, (0, _.rH)(o)) : (0, n.jsx)(v, {}), (0, n.jsxs)("div", {
      className: l()(R.nowPlayingAdd, D.marginReset, D.marginTop8, D.marginBottom20),
      children: [(0, n.jsx)("span", {
        children: g.Z.Messages.SETTINGS_GAMES_NOT_SEEING_GAME
      }), (0, n.jsx)(c.Popout, {
        renderPopout: e => {
          let {
            closePopout: s
          } = e;
          return (0, n.jsx)(Z, {
            onClose: s
          })
        },
        align: "center",
        position: "bottom",
        children: e => (0, n.jsx)(c.Button, {
          ...e,
          look: c.ButtonLooks.LINK,
          size: c.ButtonSizes.MIN,
          color: c.ButtonColors.LINK,
          children: g.Z.Messages.SETTINGS_GAMES_ADD_GAME
        })
      })]
    }), 0 === a.length ? (0, n.jsx)(j, {
      children: (0, n.jsx)(c.EmptyStateText, {
        children: g.Z.Messages.SETTINGS_GAMES_NO_GAMES_HEADER
      })
    }) : (0, n.jsxs)(c.FormSection, {
      className: D.marginTop40,
      children: [(0, n.jsx)(c.FormTitle, {
        className: D.marginBottom4,
        children: g.Z.Messages.SETTINGS_GAMES_ADDED_GAMES_LABEL
      }), (0, n.jsx)(c.FormText, {
        type: c.FormTextTypes.DESCRIPTION,
        children: g.Z.Messages.SETTINGS_GAMES_IGDB_ATTRIBUTION.format({
          igdbLink: "https://www.igdb.com/about"
        })
      }), a.map(e => (0, n.jsx)(f, {
        rawGame: e,
        isOverride: E.has(e.exePath)
      }, (0, _.rH)(e)))]
    })]
  })
}