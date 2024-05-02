"use strict";
a.r(t), a.d(t, {
  ComposerUploadButton: function() {
    return j
  },
  default: function() {
    return R
  }
}), a("47120");
var s = a("735250"),
  n = a("470079"),
  l = a("512722"),
  r = a.n(l),
  i = a("718017"),
  o = a("442837"),
  u = a("481060"),
  d = a("53281"),
  c = a("607070"),
  m = a("541716"),
  h = a("859235"),
  f = a("898463"),
  g = a("592125"),
  x = a("703558"),
  C = a("117530"),
  _ = a("180277"),
  p = a("585483"),
  T = a("127654"),
  S = a("228392"),
  E = a("981631"),
  N = a("549163");
let M = {
    scale: .95,
    opacity: 0
  },
  A = {
    scale: 1,
    opacity: 1
  },
  v = {
    scale: 1,
    opacity: 1
  },
  I = {
    tension: 2400,
    friction: 52
  };

function j(e) {
  let {
    channelId: t,
    onClick: a,
    onClose: l,
    onMouseEnter: i
  } = e, c = n.useRef(null), m = (0, o.useStateFromStores)([g.default], () => g.default.getChannel(t), [t]);
  return r()(null != m, "Forum Channel is null"), (0, s.jsxs)(u.Clickable, {
    className: N.uploadInput,
    onMouseEnter: i,
    onClick: () => {
      (0, S.trackForumChannelMediaUploaderClicked)({
        isMobile: !1
      }), null == a || a()
    },
    onKeyPress: e => {
      if ("Enter" === e.key) {
        var t;
        null === (t = c.current) || void 0 === t || t.activateUploadDialogue(), (0, S.trackForumChannelMediaUploaderClicked)({
          isMobile: !1
        })
      }
    },
    children: [(0, s.jsx)(d.default, {
      className: N.fileInput,
      ref: c,
      onChange: e => {
        null == l || l(), (0, T.promptToUpload)(e.currentTarget.files, m, x.DraftType.FirstThreadMessage, {
          requireConfirm: !0
        }), p.ComponentDispatch.dispatch(E.ComponentActions.TEXTAREA_FOCUS), e.currentTarget.value = null
      },
      multiple: m.rateLimitPerUser <= 0,
      tabIndex: -1,
      "aria-hidden": !0
    }), (0, s.jsx)(_.default, {
      width: 28,
      height: 28,
      className: N.uploadIcon
    })]
  })
}

function O(e) {
  let {
    channelId: t,
    closePopout: a
  } = e, [l, r] = n.useState(!1), {
    reducedMotion: d
  } = n.useContext(u.AccessibilityPreferencesContext), g = (0, i.useSpring)({
    from: d.enabled ? A : M,
    to: v,
    config: I
  }), x = (0, o.useStateFromStores)([c.default], () => c.default.keyboardModeEnabled), _ = (0, o.useStateFromStores)([C.default], () => C.default.getUploads(t, m.ChatInputTypes.CREATE_FORUM_POST.drafts.type));
  return (0, s.jsx)(i.animated.div, {
    className: N.popoutContainer,
    onMouseLeave: () => {
      !l && a()
    },
    style: g,
    children: (0, s.jsxs)(u.ScrollerThin, {
      orientation: "horizontal",
      className: N.popout,
      paddingFix: !1,
      fade: !0,
      children: [(0, s.jsx)(j, {
        channelId: t,
        onClick: () => {
          r(!0)
        },
        onClose: () => {
          r(!1), a()
        }
      }), (0, s.jsx)("div", {
        className: N.uploads,
        children: _.map(e => (0, s.jsx)(f.default, {
          channelId: t,
          draftType: m.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
          upload: e,
          keyboardModeEnabled: x,
          hideFileName: !0,
          size: h.AttachmentListItemSizes.SMALL
        }, e.id))
      })]
    })
  })
}

function R(e) {
  let {
    channelId: t
  } = e, [a, l] = n.useState(!1), r = (0, o.useStateFromStores)([C.default], () => C.default.getUploads(t, m.ChatInputTypes.CREATE_FORUM_POST.drafts.type)), i = r.length, u = i > 0;
  n.useEffect(() => {
    a && !u && l(!1)
  }, [a, u]);
  let d = () => {
    u && l(!0)
  };
  return (0, s.jsxs)("div", {
    className: N.container,
    children: [u ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(f.UploadIcon, {
        upload: r[0],
        size: h.AttachmentListItemSizes.SMALL,
        onMouseEnter: d
      }), !a && (0, s.jsx)("div", {
        className: N.badge,
        children: i
      })]
    }) : (0, s.jsx)(j, {
      onMouseEnter: d,
      channelId: t
    }), a && (0, s.jsx)(O, {
      channelId: t,
      closePopout: () => {
        l(!1)
      }
    })]
  })
}