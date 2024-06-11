"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("442837"),
  o = s("692547"),
  d = s("481060"),
  u = s("224706"),
  c = s("225433"),
  S = s("594190"),
  E = s("320724"),
  T = s("77498"),
  _ = s("283595"),
  I = s("797717"),
  N = s("546591"),
  g = s("794358"),
  f = s("880008"),
  m = s("795295"),
  A = s("169278"),
  C = s("931003"),
  O = s("507957"),
  h = s("626135"),
  R = s("251625"),
  p = s("358085"),
  M = s("210887"),
  D = s("981631"),
  x = s("689938"),
  L = s("159618"),
  P = s("661781"),
  b = s("961047"),
  v = s("164149"),
  U = s("611273");
let j = r.default.connectStores([M.default], () => ({
    theme: M.default.theme
  }))(d.EmptyState),
  G = (0, p.isWindows)();

function F(e) {
  let {
    onClose: t
  } = e, s = (0, r.useStateFromStores)([S.default], () => S.default.getCandidateGames()), [i, o] = n.useState(null), c = s.map(e => ({
    key: e.pid,
    value: e,
    label: null != e.name ? e.name : ""
  }));
  return (0, a.jsxs)(d.Dialog, {
    className: l()(L.addGamePopout, P.elevationBorderHigh),
    "aria-label": x.default.Messages.SETTINGS_GAMES_ADD_NEW_GAME,
    children: [(0, a.jsx)(d.SearchableSelect, {
      placeholder: x.default.Messages.SELECT,
      value: i,
      options: c,
      onChange: function(e) {
        o(e)
      }
    }), (0, a.jsx)(d.FormDivider, {
      className: l()(U.marginTop8, U.marginBottom8)
    }), (0, a.jsxs)("div", {
      className: l()(L.actions, b.horizontal),
      children: [(0, a.jsx)(d.Button, {
        className: L.cancelButton,
        look: d.ButtonLooks.LINK,
        color: d.ButtonColors.PRIMARY,
        onClick: t,
        children: x.default.Messages.CANCEL
      }), (0, a.jsx)(d.Button, {
        disabled: null == i,
        onClick: function() {
          null != i && (u.default.addGame(i.pid, i.name), t())
        },
        children: x.default.Messages.SETTINGS_GAMES_ADD_NEW_GAME
      })]
    })]
  })
}

