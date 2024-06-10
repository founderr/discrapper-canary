"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("442837"),
  o = s("692547"),
  d = s("481060"),
  u = s("224706"),
  c = s("225433"),
  S = s("594190"),
  E = s("320724"),
  T = s("77498"),
  _ = s("283595"),
  I = s("186095"),
  N = s("797717"),
  g = s("546591"),
  f = s("794358"),
  m = s("880008"),
  C = s("795295"),
  A = s("169278"),
  O = s("931003"),
  h = s("507957"),
  p = s("626135"),
  R = s("251625"),
  M = s("358085"),
  x = s("210887"),
  D = s("981631"),
  L = s("689938"),
  P = s("159618"),
  b = s("661781"),
  v = s("961047"),
  U = s("164149"),
  j = s("611273");
let G = r.default.connectStores([x.default], () => ({
    theme: x.default.theme
  }))(I.default),
  F = (0, M.isWindows)();

function B(e) {
  let {
    onClose: t
  } = e, s = (0, r.useStateFromStores)([S.default], () => S.default.getCandidateGames()), [l, o] = n.useState(null), c = s.map(e => ({
    key: e.pid,
    value: e,
    label: null != e.name ? e.name : ""
  }));
  return (0, a.jsxs)(d.Dialog, {
    className: i()(P.addGamePopout, b.elevationBorderHigh),
    "aria-label": L.default.Messages.SETTINGS_GAMES_ADD_NEW_GAME,
    children: [(0, a.jsx)(d.SearchableSelect, {
      placeholder: L.default.Messages.SELECT,
      value: l,
      options: c,
      onChange: function(e) {
        o(e)
      }
    }), (0, a.jsx)(d.FormDivider, {
      className: i()(j.marginTop8, j.marginBottom8)
    }), (0, a.jsxs)("div", {
      className: i()(P.actions, v.horizontal),
      children: [(0, a.jsx)(d.Button, {
        className: P.cancelButton,
        look: d.ButtonLooks.LINK,
        color: d.ButtonColors.PRIMARY,
        onClick: t,
        children: L.default.Messages.CANCEL
      }), (0, a.jsx)(d.Button, {
        disabled: null == l,
        onClick: function() {
          null != l && (u.default.addGame(l.pid, l.name), t())
        },
        children: L.default.Messages.SETTINGS_GAMES_ADD_NEW_GAME
      })]
    })]
  })
}

