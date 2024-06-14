"use strict";
s.r(t), s.d(t, {
  default: function() {
    return X
  }
}), s("47120");
var a, n, i, l, r = s("735250"),
  o = s("470079"),
  d = s("392711"),
  u = s("442837"),
  c = s("692547"),
  S = s("481060"),
  E = s("37234"),
  T = s("607070"),
  _ = s("206895"),
  I = s("692437"),
  N = s("783539"),
  g = s("585483"),
  f = s("557177"),
  m = s("57562"),
  A = s("955204"),
  C = s("64078"),
  O = s("351780"),
  h = s("954794"),
  R = s("112843"),
  p = s("524484"),
  M = s("981631"),
  D = s("689938"),
  x = s("855658");
let L = {
    enabled: !0,
    combosEnabled: !0,
    screenshakeEnabled: !1,
    confettiEnabled: !1
  },
  P = (0, d.range)(0, 11),
  b = (0, d.range)(0, 2.25, .25),
  v = (0, d.range)(1, 11),
  U = (0, d.range)(1, 26);
(i = a || (a = {}))[i.CONFETTI = 0] = "CONFETTI", i[i.SHAKE = 1] = "SHAKE", (l = n || (n = {}))[l.USER_SETTINGS = 0] = "USER_SETTINGS", l[l.ACHIEVEMENT_LIST = 1] = "ACHIEVEMENT_LIST";
let j = () => [{
    location: p.ConfettiLocation.CHAT_INPUT,
    title: D.default.Messages.POGGERMODE_CONFETTI_LOCATION_CHAT_INPUT_ENABLED,
    description: D.default.Messages.POGGERMODE_CONFETTI_LOCATION_CHAT_INPUT_ENABLED_DESCRIPTION
  }, {
    location: p.ConfettiLocation.REACTION,
    title: D.default.Messages.POGGERMODE_CONFETTI_LOCATION_REACTION_ENABLED,
    description: D.default.Messages.POGGERMODE_CONFETTI_LOCATION_REACTION_ENABLED_DESCRIPTION
  }, {
    location: p.ConfettiLocation.MEMBER_USER,
    title: D.default.Messages.POGGERMODE_CONFETTI_LOCATION_MEMBER_USER_ENABLED,
    description: D.default.Messages.POGGERMODE_CONFETTI_LOCATION_MEMBER_USER_ENABLED_DESCRIPTION
  }, {
    location: p.ConfettiLocation.CALL_TILE,
    title: D.default.Messages.POGGERMODE_CONFETTI_LOCATION_CALL_TILE_ENABLED,
    description: D.default.Messages.POGGERMODE_CONFETTI_LOCATION_CALL_TILE_ENABLED_DESCRIPTION
  }],
  G = () => [{
    location: p.ShakeLocation.CHAT_INPUT,
    title: D.default.Messages.POGGERMODE_SCREENSHAKE_LOCATION_CHAT_INPUT_ENABLED,
    description: D.default.Messages.POGGERMODE_SCREENSHAKE_LOCATION_CHAT_INPUT_ENABLED_DESCRIPTION
  }, {
    location: p.ShakeLocation.VOICE_USER,
    title: D.default.Messages.POGGERMODE_SCREENSHAKE_LOCATION_VOICE_USER_ENABLED,
    description: D.default.Messages.POGGERMODE_SCREENSHAKE_LOCATION_VOICE_USER_ENABLED_DESCRIPTION
  }, {
    location: p.ShakeLocation.MENTION,
    title: D.default.Messages.POGGERMODE_SCREENSHAKE_LOCATION_MENTION_ENABLED,
    description: D.default.Messages.POGGERMODE_SCREENSHAKE_LOCATION_MENTION_ENABLED_DESCRIPTION
  }];

function F(e) {
  let {
    disabled: t,
    locations: s,
    settingsLocations: a,
    onChange: n
  } = e, i = s.map(e => (0, r.jsx)(S.FormSwitch, {
    disabled: t,
    value: a[e.location],
    note: e.description,
    onChange: t => n({
      ...a,
      [e.location]: t
    }),
    children: e.title
  }, e.location));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(S.FormTitle, {
      children: D.default.Messages.POGGERMODE_LOCATIONS
    }), i]
  })
}

function B(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(S.Text, {
    className: x.sliderDescription,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: t
  })
}

