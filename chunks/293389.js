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
  f = s("186095"),
  m = s("797717"),
  I = s("546591"),
  g = s("794358"),
  N = s("880008"),
  h = s("795295"),
  C = s("169278"),
  O = s("931003"),
  A = s("507957"),
  p = s("626135"),
  R = s("251625"),
  x = s("358085"),
  M = s("210887"),
  L = s("981631"),
  D = s("689938"),
  P = s("159618"),
  v = s("661781"),
  b = s("961047"),
  j = s("164149"),
  U = s("611273");
let G = r.default.connectStores([M.default], () => ({
    theme: M.default.theme
  }))(f.default),
  F = (0, x.isWindows)();

function B(e) {
  let {
    onClose: t
  } = e, s = (0, r.useStateFromStores)([S.default], () => S.default.getCandidateGames()), [l, o] = n.useState(null), c = s.map(e => ({
    key: e.pid,
    value: e,
    label: null != e.name ? e.name : ""
  }));
  return (0, a.jsxs)(d.Dialog, {
    className: i()(P.addGamePopout, v.elevationBorderHigh),
    "aria-label": D.default.Messages.SETTINGS_GAMES_ADD_NEW_GAME,
    children: [(0, a.jsx)(d.SearchableSelect, {
      placeholder: D.default.Messages.SELECT,
      value: l,
      options: c,
      onChange: function(e) {
        o(e)
      }
    }), (0, a.jsx)(d.FormDivider, {
      className: i()(U.marginTop8, U.marginBottom8)
    }), (0, a.jsxs)("div", {
      className: i()(P.actions, b.horizontal),
      children: [(0, a.jsx)(d.Button, {
        className: P.cancelButton,
        look: d.ButtonLooks.LINK,
        color: d.ButtonColors.PRIMARY,
        onClick: t,
        children: D.default.Messages.CANCEL
      }), (0, a.jsx)(d.Button, {
        disabled: null == l,
        onClick: function() {
          null != l && (u.default.addGame(l.pid, l.name), t())
        },
        children: D.default.Messages.SETTINGS_GAMES_ADD_NEW_GAME
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
  } = e, f = (0, r.useStateFromStoresObject)([T.default, S.default, _.default], () => (0, S.transformForGameSettings)(s)), [R, x] = n.useState(!1), [M, v] = n.useState(null !== (t = f.name) && void 0 !== t ? t : "???"), U = i()(b.flexCenter, {
    [P.game]: !l,
    [P.activeGame]: l,
    [j.card]: !l,
    [P.nowPlaying]: null != f && l
  });

  function G() {
    u.default.deleteEntry(f)
  }

  function B() {
    f.name !== M && u.default.editName(f, M)
  }

  function y(e) {
    13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault())
  }

  function k() {
    u.default.toggleDetection(f)
  }

  function V() {
    if (R) return;
    let e = null != f.id ? T.default.getDetectableGame(f.id) : null;
    p.default.track(L.AnalyticEvents.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
      application_id: null == e ? void 0 : e.id,
      game_name: f.name
    }), (0, d.showToast)((0, d.createToast)(D.default.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION_CONFIRMATION.format({
      gameName: f.name
    }), d.ToastType.SUCCESS)), x(!0)
  }
  return (0, a.jsxs)("div", {
    className: U,
    children: [(0, a.jsxs)("div", {
      className: i()(P.gameNameLastPlayed, b.vertical),
      children: [f.verified && !E ? (0, a.jsxs)("div", {
        className: P.detectedApplication,
        children: [(0, a.jsx)("div", {
          className: P.gameName,
          children: f.name
        }), (0, a.jsx)(d.Tooltip, {
          text: D.default.Messages.SETTINGS_GAMES_VERIFIED_ICON,
          children: e => (0, a.jsx)(m.default, {
            className: P.gameVerifiedIcon,
            size: 18,
            color: o.default.unsafe_rawColors.BRAND_500.css,
            ...e,
            children: (0, a.jsx)(A.default, {
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
        value: M,
        onBlur: B,
        onKeyDown: y,
        onChange: e => v(e.target.value)
      }), function() {
        let e;
        let {
          played: t,
          exePath: s
        } = f;
        return l ? e = D.default.Messages.SETTINGS_GAMES_NOW_PLAYING_STATE : null != t && "" !== t && (e = D.default.Messages.SETTINGS_GAMES_LAST_PLAYED.format({
          when: t
        })), (0, a.jsx)("div", {
          className: P.lastPlayed,
          children: (0, a.jsx)(I.default, {
            hoverText: null != s && "" !== s ? s.toUpperCase() : "",
            children: e
          })
        })
      }()]
    }), E ? null : R ? null : (0, a.jsx)("div", {
      className: i()(b.flexCenter, b.noWrap, b.justifyBetween, P.toggleContainer),
      children: (0, a.jsx)(d.Tooltip, {
        text: D.default.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION,
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: s
          } = e;
          return (0, a.jsx)(d.Clickable, {
            "aria-label": D.default.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION,
            className: P.toggleIcon,
            onClick: V,
            onMouseEnter: t,
            onMouseLeave: s,
            children: (0, a.jsx)(h.default, {
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
      } = f, t = e ? (0, a.jsx)(g.default, {
        className: P.toggleIconOn,
        foreground: P.fill,
        width: 24,
        height: 24
      }) : (0, a.jsx)(N.default, {
        className: P.toggleIconOff,
        background: P.fill,
        foreground: P.fill,
        width: 24,
        height: 24
      });
      return (0, a.jsx)("div", {
        className: i()(b.flexCenter, b.noWrap, b.justifyBetween, P.toggleContainer),
        children: (0, a.jsx)(d.Tooltip, {
          text: D.default.Messages.SETTINGS_GAMES_TOGGLE_DETECTION,
          children: e => {
            let {
              onMouseEnter: s,
              onMouseLeave: n
            } = e;
            return (0, a.jsx)(d.Clickable, {
              "aria-label": D.default.Messages.SETTINGS_GAMES_TOGGLE_DETECTION,
              className: P.toggleIcon,
              onClick: k,
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
      } = f, s = e ? (0, a.jsx)(C.default, {
        className: P.toggleIconOn,
        foreground: P.fill
      }) : (0, a.jsx)(O.default, {
        className: P.toggleIconOff,
        foreground: P.fill
      }), n = t ? (0, a.jsx)(d.Tooltip, {
        text: D.default.Messages.SETTINGS_GAMES_OVERLAY_WARNING,
        children: e => (0, a.jsx)("i", {
          className: P.overlayWarningIcon,
          ...e
        })
      }) : null;
      return (0, a.jsxs)("div", {
        className: i()(b.flexCenter, b.noWrap, b.justifyBetween, P.toggleContainer),
        children: [n, (0, a.jsx)(d.Tooltip, {
          text: D.default.Messages.SETTINGS_GAMES_TOGGLE_OVERLAY,
          children: t => {
            let {
              onMouseEnter: n,
              onMouseLeave: l
            } = t;
            return (0, a.jsx)(d.Clickable, {
              "aria-label": D.default.Messages.SETTINGS_GAMES_TOGGLE_OVERLAY,
              className: P.toggleIcon,
              onClick: () => {
                var t;
                return t = !e, void u.default.toggleOverlay(f, t)
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

function k() {
  return (0, a.jsx)("div", {
    className: i()(b.flexCenter, P.notDetected, P.activeGame),
    children: (0, a.jsxs)("div", {
      className: i()(P.gameNameLastPlayed, b.vertical),
      children: [(0, a.jsx)("div", {
        className: P.gameName,
        children: D.default.Messages.SETTINGS_GAMES_NO_GAME_DETECTED
      }), (0, a.jsx)("div", {
        className: P.lastPlayed,
        children: D.default.Messages.SETTINGS_GAMES_NOT_PLAYING
      })]
    })
  })
}

function V(e) {
  let {
    children: t
  } = e;
  return (0, a.jsxs)(G, {
    className: U.marginTop40,
    children: [(0, a.jsx)(f.EmptyStateImage, {
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
  } = e, l = (0, r.useStateFromStoresArray)([S.default], () => S.default.getGamesSeen(!0)), {
    runningGame: o,
    overrideExePaths: u
  } = (0, r.useStateFromStoresObject)([S.default], () => ({
    runningGame: S.default.getVisibleGame(),
    overrideExePaths: H(...S.default.getOverrides())
  }));
  return n.useEffect(() => ((0, E.watchCandidateGames)(), E.stopWatchingCandidateGames), []), (0, a.jsxs)(d.FormSection, {
    tag: "h1",
    title: s ? D.default.Messages.REGISTERED_GAMES : null,
    className: t,
    children: [null != o ? (0, a.jsx)(y, {
      rawGame: o,
      isOverride: u.has(o.exePath),
      nowPlaying: !0
    }, (0, S.gameKey)(o)) : (0, a.jsx)(k, {}), (0, a.jsxs)("div", {
      className: i()(P.nowPlayingAdd, U.marginReset, U.marginTop8, U.marginBottom20),
      children: [(0, a.jsx)("span", {
        children: D.default.Messages.SETTINGS_GAMES_NOT_SEEING_GAME
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
          children: D.default.Messages.SETTINGS_GAMES_ADD_GAME
        })
      })]
    }), 0 === l.length ? (0, a.jsx)(V, {
      children: (0, a.jsx)(f.EmptyStateText, {
        children: D.default.Messages.SETTINGS_GAMES_NO_GAMES_HEADER
      })
    }) : (0, a.jsxs)(d.FormSection, {
      className: U.marginTop40,
      children: [(0, a.jsx)(d.FormTitle, {
        className: U.marginBottom4,
        children: D.default.Messages.SETTINGS_GAMES_ADDED_GAMES_LABEL
      }), (0, a.jsx)(d.FormText, {
        type: d.FormTextTypes.DESCRIPTION,
        children: D.default.Messages.SETTINGS_GAMES_IGDB_ATTRIBUTION.format({
          igdbLink: "https://www.igdb.com/about"
        })
      }), l.map(e => (0, a.jsx)(y, {
        rawGame: e,
        isOverride: u.has(e.exePath)
      }, (0, S.gameKey)(e)))]
    })]
  })
}