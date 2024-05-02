"use strict";
n.r(t), n.d(t, {
  UserProfileCustomStatusBubble: function() {
    return N
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("442837"),
  l = n("264539"),
  u = n("955623"),
  d = n("481060"),
  _ = n("596454"),
  c = n("788307"),
  E = n("393903"),
  I = n("594174"),
  T = n("221292"),
  f = n("228168"),
  S = n("981631"),
  h = n("689938"),
  A = n("336428");
let m = "text-sm/medium";

function N(e) {
  let {
    statusActivity: t,
    profileType: a,
    user: N,
    onClose: p,
    animate: O = !0,
    hideTooltip: R = !1
  } = e, C = {
    location: {
      page: S.AnalyticsPages.USER_PROFILE,
      section: a === f.UserProfileTypes.BITE_SIZE ? S.AnalyticsSections.PROFILE_POPOUT : S.AnalyticsSections.PROFILE_MODAL
    }
  }, g = (0, o.useStateFromStores)([I.default], () => I.default.getCurrentUser()), L = (null == N ? void 0 : N.id) === (null == g ? void 0 : g.id), [v, D] = r.useState(1), {
    emoji: M
  } = null != t ? t : {}, y = null != M, P = (null == t ? void 0 : t.state) != null && "" !== t.state ? t.state : null, U = null != P && P.length > 0, b = y || U, G = !b && L, w = r.useCallback(e => {
    var t;
    if (null == e) return;
    let n = e.getBoundingClientRect(),
      i = parseFloat(null !== (t = window.getComputedStyle(e).getPropertyValue("line-height")) && void 0 !== t ? t : "0"),
      r = n.height;
    i > 0 && r > 0 && D(Math.floor(r / i))
  }, []), B = (0, E.useResizeObserver)(w);
  if (r.useLayoutEffect(() => {
      setTimeout(() => {
        w(B.current)
      }, 200)
    }, [B, w]), !L && !b) return null;
  let k = () => y ? U ? (0, i.jsx)(_.default, {
      className: A.statusEmojiInline,
      emojiId: M.id,
      emojiName: M.name,
      animated: !!M.animated
    }) : (0, i.jsx)(c.ActivityEmoji, {
      className: A.statusEmojiOnly,
      emoji: M,
      animate: O,
      hideTooltip: R
    }) : null,
    V = () => U ? (0, i.jsx)(d.Text, {
      variant: m,
      className: A.statusText,
      children: P
    }) : null,
    x = () => {
      if (!b || !L) return null;
      let e = y && !U;
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: s()(A.editGradient, e && A.editGradientEmojiOnly)
        }), (0, i.jsx)(d.Clickable, {
          className: s()(A.editClickable, e && A.editClickableEmojiOnly),
          onClick: F,
          children: (0, i.jsx)(u.PencilIcon, {
            width: 16,
            height: 16
          })
        })]
      })
    },
    F = () => {
      (0, T.trackUserProfileAction)({
        action: "PRESS_SET_CUSTOM_STATUS"
      }), null == p || p(), (0, d.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("47484")]).then(n.bind(n, "211065"));
        return t => (0, i.jsx)(e, {
          ...t,
          sourceAnalyticsContext: C
        })
      })
    },
    H = () => b || !L ? null : (0, i.jsxs)(d.Clickable, {
      onClick: F,
      className: A.content,
      children: [(0, i.jsx)(l.CirclePlusIcon, {
        className: A.addStatusIcon,
        colorClass: A.addStatusIconColor
      }), (0, i.jsx)(d.Text, {
        variant: m,
        className: A.addStatusPrompt,
        children: h.default.Messages.USER_SETTINGS_ADD_STATUS
      })]
    }),
    Y = () => {
      let e = s()({
        [A.content]: y && !U || v < 2,
        [A.contentOverflow]: v >= 2
      });
      return (0, i.jsxs)("div", {
        className: e,
        ref: B,
        children: [x(), k(), V()]
      })
    },
    j = s()(A.positionStyle, {
      [A.biteSize]: a === f.UserProfileTypes.BITE_SIZE,
      [A.fullSize]: a === f.UserProfileTypes.FULL_SIZE
    }),
    W = s()(A.statusBubbleOuter, {
      [A.statusBubbleShape]: 1 === v && !U && y || v > 1,
      [A.statusBubbleSingleLineWithTextShape]: 1 === v && U || G,
      [A.biteSize]: a === f.UserProfileTypes.BITE_SIZE,
      [A.fullSize]: a === f.UserProfileTypes.FULL_SIZE
    }),
    K = s()(A.statusBubble, {
      [A.statusBubbleShape]: 1 === v && !U && y || v > 1,
      [A.statusBubbleSingleLineWithTextShape]: 1 === v && U || G,
      [A.statusBubbleEmojiOnlyPadding]: y && !U,
      [A.statusBubbleWithTextPadding]: U || G,
      [A.statusBubbleWithTextMinWidth]: U,
      [A.statusBubbleCopyStatusCursor]: b,
      [A.statusBubbleAddStatusCursor]: G
    });
  if (a === f.UserProfileTypes.FULL_SIZE) return (0, i.jsx)("div", {
    className: j,
    children: (0, i.jsx)("div", {
      className: W,
      children: (0, i.jsxs)("span", {
        className: K,
        children: [H(), Y()]
      })
    })
  });
  let z = s()({
    [A.statusBubbleEmojiOnlyBottomMargin]: y && !U,
    [A.statusBubbleMultiLineBottomMargin]: v > 1 && U
  });
  return (0, i.jsx)("div", {
    className: z,
    children: (0, i.jsx)("div", {
      className: j,
      children: (0, i.jsx)("div", {
        className: W,
        children: (0, i.jsxs)("span", {
          className: K,
          children: [H(), Y()]
        })
      })
    })
  })
}