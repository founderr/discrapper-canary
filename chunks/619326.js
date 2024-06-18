"use strict";
t.d(s, {
  Z: function() {
    return S
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(866442),
  o = t(481060),
  c = t(393238),
  d = t(44315),
  u = t(663993),
  E = t(981631),
  _ = t(689938),
  I = t(570837);
let T = (0, u.Un)({
  createPromise: () => t.e("5609").then(t.bind(t, 336231)),
  webpackId: 336231
});

function N(e) {
  let s = (0, r.Bd)(e) > .25;
  return (0, d.Lq)(s ? E.Ilk.WHITE_500 : E.Ilk.PRIMARY_530)
}

function m(e) {
  let {
    value: s,
    onChange: t,
    disabled: l = !1
  } = e, [c, d] = i.useState(s);

  function u() {
    t(c)
  }

  function T(e) {
    t(e), d(e)
  }
  let m = s === E.p6O,
    S = m ? c : s,
    h = (0, n.jsx)(o.CheckmarkLargeIcon, {
      size: "custom",
      width: 32,
      height: 24,
      color: N(s)
    }),
    g = (0, o.useRadioGroup)({
      orientation: "horizontal",
      isDisabled: l
    }),
    C = (0, o.useRadioItem)({
      isSelected: m,
      label: _.Z.Messages.USER_SETTINGS_PROFILE_COLOR_DEFAULT_BUTTON.format({
        colorHex: (0, r.Rf)(E.p6O)
      })
    }),
    x = (0, o.useRadioItem)({
      isSelected: !m,
      label: _.Z.Messages.USER_SETTINGS_PROFILE_COLOR_CUSTOM_BUTTON.format({
        colorHex: (0, r.Rf)(s)
      })
    });
  return (0, n.jsxs)("div", {
    className: I.buttonsContainer,
    "aria-label": _.Z.Messages.USER_SETTINGS_PROFILE_COLOR,
    ...g,
    children: [(0, n.jsx)("div", {
      className: a()(I.colorSwatch, {
        [I.disabled]: l
      }),
      children: (0, n.jsxs)(o.Clickable, {
        onClick: l ? void 0 : function() {
          t(E.p6O)
        },
        "aria-disabled": l,
        ...C,
        children: [(0, n.jsx)("div", {
          className: I.swatch,
          style: {
            backgroundColor: (0, r.Rf)(E.p6O)
          },
          children: m ? h : null
        }), (0, n.jsx)(o.Text, {
          className: I.swatchDescription,
          color: "header-secondary",
          variant: "text-xs/normal",
          "aria-hidden": !0,
          children: _.Z.Messages.USER_SETTINGS_PROFILE_COLOR_DEFAULT
        })]
      })
    }), (0, n.jsxs)("div", {
      className: a()(I.colorSwatch, {
        [I.disabled]: l
      }),
      children: [(0, n.jsxs)(o.Clickable, {
        onClick: l ? void 0 : u,
        "aria-disabled": l,
        ...x,
        children: [(0, n.jsx)("div", {
          className: a()(I.customSwatch, {
            [I.defaultSwatch]: S === E.p6O
          }),
          style: {
            "--custom-color": (0, r.Rf)(S)
          },
          children: m ? null : h
        }), (0, n.jsx)(o.Text, {
          className: I.swatchDescription,
          color: "header-secondary",
          variant: "text-xs/normal",
          "aria-hidden": !0,
          children: _.Z.Messages.USER_SETTINGS_PROFILE_COLOR_CUSTOM
        })]
      }), !l && (0, n.jsx)(o.Popout, {
        onRequestOpen: u,
        renderPopout: e => (0, n.jsx)(o.CustomColorPicker, {
          ...e,
          value: s,
          onChange: T
        }),
        children: e => (0, n.jsx)(o.Clickable, {
          ...e,
          className: I.dropperIconButton,
          "aria-label": _.Z.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
          children: (0, n.jsx)(o.EyeDropperIcon, {
            size: "custom",
            className: I.dropperIcon,
            width: 14,
            height: 14,
            color: N(S)
          })
        })
      })]
    })]
  })
}

function S(e) {
  let s, {
      value: t,
      onChange: i,
      disabled: l = !1
    } = e,
    {
      ref: a,
      width: r
    } = (0, c.Z)();
  return s = null == r || r < 440 ? (0, n.jsx)(m, {
    value: t,
    onChange: i,
    disabled: l
  }) : (0, n.jsx)(T, {
    defaultColor: E.p6O,
    colors: E.pmI,
    value: t,
    onChange: i,
    disabled: l
  }), (0, n.jsx)("div", {
    ref: a,
    children: s
  })
}