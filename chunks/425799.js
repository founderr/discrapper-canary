"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("47120"), s("315314"), s("610138"), s("216116"), s("78328"), s("815648");
var a = s("735250"),
  n = s("470079"),
  l = s("979554"),
  i = s("442837"),
  r = s("780384"),
  o = s("481060"),
  d = s("53281"),
  u = s("410030"),
  c = s("589266"),
  S = s("680295"),
  E = s("594174"),
  T = s("590259"),
  _ = s("301733"),
  f = s("334428"),
  m = s("844593");

function g() {
  let e = (0, i.useStateFromStores)([E.default], () => E.default.getCurrentUser()),
    [t, s] = n.useState(!0),
    [g, I] = n.useState([]),
    N = n.useRef(null),
    [h, C] = n.useState(!1),
    [A, p] = n.useState(!1),
    [O, R] = n.useState(!1),
    x = (0, r.isThemeDark)((0, u.default)());
  return null == e ? (0, a.jsx)("div", {}) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: _.root,
      children: [(0, a.jsx)("img", {
        src: h ? f : m,
        alt: "",
        width: 450
      }), t && (0, a.jsx)(S.ProfileEffect, {
        profileEffectConfig: {
          type: l.CollectiblesItemType.PROFILE_EFFECT,
          title: "debug",
          description: "debug",
          accessibilityLabel: "debug",
          reducedMotionSrc: "",
          effects: O ? (0, T.patchAndroid)(g) : g,
          animationType: 0
        },
        profileEffectId: "debug"
      })]
    }), A && (0, a.jsxs)("div", {
      className: _.userProfilePreview,
      children: [(0, a.jsx)(c.default, {
        location: "ProfileEffectsPreviewToolPage",
        user: e,
        pendingAvatar: void 0,
        pendingProfileEffectId: null,
        onAvatarChange: () => {},
        onBannerChange: () => {},
        canUsePremiumCustomization: !0,
        isTryItOutFlow: !0
      }), (0, a.jsx)(S.ProfileEffect, {
        profileEffectConfig: {
          type: l.CollectiblesItemType.PROFILE_EFFECT,
          title: "debug",
          description: "debug",
          accessibilityLabel: "debug",
          reducedMotionSrc: "",
          effects: O ? (0, T.patchAndroid)(g) : g,
          animationType: 0
        },
        profileEffectId: "debug"
      })]
    }), (0, a.jsxs)("div", {
      className: _.options,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        children: "Dark Theme"
      }), (0, a.jsx)("input", {
        type: "checkbox",
        checked: h,
        className: _.checkBox,
        onChange: () => {
          C(!h)
        }
      }), (0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        children: "Show User Profile"
      }), (0, a.jsx)("input", {
        type: "checkbox",
        checked: A,
        className: _.checkBox,
        onChange: () => {
          p(!A)
        }
      }), (0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        children: "Simulate Android"
      }), (0, a.jsx)("input", {
        type: "checkbox",
        checked: O,
        className: _.checkBox,
        onChange: () => {
          R(!O)
        }
      })]
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsxs)("div", {
        className: _.uploadButton,
        children: [(0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "always-white",
          children: "Click to upload image"
        }), (0, a.jsx)(d.default, {
          ref: N,
          onChange: e => {
            let t = e.currentTarget.files[0],
              s = new FileReader;
            s.onload = async e => {
              if (null == e.target || "string" != typeof e.target.result) return;
              let s = await (0, T.createLayer)(URL.createObjectURL(t), t, g.length);
              I(e => [...e, s])
            }, s.readAsDataURL(t)
          },
          multiple: !1
        })]
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/semibold",
        children: "Make sure to upload the bottommost layer first!"
      })]
    }), g.map((e, t) => (0, a.jsxs)("div", {
      style: {
        marginBottom: 8,
        color: x ? "white" : "black"
      },
      children: [(0, a.jsxs)("div", {
        style: {
          display: "flex",
          flexDirection: "row"
        },
        children: [(0, a.jsx)(o.Text, {
          variant: "text-sm/bold",
          style: {
            marginTop: 8,
            marginBottom: 8
          },
          children: e.name
        }), (0, a.jsx)(o.Button, {
          color: o.ButtonColors.RED,
          look: o.ButtonLooks.LINK,
          onClick: () => {
            I(t => t.filter(t => t !== e))
          },
          children: "Remove"
        })]
      }), (0, a.jsx)("label", {
        children: "Start"
      }), (0, a.jsx)("input", {
        type: "number",
        value: e.start,
        className: _.numberInput,
        onChange: e => {
          I(s => {
            let a = [...s],
              n = s[t];
            return n.start = +e.target.value, a[t] = n, a
          })
        }
      }), (0, a.jsx)("label", {
        children: "Duration"
      }), (0, a.jsx)("input", {
        type: "number",
        value: e.duration,
        className: _.numberInput,
        onChange: e => {
          I(s => {
            let a = [...s],
              n = s[t];
            return n.duration = +e.target.value, a[t] = n, a
          })
        }
      }), (0, a.jsx)("label", {
        children: "Loop"
      }), (0, a.jsx)("input", {
        type: "checkbox",
        checked: e.loop,
        className: _.checkBox,
        onChange: e => {
          I(s => {
            let a = [...s],
              n = s[t];
            return n.loop = e.target.checked, a[t] = n, a
          })
        }
      }), e.loop && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("label", {
          children: "Loop Delay"
        }), (0, a.jsx)("input", {
          type: "number",
          value: e.loopDelay,
          className: _.checkBox,
          onChange: e => {
            I(s => {
              let a = [...s],
                n = s[t];
              return n.loopDelay = +e.target.value, a[t] = n, a
            })
          }
        })]
      }), (0, a.jsx)("label", {
        children: "Z-Index"
      }), (0, a.jsx)("input", {
        type: "number",
        value: e.zIndex,
        className: _.checkBox,
        disabled: !0,
        onChange: e => {
          I(s => {
            let a = [...s],
              n = s[t];
            return n.zIndex = +e.target.value, a[t] = n, a
          })
        }
      })]
    }, t)), (0, a.jsxs)("div", {
      className: _.bottomControls,
      children: [(0, a.jsx)(o.Button, {
        color: o.ButtonColors.RED,
        look: o.ButtonLooks.LINK,
        onClick: () => {
          I([])
        },
        children: "Clear Assets"
      }), (0, a.jsx)(o.Button, {
        color: o.ButtonColors.BRAND,
        onClick: () => {
          s(!1), setTimeout(() => s(!0), 100)
        },
        children: "Replay Animation"
      }), (0, a.jsx)(o.Button, {
        color: o.ButtonColors.BRAND,
        onClick: () => {
          navigator.clipboard.writeText((0, T.exportConfig)(g, "proto")), (0, o.showToast)((0, o.createToast)("Copied to clipboard!", o.ToastType.SUCCESS))
        },
        children: "Export"
      })]
    })]
  })
}