function y(e) {
  let {
    settings: {
      enabled: t,
      warningSeen: s
    },
    updateSettings: a
  } = e, n = (0, u.useStateFromStores)([T.default], () => T.default.useReducedMotion);
  return (0, r.jsx)(S.FormSwitch, {
    value: t,
    note: D.default.Messages.POGGERMODE_ENABLE_DESCRIPTION,
    onChange: e => {
      !e && (0, m.unlockAchievement)(A.PoggermodeAchievementId.DISABLE_POGGERMODE), e && (!s || n) ? (0, S.openModal)(e => (0, r.jsx)(S.ConfirmModal, {
        header: n ? D.default.Messages.POGGERMODE_WARNING_TITLE_REDUCED_MOTION : D.default.Messages.POGGERMODE_WARNING_TITLE,
        confirmText: D.default.Messages.ENABLE,
        cancelText: D.default.Messages.CANCEL,
        onConfirm: () => a(n ? L : {
          enabled: !0,
          warningSeen: !0
        }),
        ...e,
        children: (0, r.jsx)(S.Text, {
          variant: "text-md/normal",
          children: n ? D.default.Messages.POGGERMODE_WARNING_BODY_REDUCED_MOTION : D.default.Messages.POGGERMODE_WARNING_BODY
        })
      })) : a({
        enabled: e
      })
    },
    children: D.default.Messages.POGGERMODE_ENABLE
  })
}

function V(e) {
  let {
    settings: {
      enabled: t,
      confettiEnabled: s,
      confettiCount: a,
      confettiSize: n,
      confettiEnabledLocations: i
    },
    updateSettings: l
  } = e, o = !t || !s;
  return (0, r.jsxs)(S.FormSection, {
    tag: S.FormTitleTags.H1,
    title: D.default.Messages.POGGERMODE_CONFETTI_CUSTOMIZATION,
    children: [(0, r.jsx)(S.FormSwitch, {
      disabled: !t,
      value: s,
      note: D.default.Messages.POGGERMODE_CONFETTI_ENABLED_DESCRIPTION,
      onChange: e => l({
        confettiEnabled: e
      }, 0),
      children: D.default.Messages.POGGERMODE_CONFETTI_ENABLED
    }), (0, r.jsxs)(S.FormItem, {
      disabled: o,
      title: D.default.Messages.POGGERMODE_CONFETTI_COUNT,
      className: x.formItem,
      children: [(0, r.jsx)(B, {
        children: D.default.Messages.POGGERMODE_CONFETTI_COUNT_DESCRIPTION
      }), (0, r.jsx)(S.Slider, {
        disabled: o,
        markers: v,
        stickToMarkers: !0,
        minValue: v[0],
        maxValue: v[v.length - 1],
        initialValue: a,
        onValueChange: e => l({
          confettiCount: e
        }, 0),
        onValueRender: e => "".concat(e)
      })]
    }), (0, r.jsxs)(S.FormItem, {
      disabled: o,
      title: D.default.Messages.POGGERMODE_CONFETTI_SIZE,
      className: x.formItem,
      children: [(0, r.jsx)(B, {
        children: D.default.Messages.POGGERMODE_CONFETTI_SIZE_DESCRIPTION
      }), (0, r.jsx)(S.Slider, {
        disabled: o,
        markers: U,
        stickToMarkers: !0,
        minValue: U[0],
        maxValue: U[U.length - 1],
        initialValue: n,
        onValueChange: e => l({
          confettiSize: e
        }, 0),
        onValueRender: e => "".concat(e)
      })]
    }), (0, r.jsx)(F, {
      disabled: o,
      locations: j(),
      settingsLocations: i,
      onChange: e => l({
        confettiEnabledLocations: e
      }, 0)
    })]
  })
}

function Y(e) {
  let {
    settings: {
      enabled: t,
      combosEnabled: s,
      comboSoundsEnabled: a,
      combosRequiredCount: n
    },
    updateSettings: i
  } = e, l = !t || !s;
  return (0, r.jsxs)(S.FormSection, {
    tag: S.FormTitleTags.H1,
    title: D.default.Messages.POGGERMODE_COMBOS_CUSTOMIZATION,
    children: [(0, r.jsx)(S.FormSwitch, {
      disabled: !t,
      value: s,
      note: D.default.Messages.POGGERMODE_COMBOS_ENABLED_DESCRIPTION,
      onChange: e => i({
        combosEnabled: e
      }),
      children: D.default.Messages.POGGERMODE_COMBOS_ENABLED
    }), (0, r.jsx)(S.FormSwitch, {
      disabled: !t,
      value: a,
      note: D.default.Messages.POGGERMODE_COMBO_SOUNDS_ENABLED_DESCRIPTION,
      onChange: e => i({
        comboSoundsEnabled: e
      }),
      children: D.default.Messages.POGGERMODE_COMBO_SOUNDS_ENABLED
    }), (0, r.jsxs)(S.FormItem, {
      disabled: l,
      title: D.default.Messages.POGGERMODE_COMBOS_REQUIRED,
      className: x.formItem,
      children: [(0, r.jsx)(B, {
        children: D.default.Messages.POGGERMODE_COMBOS_REQUIRED_DESCRIPTION
      }), (0, r.jsx)(S.Slider, {
        disabled: l,
        markers: P,
        stickToMarkers: !0,
        minValue: P[0],
        maxValue: P[P.length - 1],
        initialValue: n,
        onValueChange: e => i({
          combosRequiredCount: e
        }),
        onValueRender: e => "".concat(e)
      })]
    }), (0, r.jsx)(S.FormDivider, {
      className: x.divider
    })]
  })
}