function y(e) {
  var t;
  let {
    rawGame: s,
    nowPlaying: l = !1,
    isOverride: E
  } = e, I = (0, r.useStateFromStoresObject)([T.default, S.default, _.default], () => (0, S.transformForGameSettings)(s)), [R, M] = n.useState(!1), [x, b] = n.useState(null !== (t = I.name) && void 0 !== t ? t : "???"), j = i()(v.flexCenter, {
    [P.game]: !l,
    [P.activeGame]: l,
    [U.card]: !l,
    [P.nowPlaying]: null != I && l
  });

  function G() {
    u.default.deleteEntry(I)
  }

  function B() {
    I.name !== x && u.default.editName(I, x)
  }

  function y(e) {
    13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault())
  }

  function V() {
    u.default.toggleDetection(I)
  }

  function H() {
    if (R) return;
    let e = null != I.id ? T.default.getDetectableGame(I.id) : null;
    p.default.track(D.AnalyticEvents.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
      application_id: null == e ? void 0 : e.id,
      game_name: I.name
    }), (0, d.showToast)((0, d.createToast)(L.default.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION_CONFIRMATION.format({
      gameName: I.name
    }), d.ToastType.SUCCESS)), M(!0)
  }
  return (0, a.jsxs)("div", {
    className: j,
    children: [(0, a.jsxs)("div", {
      className: i()(P.gameNameLastPlayed, v.vertical),
      children: [I.verified && !E ? (0, a.jsxs)("div", {
        className: P.detectedApplication,
        children: [(0, a.jsx)("div", {
          className: P.gameName,
          children: I.name
        }), (0, a.jsx)(d.Tooltip, {
          text: L.default.Messages.SETTINGS_GAMES_VERIFIED_ICON,
          children: e => (0, a.jsx)(N.default, {
            className: P.gameVerifiedIcon,
            size: 18,
            color: o.default.unsafe_rawColors.BRAND_500.css,
            ...e,
            children: (0, a.jsx)(h.default, {
              width: 18,
              height: 18,
              color: o.default.unsafe_rawColors.WHITE_500.css
            })
          })
        })]
      }) : (0, a.jsx)("input", {
        className: i()(P.gameName, P.gameNameInput),
        type: "text",
        maxLength: 128,
        value: x,
        onBlur: B,
        onKeyDown: y,
        onChange: e => b(e.target.value)
      }), function() {
        let e;
        let {
          played: t,
          exePath: s
        } = I;
        return l ? e = L.default.Messages.SETTINGS_GAMES_NOW_PLAYING_STATE : null != t && "" !== t && (e = L.default.Messages.SETTINGS_GAMES_LAST_PLAYED.format({
          when: t
        })), (0, a.jsx)("div", {
          className: P.lastPlayed,
          children: (0, a.jsx)(g.default, {
            hoverText: null != s && "" !== s ? s.toUpperCase() : "",
            children: e
          })
        })
      }()]
    }), E ? null : R ? null : (0, a.jsx)("div", {
      className: i()(v.flexCenter, v.noWrap, v.justifyBetween, P.toggleContainer),
      children: (0, a.jsx)(d.Tooltip, {
        text: L.default.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION,
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: s
          } = e;
          return (0, a.jsx)(d.Clickable, {
            "aria-label": L.default.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION,
            className: P.toggleIcon,
            onClick: H,
            onMouseEnter: t,
            onMouseLeave: s,
            children: (0, a.jsx)(C.default, {
              className: P.toggleIconOn,
              foreground: P.fill,
              width: 24,
              height: 24
            })
          })
        }
      })
    }), function() {
      let {
        detectable: e
      } = I, t = e ? (0, a.jsx)(f.default, {
        className: P.toggleIconOn,
        foreground: P.fill,
        width: 24,
        height: 24
      }) : (0, a.jsx)(m.default, {
        className: P.toggleIconOff,
        background: P.fill,
        foreground: P.fill,
        width: 24,
        height: 24
      });
      return (0, a.jsx)("div", {
        className: i()(v.flexCenter, v.noWrap, v.justifyBetween, P.toggleContainer),
        children: (0, a.jsx)(d.Tooltip, {
          text: L.default.Messages.SETTINGS_GAMES_TOGGLE_DETECTION,
          children: e => {
            let {
              onMouseEnter: s,
              onMouseLeave: n
            } = e;
            return (0, a.jsx)(d.Clickable, {
              "aria-label": L.default.Messages.SETTINGS_GAMES_TOGGLE_DETECTION,
              className: P.toggleIcon,
              onClick: V,
              onMouseEnter: s,
              onMouseLeave: n,
              children: t
            })
          }
        })
      })
    }(), function() {
      if (!F) return null;
      let {
        overlay: e,
        overlayWarn: t
      } = I, s = e ? (0, a.jsx)(A.default, {
        className: P.toggleIconOn,
        foreground: P.fill
      }) : (0, a.jsx)(O.default, {
        className: P.toggleIconOff,
        foreground: P.fill
      }), n = t ? (0, a.jsx)(d.Tooltip, {
        text: L.default.Messages.SETTINGS_GAMES_OVERLAY_WARNING,
        children: e => (0, a.jsx)("i", {
          className: P.overlayWarningIcon,
          ...e
        })
      }) : null;
      return (0, a.jsxs)("div", {
        className: i()(v.flexCenter, v.noWrap, v.justifyBetween, P.toggleContainer),
        children: [n, (0, a.jsx)(d.Tooltip, {
          text: L.default.Messages.SETTINGS_GAMES_TOGGLE_OVERLAY,
          children: t => {
            let {
              onMouseEnter: n,
              onMouseLeave: l
            } = t;
            return (0, a.jsx)(d.Clickable, {
              "aria-label": L.default.Messages.SETTINGS_GAMES_TOGGLE_OVERLAY,
              className: P.toggleIcon,
              onClick: () => {
                var t;
                return t = !e, void u.default.toggleOverlay(I, t)
              },
              onMouseEnter: n,
              onMouseLeave: l,
              children: s
            })
          }
        })]
      })
    }(), !l || E ? (0, a.jsx)(c.default, {
      className: P.removeGame,
      onClick: G
    }) : null]
  })
}

