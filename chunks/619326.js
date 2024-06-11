"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("866442"),
  o = s("481060"),
  d = s("393238"),
  u = s("44315"),
  c = s("663993"),
  E = s("263704"),
  _ = s("214623"),
  I = s("981631"),
  T = s("689938"),
  S = s("694036");
let f = (0, c.makeLazy)({
  createPromise: () => s.e("5609").then(s.bind(s, "336231")),
  webpackId: "336231"
});

function m(e) {
  let t = (0, r.getDarkness)(e) > .25;
  return (0, u.getColor)(t ? I.Color.WHITE_500 : I.Color.PRIMARY_530)
}

function N(e) {
  let {
    value: t,
    onChange: s,
    disabled: n = !1
  } = e, [d, u] = l.useState(t);

  function c() {
    s(d)
  }

  function f(e) {
    s(e), u(e)
  }
  let N = t === I.DEFAULT_ROLE_COLOR,
    g = N ? d : t,
    h = (0, a.jsx)(E.default, {
      width: 32,
      height: 24,
      color: m(t)
    }),
    C = (0, o.useRadioGroup)({
      orientation: "horizontal",
      isDisabled: n
    }),
    R = (0, o.useRadioItem)({
      isSelected: N,
      label: T.default.Messages.USER_SETTINGS_PROFILE_COLOR_DEFAULT_BUTTON.format({
        colorHex: (0, r.int2hex)(I.DEFAULT_ROLE_COLOR)
      })
    }),
    x = (0, o.useRadioItem)({
      isSelected: !N,
      label: T.default.Messages.USER_SETTINGS_PROFILE_COLOR_CUSTOM_BUTTON.format({
        colorHex: (0, r.int2hex)(t)
      })
    });
  return (0, a.jsxs)("div", {
    className: S.buttonsContainer,
    "aria-label": T.default.Messages.USER_SETTINGS_PROFILE_COLOR,
    ...C,
    children: [(0, a.jsx)("div", {
      className: i()(S.colorSwatch, {
        [S.disabled]: n
      }),
      children: (0, a.jsxs)(o.Clickable, {
        onClick: n ? void 0 : function() {
          s(I.DEFAULT_ROLE_COLOR)
        },
        "aria-disabled": n,
        ...R,
        children: [(0, a.jsx)("div", {
          className: S.swatch,
          style: {
            backgroundColor: (0, r.int2hex)(I.DEFAULT_ROLE_COLOR)
          },
          children: N ? h : null
        }), (0, a.jsx)(o.Text, {
          className: S.swatchDescription,
          color: "header-secondary",
          variant: "text-xs/normal",
          "aria-hidden": !0,
          children: T.default.Messages.USER_SETTINGS_PROFILE_COLOR_DEFAULT
        })]
      })
    }), (0, a.jsxs)("div", {
      className: i()(S.colorSwatch, {
        [S.disabled]: n
      }),
      children: [(0, a.jsxs)(o.Clickable, {
        onClick: n ? void 0 : c,
        "aria-disabled": n,
        ...x,
        children: [(0, a.jsx)("div", {
          className: i()(S.customSwatch, {
            [S.defaultSwatch]: g === I.DEFAULT_ROLE_COLOR
          }),
          style: {
            "--custom-color": (0, r.int2hex)(g)
          },
          children: N ? null : h
        }), (0, a.jsx)(o.Text, {
          className: S.swatchDescription,
          color: "header-secondary",
          variant: "text-xs/normal",
          "aria-hidden": !0,
          children: T.default.Messages.USER_SETTINGS_PROFILE_COLOR_CUSTOM
        })]
      }), !n && (0, a.jsx)(o.Popout, {
        onRequestOpen: c,
        renderPopout: e => (0, a.jsx)(o.CustomColorPicker, {
          ...e,
          value: t,
          onChange: f
        }),
        children: e => (0, a.jsx)(o.Clickable, {
          ...e,
          className: S.dropperIconButton,
          "aria-label": T.default.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
          children: (0, a.jsx)(_.default, {
            className: S.dropperIcon,
            width: 14,
            height: 14,
            color: m(g)
          })
        })
      })]
    })]
  })
}

function g(e) {
  let t, {
      value: s,
      onChange: l,
      disabled: n = !1
    } = e,
    {
      ref: i,
      width: r
    } = (0, d.default)();
  return t = null == r || r < 440 ? (0, a.jsx)(N, {
    value: s,
    onChange: l,
    disabled: n
  }) : (0, a.jsx)(f, {
    defaultColor: I.DEFAULT_ROLE_COLOR,
    colors: I.ROLE_COLORS,
    value: s,
    onChange: l,
    disabled: n
  }), (0, a.jsx)("div", {
    ref: i,
    children: t
  })
}