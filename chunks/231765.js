t.d(s, {
  Z: function() {
    return K
  }
}), t(47120);
var n, i, a, l, r = t(735250),
  o = t(470079),
  c = t(392711),
  E = t(442837),
  d = t(692547),
  _ = t(481060),
  T = t(37234),
  S = t(607070),
  u = t(206895),
  I = t(585483),
  N = t(557177),
  A = t(57562),
  C = t(955204),
  O = t(64078),
  m = t(351780),
  h = t(954794),
  g = t(112843),
  R = t(524484),
  M = t(981631),
  x = t(689938),
  p = t(944744);
let D = {
    enabled: !0,
    combosEnabled: !0,
    screenshakeEnabled: !1,
    confettiEnabled: !1
  },
  L = (0, c.range)(0, 11),
  P = (0, c.range)(0, 2.25, .25),
  Z = (0, c.range)(1, 11),
  f = (0, c.range)(1, 26);
(a = n || (n = {}))[a.CONFETTI = 0] = "CONFETTI", a[a.SHAKE = 1] = "SHAKE", (l = i || (i = {}))[l.USER_SETTINGS = 0] = "USER_SETTINGS", l[l.ACHIEVEMENT_LIST = 1] = "ACHIEVEMENT_LIST";
let j = () => [{
    location: R.Hn.CHAT_INPUT,
    title: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_CHAT_INPUT_ENABLED,
    description: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_CHAT_INPUT_ENABLED_DESCRIPTION
  }, {
    location: R.Hn.REACTION,
    title: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_REACTION_ENABLED,
    description: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_REACTION_ENABLED_DESCRIPTION
  }, {
    location: R.Hn.MEMBER_USER,
    title: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_MEMBER_USER_ENABLED,
    description: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_MEMBER_USER_ENABLED_DESCRIPTION
  }, {
    location: R.Hn.CALL_TILE,
    title: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_CALL_TILE_ENABLED,
    description: x.Z.Messages.POGGERMODE_CONFETTI_LOCATION_CALL_TILE_ENABLED_DESCRIPTION
  }],
  v = () => [{
    location: R.oZ.CHAT_INPUT,
    title: x.Z.Messages.POGGERMODE_SCREENSHAKE_LOCATION_CHAT_INPUT_ENABLED,
    description: x.Z.Messages.POGGERMODE_SCREENSHAKE_LOCATION_CHAT_INPUT_ENABLED_DESCRIPTION
  }, {
    location: R.oZ.VOICE_USER,
    title: x.Z.Messages.POGGERMODE_SCREENSHAKE_LOCATION_VOICE_USER_ENABLED,
    description: x.Z.Messages.POGGERMODE_SCREENSHAKE_LOCATION_VOICE_USER_ENABLED_DESCRIPTION
  }, {
    location: R.oZ.MENTION,
    title: x.Z.Messages.POGGERMODE_SCREENSHAKE_LOCATION_MENTION_ENABLED,
    description: x.Z.Messages.POGGERMODE_SCREENSHAKE_LOCATION_MENTION_ENABLED_DESCRIPTION
  }];

function U(e) {
  let {
    disabled: s,
    locations: t,
    settingsLocations: n,
    onChange: i
  } = e, a = t.map(e => (0, r.jsx)(_.FormSwitch, {
    disabled: s,
    value: n[e.location],
    note: e.description,
    onChange: s => i({
      ...n,
      [e.location]: s
    }),
    children: e.title
  }, e.location));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_.FormTitle, {
      children: x.Z.Messages.POGGERMODE_LOCATIONS
    }), a]
  })
}

function B(e) {
  let {
    children: s
  } = e;
  return (0, r.jsx)(_.Text, {
    className: p.sliderDescription,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: s
  })
}

