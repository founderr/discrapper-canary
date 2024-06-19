a.r(s), a.d(s, {
  default: function() {
    return g
  }
}), a(47120);
var n = a(735250),
  i = a(470079),
  t = a(512722),
  l = a.n(t),
  d = a(990547),
  r = a(442837),
  o = a(481060),
  c = a(668781),
  u = a(494620),
  C = a(961842),
  m = a(254238),
  h = a(258609),
  N = a(689938),
  v = a(60913),
  x = a(505913);

function O(e) {
  let {
    name: s,
    subText: a
  } = e;
  return (0, n.jsxs)("div", {
    className: v.deviceItemName,
    children: [(0, n.jsx)(C.Z, {
      className: v.deviceItemIcon
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(o.Text, {
        variant: "text-md/semibold",
        color: "interactive-active",
        children: s
      }), a]
    })]
  })
}

function _(e) {
  let {
    devices: s,
    onFinished: a,
    selectedDeviceId: i,
    onSelectDeviceId: t,
    transferring: l
  } = e, d = s.map(e => {
    let {
      id: s,
      name: a,
      platform: i
    } = e;
    return {
      value: s,
      name: (0, n.jsx)(O, {
        name: a,
        platform: i
      })
    }
  });
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(o.ModalHeader, {
      separator: !1,
      className: v.modalHeaderContainer,
      children: [(0, n.jsx)(o.Heading, {
        className: v.modalHeader,
        color: "header-primary",
        variant: "heading-xl/bold",
        children: N.Z.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE_MODAL_HEADER
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: N.Z.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE_MODAL_SUBHEADING
      })]
    }), (0, n.jsxs)(o.ModalContent, {
      className: v.content,
      children: [(0, n.jsx)(o.RadioGroup, {
        radioPosition: "right",
        radioItemClassName: v.deviceItem,
        size: o.RadioGroup.Sizes.NOT_SET,
        value: i,
        options: d,
        onChange: e => {
          let {
            value: s
          } = e;
          return t(s)
        }
      }), (0, n.jsx)(u.Z, {
        children: N.Z.Messages.PLAYSTATION_DEVICES_INFOBOX
      })]
    }), (0, n.jsx)(o.ModalFooter, {
      children: (0, n.jsx)(o.Button, {
        disabled: null == i,
        submitting: l,
        onClick: a,
        children: N.Z.Messages.CONSOLE_TRANSFER_VOICE
      })
    })]
  })
}

function E() {
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(o.ModalHeader, {
      separator: !1,
      className: v.modalHeaderContainer,
      children: [(0, n.jsx)(o.Heading, {
        className: v.modalHeader,
        color: "header-primary",
        variant: "heading-xl/bold",
        children: N.Z.Messages.PLAYSTATION_DEVICES_NOT_FOUND
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: N.Z.Messages.PLAYSTATION_DEVICES_NOT_FOUND_BODY
      })]
    }), (0, n.jsx)(o.ModalContent, {
      className: v.emptyArt,
      children: (0, n.jsx)("img", {
        src: x,
        width: "189",
        height: "177",
        alt: ""
      })
    })]
  })
}

function g(e) {
  let s, {
      channel: a,
      platform: t,
      transitionState: u,
      onClose: C
    } = e,
    x = (0, r.e7)([h.Z], () => h.Z.getDevicesForPlatform(t), [t]),
    O = (0, r.e7)([h.Z], () => h.Z.getLastSelectedDeviceByPlatform(t)),
    g = i.useMemo(() => Object.values(x), [x]),
    j = (0, r.e7)([h.Z], () => h.Z.getFetchingDevices(t)),
    p = (0, r.e7)([h.Z], () => {
      var e;
      return null === (e = h.Z.getAwaitingRemoteSessionInfo()) || void 0 === e ? void 0 : e.deviceId
    }),
    [f, S] = i.useState(!1),
    [I, M] = i.useState(() => {
      var e, s;
      return null !== (s = null === (e = x[null != p ? p : ""]) || void 0 === e ? void 0 : e.id) && void 0 !== s ? s : null
    });
  i.useEffect(() => {
    m.LO(t)
  }, [t]), i.useEffect(() => {
    1 === g.length ? M(g[0].id) : null != O && M(O)
  }, [g, O]);
  let R = async () => {
    let e = x[null != I ? I : ""];
    l()(null != e, "Cannot transfer without selected device");
    try {
      S(!0), await m.sh(t, e.id, a), C()
    } catch (s) {
      S(!1), c.Z.show({
        title: N.Z.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR,
        body: N.Z.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR_BODY.format({
          deviceName: e.name
        })
      })
    }
  };
  return s = j ? (0, n.jsx)("div", {
    className: v.spinnerContainer,
    children: (0, n.jsx)(o.Spinner, {})
  }) : 0 === g.length ? (0, n.jsx)(E, {}) : (0, n.jsx)(_, {
    devices: g,
    onFinished: R,
    selectedDeviceId: I,
    transferring: f || null != p,
    onSelectDeviceId: e => {
      M(e), (0, m.bp)(t, e)
    }
  }), (0, n.jsxs)(o.ModalRoot, {
    size: o.ModalSize.DYNAMIC,
    className: v.modalRoot,
    transitionState: u,
    impression: {
      impressionName: d.ImpressionNames.GAME_CONSOLE_DEVICE_LIST
    },
    children: [s, (0, n.jsx)(o.ModalCloseButton, {
      className: v.closeButton,
      onClick: C
    })]
  })
}