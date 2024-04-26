"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
}), l("47120");
var a = l("735250"),
  n = l("470079"),
  s = l("658722"),
  i = l.n(s),
  o = l("392711"),
  r = l.n(o),
  u = l("990547"),
  c = l("442837"),
  d = l("952265"),
  f = l("481060"),
  m = l("100527"),
  p = l("906732"),
  C = l("213609"),
  v = l("709054"),
  h = l("435064"),
  g = l("39604"),
  S = l("680056"),
  x = l("10217"),
  E = l("410426"),
  L = l("207346"),
  I = l("356659"),
  N = l("739485");

function T(e) {
  let {
    channelId: t,
    onClose: s,
    transitionState: o
  } = e, [T, _] = n.useState(""), [M, A] = n.useState("descending"), [j, R] = n.useState(!0), [P, b] = n.useState(null), y = n.useDeferredValue(T), k = (0, c.useStateFromStores)([h.default], () => h.default.getClips()), D = (0, c.useStateFromStores)([h.default], () => h.default.getPendingClips()), w = (0, c.useStateFromStores)([h.default], () => h.default.getSettings().storageLocation), H = (0, c.useStateFromStoresArray)([h.default], () => h.default.getNewClipIds()), {
    analyticsLocations: V
  } = (0, p.default)(m.default.CLIPS_GALLERY), B = n.useMemo(() => [...D, ...k], [k, D]);
  (0, C.default)({
    type: u.ImpressionTypes.MODAL,
    name: u.ImpressionNames.CLIP_GALLERY_VIEWED,
    properties: {
      number_of_clips_loaded: B.length
    }
  }, {
    disableTrack: j
  }, [B.length, j]), n.useEffect(() => ((0, g.clearClipsSession)(), () => {
    (0, g.clearClipsSession)(), (0, g.clearNewClipIds)()
  }), []);
  let G = n.useMemo(() => r()(B).filter(e => {
    if ("" === y.trim()) return !0;
    let t = y.toLowerCase();
    return null != e.name && "" !== e.name && i()(t, e.name.toLowerCase()) || i()(t, e.applicationName.toLowerCase())
  }).sort((e, t) => "ascending" === M ? v.default.compare(e.id, t.id) : "descending" === M ? v.default.compare(t.id, e.id) : 0).chunk(3).value(), [B, y, M]);
  n.useEffect(() => {
    (async function e() {
      R(!0);
      try {
        await g.loadClipsDirectory(w)
      } finally {
        R(!1)
      }
    })()
  }, [w]);
  let Y = n.useCallback(e => {
      (0, f.openModalLazy)(async () => {
        let {
          default: n
        } = await Promise.all([l.e("99387"), l.e("98920")]).then(l.bind(l, "22989"));
        return l => (0, a.jsx)(n, {
          ...l,
          channelId: t,
          clip: e
        })
      }, {
        modalKey: I.CLIPS_EDIT_MODAL_KEY
      })
    }, [t]),
    {
      onShareClick: O
    } = (0, S.default)({
      channelId: t,
      setExporting: b
    }),
    F = n.useCallback((e, t) => {
      (0, f.openModalLazy)(async () => {
        let {
          default: n
        } = await Promise.all([l.e("99387"), l.e("15915")]).then(l.bind(l, "799677"));
        return l => (0, a.jsx)(n, {
          clip: e,
          ...l,
          onBeforeDelete: t,
          onAfterDelete: () => l.onClose()
        })
      })
    }, []),
    z = n.useCallback(e => {
      let {
        row: t
      } = e, l = G[t];
      return (0, a.jsx)("div", {
        className: N.clipsRow,
        children: l.map(e => {
          let t = 0 === e.length;
          return (0, a.jsx)(x.default, {
            actionsDisabled: null != P || t,
            exporting: P === e.id,
            isNew: H.includes(e.id),
            onDelete: F,
            onEdit: Y,
            onShare: e => O({
              clip: e,
              onShareComplete: () => d.closeModal(I.CLIPS_GALLERY_MODAL_KEY)
            }),
            clip: e
          }, e.id)
        })
      }, "clips-gallery-".concat(t))
    }, [G, H, P, O, F, Y]),
    U = j || 0 !== G.length ? j ? (0, a.jsx)("div", {
      className: N.spinnerContainer,
      children: (0, a.jsx)(f.Spinner, {})
    }) : (0, a.jsx)(f.List, {
      className: N.clipGrid,
      sections: [G.length],
      sectionHeight: 0,
      rowHeight: 328.25,
      renderRow: z
    }) : (0, a.jsx)(E.default, {
      isEmptyBecauseQuery: B.length > 0,
      closePopout: s
    });
  return (0, a.jsx)(f.ModalRoot, {
    size: f.ModalSize.DYNAMIC,
    transitionState: o,
    className: N.root,
    children: (0, a.jsxs)(p.AnalyticsLocationProvider, {
      value: V,
      children: [(0, a.jsx)(L.default, {
        onClose: s,
        filterQuery: T,
        setFilterQuery: _,
        sortOrder: M,
        setSortOrder: A
      }), U]
    })
  })
}