function b(e) {
  let {
    settings: {
      enabled: s,
      warningSeen: t
    },
    updateSettings: n
  } = e, i = (0, E.e7)([S.Z], () => S.Z.useReducedMotion);
  return (0, r.jsx)(_.FormSwitch, {
    value: s,
    note: x.Z.Messages.POGGERMODE_ENABLE_DESCRIPTION,
    onChange: e => {
      !e && (0, A.T)(C.hn.DISABLE_POGGERMODE), e && (!t || i) ? (0, _.openModal)(e => (0, r.jsx)(_.ConfirmModal, {
        header: i ? x.Z.Messages.POGGERMODE_WARNING_TITLE_REDUCED_MOTION : x.Z.Messages.POGGERMODE_WARNING_TITLE,
        confirmText: x.Z.Messages.ENABLE,
        cancelText: x.Z.Messages.CANCEL,
        onConfirm: () => n(i ? D : {
          enabled: !0,
          warningSeen: !0
        }),
        ...e,
        children: (0, r.jsx)(_.Text, {
          variant: "text-md/normal",
          children: i ? x.Z.Messages.POGGERMODE_WARNING_BODY_REDUCED_MOTION : x.Z.Messages.POGGERMODE_WARNING_BODY
        })
      })) : n({
        enabled: e
      })
    },
    children: x.Z.Messages.POGGERMODE_ENABLE
  })
}

function G(e) {
  let {
    settings: {
      enabled: s,
      confettiEnabled: t,
      confettiCount: n,
      confettiSize: i,
      confettiEnabledLocations: a
    },
    updateSettings: l
  } = e, o = !s || !t;
  return (0, r.jsxs)(_.FormSection, {
    tag: _.FormTitleTags.H1,
    title: x.Z.Messages.POGGERMODE_CONFETTI_CUSTOMIZATION,
    children: [(0, r.jsx)(_.FormSwitch, {
      disabled: !s,
      value: t,
      note: x.Z.Messages.POGGERMODE_CONFETTI_ENABLED_DESCRIPTION,
      onChange: e => l({
        confettiEnabled: e
      }, 0),
      children: x.Z.Messages.POGGERMODE_CONFETTI_ENABLED
    }), (0, r.jsxs)(_.FormItem, {
      disabled: o,
      title: x.Z.Messages.POGGERMODE_CONFETTI_COUNT,
      className: p.formItem,
      children: [(0, r.jsx)(B, {
        children: x.Z.Messages.POGGERMODE_CONFETTI_COUNT_DESCRIPTION
      }), (0, r.jsx)(_.Slider, {
        disabled: o,
        markers: Z,
        stickToMarkers: !0,
        minValue: Z[0],
        maxValue: Z[Z.length - 1],
        initialValue: n,
        onValueChange: e => l({
          confettiCount: e
        }, 0),
        onValueRender: e => "".concat(e)
      })]
    }), (0, r.jsxs)(_.FormItem, {
      disabled: o,
      title: x.Z.Messages.POGGERMODE_CONFETTI_SIZE,
      className: p.formItem,
      children: [(0, r.jsx)(B, {
        children: x.Z.Messages.POGGERMODE_CONFETTI_SIZE_DESCRIPTION
      }), (0, r.jsx)(_.Slider, {
        disabled: o,
        markers: f,
        stickToMarkers: !0,
        minValue: f[0],
        maxValue: f[f.length - 1],
        initialValue: i,
        onValueChange: e => l({
          confettiSize: e
        }, 0),
        onValueRender: e => "".concat(e)
      })]
    }), (0, r.jsx)(U, {
      disabled: o,
      locations: j(),
      settingsLocations: a,
      onChange: e => l({
        confettiEnabledLocations: e
      }, 0)
    })]
  })
}

function F(e) {
  let {
    settings: {
      enabled: s,
      combosEnabled: t,
      comboSoundsEnabled: n,
      combosRequiredCount: i
    },
    updateSettings: a
  } = e, l = !s || !t;
  return (0, r.jsxs)(_.FormSection, {
    tag: _.FormTitleTags.H1,
    title: x.Z.Messages.POGGERMODE_COMBOS_CUSTOMIZATION,
    children: [(0, r.jsx)(_.FormSwitch, {
      disabled: !s,
      value: t,
      note: x.Z.Messages.POGGERMODE_COMBOS_ENABLED_DESCRIPTION,
      onChange: e => a({
        combosEnabled: e
      }),
      children: x.Z.Messages.POGGERMODE_COMBOS_ENABLED
    }), (0, r.jsx)(_.FormSwitch, {
      disabled: !s,
      value: n,
      note: x.Z.Messages.POGGERMODE_COMBO_SOUNDS_ENABLED_DESCRIPTION,
      onChange: e => a({
        comboSoundsEnabled: e
      }),
      children: x.Z.Messages.POGGERMODE_COMBO_SOUNDS_ENABLED
    }), (0, r.jsxs)(_.FormItem, {
      disabled: l,
      title: x.Z.Messages.POGGERMODE_COMBOS_REQUIRED,
      className: p.formItem,
      children: [(0, r.jsx)(B, {
        children: x.Z.Messages.POGGERMODE_COMBOS_REQUIRED_DESCRIPTION
      }), (0, r.jsx)(_.Slider, {
        disabled: l,
        markers: L,
        stickToMarkers: !0,
        minValue: L[0],
        maxValue: L[L.length - 1],
        initialValue: i,
        onValueChange: e => a({
          combosRequiredCount: e
        }),
        onValueRender: e => "".concat(e)
      })]
    }), (0, r.jsx)(_.FormDivider, {
      className: p.divider
    })]
  })
}