function H(e) {
  let {
    settings: {
      enabled: t,
      screenshakeEnabled: s,
      shakeIntensity: a,
      screenshakeEnabledLocations: n
    },
    updateSettings: i
  } = e, l = (0, u.useStateFromStores)([T.default], () => T.default.useReducedMotion), o = !t || !s || l, d = (e, t) => {
    null != e.shakeIntensity && e.shakeIntensity > a && (0, m.unlockAchievement)(A.PoggermodeAchievementId.MORE), i(e, t)
  };
  return (0, r.jsxs)(S.FormSection, {
    tag: S.FormTitleTags.H1,
    title: D.default.Messages.POGGERMODE_SCREENSHAKE_CUSTOMIZATION,
    children: [(0, r.jsx)(S.FormSwitch, {
      disabled: !t || l,
      tooltipNote: l ? D.default.Messages.POGGERMODE_SCREENSHAKE_DISABLED_REDUCED_MOTION : null,
      value: s && !l,
      note: D.default.Messages.POGGERMODE_SCREENSHAKE_ENABLED_DESCRIPTION,
      onChange: e => i({
        screenshakeEnabled: e
      }, 1),
      children: D.default.Messages.POGGERMODE_SCREENSHAKE_ENABLED
    }), (0, r.jsxs)(S.FormItem, {
      disabled: o,
      title: D.default.Messages.POGGERMODE_SCREENSHAKE,
      className: x.formItem,
      children: [(0, r.jsx)(B, {
        children: D.default.Messages.POGGERMODE_SCREENSHAKE_DESCRIPTION
      }), (0, r.jsx)(S.Slider, {
        disabled: o,
        markers: b,
        equidistant: !0,
        stickToMarkers: !0,
        minValue: b[0],
        maxValue: b[b.length - 1],
        initialValue: a,
        onValueChange: e => d({
          shakeIntensity: e
        }, 1),
        onMarkerRender: e => e === b[b.length - 1] ? D.default.Messages.POGGERMODE_SCREENSHAKE_MAX : "".concat(100 * e, "%")
      })]
    }), (0, r.jsx)(F, {
      disabled: o,
      locations: G(),
      settingsLocations: n,
      onChange: e => i({
        screenshakeEnabledLocations: e
      }, 1)
    })]
  })
}

function k(e) {
  let {
    updateSettings: t
  } = e;
  return (0, r.jsx)(S.FormSection, {
    tag: S.FormTitleTags.H1,
    title: D.default.Messages.POGGERMODE_SETTINGS_CUSTOMIZATION,
    children: (0, r.jsxs)(S.FormItem, {
      className: x.formItem,
      children: [(0, r.jsx)(S.FormText, {
        className: x.formItem,
        children: D.default.Messages.POGGERMODE_HIDE_SETTINGS_DESCRIPTION
      }), (0, r.jsx)(S.Button, {
        className: x.hideButton,
        size: S.Button.Sizes.SMALL,
        onClick: () => {
          t({
            enabled: !1,
            settingsVisible: !1
          }), (0, E.popLayer)()
        },
        children: D.default.Messages.POGGERMODE_HIDE_SETTINGS
      })]
    })
  })
}

