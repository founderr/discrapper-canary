"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
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
  E = s("433612"),
  T = s("171368"),
  _ = s("594174"),
  I = s("709054"),
  N = s("51144"),
  g = s("63454"),
  f = s("231338"),
  m = s("689938"),
  A = s("104229"),
  C = s("611273");

function O(e) {
  let {
    userId: t,
    count: s
  } = e, i = (0, r.useStateFromStores)([_.default], () => _.default.getUser(t)), c = N.default.getFormattedName(i), S = f.NOOP, E = n.useCallback(() => (0, T.openUserProfileModal)({
    userId: t
  }), [t]);
  return n.useEffect(() => {
    (0, d.getUser)(t)
  }, [t]), (0, a.jsxs)("div", {
    className: A.section,
    children: [null != i && (0, a.jsx)(u.default, {
      className: A.avatar,
      user: i,
      size: o.AvatarSizes.SIZE_40
    }), (0, a.jsxs)("div", {
      className: A.text,
      children: [(0, a.jsx)(o.Clickable, {
        className: A.username,
        onClick: E,
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "interactive-active",
          children: c
        })
      }), (0, a.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: m.default.Messages.E2EE_DEVICES_COUNT.format({
          count: s
        })
      })]
    }), (0, a.jsx)(o.Clickable, {
      onClick: S,
      className: A.sectionIconContainer,
      children: (0, a.jsx)(l.TrashIcon, {
        height: 16,
        width: 16
      })
    })]
  })
}

function h(e) {
  let {
    className: t,
    device: s,
    index: n
  } = e, l = (0, E.getSecureFramesUserVerifiedTimestamp)(s.timestamp), r = f.NOOP;
  return (0, a.jsxs)("div", {
    className: t,
    children: [(0, a.jsxs)("div", {
      className: A.text,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-sm/semibold",
        color: "interactive-active",
        children: m.default.Messages.E2EE_ANONYMOUS_DEVICE_TAG.format({
          index: n
        })
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: l
      })]
    }), (0, a.jsx)(o.Clickable, {
      className: A.icon,
      onClick: r,
      children: (0, a.jsx)(i.CloseSmallIcon, {
        height: 24,
        width: 24,
        color: o.tokens.colors.INTERACTIVE_NORMAL
      })
    })]
  })
}

function R(e) {
  let {
    data: t
  } = e, s = n.useMemo(() => I.default.keys(t), [t]);
  return (0, a.jsx)(a.Fragment, {
    children: s.map(e => {
      let s = t[e];
      return (0, a.jsxs)("div", {
        className: A.item,
        children: [(0, a.jsx)(O, {
          userId: e,
          count: s.length
        }), s.map((e, t) => (0, a.jsxs)(n.Fragment, {
          children: [(0, a.jsx)(h, {
            className: A.row,
            index: t,
            device: e
          }), t !== s.length - 1 && (0, a.jsx)("div", {
            className: A.divider
          })]
        }, "".concat(t, "-").concat(e.timestamp)))]
      }, e)
    })
  })
}

function p() {
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
      title: m.default.Messages.E2EE_END_TO_END_ENCRYPTION,
      children: [(0, a.jsx)(o.FormText, {
        type: o.FormTextTypes.DESCRIPTION,
        className: C.marginBottom20,
        children: m.default.Messages.E2EE_SETTINGS_SUBTITLE.format({
          helpArticle: g.E2EE_HELPDESK_ARTICLE
        })
      }), (0, a.jsxs)(o.FormItem, {
        children: [(0, a.jsx)(o.FormTitle, {
          tag: o.FormTitleTags.H5,
          className: C.marginBottom8,
          children: m.default.Messages.E2EE_VERIFICATION_CODES
        }), (0, a.jsx)(o.FormSwitch, {
          value: e,
          note: m.default.Messages.E2EE_PERSISTENT_CODES_DESCRIPTION.format({
            helpArticle: g.E2EE_PERSISTENT_CODES_HELPDESK_ARTICLE
          }),
          onChange: t,
          children: m.default.Messages.E2EE_ENABLE_PERSISTENT_CODES
        })]
      })]
    }), (0, a.jsxs)(o.FormItem, {
      className: C.marginBottom20,
      children: [(0, a.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        className: C.marginBottom8,
        children: m.default.Messages.E2EE_VERIFIED_DEVICES
      }), (0, a.jsx)(o.FormText, {
        type: o.FormTextTypes.DESCRIPTION,
        children: m.default.Messages.E2EE_VERIFIED_DEVICES_DESCRIPTION.format({
          helpArticle: g.E2EE_VERIFIED_DEVICES_HELPDESK_ARTICLE
        })
      })]
    }), (0, a.jsx)(R, {
      data: s
    })]
  })
}