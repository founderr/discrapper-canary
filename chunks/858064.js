"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("735250");
n("470079");
var a = n("442837"),
  s = n("481060"),
  i = n("230711"),
  r = n("314897"),
  o = n("465670"),
  u = n("626135"),
  d = n("730417"),
  c = n("524347"),
  f = n("702512"),
  h = n("981631"),
  m = n("689938"),
  C = n("477237");
let p = (e, t, n) => {
  let l = t.assets.tooltipSrc;
  switch (e) {
    case f.TooltipActions.STREAM_CTA:
      return {
        header: m.default.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({
          gameName: t.title
        }), body: t.messages.enrollmentTooltip(n), imgSrc: l, imgStyle: C.dropImgPreStreamNotice
      };
    case f.TooltipActions.TRACK_PROGRESS:
      return {
        header: m.default.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({
          gameName: t.title
        }), body: "", imgSrc: l, imgStyle: C.dropImgProgressTracker
      };
    case f.TooltipActions.QUEST_COMPLETION:
      return {
        header: m.default.Messages.DROPS_QUEST_COMPLETION_TOOLTIP_HEADER, body: t.messages.completionTooltip(n), imgSrc: l, imgStyle: C.dropImgQuestCompletion
      };
    case f.TooltipActions.LOADING_INITIAL_PROGRESS:
      return {
        header: "", body: "", imgSrc: l, imgStyle: C.dropImgPreStreamNotice
      }
  }
};

function g(e) {
  let {
    streamLengthRequirement: t,
    viewerCountRequirement: n
  } = e, i = (0, a.useStateFromStores)([c.default], () => c.default.currentDropQuestStreamProgress), r = Math.floor(i / 100 * t).toString();
  return (0, l.jsxs)("div", {
    children: [(0, l.jsx)(s.Text, {
      variant: "text-sm/bold",
      className: C.progressBarCount,
      children: m.default.Messages.DROPS_STREAM_PROGRESS_INDICATOR.format({
        minutesStreamed: r,
        streamLengthRequirement: t
      })
    }), (0, l.jsx)("div", {
      className: C.progressBarContainer,
      children: (0, l.jsx)("div", {
        className: C.progressBarOuter,
        children: (0, l.jsx)("div", {
          className: C.progressBarInner,
          style: {
            width: "".concat(i, "%")
          }
        })
      })
    }), (0, l.jsxs)(s.Text, {
      variant: "text-xs/medium",
      className: C.viewerCount,
      children: ["*", m.default.Messages.DROPS_REQUIRE_NUM_VIEWERS.format({
        numViewers: n
      }), "*"]
    })]
  })
}

function E(e) {
  let {
    onClose: t,
    tooltipAction: n,
    partnerGame: c
  } = e, E = (0, d.useDropsExperiment)(c);
  (0, d.useFetchInitialDropProgress)(c);
  let _ = (0, a.useStateFromStores)([r.default], () => r.default.getId());
  if (null == E) return null;
  let {
    streamLengthRequirement: S,
    viewerCountRequirement: I
  } = E.config, N = E.drop, {
    header: T,
    body: A,
    imgSrc: L,
    imgStyle: v
  } = p(n, N, S), x = () => {
    u.default.track(h.AnalyticEvents.DROPS_ACTIVITY_PANEL_POPOVER_CTA_CLICK, {
      user_id: _,
      drops_quest_id: N.dropsQuestId,
      game_id: N.dropsGameId,
      game_name: N.title.toLowerCase(),
      tooltip_action: n
    })
  }, R = () => {
    t()
  };
  return (0, l.jsxs)("div", {
    className: C.container,
    children: [(0, l.jsx)("img", {
      src: L,
      alt: "",
      className: v
    }), (0, l.jsx)(s.Clickable, {
      className: C.__invalid_buttonClose,
      "aria-label": m.default.Messages.CLOSE,
      onClick: R,
      children: (0, l.jsx)(o.default, {
        width: 16,
        height: 16,
        className: C.closeIcon
      })
    }), n === f.TooltipActions.LOADING_INITIAL_PROGRESS ? (0, l.jsx)(s.Spinner, {
      className: C.spinner
    }) : (0, l.jsx)(s.Heading, {
      className: C.title,
      variant: "heading-md/extrabold",
      children: T
    }), n === f.TooltipActions.TRACK_PROGRESS ? (0, l.jsx)(g, {
      streamLengthRequirement: S,
      viewerCountRequirement: I
    }) : (0, l.jsx)(s.Text, {
      variant: "text-sm/medium",
      className: C.subTitle,
      children: A
    }), n === f.TooltipActions.QUEST_COMPLETION ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(s.Button, {
        look: s.Button.Looks.INVERTED,
        fullWidth: !0,
        onClick: () => {
          t(), i.default.open(h.UserSettingsSections.INVENTORY), x()
        },
        children: m.default.Messages.REDEEM
      }), (0, l.jsx)(s.Button, {
        className: C.linkButtonContainer,
        innerClassName: C.linkButton,
        onClick: R,
        look: s.Button.Looks.LINK,
        fullWidth: !0,
        color: s.Button.Colors.WHITE,
        children: m.default.Messages.NOT_NOW
      })]
    }) : (0, l.jsx)(s.Button, {
      look: s.Button.Looks.INVERTED,
      fullWidth: !0,
      onClick: () => {
        t(), i.default.open(h.UserSettingsSections.INVENTORY), x()
      },
      children: m.default.Messages.LEARN_MORE
    }), (0, l.jsx)("div", {
      className: C.pointer
    })]
  })
}