function B(e) {
  var t;
  let {
    rawGame: s,
    nowPlaying: i = !1,
    isOverride: E
  } = e, R = (0, r.useStateFromStoresObject)([T.default, S.default, _.default], () => (0, S.transformForGameSettings)(s)), [p, M] = n.useState(!1), [P, U] = n.useState(null !== (t = R.name) && void 0 !== t ? t : "???"), j = l()(b.flexCenter, {
    [L.game]: !i,
    [L.activeGame]: i,
    [v.card]: !i,
    [L.nowPlaying]: null != R && i
  });

  function F() {
    u.default.deleteEntry(R)
  }

  function B() {
    R.name !== P && u.default.editName(R, P)
  }

  function y(e) {
    13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault())
  }

  function V() {
    u.default.toggleDetection(R)
  }

  function H() {
    if (p) return;
    let e = null != R.id ? T.default.getDetectableGame(R.id) : null;
    h.default.track(D.AnalyticEvents.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
      application_id: null == e ? void 0 : e.id,
      game_name: R.name
    }), (0, d.showToast)((0, d.createToast)(x.default.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION_CONFIRMATION.format({
      gameName: R.name
    }), d.ToastType.SUCCESS)), M(!0)
  }
  return (0, a.jsxs)("div", {
    className: j,
    children: [(0, a.jsxs)("div", {
      className: l()(L.gameNameLastPlayed, b.vertical),
      children: [R.verified && !E ? (0, a.jsxs)("div", {
        className: L.detectedApplication,
        children: [(0, a.jsx)("div", {
          className: L.gameName,
          children: R.name
        }), (0, a.jsx)(d.Tooltip, {
          text: x.default.Messages.SETTINGS_GAMES_VERIFIED_ICON,
          children: e => (0, a.jsx)(I.default, {
            className: L.gameVerifiedIcon,
            size: 18,
            color: o.default.unsafe_rawColors.BRAND_500.css,
            ...e,
            children: (0, a.jsx)(O.default, {
              width: 18,
              height: 18,
              color: o.default.unsafe_rawColors.WHITE_500.css
            })
          })
        })]
      }) : (0, a.jsx)("input", {
        className: l()(L.gameName, L.gameNameInput),
        type: "text",
        maxLength: 128,
        value: P,
        onBlur: B,
        onKeyDown: y,
        onChange: e => U(e.target.value)
      }), function() {
        let e;
        let {
          played: t,
          exePath: s
        } = R;
        return i ? e = x.default.Messages.SETTINGS_GAMES_NOW_PLAYING_STATE : null != t && "" !== t && (e = x.default.Messages.SETTINGS_GAMES_LAST_PLAYED.format({
          when: t
        })), (0, a.jsx)("div", {
          className: L.lastPlayed,
          children: (0, a.jsx)(N.default, {
            hoverText: null != s && "" !== s ? s.toUpperCase() : "",
            children: e
          })
        })
      }()]
    }), E ? null : p ? null : (0, a.jsx)("div", {
      className: l()(b.flexCenter, b.noWrap, b.justifyBetween, L.toggleContainer),
      children: (0, a.jsx)(d.Tooltip, {
        text: x.default.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION,
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: s
          } = e;
          return (0, a.jsx)(d.Clickable, {
            "aria-label": x.default.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION,
            className: L.toggleIcon,
            onClick: H,
            onMouseEnter: t,
            onMouseLeave: s,
            children: (0, a.jsx)(m.default, {
              className: L.toggleIconOn,
              foreground: L.fill,
              width: 24,
              height: 24
            })
          })
        }
      })
    }), function() {
      let {
        detectable: e
      } = R, t = e ? (0, a.jsx)(g.default, {
        className: L.toggleIconOn,
        foreground: L.fill,
        width: 24,
        height: 24
      }) : (0, a.jsx)(f.default, {
        className: L.toggleIconOff,
        background: L.fill,
        foreground: L.fill,
        width: 24,
        height: 24
      });
      return (0, a.jsx)("div", {
        className: l()(b.flexCenter, b.noWrap, b.justifyBetween, L.toggleContainer),
        children: (0, a.jsx)(d.Tooltip, {
          text: x.default.Messages.SETTINGS_GAMES_TOGGLE_DETECTION,
          children: e => {
            let {
              onMouseEnter: s,
              onMouseLeave: n
            } = e;
            return (0, a.jsx)(d.Clickable, {
              "aria-label": x.default.Messages.SETTINGS_GAMES_TOGGLE_DETECTION,
              className: L.toggleIcon,
              onClick: V,
              onMouseEnter: s,
              onMouseLeave: n,
              children: t
            })
          }
        })
      })
    }(), function() {
      if (!G) return null;
      let {
        overlay: e,
        overlayWarn: t
      } = R, s = e ? (0, a.jsx)(A.default, {
        className: L.toggleIconOn,
        foreground: L.fill
      }) : (0, a.jsx)(C.default, {
        className: L.toggleIconOff,
        foreground: L.fill
      }), n = t ? (0, a.jsx)(d.Tooltip, {
        text: x.default.Messages.SETTINGS_GAMES_OVERLAY_WARNING,
        children: e => (0, a.jsx)("i", {
          className: L.overlayWarningIcon,
          ...e
        })
      }) : null;
      return (0, a.jsxs)("div", {
        className: l()(b.flexCenter, b.noWrap, b.justifyBetween, L.toggleContainer),
        children: [n, (0, a.jsx)(d.Tooltip, {
          text: x.default.Messages.SETTINGS_GAMES_TOGGLE_OVERLAY,
          children: t => {
            let {
              onMouseEnter: n,
              onMouseLeave: i
            } = t;
            return (0, a.jsx)(d.Clickable, {
              "aria-label": x.default.Messages.SETTINGS_GAMES_TOGGLE_OVERLAY,
              className: L.toggleIcon,
              onClick: () => {
                var t;
                return t = !e, void u.default.toggleOverlay(R, t)
              },
              onMouseEnter: n,
              onMouseLeave: i,
              children: s
            })
          }
        })]
      })
    }(), !i || E ? (0, a.jsx)(c.default, {
      className: L.removeGame,
      onClick: F
    }) : null]
  })
}

