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
  p = n("689938"),
  m = n("385473");
let C = (e, t, n) => {
  let l = t.assets.tooltipSrc;
  switch (e) {
    case f.TooltipActions.STREAM_CTA:
      return {
        header: p.default.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({
          gameName: t.title
        }), body: t.messages.enrollmentTooltip(n), imgSrc: l, imgStyle: m.dropImgPreStreamNotice
      };
    case f.TooltipActions.TRACK_PROGRESS:
      return {
        header: p.default.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({
          gameName: t.title
        }), body: "", imgSrc: l, imgStyle: m.dropImgProgressTracker
      };
    case f.TooltipActions.QUEST_COMPLETION:
      return {
        header: p.default.Messages.DROPS_QUEST_COMPLETION_TOOLTIP_HEADER, body: t.messages.completionTooltip(n), imgSrc: l, imgStyle: m.dropImgQuestCompletion
      };
    case f.TooltipActions.LOADING_INITIAL_PROGRESS:
      return {
        header: "", body: "", imgSrc: l, imgStyle: m.dropImgPreStreamNotice
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
      className: m.progressBarCount,
      children: p.default.Messages.DROPS_STREAM_PROGRESS_INDICATOR.format({
        minutesStreamed: r,
        streamLengthRequirement: t
      })
    }), (0, l.jsx)("div", {
      className: m.progressBarContainer,
      children: (0, l.jsx)("div", {
        className: m.progressBarOuter,
        children: (0, l.jsx)("div", {
          className: m.progressBarInner,
          style: {
            width: "".concat(i, "%")
          }
        })
      })
    }), (0, l.jsxs)(s.Text, {
      variant: "text-xs/medium",
      className: m.viewerCount,
      children: ["*", p.default.Messages.DROPS_REQUIRE_NUM_VIEWERS.format({
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
  let S = (0, a.useStateFromStores)([r.default], () => r.default.getId());
  if (null == E) return null;
  let {
    streamLengthRequirement: _,
    viewerCountRequirement: I
  } = E.config, N = E.drop, {
    header: T,
    body: A,
    imgSrc: L,
    imgStyle: v
  } = C(n, N, _), x = () => {
    u.default.track(h.AnalyticEvents.DROPS_ACTIVITY_PANEL_POPOVER_CTA_CLICK, {
      user_id: S,
      drops_quest_id: N.dropsQuestId,
      game_id: N.dropsGameId,
      game_name: N.title.toLowerCase(),
      tooltip_action: n
    })
  }, R = () => {
    t()
  };
  return (0, l.jsxs)("div", {
    className: m.container,
    children: [(0, l.jsx)("img", {
      src: L,
      alt: "",
      className: v
    }), (0, l.jsx)(s.Clickable, {
      className: m.__invalid_buttonClose,
      "aria-label": p.default.Messages.CLOSE,
      onClick: R,
      children: (0, l.jsx)(o.default, {
        width: 16,
        height: 16,
        className: m.closeIcon
      })
    }), n === f.TooltipActions.LOADING_INITIAL_PROGRESS ? (0, l.jsx)(s.Spinner, {
      className: m.spinner
    }) : (0, l.jsx)(s.Heading, {
      className: m.title,
      variant: "heading-md/extrabold",
      children: T
    }), n === f.TooltipActions.TRACK_PROGRESS ? (0, l.jsx)(g, {
      streamLengthRequirement: _,
      viewerCountRequirement: I
    }) : (0, l.jsx)(s.Text, {
      variant: "text-sm/medium",
      className: m.subTitle,
      children: A
    }), n === f.TooltipActions.QUEST_COMPLETION ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(s.Button, {
        look: s.Button.Looks.INVERTED,
        fullWidth: !0,
        onClick: () => {
          t(), i.default.open(h.UserSettingsSections.INVENTORY), x()
        },
        children: p.default.Messages.REDEEM
      }), (0, l.jsx)(s.Button, {
        className: m.linkButtonContainer,
        innerClassName: m.linkButton,
        onClick: R,
        look: s.Button.Looks.LINK,
        fullWidth: !0,
        color: s.Button.Colors.WHITE,
        children: p.default.Messages.NOT_NOW
      })]
    }) : (0, l.jsx)(s.Button, {
      look: s.Button.Looks.INVERTED,
      fullWidth: !0,
      onClick: () => {
        t(), i.default.open(h.UserSettingsSections.INVENTORY), x()
      },
      children: p.default.Messages.LEARN_MORE
    }), (0, l.jsx)("div", {
      className: m.pointer
    })]
  })
}