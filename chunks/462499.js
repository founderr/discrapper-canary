n.r(l), n.d(l, {
  default: function() {
    return S
  }
}), n(47120);
var a = n(735250),
  s = n(470079),
  r = n(658722),
  i = n.n(r),
  o = n(399606),
  t = n(481060),
  d = n(471445),
  c = n(734893),
  u = n(208567),
  h = n(592125),
  m = n(984933),
  N = n(430824),
  x = n(153124),
  I = n(768581),
  E = n(969632),
  v = n(580357),
  C = n(689938),
  g = n(525480);

function R(e, l, n, a) {
  return {
    channelId: e.value,
    title: l,
    description: n,
    emoji: null,
    icon: null != a ? a : null
  }
}

function S(e) {
  var l, n;
  let {
    transitionState: r,
    onClose: S,
    resourceChannel: _,
    guildId: j,
    onSave: L,
    onDelete: p,
    onIconUpload: O
  } = e, G = (0, x.Dt)(), [T, D] = s.useState(null !== (l = null == _ ? void 0 : _.title) && void 0 !== l ? l : ""), [Z, A] = s.useState(null !== (n = null == _ ? void 0 : _.description) && void 0 !== n ? n : ""), [U, B] = s.useState(function(e) {
    if (null == e) return null;
    let l = h.Z.getChannel(e.channelId);
    return null == l ? null : {
      value: l.id,
      label: l.name
    }
  }(_)), b = (0, o.e7)([E.Z], () => {
    var e;
    return null === (e = E.Z.getResourceChannel(null == _ ? void 0 : _.channelId)) || void 0 === e ? void 0 : e.icon
  }), k = (0, o.Wu)([E.Z], () => {
    var e, l;
    return (null !== (l = null === (e = E.Z.getSettings()) || void 0 === e ? void 0 : e.resourceChannels) && void 0 !== l ? l : []).map(e => e.channelId)
  }), M = T.length < c.n || null == U, f = s.useCallback(() => {
    null != U && !(T.length <= 0) && (L(R(U, T, Z, b)), S())
  }, [L, S, T, U, b, Z]), P = s.useCallback(() => {
    null == p || p(), S()
  }, [p, S]), H = s.useCallback(e => {
    B(e)
  }, [B]), y = s.useCallback(e => Promise.resolve(m.ZP.getSelectableChannels(j).filter(l => (0, c.k3)(l.channel) && !k.includes(l.channel.id) && i()(e, l.channel.name)).map(e => ({
    value: e.channel.id,
    label: e.channel.name
  }))), [j, k]), z = s.useCallback(e => {
    if (null == e || null == j) return null;
    let l = h.Z.getChannel(e.value),
      n = N.Z.getGuild(j);
    if (null == l || null == n) return null;
    let s = (0, d.KS)(l, n);
    return null == s ? null : (0, a.jsx)(s, {
      size: "xs",
      color: "currentColor",
      className: g.channelIcon
    })
  }, [j]), V = s.useCallback(e => {
    null != O && null != U && O(R(U, T, Z), e)
  }, [U, T, O, Z]), w = s.useCallback(() => null == b || null == U ? null : I.ZP.getResourceChannelIconURL({
    channelId: U.value,
    icon: b
  }), [U, b]);
  return (0, a.jsxs)(t.ModalRoot, {
    transitionState: r,
    "aria-labelledby": G,
    children: [(0, a.jsxs)("div", {
      className: g.containerWithHeader,
      children: [(0, a.jsxs)("div", {
        className: g.splitGroup,
        children: [(0, a.jsx)("div", {
          className: g.header,
          children: (0, a.jsx)(t.Heading, {
            variant: "heading-md/semibold",
            color: "header-primary",
            children: C.Z.Messages.GUILD_SETTINGS_ONBOARDING_RESOURCE_CHANNEL_EDIT_TITLE
          })
        }), (0, a.jsx)(t.ModalCloseButton, {
          className: g.closeButton,
          onClick: S
        })]
      }), (0, a.jsxs)("div", {
        className: g.formGroup,
        children: [(0, a.jsxs)(t.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [C.Z.Messages.GUILD_SETTINGS_ONBOARDING_RESOURCE_CHANNEL, (0, a.jsx)(v.Z, {})]
        }), (0, a.jsx)(t.SearchableSelect, {
          value: U,
          renderOptionPrefix: z,
          options: y,
          onChange: H
        }), (0, a.jsx)(t.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: C.Z.Messages.GUILD_SETTINGS_ONBOARDING_RESOURCE_CHANNEL_EXPLAINER
        })]
      }), (0, a.jsx)("div", {
        className: g.separator
      }), (0, a.jsxs)("div", {
        className: g.formGroup,
        children: [(0, a.jsxs)(t.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [C.Z.Messages.GUILD_SETTINGS_ONBOARDING_RESOURCE_TITLE, (0, a.jsx)(v.Z, {})]
        }), (0, a.jsx)(t.TextInput, {
          value: T,
          onChange: D,
          placeholder: C.Z.Messages.GUILD_SETTINGS_ONBOARDING_RESOURCE_TITLE_PLACEHOLDER,
          maxLength: c.am
        })]
      }), (0, a.jsx)("div", {
        className: g.separator
      }), (0, a.jsxs)("div", {
        className: g.formGroup,
        children: [(0, a.jsx)(t.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: C.Z.Messages.GUILD_SETTINGS_ONBOARDING_RESOURCE_DESCRIPTION
        }), (0, a.jsx)(t.TextArea, {
          value: Z,
          onChange: A,
          placeholder: C.Z.Messages.GUILD_SETTINGS_ONBOARDING_RESOURCE_DESCRIPTION_PLACEHOLDER,
          maxLength: c.Vu
        })]
      }), (0, a.jsx)("div", {
        className: g.separator
      }), (0, a.jsxs)("div", {
        className: g.splitGroup,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(t.Heading, {
            variant: "heading-md/semibold",
            color: "header-primary",
            children: C.Z.Messages.GUILD_SETTINGS_ONBOARDING_RESOURCE_UPLOAD
          }), (0, a.jsx)(t.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: C.Z.Messages.GUILD_SETTINGS_ONBOARDING_RESOURCE_UPLOAD_EXPLAINER
          })]
        }), (0, a.jsx)("div", {
          children: (0, a.jsx)(u.Z, {
            className: g.uploader,
            imageClassName: g.uploadImage,
            image: b,
            makeURL: w,
            icon: (0, a.jsx)(t.UploadIcon, {
              size: "md",
              color: "currentColor"
            }),
            hideSize: !0,
            onChange: V,
            iconClassName: g.uploadImageIcon,
            showIcon: null == b
          })
        })]
      })]
    }), (0, a.jsx)(t.ModalFooter, {
      children: (0, a.jsxs)("div", {
        className: g.footerButtons,
        children: [null != _ ? (0, a.jsx)("div", {
          className: g.removeButton,
          children: (0, a.jsx)(t.Button, {
            size: t.Button.Sizes.SMALL,
            look: t.Button.Looks.LINK,
            color: t.Button.Colors.RED,
            onClick: P,
            children: C.Z.Messages.REMOVE
          })
        }) : (0, a.jsx)("div", {}), (0, a.jsxs)("div", {
          className: g.rightButtons,
          children: [(0, a.jsx)(t.Button, {
            onClick: S,
            size: t.Button.Sizes.SMALL,
            look: t.Button.Looks.LINK,
            color: t.Button.Colors.PRIMARY,
            children: C.Z.Messages.CANCEL
          }), (0, a.jsx)(t.Button, {
            disabled: M,
            onClick: f,
            children: C.Z.Messages.SAVE
          })]
        })]
      })
    })]
  })
}