function y() {
  return (0, a.jsx)("div", {
    className: l()(b.flexCenter, L.notDetected, L.activeGame),
    children: (0, a.jsxs)("div", {
      className: l()(L.gameNameLastPlayed, b.vertical),
      children: [(0, a.jsx)("div", {
        className: L.gameName,
        children: x.default.Messages.SETTINGS_GAMES_NO_GAME_DETECTED
      }), (0, a.jsx)("div", {
        className: L.lastPlayed,
        children: x.default.Messages.SETTINGS_GAMES_NOT_PLAYING
      })]
    })
  })
}

function V(e) {
  let {
    children: t
  } = e;
  return (0, a.jsxs)(j, {
    className: U.marginTop40,
    children: [(0, a.jsx)(d.EmptyStateImage, {
      darkSrc: s("879601"),
      lightSrc: s("889000"),
      width: 430,
      height: 250
    }), t]
  })
}
let H = (0, R.cachedFunction)(function() {
  for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
  return new Set(t.map(e => e.exePath))
});
t.default = function(e) {
  let {
    className: t,
    showHeader: s = !0
  } = e, i = (0, r.useStateFromStoresArray)([S.default], () => S.default.getGamesSeen(!0)), {
    runningGame: o,
    overrideExePaths: u
  } = (0, r.useStateFromStoresObject)([S.default], () => ({
    runningGame: S.default.getVisibleGame(),
    overrideExePaths: H(...S.default.getOverrides())
  }));
  return n.useEffect(() => ((0, E.watchCandidateGames)(), E.stopWatchingCandidateGames), []), (0, a.jsxs)(d.FormSection, {
    tag: "h1",
    title: s ? x.default.Messages.REGISTERED_GAMES : null,
    className: t,
    children: [null != o ? (0, a.jsx)(B, {
      rawGame: o,
      isOverride: u.has(o.exePath),
      nowPlaying: !0
    }, (0, S.gameKey)(o)) : (0, a.jsx)(y, {}), (0, a.jsxs)("div", {
      className: l()(L.nowPlayingAdd, U.marginReset, U.marginTop8, U.marginBottom20),
      children: [(0, a.jsx)("span", {
        children: x.default.Messages.SETTINGS_GAMES_NOT_SEEING_GAME
      }), (0, a.jsx)(d.Popout, {
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, a.jsx)(F, {
            onClose: t
          })
        },
        align: "center",
        position: "bottom",
        children: e => (0, a.jsx)(d.Button, {
          ...e,
          look: d.ButtonLooks.LINK,
          size: d.ButtonSizes.MIN,
          color: d.ButtonColors.LINK,
          children: x.default.Messages.SETTINGS_GAMES_ADD_GAME
        })
      })]
    }), 0 === i.length ? (0, a.jsx)(V, {
      children: (0, a.jsx)(d.EmptyStateText, {
        children: x.default.Messages.SETTINGS_GAMES_NO_GAMES_HEADER
      })
    }) : (0, a.jsxs)(d.FormSection, {
      className: U.marginTop40,
      children: [(0, a.jsx)(d.FormTitle, {
        className: U.marginBottom4,
        children: x.default.Messages.SETTINGS_GAMES_ADDED_GAMES_LABEL
      }), (0, a.jsx)(d.FormText, {
        type: d.FormTextTypes.DESCRIPTION,
        children: x.default.Messages.SETTINGS_GAMES_IGDB_ATTRIBUTION.format({
          igdbLink: "https://www.igdb.com/about"
        })
      }), i.map(e => (0, a.jsx)(B, {
        rawGame: e,
        isOverride: u.has(e.exePath)
      }, (0, S.gameKey)(e)))]
    })]
  })
}