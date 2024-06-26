t.d(s, {
  Z: function() {
    return m
  }
}), t(47120), t(315314), t(610138), t(216116), t(78328), t(815648);
var n = t(735250),
  a = t(470079),
  i = t(979554),
  r = t(442837),
  o = t(780384),
  l = t(481060),
  c = t(53281),
  d = t(410030),
  _ = t(921813),
  E = t(680295),
  u = t(594174),
  T = t(572004),
  S = t(590259),
  I = t(513915),
  N = t(334428),
  C = t(844593);

function m() {
  let e = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
    [s, t] = a.useState(!0),
    [m, A] = a.useState([]),
    O = a.useRef(null),
    [g, h] = a.useState(!1),
    [R, p] = a.useState(!1),
    [x, M] = a.useState(!1),
    D = (0, o.wj)((0, d.ZP)());
  return null == e ? (0, n.jsx)("div", {}) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: I.root,
      children: [(0, n.jsx)("img", {
        src: g ? N : C,
        alt: "",
        width: 450
      }), s && (0, n.jsx)(E.n, {
        profileEffectConfig: {
          type: i.Z.PROFILE_EFFECT,
          title: "debug",
          description: "debug",
          accessibilityLabel: "debug",
          reducedMotionSrc: "",
          effects: x ? (0, S.Tp)(m) : m,
          animationType: 0
        },
        profileEffectId: "debug"
      })]
    }), R && (0, n.jsxs)("div", {
      className: I.userProfilePreview,
      children: [(0, n.jsx)(_.Z, {
        user: e,
        pendingAvatar: void 0,
        pendingProfileEffectId: null,
        canUsePremiumCustomization: !0,
        isTryItOutFlow: !0
      }), (0, n.jsx)(E.n, {
        profileEffectConfig: {
          type: i.Z.PROFILE_EFFECT,
          title: "debug",
          description: "debug",
          accessibilityLabel: "debug",
          reducedMotionSrc: "",
          effects: x ? (0, S.Tp)(m) : m,
          animationType: 0
        },
        profileEffectId: "debug"
      })]
    }), (0, n.jsxs)("div", {
      className: I.options,
      children: [(0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        children: "Dark Theme"
      }), (0, n.jsx)("input", {
        type: "checkbox",
        checked: g,
        className: I.checkBox,
        onChange: () => {
          h(!g)
        }
      }), (0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        children: "Show User Profile"
      }), (0, n.jsx)("input", {
        type: "checkbox",
        checked: R,
        className: I.checkBox,
        onChange: () => {
          p(!R)
        }
      }), (0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        children: "Simulate Android"
      }), (0, n.jsx)("input", {
        type: "checkbox",
        checked: x,
        className: I.checkBox,
        onChange: () => {
          M(!x)
        }
      })]
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsxs)("div", {
        className: I.uploadButton,
        children: [(0, n.jsx)(l.Text, {
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
              let t = await (0, S.Xv)(URL.createObjectURL(s), s, m.length);
              A(e => [...e, t])
            }, t.readAsDataURL(s)
          },
          multiple: !1
        })]
      }), (0, n.jsx)(l.Text, {
        variant: "text-sm/semibold",
        children: "Make sure to upload the bottommost layer first!"
      })]
    }), m.map((e, s) => (0, n.jsxs)("div", {
      style: {
        marginBottom: 8,
        color: D ? "white" : "black"
      },
      children: [(0, n.jsxs)("div", {
        style: {
          display: "flex",
          flexDirection: "row"
        },
        children: [(0, n.jsx)(l.Text, {
          variant: "text-sm/bold",
          style: {
            marginTop: 8,
            marginBottom: 8
          },
          children: e.name
        }), (0, n.jsx)(l.Button, {
          color: l.ButtonColors.RED,
          look: l.ButtonLooks.LINK,
          onClick: () => {
            A(s => s.filter(s => s !== e))
          },
          children: "Remove"
        })]
      }), (0, n.jsx)("label", {
        children: "Start"
      }), (0, n.jsx)("input", {
        type: "number",
        value: e.start,
        className: I.numberInput,
        onChange: e => {
          A(t => {
            let n = [...t],
              a = t[s];
            return a.start = +e.target.value, n[s] = a, n
          })
        }
      }), (0, n.jsx)("label", {
        children: "Duration"
      }), (0, n.jsx)("input", {
        type: "number",
        value: e.duration,
        className: I.numberInput,
        onChange: e => {
          A(t => {
            let n = [...t],
              a = t[s];
            return a.duration = +e.target.value, n[s] = a, n
          })
        }
      }), (0, n.jsx)("label", {
        children: "Loop"
      }), (0, n.jsx)("input", {
        type: "checkbox",
        checked: e.loop,
        className: I.checkBox,
        onChange: e => {
          A(t => {
            let n = [...t],
              a = t[s];
            return a.loop = e.target.checked, n[s] = a, n
          })
        }
      }), e.loop && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("label", {
          children: "Loop Delay"
        }), (0, n.jsx)("input", {
          type: "number",
          value: e.loopDelay,
          className: I.checkBox,
          onChange: e => {
            A(t => {
              let n = [...t],
                a = t[s];
              return a.loopDelay = +e.target.value, n[s] = a, n
            })
          }
        })]
      }), (0, n.jsx)("label", {
        children: "Z-Index"
      }), (0, n.jsx)("input", {
        type: "number",
        value: e.zIndex,
        className: I.checkBox,
        disabled: !0,
        onChange: e => {
          A(t => {
            let n = [...t],
              a = t[s];
            return a.zIndex = +e.target.value, n[s] = a, n
          })
        }
      })]
    }, s)), (0, n.jsxs)("div", {
      className: I.bottomControls,
      children: [(0, n.jsx)(l.Button, {
        color: l.ButtonColors.RED,
        look: l.ButtonLooks.LINK,
        onClick: () => {
          A([])
        },
        children: "Clear Assets"
      }), (0, n.jsx)(l.Button, {
        color: l.ButtonColors.BRAND,
        onClick: () => {
          t(!1), setTimeout(() => t(!0), 100)
        },
        children: "Replay Animation"
      }), (0, n.jsx)(l.Button, {
        color: l.ButtonColors.BRAND,
        onClick: () => {
          (0, T.JG)((0, S.HV)(m, "proto")), (0, l.showToast)((0, l.createToast)("Copied to clipboard!", l.ToastType.SUCCESS))
        },
        children: "Export"
      })]
    })]
  })
}