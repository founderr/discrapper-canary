s.r(a), s.d(a, {
  default: function() {
    return _
  }
}), s(47120);
var l = s(735250),
  t = s(470079),
  n = s(392711),
  i = s.n(n),
  r = s(442837),
  o = s(481060),
  c = s(741361),
  d = s(596454),
  x = s(447003),
  m = s(471445),
  h = s(605436),
  u = s(633302),
  T = s(984933),
  j = s(153124),
  E = s(689938),
  N = s(683135);

function v(e) {
  var a, t, n;
  let {
    onClose: i,
    handleReviewPermissions: r
  } = e, c = e => (0, l.jsx)(o.Text, {
    tag: "span",
    variant: "text-md/medium",
    color: "header-primary",
    children: e
  });
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(o.ModalContent, {
      className: N.infoContent,
      children: [(0, l.jsxs)("div", {
        className: N.modalHeader,
        children: [(0, l.jsx)("img", {
          className: N.modalImage,
          "data-accessibility": "desaturate",
          alt: "",
          src: s(592614)
        }), (0, l.jsx)(o.Heading, {
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: E.Z.Messages.GUILD_SETTINGS_DEPRIVATE_MODAL_HEADER
        })]
      }), (0, l.jsxs)("ul", {
        children: [(0, l.jsxs)("li", {
          className: N.infoListItem,
          children: [(0, l.jsx)("div", {
            className: N.iconWrapper,
            children: (0, l.jsx)(d.Z, {
              emojiName: null === (a = u.ZP.getByName("eyes")) || void 0 === a ? void 0 : a.surrogates
            })
          }), (0, l.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: E.Z.Messages.GUILD_SETTINGS_DEPRIVATE_EXPLAINER_1.format({
              emphasisHook: c
            })
          })]
        }), (0, l.jsxs)("li", {
          className: N.infoListItem,
          children: [(0, l.jsx)("div", {
            className: N.iconWrapper,
            children: (0, l.jsx)(d.Z, {
              emojiName: null === (t = u.ZP.getByName("star_struck")) || void 0 === t ? void 0 : t.surrogates
            })
          }), (0, l.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: E.Z.Messages.GUILD_SETTINGS_DEPRIVATE_EXPLAINER_2.format({
              emphasisHook: c
            })
          })]
        }), (0, l.jsxs)("li", {
          className: N.infoListItem,
          children: [(0, l.jsx)("div", {
            className: N.iconWrapper,
            children: (0, l.jsx)(d.Z, {
              emojiName: null === (n = u.ZP.getByName("books")) || void 0 === n ? void 0 : n.surrogates
            })
          }), (0, l.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: E.Z.Messages.GUILD_SETTINGS_DEPRIVATE_EXPLAINER_3.format({
              emphasisHook: c
            })
          })]
        })]
      })]
    }), (0, l.jsxs)(o.ModalFooter, {
      children: [(0, l.jsx)(o.Button, {
        onClick: r,
        children: (0, l.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "always-white",
          children: E.Z.Messages.GUILD_SETTINGS_REVIEW_PERMISSIONS
        })
      }), (0, l.jsx)(o.Button, {
        className: N.__invalid_modalCancel,
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.PRIMARY,
        onClick: i,
        children: (0, l.jsx)(o.Text, {
          variant: "text-md/medium",
          children: E.Z.Messages.CANCEL
        })
      })]
    })]
  })
}

function I(e) {
  var a;
  let {
    channel: s,
    selected: n,
    onChange: i
  } = e, r = null !== (a = (0, m.KS)(s)) && void 0 !== a ? a : o.TextIcon, c = t.useCallback(() => {
    i(s)
  }, [s, i]);
  return (0, l.jsxs)(o.Clickable, {
    "aria-label": s.name,
    "aria-checked": n,
    className: N.selectableChannelRow,
    onClick: c,
    children: [(0, l.jsxs)("div", {
      className: N.selectableChannelCellFirst,
      children: [(0, l.jsx)(r, {
        className: N.channelIcon,
        size: "xs",
        color: "currentColor"
      }), (0, l.jsx)(o.Text, {
        className: N.__invalid_channelName,
        variant: "text-md/medium",
        color: "text-normal",
        lineClamp: 1,
        children: s.name
      })]
    }), (0, l.jsx)("div", {
      className: N.selectableChannelCellSecond,
      children: (0, l.jsx)(o.Checkbox, {
        type: o.Checkbox.Types.INVERTED,
        value: n,
        displayOnly: !0
      })
    })]
  })
}

