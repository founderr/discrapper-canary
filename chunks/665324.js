"use strict";
s.r(t), s.d(t, {
  default: function() {
    return F
  }
}), s("47120"), s("724458");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("525654"),
  o = s.n(r),
  d = s("442837"),
  u = s("846519"),
  c = s("481060"),
  E = s("232567"),
  _ = s("596454"),
  I = s("410030"),
  T = s("623624"),
  S = s("889161"),
  f = s("208049"),
  m = s("763296"),
  N = s("22382"),
  g = s("747071"),
  h = s("171368"),
  C = s("430824"),
  R = s("594174"),
  x = s("15385"),
  L = s("465670"),
  O = s("84017"),
  p = s("185403"),
  A = s("632184"),
  M = s("768581"),
  D = s("267642"),
  v = s("358085"),
  j = s("999382"),
  G = s("70409"),
  U = s("981631"),
  P = s("710111"),
  b = s("689938"),
  y = s("438927");
let B = v.isPlatformEmbedded || "Safari" !== o().name && "Firefox" !== o().name;

function F() {
  let e = (0, d.useStateFromStores)([j.default], () => j.default.getProps().guild);
  return null == e ? null : (0, a.jsx)(c.FormSection, {
    tag: c.FormTitleTags.H1,
    title: b.default.Messages.GUILD_SETTINGS_SOUNDBOARD,
    children: (0, a.jsx)(Y, {
      guild: e
    })
  })
}

function H(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(c.Heading, {
    className: y.tableHeader,
    variant: "heading-sm/semibold",
    color: "header-secondary",
    children: t
  })
}

function k(e) {
  let {
    currentTier: t,
    availableSounds: s,
    guildId: l
  } = e, n = C.default.getGuild(l), i = (0, D.getTotalSoundboardSoundCountForTier)(t, n);
  return 0 === t ? (0, a.jsx)(a.Fragment, {
    children: b.default.Messages.GUILD_SETTINGS_SOUND_LIST_SOUNDS_AVAILABLE.format({
      slots: s,
      totalSlots: i
    })
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(c.Tooltip, {
      text: b.default.Messages.GUILD_SETTINGS_SOUNDBOARD_BOOST_LEVEL.format({
        currentBoostLevel: t
      }),
      children: e => (0, a.jsx)(c.Clickable, {
        className: y.boostingIconWrapper,
        onClick: () => {
          var e;
          return e = l, void(0, T.openGuildBoostingMarketingModal)({
            guildId: e,
            location: {
              section: U.AnalyticsSections.GUILD_SETTINGS_SOUNDBOARD,
              object: U.AnalyticsObjects.BOOST_GEM_ICON
            }
          })
        },
        tabIndex: -1,
        children: (0, a.jsx)(x.default, {
          ...e
        })
      })
    }), b.default.Messages.GUILD_SETTINGS_SOUND_LIST_SOUNDS_AVAILABLE_BOOST_LEVEL.format({
      slots: s,
      totalSlots: i,
      boostLevel: t
    })]
  })
}
let w = e => {
    let {
      renderPopoutBody: t,
      renderPopoutChildren: s,
      ...n
    } = e, [i, r] = l.useState(!1), o = l.useMemo(() => new u.Timeout, []), d = l.useCallback(() => {
      o.stop(), r(!0)
    }, [o]), E = l.useCallback(() => {
      o.start(200, () => r(!1))
    }, [o]);
    return (0, a.jsx)(c.Popout, {
      shouldShow: i,
      renderPopout: e => (0, a.jsx)(c.Dialog, {
        className: y.browserUnsupportedDialog,
        onMouseEnter: d,
        onMouseLeave: E,
        children: t(e)
      }),
      ...n,
      children: e => s(e)
    })
  },
  V = () => (0, a.jsx)(w, {
    renderPopoutBody: () => (0, a.jsx)(c.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: b.default.Messages.GUILD_SETTINGS_SOUNDBOARD_UPLOAD_SOUND_NOT_SUPPORTED.format()
    }),
    renderPopoutChildren: e => (0, a.jsx)(c.Button, {
      ...e,
      disabled: !0,
      children: b.default.Messages.GUILD_SETTINGS_SOUNDBOARD_UPLOAD_SOUND
    })
  });

