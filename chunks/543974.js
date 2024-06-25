n.r(a), n.d(a, {
  default: function() {
    return I
  }
}), n(47120);
var t = n(735250),
  s = n(470079),
  i = n(512722),
  l = n.n(i),
  d = n(990547),
  o = n(442837),
  r = n(481060),
  c = n(668781),
  m = n(494620),
  C = n(961842),
  u = n(254238),
  h = n(258609),
  v = n(689938),
  N = n(60913),
  _ = n(505913);

function x(e) {
  let {
    name: a,
    subText: n
  } = e;
  return (0, t.jsxs)("div", {
    className: N.deviceItemName,
    children: [(0, t.jsx)(C.Z, {
      className: N.deviceItemIcon
    }), (0, t.jsxs)("div", {
      children: [(0, t.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "interactive-active",
        children: a
      }), n]
    })]
  })
}

function O(e) {
  let {
    devices: a,
    onFinished: n,
    selectedDeviceId: s,
    onSelectDeviceId: i,
    transferring: l
  } = e, d = a.map(e => {
    let {
      id: a,
      name: n,
      platform: s
    } = e;
    return {
      value: a,
      name: (0, t.jsx)(x, {
        name: n,
        platform: s
      })
    }
  });
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsxs)(r.ModalHeader, {
      separator: !1,
      className: N.modalHeaderContainer,
      children: [(0, t.jsx)(r.Heading, {
        className: N.modalHeader,
        color: "header-primary",
        variant: "heading-xl/bold",
        children: v.Z.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE_MODAL_HEADER
      }), (0, t.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: v.Z.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE_MODAL_SUBHEADING
      })]
    }), (0, t.jsxs)(r.ModalContent, {
      className: N.content,
      children: [(0, t.jsx)(r.RadioGroup, {
        radioPosition: "right",
        radioItemClassName: N.deviceItem,
        size: r.RadioGroup.Sizes.NOT_SET,
        value: s,
        options: d,
        onChange: e => {
          let {
            value: a
          } = e;
          return i(a)
        }
      }), (0, t.jsx)(m.Z, {
        children: v.Z.Messages.PLAYSTATION_DEVICES_INFOBOX
      })]
    }), (0, t.jsx)(r.ModalFooter, {
      children: (0, t.jsx)(r.Button, {
        disabled: null == s,
        submitting: l,
        onClick: n,
        children: v.Z.Messages.CONSOLE_TRANSFER_VOICE
      })
    })]
  })
}

function p() {
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsxs)(r.ModalHeader, {
      separator: !1,
      className: N.modalHeaderContainer,
      children: [(0, t.jsx)(r.Heading, {
        className: N.modalHeader,
        color: "header-primary",
        variant: "heading-xl/bold",
        children: v.Z.Messages.PLAYSTATION_DEVICES_NOT_FOUND
      }), (0, t.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: v.Z.Messages.PLAYSTATION_DEVICES_NOT_FOUND_BODY
      })]
    }), (0, t.jsx)(r.ModalContent, {
      className: N.emptyArt,
      children: (0, t.jsx)("img", {
        src: _,
        width: "189",
        height: "177",
        alt: ""
      })
    })]
  })
}

function I(e) {
  let a, {
      channel: n,
      platform: i,
      transitionState: m,
      onClose: C
    } = e,
    _ = (0, o.e7)([h.Z], () => h.Z.getDevicesForPlatform(i), [i]),
    x = (0, o.e7)([h.Z], () => h.Z.getLastSelectedDeviceByPlatform(i)),
    I = s.useMemo(() => Object.values(_), [_]),
    E = (0, o.e7)([h.Z], () => h.Z.getFetchingDevices(i)),
    g = (0, o.e7)([h.Z], () => {
      var e;
      return null === (e = h.Z.getAwaitingRemoteSessionInfo()) || void 0 === e ? void 0 : e.deviceId
    }),
    [j, f] = s.useState(!1),
    [S, R] = s.useState(() => {
      var e, a;
      return null !== (a = null === (e = _[null != g ? g : ""]) || void 0 === e ? void 0 : e.id) && void 0 !== a ? a : null
    });
  s.useEffect(() => {
    u.LO(i)
  }, [i]), s.useEffect(() => {
    1 === I.length ? R(I[0].id) : null != x && R(x)
  }, [I, x]);
  let M = async () => {
    let e = _[null != S ? S : ""];
    l()(null != e, "Cannot transfer without selected device");
    try {
      f(!0), await u.sh(i, e.id, n), C()
    } catch (a) {
      f(!1), c.Z.show({
        title: v.Z.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR,
        body: v.Z.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR_BODY.format({
          deviceName: e.name
        })
      })
    }
  };
  return a = E ? (0, t.jsx)("div", {
    className: N.spinnerContainer,
    children: (0, t.jsx)(r.Spinner, {})
  }) : 0 === I.length ? (0, t.jsx)(p, {}) : (0, t.jsx)(O, {
    devices: I,
    onFinished: M,
    selectedDeviceId: S,
    transferring: j || null != g,
    onSelectDeviceId: e => {
      R(e), (0, u.bp)(i, e)
    }
  }), (0, t.jsxs)(r.ModalRoot, {
    size: r.ModalSize.DYNAMIC,
    className: N.modalRoot,
    transitionState: m,
    impression: {
      impressionName: d.ImpressionNames.GAME_CONSOLE_DEVICE_LIST
    },
    children: [a, (0, t.jsx)(r.ModalCloseButton, {
      className: N.closeButton,
      onClick: C
    })]
  })
}