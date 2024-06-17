"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("727075"),
  l = s("490236"),
  r = s("442837"),
  o = s("481060"),
  d = s("232567"),
  u = s("700582"),
  c = s("542828"),
  S = s("130123"),
  E = s("627617"),
  T = s("171368"),
  _ = s("594174"),
  I = s("709054"),
  N = s("51144"),
  g = s("63454"),
  f = s("689938"),
  m = s("104229"),
  A = s("611273");

function C(e) {
  let {
    userId: t,
    count: s
  } = e, i = (0, r.useStateFromStores)([_.default], () => _.default.getUser(t)), c = N.default.getFormattedName(i), S = n.useCallback(() => {
    (0, E.clearAllUserVerifications)(t)
  }, [t]), I = n.useCallback(() => (0, T.openUserProfileModal)({
    userId: t
  }), [t]);
  return n.useEffect(() => {
    (0, d.getUser)(t)
  }, [t]), (0, a.jsxs)("div", {
    className: m.section,
    children: [null != i && (0, a.jsx)(u.default, {
      className: m.avatar,
      user: i,
      size: o.AvatarSizes.SIZE_40
    }), (0, a.jsxs)("div", {
      className: m.text,
      children: [(0, a.jsx)(o.Clickable, {
        className: m.username,
        onClick: I,
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "interactive-active",
          children: c
        })
      }), (0, a.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: f.default.Messages.E2EE_DEVICES_COUNT.format({
          count: s
        })
      })]
    }), (0, a.jsx)(o.Clickable, {
      onClick: S,
      className: m.sectionIconContainer,
      children: (0, a.jsx)(l.TrashIcon, {
        height: 16,
        width: 16
      })
    })]
  })
}

function O(e) {
  let {
    className: t,
    userId: s,
    device: l,
    index: r
  } = e, d = (0, E.getSecureFramesUserVerifiedTimestamp)(l.timestamp), u = n.useCallback(() => {
    (0, E.clearUserVerification)(s)
  }, [s]);
  return (0, a.jsxs)("div", {
    className: t,
    children: [(0, a.jsxs)("div", {
      className: m.text,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-sm/semibold",
        color: "interactive-active",
        children: f.default.Messages.E2EE_ANONYMOUS_DEVICE_TAG.format({
          index: r
        })
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: d
      })]
    }), (0, a.jsx)(o.Clickable, {
      className: m.icon,
      onClick: u,
      children: (0, a.jsx)(i.CloseSmallIcon, {
        height: 24,
        width: 24,
        color: o.tokens.colors.INTERACTIVE_NORMAL
      })
    })]
  })
}

function h(e) {
  let {
    data: t
  } = e, s = n.useMemo(() => I.default.keys(t), [t]);
  return (0, a.jsx)(a.Fragment, {
    children: s.map(e => {
      let s = t[e];
      return (0, a.jsxs)("div", {
        className: m.item,
        children: [(0, a.jsx)(C, {
          userId: e,
          count: s.length
        }), s.map((t, i) => (0, a.jsxs)(n.Fragment, {
          children: [(0, a.jsx)(O, {
            className: m.row,
            userId: e,
            index: i,
            device: t
          }), i !== s.length - 1 && (0, a.jsx)("div", {
            className: m.divider
          })]
        }, "".concat(i, "-").concat(t.timestamp)))]
      }, e)
    })
  })
}

function R() {
  let e = (0, r.useStateFromStores)([S.default], () => S.default.getPersistentCodesEnabled()),
    t = n.useCallback(e => {
      c.default.updateSettings({
        persistentCodesEnabled: e
      })
    }, []),
    s = n.useMemo(() => ({}), []);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(o.FormSection, {
      tag: o.FormTitleTags.H1,
      title: f.default.Messages.E2EE_END_TO_END_ENCRYPTION,
      children: [(0, a.jsx)(o.FormText, {
        type: o.FormTextTypes.DESCRIPTION,
        className: A.marginBottom20,
        children: f.default.Messages.E2EE_SETTINGS_SUBTITLE.format({
          helpArticle: g.E2EE_HELPDESK_ARTICLE
        })
      }), (0, a.jsxs)(o.FormItem, {
        children: [(0, a.jsx)(o.FormTitle, {
          tag: o.FormTitleTags.H5,
          className: A.marginBottom8,
          children: f.default.Messages.E2EE_VERIFICATION_CODES
        }), (0, a.jsx)(o.FormSwitch, {
          value: e,
          note: f.default.Messages.E2EE_PERSISTENT_CODES_DESCRIPTION.format({
            helpArticle: g.E2EE_PERSISTENT_CODES_HELPDESK_ARTICLE
          }),
          onChange: t,
          children: f.default.Messages.E2EE_ENABLE_PERSISTENT_CODES
        })]
      })]
    }), (0, a.jsxs)(o.FormItem, {
      className: A.marginBottom20,
      children: [(0, a.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        className: A.marginBottom8,
        children: f.default.Messages.E2EE_VERIFIED_DEVICES
      }), (0, a.jsx)(o.FormText, {
        type: o.FormTextTypes.DESCRIPTION,
        children: f.default.Messages.E2EE_VERIFIED_DEVICES_DESCRIPTION.format({
          helpArticle: g.E2EE_VERIFIED_DEVICES_HELPDESK_ARTICLE
        })
      })]
    }), (0, a.jsx)(h, {
      data: s
    })]
  })
}