function w(e) {
  let {
    onChangePage: t
  } = e;
  return (0, r.jsxs)(S.FormSection, {
    children: [(0, r.jsxs)(S.Clickable, {
      onClick: () => t(1),
      className: x.achievementContainer,
      children: [(0, r.jsx)("div", {
        className: x.achievementIconContainer,
        children: (0, r.jsx)(N.default, {
          color: c.default.unsafe_rawColors.ORANGE_345.css
        })
      }), (0, r.jsxs)("div", {
        className: x.achievementTextContainer,
        children: [(0, r.jsx)(S.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: D.default.Messages.POGGERMODE_ACHIEVEMENT_TITLE
        }), (0, r.jsx)(S.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: D.default.Messages.POGGERMODE_ACHIEVEMENT_DESCRIPTION
        })]
      }), (0, r.jsx)(I.default, {
        width: 16,
        className: x.rightCaretIcon
      })]
    }), (0, r.jsx)(S.FormDivider, {
      className: x.divider
    })]
  })
}
let W = () => s.e("20467").then(s.t.bind(s, "205663", 19)).then(e => {
  let {
    default: t
  } = e;
  return t
});

function K(e) {
  let {
    onChangePage: t,
    setShowEnableAnimation: s
  } = e, a = (0, u.useStateFromStoresObject)([O.default], () => O.default.getState()), [n, i] = o.useState({
    x: 0,
    y: 0
  }), l = (0, R.default)();

  function d(e, t, s, a) {
    return (null != t ? t : e) && (null != a ? a : s)
  }
  let c = e => {
      if (e.enabled && !1 === a.enabled) {
        var t;
        s(!0), (0, f.playSound)("poggermode_enabled"), g.ComponentDispatch.dispatch(M.ComponentActions.SHAKE_APP, {
          duration: 2e3,
          intensity: null !== (t = e.shakeIntensity) && void 0 !== t ? t : a.shakeIntensity
        })
      }
    },
    E = (e, t) => {
      if (c(e), (0, C.updatePoggermodeSettings)(e), null == t) return;
      let s = d(a.confettiEnabled, e.confettiEnabled, a.enabled, e.enabled);
      0 === t && s && l.fire(n.x, n.y, {
        settings: e
      });
      let i = d(a.screenshakeEnabled, e.screenshakeEnabled, a.enabled, e.enabled);
      if (1 === t && i) {
        var r;
        g.ComponentDispatch.dispatch(M.ComponentActions.SHAKE_APP, {
          duration: 1e3,
          intensity: null !== (r = e.shakeIntensity) && void 0 !== r ? r : a.shakeIntensity
        })
      }
    },
    T = e => {
      i({
        x: e.clientX,
        y: e.clientY
      })
    };
  return o.useEffect(() => (window.addEventListener("mousemove", T), () => window.removeEventListener("mousemove", T)), []), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(S.Heading, {
      variant: "heading-lg/semibold",
      className: x.title,
      children: D.default.Messages.POGGERMODE
    }), (0, r.jsx)(y, {
      settings: a,
      updateSettings: E
    }), (0, r.jsx)(w, {
      onChangePage: t
    }), (0, r.jsx)(Y, {
      settings: a,
      updateSettings: E
    }), (0, r.jsx)(H, {
      settings: a,
      updateSettings: E
    }), (0, r.jsx)(V, {
      settings: a,
      updateSettings: E
    }), (0, r.jsx)(k, {
      updateSettings: E
    })]
  })
}
let Q = (e, t, s) => {
    let a = e => () => {
      t(e)
    };
    switch (e) {
      case 0:
        return (0, r.jsx)(K, {
          onChangePage: a(1),
          setShowEnableAnimation: s
        });
      case 1:
        return (0, r.jsx)(h.default, {
          onBackClick: a(0)
        });
      default:
        return null
    }
  },
  z = e => 0 === e ? _.SlideDirection.LEFT : _.SlideDirection.RIGHT;

function X() {
  let [e, t] = o.useState(0), [s, a] = o.useState(z(e)), [n, i] = o.useState(!1), l = (0, u.useStateFromStores)([T.default], () => T.default.useReducedMotion), d = n && !l;
  return o.useEffect(() => {
    let t = setTimeout(() => {
      a(z(e))
    }, 500);
    return () => clearTimeout(t)
  }, [e]), o.useEffect(() => {
    Math.random() > .99 && (0, m.unlockAchievement)(A.PoggermodeAchievementId.VISITOR_100)
  }, []), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_.default, {
      className: x.slideAnimator,
      step: e,
      direction: s,
      children: Q(e, t, i)
    }), (0, r.jsx)("div", {
      className: d ? x.enableAnimationOverlayVisible : x.enableAnimationOverlayHidden,
      children: (0, r.jsx)(S.LottieAnimation, {
        className: x.enableAnimation,
        importData: W,
        shouldAnimate: d,
        autoplay: !1,
        resetOnPlay: !0,
        loop: !1,
        onComplete: () => i(!1)
      })
    })]
  })
}