function Y(e) {
  let {
    guild: t
  } = e, [n, i] = (0, d.useStateFromStoresArray)([m.default], () => {
    var e;
    return [null !== (e = m.default.getSoundsForGuild(t.id)) && void 0 !== e ? e : P.EMPTY_SOUND_LIST, m.default.isFetchingSounds() || m.default.isFetchingDefaultSounds()]
  }), {
    canCreateExpressions: r
  } = (0, S.useManageResourcePermissions)(t), o = l.useRef(null), u = (0, I.default)(), E = t.premiumTier, _ = (0, D.getAvailableSoundboardSoundCount)(t, n, E);
  l.useEffect(() => {
    (0, f.maybeFetchSoundboardSounds)()
  }, []);
  let T = l.useMemo(() => n.reduce((e, t) => (e[t.soundId] = new Audio((0, N.default)(t.soundId)), e), {}), [n]),
    h = 0 === n.length && !i;

  function C(e) {
    var t;
    null === (t = o.current) || void 0 === t || t.pause();
    let s = T[e.soundId];
    null != s && (o.current = s, s.currentTime = 0, s.volume = (0, g.default)(e.volume), s.play())
  }
  l.useEffect(() => () => {
    var e;
    null === (e = o.current) || void 0 === e || e.pause()
  }, []);
  if (i) return (0, a.jsx)(c.Spinner, {});
  let R = B ? (0, a.jsx)(c.Button, {
    onClick: function() {
      (0, c.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("49237"), s.e("99387"), s.e("56035")]).then(s.bind(s, "758961"));
        return s => (0, a.jsx)(e, {
          ...s,
          guildId: t.id
        })
      })
    },
    disabled: _ <= 0 || !r,
    children: b.default.Messages.GUILD_SETTINGS_SOUNDBOARD_UPLOAD_SOUND
  }) : (0, a.jsx)(V, {});
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsx)(c.Text, {
        className: y.helpText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: b.default.Messages.GUILD_SETTINGS_SOUNDBOARD_DESCRIPTION
      }), (0, a.jsx)("div", {
        className: y.buttons,
        children: !h && R
      })]
    }), h ? (0, a.jsxs)(c.EmptyState, {
      theme: u,
      className: y.empty,
      children: [(0, a.jsx)(c.EmptyStateImage, {
        darkSrc: s("458601"),
        lightSrc: s("673557"),
        width: 272,
        height: 212
      }), (0, a.jsx)(c.EmptyStateText, {
        note: b.default.Messages.NO_SOUNDS,
        noteClassName: y.emptyText,
        children: b.default.Messages.NO_SOUNDS_TITLE
      }), R]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(c.FormDivider, {
        className: y.divider
      }), (0, a.jsx)(c.Heading, {
        className: y.tableTitle,
        variant: "heading-md/bold",
        color: "header-primary",
        children: (0, a.jsx)(k, {
          guildId: t.id,
          currentTier: E,
          availableSounds: _
        })
      }), (0, a.jsx)(G.default, {
        guild: t,
        numSounds: n.length,
        isOutOfSlots: 0 === _
      }), (0, a.jsxs)("div", {
        className: y.soundTable,
        children: [(0, a.jsxs)("div", {
          className: y.tableHeaders,
          children: [(0, a.jsx)(H, {
            children: b.default.Messages.EMOJI
          }), (0, a.jsx)(H, {
            children: b.default.Messages.GUILD_SETTINGS_SOUND_NAME_COLUMN
          }), (0, a.jsx)(H, {
            children: b.default.Messages.GUILD_SETTINGS_SOUND_UPLOADER_COLUMN
          })]
        }), n.map(e => (0, a.jsx)(W, {
          sound: e,
          isPlaying: !1,
          guild: t,
          onPlaySound: C
        }, e.soundId))]
      })]
    })]
  })
}