function V(e) {
  let {
    settings: {
      enabled: s,
      screenshakeEnabled: t,
      shakeIntensity: n,
      screenshakeEnabledLocations: i
    },
    updateSettings: a
  } = e, l = (0, E.e7)([S.Z], () => S.Z.useReducedMotion), o = !s || !t || l, c = (e, s) => {
    null != e.shakeIntensity && e.shakeIntensity > n && (0, A.T)(C.hn.MORE), a(e, s)
  };
  return (0, r.jsxs)(_.FormSection, {
    tag: _.FormTitleTags.H1,
    title: x.Z.Messages.POGGERMODE_SCREENSHAKE_CUSTOMIZATION,
    children: [(0, r.jsx)(_.FormSwitch, {
      disabled: !s || l,
      tooltipNote: l ? x.Z.Messages.POGGERMODE_SCREENSHAKE_DISABLED_REDUCED_MOTION : null,
      value: t && !l,
      note: x.Z.Messages.POGGERMODE_SCREENSHAKE_ENABLED_DESCRIPTION,
      onChange: e => a({
        screenshakeEnabled: e
      }, 1),
      children: x.Z.Messages.POGGERMODE_SCREENSHAKE_ENABLED
    }), (0, r.jsxs)(_.FormItem, {
      disabled: o,
      title: x.Z.Messages.POGGERMODE_SCREENSHAKE,
      className: p.formItem,
      children: [(0, r.jsx)(B, {
        children: x.Z.Messages.POGGERMODE_SCREENSHAKE_DESCRIPTION
      }), (0, r.jsx)(_.Slider, {
        disabled: o,
        markers: P,
        equidistant: !0,
        stickToMarkers: !0,
        minValue: P[0],
        maxValue: P[P.length - 1],
        initialValue: n,
        onValueChange: e => c({
          shakeIntensity: e
        }, 1),
        onMarkerRender: e => e === P[P.length - 1] ? x.Z.Messages.POGGERMODE_SCREENSHAKE_MAX : "".concat(100 * e, "%")
      })]
    }), (0, r.jsx)(U, {
      disabled: o,
      locations: v(),
      settingsLocations: i,
      onChange: e => a({
        screenshakeEnabledLocations: e
      }, 1)
    })]
  })
}

function y(e) {
  let {
    updateSettings: s
  } = e;
  return (0, r.jsx)(_.FormSection, {
    tag: _.FormTitleTags.H1,
    title: x.Z.Messages.POGGERMODE_SETTINGS_CUSTOMIZATION,
    children: (0, r.jsxs)(_.FormItem, {
      className: p.formItem,
      children: [(0, r.jsx)(_.FormText, {
        className: p.formItem,
        children: x.Z.Messages.POGGERMODE_HIDE_SETTINGS_DESCRIPTION
      }), (0, r.jsx)(_.Button, {
        className: p.hideButton,
        size: _.Button.Sizes.SMALL,
        onClick: () => {
          s({
            enabled: !1,
            settingsVisible: !1
          }), (0, T.xf)()
        },
        children: x.Z.Messages.POGGERMODE_HIDE_SETTINGS
      })]
    })
  })
}

