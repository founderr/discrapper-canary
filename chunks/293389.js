t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(442837),
  l = t(692547),
  c = t(481060),
  d = t(224706),
  _ = t(225433),
  E = t(594190),
  u = t(320724),
  T = t(77498),
  S = t(283595),
  I = t(797717),
  N = t(546591),
  C = t(626135),
  A = t(251625),
  m = t(358085),
  O = t(210887),
  g = t(981631),
  h = t(689938),
  R = t(90197),
  p = t(972667),
  x = t(83922),
  M = t(5973),
  D = t(331651);
let f = o.ZP.connectStores([O.Z], () => ({
    theme: O.Z.theme
  }))(c.EmptyState),
  L = (0, m.isWindows)();

function P(e) {
  let {
    onClose: s
  } = e, t = (0, o.e7)([E.ZP], () => E.ZP.getCandidateGames()), [i, l] = a.useState(null), _ = t.map(e => ({
    key: e.pid,
    value: e,
    label: null != e.name ? e.name : ""
  }));
  return (0, n.jsxs)(c.Dialog, {
    className: r()(R.addGamePopout, p.elevationBorderHigh),
    "aria-label": h.Z.Messages.SETTINGS_GAMES_ADD_NEW_GAME,
    children: [(0, n.jsx)(c.SearchableSelect, {
      placeholder: h.Z.Messages.SELECT,
      value: i,
      options: _,
      onChange: function(e) {
        l(e)
      }
    }), (0, n.jsx)(c.FormDivider, {
      className: r()(D.marginTop8, D.marginBottom8)
    }), (0, n.jsxs)("div", {
      className: r()(R.actions, x.horizontal),
      children: [(0, n.jsx)(c.Button, {
        className: R.cancelButton,
        look: c.ButtonLooks.LINK,
        color: c.ButtonColors.PRIMARY,
        onClick: s,
        children: h.Z.Messages.CANCEL
      }), (0, n.jsx)(c.Button, {
        disabled: null == i,
        onClick: function() {
          if (null != i) d.Z.addGame(i.pid, i.name), s()
        },
        children: h.Z.Messages.SETTINGS_GAMES_ADD_NEW_GAME
      })]
    })]
  })
}

