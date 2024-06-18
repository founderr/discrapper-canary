"use strict";
n.r(t), n.d(t, {
  QuestsRewardModalUnverified: function() {
    return E
  },
  openRewardModalUnverified: function() {
    return I
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(893776),
  l = n(594174),
  u = n(918701),
  _ = n(689938),
  c = n(171327),
  d = n(800010);

function E(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, E = (0, s.e7)([l.default], () => {
    var e;
    return null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.email
  }), [I, T] = r.useState({
    status: "unknown"
  });
  r.useEffect(() => {
    T({
      status: "loading"
    }), a.Z.verifyResend().then(() => T({
      status: "success"
    }), e => {
      T({
        status: "error"
      }), (0, u.ys)(e, {
        tags: {
          location: "QuestsRewardModalUnverified"
        }
      })
    })
  }, []);
  let h = () => (0, i.jsx)(o.ModalFooter, {
    className: c.modalFooter,
    children: (0, i.jsx)(o.Button, {
      color: o.Button.Colors.BRAND,
      size: o.Button.Sizes.MEDIUM,
      onClick: n,
      children: _.Z.Messages.CLOSE
    })
  });
  return (0, i.jsxs)(o.ModalRoot, {
    transitionState: t,
    disableTrack: !0,
    children: [(0, i.jsx)("img", {
      alt: "",
      className: c.headerImage,
      src: d
    }), (0, i.jsxs)(o.ModalHeader, {
      separator: !1,
      className: c.header,
      children: [(0, i.jsx)(o.Heading, {
        className: c.title,
        variant: "heading-xl/bold",
        children: _.Z.Messages.QUESTS_REWARD_VERIFICATION_TITLE
      }), (0, i.jsx)(o.ModalCloseButton, {
        onClick: n,
        className: c.modalCloseButton
      })]
    }), "loading" === I.status && (0, i.jsx)(o.ModalContent, {
      className: c.content,
      children: (0, i.jsx)(o.Spinner, {})
    }), "error" === I.status && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(o.ModalContent, {
        className: c.content,
        children: (0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          children: _.Z.Messages.QUESTS_REWARD_VERIFICATION_ERROR
        })
      }), h()]
    }), "success" === I.status && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(o.ModalContent, {
        className: c.content,
        children: (0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          children: _.Z.Messages.QUESTS_REWARD_VERIFICATION_BODY.format({
            emailAddress: E,
            emailAddressLink: "mailto:".concat(E)
          })
        })
      }), (0, i.jsx)(o.ModalContent, {
        className: c.content,
        children: (0, i.jsxs)("div", {
          className: c.tooltip,
          children: [(0, i.jsx)(o.CircleInformationIcon, {
            size: "xs",
            color: "currentColor",
            className: c.infoFilledIcon
          }), (0, i.jsx)(o.Text, {
            className: c.tooltipText,
            variant: "text-sm/normal",
            children: _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CHECK_SPAM
          })]
        })
      }), h()]
    })]
  })
}

function I() {
  (0, o.openModalLazy)(async () => {
    let {
      QuestsRewardModalUnverified: e
    } = await Promise.resolve().then(n.bind(n, 669041));
    return t => (0, i.jsx)(e, {
      ...t
    })
  })
}