function _(e) {
  let {
    transitionState: a,
    onClose: s,
    guildId: n,
    startingChannelId: d
  } = e, m = (0, r.Wu)([T.ZP], () => {
    var e, a;
    let s = T.ZP.getChannels(n);
    return (null !== (e = s[T.sH]) && void 0 !== e ? e : []).concat(null !== (a = s[T.Zb]) && void 0 !== a ? a : []).filter(e => (0, x.Z)(e.channel)).map(e => e.channel)
  }), [u, _] = t.useState(0), C = m.find(e => e.id === d), [S, g] = t.useState(null != C ? [C] : []), L = (0, j.Dt)(), p = S.length === m.length, b = t.useCallback(() => {
    _(1)
  }, [_]), k = t.useCallback(e => {
    g(a => a.includes(e) ? [...i().pull(a, e)] : [...a, e])
  }, [g]), M = t.useCallback(() => {
    p ? g([]) : g(m)
  }, [p, m, g]), A = t.useCallback(() => {
    S.forEach(e => {
      let a = (0, h._A)(e, e.accessPermissions, !0);
      (0, c.hw)(e.id, [a]), s()
    })
  }, [S, s]);
  return 0 === u ? (0, l.jsx)(o.ModalRoot, {
    transitionState: a,
    "aria-labelledby": L,
    size: o.ModalSize.SMALL,
    children: (0, l.jsx)(v, {
      handleReviewPermissions: b,
      onClose: s
    })
  }) : (0, l.jsxs)(o.ModalRoot, {
    transitionState: a,
    "aria-labelledby": L,
    size: o.ModalSize.SMALL,
    children: [(0, l.jsxs)(o.ModalContent, {
      className: N.updateContent,
      children: [(0, l.jsxs)("div", {
        className: N.modalHeader,
        children: [(0, l.jsx)(o.Heading, {
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: E.Z.Messages.GUILD_SETTINGS_DEPRIVATE_TITLE
        }), (0, l.jsx)(o.Text, {
          className: N.__invalid_modalSubheader,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: E.Z.Messages.GUILD_SETTINGS_DEPRIVATE_SUBTITLE
        })]
      }), (0, l.jsxs)("div", {
        className: N.selectAllContainer,
        children: [(0, l.jsx)(o.Text, {
          className: N.selectAllTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: E.Z.Messages.GUILD_SETTINGS_DEPRIVATE_CHANNEL_COUNT.format({
            count: m.length
          })
        }), (0, l.jsxs)(o.Clickable, {
          "aria-label": E.Z.Messages.SELECT_ALL,
          className: N.selectAllButton,
          onClick: M,
          children: [(0, l.jsx)(o.Text, {
            variant: "text-xs/normal",
            children: E.Z.Messages.SELECT_ALL
          }), (0, l.jsx)(o.Checkbox, {
            size: 16,
            type: o.Checkbox.Types.INVERTED,
            value: p,
            displayOnly: !0
          })]
        })]
      }), (0, l.jsx)("div", {
        className: N.deprivateTableBody,
        children: m.map(e => (0, l.jsx)(I, {
          channel: e,
          selected: S.includes(e),
          onChange: k
        }, e.id))
      }), (0, l.jsx)("div", {
        className: N.deprivateExplainer,
        children: (0, l.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: E.Z.Messages.GUILD_SETTINGS_DEPRIVATE_EXPLAINER_4.format({
            emphasisHook: e => (0, l.jsx)(o.Text, {
              tag: "span",
              variant: "text-xs/medium",
              color: "interactive-active",
              children: e
            }),
            brandHook: e => (0, l.jsx)(o.Text, {
              tag: "span",
              variant: "text-xs/normal",
              color: "text-brand",
              children: e
            })
          })
        })
      })]
    }), (0, l.jsxs)(o.ModalFooter, {
      className: N.modalFooter,
      children: [(0, l.jsx)(o.Button, {
        disabled: 0 === S.length,
        onClick: A,
        children: (0, l.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "always-white",
          children: E.Z.Messages.GUILD_SETTINGS_UPDATE_PERMISSIONS
        })
      }), (0, l.jsx)(o.Button, {
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.PRIMARY,
        onClick: s,
        children: (0, l.jsx)(o.Text, {
          variant: "text-md/medium",
          children: E.Z.Messages.CANCEL
        })
      })]
    })]
  })
}