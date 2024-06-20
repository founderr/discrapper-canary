t.d(s, {
  Z: function() {
    return R
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(481060),
  r = t(232567),
  o = t(700582),
  c = t(718629),
  E = t(138820),
  d = t(630759),
  _ = t(921157),
  T = t(171368),
  S = t(594174),
  u = t(709054),
  I = t(51144),
  N = t(760373),
  A = t(689938),
  C = t(134774),
  O = t(331651);

function m(e) {
  let {
    userId: s,
    count: t
  } = e, c = (0, a.e7)([S.default], () => S.default.getUser(s)), E = I.ZP.getFormattedName(c), _ = i.useCallback(() => {
    (0, d.Dz)(s)
  }, [s]), u = i.useCallback(() => (0, T.openUserProfileModal)({
    userId: s
  }), [s]);
  return i.useEffect(() => {
    (0, r.PR)(s)
  }, [s]), (0, n.jsxs)("div", {
    className: C.section,
    children: [null != c && (0, n.jsx)(o.Z, {
      className: C.avatar,
      user: c,
      size: l.AvatarSizes.SIZE_40
    }), (0, n.jsxs)("div", {
      className: C.text,
      children: [(0, n.jsx)(l.Clickable, {
        className: C.username,
        onClick: u,
        children: (0, n.jsx)(l.Text, {
          variant: "text-md/semibold",
          color: "interactive-active",
          children: E
        })
      }), (0, n.jsx)(l.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: A.Z.Messages.E2EE_DEVICES_COUNT.format({
          count: t
        })
      })]
    }), (0, n.jsx)(l.Clickable, {
      onClick: _,
      className: C.sectionIconContainer,
      children: (0, n.jsx)(l.TrashIcon, {
        size: "xs"
      })
    })]
  })
}

function h(e) {
  let {
    className: s,
    userId: t,
    verification: a,
    index: r
  } = e, o = (0, d.bo)(a.timestamp), c = i.useCallback(() => {
    (0, d.KF)(t, a.fingerprint)
  }, [a.fingerprint, t]);
  return (0, n.jsxs)("div", {
    className: s,
    children: [(0, n.jsxs)("div", {
      className: C.text,
      children: [(0, n.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "interactive-active",
        children: A.Z.Messages.E2EE_ANONYMOUS_DEVICE_TAG.format({
          index: r
        })
      }), (0, n.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: o
      })]
    }), (0, n.jsx)(l.Clickable, {
      className: C.icon,
      onClick: c,
      children: (0, n.jsx)(l.CloseSmallIcon, {
        size: "md",
        color: l.tokens.colors.INTERACTIVE_NORMAL
      })
    })]
  })
}

function g(e) {
  let {
    data: s
  } = e, t = i.useMemo(() => u.default.keys(s), [s]);
  return (0, n.jsx)(n.Fragment, {
    children: t.map(e => {
      let t = s[e];
      return (0, n.jsxs)("div", {
        className: C.item,
        children: [(0, n.jsx)(m, {
          userId: e,
          count: t.length
        }), t.map((s, a) => (0, n.jsxs)(i.Fragment, {
          children: [(0, n.jsx)(h, {
            className: C.row,
            userId: e,
            index: a,
            verification: s
          }), a !== t.length - 1 && (0, n.jsx)("div", {
            className: C.divider
          })]
        }, "".concat(a, "-").concat(s.timestamp)))]
      }, e)
    })
  })
}

function R() {
  let e = (0, a.e7)([E.Z], () => E.Z.getPersistentCodesEnabled()),
    s = i.useCallback(e => {
      c.Z.updateSettings({
        persistentCodesEnabled: e
      })
    }, []),
    t = (0, _.W)();
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(l.FormSection, {
      tag: l.FormTitleTags.H1,
      title: A.Z.Messages.E2EE_END_TO_END_ENCRYPTION,
      children: [(0, n.jsx)(l.FormText, {
        type: l.FormTextTypes.DESCRIPTION,
        className: O.marginBottom20,
        children: A.Z.Messages.E2EE_SETTINGS_SUBTITLE.format({
          helpArticle: N.l4
        })
      }), (0, n.jsxs)(l.FormItem, {
        children: [(0, n.jsx)(l.FormTitle, {
          tag: l.FormTitleTags.H5,
          className: O.marginBottom8,
          children: A.Z.Messages.E2EE_VERIFICATION_CODES
        }), (0, n.jsx)(l.FormSwitch, {
          value: e,
          note: A.Z.Messages.E2EE_PERSISTENT_CODES_DESCRIPTION.format({
            helpArticle: N.$J
          }),
          onChange: s,
          children: A.Z.Messages.E2EE_ENABLE_PERSISTENT_CODES
        })]
      })]
    }), (0, n.jsxs)(l.FormItem, {
      className: O.marginBottom20,
      children: [(0, n.jsx)(l.FormTitle, {
        tag: l.FormTitleTags.H5,
        className: O.marginBottom8,
        children: A.Z.Messages.E2EE_VERIFIED_DEVICES
      }), (0, n.jsx)(l.FormText, {
        type: l.FormTextTypes.DESCRIPTION,
        children: A.Z.Messages.E2EE_VERIFIED_DEVICES_DESCRIPTION.format({
          helpArticle: N.s9
        })
      })]
    }), (0, n.jsx)(g, {
      data: t
    })]
  })
}