t.d(s, {
  Z: function() {
    return A
  }
}), t(47120), t(315314), t(610138), t(216116), t(78328), t(815648);
var n = t(735250),
  i = t(470079),
  a = t(979554),
  l = t(442837),
  r = t(780384),
  o = t(481060),
  c = t(53281),
  E = t(410030),
  d = t(589266),
  _ = t(680295),
  T = t(594174),
  S = t(590259),
  u = t(513915),
  I = t(334428),
  N = t(844593);

function A() {
  let e = (0, l.e7)([T.default], () => T.default.getCurrentUser()),
    [s, t] = i.useState(!0),
    [A, C] = i.useState([]),
    O = i.useRef(null),
    [m, h] = i.useState(!1),
    [g, R] = i.useState(!1),
    [M, x] = i.useState(!1),
    D = (0, r.wj)((0, E.ZP)());
  return null == e ? (0, n.jsx)("div", {}) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: u.root,
      children: [(0, n.jsx)("img", {
        src: m ? I : N,
        alt: "",
        width: 450
      }), s && (0, n.jsx)(_.n, {
        profileEffectConfig: {
          type: a.Z.PROFILE_EFFECT,
          title: "debug",
          description: "debug",
          accessibilityLabel: "debug",
          reducedMotionSrc: "",
          effects: M ? (0, S.Tp)(A) : A,
          animationType: 0
        },
        profileEffectId: "debug"
      })]
    }), g && (0, n.jsxs)("div", {
      className: u.userProfilePreview,
      children: [(0, n.jsx)(d.Z, {
        location: "ProfileEffectsPreviewToolPage",
        user: e,
        pendingAvatar: void 0,
        pendingProfileEffectId: null,
        onAvatarChange: () => {},
        onBannerChange: () => {},
        canUsePremiumCustomization: !0,
        isTryItOutFlow: !0
      }), (0, n.jsx)(_.n, {
        profileEffectConfig: {
          type: a.Z.PROFILE_EFFECT,
          title: "debug",
          description: "debug",
          accessibilityLabel: "debug",
          reducedMotionSrc: "",
          effects: M ? (0, S.Tp)(A) : A,
          animationType: 0
        },
        profileEffectId: "debug"
      })]
    }), (0, n.jsxs)("div", {
      className: u.options,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-md/normal",
        children: "Dark Theme"
      }), (0, n.jsx)("input", {
        type: "checkbox",
        checked: m,
        className: u.checkBox,
        onChange: () => {
          h(!m)
        }
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/normal",
        children: "Show User Profile"
      }), (0, n.jsx)("input", {
        type: "checkbox",
        checked: g,
        className: u.checkBox,
        onChange: () => {
          R(!g)
        }
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/normal",
        children: "Simulate Android"
      }), (0, n.jsx)("input", {
        type: "checkbox",
        checked: M,
        className: u.checkBox,
        onChange: () => {
          x(!M)
        }
      })]
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsxs)("div", {
        className: u.uploadButton,
        children: [(0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "always-white",
          children: "Click to upload image"
        }), (0, n.jsx)(c.Z, {
          ref: O,
          onChange: e => {
            let s = e.currentTarget.files[0],
              t = new FileReader;
            t.onload = async e => {
              if (null == e.target || "string" != typeof e.target.result) return;
              let t = await (0, S.Xv)(URL.createObjectURL(s), s, A.length);
              C(e => [...e, t])
            }, t.readAsDataURL(s)
          },
          multiple: !1
        })]
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/semibold",
        children: "Make sure to upload the bottommost layer first!"
      })]
    }), A.map((e, s) => (0, n.jsxs)("div", {
      style: {
        marginBottom: 8,
        color: D ? "white" : "black"
      },
      children: [(0, n.jsxs)("div", {
        style: {
          display: "flex",
          flexDirection: "row"
        },
        children: [(0, n.jsx)(o.Text, {
          variant: "text-sm/bold",
          style: {
            marginTop: 8,
            marginBottom: 8
          },
          children: e.name
        }), (0, n.jsx)(o.Button, {
          color: o.ButtonColors.RED,
          look: o.ButtonLooks.LINK,
          onClick: () => {
            C(s => s.filter(s => s !== e))
          },
          children: "Remove"
        })]
      }), (0, n.jsx)("label", {
        children: "Start"
      }), (0, n.jsx)("input", {
        type: "number",
        value: e.start,
        className: u.numberInput,
        onChange: e => {
          C(t => {
            let n = [...t],
              i = t[s];
            return i.start = +e.target.value, n[s] = i, n
          })
        }
      }), (0, n.jsx)("label", {
        children: "Duration"
      }), (0, n.jsx)("input", {
        type: "number",
        value: e.duration,
        className: u.numberInput,
        onChange: e => {
          C(t => {
            let n = [...t],
              i = t[s];
            return i.duration = +e.target.value, n[s] = i, n
          })
        }
      }), (0, n.jsx)("label", {
        children: "Loop"
      }), (0, n.jsx)("input", {
        type: "checkbox",
        checked: e.loop,
        className: u.checkBox,
        onChange: e => {
          C(t => {
            let n = [...t],
              i = t[s];
            return i.loop = e.target.checked, n[s] = i, n
          })
        }
      }), e.loop && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("label", {
          children: "Loop Delay"
        }), (0, n.jsx)("input", {
          type: "number",
          value: e.loopDelay,
          className: u.checkBox,
          onChange: e => {
            C(t => {
              let n = [...t],
                i = t[s];
              return i.loopDelay = +e.target.value, n[s] = i, n
            })
          }
        })]
      }), (0, n.jsx)("label", {
        children: "Z-Index"
      }), (0, n.jsx)("input", {
        type: "number",
        value: e.zIndex,
        className: u.checkBox,
        disabled: !0,
        onChange: e => {
          C(t => {
            let n = [...t],
              i = t[s];
            return i.zIndex = +e.target.value, n[s] = i, n
          })
        }
      })]
    }, s)), (0, n.jsxs)("div", {
      className: u.bottomControls,
      children: [(0, n.jsx)(o.Button, {
        color: o.ButtonColors.RED,
        look: o.ButtonLooks.LINK,
        onClick: () => {
          C([])
        },
        children: "Clear Assets"
      }), (0, n.jsx)(o.Button, {
        color: o.ButtonColors.BRAND,
        onClick: () => {
          t(!1), setTimeout(() => t(!0), 100)
        },
        children: "Replay Animation"
      }), (0, n.jsx)(o.Button, {
        color: o.ButtonColors.BRAND,
        onClick: () => {
          navigator.clipboard.writeText((0, S.HV)(A, "proto")), (0, o.showToast)((0, o.createToast)("Copied to clipboard!", o.ToastType.SUCCESS))
        },
        children: "Export"
      })]
    })]
  })
}