function Y(e) {
  let {
    onChangePage: s
  } = e;
  return (0, r.jsxs)(_.FormSection, {
    children: [(0, r.jsxs)(_.Clickable, {
      onClick: () => s(1),
      className: p.achievementContainer,
      children: [(0, r.jsx)("div", {
        className: p.achievementIconContainer,
        children: (0, r.jsx)(_.TrophyIcon, {
          size: "md",
          color: d.Z.unsafe_rawColors.ORANGE_345.css
        })
      }), (0, r.jsxs)("div", {
        className: p.achievementTextContainer,
        children: [(0, r.jsx)(_.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: x.Z.Messages.POGGERMODE_ACHIEVEMENT_TITLE
        }), (0, r.jsx)(_.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: x.Z.Messages.POGGERMODE_ACHIEVEMENT_DESCRIPTION
        })]
      }), (0, r.jsx)(_.ChevronSmallRightIcon, {
        size: "custom",
        color: "currentColor",
        width: 16,
        className: p.rightCaretIcon
      })]
    }), (0, r.jsx)(_.FormDivider, {
      className: p.divider
    })]
  })
}
let H = () => t.e("20467").then(t.t.bind(t, 205663, 19)).then(e => {
  let {
    default: s
  } = e;
  return s
});

function k(e) {
  let {
    onChangePage: s,
    setShowEnableAnimation: t
  } = e, n = (0, E.cj)([m.Z], () => m.Z.getState()), [i, a] = o.useState({
    x: 0,
    y: 0
  }), l = (0, g.Z)();

  function c(e, s, t, n) {
    return (null != s ? s : e) && (null != n ? n : t)
  }
  let d = e => {
      if (e.enabled && !1 === n.enabled) {
        var s;
        t(!0), (0, N.GN)("poggermode_enabled"), I.S.dispatch(M.CkL.SHAKE_APP, {
          duration: 2e3,
          intensity: null !== (s = e.shakeIntensity) && void 0 !== s ? s : n.shakeIntensity
        })
      }
    },
    T = (e, s) => {
      if (d(e), (0, O.AI)(e), null == s) return;
      let t = c(n.confettiEnabled, e.confettiEnabled, n.enabled, e.enabled);
      0 === s && t && l.fire(i.x, i.y, {
        settings: e
      });
      let a = c(n.screenshakeEnabled, e.screenshakeEnabled, n.enabled, e.enabled);
      if (1 === s && a) {
        var r;
        I.S.dispatch(M.CkL.SHAKE_APP, {
          duration: 1e3,
          intensity: null !== (r = e.shakeIntensity) && void 0 !== r ? r : n.shakeIntensity
        })
      }
    },
    S = e => {
      a({
        x: e.clientX,
        y: e.clientY
      })
    };
  return o.useEffect(() => (window.addEventListener("mousemove", S), () => window.removeEventListener("mousemove", S)), []), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_.Heading, {
      variant: "heading-lg/semibold",
      className: p.title,
      children: x.Z.Messages.POGGERMODE
    }), (0, r.jsx)(b, {
      settings: n,
      updateSettings: T
    }), (0, r.jsx)(Y, {
      onChangePage: s
    }), (0, r.jsx)(F, {
      settings: n,
      updateSettings: T
    }), (0, r.jsx)(V, {
      settings: n,
      updateSettings: T
    }), (0, r.jsx)(G, {
      settings: n,
      updateSettings: T
    }), (0, r.jsx)(y, {
      updateSettings: T
    })]
  })
}
let w = (e, s, t) => {
    let n = e => () => {
      s(e)
    };
    switch (e) {
      case 0:
        return (0, r.jsx)(k, {
          onChangePage: n(1),
          setShowEnableAnimation: t
        });
      case 1:
        return (0, r.jsx)(h.Z, {
          onBackClick: n(0)
        });
      default:
        return null
    }
  },
  W = e => 0 === e ? u.n.LEFT : u.n.RIGHT;

function K() {
  let [e, s] = o.useState(0), [t, n] = o.useState(W(e)), [i, a] = o.useState(!1), l = (0, E.e7)([S.Z], () => S.Z.useReducedMotion), c = i && !l;
  return o.useEffect(() => {
    let s = setTimeout(() => {
      n(W(e))
    }, 500);
    return () => clearTimeout(s)
  }, [e]), o.useEffect(() => {
    Math.random() > .99 && (0, A.T)(C.hn.VISITOR_100)
  }, []), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.Z, {
      className: p.slideAnimator,
      step: e,
      direction: t,
      children: w(e, s, a)
    }), (0, r.jsx)("div", {
      className: c ? p.enableAnimationOverlayVisible : p.enableAnimationOverlayHidden,
      children: (0, r.jsx)(_.LottieAnimation, {
        className: p.enableAnimation,
        importData: H,
        shouldAnimate: c,
        autoplay: !1,
        resetOnPlay: !0,
        loop: !1,
        onComplete: () => a(!1)
      })
    })]
  })
}