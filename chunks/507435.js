n.d(t, {
  Z: function() {
    return f
  }
});
var s, i, l = n(735250),
  a = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(468194),
  u = n(481060),
  d = n(904245),
  E = n(596454),
  _ = n(377171),
  I = n(702346),
  T = n(809026),
  m = n(139256),
  N = n(489887),
  h = n(689938),
  C = n(872806);

function S() {
  return (0, l.jsx)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: _.Z.INTERACTIVE_NORMAL,
    "aria-hidden": !0,
    children: (0, l.jsx)("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM5.70711 9.29289C5.31658 8.90237 4.68342 8.90237 4.29289 9.29289C3.90237 9.68342 3.90237 10.3166 4.29289 10.7071L5.08579 11.5L4.29289 12.2929C3.90237 12.6834 3.90237 13.3166 4.29289 13.7071C4.68342 14.0976 5.31658 14.0976 5.70711 13.7071L6.5 12.9142L7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071C9.09763 13.3166 9.09763 12.6834 8.70711 12.2929L7.91421 11.5L8.70711 10.7071C9.09763 10.3166 9.09763 9.68342 8.70711 9.29289C8.31658 8.90237 7.68342 8.90237 7.29289 9.29289L6.5 10.0858L5.70711 9.29289ZM15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289L17.5 10.0858L18.2929 9.29289C18.6834 8.90237 19.3166 8.90237 19.7071 9.29289C20.0976 9.68342 20.0976 10.3166 19.7071 10.7071L18.9142 11.5L19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071C19.3166 14.0976 18.6834 14.0976 18.2929 13.7071L17.5 12.9142L16.7071 13.7071C16.3166 14.0976 15.6834 14.0976 15.2929 13.7071C14.9024 13.3166 14.9024 12.6834 15.2929 12.2929L16.0858 11.5L15.2929 10.7071C14.9024 10.3166 14.9024 9.68342 15.2929 9.29289ZM9.08869 17.5563C8.78148 18.0152 8.16038 18.1382 7.70142 17.831C7.24247 17.5238 7.11947 16.9027 7.42669 16.4437C8.41166 14.9723 10.092 14 11.9999 14C13.9078 14 15.5881 14.9723 16.5731 16.4437C16.8803 16.9027 16.7573 17.5238 16.2984 17.831C15.8394 18.1382 15.2183 18.0152 14.9111 17.5563C14.2815 16.6158 13.2124 16 11.9999 16C10.7874 16 9.71825 16.6158 9.08869 17.5563Z",
      fill: "currentColor"
    })
  })
}

function A(e) {
  let t, {
    hasNoVotes: n,
    victorEmoji: s
  } = e;
  if (n) t = (0, l.jsx)(S, {});
  else if (null != s) {
    let e = "" !== s.name ? s.name : s.displayName;
    t = (0, l.jsx)(E.Z, {
      emojiId: s.id,
      emojiName: e,
      animated: s.animated
    })
  }
  return null != t ? (0, l.jsx)("div", {
    className: C.imageContainer,
    children: t
  }) : null
}(s = i || (i = {})).NO_VOTES = "NO_VOTES", s.VICTOR = "VICTOR", s.TIE = "TIE";

function g(e) {
  let t, {
    type: n,
    ...s
  } = e;
  switch (n) {
    case "NO_VOTES":
      t = (0, l.jsx)(u.Text, {
        variant: "text-sm/semibold",
        color: "text-normal",
        scaleFontToUserSetting: !0,
        children: h.Z.Messages.POLL_RESULT_NO_VOTERS
      });
      break;
    case "VICTOR":
      let {
        victorAnswerText: i, victorVotePercentage: a
      } = s;
      t = (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)("div", {
          className: C.victorAnswer,
          children: [(0, l.jsx)(u.Text, {
            variant: "text-sm/semibold",
            color: "text-normal",
            className: C.victorAnswerText,
            scaleFontToUserSetting: !0,
            children: i
          }), (0, l.jsx)(m.ZY, {
            size: 16,
            className: C.victorIcon,
            isVictor: !0,
            isExpired: !0
          })]
        }), (0, l.jsxs)(u.Text, {
          variant: "text-xs/medium",
          color: "input-placeholder-text",
          scaleFontToUserSetting: !0,
          children: [h.Z.Messages.POLL_RESULT_WINNING, " • ", a, "%"]
        })]
      });
      break;
    case "TIE":
      let {
        tiedVotePercentage: r
      } = s;
      t = (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(u.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          scaleFontToUserSetting: !0,
          children: h.Z.Messages.POLL_RESULT_TIED
        }), (0, l.jsxs)(u.Text, {
          variant: "text-xs/medium",
          color: "input-placeholder-text",
          scaleFontToUserSetting: !0,
          children: [r, "%"]
        })]
      })
  }
  return (0, l.jsx)("div", {
    className: C.description,
    children: t
  })
}

function p(e) {
  let {
    className: t,
    data: n,
    onClickPollLink: s
  } = e, i = a.useMemo(() => (function(e) {
    if (0 === e.totalVotes) return {
      type: "NO_VOTES"
    };
    let t = null != e.victorAnswerId,
      n = e.totalVotes > 0 ? Math.round(e.victorAnswerVotes / e.totalVotes * 100) : 0;
    return t ? {
      type: "VICTOR",
      victorAnswerText: e.victorAnswerText,
      victorVotePercentage: n
    } : {
      type: "TIE",
      tiedVotePercentage: n
    }
  })(n), [n]);
  return (0, l.jsxs)("div", {
    className: o()(C.container, t),
    children: [(0, l.jsx)(A, {
      hasNoVotes: "NO_VOTES" === i.type,
      victorEmoji: n.victorEmoji
    }), (0, l.jsx)(g, {
      ...i
    }), (0, l.jsx)(u.Button, {
      className: C.button,
      size: u.Button.Sizes.TINY,
      onClick: s,
      color: u.Button.Colors.PRIMARY,
      children: (0, l.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "none",
        scaleFontToUserSetting: !0,
        children: h.Z.Messages.POLL_RESULT_VIEW_POLL
      })
    })]
  })
}

function f(e) {
  var t;
  let {
    message: n,
    compact: s
  } = e, i = n.embeds[0], r = a.useMemo(() => (0, T.Z)(i), [i]), o = (0, c.aF)(null !== (t = null == r ? void 0 : r.questionText) && void 0 !== t ? t : "", N.Dv), E = n.messageReference, _ = a.useCallback(() => {
    null != E && d.Z.jumpToMessage({
      channelId: E.channel_id,
      messageId: E.message_id,
      flash: !0,
      returnMessageId: n.id
    })
  }, [n.id, E]);
  return null == r ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(I.Z, {
      iconNode: (0, l.jsx)(u.PollsIcon, {
        size: "xs"
      }),
      timestamp: n.timestamp,
      compact: s,
      children: h.Z.Messages.POLL_RESULT_MESSAGE_HEADER.format({
        title: o,
        titleOnClick: _
      })
    }), (0, l.jsx)(p, {
      className: C.embed,
      data: r,
      onClickPollLink: _
    })]
  })
}