function V() {
  return (0, a.jsx)("div", {
    className: i()(v.flexCenter, P.notDetected, P.activeGame),
    children: (0, a.jsxs)("div", {
      className: i()(P.gameNameLastPlayed, v.vertical),
      children: [(0, a.jsx)("div", {
        className: P.gameName,
        children: L.default.Messages.SETTINGS_GAMES_NO_GAME_DETECTED
      }), (0, a.jsx)("div", {
        className: P.lastPlayed,
        children: L.default.Messages.SETTINGS_GAMES_NOT_PLAYING
      })]
    })
  })
}

function H(e) {
  let {
    children: t
  } = e;
  return (0, a.jsxs)(G, {
    className: j.marginTop40,
    children: [(0, a.jsx)(I.EmptyStateImage, {
      darkSrc: s("879601"),
      lightSrc: s("889000"),
      width: 430,
      height: 250
    }), t]
  })
}
let Y = (0, R.cachedFunction)(function() {
  for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
  return new Set(t.map(e => e.exePath))
});
t.default = function(e) {
  let {
    className: t,
    showHeader: s = !0
  } = e, l = (0, r.useStateFromStoresArray)([S.default], () => S.default.getGamesSeen(!0)), {
    runningGame: o,
    overrideExePaths: u
  } = (0, r.useStateFromStoresObject)([S.default], () => ({
    runningGame: S.default.getVisibleGame(),
    overrideExePaths: Y(...S.default.getOverrides())
  }));
  return n.useEffect(() => ((0, E.watchCandidateGames)(), E.stopWatchingCandidateGames), []), (0, a.jsxs)(d.FormSection, {
    tag: "h1",
    title: s ? L.default.Messages.REGISTERED_GAMES : null,
    className: t,
    children: [null != o ? (0, a.jsx)(y, {
      rawGame: o,
      isOverride: u.has(o.exePath),
      nowPlaying: !0
    }, (0, S.gameKey)(o)) : (0, a.jsx)(V, {}), (0, a.jsxs)("div", {
      className: i()(P.nowPlayingAdd, j.marginReset, j.marginTop8, j.marginBottom20),
      children: [(0, a.jsx)("span", {
        children: L.default.Messages.SETTINGS_GAMES_NOT_SEEING_GAME
      }), (0, a.jsx)(d.Popout, {
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, a.jsx)(B, {
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
          children: L.default.Messages.SETTINGS_GAMES_ADD_GAME
        })
      })]
    }), 0 === l.length ? (0, a.jsx)(H, {
      children: (0, a.jsx)(I.EmptyStateText, {
        children: L.default.Messages.SETTINGS_GAMES_NO_GAMES_HEADER
      })
    }) : (0, a.jsxs)(d.FormSection, {
      className: j.marginTop40,
      children: [(0, a.jsx)(d.FormTitle, {
        className: j.marginBottom4,
        children: L.default.Messages.SETTINGS_GAMES_ADDED_GAMES_LABEL
      }), (0, a.jsx)(d.FormText, {
        type: d.FormTextTypes.DESCRIPTION,
        children: L.default.Messages.SETTINGS_GAMES_IGDB_ATTRIBUTION.format({
          igdbLink: "https://www.igdb.com/about"
        })
      }), l.map(e => (0, a.jsx)(y, {
        rawGame: e,
        isOverride: u.has(e.exePath)
      }, (0, S.gameKey)(e)))]
    })]
  })
}