function W(e) {
  let {
    sound: t,
    isPlaying: n,
    onPlaySound: r,
    guild: o
  } = e, {
    soundId: u,
    name: I,
    user: T,
    userId: m,
    emojiId: N,
    emojiName: g
  } = t, C = (0, d.useStateFromStores)([R.default], () => null != T ? T : R.default.getUser(m), [m, T]), {
    canManageGuildExpression: x
  } = (0, S.useManageResourcePermissions)(o), D = l.useMemo(() => x(t), [t, x]), v = null != N || null != g, [j, G] = l.useState(!1);
  async function P() {
    if (!j) {
      G(!0);
      try {
        await (0, f.deleteSound)(o.id, u)
      } catch {
        G(!1)
      }
    }
  }
  l.useEffect(() => {
    null == C && e();
    async function e() {
      await (0, E.getUser)(m)
    }
  }, [C, m]);
  let B = l.useCallback(() => {
    null != C && (0, h.openUserProfileModal)({
      userId: C.id,
      guildId: o.id,
      analyticsLocation: {
        section: U.AnalyticsSections.GUILD_SETTINGS_SOUNDBOARD
      }
    })
  }, [C, o.id]);
  return (0, a.jsxs)("div", {
    className: i()(y.row, {
      [y.active]: n
    }),
    children: [v ? (0, a.jsx)(_.default, {
      emojiId: N,
      emojiName: g,
      className: y.emoji
    }) : (0, a.jsx)(O.default, {
      className: y.emoji
    }), (0, a.jsx)(c.Clickable, {
      onClick: () => {
        !j && r(t)
      },
      className: y.soundName,
      children: (0, a.jsxs)(c.Text, {
        variant: "text-sm/normal",
        className: y.soundName,
        children: [I, " ", (0, a.jsx)(A.default, {
          className: y.soundPreviewIcon
        })]
      })
    }), null != C && (0, a.jsxs)(c.Clickable, {
      className: y.uploader,
      onClick: B,
      children: [(0, a.jsx)(c.Avatar, {
        "aria-label": null == C ? void 0 : C.username,
        size: c.AvatarSizes.SIZE_24,
        className: y.uploaderAvatar,
        src: (0, M.getUserAvatarURL)(C, !1, 24)
      }), (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        lineClamp: 1,
        children: null == C ? void 0 : C.username
      })]
    }), D ? (0, a.jsxs)("div", {
      className: y.soundEditContainer,
      children: [(0, a.jsx)(c.Clickable, {
        className: y.soundUpdate,
        onClick: function(e) {
          e.stopPropagation(), (0, c.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([s.e("49237"), s.e("99387"), s.e("56035")]).then(s.bind(s, "758961"));
            return s => (0, a.jsx)(e, {
              ...s,
              guildId: o.id,
              existingSound: t
            })
          })
        },
        "aria-label": b.default.Messages.EDIT,
        children: (0, a.jsx)(p.default, {
          className: y.soundEditIcon
        })
      }), (0, a.jsx)(c.Clickable, {
        className: y.soundRemove,
        onClick: function(e) {
          e.stopPropagation(), (0, c.openModal)(e => (0, a.jsx)(c.ConfirmModal, {
            header: b.default.Messages.GUILD_SETTINGS_SOUNDBOARD_DELETE_SOUND_TITLE.format({
              soundName: I
            }),
            confirmText: b.default.Messages.DELETE,
            cancelText: b.default.Messages.CANCEL,
            onConfirm: P,
            ...e,
            children: (0, a.jsx)(c.Text, {
              variant: "text-md/normal",
              children: b.default.Messages.GUILD_SETTINGS_SOUNDBOARD_DELETE_SOUND_BODY.format({
                soundName: I
              })
            })
          }))
        },
        "aria-label": b.default.Messages.REMOVE,
        children: (0, a.jsx)(L.default, {
          className: y.soundEditIcon
        })
      })]
    }) : null]
  })
}