function Z(e) {
  var s;
  let {
    rawGame: t,
    nowPlaying: i = !1,
    isOverride: u
  } = e, A = (0, o.cj)([T.Z, E.ZP, S.Z], () => (0, E.FZ)(t)), [m, O] = a.useState(!1), [p, D] = a.useState(null !== (s = A.name) && void 0 !== s ? s : "???"), f = r()(x.flexCenter, {
    [R.game]: !i,
    [R.activeGame]: i,
    [M.card]: !i,
    [R.nowPlaying]: null != A && i
  });

  function P() {
    d.Z.deleteEntry(A)
  }

  function Z() {
    A.name !== p && d.Z.editName(A, p)
  }

  function v(e) {
    13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault())
  }

  function b() {
    d.Z.toggleDetection(A)
  }

  function j() {
    if (m) return;
    let e = null != A.id ? T.Z.getDetectableGame(A.id) : null;
    C.default.track(g.rMx.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
      application_id: null == e ? void 0 : e.id,
      game_name: A.name
    }), (0, c.showToast)((0, c.createToast)(h.Z.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION_CONFIRMATION.format({
      gameName: A.name
    }), c.ToastType.SUCCESS)), O(!0)
  }
  return (0, n.jsxs)("div", {
    className: f,
    children: [(0, n.jsxs)("div", {
      className: r()(R.gameNameLastPlayed, x.vertical),
      children: [A.verified && !u ? (0, n.jsxs)("div", {
        className: R.detectedApplication,
        children: [(0, n.jsx)("div", {
          className: R.gameName,
          children: A.name
        }), (0, n.jsx)(c.Tooltip, {
          text: h.Z.Messages.SETTINGS_GAMES_VERIFIED_ICON,
          children: e => (0, n.jsx)(I.Z, {
            className: R.gameVerifiedIcon,
            size: 18,
            color: l.Z.unsafe_rawColors.BRAND_500.css,
            ...e,
            children: (0, n.jsx)(c.CheckmarkSmallIcon, {
              size: "custom",
              width: 18,
              height: 18,
              color: l.Z.unsafe_rawColors.WHITE_500.css
            })
          })
        })]
      }) : (0, n.jsx)("input", {
        className: r()(R.gameName, R.gameNameInput),
        type: "text",
        maxLength: 128,
        value: p,
        onBlur: Z,
        onKeyDown: v,
        onChange: e => D(e.target.value)
      }), function() {
        let e;
        let {
          played: s,
          exePath: t
        } = A;
        return i ? e = h.Z.Messages.SETTINGS_GAMES_NOW_PLAYING_STATE : null != s && "" !== s && (e = h.Z.Messages.SETTINGS_GAMES_LAST_PLAYED.format({
          when: s
        })), (0, n.jsx)("div", {
          className: R.lastPlayed,
          children: (0, n.jsx)(N.Z, {
            hoverText: null != t && "" !== t ? t.toUpperCase() : "",
            children: e
          })
        })
      }()]
    }), u ? null : m ? null : (0, n.jsx)("div", {
      className: r()(x.flexCenter, x.noWrap, x.justifyBetween, R.toggleContainer),
      children: (0, n.jsx)(c.Tooltip, {
        text: h.Z.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION,
        children: e => {
          let {
            onMouseEnter: s,
            onMouseLeave: t
          } = e;
          return (0, n.jsx)(c.Clickable, {
            "aria-label": h.Z.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION,
            className: R.toggleIcon,
            onClick: j,
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
      } = A, s = e ? (0, n.jsx)(c.EyeIcon, {
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
        className: r()(x.flexCenter, x.noWrap, x.justifyBetween, R.toggleContainer),
        children: (0, n.jsx)(c.Tooltip, {
          text: h.Z.Messages.SETTINGS_GAMES_TOGGLE_DETECTION,
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: a
            } = e;
            return (0, n.jsx)(c.Clickable, {
              "aria-label": h.Z.Messages.SETTINGS_GAMES_TOGGLE_DETECTION,
              className: R.toggleIcon,
              onClick: b,
              onMouseEnter: t,
              onMouseLeave: a,
              children: s
            })
          }
        })
      })
    }(), function() {
      if (!L) return null;
      let {
        overlay: e,
        overlayWarn: s
      } = A, t = e ? (0, n.jsx)(c.ScreenIcon, {
        size: "md",
        color: "currentColor",
        className: R.toggleIconOn,
        colorClass: R.fill
      }) : (0, n.jsx)(c.ScreenSlashIcon, {
        size: "md",
        color: "currentColor",
        className: R.toggleIconOff,
        colorClass: R.fill
      }), a = s ? (0, n.jsx)(c.Tooltip, {
        text: h.Z.Messages.SETTINGS_GAMES_OVERLAY_WARNING,
        children: e => (0, n.jsx)("i", {
          className: R.overlayWarningIcon,
          ...e
        })
      }) : null;
      return (0, n.jsxs)("div", {
        className: r()(x.flexCenter, x.noWrap, x.justifyBetween, R.toggleContainer),
        children: [a, (0, n.jsx)(c.Tooltip, {
          text: h.Z.Messages.SETTINGS_GAMES_TOGGLE_OVERLAY,
          children: s => {
            let {
              onMouseEnter: a,
              onMouseLeave: i
            } = s;
            return (0, n.jsx)(c.Clickable, {
              "aria-label": h.Z.Messages.SETTINGS_GAMES_TOGGLE_OVERLAY,
              className: R.toggleIcon,
              onClick: () => {
                var s;
                return s = !e, void d.Z.toggleOverlay(A, s)
              },
              onMouseEnter: a,
              onMouseLeave: i,
              children: t
            })
          }
        })]
      })
    }(), !i || u ? (0, n.jsx)(_.Z, {
      className: R.removeGame,
      onClick: P
    }) : null]
  })
}

function v() {
  return (0, n.jsx)("div", {
    className: r()(x.flexCenter, R.notDetected, R.activeGame),
    children: (0, n.jsxs)("div", {
      className: r()(R.gameNameLastPlayed, x.vertical),
      children: [(0, n.jsx)("div", {
        className: R.gameName,
        children: h.Z.Messages.SETTINGS_GAMES_NO_GAME_DETECTED
      }), (0, n.jsx)("div", {
        className: R.lastPlayed,
        children: h.Z.Messages.SETTINGS_GAMES_NOT_PLAYING
      })]
    })
  })
}

function b(e) {
  let {
    children: s
  } = e;
  return (0, n.jsxs)(f, {
    className: D.marginTop40,
    children: [(0, n.jsx)(c.EmptyStateImage, {
      darkSrc: t(879601),
      lightSrc: t(889e3),
      width: 430,
      height: 250
    }), s]
  })
}
let j = (0, A.oH)(function() {
  for (var e = arguments.length, s = Array(e), t = 0; t < e; t++) s[t] = arguments[t];
  return new Set(s.map(e => e.exePath))
});
s.Z = function(e) {
  let {
    className: s,
    showHeader: t = !0
  } = e, i = (0, o.Wu)([E.ZP], () => E.ZP.getGamesSeen(!0)), {
    runningGame: l,
    overrideExePaths: d
  } = (0, o.cj)([E.ZP], () => ({
    runningGame: E.ZP.getVisibleGame(),
    overrideExePaths: j(...E.ZP.getOverrides())
  }));
  return a.useEffect(() => ((0, u.K)(), u.P), []), (0, n.jsxs)(c.FormSection, {
    tag: "h1",
    title: t ? h.Z.Messages.REGISTERED_GAMES : null,
    className: s,
    children: [null != l ? (0, n.jsx)(Z, {
      rawGame: l,
      isOverride: d.has(l.exePath),
      nowPlaying: !0
    }, (0, E.rH)(l)) : (0, n.jsx)(v, {}), (0, n.jsxs)("div", {
      className: r()(R.nowPlayingAdd, D.marginReset, D.marginTop8, D.marginBottom20),
      children: [(0, n.jsx)("span", {
        children: h.Z.Messages.SETTINGS_GAMES_NOT_SEEING_GAME
      }), (0, n.jsx)(c.Popout, {
        renderPopout: e => {
          let {
            closePopout: s
          } = e;
          return (0, n.jsx)(P, {
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
          children: h.Z.Messages.SETTINGS_GAMES_ADD_GAME
        })
      })]
    }), 0 === i.length ? (0, n.jsx)(b, {
      children: (0, n.jsx)(c.EmptyStateText, {
        children: h.Z.Messages.SETTINGS_GAMES_NO_GAMES_HEADER
      })
    }) : (0, n.jsxs)(c.FormSection, {
      className: D.marginTop40,
      children: [(0, n.jsx)(c.FormTitle, {
        className: D.marginBottom4,
        children: h.Z.Messages.SETTINGS_GAMES_ADDED_GAMES_LABEL
      }), (0, n.jsx)(c.FormText, {
        type: c.FormTextTypes.DESCRIPTION,
        children: h.Z.Messages.SETTINGS_GAMES_IGDB_ATTRIBUTION.format({
          igdbLink: "https://www.igdb.com/about"
        })
      }), i.map(e => (0, n.jsx)(Z, {
        rawGame: e,
        isOverride: d.has(e.exePath)
      }, (0, E.rH)(e)))]
    })]
  })
}