n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var a = n(330711),
    s = n(481060),
    r = n(410030),
    l = n(113434),
    o = n(710914),
    c = n(466836);
function d(e) {
    let { onSelectTab: t } = e,
        { quests: d, isFetchingCurrentQuests: u } = (0, l.bA)(l.e5.CLAIMED),
        _ = (0, r.ZP)();
    return 0 === d.length
        ? (0, i.jsxs)(s.EmptyState, {
              theme: _,
              children: [
                  (0, i.jsx)(s.EmptyStateImage, {
                      lightSrc: n(979770),
                      darkSrc: n(138715),
                      width: 415,
                      height: 200
                  }),
                  (0, i.jsx)(s.EmptyStateText, { note: a.Z.Messages.QUESTS_CLAIMED_QUEST_EMPTY_STATE.format({ onClick: () => t(l.e5.ALL) }) })
              ]
          })
        : (0, i.jsx)('div', {
              className: c.gridContainer,
              children: (0, i.jsx)(o.Z, {
                  quests: d,
                  isFetching: u
              })
          });
}
