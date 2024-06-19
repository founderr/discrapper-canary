t.d(n, {
  Z: function() {
    return S
  }
}), t(653041);
var s = t(735250);
t(470079);
var l = t(442837),
  a = t(481060),
  i = t(594174),
  r = t(311888),
  o = t(63063),
  c = t(5192),
  d = t(431328),
  u = t(501655),
  E = t(659972),
  _ = t(981631),
  T = t(765305),
  N = t(689938),
  h = t(39898);

function I(e) {
  let {
    icon: n
  } = e;
  return (0, s.jsx)("div", {
    className: h.iconContainer,
    children: (0, s.jsx)(n, {
      color: "currentColor",
      size: "md"
    })
  })
}

function x(e) {
  let {
    icon: n,
    text: t
  } = e;
  return (0, s.jsxs)("div", {
    className: h.listItemContainer,
    children: [(0, s.jsx)("div", {
      className: h.listItemIconContainer,
      children: n
    }), (0, s.jsx)(a.Text, {
      className: h.listItemText,
      variant: "text-md/normal",
      color: "header-secondary",
      children: t
    })]
  })
}

function m(e) {
  var n;
  let {
    guild: t,
    channel: a,
    stageData: r
  } = e, o = (0, l.e7)([i.default], () => i.default.getCurrentUser(), []), _ = {
    id: "1337",
    guild_id: t.id,
    channel_id: a.id,
    topic: r.topic,
    description: r.description,
    privacy_level: null !== (n = r.privacyLevel) && void 0 !== n ? n : T.j8.PUBLIC
  }, N = (0, d.w8)(a.id, u.pV.SPEAKER), I = (0, d.Rk)(a.id, u.pV.AUDIENCE), x = N.slice(0, 5);
  return null == x.find(e => {
    var n;
    return (null === (n = e.user) || void 0 === n ? void 0 : n.id) === (null == o ? void 0 : o.id)
  }) && x.push({
    user: o,
    userNick: c.ZP.getName(t.id, a.id, o)
  }), (0, s.jsx)("div", {
    className: h.previewCardContainer,
    children: (0, s.jsx)("div", {
      className: h.previewCard,
      children: (0, s.jsx)(E.Z, {
        guild: t,
        stageInstance: _,
        showGuildPopout: !1,
        setShowGuildPopout: () => {},
        source: E.k.UNSPECIFIED,
        speakers: x,
        speakerCount: N.length,
        audienceCount: Math.max(1337, I),
        channelName: a.name
      })
    })
  })
}

function S(e) {
  let {
    guild: n,
    channel: t,
    stageData: l,
    headerId: i,
    loading: c,
    onNext: d,
    onCancel: u,
    onBack: E
  } = e;
  return null == n || null == t || null == l ? null : (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(m, {
      guild: n,
      channel: t,
      stageData: l
    }), (0, s.jsxs)(a.ModalContent, {
      className: h.container,
      children: [(0, s.jsxs)("div", {
        className: h.header,
        children: [(0, s.jsx)(a.Heading, {
          id: i,
          className: h.__invalid_title,
          variant: "heading-xl/semibold",
          children: N.Z.Messages.START_STAGE_PUBLIC_PREVIEW_TITLE
        }), (0, s.jsx)(a.Text, {
          className: h.subtitle,
          color: "header-secondary",
          variant: "text-sm/normal",
          children: N.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SUBTITLE
        })]
      }), (0, s.jsxs)("div", {
        className: h.__invalid_list,
        children: [(0, s.jsx)(x, {
          icon: (0, s.jsx)(I, {
            icon: a.CompassIcon
          }),
          text: N.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_ONE
        }), (0, s.jsx)(x, {
          icon: (0, s.jsx)(I, {
            icon: a.FriendsIcon
          }),
          text: N.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_TWO
        }), (0, s.jsx)(x, {
          icon: (0, s.jsx)(I, {
            icon: a.PencilIcon
          }),
          text: N.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_THREE
        }), (0, s.jsx)(x, {
          icon: (0, s.jsx)(r.Z, {
            className: h.badgeIconBackground,
            foreground: h.badgeIconForeground,
            width: 40,
            height: 40
          }),
          text: N.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_FOUR.format({
            articleURL: o.Z.getArticleURL(_.BhN.STAGE_CHANNEL_GUIDELINES)
          })
        })]
      })]
    }), (0, s.jsxs)(a.ModalFooter, {
      children: [(0, s.jsx)(a.Button, {
        color: a.Button.Colors.GREEN,
        onClick: d,
        submitting: c,
        children: N.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
      }), (0, s.jsx)(a.Button, {
        color: a.Button.Colors.PRIMARY,
        className: h.cancelButton,
        onClick: u,
        children: N.Z.Messages.CANCEL
      }), (0, s.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.LINK,
        className: h.backButton,
        onClick: E,
        size: a.Button.Sizes.MIN,
        children: N.Z.Messages.BACK
      })]
    })]
  })
}