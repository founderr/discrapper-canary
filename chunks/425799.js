t.d(s, {
  Z: function() {
    return C
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
  d = t(25373),
  _ = t(680295),
  T = t(594174),
  S = t(572004),
  u = t(590259),
  I = t(513915),
  N = t(334428),
  A = t(844593);

function C() {
  let e = (0, l.e7)([T.default], () => T.default.getCurrentUser()),
    [s, t] = i.useState(!0),
    [C, O] = i.useState([]),
    m = i.useRef(null),
    [h, g] = i.useState(!1),
    [R, M] = i.useState(!1),
    [x, D] = i.useState(!1),
    p = (0, r.wj)((0, E.ZP)());
  return null == e ? (0, n.jsx)("div", {}) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: I.root,
      children: [(0, n.jsx)("img", {
        src: h ? N : A,
        alt: "",
        width: 450
      }), s && (0, n.jsx)(_.n, {
        profileEffectConfig: {
          type: a.Z.PROFILE_EFFECT,
          title: "debug",
          description: "debug",
          accessibilityLabel: "debug",
          reducedMotionSrc: "",
          effects: x ? (0, u.Tp)(C) : C,
          animationType: 0
        },
        profileEffectId: "debug"
      })]
    }), R && (0, n.jsxs)("div", {
      className: I.userProfilePreview,
      children: [(0, n.jsx)(d.Z, {
        user: e,
        pendingAvatar: void 0,
        pendingProfileEffectId: null,
        canUsePremiumCustomization: !0,
        isTryItOutFlow: !0
      }), (0, n.jsx)(_.n, {
        profileEffectConfig: {
          type: a.Z.PROFILE_EFFECT,
          title: "debug",
          description: "debug",
          accessibilityLabel: "debug",
          reducedMotionSrc: "",
          effects: x ? (0, u.Tp)(C) : C,
          animationType: 0
        },
        profileEffectId: "debug"
      })]
    }), (0, n.jsxs)("div", {
      className: I.options,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-md/normal",
        children: "Dark Theme"
      }), (0, n.jsx)("input", {
        type: "checkbox",
        checked: h,
        className: I.checkBox,
        onChange: () => {
          g(!h)
        }
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/normal",
        children: "Show User Profile"
      }), (0, n.jsx)("input", {
        type: "checkbox",
        checked: R,
        className: I.checkBox,
        onChange: () => {
          M(!R)
        }
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/normal",
        children: "Simulate Android"
      }), (0, n.jsx)("input", {
        type: "checkbox",
        checked: x,
        className: I.checkBox,
        onChange: () => {
          D(!x)
        }
      })]
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsxs)("div", {
        className: I.uploadButton,
        children: [(0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "always-white",
          children: "Click to upload image"
        }), (0, n.jsx)(c.Z, {
          ref: m,
          onChange: e => {
            let s = e.currentTarget.files[0],
              t = new FileReader;
            t.onload = async e => {
              if (null == e.target || "string" != typeof e.target.result) return;
              let t = await (0, u.Xv)(URL.createObjectURL(s), s, C.length);
              O(e => [...e, t])
            }, t.readAsDataURL(s)
          },
          multiple: !1
        })]
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/semibold",
        children: "Make sure to upload the bottommost layer first!"
      })]
    }), C.map((e, s) => (0, n.jsxs)("div", {
      style: {
        marginBottom: 8,
        color: p ? "white" : "black"
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
            O(s => s.filter(s => s !== e))
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
          O(t => {
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
        className: I.numberInput,
        onChange: e => {
          O(t => {
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
        className: I.checkBox,
        onChange: e => {
          O(t => {
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
          className: I.checkBox,
          onChange: e => {
            O(t => {
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
        className: I.checkBox,
        disabled: !0,
        onChange: e => {
          O(t => {
            let n = [...t],
              i = t[s];
            return i.zIndex = +e.target.value, n[s] = i, n
          })
        }
      })]
    }, s)), (0, n.jsxs)("div", {
      className: I.bottomControls,
      children: [(0, n.jsx)(o.Button, {
        color: o.ButtonColors.RED,
        look: o.ButtonLooks.LINK,
        onClick: () => {
          O([])
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
          (0, S.JG)((0, u.HV)(C, "proto")), (0, o.showToast)((0, o.createToast)("Copied to clipboard!", o.ToastType.SUCCESS))
        },
        children: "Export"
      })]
    })]
  })
}